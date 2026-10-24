# Sampling profile

Collected 75,888 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Standard library | 92.9% |  70,486 |
| Ours             |  7.1% |   5,402 |

## Call tree

Call paths to the hottest functions.

```
├── 75,444 samples (99.4%) [[via 4 frames]] doExec  java.util.concurrent.ForkJoinTask
│   ├── 64,632 samples (85.2%) [[via 5–7 frames]] exec  java.util.concurrent.RecursiveTask
│   │   └── 64,632 samples (85.2%) compute  org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│   │       ├── 46,771 samples (61.6%) combineResults  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   │       │   └── 46,771 samples (61.6%) [[via 1 frame]] merge  org.renaissance.jdk.concurrent.JavaKMeans
│   │       │       └── 46,320 samples (61.0%) [[via 5 frames]] lambda$merge$6  org.renaissance.jdk.concurrent.JavaKMeans
│   │       │           ├── 34,539 samples (45.5%) addAll  java.util.ArrayList
│   │       │           │   ├── 22,234 samples (29.3%) grow
│   │       │           │   │   └── 22,234 samples (29.3%) copyOf  (90.7% self in 1,873 call stacks)  java.util.Arrays
│   │       │           │   └── 12,305 samples (16.2%) toArray
│   │       │           │       └── 12,305 samples (16.2%) copyOf  java.util.Arrays
│   │       │           └── 11,591 samples (15.3%) [[via 2 frames]] copyOf  java.util.Arrays
│   │       ├── 16,898 samples (22.3%) computeDirectly  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   │       │   ├── 13,398 samples (17.7%) [[via 1 frame]] collectClusters  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   │       │   │   ├── 12,641 samples (16.7%) add  java.util.ArrayList
│   │       │   │   │   └── 12,641 samples (16.7%) [[via 1 frame]] grow  (self 0.6%)  java.util.ArrayList
│   │       │   │   │       └── 12,194 samples (16.1%) [[via 1 frame]] copyOf  java.util.Arrays
│   │       │   │   └── 598 samples (0.8%) computeIfAbsent  java.util.HashMap
│   │       │   │       ├── 282 samples (0.4%) newNode
│   │       │   │       ├── 195 samples (0.3%) apply  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940
│   │       │   │       │   └── 195 samples (0.3%) lambda$collectClusters$0  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   │       │   │       └── 121 samples (0.2%) resize
│   │       │   └── 3,500 samples (4.6%) [[via 1 frame]] findNearestCentroid  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   │       ├── 310 samples (0.4%) createSubtask  org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│   │       ├── 221 samples (0.3%) createSubtask  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   │       ├── 197 samples (0.3%) computeDirectly  org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│   │       │   └── 197 samples (0.3%) [[via 1 frame]] vectorSum  org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│   │       └── 196 samples (0.3%) combineResults  org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│   │           └── 196 samples (0.3%) [[via 1 frame]] add  org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│   └── 10,435 samples (13.8%) [[via 10 frames]] lambda$merge$6  org.renaissance.jdk.concurrent.JavaKMeans
│       └── 10,419 samples (13.7%) 2 more branches, largest addAll (10.2%)  java.util.ArrayList and <init> (3.5%)
└── 372 samples (0.5%) [[via 21 frames]] evaluate  java.util.stream.AbstractPipeline
    ├── 152 samples (0.2%) [[via 7 frames]] lambda$generateData$5  org.renaissance.jdk.concurrent.JavaKMeans
    │   ├── 75 samples (0.1%) range  java.util.stream.IntStream
    │   │   └── 58 samples (0.1%) intStream  java.util.stream.StreamSupport
    │   └── 55 samples (0.1%) mapToObj  java.util.stream.IntPipeline
    ├── 138 samples (0.2%) [[via 18 frames]] valueOf  java.lang.Double
    └── 58 samples (0.1%) [[via 11 frames]] makeNodeBuilder  java.util.stream.ReferencePipeline
        └── 58 samples (0.1%) builder  java.util.stream.Nodes
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                   | Location                                                   |
| ----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 90.7% |  68,855 | `copyOf`                   | `java.util.Arrays`                                         |
|  4.6% |   3,527 | `findNearestCentroid`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.7% |     540 | `newNode`                  | `java.util.HashMap`                                        |
|  0.6% |     449 | `grow`                     | `java.util.ArrayList`                                      |
|  0.5% |     379 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.4% |     327 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |     218 | `resize`                   | `java.util.HashMap`                                        |
|  0.3% |     206 | `lambda$merge$6`           | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.3% |     200 | `vectorSum`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.3% |     198 | `add`                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.3% |     196 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.2% |     160 | `collectClusters`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.2% |     146 | `valueOf`                  | `java.lang.Double`                                         |
|  0.2% |     131 | `merge`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.1% |      58 | `intStream`                | `java.util.stream.StreamSupport`                           |
|  0.1% |      55 | `mapToObj`                 | `java.util.stream.IntPipeline`                             |
| <0.1% |      33 | `lambda$generateData$4`    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |      25 | `builder`                  | `java.util.stream.Nodes`                                   |
| <0.1% |      23 | `entrySet`                 | `java.util.HashMap`                                        |
| <0.1% |      22 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Standard library

|     % | Samples | Function           | Location                              |
| ----: | ------: | ------------------ | ------------------------------------- |
| 90.7% |  68,855 | `copyOf`           | `java.util.Arrays`                    |
|  0.7% |     540 | `newNode`          | `java.util.HashMap`                   |
|  0.6% |     449 | `grow`             | `java.util.ArrayList`                 |
|  0.3% |     218 | `resize`           | `java.util.HashMap`                   |
|  0.2% |     146 | `valueOf`          | `java.lang.Double`                    |
|  0.1% |      58 | `intStream`        | `java.util.stream.StreamSupport`      |
|  0.1% |      55 | `mapToObj`         | `java.util.stream.IntPipeline`        |
| <0.1% |      25 | `builder`          | `java.util.stream.Nodes`              |
| <0.1% |      23 | `entrySet`         | `java.util.HashMap`                   |
| <0.1% |      20 | `opWrapSink`       | `java.util.stream.IntPipeline$1`      |
| <0.1% |      19 | `allocateInstance` | `java.lang.invoke.DirectMethodHandle` |
| <0.1% |      17 | `range`            | `java.util.stream.IntStream`          |
| <0.1% |      12 | `<init>`           | `java.util.zip.InflaterInputStream`   |
| <0.1% |      11 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`   |
| <0.1% |       8 | `allocateInstance` | `jdk.internal.misc.Unsafe`            |
| <0.1% |       3 | `spliterator`      | `java.util.Spliterators`              |
| <0.1% |       3 | `doubleStream`     | `java.util.stream.StreamSupport`      |
| <0.1% |       2 | `newLinkedHashMap` | `java.util.LinkedHashMap`             |
| <0.1% |       2 | `<init>`           | `java.io.ByteArrayOutputStream`       |
| <0.1% |       2 | `opWrapSink`       | `java.util.stream.DoublePipeline$1`   |

##### Ours

|     % | Samples | Function                   | Location                                                   |
| ----: | ------: | -------------------------- | ---------------------------------------------------------- |
|  4.6% |   3,527 | `findNearestCentroid`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.5% |     379 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.4% |     327 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |     206 | `lambda$merge$6`           | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.3% |     200 | `vectorSum`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.3% |     198 | `add`                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.3% |     196 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.2% |     160 | `collectClusters`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.2% |     131 | `merge`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |      33 | `lambda$generateData$4`    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |      22 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |      10 | `computeClusterAverages`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |       5 | `lambda$run$0`             | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |       4 | `div`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |       3 | `lambda$boxed$0`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |       1 | `collectGarbage`           | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `copyOf` (`java.util.Arrays`)

|     % | Samples | Caller                   | Location                          |
| ----: | ------: | ------------------------ | --------------------------------- |
| 57.1% |  39,323 | `grow`                   | `java.util.ArrayList`             |
| 42.8% |  29,472 | `toArray`                | `java.util.ArrayList`             |
| <0.1% |      33 | `getBytes`               | `jdk.internal.loader.Resource`    |
| <0.1% |      26 | `copyOf`                 | `java.util.Arrays`                |
| <0.1% |       1 | `ensureCapacityInternal` | `java.lang.AbstractStringBuilder` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |   3,527 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `newNode` (`java.util.HashMap`)

|     % | Samples | Caller            | Location            |
| ----: | ------: | ----------------- | ------------------- |
| 52.2% |     282 | `computeIfAbsent` | `java.util.HashMap` |
| 47.2% |     255 | `putVal`          | `java.util.HashMap` |
|  0.6% |       3 | `merge`           | `java.util.HashMap` |

##### `grow` (`java.util.ArrayList`)

|      % | Samples | Caller | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |     449 | `grow` | `java.util.ArrayList` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |     379 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |     327 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `resize` (`java.util.HashMap`)

|     % | Samples | Caller            | Location            |
| ----: | ------: | ----------------- | ------------------- |
| 55.5% |     121 | `computeIfAbsent` | `java.util.HashMap` |
| 44.0% |      96 | `putVal`          | `java.util.HashMap` |
|  0.5% |       1 | `merge`           | `java.util.HashMap` |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |     206 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller            | Location                                                  |
| -----: | ------: | ----------------- | --------------------------------------------------------- |
| 100.0% |     200 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `add` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller           | Location                                                  |
| -----: | ------: | ---------------- | --------------------------------------------------------- |
| 100.0% |     198 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `lambda$collectClusters$0` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller  | Location                                                                              |
| -----: | ------: | ------- | ------------------------------------------------------------------------------------- |
| 100.0% |     196 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     160 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `valueOf` (`java.lang.Double`)

|     % | Samples | Caller                  | Location                                                     |
| ----: | ------: | ----------------------- | ------------------------------------------------------------ |
| 94.5% |     138 | `lambda$generateData$3` | `org.renaissance.jdk.concurrent.JavaKMeans`                  |
|  5.5% |       8 | `apply`                 | `java.util.stream.DoublePipeline$$Lambda.0x00000070011c17c0` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Caller           | Location                                                   |
| ----: | ------: | ---------------- | ---------------------------------------------------------- |
| 97.7% |     128 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  2.3% |       3 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `intStream` (`java.util.stream.StreamSupport`)

|      % | Samples | Caller  | Location                     |
| -----: | ------: | ------- | ---------------------------- |
| 100.0% |      58 | `range` | `java.util.stream.IntStream` |

##### `mapToObj` (`java.util.stream.IntPipeline`)

|      % | Samples | Caller     | Location                       |
| -----: | ------: | ---------- | ------------------------------ |
| 100.0% |      55 | `mapToObj` | `java.util.stream.IntPipeline` |

##### `lambda$generateData$4` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |      33 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a25c0` |

##### `builder` (`java.util.stream.Nodes`)

|      % | Samples | Caller            | Location                             |
| -----: | ------: | ----------------- | ------------------------------------ |
| 100.0% |      25 | `makeNodeBuilder` | `java.util.stream.ReferencePipeline` |

##### `entrySet` (`java.util.HashMap`)

|      % | Samples | Caller          | Location            |
| -----: | ------: | --------------- | ------------------- |
| 100.0% |      23 | `putMapEntries` | `java.util.HashMap` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |      22 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `opWrapSink` (`java.util.stream.IntPipeline$1`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |      20 | `wrapSink` | `java.util.stream.AbstractPipeline` |

##### `allocateInstance` (`java.lang.invoke.DirectMethodHandle`)

|      % | Samples | Caller             | Location                                             |
| -----: | ------: | ------------------ | ---------------------------------------------------- |
| 100.0% |      19 | `newInvokeSpecial` | `java.lang.invoke.LambdaForm$DMH.0x00000070011a4400` |

##### `range` (`java.util.stream.IntStream`)

|      % | Samples | Caller                  | Location                                    |
| -----: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% |      17 | `lambda$generateData$5` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `<init>` (`java.util.zip.InflaterInputStream`)

|      % | Samples | Caller   | Location                                           |
| -----: | ------: | -------- | -------------------------------------------------- |
| 100.0% |      12 | `<init>` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |      11 | `join` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller            | Location                                               |
| -----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% |      10 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `allocateInstance` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Caller             | Location                              |
| -----: | ------: | ------------------ | ------------------------------------- |
| 100.0% |       8 | `allocateInstance` | `java.lang.invoke.DirectMethodHandle` |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller | Location                                                               |
| -----: | ------: | ------ | ---------------------------------------------------------------------- |
| 100.0% |       5 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `div` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       4 | `average` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `spliterator` (`java.util.Spliterators`)

|      % | Samples | Caller        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |       3 | `spliterator` | `java.util.Arrays` |

##### `doubleStream` (`java.util.stream.StreamSupport`)

|      % | Samples | Caller   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |       3 | `stream` | `java.util.Arrays` |

##### `lambda$boxed$0` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller  | Location                                                                          |
| -----: | ------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% |       3 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x00000070011a7540` |

##### `newLinkedHashMap` (`java.util.LinkedHashMap`)

|      % | Samples | Caller   | Location                   |
| -----: | ------: | -------- | -------------------------- |
| 100.0% |       2 | `<init>` | `java.util.jar.Attributes` |

##### `<init>` (`java.io.ByteArrayOutputStream`)

|      % | Samples | Caller   | Location                        |
| -----: | ------: | -------- | ------------------------------- |
| 100.0% |       2 | `<init>` | `java.io.ByteArrayOutputStream` |

##### `opWrapSink` (`java.util.stream.DoublePipeline$1`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |       2 | `wrapSink` | `java.util.stream.AbstractPipeline` |

##### `collectGarbage` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

|      % | Samples | Caller                | Location                                                 |
| -----: | ------: | --------------------- | -------------------------------------------------------- |
| 100.0% |       1 | `afterOperationSetUp` | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function           | Location                                                               |
| ----: | ------: | ------------------ | ---------------------------------------------------------------------- |
| 99.4% |  75,444 | `doExec`           | `java.util.concurrent.ForkJoinTask`                                    |
| 99.4% |  75,444 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| 99.4% |  75,444 | `scan`             | `java.util.concurrent.ForkJoinPool`                                    |
| 99.4% |  75,444 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                                    |
| 99.4% |  75,444 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`                            |
| 99.4% |  75,439 | `compute`          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 99.4% |  75,439 | `exec`             | `java.util.concurrent.RecursiveTask`                                   |
| 90.7% |  68,855 | `copyOf`           | `java.util.Arrays`                                                     |
| 79.6% |  60,401 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                                    |
| 79.6% |  60,401 | `join`             | `java.util.concurrent.ForkJoinTask`                                    |
| 78.7% |  59,701 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| 75.5% |  57,258 | `merge`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 75.4% |  57,247 | `combineResults`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 74.8% |  56,759 | `merge`            | `java.util.HashMap`                                                    |
| 74.8% |  56,759 | `lambda$merge$7`   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 74.8% |  56,759 | `accept`           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90` |
| 74.8% |  56,759 | `forEach`          | `java.util.HashMap`                                                    |
| 74.8% |  56,755 | `lambda$merge$6`   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 74.8% |  56,755 | `apply`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000` |
| 55.7% |  42,303 | `addAll`           | `java.util.ArrayList`                                                  |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Standard library

|     % | Samples | Function           | Location                                            |
| ----: | ------: | ------------------ | --------------------------------------------------- |
| 99.4% |  75,444 | `doExec`           | `java.util.concurrent.ForkJoinTask`                 |
| 99.4% |  75,444 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 99.4% |  75,444 | `scan`             | `java.util.concurrent.ForkJoinPool`                 |
| 99.4% |  75,444 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                 |
| 99.4% |  75,444 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`         |
| 99.4% |  75,439 | `exec`             | `java.util.concurrent.RecursiveTask`                |
| 90.7% |  68,855 | `copyOf`           | `java.util.Arrays`                                  |
| 79.6% |  60,401 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                 |
| 79.6% |  60,401 | `join`             | `java.util.concurrent.ForkJoinTask`                 |
| 78.7% |  59,701 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 74.8% |  56,759 | `merge`            | `java.util.HashMap`                                 |
| 74.8% |  56,759 | `forEach`          | `java.util.HashMap`                                 |
| 55.7% |  42,303 | `addAll`           | `java.util.ArrayList`                               |
| 52.4% |  39,781 | `grow`             | `java.util.ArrayList`                               |
| 38.9% |  29,489 | `toArray`          | `java.util.ArrayList`                               |
| 19.5% |  14,781 | `invoke`           | `java.util.concurrent.ForkJoinTask`                 |
| 18.9% |  14,313 | `exec`             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| 18.8% |  14,246 | `<init>`           | `java.util.ArrayList`                               |
| 16.8% |  12,721 | `add`              | `java.util.ArrayList`                               |
| 14.5% |  11,003 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`                 |

##### Ours

|     % | Samples | Function                    | Location                                                               |
| ----: | ------: | --------------------------- | ---------------------------------------------------------------------- |
| 99.4% |  75,439 | `compute`                   | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 75.5% |  57,258 | `merge`                     | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 75.4% |  57,247 | `combineResults`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 74.8% |  56,759 | `lambda$merge$7`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 74.8% |  56,759 | `accept`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90` |
| 74.8% |  56,755 | `lambda$merge$6`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 74.8% |  56,755 | `apply`                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000` |
| 22.4% |  17,003 | `computeDirectly`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 18.9% |  14,313 | `lambda$run$0`              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 18.9% |  14,313 | `call`                      | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |
| 17.8% |  13,476 | `collectClusters`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  4.6% |   3,527 | `findNearestCentroid`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  0.7% |     556 | `computeClusterAverages`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  0.7% |     556 | `computeDirectly`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  0.7% |     519 | `average`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  0.6% |     443 | `launchHarnessClass`        | `org.renaissance.core.Launcher`                                        |
|  0.6% |     443 | `main`                      | `org.renaissance.core.Launcher`                                        |
|  0.6% |     442 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher`                                        |
|  0.6% |     441 | `main`                      | `org.renaissance.harness.RenaissanceSuite`                             |
|  0.6% |     434 | `main`                      | `org.renaissance.harness.RenaissanceSuite$`                            |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `doExec` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller             | Location                                      |
| -----: | ------: | ------------------ | --------------------------------------------- |
| 100.0% |  75,444 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  79.1% |  59,701 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  19.6% |  14,781 | `invoke`           | `java.util.concurrent.ForkJoinTask`           |
|  14.6% |  11,003 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`           |

##### `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |  75,444 | `scan` | `java.util.concurrent.ForkJoinPool` |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |  75,444 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |  75,444 | `run`  | `java.util.concurrent.ForkJoinWorkerThread` |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller | Location                             |
| -----: | ------: | ------ | ------------------------------------ |
| 100.0% |  75,439 | `exec` | `java.util.concurrent.RecursiveTask` |

##### `exec` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |  75,439 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `copyOf` (`java.util.Arrays`)

|     % | Samples | Caller                   | Location                          |
| ----: | ------: | ------------------------ | --------------------------------- |
| 57.1% |  39,332 | `grow`                   | `java.util.ArrayList`             |
| 42.8% |  29,489 | `toArray`                | `java.util.ArrayList`             |
| <0.1% |      33 | `getBytes`               | `jdk.internal.loader.Resource`    |
| <0.1% |      26 | `copyOf`                 | `java.util.Arrays`                |
| <0.1% |       1 | `ensureCapacityInternal` | `java.lang.AbstractStringBuilder` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |  60,401 | `join` | `java.util.concurrent.ForkJoinTask` |

##### `join` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |  60,401 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |  59,701 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller           | Location                                                   |
| -----: | ------: | ---------------- | ---------------------------------------------------------- |
| 100.0% |  57,247 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  <0.1% |      11 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller           | Location                                                   |
| -----: | ------: | ---------------- | ---------------------------------------------------------- |
| 100.0% |  57,247 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 100.0% |  57,247 | `compute`        | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `merge` (`java.util.HashMap`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |  56,759 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |  56,759 | `accept` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`)

|      % | Samples | Caller    | Location            |
| -----: | ------: | --------- | ------------------- |
| 100.0% |  56,759 | `forEach` | `java.util.HashMap` |

##### `forEach` (`java.util.HashMap`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |  56,759 | `merge` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |  56,755 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000` |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`)

|      % | Samples | Caller  | Location            |
| -----: | ------: | ------- | ------------------- |
| 100.0% |  56,755 | `merge` | `java.util.HashMap` |

##### `addAll` (`java.util.ArrayList`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |  42,303 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `grow` (`java.util.ArrayList`)

|     % | Samples | Caller   | Location              |
| ----: | ------: | -------- | --------------------- |
| 68.0% |  27,060 | `addAll` | `java.util.ArrayList` |
| 32.0% |  12,721 | `grow`   | `java.util.ArrayList` |
| 32.0% |  12,721 | `add`    | `java.util.ArrayList` |

##### `toArray` (`java.util.ArrayList`)

|     % | Samples | Caller   | Location              |
| ----: | ------: | -------- | --------------------- |
| 51.7% |  15,243 | `addAll` | `java.util.ArrayList` |
| 48.3% |  14,246 | `<init>` | `java.util.ArrayList` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |  17,003 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 100.0% |  17,003 | `compute`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `invoke` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Caller         | Location                                               |
| ----: | ------: | -------------- | ------------------------------------------------------ |
| 96.8% |  14,308 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
|  3.5% |     515 | `average`      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |  14,313 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller | Location                                                               |
| -----: | ------: | ------ | ---------------------------------------------------------------------- |
| 100.0% |  14,313 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`)

|      % | Samples | Caller | Location                                            |
| -----: | ------: | ------ | --------------------------------------------------- |
| 100.0% |  14,313 | `exec` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `<init>` (`java.util.ArrayList`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |  14,246 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |  13,476 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `add` (`java.util.ArrayList`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |  12,721 | `add`             | `java.util.ArrayList`                                      |
| 100.0% |  12,717 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  <0.1% |       4 | `accept`          | `java.util.stream.Collectors$$Lambda.0x000000700106fdf8`   |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |  11,003 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |   3,527 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller            | Location                                               |
| -----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% |     556 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller            | Location                                               |
| -----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% |     556 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     556 | `compute`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller                   | Location                                               |
| -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% |     519 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `launchHarnessClass` (`org.renaissance.core.Launcher`)

|      % | Samples | Caller | Location                        |
| -----: | ------: | ------ | ------------------------------- |
| 100.0% |     443 | `main` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass` (`org.renaissance.core.Launcher`)

|      % | Samples | Caller               | Location                        |
| -----: | ------: | -------------------- | ------------------------------- |
| 100.0% |     442 | `launchHarnessClass` | `org.renaissance.core.Launcher` |

##### `main` (`org.renaissance.harness.RenaissanceSuite`)

|      % | Samples | Caller         | Location                                             |
| -----: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% |     441 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |

##### `main` (`org.renaissance.harness.RenaissanceSuite$`)

|      % | Samples | Caller | Location                                   |
| -----: | ------: | ------ | ------------------------------------------ |
| 100.0% |     434 | `main` | `org.renaissance.harness.RenaissanceSuite` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `doExec` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee | Location                                            |
| -----: | ------: | ------ | --------------------------------------------------- |
| 100.0% |  75,439 | `exec` | `java.util.concurrent.RecursiveTask`                |
|  19.0% |  14,313 | `exec` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |  75,444 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Callee         | Location                                      |
| -----: | ------: | -------------- | --------------------------------------------- |
| 100.0% |  75,444 | `topLevelExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Callee | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |  75,444 | `scan` | `java.util.concurrent.ForkJoinPool` |

##### `run` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |  75,444 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 80.1% |  60,401 | `join`            | `java.util.concurrent.ForkJoinTask`                        |
| 75.9% |  57,247 | `combineResults`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 22.5% |  17,003 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.7% |     556 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  0.5% |     379 | `createSubtask`   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `exec` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Callee    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |  75,439 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `copyOf` (`java.util.Arrays`)

|     % | Samples | Callee   | Location           |
| ----: | ------: | -------- | ------------------ |
| <0.1% |      26 | `copyOf` | `java.util.Arrays` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee             | Location                                      |
| ----: | ------: | ------------------ | --------------------------------------------- |
| 98.8% |  59,701 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 18.2% |  11,003 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`           |

##### `join` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |  60,401 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |  59,701 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee    | Location            |
| ----: | ------: | --------- | ------------------- |
| 99.1% |  56,759 | `forEach` | `java.util.HashMap` |
|  0.6% |     368 | `<init>`  | `java.util.HashMap` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee           | Location                                                   |
| -----: | ------: | ---------------- | ---------------------------------------------------------- |
| 100.0% |  57,247 | `merge`          | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| 100.0% |  57,247 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge` (`java.util.HashMap`)

|      % | Samples | Callee    | Location                                                               |
| -----: | ------: | --------- | ---------------------------------------------------------------------- |
| 100.0% |  56,755 | `apply`   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000` |
|  <0.1% |       3 | `newNode` | `java.util.HashMap`                                                    |
|  <0.1% |       1 | `resize`  | `java.util.HashMap`                                                    |

##### `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee  | Location            |
| -----: | ------: | ------- | ------------------- |
| 100.0% |  56,759 | `merge` | `java.util.HashMap` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`)

|      % | Samples | Callee           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |  56,759 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach` (`java.util.HashMap`)

|      % | Samples | Callee   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |  56,759 | `accept` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90` |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee   | Location              |
| ----: | ------: | -------- | --------------------- |
| 74.5% |  42,303 | `addAll` | `java.util.ArrayList` |
| 25.1% |  14,246 | `<init>` | `java.util.ArrayList` |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`)

|      % | Samples | Callee           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |  56,755 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `addAll` (`java.util.ArrayList`)

|     % | Samples | Callee    | Location              |
| ----: | ------: | --------- | --------------------- |
| 64.0% |  27,060 | `grow`    | `java.util.ArrayList` |
| 36.0% |  15,243 | `toArray` | `java.util.ArrayList` |

##### `grow` (`java.util.ArrayList`)

|     % | Samples | Callee   | Location              |
| ----: | ------: | -------- | --------------------- |
| 98.9% |  39,332 | `copyOf` | `java.util.Arrays`    |
| 32.0% |  12,721 | `grow`   | `java.util.ArrayList` |

##### `toArray` (`java.util.ArrayList`)

|      % | Samples | Callee   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |  29,489 | `copyOf` | `java.util.Arrays` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |  17,003 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  79.3% |  13,476 | `collectClusters`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  20.7% |   3,527 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `invoke` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |  14,781 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Callee | Location                                                               |
| -----: | ------: | ------ | ---------------------------------------------------------------------- |
| 100.0% |  14,313 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |  14,308 | `invoke` | `java.util.concurrent.ForkJoinTask` |

##### `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`)

|      % | Samples | Callee         | Location                                    |
| -----: | ------: | -------------- | ------------------------------------------- |
| 100.0% |  14,313 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `<init>` (`java.util.ArrayList`)

|      % | Samples | Callee    | Location              |
| -----: | ------: | --------- | --------------------- |
| 100.0% |  14,246 | `toArray` | `java.util.ArrayList` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee            | Location              |
| ----: | ------: | ----------------- | --------------------- |
| 94.4% |  12,717 | `add`             | `java.util.ArrayList` |
|  4.4% |     599 | `computeIfAbsent` | `java.util.HashMap`   |

##### `add` (`java.util.ArrayList`)

|      % | Samples | Callee | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |  12,721 | `grow` | `java.util.ArrayList` |
| 100.0% |  12,721 | `add`  | `java.util.ArrayList` |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |  11,003 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee    | Location                                               |
| ----: | ------: | --------- | ------------------------------------------------------ |
| 93.3% |     519 | `average` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  3.6% |      20 | `boxed`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  1.3% |       7 | `put`     | `java.util.HashMap`                                    |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                   | Location                                               |
| -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% |     556 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     556 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee   | Location                                               |
| ----: | ------: | -------- | ------------------------------------------------------ |
| 99.2% |     515 | `invoke` | `java.util.concurrent.ForkJoinTask`                    |
|  0.8% |       4 | `div`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `launchHarnessClass` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee                      | Location                        |
| ----: | ------: | --------------------------- | ------------------------------- |
| 99.8% |     442 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher` |
|  0.2% |       1 | `createScratchRoot`         | `org.renaissance.core.Launcher` |

##### `main` (`org.renaissance.core.Launcher`)

|      % | Samples | Callee               | Location                        |
| -----: | ------: | -------------------- | ------------------------------- |
| 100.0% |     443 | `launchHarnessClass` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee                       | Location                            |
| ----: | ------: | ---------------------------- | ----------------------------------- |
| 99.8% |     441 | `invoke`                     | `java.lang.reflect.Method`          |
|  0.2% |       1 | `createClassLoaderForModule` | `org.renaissance.core.ModuleLoader` |

##### `main` (`org.renaissance.harness.RenaissanceSuite`)

|     % | Samples | Callee      | Location                                    |
| ----: | ------: | ----------- | ------------------------------------------- |
| 98.4% |     434 | `main`      | `org.renaissance.harness.RenaissanceSuite$` |
|  1.6% |       7 | `loadClass` | `java.lang.ClassLoader`                     |

##### `main` (`org.renaissance.harness.RenaissanceSuite$`)

|     % | Samples | Callee          | Location                                    |
| ----: | ------: | --------------- | ------------------------------------------- |
| 92.9% |     403 | `runBenchmarks` | `org.renaissance.harness.RenaissanceSuite$` |
|  2.3% |      10 | `<init>`        | `org.renaissance.harness.ConfigParser`      |
|  1.6% |       7 | `parse`         | `org.renaissance.harness.ConfigParser`      |
|  1.4% |       6 | `loadClass`     | `java.lang.ClassLoader`                     |
|  0.9% |       4 | `<clinit>`      | `scala.Predef$`                             |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.4% |   4,826 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3.9% |   2,938 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3.8% |   2,898 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3.5% |   2,655 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `<init>` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3.1% |   2,331 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3.0% |   2,285 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `grow` ← `add` ← `add` ← `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                         |
| 2.8% |   2,131 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.6% |   1,966 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.5% |   1,900 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.4% |   1,791 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2.3% |   1,766 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.3% |   1,715 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `grow` ← `add` ← `add` ← `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) |
| 2.1% |   1,588 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `grow` ← `add` ← `add` ← `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.0% |   1,494 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `<init>` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.8% |   1,375 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                  |
| 1.8% |   1,345 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.6% |   1,206 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `<init>` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.5% |   1,173 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.5% |   1,166 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.5% |   1,159 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `<init>` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

# Sampling profile

Collected 75,385 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Standard library | 93.2% |  70,236 |
| Ours             |  6.8% |   5,149 |

## Call tree

Call paths to the hottest functions.

```
├── 75,003 samples (99.5%) [[via 4 frames]] doExec  java.util.concurrent.ForkJoinTask
│   ├── 64,370 samples (85.4%) [[via 5–6 frames]] exec  java.util.concurrent.RecursiveTask
│   │   └── 64,370 samples (85.4%) compute  org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│   │       ├── 47,300 samples (62.7%) combineResults  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   │       │   └── 47,300 samples (62.7%) [[via 1 frame]] merge  org.renaissance.jdk.concurrent.JavaKMeans
│   │       │       └── 46,825 samples (62.1%) [[via 5 frames]] lambda$merge$6  org.renaissance.jdk.concurrent.JavaKMeans
│   │       │           ├── 34,925 samples (46.3%) addAll  java.util.ArrayList
│   │       │           │   ├── 22,778 samples (30.2%) grow
│   │       │           │   │   └── 22,778 samples (30.2%) copyOf  (91.1% self in 1,928 call stacks)  java.util.Arrays
│   │       │           │   └── 12,147 samples (16.1%) toArray
│   │       │           │       └── 12,147 samples (16.1%) copyOf  java.util.Arrays
│   │       │           └── 11,675 samples (15.5%) <init>  java.util.ArrayList
│   │       │               └── 11,675 samples (15.5%) 1 more branch, toArray
│   │       ├── 16,343 samples (21.7%) computeDirectly  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   │       │   ├── 12,930 samples (17.2%) [[via 1 frame]] collectClusters  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   │       │   │   ├── 12,121 samples (16.1%) add  java.util.ArrayList
│   │       │   │   │   └── 12,121 samples (16.1%) [[via 1 frame]] grow  (self 0.6%)  java.util.ArrayList
│   │       │   │   │       └── 11,681 samples (15.5%) [[via 1 frame]] copyOf  java.util.Arrays
│   │       │   │   └── 626 samples (0.8%) computeIfAbsent  java.util.HashMap
│   │       │   │       ├── 279 samples (0.4%) newNode
│   │       │   │       ├── 210 samples (0.3%) apply  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000801186b38
│   │       │   │       │   └── 210 samples (0.3%) lambda$collectClusters$0  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   │       │   │       └── 137 samples (0.2%) resize
│   │       │   └── 3,413 samples (4.5%) [[via 1 frame]] findNearestCentroid  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   │       ├── 217 samples (0.3%) createSubtask  org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│   │       ├── 177 samples (0.2%) createSubtask  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   │       ├── 172 samples (0.2%) computeDirectly  org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│   │       │   └── 172 samples (0.2%) [[via 1 frame]] vectorSum  org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│   │       └── 141 samples (0.2%) combineResults  org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│   │           └── 141 samples (0.2%) [[via 1 frame]] add  org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│   └── 10,633 samples (14.1%) 2 more branches, largest exec (14.1%)  java.util.concurrent.RecursiveTask
└── 328 samples (0.4%) [[via 21 frames]] evaluate  java.util.stream.AbstractPipeline
    ├── 128 samples (0.2%) [[via 7 frames]] lambda$generateData$5  org.renaissance.jdk.concurrent.JavaKMeans
    │   ├── 69 samples (0.1%) range  java.util.stream.IntStream
    │   │   └── 44 samples (0.1%) intStream  java.util.stream.StreamSupport
    │   └── 44 samples (0.1%) mapToObj  java.util.stream.IntPipeline
    ├── 116 samples (0.2%) [[via 18 frames]] valueOf  java.lang.Double
    └── 55 samples (0.1%) [[via 11 frames]] makeNodeBuilder  java.util.stream.ReferencePipeline
        └── 55 samples (0.1%) builder  java.util.stream.Nodes
            └── 38 samples (0.1%) [[via 3 frames]] lambda$generateData$4  org.renaissance.jdk.concurrent.JavaKMeans
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                   | Location                                                   |
| ----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 91.1% |  68,644 | `copyOf`                   | `java.util.Arrays`                                         |
|  4.5% |   3,424 | `findNearestCentroid`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.7% |     557 | `newNode`                  | `java.util.HashMap`                                        |
|  0.6% |     443 | `grow`                     | `java.util.ArrayList`                                      |
|  0.4% |     317 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.3% |     243 | `lambda$merge$6`           | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.3% |     241 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |     228 | `resize`                   | `java.util.HashMap`                                        |
|  0.3% |     210 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.2% |     186 | `collectClusters`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.2% |     177 | `vectorSum`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.2% |     146 | `add`                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.2% |     134 | `merge`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.2% |     119 | `valueOf`                  | `java.lang.Double`                                         |
|  0.1% |      44 | `mapToObj`                 | `java.util.stream.IntPipeline`                             |
|  0.1% |      44 | `intStream`                | `java.util.stream.StreamSupport`                           |
|  0.1% |      38 | `lambda$generateData$4`    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |      28 | `entrySet`                 | `java.util.HashMap`                                        |
| <0.1% |      25 | `opWrapSink`               | `java.util.stream.IntPipeline$1`                           |
| <0.1% |      25 | `range`                    | `java.util.stream.IntStream`                               |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Standard library

|     % | Samples | Function           | Location                                     |
| ----: | ------: | ------------------ | -------------------------------------------- |
| 91.1% |  68,644 | `copyOf`           | `java.util.Arrays`                           |
|  0.7% |     557 | `newNode`          | `java.util.HashMap`                          |
|  0.6% |     443 | `grow`             | `java.util.ArrayList`                        |
|  0.3% |     228 | `resize`           | `java.util.HashMap`                          |
|  0.2% |     119 | `valueOf`          | `java.lang.Double`                           |
|  0.1% |      44 | `mapToObj`         | `java.util.stream.IntPipeline`               |
|  0.1% |      44 | `intStream`        | `java.util.stream.StreamSupport`             |
| <0.1% |      28 | `entrySet`         | `java.util.HashMap`                          |
| <0.1% |      25 | `opWrapSink`       | `java.util.stream.IntPipeline$1`             |
| <0.1% |      25 | `range`            | `java.util.stream.IntStream`                 |
| <0.1% |      17 | `builder`          | `java.util.stream.Nodes`                     |
| <0.1% |      12 | `<init>`           | `java.util.zip.InflaterInputStream`          |
| <0.1% |      11 | `allocateInstance` | `jdk.internal.misc.Unsafe`                   |
| <0.1% |      11 | `allocateInstance` | `java.lang.invoke.DirectMethodHandle`        |
| <0.1% |       6 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`          |
| <0.1% |       3 | `newLinkedHashMap` | `java.util.LinkedHashMap`                    |
| <0.1% |       3 | `mapToObj`         | `java.util.stream.DoublePipeline`            |
| <0.1% |       2 | `doubleStream`     | `java.util.stream.StreamSupport`             |
| <0.1% |       2 | `<init>`           | `jdk.internal.org.objectweb.asm.SymbolTable` |
| <0.1% |       2 | `copyOfRangeByte`  | `java.util.Arrays`                           |

##### Ours

|     % | Samples | Function                   | Location                                                   |
| ----: | ------: | -------------------------- | ---------------------------------------------------------- |
|  4.5% |   3,424 | `findNearestCentroid`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.4% |     317 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.3% |     243 | `lambda$merge$6`           | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.3% |     241 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |     210 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.2% |     186 | `collectClusters`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.2% |     177 | `vectorSum`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.2% |     146 | `add`                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.2% |     134 | `merge`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.1% |      38 | `lambda$generateData$4`    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |      14 | `computeClusterAverages`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |      13 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |       2 | `lambda$run$0`             | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |       2 | `lambda$boxed$0`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |       1 | `<init>`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |       1 | `div`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `copyOf` (`java.util.Arrays`)

|     % | Samples | Caller                   | Location                          |
| ----: | ------: | ------------------------ | --------------------------------- |
| 57.3% |  39,359 | `grow`                   | `java.util.ArrayList`             |
| 42.6% |  29,243 | `toArray`                | `java.util.ArrayList`             |
| <0.1% |      23 | `copyOf`                 | `java.util.Arrays`                |
| <0.1% |      18 | `getBytes`               | `jdk.internal.loader.Resource`    |
| <0.1% |       1 | `ensureCapacityInternal` | `java.lang.AbstractStringBuilder` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |   3,424 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `newNode` (`java.util.HashMap`)

|     % | Samples | Caller            | Location            |
| ----: | ------: | ----------------- | ------------------- |
| 50.3% |     280 | `computeIfAbsent` | `java.util.HashMap` |
| 49.6% |     276 | `putVal`          | `java.util.HashMap` |
|  0.2% |       1 | `merge`           | `java.util.HashMap` |

##### `grow` (`java.util.ArrayList`)

|      % | Samples | Caller | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |     443 | `grow` | `java.util.ArrayList` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |     317 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |     243 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |     241 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `resize` (`java.util.HashMap`)

|     % | Samples | Caller            | Location            |
| ----: | ------: | ----------------- | ------------------- |
| 60.5% |     138 | `computeIfAbsent` | `java.util.HashMap` |
| 39.0% |      89 | `putVal`          | `java.util.HashMap` |
|  0.4% |       1 | `merge`           | `java.util.HashMap` |

##### `lambda$collectClusters$0` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller  | Location                                                                              |
| -----: | ------: | ------- | ------------------------------------------------------------------------------------- |
| 100.0% |     210 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000801186b38` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |     186 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller            | Location                                                  |
| -----: | ------: | ----------------- | --------------------------------------------------------- |
| 100.0% |     177 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `add` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller           | Location                                                  |
| -----: | ------: | ---------------- | --------------------------------------------------------- |
| 100.0% |     146 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Caller           | Location                                                   |
| ----: | ------: | ---------------- | ---------------------------------------------------------- |
| 97.8% |     131 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  2.2% |       3 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `valueOf` (`java.lang.Double`)

|     % | Samples | Caller                  | Location                                                     |
| ----: | ------: | ----------------------- | ------------------------------------------------------------ |
| 97.5% |     116 | `lambda$generateData$3` | `org.renaissance.jdk.concurrent.JavaKMeans`                  |
|  2.5% |       3 | `apply`                 | `java.util.stream.DoublePipeline$$Lambda.0x00000008011c0c08` |

##### `mapToObj` (`java.util.stream.IntPipeline`)

|      % | Samples | Caller     | Location                       |
| -----: | ------: | ---------- | ------------------------------ |
| 100.0% |      44 | `mapToObj` | `java.util.stream.IntPipeline` |

##### `intStream` (`java.util.stream.StreamSupport`)

|      % | Samples | Caller  | Location                     |
| -----: | ------: | ------- | ---------------------------- |
| 100.0% |      44 | `range` | `java.util.stream.IntStream` |

##### `lambda$generateData$4` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |      38 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801125d48` |

##### `entrySet` (`java.util.HashMap`)

|      % | Samples | Caller          | Location            |
| -----: | ------: | --------------- | ------------------- |
| 100.0% |      28 | `putMapEntries` | `java.util.HashMap` |

##### `opWrapSink` (`java.util.stream.IntPipeline$1`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |      25 | `wrapSink` | `java.util.stream.AbstractPipeline` |

##### `range` (`java.util.stream.IntStream`)

|      % | Samples | Caller                  | Location                                    |
| -----: | ------: | ----------------------- | ------------------------------------------- |
| 100.0% |      25 | `lambda$generateData$5` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `builder` (`java.util.stream.Nodes`)

|      % | Samples | Caller            | Location                             |
| -----: | ------: | ----------------- | ------------------------------------ |
| 100.0% |      17 | `makeNodeBuilder` | `java.util.stream.ReferencePipeline` |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller            | Location                                               |
| -----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% |      14 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |      13 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>` (`java.util.zip.InflaterInputStream`)

|      % | Samples | Caller   | Location                                           |
| -----: | ------: | -------- | -------------------------------------------------- |
| 100.0% |      12 | `<init>` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `allocateInstance` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Caller             | Location                              |
| -----: | ------: | ------------------ | ------------------------------------- |
| 100.0% |      11 | `allocateInstance` | `java.lang.invoke.DirectMethodHandle` |

##### `allocateInstance` (`java.lang.invoke.DirectMethodHandle`)

|      % | Samples | Caller             | Location                                             |
| -----: | ------: | ------------------ | ---------------------------------------------------- |
| 100.0% |      11 | `newInvokeSpecial` | `java.lang.invoke.LambdaForm$DMH.0x0000000801126400` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |       6 | `join` | `java.util.concurrent.ForkJoinTask` |

##### `newLinkedHashMap` (`java.util.LinkedHashMap`)

|      % | Samples | Caller   | Location                   |
| -----: | ------: | -------- | -------------------------- |
| 100.0% |       3 | `<init>` | `java.util.jar.Attributes` |

##### `mapToObj` (`java.util.stream.DoublePipeline`)

|      % | Samples | Caller  | Location                          |
| -----: | ------: | ------- | --------------------------------- |
| 100.0% |       3 | `boxed` | `java.util.stream.DoublePipeline` |

##### `doubleStream` (`java.util.stream.StreamSupport`)

|      % | Samples | Caller   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |       2 | `stream` | `java.util.Arrays` |

##### `<init>` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|      % | Samples | Caller   | Location                                     |
| -----: | ------: | -------- | -------------------------------------------- |
| 100.0% |       2 | `<init>` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `copyOfRangeByte` (`java.util.Arrays`)

|      % | Samples | Caller        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |       2 | `copyOfRange` | `java.util.Arrays` |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller | Location                                                               |
| -----: | ------: | ------ | ---------------------------------------------------------------------- |
| 100.0% |       2 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68` |

##### `lambda$boxed$0` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller  | Location                                                                          |
| -----: | ------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% |       2 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x0000000801185800` |

##### `<init>` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller         | Location                                    |
| -----: | ------: | -------------- | ------------------------------------------- |
| 100.0% |       1 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `div` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |       1 | `average` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function           | Location                                                               |
| ----: | ------: | ------------------ | ---------------------------------------------------------------------- |
| 99.5% |  75,003 | `doExec`           | `java.util.concurrent.ForkJoinTask`                                    |
| 99.5% |  75,003 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| 99.5% |  75,003 | `scan`             | `java.util.concurrent.ForkJoinPool`                                    |
| 99.5% |  75,003 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                                    |
| 99.5% |  75,003 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`                            |
| 99.5% |  75,000 | `compute`          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 99.5% |  75,000 | `exec`             | `java.util.concurrent.RecursiveTask`                                   |
| 91.1% |  68,644 | `copyOf`           | `java.util.Arrays`                                                     |
| 79.8% |  60,125 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                                    |
| 79.8% |  60,125 | `join`             | `java.util.concurrent.ForkJoinTask`                                    |
| 79.0% |  59,526 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| 76.5% |  57,642 | `merge`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 76.5% |  57,634 | `combineResults`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 75.8% |  57,123 | `lambda$merge$7`   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 75.8% |  57,123 | `accept`           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88` |
| 75.8% |  57,123 | `forEach`          | `java.util.HashMap`                                                    |
| 75.8% |  57,122 | `merge`            | `java.util.HashMap`                                                    |
| 75.8% |  57,120 | `lambda$merge$6`   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 75.8% |  57,120 | `apply`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218` |
| 56.5% |  42,623 | `addAll`           | `java.util.ArrayList`                                                  |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Standard library

|     % | Samples | Function           | Location                                            |
| ----: | ------: | ------------------ | --------------------------------------------------- |
| 99.5% |  75,003 | `doExec`           | `java.util.concurrent.ForkJoinTask`                 |
| 99.5% |  75,003 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 99.5% |  75,003 | `scan`             | `java.util.concurrent.ForkJoinPool`                 |
| 99.5% |  75,003 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                 |
| 99.5% |  75,003 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`         |
| 99.5% |  75,000 | `exec`             | `java.util.concurrent.RecursiveTask`                |
| 91.1% |  68,644 | `copyOf`           | `java.util.Arrays`                                  |
| 79.8% |  60,125 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                 |
| 79.8% |  60,125 | `join`             | `java.util.concurrent.ForkJoinTask`                 |
| 79.0% |  59,526 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 75.8% |  57,123 | `forEach`          | `java.util.HashMap`                                 |
| 75.8% |  57,122 | `merge`            | `java.util.HashMap`                                 |
| 56.5% |  42,623 | `addAll`           | `java.util.ArrayList`                               |
| 52.8% |  39,813 | `grow`             | `java.util.ArrayList`                               |
| 38.8% |  29,255 | `toArray`          | `java.util.ArrayList`                               |
| 20.7% |  15,622 | `invoke`           | `java.util.concurrent.ForkJoinTask`                 |
| 20.3% |  15,311 | `exec`             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| 18.9% |  14,254 | `<init>`           | `java.util.ArrayList`                               |
| 16.2% |  12,191 | `add`              | `java.util.ArrayList`                               |
| 14.5% |  10,929 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`                 |

##### Ours

|     % | Samples | Function                    | Location                                                               |
| ----: | ------: | --------------------------- | ---------------------------------------------------------------------- |
| 99.5% |  75,000 | `compute`                   | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 76.5% |  57,642 | `merge`                     | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 76.5% |  57,634 | `combineResults`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 75.8% |  57,123 | `lambda$merge$7`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 75.8% |  57,123 | `accept`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88` |
| 75.8% |  57,120 | `lambda$merge$6`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 75.8% |  57,120 | `apply`                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218` |
| 21.8% |  16,425 | `computeDirectly`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 20.3% |  15,311 | `lambda$run$0`              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 20.3% |  15,311 | `call`                      | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68` |
| 17.2% |  13,001 | `collectClusters`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  4.5% |   3,424 | `findNearestCentroid`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  0.5% |     382 | `launchHarnessClass`        | `org.renaissance.core.Launcher`                                        |
|  0.5% |     382 | `main`                      | `org.renaissance.core.Launcher`                                        |
|  0.5% |     380 | `computeClusterAverages`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  0.5% |     380 | `computeDirectly`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  0.5% |     380 | `main`                      | `org.renaissance.harness.RenaissanceSuite`                             |
|  0.5% |     380 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher`                                        |
|  0.5% |     373 | `main`                      | `org.renaissance.harness.RenaissanceSuite$`                            |
|  0.5% |     349 | `average`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `doExec` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller             | Location                                      |
| -----: | ------: | ------------------ | --------------------------------------------- |
| 100.0% |  75,003 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  79.4% |  59,526 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  20.8% |  15,622 | `invoke`           | `java.util.concurrent.ForkJoinTask`           |
|  14.6% |  10,929 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`           |

##### `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |  75,003 | `scan` | `java.util.concurrent.ForkJoinPool` |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |  75,003 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller | Location                                    |
| -----: | ------: | ------ | ------------------------------------------- |
| 100.0% |  75,003 | `run`  | `java.util.concurrent.ForkJoinWorkerThread` |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller | Location                             |
| -----: | ------: | ------ | ------------------------------------ |
| 100.0% |  75,000 | `exec` | `java.util.concurrent.RecursiveTask` |

##### `exec` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |  75,000 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `copyOf` (`java.util.Arrays`)

|     % | Samples | Caller                   | Location                          |
| ----: | ------: | ------------------------ | --------------------------------- |
| 57.4% |  39,370 | `grow`                   | `java.util.ArrayList`             |
| 42.6% |  29,255 | `toArray`                | `java.util.ArrayList`             |
| <0.1% |      23 | `copyOf`                 | `java.util.Arrays`                |
| <0.1% |      18 | `getBytes`               | `jdk.internal.loader.Resource`    |
| <0.1% |       1 | `ensureCapacityInternal` | `java.lang.AbstractStringBuilder` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |  60,125 | `join` | `java.util.concurrent.ForkJoinTask` |

##### `join` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |  60,125 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |  59,526 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller           | Location                                                   |
| -----: | ------: | ---------------- | ---------------------------------------------------------- |
| 100.0% |  57,634 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  <0.1% |       8 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller           | Location                                                   |
| -----: | ------: | ---------------- | ---------------------------------------------------------- |
| 100.0% |  57,634 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 100.0% |  57,634 | `compute`        | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |  57,123 | `accept` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88`)

|      % | Samples | Caller    | Location            |
| -----: | ------: | --------- | ------------------- |
| 100.0% |  57,123 | `forEach` | `java.util.HashMap` |

##### `forEach` (`java.util.HashMap`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |  57,123 | `merge` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge` (`java.util.HashMap`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |  57,122 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller  | Location                                                               |
| -----: | ------: | ------- | ---------------------------------------------------------------------- |
| 100.0% |  57,120 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218` |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218`)

|      % | Samples | Caller  | Location            |
| -----: | ------: | ------- | ------------------- |
| 100.0% |  57,120 | `merge` | `java.util.HashMap` |

##### `addAll` (`java.util.ArrayList`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |  42,623 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `grow` (`java.util.ArrayList`)

|     % | Samples | Caller   | Location              |
| ----: | ------: | -------- | --------------------- |
| 69.4% |  27,622 | `addAll` | `java.util.ArrayList` |
| 30.6% |  12,191 | `grow`   | `java.util.ArrayList` |
| 30.6% |  12,191 | `add`    | `java.util.ArrayList` |

##### `toArray` (`java.util.ArrayList`)

|     % | Samples | Caller   | Location              |
| ----: | ------: | -------- | --------------------- |
| 51.3% |  15,001 | `addAll` | `java.util.ArrayList` |
| 48.7% |  14,254 | `<init>` | `java.util.ArrayList` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |  16,425 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 100.0% |  16,425 | `compute`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `invoke` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Caller         | Location                                               |
| ----: | ------: | -------------- | ------------------------------------------------------ |
| 98.0% |  15,308 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
|  2.2% |     348 | `average`      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |  15,311 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller | Location                                                               |
| -----: | ------: | ------ | ---------------------------------------------------------------------- |
| 100.0% |  15,311 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68` |

##### `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68`)

|      % | Samples | Caller | Location                                            |
| -----: | ------: | ------ | --------------------------------------------------- |
| 100.0% |  15,311 | `exec` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `<init>` (`java.util.ArrayList`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |  14,254 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |  13,001 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `add` (`java.util.ArrayList`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |  12,191 | `add`             | `java.util.ArrayList`                                      |
| 100.0% |  12,187 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  <0.1% |       4 | `accept`          | `java.util.stream.Collectors$$Lambda.0x000000080106fdf8`   |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |  10,929 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller            | Location                                                   |
| -----: | ------: | ----------------- | ---------------------------------------------------------- |
| 100.0% |   3,424 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `launchHarnessClass` (`org.renaissance.core.Launcher`)

|      % | Samples | Caller | Location                        |
| -----: | ------: | ------ | ------------------------------- |
| 100.0% |     382 | `main` | `org.renaissance.core.Launcher` |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller            | Location                                               |
| -----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% |     380 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller            | Location                                               |
| -----: | ------: | ----------------- | ------------------------------------------------------ |
| 100.0% |     380 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     380 | `compute`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `main` (`org.renaissance.harness.RenaissanceSuite`)

|      % | Samples | Caller         | Location                                             |
| -----: | ------: | -------------- | ---------------------------------------------------- |
| 100.0% |     380 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x0000000801004800` |

##### `loadAndInvokeHarnessClass` (`org.renaissance.core.Launcher`)

|      % | Samples | Caller               | Location                        |
| -----: | ------: | -------------------- | ------------------------------- |
| 100.0% |     380 | `launchHarnessClass` | `org.renaissance.core.Launcher` |

##### `main` (`org.renaissance.harness.RenaissanceSuite$`)

|      % | Samples | Caller | Location                                   |
| -----: | ------: | ------ | ------------------------------------------ |
| 100.0% |     373 | `main` | `org.renaissance.harness.RenaissanceSuite` |

##### `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller                   | Location                                               |
| -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% |     349 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `doExec` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee | Location                                            |
| -----: | ------: | ------ | --------------------------------------------------- |
| 100.0% |  75,000 | `exec` | `java.util.concurrent.RecursiveTask`                |
|  20.4% |  15,311 | `exec` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |  75,003 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Callee         | Location                                      |
| -----: | ------: | -------------- | --------------------------------------------- |
| 100.0% |  75,003 | `topLevelExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Callee | Location                            |
| -----: | ------: | ------ | ----------------------------------- |
| 100.0% |  75,003 | `scan` | `java.util.concurrent.ForkJoinPool` |

##### `run` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |  75,003 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee            | Location                                                   |
| ----: | ------: | ----------------- | ---------------------------------------------------------- |
| 80.2% |  60,125 | `join`            | `java.util.concurrent.ForkJoinTask`                        |
| 76.8% |  57,634 | `combineResults`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 21.9% |  16,425 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.5% |     380 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  0.4% |     317 | `createSubtask`   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `exec` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Callee    | Location                                               |
| -----: | ------: | --------- | ------------------------------------------------------ |
| 100.0% |  75,000 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `copyOf` (`java.util.Arrays`)

|     % | Samples | Callee   | Location           |
| ----: | ------: | -------- | ------------------ |
| <0.1% |      23 | `copyOf` | `java.util.Arrays` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee             | Location                                      |
| ----: | ------: | ------------------ | --------------------------------------------- |
| 99.0% |  59,526 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 18.2% |  10,929 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`           |

##### `join` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee      | Location                            |
| -----: | ------: | ----------- | ----------------------------------- |
| 100.0% |  60,125 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |  59,526 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee               | Location                           |
| ----: | ------: | -------------------- | ---------------------------------- |
| 99.1% |  57,123 | `forEach`            | `java.util.HashMap`                |
|  0.7% |     384 | `<init>`             | `java.util.HashMap`                |
| <0.1% |       1 | `linkToTargetMethod` | `java.lang.invoke.Invokers$Holder` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee           | Location                                                   |
| -----: | ------: | ---------------- | ---------------------------------------------------------- |
| 100.0% |  57,634 | `merge`          | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| 100.0% |  57,634 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee         | Location                               |
| -----: | ------: | -------------- | -------------------------------------- |
| 100.0% |  57,122 | `merge`        | `java.util.HashMap`                    |
|  <0.1% |       1 | `linkCallSite` | `java.lang.invoke.MethodHandleNatives` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88`)

|      % | Samples | Callee           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |  57,123 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach` (`java.util.HashMap`)

|      % | Samples | Callee   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |  57,123 | `accept` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88` |

##### `merge` (`java.util.HashMap`)

|      % | Samples | Callee    | Location                                                               |
| -----: | ------: | --------- | ---------------------------------------------------------------------- |
| 100.0% |  57,120 | `apply`   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218` |
|  <0.1% |       1 | `resize`  | `java.util.HashMap`                                                    |
|  <0.1% |       1 | `newNode` | `java.util.HashMap`                                                    |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee   | Location              |
| ----: | ------: | -------- | --------------------- |
| 74.6% |  42,623 | `addAll` | `java.util.ArrayList` |
| 25.0% |  14,254 | `<init>` | `java.util.ArrayList` |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218`)

|      % | Samples | Callee           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |  57,120 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `addAll` (`java.util.ArrayList`)

|     % | Samples | Callee    | Location              |
| ----: | ------: | --------- | --------------------- |
| 64.8% |  27,622 | `grow`    | `java.util.ArrayList` |
| 35.2% |  15,001 | `toArray` | `java.util.ArrayList` |

##### `grow` (`java.util.ArrayList`)

|     % | Samples | Callee   | Location              |
| ----: | ------: | -------- | --------------------- |
| 98.9% |  39,370 | `copyOf` | `java.util.Arrays`    |
| 30.6% |  12,191 | `grow`   | `java.util.ArrayList` |

##### `toArray` (`java.util.ArrayList`)

|      % | Samples | Callee   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |  29,255 | `copyOf` | `java.util.Arrays` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                | Location                                                   |
| -----: | ------: | --------------------- | ---------------------------------------------------------- |
| 100.0% |  16,425 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  79.2% |  13,001 | `collectClusters`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  20.8% |   3,424 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `invoke` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |  15,622 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Callee | Location                                                               |
| -----: | ------: | ------ | ---------------------------------------------------------------------- |
| 100.0% |  15,311 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68` |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee   | Location                                               |
| -----: | ------: | -------- | ------------------------------------------------------ |
| 100.0% |  15,308 | `invoke` | `java.util.concurrent.ForkJoinTask`                    |
|  <0.1% |       1 | `<init>` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68`)

|      % | Samples | Callee         | Location                                    |
| -----: | ------: | -------------- | ------------------------------------------- |
| 100.0% |  15,311 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `<init>` (`java.util.ArrayList`)

|      % | Samples | Callee    | Location              |
| -----: | ------: | --------- | --------------------- |
| 100.0% |  14,254 | `toArray` | `java.util.ArrayList` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee            | Location              |
| ----: | ------: | ----------------- | --------------------- |
| 93.7% |  12,187 | `add`             | `java.util.ArrayList` |
|  4.8% |     628 | `computeIfAbsent` | `java.util.HashMap`   |

##### `add` (`java.util.ArrayList`)

|      % | Samples | Callee | Location              |
| -----: | ------: | ------ | --------------------- |
| 100.0% |  12,191 | `grow` | `java.util.ArrayList` |
| 100.0% |  12,191 | `add`  | `java.util.ArrayList` |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Callee   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |  10,929 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `launchHarnessClass` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee                      | Location                            |
| ----: | ------: | --------------------------- | ----------------------------------- |
| 99.5% |     380 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher`     |
|  0.3% |       1 | `createScratchRoot`         | `org.renaissance.core.Launcher`     |
|  0.3% |       1 | `create`                    | `org.renaissance.core.ModuleLoader` |

##### `main` (`org.renaissance.core.Launcher`)

|      % | Samples | Callee               | Location                        |
| -----: | ------: | -------------------- | ------------------------------- |
| 100.0% |     382 | `launchHarnessClass` | `org.renaissance.core.Launcher` |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee    | Location                                               |
| ----: | ------: | --------- | ------------------------------------------------------ |
| 91.8% |     349 | `average` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  2.6% |      10 | `boxed`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  2.1% |       8 | `put`     | `java.util.HashMap`                                    |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                   | Location                                               |
| -----: | ------: | ------------------------ | ------------------------------------------------------ |
| 100.0% |     380 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     380 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `main` (`org.renaissance.harness.RenaissanceSuite`)

|     % | Samples | Callee      | Location                                    |
| ----: | ------: | ----------- | ------------------------------------------- |
| 98.2% |     373 | `main`      | `org.renaissance.harness.RenaissanceSuite$` |
|  1.8% |       7 | `loadClass` | `java.lang.ClassLoader`                     |

##### `loadAndInvokeHarnessClass` (`org.renaissance.core.Launcher`)

|      % | Samples | Callee   | Location                   |
| -----: | ------: | -------- | -------------------------- |
| 100.0% |     380 | `invoke` | `java.lang.reflect.Method` |

##### `main` (`org.renaissance.harness.RenaissanceSuite$`)

|     % | Samples | Callee          | Location                                    |
| ----: | ------: | --------------- | ------------------------------------------- |
| 92.2% |     344 | `runBenchmarks` | `org.renaissance.harness.RenaissanceSuite$` |
|  2.9% |      11 | `<clinit>`      | `scala.Predef$`                             |
|  1.6% |       6 | `apply`         | `scala.collection.immutable.Map$`           |
|  1.1% |       4 | `<init>`        | `org.renaissance.harness.ConfigParser`      |
|  0.8% |       3 | `parse`         | `org.renaissance.harness.ConfigParser`      |

##### `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee   | Location                                               |
| ----: | ------: | -------- | ------------------------------------------------------ |
| 99.7% |     348 | `invoke` | `java.util.concurrent.ForkJoinTask`                    |
|  0.3% |       1 | `div`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.4% |   4,844 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 4.0% |   2,990 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3.8% |   2,853 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3.4% |   2,578 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `<init>` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3.2% |   2,385 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.9% |   2,221 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `grow` ← `add` ← `add` ← `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                         |
| 2.9% |   2,207 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.7% |   2,011 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.5% |   1,908 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.3% |   1,701 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2.2% |   1,696 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.2% |   1,624 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `grow` ← `add` ← `add` ← `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) |
| 2.1% |   1,559 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `grow` ← `add` ← `add` ← `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.0% |   1,491 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `<init>` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.8% |   1,356 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.8% |   1,335 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                  |
| 1.6% |   1,204 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.6% |   1,175 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `<init>` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.5% |   1,126 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `<init>` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.4% |   1,082 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `<init>` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

# Sampling profile diff

Collected 75,385 → 75,888 samples (+503 samples, +0.7%).

| Category         | Change | Delta |             % |         Samples |
| ---------------- | -----: | ----: | ------------: | --------------: |
| Standard library |  +0.4% |  +250 | 93.2% → 92.9% | 70,236 → 70,486 |
| Ours             |  +4.9% |  +253 |   6.8% → 7.1% |   5,149 → 5,402 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── … 75,000 → 75,439 samples (99.5% → 99.4%) compute at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│   ├── 57,634 → 57,247 samples (76.5% → 75.4%) combineResults at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   │   └── … 57,634 → 57,247 samples (76.5% → 75.4%) merge at org.renaissance.jdk.concurrent.JavaKMeans
│   │       ├── … 57,120 → 56,755 samples (75.8% → 74.8%) lambda$merge$6 at org.renaissance.jdk.concurrent.JavaKMeans
│   │       │   ├── 42,623 → 42,303 samples (56.5% → 55.7%) addAll at java.util.ArrayList
│   │       │   │   ├── 27,622 → 27,060 samples (36.6% → 35.7%) grow
│   │       │   │   │   └── 27,622 → 27,060 samples (36.6% → 35.7%, self 91.1% → 90.7% globally) copyOf at java.util.Arrays
│   │       │   │   └── 15,001 → 15,243 samples (19.9% → 20.1%) toArray
│   │       │   │       └── 15,001 → 15,243 samples (19.9% → 20.1%) copyOf at java.util.Arrays
│   │       │   └── 14,254 → 14,246 samples (18.9% → 18.8%) <init> at java.util.ArrayList
│   │       │       └── 14,254 → 14,246 samples (18.9% → 18.8%) toArray
│   │       │           └── 14,254 → 14,246 samples (18.9% → 18.8%) copyOf at java.util.Arrays
│   │       └── … 268 → 252 samples (0.4% → 0.3%) newNode at java.util.HashMap
│   ├── 16,425 → 17,003 samples (21.8% → 22.4%) computeDirectly at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   │   ├── … 13,001 → 13,476 samples (17.2% → 17.8%) collectClusters at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   │   │   ├── 12,187 → 12,717 samples (16.2% → 16.8%) add at java.util.ArrayList
│   │   │   │   └── … 12,187 → 12,717 samples (16.2% → 16.8%, self 0.6%) grow at java.util.ArrayList
│   │   │   │       └── … 11,744 → 12,268 samples (15.6% → 16.2%) copyOf at java.util.Arrays
│   │   │   └── 628 → 599 samples (0.8%) computeIfAbsent at java.util.HashMap
│   │   │       ├── 210 → 196 samples (0.3%) apply at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940
│   │   │       │   └── 210 → 196 samples (0.3%) lambda$collectClusters$0 at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   │   │       └── 138 → 121 samples (0.2%) resize
│   │   └── … 3,424 → 3,527 samples (4.5% → 4.6%) findNearestCentroid at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   ├── 317 → 379 samples (0.4% → 0.5%) createSubtask at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│   ├── 241 → 327 samples (0.3% → 0.4%) createSubtask at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   ├── 177 → 200 samples (0.2% → 0.3%) computeDirectly at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│   │   └── … 177 → 200 samples (0.2% → 0.3%) vectorSum at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│   ├── 146 → 198 samples (0.2% → 0.3%) combineResults at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│   │   └── … 146 → 198 samples (0.2% → 0.3%) add at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│   └── 33 → 41 samples (<0.1% → 0.1%) computeDirectly at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│       └── … 33 → 41 samples (<0.1% → 0.1%) computeClusterAverages at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
└── … 328 → 372 samples (0.4% → 0.5%) evaluate at java.util.stream.AbstractPipeline
    ├── … 128 → 152 samples (0.2%) lambda$generateData$5 at org.renaissance.jdk.concurrent.JavaKMeans
    │   ├── 69 → 75 samples (0.1%) range at java.util.stream.IntStream
    │   │   └── 44 → 58 samples (0.1%) intStream at java.util.stream.StreamSupport
    │   └── 44 → 55 samples (0.1%) mapToObj at java.util.stream.IntPipeline
    ├── … 116 → 138 samples (0.2%) valueOf at java.lang.Double
    └── … 55 → 58 samples (0.1%) makeNodeBuilder at java.util.stream.ReferencePipeline
        └── 55 → 58 samples (0.1%) builder at java.util.stream.Nodes
            └── … 38 → 33 samples (0.1% → <0.1%) lambda$generateData$4 at org.renaissance.jdk.concurrent.JavaKMeans
```

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |         Samples | Function              | Location                                                   |
| ------: | ----: | ------------: | --------------: | --------------------- | ---------------------------------------------------------- |
|   +0.3% |  +211 | 91.1% → 90.7% | 68,644 → 68,855 | `copyOf`              | `java.util.Arrays`                                         |
|   +3.0% |  +103 |   4.5% → 4.6% |   3,424 → 3,527 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +35.7% |   +86 |   0.3% → 0.4% |       241 → 327 | `createSubtask`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +19.6% |   +62 |   0.4% → 0.5% |       317 → 379 | `createSubtask`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +35.6% |   +52 |   0.2% → 0.3% |       146 → 198 | `add`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +22.7% |   +27 |          0.2% |       119 → 146 | `valueOf`             | `java.lang.Double`                                         |
|  +13.0% |   +23 |   0.2% → 0.3% |       177 → 200 | `vectorSum`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +31.8% |   +14 |          0.1% |         44 → 58 | `intStream`           | `java.util.stream.StreamSupport`                           |
|  +25.0% |   +11 |          0.1% |         44 → 55 | `mapToObj`            | `java.util.stream.IntPipeline`                             |
|  +69.2% |    +9 |         <0.1% |         13 → 22 | `createSubtask`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +72.7% |    +8 |         <0.1% |         11 → 19 | `allocateInstance`    | `java.lang.invoke.DirectMethodHandle`                      |
|  +47.1% |    +8 |         <0.1% |         17 → 25 | `builder`             | `java.util.stream.Nodes`                                   |
|   +1.4% |    +6 |          0.6% |       443 → 449 | `grow`                | `java.util.ArrayList`                                      |
|  +83.3% |    +5 |         <0.1% |          6 → 11 | `awaitDone`           | `java.util.concurrent.ForkJoinTask`                        |
| +150.0% |    +3 |         <0.1% |           2 → 5 | `lambda$run$0`        | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +300.0% |    +3 |         <0.1% |           1 → 4 | `div`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|     new |    +3 |  0.0% → <0.1% |           0 → 3 | `spliterator`         | `java.util.Spliterators`                                   |
|     new |    +2 |  0.0% → <0.1% |           0 → 2 | `opWrapSink`          | `java.util.stream.DoublePipeline$1`                        |
|  +50.0% |    +1 |         <0.1% |           2 → 3 | `doubleStream`        | `java.util.stream.StreamSupport`                           |
|     new |    +1 |  0.0% → <0.1% |           0 → 1 | `parseName`           | `java.util.jar.Manifest`                                   |

##### Standard library

|  Change | Delta |             % |         Samples | Function                     | Location                                     |
| ------: | ----: | ------------: | --------------: | ---------------------------- | -------------------------------------------- |
|   +0.3% |  +211 | 91.1% → 90.7% | 68,644 → 68,855 | `copyOf`                     | `java.util.Arrays`                           |
|  +22.7% |   +27 |          0.2% |       119 → 146 | `valueOf`                    | `java.lang.Double`                           |
|  +31.8% |   +14 |          0.1% |         44 → 58 | `intStream`                  | `java.util.stream.StreamSupport`             |
|  +25.0% |   +11 |          0.1% |         44 → 55 | `mapToObj`                   | `java.util.stream.IntPipeline`               |
|  +72.7% |    +8 |         <0.1% |         11 → 19 | `allocateInstance`           | `java.lang.invoke.DirectMethodHandle`        |
|  +47.1% |    +8 |         <0.1% |         17 → 25 | `builder`                    | `java.util.stream.Nodes`                     |
|   +1.4% |    +6 |          0.6% |       443 → 449 | `grow`                       | `java.util.ArrayList`                        |
|  +83.3% |    +5 |         <0.1% |          6 → 11 | `awaitDone`                  | `java.util.concurrent.ForkJoinTask`          |
|     new |    +3 |  0.0% → <0.1% |           0 → 3 | `spliterator`                | `java.util.Spliterators`                     |
|     new |    +2 |  0.0% → <0.1% |           0 → 2 | `opWrapSink`                 | `java.util.stream.DoublePipeline$1`          |
|  +50.0% |    +1 |         <0.1% |           2 → 3 | `doubleStream`               | `java.util.stream.StreamSupport`             |
|     new |    +1 |  0.0% → <0.1% |           0 → 1 | `parseName`                  | `java.util.jar.Manifest`                     |
|     new |    +1 |  0.0% → <0.1% |           0 → 1 | `allocateUninitializedArray` | `jdk.internal.misc.Unsafe`                   |
| +100.0% |    +1 |         <0.1% |           1 → 2 | `<init>`                     | `java.io.ByteArrayOutputStream`              |
|     new |    +1 |  0.0% → <0.1% |           0 → 1 | `iterator`                   | `java.util.HashMap$EntrySet`                 |
|     new |    +1 |  0.0% → <0.1% |           0 → 1 | `replace`                    | `java.lang.StringLatin1`                     |
|     new |    +1 |  0.0% → <0.1% |           0 → 1 | `<init>`                     | `java.lang.AbstractStringBuilder`            |
|     new |    +1 |  0.0% → <0.1% |           0 → 1 | `entryFor`                   | `java.util.jar.JarFile`                      |
|     new |    +1 |  0.0% → <0.1% |           0 → 1 | `clone`                      | `java.lang.Object`                           |
|     new |    +1 |  0.0% → <0.1% |           0 → 1 | `addConstantNameAndType`     | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### Ours

|  Change | Delta |            % |       Samples | Function              | Location                                                   |
| ------: | ----: | -----------: | ------------: | --------------------- | ---------------------------------------------------------- |
|   +3.0% |  +103 |  4.5% → 4.6% | 3,424 → 3,527 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +35.7% |   +86 |  0.3% → 0.4% |     241 → 327 | `createSubtask`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +19.6% |   +62 |  0.4% → 0.5% |     317 → 379 | `createSubtask`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +35.6% |   +52 |  0.2% → 0.3% |     146 → 198 | `add`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +13.0% |   +23 |  0.2% → 0.3% |     177 → 200 | `vectorSum`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +69.2% |    +9 |        <0.1% |       13 → 22 | `createSubtask`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +150.0% |    +3 |        <0.1% |         2 → 5 | `lambda$run$0`        | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +300.0% |    +3 |        <0.1% |         1 → 4 | `div`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +50.0% |    +1 |        <0.1% |         2 → 3 | `lambda$boxed$0`      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|     new |    +1 | 0.0% → <0.1% |         0 → 1 | `collectGarbage`      | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |            % |   Samples | Function                   | Location                                                   |
| ------: | ----: | -----------: | --------: | -------------------------- | ---------------------------------------------------------- |
|  -15.2% |   -37 |         0.3% | 243 → 206 | `lambda$merge$6`           | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -14.0% |   -26 |         0.2% | 186 → 160 | `collectClusters`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -3.1% |   -17 |         0.7% | 557 → 540 | `newNode`                  | `java.util.HashMap`                                        |
|   -6.7% |   -14 |         0.3% | 210 → 196 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -4.4% |   -10 |         0.3% | 228 → 218 | `resize`                   | `java.util.HashMap`                                        |
|  -32.0% |    -8 |        <0.1% |   25 → 17 | `range`                    | `java.util.stream.IntStream`                               |
|  -17.9% |    -5 |        <0.1% |   28 → 23 | `entrySet`                 | `java.util.HashMap`                                        |
|  -20.0% |    -5 |        <0.1% |   25 → 20 | `opWrapSink`               | `java.util.stream.IntPipeline$1`                           |
|  -13.2% |    -5 | 0.1% → <0.1% |   38 → 33 | `lambda$generateData$4`    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -28.6% |    -4 |        <0.1% |   14 → 10 | `computeClusterAverages`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   -2.2% |    -3 |         0.2% | 134 → 131 | `merge`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -27.3% |    -3 |        <0.1% |    11 → 8 | `allocateInstance`         | `jdk.internal.misc.Unsafe`                                 |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `copyOfRangeByte`          | `java.util.Arrays`                                         |
|  -66.7% |    -2 |        <0.1% |     3 → 1 | `mapToObj`                 | `java.util.stream.DoublePipeline`                          |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `<init>`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `visitMethod`              | `jdk.internal.org.objectweb.asm.ClassWriter`               |
|  -50.0% |    -1 |        <0.1% |     2 → 1 | `<init>`                   | `jdk.internal.org.objectweb.asm.SymbolTable`               |
|  -33.3% |    -1 |        <0.1% |     3 → 2 | `newLinkedHashMap`         | `java.util.LinkedHashMap`                                  |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `<init>`                   | `jdk.internal.org.objectweb.asm.ByteVector`                |

##### Standard library

|  Change | Delta |            % |   Samples | Function           | Location                                     |
| ------: | ----: | -----------: | --------: | ------------------ | -------------------------------------------- |
|   -3.1% |   -17 |         0.7% | 557 → 540 | `newNode`          | `java.util.HashMap`                          |
|   -4.4% |   -10 |         0.3% | 228 → 218 | `resize`           | `java.util.HashMap`                          |
|  -32.0% |    -8 |        <0.1% |   25 → 17 | `range`            | `java.util.stream.IntStream`                 |
|  -17.9% |    -5 |        <0.1% |   28 → 23 | `entrySet`         | `java.util.HashMap`                          |
|  -20.0% |    -5 |        <0.1% |   25 → 20 | `opWrapSink`       | `java.util.stream.IntPipeline$1`             |
|  -27.3% |    -3 |        <0.1% |    11 → 8 | `allocateInstance` | `jdk.internal.misc.Unsafe`                   |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `copyOfRangeByte`  | `java.util.Arrays`                           |
|  -66.7% |    -2 |        <0.1% |     3 → 1 | `mapToObj`         | `java.util.stream.DoublePipeline`            |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `visitMethod`      | `jdk.internal.org.objectweb.asm.ClassWriter` |
|  -50.0% |    -1 |        <0.1% |     2 → 1 | `<init>`           | `jdk.internal.org.objectweb.asm.SymbolTable` |
|  -33.3% |    -1 |        <0.1% |     3 → 2 | `newLinkedHashMap` | `java.util.LinkedHashMap`                    |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `<init>`           | `jdk.internal.org.objectweb.asm.ByteVector`  |

##### Ours

|  Change | Delta |            % |   Samples | Function                   | Location                                                   |
| ------: | ----: | -----------: | --------: | -------------------------- | ---------------------------------------------------------- |
|  -15.2% |   -37 |         0.3% | 243 → 206 | `lambda$merge$6`           | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -14.0% |   -26 |         0.2% | 186 → 160 | `collectClusters`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -6.7% |   -14 |         0.3% | 210 → 196 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -13.2% |    -5 | 0.1% → <0.1% |   38 → 33 | `lambda$generateData$4`    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -28.6% |    -4 |        <0.1% |   14 → 10 | `computeClusterAverages`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   -2.2% |    -3 |         0.2% | 134 → 131 | `merge`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `<init>`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `copyOf` (`java.util.Arrays`)

| Change | Delta |             % |         Samples | Caller     | Location                       |
| -----: | ----: | ------------: | --------------: | ---------- | ------------------------------ |
|  +0.8% |  +229 | 42.6% → 42.8% | 29,243 → 29,472 | `toArray`  | `java.util.ArrayList`          |
|  -0.1% |   -36 | 57.3% → 57.1% | 39,359 → 39,323 | `grow`     | `java.util.ArrayList`          |
| +83.3% |   +15 |         <0.1% |         18 → 33 | `getBytes` | `jdk.internal.loader.Resource` |
| +13.0% |    +3 |         <0.1% |         23 → 26 | `copyOf`   | `java.util.Arrays`             |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |       Samples | Caller            | Location                                                   |
| -----: | ----: | -----: | ------------: | ----------------- | ---------------------------------------------------------- |
|  +3.0% |  +103 | 100.0% | 3,424 → 3,527 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller    | Location                                               |
| -----: | ----: | -----: | --------: | --------- | ------------------------------------------------------ |
| +35.7% |   +86 | 100.0% | 241 → 327 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller    | Location                                               |
| -----: | ----: | -----: | --------: | --------- | ------------------------------------------------------ |
| +19.6% |   +62 | 100.0% | 317 → 379 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `add` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller           | Location                                                  |
| -----: | ----: | -----: | --------: | ---------------- | --------------------------------------------------------- |
| +35.6% |   +52 | 100.0% | 146 → 198 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `valueOf` (`java.lang.Double`)

|  Change | Delta |             % |   Samples | Caller                  | Location                                                     |
| ------: | ----: | ------------: | --------: | ----------------------- | ------------------------------------------------------------ |
|  +19.0% |   +22 | 97.5% → 94.5% | 116 → 138 | `lambda$generateData$3` | `org.renaissance.jdk.concurrent.JavaKMeans`                  |
| +166.7% |    +5 |   2.5% → 5.5% |     3 → 8 | `apply`                 | `java.util.stream.DoublePipeline$$Lambda.0x00000070011c17c0` |

##### `vectorSum` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller            | Location                                                  |
| -----: | ----: | -----: | --------: | ----------------- | --------------------------------------------------------- |
| +13.0% |   +23 | 100.0% | 177 → 200 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `intStream` (`java.util.stream.StreamSupport`)

| Change | Delta |      % | Samples | Caller  | Location                     |
| -----: | ----: | -----: | ------: | ------- | ---------------------------- |
| +31.8% |   +14 | 100.0% | 44 → 58 | `range` | `java.util.stream.IntStream` |

##### `mapToObj` (`java.util.stream.IntPipeline`)

| Change | Delta |      % | Samples | Caller     | Location                       |
| -----: | ----: | -----: | ------: | ---------- | ------------------------------ |
| +25.0% |   +11 | 100.0% | 44 → 55 | `mapToObj` | `java.util.stream.IntPipeline` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % | Samples | Caller    | Location                                               |
| -----: | ----: | -----: | ------: | --------- | ------------------------------------------------------ |
| +69.2% |    +9 | 100.0% | 13 → 22 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `allocateInstance` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |      % | Samples | Caller             | Location                          |
| -----: | ----: | -----: | ------: | ------------------ | --------------------------------- |
| +72.7% |    +8 | 100.0% | 11 → 19 | `newInvokeSpecial` | `java.lang.invoke.LambdaForm$DMH` |

##### `builder` (`java.util.stream.Nodes`)

| Change | Delta |      % | Samples | Caller            | Location                             |
| -----: | ----: | -----: | ------: | ----------------- | ------------------------------------ |
| +47.1% |    +8 | 100.0% | 17 → 25 | `makeNodeBuilder` | `java.util.stream.ReferencePipeline` |

##### `grow` (`java.util.ArrayList`)

| Change | Delta |      % |   Samples | Caller | Location              |
| -----: | ----: | -----: | --------: | ------ | --------------------- |
|  +1.4% |    +6 | 100.0% | 443 → 449 | `grow` | `java.util.ArrayList` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % | Samples | Caller | Location                            |
| -----: | ----: | -----: | ------: | ------ | ----------------------------------- |
| +83.3% |    +5 | 100.0% |  6 → 11 | `join` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |      % | Samples | Caller | Location                                                               |
| ------: | ----: | -----: | ------: | ------ | ---------------------------------------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `div` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |      % | Samples | Caller    | Location                                               |
| ------: | ----: | -----: | ------: | --------- | ------------------------------------------------------ |
| +300.0% |    +3 | 100.0% |   1 → 4 | `average` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `spliterator` (`java.util.Spliterators`)

| Change | Delta |             % | Samples | Caller        | Location           |
| -----: | ----: | ------------: | ------: | ------------- | ------------------ |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `spliterator` | `java.util.Arrays` |

##### `opWrapSink` (`java.util.stream.DoublePipeline$1`)

| Change | Delta |             % | Samples | Caller     | Location                            |
| -----: | ----: | ------------: | ------: | ---------- | ----------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `wrapSink` | `java.util.stream.AbstractPipeline` |

##### `doubleStream` (`java.util.stream.StreamSupport`)

| Change | Delta |      % | Samples | Caller   | Location           |
| -----: | ----: | -----: | ------: | -------- | ------------------ |
| +50.0% |    +1 | 100.0% |   2 → 3 | `stream` | `java.util.Arrays` |

##### `parseName` (`java.util.jar.Manifest`)

| Change | Delta |             % | Samples | Caller | Location                 |
| -----: | ----: | ------------: | ------: | ------ | ------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `read` | `java.util.jar.Manifest` |

##### `allocateUninitializedArray` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % | Samples | Caller     | Location                       |
| -----: | ----: | ------------: | ------: | ---------- | ------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `newArray` | `java.lang.StringConcatHelper` |

##### `<init>` (`java.io.ByteArrayOutputStream`)

|  Change | Delta |      % | Samples | Caller   | Location                        |
| ------: | ----: | -----: | ------: | -------- | ------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `<init>` | `java.io.ByteArrayOutputStream` |

##### `iterator` (`java.util.HashMap$EntrySet`)

| Change | Delta |             % | Samples | Caller          | Location            |
| -----: | ----: | ------------: | ------: | --------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `putMapEntries` | `java.util.HashMap` |

##### `replace` (`java.lang.StringLatin1`)

| Change | Delta |             % | Samples | Caller    | Location           |
| -----: | ----: | ------------: | ------: | --------- | ------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `replace` | `java.lang.String` |

##### `<init>` (`java.lang.AbstractStringBuilder`)

| Change | Delta |             % | Samples | Caller   | Location                  |
| -----: | ----: | ------------: | ------: | -------- | ------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>` | `java.lang.StringBuilder` |

##### `entryFor` (`java.util.jar.JarFile`)

| Change | Delta |             % | Samples | Caller     | Location                              |
| -----: | ----: | ------------: | ------: | ---------- | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `entryFor` | `java.util.jar.JavaUtilJarAccessImpl` |

##### `clone` (`java.lang.Object`)

| Change | Delta |             % | Samples | Caller        | Location           |
| -----: | ----: | ------------: | ------: | ------------- | ------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `copyOfRange` | `java.util.Arrays` |

##### `addConstantNameAndType` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change | Delta |             % | Samples | Caller                       | Location                                     |
| -----: | ----: | ------------: | ------: | ---------------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `addConstantMemberReference` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `lambda$boxed$0` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % | Samples | Caller  | Location                                                                          |
| -----: | ----: | -----: | ------: | ------- | --------------------------------------------------------------------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x00000070011a7540` |

##### `collectGarbage` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

| Change | Delta |             % | Samples | Caller                | Location                                                 |
| -----: | ----: | ------------: | ------: | --------------------- | -------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `afterOperationSetUp` | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin` |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Caller  | Location                                            |
| -----: | ----: | -----: | --------: | ------- | --------------------------------------------------- |
| -15.2% |   -37 | 100.0% | 243 → 206 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller            | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------- | ---------------------------------------------------------- |
| -14.0% |   -26 | 100.0% | 186 → 160 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `newNode` (`java.util.HashMap`)

|  Change | Delta |             % |   Samples | Caller            | Location            |
| ------: | ----: | ------------: | --------: | ----------------- | ------------------- |
|   -7.6% |   -21 | 49.6% → 47.2% | 276 → 255 | `putVal`          | `java.util.HashMap` |
|   +0.7% |    +2 | 50.3% → 52.2% | 280 → 282 | `computeIfAbsent` | `java.util.HashMap` |
| +200.0% |    +2 |   0.2% → 0.6% |     1 → 3 | `merge`           | `java.util.HashMap` |

##### `lambda$collectClusters$0` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller  | Location                                                                              |
| -----: | ----: | -----: | --------: | ------- | ------------------------------------------------------------------------------------- |
|  -6.7% |   -14 | 100.0% | 210 → 196 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940` |

##### `resize` (`java.util.HashMap`)

| Change | Delta |             % |   Samples | Caller            | Location            |
| -----: | ----: | ------------: | --------: | ----------------- | ------------------- |
| -12.3% |   -17 | 60.5% → 55.5% | 138 → 121 | `computeIfAbsent` | `java.util.HashMap` |
|  +7.9% |    +7 | 39.0% → 44.0% |   89 → 96 | `putVal`          | `java.util.HashMap` |

##### `range` (`java.util.stream.IntStream`)

| Change | Delta |      % | Samples | Caller                  | Location                                    |
| -----: | ----: | -----: | ------: | ----------------------- | ------------------------------------------- |
| -32.0% |    -8 | 100.0% | 25 → 17 | `lambda$generateData$5` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `entrySet` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller          | Location            |
| -----: | ----: | -----: | ------: | --------------- | ------------------- |
| -17.9% |    -5 | 100.0% | 28 → 23 | `putMapEntries` | `java.util.HashMap` |

##### `opWrapSink` (`java.util.stream.IntPipeline$1`)

| Change | Delta |      % | Samples | Caller     | Location                            |
| -----: | ----: | -----: | ------: | ---------- | ----------------------------------- |
| -20.0% |    -5 | 100.0% | 25 → 20 | `wrapSink` | `java.util.stream.AbstractPipeline` |

##### `lambda$generateData$4` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Caller  | Location                                            |
| -----: | ----: | -----: | ------: | ------- | --------------------------------------------------- |
| -13.2% |    -5 | 100.0% | 38 → 33 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % | Samples | Caller            | Location                                               |
| -----: | ----: | -----: | ------: | ----------------- | ------------------------------------------------------ |
| -28.6% |    -4 | 100.0% | 14 → 10 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % |   Samples | Caller           | Location                                                   |
| -----: | ----: | ------------: | --------: | ---------------- | ---------------------------------------------------------- |
|  -2.3% |    -3 | 97.8% → 97.7% | 131 → 128 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `allocateInstance` (`jdk.internal.misc.Unsafe`)

| Change | Delta |      % | Samples | Caller             | Location                              |
| -----: | ----: | -----: | ------: | ------------------ | ------------------------------------- |
| -27.3% |    -3 | 100.0% |  11 → 8 | `allocateInstance` | `java.lang.invoke.DirectMethodHandle` |

##### `copyOfRangeByte` (`java.util.Arrays`)

|  Change | Delta |             % | Samples | Caller        | Location           |
| ------: | ----: | ------------: | ------: | ------------- | ------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `copyOfRange` | `java.util.Arrays` |

##### `mapToObj` (`java.util.stream.DoublePipeline`)

| Change | Delta |      % | Samples | Caller  | Location                          |
| -----: | ----: | -----: | ------: | ------- | --------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `boxed` | `java.util.stream.DoublePipeline` |

##### `<init>` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % | Samples | Caller         | Location                                    |
| ------: | ----: | ------------: | ------: | -------------- | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `visitMethod` (`jdk.internal.org.objectweb.asm.ClassWriter`)

|  Change | Delta |             % | Samples | Caller               | Location                                       |
| ------: | ----: | ------------: | ------: | -------------------- | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `generateInnerClass` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `<init>` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change | Delta |      % | Samples | Caller   | Location                                     |
| -----: | ----: | -----: | ------: | -------- | -------------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `<init>` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `newLinkedHashMap` (`java.util.LinkedHashMap`)

| Change | Delta |      % | Samples | Caller   | Location                   |
| -----: | ----: | -----: | ------: | -------- | -------------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `<init>` | `java.util.jar.Attributes` |

##### `<init>` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change | Delta |             % | Samples | Caller   | Location                                          |
| ------: | ----: | ------------: | ------: | -------- | ------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `create` | `jdk.internal.org.objectweb.asm.AnnotationWriter` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |         Samples | Function                 | Location                                                   |
| -----: | ----: | ------------: | --------------: | ------------------------ | ---------------------------------------------------------- |
|  +3.5% |  +578 | 21.8% → 22.4% | 16,425 → 17,003 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +4.3% |  +530 | 16.2% → 16.8% | 12,191 → 12,721 | `add`                    | `java.util.ArrayList`                                      |
|  +3.7% |  +475 | 17.2% → 17.8% | 13,001 → 13,476 | `collectClusters`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +0.6% |  +441 | 99.5% → 99.4% | 75,003 → 75,444 | `doExec`                 | `java.util.concurrent.ForkJoinTask`                        |
|  +0.6% |  +441 | 99.5% → 99.4% | 75,003 → 75,444 | `topLevelExec`           | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  +0.6% |  +441 | 99.5% → 99.4% | 75,003 → 75,444 | `scan`                   | `java.util.concurrent.ForkJoinPool`                        |
|  +0.6% |  +441 | 99.5% → 99.4% | 75,003 → 75,444 | `runWorker`              | `java.util.concurrent.ForkJoinPool`                        |
|  +0.6% |  +441 | 99.5% → 99.4% | 75,003 → 75,444 | `run`                    | `java.util.concurrent.ForkJoinWorkerThread`                |
|  +0.6% |  +439 | 99.5% → 99.4% | 75,000 → 75,439 | `compute`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|  +0.6% |  +439 | 99.5% → 99.4% | 75,000 → 75,439 | `exec`                   | `java.util.concurrent.RecursiveTask`                       |
|  +0.5% |  +276 | 79.8% → 79.6% | 60,125 → 60,401 | `awaitDone`              | `java.util.concurrent.ForkJoinTask`                        |
|  +0.5% |  +276 | 79.8% → 79.6% | 60,125 → 60,401 | `join`                   | `java.util.concurrent.ForkJoinTask`                        |
|  +0.8% |  +234 | 38.8% → 38.9% | 29,255 → 29,489 | `toArray`                | `java.util.ArrayList`                                      |
|  +0.3% |  +211 | 91.1% → 90.7% | 68,644 → 68,855 | `copyOf`                 | `java.util.Arrays`                                         |
| +46.3% |  +176 |   0.5% → 0.7% |       380 → 556 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +46.3% |  +176 |   0.5% → 0.7% |       380 → 556 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +0.3% |  +175 | 79.0% → 78.7% | 59,526 → 59,701 | `tryRemoveAndExec`       | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| +48.7% |  +170 |   0.5% → 0.7% |       349 → 519 | `average`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +3.0% |  +103 |   4.5% → 4.6% |   3,424 → 3,527 | `findNearestCentroid`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +35.7% |   +86 |   0.3% → 0.4% |       241 → 327 | `createSubtask`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Standard library

| Change | Delta |             % |         Samples | Function           | Location                                             |
| -----: | ----: | ------------: | --------------: | ------------------ | ---------------------------------------------------- |
|  +4.3% |  +530 | 16.2% → 16.8% | 12,191 → 12,721 | `add`              | `java.util.ArrayList`                                |
|  +0.6% |  +441 | 99.5% → 99.4% | 75,003 → 75,444 | `doExec`           | `java.util.concurrent.ForkJoinTask`                  |
|  +0.6% |  +441 | 99.5% → 99.4% | 75,003 → 75,444 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  +0.6% |  +441 | 99.5% → 99.4% | 75,003 → 75,444 | `scan`             | `java.util.concurrent.ForkJoinPool`                  |
|  +0.6% |  +441 | 99.5% → 99.4% | 75,003 → 75,444 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                  |
|  +0.6% |  +441 | 99.5% → 99.4% | 75,003 → 75,444 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`          |
|  +0.6% |  +439 | 99.5% → 99.4% | 75,000 → 75,439 | `exec`             | `java.util.concurrent.RecursiveTask`                 |
|  +0.5% |  +276 | 79.8% → 79.6% | 60,125 → 60,401 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                  |
|  +0.5% |  +276 | 79.8% → 79.6% | 60,125 → 60,401 | `join`             | `java.util.concurrent.ForkJoinTask`                  |
|  +0.8% |  +234 | 38.8% → 38.9% | 29,255 → 29,489 | `toArray`          | `java.util.ArrayList`                                |
|  +0.3% |  +211 | 91.1% → 90.7% | 68,644 → 68,855 | `copyOf`           | `java.util.Arrays`                                   |
|  +0.3% |  +175 | 79.0% → 78.7% | 59,526 → 59,701 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  +0.7% |   +74 |         14.5% | 10,929 → 11,003 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`                  |
| +20.4% |   +68 |   0.4% → 0.5% |       333 → 401 | `evaluate`         | `java.util.stream.AbstractPipeline`                  |
| +20.2% |   +67 |   0.4% → 0.5% |       331 → 398 | `wrapAndCopyInto`  | `java.util.stream.AbstractPipeline`                  |
| +19.6% |   +65 |   0.4% → 0.5% |       331 → 396 | `copyInto`         | `java.util.stream.AbstractPipeline`                  |
| +16.1% |   +61 |   0.5% → 0.6% |       380 → 441 | `invokeStatic`     | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |
| +16.1% |   +61 |   0.5% → 0.6% |       380 → 441 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`  |
| +16.1% |   +61 |   0.5% → 0.6% |       380 → 441 | `invokeImpl`       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| +16.1% |   +61 |   0.5% → 0.6% |       380 → 441 | `invoke`           | `jdk.internal.reflect.DirectMethodHandleAccessor`    |

##### Ours

| Change | Delta |             % |         Samples | Function                    | Location                                                               |
| -----: | ----: | ------------: | --------------: | --------------------------- | ---------------------------------------------------------------------- |
|  +3.5% |  +578 | 21.8% → 22.4% | 16,425 → 17,003 | `computeDirectly`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +3.7% |  +475 | 17.2% → 17.8% | 13,001 → 13,476 | `collectClusters`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +0.6% |  +439 | 99.5% → 99.4% | 75,000 → 75,439 | `compute`                   | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| +46.3% |  +176 |   0.5% → 0.7% |       380 → 556 | `computeClusterAverages`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +46.3% |  +176 |   0.5% → 0.7% |       380 → 556 | `computeDirectly`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +48.7% |  +170 |   0.5% → 0.7% |       349 → 519 | `average`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +3.0% |  +103 |   4.5% → 4.6% |   3,424 → 3,527 | `findNearestCentroid`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +35.7% |   +86 |   0.3% → 0.4% |       241 → 327 | `createSubtask`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +19.6% |   +62 |   0.4% → 0.5% |       317 → 379 | `createSubtask`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +16.3% |   +62 |   0.5% → 0.6% |       380 → 442 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher`                                        |
| +16.4% |   +61 |   0.5% → 0.6% |       373 → 434 | `main`                      | `org.renaissance.harness.RenaissanceSuite$`                            |
| +16.1% |   +61 |   0.5% → 0.6% |       380 → 441 | `main`                      | `org.renaissance.harness.RenaissanceSuite`                             |
| +16.0% |   +61 |   0.5% → 0.6% |       382 → 443 | `launchHarnessClass`        | `org.renaissance.core.Launcher`                                        |
| +16.0% |   +61 |   0.5% → 0.6% |       382 → 443 | `main`                      | `org.renaissance.core.Launcher`                                        |
| +18.3% |   +60 |   0.4% → 0.5% |       328 → 388 | `setUpBeforeAll`            | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| +17.2% |   +59 |          0.5% |       344 → 403 | `runBenchmarks$$anonfun$1`  | `org.renaissance.harness.RenaissanceSuite$`                            |
| +17.2% |   +59 |          0.5% |       344 → 403 | `applyVoid`                 | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0` |
| +17.2% |   +59 |          0.5% |       344 → 403 | `runBenchmarks`             | `org.renaissance.harness.RenaissanceSuite$`                            |
| +15.7% |   +54 |          0.5% |       344 → 398 | `executeBenchmark`          | `org.renaissance.harness.ExecutionDriver`                              |
| +35.6% |   +52 |   0.2% → 0.3% |       146 → 198 | `add`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |         Samples | Function                   | Location                                                               |
| -----: | ----: | ------------: | --------------: | -------------------------- | ---------------------------------------------------------------------- |
|  -6.5% |  -998 | 20.3% → 18.9% | 15,311 → 14,313 | `lambda$run$0`             | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -6.5% |  -998 | 20.3% → 18.9% | 15,311 → 14,313 | `call`                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |
|  -6.5% |  -998 | 20.3% → 18.9% | 15,311 → 14,313 | `exec`                     | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|  -5.4% |  -841 | 20.7% → 19.5% | 15,622 → 14,781 | `invoke`                   | `java.util.concurrent.ForkJoinTask`                                    |
|  -0.7% |  -387 | 76.5% → 75.4% | 57,634 → 57,247 | `combineResults`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -0.7% |  -384 | 76.5% → 75.5% | 57,642 → 57,258 | `merge`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -0.6% |  -365 | 75.8% → 74.8% | 57,120 → 56,755 | `lambda$merge$6`           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -0.6% |  -364 | 75.8% → 74.8% | 57,123 → 56,759 | `lambda$merge$7`           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -0.6% |  -364 | 75.8% → 74.8% | 57,123 → 56,759 | `accept`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90` |
|  -0.6% |  -364 | 75.8% → 74.8% | 57,123 → 56,759 | `forEach`                  | `java.util.HashMap`                                                    |
|  -0.6% |  -363 | 75.8% → 74.8% | 57,122 → 56,759 | `merge`                    | `java.util.HashMap`                                                    |
|  -0.6% |  -321 | 76.2% → 75.3% | 57,444 → 57,123 | `apply`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`                    |
|  -0.8% |  -320 | 56.5% → 55.7% | 42,623 → 42,303 | `addAll`                   | `java.util.ArrayList`                                                  |
|  -0.1% |   -32 | 52.8% → 52.4% | 39,813 → 39,781 | `grow`                     | `java.util.ArrayList`                                                  |
|  -4.6% |   -29 |          0.8% |       628 → 599 | `computeIfAbsent`          | `java.util.HashMap`                                                    |
|  -3.1% |   -17 |          0.7% |       557 → 540 | `newNode`                  | `java.util.HashMap`                                                    |
|  -4.2% |   -16 |          0.5% |       384 → 368 | `putMapEntries`            | `java.util.HashMap`                                                    |
|  -4.2% |   -16 |          0.5% |       384 → 368 | `<init>`                   | `java.util.HashMap`                                                    |
|  -3.8% |   -14 |          0.5% |       365 → 351 | `putVal`                   | `java.util.HashMap`                                                    |
|  -6.7% |   -14 |          0.3% |       210 → 196 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |

##### Standard library

| Change | Delta |             % |         Samples | Function           | Location                                            |
| -----: | ----: | ------------: | --------------: | ------------------ | --------------------------------------------------- |
|  -6.5% |  -998 | 20.3% → 18.9% | 15,311 → 14,313 | `exec`             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  -5.4% |  -841 | 20.7% → 19.5% | 15,622 → 14,781 | `invoke`           | `java.util.concurrent.ForkJoinTask`                 |
|  -0.6% |  -364 | 75.8% → 74.8% | 57,123 → 56,759 | `forEach`          | `java.util.HashMap`                                 |
|  -0.6% |  -363 | 75.8% → 74.8% | 57,122 → 56,759 | `merge`            | `java.util.HashMap`                                 |
|  -0.8% |  -320 | 56.5% → 55.7% | 42,623 → 42,303 | `addAll`           | `java.util.ArrayList`                               |
|  -0.1% |   -32 | 52.8% → 52.4% | 39,813 → 39,781 | `grow`             | `java.util.ArrayList`                               |
|  -4.6% |   -29 |          0.8% |       628 → 599 | `computeIfAbsent`  | `java.util.HashMap`                                 |
|  -3.1% |   -17 |          0.7% |       557 → 540 | `newNode`          | `java.util.HashMap`                                 |
|  -4.2% |   -16 |          0.5% |       384 → 368 | `putMapEntries`    | `java.util.HashMap`                                 |
|  -4.2% |   -16 |          0.5% |       384 → 368 | `<init>`           | `java.util.HashMap`                                 |
|  -3.8% |   -14 |          0.5% |       365 → 351 | `putVal`           | `java.util.HashMap`                                 |
|  -4.4% |   -10 |          0.3% |       228 → 218 | `resize`           | `java.util.HashMap`                                 |
|  -0.1% |    -8 | 18.9% → 18.8% | 14,254 → 14,246 | `<init>`           | `java.util.ArrayList`                               |
| -17.9% |    -5 |         <0.1% |         28 → 23 | `entrySet`         | `java.util.HashMap`                                 |
| -20.0% |    -5 |         <0.1% |         25 → 20 | `opWrapSink`       | `java.util.stream.IntPipeline$1`                    |
| -66.7% |    -4 |         <0.1% |           6 → 2 | `from`             | `scala.collection.immutable.Map$`                   |
| -66.7% |    -4 |         <0.1% |           6 → 2 | `apply`            | `scala.collection.immutable.Map$`                   |
| -10.0% |    -4 |  0.1% → <0.1% |         40 → 36 | `<init>`           | `java.util.stream.Nodes$ArrayNode`                  |
| -10.0% |    -4 |  0.1% → <0.1% |         40 → 36 | `<init>`           | `java.util.stream.Nodes$FixedNodeBuilder`           |
| -27.3% |    -3 |         <0.1% |          11 → 8 | `allocateInstance` | `jdk.internal.misc.Unsafe`                          |

##### Ours

|  Change | Delta |             % |         Samples | Function                   | Location                                                                              |
| ------: | ----: | ------------: | --------------: | -------------------------- | ------------------------------------------------------------------------------------- |
|   -6.5% |  -998 | 20.3% → 18.9% | 15,311 → 14,313 | `lambda$run$0`             | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -6.5% |  -998 | 20.3% → 18.9% | 15,311 → 14,313 | `call`                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`                |
|   -0.7% |  -387 | 76.5% → 75.4% | 57,634 → 57,247 | `combineResults`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -0.7% |  -384 | 76.5% → 75.5% | 57,642 → 57,258 | `merge`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -0.6% |  -365 | 75.8% → 74.8% | 57,120 → 56,755 | `lambda$merge$6`           | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -0.6% |  -364 | 75.8% → 74.8% | 57,123 → 56,759 | `lambda$merge$7`           | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -0.6% |  -364 | 75.8% → 74.8% | 57,123 → 56,759 | `accept`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`                |
|   -0.6% |  -321 | 76.2% → 75.3% | 57,444 → 57,123 | `apply`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`                                   |
|   -6.7% |   -14 |          0.3% |       210 → 196 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -6.7% |   -14 |          0.3% |       210 → 196 | `apply`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940` |
|  -56.3% |    -9 |         <0.1% |          16 → 7 | `run`                      | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
|  -37.5% |    -6 |         <0.1% |         16 → 10 | `executeOperation`         | `org.renaissance.harness.ExecutionDriver`                                             |
| removed |    -6 |  <0.1% → 0.0% |           6 → 0 | `$anonfun$1`               | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
|  -13.2% |    -5 |  0.1% → <0.1% |         38 → 33 | `lambda$generateData$4`    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| removed |    -2 |  <0.1% → 0.0% |           2 → 0 | `$anonfun$1`               | `org.renaissance.harness.RenaissanceSuite$`                                           |
| removed |    -2 |  <0.1% → 0.0% |           2 → 0 | `apply`                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000008011038c0`                |
| removed |    -1 |  <0.1% → 0.0% |           1 → 0 | `<init>`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
| removed |    -1 |  <0.1% → 0.0% |           1 → 0 | `runEffects`               | `scopt.ORunner$`                                                                      |
| removed |    -1 |  <0.1% → 0.0% |           1 → 0 | `nonArgs$1`                | `scopt.ORunner$`                                                                      |
|  -16.7% |    -1 |         <0.1% |           6 → 5 | `run`                      | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |         Samples | Caller            | Location                                                   |
| -----: | ----: | -----: | --------------: | ----------------- | ---------------------------------------------------------- |
|  +3.5% |  +578 | 100.0% | 16,425 → 17,003 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +3.5% |  +578 | 100.0% | 16,425 → 17,003 | `compute`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `add` (`java.util.ArrayList`)

| Change | Delta |      % |         Samples | Caller            | Location                                                   |
| -----: | ----: | -----: | --------------: | ----------------- | ---------------------------------------------------------- |
|  +4.3% |  +530 | 100.0% | 12,191 → 12,721 | `add`             | `java.util.ArrayList`                                      |
|  +4.3% |  +530 | 100.0% | 12,187 → 12,717 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |         Samples | Caller            | Location                                                   |
| -----: | ----: | -----: | --------------: | ----------------- | ---------------------------------------------------------- |
|  +3.7% |  +475 | 100.0% | 13,001 → 13,476 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doExec` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |         Samples | Caller             | Location                                      |
| -----: | ----: | ------------: | --------------: | ------------------ | --------------------------------------------- |
|  -5.4% |  -841 | 20.8% → 19.6% | 15,622 → 14,781 | `invoke`           | `java.util.concurrent.ForkJoinTask`           |
|  +0.6% |  +441 |        100.0% | 75,003 → 75,444 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +0.3% |  +175 | 79.4% → 79.1% | 59,526 → 59,701 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +0.7% |   +74 |         14.6% | 10,929 → 11,003 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`           |

##### `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |         Samples | Caller | Location                            |
| -----: | ----: | -----: | --------------: | ------ | ----------------------------------- |
|  +0.6% |  +441 | 100.0% | 75,003 → 75,444 | `scan` | `java.util.concurrent.ForkJoinPool` |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |         Samples | Caller      | Location                            |
| -----: | ----: | -----: | --------------: | ----------- | ----------------------------------- |
|  +0.6% |  +441 | 100.0% | 75,003 → 75,444 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |         Samples | Caller | Location                                    |
| -----: | ----: | -----: | --------------: | ------ | ------------------------------------------- |
|  +0.6% |  +441 | 100.0% | 75,003 → 75,444 | `run`  | `java.util.concurrent.ForkJoinWorkerThread` |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |      % |         Samples | Caller | Location                             |
| -----: | ----: | -----: | --------------: | ------ | ------------------------------------ |
|  +0.6% |  +439 | 100.0% | 75,000 → 75,439 | `exec` | `java.util.concurrent.RecursiveTask` |

##### `exec` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |         Samples | Caller   | Location                            |
| -----: | ----: | -----: | --------------: | -------- | ----------------------------------- |
|  +0.6% |  +439 | 100.0% | 75,000 → 75,439 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |         Samples | Caller | Location                            |
| -----: | ----: | -----: | --------------: | ------ | ----------------------------------- |
|  +0.5% |  +276 | 100.0% | 60,125 → 60,401 | `join` | `java.util.concurrent.ForkJoinTask` |

##### `join` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |         Samples | Caller    | Location                                               |
| -----: | ----: | -----: | --------------: | --------- | ------------------------------------------------------ |
|  +0.5% |  +276 | 100.0% | 60,125 → 60,401 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `toArray` (`java.util.ArrayList`)

| Change | Delta |             % |         Samples | Caller   | Location              |
| -----: | ----: | ------------: | --------------: | -------- | --------------------- |
|  +1.6% |  +242 | 51.3% → 51.7% | 15,001 → 15,243 | `addAll` | `java.util.ArrayList` |
|  -0.1% |    -8 | 48.7% → 48.3% | 14,254 → 14,246 | `<init>` | `java.util.ArrayList` |

##### `copyOf` (`java.util.Arrays`)

| Change | Delta |             % |         Samples | Caller     | Location                       |
| -----: | ----: | ------------: | --------------: | ---------- | ------------------------------ |
|  +0.8% |  +234 | 42.6% → 42.8% | 29,255 → 29,489 | `toArray`  | `java.util.ArrayList`          |
|  -0.1% |   -38 | 57.4% → 57.1% | 39,370 → 39,332 | `grow`     | `java.util.ArrayList`          |
| +83.3% |   +15 |         <0.1% |         18 → 33 | `getBytes` | `jdk.internal.loader.Resource` |
| +13.0% |    +3 |         <0.1% |         23 → 26 | `copyOf`   | `java.util.Arrays`             |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller            | Location                                               |
| -----: | ----: | -----: | --------: | ----------------- | ------------------------------------------------------ |
| +46.3% |  +176 | 100.0% | 380 → 556 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller            | Location                                               |
| -----: | ----: | -----: | --------: | ----------------- | ------------------------------------------------------ |
| +46.3% |  +176 | 100.0% | 380 → 556 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +46.3% |  +176 | 100.0% | 380 → 556 | `compute`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |         Samples | Caller      | Location                            |
| -----: | ----: | -----: | --------------: | ----------- | ----------------------------------- |
|  +0.3% |  +175 | 100.0% | 59,526 → 59,701 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller                   | Location                                               |
| -----: | ----: | -----: | --------: | ------------------------ | ------------------------------------------------------ |
| +48.7% |  +170 | 100.0% | 349 → 519 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |       Samples | Caller            | Location                                                   |
| -----: | ----: | -----: | ------------: | ----------------- | ---------------------------------------------------------- |
|  +3.0% |  +103 | 100.0% | 3,424 → 3,527 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller    | Location                                               |
| -----: | ----: | -----: | --------: | --------- | ------------------------------------------------------ |
| +35.7% |   +86 | 100.0% | 241 → 327 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |         Samples | Caller      | Location                            |
| -----: | ----: | -----: | --------------: | ----------- | ----------------------------------- |
|  +0.7% |   +74 | 100.0% | 10,929 → 11,003 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `evaluate` (`java.util.stream.AbstractPipeline`)

| Change | Delta |             % |   Samples | Caller                | Location                             |
| -----: | ----: | ------------: | --------: | --------------------- | ------------------------------------ |
| +18.3% |   +60 | 98.5% → 96.8% | 328 → 388 | `collect`             | `java.util.stream.ReferencePipeline` |
| +13.9% |   +28 | 60.4% → 57.1% | 201 → 229 | `evaluateToArrayNode` | `java.util.stream.AbstractPipeline`  |

##### `wrapAndCopyInto` (`java.util.stream.AbstractPipeline`)

| Change | Delta |             % |   Samples | Caller               | Location                              |
| -----: | ----: | ------------: | --------: | -------------------- | ------------------------------------- |
| +18.3% |   +60 | 99.1% → 97.5% | 328 → 388 | `evaluateSequential` | `java.util.stream.ReduceOps$ReduceOp` |
| +16.7% |   +24 | 43.5% → 42.2% | 144 → 168 | `evaluate`           | `java.util.stream.AbstractPipeline`   |

##### `copyInto` (`java.util.stream.AbstractPipeline`)

| Change | Delta |      % |   Samples | Caller            | Location                            |
| -----: | ----: | -----: | --------: | ----------------- | ----------------------------------- |
| +19.6% |   +65 | 100.0% | 331 → 396 | `wrapAndCopyInto` | `java.util.stream.AbstractPipeline` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x0000007001004800`)

| Change | Delta |      % |   Samples | Caller   | Location                                            |
| -----: | ----: | -----: | --------: | -------- | --------------------------------------------------- |
| +16.1% |   +61 | 100.0% | 380 → 441 | `invoke` | `java.lang.invoke.LambdaForm$MH.0x0000007001009800` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`)

| Change | Delta |      % |   Samples | Caller           | Location                           |
| -----: | ----: | -----: | --------: | ---------------- | ---------------------------------- |
| +16.1% |   +61 | 100.0% | 380 → 441 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder` |

##### `invokeImpl` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Caller   | Location                                          |
| -----: | ----: | -----: | --------: | -------- | ------------------------------------------------- |
| +16.1% |   +61 | 100.0% | 380 → 441 | `invoke` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Caller   | Location                   |
| -----: | ----: | -----: | --------: | -------- | -------------------------- |
| +16.1% |   +61 | 100.0% | 380 → 441 | `invoke` | `java.lang.reflect.Method` |

##### `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller    | Location                                               |
| -----: | ----: | -----: | --------: | --------- | ------------------------------------------------------ |
| +19.6% |   +62 | 100.0% | 317 → 379 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `loadAndInvokeHarnessClass` (`org.renaissance.core.Launcher`)

| Change | Delta |      % |   Samples | Caller               | Location                        |
| -----: | ----: | -----: | --------: | -------------------- | ------------------------------- |
| +16.3% |   +62 | 100.0% | 380 → 442 | `launchHarnessClass` | `org.renaissance.core.Launcher` |

##### `main` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |      % |   Samples | Caller | Location                                   |
| -----: | ----: | -----: | --------: | ------ | ------------------------------------------ |
| +16.4% |   +61 | 100.0% | 373 → 434 | `main` | `org.renaissance.harness.RenaissanceSuite` |

##### `main` (`org.renaissance.harness.RenaissanceSuite`)

| Change | Delta |      % |   Samples | Caller         | Location                                             |
| -----: | ----: | -----: | --------: | -------------- | ---------------------------------------------------- |
| +16.1% |   +61 | 100.0% | 380 → 441 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |

##### `launchHarnessClass` (`org.renaissance.core.Launcher`)

| Change | Delta |      % |   Samples | Caller | Location                        |
| -----: | ----: | -----: | --------: | ------ | ------------------------------- |
| +16.0% |   +61 | 100.0% | 382 → 443 | `main` | `org.renaissance.core.Launcher` |

##### `setUpBeforeAll` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |      % |   Samples | Caller             | Location                                  |
| -----: | ----: | -----: | --------: | ------------------ | ----------------------------------------- |
| +18.3% |   +60 | 100.0% | 328 → 388 | `executeBenchmark` | `org.renaissance.harness.ExecutionDriver` |

##### `runBenchmarks$$anonfun$1` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |      % |   Samples | Caller      | Location                                                               |
| -----: | ----: | -----: | --------: | ----------- | ---------------------------------------------------------------------- |
| +17.2% |   +59 | 100.0% | 344 → 403 | `applyVoid` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0` |

##### `applyVoid` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0`)

| Change | Delta |      % |   Samples | Caller  | Location                             |
| -----: | ----: | -----: | --------: | ------- | ------------------------------------ |
| +17.2% |   +59 | 100.0% | 344 → 403 | `apply` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |      % |   Samples | Caller | Location                                    |
| -----: | ----: | -----: | --------: | ------ | ------------------------------------------- |
| +17.2% |   +59 | 100.0% | 344 → 403 | `main` | `org.renaissance.harness.RenaissanceSuite$` |

##### `executeBenchmark` (`org.renaissance.harness.ExecutionDriver`)

| Change | Delta |      % |   Samples | Caller                     | Location                                    |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------- |
| +15.7% |   +54 | 100.0% | 344 → 398 | `runBenchmarks$$anonfun$1` | `org.renaissance.harness.RenaissanceSuite$` |

##### `add` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller           | Location                                                  |
| -----: | ----: | -----: | --------: | ---------------- | --------------------------------------------------------- |
| +35.6% |   +52 | 100.0% | 146 → 198 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |         Samples | Caller | Location                                                               |
| -----: | ----: | -----: | --------------: | ------ | ---------------------------------------------------------------------- |
|  -6.5% |  -998 | 100.0% | 15,311 → 14,313 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`)

| Change | Delta |      % |         Samples | Caller | Location                                            |
| -----: | ----: | -----: | --------------: | ------ | --------------------------------------------------- |
|  -6.5% |  -998 | 100.0% | 15,311 → 14,313 | `exec` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change | Delta |      % |         Samples | Caller   | Location                            |
| -----: | ----: | -----: | --------------: | -------- | ----------------------------------- |
|  -6.5% |  -998 | 100.0% | 15,311 → 14,313 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `invoke` (`java.util.concurrent.ForkJoinTask`)

| Change |  Delta |             % |         Samples | Caller         | Location                                               |
| -----: | -----: | ------------: | --------------: | -------------- | ------------------------------------------------------ |
|  -6.5% | -1,000 | 98.0% → 96.8% | 15,308 → 14,308 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
| +48.0% |   +167 |   2.2% → 3.5% |       348 → 515 | `average`      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |         Samples | Caller           | Location                                                   |
| -----: | ----: | -----: | --------------: | ---------------- | ---------------------------------------------------------- |
|  -0.7% |  -387 | 100.0% | 57,634 → 57,247 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -0.7% |  -387 | 100.0% | 57,634 → 57,247 | `compute`        | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |         Samples | Caller           | Location                                                   |
| -----: | ----: | -----: | --------------: | ---------------- | ---------------------------------------------------------- |
|  -0.7% |  -387 | 100.0% | 57,634 → 57,247 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +37.5% |    +3 |  <0.1% |          8 → 11 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |         Samples | Caller  | Location                                            |
| -----: | ----: | -----: | --------------: | ------- | --------------------------------------------------- |
|  -0.6% |  -365 | 100.0% | 57,120 → 56,755 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |         Samples | Caller   | Location                                                               |
| -----: | ----: | -----: | --------------: | -------- | ---------------------------------------------------------------------- |
|  -0.6% |  -364 | 100.0% | 57,123 → 56,759 | `accept` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`)

| Change | Delta |      % |         Samples | Caller    | Location            |
| -----: | ----: | -----: | --------------: | --------- | ------------------- |
|  -0.6% |  -364 | 100.0% | 57,123 → 56,759 | `forEach` | `java.util.HashMap` |

##### `forEach` (`java.util.HashMap`)

| Change | Delta |      % |         Samples | Caller  | Location                                    |
| -----: | ----: | -----: | --------------: | ------- | ------------------------------------------- |
|  -0.6% |  -364 | 100.0% | 57,123 → 56,759 | `merge` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge` (`java.util.HashMap`)

| Change | Delta |      % |         Samples | Caller           | Location                                    |
| -----: | ----: | -----: | --------------: | ---------------- | ------------------------------------------- |
|  -0.6% |  -363 | 100.0% | 57,122 → 56,759 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`)

| Change | Delta |     % |         Samples | Caller   | Location                           |
| -----: | ----: | ----: | --------------: | -------- | ---------------------------------- |
|  -0.6% |  -365 | 99.4% | 57,120 → 56,755 | `merge`  | `java.util.HashMap`                |
| +13.6% |   +44 |  0.6% |       324 → 368 | `accept` | `java.util.stream.IntPipeline$1$1` |
| -13.2% |    -5 |  0.1% |         38 → 33 | `<init>` | `java.util.stream.Nodes$ArrayNode` |

##### `addAll` (`java.util.ArrayList`)

| Change | Delta |      % |         Samples | Caller           | Location                                    |
| -----: | ----: | -----: | --------------: | ---------------- | ------------------------------------------- |
|  -0.8% |  -320 | 100.0% | 42,623 → 42,303 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `grow` (`java.util.ArrayList`)

| Change | Delta |             % |         Samples | Caller   | Location              |
| -----: | ----: | ------------: | --------------: | -------- | --------------------- |
|  -2.0% |  -562 | 69.4% → 68.0% | 27,622 → 27,060 | `addAll` | `java.util.ArrayList` |
|  +4.3% |  +530 | 30.6% → 32.0% | 12,191 → 12,721 | `grow`   | `java.util.ArrayList` |
|  +4.3% |  +530 | 30.6% → 32.0% | 12,191 → 12,721 | `add`    | `java.util.ArrayList` |

##### `computeIfAbsent` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller            | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------- | ---------------------------------------------------------- |
|  -4.6% |   -29 | 100.0% | 628 → 599 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `newNode` (`java.util.HashMap`)

|  Change | Delta |             % |   Samples | Caller            | Location            |
| ------: | ----: | ------------: | --------: | ----------------- | ------------------- |
|   -7.6% |   -21 | 49.6% → 47.2% | 276 → 255 | `putVal`          | `java.util.HashMap` |
|   +0.7% |    +2 | 50.3% → 52.2% | 280 → 282 | `computeIfAbsent` | `java.util.HashMap` |
| +200.0% |    +2 |   0.2% → 0.6% |     1 → 3 | `merge`           | `java.util.HashMap` |

##### `putMapEntries` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller   | Location            |
| -----: | ----: | -----: | --------: | -------- | ------------------- |
|  -4.2% |   -16 | 100.0% | 384 → 368 | `<init>` | `java.util.HashMap` |

##### `<init>` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Caller  | Location                                    |
| -----: | ----: | -----: | --------: | ------- | ------------------------------------------- |
|  -4.2% |   -16 | 100.0% | 384 → 368 | `merge` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `putVal` (`java.util.HashMap`)

| Change | Delta |             % |   Samples | Caller          | Location            |
| -----: | ----: | ------------: | --------: | --------------- | ------------------- |
|  -3.4% |   -12 | 97.5% → 98.0% | 356 → 344 | `putMapEntries` | `java.util.HashMap` |
| -22.2% |    -2 |   2.5% → 2.0% |     9 → 7 | `put`           | `java.util.HashMap` |

##### `lambda$collectClusters$0` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller  | Location                                                                              |
| -----: | ----: | -----: | --------: | ------- | ------------------------------------------------------------------------------------- |
|  -6.7% |   -14 | 100.0% | 210 → 196 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940` |

##### `resize` (`java.util.HashMap`)

| Change | Delta |             % |   Samples | Caller            | Location            |
| -----: | ----: | ------------: | --------: | ----------------- | ------------------- |
| -12.3% |   -17 | 60.5% → 55.5% | 138 → 121 | `computeIfAbsent` | `java.util.HashMap` |
|  +7.9% |    +7 | 39.0% → 44.0% |   89 → 96 | `putVal`          | `java.util.HashMap` |

##### `<init>` (`java.util.ArrayList`)

| Change | Delta |      % |         Samples | Caller           | Location                                    |
| -----: | ----: | -----: | --------------: | ---------------- | ------------------------------------------- |
|  -0.1% |    -8 | 100.0% | 14,254 → 14,246 | `lambda$merge$6` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `entrySet` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller          | Location            |
| -----: | ----: | -----: | ------: | --------------- | ------------------- |
| -17.9% |    -5 | 100.0% | 28 → 23 | `putMapEntries` | `java.util.HashMap` |

##### `opWrapSink` (`java.util.stream.IntPipeline$1`)

| Change | Delta |      % | Samples | Caller     | Location                            |
| -----: | ----: | -----: | ------: | ---------- | ----------------------------------- |
| -20.0% |    -5 | 100.0% | 25 → 20 | `wrapSink` | `java.util.stream.AbstractPipeline` |

##### `from` (`scala.collection.immutable.Map$`)

| Change | Delta |      % | Samples | Caller  | Location                          |
| -----: | ----: | -----: | ------: | ------- | --------------------------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `from`  | `scala.collection.immutable.Map$` |
| -66.7% |    -4 | 100.0% |   6 → 2 | `apply` | `scala.collection.MapFactory`     |

##### `apply` (`scala.collection.immutable.Map$`)

| Change | Delta |      % | Samples | Caller | Location                                    |
| -----: | ----: | -----: | ------: | ------ | ------------------------------------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `main` | `org.renaissance.harness.RenaissanceSuite$` |

##### `<init>` (`java.util.stream.Nodes$ArrayNode`)

| Change | Delta |      % | Samples | Caller   | Location                                  |
| -----: | ----: | -----: | ------: | -------- | ----------------------------------------- |
| -10.0% |    -4 | 100.0% | 40 → 36 | `<init>` | `java.util.stream.Nodes$FixedNodeBuilder` |

##### `<init>` (`java.util.stream.Nodes$FixedNodeBuilder`)

| Change | Delta |      % | Samples | Caller    | Location                 |
| -----: | ----: | -----: | ------: | --------- | ------------------------ |
| -10.0% |    -4 | 100.0% | 40 → 36 | `builder` | `java.util.stream.Nodes` |

##### `allocateInstance` (`jdk.internal.misc.Unsafe`)

| Change | Delta |      % | Samples | Caller             | Location                              |
| -----: | ----: | -----: | ------: | ------------------ | ------------------------------------- |
| -27.3% |    -3 | 100.0% |  11 → 8 | `allocateInstance` | `java.lang.invoke.DirectMethodHandle` |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940`)

| Change | Delta |      % |   Samples | Caller            | Location            |
| -----: | ----: | -----: | --------: | ----------------- | ------------------- |
|  -6.7% |   -14 | 100.0% | 210 → 196 | `computeIfAbsent` | `java.util.HashMap` |

##### `run` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |      % | Samples | Caller             | Location                                  |
| -----: | ----: | -----: | ------: | ------------------ | ----------------------------------------- |
| -56.3% |    -9 | 100.0% |  16 → 7 | `executeOperation` | `org.renaissance.harness.ExecutionDriver` |

##### `executeOperation` (`org.renaissance.harness.ExecutionDriver`)

| Change | Delta |      % | Samples | Caller             | Location                                  |
| -----: | ----: | -----: | ------: | ------------------ | ----------------------------------------- |
| -37.5% |    -6 | 100.0% | 16 → 10 | `executeBenchmark` | `org.renaissance.harness.ExecutionDriver` |

##### `$anonfun$1` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |             % | Samples | Caller               | Location                                  |
| ------: | ----: | ------------: | ------: | -------------------- | ----------------------------------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `$anonfun$adapted$1` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `lambda$generateData$4` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Caller  | Location                                            |
| -----: | ----: | -----: | ------: | ------- | --------------------------------------------------- |
| -13.2% |    -5 | 100.0% | 38 → 33 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `$anonfun$1` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Caller  | Location                                                               |
| ------: | ----: | ------------: | ------: | ------- | ---------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `apply` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000008011038c0` |

##### `apply` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000008011038c0`)

|  Change | Delta |             % | Samples | Caller  | Location          |
| ------: | ----: | ------------: | ------: | ------- | ----------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `apply` | `scala.util.Try$` |

##### `<init>` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % | Samples | Caller         | Location                                    |
| ------: | ----: | ------------: | ------: | -------------- | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `runEffects` (`scopt.ORunner$`)

|  Change | Delta |             % | Samples | Caller  | Location             |
| ------: | ----: | ------------: | ------: | ------- | -------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `parse` | `scopt.OptionParser` |

##### `nonArgs$1` (`scopt.ORunner$`)

|  Change | Delta |             % | Samples | Caller      | Location         |
| ------: | ----: | ------------: | ------: | ----------- | ---------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `runParser` | `scopt.ORunner$` |

##### `run` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Caller       | Location                                  |
| ------: | ----: | ------------: | ------: | ------------ | ----------------------------------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `$anonfun$1` | `org.renaissance.jdk.concurrent.FjKmeans` |
|     new |    +5 | 0.0% → 100.0% |   0 → 5 | `$anonfun$2` | `org.renaissance.jdk.concurrent.FjKmeans` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |         Samples | Callee                | Location                                                   |
| -----: | ----: | ------------: | --------------: | --------------------- | ---------------------------------------------------------- |
|  +3.5% |  +578 |        100.0% | 16,425 → 17,003 | `computeDirectly`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +3.7% |  +475 | 79.2% → 79.3% | 13,001 → 13,476 | `collectClusters`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +3.0% |  +103 | 20.8% → 20.7% |   3,424 → 3,527 | `findNearestCentroid` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `add` (`java.util.ArrayList`)

| Change | Delta |      % |         Samples | Callee | Location              |
| -----: | ----: | -----: | --------------: | ------ | --------------------- |
|  +4.3% |  +530 | 100.0% | 12,191 → 12,721 | `grow` | `java.util.ArrayList` |
|  +4.3% |  +530 | 100.0% | 12,191 → 12,721 | `add`  | `java.util.ArrayList` |

##### `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |         Samples | Callee            | Location              |
| -----: | ----: | ------------: | --------------: | ----------------- | --------------------- |
|  +4.3% |  +530 | 93.7% → 94.4% | 12,187 → 12,717 | `add`             | `java.util.ArrayList` |
|  -4.6% |   -29 |   4.8% → 4.4% |       628 → 599 | `computeIfAbsent` | `java.util.HashMap`   |

##### `doExec` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |         Samples | Callee | Location                                            |
| -----: | ----: | ------------: | --------------: | ------ | --------------------------------------------------- |
|  -6.5% |  -998 | 20.4% → 19.0% | 15,311 → 14,313 | `exec` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  +0.6% |  +439 |        100.0% | 75,000 → 75,439 | `exec` | `java.util.concurrent.RecursiveTask`                |

##### `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |         Samples | Callee   | Location                            |
| -----: | ----: | -----: | --------------: | -------- | ----------------------------------- |
|  +0.6% |  +441 | 100.0% | 75,003 → 75,444 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `scan` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |         Samples | Callee         | Location                                      |
| -----: | ----: | -----: | --------------: | -------------- | --------------------------------------------- |
|  +0.6% |  +441 | 100.0% | 75,003 → 75,444 | `topLevelExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |         Samples | Callee | Location                            |
| -----: | ----: | -----: | --------------: | ------ | ----------------------------------- |
|  +0.6% |  +441 | 100.0% | 75,003 → 75,444 | `scan` | `java.util.concurrent.ForkJoinPool` |

##### `run` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change | Delta |      % |         Samples | Callee      | Location                            |
| -----: | ----: | -----: | --------------: | ----------- | ----------------------------------- |
|  +0.6% |  +441 | 100.0% | 75,003 → 75,444 | `runWorker` | `java.util.concurrent.ForkJoinPool` |

##### `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % |         Samples | Callee            | Location                                                   |
| -----: | ----: | ------------: | --------------: | ----------------- | ---------------------------------------------------------- |
|  +3.5% |  +578 | 21.9% → 22.5% | 16,425 → 17,003 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -0.7% |  -387 | 76.8% → 75.9% | 57,634 → 57,247 | `combineResults`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +0.5% |  +276 | 80.2% → 80.1% | 60,125 → 60,401 | `join`            | `java.util.concurrent.ForkJoinTask`                        |
| +46.3% |  +176 |   0.5% → 0.7% |       380 → 556 | `computeDirectly` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +35.7% |   +86 |   0.3% → 0.4% |       241 → 327 | `createSubtask`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |         Samples | Callee    | Location                                               |
| -----: | ----: | -----: | --------------: | --------- | ------------------------------------------------------ |
|  +0.6% |  +439 | 100.0% | 75,000 → 75,439 | `compute` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `awaitDone` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |         Samples | Callee             | Location                                      |
| -----: | ----: | ------------: | --------------: | ------------------ | --------------------------------------------- |
|  +0.3% |  +175 | 99.0% → 98.8% | 59,526 → 59,701 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +0.7% |   +74 |         18.2% | 10,929 → 11,003 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`           |

##### `join` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |         Samples | Callee      | Location                            |
| -----: | ----: | -----: | --------------: | ----------- | ----------------------------------- |
|  +0.5% |  +276 | 100.0% | 60,125 → 60,401 | `awaitDone` | `java.util.concurrent.ForkJoinTask` |

##### `toArray` (`java.util.ArrayList`)

| Change | Delta |      % |         Samples | Callee   | Location           |
| -----: | ----: | -----: | --------------: | -------- | ------------------ |
|  +0.8% |  +234 | 100.0% | 29,255 → 29,489 | `copyOf` | `java.util.Arrays` |

##### `copyOf` (`java.util.Arrays`)

| Change | Delta |     % | Samples | Callee   | Location           |
| -----: | ----: | ----: | ------: | -------- | ------------------ |
| +13.0% |    +3 | <0.1% | 23 → 26 | `copyOf` | `java.util.Arrays` |

##### `computeClusterAverages` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % |   Samples | Callee    | Location                                               |
| ------: | ----: | ------------: | --------: | --------- | ------------------------------------------------------ |
|  +48.7% |  +170 | 91.8% → 93.3% | 349 → 519 | `average` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +100.0% |   +10 |   2.6% → 3.6% |   10 → 20 | `boxed`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -12.5% |    -1 |   2.1% → 1.3% |     8 → 7 | `put`     | `java.util.HashMap`                                    |

##### `computeDirectly` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Callee                   | Location                                               |
| -----: | ----: | -----: | --------: | ------------------------ | ------------------------------------------------------ |
| +46.3% |  +176 | 100.0% | 380 → 556 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +46.3% |  +176 | 100.0% | 380 → 556 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |         Samples | Callee   | Location                            |
| -----: | ----: | -----: | --------------: | -------- | ----------------------------------- |
|  +0.3% |  +175 | 100.0% | 59,526 → 59,701 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `average` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % |   Samples | Callee   | Location                                               |
| ------: | ----: | ------------: | --------: | -------- | ------------------------------------------------------ |
|  +48.0% |  +167 | 99.7% → 99.2% | 348 → 515 | `invoke` | `java.util.concurrent.ForkJoinTask`                    |
| +300.0% |    +3 |   0.3% → 0.8% |     1 → 4 | `div`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `helpJoin` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |         Samples | Callee   | Location                            |
| -----: | ----: | -----: | --------------: | -------- | ----------------------------------- |
|  +0.7% |   +74 | 100.0% | 10,929 → 11,003 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `evaluate` (`java.util.stream.AbstractPipeline`)

| Change | Delta |             % |   Samples | Callee               | Location                              |
| -----: | ----: | ------------: | --------: | -------------------- | ------------------------------------- |
| +18.3% |   +60 | 98.5% → 96.8% | 328 → 388 | `evaluateSequential` | `java.util.stream.ReduceOps$ReduceOp` |
| +16.7% |   +24 | 43.2% → 41.9% | 144 → 168 | `wrapAndCopyInto`    | `java.util.stream.AbstractPipeline`   |
|  +7.0% |    +4 | 17.1% → 15.2% |   57 → 61 | `makeNodeBuilder`    | `java.util.stream.ReferencePipeline`  |

##### `wrapAndCopyInto` (`java.util.stream.AbstractPipeline`)

| Change | Delta |              % |   Samples | Callee     | Location                            |
| -----: | ----: | -------------: | --------: | ---------- | ----------------------------------- |
| +19.6% |   +65 | 100.0% → 99.5% | 331 → 396 | `copyInto` | `java.util.stream.AbstractPipeline` |
| -12.0% |    -3 |    7.6% → 5.5% |   25 → 22 | `wrapSink` | `java.util.stream.AbstractPipeline` |

##### `copyInto` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % |   Samples | Callee             | Location                                  |
| ------: | ----: | ------------: | --------: | ------------------ | ----------------------------------------- |
|  +13.4% |   +44 | 99.1% → 93.9% | 328 → 372 | `forEachRemaining` | `java.util.Spliterator$OfInt`             |
|     new |   +16 |   0.0% → 4.0% |    0 → 16 | `forEachRemaining` | `java.util.Spliterators$ArraySpliterator` |
| +166.7% |    +5 |   0.9% → 2.0% |     3 → 8 | `forEachRemaining` | `java.util.Spliterator$OfDouble`          |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x0000007001004800`)

| Change | Delta |      % |   Samples | Callee | Location                                   |
| -----: | ----: | -----: | --------: | ------ | ------------------------------------------ |
| +16.1% |   +61 | 100.0% | 380 → 441 | `main` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`)

| Change | Delta |      % |   Samples | Callee         | Location                                             |
| -----: | ----: | -----: | --------: | -------------- | ---------------------------------------------------- |
| +16.1% |   +61 | 100.0% | 380 → 441 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |

##### `invokeImpl` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Callee           | Location                           |
| -----: | ----: | -----: | --------: | ---------------- | ---------------------------------- |
| +16.1% |   +61 | 100.0% | 380 → 441 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder` |

##### `invoke` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Callee       | Location                                          |
| -----: | ----: | -----: | --------: | ------------ | ------------------------------------------------- |
| +16.1% |   +61 | 100.0% | 380 → 441 | `invokeImpl` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `loadAndInvokeHarnessClass` (`org.renaissance.core.Launcher`)

| Change | Delta |              % |   Samples | Callee                       | Location                            |
| -----: | ----: | -------------: | --------: | ---------------------------- | ----------------------------------- |
| +16.1% |   +61 | 100.0% → 99.8% | 380 → 441 | `invoke`                     | `java.lang.reflect.Method`          |
|    new |    +1 |    0.0% → 0.2% |     0 → 1 | `createClassLoaderForModule` | `org.renaissance.core.ModuleLoader` |

##### `main` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % |   Samples | Callee          | Location                                    |
| ------: | ----: | ------------: | --------: | --------------- | ------------------------------------------- |
|  +17.2% |   +59 | 92.2% → 92.9% | 344 → 403 | `runBenchmarks` | `org.renaissance.harness.RenaissanceSuite$` |
|  -63.6% |    -7 |   2.9% → 0.9% |    11 → 4 | `<clinit>`      | `scala.Predef$`                             |
| +150.0% |    +6 |   1.1% → 2.3% |    4 → 10 | `<init>`        | `org.renaissance.harness.ConfigParser`      |
| +133.3% |    +4 |   0.8% → 1.6% |     3 → 7 | `parse`         | `org.renaissance.harness.ConfigParser`      |
| +200.0% |    +4 |   0.5% → 1.4% |     2 → 6 | `loadClass`     | `java.lang.ClassLoader`                     |

##### `main` (`org.renaissance.harness.RenaissanceSuite`)

| Change | Delta |             % |   Samples | Callee | Location                                    |
| -----: | ----: | ------------: | --------: | ------ | ------------------------------------------- |
| +16.4% |   +61 | 98.2% → 98.4% | 373 → 434 | `main` | `org.renaissance.harness.RenaissanceSuite$` |

##### `launchHarnessClass` (`org.renaissance.core.Launcher`)

|  Change | Delta |             % |   Samples | Callee                      | Location                            |
| ------: | ----: | ------------: | --------: | --------------------------- | ----------------------------------- |
|  +16.3% |   +62 | 99.5% → 99.8% | 380 → 442 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher`     |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `create`                    | `org.renaissance.core.ModuleLoader` |

##### `main` (`org.renaissance.core.Launcher`)

| Change | Delta |      % |   Samples | Callee               | Location                        |
| -----: | ----: | -----: | --------: | -------------------- | ------------------------------- |
| +16.0% |   +61 | 100.0% | 382 → 443 | `launchHarnessClass` | `org.renaissance.core.Launcher` |

##### `setUpBeforeAll` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |              % |   Samples | Callee         | Location                                                           |
| -----: | ----: | -------------: | --------: | -------------- | ------------------------------------------------------------------ |
| +13.4% |   +44 | 100.0% → 95.9% | 328 → 372 | `generateData` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |
|    new |   +16 |    0.0% → 4.1% |    0 → 16 | `toCsvRows`    | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `runBenchmarks$$anonfun$1` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |              % |   Samples | Callee             | Location                                  |
| -----: | ----: | -------------: | --------: | ------------------ | ----------------------------------------- |
| +15.7% |   +54 | 100.0% → 98.8% | 344 → 398 | `executeBenchmark` | `org.renaissance.harness.ExecutionDriver` |
|    new |    +5 |    0.0% → 1.2% |     0 → 5 | `create`           | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0`)

| Change | Delta |      % |   Samples | Callee                     | Location                                    |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------- |
| +17.2% |   +59 | 100.0% | 344 → 403 | `runBenchmarks$$anonfun$1` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |      % |   Samples | Callee    | Location                          |
| -----: | ----: | -----: | --------: | --------- | --------------------------------- |
| +17.2% |   +59 | 100.0% | 344 → 403 | `foreach` | `scala.collection.immutable.List` |

##### `executeBenchmark` (`org.renaissance.harness.ExecutionDriver`)

| Change | Delta |             % |   Samples | Callee             | Location                                  |
| -----: | ----: | ------------: | --------: | ------------------ | ----------------------------------------- |
| +18.3% |   +60 | 95.3% → 97.5% | 328 → 388 | `setUpBeforeAll`   | `org.renaissance.jdk.concurrent.FjKmeans` |
| -37.5% |    -6 |   4.7% → 2.5% |   16 → 10 | `executeOperation` | `org.renaissance.harness.ExecutionDriver` |

##### `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |  Delta |            % |         Samples | Callee   | Location                                               |
| ------: | -----: | -----------: | --------------: | -------- | ------------------------------------------------------ |
|   -6.5% | -1,000 |       100.0% | 15,308 → 14,308 | `invoke` | `java.util.concurrent.ForkJoinTask`                    |
| removed |     -1 | <0.1% → 0.0% |           1 → 0 | `<init>` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`)

| Change | Delta |      % |         Samples | Callee         | Location                                    |
| -----: | ----: | -----: | --------------: | -------------- | ------------------------------------------- |
|  -6.5% |  -998 | 100.0% | 15,311 → 14,313 | `lambda$run$0` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change | Delta |      % |         Samples | Callee | Location                                                               |
| -----: | ----: | -----: | --------------: | ------ | ---------------------------------------------------------------------- |
|  -6.5% |  -998 | 100.0% | 15,311 → 14,313 | `call` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `invoke` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |         Samples | Callee   | Location                            |
| -----: | ----: | -----: | --------------: | -------- | ----------------------------------- |
|  -5.4% |  -841 | 100.0% | 15,622 → 14,781 | `doExec` | `java.util.concurrent.ForkJoinTask` |

##### `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |         Samples | Callee           | Location                                                   |
| -----: | ----: | -----: | --------------: | ---------------- | ---------------------------------------------------------- |
|  -0.7% |  -387 | 100.0% | 57,634 → 57,247 | `merge`          | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -0.7% |  -387 | 100.0% | 57,634 → 57,247 | `combineResults` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |            % |         Samples | Callee               | Location                           |
| ------: | ----: | -----------: | --------------: | -------------------- | ---------------------------------- |
|   -0.6% |  -364 |        99.1% | 57,123 → 56,759 | `forEach`            | `java.util.HashMap`                |
|   -4.2% |   -16 |  0.7% → 0.6% |       384 → 368 | `<init>`             | `java.util.HashMap`                |
| removed |    -1 | <0.1% → 0.0% |           1 → 0 | `linkToTargetMethod` | `java.lang.invoke.Invokers$Holder` |

##### `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % |         Samples | Callee   | Location              |
| -----: | ----: | ------------: | --------------: | -------- | --------------------- |
|  -0.8% |  -320 | 74.6% → 74.5% | 42,623 → 42,303 | `addAll` | `java.util.ArrayList` |
|  -0.1% |    -8 | 25.0% → 25.1% | 14,254 → 14,246 | `<init>` | `java.util.ArrayList` |

##### `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |            % |         Samples | Callee         | Location                               |
| ------: | ----: | -----------: | --------------: | -------------- | -------------------------------------- |
|   -0.6% |  -363 |       100.0% | 57,122 → 56,759 | `merge`        | `java.util.HashMap`                    |
| removed |    -1 | <0.1% → 0.0% |           1 → 0 | `linkCallSite` | `java.lang.invoke.MethodHandleNatives` |

##### `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`)

| Change | Delta |      % |         Samples | Callee           | Location                                    |
| -----: | ----: | -----: | --------------: | ---------------- | ------------------------------------------- |
|  -0.6% |  -364 | 100.0% | 57,123 → 56,759 | `lambda$merge$7` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach` (`java.util.HashMap`)

| Change | Delta |      % |         Samples | Callee   | Location                                                               |
| -----: | ----: | -----: | --------------: | -------- | ---------------------------------------------------------------------- |
|  -0.6% |  -364 | 100.0% | 57,123 → 56,759 | `accept` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90` |

##### `merge` (`java.util.HashMap`)

|  Change | Delta |      % |         Samples | Callee    | Location                                            |
| ------: | ----: | -----: | --------------: | --------- | --------------------------------------------------- |
|   -0.6% |  -365 | 100.0% | 57,120 → 56,755 | `apply`   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |
| +200.0% |    +2 |  <0.1% |           1 → 3 | `newNode` | `java.util.HashMap`                                 |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`)

| Change | Delta |     % |         Samples | Callee                  | Location                                    |
| -----: | ----: | ----: | --------------: | ----------------------- | ------------------------------------------- |
|  -0.6% |  -365 | 99.4% | 57,120 → 56,755 | `lambda$merge$6`        | `org.renaissance.jdk.concurrent.JavaKMeans` |
| +13.6% |   +44 |  0.6% |       324 → 368 | `lambda$generateData$5` | `org.renaissance.jdk.concurrent.JavaKMeans` |
| +19.0% |   +22 |  0.2% |       116 → 138 | `lambda$generateData$3` | `org.renaissance.jdk.concurrent.JavaKMeans` |
| -13.2% |    -5 |  0.1% |         38 → 33 | `lambda$generateData$4` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `addAll` (`java.util.ArrayList`)

| Change | Delta |             % |         Samples | Callee    | Location              |
| -----: | ----: | ------------: | --------------: | --------- | --------------------- |
|  -2.0% |  -562 | 64.8% → 64.0% | 27,622 → 27,060 | `grow`    | `java.util.ArrayList` |
|  +1.6% |  +242 | 35.2% → 36.0% | 15,001 → 15,243 | `toArray` | `java.util.ArrayList` |

##### `grow` (`java.util.ArrayList`)

| Change | Delta |             % |         Samples | Callee   | Location              |
| -----: | ----: | ------------: | --------------: | -------- | --------------------- |
|  +4.3% |  +530 | 30.6% → 32.0% | 12,191 → 12,721 | `grow`   | `java.util.ArrayList` |
|  -0.1% |   -38 |         98.9% | 39,370 → 39,332 | `copyOf` | `java.util.Arrays`    |

##### `computeIfAbsent` (`java.util.HashMap`)

| Change | Delta |             % |   Samples | Callee    | Location                                                                              |
| -----: | ----: | ------------: | --------: | --------- | ------------------------------------------------------------------------------------- |
| -12.3% |   -17 | 22.0% → 20.2% | 138 → 121 | `resize`  | `java.util.HashMap`                                                                   |
|  -6.7% |   -14 | 33.4% → 32.7% | 210 → 196 | `apply`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940` |
|  +0.7% |    +2 | 44.6% → 47.1% | 280 → 282 | `newNode` | `java.util.HashMap`                                                                   |

##### `putMapEntries` (`java.util.HashMap`)

| Change | Delta |             % |   Samples | Callee     | Location                     |
| -----: | ----: | ------------: | --------: | ---------- | ---------------------------- |
|  -3.4% |   -12 | 92.7% → 93.5% | 356 → 344 | `putVal`   | `java.util.HashMap`          |
| -17.9% |    -5 |   7.3% → 6.3% |   28 → 23 | `entrySet` | `java.util.HashMap`          |
|    new |    +1 |   0.0% → 0.3% |     0 → 1 | `iterator` | `java.util.HashMap$EntrySet` |

##### `<init>` (`java.util.HashMap`)

| Change | Delta |      % |   Samples | Callee          | Location            |
| -----: | ----: | -----: | --------: | --------------- | ------------------- |
|  -4.2% |   -16 | 100.0% | 384 → 368 | `putMapEntries` | `java.util.HashMap` |

##### `putVal` (`java.util.HashMap`)

| Change | Delta |             % |   Samples | Callee    | Location            |
| -----: | ----: | ------------: | --------: | --------- | ------------------- |
|  -7.6% |   -21 | 75.6% → 72.6% | 276 → 255 | `newNode` | `java.util.HashMap` |
|  +7.9% |    +7 | 24.4% → 27.4% |   89 → 96 | `resize`  | `java.util.HashMap` |

##### `<init>` (`java.util.ArrayList`)

| Change | Delta |      % |         Samples | Callee    | Location              |
| -----: | ----: | -----: | --------------: | --------- | --------------------- |
|  -0.1% |    -8 | 100.0% | 14,254 → 14,246 | `toArray` | `java.util.ArrayList` |

##### `from` (`scala.collection.immutable.Map$`)

| Change | Delta |      % | Samples | Callee      | Location                          |
| -----: | ----: | -----: | ------: | ----------- | --------------------------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `loadClass` | `java.lang.ClassLoader`           |
| -66.7% |    -4 | 100.0% |   6 → 2 | `from`      | `scala.collection.immutable.Map$` |

##### `apply` (`scala.collection.immutable.Map$`)

| Change | Delta |      % | Samples | Callee   | Location                      |
| -----: | ----: | -----: | ------: | -------- | ----------------------------- |
| -66.7% |    -4 | 100.0% |   6 → 2 | `apply$` | `scala.collection.MapFactory` |

##### `<init>` (`java.util.stream.Nodes$ArrayNode`)

| Change | Delta |             % | Samples | Callee  | Location                                                                          |
| -----: | ----: | ------------: | ------: | ------- | --------------------------------------------------------------------------------- |
| -13.2% |    -5 | 95.0% → 91.7% | 38 → 33 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`                               |
| +50.0% |    +1 |   5.0% → 8.3% |   2 → 3 | `apply` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x00000070011a7540` |

##### `<init>` (`java.util.stream.Nodes$FixedNodeBuilder`)

| Change | Delta |      % | Samples | Callee   | Location                           |
| -----: | ----: | -----: | ------: | -------- | ---------------------------------- |
| -10.0% |    -4 | 100.0% | 40 → 36 | `<init>` | `java.util.stream.Nodes$ArrayNode` |

##### `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940`)

| Change | Delta |      % |   Samples | Callee                     | Location                                                   |
| -----: | ----: | -----: | --------: | -------------------------- | ---------------------------------------------------------- |
|  -6.7% |   -14 | 100.0% | 210 → 196 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `run` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |             % | Samples | Callee         | Location                               |
| ------: | ----: | ------------: | ------: | -------------- | -------------------------------------- |
| removed |    -4 |  25.0% → 0.0% |   4 → 0 | `loadClass`    | `java.lang.ClassLoader`                |
| removed |    -4 |  25.0% → 0.0% |   4 → 0 | `<clinit>`     | `scala.Predef$`                        |
|  -25.0% |    -2 | 50.0% → 85.7% |   8 → 6 | `map`          | `scala.collection.immutable.Range`     |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `linkCallSite` | `java.lang.invoke.MethodHandleNatives` |

##### `executeOperation` (`org.renaissance.harness.ExecutionDriver`)

| Change | Delta |              % | Samples | Callee                      | Location                                                             |
| -----: | ----: | -------------: | ------: | --------------------------- | -------------------------------------------------------------------- |
| -56.3% |    -9 | 100.0% → 70.0% |  16 → 7 | `run`                       | `org.renaissance.jdk.concurrent.FjKmeans`                            |
|    new |    +2 |   0.0% → 20.0% |   0 → 2 | `validate`                  | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011a7770` |
|    new |    +1 |   0.0% → 10.0% |   0 → 1 | `notifyAfterOperationSetUp` | `org.renaissance.harness.EventDispatcher`                            |

##### `$anonfun$1` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |             % | Samples | Callee | Location                                    |
| ------: | ----: | ------------: | ------: | ------ | ------------------------------------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `run`  | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `$anonfun$1` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Callee      | Location                |
| ------: | ----: | ------------: | ------: | ----------- | ----------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `loadClass` | `java.lang.ClassLoader` |

##### `apply` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000008011038c0`)

|  Change | Delta |             % | Samples | Callee       | Location                                    |
| ------: | ----: | ------------: | ------: | ------------ | ------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `$anonfun$1` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runEffects` (`scopt.ORunner$`)

|  Change | Delta |             % | Samples | Callee         | Location                               |
| ------: | ----: | ------------: | ------: | -------------- | -------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `linkCallSite` | `java.lang.invoke.MethodHandleNatives` |

##### `nonArgs$1` (`scopt.ORunner$`)

|  Change | Delta |             % | Samples | Callee   | Location                          |
| ------: | ----: | ------------: | ------: | -------- | --------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `filter` | `scala.collection.immutable.List` |

##### `run` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Callee               | Location                         |
| -----: | ----: | -----: | ------: | -------------------- | -------------------------------- |
| -16.7% |    -1 | 100.0% |   6 → 5 | `linkToTargetMethod` | `java.lang.invoke.LambdaForm$MH` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

Common call stack: `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)

|  Change | Delta |            % |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------: | ----: | -----------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +24.4% |  +115 |  0.6% → 0.8% |     472 → 587 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `grow` ← `add` ← `add` ← `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|   +8.5% |   +92 |  1.4% → 1.5% | 1,081 → 1,173 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|   +5.6% |   +91 |  2.2% → 2.3% | 1,624 → 1,715 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `grow` ← `add` ← `add` ← `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                             |
|   +5.3% |   +90 |  2.3% → 2.4% | 1,701 → 1,791 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|   +3.0% |   +85 |  3.8% → 3.9% | 2,853 → 2,938 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|   +3.0% |   +77 |  3.4% → 3.5% | 2,578 → 2,655 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `<init>` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|   +4.1% |   +70 |  2.2% → 2.3% | 1,696 → 1,766 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|   +7.3% |   +67 |  1.2% → 1.3% |     920 → 987 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|   +2.9% |   +64 |  2.9% → 3.0% | 2,221 → 2,285 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `grow` ← `add` ← `add` ← `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +21.4% |   +63 |  0.4% → 0.5% |     295 → 358 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `grow` ← `add` ← `add` ← `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +20.4% |   +49 |  0.3% → 0.4% |     240 → 289 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +29.8% |   +48 |  0.2% → 0.3% |     161 → 209 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `grow` ← `add` ← `add` ← `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|   +5.2% |   +44 |  1.1% → 1.2% |     848 → 892 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `grow` ← `add` ← `add` ← `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +65.6% |   +42 |         0.1% |      64 → 106 | `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|   +9.0% |   +40 |         0.6% |     442 → 482 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  +16.7% |   +40 |  0.3% → 0.4% |     239 → 279 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) |
|   +3.0% |   +40 |         1.8% | 1,335 → 1,375 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  +11.1% |   +37 |  0.4% → 0.5% |     332 → 369 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                      |
|   +5.5% |   +36 |         0.9% |     650 → 686 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| +125.0% |   +35 | <0.1% → 0.1% |       28 → 63 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `grow` ← `add` ← `add` ← `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                       |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

Common call stack: `doExec` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan` (`java.util.concurrent.ForkJoinPool`) ← `runWorker` ← `run` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change | Delta |            % |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -----: | ----: | -----------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  -9.0% |   -96 |  1.4% → 1.3% |   1,067 → 971 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `grow` ← `add` ← `add` ← `collectClusters` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                        |
|  -3.1% |   -92 |  4.0% → 3.8% | 2,990 → 2,898 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -33.1% |   -86 |  0.3% → 0.2% |     260 → 174 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -23.8% |   -77 |  0.4% → 0.3% |     323 → 246 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)    |
|  -3.4% |   -76 |  2.9% → 2.8% | 2,207 → 2,131 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -19.2% |   -55 |  0.4% → 0.3% |     286 → 231 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  -2.3% |   -54 |  3.2% → 3.1% | 2,385 → 2,331 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -5.1% |   -45 |  1.2% → 1.1% |     879 → 834 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `<init>` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -2.2% |   -45 |  2.7% → 2.6% | 2,011 → 1,966 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -17.2% |   -45 |         0.3% |     261 → 216 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -15.4% |   -40 |         0.3% |     260 → 220 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                            |
|  -3.2% |   -38 |  1.6% → 1.5% | 1,204 → 1,166 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -26.3% |   -36 |  0.2% → 0.1% |     137 → 101 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -6.6% |   -33 |  0.7% → 0.6% |     502 → 469 | `findNearestCentroid` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly` ← `computeDirectly` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -9.0% |   -33 |  0.5% → 0.4% |     368 → 335 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -17.5% |   -31 |         0.2% |     177 → 146 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `<init>` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) |
| -31.0% |   -31 |         0.1% |      100 → 69 | `createSubtask` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -20.3% |   -29 |         0.2% |     143 → 114 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `<init>` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -61.9% |   -26 | 0.1% → <0.1% |       42 → 16 | `copyOf` (`java.util.Arrays`) ← `grow` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -17.6% |   -25 |         0.2% |     142 → 117 | `copyOf` (`java.util.Arrays`) ← `toArray` (`java.util.ArrayList`) ← `addAll` ← `lambda$merge$6` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `merge` (`java.util.HashMap`) ← `lambda$merge$7` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach` (`java.util.HashMap`) ← `merge` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone` (`java.util.concurrent.ForkJoinTask`) ← `join` ← `compute` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec` (`java.util.concurrent.RecursiveTask`) ← `doExec` (`java.util.concurrent.ForkJoinTask`) ← `invoke` ← `lambda$run$0` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                         |

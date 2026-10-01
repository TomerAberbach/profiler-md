# Sampling profile diff

Collected 75,385 samples → 75,888 samples (+503 samples, +0.7%).

| Category         | Change | Delta |             % |         Samples |
| ---------------- | -----: | ----: | ------------: | --------------: |
| Standard library |  +0.4% |  +250 | 93.2% → 92.9% | 70,236 → 70,486 |
| Ours             |  +4.9% |  +253 |   6.8% → 7.1% |   5,149 → 5,402 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

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

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

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

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |         Samples | Function                 | Location                                                                                                                                      |
| ------: | ----: | ------------: | --------------: | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
|   +3.5% |  +578 | 21.8% → 22.4% | 16,425 → 17,003 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   +4.3% |  +530 | 16.2% → 16.8% | 12,191 → 12,721 | `add`                    | `java.util.ArrayList`                                                                                                                         |
|   +3.7% |  +475 | 17.2% → 17.8% | 13,001 → 13,476 | `collectClusters`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   +0.6% |  +441 | 99.5% → 99.4% | 75,003 → 75,444 | `doExec`                 | `java.util.concurrent.ForkJoinTask`                                                                                                           |
|   +0.6% |  +441 | 99.5% → 99.4% | 75,003 → 75,444 | `topLevelExec`           | `java.util.concurrent.ForkJoinPool$WorkQueue`                                                                                                 |
|   +0.6% |  +441 | 99.5% → 99.4% | 75,003 → 75,444 | `scan`                   | `java.util.concurrent.ForkJoinPool`                                                                                                           |
|   +0.6% |  +441 | 99.5% → 99.4% | 75,003 → 75,444 | `runWorker`              | `java.util.concurrent.ForkJoinPool`                                                                                                           |
|   +0.6% |  +441 | 99.5% → 99.4% | 75,003 → 75,444 | `run`                    | `java.util.concurrent.ForkJoinWorkerThread`                                                                                                   |
|   +0.6% |  +439 | 99.5% → 99.4% | 75,000 → 75,439 | `compute`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                                                                        |
|   +0.6% |  +439 | 99.5% → 99.4% | 75,000 → 75,439 | `exec`                   | `java.util.concurrent.RecursiveTask`                                                                                                          |
|   +0.5% |  +276 | 79.8% → 79.6% | 60,125 → 60,401 | `awaitDone`              | `java.util.concurrent.ForkJoinTask`                                                                                                           |
|   +0.5% |  +276 | 79.8% → 79.6% | 60,125 → 60,401 | `join`                   | `java.util.concurrent.ForkJoinTask`                                                                                                           |
|   +0.8% |  +234 | 38.8% → 38.9% | 29,255 → 29,489 | `toArray`                | `java.util.ArrayList`                                                                                                                         |
|   +0.3% |  +211 | 91.1% → 90.7% | 68,644 → 68,855 | `copyOf`                 | `java.util.Arrays`                                                                                                                            |
|  +46.3% |  +176 |   0.5% → 0.7% |       380 → 556 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                        |
|  +46.3% |  +176 |   0.5% → 0.7% |       380 → 556 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                        |
|   +0.3% |  +175 | 79.0% → 78.7% | 59,526 → 59,701 | `tryRemoveAndExec`       | `java.util.concurrent.ForkJoinPool$WorkQueue`                                                                                                 |
|  +48.7% |  +170 |   0.5% → 0.7% |       349 → 519 | `average`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                        |
|   +3.0% |  +103 |   4.5% → 4.6% |   3,424 → 3,527 | `findNearestCentroid`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
| +263.2% |  +100 |   0.1% → 0.2% |        38 → 138 | `apply`                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801125d48 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2388` |

##### Standard library

| Change | Delta |             % |         Samples | Function           | Location                                                                                                  |
| -----: | ----: | ------------: | --------------: | ------------------ | --------------------------------------------------------------------------------------------------------- |
|  +4.3% |  +530 | 16.2% → 16.8% | 12,191 → 12,721 | `add`              | `java.util.ArrayList`                                                                                     |
|  +0.6% |  +441 | 99.5% → 99.4% | 75,003 → 75,444 | `doExec`           | `java.util.concurrent.ForkJoinTask`                                                                       |
|  +0.6% |  +441 | 99.5% → 99.4% | 75,003 → 75,444 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`                                                             |
|  +0.6% |  +441 | 99.5% → 99.4% | 75,003 → 75,444 | `scan`             | `java.util.concurrent.ForkJoinPool`                                                                       |
|  +0.6% |  +441 | 99.5% → 99.4% | 75,003 → 75,444 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                                                                       |
|  +0.6% |  +441 | 99.5% → 99.4% | 75,003 → 75,444 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`                                                               |
|  +0.6% |  +439 | 99.5% → 99.4% | 75,000 → 75,439 | `exec`             | `java.util.concurrent.RecursiveTask`                                                                      |
|  +0.5% |  +276 | 79.8% → 79.6% | 60,125 → 60,401 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                                                                       |
|  +0.5% |  +276 | 79.8% → 79.6% | 60,125 → 60,401 | `join`             | `java.util.concurrent.ForkJoinTask`                                                                       |
|  +0.8% |  +234 | 38.8% → 38.9% | 29,255 → 29,489 | `toArray`          | `java.util.ArrayList`                                                                                     |
|  +0.3% |  +211 | 91.1% → 90.7% | 68,644 → 68,855 | `copyOf`           | `java.util.Arrays`                                                                                        |
|  +0.3% |  +175 | 79.0% → 78.7% | 59,526 → 59,701 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`                                                             |
|  +0.7% |   +74 |         14.5% | 10,929 → 11,003 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`                                                                       |
| +20.4% |   +68 |   0.4% → 0.5% |       333 → 401 | `evaluate`         | `java.util.stream.AbstractPipeline`                                                                       |
| +20.2% |   +67 |   0.4% → 0.5% |       331 → 398 | `wrapAndCopyInto`  | `java.util.stream.AbstractPipeline`                                                                       |
| +19.6% |   +65 |   0.4% → 0.5% |       331 → 396 | `copyInto`         | `java.util.stream.AbstractPipeline`                                                                       |
| +16.1% |   +61 |   0.5% → 0.6% |       380 → 441 | `invokeStatic`     | `java.lang.invoke.LambdaForm$DMH.0x0000000801004800 → java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |
| +16.1% |   +61 |   0.5% → 0.6% |       380 → 441 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x0000000801009800 → java.lang.invoke.LambdaForm$MH.0x0000007001009800`   |
| +16.1% |   +61 |   0.5% → 0.6% |       380 → 441 | `invokeImpl`       | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                         |
| +16.1% |   +61 |   0.5% → 0.6% |       380 → 441 | `invoke`           | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                         |

##### Ours

|  Change | Delta |             % |         Samples | Function                    | Location                                                                                                                                      |
| ------: | ----: | ------------: | --------------: | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|   +3.5% |  +578 | 21.8% → 22.4% | 16,425 → 17,003 | `computeDirectly`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   +3.7% |  +475 | 17.2% → 17.8% | 13,001 → 13,476 | `collectClusters`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   +0.6% |  +439 | 99.5% → 99.4% | 75,000 → 75,439 | `compute`                   | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                                                                        |
|  +46.3% |  +176 |   0.5% → 0.7% |       380 → 556 | `computeClusterAverages`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                        |
|  +46.3% |  +176 |   0.5% → 0.7% |       380 → 556 | `computeDirectly`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                        |
|  +48.7% |  +170 |   0.5% → 0.7% |       349 → 519 | `average`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                        |
|   +3.0% |  +103 |   4.5% → 4.6% |   3,424 → 3,527 | `findNearestCentroid`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
| +263.2% |  +100 |   0.1% → 0.2% |        38 → 138 | `apply`                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801125d48 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2388` |
|  +35.7% |   +86 |   0.3% → 0.4% |       241 → 327 | `createSubtask`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|  +19.6% |   +62 |   0.4% → 0.5% |       317 → 379 | `createSubtask`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
|  +16.3% |   +62 |   0.5% → 0.6% |       380 → 442 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher`                                                                                                               |
|  +16.4% |   +61 |   0.5% → 0.6% |       373 → 434 | `main`                      | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|  +16.1% |   +61 |   0.5% → 0.6% |       380 → 441 | `main`                      | `org.renaissance.harness.RenaissanceSuite`                                                                                                    |
|  +16.0% |   +61 |   0.5% → 0.6% |       382 → 443 | `launchHarnessClass`        | `org.renaissance.core.Launcher`                                                                                                               |
|  +16.0% |   +61 |   0.5% → 0.6% |       382 → 443 | `main`                      | `org.renaissance.core.Launcher`                                                                                                               |
|  +18.3% |   +60 |   0.4% → 0.5% |       328 → 388 | `setUpBeforeAll`            | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                     |
|  +17.2% |   +59 |          0.5% |       344 → 403 | `runBenchmarks$$anonfun$1`  | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|  +17.2% |   +59 |          0.5% |       344 → 403 | `applyVoid`                 | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000080111f208 → org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0` |
|  +17.2% |   +59 |          0.5% |       344 → 403 | `runBenchmarks`             | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|  +15.7% |   +54 |          0.5% |       344 → 398 | `executeBenchmark`          | `org.renaissance.harness.ExecutionDriver`                                                                                                     |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |         Samples | Function          | Location                                                                                                                                      |
| -----: | ----: | ------------: | --------------: | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|  -6.5% |  -998 | 20.3% → 18.9% | 15,311 → 14,313 | `lambda$run$0`    | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|  -6.5% |  -998 | 20.3% → 18.9% | 15,311 → 14,313 | `call`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |
|  -6.5% |  -998 | 20.3% → 18.9% | 15,311 → 14,313 | `exec`            | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                                                                                           |
|  -5.4% |  -841 | 20.7% → 19.5% | 15,622 → 14,781 | `invoke`          | `java.util.concurrent.ForkJoinTask`                                                                                                           |
|  -0.7% |  -387 | 76.5% → 75.4% | 57,634 → 57,247 | `combineResults`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|  -0.7% |  -384 | 76.5% → 75.5% | 57,642 → 57,258 | `merge`           | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|  -0.6% |  -365 | 75.8% → 74.8% | 57,120 → 56,755 | `lambda$merge$6`  | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|  -0.6% |  -365 | 75.8% → 74.8% | 57,120 → 56,755 | `apply`           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000` |
|  -0.6% |  -364 | 75.8% → 74.8% | 57,123 → 56,759 | `lambda$merge$7`  | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|  -0.6% |  -364 | 75.8% → 74.8% | 57,123 → 56,759 | `accept`          | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90` |
|  -0.6% |  -364 | 75.8% → 74.8% | 57,123 → 56,759 | `forEach`         | `java.util.HashMap`                                                                                                                           |
|  -0.6% |  -363 | 75.8% → 74.8% | 57,122 → 56,759 | `merge`           | `java.util.HashMap`                                                                                                                           |
|  -0.8% |  -320 | 56.5% → 55.7% | 42,623 → 42,303 | `addAll`          | `java.util.ArrayList`                                                                                                                         |
| -71.6% |   -83 |  0.2% → <0.1% |        116 → 33 | `apply`           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801125b10 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a25c0` |
|  -0.1% |   -32 | 52.8% → 52.4% | 39,813 → 39,781 | `grow`            | `java.util.ArrayList`                                                                                                                         |
|  -4.6% |   -29 |          0.8% |       628 → 599 | `computeIfAbsent` | `java.util.HashMap`                                                                                                                           |
|  -3.1% |   -17 |          0.7% |       557 → 540 | `newNode`         | `java.util.HashMap`                                                                                                                           |
|  -4.2% |   -16 |          0.5% |       384 → 368 | `putMapEntries`   | `java.util.HashMap`                                                                                                                           |
|  -4.2% |   -16 |          0.5% |       384 → 368 | `<init>`          | `java.util.HashMap`                                                                                                                           |
|  -3.8% |   -14 |          0.5% |       365 → 351 | `putVal`          | `java.util.HashMap`                                                                                                                           |

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

|  Change | Delta |             % |         Samples | Function                   | Location                                                                                                                                                                    |
| ------: | ----: | ------------: | --------------: | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   -6.5% |  -998 | 20.3% → 18.9% | 15,311 → 14,313 | `lambda$run$0`             | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                                                 |
|   -6.5% |  -998 | 20.3% → 18.9% | 15,311 → 14,313 | `call`                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`                               |
|   -0.7% |  -387 | 76.5% → 75.4% | 57,634 → 57,247 | `combineResults`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|   -0.7% |  -384 | 76.5% → 75.5% | 57,642 → 57,258 | `merge`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                                                 |
|   -0.6% |  -365 | 75.8% → 74.8% | 57,120 → 56,755 | `lambda$merge$6`           | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                                                 |
|   -0.6% |  -365 | 75.8% → 74.8% | 57,120 → 56,755 | `apply`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`                               |
|   -0.6% |  -364 | 75.8% → 74.8% | 57,123 → 56,759 | `lambda$merge$7`           | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                                                 |
|   -0.6% |  -364 | 75.8% → 74.8% | 57,123 → 56,759 | `accept`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`                               |
|  -71.6% |   -83 |  0.2% → <0.1% |        116 → 33 | `apply`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801125b10 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a25c0`                               |
|   -6.7% |   -14 |          0.3% |       210 → 196 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|   -6.7% |   -14 |          0.3% |       210 → 196 | `apply`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000801186b38 → org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011a3940` |
|  -56.3% |    -9 |         <0.1% |          16 → 7 | `run`                      | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                                                   |
|  -37.5% |    -6 |         <0.1% |         16 → 10 | `executeOperation`         | `org.renaissance.harness.ExecutionDriver`                                                                                                                                   |
| removed |    -6 |  <0.1% → 0.0% |           6 → 0 | `$anonfun$1`               | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                                                   |
|  -13.2% |    -5 |  0.1% → <0.1% |         38 → 33 | `lambda$generateData$4`    | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                                                 |
| removed |    -2 |  <0.1% → 0.0% |           2 → 0 | `$anonfun$1`               | `org.renaissance.harness.RenaissanceSuite$`                                                                                                                                 |
| removed |    -2 |  <0.1% → 0.0% |           2 → 0 | `apply`                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000008011038c0`                                                                                                      |
| removed |    -1 |  <0.1% → 0.0% |           1 → 0 | `<init>`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                                                      |
| removed |    -1 |  <0.1% → 0.0% |           1 → 0 | `runEffects`               | `scopt.ORunner$`                                                                                                                                                            |
| removed |    -1 |  <0.1% → 0.0% |           1 → 0 | `nonArgs$1`                | `scopt.ORunner$`                                                                                                                                                            |

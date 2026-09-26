# Sampling profile diff

Collected 75,147 samples → 75,903 samples (+756 samples, +1.0%).

| Category         | Change | Delta |             % |         Samples |
| ---------------- | -----: | ----: | ------------: | --------------: |
| Standard library |  +0.8% |  +580 | 93.3% → 93.1% | 70,076 → 70,656 |
| Ours             |  +3.5% |  +176 |   6.7% → 6.9% |   5,071 → 5,247 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |         Samples | Function                | Location                                                   |
| ------: | ----: | ------------: | --------------: | ----------------------- | ---------------------------------------------------------- |
|   +0.8% |  +572 | 91.1% → 91.0% | 68,463 → 69,035 | `copyOf`                | `java.util.Arrays`                                         |
|  +30.1% |   +44 |   0.2% → 0.3% |       146 → 190 | `add`                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +12.9% |   +36 |          0.4% |       279 → 315 | `createSubtask`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +16.4% |   +31 |          0.3% |       189 → 220 | `resize`                | `java.util.HashMap`                                        |
|   +8.5% |   +27 |   0.4% → 0.5% |       317 → 344 | `createSubtask`         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +11.5% |   +22 |          0.3% |       192 → 214 | `collectClusters`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +38.8% |   +19 |          0.1% |         49 → 68 | `intStream`             | `java.util.stream.StreamSupport`                           |
|  +12.2% |   +18 |          0.2% |       148 → 166 | `vectorSum`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +11.2% |   +15 |          0.2% |       134 → 149 | `merge`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +5.9% |   +12 |          0.3% |       205 → 217 | `lambda$merge$6`        | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +40.0% |    +8 |         <0.1% |         20 → 28 | `allocateInstance`      | `java.lang.invoke.DirectMethodHandle`                      |
|  +18.9% |    +7 |  <0.1% → 0.1% |         37 → 44 | `lambda$generateData$4` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +0.2% |    +6 |   4.5% → 4.4% |   3,366 → 3,372 | `findNearestCentroid`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +9.3% |    +5 |          0.1% |         54 → 59 | `mapToObj`              | `java.util.stream.IntPipeline`                             |
|  +27.3% |    +3 |         <0.1% |         11 → 14 | `<init>`                | `java.util.zip.InflaterInputStream`                        |
|     new |    +3 |  0.0% → <0.1% |           0 → 3 | `<init>`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +200.0% |    +2 |         <0.1% |           1 → 3 | `div`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|     new |    +2 |  0.0% → <0.1% |           0 → 2 | `toString`              | `java.lang.StringBuilder`                                  |
| +200.0% |    +2 |         <0.1% |           1 → 3 | `mapToObj`              | `java.util.stream.DoublePipeline`                          |
|     new |    +2 |  0.0% → <0.1% |           0 → 2 | `<init>`                | `jdk.internal.org.objectweb.asm.ByteVector`                |

##### Standard library

|  Change | Delta |             % |         Samples | Function                      | Location                                    |
| ------: | ----: | ------------: | --------------: | ----------------------------- | ------------------------------------------- |
|   +0.8% |  +572 | 91.1% → 91.0% | 68,463 → 69,035 | `copyOf`                      | `java.util.Arrays`                          |
|  +16.4% |   +31 |          0.3% |       189 → 220 | `resize`                      | `java.util.HashMap`                         |
|  +38.8% |   +19 |          0.1% |         49 → 68 | `intStream`                   | `java.util.stream.StreamSupport`            |
|  +40.0% |    +8 |         <0.1% |         20 → 28 | `allocateInstance`            | `java.lang.invoke.DirectMethodHandle`       |
|   +9.3% |    +5 |          0.1% |         54 → 59 | `mapToObj`                    | `java.util.stream.IntPipeline`              |
|  +27.3% |    +3 |         <0.1% |         11 → 14 | `<init>`                      | `java.util.zip.InflaterInputStream`         |
|     new |    +2 |  0.0% → <0.1% |           0 → 2 | `toString`                    | `java.lang.StringBuilder`                   |
| +200.0% |    +2 |         <0.1% |           1 → 3 | `mapToObj`                    | `java.util.stream.DoublePipeline`           |
|     new |    +2 |  0.0% → <0.1% |           0 → 2 | `<init>`                      | `jdk.internal.org.objectweb.asm.ByteVector` |
|     new |    +2 |  0.0% → <0.1% |           0 → 2 | `spliterator`                 | `java.util.Spliterators`                    |
|  +14.3% |    +1 |         <0.1% |           7 → 8 | `awaitDone`                   | `java.util.concurrent.ForkJoinTask`         |
|     new |    +1 |  0.0% → <0.1% |           0 → 1 | `<init>`                      | `java.util.ArrayList`                       |
|     new |    +1 |  0.0% → <0.1% |           0 → 1 | `getInputStream`              | `java.util.zip.ZipFile`                     |
|  +33.3% |    +1 |         <0.1% |           3 → 4 | `doubleStream`                | `java.util.stream.StreamSupport`            |
|     new |    +1 |  0.0% → <0.1% |           0 → 1 | `parseContextSpec`            | `sun.net.www.protocol.jar.Handler`          |
| +100.0% |    +1 |         <0.1% |           1 → 2 | `readNBytes`                  | `java.io.InputStream`                       |
| +100.0% |    +1 |         <0.1% |           1 → 2 | `read`                        | `java.util.jar.Manifest`                    |
|     new |    +1 |  0.0% → <0.1% |           0 → 1 | `iterator`                    | `java.util.HashMap$EntrySet`                |
|     new |    +1 |  0.0% → <0.1% |           0 → 1 | `allocateUninitializedArray0` | `jdk.internal.misc.Unsafe`                  |
|     new |    +1 |  0.0% → <0.1% |           0 → 1 | `transfer`                    | `java.util.concurrent.ConcurrentHashMap`    |

##### Ours

|  Change | Delta |            % |       Samples | Function                | Location                                                   |
| ------: | ----: | -----------: | ------------: | ----------------------- | ---------------------------------------------------------- |
|  +30.1% |   +44 |  0.2% → 0.3% |     146 → 190 | `add`                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +12.9% |   +36 |         0.4% |     279 → 315 | `createSubtask`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +8.5% |   +27 |  0.4% → 0.5% |     317 → 344 | `createSubtask`         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +11.5% |   +22 |         0.3% |     192 → 214 | `collectClusters`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +12.2% |   +18 |         0.2% |     148 → 166 | `vectorSum`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +11.2% |   +15 |         0.2% |     134 → 149 | `merge`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +5.9% |   +12 |         0.3% |     205 → 217 | `lambda$merge$6`        | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +18.9% |    +7 | <0.1% → 0.1% |       37 → 44 | `lambda$generateData$4` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +0.2% |    +6 |  4.5% → 4.4% | 3,366 → 3,372 | `findNearestCentroid`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +3 | 0.0% → <0.1% |         0 → 3 | `<init>`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +200.0% |    +2 |        <0.1% |         1 → 3 | `div`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|     new |    +1 | 0.0% → <0.1% |         0 → 1 | `jvmSpecVersion`        | `org.renaissance.core.BenchmarkSuite`                      |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |   Samples | Function                   | Location                                                   |
| ------: | ----: | -----------: | --------: | -------------------------- | ---------------------------------------------------------- |
|   -2.7% |   -13 |         0.6% | 486 → 473 | `grow`                     | `java.util.ArrayList`                                      |
|   -6.3% |   -13 |         0.3% | 206 → 193 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -2.2% |   -12 |         0.7% | 537 → 525 | `newNode`                  | `java.util.HashMap`                                        |
|  -41.7% |   -10 |        <0.1% |   24 → 14 | `builder`                  | `java.util.stream.Nodes`                                   |
|  -30.4% |    -7 |        <0.1% |   23 → 16 | `entrySet`                 | `java.util.HashMap`                                        |
|  -63.6% |    -7 |        <0.1% |    11 → 4 | `allocateInstance`         | `jdk.internal.misc.Unsafe`                                 |
|  -18.5% |    -5 |        <0.1% |   27 → 22 | `range`                    | `java.util.stream.IntStream`                               |
|   -4.2% |    -5 |         0.2% | 120 → 115 | `valueOf`                  | `java.lang.Double`                                         |
|  -60.0% |    -3 |        <0.1% |     5 → 2 | `lambda$run$0`             | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -3 | <0.1% → 0.0% |     3 → 0 | `addConstantUtf8`          | `jdk.internal.org.objectweb.asm.SymbolTable`               |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `initCEN`                  | `java.util.zip.ZipFile$Source`                             |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `<init>`                   | `java.lang.AbstractStringBuilder`                          |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `<init>`                   | `jdk.internal.org.objectweb.asm.MethodWriter`              |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `fillInStackTrace`         | `java.lang.Throwable`                                      |
|   -5.9% |    -1 |        <0.1% |   17 → 16 | `computeClusterAverages`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `<init>`                   | `java.lang.invoke.MethodTypeForm`                          |
|  -33.3% |    -1 |        <0.1% |     3 → 2 | `copyOfRangeByte`          | `java.util.Arrays`                                         |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `findEND`                  | `java.util.zip.ZipFile$Source`                             |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `newLinkedHashMap`         | `java.util.LinkedHashMap`                                  |
|  -33.3% |    -1 |        <0.1% |     3 → 2 | `opWrapSink`               | `java.util.stream.DoublePipeline$1`                        |

##### Standard library

|  Change | Delta |            % |   Samples | Function           | Location                                      |
| ------: | ----: | -----------: | --------: | ------------------ | --------------------------------------------- |
|   -2.7% |   -13 |         0.6% | 486 → 473 | `grow`             | `java.util.ArrayList`                         |
|   -2.2% |   -12 |         0.7% | 537 → 525 | `newNode`          | `java.util.HashMap`                           |
|  -41.7% |   -10 |        <0.1% |   24 → 14 | `builder`          | `java.util.stream.Nodes`                      |
|  -30.4% |    -7 |        <0.1% |   23 → 16 | `entrySet`         | `java.util.HashMap`                           |
|  -63.6% |    -7 |        <0.1% |    11 → 4 | `allocateInstance` | `jdk.internal.misc.Unsafe`                    |
|  -18.5% |    -5 |        <0.1% |   27 → 22 | `range`            | `java.util.stream.IntStream`                  |
|   -4.2% |    -5 |         0.2% | 120 → 115 | `valueOf`          | `java.lang.Double`                            |
| removed |    -3 | <0.1% → 0.0% |     3 → 0 | `addConstantUtf8`  | `jdk.internal.org.objectweb.asm.SymbolTable`  |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `initCEN`          | `java.util.zip.ZipFile$Source`                |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `<init>`           | `java.lang.AbstractStringBuilder`             |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `<init>`           | `jdk.internal.org.objectweb.asm.MethodWriter` |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `fillInStackTrace` | `java.lang.Throwable`                         |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `<init>`           | `java.lang.invoke.MethodTypeForm`             |
|  -33.3% |    -1 |        <0.1% |     3 → 2 | `copyOfRangeByte`  | `java.util.Arrays`                            |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `findEND`          | `java.util.zip.ZipFile$Source`                |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `newLinkedHashMap` | `java.util.LinkedHashMap`                     |
|  -33.3% |    -1 |        <0.1% |     3 → 2 | `opWrapSink`       | `java.util.stream.DoublePipeline$1`           |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `<init>`           | `java.io.ByteArrayOutputStream`               |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `putVal`           | `java.util.concurrent.ConcurrentHashMap`      |

##### Ours

| Change | Delta |     % |   Samples | Function                   | Location                                                   |
| -----: | ----: | ----: | --------: | -------------------------- | ---------------------------------------------------------- |
|  -6.3% |   -13 |  0.3% | 206 → 193 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -60.0% |    -3 | <0.1% |     5 → 2 | `lambda$run$0`             | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -5.9% |    -1 | <0.1% |   17 → 16 | `computeClusterAverages`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |         Samples | Function           | Location                                                               |
| -----: | ----: | ------------: | --------------: | ------------------ | ---------------------------------------------------------------------- |
|  +1.0% |  +737 |         99.4% | 74,727 → 75,464 | `doExec`           | `java.util.concurrent.ForkJoinTask`                                    |
|  +1.0% |  +737 |         99.4% | 74,727 → 75,464 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  +1.0% |  +737 |         99.4% | 74,727 → 75,464 | `scan`             | `java.util.concurrent.ForkJoinPool`                                    |
|  +1.0% |  +737 |         99.4% | 74,727 → 75,464 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                                    |
|  +1.0% |  +737 |         99.4% | 74,727 → 75,464 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`                            |
|  +1.0% |  +736 |         99.4% | 74,722 → 75,458 | `compute`          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  +1.0% |  +736 |         99.4% | 74,722 → 75,458 | `exec`             | `java.util.concurrent.RecursiveTask`                                   |
|  +1.1% |  +674 |         79.4% | 59,630 → 60,304 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                                    |
|  +1.1% |  +674 |         79.4% | 59,630 → 60,304 | `join`             | `java.util.concurrent.ForkJoinTask`                                    |
|  +1.1% |  +630 |         78.6% | 59,065 → 59,695 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  +0.8% |  +572 | 91.1% → 91.0% | 68,463 → 69,035 | `copyOf`           | `java.util.Arrays`                                                     |
|  +1.3% |  +563 | 56.0% → 56.2% | 42,071 → 42,634 | `addAll`           | `java.util.ArrayList`                                                  |
|  +1.4% |  +536 | 52.7% → 52.9% | 39,601 → 40,137 | `grow`             | `java.util.ArrayList`                                                  |
|    new |  +433 |   0.0% → 0.6% |         0 → 433 | `invokeStatic`     | `java.lang.invoke.LambdaForm$DMH.0x0000000801004800`                   |
|    new |  +433 |   0.0% → 0.6% |         0 → 433 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x0000000801009800`                    |
|  +0.8% |  +430 | 75.4% → 75.2% | 56,655 → 57,085 | `merge`            | `java.util.HashMap`                                                    |
|  +0.8% |  +430 | 75.4% → 75.2% | 56,655 → 57,085 | `lambda$merge$7`   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +0.8% |  +430 | 75.4% → 75.2% | 56,655 → 57,085 | `accept`           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88` |
|  +0.8% |  +430 | 75.4% → 75.2% | 56,655 → 57,085 | `forEach`          | `java.util.HashMap`                                                    |
|  +0.8% |  +429 | 75.4% → 75.2% | 56,653 → 57,082 | `lambda$merge$6`   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |

##### Standard library

| Change | Delta |             % |         Samples | Function           | Location                                             |
| -----: | ----: | ------------: | --------------: | ------------------ | ---------------------------------------------------- |
|  +1.0% |  +737 |         99.4% | 74,727 → 75,464 | `doExec`           | `java.util.concurrent.ForkJoinTask`                  |
|  +1.0% |  +737 |         99.4% | 74,727 → 75,464 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  +1.0% |  +737 |         99.4% | 74,727 → 75,464 | `scan`             | `java.util.concurrent.ForkJoinPool`                  |
|  +1.0% |  +737 |         99.4% | 74,727 → 75,464 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                  |
|  +1.0% |  +737 |         99.4% | 74,727 → 75,464 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`          |
|  +1.0% |  +736 |         99.4% | 74,722 → 75,458 | `exec`             | `java.util.concurrent.RecursiveTask`                 |
|  +1.1% |  +674 |         79.4% | 59,630 → 60,304 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                  |
|  +1.1% |  +674 |         79.4% | 59,630 → 60,304 | `join`             | `java.util.concurrent.ForkJoinTask`                  |
|  +1.1% |  +630 |         78.6% | 59,065 → 59,695 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  +0.8% |  +572 | 91.1% → 91.0% | 68,463 → 69,035 | `copyOf`           | `java.util.Arrays`                                   |
|  +1.3% |  +563 | 56.0% → 56.2% | 42,071 → 42,634 | `addAll`           | `java.util.ArrayList`                                |
|  +1.4% |  +536 | 52.7% → 52.9% | 39,601 → 40,137 | `grow`             | `java.util.ArrayList`                                |
|    new |  +433 |   0.0% → 0.6% |         0 → 433 | `invokeStatic`     | `java.lang.invoke.LambdaForm$DMH.0x0000000801004800` |
|    new |  +433 |   0.0% → 0.6% |         0 → 433 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x0000000801009800`  |
|  +0.8% |  +430 | 75.4% → 75.2% | 56,655 → 57,085 | `merge`            | `java.util.HashMap`                                  |
|  +0.8% |  +430 | 75.4% → 75.2% | 56,655 → 57,085 | `forEach`          | `java.util.HashMap`                                  |
|  +1.1% |  +139 |         16.6% | 12,479 → 12,618 | `add`              | `java.util.ArrayList`                                |
|  +0.9% |   +97 |         14.1% | 10,617 → 10,714 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`                  |
|  +7.0% |   +40 |          0.8% |       575 → 615 | `computeIfAbsent`  | `java.util.HashMap`                                  |
| +16.4% |   +31 |          0.3% |       189 → 220 | `resize`           | `java.util.HashMap`                                  |

##### Ours

| Change | Delta |             % |         Samples | Function                 | Location                                                               |
| -----: | ----: | ------------: | --------------: | ------------------------ | ---------------------------------------------------------------------- |
|  +1.0% |  +736 |         99.4% | 74,722 → 75,458 | `compute`                | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  +0.8% |  +430 | 75.4% → 75.2% | 56,655 → 57,085 | `lambda$merge$7`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +0.8% |  +430 | 75.4% → 75.2% | 56,655 → 57,085 | `accept`                 | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801186d88` |
|  +0.8% |  +429 | 75.4% → 75.2% | 56,653 → 57,082 | `lambda$merge$6`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +0.8% |  +429 | 75.4% → 75.2% | 56,653 → 57,082 | `apply`                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801187218` |
|  +0.7% |  +402 | 76.1% → 75.8% | 57,163 → 57,565 | `merge`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +0.7% |  +400 | 76.1% → 75.8% | 57,158 → 57,558 | `combineResults`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +1.2% |  +207 | 22.1% → 22.2% | 16,607 → 16,814 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +1.5% |  +201 | 17.6% → 17.7% | 13,241 → 13,442 | `collectClusters`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +18.0% |   +64 |   0.5% → 0.6% |       355 → 419 | `average`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +15.7% |   +62 |   0.5% → 0.6% |       395 → 457 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +15.7% |   +62 |   0.5% → 0.6% |       395 → 457 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +30.1% |   +44 |   0.2% → 0.3% |       146 → 190 | `add`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +30.1% |   +44 |   0.2% → 0.3% |       146 → 190 | `combineResults`         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +12.9% |   +36 |          0.4% |       279 → 315 | `createSubtask`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +8.5% |   +27 |   0.4% → 0.5% |       317 → 344 | `createSubtask`          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +4.7% |   +19 |   0.5% → 0.6% |       408 → 427 | `main`                   | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +4.5% |   +19 |          0.6% |       419 → 438 | `launchHarnessClass`     | `org.renaissance.core.Launcher`                                        |
|  +4.5% |   +19 |          0.6% |       419 → 438 | `main`                   | `org.renaissance.core.Launcher`                                        |
|  +5.1% |   +18 |          0.5% |       350 → 368 | `apply`                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011258d8` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |         Samples | Function                   | Location                                                                              |
| ------: | ----: | ------------: | --------------: | -------------------------- | ------------------------------------------------------------------------------------- |
| removed |  -416 |   0.6% → 0.0% |         416 → 0 | `invokeStatic`             | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800`                                  |
| removed |  -416 |   0.6% → 0.0% |         416 → 0 | `invoke`                   | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`                                   |
|   -1.0% |  -145 | 19.1% → 18.8% | 14,377 → 14,232 | `<init>`                   | `java.util.ArrayList`                                                                 |
|   -0.6% |   -86 | 20.0% → 19.7% | 15,065 → 14,979 | `lambda$run$0`             | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -0.6% |   -86 | 20.0% → 19.7% | 15,065 → 14,979 | `call`                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68`                |
|   -0.6% |   -86 | 20.0% → 19.7% | 15,065 → 14,979 | `exec`                     | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                                   |
|  -11.5% |   -43 |   0.5% → 0.4% |       373 → 330 | `putMapEntries`            | `java.util.HashMap`                                                                   |
|  -11.5% |   -43 |   0.5% → 0.4% |       373 → 330 | `<init>`                   | `java.util.HashMap`                                                                   |
|   -9.9% |   -35 |   0.5% → 0.4% |       355 → 320 | `putVal`                   | `java.util.HashMap`                                                                   |
| removed |   -24 |  <0.1% → 0.0% |          24 → 0 | `newInvokeSpecial`         | `java.lang.invoke.LambdaForm$DMH.0x0000007001126400`                                  |
| removed |   -24 |  <0.1% → 0.0% |          24 → 0 | `linkToTargetMethod`       | `java.lang.invoke.LambdaForm$MH.0x0000007001126c00`                                   |
|   -0.1% |   -17 | 20.5% → 20.2% | 15,378 → 15,361 | `invoke`                   | `java.util.concurrent.ForkJoinTask`                                                   |
|   -6.3% |   -13 |          0.3% |       206 → 193 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -6.3% |   -13 |          0.3% |       206 → 193 | `apply`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000801186b38` |
|   -2.2% |   -12 |          0.7% |       537 → 525 | `newNode`                  | `java.util.HashMap`                                                                   |
|   -4.3% |    -9 |          0.3% |       210 → 201 | `evaluateToArrayNode`      | `java.util.stream.AbstractPipeline`                                                   |
|   -4.3% |    -9 |          0.3% |       210 → 201 | `toArray`                  | `java.util.stream.ReferencePipeline`                                                  |
|  -30.4% |    -7 |         <0.1% |         23 → 16 | `entrySet`                 | `java.util.HashMap`                                                                   |
|  -63.6% |    -7 |         <0.1% |          11 → 4 | `allocateInstance`         | `jdk.internal.misc.Unsafe`                                                            |
| removed |    -6 |  <0.1% → 0.0% |           6 → 0 | `newInvokeSpecial`         | `java.lang.invoke.LambdaForm$DMH.0x0000007001184400`                                  |

##### Standard library

|  Change | Delta |             % |         Samples | Function              | Location                                                     |
| ------: | ----: | ------------: | --------------: | --------------------- | ------------------------------------------------------------ |
| removed |  -416 |   0.6% → 0.0% |         416 → 0 | `invokeStatic`        | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800`         |
| removed |  -416 |   0.6% → 0.0% |         416 → 0 | `invoke`              | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`          |
|   -1.0% |  -145 | 19.1% → 18.8% | 14,377 → 14,232 | `<init>`              | `java.util.ArrayList`                                        |
|   -0.6% |   -86 | 20.0% → 19.7% | 15,065 → 14,979 | `exec`                | `java.util.concurrent.ForkJoinTask$AdaptedCallable`          |
|  -11.5% |   -43 |   0.5% → 0.4% |       373 → 330 | `putMapEntries`       | `java.util.HashMap`                                          |
|  -11.5% |   -43 |   0.5% → 0.4% |       373 → 330 | `<init>`              | `java.util.HashMap`                                          |
|   -9.9% |   -35 |   0.5% → 0.4% |       355 → 320 | `putVal`              | `java.util.HashMap`                                          |
| removed |   -24 |  <0.1% → 0.0% |          24 → 0 | `newInvokeSpecial`    | `java.lang.invoke.LambdaForm$DMH.0x0000007001126400`         |
| removed |   -24 |  <0.1% → 0.0% |          24 → 0 | `linkToTargetMethod`  | `java.lang.invoke.LambdaForm$MH.0x0000007001126c00`          |
|   -0.1% |   -17 | 20.5% → 20.2% | 15,378 → 15,361 | `invoke`              | `java.util.concurrent.ForkJoinTask`                          |
|   -2.2% |   -12 |          0.7% |       537 → 525 | `newNode`             | `java.util.HashMap`                                          |
|   -4.3% |    -9 |          0.3% |       210 → 201 | `evaluateToArrayNode` | `java.util.stream.AbstractPipeline`                          |
|   -4.3% |    -9 |          0.3% |       210 → 201 | `toArray`             | `java.util.stream.ReferencePipeline`                         |
|  -30.4% |    -7 |         <0.1% |         23 → 16 | `entrySet`            | `java.util.HashMap`                                          |
|  -63.6% |    -7 |         <0.1% |          11 → 4 | `allocateInstance`    | `jdk.internal.misc.Unsafe`                                   |
| removed |    -6 |  <0.1% → 0.0% |           6 → 0 | `newInvokeSpecial`    | `java.lang.invoke.LambdaForm$DMH.0x0000007001184400`         |
| removed |    -6 |  <0.1% → 0.0% |           6 → 0 | `linkToTargetMethod`  | `java.lang.invoke.LambdaForm$MH.0x0000007001184c00`          |
| removed |    -5 |  <0.1% → 0.0% |           5 → 0 | `invokeExact_MT`      | `java.lang.invoke.LambdaForm$MH.0x0000007001098000`          |
|   -4.2% |    -5 |          0.2% |       120 → 115 | `valueOf`             | `java.lang.Double`                                           |
|  -62.5% |    -5 |         <0.1% |           8 → 3 | `apply`               | `java.util.stream.DoublePipeline$$Lambda.0x00000008011c0c08` |

##### Ours

|  Change | Delta |             % |         Samples | Function                     | Location                                                                              |
| ------: | ----: | ------------: | --------------: | ---------------------------- | ------------------------------------------------------------------------------------- |
|   -0.6% |   -86 | 20.0% → 19.7% | 15,065 → 14,979 | `lambda$run$0`               | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -0.6% |   -86 | 20.0% → 19.7% | 15,065 → 14,979 | `call`                       | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801183d68`                |
|   -6.3% |   -13 |          0.3% |       206 → 193 | `lambda$collectClusters$0`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -6.3% |   -13 |          0.3% |       206 → 193 | `apply`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000801186b38` |
|  -37.5% |    -3 |         <0.1% |           8 → 5 | `run`                        | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  -37.5% |    -3 |         <0.1% |           8 → 5 | `$anonfun$1`                 | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
|  -37.5% |    -3 |         <0.1% |           8 → 5 | `$anonfun$adapted$1`         | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
|  -37.5% |    -3 |         <0.1% |           8 → 5 | `apply`                      | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000080117ae68`                  |
| removed |    -3 |  <0.1% → 0.0% |           3 → 0 | `extractResource`            | `org.renaissance.core.ResourceUtils`                                                  |
| removed |    -3 |  <0.1% → 0.0% |           3 → 0 | `extractResources`           | `org.renaissance.core.ResourceUtils`                                                  |
| removed |    -3 |  <0.1% → 0.0% |           3 → 0 | `createClassLoaderForModule` | `org.renaissance.core.ModuleLoader`                                                   |
|   -8.7% |    -2 |         <0.1% |         23 → 21 | `run`                        | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
|   -8.3% |    -2 |         <0.1% |         24 → 22 | `executeOperation`           | `org.renaissance.harness.ExecutionDriver`                                             |
| removed |    -2 |  <0.1% → 0.0% |           2 → 0 | `selectBenchmarks`           | `org.renaissance.harness.RenaissanceSuite$`                                           |
| removed |    -1 |  <0.1% → 0.0% |           1 → 0 | `createEventDispatcher`      | `org.renaissance.harness.RenaissanceSuite$`                                           |
| removed |    -1 |  <0.1% → 0.0% |           1 → 0 | `<init>`                     | `scopt.OptionDef`                                                                     |
|  -50.0% |    -1 |         <0.1% |           2 → 1 | `create`                     | `org.renaissance.core.BenchmarkSuite`                                                 |
|  -50.0% |    -1 |         <0.1% |           2 → 1 | `$anonfun$1`                 | `org.renaissance.harness.RenaissanceSuite$`                                           |
|  -50.0% |    -1 |         <0.1% |           2 → 1 | `apply`                      | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000008011059d8`                |
| removed |    -1 |  <0.1% → 0.0% |           1 → 0 | `loadProperties`             | `org.renaissance.core.ResourceUtils`                                                  |

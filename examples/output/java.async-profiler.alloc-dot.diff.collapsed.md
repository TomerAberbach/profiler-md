# Sampling profile diff

Collected 75,637 samples → 75,765 samples (+128 samples, +0.2%).

| Category         | Change | Delta |             % |         Samples |
| ---------------- | -----: | ----: | ------------: | --------------: |
| Standard library |  +0.4% |  +257 | 93.1% → 93.3% | 70,418 → 70,675 |
| Ours             |  -2.5% |  -129 |   6.9% → 6.7% |   5,219 → 5,090 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |         Samples | Function                     | Location                                                   |
| ------: | ----: | ------------: | --------------: | ---------------------------- | ---------------------------------------------------------- |
|   +0.5% |  +312 | 90.8% → 91.1% | 68,715 → 69,027 | `copyOf`                     | `java.util.Arrays`                                         |
|  +12.6% |   +24 |          0.3% |       190 → 214 | `collectClusters`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +11.6% |   +17 |          0.2% |       146 → 163 | `vectorSum`                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +9.2% |   +14 |          0.2% |       152 → 166 | `add`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +1.5% |    +8 |          0.7% |       534 → 542 | `newNode`                    | `java.util.HashMap`                                        |
|  +22.7% |    +5 |         <0.1% |         22 → 27 | `builder`                    | `java.util.stream.Nodes`                                   |
|   +0.8% |    +4 |   0.6% → 0.7% |       490 → 494 | `grow`                       | `java.util.ArrayList`                                      |
|  +18.2% |    +4 |         <0.1% |         22 → 26 | `entrySet`                   | `java.util.HashMap`                                        |
| +100.0% |    +3 |         <0.1% |           3 → 6 | `lambda$run$0`               | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +150.0% |    +3 |         <0.1% |           2 → 5 | `div`                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +28.6% |    +2 |         <0.1% |           7 → 9 | `allocateInstance`           | `jdk.internal.misc.Unsafe`                                 |
|     new |    +2 |  0.0% → <0.1% |           0 → 2 | `opWrapSink`                 | `java.util.stream.DoublePipeline$1`                        |
|     new |    +2 |  0.0% → <0.1% |           0 → 2 | `toArray`                    | `java.util.HashMap$KeySet`                                 |
|     new |    +2 |  0.0% → <0.1% |           0 → 2 | `result`                     | `scala.collection.immutable.VectorBuilder`                 |
|     new |    +1 |  0.0% → <0.1% |           0 → 1 | `allocateUninitializedArray` | `jdk.internal.misc.Unsafe`                                 |
|   +8.3% |    +1 |         <0.1% |         12 → 13 | `<init>`                     | `java.util.zip.InflaterInputStream`                        |
|     new |    +1 |  0.0% → <0.1% |           0 → 1 | `newString`                  | `java.lang.StringLatin1`                                   |
|     new |    +1 |  0.0% → <0.1% |           0 → 1 | `classFilePrologue`          | `java.lang.invoke.InvokerBytecodeGenerator`                |
|     new |    +1 |  0.0% → <0.1% |           0 → 1 | `loadConvert`                | `java.util.Properties`                                     |
|     new |    +1 |  0.0% → <0.1% |           0 → 1 | `compress`                   | `java.lang.StringUTF16`                                    |

##### Standard library

| Change | Delta |             % |         Samples | Function                     | Location                                          |
| -----: | ----: | ------------: | --------------: | ---------------------------- | ------------------------------------------------- |
|  +0.5% |  +312 | 90.8% → 91.1% | 68,715 → 69,027 | `copyOf`                     | `java.util.Arrays`                                |
|  +1.5% |    +8 |          0.7% |       534 → 542 | `newNode`                    | `java.util.HashMap`                               |
| +22.7% |    +5 |         <0.1% |         22 → 27 | `builder`                    | `java.util.stream.Nodes`                          |
|  +0.8% |    +4 |   0.6% → 0.7% |       490 → 494 | `grow`                       | `java.util.ArrayList`                             |
| +18.2% |    +4 |         <0.1% |         22 → 26 | `entrySet`                   | `java.util.HashMap`                               |
| +28.6% |    +2 |         <0.1% |           7 → 9 | `allocateInstance`           | `jdk.internal.misc.Unsafe`                        |
|    new |    +2 |  0.0% → <0.1% |           0 → 2 | `opWrapSink`                 | `java.util.stream.DoublePipeline$1`               |
|    new |    +2 |  0.0% → <0.1% |           0 → 2 | `toArray`                    | `java.util.HashMap$KeySet`                        |
|    new |    +2 |  0.0% → <0.1% |           0 → 2 | `result`                     | `scala.collection.immutable.VectorBuilder`        |
|    new |    +1 |  0.0% → <0.1% |           0 → 1 | `allocateUninitializedArray` | `jdk.internal.misc.Unsafe`                        |
|  +8.3% |    +1 |         <0.1% |         12 → 13 | `<init>`                     | `java.util.zip.InflaterInputStream`               |
|    new |    +1 |  0.0% → <0.1% |           0 → 1 | `newString`                  | `java.lang.StringLatin1`                          |
|    new |    +1 |  0.0% → <0.1% |           0 → 1 | `classFilePrologue`          | `java.lang.invoke.InvokerBytecodeGenerator`       |
|    new |    +1 |  0.0% → <0.1% |           0 → 1 | `loadConvert`                | `java.util.Properties`                            |
|    new |    +1 |  0.0% → <0.1% |           0 → 1 | `compress`                   | `java.lang.StringUTF16`                           |
|    new |    +1 |  0.0% → <0.1% |           0 → 1 | `entryFor`                   | `java.util.jar.JarFile`                           |
|    new |    +1 |  0.0% → <0.1% |           0 → 1 | `readNBytes`                 | `java.io.InputStream`                             |
|    new |    +1 |  0.0% → <0.1% |           0 → 1 | `getName`                    | `sun.nio.fs.UnixPath`                             |
|    new |    +1 |  0.0% → <0.1% |           0 → 1 | `<init>`                     | `java.io.ByteArrayOutputStream`                   |
|    new |    +1 |  0.0% → <0.1% |           0 → 1 | `viewAsType`                 | `java.lang.invoke.DirectMethodHandle$Constructor` |

##### Ours

|  Change | Delta |     % |   Samples | Function          | Location                                                   |
| ------: | ----: | ----: | --------: | ----------------- | ---------------------------------------------------------- |
|  +12.6% |   +24 |  0.3% | 190 → 214 | `collectClusters` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +11.6% |   +17 |  0.2% | 146 → 163 | `vectorSum`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +9.2% |   +14 |  0.2% | 152 → 166 | `add`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +100.0% |    +3 | <0.1% |     3 → 6 | `lambda$run$0`    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +150.0% |    +3 | <0.1% |     2 → 5 | `div`             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |       Samples | Function                      | Location                                                   |
| ------: | ----: | -----------: | ------------: | ----------------------------- | ---------------------------------------------------------- |
|   -2.2% |   -74 |  4.5% → 4.4% | 3,391 → 3,317 | `findNearestCentroid`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -19.6% |   -72 |  0.5% → 0.4% |     368 → 296 | `createSubtask`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -10.2% |   -26 |         0.3% |     256 → 230 | `resize`                      | `java.util.HashMap`                                        |
|  -30.3% |   -20 |         0.1% |       66 → 46 | `mapToObj`                    | `java.util.stream.IntPipeline`                             |
|  -11.9% |   -19 |         0.2% |     159 → 140 | `merge`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -31.3% |   -10 |        <0.1% |       32 → 22 | `opWrapSink`                  | `java.util.stream.IntPipeline$1`                           |
|   -2.7% |    -8 |         0.4% |     301 → 293 | `createSubtask`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -13.6% |    -8 |         0.1% |       59 → 51 | `intStream`                   | `java.util.stream.StreamSupport`                           |
|  -36.8% |    -7 |        <0.1% |       19 → 12 | `computeClusterAverages`      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   -3.3% |    -4 |         0.2% |     123 → 119 | `valueOf`                     | `java.lang.Double`                                         |
|  -80.0% |    -4 |        <0.1% |         5 → 1 | `mapToObj`                    | `java.util.stream.DoublePipeline`                          |
|  -19.0% |    -4 |        <0.1% |       21 → 17 | `createSubtask`               | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -15.4% |    -4 |        <0.1% |       26 → 22 | `range`                       | `java.util.stream.IntStream`                               |
|  -20.0% |    -4 |        <0.1% |       20 → 16 | `allocateInstance`            | `java.lang.invoke.DirectMethodHandle`                      |
|   -1.4% |    -3 |         0.3% |     212 → 209 | `lambda$collectClusters$0`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -66.7% |    -2 |        <0.1% |         3 → 1 | `spliterator`                 | `java.util.Spliterators`                                   |
| removed |    -2 | <0.1% → 0.0% |         2 → 0 | `<clinit>`                    | `sun.security.util.KnownOIDs`                              |
|  -66.7% |    -2 |        <0.1% |         3 → 1 | `lambda$boxed$0`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |    -1 | <0.1% → 0.0% |         1 → 0 | `average`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |    -1 | <0.1% → 0.0% |         1 → 0 | `allocateUninitializedArray0` | `jdk.internal.misc.Unsafe`                                 |

##### Standard library

|  Change | Delta |            % |   Samples | Function                      | Location                                     |
| ------: | ----: | -----------: | --------: | ----------------------------- | -------------------------------------------- |
|  -10.2% |   -26 |         0.3% | 256 → 230 | `resize`                      | `java.util.HashMap`                          |
|  -30.3% |   -20 |         0.1% |   66 → 46 | `mapToObj`                    | `java.util.stream.IntPipeline`               |
|  -31.3% |   -10 |        <0.1% |   32 → 22 | `opWrapSink`                  | `java.util.stream.IntPipeline$1`             |
|  -13.6% |    -8 |         0.1% |   59 → 51 | `intStream`                   | `java.util.stream.StreamSupport`             |
|   -3.3% |    -4 |         0.2% | 123 → 119 | `valueOf`                     | `java.lang.Double`                           |
|  -80.0% |    -4 |        <0.1% |     5 → 1 | `mapToObj`                    | `java.util.stream.DoublePipeline`            |
|  -15.4% |    -4 |        <0.1% |   26 → 22 | `range`                       | `java.util.stream.IntStream`                 |
|  -20.0% |    -4 |        <0.1% |   20 → 16 | `allocateInstance`            | `java.lang.invoke.DirectMethodHandle`        |
|  -66.7% |    -2 |        <0.1% |     3 → 1 | `spliterator`                 | `java.util.Spliterators`                     |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `<clinit>`                    | `sun.security.util.KnownOIDs`                |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `allocateUninitializedArray0` | `jdk.internal.misc.Unsafe`                   |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `<init>`                      | `java.lang.AbstractStringBuilder`            |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `generateCustomizedCode`      | `java.lang.invoke.InvokerBytecodeGenerator`  |
|  -50.0% |    -1 |        <0.1% |     2 → 1 | `enlarge`                     | `jdk.internal.org.objectweb.asm.ByteVector`  |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `addConstantUtf8`             | `jdk.internal.org.objectweb.asm.SymbolTable` |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `addConstantUtf8Reference`    | `jdk.internal.org.objectweb.asm.SymbolTable` |
|  -50.0% |    -1 |        <0.1% |     2 → 1 | `doubleStream`                | `java.util.stream.StreamSupport`             |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `read`                        | `java.util.jar.Manifest`                     |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `checkResource`               | `jdk.internal.loader.URLClassPath$JarLoader` |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `<init>`                      | `jdk.internal.org.objectweb.asm.ByteVector`  |

##### Ours

|  Change | Delta |            % |       Samples | Function                   | Location                                                   |
| ------: | ----: | -----------: | ------------: | -------------------------- | ---------------------------------------------------------- |
|   -2.2% |   -74 |  4.5% → 4.4% | 3,391 → 3,317 | `findNearestCentroid`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -19.6% |   -72 |  0.5% → 0.4% |     368 → 296 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -11.9% |   -19 |         0.2% |     159 → 140 | `merge`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   -2.7% |    -8 |         0.4% |     301 → 293 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -36.8% |    -7 |        <0.1% |       19 → 12 | `computeClusterAverages`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -19.0% |    -4 |        <0.1% |       21 → 17 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   -1.4% |    -3 |         0.3% |     212 → 209 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -66.7% |    -2 |        <0.1% |         3 → 1 | `lambda$boxed$0`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |    -1 | <0.1% → 0.0% |         1 → 0 | `average`                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |         Samples | Function           | Location                                                               |
| -----: | ----: | ------------: | --------------: | ------------------ | ---------------------------------------------------------------------- |
|  +0.8% |  +450 | 78.8% → 79.2% | 59,593 → 60,043 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  +0.7% |  +434 | 79.6% → 80.0% | 60,187 → 60,621 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                                    |
|  +0.7% |  +434 | 79.6% → 80.0% | 60,187 → 60,621 | `join`             | `java.util.concurrent.ForkJoinTask`                                    |
|  +0.5% |  +312 | 90.8% → 91.1% | 68,715 → 69,027 | `copyOf`           | `java.util.Arrays`                                                     |
|  +1.7% |  +181 | 14.4% → 14.6% | 10,879 → 11,060 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`                                    |
|  +0.3% |  +173 | 75.3% → 75.4% | 56,976 → 57,149 | `lambda$merge$6`   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +0.3% |  +173 | 75.3% → 75.4% | 56,976 → 57,149 | `apply`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7498` |
|  +0.3% |  +173 | 75.3% → 75.4% | 56,980 → 57,153 | `merge`            | `java.util.HashMap`                                                    |
|  +0.3% |  +173 | 75.3% → 75.4% | 56,980 → 57,153 | `lambda$merge$7`   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +0.3% |  +173 | 75.3% → 75.4% | 56,980 → 57,153 | `accept`           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000` |
|  +0.3% |  +173 | 75.3% → 75.4% | 56,980 → 57,153 | `forEach`          | `java.util.HashMap`                                                    |
|  +0.4% |  +157 | 52.4% → 52.5% | 39,631 → 39,788 | `grow`             | `java.util.ArrayList`                                                  |
|  +0.2% |  +151 |         99.4% | 75,195 → 75,346 | `doExec`           | `java.util.concurrent.ForkJoinTask`                                    |
|  +0.2% |  +151 |         99.4% | 75,195 → 75,346 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  +0.2% |  +151 |         99.4% | 75,195 → 75,346 | `scan`             | `java.util.concurrent.ForkJoinPool`                                    |
|  +0.2% |  +151 |         99.4% | 75,195 → 75,346 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                                    |
|  +0.2% |  +151 |         99.4% | 75,195 → 75,346 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`                            |
|  +0.3% |  +151 | 76.0% → 76.1% | 57,499 → 57,650 | `combineResults`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +0.3% |  +150 | 76.0% → 76.1% | 57,508 → 57,658 | `merge`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +0.2% |  +146 |         99.4% | 75,192 → 75,338 | `compute`          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |

##### Standard library

| Change | Delta |             % |         Samples | Function            | Location                                      |
| -----: | ----: | ------------: | --------------: | ------------------- | --------------------------------------------- |
|  +0.8% |  +450 | 78.8% → 79.2% | 59,593 → 60,043 | `tryRemoveAndExec`  | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +0.7% |  +434 | 79.6% → 80.0% | 60,187 → 60,621 | `awaitDone`         | `java.util.concurrent.ForkJoinTask`           |
|  +0.7% |  +434 | 79.6% → 80.0% | 60,187 → 60,621 | `join`              | `java.util.concurrent.ForkJoinTask`           |
|  +0.5% |  +312 | 90.8% → 91.1% | 68,715 → 69,027 | `copyOf`            | `java.util.Arrays`                            |
|  +1.7% |  +181 | 14.4% → 14.6% | 10,879 → 11,060 | `helpJoin`          | `java.util.concurrent.ForkJoinPool`           |
|  +0.3% |  +173 | 75.3% → 75.4% | 56,980 → 57,153 | `merge`             | `java.util.HashMap`                           |
|  +0.3% |  +173 | 75.3% → 75.4% | 56,980 → 57,153 | `forEach`           | `java.util.HashMap`                           |
|  +0.4% |  +157 | 52.4% → 52.5% | 39,631 → 39,788 | `grow`              | `java.util.ArrayList`                         |
|  +0.2% |  +151 |         99.4% | 75,195 → 75,346 | `doExec`            | `java.util.concurrent.ForkJoinTask`           |
|  +0.2% |  +151 |         99.4% | 75,195 → 75,346 | `topLevelExec`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +0.2% |  +151 |         99.4% | 75,195 → 75,346 | `scan`              | `java.util.concurrent.ForkJoinPool`           |
|  +0.2% |  +151 |         99.4% | 75,195 → 75,346 | `runWorker`         | `java.util.concurrent.ForkJoinPool`           |
|  +0.2% |  +151 |         99.4% | 75,195 → 75,346 | `run`               | `java.util.concurrent.ForkJoinWorkerThread`   |
|  +0.2% |  +146 |         99.4% | 75,192 → 75,338 | `exec`              | `java.util.concurrent.RecursiveTask`          |
|  +0.5% |  +146 | 39.1% → 39.2% | 29,550 → 29,696 | `toArray`           | `java.util.ArrayList`                         |
|  +1.0% |  +130 | 16.4% → 16.6% | 12,420 → 12,550 | `add`               | `java.util.ArrayList`                         |
|  +0.7% |  +103 | 19.1% → 19.2% | 14,451 → 14,554 | `<init>`            | `java.util.ArrayList`                         |
|  +0.2% |   +72 |         55.9% | 42,310 → 42,382 | `addAll`            | `java.util.ArrayList`                         |
| +40.5% |   +17 |          0.1% |         42 → 59 | `executePrivileged` | `java.security.AccessController`              |
| +40.5% |   +17 |          0.1% |         42 → 59 | `doPrivileged`      | `java.security.AccessController`              |

##### Ours

| Change | Delta |             % |         Samples | Function                    | Location                                                                                      |
| -----: | ----: | ------------: | --------------: | --------------------------- | --------------------------------------------------------------------------------------------- |
|  +0.3% |  +173 | 75.3% → 75.4% | 56,976 → 57,149 | `lambda$merge$6`            | `org.renaissance.jdk.concurrent.JavaKMeans`                                                   |
|  +0.3% |  +173 | 75.3% → 75.4% | 56,976 → 57,149 | `apply`                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7498`                        |
|  +0.3% |  +173 | 75.3% → 75.4% | 56,980 → 57,153 | `lambda$merge$7`            | `org.renaissance.jdk.concurrent.JavaKMeans`                                                   |
|  +0.3% |  +173 | 75.3% → 75.4% | 56,980 → 57,153 | `accept`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`                        |
|  +0.3% |  +151 | 76.0% → 76.1% | 57,499 → 57,650 | `combineResults`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                    |
|  +0.3% |  +150 | 76.0% → 76.1% | 57,508 → 57,658 | `merge`                     | `org.renaissance.jdk.concurrent.JavaKMeans`                                                   |
|  +0.2% |  +146 |         99.4% | 75,192 → 75,338 | `compute`                   | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                        |
|  +1.0% |  +132 | 17.5% → 17.7% | 13,251 → 13,383 | `collectClusters`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                    |
|  +0.3% |   +58 |         22.0% | 16,642 → 16,700 | `computeDirectly`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                    |
| +11.6% |   +17 |          0.2% |       146 → 163 | `vectorSum`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
| +11.6% |   +17 |          0.2% |       146 → 163 | `computeDirectly`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
|  +9.2% |   +14 |          0.2% |       152 → 166 | `add`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
|  +9.2% |   +14 |          0.2% |       152 → 166 | `combineResults`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
|    new |   +10 |  0.0% → <0.1% |          0 → 10 | `rowToArray$1`              | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|    new |   +10 |  0.0% → <0.1% |          0 → 10 | `setUpBeforeAll$$anonfun$1` | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|    new |   +10 |  0.0% → <0.1% |          0 → 10 | `lambda$toCsvRows$2`        | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                            |
|    new |   +10 |  0.0% → <0.1% |          0 → 10 | `apply`                     | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000007001123bf8` |
|    new |   +10 |  0.0% → <0.1% |          0 → 10 | `toCsvRows`                 | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                            |
|    new |    +6 |  0.0% → <0.1% |           0 → 6 | `$anonfun$2`                | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|    new |    +6 |  0.0% → <0.1% |           0 → 6 | `apply`                     | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011a27f0`                          |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |         Samples | Function                   | Location                                                               |
| -----: | ----: | ------------: | --------------: | -------------------------- | ---------------------------------------------------------------------- |
|  -1.9% |  -298 | 20.6% → 20.2% | 15,581 → 15,283 | `invoke`                   | `java.util.concurrent.ForkJoinTask`                                    |
|  -1.9% |  -287 | 20.2% → 19.7% | 15,241 → 14,954 | `lambda$run$0`             | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.9% |  -287 | 20.2% → 19.7% | 15,241 → 14,954 | `call`                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |
|  -1.9% |  -287 | 20.2% → 19.7% | 15,241 → 14,954 | `exec`                     | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|  -2.2% |   -74 |   4.5% → 4.4% |   3,391 → 3,317 | `findNearestCentroid`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -19.6% |   -72 |   0.5% → 0.4% |       368 → 296 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| -10.7% |   -41 |          0.5% |       382 → 341 | `accept`                   | `java.util.stream.IntPipeline$1$1`                                     |
| -10.7% |   -41 |          0.5% |       382 → 341 | `forEachRemaining`         | `java.util.stream.Streams$RangeIntSpliterator`                         |
| -10.7% |   -41 |          0.5% |       382 → 341 | `forEachRemaining`         | `java.util.Spliterator$OfInt`                                          |
| -10.7% |   -41 |          0.5% |       382 → 341 | `generateData`             | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -10.9% |   -41 |   0.5% → 0.4% |       377 → 336 | `lambda$generateData$5`    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -10.9% |   -41 |   0.5% → 0.4% |       377 → 336 | `apply`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2150` |
|  -9.0% |   -36 |          0.5% |       401 → 365 | `executeBenchmark`         | `org.renaissance.harness.ExecutionDriver`                              |
|  -8.7% |   -35 |          0.5% |       402 → 367 | `runBenchmarks$$anonfun$1` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -8.7% |   -35 |          0.5% |       402 → 367 | `applyVoid`                | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f1b8` |
|  -8.7% |   -35 |          0.5% |       402 → 367 | `apply`                    | `scala.runtime.function.JProcedure1`                                   |
|  -8.7% |   -35 |          0.5% |       402 → 367 | `foreach`                  | `scala.collection.immutable.List`                                      |
|  -8.7% |   -35 |          0.5% |       402 → 367 | `runBenchmarks`            | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -8.7% |   -34 |          0.5% |       389 → 355 | `copyInto`                 | `java.util.stream.AbstractPipeline`                                    |
|  -8.4% |   -33 |          0.5% |       392 → 359 | `evaluate`                 | `java.util.stream.AbstractPipeline`                                    |

##### Standard library

| Change | Delta |             % |         Samples | Function             | Location                                             |
| -----: | ----: | ------------: | --------------: | -------------------- | ---------------------------------------------------- |
|  -1.9% |  -298 | 20.6% → 20.2% | 15,581 → 15,283 | `invoke`             | `java.util.concurrent.ForkJoinTask`                  |
|  -1.9% |  -287 | 20.2% → 19.7% | 15,241 → 14,954 | `exec`               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
| -10.7% |   -41 |          0.5% |       382 → 341 | `accept`             | `java.util.stream.IntPipeline$1$1`                   |
| -10.7% |   -41 |          0.5% |       382 → 341 | `forEachRemaining`   | `java.util.stream.Streams$RangeIntSpliterator`       |
| -10.7% |   -41 |          0.5% |       382 → 341 | `forEachRemaining`   | `java.util.Spliterator$OfInt`                        |
|  -8.7% |   -35 |          0.5% |       402 → 367 | `apply`              | `scala.runtime.function.JProcedure1`                 |
|  -8.7% |   -35 |          0.5% |       402 → 367 | `foreach`            | `scala.collection.immutable.List`                    |
|  -8.7% |   -34 |          0.5% |       389 → 355 | `copyInto`           | `java.util.stream.AbstractPipeline`                  |
|  -8.4% |   -33 |          0.5% |       392 → 359 | `evaluate`           | `java.util.stream.AbstractPipeline`                  |
|  -8.2% |   -32 |          0.5% |       389 → 357 | `wrapAndCopyInto`    | `java.util.stream.AbstractPipeline`                  |
|  -7.9% |   -30 |          0.5% |       382 → 352 | `evaluateSequential` | `java.util.stream.ReduceOps$ReduceOp`                |
|  -7.9% |   -30 |          0.5% |       382 → 352 | `collect`            | `java.util.stream.ReferencePipeline`                 |
| -10.2% |   -26 |          0.3% |       256 → 230 | `resize`             | `java.util.HashMap`                                  |
|  -5.7% |   -25 |   0.6% → 0.5% |       439 → 414 | `invokeStatic`       | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |
|  -5.7% |   -25 |   0.6% → 0.5% |       439 → 414 | `invoke`             | `java.lang.invoke.LambdaForm$MH.0x0000007001009800`  |
|  -5.7% |   -25 |   0.6% → 0.5% |       440 → 415 | `invokeExact_MT`     | `java.lang.invoke.Invokers$Holder`                   |
|  -5.7% |   -25 |   0.6% → 0.5% |       439 → 414 | `invokeImpl`         | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  -5.7% |   -25 |   0.6% → 0.5% |       439 → 414 | `invoke`             | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  -5.7% |   -25 |   0.6% → 0.5% |       439 → 414 | `invoke`             | `java.lang.reflect.Method`                           |
|  -3.3% |   -21 |   0.9% → 0.8% |       645 → 624 | `computeIfAbsent`    | `java.util.HashMap`                                  |

##### Ours

| Change | Delta |             % |         Samples | Function                    | Location                                                               |
| -----: | ----: | ------------: | --------------: | --------------------------- | ---------------------------------------------------------------------- |
|  -1.9% |  -287 | 20.2% → 19.7% | 15,241 → 14,954 | `lambda$run$0`              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.9% |  -287 | 20.2% → 19.7% | 15,241 → 14,954 | `call`                      | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |
|  -2.2% |   -74 |   4.5% → 4.4% |   3,391 → 3,317 | `findNearestCentroid`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| -19.6% |   -72 |   0.5% → 0.4% |       368 → 296 | `createSubtask`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| -10.7% |   -41 |          0.5% |       382 → 341 | `generateData`              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -10.9% |   -41 |   0.5% → 0.4% |       377 → 336 | `lambda$generateData$5`     | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -10.9% |   -41 |   0.5% → 0.4% |       377 → 336 | `apply`                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2150` |
|  -9.0% |   -36 |          0.5% |       401 → 365 | `executeBenchmark`          | `org.renaissance.harness.ExecutionDriver`                              |
|  -8.7% |   -35 |          0.5% |       402 → 367 | `runBenchmarks$$anonfun$1`  | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -8.7% |   -35 |          0.5% |       402 → 367 | `applyVoid`                 | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f1b8` |
|  -8.7% |   -35 |          0.5% |       402 → 367 | `runBenchmarks`             | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -7.3% |   -32 |   0.6% → 0.5% |       437 → 405 | `main`                      | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -7.9% |   -30 |          0.5% |       382 → 352 | `setUpBeforeAll`            | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -5.7% |   -25 |   0.6% → 0.5% |       439 → 414 | `main`                      | `org.renaissance.harness.RenaissanceSuite`                             |
|  -5.7% |   -25 |          0.6% |       442 → 417 | `launchHarnessClass`        | `org.renaissance.core.Launcher`                                        |
|  -5.7% |   -25 |          0.6% |       442 → 417 | `main`                      | `org.renaissance.core.Launcher`                                        |
|  -5.0% |   -22 |          0.6% |       439 → 417 | `loadAndInvokeHarnessClass` | `org.renaissance.core.Launcher`                                        |
|  -3.5% |   -15 |   0.6% → 0.5% |       427 → 412 | `computeClusterAverages`    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -3.5% |   -15 |   0.6% → 0.5% |       427 → 412 | `computeDirectly`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| -50.0% |   -10 |         <0.1% |         20 → 10 | `boxed`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |

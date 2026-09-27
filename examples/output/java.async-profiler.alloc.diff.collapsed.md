# Sampling profile diff

Collected 75,391 samples → 75,061 samples (-330 samples, -0.4%).

| Category         | Change | Delta |             % |         Samples |
| ---------------- | -----: | ----: | ------------: | --------------: |
| Standard library |  -0.6% |  -387 | 93.3% → 93.2% | 70,362 → 69,975 |
| Ours             |  +1.1% |   +57 |   6.7% → 6.8% |   5,029 → 5,086 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |   Samples | Function                     | Location                                                   |
| ------: | ----: | -----------: | --------: | ---------------------------- | ---------------------------------------------------------- |
|  +19.6% |   +27 |         0.2% | 138 → 165 | `merge`                      | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +21.3% |   +27 |         0.2% | 127 → 154 | `add`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +18.2% |   +24 |         0.2% | 132 → 156 | `vectorSum`                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +7.6% |   +19 |  0.3% → 0.4% | 251 → 270 | `createSubtask`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +4.7% |   +13 |         0.4% | 279 → 292 | `createSubtask`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +14.6% |    +6 |         0.1% |   41 → 47 | `lambda$generateData$4`      | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +1.4% |    +3 |         0.3% | 210 → 213 | `collectClusters`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +1.5% |    +3 |         0.3% | 196 → 199 | `lambda$collectClusters$0`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +300.0% |    +3 |        <0.1% |     1 → 4 | `doubleStream`               | `java.util.stream.StreamSupport`                           |
|     new |    +3 | 0.0% → <0.1% |     0 → 3 | `lambda$boxed$0`             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +33.3% |    +2 |        <0.1% |     6 → 8 | `awaitDone`                  | `java.util.concurrent.ForkJoinTask`                        |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `addConstantUtf8`            | `jdk.internal.org.objectweb.asm.SymbolTable`               |
| +200.0% |    +2 |        <0.1% |     1 → 3 | `div`                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `collectGarbage`             | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `average`                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +12.5% |    +1 |        <0.1% |     8 → 9 | `<init>`                     | `java.util.zip.InflaterInputStream`                        |
| +100.0% |    +1 |        <0.1% |     1 → 2 | `result`                     | `scala.collection.immutable.VectorBuilder`                 |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `initCEN`                    | `java.util.zip.ZipFile$Source`                             |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `resolve`                    | `sun.nio.fs.UnixPath`                                      |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `allocateUninitializedArray` | `jdk.internal.misc.Unsafe`                                 |

##### Standard library

|  Change | Delta |            % | Samples | Function                              | Location                                      |
| ------: | ----: | -----------: | ------: | ------------------------------------- | --------------------------------------------- |
| +300.0% |    +3 |        <0.1% |   1 → 4 | `doubleStream`                        | `java.util.stream.StreamSupport`              |
|  +33.3% |    +2 |        <0.1% |   6 → 8 | `awaitDone`                           | `java.util.concurrent.ForkJoinTask`           |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `addConstantUtf8`                     | `jdk.internal.org.objectweb.asm.SymbolTable`  |
|  +12.5% |    +1 |        <0.1% |   8 → 9 | `<init>`                              | `java.util.zip.InflaterInputStream`           |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `result`                              | `scala.collection.immutable.VectorBuilder`    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `initCEN`                             | `java.util.zip.ZipFile$Source`                |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `resolve`                             | `sun.nio.fs.UnixPath`                         |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `allocateUninitializedArray`          | `jdk.internal.misc.Unsafe`                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `entryFor`                            | `java.util.jar.JarFile`                       |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `allocateUninitializedArray0`         | `jdk.internal.misc.Unsafe`                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `iterator`                            | `java.util.HashMap$KeySet`                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `load`                                | `java.time.zone.TzdbZoneRulesProvider`        |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `endCurrentBasicBlockWithNoSuccessor` | `jdk.internal.org.objectweb.asm.MethodWriter` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `transfer`                            | `java.util.concurrent.ConcurrentHashMap`      |

##### Ours

|  Change | Delta |            % |   Samples | Function                   | Location                                                   |
| ------: | ----: | -----------: | --------: | -------------------------- | ---------------------------------------------------------- |
|  +19.6% |   +27 |         0.2% | 138 → 165 | `merge`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +21.3% |   +27 |         0.2% | 127 → 154 | `add`                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +18.2% |   +24 |         0.2% | 132 → 156 | `vectorSum`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +7.6% |   +19 |  0.3% → 0.4% | 251 → 270 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +4.7% |   +13 |         0.4% | 279 → 292 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +14.6% |    +6 |         0.1% |   41 → 47 | `lambda$generateData$4`    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +1.4% |    +3 |         0.3% | 210 → 213 | `collectClusters`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +1.5% |    +3 |         0.3% | 196 → 199 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +3 | 0.0% → <0.1% |     0 → 3 | `lambda$boxed$0`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +200.0% |    +2 |        <0.1% |     1 → 3 | `div`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `collectGarbage`           | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `average`                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |         Samples | Function                 | Location                                                   |
| ------: | ----: | -----------: | --------------: | ------------------------ | ---------------------------------------------------------- |
|   -0.4% |  -287 |        91.1% | 68,652 → 68,365 | `copyOf`                 | `java.util.Arrays`                                         |
|   -1.1% |   -39 |         4.5% |   3,402 → 3,363 | `findNearestCentroid`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -5.3% |   -29 |         0.7% |       547 → 518 | `newNode`                | `java.util.HashMap`                                        |
|  -11.2% |   -25 |         0.3% |       223 → 198 | `lambda$merge$6`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   -4.3% |   -22 |         0.7% |       516 → 494 | `grow`                   | `java.util.ArrayList`                                      |
|  -25.0% |   -16 |         0.1% |         64 → 48 | `intStream`              | `java.util.stream.StreamSupport`                           |
|  -32.4% |   -11 |        <0.1% |         34 → 23 | `range`                  | `java.util.stream.IntStream`                               |
|  -29.2% |    -7 |        <0.1% |         24 → 17 | `opWrapSink`             | `java.util.stream.IntPipeline$1`                           |
|  -24.0% |    -6 |        <0.1% |         25 → 19 | `builder`                | `java.util.stream.Nodes`                                   |
|   -4.0% |    -5 |         0.2% |       125 → 120 | `valueOf`                | `java.lang.Double`                                         |
|  -55.6% |    -5 |        <0.1% |           9 → 4 | `allocateInstance`       | `jdk.internal.misc.Unsafe`                                 |
|  -33.3% |    -5 |        <0.1% |         15 → 10 | `createSubtask`          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -19.0% |    -4 |        <0.1% |         21 → 17 | `allocateInstance`       | `java.lang.invoke.DirectMethodHandle`                      |
|  -30.0% |    -3 |        <0.1% |          10 → 7 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |    -2 | <0.1% → 0.0% |           2 → 0 | `initDataOffset`         | `java.util.zip.ZipFile$ZipFileInputStream`                 |
|  -25.0% |    -1 |        <0.1% |           4 → 3 | `lambda$run$0`           | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   -0.4% |    -1 |         0.3% |       223 → 222 | `resize`                 | `java.util.HashMap`                                        |
| removed |    -1 | <0.1% → 0.0% |           1 → 0 | `getBytes`               | `jdk.internal.loader.Resource`                             |
|  -33.3% |    -1 |        <0.1% |           3 → 2 | `fillInStackTrace`       | `java.lang.Throwable`                                      |
| removed |    -1 | <0.1% → 0.0% |           1 → 0 | `checkResource`          | `jdk.internal.loader.URLClassPath$JarLoader`               |

##### Standard library

|  Change | Delta |            % |         Samples | Function           | Location                                     |
| ------: | ----: | -----------: | --------------: | ------------------ | -------------------------------------------- |
|   -0.4% |  -287 |        91.1% | 68,652 → 68,365 | `copyOf`           | `java.util.Arrays`                           |
|   -5.3% |   -29 |         0.7% |       547 → 518 | `newNode`          | `java.util.HashMap`                          |
|   -4.3% |   -22 |         0.7% |       516 → 494 | `grow`             | `java.util.ArrayList`                        |
|  -25.0% |   -16 |         0.1% |         64 → 48 | `intStream`        | `java.util.stream.StreamSupport`             |
|  -32.4% |   -11 |        <0.1% |         34 → 23 | `range`            | `java.util.stream.IntStream`                 |
|  -29.2% |    -7 |        <0.1% |         24 → 17 | `opWrapSink`       | `java.util.stream.IntPipeline$1`             |
|  -24.0% |    -6 |        <0.1% |         25 → 19 | `builder`          | `java.util.stream.Nodes`                     |
|   -4.0% |    -5 |         0.2% |       125 → 120 | `valueOf`          | `java.lang.Double`                           |
|  -55.6% |    -5 |        <0.1% |           9 → 4 | `allocateInstance` | `jdk.internal.misc.Unsafe`                   |
|  -19.0% |    -4 |        <0.1% |         21 → 17 | `allocateInstance` | `java.lang.invoke.DirectMethodHandle`        |
| removed |    -2 | <0.1% → 0.0% |           2 → 0 | `initDataOffset`   | `java.util.zip.ZipFile$ZipFileInputStream`   |
|   -0.4% |    -1 |         0.3% |       223 → 222 | `resize`           | `java.util.HashMap`                          |
| removed |    -1 | <0.1% → 0.0% |           1 → 0 | `getBytes`         | `jdk.internal.loader.Resource`               |
|  -33.3% |    -1 |        <0.1% |           3 → 2 | `fillInStackTrace` | `java.lang.Throwable`                        |
| removed |    -1 | <0.1% → 0.0% |           1 → 0 | `checkResource`    | `jdk.internal.loader.URLClassPath$JarLoader` |
|   -3.6% |    -1 |        <0.1% |         28 → 27 | `entrySet`         | `java.util.HashMap`                          |
|  -25.0% |    -1 |        <0.1% |           4 → 3 | `readNBytes`       | `java.io.InputStream`                        |
|  -50.0% |    -1 |        <0.1% |           2 → 1 | `mapToObj`         | `java.util.stream.DoublePipeline`            |
| removed |    -1 | <0.1% → 0.0% |           1 → 0 | `valueOf`          | `java.lang.Integer`                          |
|   -1.9% |    -1 |         0.1% |         52 → 51 | `mapToObj`         | `java.util.stream.IntPipeline`               |

##### Ours

| Change | Delta |     % |       Samples | Function                 | Location                                                   |
| -----: | ----: | ----: | ------------: | ------------------------ | ---------------------------------------------------------- |
|  -1.1% |   -39 |  4.5% | 3,402 → 3,363 | `findNearestCentroid`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -11.2% |   -25 |  0.3% |     223 → 198 | `lambda$merge$6`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| -33.3% |    -5 | <0.1% |       15 → 10 | `createSubtask`          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -30.0% |    -3 | <0.1% |        10 → 7 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -25.0% |    -1 | <0.1% |         4 → 3 | `lambda$run$0`           | `org.renaissance.jdk.concurrent.JavaKMeans`                |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |         Samples | Function                 | Location                                                               |
| ------: | ----: | ------------: | --------------: | ------------------------ | ---------------------------------------------------------------------- |
|     new |  +403 |   0.0% → 0.5% |         0 → 403 | `invokeStatic`           | `java.lang.invoke.LambdaForm$DMH.0x0000000401004800`                   |
|     new |  +403 |   0.0% → 0.5% |         0 → 403 | `invoke`                 | `java.lang.invoke.LambdaForm$MH.0x0000000401009800`                    |
|   +0.9% |  +105 | 16.3% → 16.5% | 12,270 → 12,375 | `add`                    | `java.util.ArrayList`                                                  |
|   +0.7% |   +94 | 17.4% → 17.6% | 13,091 → 13,185 | `collectClusters`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +187.8% |   +77 |   0.1% → 0.2% |        41 → 118 | `apply`                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401125b10` |
|  +24.1% |   +72 |   0.4% → 0.5% |       299 → 371 | `average`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +19.6% |   +64 |   0.4% → 0.5% |       327 → 391 | `computeClusterAverages` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +19.6% |   +64 |   0.4% → 0.5% |       327 → 391 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +0.3% |   +55 | 21.9% → 22.0% | 16,493 → 16,548 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +21.3% |   +27 |          0.2% |       127 → 154 | `add`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +21.3% |   +27 |          0.2% |       127 → 154 | `combineResults`         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +18.2% |   +24 |          0.2% |       132 → 156 | `vectorSum`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +18.2% |   +24 |          0.2% |       132 → 156 | `computeDirectly`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +7.6% |   +19 |   0.3% → 0.4% |       251 → 270 | `createSubtask`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|     new |   +18 |  0.0% → <0.1% |          0 → 18 | `newInvokeSpecial`       | `java.lang.invoke.LambdaForm$DMH.0x0000000401126400`                   |
|     new |   +18 |  0.0% → <0.1% |          0 → 18 | `linkToTargetMethod`     | `java.lang.invoke.LambdaForm$MH.0x0000000401126c00`                    |
|   +4.7% |   +13 |          0.4% |       279 → 292 | `createSubtask`          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +22.0% |    +9 |          0.1% |         41 → 50 | `<init>`                 | `java.util.stream.Nodes$ArrayNode`                                     |
|  +22.0% |    +9 |          0.1% |         41 → 50 | `<init>`                 | `java.util.stream.Nodes$FixedNodeBuilder`                              |
|  +18.6% |    +8 |          0.1% |         43 → 51 | `loadClass`              | `java.lang.ClassLoader`                                                |

##### Standard library

|  Change | Delta |             % |         Samples | Function             | Location                                             |
| ------: | ----: | ------------: | --------------: | -------------------- | ---------------------------------------------------- |
|     new |  +403 |   0.0% → 0.5% |         0 → 403 | `invokeStatic`       | `java.lang.invoke.LambdaForm$DMH.0x0000000401004800` |
|     new |  +403 |   0.0% → 0.5% |         0 → 403 | `invoke`             | `java.lang.invoke.LambdaForm$MH.0x0000000401009800`  |
|   +0.9% |  +105 | 16.3% → 16.5% | 12,270 → 12,375 | `add`                | `java.util.ArrayList`                                |
|     new |   +18 |  0.0% → <0.1% |          0 → 18 | `newInvokeSpecial`   | `java.lang.invoke.LambdaForm$DMH.0x0000000401126400` |
|     new |   +18 |  0.0% → <0.1% |          0 → 18 | `linkToTargetMethod` | `java.lang.invoke.LambdaForm$MH.0x0000000401126c00`  |
|  +22.0% |    +9 |          0.1% |         41 → 50 | `<init>`             | `java.util.stream.Nodes$ArrayNode`                   |
|  +22.0% |    +9 |          0.1% |         41 → 50 | `<init>`             | `java.util.stream.Nodes$FixedNodeBuilder`            |
|  +18.6% |    +8 |          0.1% |         43 → 51 | `loadClass`          | `java.lang.ClassLoader`                              |
|  +14.6% |    +6 |          0.1% |         41 → 47 | `executePrivileged`  | `java.security.AccessController`                     |
|  +14.6% |    +6 |          0.1% |         41 → 47 | `doPrivileged`       | `java.security.AccessController`                     |
|  +11.4% |    +4 |  <0.1% → 0.1% |         35 → 39 | `defineClass`        | `java.net.URLClassLoader`                            |
|   +9.8% |    +4 |          0.1% |         41 → 45 | `run`                | `java.net.URLClassLoader$1`                          |
|   +9.8% |    +4 |          0.1% |         41 → 45 | `findClass`          | `java.net.URLClassLoader`                            |
| +400.0% |    +4 |         <0.1% |           1 → 5 | `loadClassOrNull`    | `jdk.internal.loader.BuiltinClassLoader`             |
|  +13.0% |    +3 |         <0.1% |         23 → 26 | `getBytes`           | `jdk.internal.loader.Resource`                       |
|  +13.0% |    +3 |         <0.1% |         23 → 26 | `getBytes`           | `jdk.internal.loader.URLClassPath$JarLoader$2`       |
|  +75.0% |    +3 |         <0.1% |           4 → 7 | `loadClass`          | `jdk.internal.loader.BuiltinClassLoader`             |
|  +75.0% |    +3 |         <0.1% |           4 → 7 | `loadClass`          | `jdk.internal.loader.ClassLoaders$AppClassLoader`    |
| +300.0% |    +3 |         <0.1% |           1 → 4 | `doubleStream`       | `java.util.stream.StreamSupport`                     |
| +100.0% |    +3 |         <0.1% |           3 → 6 | `stream`             | `java.util.Arrays`                                   |

##### Ours

|  Change | Delta |             % |         Samples | Function                   | Location                                                                              |
| ------: | ----: | ------------: | --------------: | -------------------------- | ------------------------------------------------------------------------------------- |
|   +0.7% |   +94 | 17.4% → 17.6% | 13,091 → 13,185 | `collectClusters`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +187.8% |   +77 |   0.1% → 0.2% |        41 → 118 | `apply`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401125b10`                |
|  +24.1% |   +72 |   0.4% → 0.5% |       299 → 371 | `average`                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +19.6% |   +64 |   0.4% → 0.5% |       327 → 391 | `computeClusterAverages`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +19.6% |   +64 |   0.4% → 0.5% |       327 → 391 | `computeDirectly`          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   +0.3% |   +55 | 21.9% → 22.0% | 16,493 → 16,548 | `computeDirectly`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +21.3% |   +27 |          0.2% |       127 → 154 | `add`                      | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +21.3% |   +27 |          0.2% |       127 → 154 | `combineResults`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +18.2% |   +24 |          0.2% |       132 → 156 | `vectorSum`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +18.2% |   +24 |          0.2% |       132 → 156 | `computeDirectly`          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +7.6% |   +19 |   0.3% → 0.4% |       251 → 270 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +4.7% |   +13 |          0.4% |       279 → 292 | `createSubtask`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +233.3% |    +7 |         <0.1% |          3 → 10 | `runParser`                | `scopt.ORunner$`                                                                      |
| +233.3% |    +7 |         <0.1% |          3 → 10 | `parse`                    | `scopt.OptionParser`                                                                  |
| +120.0% |    +6 |         <0.1% |          5 → 11 | `parse`                    | `org.renaissance.harness.ConfigParser`                                                |
|  +14.6% |    +6 |          0.1% |         41 → 47 | `lambda$generateData$4`    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|     new |    +4 |  0.0% → <0.1% |           0 → 4 | `apply`                    | `scopt.OptionDef$$Lambda.0x00000004010d97d8`                                          |
|     new |    +4 |  0.0% → <0.1% |           0 → 4 | `makeDef`                  | `scopt.OptionParser`                                                                  |
|   +1.5% |    +3 |          0.3% |       196 → 199 | `lambda$collectClusters$0` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +1.5% |    +3 |          0.3% |       196 → 199 | `apply`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000401186b38` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % |         Samples | Function           | Location                                                               |
| ------: | ----: | ------------: | --------------: | ------------------ | ---------------------------------------------------------------------- |
|   -5.4% |  -610 | 14.9% → 14.1% | 11,204 → 10,594 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`                                    |
|   -0.8% |  -456 | 80.0% → 79.8% | 60,350 → 59,894 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                                    |
|   -0.8% |  -456 | 80.0% → 79.8% | 60,350 → 59,894 | `join`             | `java.util.concurrent.ForkJoinTask`                                    |
|   -0.8% |  -446 | 75.7% → 75.5% | 57,101 → 56,655 | `lambda$merge$6`   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.8% |  -446 | 75.7% → 75.5% | 57,101 → 56,655 | `apply`            | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187b48` |
|   -0.8% |  -446 | 75.7% → 75.5% | 57,104 → 56,658 | `merge`            | `java.util.HashMap`                                                    |
|   -0.8% |  -446 | 75.7% → 75.5% | 57,104 → 56,658 | `lambda$merge$7`   | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.8% |  -446 | 75.7% → 75.5% | 57,104 → 56,658 | `accept`           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187228` |
|   -0.8% |  -446 | 75.7% → 75.5% | 57,104 → 56,658 | `forEach`          | `java.util.HashMap`                                                    |
| removed |  -443 |   0.6% → 0.0% |         443 → 0 | `invokeStatic`     | `java.lang.invoke.LambdaForm$DMH.0x000000d001004800`                   |
| removed |  -443 |   0.6% → 0.0% |         443 → 0 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000d001009800`                    |
|   -0.7% |  -425 | 76.4% → 76.2% | 57,610 → 57,185 | `merge`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.7% |  -423 | 76.4% → 76.2% | 57,602 → 57,179 | `combineResults`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.6% |  -387 | 79.2% → 79.0% | 59,697 → 59,310 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|   -0.4% |  -296 | 99.4% → 99.5% | 74,947 → 74,651 | `doExec`           | `java.util.concurrent.ForkJoinTask`                                    |
|   -0.4% |  -296 | 99.4% → 99.5% | 74,947 → 74,651 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|   -0.4% |  -296 | 99.4% → 99.5% | 74,947 → 74,651 | `scan`             | `java.util.concurrent.ForkJoinPool`                                    |
|   -0.4% |  -296 | 99.4% → 99.5% | 74,947 → 74,651 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                                    |
|   -0.4% |  -296 | 99.4% → 99.5% | 74,947 → 74,651 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`                            |
|   -0.4% |  -295 |         99.4% | 74,943 → 74,648 | `compute`          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |

##### Standard library

|  Change | Delta |             % |         Samples | Function           | Location                                             |
| ------: | ----: | ------------: | --------------: | ------------------ | ---------------------------------------------------- |
|   -5.4% |  -610 | 14.9% → 14.1% | 11,204 → 10,594 | `helpJoin`         | `java.util.concurrent.ForkJoinPool`                  |
|   -0.8% |  -456 | 80.0% → 79.8% | 60,350 → 59,894 | `awaitDone`        | `java.util.concurrent.ForkJoinTask`                  |
|   -0.8% |  -456 | 80.0% → 79.8% | 60,350 → 59,894 | `join`             | `java.util.concurrent.ForkJoinTask`                  |
|   -0.8% |  -446 | 75.7% → 75.5% | 57,104 → 56,658 | `merge`            | `java.util.HashMap`                                  |
|   -0.8% |  -446 | 75.7% → 75.5% | 57,104 → 56,658 | `forEach`          | `java.util.HashMap`                                  |
| removed |  -443 |   0.6% → 0.0% |         443 → 0 | `invokeStatic`     | `java.lang.invoke.LambdaForm$DMH.0x000000d001004800` |
| removed |  -443 |   0.6% → 0.0% |         443 → 0 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000d001009800`  |
|   -0.6% |  -387 | 79.2% → 79.0% | 59,697 → 59,310 | `tryRemoveAndExec` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   -0.4% |  -296 | 99.4% → 99.5% | 74,947 → 74,651 | `doExec`           | `java.util.concurrent.ForkJoinTask`                  |
|   -0.4% |  -296 | 99.4% → 99.5% | 74,947 → 74,651 | `topLevelExec`     | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   -0.4% |  -296 | 99.4% → 99.5% | 74,947 → 74,651 | `scan`             | `java.util.concurrent.ForkJoinPool`                  |
|   -0.4% |  -296 | 99.4% → 99.5% | 74,947 → 74,651 | `runWorker`        | `java.util.concurrent.ForkJoinPool`                  |
|   -0.4% |  -296 | 99.4% → 99.5% | 74,947 → 74,651 | `run`              | `java.util.concurrent.ForkJoinWorkerThread`          |
|   -0.4% |  -295 |         99.4% | 74,943 → 74,648 | `exec`             | `java.util.concurrent.RecursiveTask`                 |
|   -0.4% |  -287 |         91.1% | 68,652 → 68,365 | `copyOf`           | `java.util.Arrays`                                   |
|   -0.5% |  -226 |         56.2% | 42,381 → 42,155 | `addAll`           | `java.util.ArrayList`                                |
|   -1.3% |  -195 | 19.2% → 19.1% | 14,497 → 14,302 | `<init>`           | `java.util.ArrayList`                                |
|   -0.5% |  -191 |         52.5% | 39,605 → 39,414 | `grow`             | `java.util.ArrayList`                                |
|   -1.2% |  -179 | 20.2% → 20.1% | 15,259 → 15,080 | `exec`             | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
|   -0.4% |  -125 |         39.2% | 29,543 → 29,418 | `toArray`          | `java.util.ArrayList`                                |

##### Ours

| Change | Delta |             % |         Samples | Function                   | Location                                                               |
| -----: | ----: | ------------: | --------------: | -------------------------- | ---------------------------------------------------------------------- |
|  -0.8% |  -446 | 75.7% → 75.5% | 57,101 → 56,655 | `lambda$merge$6`           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -0.8% |  -446 | 75.7% → 75.5% | 57,101 → 56,655 | `apply`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187b48` |
|  -0.8% |  -446 | 75.7% → 75.5% | 57,104 → 56,658 | `lambda$merge$7`           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -0.8% |  -446 | 75.7% → 75.5% | 57,104 → 56,658 | `accept`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401187228` |
|  -0.7% |  -425 | 76.4% → 76.2% | 57,610 → 57,185 | `merge`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -0.7% |  -423 | 76.4% → 76.2% | 57,602 → 57,179 | `combineResults`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -0.4% |  -295 |         99.4% | 74,943 → 74,648 | `compute`                  | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -1.2% |  -179 | 20.2% → 20.1% | 15,259 → 15,080 | `lambda$run$0`             | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.2% |  -179 | 20.2% → 20.1% | 15,259 → 15,080 | `call`                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401183d68` |
| -60.8% |   -73 |   0.2% → 0.1% |        120 → 47 | `apply`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000401125d48` |
| -14.0% |   -59 |   0.6% → 0.5% |       420 → 361 | `executeBenchmark`         | `org.renaissance.harness.ExecutionDriver`                              |
| -13.8% |   -58 |   0.6% → 0.5% |       420 → 362 | `runBenchmarks$$anonfun$1` | `org.renaissance.harness.RenaissanceSuite$`                            |
| -13.8% |   -58 |   0.6% → 0.5% |       420 → 362 | `applyVoid`                | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000040111f208` |
| -13.8% |   -58 |   0.6% → 0.5% |       420 → 362 | `runBenchmarks`            | `org.renaissance.harness.RenaissanceSuite$`                            |
| -11.6% |   -45 |          0.5% |       389 → 344 | `generateData`             | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -11.6% |   -45 |          0.5% |       389 → 344 | `setUpBeforeAll`           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| -11.5% |   -44 |          0.5% |       384 → 340 | `apply`                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011258d8` |
| -11.5% |   -44 |          0.5% |       384 → 340 | `lambda$generateData$5`    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -9.6% |   -42 |   0.6% → 0.5% |       439 → 397 | `main`                     | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -9.0% |   -40 |   0.6% → 0.5% |       443 → 403 | `main`                     | `org.renaissance.harness.RenaissanceSuite`                             |

# Allocated heap profile

Allocated 37 GiB over 75,363 samples (514 KiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Standard library | 92.8% | 34.3 GiB |  69,924 |
| Ours             |  7.2% | 2.66 GiB |   5,439 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function                                     | Location                                                   |
| ----: | -------: | ------: | -------------------------------------------- | ---------------------------------------------------------- |
| 90.6% | 33.5 GiB |  68,226 | `copyOf(Object[], int)`                      | `java.util.Arrays`                                         |
|  4.7% | 1.75 GiB |   3,593 | `findNearestCentroid()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.8% |  288 MiB |     576 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                        |
|  0.6% |  233 MiB |     467 | `grow(int)`                                  | `java.util.ArrayList`                                      |
|  0.5% |  175 MiB |     351 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.4% |  137 MiB |     274 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |  114 MiB |     229 | `collectClusters(int[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |  109 MiB |     218 | `resize()`                                   | `java.util.HashMap`                                        |
|  0.3% |  109 MiB |     218 | `lambda$collectClusters$0(Double[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |  107 MiB |     215 | `lambda$merge$6(List, List)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.2% |   89 MiB |     178 | `add(double[], double[])`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.2% | 87.5 MiB |     175 | `vectorSum()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.2% | 75.5 MiB |     151 | `merge(Map, Map)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.2% | 61.5 MiB |     123 | `valueOf(double)`                            | `java.lang.Double`                                         |
|  0.1% |   26 MiB |      52 | `intStream(Spliterator$OfInt, boolean)`      | `java.util.stream.StreamSupport`                           |
|  0.1% | 24.5 MiB |      49 | `mapToObj(IntFunction, int)`                 | `java.util.stream.IntPipeline`                             |
| <0.1% |   16 MiB |      32 | `lambda$generateData$4(int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |   14 MiB |      28 | `builder(long, IntFunction)`                 | `java.util.stream.Nodes`                                   |
| <0.1% | 13.5 MiB |      27 | `range(int, int)`                            | `java.util.stream.IntStream`                               |
| <0.1% | 12.5 MiB |      25 | `entrySet()`                                 | `java.util.HashMap`                                        |

#### Categories

##### Standard library

|     % |     Size | Samples | Function                                      | Location                              |
| ----: | -------: | ------: | --------------------------------------------- | ------------------------------------- |
| 90.6% | 33.5 GiB |  68,226 | `copyOf(Object[], int)`                       | `java.util.Arrays`                    |
|  0.8% |  288 MiB |     576 | `newNode(int, Object, Object, HashMap$Node)`  | `java.util.HashMap`                   |
|  0.6% |  233 MiB |     467 | `grow(int)`                                   | `java.util.ArrayList`                 |
|  0.3% |  109 MiB |     218 | `resize()`                                    | `java.util.HashMap`                   |
|  0.2% | 61.5 MiB |     123 | `valueOf(double)`                             | `java.lang.Double`                    |
|  0.1% |   26 MiB |      52 | `intStream(Spliterator$OfInt, boolean)`       | `java.util.stream.StreamSupport`      |
|  0.1% | 24.5 MiB |      49 | `mapToObj(IntFunction, int)`                  | `java.util.stream.IntPipeline`        |
| <0.1% |   14 MiB |      28 | `builder(long, IntFunction)`                  | `java.util.stream.Nodes`              |
| <0.1% | 13.5 MiB |      27 | `range(int, int)`                             | `java.util.stream.IntStream`          |
| <0.1% | 12.5 MiB |      25 | `entrySet()`                                  | `java.util.HashMap`                   |
| <0.1% | 12.4 MiB |      19 | `copyOf(Object[], int, Class)`                | `java.util.Arrays`                    |
| <0.1% |   11 MiB |      22 | `allocateInstance(Object)`                    | `java.lang.invoke.DirectMethodHandle` |
| <0.1% | 10.5 MiB |      21 | `copyOf(byte[], int)`                         | `java.util.Arrays`                    |
| <0.1% |    8 MiB |      16 | `opWrapSink(int, Sink)`                       | `java.util.stream.IntPipeline$1`      |
| <0.1% |    5 MiB |      10 | `awaitDone(int, long)`                        | `java.util.concurrent.ForkJoinTask`   |
| <0.1% |    4 MiB |       8 | `allocateInstance(Class)`                     | `jdk.internal.misc.Unsafe`            |
| <0.1% |    4 MiB |       8 | `<init>(InputStream, Inflater, int)`          | `java.util.zip.InflaterInputStream`   |
| <0.1% |    2 MiB |       4 | `copyOfRangeByte(byte[], int, int)`           | `java.util.Arrays`                    |
| <0.1% |  1.5 MiB |       3 | `opWrapSink(int, Sink)`                       | `java.util.stream.DoublePipeline$1`   |
| <0.1% | 1024 KiB |       2 | `doubleStream(Spliterator$OfDouble, boolean)` | `java.util.stream.StreamSupport`      |

##### Ours

|     % |     Size | Samples | Function                             | Location                                                   |
| ----: | -------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|  4.7% | 1.75 GiB |   3,593 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.5% |  175 MiB |     351 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.4% |  137 MiB |     274 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |  114 MiB |     229 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |  109 MiB |     218 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |  107 MiB |     215 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.2% |   89 MiB |     178 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.2% | 87.5 MiB |     175 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.2% | 75.5 MiB |     151 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |   16 MiB |      32 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |  5.5 MiB |      11 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |  2.5 MiB |       5 | `computeClusterAverages()`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |  1.5 MiB |       3 | `lambda$run$0(int, List, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |  512 KiB |       1 | `average(List)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |  512 KiB |       1 | `lambda$boxed$0(int)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |  512 KiB |       1 | `div(double[], int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |  512 KiB |       1 | `collectGarbage(String)`             | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |

#### Lines

Lines ranked by contribution to each function's self size.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 33.5 GiB |  68,226 | `java.util.Arrays:3482` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Location                                                       |
| -----: | -------: | ------: | -------------------------------------------------------------- |
| 100.0% | 1.75 GiB |   3,593 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|      % |    Size | Samples | Location                 |
| -----: | ------: | ------: | ------------------------ |
| 100.0% | 288 MiB |     576 | `java.util.HashMap:1909` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |    Size | Samples | Location                  |
| -----: | ------: | ------: | ------------------------- |
| 100.0% | 233 MiB |     467 | `java.util.ArrayList:239` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |    Size | Samples | Location                                                      |
| -----: | ------: | ------: | ------------------------------------------------------------- |
| 100.0% | 175 MiB |     351 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Location                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------- |
| 100.0% | 137 MiB |     274 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Location                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------- |
| 100.0% | 114 MiB |     229 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `resize()` (`java.util.HashMap`)

|      % |    Size | Samples | Location                |
| -----: | ------: | ------: | ----------------------- |
| 100.0% | 109 MiB |     218 | `java.util.HashMap:710` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Location                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------- |
| 100.0% | 109 MiB |     218 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Location                                        |
| -----: | ------: | ------: | ----------------------------------------------- |
| 100.0% | 107 MiB |     215 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |   Size | Samples | Location                                                      |
| -----: | -----: | ------: | ------------------------------------------------------------- |
| 100.0% | 89 MiB |     178 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Location                                                      |
| -----: | -------: | ------: | ------------------------------------------------------------- |
| 100.0% | 87.5 MiB |     175 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Location                                        |
| -----: | -------: | ------: | ----------------------------------------------- |
| 100.0% | 75.5 MiB |     151 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `valueOf(double)` (`java.lang.Double`)

|      % |     Size | Samples | Location               |
| -----: | -------: | ------: | ---------------------- |
| 100.0% | 61.5 MiB |     123 | `java.lang.Double:773` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

|      % |   Size | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 26 MiB |      52 | `java.util.stream.StreamSupport:138` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

|      % |     Size | Samples | Location                           |
| -----: | -------: | ------: | ---------------------------------- |
| 100.0% | 24.5 MiB |      49 | `java.util.stream.IntPipeline:174` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |   Size | Samples | Location                                       |
| -----: | -----: | ------: | ---------------------------------------------- |
| 100.0% | 16 MiB |      32 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

|      % |   Size | Samples | Location                     |
| -----: | -----: | ------: | ---------------------------- |
| 100.0% | 14 MiB |      28 | `java.util.stream.Nodes:168` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|      % |     Size | Samples | Location                          |
| -----: | -------: | ------: | --------------------------------- |
| 100.0% | 13.5 MiB |      27 | `java.util.stream.IntStream:1083` |

##### `entrySet()` (`java.util.HashMap`)

|      % |     Size | Samples | Location                 |
| -----: | -------: | ------: | ------------------------ |
| 100.0% | 12.5 MiB |      25 | `java.util.HashMap:1099` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 12.4 MiB |      19 | `java.util.Arrays:3513` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|      % |   Size | Samples | Location                                  |
| -----: | -----: | ------: | ----------------------------------------- |
| 100.0% | 11 MiB |      22 | `java.lang.invoke.DirectMethodHandle:501` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 10.5 MiB |      21 | `java.util.Arrays:3541` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|      % |  Size | Samples | Location                             |
| -----: | ----: | ------: | ------------------------------------ |
| 100.0% | 8 MiB |      16 | `java.util.stream.IntPipeline$1:177` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |    Size | Samples | Location                                                   |
| -----: | ------: | ------: | ---------------------------------------------------------- |
| 100.0% | 5.5 MiB |      11 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:352` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |  Size | Samples | Location                                |
| -----: | ----: | ------: | --------------------------------------- |
| 100.0% | 5 MiB |      10 | `java.util.concurrent.ForkJoinTask:437` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

|      % |  Size | Samples | Location                               |
| -----: | ----: | ------: | -------------------------------------- |
| 100.0% | 4 MiB |       8 | `java.util.zip.InflaterInputStream:89` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |    Size | Samples | Location                                                   |
| -----: | ------: | ------: | ---------------------------------------------------------- |
| 100.0% | 2.5 MiB |       5 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:314` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % |  Size | Samples | Location                |
| -----: | ----: | ------: | ----------------------- |
| 100.0% | 2 MiB |       4 | `java.util.Arrays:3863` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

|      % |    Size | Samples | Location                                |
| -----: | ------: | ------: | --------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `java.util.stream.DoublePipeline$1:173` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Location                                       |
| -----: | ------: | ------: | ---------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `org.renaissance.jdk.concurrent.JavaKMeans:53` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

|      % |     Size | Samples | Location                             |
| -----: | -------: | ------: | ------------------------------------ |
| 100.0% | 1024 KiB |       2 | `java.util.stream.StreamSupport:274` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |    Size | Samples | Location                                                   |
| -----: | ------: | ------: | ---------------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:332` |

##### `lambda$boxed$0(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |    Size | Samples | Location                                                   |
| -----: | ------: | ------: | ---------------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:327` |

##### `div(double[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |    Size | Samples | Location                                                   |
| -----: | ------: | ------: | ---------------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:339` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin:26` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Caller      | Location              |
| ----: | -------: | ------: | ----------- | --------------------- |
| 57.3% | 19.2 GiB |  38,948 | `grow(int)` | `java.util.ArrayList` |
| 42.7% | 14.3 GiB |  29,278 | `toArray()` | `java.util.ArrayList` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller              | Location                                                   |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 1.75 GiB |   3,593 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|     % |    Size | Samples | Caller                                          | Location            |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------- |
| 50.5% | 145 MiB |     291 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
| 49.0% | 141 MiB |     282 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|  0.5% | 1.5 MiB |       3 | `merge(Object, Object, BiFunction)`             | `java.util.HashMap` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |    Size | Samples | Caller   | Location              |
| -----: | ------: | ------: | -------- | --------------------- |
| 100.0% | 233 MiB |     467 | `grow()` | `java.util.ArrayList` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |    Size | Samples | Caller      | Location                                               |
| -----: | ------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 175 MiB |     351 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller      | Location                                               |
| -----: | ------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 137 MiB |     274 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller              | Location                                                   |
| -----: | ------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 114 MiB |     229 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `resize()` (`java.util.HashMap`)

|     % |     Size | Samples | Caller                                          | Location            |
| ----: | -------: | ------: | ----------------------------------------------- | ------------------- |
| 59.6% |   65 MiB |     130 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
| 39.9% | 43.5 MiB |      87 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|  0.5% |  512 KiB |       1 | `merge(Object, Object, BiFunction)`             | `java.util.HashMap` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller          | Location                                                                              |
| -----: | ------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 109 MiB |     218 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001186b38` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Caller                  | Location                                                               |
| -----: | ------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% | 107 MiB |     215 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |   Size | Samples | Caller                               | Location                                                  |
| -----: | -----: | ------: | ------------------------------------ | --------------------------------------------------------- |
| 100.0% | 89 MiB |     178 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Caller              | Location                                                  |
| -----: | -------: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% | 87.5 MiB |     175 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % |    Size | Samples | Caller                     | Location                                                   |
| ----: | ------: | ------: | -------------------------- | ---------------------------------------------------------- |
| 99.3% |  75 MiB |     150 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.7% | 512 KiB |       1 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `valueOf(double)` (`java.lang.Double`)

|     % |     Size | Samples | Caller                                           | Location                                                     |
| ----: | -------: | ------: | ------------------------------------------------ | ------------------------------------------------------------ |
| 95.1% | 58.5 MiB |     117 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                  |
|  4.9% |    3 MiB |       6 | `apply(double)`                                  | `java.util.stream.DoublePipeline$$Lambda.0x00000070011c19e8` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

|      % |   Size | Samples | Caller            | Location                     |
| -----: | -----: | ------: | ----------------- | ---------------------------- |
| 100.0% | 26 MiB |      52 | `range(int, int)` | `java.util.stream.IntStream` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

|      % |     Size | Samples | Caller                  | Location                       |
| -----: | -------: | ------: | ----------------------- | ------------------------------ |
| 100.0% | 24.5 MiB |      49 | `mapToObj(IntFunction)` | `java.util.stream.IntPipeline` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |   Size | Samples | Caller       | Location                                                               |
| -----: | -----: | ------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% | 16 MiB |      32 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001125d48` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

|      % |   Size | Samples | Caller                               | Location                             |
| -----: | -----: | ------: | ------------------------------------ | ------------------------------------ |
| 100.0% | 14 MiB |      28 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|      % |     Size | Samples | Caller                                           | Location                                    |
| -----: | -------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| 100.0% | 13.5 MiB |      27 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `entrySet()` (`java.util.HashMap`)

|      % |     Size | Samples | Caller                        | Location            |
| -----: | -------: | ------: | ----------------------------- | ------------------- |
| 100.0% | 12.5 MiB |      25 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|      % |     Size | Samples | Caller                  | Location           |
| -----: | -------: | ------: | ----------------------- | ------------------ |
| 100.0% | 12.4 MiB |      19 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|      % |   Size | Samples | Caller                                       | Location                                             |
| -----: | -----: | ------: | -------------------------------------------- | ---------------------------------------------------- |
| 100.0% | 11 MiB |      22 | `newInvokeSpecial(Object, int, int, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001126400` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Caller                        | Location                          |
| ----: | -------: | ------: | ----------------------------- | --------------------------------- |
| 85.7% |    9 MiB |      18 | `getBytes()`                  | `jdk.internal.loader.Resource`    |
|  9.5% | 1024 KiB |       2 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |
|  4.8% |  512 KiB |       1 | `ensureCapacity(int)`         | `java.io.ByteArrayOutputStream`   |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|      % |  Size | Samples | Caller           | Location                            |
| -----: | ----: | ------: | ---------------- | ----------------------------------- |
| 100.0% | 8 MiB |      16 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |    Size | Samples | Caller      | Location                                               |
| -----: | ------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 5.5 MiB |      11 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |  Size | Samples | Caller   | Location                            |
| -----: | ----: | ------: | -------- | ----------------------------------- |
| 100.0% | 5 MiB |      10 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

|      % |  Size | Samples | Caller                     | Location                              |
| -----: | ----: | ------: | -------------------------- | ------------------------------------- |
| 100.0% | 4 MiB |       8 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

|      % |  Size | Samples | Caller                                                                                  | Location                                           |
| -----: | ----: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| 100.0% | 4 MiB |       8 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |    Size | Samples | Caller              | Location                                               |
| -----: | ------: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 2.5 MiB |       5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % |  Size | Samples | Caller                          | Location           |
| -----: | ----: | ------: | ------------------------------- | ------------------ |
| 100.0% | 2 MiB |       4 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

|      % |    Size | Samples | Caller           | Location                            |
| -----: | ------: | ------: | ---------------- | ----------------------------------- |
| 100.0% | 1.5 MiB |       3 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Caller   | Location                                                               |
| -----: | ------: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% | 1.5 MiB |       3 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

|      % |     Size | Samples | Caller                       | Location           |
| -----: | -------: | ------: | ---------------------------- | ------------------ |
| 100.0% | 1024 KiB |       2 | `stream(double[], int, int)` | `java.util.Arrays` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |    Size | Samples | Caller                     | Location                                               |
| -----: | ------: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 512 KiB |       1 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `lambda$boxed$0(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |    Size | Samples | Caller       | Location                                                                          |
| -----: | ------: | ------: | ------------ | --------------------------------------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x0000007001187750` |

##### `div(double[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |    Size | Samples | Caller          | Location                                               |
| -----: | ------: | ------: | --------------- | ------------------------------------------------------ |
| 100.0% | 512 KiB |       1 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

|      % |    Size | Samples | Caller                                      | Location                                                 |
| -----: | ------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 512 KiB |       1 | `afterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                                             | Location                                                               |
| ----: | -------: | ------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| 99.5% | 36.8 GiB |  74,960 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
| 99.5% | 36.8 GiB |  74,960 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| 99.5% | 36.8 GiB |  74,960 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
| 99.5% | 36.8 GiB |  74,960 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
| 99.5% | 36.8 GiB |  74,960 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
| 99.5% | 36.8 GiB |  74,957 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 99.5% | 36.8 GiB |  74,957 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
| 90.6% | 33.5 GiB |  68,245 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                                     |
| 79.4% | 29.3 GiB |  60,059 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                                    |
| 79.4% | 29.3 GiB |  60,059 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                                    |
| 78.5% |   29 GiB |  59,435 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| 76.1% | 28.1 GiB |  57,245 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 76.0% | 28.1 GiB |  57,236 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 76.0% | 28.1 GiB |  57,236 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 75.3% | 27.8 GiB |  56,703 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |
| 75.3% | 27.8 GiB |  56,703 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 75.3% | 27.8 GiB |  56,703 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88` |
| 75.3% | 27.8 GiB |  56,703 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                    |
| 75.3% | 27.8 GiB |  56,699 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 75.3% | 27.8 GiB |  56,699 | `apply(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0` |

#### Categories

##### Standard library

|     % |     Size | Samples | Function                                             | Location                                            |
| ----: | -------: | ------: | ---------------------------------------------------- | --------------------------------------------------- |
| 99.5% | 36.8 GiB |  74,960 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| 99.5% | 36.8 GiB |  74,960 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 99.5% | 36.8 GiB |  74,960 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                 |
| 99.5% | 36.8 GiB |  74,960 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                 |
| 99.5% | 36.8 GiB |  74,960 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`         |
| 99.5% | 36.8 GiB |  74,957 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                |
| 90.6% | 33.5 GiB |  68,245 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                  |
| 79.4% | 29.3 GiB |  60,059 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                 |
| 79.4% | 29.3 GiB |  60,059 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                 |
| 78.5% |   29 GiB |  59,435 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 75.3% | 27.8 GiB |  56,703 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                 |
| 75.3% | 27.8 GiB |  56,703 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                 |
| 56.2% | 20.8 GiB |  42,214 | `addAll(Collection)`                                 | `java.util.ArrayList`                               |
| 52.5% | 19.4 GiB |  39,426 | `grow(int)`                                          | `java.util.ArrayList`                               |
| 38.7% | 14.3 GiB |  29,286 | `toArray()`                                          | `java.util.ArrayList`                               |
| 20.7% | 7.64 GiB |  15,328 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| 20.2% | 7.45 GiB |  14,949 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| 18.9% | 6.97 GiB |  14,270 | `<init>(Collection)`                                 | `java.util.ArrayList`                               |
| 16.2% | 5.97 GiB |  12,228 | `grow()`                                             | `java.util.ArrayList`                               |
| 16.2% | 5.97 GiB |  12,228 | `add(Object, Object[], int)`                         | `java.util.ArrayList`                               |

##### Ours

|     % |     Size | Samples | Function                                                    | Location                                                               |
| ----: | -------: | ------: | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
| 99.5% | 36.8 GiB |  74,957 | `compute()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 76.1% | 28.1 GiB |  57,245 | `merge(Map, Map)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 76.0% | 28.1 GiB |  57,236 | `combineResults(Map, Map)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 76.0% | 28.1 GiB |  57,236 | `combineResults(Object, Object)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 75.3% | 27.8 GiB |  56,703 | `lambda$merge$7(Map, Object, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 75.3% | 27.8 GiB |  56,703 | `accept(Object, Object)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88` |
| 75.3% | 27.8 GiB |  56,699 | `lambda$merge$6(List, List)`                                | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 75.3% | 27.8 GiB |  56,699 | `apply(Object, Object)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0` |
| 22.0% | 8.15 GiB |  16,684 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 20.2% | 7.45 GiB |  14,949 | `lambda$run$0(int, List, int)`                              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 20.2% | 7.45 GiB |  14,949 | `call()`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68` |
| 17.3% | 6.39 GiB |  13,091 | `collectClusters(int[])`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  4.7% | 1.75 GiB |   3,593 | `findNearestCentroid()`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  0.6% |  218 MiB |     436 | `computeClusterAverages()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  0.6% |  218 MiB |     436 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  0.5% |  205 MiB |     410 | `average(List)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  0.5% |  204 MiB |     402 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                                        |
|  0.5% |  204 MiB |     402 | `main(String[])`                                            | `org.renaissance.core.Launcher`                                        |
|  0.5% |  202 MiB |     399 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite`                             |
|  0.5% |  202 MiB |     399 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                                        |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Callee   | Location                                            |
| -----: | -------: | ------: | -------- | --------------------------------------------------- |
| 100.0% | 36.8 GiB |  74,957 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|  20.3% | 7.45 GiB |  14,949 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |     Size | Samples | Callee     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 36.8 GiB |  74,960 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |     Size | Samples | Callee                                               | Location                                      |
| -----: | -------: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 36.8 GiB |  74,960 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |     Size | Samples | Callee                                   | Location                            |
| -----: | -------: | ------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 36.8 GiB |  74,960 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % |     Size | Samples | Callee                              | Location                            |
| -----: | -------: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 36.8 GiB |  74,960 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % |     Size | Samples | Callee                           | Location                                                   |
| ----: | -------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 79.8% | 29.3 GiB |  60,059 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 76.5% | 28.1 GiB |  57,236 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 22.2% | 8.15 GiB |  16,684 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.6% |  218 MiB |     436 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  0.5% |  175 MiB |     351 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |     Size | Samples | Callee      | Location                                               |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 36.8 GiB |  74,957 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Callee                         | Location           |
| ----: | -------: | ------: | ------------------------------ | ------------------ |
| <0.1% | 12.4 MiB |      19 | `copyOf(Object[], int, Class)` | `java.util.Arrays` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % |     Size | Samples | Callee                                                    | Location                                      |
| ----: | -------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 99.0% |   29 GiB |  59,435 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 18.0% | 5.29 GiB |  10,832 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Callee                 | Location                            |
| -----: | -------: | ------: | ---------------------- | ----------------------------------- |
| 100.0% | 29.3 GiB |  60,059 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |   Size | Samples | Callee     | Location                            |
| -----: | -----: | ------: | ---------- | ----------------------------------- |
| 100.0% | 29 GiB |  59,435 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % |     Size | Samples | Callee                               | Location                           |
| ----: | -------: | ------: | ------------------------------------ | ---------------------------------- |
| 99.1% | 27.8 GiB |  56,703 | `forEach(BiConsumer)`                | `java.util.HashMap`                |
|  0.7% |  194 MiB |     389 | `<init>(Map)`                        | `java.util.HashMap`                |
| <0.1% | 1024 KiB |       2 | `linkToTargetMethod(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Callee            | Location                                    |
| -----: | -------: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 28.1 GiB |  57,236 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Callee                     | Location                                                   |
| -----: | -------: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% | 28.1 GiB |  57,236 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % |     Size | Samples | Callee                                       | Location                                                               |
| -----: | -------: | ------: | -------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% | 27.8 GiB |  56,699 | `apply(Object, Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0` |
|  <0.1% |  1.5 MiB |       3 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                                    |
|  <0.1% |  512 KiB |       1 | `resize()`                                   | `java.util.HashMap`                                                    |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Callee                              | Location            |
| -----: | -------: | ------: | ----------------------------------- | ------------------- |
| 100.0% | 27.8 GiB |  56,703 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88`)

|      % |     Size | Samples | Callee                              | Location                                    |
| -----: | -------: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 27.8 GiB |  56,703 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % |     Size | Samples | Callee                   | Location                                                               |
| -----: | -------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% | 27.8 GiB |  56,703 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % |     Size | Samples | Callee               | Location              |
| ----: | -------: | ------: | -------------------- | --------------------- |
| 74.6% | 20.8 GiB |  42,214 | `addAll(Collection)` | `java.util.ArrayList` |
| 25.0% | 6.97 GiB |  14,270 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0`)

|      % |     Size | Samples | Callee                       | Location                                    |
| -----: | -------: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% | 27.8 GiB |  56,699 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|     % |     Size | Samples | Callee      | Location              |
| ----: | -------: | ------: | ----------- | --------------------- |
| 64.7% | 13.4 GiB |  27,198 | `grow(int)` | `java.util.ArrayList` |
| 35.3% | 7.33 GiB |  15,016 | `toArray()` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

|     % |     Size | Samples | Callee                  | Location           |
| ----: | -------: | ------: | ----------------------- | ------------------ |
| 98.8% | 19.2 GiB |  38,959 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `toArray()` (`java.util.ArrayList`)

|      % |     Size | Samples | Callee                  | Location           |
| -----: | -------: | ------: | ----------------------- | ------------------ |
| 100.0% | 14.3 GiB |  29,286 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Callee                   | Location                                                   |
| -----: | -------: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% | 8.15 GiB |  16,684 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  78.5% | 6.39 GiB |  13,091 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  21.5% | 1.75 GiB |   3,593 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Callee     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 7.64 GiB |  15,328 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % |     Size | Samples | Callee   | Location                                                               |
| -----: | -------: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% | 7.45 GiB |  14,949 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Callee     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 7.45 GiB |  14,946 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68`)

|      % |     Size | Samples | Callee                         | Location                                    |
| -----: | -------: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% | 7.45 GiB |  14,949 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `<init>(Collection)` (`java.util.ArrayList`)

|      % |     Size | Samples | Callee      | Location              |
| -----: | -------: | ------: | ----------- | --------------------- |
| 100.0% | 6.97 GiB |  14,270 | `toArray()` | `java.util.ArrayList` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % |     Size | Samples | Callee                              | Location              |
| ----: | -------: | ------: | ----------------------------------- | --------------------- |
| 93.4% | 5.97 GiB |  12,223 | `add(Object)`                       | `java.util.ArrayList` |
|  4.9% |  319 MiB |     639 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |

##### `grow()` (`java.util.ArrayList`)

|      % |     Size | Samples | Callee      | Location              |
| -----: | -------: | ------: | ----------- | --------------------- |
| 100.0% | 5.97 GiB |  12,228 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % |     Size | Samples | Callee   | Location              |
| -----: | -------: | ------: | -------- | --------------------- |
| 100.0% | 5.97 GiB |  12,228 | `grow()` | `java.util.ArrayList` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % |    Size | Samples | Callee                | Location                                               |
| ----: | ------: | ------: | --------------------- | ------------------------------------------------------ |
| 94.0% | 205 MiB |     410 | `average(List)`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  4.1% |   9 MiB |      18 | `boxed(double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.9% |   2 MiB |       4 | `put(Object, Object)` | `java.util.HashMap`                                    |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |    Size | Samples | Callee                     | Location                                               |
| -----: | ------: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 218 MiB |     436 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% | 218 MiB |     436 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % |    Size | Samples | Callee               | Location                                               |
| ----: | ------: | ------: | -------------------- | ------------------------------------------------------ |
| 99.5% | 204 MiB |     408 | `invoke()`           | `java.util.concurrent.ForkJoinTask`                    |
|  0.2% | 512 KiB |       1 | `div(double[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|     % |    Size | Samples | Callee                                                      | Location                        |
| ----: | ------: | ------: | ----------------------------------------------------------- | ------------------------------- |
| 99.3% | 202 MiB |     399 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |
|  0.7% | 1.5 MiB |       3 | `createScratchRoot(Path, boolean)`                          | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % |    Size | Samples | Callee                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 204 MiB |     402 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|     % |    Size | Samples | Callee              | Location                                    |
| ----: | ------: | ------: | ------------------- | ------------------------------------------- |
| 98.5% | 199 MiB |     393 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
|  1.5% |   3 MiB |       6 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % |    Size | Samples | Callee                     | Location                   |
| -----: | ------: | ------: | -------------------------- | -------------------------- |
| 100.0% | 202 MiB |     399 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.4% | 2.38 GiB |   4,866 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 3.8% | 1.42 GiB |   2,898 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3.8% | 1.41 GiB |   2,890 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 3.4% | 1.26 GiB |   2,588 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 3.1% | 1.16 GiB |   2,380 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2.9% | 1.09 GiB |   1,911 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2.9% | 1.08 GiB |   2,215 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                   |
| 2.9% | 1.06 GiB |   2,179 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.6% |  968 MiB |   1,936 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2.3% |  869 MiB |   1,738 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.2% |  846 MiB |   1,693 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2.1% |  784 MiB |   1,568 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2.1% |  784 MiB |   1,568 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) |
| 2.0% |  772 MiB |   1,545 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.7% |  661 MiB |   1,323 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.7% |  649 MiB |   1,298 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                           |
| 1.6% |  597 MiB |   1,194 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.5% |  578 MiB |   1,156 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.5% |  560 MiB |   1,120 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.5% |  559 MiB |   1,119 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

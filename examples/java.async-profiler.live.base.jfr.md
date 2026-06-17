# Allocated heap profile

Allocated 3.35 GB over 76,154 samples (44 kB per sample).

| Category |      % |    Size | Samples |
| -------- | -----: | ------: | ------: |
| ours     | 100.0% | 3.35 GB |  76,154 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function                                     | Location                                                 |
| ----: | ------: | ------: | -------------------------------------------- | -------------------------------------------------------- |
| 99.6% | 3.34 GB |  69,267 | `copyOf(Object[], int)`                      | java.util.Arrays                                         |
|  0.2% | 6.65 MB |   3,375 | `findNearestCentroid()`                      | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.1% |  4.7 MB |      28 | `copyOf(Object[], int, Class)`               | java.util.Arrays                                         |
|  0.0% |  584 kB |      29 | `copyOf(byte[], int)`                        | java.util.Arrays                                         |
|  0.0% |  267 kB |       2 | `initCEN(int, ZipCoder)`                     | java.util.zip.ZipFile$Source                             |
|  0.0% |  193 kB |       9 | `<init>(InputStream, Inflater, int)`         | java.util.zip.InflaterInputStream                        |
|  0.0% | 24.2 kB |     432 | `grow(int)`                                  | java.util.ArrayList                                      |
|  0.0% | 17.8 kB |     371 | `createSubtask(int, int)`                    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  0.0% | 17.7 kB |     316 | `createSubtask(int, int)`                    | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.0% | 16.9 kB |     528 | `newNode(int, Object, Object, HashMap$Node)` | java.util.HashMap                                        |
|  0.0% | 15.2 kB |     224 | `resize()`                                   | java.util.HashMap                                        |
|  0.0% |   10 kB |     179 | `add(double[], double[])`                    | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  0.0% | 9.98 kB |     208 | `collectClusters(int[])`                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.0% | 7.67 kB |     137 | `vectorSum()`                                | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |
|  0.0% | 6.96 kB |     145 | `merge(Map, Map)`                            | org.renaissance.jdk.concurrent.JavaKMeans                |
|  0.0% | 5.21 kB |     217 | `lambda$merge$6(List, List)`                 | org.renaissance.jdk.concurrent.JavaKMeans                |
|  0.0% | 4.73 kB |     197 | `lambda$collectClusters$0(Double[])`         | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.0% | 3.46 kB |     144 | `valueOf(double)`                            | java.lang.Double                                         |
|  0.0% | 3.08 kB |      55 | `intStream(Spliterator$OfInt, boolean)`      | java.util.stream.StreamSupport                           |
|  0.0% |  2.8 kB |      50 | `mapToObj(IntFunction, int)`                 | java.util.stream.IntPipeline                             |

#### Lines

Lines ranked by contribution to each function's self size.

##### `copyOf(Object[], int)` (java.util.Arrays)

|      % |    Size | Samples | Location              |
| -----: | ------: | ------: | --------------------- |
| 100.0% | 3.34 GB |  69,267 | java.util.Arrays:3482 |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 6.65 MB |   3,375 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223 |

##### `copyOf(Object[], int, Class)` (java.util.Arrays)

|      % |   Size | Samples | Location              |
| -----: | -----: | ------: | --------------------- |
| 100.0% | 4.7 MB |      28 | java.util.Arrays:3513 |

##### `copyOf(byte[], int)` (java.util.Arrays)

|      % |   Size | Samples | Location              |
| -----: | -----: | ------: | --------------------- |
| 100.0% | 584 kB |      29 | java.util.Arrays:3541 |

##### `initCEN(int, ZipCoder)` (java.util.zip.ZipFile$Source)

|      % |   Size | Samples | Location                          |
| -----: | -----: | ------: | --------------------------------- |
| 100.0% | 267 kB |       2 | java.util.zip.ZipFile$Source:1733 |

##### `<init>(InputStream, Inflater, int)` (java.util.zip.InflaterInputStream)

|      % |   Size | Samples | Location                             |
| -----: | -----: | ------: | ------------------------------------ |
| 100.0% | 193 kB |       9 | java.util.zip.InflaterInputStream:89 |

##### `grow(int)` (java.util.ArrayList)

|      % |    Size | Samples | Location                |
| -----: | ------: | ------: | ----------------------- |
| 100.0% | 24.2 kB |     432 | java.util.ArrayList:239 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 17.8 kB |     371 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419 |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 17.7 kB |     316 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261 |

##### `newNode(int, Object, Object, HashMap$Node)` (java.util.HashMap)

|      % |    Size | Samples | Location               |
| -----: | ------: | ------: | ---------------------- |
| 100.0% | 16.9 kB |     528 | java.util.HashMap:1909 |

##### `resize()` (java.util.HashMap)

|      % |    Size | Samples | Location              |
| -----: | ------: | ------: | --------------------- |
| 100.0% | 15.2 kB |     224 | java.util.HashMap:710 |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |  Size | Samples | Location                                                    |
| -----: | ----: | ------: | ----------------------------------------------------------- |
| 100.0% | 10 kB |     179 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430 |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 9.98 kB |     208 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209 |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 7.67 kB |     137 | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400 |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Location                                      |
| -----: | ------: | ------: | --------------------------------------------- |
| 100.0% | 6.96 kB |     145 | org.renaissance.jdk.concurrent.JavaKMeans:110 |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Location                                      |
| -----: | ------: | ------: | --------------------------------------------- |
| 100.0% | 5.21 kB |     217 | org.renaissance.jdk.concurrent.JavaKMeans:114 |

##### `lambda$collectClusters$0(Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Location                                                     |
| -----: | ------: | ------: | ------------------------------------------------------------ |
| 100.0% | 4.73 kB |     197 | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215 |

##### `valueOf(double)` (java.lang.Double)

|      % |    Size | Samples | Location             |
| -----: | ------: | ------: | -------------------- |
| 100.0% | 3.46 kB |     144 | java.lang.Double:773 |

##### `intStream(Spliterator$OfInt, boolean)` (java.util.stream.StreamSupport)

|      % |    Size | Samples | Location                           |
| -----: | ------: | ------: | ---------------------------------- |
| 100.0% | 3.08 kB |      55 | java.util.stream.StreamSupport:138 |

##### `mapToObj(IntFunction, int)` (java.util.stream.IntPipeline)

|      % |   Size | Samples | Location                         |
| -----: | -----: | ------: | -------------------------------- |
| 100.0% | 2.8 kB |      50 | java.util.stream.IntPipeline:174 |

#### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

##### `copyOf(Object[], int)` (java.util.Arrays)

|     % |    Size | Samples | Caller      | Location            |
| ----: | ------: | ------: | ----------- | ------------------- |
| 62.6% | 2.09 GB |  39,392 | `grow(int)` | java.util.ArrayList |
| 37.4% | 1.25 GB |  29,875 | `toArray()` | java.util.ArrayList |

##### `findNearestCentroid()` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller              | Location                                                 |
| -----: | ------: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% | 6.65 MB |   3,375 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `copyOf(Object[], int, Class)` (java.util.Arrays)

|      % |   Size | Samples | Caller                  | Location         |
| -----: | -----: | ------: | ----------------------- | ---------------- |
| 100.0% | 4.7 MB |      28 | `copyOf(Object[], int)` | java.util.Arrays |

##### `copyOf(byte[], int)` (java.util.Arrays)

|      % |   Size | Samples | Caller                        | Location                        |
| -----: | -----: | ------: | ----------------------------- | ------------------------------- |
| 100.0% | 583 kB |      28 | `getBytes()`                  | jdk.internal.loader.Resource    |
|   0.0% |  168 B |       1 | `ensureCapacityInternal(int)` | java.lang.AbstractStringBuilder |

##### `initCEN(int, ZipCoder)` (java.util.zip.ZipFile$Source)

|      % |   Size | Samples | Caller                                          | Location                     |
| -----: | -----: | ------: | ----------------------------------------------- | ---------------------------- |
| 100.0% | 267 kB |       2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | java.util.zip.ZipFile$Source |

##### `<init>(InputStream, Inflater, int)` (java.util.zip.InflaterInputStream)

|      % |   Size | Samples | Caller                                                                                  | Location                                         |
| -----: | -----: | ------: | --------------------------------------------------------------------------------------- | ------------------------------------------------ |
| 100.0% | 193 kB |       9 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | java.util.zip.ZipFile$ZipFileInflaterInputStream |

##### `grow(int)` (java.util.ArrayList)

|      % |    Size | Samples | Caller   | Location            |
| -----: | ------: | ------: | -------- | ------------------- |
| 100.0% | 24.2 kB |     432 | `grow()` | java.util.ArrayList |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Caller      | Location                                             |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 17.8 kB |     371 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `createSubtask(int, int)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller      | Location                                             |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 17.7 kB |     316 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `newNode(int, Object, Object, HashMap$Node)` (java.util.HashMap)

|     % |    Size | Samples | Caller                                          | Location          |
| ----: | ------: | ------: | ----------------------------------------------- | ----------------- |
| 57.2% | 9.66 kB |     302 | `computeIfAbsent(Object, Function)`             | java.util.HashMap |
| 42.8% | 7.23 kB |     226 | `putVal(int, Object, Object, boolean, boolean)` | java.util.HashMap |

##### `resize()` (java.util.HashMap)

|     % |    Size | Samples | Caller                                          | Location          |
| ----: | ------: | ------: | ----------------------------------------------- | ----------------- |
| 71.3% | 10.8 kB |     135 | `computeIfAbsent(Object, Function)`             | java.util.HashMap |
| 28.2% | 4.27 kB |      87 | `putVal(int, Object, Object, boolean, boolean)` | java.util.HashMap |
|  0.5% |    80 B |       2 | `merge(Object, Object, BiFunction)`             | java.util.HashMap |

##### `add(double[], double[])` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |  Size | Samples | Caller                               | Location                                                |
| -----: | ----: | ------: | ------------------------------------ | ------------------------------------------------------- |
| 100.0% | 10 kB |     179 | `combineResults(double[], double[])` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `collectClusters(int[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller              | Location                                                 |
| -----: | ------: | ------: | ------------------- | -------------------------------------------------------- |
| 100.0% | 9.98 kB |     208 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `vectorSum()` (org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask)

|      % |    Size | Samples | Caller              | Location                                                |
| -----: | ------: | ------: | ------------------- | ------------------------------------------------------- |
| 100.0% | 7.67 kB |     137 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % |    Size | Samples | Caller                     | Location                                                 |
| ----: | ------: | ------: | -------------------------- | -------------------------------------------------------- |
| 96.6% | 6.72 kB |     140 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  3.4% |   240 B |       5 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Caller                  | Location                                                             |
| -----: | ------: | ------: | ----------------------- | -------------------------------------------------------------------- |
| 100.0% | 5.21 kB |     217 | `apply(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460 |

##### `lambda$collectClusters$0(Double[])` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Caller          | Location                                                                            |
| -----: | ------: | ------: | --------------- | ----------------------------------------------------------------------------------- |
| 100.0% | 4.73 kB |     197 | `apply(Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001186b38 |

##### `valueOf(double)` (java.lang.Double)

|     % |    Size | Samples | Caller                                           | Location                                                   |
| ----: | ------: | ------: | ------------------------------------------------ | ---------------------------------------------------------- |
| 92.4% | 3.19 kB |     133 | `lambda$generateData$3(int, int, Random[], int)` | org.renaissance.jdk.concurrent.JavaKMeans                  |
|  7.6% |   264 B |      11 | `apply(double)`                                  | java.util.stream.DoublePipeline$$Lambda.0x00000070011c19e8 |

##### `intStream(Spliterator$OfInt, boolean)` (java.util.stream.StreamSupport)

|      % |    Size | Samples | Caller            | Location                   |
| -----: | ------: | ------: | ----------------- | -------------------------- |
| 100.0% | 3.08 kB |      55 | `range(int, int)` | java.util.stream.IntStream |

##### `mapToObj(IntFunction, int)` (java.util.stream.IntPipeline)

|      % |   Size | Samples | Caller                  | Location                     |
| -----: | -----: | ------: | ----------------------- | ---------------------------- |
| 100.0% | 2.8 kB |      50 | `mapToObj(IntFunction)` | java.util.stream.IntPipeline |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                                             | Location                                                             |
| ----: | ------: | ------: | ---------------------------------------------------- | -------------------------------------------------------------------- |
| 99.8% | 3.34 GB |  75,708 | `doExec()`                                           | java.util.concurrent.ForkJoinTask                                    |
| 99.8% | 3.34 GB |  75,708 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue                          |
| 99.8% | 3.34 GB |  75,708 | `scan(ForkJoinPool$WorkQueue, int, int)`             | java.util.concurrent.ForkJoinPool                                    |
| 99.8% | 3.34 GB |  75,708 | `runWorker(ForkJoinPool$WorkQueue)`                  | java.util.concurrent.ForkJoinPool                                    |
| 99.8% | 3.34 GB |  75,708 | `run()`                                              | java.util.concurrent.ForkJoinWorkerThread                            |
| 99.8% | 3.34 GB |  75,706 | `compute()`                                          | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask                 |
| 99.8% | 3.34 GB |  75,706 | `exec()`                                             | java.util.concurrent.RecursiveTask                                   |
| 99.8% | 3.34 GB |  69,295 | `copyOf(Object[], int)`                              | java.util.Arrays                                                     |
| 99.5% | 3.33 GB |  57,983 | `merge(Map, Map)`                                    | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 99.5% | 3.33 GB |  57,973 | `combineResults(Map, Map)`                           | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 99.5% | 3.33 GB |  57,973 | `combineResults(Object, Object)`                     | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask             |
| 99.5% | 3.33 GB |  57,507 | `merge(Object, Object, BiFunction)`                  | java.util.HashMap                                                    |
| 99.5% | 3.33 GB |  57,507 | `lambda$merge$7(Map, Object, List)`                  | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 99.5% | 3.33 GB |  57,507 | `accept(Object, Object)`                             | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0 |
| 99.5% | 3.33 GB |  57,507 | `forEach(BiConsumer)`                                | java.util.HashMap                                                    |
| 99.5% | 3.33 GB |  57,505 | `lambda$merge$6(List, List)`                         | org.renaissance.jdk.concurrent.JavaKMeans                            |
| 99.5% | 3.33 GB |  57,505 | `apply(Object, Object)`                              | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460 |
| 81.0% | 2.71 GB |  42,853 | `addAll(Collection)`                                 | java.util.ArrayList                                                  |
| 62.7% |  2.1 GB |  15,634 | `invoke()`                                           | java.util.concurrent.ForkJoinTask                                    |
| 62.7% |  2.1 GB |  15,275 | `lambda$run$0(int, List, int)`                       | org.renaissance.jdk.concurrent.JavaKMeans                            |

#### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

##### `doExec()` (java.util.concurrent.ForkJoinTask)

|      % |    Size | Samples | Callee   | Location                                          |
| -----: | ------: | ------: | -------- | ------------------------------------------------- |
| 100.0% | 3.34 GB |  75,706 | `exec()` | java.util.concurrent.RecursiveTask                |
|  62.8% |  2.1 GB |  15,275 | `exec()` | java.util.concurrent.ForkJoinTask$AdaptedCallable |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % |    Size | Samples | Callee     | Location                          |
| -----: | ------: | ------: | ---------- | --------------------------------- |
| 100.0% | 3.34 GB |  75,708 | `doExec()` | java.util.concurrent.ForkJoinTask |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)

|      % |    Size | Samples | Callee                                               | Location                                    |
| -----: | ------: | ------: | ---------------------------------------------------- | ------------------------------------------- |
| 100.0% | 3.34 GB |  75,708 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue |

##### `runWorker(ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool)

|      % |    Size | Samples | Callee                                   | Location                          |
| -----: | ------: | ------: | ---------------------------------------- | --------------------------------- |
| 100.0% | 3.34 GB |  75,708 | `scan(ForkJoinPool$WorkQueue, int, int)` | java.util.concurrent.ForkJoinPool |

##### `run()` (java.util.concurrent.ForkJoinWorkerThread)

|      % |    Size | Samples | Callee                              | Location                          |
| -----: | ------: | ------: | ----------------------------------- | --------------------------------- |
| 100.0% | 3.34 GB |  75,708 | `runWorker(ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool |

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|     % |    Size | Samples | Callee                           | Location                                                 |
| ----: | ------: | ------: | -------------------------------- | -------------------------------------------------------- |
| 99.7% | 3.33 GB |  57,973 | `combineResults(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
| 30.5% | 1.02 GB |  60,382 | `join()`                         | java.util.concurrent.ForkJoinTask                        |
|  0.3% | 11.6 MB |  16,653 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |
|  0.0% | 21.7 kB |     422 | `computeDirectly()`              | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
|  0.0% | 17.8 kB |     371 | `createSubtask(int, int)`        | org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask  |

##### `exec()` (java.util.concurrent.RecursiveTask)

|      % |    Size | Samples | Callee      | Location                                             |
| -----: | ------: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 3.34 GB |  75,706 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `copyOf(Object[], int)` (java.util.Arrays)

|    % |   Size | Samples | Callee                         | Location         |
| ---: | -----: | ------: | ------------------------------ | ---------------- |
| 0.1% | 4.7 MB |      28 | `copyOf(Object[], int, Class)` | java.util.Arrays |

##### `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee                               | Location                         |
| -----: | ------: | ------: | ------------------------------------ | -------------------------------- |
| 100.0% | 3.33 GB |  57,507 | `forEach(BiConsumer)`                | java.util.HashMap                |
|   0.0% | 11.6 kB |     329 | `<init>(Map)`                        | java.util.HashMap                |
|   0.0% |    32 B |       2 | `linkToTargetMethod(Object, Object)` | java.lang.invoke.Invokers$Holder |

##### `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee            | Location                                  |
| -----: | ------: | ------: | ----------------- | ----------------------------------------- |
| 100.0% | 3.33 GB |  57,973 | `merge(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `combineResults(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask)

|      % |    Size | Samples | Callee                     | Location                                                 |
| -----: | ------: | ------: | -------------------------- | -------------------------------------------------------- |
| 100.0% | 3.33 GB |  57,973 | `combineResults(Map, Map)` | org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask |

##### `merge(Object, Object, BiFunction)` (java.util.HashMap)

|      % |    Size | Samples | Callee                  | Location                                                             |
| -----: | ------: | ------: | ----------------------- | -------------------------------------------------------------------- |
| 100.0% | 3.33 GB |  57,505 | `apply(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460 |
|   0.0% |    80 B |       2 | `resize()`              | java.util.HashMap                                                    |

##### `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |    Size | Samples | Callee                              | Location          |
| -----: | ------: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 3.33 GB |  57,507 | `merge(Object, Object, BiFunction)` | java.util.HashMap |

##### `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0)

|      % |    Size | Samples | Callee                              | Location                                  |
| -----: | ------: | ------: | ----------------------------------- | ----------------------------------------- |
| 100.0% | 3.33 GB |  57,507 | `lambda$merge$7(Map, Object, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `forEach(BiConsumer)` (java.util.HashMap)

|      % |    Size | Samples | Callee                   | Location                                                             |
| -----: | ------: | ------: | ------------------------ | -------------------------------------------------------------------- |
| 100.0% | 3.33 GB |  57,507 | `accept(Object, Object)` | org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0 |

##### `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans)

|     % |    Size | Samples | Callee               | Location            |
| ----: | ------: | ------: | -------------------- | ------------------- |
| 81.4% | 2.71 GB |  42,853 | `addAll(Collection)` | java.util.ArrayList |
| 18.6% |  620 MB |  14,435 | `<init>(Collection)` | java.util.ArrayList |

##### `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460)

|      % |    Size | Samples | Callee                       | Location                                  |
| -----: | ------: | ------: | ---------------------------- | ----------------------------------------- |
| 100.0% | 3.33 GB |  57,505 | `lambda$merge$6(List, List)` | org.renaissance.jdk.concurrent.JavaKMeans |

##### `addAll(Collection)` (java.util.ArrayList)

|     % |    Size | Samples | Callee      | Location            |
| ----: | ------: | ------: | ----------- | ------------------- |
| 76.8% | 2.08 GB |  27,394 | `grow(int)` | java.util.ArrayList |
| 23.2% |  629 MB |  15,459 | `toArray()` | java.util.ArrayList |

##### `invoke()` (java.util.concurrent.ForkJoinTask)

|      % |   Size | Samples | Callee     | Location                          |
| -----: | -----: | ------: | ---------- | --------------------------------- |
| 100.0% | 2.1 GB |  15,634 | `doExec()` | java.util.concurrent.ForkJoinTask |

##### `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans)

|      % |   Size | Samples | Callee     | Location                          |
| -----: | -----: | ------: | ---------- | --------------------------------- |
| 100.0% | 2.1 GB |  15,273 | `invoke()` | java.util.concurrent.ForkJoinTask |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----: | ------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27.2% |  910 MB |   1,934 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 15.9% |  531 MB |   4,924 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  8.7% |  291 MB |   1,196 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  8.6% |  287 MB |   1,157 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  7.8% |  260 MB |   1,054 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  4.6% |  154 MB |   2,982 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  4.5% |  151 MB |   2,720 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  4.0% |  135 MB |   2,964 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.3% | 76.8 MB |     630 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                         |
|  2.3% | 76.6 MB |     661 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.2% | 75.1 MB |     588 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.4% | 47.4 MB |   2,380 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.2% | 40.7 MB |   1,724 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.1% | 35.6 MB |   1,472 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.7% | 24.2 MB |     373 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable) |
|  0.7% | 23.6 MB |     373 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                         |
|  0.7% | 23.1 MB |   2,242 | `copyOf(Object[], int)` (java.util.Arrays) ← `grow(int)` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                             |
|  0.6% | 21.5 MB |     366 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `invoke()` ← `lambda$run$0(int, List, int)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `call()` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68) ← `exec()` (java.util.concurrent.ForkJoinTask$AdaptedCallable)                                                                                                                                                                                                                                                                                                                                         |
|  0.5% | 15.7 MB |   1,430 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.4% | 12.9 MB |   1,201 | `copyOf(Object[], int)` (java.util.Arrays) ← `toArray()` (java.util.ArrayList) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `apply(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001187460) ← `merge(Object, Object, BiFunction)` (java.util.HashMap) ← `lambda$merge$7(Map, Object, List)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `accept(Object, Object)` (org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186fd0) ← `forEach(BiConsumer)` (java.util.HashMap) ← `merge(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans) ← `combineResults(Map, Map)` (org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask) ← `combineResults(Object, Object)` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

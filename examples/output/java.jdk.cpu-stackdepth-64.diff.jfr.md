# Sampling profile diff

Collected 1,353 samples → 1,324 samples (-29 samples, -2.1%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             |  -2.0% |   -24 | 89.7% → 89.8% | 1,213 → 1,189 |
| Standard library |  -3.6% |    -5 | 10.3% → 10.2% |     140 → 135 |

Call stacks missing their outermost callers account for 25.9% → 29.2% of the samples collected.

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                                  | Location                                                                              |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| +325.0% |   +13 |   0.3% → 1.3% |    4 → 17 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +52.6% |   +10 |   1.4% → 2.2% |   19 → 29 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +266.7% |    +8 |   0.2% → 0.8% |    3 → 11 | `apply(Object)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0` |
|  +58.3% |    +7 |   0.9% → 1.4% |   12 → 19 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                                   |
| +600.0% |    +6 |   0.1% → 0.5% |     1 → 7 | `grow(int)`                                               | `java.util.ArrayList`                                                                 |
|     new |    +5 |   0.0% → 0.4% |     0 → 5 | `signalWork()`                                            | `java.util.concurrent.ForkJoinPool`                                                   |
| +200.0% |    +4 |   0.1% → 0.5% |     2 → 6 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                                                   |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `lambda$merge$7(Map, Object, List)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `add(double[], double[])`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +100.0% |    +1 |   0.1% → 0.2% |     1 → 2 | `wrapSink(Sink)`                                          | `java.util.stream.AbstractPipeline`                                                   |
|   +0.5% |    +1 | 13.7% → 14.0% | 185 → 186 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `computeMethodInfoSize()`                                 | `jdk.internal.org.objectweb.asm.MethodWriter`                                         |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `close0()`                                                | `java.io.FileDescriptor`                                                              |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `allocateInstance(Class)`                                 | `jdk.internal.misc.Unsafe`                                                            |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `periodicTask()`                                          | `jdk.jfr.internal.PlatformRecorder`                                                   |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `spliterator(double[], int, int)`                         | `java.util.Arrays`                                                                    |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `afterNodeInsertion(boolean)`                             | `java.util.LinkedHashMap`                                                             |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `hash(Object)`                                            | `java.util.HashMap`                                                                   |

##### Ours

|  Change | Delta |             % |   Samples | Function                            | Location                                                                              |
| ------: | ----: | ------------: | --------: | ----------------------------------- | ------------------------------------------------------------------------------------- |
| +325.0% |   +13 |   0.3% → 1.3% |    4 → 17 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +52.6% |   +10 |   1.4% → 2.2% |   19 → 29 | `computeDirectly()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +266.7% |    +8 |   0.2% → 0.8% |    3 → 11 | `apply(Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0` |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `add(double[], double[])`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +0.5% |    +1 | 13.7% → 14.0% | 185 → 186 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                  | Location                                      |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
|  +58.3% |    +7 | 0.9% → 1.4% | 12 → 19 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| +600.0% |    +6 | 0.1% → 0.5% |   1 → 7 | `grow(int)`                                               | `java.util.ArrayList`                         |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `signalWork()`                                            | `java.util.concurrent.ForkJoinPool`           |
| +200.0% |    +4 | 0.1% → 0.5% |   2 → 6 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                           |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `wrapSink(Sink)`                                          | `java.util.stream.AbstractPipeline`           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `computeMethodInfoSize()`                                 | `jdk.internal.org.objectweb.asm.MethodWriter` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `close0()`                                                | `java.io.FileDescriptor`                      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `allocateInstance(Class)`                                 | `jdk.internal.misc.Unsafe`                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `periodicTask()`                                          | `jdk.jfr.internal.PlatformRecorder`           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `spliterator(double[], int, int)`                         | `java.util.Arrays`                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `afterNodeInsertion(boolean)`                             | `java.util.LinkedHashMap`                     |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `hash(Object)`                                            | `java.util.HashMap`                           |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                             | Location                                                   |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------- | ---------------------------------------------------------- |
|   -7.0% |   -35 | 36.9% → 35.0% | 499 → 464 | `accumulate(Double[], double[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -4.8% |   -19 | 29.2% → 28.4% | 395 → 376 | `distance(Double[], Double[])`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -29.7% |   -11 |   2.7% → 2.0% |   37 → 26 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                         |
|   -5.8% |    -6 |   7.7% → 7.4% |  104 → 98 | `collectClusters(int[])`                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -9.1% |    -5 |   4.1% → 3.8% |   55 → 50 | `computeIfAbsent(Object, Function)`                  | `java.util.HashMap`                                        |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `accept(Object)`                                     | `java.util.stream.ReduceOps$3ReducingSink`                 |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `tryCompensate(long, boolean)`                       | `java.util.concurrent.ForkJoinPool`                        |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `putVal(int, Object, Object, boolean, boolean)`      | `java.util.HashMap`                                        |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `park(boolean, long)`                                | `jdk.internal.misc.Unsafe`                                 |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `compress(char[], int, byte[], int, int)`            | `java.lang.StringUTF16`                                    |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `loadConvert(char[], int, int, StringBuilder)`       | `java.util.Properties`                                     |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `match(byte[], byte[], byte[], byte[])`              | `java.util.jar.JarFile`                                    |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `<init>(Map)`                                        | `java.util.HashMap`                                        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `stringSize(long)`                                   | `java.lang.Long`                                           |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `resize()`                                           | `java.util.HashMap`                                        |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `<init>(HashMap)`                                    | `java.util.HashMap$HashIterator`                           |

##### Ours

|  Change | Delta |             % |   Samples | Function                         | Location                                                   |
| ------: | ----: | ------------: | --------: | -------------------------------- | ---------------------------------------------------------- |
|   -7.0% |   -35 | 36.9% → 35.0% | 499 → 464 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -4.8% |   -19 | 29.2% → 28.4% | 395 → 376 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -5.8% |    -6 |   7.7% → 7.4% |  104 → 98 | `collectClusters(int[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `merge(Map, Map)`                | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Standard library

|  Change | Delta |           % | Samples | Function                                             | Location                                      |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------- | --------------------------------------------- |
|  -29.7% |   -11 | 2.7% → 2.0% | 37 → 26 | `copyOf(Object[], int)`                              | `java.util.Arrays`                            |
|   -9.1% |    -5 | 4.1% → 3.8% | 55 → 50 | `computeIfAbsent(Object, Function)`                  | `java.util.HashMap`                           |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `accept(Object)`                                     | `java.util.stream.ReduceOps$3ReducingSink`    |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `tryCompensate(long, boolean)`                       | `java.util.concurrent.ForkJoinPool`           |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `putVal(int, Object, Object, boolean, boolean)`      | `java.util.HashMap`                           |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `park(boolean, long)`                                | `jdk.internal.misc.Unsafe`                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `compress(char[], int, byte[], int, int)`            | `java.lang.StringUTF16`                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `loadConvert(char[], int, int, StringBuilder)`       | `java.util.Properties`                        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `match(byte[], byte[], byte[], byte[])`              | `java.util.jar.JarFile`                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(Map)`                                        | `java.util.HashMap`                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `stringSize(long)`                                   | `java.lang.Long`                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `resize()`                                           | `java.util.HashMap`                           |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `<init>(HashMap)`                                    | `java.util.HashMap$HashIterator`              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)`          | `java.util.concurrent.ForkJoinPool$WorkQueue` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|   Change | Delta |             % | Samples | Location                                                      |
| -------: | ----: | ------------: | ------: | ------------------------------------------------------------- |
| +1200.0% |   +12 | 25.0% → 76.5% |  1 → 13 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |
|      new |    +1 |   0.0% → 5.9% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Location                                                       |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------- |
| +52.6% |   +10 | 100.0% | 19 → 29 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:204` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| +250.0% |    +5 | 16.7% → 36.8% |   2 → 7 | `java.util.concurrent.ForkJoinPool:2039` |
| +500.0% |    +5 |  8.3% → 31.6% |   1 → 6 | `java.util.concurrent.ForkJoinPool:2053` |
|  -37.5% |    -3 | 66.7% → 26.3% |   8 → 5 | `java.util.concurrent.ForkJoinPool:2058` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:2073` |
|     new |    +1 |   0.0% → 5.3% |   0 → 1 | `java.util.concurrent.ForkJoinPool:2047` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change | Delta |      % | Samples | Location                  |
| ------: | ----: | -----: | ------: | ------------------------- |
| +600.0% |    +6 | 100.0% |   1 → 7 | `java.util.ArrayList:239` |

##### `signalWork()` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % | Samples | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `java.util.concurrent.ForkJoinPool:1704` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change | Delta |              % | Samples | Location                 |
| ------: | ----: | -------------: | ------: | ------------------------ |
| +500.0% |    +5 | 50.0% → 100.0% |   1 → 6 | `java.util.HashMap:1384` |
| removed |    -1 |   50.0% → 0.0% |   1 → 0 | `java.util.HashMap:1409` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Location                                        |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `org.renaissance.jdk.concurrent.JavaKMeans:112` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |              % | Samples | Location                                                      |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:432` |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |      % | Samples | Location                                |
| ------: | ----: | -----: | ------: | --------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `java.util.stream.AbstractPipeline:546` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Location                                                       |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------------- |
| +66.7% |    +2 |   1.6% → 2.7% |     3 → 5 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |
|  -0.6% |    -1 | 93.0% → 91.9% | 172 → 171 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % | Samples | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:151` |

##### `computeMethodInfoSize()` (`jdk.internal.org.objectweb.asm.MethodWriter`)

| Change | Delta |             % | Samples | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `jdk.internal.org.objectweb.asm.MethodWriter:2202` |

##### `periodicTask()` (`jdk.jfr.internal.PlatformRecorder`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `jdk.jfr.internal.PlatformRecorder:539` |

##### `spliterator(double[], int, int)` (`java.util.Arrays`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.Arrays:5514` |

##### `afterNodeInsertion(boolean)` (`java.util.LinkedHashMap`)

| Change | Delta |             % | Samples | Location                      |
| -----: | ----: | ------------: | ------: | ----------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.LinkedHashMap:324` |

##### `hash(Object)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashMap:338` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Location                                                      |
| -----: | ----: | -----: | --------: | ------------------------------------------------------------- |
|  -7.0% |   -35 | 100.0% | 499 → 464 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Location                                                       |
| -----: | ----: | -----: | --------: | -------------------------------------------------------------- |
|  -4.8% |   -19 | 100.0% | 395 → 376 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| -29.7% |   -11 | 100.0% | 37 → 26 | `java.util.Arrays:3482` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| -21.2% |    -7 | 31.7% → 26.5% | 33 → 26 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |
|  -1.4% |    -1 | 68.3% → 71.4% | 71 → 70 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
|    new |    +1 |   0.0% → 1.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213` |
|    new |    +1 |   0.0% → 1.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
|  -13.0% |    -7 | 98.2% → 94.0% | 54 → 47 | `java.util.HashMap:1219` |
| +200.0% |    +2 |   1.8% → 6.0% |   1 → 3 | `java.util.HashMap:1206` |

##### `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`)

| Change | Delta |      % | Samples | Location                                       |
| -----: | ----: | -----: | ------: | ---------------------------------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `java.util.stream.ReduceOps$3ReducingSink:169` |

##### `tryCompensate(long, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.concurrent.ForkJoinPool:1988` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Location                |
| ------: | ----: | -----------: | ------: | ----------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:635` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:649` |

##### `compress(char[], int, byte[], int, int)` (`java.lang.StringUTF16`)

|  Change | Delta |             % | Samples | Location                    |
| ------: | ----: | ------------: | ------: | --------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.StringUTF16:382` |

##### `loadConvert(char[], int, int, StringBuilder)` (`java.util.Properties`)

|  Change | Delta |             % | Samples | Location                   |
| ------: | ----: | ------------: | ------: | -------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.Properties:632` |

##### `match(byte[], byte[], byte[], byte[])` (`java.util.jar.JarFile`)

|  Change | Delta |             % | Samples | Location                     |
| ------: | ----: | ------------: | ------: | ---------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.jar.JarFile:1000` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:387` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool$WorkQueue:1312` |

##### `<init>(Map)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.HashMap:492` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Location                                        |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `stringSize(long)` (`java.lang.Long`)

|  Change | Delta |             % | Samples | Location             |
| ------: | ----: | ------------: | ------: | -------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.Long:593` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.HashMap:741` |

##### `<init>(HashMap)` (`java.util.HashMap$HashIterator`)

| Change | Delta |      % | Samples | Location                              |
| -----: | ----: | -----: | ------: | ------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `java.util.HashMap$HashIterator:1593` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool$WorkQueue:1156` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |      % | Samples | Caller              | Location                                                  |
| ------: | ----: | -----: | ------: | ------------------- | --------------------------------------------------------- |
| +325.0% |   +13 | 100.0% |  4 → 17 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------- | ---------------------------------------------------------- |
| +52.6% |   +10 | 100.0% | 19 → 29 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0`)

|  Change | Delta |      % | Samples | Caller                              | Location            |
| ------: | ----: | -----: | ------: | ----------------------------------- | ------------------- |
| +266.7% |    +8 | 100.0% |  3 → 11 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| +58.3% |    +7 | 100.0% | 12 → 19 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change | Delta |      % | Samples | Caller   | Location              |
| ------: | ----: | -----: | ------: | -------- | --------------------- |
| +600.0% |    +6 | 100.0% |   1 → 7 | `grow()` | `java.util.ArrayList` |

##### `signalWork()` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |            % | Samples | Caller                                      | Location                                      |
| -----: | ----: | -----------: | ------: | ------------------------------------------- | --------------------------------------------- |
|    new |    +4 | 0.0% → 80.0% |   0 → 4 | `scan(ForkJoinPool$WorkQueue, int, int)`    | `java.util.concurrent.ForkJoinPool`           |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `push(ForkJoinTask, ForkJoinPool, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Caller                              | Location                                    |
| ------: | ----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Caller                   | Location                                                               |
| -----: | ----: | ------------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |      % | Samples | Caller                               | Location                                                  |
| ------: | ----: | -----: | ------: | ------------------------------------ | --------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |      % | Samples | Caller                               | Location                            |
| ------: | ----: | -----: | ------: | ------------------------------------ | ----------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
|  +0.5% |    +1 | 100.0% | 185 → 186 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % | Samples | Caller   | Location                             |
| -----: | ----: | ------------: | ------: | -------- | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `computeMethodInfoSize()` (`jdk.internal.org.objectweb.asm.MethodWriter`)

| Change | Delta |             % | Samples | Caller          | Location                                     |
| -----: | ----: | ------------: | ------: | --------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `toByteArray()` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `close0()` (`java.io.FileDescriptor`)

| Change | Delta |             % | Samples | Caller    | Location                 |
| -----: | ----: | ------------: | ------: | --------- | ------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `close()` | `java.io.FileDescriptor` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % | Samples | Caller                     | Location                              |
| -----: | ----: | ------------: | ------: | -------------------------- | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `periodicTask()` (`jdk.jfr.internal.PlatformRecorder`)

| Change | Delta |             % | Samples | Caller                        | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `lambda$startDiskMonitor$1()` | `jdk.jfr.internal.PlatformRecorder` |

##### `spliterator(double[], int, int)` (`java.util.Arrays`)

| Change | Delta |             % | Samples | Caller                       | Location           |
| -----: | ----: | ------------: | ------: | ---------------------------- | ------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `stream(double[], int, int)` | `java.util.Arrays` |

##### `afterNodeInsertion(boolean)` (`java.util.LinkedHashMap`)

| Change | Delta |             % | Samples | Caller                                          | Location            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `hash(Object)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller                              | Location            |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller        | Location                                                  |
| -----: | ----: | -----: | --------: | ------------- | --------------------------------------------------------- |
|  -7.0% |   -35 | 100.0% | 499 → 464 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------- |
|  -4.8% |   -19 | 100.0% | 395 → 376 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change | Delta |              % | Samples | Caller      | Location              |
| ------: | ----: | -------------: | ------: | ----------- | --------------------- |
| removed |    -6 |   16.2% → 0.0% |   6 → 0 | `toArray()` | `java.util.ArrayList` |
|  -16.1% |    -5 | 83.8% → 100.0% | 31 → 26 | `grow(int)` | `java.util.ArrayList` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |  Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | -------: | ------------------- | ---------------------------------------------------------- |
|  -5.8% |    -6 | 100.0% | 104 → 98 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                   | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------- |
|  -9.1% |    -5 | 100.0% | 55 → 50 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`)

| Change | Delta |      % | Samples | Caller        | Location                           |
| -----: | ----: | -----: | ------: | ------------- | ---------------------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `tryCompensate(long, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Caller                                                    | Location                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ----------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                        | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------- | ------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % | Samples | Caller   | Location                                 |
| ------: | ----: | ------------: | ------: | -------- | ---------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `compress(char[], int, byte[], int, int)` (`java.lang.StringUTF16`)

|  Change | Delta |             % | Samples | Caller                       | Location                |
| ------: | ----: | ------------: | ------: | ---------------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compress(char[], int, int)` | `java.lang.StringUTF16` |

##### `loadConvert(char[], int, int, StringBuilder)` (`java.util.Properties`)

|  Change | Delta |             % | Samples | Caller                         | Location               |
| ------: | ----: | ------------: | ------: | ------------------------------ | ---------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `load0(Properties$LineReader)` | `java.util.Properties` |

##### `match(byte[], byte[], byte[], byte[])` (`java.util.jar.JarFile`)

|  Change | Delta |             % | Samples | Caller                        | Location                |
| ------: | ----: | ------------: | ------: | ----------------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `checkForSpecialAttributes()` | `java.util.jar.JarFile` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Caller                                                    | Location                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Caller                                   | Location                            |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `<init>(Map)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller            | Location                                    |
| ------: | ----: | ------------: | ------: | ----------------- | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Caller                     | Location                                                   |
| ------: | ----: | ------------: | ------: | -------------------------- | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `stringSize(long)` (`java.lang.Long`)

|  Change | Delta |             % | Samples | Caller           | Location         |
| ------: | ----: | ------------: | ------: | ---------------- | ---------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `toString(long)` | `java.lang.Long` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                                          | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `<init>(HashMap)` (`java.util.HashMap$HashIterator`)

| Change | Delta |      % | Samples | Caller            | Location                          |
| -----: | ----: | -----: | ------: | ----------------- | --------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `<init>(HashMap)` | `java.util.HashMap$EntryIterator` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Caller   | Location                            |
| ------: | ----: | ------------: | ------: | -------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `fork()` | `java.util.concurrent.ForkJoinTask` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                                                                                               | Location                                                                              |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  +14.6% |   +29 | 14.7% → 17.2% | 199 → 228 | `invoke()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                                   |
|  +17.1% |   +29 | 12.6% → 15.0% | 170 → 199 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +13.2% |   +24 | 13.5% → 15.6% | 182 → 206 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +12.7% |   +23 | 13.4% → 15.4% | 181 → 204 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
| +200.0% |    +8 |   0.3% → 0.9% |    4 → 12 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0` |
|     new |    +7 |   0.0% → 0.5% |     0 → 7 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|     new |    +6 |   0.0% → 0.5% |     0 → 6 | `signalWork()`                                                                                                         | `java.util.concurrent.ForkJoinPool`                                                   |
|   +1.3% |    +5 | 28.4% → 29.4% | 384 → 389 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                                                              | `java.util.concurrent.ForkJoinPool`                                                   |
|  +14.3% |    +4 |   2.1% → 2.4% |   28 → 32 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   +6.8% |    +4 |   4.4% → 4.8% |   59 → 63 | `computeIfAbsent(Object, Function)`                                                                                    | `java.util.HashMap`                                                                   |
|  +15.4% |    +4 |   1.9% → 2.3% |   26 → 30 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`                |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d4f0`                |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +10.0% |    +2 |   1.5% → 1.7% |   20 → 22 | `exec()`                                                                                                               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                                   |
|  +25.0% |    +2 |   0.6% → 0.8% |    8 → 10 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +25.0% |    +2 |   0.6% → 0.8% |    8 → 10 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`                |
|  +25.0% |    +2 |   0.6% → 0.8% |    8 → 10 | `forEach(BiConsumer)`                                                                                                  | `java.util.HashMap`                                                                   |

##### Ours

|  Change | Delta |             % |   Samples | Function                                                                                                               | Location                                                                              |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  +17.1% |   +29 | 12.6% → 15.0% | 170 → 199 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +13.2% |   +24 | 13.5% → 15.6% | 182 → 206 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +12.7% |   +23 | 13.4% → 15.4% | 181 → 204 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
| +200.0% |    +8 |   0.3% → 0.9% |    4 → 12 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0` |
|     new |    +7 |   0.0% → 0.5% |     0 → 7 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|  +14.3% |    +4 |   2.1% → 2.4% |   28 → 32 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +15.4% |    +4 |   1.9% → 2.3% |   26 → 30 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`                |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d4f0`                |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +25.0% |    +2 |   0.6% → 0.8% |    8 → 10 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +25.0% |    +2 |   0.6% → 0.8% |    8 → 10 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`                |
|  +12.5% |    +1 |   0.6% → 0.7% |     8 → 9 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                                           |
| +100.0% |    +1 |   0.1% → 0.2% |     1 → 2 | `getBenchmarkClassLoader(BenchmarkDescriptor)`                                                                         | `org.renaissance.core.BenchmarkSuite`                                                 |
| +100.0% |    +1 |   0.1% → 0.2% |     1 → 2 | `createBenchmark(BenchmarkDescriptor)`                                                                                 | `org.renaissance.core.BenchmarkSuite`                                                 |
| +100.0% |    +1 |   0.1% → 0.2% |     1 → 2 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)`                           | `org.renaissance.harness.ExecutionDriver`                                             |
|  +16.7% |    +1 |   0.4% → 0.5% |     6 → 7 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`                |
|  +16.7% |    +1 |   0.4% → 0.5% |     6 → 7 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                                           |

##### Standard library

|  Change | Delta |             % |   Samples | Function                                                  | Location                                            |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------- | --------------------------------------------------- |
|  +14.6% |   +29 | 14.7% → 17.2% | 199 → 228 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                 |
|     new |    +6 |   0.0% → 0.5% |     0 → 6 | `signalWork()`                                            | `java.util.concurrent.ForkJoinPool`                 |
|   +1.3% |    +5 | 28.4% → 29.4% | 384 → 389 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                 |
|   +6.8% |    +4 |   4.4% → 4.8% |   59 → 63 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                 |
|  +10.0% |    +2 |   1.5% → 1.7% |   20 → 22 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  +25.0% |    +2 |   0.6% → 0.8% |    8 → 10 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                 |
| +100.0% |    +1 |   0.1% → 0.2% |     1 → 2 | `getBytes()`                                              | `jdk.internal.loader.Resource`                      |
| +100.0% |    +1 |   0.1% → 0.2% |     1 → 2 | `getBytes()`                                              | `jdk.internal.loader.URLClassPath$JarLoader$2`      |
| +100.0% |    +1 |   0.1% → 0.2% |     1 → 2 | `defineClass(String, Resource)`                           | `java.net.URLClassLoader`                           |
|  +16.7% |    +1 |   0.4% → 0.5% |     6 → 7 | `apply(Object)`                                           | `scala.runtime.function.JProcedure1`                |
|  +16.7% |    +1 |   0.4% → 0.5% |     6 → 7 | `foreach(Function1)`                                      | `scala.collection.immutable.List`                   |
| +100.0% |    +1 |   0.1% → 0.2% |     1 → 2 | `wrapSink(Sink)`                                          | `java.util.stream.AbstractPipeline`                 |
| +100.0% |    +1 |   0.1% → 0.2% |     1 → 2 | `evaluate(Spliterator, boolean, IntFunction)`             | `java.util.stream.AbstractPipeline`                 |
| +100.0% |    +1 |   0.1% → 0.2% |     1 → 2 | `evaluateToArrayNode(IntFunction)`                        | `java.util.stream.AbstractPipeline`                 |
| +100.0% |    +1 |   0.1% → 0.2% |     1 → 2 | `toArray(IntFunction)`                                    | `java.util.stream.ReferencePipeline`                |
|   +3.1% |    +1 |   2.4% → 2.5% |   32 → 33 | `grow(int)`                                               | `java.util.ArrayList`                               |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `computeMethodInfoSize()`                                 | `jdk.internal.org.objectweb.asm.MethodWriter`       |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `toByteArray()`                                           | `jdk.internal.org.objectweb.asm.ClassWriter`        |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `generateInnerClass()`                                    | `java.lang.invoke.InnerClassLambdaMetafactory`      |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `spinInnerClass()`                                        | `java.lang.invoke.InnerClassLambdaMetafactory`      |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                   |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|   -6.5% |   -64 | 73.3% → 70.1% |     992 → 928 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                |
|   -5.8% |   -61 | 78.3% → 75.5% |   1,060 → 999 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|   -5.2% |   -53 | 75.9% → 73.6% |   1,027 → 974 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                        |
|   -5.0% |   -51 | 75.5% → 73.3% |   1,021 → 970 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                        |
|   -7.0% |   -35 | 36.9% → 35.0% |     499 → 464 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -2.3% |   -31 | 99.1% → 98.9% | 1,341 → 1,310 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                        |
|   -2.2% |   -30 | 99.0% → 98.9% | 1,340 → 1,310 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|   -2.2% |   -30 | 99.0% → 98.9% | 1,340 → 1,310 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                       |
|   -2.0% |   -26 | 95.9% → 96.0% | 1,297 → 1,271 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                              | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|   -1.7% |   -22 | 96.7% → 97.1% | 1,308 → 1,286 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                        |
|   -1.7% |   -22 | 96.7% → 97.1% | 1,308 → 1,286 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                        |
|   -4.4% |   -22 | 37.3% → 36.4% |     504 → 482 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -4.4% |   -22 | 37.3% → 36.4% |     504 → 482 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -4.8% |   -19 | 29.2% → 28.4% |     395 → 376 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -3.1% |   -18 | 42.9% → 42.4% |     580 → 562 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -29.7% |   -11 |   2.7% → 2.0% |       37 → 26 | `copyOf(Object[], int)`                                                                                                | `java.util.Arrays`                                         |
|   -1.3% |   -10 | 58.7% → 59.2% |     794 → 784 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -6 |   0.4% → 0.0% |         6 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                |
| removed |    -6 |   0.4% → 0.0% |         6 → 0 | `toArray()`                                                                                                            | `java.util.ArrayList`                                      |
| removed |    -6 |   0.4% → 0.0% |         6 → 0 | `<init>(Collection)`                                                                                                   | `java.util.ArrayList`                                      |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   -7.0% |   -35 | 36.9% → 35.0% |     499 → 464 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -2.2% |   -30 | 99.0% → 98.9% | 1,340 → 1,310 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|   -4.4% |   -22 | 37.3% → 36.4% |     504 → 482 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -4.4% |   -22 | 37.3% → 36.4% |     504 → 482 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -4.8% |   -19 | 29.2% → 28.4% |     395 → 376 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -3.1% |   -18 | 42.9% → 42.4% |     580 → 562 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -1.3% |   -10 | 58.7% → 59.2% |     794 → 784 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -6 |   0.4% → 0.0% |         6 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -83.3% |    -5 |   0.4% → 0.1% |         6 → 1 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -83.3% |    -5 |   0.4% → 0.1% |         6 → 1 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0` |
|  -18.8% |    -3 |   1.2% → 1.0% |       16 → 13 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -18.8% |    -3 |   1.2% → 1.0% |       16 → 13 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -18.8% |    -3 |   1.2% → 1.0% |       16 → 13 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `loadProperties(URL)`                                                                                                  | `org.renaissance.core.ResourceUtils`                                   |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `loadPropertiesAsMap(URL)`                                                                                             | `org.renaissance.core.ResourceUtils`                                   |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `create(Path, URI)`                                                                                                    | `org.renaissance.core.ModuleLoader`                                    |
|  -18.2% |    -2 |   0.8% → 0.7% |        11 → 9 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  -18.2% |    -2 |   0.8% → 0.7% |        11 → 9 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|   -1.0% |    -2 | 14.4% → 14.6% |     195 → 193 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -10.0% |    -1 |          0.7% |        10 → 9 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                             | Location                                      |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------- | --------------------------------------------- |
|   -6.5% |   -64 | 73.3% → 70.1% |     992 → 928 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`   |
|   -5.8% |   -61 | 78.3% → 75.5% |   1,060 → 999 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|   -5.2% |   -53 | 75.9% → 73.6% |   1,027 → 974 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`           |
|   -5.0% |   -51 | 75.5% → 73.3% |   1,021 → 970 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`           |
|   -2.3% |   -31 | 99.1% → 98.9% | 1,341 → 1,310 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`           |
|   -2.2% |   -30 | 99.0% → 98.9% | 1,340 → 1,310 | `exec()`                                             | `java.util.concurrent.RecursiveTask`          |
|   -2.0% |   -26 | 95.9% → 96.0% | 1,297 → 1,271 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|   -1.7% |   -22 | 96.7% → 97.1% | 1,308 → 1,286 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`           |
|   -1.7% |   -22 | 96.7% → 97.1% | 1,308 → 1,286 | `join()`                                             | `java.util.concurrent.ForkJoinTask`           |
|  -29.7% |   -11 |   2.7% → 2.0% |       37 → 26 | `copyOf(Object[], int)`                              | `java.util.Arrays`                            |
| removed |    -6 |   0.4% → 0.0% |         6 → 0 | `toArray()`                                          | `java.util.ArrayList`                         |
| removed |    -6 |   0.4% → 0.0% |         6 → 0 | `<init>(Collection)`                                 | `java.util.ArrayList`                         |
|  -57.1% |    -4 |   0.5% → 0.2% |         7 → 3 | `<init>(Map)`                                        | `java.util.HashMap`                           |
|  -75.0% |    -3 |   0.3% → 0.1% |         4 → 1 | `accept(Object)`                                     | `java.util.stream.ReduceOps$3ReducingSink`    |
| removed |    -3 |   0.2% → 0.0% |         3 → 0 | `tryCompensate(long, boolean)`                       | `java.util.concurrent.ForkJoinPool`           |
|  -50.0% |    -3 |   0.4% → 0.2% |         6 → 3 | `putMapEntries(Map, boolean)`                        | `java.util.HashMap`                           |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `loadConvert(char[], int, int, StringBuilder)`       | `java.util.Properties`                        |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `load0(Properties$LineReader)`                       | `java.util.Properties`                        |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `load(InputStream)`                                  | `java.util.Properties`                        |
|  -66.7% |    -2 |   0.2% → 0.1% |         3 → 1 | `putVal(int, Object, Object, boolean, boolean)`      | `java.util.HashMap`                           |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |   Samples | Caller                         | Location                                               |
| -----: | ----: | ------------: | --------: | ------------------------------ | ------------------------------------------------------ |
| +12.7% |   +23 | 91.0% → 89.5% | 181 → 204 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +14.3% |    +4 | 14.1% → 14.0% |   28 → 32 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                               |
| -----: | ----: | -----: | --------: | ------------------- | ------------------------------------------------------ |
| +17.1% |   +29 | 100.0% | 170 → 199 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +17.1% |   +29 | 100.0% | 170 → 199 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % |   Samples | Caller              | Location                                               |
| -----: | ----: | ------------: | --------: | ------------------- | ------------------------------------------------------ |
| +17.1% |   +29 | 93.4% → 96.6% | 170 → 199 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller                     | Location                                               |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------------ |
| +12.7% |   +23 | 100.0% | 181 → 204 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0`)

|  Change | Delta |      % | Samples | Caller                              | Location            |
| ------: | ----: | -----: | ------: | ----------------------------------- | ------------------- |
| +200.0% |    +8 | 100.0% |  4 → 12 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |             % | Samples | Caller              | Location                                                               |
| -----: | ----: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
|    new |    +7 | 0.0% → 100.0% |   0 → 7 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8` |

##### `signalWork()` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |            % | Samples | Caller                                      | Location                                      |
| -----: | ----: | -----------: | ------: | ------------------------------------------- | --------------------------------------------- |
|    new |    +4 | 0.0% → 66.7% |   0 → 4 | `scan(ForkJoinPool$WorkQueue, int, int)`    | `java.util.concurrent.ForkJoinPool`           |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `push(ForkJoinTask, ForkJoinPool, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `doExec()`                                  | `java.util.concurrent.ForkJoinTask`           |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |     % |   Samples | Caller                 | Location                            |
| -----: | ----: | ----: | --------: | ---------------------- | ----------------------------------- |
|  +1.3% |    +5 | 99.7% | 383 → 388 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Caller   | Location                                                               |
| -----: | ----: | ------------: | ------: | -------- | ---------------------------------------------------------------------- |
| +15.4% |    +4 | 92.9% → 93.8% | 26 → 30 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                   | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------- |
|  +6.8% |    +4 | 100.0% | 59 → 63 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`)

| Change | Delta |             % | Samples | Caller   | Location                                            |
| -----: | ----: | ------------: | ------: | -------- | --------------------------------------------------- |
| +10.0% |    +2 | 76.9% → 73.3% | 20 → 22 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |      % | Samples | Caller       | Location                                                               |
| ------: | ----: | -----: | ------: | ------------ | ---------------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d4f0` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d4f0`)

|  Change | Delta |      % | Samples | Caller        | Location                           |
| ------: | ----: | -----: | ------: | ------------- | ---------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |      % | Samples | Caller                               | Location                                                  |
| ------: | ----: | -----: | ------: | ------------------------------------ | --------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |      % | Samples | Caller                           | Location                                                  |
| ------: | ----: | -----: | ------: | -------------------------------- | --------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |      % | Samples | Caller      | Location                                               |
| ------: | ----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| +200.0% |    +2 | 100.0% |   1 → 3 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change | Delta |             % | Samples | Caller     | Location                            |
| -----: | ----: | ------------: | ------: | ---------- | ----------------------------------- |
| -10.5% |    -2 | 95.0% → 77.3% | 19 → 17 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Caller                   | Location                                                               |
| -----: | ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| +25.0% |    +2 | 100.0% |  8 → 10 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`)

| Change | Delta |      % | Samples | Caller                | Location            |
| -----: | ----: | -----: | ------: | --------------------- | ------------------- |
| +25.0% |    +2 | 100.0% |  8 → 10 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller            | Location                                    |
| -----: | ----: | -----: | ------: | ----------------- | ------------------------------------------- |
| +25.0% |    +2 | 100.0% |  8 → 10 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |      % | Samples | Caller           | Location                                   |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------ |
| +12.5% |    +1 | 100.0% |   8 → 9 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `getBenchmarkClassLoader(BenchmarkDescriptor)` (`org.renaissance.core.BenchmarkSuite`)

|  Change | Delta |      % | Samples | Caller                                 | Location                              |
| ------: | ----: | -----: | ------: | -------------------------------------- | ------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `createBenchmark(BenchmarkDescriptor)` | `org.renaissance.core.BenchmarkSuite` |

##### `createBenchmark(BenchmarkDescriptor)` (`org.renaissance.core.BenchmarkSuite`)

|  Change | Delta |      % | Samples | Caller                                                                                       | Location                                  |
| ------: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` (`org.renaissance.harness.ExecutionDriver`)

|  Change | Delta |             % | Samples | Caller                                                                                                                 | Location                                    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`)

| Change | Delta |      % | Samples | Caller          | Location                             |
| -----: | ----: | -----: | ------: | --------------- | ------------------------------------ |
| +16.7% |    +1 | 100.0% |   6 → 7 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |      % | Samples | Caller           | Location                                    |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------- |
| +16.7% |    +1 | 100.0% |   6 → 7 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `getBytes()` (`jdk.internal.loader.Resource`)

|  Change | Delta |      % | Samples | Caller       | Location                                       |
| ------: | ----: | -----: | ------: | ------------ | ---------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `getBytes()` | `jdk.internal.loader.URLClassPath$JarLoader$2` |

##### `getBytes()` (`jdk.internal.loader.URLClassPath$JarLoader$2`)

|  Change | Delta |      % | Samples | Caller                          | Location                  |
| ------: | ----: | -----: | ------: | ------------------------------- | ------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `defineClass(String, Resource)` | `java.net.URLClassLoader` |

##### `defineClass(String, Resource)` (`java.net.URLClassLoader`)

|  Change | Delta |      % | Samples | Caller  | Location                    |
| ------: | ----: | -----: | ------: | ------- | --------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `run()` | `java.net.URLClassLoader$1` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change | Delta |      % | Samples | Caller               | Location                             |
| -----: | ----: | -----: | ------: | -------------------- | ------------------------------------ |
| +16.7% |    +1 | 100.0% |   6 → 7 | `apply(Object)`      | `scala.runtime.function.JProcedure1` |
| +16.7% |    +1 | 100.0% |   6 → 7 | `foreach(Function1)` | `scala.collection.immutable.List`    |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change | Delta |      % | Samples | Caller                                                                        | Location                                    |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| +16.7% |    +1 | 100.0% |   6 → 7 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |      % | Samples | Caller                               | Location                            |
| ------: | ----: | -----: | ------: | ------------------------------------ | ----------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |      % | Samples | Caller                             | Location                            |
| ------: | ----: | -----: | ------: | ---------------------------------- | ----------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `evaluateToArrayNode(IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `evaluateToArrayNode(IntFunction)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |      % | Samples | Caller                 | Location                             |
| ------: | ----: | -----: | ------: | ---------------------- | ------------------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `toArray(IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`)

|  Change | Delta |      % | Samples | Caller                                           | Location                                    |
| ------: | ----: | -----: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |           % | Samples | Caller               | Location              |
| -----: | ----: | ----------: | ------: | -------------------- | --------------------- |
|    new |    +1 | 0.0% → 3.0% |   0 → 1 | `addAll(Collection)` | `java.util.ArrayList` |

##### `computeMethodInfoSize()` (`jdk.internal.org.objectweb.asm.MethodWriter`)

| Change | Delta |             % | Samples | Caller          | Location                                     |
| -----: | ----: | ------------: | ------: | --------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `toByteArray()` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `toByteArray()` (`jdk.internal.org.objectweb.asm.ClassWriter`)

| Change | Delta |             % | Samples | Caller                 | Location                                       |
| -----: | ----: | ------------: | ------: | ---------------------- | ---------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `generateInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `generateInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change | Delta |             % | Samples | Caller             | Location                                       |
| -----: | ----: | ------------: | ------: | ------------------ | ---------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `spinInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `spinInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change | Delta |             % | Samples | Caller            | Location                                       |
| -----: | ----: | ------------: | ------: | ----------------- | ---------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `buildCallSite()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |             % |     Samples | Caller                                   | Location                            |
| -----: | ----: | ------------: | ----------: | ---------------------------------------- | ----------------------------------- |
|  -5.6% |   -57 | 96.9% → 97.1% | 1,027 → 970 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |     Samples | Caller                              | Location                            |
| -----: | ----: | ------------: | ----------: | ----------------------------------- | ----------------------------------- |
|  -5.0% |   -51 | 99.4% → 99.6% | 1,021 → 970 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |   Samples | Caller  | Location                                    |
| -----: | ----: | ------------: | --------: | ------- | ------------------------------------------- |
|  -6.5% |   -64 | 97.2% → 95.7% | 992 → 928 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller        | Location                                                  |
| -----: | ----: | -----: | --------: | ------------- | --------------------------------------------------------- |
|  -7.0% |   -35 | 100.0% | 499 → 464 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Caller                                                    | Location                                      |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  -5.7% |   -60 | 79.0% → 76.3% |   1,059 → 999 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| +14.6% |   +29 | 14.8% → 17.4% |     199 → 228 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  -1.9% |   -25 | 96.6% → 97.0% | 1,296 → 1,271 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +0.5% |    +2 | 28.0% → 28.8% |     375 → 377 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |      % |       Samples | Caller   | Location                             |
| -----: | ----: | -----: | ------------: | -------- | ------------------------------------ |
|  -2.2% |   -30 | 100.0% | 1,340 → 1,310 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Caller     | Location                            |
| -----: | ----: | -----: | ------------: | ---------- | ----------------------------------- |
|  -2.2% |   -30 | 100.0% | 1,340 → 1,310 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------- | ----------------------------------- |
|  -2.0% |   -26 | 100.0% | 1,297 → 1,271 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Caller   | Location                            |
| -----: | ----: | -----: | ------------: | -------- | ----------------------------------- |
|  -1.7% |   -22 | 100.0% | 1,308 → 1,286 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Caller      | Location                                               |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------ |
|  -1.7% |   -22 | 100.0% | 1,308 → 1,286 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | --------: | ------------------- | --------------------------------------------------------- |
|  -4.4% |   -22 | 100.0% | 504 → 482 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | --------: | ------------------- | --------------------------------------------------------- |
|  -4.4% |   -22 | 100.0% | 504 → 482 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -4.4% |   -22 | 100.0% | 504 → 482 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------- |
|  -4.8% |   -19 | 100.0% | 395 → 376 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
|  -3.1% |   -18 | 100.0% | 580 → 562 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change | Delta |              % | Samples | Caller      | Location              |
| ------: | ----: | -------------: | ------: | ----------- | --------------------- |
| removed |    -6 |   16.2% → 0.0% |   6 → 0 | `toArray()` | `java.util.ArrayList` |
|  -16.1% |    -5 | 83.8% → 100.0% | 31 → 26 | `grow(int)` | `java.util.ArrayList` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
|  -1.3% |   -10 | 100.0% | 794 → 784 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -1.3% |   -10 | 100.0% | 794 → 784 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Caller              | Location                                                               |
| ------: | ----: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000000801198798` |

##### `toArray()` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller               | Location              |
| ------: | ----: | ------------: | ------: | -------------------- | --------------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `<init>(Collection)` | `java.util.ArrayList` |

##### `<init>(Collection)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller                       | Location                                    |
| ------: | ----: | ------------: | ------: | ---------------------------- | ------------------------------------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Caller                  | Location                                                               |
| -----: | ----: | -----: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| -83.3% |    -5 | 100.0% |   6 → 1 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`)

| Change | Delta |      % | Samples | Caller                              | Location            |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------- |
| -83.3% |    -5 | 100.0% |   6 → 1 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Caller                     | Location                                                   |
| -----: | ----: | -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| -18.8% |    -3 | 100.0% | 16 → 13 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Caller                           | Location                                                   |
| -----: | ----: | -----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| -18.8% |    -3 | 100.0% | 16 → 13 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Caller      | Location                                               |
| -----: | ----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| -18.8% |    -3 | 100.0% | 16 → 13 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `loadProperties(URL)` (`org.renaissance.core.ResourceUtils`)

|  Change | Delta |             % | Samples | Caller                     | Location                             |
| ------: | ----: | ------------: | ------: | -------------------------- | ------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `loadPropertiesAsMap(URL)` | `org.renaissance.core.ResourceUtils` |

##### `loadPropertiesAsMap(URL)` (`org.renaissance.core.ResourceUtils`)

|  Change | Delta |             % | Samples | Caller              | Location                            |
| ------: | ----: | ------------: | ------: | ------------------- | ----------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `create(Path, URI)` | `org.renaissance.core.ModuleLoader` |

##### `create(Path, URI)` (`org.renaissance.core.ModuleLoader`)

|  Change | Delta |            % | Samples | Caller                                        | Location                              |
| ------: | ----: | -----------: | ------: | --------------------------------------------- | ------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `launchHarnessClass(String, String[])`        | `org.renaissance.core.Launcher`       |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `optionallyCreateModuleLoader(Path, boolean)` | `org.renaissance.core.BenchmarkSuite` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Caller           | Location                        |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------- |
| -18.2% |    -2 | 100.0% |  11 → 9 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
|  -1.0% |    -2 | 100.0% | 195 → 193 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Caller                                 | Location                        |
| -----: | ----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| -10.0% |    -1 | 100.0% |  10 → 9 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `<init>(Map)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller            | Location                                    |
| -----: | ----: | -----: | ------: | ----------------- | ------------------------------------------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`)

| Change | Delta |      % | Samples | Caller        | Location                           |
| -----: | ----: | -----: | ------: | ------------- | ---------------------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `tryCompensate(long, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Caller                                                    | Location                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ----------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller        | Location            |
| -----: | ----: | -----: | ------: | ------------- | ------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `<init>(Map)` | `java.util.HashMap` |

##### `loadConvert(char[], int, int, StringBuilder)` (`java.util.Properties`)

|  Change | Delta |             % | Samples | Caller                         | Location               |
| ------: | ----: | ------------: | ------: | ------------------------------ | ---------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `load0(Properties$LineReader)` | `java.util.Properties` |

##### `load0(Properties$LineReader)` (`java.util.Properties`)

|  Change | Delta |             % | Samples | Caller              | Location               |
| ------: | ----: | ------------: | ------: | ------------------- | ---------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `load(InputStream)` | `java.util.Properties` |

##### `load(InputStream)` (`java.util.Properties`)

|  Change | Delta |             % | Samples | Caller                | Location                             |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `loadProperties(URL)` | `org.renaissance.core.ResourceUtils` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                        | Location            |
| -----: | ----: | -----: | ------: | ----------------------------- | ------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |   Samples | Callee     | Location                            |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------- |
| +14.6% |   +29 | 100.0% | 199 → 228 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Callee                     | Location                                               |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------------ |
| +17.1% |   +29 | 100.0% | 170 → 199 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +17.1% |   +29 | 100.0% | 170 → 199 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % |   Samples | Callee            | Location                                               |
| ------: | ----: | ------------: | --------: | ----------------- | ------------------------------------------------------ |
|  +12.7% |   +23 | 99.5% → 99.0% | 181 → 204 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +100.0% |    +1 |   0.5% → 1.0% |     1 → 2 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Callee     | Location                            |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------- |
| +12.7% |   +23 | 100.0% | 181 → 204 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |    +5 | 0.0% → 71.4% |   0 → 5 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |    +2 | 0.0% → 28.6% |   0 → 2 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `signalWork()` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |            % | Samples | Callee           | Location                                 |
| -----: | ----: | -----------: | ------: | ---------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `unpark(Thread)` | `java.util.concurrent.locks.LockSupport` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % |   Samples | Callee                         | Location                            |
| ------: | ----: | ------------: | --------: | ------------------------------ | ----------------------------------- |
| removed |    -3 |   0.8% → 0.0% |     3 → 0 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |
|   +0.5% |    +2 | 97.7% → 96.9% | 375 → 377 | `doExec()`                     | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Callee     | Location                            |
| -----: | ----: | -----: | ------: | ---------- | ----------------------------------- |
| +14.3% |    +4 | 100.0% | 28 → 32 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Callee          | Location                                                                              |
| ------: | ----: | -----------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| +200.0% |    +8 | 6.8% → 19.0% |  4 → 12 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0` |
|     new |    +1 |  0.0% → 1.6% |   0 → 1 | `hash(Object)`  | `java.util.HashMap`                                                                   |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`)

| Change | Delta |      % | Samples | Callee                         | Location                                    |
| -----: | ----: | -----: | ------: | ------------------------------ | ------------------------------------------- |
| +15.4% |    +4 | 100.0% | 26 → 30 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |              % | Samples | Callee                                         | Location                                            |
| ------: | ----: | -------------: | ------: | ---------------------------------------------- | --------------------------------------------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `toArray(IntFunction)`                         | `java.util.stream.ReferencePipeline`                |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `linkToTargetMethod(int, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001220800` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d4f0`)

|  Change | Delta |      % | Samples | Callee                                           | Location                                    |
| ------: | ----: | -----: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |      % | Samples | Callee                    | Location                                                  |
| ------: | ----: | -----: | ------: | ------------------------- | --------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `add(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |      % | Samples | Callee                               | Location                                                  |
| ------: | ----: | -----: | ------: | ------------------------------------ | --------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change | Delta |      % | Samples | Callee   | Location                                                               |
| -----: | ----: | -----: | ------: | -------- | ---------------------------------------------------------------------- |
| +10.0% |    +2 | 100.0% | 20 → 22 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |              % | Samples | Callee                              | Location            |
| -----: | ----: | -------------: | ------: | ----------------------------------- | ------------------- |
| -12.5% |    -1 | 100.0% → 70.0% |   8 → 7 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`)

| Change | Delta |      % | Samples | Callee                              | Location                                    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| +25.0% |    +2 | 100.0% |  8 → 10 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Callee                   | Location                                                               |
| -----: | ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| +25.0% |    +2 | 100.0% |  8 → 10 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Callee                                                                        | Location                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `apply(Function0)`                                                            | `scala.util.Try$`                           |
|  +16.7% |    +1 | 75.0% → 77.8% |   6 → 7 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `loadClass(String)`                                                           | `java.lang.ClassLoader`                     |

##### `getBenchmarkClassLoader(BenchmarkDescriptor)` (`org.renaissance.core.BenchmarkSuite`)

|  Change | Delta |      % | Samples | Callee                               | Location                            |
| ------: | ----: | -----: | ------: | ------------------------------------ | ----------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |

##### `createBenchmark(BenchmarkDescriptor)` (`org.renaissance.core.BenchmarkSuite`)

|  Change | Delta |      % | Samples | Callee                                         | Location                              |
| ------: | ----: | -----: | ------: | ---------------------------------------------- | ------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `getBenchmarkClassLoader(BenchmarkDescriptor)` | `org.renaissance.core.BenchmarkSuite` |

##### `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` (`org.renaissance.harness.ExecutionDriver`)

|  Change | Delta |      % | Samples | Callee                                 | Location                              |
| ------: | ----: | -----: | ------: | -------------------------------------- | ------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `createBenchmark(BenchmarkDescriptor)` | `org.renaissance.core.BenchmarkSuite` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`)

|  Change | Delta |             % | Samples | Callee                                                                                                                 | Location                                    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new |    +7 | 0.0% → 100.0% |   0 → 7 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |      % | Samples | Callee               | Location                          |
| -----: | ----: | -----: | ------: | -------------------- | --------------------------------- |
| +16.7% |    +1 | 100.0% |   6 → 7 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `getBytes()` (`jdk.internal.loader.Resource`)

|  Change | Delta |      % | Samples | Callee                   | Location                            |
| ------: | ----: | -----: | ------: | ------------------------ | ----------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `getBytes()` (`jdk.internal.loader.URLClassPath$JarLoader$2`)

|  Change | Delta |      % | Samples | Callee       | Location                       |
| ------: | ----: | -----: | ------: | ------------ | ------------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `getBytes()` | `jdk.internal.loader.Resource` |

##### `defineClass(String, Resource)` (`java.net.URLClassLoader`)

|  Change | Delta |      % | Samples | Callee       | Location                                       |
| ------: | ----: | -----: | ------: | ------------ | ---------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `getBytes()` | `jdk.internal.loader.URLClassPath$JarLoader$2` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change | Delta |      % | Samples | Callee              | Location                                                               |
| -----: | ----: | -----: | ------: | ------------------- | ---------------------------------------------------------------------- |
| +16.7% |    +1 | 100.0% |   6 → 7 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8` |
| +16.7% |    +1 | 100.0% |   6 → 7 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change | Delta |      % | Samples | Callee          | Location                             |
| -----: | ----: | -----: | ------: | --------------- | ------------------------------------ |
| +16.7% |    +1 | 100.0% |   6 → 7 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |      % | Samples | Callee                               | Location                            |
| ------: | ----: | -----: | ------: | ------------------------------------ | ----------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluateToArrayNode(IntFunction)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |      % | Samples | Callee                                        | Location                            |
| ------: | ----: | -----: | ------: | --------------------------------------------- | ----------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`)

|  Change | Delta |      % | Samples | Callee                             | Location                            |
| ------: | ----: | -----: | ------: | ---------------------------------- | ----------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `evaluateToArrayNode(IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Callee                  | Location           |
| -----: | ----: | ------------: | ------: | ----------------------- | ------------------ |
| -16.1% |    -5 | 96.9% → 78.8% | 31 → 26 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `toByteArray()` (`jdk.internal.org.objectweb.asm.ClassWriter`)

| Change | Delta |             % | Samples | Callee                    | Location                                      |
| -----: | ----: | ------------: | ------: | ------------------------- | --------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `computeMethodInfoSize()` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `generateInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change | Delta |             % | Samples | Callee          | Location                                     |
| -----: | ----: | ------------: | ------: | --------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `toByteArray()` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `spinInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change | Delta |             % | Samples | Callee                 | Location                                       |
| -----: | ----: | ------------: | ------: | ---------------------- | ---------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `generateInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change | Delta |      % |   Samples | Callee                              | Location                            |
| -----: | ----: | -----: | --------: | ----------------------------------- | ----------------------------------- |
|  -6.5% |   -64 | 100.0% | 992 → 928 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |              % |     Samples | Callee     | Location                            |
| -----: | ----: | -------------: | ----------: | ---------- | ----------------------------------- |
|  -5.7% |   -60 | 99.9% → 100.0% | 1,059 → 999 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |              % |     Samples | Callee                                               | Location                                      |
| -----: | ----: | -------------: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
|  -5.6% |   -57 | 100.0% → 99.6% | 1,027 → 970 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|    new |    +4 |    0.0% → 0.4% |       0 → 4 | `signalWork()`                                       | `java.util.concurrent.ForkJoinPool`           |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |     Samples | Callee                                   | Location                            |
| -----: | ----: | -----: | ----------: | ---------------------------------------- | ----------------------------------- |
|  -5.0% |   -51 | 100.0% | 1,021 → 970 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |              % |       Samples | Callee         | Location                                            |
| ------: | ----: | -------------: | ------------: | -------------- | --------------------------------------------------- |
|   -2.2% |   -30 | 99.9% → 100.0% | 1,340 → 1,310 | `exec()`       | `java.util.concurrent.RecursiveTask`                |
|  -10.5% |    -2 |    1.4% → 1.3% |       19 → 17 | `exec()`       | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| removed |    -1 |    0.1% → 0.0% |         1 → 0 | `setDone()`    | `java.util.concurrent.ForkJoinTask`                 |
|     new |    +1 |    0.0% → 0.1% |         0 → 1 | `signalWork()` | `java.util.concurrent.ForkJoinPool`                 |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % |       Samples | Callee                           | Location                                                   |
| -----: | ----: | ------------: | ------------: | -------------------------------- | ---------------------------------------------------------- |
| +17.1% |   +29 | 12.7% → 15.2% |     170 → 199 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -1.7% |   -22 | 97.6% → 98.2% | 1,308 → 1,286 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
|  -4.4% |   -22 | 37.6% → 36.8% |     504 → 482 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -1.3% |   -10 | 59.3% → 59.8% |     794 → 784 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -18.8% |    -3 |   1.2% → 1.0% |       16 → 13 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Callee      | Location                                               |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------ |
|  -2.2% |   -30 | 100.0% | 1,340 → 1,310 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |              % |       Samples | Callee     | Location                            |
| -----: | ----: | -------------: | ------------: | ---------- | ----------------------------------- |
|  -1.9% |   -25 | 99.9% → 100.0% | 1,296 → 1,271 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % |       Samples | Callee                                                    | Location                                      |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|   -2.0% |   -26 | 99.2% → 98.8% | 1,297 → 1,271 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|   +1.3% |    +5 | 29.3% → 30.2% |     383 → 388 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| removed |    -2 |   0.2% → 0.0% |         2 → 0 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Callee                 | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------- | ----------------------------------- |
|  -1.7% |   -22 | 100.0% | 1,308 → 1,286 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |   Samples | Callee                           | Location                                                  |
| -----: | ----: | ------------: | --------: | -------------------------------- | --------------------------------------------------------- |
|  -7.0% |   -35 | 99.0% → 96.3% | 499 → 464 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Callee              | Location                                                  |
| -----: | ----: | -----: | --------: | ------------------- | --------------------------------------------------------- |
|  -4.4% |   -22 | 100.0% | 504 → 482 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -4.4% |   -22 | 100.0% | 504 → 482 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Callee                         | Location                                                   |
| -----: | ----: | ------------: | --------: | ------------------------------ | ---------------------------------------------------------- |
|  -4.8% |   -19 | 68.1% → 66.9% | 395 → 376 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Callee                   | Location                                                   |
| -----: | ----: | ------------: | --------: | ------------------------ | ---------------------------------------------------------- |
|  -3.1% |   -18 | 73.0% → 71.7% | 580 → 562 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -1.3% |   -10 |        100.0% | 794 → 784 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -1.0% |    -2 |         24.6% | 195 → 193 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed |    -5 | 83.3% → 0.0% |   5 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `toArray()` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Callee                  | Location           |
| ------: | ----: | ------------: | ------: | ----------------------- | ------------------ |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `<init>(Collection)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Callee      | Location              |
| ------: | ----: | ------------: | ------: | ----------- | --------------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `toArray()` | `java.util.ArrayList` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Callee               | Location              |
| ------: | ----: | ------------: | ------: | -------------------- | --------------------- |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `<init>(Collection)` | `java.util.ArrayList` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `addAll(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`)

| Change | Delta |      % | Samples | Callee                       | Location                                    |
| -----: | ----: | -----: | ------: | ---------------------------- | ------------------------------------------- |
| -83.3% |    -5 | 100.0% |   6 → 1 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Callee                | Location            |
| -----: | ----: | ------------: | ------: | --------------------- | ------------------- |
| -57.1% |    -4 | 43.8% → 23.1% |   7 → 3 | `<init>(Map)`         | `java.util.HashMap` |
| +25.0% |    +2 | 50.0% → 76.9% |  8 → 10 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Callee            | Location                                    |
| -----: | ----: | -----: | ------: | ----------------- | ------------------------------------------- |
| -18.8% |    -3 | 100.0% | 16 → 13 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Callee                     | Location                                                   |
| -----: | ----: | -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| -18.8% |    -3 | 100.0% | 16 → 13 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `loadProperties(URL)` (`org.renaissance.core.ResourceUtils`)

|  Change | Delta |             % | Samples | Callee              | Location               |
| ------: | ----: | ------------: | ------: | ------------------- | ---------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `load(InputStream)` | `java.util.Properties` |

##### `loadPropertiesAsMap(URL)` (`org.renaissance.core.ResourceUtils`)

|  Change | Delta |             % | Samples | Callee                | Location                             |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `loadProperties(URL)` | `org.renaissance.core.ResourceUtils` |

##### `create(Path, URI)` (`org.renaissance.core.ModuleLoader`)

|  Change | Delta |             % | Samples | Callee                     | Location                             |
| ------: | ----: | ------------: | ------: | -------------------------- | ------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `loadPropertiesAsMap(URL)` | `org.renaissance.core.ResourceUtils` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|  Change | Delta |              % | Samples | Callee                                                      | Location                            |
| ------: | ----: | -------------: | ------: | ----------------------------------------------------------- | ----------------------------------- |
| removed |    -1 |    9.1% → 0.0% |   1 → 0 | `create(Path, URI)`                                         | `org.renaissance.core.ModuleLoader` |
|  -10.0% |    -1 | 90.9% → 100.0% |  10 → 9 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`     |

##### `main(String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Callee                                 | Location                        |
| -----: | ----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| -18.2% |    -2 | 100.0% |  11 → 9 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Callee                              | Location            |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ------------------- |
|  +6.8% |    +4 | 30.3% → 32.6% | 59 → 63 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|  Change | Delta |            % | Samples | Callee                               | Location                            |
| ------: | ----: | -----------: | ------: | ------------------------------------ | ----------------------------------- |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |

##### `<init>(Map)` (`java.util.HashMap`)

| Change | Delta |              % | Samples | Callee                        | Location            |
| -----: | ----: | -------------: | ------: | ----------------------------- | ------------------- |
| -50.0% |    -3 | 85.7% → 100.0% |   6 → 3 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `tryCompensate(long, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |            % | Samples | Callee           | Location                            |
| ------: | ----: | -----------: | ------: | ---------------- | ----------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `createWorker()` | `java.util.concurrent.ForkJoinPool` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Callee                                          | Location                     |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ---------------------------- |
| -66.7% |    -2 | 50.0% → 33.3% |   3 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`          |
| -50.0% |    -1 |         33.3% |   2 → 1 | `iterator()`                                    | `java.util.HashMap$EntrySet` |

##### `loadConvert(char[], int, int, StringBuilder)` (`java.util.Properties`)

|  Change | Delta |            % | Samples | Callee                     | Location           |
| ------: | ----: | -----------: | ------: | -------------------------- | ------------------ |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `<init>(char[], int, int)` | `java.lang.String` |

##### `load0(Properties$LineReader)` (`java.util.Properties`)

|  Change | Delta |             % | Samples | Callee                                         | Location               |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | ---------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `loadConvert(char[], int, int, StringBuilder)` | `java.util.Properties` |

##### `load(InputStream)` (`java.util.Properties`)

|  Change | Delta |             % | Samples | Callee                         | Location               |
| ------: | ----: | ------------: | ------: | ------------------------------ | ---------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `load0(Properties$LineReader)` | `java.util.Properties` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Callee                        | Location                  |
| ------: | ----: | ------------: | ------: | ----------------------------- | ------------------------- |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `resize()`                    | `java.util.HashMap`       |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `afterNodeInsertion(boolean)` | `java.util.LinkedHashMap` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame. `truncated` stands for missing outermost callers.

Common call stack: `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +127.3% |   +14 | 0.8% → 1.9% | 11 → 25 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← truncated                   |
|  +78.6% |   +11 | 1.0% → 1.9% | 14 → 25 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← truncated |
|  +20.0% |    +8 | 3.0% → 3.6% | 40 → 48 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| +114.3% |    +8 | 0.5% → 1.1% |  7 → 15 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  +35.0% |    +7 | 1.5% → 2.0% | 20 → 27 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← truncated                                                                                                                                                 |
| +500.0% |    +5 | 0.1% → 0.5% |   1 → 6 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| +500.0% |    +5 | 0.1% → 0.5% |   1 → 6 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  +23.5% |    +4 | 1.3% → 1.6% | 17 → 21 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← truncated                                                                                                                                                 |
| +400.0% |    +4 | 0.1% → 0.4% |   1 → 5 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| +200.0% |    +4 | 0.1% → 0.5% |   2 → 6 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `signalWork()` (`java.util.concurrent.ForkJoinPool`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| +100.0% |    +3 | 0.2% → 0.5% |   3 → 6 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)                                                                                                                                                                    |
|  +33.3% |    +3 | 0.7% → 0.9% |  9 → 12 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  +50.0% |    +3 | 0.4% → 0.7% |   6 → 9 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← truncated                                                                                                                                      |
|  +20.0% |    +3 | 1.1% → 1.4% | 15 → 18 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  +17.6% |    +3 | 1.3% → 1.5% | 17 → 20 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -39.6% |   -19 | 3.5% → 2.2% | 48 → 29 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -23.2% |   -13 | 4.1% → 3.2% | 56 → 43 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                   |
|  -73.3% |   -11 | 1.1% → 0.3% |  15 → 4 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -45.8% |   -11 | 1.8% → 1.0% | 24 → 13 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                            |
|  -31.3% |   -10 | 2.4% → 1.7% | 32 → 22 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                    |
|  -23.7% |    -9 | 2.8% → 2.2% | 38 → 29 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  -15.1% |    -8 | 3.9% → 3.4% | 53 → 45 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  -44.4% |    -8 | 1.3% → 0.8% | 18 → 10 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -87.5% |    -7 | 0.6% → 0.1% |   8 → 1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                    |
|  -63.6% |    -7 | 0.8% → 0.3% |  11 → 4 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -21.4% |    -6 | 2.1% → 1.7% | 28 → 22 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -20.7% |    -6 | 2.1% → 1.7% | 29 → 23 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -31.6% |    -6 | 1.4% → 1.0% | 19 → 13 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                  |
|  -37.5% |    -6 | 1.2% → 0.8% | 16 → 10 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -41.7% |    -5 | 0.9% → 0.5% |  12 → 7 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                 |
|  -31.3% |    -5 | 1.2% → 0.8% | 16 → 11 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                   |
|  -50.0% |    -5 | 0.7% → 0.4% |  10 → 5 | `computeIfAbsent(Object, Function)` (`java.util.HashMap`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                       |
|  -20.0% |    -5 | 1.8% → 1.5% | 25 → 20 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000000801198798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -14.3% |    -4 | 2.1% → 1.8% | 28 → 24 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |

# Allocated heap profile diff

Allocated 37.4 GiB → 37.2 GiB (-208.995 MiB, -0.5%) over 1,920 samples → 1,930 samples (19.9 MiB → 19.7 MiB per sample).

| Category         | Change |        Delta |     % |                Size |       Samples |
| ---------------- | -----: | -----------: | ----: | ------------------: | ------------: |
| Standard library |  -0.5% | -195.488 MiB | 94.2% |   35.2 GiB → 35 GiB | 1,818 → 1,806 |
| Ours             |  -0.6% |  -13.506 MiB |  5.8% | 2.15 GiB → 2.14 GiB |     100 → 123 |
| Unknown          |  -4.1% |        -88 B | <0.1% | 2.11 KiB → 2.02 KiB |         2 → 1 |

Call stacks missing their outermost callers account for 7.5% → 5.7% of the bytes allocated.

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|    Change |        Delta |             % |                Size |       Samples | Function                                | Location                                                   |
| --------: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------- | ---------------------------------------------------------- |
|     +0.5% | +160.222 MiB | 91.9% → 92.8% | 34.3 GiB → 34.5 GiB | 1,649 → 1,614 | `copyOf(Object[], int)`                 | `java.util.Arrays`                                         |
|   +177.0% | +114.273 MiB |   0.2% → 0.5% |  64.6 MiB → 179 MiB |         2 → 9 | `createSubtask(int, int)`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +14196.7% | +107.488 MiB |  <0.1% → 0.3% |   775 KiB → 108 MiB |         2 → 5 | `builder(long, IntFunction)`            | `java.util.stream.Nodes`                                   |
|     +7.8% |  +97.769 MiB |   3.3% → 3.6% | 1.23 GiB → 1.32 GiB |       60 → 70 | `findNearestCentroid()`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|       new |  +95.588 MiB |   0.0% → 0.3% |      0 B → 95.6 MiB |         0 → 1 | `createSubtask(int, int)`               | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   +354.1% |  +75.024 MiB |   0.1% → 0.3% | 21.2 MiB → 96.2 MiB |         1 → 2 | `add(double[], double[])`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    +74.1% |  +50.971 MiB |   0.2% → 0.3% |  68.7 MiB → 120 MiB |         4 → 3 | `lambda$collectClusters$0(Double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    +47.9% |  +19.082 MiB |   0.1% → 0.2% | 39.9 MiB → 58.9 MiB |         5 → 6 | `createSubtask(int, int)`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    +24.0% |  +15.059 MiB |          0.2% | 62.6 MiB → 77.7 MiB |         6 → 9 | `grow(int)`                             | `java.util.ArrayList`                                      |
|   +178.7% |  +13.895 MiB |  <0.1% → 0.1% | 7.78 MiB → 21.7 MiB |       21 → 32 | `valueOf(double)`                       | `java.lang.Double`                                         |
|   +277.0% |   +9.945 MiB |         <0.1% | 3.59 MiB → 13.5 MiB |       10 → 15 | `opWrapSink(int, Sink)`                 | `java.util.stream.IntPipeline$1`                           |
|  +1831.9% |   +7.447 MiB |         <0.1% |  416 KiB → 7.85 MiB |         2 → 9 | `range(int, int)`                       | `java.util.stream.IntStream`                               |
|       new |   +5.996 MiB |  0.0% → <0.1% |         0 B → 6 MiB |         0 → 4 | `vectorSum()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|    +94.8% |   +5.026 MiB |         <0.1% |  5.3 MiB → 10.3 MiB |       14 → 11 | `mapToObj(IntFunction, int)`            | `java.util.stream.IntPipeline`                             |
|    +85.2% |   +4.797 MiB |         <0.1% | 5.63 MiB → 10.4 MiB |            15 | `intStream(Spliterator$OfInt, boolean)` | `java.util.stream.StreamSupport`                           |
|   +190.5% |   +4.497 MiB |         <0.1% | 2.36 MiB → 6.86 MiB |        6 → 18 | `<init>(InputStream, Inflater, int)`    | `java.util.zip.InflaterInputStream`                        |
|       new |   +4.064 MiB |  0.0% → <0.1% |      0 B → 4.06 MiB |         0 → 4 | `allocateInstance(Object)`              | `java.lang.invoke.DirectMethodHandle`                      |
|       new |   +2.576 MiB |  0.0% → <0.1% |      0 B → 2.58 MiB |         0 → 1 | `result()`                              | `scala.collection.immutable.VectorBuilder`                 |
|   +360.0% |   +1.419 MiB |         <0.1% |  404 KiB → 1.81 MiB |         1 → 5 | `allocateInstance(Class)`               | `jdk.internal.misc.Unsafe`                                 |
|    +10.5% |   +1.245 MiB |         <0.1% | 11.9 MiB → 13.1 MiB |       24 → 33 | `copyOf(byte[], int)`                   | `java.util.Arrays`                                         |

##### Standard library

|    Change |        Delta |             % |                Size |       Samples | Function                                                                     | Location                                     |
| --------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------- | -------------------------------------------- |
|     +0.5% | +160.222 MiB | 91.9% → 92.8% | 34.3 GiB → 34.5 GiB | 1,649 → 1,614 | `copyOf(Object[], int)`                                                      | `java.util.Arrays`                           |
| +14196.7% | +107.488 MiB |  <0.1% → 0.3% |   775 KiB → 108 MiB |         2 → 5 | `builder(long, IntFunction)`                                                 | `java.util.stream.Nodes`                     |
|    +24.0% |  +15.059 MiB |          0.2% | 62.6 MiB → 77.7 MiB |         6 → 9 | `grow(int)`                                                                  | `java.util.ArrayList`                        |
|   +178.7% |  +13.895 MiB |  <0.1% → 0.1% | 7.78 MiB → 21.7 MiB |       21 → 32 | `valueOf(double)`                                                            | `java.lang.Double`                           |
|   +277.0% |   +9.945 MiB |         <0.1% | 3.59 MiB → 13.5 MiB |       10 → 15 | `opWrapSink(int, Sink)`                                                      | `java.util.stream.IntPipeline$1`             |
|  +1831.9% |   +7.447 MiB |         <0.1% |  416 KiB → 7.85 MiB |         2 → 9 | `range(int, int)`                                                            | `java.util.stream.IntStream`                 |
|    +94.8% |   +5.026 MiB |         <0.1% |  5.3 MiB → 10.3 MiB |       14 → 11 | `mapToObj(IntFunction, int)`                                                 | `java.util.stream.IntPipeline`               |
|    +85.2% |   +4.797 MiB |         <0.1% | 5.63 MiB → 10.4 MiB |            15 | `intStream(Spliterator$OfInt, boolean)`                                      | `java.util.stream.StreamSupport`             |
|   +190.5% |   +4.497 MiB |         <0.1% | 2.36 MiB → 6.86 MiB |        6 → 18 | `<init>(InputStream, Inflater, int)`                                         | `java.util.zip.InflaterInputStream`          |
|       new |   +4.064 MiB |  0.0% → <0.1% |      0 B → 4.06 MiB |         0 → 4 | `allocateInstance(Object)`                                                   | `java.lang.invoke.DirectMethodHandle`        |
|       new |   +2.576 MiB |  0.0% → <0.1% |      0 B → 2.58 MiB |         0 → 1 | `result()`                                                                   | `scala.collection.immutable.VectorBuilder`   |
|   +360.0% |   +1.419 MiB |         <0.1% |  404 KiB → 1.81 MiB |         1 → 5 | `allocateInstance(Class)`                                                    | `jdk.internal.misc.Unsafe`                   |
|    +10.5% |   +1.245 MiB |         <0.1% | 11.9 MiB → 13.1 MiB |       24 → 33 | `copyOf(byte[], int)`                                                        | `java.util.Arrays`                           |
|       new |   +822.5 KiB |  0.0% → <0.1% |       0 B → 823 KiB |         0 → 2 | `visitMethod(int, String, String, String, String[])`                         | `jdk.internal.org.objectweb.asm.ClassWriter` |
|       new | +807.109 KiB |  0.0% → <0.1% |       0 B → 807 KiB |         0 → 2 | `newString(byte[], int, int)`                                                | `java.lang.StringLatin1`                     |
|   +112.7% |  +580.71 KiB |         <0.1% |  515 KiB → 1.07 MiB |         1 → 2 | `readNBytes(int)`                                                            | `java.io.InputStream`                        |
|       new | +467.843 KiB |  0.0% → <0.1% |       0 B → 468 KiB |         0 → 1 | `initCEN(int, ZipCoder)`                                                     | `java.util.zip.ZipFile$Source`               |
|       new | +442.585 KiB |  0.0% → <0.1% |       0 B → 443 KiB |         0 → 1 | `addConstantUtf8(String)`                                                    | `jdk.internal.org.objectweb.asm.SymbolTable` |
|     +2.0% | +433.437 KiB |          0.1% | 20.8 MiB → 21.3 MiB |             1 | `initTable()`                                                                | `java.util.concurrent.ConcurrentHashMap`     |
|       new | +395.593 KiB |  0.0% → <0.1% |       0 B → 396 KiB |         0 → 1 | `definePackage(String, String, String, String, String, String, String, URL)` | `java.lang.ClassLoader`                      |

##### Ours

|  Change |        Delta |            % |                Size | Samples | Function                             | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
| +177.0% | +114.273 MiB |  0.2% → 0.5% |  64.6 MiB → 179 MiB |   2 → 9 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +7.8% |  +97.769 MiB |  3.3% → 3.6% | 1.23 GiB → 1.32 GiB | 60 → 70 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |  +95.588 MiB |  0.0% → 0.3% |      0 B → 95.6 MiB |   0 → 1 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| +354.1% |  +75.024 MiB |  0.1% → 0.3% | 21.2 MiB → 96.2 MiB |   1 → 2 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +74.1% |  +50.971 MiB |  0.2% → 0.3% |  68.7 MiB → 120 MiB |   4 → 3 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +47.9% |  +19.082 MiB |  0.1% → 0.2% | 39.9 MiB → 58.9 MiB |   5 → 6 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |   +5.996 MiB | 0.0% → <0.1% |         0 B → 6 MiB |   0 → 4 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +89.9% | +722.843 KiB |        <0.1% |  804 KiB → 1.49 MiB |   3 → 4 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |

#### Improvements

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |          Delta |            % |               Size | Samples | Function                                     | Location                                                   |
| ------: | -------------: | -----------: | -----------------: | ------: | -------------------------------------------- | ---------------------------------------------------------- |
|  -71.7% |    -323.54 MiB |  1.2% → 0.3% |  451 MiB → 127 MiB |   9 → 6 | `resize()`                                   | `java.util.HashMap`                                        |
|  -53.4% |   -224.502 MiB |  1.1% → 0.5% |  420 MiB → 196 MiB |  7 → 12 | `lambda$merge$6(List, List)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |   -158.634 MiB |  0.4% → 0.0% |      159 MiB → 0 B |   1 → 0 | `read(InputStream, String)`                  | `java.util.jar.Manifest`                                   |
|  -96.2% |   -139.705 MiB | 0.4% → <0.1% | 145 MiB → 5.57 MiB |   7 → 3 | `merge(Map, Map)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -78.532 MiB |  0.2% → 0.0% |     78.5 MiB → 0 B |   1 → 0 | `computeClusterAverages()`                   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -25.6% |    -35.927 MiB |  0.4% → 0.3% |  141 MiB → 105 MiB |  16 → 3 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                        |
|  -28.0% |    -30.176 MiB |  0.3% → 0.2% | 108 MiB → 77.6 MiB |  10 → 9 | `collectClusters(int[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |     -9.894 MiB | <0.1% → 0.0% |     9.89 MiB → 0 B |  15 → 0 | `copyOf(Object[], int, Class)`               | `java.util.Arrays`                                         |
| removed |     -2.923 MiB | <0.1% → 0.0% |     2.92 MiB → 0 B |   1 → 0 | `iterator()`                                 | `java.util.HashMap$EntrySet`                               |
|  -88.6% |     -2.881 MiB |        <0.1% | 3.25 MiB → 381 KiB |   5 → 1 | `copyOfRangeByte(byte[], int, int)`          | `java.util.Arrays`                                         |
|  -72.5% | -1,007.875 KiB |        <0.1% | 1.36 MiB → 381 KiB |       1 | `fillInStackTrace(int)`                      | `java.lang.Throwable`                                      |
|  -72.0% |   -671.289 KiB |        <0.1% |  933 KiB → 262 KiB |   2 → 1 | `newLinkedHashMap(int)`                      | `java.util.LinkedHashMap`                                  |
| removed |   -662.109 KiB | <0.1% → 0.0% |      662 KiB → 0 B |   2 → 0 | `getClassLoadingLock(String)`                | `java.lang.ClassLoader`                                    |
| removed |   -421.843 KiB | <0.1% → 0.0% |      422 KiB → 0 B |   1 → 0 | `entrySet()`                                 | `java.util.HashMap`                                        |
|  -77.6% |     -415.5 KiB |        <0.1% |  535 KiB → 120 KiB |       1 | `replace(byte[], char, char)`                | `java.lang.StringLatin1`                                   |
| removed |   -414.851 KiB | <0.1% → 0.0% |      415 KiB → 0 B |   1 → 0 | `newString(byte[], long)`                    | `java.lang.StringConcatHelper`                             |
| removed |   -407.671 KiB | <0.1% → 0.0% |      408 KiB → 0 B |   1 → 0 | `transferTo(OutputStream)`                   | `java.io.InputStream`                                      |
| removed |   -398.773 KiB | <0.1% → 0.0% |      399 KiB → 0 B |   1 → 0 | `register(Object, Runnable)`                 | `java.lang.ref.Cleaner`                                    |
| removed |   -395.101 KiB | <0.1% → 0.0% |      395 KiB → 0 B |   1 → 0 | `toArray()`                                  | `java.util.stream.IntPipeline`                             |
| removed |    -391.64 KiB | <0.1% → 0.0% |      392 KiB → 0 B |   1 → 0 | `parseContextSpec(URL, String)`              | `sun.net.www.protocol.jar.Handler`                         |

##### Standard library

|  Change |          Delta |            % |               Size | Samples | Function                                     | Location                                     |
| ------: | -------------: | -----------: | -----------------: | ------: | -------------------------------------------- | -------------------------------------------- |
|  -71.7% |    -323.54 MiB |  1.2% → 0.3% |  451 MiB → 127 MiB |   9 → 6 | `resize()`                                   | `java.util.HashMap`                          |
| removed |   -158.634 MiB |  0.4% → 0.0% |      159 MiB → 0 B |   1 → 0 | `read(InputStream, String)`                  | `java.util.jar.Manifest`                     |
|  -25.6% |    -35.927 MiB |  0.4% → 0.3% |  141 MiB → 105 MiB |  16 → 3 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                          |
| removed |     -9.894 MiB | <0.1% → 0.0% |     9.89 MiB → 0 B |  15 → 0 | `copyOf(Object[], int, Class)`               | `java.util.Arrays`                           |
| removed |     -2.923 MiB | <0.1% → 0.0% |     2.92 MiB → 0 B |   1 → 0 | `iterator()`                                 | `java.util.HashMap$EntrySet`                 |
|  -88.6% |     -2.881 MiB |        <0.1% | 3.25 MiB → 381 KiB |   5 → 1 | `copyOfRangeByte(byte[], int, int)`          | `java.util.Arrays`                           |
|  -72.5% | -1,007.875 KiB |        <0.1% | 1.36 MiB → 381 KiB |       1 | `fillInStackTrace(int)`                      | `java.lang.Throwable`                        |
|  -72.0% |   -671.289 KiB |        <0.1% |  933 KiB → 262 KiB |   2 → 1 | `newLinkedHashMap(int)`                      | `java.util.LinkedHashMap`                    |
| removed |   -662.109 KiB | <0.1% → 0.0% |      662 KiB → 0 B |   2 → 0 | `getClassLoadingLock(String)`                | `java.lang.ClassLoader`                      |
| removed |   -421.843 KiB | <0.1% → 0.0% |      422 KiB → 0 B |   1 → 0 | `entrySet()`                                 | `java.util.HashMap`                          |
|  -77.6% |     -415.5 KiB |        <0.1% |  535 KiB → 120 KiB |       1 | `replace(byte[], char, char)`                | `java.lang.StringLatin1`                     |
| removed |   -414.851 KiB | <0.1% → 0.0% |      415 KiB → 0 B |   1 → 0 | `newString(byte[], long)`                    | `java.lang.StringConcatHelper`               |
| removed |   -407.671 KiB | <0.1% → 0.0% |      408 KiB → 0 B |   1 → 0 | `transferTo(OutputStream)`                   | `java.io.InputStream`                        |
| removed |   -398.773 KiB | <0.1% → 0.0% |      399 KiB → 0 B |   1 → 0 | `register(Object, Runnable)`                 | `java.lang.ref.Cleaner`                      |
| removed |   -395.101 KiB | <0.1% → 0.0% |      395 KiB → 0 B |   1 → 0 | `toArray()`                                  | `java.util.stream.IntPipeline`               |
| removed |    -391.64 KiB | <0.1% → 0.0% |      392 KiB → 0 B |   1 → 0 | `parseContextSpec(URL, String)`              | `sun.net.www.protocol.jar.Handler`           |
| removed |   -387.773 KiB | <0.1% → 0.0% |      388 KiB → 0 B |   1 → 0 | `compress(char[], int, int)`                 | `java.lang.StringUTF16`                      |
| removed |   -387.671 KiB | <0.1% → 0.0% |      388 KiB → 0 B |   1 → 0 | `<init>(ClassWriter)`                        | `jdk.internal.org.objectweb.asm.SymbolTable` |
| removed |   -271.312 KiB | <0.1% → 0.0% |      271 KiB → 0 B |   1 → 0 | `getNamedFunction(String, MethodType)`       | `java.lang.invoke.DirectMethodHandle`        |
| removed |   -152.875 KiB | <0.1% → 0.0% |      153 KiB → 0 B |   1 → 0 | `spliterator(double[], int, int, int)`       | `java.util.Spliterators`                     |

##### Ours

|  Change |        Delta |            % |               Size | Samples | Function                     | Location                                                   |
| ------: | -----------: | -----------: | -----------------: | ------: | ---------------------------- | ---------------------------------------------------------- |
|  -53.4% | -224.502 MiB |  1.1% → 0.5% |  420 MiB → 196 MiB |  7 → 12 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -96.2% | -139.705 MiB | 0.4% → <0.1% | 145 MiB → 5.57 MiB |   7 → 3 | `merge(Map, Map)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |  -78.532 MiB |  0.2% → 0.0% |     78.5 MiB → 0 B |   1 → 0 | `computeClusterAverages()`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -28.0% |  -30.176 MiB |  0.3% → 0.2% | 108 MiB → 77.6 MiB |  10 → 9 | `collectClusters(int[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |      % |                Size |       Samples | Location                |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------------- |
|  +0.5% | +160.222 MiB | 100.0% | 34.3 GiB → 34.5 GiB | 1,649 → 1,614 | `java.util.Arrays:3482` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |        Delta |      % |               Size | Samples | Location                                                       |
| ------: | -----------: | -----: | -----------------: | ------: | -------------------------------------------------------------- |
| +177.0% | +114.273 MiB | 100.0% | 64.6 MiB → 179 MiB |   2 → 9 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

|    Change |        Delta |      % |              Size | Samples | Location                     |
| --------: | -----------: | -----: | ----------------: | ------: | ---------------------------- |
| +14196.7% | +107.488 MiB | 100.0% | 775 KiB → 108 MiB |   2 → 5 | `java.util.stream.Nodes:168` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size | Samples | Location                                                       |
| -----: | ----------: | -----: | ------------------: | ------: | -------------------------------------------------------------- |
|  +7.8% | +97.769 MiB | 100.0% | 1.23 GiB → 1.32 GiB | 60 → 70 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |             % |           Size | Samples | Location                                                   |
| -----: | ----------: | ------------: | -------------: | ------: | ---------------------------------------------------------- |
|    new | +95.588 MiB | 0.0% → 100.0% | 0 B → 95.6 MiB |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:352` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |       Delta |      % |                Size | Samples | Location                                                      |
| ------: | ----------: | -----: | ------------------: | ------: | ------------------------------------------------------------- |
| +354.1% | +75.024 MiB | 100.0% | 21.2 MiB → 96.2 MiB |   1 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |               Size | Samples | Location                                                       |
| -----: | ----------: | -----: | -----------------: | ------: | -------------------------------------------------------------- |
| +74.1% | +50.971 MiB | 100.0% | 68.7 MiB → 120 MiB |   4 → 3 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |                Size | Samples | Location                                                      |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------------------------------------------------- |
| +47.9% | +19.082 MiB | 100.0% | 39.9 MiB → 58.9 MiB |   5 → 6 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |      % |                Size | Samples | Location                  |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------------- |
| +24.0% | +15.059 MiB | 100.0% | 62.6 MiB → 77.7 MiB |   6 → 9 | `java.util.ArrayList:239` |

##### `valueOf(double)` (`java.lang.Double`)

|  Change |       Delta |      % |                Size | Samples | Location               |
| ------: | ----------: | -----: | ------------------: | ------: | ---------------------- |
| +178.7% | +13.895 MiB | 100.0% | 7.78 MiB → 21.7 MiB | 21 → 32 | `java.lang.Double:773` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|  Change |      Delta |      % |                Size | Samples | Location                             |
| ------: | ---------: | -----: | ------------------: | ------: | ------------------------------------ |
| +277.0% | +9.945 MiB | 100.0% | 3.59 MiB → 13.5 MiB | 10 → 15 | `java.util.stream.IntPipeline$1:177` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|   Change |      Delta |      % |               Size | Samples | Location                          |
| -------: | ---------: | -----: | -----------------: | ------: | --------------------------------- |
| +1831.9% | +7.447 MiB | 100.0% | 416 KiB → 7.85 MiB |   2 → 9 | `java.util.stream.IntStream:1083` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |      Delta |             % |        Size | Samples | Location                                                      |
| -----: | ---------: | ------------: | ----------: | ------: | ------------------------------------------------------------- |
|    new | +5.996 MiB | 0.0% → 100.0% | 0 B → 6 MiB |   0 → 4 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

| Change |      Delta |      % |               Size | Samples | Location                           |
| -----: | ---------: | -----: | -----------------: | ------: | ---------------------------------- |
| +94.8% | +5.026 MiB | 100.0% | 5.3 MiB → 10.3 MiB | 14 → 11 | `java.util.stream.IntPipeline:174` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

| Change |      Delta |      % |                Size | Samples | Location                             |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------ |
| +85.2% | +4.797 MiB | 100.0% | 5.63 MiB → 10.4 MiB |      15 | `java.util.stream.StreamSupport:138` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

|  Change |      Delta |      % |                Size | Samples | Location                               |
| ------: | ---------: | -----: | ------------------: | ------: | -------------------------------------- |
| +190.5% | +4.497 MiB | 100.0% | 2.36 MiB → 6.86 MiB |  6 → 18 | `java.util.zip.InflaterInputStream:89` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |      Delta |             % |           Size | Samples | Location                                  |
| -----: | ---------: | ------------: | -------------: | ------: | ----------------------------------------- |
|    new | +4.064 MiB | 0.0% → 100.0% | 0 B → 4.06 MiB |   0 → 4 | `java.lang.invoke.DirectMethodHandle:501` |

##### `result()` (`scala.collection.immutable.VectorBuilder`)

| Change |      Delta |             % |           Size | Samples | Location                                        |
| -----: | ---------: | ------------: | -------------: | ------: | ----------------------------------------------- |
|    new | +2.576 MiB | 0.0% → 100.0% | 0 B → 2.58 MiB |   0 → 1 | `scala.collection.immutable.VectorBuilder:1898` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Samples | Location                |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- |
| +10.5% | +1.245 MiB | 100.0% | 11.9 MiB → 13.1 MiB | 24 → 33 | `java.util.Arrays:3541` |

##### `visitMethod(int, String, String, String, String[])` (`jdk.internal.org.objectweb.asm.ClassWriter`)

| Change |      Delta |             % |          Size | Samples | Location                                         |
| -----: | ---------: | ------------: | ------------: | ------: | ------------------------------------------------ |
|    new | +822.5 KiB | 0.0% → 100.0% | 0 B → 823 KiB |   0 → 2 | `jdk.internal.org.objectweb.asm.ClassWriter:500` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change |        Delta |             % |          Size | Samples | Location                     |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------- |
|    new | +807.109 KiB | 0.0% → 100.0% | 0 B → 807 KiB |   0 → 2 | `java.lang.StringLatin1:750` |

##### `readNBytes(int)` (`java.io.InputStream`)

|  Change |        Delta |             % |           Size | Samples | Location                  |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------- |
|     new |    +1.07 MiB | 0.0% → 100.0% | 0 B → 1.07 MiB |   0 → 2 | `java.io.InputStream:408` |
| removed | -515.351 KiB | 100.0% → 0.0% |  515 KiB → 0 B |   1 → 0 | `java.io.InputStream:448` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |             % |          Size | Samples | Location                            |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------- |
|    new | +467.843 KiB | 0.0% → 100.0% | 0 B → 468 KiB |   0 → 1 | `java.util.zip.ZipFile$Source:1733` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |        Delta |             % |          Size | Samples | Location                                         |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
|    new | +442.585 KiB | 0.0% → 100.0% | 0 B → 443 KiB |   0 → 1 | `jdk.internal.org.objectweb.asm.SymbolTable:807` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

| Change |        Delta |      % |                Size | Samples | Location                                      |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------------------------------- |
|  +2.0% | +433.437 KiB | 100.0% | 20.8 MiB → 21.3 MiB |       1 | `java.util.concurrent.ConcurrentHashMap:2301` |

##### `definePackage(String, String, String, String, String, String, String, URL)` (`java.lang.ClassLoader`)

| Change |        Delta |             % |          Size | Samples | Location                     |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------- |
|    new | +395.593 KiB | 0.0% → 100.0% | 0 B → 396 KiB |   0 → 1 | `java.lang.ClassLoader:2234` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |               Size | Samples | Location                                       |
| -----: | -----------: | -----: | -----------------: | ------: | ---------------------------------------------- |
| +89.9% | +722.843 KiB | 100.0% | 804 KiB → 1.49 MiB |   3 → 4 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `resize()` (`java.util.HashMap`)

| Change |       Delta |      % |              Size | Samples | Location                |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------------- |
| -71.7% | -323.54 MiB | 100.0% | 451 MiB → 127 MiB |   9 → 6 | `java.util.HashMap:710` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |              Size | Samples | Location                                        |
| -----: | -----------: | -----: | ----------------: | ------: | ----------------------------------------------- |
| -53.4% | -224.502 MiB | 100.0% | 420 MiB → 196 MiB |  7 → 12 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

|  Change |        Delta |             % |          Size | Samples | Location                     |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------- |
| removed | -158.634 MiB | 100.0% → 0.0% | 159 MiB → 0 B |   1 → 0 | `java.util.jar.Manifest:332` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |               Size | Samples | Location                                        |
| -----: | -----------: | -----: | -----------------: | ------: | ----------------------------------------------- |
| -96.2% | -139.705 MiB | 100.0% | 145 MiB → 5.57 MiB |   7 → 3 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |       Delta |             % |           Size | Samples | Location                                                   |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------------------------------------------- |
| removed | -78.532 MiB | 100.0% → 0.0% | 78.5 MiB → 0 B |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:314` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |      % |              Size | Samples | Location                 |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------ |
| -25.6% | -35.927 MiB | 100.0% | 141 MiB → 105 MiB |  16 → 3 | `java.util.HashMap:1909` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |               Size | Samples | Location                                                       |
| -----: | ----------: | -----: | -----------------: | ------: | -------------------------------------------------------------- |
| -28.0% | -30.176 MiB | 100.0% | 108 MiB → 77.6 MiB |  10 → 9 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|  Change |      Delta |             % |           Size | Samples | Location                |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------- |
| removed | -9.894 MiB | 100.0% → 0.0% | 9.89 MiB → 0 B |  15 → 0 | `java.util.Arrays:3513` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

|  Change |      Delta |             % |           Size | Samples | Location                          |
| ------: | ---------: | ------------: | -------------: | ------: | --------------------------------- |
| removed | -2.923 MiB | 100.0% → 0.0% | 2.92 MiB → 0 B |   1 → 0 | `java.util.HashMap$EntrySet:1106` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |      Delta |      % |               Size | Samples | Location                |
| -----: | ---------: | -----: | -----------------: | ------: | ----------------------- |
| -88.6% | -2.881 MiB | 100.0% | 3.25 MiB → 381 KiB |   5 → 1 | `java.util.Arrays:3863` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

| Change |        Delta |      % |              Size | Samples | Location                       |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------------------ |
| -72.0% | -671.289 KiB | 100.0% | 933 KiB → 262 KiB |   2 → 1 | `java.util.LinkedHashMap:1078` |

##### `getClassLoadingLock(String)` (`java.lang.ClassLoader`)

|  Change |        Delta |             % |          Size | Samples | Location                    |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------- |
| removed | -662.109 KiB | 100.0% → 0.0% | 662 KiB → 0 B |   2 → 0 | `java.lang.ClassLoader:680` |

##### `entrySet()` (`java.util.HashMap`)

|  Change |        Delta |             % |          Size | Samples | Location                 |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------ |
| removed | -421.843 KiB | 100.0% → 0.0% | 422 KiB → 0 B |   1 → 0 | `java.util.HashMap:1099` |

##### `replace(byte[], char, char)` (`java.lang.StringLatin1`)

| Change |      Delta |      % |              Size | Samples | Location                     |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------- |
| -77.6% | -415.5 KiB | 100.0% | 535 KiB → 120 KiB |       1 | `java.lang.StringLatin1:317` |

##### `newString(byte[], long)` (`java.lang.StringConcatHelper`)

|  Change |        Delta |             % |          Size | Samples | Location                           |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------- |
| removed | -414.851 KiB | 100.0% → 0.0% | 415 KiB → 0 B |   1 → 0 | `java.lang.StringConcatHelper:400` |

##### `transferTo(OutputStream)` (`java.io.InputStream`)

|  Change |        Delta |             % |          Size | Samples | Location                  |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------- |
| removed | -407.671 KiB | 100.0% → 0.0% | 408 KiB → 0 B |   1 → 0 | `java.io.InputStream:794` |

##### `register(Object, Runnable)` (`java.lang.ref.Cleaner`)

|  Change |        Delta |             % |          Size | Samples | Location                    |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------- |
| removed | -398.773 KiB | 100.0% → 0.0% | 399 KiB → 0 B |   1 → 0 | `java.lang.ref.Cleaner:224` |

##### `toArray()` (`java.util.stream.IntPipeline`)

|  Change |        Delta |             % |          Size | Samples | Location                           |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------- |
| removed | -395.101 KiB | 100.0% → 0.0% | 395 KiB → 0 B |   1 → 0 | `java.util.stream.IntPipeline:562` |

##### `parseContextSpec(URL, String)` (`sun.net.www.protocol.jar.Handler`)

|  Change |       Delta |             % |          Size | Samples | Location                               |
| ------: | ----------: | ------------: | ------------: | ------: | -------------------------------------- |
| removed | -391.64 KiB | 100.0% → 0.0% | 392 KiB → 0 B |   1 → 0 | `sun.net.www.protocol.jar.Handler:213` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

|  Change |        Delta |             % |          Size | Samples | Location                    |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------- |
| removed | -387.773 KiB | 100.0% → 0.0% | 388 KiB → 0 B |   1 → 0 | `java.lang.StringUTF16:211` |

##### `<init>(ClassWriter)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |        Delta |             % |          Size | Samples | Location                                         |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
| removed | -387.671 KiB | 100.0% → 0.0% | 388 KiB → 0 B |   1 → 0 | `jdk.internal.org.objectweb.asm.SymbolTable:158` |

##### `getNamedFunction(String, MethodType)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |        Delta |             % |          Size | Samples | Location                                  |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------- |
| removed | -271.312 KiB | 100.0% → 0.0% | 271 KiB → 0 B |   1 → 0 | `java.lang.invoke.DirectMethodHandle:922` |

##### `spliterator(double[], int, int, int)` (`java.util.Spliterators`)

|  Change |        Delta |             % |          Size | Samples | Location                     |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------- |
| removed | -152.875 KiB | 100.0% → 0.0% | 153 KiB → 0 B |   1 → 0 | `java.util.Spliterators:372` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |      Delta |             % |                Size |   Samples | Caller      | Location              |
| -----: | ---------: | ------------: | ------------------: | --------: | ----------- | --------------------- |
|  +8.5% | +1.489 GiB | 50.7% → 54.8% | 17.4 GiB → 18.9 GiB | 817 → 830 | `toArray()` | `java.util.ArrayList` |
|  -7.9% | -1.332 GiB | 49.3% → 45.2% | 16.9 GiB → 15.6 GiB | 832 → 784 | `grow(int)` | `java.util.ArrayList` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |        Delta |      % |               Size | Samples | Caller      | Location                                               |
| ------: | -----------: | -----: | -----------------: | ------: | ----------- | ------------------------------------------------------ |
| +177.0% | +114.273 MiB | 100.0% | 64.6 MiB → 179 MiB |   2 → 9 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

|    Change |        Delta |      % |              Size | Samples | Caller                               | Location                             |
| --------: | -----------: | -----: | ----------------: | ------: | ------------------------------------ | ------------------------------------ |
| +14196.7% | +107.488 MiB | 100.0% | 775 KiB → 108 MiB |   2 → 5 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size | Samples | Caller              | Location                                                   |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------- | ---------------------------------------------------------- |
|  +7.8% | +97.769 MiB | 100.0% | 1.23 GiB → 1.32 GiB | 60 → 70 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |             % |           Size | Samples | Caller      | Location                                               |
| -----: | ----------: | ------------: | -------------: | ------: | ----------- | ------------------------------------------------------ |
|    new | +95.588 MiB | 0.0% → 100.0% | 0 B → 95.6 MiB |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |       Delta |      % |                Size | Samples | Caller                               | Location                                                  |
| ------: | ----------: | -----: | ------------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| +354.1% | +75.024 MiB | 100.0% | 21.2 MiB → 96.2 MiB |   1 → 2 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |               Size | Samples | Caller          | Location                                                                              |
| -----: | ----------: | -----: | -----------------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| +74.1% | +50.971 MiB | 100.0% | 68.7 MiB → 120 MiB |   4 → 3 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |                Size | Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ------------------: | ------: | ----------- | ------------------------------------------------------ |
| +47.9% | +19.082 MiB | 100.0% | 39.9 MiB → 58.9 MiB |   5 → 6 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |      % |                Size | Samples | Caller   | Location              |
| -----: | ----------: | -----: | ------------------: | ------: | -------- | --------------------- |
| +24.0% | +15.059 MiB | 100.0% | 62.6 MiB → 77.7 MiB |   6 → 9 | `grow()` | `java.util.ArrayList` |

##### `valueOf(double)` (`java.lang.Double`)

|  Change |       Delta |      % |                Size | Samples | Caller                                           | Location                                    |
| ------: | ----------: | -----: | ------------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +178.7% | +13.895 MiB | 100.0% | 7.78 MiB → 21.7 MiB | 21 → 32 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|  Change |      Delta |      % |                Size | Samples | Caller           | Location                            |
| ------: | ---------: | -----: | ------------------: | ------: | ---------------- | ----------------------------------- |
| +277.0% | +9.945 MiB | 100.0% | 3.59 MiB → 13.5 MiB | 10 → 15 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|   Change |      Delta |      % |               Size | Samples | Caller                                           | Location                                    |
| -------: | ---------: | -----: | -----------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +1831.9% | +7.447 MiB | 100.0% | 416 KiB → 7.85 MiB |   2 → 9 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |      Delta |             % |        Size | Samples | Caller              | Location                                                  |
| -----: | ---------: | ------------: | ----------: | ------: | ------------------- | --------------------------------------------------------- |
|    new | +5.996 MiB | 0.0% → 100.0% | 0 B → 6 MiB |   0 → 4 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

| Change |      Delta |      % |               Size | Samples | Caller                  | Location                       |
| -----: | ---------: | -----: | -----------------: | ------: | ----------------------- | ------------------------------ |
| +94.8% | +5.026 MiB | 100.0% | 5.3 MiB → 10.3 MiB | 14 → 11 | `mapToObj(IntFunction)` | `java.util.stream.IntPipeline` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

| Change |      Delta |      % |                Size | Samples | Caller            | Location                     |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------- | ---------------------------- |
| +85.2% | +4.797 MiB | 100.0% | 5.63 MiB → 10.4 MiB |      15 | `range(int, int)` | `java.util.stream.IntStream` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

|  Change |      Delta |      % |                Size | Samples | Caller                                                                                  | Location                                           |
| ------: | ---------: | -----: | ------------------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| +190.5% | +4.497 MiB | 100.0% | 2.36 MiB → 6.86 MiB |  6 → 18 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |      Delta |             % |           Size | Samples | Caller                                       | Location                                             |
| -----: | ---------: | ------------: | -------------: | ------: | -------------------------------------------- | ---------------------------------------------------- |
|    new | +4.064 MiB | 0.0% → 100.0% | 0 B → 4.06 MiB |   0 → 4 | `newInvokeSpecial(Object, int, int, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001220000` |

##### `result()` (`scala.collection.immutable.VectorBuilder`)

| Change |      Delta |             % |           Size | Samples | Caller     | Location                                   |
| -----: | ---------: | ------------: | -------------: | ------: | ---------- | ------------------------------------------ |
|    new | +2.576 MiB | 0.0% → 100.0% | 0 B → 2.58 MiB |   0 → 1 | `result()` | `scala.collection.immutable.VectorBuilder` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

|  Change |      Delta |      % |               Size | Samples | Caller                     | Location                              |
| ------: | ---------: | -----: | -----------------: | ------: | -------------------------- | ------------------------------------- |
| +360.0% | +1.419 MiB | 100.0% | 404 KiB → 1.81 MiB |   1 → 5 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |        Delta |              % |                Size | Samples | Caller                        | Location                          |
| -----: | -----------: | -------------: | ------------------: | ------: | ----------------------------- | --------------------------------- |
|    new |   +1.966 MiB |   0.0% → 15.0% |      0 B → 1.97 MiB |   0 → 5 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |
|  -6.1% | -738.796 KiB | 100.0% → 85.0% | 11.9 MiB → 11.1 MiB | 24 → 28 | `getBytes()`                  | `jdk.internal.loader.Resource`    |

##### `visitMethod(int, String, String, String, String[])` (`jdk.internal.org.objectweb.asm.ClassWriter`)

| Change |        Delta |            % |          Size | Samples | Caller                  | Location                                       |
| -----: | -----------: | -----------: | ------------: | ------: | ----------------------- | ---------------------------------------------- |
|    new | +427.968 KiB | 0.0% → 52.0% | 0 B → 428 KiB |   0 → 1 | `generateConstructor()` | `java.lang.invoke.InnerClassLambdaMetafactory` |
|    new | +394.531 KiB | 0.0% → 48.0% | 0 B → 395 KiB |   0 → 1 | `generateInnerClass()`  | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change |        Delta |             % |          Size | Samples | Caller                | Location           |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------- | ------------------ |
|    new | +807.109 KiB | 0.0% → 100.0% | 0 B → 807 KiB |   0 → 2 | `substring(int, int)` | `java.lang.String` |

##### `readNBytes(int)` (`java.io.InputStream`)

|  Change |       Delta |      % |               Size | Samples | Caller           | Location              |
| ------: | ----------: | -----: | -----------------: | ------: | ---------------- | --------------------- |
| +112.7% | +580.71 KiB | 100.0% | 515 KiB → 1.07 MiB |   1 → 2 | `readAllBytes()` | `java.io.InputStream` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |             % |          Size | Samples | Caller                                          | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- | ------------------------------ |
|    new | +467.843 KiB | 0.0% → 100.0% | 0 B → 468 KiB |   0 → 1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |        Delta |             % |          Size | Samples | Caller                                                            | Location                                      |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------------------------- | --------------------------------------------- |
|    new | +442.585 KiB | 0.0% → 100.0% | 0 B → 443 KiB |   0 → 1 | `<init>(SymbolTable, int, String, String, String, String[], int)` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

| Change |        Delta |      % |                Size | Samples | Caller                            | Location                                 |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------------------- | ---------------------------------------- |
|  +2.0% | +433.437 KiB | 100.0% | 20.8 MiB → 21.3 MiB |       1 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `definePackage(String, String, String, String, String, String, String, URL)` (`java.lang.ClassLoader`)

| Change |        Delta |             % |          Size | Samples | Caller                                 | Location                  |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------- | ------------------------- |
|    new | +395.593 KiB | 0.0% → 100.0% | 0 B → 396 KiB |   0 → 1 | `definePackage(String, Manifest, URL)` | `java.net.URLClassLoader` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |        Delta |             % |           Size | Samples | Caller       | Location                                                               |
| ------: | -----------: | ------------: | -------------: | ------: | ------------ | ---------------------------------------------------------------------- |
|     new |   +1.491 MiB | 0.0% → 100.0% | 0 B → 1.49 MiB |   0 → 4 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d960` |
| removed | -803.976 KiB | 100.0% → 0.0% |  804 KiB → 0 B |   3 → 0 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a1d48` |

##### `resize()` (`java.util.HashMap`)

| Change |        Delta |             % |               Size | Samples | Caller                                          | Location            |
| -----: | -----------: | ------------: | -----------------: | ------: | ----------------------------------------------- | ------------------- |
| -98.2% | -223.282 MiB |  50.4% → 3.3% | 227 MiB → 4.17 MiB |   5 → 2 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
| -44.9% | -100.258 MiB | 49.6% → 96.7% |  224 MiB → 123 MiB |       4 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |              Size | Samples | Caller                  | Location                                                               |
| -----: | -----------: | -----: | ----------------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| -53.4% | -224.502 MiB | 100.0% | 420 MiB → 196 MiB |  7 → 12 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

|  Change |        Delta |             % |          Size | Samples | Caller                                     | Location                 |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------ | ------------------------ |
| removed | -158.634 MiB | 100.0% → 0.0% | 159 MiB → 0 B |   1 → 0 | `<init>(JarVerifier, InputStream, String)` | `java.util.jar.Manifest` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |               Size | Samples | Caller                     | Location                                                   |
| -----: | -----------: | -----: | -----------------: | ------: | -------------------------- | ---------------------------------------------------------- |
| -96.2% | -139.705 MiB | 100.0% | 145 MiB → 5.57 MiB |   7 → 3 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |       Delta |             % |           Size | Samples | Caller              | Location                                               |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------- | ------------------------------------------------------ |
| removed | -78.532 MiB | 100.0% → 0.0% | 78.5 MiB → 0 B |   1 → 0 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |             % |                Size | Samples | Caller                                          | Location            |
| -----: | ----------: | ------------: | ------------------: | ------: | ----------------------------------------------- | ------------------- |
| -17.6% | -20.309 MiB | 81.9% → 90.7% |  115 MiB → 94.9 MiB |   8 → 2 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
| -61.5% | -15.617 MiB |  18.1% → 9.3% | 25.4 MiB → 9.78 MiB |   8 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |               Size | Samples | Caller              | Location                                                   |
| -----: | ----------: | -----: | -----------------: | ------: | ------------------- | ---------------------------------------------------------- |
| -28.0% | -30.176 MiB | 100.0% | 108 MiB → 77.6 MiB |  10 → 9 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|  Change |      Delta |             % |           Size | Samples | Caller                  | Location           |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------- | ------------------ |
| removed | -9.894 MiB | 100.0% → 0.0% | 9.89 MiB → 0 B |  15 → 0 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

|  Change |      Delta |             % |           Size | Samples | Caller                        | Location            |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------------- | ------------------- |
| removed | -2.923 MiB | 100.0% → 0.0% | 2.92 MiB → 0 B |   1 → 0 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |      Delta |      % |               Size | Samples | Caller                          | Location           |
| -----: | ---------: | -----: | -----------------: | ------: | ------------------------------- | ------------------ |
| -88.6% | -2.881 MiB | 100.0% | 3.25 MiB → 381 KiB |   5 → 1 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `fillInStackTrace(int)` (`java.lang.Throwable`)

| Change |          Delta |      % |               Size | Samples | Caller               | Location              |
| -----: | -------------: | -----: | -----------------: | ------: | -------------------- | --------------------- |
| -72.5% | -1,007.875 KiB | 100.0% | 1.36 MiB → 381 KiB |       1 | `fillInStackTrace()` | `java.lang.Throwable` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

| Change |        Delta |      % |              Size | Samples | Caller        | Location                   |
| -----: | -----------: | -----: | ----------------: | ------: | ------------- | -------------------------- |
| -72.0% | -671.289 KiB | 100.0% | 933 KiB → 262 KiB |   2 → 1 | `<init>(int)` | `java.util.jar.Attributes` |

##### `getClassLoadingLock(String)` (`java.lang.ClassLoader`)

|  Change |        Delta |            % |          Size | Samples | Caller                             | Location                                 |
| ------: | -----------: | -----------: | ------------: | ------: | ---------------------------------- | ---------------------------------------- |
| removed | -396.304 KiB | 59.9% → 0.0% | 396 KiB → 0 B |   1 → 0 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |
| removed | -265.804 KiB | 40.1% → 0.0% | 266 KiB → 0 B |   1 → 0 | `loadClass(String, boolean)`       | `java.lang.ClassLoader`                  |

##### `entrySet()` (`java.util.HashMap`)

|  Change |        Delta |             % |          Size | Samples | Caller                        | Location            |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------- | ------------------- |
| removed | -421.843 KiB | 100.0% → 0.0% | 422 KiB → 0 B |   1 → 0 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `replace(byte[], char, char)` (`java.lang.StringLatin1`)

| Change |      Delta |      % |              Size | Samples | Caller                | Location           |
| -----: | ---------: | -----: | ----------------: | ------: | --------------------- | ------------------ |
| -77.6% | -415.5 KiB | 100.0% | 535 KiB → 120 KiB |       1 | `replace(char, char)` | `java.lang.String` |

##### `newString(byte[], long)` (`java.lang.StringConcatHelper`)

|  Change |        Delta |             % |          Size | Samples | Caller                         | Location                       |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------ | ------------------------------ |
| removed | -414.851 KiB | 100.0% → 0.0% | 415 KiB → 0 B |   1 → 0 | `simpleConcat(Object, Object)` | `java.lang.StringConcatHelper` |

##### `transferTo(OutputStream)` (`java.io.InputStream`)

|  Change |        Delta |             % |          Size | Samples | Caller                                  | Location              |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------- | --------------------- |
| removed | -407.671 KiB | 100.0% → 0.0% | 408 KiB → 0 B |   1 → 0 | `copy(InputStream, Path, CopyOption[])` | `java.nio.file.Files` |

##### `register(Object, Runnable)` (`java.lang.ref.Cleaner`)

|  Change |        Delta |             % |          Size | Samples | Caller                                                                                  | Location                                           |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| removed | -398.773 KiB | 100.0% → 0.0% | 399 KiB → 0 B |   1 → 0 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `toArray()` (`java.util.stream.IntPipeline`)

|  Change |        Delta |             % |          Size | Samples | Caller          | Location                       |
| ------: | -----------: | ------------: | ------------: | ------: | --------------- | ------------------------------ |
| removed | -395.101 KiB | 100.0% → 0.0% | 395 KiB → 0 B |   1 → 0 | `parse(String)` | `org.renaissance.core.Version` |

##### `parseContextSpec(URL, String)` (`sun.net.www.protocol.jar.Handler`)

|  Change |       Delta |             % |          Size | Samples | Caller                            | Location                           |
| ------: | ----------: | ------------: | ------------: | ------: | --------------------------------- | ---------------------------------- |
| removed | -391.64 KiB | 100.0% → 0.0% | 392 KiB → 0 B |   1 → 0 | `parseURL(URL, String, int, int)` | `sun.net.www.protocol.jar.Handler` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

|  Change |        Delta |             % |          Size | Samples | Caller                           | Location           |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------- | ------------------ |
| removed | -387.773 KiB | 100.0% → 0.0% | 388 KiB → 0 B |   1 → 0 | `<init>(char[], int, int, Void)` | `java.lang.String` |

##### `<init>(ClassWriter)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |        Delta |             % |          Size | Samples | Caller                     | Location                                     |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------- | -------------------------------------------- |
| removed | -387.671 KiB | 100.0% → 0.0% | 388 KiB → 0 B |   1 → 0 | `<init>(ClassReader, int)` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `getNamedFunction(String, MethodType)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |        Delta |             % |          Size | Samples | Caller                 | Location                              |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------- | ------------------------------------- |
| removed | -271.312 KiB | 100.0% → 0.0% | 271 KiB → 0 B |   1 → 0 | `createFunction(byte)` | `java.lang.invoke.DirectMethodHandle` |

##### `spliterator(double[], int, int, int)` (`java.util.Spliterators`)

|  Change |        Delta |             % |          Size | Samples | Caller                            | Location           |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------- | ------------------ |
| removed | -152.875 KiB | 100.0% → 0.0% | 153 KiB → 0 B |   1 → 0 | `spliterator(double[], int, int)` | `java.util.Arrays` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|   Change |        Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                               |
| -------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    +8.5% |   +1.487 GiB | 46.6% → 50.9% | 17.4 GiB → 18.9 GiB |     820 → 830 | `toArray()`                                                                                                            | `java.util.ArrayList`                                                  |
|    +1.4% | +498.239 MiB | 91.9% → 93.7% | 34.3 GiB → 34.8 GiB | 1,692 → 1,656 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
|    +1.4% | +498.239 MiB | 91.9% → 93.7% | 34.3 GiB → 34.8 GiB | 1,692 → 1,656 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                            |
|   +12.8% | +446.774 MiB |  9.1% → 10.4% | 3.42 GiB → 3.85 GiB |     206 → 197 | `grow()`                                                                                                               | `java.util.ArrayList`                                                  |
|   +12.8% | +446.774 MiB |  9.1% → 10.4% | 3.42 GiB → 3.85 GiB |     206 → 197 | `add(Object, Object[], int)`                                                                                           | `java.util.ArrayList`                                                  |
|   +12.8% | +446.774 MiB |  9.1% → 10.4% | 3.42 GiB → 3.85 GiB |     206 → 197 | `add(Object)`                                                                                                          | `java.util.ArrayList`                                                  |
|   +11.1% | +436.668 MiB | 10.3% → 11.5% | 3.85 GiB → 4.27 GiB |     218 → 181 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                                                              | `java.util.concurrent.ForkJoinPool`                                    |
|    +0.9% | +327.319 MiB | 92.6% → 93.9% | 34.6 GiB → 34.9 GiB | 1,699 → 1,659 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                                    |
|    +6.1% | +319.685 MiB | 13.8% → 14.7% | 5.15 GiB → 5.46 GiB |     293 → 282 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|    +5.5% | +221.916 MiB | 10.5% → 11.1% | 3.92 GiB → 4.14 GiB |     233 → 212 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|      new | +194.066 MiB |   0.0% → 0.5% |       0 B → 194 MiB |       0 → 129 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| +2202.3% | +171.236 MiB |  <0.1% → 0.5% |  7.78 MiB → 179 MiB |       21 → 99 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d4f0` |
|  +669.2% |   +164.9 MiB |   0.1% → 0.5% |  24.6 MiB → 190 MiB |      68 → 123 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +654.3% | +163.706 MiB |   0.1% → 0.5% |    25 MiB → 189 MiB |      69 → 121 | `copyInto(Sink, Spliterator)`                                                                                          | `java.util.stream.AbstractPipeline`                                    |
|  +654.3% | +163.706 MiB |   0.1% → 0.5% |    25 MiB → 189 MiB |      69 → 121 | `wrapAndCopyInto(Sink, Spliterator)`                                                                                   | `java.util.stream.AbstractPipeline`                                    |
|  +654.3% | +163.706 MiB |   0.1% → 0.5% |    25 MiB → 189 MiB |      69 → 121 | `evaluateSequential(PipelineHelper, Spliterator)`                                                                      | `java.util.stream.ReduceOps$ReduceOp`                                  |
|  +654.3% | +163.706 MiB |   0.1% → 0.5% |    25 MiB → 189 MiB |      69 → 121 | `evaluate(TerminalOp)`                                                                                                 | `java.util.stream.AbstractPipeline`                                    |
|  +654.3% | +163.706 MiB |   0.1% → 0.5% |    25 MiB → 189 MiB |      69 → 121 | `collect(Collector)`                                                                                                   | `java.util.stream.ReferencePipeline`                                   |
|  +634.9% | +156.432 MiB |   0.1% → 0.5% |  24.6 MiB → 181 MiB |      68 → 100 | `accept(int)`                                                                                                          | `java.util.stream.IntPipeline$1$1`                                     |
|  +634.9% | +156.432 MiB |   0.1% → 0.5% |  24.6 MiB → 181 MiB |      68 → 100 | `forEachRemaining(IntConsumer)`                                                                                        | `java.util.stream.Streams$RangeIntSpliterator`                         |

##### Standard library

|   Change |        Delta |             % |                Size |       Samples | Function                                                  | Location                                       |
| -------: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------- |
|    +8.5% |   +1.487 GiB | 46.6% → 50.9% | 17.4 GiB → 18.9 GiB |     820 → 830 | `toArray()`                                               | `java.util.ArrayList`                          |
|    +1.4% | +498.239 MiB | 91.9% → 93.7% | 34.3 GiB → 34.8 GiB | 1,692 → 1,656 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`            |
|    +1.4% | +498.239 MiB | 91.9% → 93.7% | 34.3 GiB → 34.8 GiB | 1,692 → 1,656 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`    |
|   +12.8% | +446.774 MiB |  9.1% → 10.4% | 3.42 GiB → 3.85 GiB |     206 → 197 | `grow()`                                                  | `java.util.ArrayList`                          |
|   +12.8% | +446.774 MiB |  9.1% → 10.4% | 3.42 GiB → 3.85 GiB |     206 → 197 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                          |
|   +12.8% | +446.774 MiB |  9.1% → 10.4% | 3.42 GiB → 3.85 GiB |     206 → 197 | `add(Object)`                                             | `java.util.ArrayList`                          |
|   +11.1% | +436.668 MiB | 10.3% → 11.5% | 3.85 GiB → 4.27 GiB |     218 → 181 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`            |
|    +0.9% | +327.319 MiB | 92.6% → 93.9% | 34.6 GiB → 34.9 GiB | 1,699 → 1,659 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`            |
|  +654.3% | +163.706 MiB |   0.1% → 0.5% |    25 MiB → 189 MiB |      69 → 121 | `copyInto(Sink, Spliterator)`                             | `java.util.stream.AbstractPipeline`            |
|  +654.3% | +163.706 MiB |   0.1% → 0.5% |    25 MiB → 189 MiB |      69 → 121 | `wrapAndCopyInto(Sink, Spliterator)`                      | `java.util.stream.AbstractPipeline`            |
|  +654.3% | +163.706 MiB |   0.1% → 0.5% |    25 MiB → 189 MiB |      69 → 121 | `evaluateSequential(PipelineHelper, Spliterator)`         | `java.util.stream.ReduceOps$ReduceOp`          |
|  +654.3% | +163.706 MiB |   0.1% → 0.5% |    25 MiB → 189 MiB |      69 → 121 | `evaluate(TerminalOp)`                                    | `java.util.stream.AbstractPipeline`            |
|  +654.3% | +163.706 MiB |   0.1% → 0.5% |    25 MiB → 189 MiB |      69 → 121 | `collect(Collector)`                                      | `java.util.stream.ReferencePipeline`           |
|  +634.9% | +156.432 MiB |   0.1% → 0.5% |  24.6 MiB → 181 MiB |      68 → 100 | `accept(int)`                                             | `java.util.stream.IntPipeline$1$1`             |
|  +634.9% | +156.432 MiB |   0.1% → 0.5% |  24.6 MiB → 181 MiB |      68 → 100 | `forEachRemaining(IntConsumer)`                           | `java.util.stream.Streams$RangeIntSpliterator` |
|  +634.9% | +156.432 MiB |   0.1% → 0.5% |  24.6 MiB → 181 MiB |      68 → 100 | `forEachRemaining(Consumer)`                              | `java.util.Spliterator$OfInt`                  |
|    +0.4% | +150.327 MiB | 91.9% → 92.8% | 34.3 GiB → 34.5 GiB | 1,664 → 1,614 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                             |
| +1022.9% | +132.035 MiB |  <0.1% → 0.4% |  12.9 MiB → 145 MiB |       36 → 56 | `evaluate(Spliterator, boolean, IntFunction)`             | `java.util.stream.AbstractPipeline`            |
| +1022.9% | +132.035 MiB |  <0.1% → 0.4% |  12.9 MiB → 145 MiB |       36 → 56 | `evaluateToArrayNode(IntFunction)`                        | `java.util.stream.AbstractPipeline`            |
| +1022.9% | +132.035 MiB |  <0.1% → 0.4% |  12.9 MiB → 145 MiB |       36 → 56 | `toArray(IntFunction)`                                    | `java.util.stream.ReferencePipeline`           |

##### Ours

|   Change |        Delta |             % |                Size |   Samples | Function                                                                                                               | Location                                                                              |
| -------: | -----------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|    +6.1% | +319.685 MiB | 13.8% → 14.7% | 5.15 GiB → 5.46 GiB | 293 → 282 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|    +5.5% | +221.916 MiB | 10.5% → 11.1% | 3.92 GiB → 4.14 GiB | 233 → 212 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|      new | +194.066 MiB |   0.0% → 0.5% |       0 B → 194 MiB |   0 → 129 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
| +2202.3% | +171.236 MiB |  <0.1% → 0.5% |  7.78 MiB → 179 MiB |   21 → 99 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d4f0`                |
|  +669.2% |   +164.9 MiB |   0.1% → 0.5% |  24.6 MiB → 190 MiB |  68 → 123 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
|  +634.9% | +156.432 MiB |   0.1% → 0.5% |  24.6 MiB → 181 MiB |  68 → 100 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +626.5% | +154.371 MiB |   0.1% → 0.5% |  24.6 MiB → 179 MiB |   68 → 99 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +177.0% | +114.273 MiB |   0.2% → 0.5% |  64.6 MiB → 179 MiB |     2 → 9 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|    +7.8% |  +97.769 MiB |   3.3% → 3.6% | 1.23 GiB → 1.32 GiB |   60 → 70 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|      new |  +95.588 MiB |   0.0% → 0.3% |      0 B → 95.6 MiB |     0 → 1 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +354.1% |  +75.024 MiB |   0.1% → 0.3% | 21.2 MiB → 96.2 MiB |     1 → 2 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +354.1% |  +75.024 MiB |   0.1% → 0.3% | 21.2 MiB → 96.2 MiB |     1 → 2 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +354.1% |  +75.024 MiB |   0.1% → 0.3% | 21.2 MiB → 96.2 MiB |     1 → 2 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +74.1% |  +50.971 MiB |   0.2% → 0.3% |  68.7 MiB → 120 MiB |     4 → 3 | `lambda$collectClusters$0(Double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +74.1% |  +50.971 MiB |   0.2% → 0.3% |  68.7 MiB → 120 MiB |     4 → 3 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0` |
| +2660.1% |  +20.885 MiB |  <0.1% → 0.1% |  804 KiB → 21.7 MiB |    3 → 32 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d728`                |
|   +47.9% |  +19.082 MiB |   0.1% → 0.2% | 39.9 MiB → 58.9 MiB |     5 → 6 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +178.7% |  +13.895 MiB |  <0.1% → 0.1% | 7.78 MiB → 21.7 MiB |   21 → 32 | `lambda$generateData$3(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|      new |   +7.652 MiB |  0.0% → <0.1% |      0 B → 7.65 MiB |    0 → 21 | `rowToArray$1(Map)`                                                                                                    | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
|      new |   +7.652 MiB |  0.0% → <0.1% |      0 B → 7.65 MiB |    0 → 21 | `setUpBeforeAll$$anonfun$1(Map)`                                                                                       | `org.renaissance.jdk.concurrent.FjKmeans`                                             |

#### Improvements

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |        Delta |             % |                Size |       Samples | Function                                  | Location                                                               |
| -----: | -----------: | ------------: | ------------------: | ------------: | ----------------------------------------- | ---------------------------------------------------------------------- |
|  -7.6% |   -1.926 GiB | 68.2% → 63.4% | 25.5 GiB → 23.6 GiB | 1,226 → 1,142 | `awaitDone(int, long)`                    | `java.util.concurrent.ForkJoinTask`                                    |
|  -7.6% |   -1.926 GiB | 68.2% → 63.4% | 25.5 GiB → 23.6 GiB | 1,226 → 1,142 | `join()`                                  | `java.util.concurrent.ForkJoinTask`                                    |
|  -5.6% |   -1.387 GiB | 66.3% → 62.9% | 24.8 GiB → 23.4 GiB | 1,204 → 1,130 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  -7.8% |   -1.326 GiB | 45.4% → 42.1% |   17 GiB → 15.7 GiB |     850 → 793 | `grow(int)`                               | `java.util.ArrayList`                                                  |
| -14.7% |   -1.167 GiB | 21.2% → 18.2% | 7.92 GiB → 6.76 GiB |     201 → 188 | `invoke()`                                | `java.util.concurrent.ForkJoinTask`                                    |
|  -2.3% | -764.471 MiB | 85.1% → 83.5% |   31.8 GiB → 31 GiB | 1,490 → 1,445 | `merge(Map, Map)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -2.3% | -764.471 MiB | 85.1% → 83.5% |   31.8 GiB → 31 GiB | 1,490 → 1,445 | `combineResults(Map, Map)`                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -2.3% | -764.471 MiB | 85.1% → 83.5% |   31.8 GiB → 31 GiB | 1,490 → 1,445 | `combineResults(Object, Object)`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -7.8% | -582.985 MiB | 19.6% → 18.2% | 7.31 GiB → 6.74 GiB |     192 → 179 | `lambda$run$0(int, List, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -7.8% | -582.985 MiB | 19.6% → 18.2% | 7.31 GiB → 6.74 GiB |     192 → 179 | `call()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70` |
|  -7.8% | -582.985 MiB | 19.6% → 18.2% | 7.31 GiB → 6.74 GiB |     192 → 179 | `exec()`                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|  -1.6% |  -505.89 MiB | 84.0% → 83.2% | 31.4 GiB → 30.9 GiB | 1,471 → 1,438 | `lambda$merge$6(List, List)`              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.6% |  -505.89 MiB | 84.0% → 83.2% | 31.4 GiB → 30.9 GiB | 1,471 → 1,438 | `apply(Object, Object)`                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0` |
|  -1.6% |  -505.89 MiB | 84.0% → 83.2% | 31.4 GiB → 30.9 GiB | 1,471 → 1,438 | `merge(Object, Object, BiFunction)`       | `java.util.HashMap`                                                    |
|  -1.6% |  -505.89 MiB | 84.0% → 83.2% | 31.4 GiB → 30.9 GiB | 1,471 → 1,438 | `lambda$merge$7(Map, Object, List)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.6% |  -505.89 MiB | 84.0% → 83.2% | 31.4 GiB → 30.9 GiB | 1,471 → 1,438 | `accept(Object, Object)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30` |
|  -1.6% |  -505.89 MiB | 84.0% → 83.2% | 31.4 GiB → 30.9 GiB | 1,471 → 1,438 | `forEach(BiConsumer)`                     | `java.util.HashMap`                                                    |
| -71.7% |  -323.54 MiB |   1.2% → 0.3% |   451 MiB → 127 MiB |         9 → 6 | `resize()`                                | `java.util.HashMap`                                                    |
|  -0.6% | -213.503 MiB |         99.4% | 37.1 GiB → 36.9 GiB | 1,793 → 1,749 | `compute()`                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -0.6% | -213.503 MiB |         99.4% | 37.1 GiB → 36.9 GiB | 1,793 → 1,749 | `exec()`                                  | `java.util.concurrent.RecursiveTask`                                   |

##### Standard library

| Change |        Delta |             % |                Size |       Samples | Function                                   | Location                                            |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------ | --------------------------------------------------- |
|  -7.6% |   -1.926 GiB | 68.2% → 63.4% | 25.5 GiB → 23.6 GiB | 1,226 → 1,142 | `awaitDone(int, long)`                     | `java.util.concurrent.ForkJoinTask`                 |
|  -7.6% |   -1.926 GiB | 68.2% → 63.4% | 25.5 GiB → 23.6 GiB | 1,226 → 1,142 | `join()`                                   | `java.util.concurrent.ForkJoinTask`                 |
|  -5.6% |   -1.387 GiB | 66.3% → 62.9% | 24.8 GiB → 23.4 GiB | 1,204 → 1,130 | `tryRemoveAndExec(ForkJoinTask, boolean)`  | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|  -7.8% |   -1.326 GiB | 45.4% → 42.1% |   17 GiB → 15.7 GiB |     850 → 793 | `grow(int)`                                | `java.util.ArrayList`                               |
| -14.7% |   -1.167 GiB | 21.2% → 18.2% | 7.92 GiB → 6.76 GiB |     201 → 188 | `invoke()`                                 | `java.util.concurrent.ForkJoinTask`                 |
|  -7.8% | -582.985 MiB | 19.6% → 18.2% | 7.31 GiB → 6.74 GiB |     192 → 179 | `exec()`                                   | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  -1.6% |  -505.89 MiB | 84.0% → 83.2% | 31.4 GiB → 30.9 GiB | 1,471 → 1,438 | `merge(Object, Object, BiFunction)`        | `java.util.HashMap`                                 |
|  -1.6% |  -505.89 MiB | 84.0% → 83.2% | 31.4 GiB → 30.9 GiB | 1,471 → 1,438 | `forEach(BiConsumer)`                      | `java.util.HashMap`                                 |
| -71.7% |  -323.54 MiB |   1.2% → 0.3% |   451 MiB → 127 MiB |         9 → 6 | `resize()`                                 | `java.util.HashMap`                                 |
|  -0.6% | -213.503 MiB |         99.4% | 37.1 GiB → 36.9 GiB | 1,793 → 1,749 | `exec()`                                   | `java.util.concurrent.RecursiveTask`                |
|  -0.6% | -213.503 MiB |         99.4% | 37.1 GiB → 36.9 GiB | 1,793 → 1,749 | `doExec()`                                 | `java.util.concurrent.ForkJoinTask`                 |
| -46.8% |  -192.62 MiB |   1.1% → 0.6% |   411 MiB → 219 MiB |        17 → 7 | `computeIfAbsent(Object, Function)`        | `java.util.HashMap`                                 |
|  -2.0% | -169.551 MiB | 22.6% → 22.2% | 8.42 GiB → 8.26 GiB |     361 → 350 | `<init>(Collection)`                       | `java.util.ArrayList`                               |
| -98.9% | -157.786 MiB |  0.4% → <0.1% |  160 MiB → 1.76 MiB |         3 → 5 | `read(InputStream, String)`                | `java.util.jar.Manifest`                            |
| -98.9% | -157.786 MiB |  0.4% → <0.1% |  160 MiB → 1.76 MiB |         3 → 5 | `<init>(JarVerifier, InputStream, String)` | `java.util.jar.Manifest`                            |
| -98.9% | -157.786 MiB |  0.4% → <0.1% |  160 MiB → 1.76 MiB |         3 → 5 | `<init>(InputStream, String)`              | `java.util.jar.Manifest`                            |
| -98.9% | -157.786 MiB |  0.4% → <0.1% |  160 MiB → 1.76 MiB |         3 → 5 | `getManifestFromReference()`               | `java.util.jar.JarFile`                             |
| -98.9% | -157.786 MiB |  0.4% → <0.1% |  160 MiB → 1.76 MiB |         3 → 5 | `getManifest()`                            | `java.util.jar.JarFile`                             |
| -98.9% | -157.786 MiB |  0.4% → <0.1% |  160 MiB → 1.76 MiB |         3 → 5 | `getManifest()`                            | `jdk.internal.loader.URLClassPath$JarLoader$2`      |
| -86.2% |  -154.87 MiB |   0.5% → 0.1% |  180 MiB → 24.8 MiB |       44 → 64 | `loadClass(String)`                        | `java.lang.ClassLoader`                             |

##### Ours

|  Change |        Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   -2.3% | -764.471 MiB | 85.1% → 83.5% |   31.8 GiB → 31 GiB | 1,490 → 1,445 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -2.3% | -764.471 MiB | 85.1% → 83.5% |   31.8 GiB → 31 GiB | 1,490 → 1,445 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -2.3% | -764.471 MiB | 85.1% → 83.5% |   31.8 GiB → 31 GiB | 1,490 → 1,445 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -7.8% | -582.985 MiB | 19.6% → 18.2% | 7.31 GiB → 6.74 GiB |     192 → 179 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -7.8% | -582.985 MiB | 19.6% → 18.2% | 7.31 GiB → 6.74 GiB |     192 → 179 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70` |
|   -1.6% |  -505.89 MiB | 84.0% → 83.2% | 31.4 GiB → 30.9 GiB | 1,471 → 1,438 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -1.6% |  -505.89 MiB | 84.0% → 83.2% | 31.4 GiB → 30.9 GiB | 1,471 → 1,438 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0` |
|   -1.6% |  -505.89 MiB | 84.0% → 83.2% | 31.4 GiB → 30.9 GiB | 1,471 → 1,438 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -1.6% |  -505.89 MiB | 84.0% → 83.2% | 31.4 GiB → 30.9 GiB | 1,471 → 1,438 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30` |
|   -0.6% | -213.503 MiB |         99.4% | 37.1 GiB → 36.9 GiB | 1,793 → 1,749 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| removed | -189.874 MiB |   0.5% → 0.0% |       190 MiB → 0 B |        75 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -98.4% | -162.259 MiB |  0.4% → <0.1% |  165 MiB → 2.58 MiB |         6 → 1 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -98.4% | -162.259 MiB |  0.4% → <0.1% |  165 MiB → 2.58 MiB |         6 → 1 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  -96.7% | -109.281 MiB |  0.3% → <0.1% |  113 MiB → 3.72 MiB |         6 → 5 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -96.7% | -109.281 MiB |  0.3% → <0.1% |  113 MiB → 3.72 MiB |         6 → 5 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -89.2% |  -30.599 MiB |  0.1% → <0.1% | 34.3 MiB → 3.72 MiB |         4 → 5 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -93.9% |  -23.149 MiB |  0.1% → <0.1% | 24.6 MiB → 1.49 MiB |        68 → 4 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d960` |
| removed |   -1.135 MiB |  <0.1% → 0.0% |      1.14 MiB → 0 B |         3 → 0 | `$anonfun$1(Config, Path)`                                                                                             | `org.renaissance.harness.RenaissanceSuite$`                            |
| removed | -775.476 KiB |  <0.1% → 0.0% |       775 KiB → 0 B |         2 → 0 | `create(Path, String, Optional, Map, boolean)`                                                                         | `org.renaissance.core.BenchmarkSuite`                                  |
| removed | -775.359 KiB |  <0.1% → 0.0% |       775 KiB → 0 B |         1 → 0 | `longOptTokens(String)`                                                                                                | `scopt.OptionDef`                                                      |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `toArray()` (`java.util.ArrayList`)

| Change |        Delta |             % |                Size |   Samples | Caller               | Location              |
| -----: | -----------: | ------------: | ------------------: | --------: | -------------------- | --------------------- |
| +18.4% |   +1.653 GiB | 51.6% → 56.3% |    9 GiB → 10.7 GiB | 459 → 480 | `addAll(Collection)` | `java.util.ArrayList` |
|  -2.0% | -169.551 MiB | 48.4% → 43.7% | 8.42 GiB → 8.26 GiB | 361 → 350 | `<init>(Collection)` | `java.util.ArrayList` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |       Samples | Caller  | Location                                    |
| -----: | -----------: | -----: | ------------------: | ------------: | ------- | ------------------------------------------- |
|  +1.4% | +498.239 MiB | 100.0% | 34.3 GiB → 34.8 GiB | 1,692 → 1,656 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `grow()` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Caller                       | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | ---------------------------- | --------------------- |
| +12.8% | +446.774 MiB | 100.0% | 3.42 GiB → 3.85 GiB | 206 → 197 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Caller        | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | ------------- | --------------------- |
| +12.8% | +446.774 MiB | 100.0% | 3.42 GiB → 3.85 GiB | 206 → 197 | `add(Object)` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change |        Delta |              % |                Size |   Samples | Caller                   | Location                                                   |
| -----: | -----------: | -------------: | ------------------: | --------: | ------------------------ | ---------------------------------------------------------- |
| +12.7% | +444.713 MiB | 100.0% → 99.9% | 3.42 GiB → 3.85 GiB | 206 → 196 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +2.06 MiB |    0.0% → 0.1% |      0 B → 2.06 MiB |     0 → 1 | `accept(Object, Object)` | `java.util.stream.Collectors$$Lambda.0x00000070010c4338`   |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |   Samples | Caller                 | Location                            |
| -----: | -----------: | -----: | ------------------: | --------: | ---------------------- | ----------------------------------- |
| +11.1% | +436.668 MiB | 100.0% | 3.85 GiB → 4.27 GiB | 218 → 181 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |             % |                Size |       Samples | Caller                              | Location                            |
| -----: | -----------: | ------------: | ------------------: | ------------: | ----------------------------------- | ----------------------------------- |
|  +1.4% | +498.239 MiB | 99.2% → 99.7% | 34.3 GiB → 34.8 GiB | 1,692 → 1,656 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |                Size |   Samples | Caller              | Location                                                   |
| -----: | -----------: | -----: | ------------------: | --------: | ------------------- | ---------------------------------------------------------- |
|  +6.1% | +319.685 MiB | 100.0% | 5.15 GiB → 5.46 GiB | 293 → 282 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +6.1% | +319.685 MiB | 100.0% | 5.15 GiB → 5.46 GiB | 293 → 282 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |                Size |   Samples | Caller              | Location                                                   |
| -----: | -----------: | -----: | ------------------: | --------: | ------------------- | ---------------------------------------------------------- |
|  +5.5% | +221.916 MiB | 100.0% | 3.92 GiB → 4.14 GiB | 233 → 212 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |             % |          Size | Samples | Caller              | Location                                                               |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
|    new | +194.066 MiB | 0.0% → 100.0% | 0 B → 194 MiB | 0 → 129 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d4f0`)

|   Change |        Delta |      % |               Size | Samples | Caller        | Location                           |
| -------: | -----------: | -----: | -----------------: | ------: | ------------- | ---------------------------------- |
| +2202.3% | +171.236 MiB | 100.0% | 7.78 MiB → 179 MiB | 21 → 99 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |      Delta |      % |               Size |  Samples | Caller               | Location                                  |
| ------: | ---------: | -----: | -----------------: | -------: | -------------------- | ----------------------------------------- |
| +669.2% | +164.9 MiB | 100.0% | 24.6 MiB → 190 MiB | 68 → 123 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|  Change |        Delta |      % |             Size |  Samples | Caller                               | Location                            |
| ------: | -----------: | -----: | ---------------: | -------: | ------------------------------------ | ----------------------------------- |
| +654.3% | +163.706 MiB | 100.0% | 25 MiB → 189 MiB | 69 → 121 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|  Change |        Delta |             % |                Size |  Samples | Caller                                            | Location                              |
| ------: | -----------: | ------------: | ------------------: | -------: | ------------------------------------------------- | ------------------------------------- |
| +654.3% | +163.706 MiB |        100.0% |    25 MiB → 189 MiB | 69 → 121 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |
| +209.8% |   +23.84 MiB | 45.4% → 18.7% | 11.4 MiB → 35.2 MiB |  31 → 47 | `evaluate(Spliterator, boolean, IntFunction)`     | `java.util.stream.AbstractPipeline`   |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

|  Change |        Delta |      % |             Size |  Samples | Caller                 | Location                            |
| ------: | -----------: | -----: | ---------------: | -------: | ---------------------- | ----------------------------------- |
| +654.3% | +163.706 MiB | 100.0% | 25 MiB → 189 MiB | 69 → 121 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

|  Change |        Delta |      % |             Size |  Samples | Caller               | Location                             |
| ------: | -----------: | -----: | ---------------: | -------: | -------------------- | ------------------------------------ |
| +654.3% | +163.706 MiB | 100.0% | 25 MiB → 189 MiB | 69 → 121 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

|  Change |        Delta |             % |               Size |  Samples | Caller                        | Location                                                           |
| ------: | -----------: | ------------: | -----------------: | -------: | ----------------------------- | ------------------------------------------------------------------ |
| +634.9% | +156.432 MiB | 98.5% → 95.9% | 24.6 MiB → 181 MiB | 68 → 100 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |
|     new |   +7.652 MiB |   0.0% → 4.1% |     0 B → 7.65 MiB |   0 → 21 | `toCsvRows(Function)`         | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
| removed | -387.703 KiB |   1.5% → 0.0% |      388 KiB → 0 B |    1 → 0 | `collectModuleJars(Map)`      | `org.renaissance.core.ModuleLoader`                                |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

|  Change |        Delta |      % |               Size |  Samples | Caller                          | Location                                       |
| ------: | -----------: | -----: | -----------------: | -------: | ------------------------------- | ---------------------------------------------- |
| +634.9% | +156.432 MiB | 100.0% | 24.6 MiB → 181 MiB | 68 → 100 | `forEachRemaining(IntConsumer)` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

|  Change |        Delta |      % |               Size |  Samples | Caller                       | Location                      |
| ------: | -----------: | -----: | -----------------: | -------: | ---------------------------- | ----------------------------- |
| +634.9% | +156.432 MiB | 100.0% | 24.6 MiB → 181 MiB | 68 → 100 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

|  Change |        Delta |      % |               Size |  Samples | Caller                        | Location                            |
| ------: | -----------: | -----: | -----------------: | -------: | ----------------------------- | ----------------------------------- |
| +634.9% | +156.432 MiB | 100.0% | 24.6 MiB → 181 MiB | 68 → 100 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |      Delta |             % |                Size |   Samples | Caller      | Location              |
| -----: | ---------: | ------------: | ------------------: | --------: | ----------- | --------------------- |
|  +8.5% | +1.487 GiB | 50.7% → 54.8% | 17.4 GiB → 18.9 GiB | 820 → 830 | `toArray()` | `java.util.ArrayList` |
|  -7.9% | -1.341 GiB | 49.3% → 45.2% | 16.9 GiB → 15.6 GiB | 844 → 784 | `grow(int)` | `java.util.ArrayList` |

##### `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`)

|   Change |        Delta |      % |               Size | Samples | Caller                             | Location                            |
| -------: | -----------: | -----: | -----------------: | ------: | ---------------------------------- | ----------------------------------- |
| +1022.9% | +132.035 MiB | 100.0% | 12.9 MiB → 145 MiB | 36 → 56 | `evaluateToArrayNode(IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `evaluateToArrayNode(IntFunction)` (`java.util.stream.AbstractPipeline`)

|   Change |        Delta |      % |               Size | Samples | Caller                 | Location                             |
| -------: | -----------: | -----: | -----------------: | ------: | ---------------------- | ------------------------------------ |
| +1022.9% | +132.035 MiB | 100.0% | 12.9 MiB → 145 MiB | 36 → 56 | `toArray(IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`)

|   Change |        Delta |      % |               Size | Samples | Caller                                           | Location                                    |
| -------: | -----------: | -----: | -----------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +1022.9% | +132.035 MiB | 100.0% | 12.9 MiB → 145 MiB | 36 → 56 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |        Delta |      % |               Size |  Samples | Caller                             | Location                                  |
| ------: | -----------: | -----: | -----------------: | -------: | ---------------------------------- | ----------------------------------------- |
| +634.9% | +156.432 MiB | 100.0% | 24.6 MiB → 181 MiB | 68 → 100 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |        Delta |             % |           Size | Samples | Caller       | Location                                                               |
| ------: | -----------: | ------------: | -------------: | ------: | ------------ | ---------------------------------------------------------------------- |
|     new | +179.011 MiB | 0.0% → 100.0% |  0 B → 179 MiB |  0 → 99 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d4f0` |
| removed |   -24.64 MiB | 100.0% → 0.0% | 24.6 MiB → 0 B |  68 → 0 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a18d8` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |        Delta |      % |               Size | Samples | Caller      | Location                                               |
| ------: | -----------: | -----: | -----------------: | ------: | ----------- | ------------------------------------------------------ |
| +177.0% | +114.273 MiB | 100.0% | 64.6 MiB → 179 MiB |   2 → 9 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size | Samples | Caller              | Location                                                   |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------- | ---------------------------------------------------------- |
|  +7.8% | +97.769 MiB | 100.0% | 1.23 GiB → 1.32 GiB | 60 → 70 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |             % |           Size | Samples | Caller      | Location                                               |
| -----: | ----------: | ------------: | -------------: | ------: | ----------- | ------------------------------------------------------ |
|    new | +95.588 MiB | 0.0% → 100.0% | 0 B → 95.6 MiB |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |       Delta |      % |                Size | Samples | Caller                               | Location                                                  |
| ------: | ----------: | -----: | ------------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| +354.1% | +75.024 MiB | 100.0% | 21.2 MiB → 96.2 MiB |   1 → 2 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |       Delta |      % |                Size | Samples | Caller                           | Location                                                  |
| ------: | ----------: | -----: | ------------------: | ------: | -------------------------------- | --------------------------------------------------------- |
| +354.1% | +75.024 MiB | 100.0% | 21.2 MiB → 96.2 MiB |   1 → 2 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |       Delta |      % |                Size | Samples | Caller      | Location                                               |
| ------: | ----------: | -----: | ------------------: | ------: | ----------- | ------------------------------------------------------ |
| +354.1% | +75.024 MiB | 100.0% | 21.2 MiB → 96.2 MiB |   1 → 2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |               Size | Samples | Caller          | Location                                                                              |
| -----: | ----------: | -----: | -----------------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| +74.1% | +50.971 MiB | 100.0% | 68.7 MiB → 120 MiB |   4 → 3 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0`)

| Change |       Delta |      % |               Size | Samples | Caller                              | Location            |
| -----: | ----------: | -----: | -----------------: | ------: | ----------------------------------- | ------------------- |
| +74.1% | +50.971 MiB | 100.0% | 68.7 MiB → 120 MiB |   4 → 3 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d728`)

|  Change |        Delta |             % |           Size | Samples | Caller                      | Location                           |
| ------: | -----------: | ------------: | -------------: | ------: | --------------------------- | ---------------------------------- |
|     new |   +21.67 MiB | 0.0% → 100.0% | 0 B → 21.7 MiB |  0 → 32 | `accept(int)`               | `java.util.stream.IntPipeline$1$1` |
| removed | -803.976 KiB | 100.0% → 0.0% |  804 KiB → 0 B |   3 → 0 | `<init>(long, IntFunction)` | `java.util.stream.Nodes$ArrayNode` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |                Size | Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ------------------: | ------: | ----------- | ------------------------------------------------------ |
| +47.9% | +19.082 MiB | 100.0% | 39.9 MiB → 58.9 MiB |   5 → 6 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |      Delta |             % |           Size | Samples | Caller       | Location                                                               |
| ------: | ---------: | ------------: | -------------: | ------: | ------------ | ---------------------------------------------------------------------- |
|     new | +21.67 MiB | 0.0% → 100.0% | 0 B → 21.7 MiB |  0 → 32 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d728` |
| removed | -7.775 MiB | 100.0% → 0.0% | 7.78 MiB → 0 B |  21 → 0 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a1b10` |

##### `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |      Delta |             % |           Size | Samples | Caller                           | Location                                  |
| -----: | ---------: | ------------: | -------------: | ------: | -------------------------------- | ----------------------------------------- |
|    new | +7.652 MiB | 0.0% → 100.0% | 0 B → 7.65 MiB |  0 → 21 | `setUpBeforeAll$$anonfun$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `setUpBeforeAll$$anonfun$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |      Delta |             % |           Size | Samples | Caller          | Location                                                             |
| -----: | ---------: | ------------: | -------------: | ------: | --------------- | -------------------------------------------------------------------- |
|    new | +7.652 MiB | 0.0% → 100.0% | 0 B → 7.65 MiB |  0 → 21 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011a2908` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |      Delta |      % |                Size |       Samples | Caller   | Location                            |
| -----: | ---------: | -----: | ------------------: | ------------: | -------- | ----------------------------------- |
|  -7.6% | -1.926 GiB | 100.0% | 25.5 GiB → 23.6 GiB | 1,226 → 1,142 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |      Delta |      % |                Size |       Samples | Caller      | Location                                               |
| -----: | ---------: | -----: | ------------------: | ------------: | ----------- | ------------------------------------------------------ |
|  -7.6% | -1.926 GiB | 100.0% | 25.5 GiB → 23.6 GiB | 1,226 → 1,142 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |      Delta |      % |                Size |       Samples | Caller                 | Location                            |
| -----: | ---------: | -----: | ------------------: | ------------: | ---------------------- | ----------------------------------- |
|  -5.6% | -1.387 GiB | 100.0% | 24.8 GiB → 23.4 GiB | 1,204 → 1,130 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |        Delta |             % |                Size |   Samples | Caller               | Location              |
| -----: | -----------: | ------------: | ------------------: | --------: | -------------------- | --------------------- |
| -13.0% |   -1.762 GiB | 79.9% → 75.4% | 13.6 GiB → 11.8 GiB | 644 → 596 | `addAll(Collection)` | `java.util.ArrayList` |
| +12.8% | +446.774 MiB | 20.1% → 24.6% | 3.42 GiB → 3.85 GiB | 206 → 197 | `grow()`             | `java.util.ArrayList` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |   Samples | Caller                         | Location                                               |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------------ | ------------------------------------------------------ |
|  -7.8% | -582.985 MiB | 92.3% → 99.8% | 7.31 GiB → 6.74 GiB | 192 → 179 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
| -89.2% |  -30.599 MiB |   0.4% → 0.1% | 34.3 MiB → 3.72 MiB |     4 → 5 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |              Size |       Samples | Caller                     | Location                                                   |
| -----: | -----------: | -----: | ----------------: | ------------: | -------------------------- | ---------------------------------------------------------- |
|  -2.3% | -764.471 MiB | 100.0% | 31.8 GiB → 31 GiB | 1,490 → 1,445 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size |       Samples | Caller                           | Location                                                   |
| -----: | -----------: | -----: | ----------------: | ------------: | -------------------------------- | ---------------------------------------------------------- |
|  -2.3% | -764.471 MiB | 100.0% | 31.8 GiB → 31 GiB | 1,490 → 1,445 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size |       Samples | Caller      | Location                                               |
| -----: | -----------: | -----: | ----------------: | ------------: | ----------- | ------------------------------------------------------ |
|  -2.3% | -764.471 MiB | 100.0% | 31.8 GiB → 31 GiB | 1,490 → 1,445 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |                Size |   Samples | Caller   | Location                                                               |
| -----: | -----------: | -----: | ------------------: | --------: | -------- | ---------------------------------------------------------------------- |
|  -7.8% | -582.985 MiB | 100.0% | 7.31 GiB → 6.74 GiB | 192 → 179 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`)

| Change |        Delta |      % |                Size |   Samples | Caller   | Location                                            |
| -----: | -----------: | -----: | ------------------: | --------: | -------- | --------------------------------------------------- |
|  -7.8% | -582.985 MiB | 100.0% | 7.31 GiB → 6.74 GiB | 192 → 179 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |        Delta |              % |                Size |   Samples | Caller     | Location                            |
| -----: | -----------: | -------------: | ------------------: | --------: | ---------- | ----------------------------------- |
|  -3.9% | -278.882 MiB | 95.9% → 100.0% | 7.02 GiB → 6.74 GiB | 191 → 179 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |                Size |       Samples | Caller                  | Location                                                               |
| -----: | ----------: | -----: | ------------------: | ------------: | ----------------------- | ---------------------------------------------------------------------- |
|  -1.6% | -505.89 MiB | 100.0% | 31.4 GiB → 30.9 GiB | 1,471 → 1,438 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`)

| Change |       Delta |      % |                Size |       Samples | Caller                              | Location            |
| -----: | ----------: | -----: | ------------------: | ------------: | ----------------------------------- | ------------------- |
|  -1.6% | -505.89 MiB | 100.0% | 31.4 GiB → 30.9 GiB | 1,471 → 1,438 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change |       Delta |      % |                Size |       Samples | Caller                              | Location                                    |
| -----: | ----------: | -----: | ------------------: | ------------: | ----------------------------------- | ------------------------------------------- |
|  -1.6% | -505.89 MiB | 100.0% | 31.4 GiB → 30.9 GiB | 1,471 → 1,438 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |                Size |       Samples | Caller                   | Location                                                               |
| -----: | ----------: | -----: | ------------------: | ------------: | ------------------------ | ---------------------------------------------------------------------- |
|  -1.6% | -505.89 MiB | 100.0% | 31.4 GiB → 30.9 GiB | 1,471 → 1,438 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`)

| Change |       Delta |      % |                Size |       Samples | Caller                | Location            |
| -----: | ----------: | -----: | ------------------: | ------------: | --------------------- | ------------------- |
|  -1.6% | -505.89 MiB | 100.0% | 31.4 GiB → 30.9 GiB | 1,471 → 1,438 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change |       Delta |      % |                Size |       Samples | Caller            | Location                                    |
| -----: | ----------: | -----: | ------------------: | ------------: | ----------------- | ------------------------------------------- |
|  -1.6% | -505.89 MiB | 100.0% | 31.4 GiB → 30.9 GiB | 1,471 → 1,438 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `resize()` (`java.util.HashMap`)

| Change |        Delta |             % |               Size | Samples | Caller                                          | Location            |
| -----: | -----------: | ------------: | -----------------: | ------: | ----------------------------------------------- | ------------------- |
| -98.2% | -223.282 MiB |  50.4% → 3.3% | 227 MiB → 4.17 MiB |   5 → 2 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
| -44.9% | -100.258 MiB | 49.6% → 96.7% |  224 MiB → 123 MiB |       4 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |        Delta |      % |                Size |       Samples | Caller   | Location                             |
| -----: | -----------: | -----: | ------------------: | ------------: | -------- | ------------------------------------ |
|  -0.6% | -213.503 MiB | 100.0% | 37.1 GiB → 36.9 GiB | 1,793 → 1,749 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |        Delta |      % |                Size |       Samples | Caller     | Location                            |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------- | ----------------------------------- |
|  -0.6% | -213.503 MiB | 100.0% | 37.1 GiB → 36.9 GiB | 1,793 → 1,749 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |       Samples | Caller                                                    | Location                                      |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  -5.6% |   -1.387 GiB | 66.7% → 63.3% | 24.8 GiB → 23.4 GiB | 1,204 → 1,130 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -14.7% |   -1.167 GiB | 21.3% → 18.3% | 7.92 GiB → 6.76 GiB |     201 → 188 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
| +11.1% | +436.668 MiB | 10.4% → 11.6% | 3.85 GiB → 4.27 GiB |     218 → 181 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  +0.3% | +119.165 MiB | 94.0% → 94.9% |   34.9 GiB → 35 GiB | 1,715 → 1,673 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change |       Delta |      % |              Size | Samples | Caller                   | Location                                                   |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------ | ---------------------------------------------------------- |
| -46.8% | -192.62 MiB | 100.0% | 411 MiB → 219 MiB |  17 → 7 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Caller                       | Location                                    |
| -----: | -----------: | -----: | ------------------: | --------: | ---------------------------- | ------------------------------------------- |
|  -2.0% | -169.551 MiB | 100.0% | 8.42 GiB → 8.26 GiB | 361 → 350 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

| Change |        Delta |      % |               Size | Samples | Caller                                     | Location                 |
| -----: | -----------: | -----: | -----------------: | ------: | ------------------------------------------ | ------------------------ |
| -98.9% | -157.786 MiB | 100.0% | 160 MiB → 1.76 MiB |   3 → 5 | `<init>(JarVerifier, InputStream, String)` | `java.util.jar.Manifest` |

##### `<init>(JarVerifier, InputStream, String)` (`java.util.jar.Manifest`)

| Change |        Delta |      % |               Size | Samples | Caller                        | Location                 |
| -----: | -----------: | -----: | -----------------: | ------: | ----------------------------- | ------------------------ |
| -98.9% | -157.786 MiB | 100.0% | 160 MiB → 1.76 MiB |   3 → 5 | `<init>(InputStream, String)` | `java.util.jar.Manifest` |

##### `<init>(InputStream, String)` (`java.util.jar.Manifest`)

| Change |        Delta |      % |               Size | Samples | Caller                       | Location                |
| -----: | -----------: | -----: | -----------------: | ------: | ---------------------------- | ----------------------- |
| -98.9% | -157.786 MiB | 100.0% | 160 MiB → 1.76 MiB |   3 → 5 | `getManifestFromReference()` | `java.util.jar.JarFile` |

##### `getManifestFromReference()` (`java.util.jar.JarFile`)

| Change |        Delta |      % |               Size | Samples | Caller          | Location                |
| -----: | -----------: | -----: | -----------------: | ------: | --------------- | ----------------------- |
| -98.9% | -157.786 MiB | 100.0% | 160 MiB → 1.76 MiB |   3 → 5 | `getManifest()` | `java.util.jar.JarFile` |

##### `getManifest()` (`java.util.jar.JarFile`)

| Change |        Delta |      % |               Size | Samples | Caller          | Location                                       |
| -----: | -----------: | -----: | -----------------: | ------: | --------------- | ---------------------------------------------- |
| -98.9% | -157.786 MiB | 100.0% | 160 MiB → 1.76 MiB |   3 → 5 | `getManifest()` | `jdk.internal.loader.URLClassPath$JarLoader$2` |

##### `getManifest()` (`jdk.internal.loader.URLClassPath$JarLoader$2`)

| Change |        Delta |      % |               Size | Samples | Caller                          | Location                  |
| -----: | -----------: | -----: | -----------------: | ------: | ------------------------------- | ------------------------- |
| -98.9% | -157.786 MiB | 100.0% | 160 MiB → 1.76 MiB |   3 → 5 | `defineClass(String, Resource)` | `java.net.URLClassLoader` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|  Change |        Delta |            % |               Size | Samples | Caller                              | Location                                  |
| ------: | -----------: | -----------: | -----------------: | ------: | ----------------------------------- | ----------------------------------------- |
| removed | -159.978 MiB | 89.0% → 0.0% |      160 MiB → 0 B |   2 → 0 | `run(BenchmarkContext)`             | `org.renaissance.jdk.concurrent.FjKmeans` |
| +312.6% |   +2.464 MiB | 0.4% → 13.1% | 807 KiB → 3.25 MiB |   2 → 8 | `<clinit>()`                        | `scala.package$`                          |
|     new |   +1.832 MiB |  0.0% → 7.4% |     0 B → 1.83 MiB |   0 → 4 | `getDeclaredConstructors0(boolean)` | `java.lang.Class`                         |
|  -79.3% |    -1.43 MiB |  1.0% → 1.5% |  1.8 MiB → 383 KiB |   3 → 1 | `<clinit>()`                        | `scala.collection.immutable.Vector$`      |
|     new |   +1.171 MiB |  0.0% → 4.7% |     0 B → 1.17 MiB |   0 → 3 | `rowToArray$1(Map)`                 | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |             % |          Size | Samples | Caller              | Location                                                               |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| removed | -189.874 MiB | 100.0% → 0.0% | 190 MiB → 0 B |  75 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000000801198798` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |        Delta |      % |               Size | Samples | Caller                  | Location                                  |
| -----: | -----------: | -----: | -----------------: | ------: | ----------------------- | ----------------------------------------- |
| -98.4% | -162.259 MiB | 100.0% | 165 MiB → 2.58 MiB |   6 → 1 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change |        Delta |      % |               Size | Samples | Caller               | Location                                  |
| -----: | -----------: | -----: | -----------------: | ------: | -------------------- | ----------------------------------------- |
| -98.4% | -162.259 MiB | 100.0% | 165 MiB → 2.58 MiB |   6 → 1 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |      % |               Size | Samples | Caller              | Location                                               |
| -----: | -----------: | -----: | -----------------: | ------: | ------------------- | ------------------------------------------------------ |
| -96.7% | -109.281 MiB | 100.0% | 113 MiB → 3.72 MiB |   6 → 5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |      % |               Size | Samples | Caller              | Location                                               |
| -----: | -----------: | -----: | -----------------: | ------: | ------------------- | ------------------------------------------------------ |
| -96.7% | -109.281 MiB | 100.0% | 113 MiB → 3.72 MiB |   6 → 5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -96.7% | -109.281 MiB | 100.0% | 113 MiB → 3.72 MiB |   6 → 5 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |      % |                Size | Samples | Caller                     | Location                                               |
| -----: | ----------: | -----: | ------------------: | ------: | -------------------------- | ------------------------------------------------------ |
| -89.2% | -30.599 MiB | 100.0% | 34.3 MiB → 3.72 MiB |   4 → 5 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d960`)

|  Change |      Delta |             % |           Size | Samples | Caller                      | Location                           |
| ------: | ---------: | ------------: | -------------: | ------: | --------------------------- | ---------------------------------- |
| removed | -24.64 MiB | 100.0% → 0.0% | 24.6 MiB → 0 B |  68 → 0 | `accept(int)`               | `java.util.stream.IntPipeline$1$1` |
|     new | +1.491 MiB | 0.0% → 100.0% | 0 B → 1.49 MiB |   0 → 4 | `<init>(long, IntFunction)` | `java.util.stream.Nodes$ArrayNode` |

##### `$anonfun$1(Config, Path)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |      Delta |             % |           Size | Samples | Caller    | Location                                                               |
| ------: | ---------: | ------------: | -------------: | ------: | --------- | ---------------------------------------------------------------------- |
| removed | -1.135 MiB | 100.0% → 0.0% | 1.14 MiB → 0 B |   3 → 0 | `apply()` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000080117e000` |

##### `create(Path, String, Optional, Map, boolean)` (`org.renaissance.core.BenchmarkSuite`)

|  Change |        Delta |             % |          Size | Samples | Caller                     | Location                                    |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------- | ------------------------------------------- |
| removed | -775.476 KiB | 100.0% → 0.0% | 775 KiB → 0 B |   2 → 0 | `$anonfun$1(Config, Path)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `longOptTokens(String)` (`scopt.OptionDef`)

|  Change |        Delta |             % |          Size | Samples | Caller                   | Location          |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------ | ----------------- |
| removed | -775.359 KiB | 100.0% → 0.0% | 775 KiB → 0 B |   1 → 0 | `tokensToRead(int, Seq)` | `scopt.OptionDef` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `toArray()` (`java.util.ArrayList`)

| Change |      Delta |      % |                Size |   Samples | Callee                  | Location           |
| -----: | ---------: | -----: | ------------------: | --------: | ----------------------- | ------------------ |
|  +8.5% | +1.487 GiB | 100.0% | 17.4 GiB → 18.9 GiB | 820 → 830 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |       Samples | Callee                                   | Location                            |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------------------------------------- | ----------------------------------- |
|  +1.4% | +498.239 MiB | 100.0% | 34.3 GiB → 34.8 GiB | 1,692 → 1,656 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |        Delta |      % |                Size |       Samples | Callee                              | Location                            |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------------------------- | ----------------------------------- |
|  +1.4% | +498.239 MiB | 100.0% | 34.3 GiB → 34.8 GiB | 1,692 → 1,656 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `grow()` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee      | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | ----------- | --------------------- |
| +12.8% | +446.774 MiB | 100.0% | 3.42 GiB → 3.85 GiB | 206 → 197 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee   | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | -------- | --------------------- |
| +12.8% | +446.774 MiB | 100.0% | 3.42 GiB → 3.85 GiB | 206 → 197 | `grow()` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee                       | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | ---------------------------- | --------------------- |
| +12.8% | +446.774 MiB | 100.0% | 3.42 GiB → 3.85 GiB | 206 → 197 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |   Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------: | ---------- | ----------------------------------- |
| +11.1% | +436.668 MiB | 100.0% | 3.85 GiB → 4.27 GiB | 218 → 181 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |       Samples | Callee                                               | Location                                      |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------------------------------------------------- | --------------------------------------------- |
|  +0.9% | +327.319 MiB | 100.0% | 34.6 GiB → 34.9 GiB | 1,699 → 1,659 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |             % |                Size |   Samples | Callee                   | Location                                                   |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------ | ---------------------------------------------------------- |
|  +6.1% | +319.685 MiB |        100.0% | 5.15 GiB → 5.46 GiB | 293 → 282 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +5.5% | +221.916 MiB | 76.2% → 75.8% | 3.92 GiB → 4.14 GiB | 233 → 212 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +7.8% |  +97.769 MiB | 23.8% → 24.2% | 1.23 GiB → 1.32 GiB |   60 → 70 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |             % |                Size |   Samples | Callee                              | Location              |
| -----: | -----------: | ------------: | ------------------: | --------: | ----------------------------------- | --------------------- |
| +12.7% | +444.713 MiB | 87.1% → 93.0% | 3.42 GiB → 3.85 GiB | 206 → 196 | `add(Object)`                       | `java.util.ArrayList` |
| -46.8% |  -192.62 MiB |  10.2% → 5.2% |   411 MiB → 219 MiB |    17 → 7 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |            % |           Size | Samples | Callee                                                                                       | Location                                  |
| -----: | -----------: | -----------: | -------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new | +192.117 MiB | 0.0% → 99.0% |  0 B → 192 MiB | 0 → 124 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |   +1.949 MiB |  0.0% → 1.0% | 0 B → 1.95 MiB |   0 → 5 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d4f0`)

|  Change |        Delta |             % |           Size | Samples | Callee                                           | Location                                    |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
|     new | +179.011 MiB | 0.0% → 100.0% |  0 B → 179 MiB |  0 → 99 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |
| removed |   -7.775 MiB | 100.0% → 0.0% | 7.78 MiB → 0 B |  21 → 0 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |        Delta |              % |               Size |  Samples | Callee                        | Location                                                           |
| ------: | -----------: | -------------: | -----------------: | -------: | ----------------------------- | ------------------------------------------------------------------ |
| +634.9% | +156.432 MiB | 100.0% → 95.5% | 24.6 MiB → 181 MiB | 68 → 100 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |
|     new |   +7.652 MiB |    0.0% → 4.0% |     0 B → 7.65 MiB |   0 → 21 | `toCsvRows(Function)`         | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
|     new | +427.968 KiB |    0.0% → 0.2% |      0 B → 428 KiB |    0 → 1 | `toInteger()`                 | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
|     new | +407.226 KiB |    0.0% → 0.2% |      0 B → 407 KiB |    0 → 1 | `asScala()`                   | `scala.collection.convert.AsScalaExtensions$ListHasAsScala`        |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|  Change |        Delta |             % |               Size |  Samples | Callee                       | Location                                  |
| ------: | -----------: | ------------: | -----------------: | -------: | ---------------------------- | ----------------------------------------- |
| +634.9% | +156.432 MiB | 98.5% → 95.9% | 24.6 MiB → 181 MiB | 68 → 100 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt`             |
|     new |   +7.652 MiB |   0.0% → 4.1% |     0 B → 7.65 MiB |   0 → 21 | `forEachRemaining(Consumer)` | `java.util.Spliterators$ArraySpliterator` |
| removed | -387.703 KiB |   1.5% → 0.0% |      388 KiB → 0 B |    1 → 0 | `forEachRemaining(Consumer)` | `java.util.HashMap$EntrySpliterator`      |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|  Change |        Delta |            % |                Size |  Samples | Callee                        | Location                            |
| ------: | -----------: | -----------: | ------------------: | -------: | ----------------------------- | ----------------------------------- |
| +654.3% | +163.706 MiB |       100.0% |    25 MiB → 189 MiB | 69 → 121 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |
| +277.0% |   +9.945 MiB | 14.3% → 7.2% | 3.59 MiB → 13.5 MiB |  10 → 15 | `wrapSink(Sink)`              | `java.util.stream.AbstractPipeline` |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

|  Change |        Delta |      % |             Size |  Samples | Callee                               | Location                            |
| ------: | -----------: | -----: | ---------------: | -------: | ------------------------------------ | ----------------------------------- |
| +654.3% | +163.706 MiB | 100.0% | 25 MiB → 189 MiB | 69 → 121 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

|  Change |        Delta |      % |             Size |  Samples | Callee                                            | Location                              |
| ------: | -----------: | -----: | ---------------: | -------: | ------------------------------------------------- | ------------------------------------- |
| +654.3% | +163.706 MiB | 100.0% | 25 MiB → 189 MiB | 69 → 121 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

|  Change |        Delta |      % |             Size |  Samples | Callee                 | Location                            |
| ------: | -----------: | -----: | ---------------: | -------: | ---------------------- | ----------------------------------- |
| +654.3% | +163.706 MiB | 100.0% | 25 MiB → 189 MiB | 69 → 121 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

|   Change |        Delta |             % |               Size | Samples | Callee           | Location                                                               |
| -------: | -----------: | ------------: | -----------------: | ------: | ---------------- | ---------------------------------------------------------------------- |
| +2202.3% | +171.236 MiB | 31.6% → 98.9% | 7.78 MiB → 179 MiB | 21 → 99 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d4f0` |
|  removed |   -24.64 MiB | 100.0% → 0.0% |     24.6 MiB → 0 B |  68 → 0 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a18d8` |
|      new |   +21.67 MiB |  0.0% → 12.0% |     0 B → 21.7 MiB |  0 → 32 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d728` |
|      new |    +2.06 MiB |   0.0% → 1.1% |     0 B → 2.06 MiB |   0 → 1 | `accept(Object)` | `java.util.stream.ReduceOps$3ReducingSink`                             |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

|  Change |        Delta |      % |               Size |  Samples | Callee        | Location                           |
| ------: | -----------: | -----: | -----------------: | -------: | ------------- | ---------------------------------- |
| +634.9% | +156.432 MiB | 100.0% | 24.6 MiB → 181 MiB | 68 → 100 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

|  Change |        Delta |      % |               Size |  Samples | Callee                          | Location                                       |
| ------: | -----------: | -----: | -----------------: | -------: | ------------------------------- | ---------------------------------------------- |
| +634.9% | +156.432 MiB | 100.0% | 24.6 MiB → 181 MiB | 68 → 100 | `forEachRemaining(IntConsumer)` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change |      Delta |            % |           Size | Samples | Callee                         | Location           |
| ------: | ---------: | -----------: | -------------: | ------: | ------------------------------ | ------------------ |
| removed | -9.894 MiB | <0.1% → 0.0% | 9.89 MiB → 0 B |  15 → 0 | `copyOf(Object[], int, Class)` | `java.util.Arrays` |

##### `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`)

|   Change |        Delta |             % |                Size | Samples | Callee                               | Location                             |
| -------: | -----------: | ------------: | ------------------: | ------: | ------------------------------------ | ------------------------------------ |
| +7015.3% | +108.194 MiB | 11.9% → 75.7% |  1.54 MiB → 110 MiB |   5 → 9 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |
|  +209.8% |   +23.84 MiB | 88.1% → 24.3% | 11.4 MiB → 35.2 MiB | 31 → 47 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline`  |

##### `evaluateToArrayNode(IntFunction)` (`java.util.stream.AbstractPipeline`)

|   Change |        Delta |      % |               Size | Samples | Callee                                        | Location                            |
| -------: | -----------: | -----: | -----------------: | ------: | --------------------------------------------- | ----------------------------------- |
| +1022.9% | +132.035 MiB | 100.0% | 12.9 MiB → 145 MiB | 36 → 56 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`)

|   Change |        Delta |      % |               Size | Samples | Callee                             | Location                            |
| -------: | -----------: | -----: | -----------------: | ------: | ---------------------------------- | ----------------------------------- |
| +1022.9% | +132.035 MiB | 100.0% | 12.9 MiB → 145 MiB | 36 → 56 | `evaluateToArrayNode(IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |        Delta |      % |               Size |  Samples | Callee               | Location                             |
| ------: | -----------: | -----: | -----------------: | -------: | -------------------- | ------------------------------------ |
| +634.9% | +156.432 MiB | 100.0% | 24.6 MiB → 181 MiB | 68 → 100 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|   Change |        Delta |             % |                Size | Samples | Callee                                         | Location                                            |
| -------: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------- | --------------------------------------------------- |
| +1022.9% | +132.035 MiB | 52.4% → 81.0% |  12.9 MiB → 145 MiB | 36 → 56 | `toArray(IntFunction)`                         | `java.util.stream.ReferencePipeline`                |
|  +202.8% |  +12.244 MiB | 24.5% → 10.2% | 6.04 MiB → 18.3 MiB | 17 → 24 | `range(int, int)`                              | `java.util.stream.IntStream`                        |
| +1284.7% |   +5.064 MiB |   1.6% → 3.0% |  404 KiB → 5.46 MiB |   1 → 8 | `linkToTargetMethod(int, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001220800` |
|   +94.8% |   +5.026 MiB |  21.5% → 5.8% |  5.3 MiB → 10.3 MiB | 14 → 11 | `mapToObj(IntFunction)`                        | `java.util.stream.IntPipeline`                      |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |       Delta |      % |                Size | Samples | Callee                    | Location                                                  |
| ------: | ----------: | -----: | ------------------: | ------: | ------------------------- | --------------------------------------------------------- |
| +354.1% | +75.024 MiB | 100.0% | 21.2 MiB → 96.2 MiB |   1 → 2 | `add(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |       Delta |      % |                Size | Samples | Callee                               | Location                                                  |
| ------: | ----------: | -----: | ------------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| +354.1% | +75.024 MiB | 100.0% | 21.2 MiB → 96.2 MiB |   1 → 2 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0`)

| Change |       Delta |      % |               Size | Samples | Callee                               | Location                                                   |
| -----: | ----------: | -----: | -----------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
| +74.1% | +50.971 MiB | 100.0% | 68.7 MiB → 120 MiB |   4 → 3 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d728`)

|  Change |        Delta |             % |           Size | Samples | Callee                                           | Location                                    |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
|     new |   +21.67 MiB | 0.0% → 100.0% | 0 B → 21.7 MiB |  0 → 32 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |
| removed | -803.976 KiB | 100.0% → 0.0% |  804 KiB → 0 B |   3 → 0 | `lambda$generateData$4(int)`                     | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |       Delta |      % |                Size | Samples | Callee            | Location           |
| ------: | ----------: | -----: | ------------------: | ------: | ----------------- | ------------------ |
| +178.7% | +13.895 MiB | 100.0% | 7.78 MiB → 21.7 MiB | 21 → 32 | `valueOf(double)` | `java.lang.Double` |

##### `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |        Delta |            % |           Size | Samples | Callee              | Location                            |
| -----: | -----------: | -----------: | -------------: | ------: | ------------------- | ----------------------------------- |
|    new |   +4.501 MiB | 0.0% → 58.8% |  0 B → 4.5 MiB |  0 → 13 | `<clinit>()`        | `scala.Predef$`                     |
|    new |   +1.185 MiB | 0.0% → 15.5% | 0 B → 1.19 MiB |   0 → 3 | `map(Function1)`    | `scala.collection.immutable.Range`  |
|    new |   +1.171 MiB | 0.0% → 15.3% | 0 B → 1.17 MiB |   0 → 3 | `loadClass(String)` | `java.lang.ClassLoader`             |
|    new | +813.132 KiB | 0.0% → 10.4% |  0 B → 813 KiB |   0 → 2 | `toArray(ClassTag)` | `scala.collection.AbstractIterable` |

##### `setUpBeforeAll$$anonfun$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |      Delta |             % |           Size | Samples | Callee              | Location                                  |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------- | ----------------------------------------- |
|    new | +7.652 MiB | 0.0% → 100.0% | 0 B → 7.65 MiB |  0 → 21 | `rowToArray$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |       Samples | Callee                                                    | Location                                      |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  -5.6% |   -1.387 GiB | 97.1% → 99.2% | 24.8 GiB → 23.4 GiB | 1,204 → 1,130 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| +11.1% | +436.668 MiB | 15.1% → 18.1% | 3.85 GiB → 4.27 GiB |     218 → 181 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |      Delta |      % |                Size |       Samples | Callee                 | Location                            |
| -----: | ---------: | -----: | ------------------: | ------------: | ---------------------- | ----------------------------------- |
|  -7.6% | -1.926 GiB | 100.0% | 25.5 GiB → 23.6 GiB | 1,226 → 1,142 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |      Delta |      % |                Size |       Samples | Callee     | Location                            |
| -----: | ---------: | -----: | ------------------: | ------------: | ---------- | ----------------------------------- |
|  -5.6% | -1.387 GiB | 100.0% | 24.8 GiB → 23.4 GiB | 1,204 → 1,130 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |      Delta |             % |                Size |   Samples | Callee                  | Location           |
| -----: | ---------: | ------------: | ------------------: | --------: | ----------------------- | ------------------ |
|  -7.9% | -1.341 GiB | 99.6% → 99.5% | 16.9 GiB → 15.6 GiB | 844 → 784 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |      Delta |      % |                Size |   Samples | Callee     | Location                            |
| -----: | ---------: | -----: | ------------------: | --------: | ---------- | ----------------------------------- |
| -14.7% | -1.167 GiB | 100.0% | 7.92 GiB → 6.76 GiB | 201 → 188 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |             % |                Size |       Samples | Callee                               | Location                           |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------ | ---------------------------------- |
|  -1.6% |  -505.89 MiB | 98.8% → 99.6% | 31.4 GiB → 30.9 GiB | 1,471 → 1,438 | `forEach(BiConsumer)`                | `java.util.HashMap`                |
| -47.4% | -119.294 MiB |   0.8% → 0.4% |   252 MiB → 132 MiB |        12 → 3 | `<init>(Map)`                        | `java.util.HashMap`                |
|    new | +429.132 KiB |  0.0% → <0.1% |       0 B → 429 KiB |         0 → 1 | `linkToTargetMethod(Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size |       Samples | Callee            | Location                                    |
| -----: | -----------: | -----: | ----------------: | ------------: | ----------------- | ------------------------------------------- |
|  -2.3% | -764.471 MiB | 100.0% | 31.8 GiB → 31 GiB | 1,490 → 1,445 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size |       Samples | Callee                     | Location                                                   |
| -----: | -----------: | -----: | ----------------: | ------------: | -------------------------- | ---------------------------------------------------------- |
|  -2.3% | -764.471 MiB | 100.0% | 31.8 GiB → 31 GiB | 1,490 → 1,445 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |                Size |   Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------: | ---------- | ----------------------------------- |
|  -7.8% | -582.985 MiB | 100.0% | 7.31 GiB → 6.74 GiB | 192 → 179 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`)

| Change |        Delta |      % |                Size |   Samples | Callee                         | Location                                    |
| -----: | -----------: | -----: | ------------------: | --------: | ------------------------------ | ------------------------------------------- |
|  -7.8% | -582.985 MiB | 100.0% | 7.31 GiB → 6.74 GiB | 192 → 179 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |        Delta |      % |                Size |   Samples | Callee   | Location                                                               |
| -----: | -----------: | -----: | ------------------: | --------: | -------- | ---------------------------------------------------------------------- |
|  -7.8% | -582.985 MiB | 100.0% | 7.31 GiB → 6.74 GiB | 192 → 179 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |             % |                Size |       Samples | Callee               | Location              |
| -----: | -----------: | ------------: | ------------------: | ------------: | -------------------- | --------------------- |
|  -2.0% | -169.551 MiB | 26.8% → 26.7% | 8.42 GiB → 8.26 GiB |     361 → 350 | `<init>(Collection)` | `java.util.ArrayList` |
|  -0.5% | -111.836 MiB | 71.9% → 72.7% | 22.6 GiB → 22.4 GiB | 1,103 → 1,076 | `addAll(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`)

| Change |       Delta |      % |                Size |       Samples | Callee                       | Location                                    |
| -----: | ----------: | -----: | ------------------: | ------------: | ---------------------------- | ------------------------------------------- |
|  -1.6% | -505.89 MiB | 100.0% | 31.4 GiB → 30.9 GiB | 1,471 → 1,438 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change |       Delta |      % |                Size |       Samples | Callee                  | Location                                                               |
| -----: | ----------: | -----: | ------------------: | ------------: | ----------------------- | ---------------------------------------------------------------------- |
|  -1.6% | -505.89 MiB | 100.0% | 31.4 GiB → 30.9 GiB | 1,471 → 1,438 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |                Size |       Samples | Callee                              | Location            |
| -----: | ----------: | -----: | ------------------: | ------------: | ----------------------------------- | ------------------- |
|  -1.6% | -505.89 MiB | 100.0% | 31.4 GiB → 30.9 GiB | 1,471 → 1,438 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`)

| Change |       Delta |      % |                Size |       Samples | Callee                              | Location                                    |
| -----: | ----------: | -----: | ------------------: | ------------: | ----------------------------------- | ------------------------------------------- |
|  -1.6% | -505.89 MiB | 100.0% | 31.4 GiB → 30.9 GiB | 1,471 → 1,438 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change |       Delta |      % |                Size |       Samples | Callee                   | Location                                                               |
| -----: | ----------: | -----: | ------------------: | ------------: | ------------------------ | ---------------------------------------------------------------------- |
|  -1.6% | -505.89 MiB | 100.0% | 31.4 GiB → 30.9 GiB | 1,471 → 1,438 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change |        Delta |             % |                Size |       Samples | Callee                           | Location                                                   |
| ------: | -----------: | ------------: | ------------------: | ------------: | -------------------------------- | ---------------------------------------------------------- |
|   -7.6% |   -1.926 GiB | 68.6% → 63.8% | 25.5 GiB → 23.6 GiB | 1,226 → 1,142 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
|   -2.3% | -764.471 MiB | 85.6% → 84.1% |   31.8 GiB → 31 GiB | 1,490 → 1,445 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +6.1% | +319.685 MiB | 13.9% → 14.8% | 5.15 GiB → 5.46 GiB |     293 → 282 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +177.0% | +114.273 MiB |   0.2% → 0.5% |  64.6 MiB → 179 MiB |         2 → 9 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -96.7% | -109.281 MiB |  0.3% → <0.1% |  113 MiB → 3.72 MiB |         6 → 5 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |        Delta |      % |                Size |       Samples | Callee      | Location                                               |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------- | ------------------------------------------------------ |
|  -0.6% | -213.503 MiB | 100.0% | 37.1 GiB → 36.9 GiB | 1,793 → 1,749 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |       Samples | Callee   | Location                                            |
| -----: | -----------: | ------------: | ------------------: | ------------: | -------- | --------------------------------------------------- |
|  -3.9% | -278.882 MiB | 18.9% → 18.3% | 7.02 GiB → 6.74 GiB |     191 → 179 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  -0.6% | -213.503 MiB |        100.0% | 37.1 GiB → 36.9 GiB | 1,793 → 1,749 | `exec()` | `java.util.concurrent.RecursiveTask`                |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change |        Delta |             % |               Size | Samples | Callee                                       | Location                                                                              |
| -----: | -----------: | ------------: | -----------------: | ------: | -------------------------------------------- | ------------------------------------------------------------------------------------- |
| -98.2% | -223.282 MiB |  55.3% → 1.9% | 227 MiB → 4.17 MiB |   5 → 2 | `resize()`                                   | `java.util.HashMap`                                                                   |
| +74.1% |  +50.971 MiB | 16.7% → 54.7% | 68.7 MiB → 120 MiB |   4 → 3 | `apply(Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0` |
| -17.6% |  -20.309 MiB | 28.0% → 43.4% | 115 MiB → 94.9 MiB |   8 → 2 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                                                   |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee      | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | ----------- | --------------------- |
|  -2.0% | -169.551 MiB | 100.0% | 8.42 GiB → 8.26 GiB | 361 → 350 | `toArray()` | `java.util.ArrayList` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

| Change |        Delta |            % |              Size | Samples | Callee                                                | Location                   |
| -----: | -----------: | -----------: | ----------------: | ------: | ----------------------------------------------------- | -------------------------- |
|    new | +748.554 KiB | 0.0% → 41.6% |     0 B → 749 KiB |   0 → 2 | `put(Object, Object)`                                 | `java.util.HashMap`        |
| -72.0% | -671.289 KiB | 0.6% → 14.5% | 933 KiB → 262 KiB |   2 → 1 | `<init>(int)`                                         | `java.util.jar.Attributes` |
|    new | +395.585 KiB | 0.0% → 22.0% |     0 B → 396 KiB |   0 → 1 | `read(Manifest$FastInputStream, byte[], String, int)` | `java.util.jar.Attributes` |
|    new | +395.585 KiB | 0.0% → 22.0% |     0 B → 396 KiB |   0 → 1 | `parseName(byte[], int)`                              | `java.util.jar.Manifest`   |

##### `<init>(JarVerifier, InputStream, String)` (`java.util.jar.Manifest`)

| Change |        Delta |      % |               Size | Samples | Callee                      | Location                 |
| -----: | -----------: | -----: | -----------------: | ------: | --------------------------- | ------------------------ |
| -98.9% | -157.786 MiB | 100.0% | 160 MiB → 1.76 MiB |   3 → 5 | `read(InputStream, String)` | `java.util.jar.Manifest` |

##### `<init>(InputStream, String)` (`java.util.jar.Manifest`)

| Change |        Delta |      % |               Size | Samples | Callee                                     | Location                 |
| -----: | -----------: | -----: | -----------------: | ------: | ------------------------------------------ | ------------------------ |
| -98.9% | -157.786 MiB | 100.0% | 160 MiB → 1.76 MiB |   3 → 5 | `<init>(JarVerifier, InputStream, String)` | `java.util.jar.Manifest` |

##### `getManifestFromReference()` (`java.util.jar.JarFile`)

| Change |        Delta |      % |               Size | Samples | Callee                        | Location                 |
| -----: | -----------: | -----: | -----------------: | ------: | ----------------------------- | ------------------------ |
| -98.9% | -157.786 MiB | 100.0% | 160 MiB → 1.76 MiB |   3 → 5 | `<init>(InputStream, String)` | `java.util.jar.Manifest` |

##### `getManifest()` (`java.util.jar.JarFile`)

| Change |        Delta |      % |               Size | Samples | Callee                       | Location                |
| -----: | -----------: | -----: | -----------------: | ------: | ---------------------------- | ----------------------- |
| -98.9% | -157.786 MiB | 100.0% | 160 MiB → 1.76 MiB |   3 → 5 | `getManifestFromReference()` | `java.util.jar.JarFile` |

##### `getManifest()` (`jdk.internal.loader.URLClassPath$JarLoader$2`)

| Change |        Delta |      % |               Size | Samples | Callee          | Location                |
| -----: | -----------: | -----: | -----------------: | ------: | --------------- | ----------------------- |
| -98.9% | -157.786 MiB | 100.0% | 160 MiB → 1.76 MiB |   3 → 5 | `getManifest()` | `java.util.jar.JarFile` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|  Change |        Delta |              % |               Size | Samples | Callee                       | Location                                          |
| ------: | -----------: | -------------: | -----------------: | ------: | ---------------------------- | ------------------------------------------------- |
|  -86.2% | -154.493 MiB | 99.8% → 100.0% | 179 MiB → 24.8 MiB | 43 → 64 | `loadClass(String, boolean)` | `java.lang.ClassLoader`                           |
| removed |  -386.57 KiB |    0.2% → 0.0% |      387 KiB → 0 B |   1 → 0 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |            % |          Size | Samples | Callee                                                                                       | Location                                  |
| ------: | -----------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed | -189.476 MiB | 99.8% → 0.0% | 189 MiB → 0 B |  74 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed | -407.671 KiB |  0.2% → 0.0% | 408 KiB → 0 B |   1 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |        Delta |             % |           Size | Samples | Callee              | Location                           |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------- | ---------------------------------- |
| removed | -159.978 MiB |  97.1% → 0.0% |  160 MiB → 0 B |   2 → 0 | `loadClass(String)` | `java.lang.ClassLoader`            |
| removed |   -4.857 MiB |   2.9% → 0.0% | 4.86 MiB → 0 B |   4 → 0 | `<clinit>()`        | `scala.Predef$`                    |
|     new |   +2.576 MiB | 0.0% → 100.0% | 0 B → 2.58 MiB |   0 → 1 | `map(Function1)`    | `scala.collection.immutable.Range` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change |        Delta |      % |               Size | Samples | Callee                  | Location                                  |
| -----: | -----------: | -----: | -----------------: | ------: | ----------------------- | ----------------------------------------- |
| -98.4% | -162.259 MiB | 100.0% | 165 MiB → 2.58 MiB |   6 → 1 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |        Delta |              % |                Size | Samples | Callee            | Location                                               |
| ------: | -----------: | -------------: | ------------------: | ------: | ----------------- | ------------------------------------------------------ |
|  -89.2% |  -30.599 MiB | 30.4% → 100.0% | 34.3 MiB → 3.72 MiB |   4 → 5 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| removed | -152.875 KiB |    0.1% → 0.0% |       153 KiB → 0 B |   1 → 0 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |      % |               Size | Samples | Callee                     | Location                                               |
| -----: | -----------: | -----: | -----------------: | ------: | -------------------------- | ------------------------------------------------------ |
| -96.7% | -109.281 MiB | 100.0% | 113 MiB → 3.72 MiB |   6 → 5 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -96.7% | -109.281 MiB | 100.0% | 113 MiB → 3.72 MiB |   6 → 5 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |       Delta |      % |                Size | Samples | Callee     | Location                            |
| -----: | ----------: | -----: | ------------------: | ------: | ---------- | ----------------------------------- |
| -89.2% | -30.599 MiB | 100.0% | 34.3 MiB → 3.72 MiB |   4 → 5 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d960`)

|  Change |      Delta |             % |           Size | Samples | Callee                                           | Location                                    |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| removed | -24.64 MiB | 100.0% → 0.0% | 24.6 MiB → 0 B |  68 → 0 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |
|     new | +1.491 MiB | 0.0% → 100.0% | 0 B → 1.49 MiB |   0 → 4 | `lambda$generateData$4(int)`                     | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `$anonfun$1(Config, Path)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |            % |          Size | Samples | Callee                                         | Location                              |
| ------: | -----------: | -----------: | ------------: | ------: | ---------------------------------------------- | ------------------------------------- |
| removed | -775.476 KiB | 66.7% → 0.0% | 775 KiB → 0 B |   2 → 0 | `create(Path, String, Optional, Map, boolean)` | `org.renaissance.core.BenchmarkSuite` |
| removed | -387.531 KiB | 33.3% → 0.0% | 388 KiB → 0 B |   1 → 0 | `MutableMapHasAsJava(Map)`                     | `scala.jdk.CollectionConverters$`     |

##### `create(Path, String, Optional, Map, boolean)` (`org.renaissance.core.BenchmarkSuite`)

|  Change |        Delta |            % |          Size | Samples | Callee                                        | Location                              |
| ------: | -----------: | -----------: | ------------: | ------: | --------------------------------------------- | ------------------------------------- |
| removed | -387.773 KiB | 50.0% → 0.0% | 388 KiB → 0 B |   1 → 0 | `loadPropertiesAsMap(URL)`                    | `org.renaissance.core.ResourceUtils`  |
| removed | -387.703 KiB | 50.0% → 0.0% | 388 KiB → 0 B |   1 → 0 | `optionallyCreateModuleLoader(Path, boolean)` | `org.renaissance.core.BenchmarkSuite` |

##### `longOptTokens(String)` (`scopt.OptionDef`)

|  Change |        Delta |             % |          Size | Samples | Callee       | Location                  |
| ------: | -----------: | ------------: | ------------: | ------: | ------------ | ------------------------- |
| removed | -775.359 KiB | 100.0% → 0.0% | 775 KiB → 0 B |   1 → 0 | `toString()` | `java.lang.StringBuilder` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes allocated in their leaf frame. `truncated` stands for missing outermost callers.

Common call stack: `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|    Change |         Delta |            % |                 Size |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------: | ------------: | -----------: | -------------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   +186.9% | +1,019.89 MiB |  1.4% → 4.1% |   546 MiB → 1.53 GiB |   31 → 39 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|    +31.3% |  +815.871 MiB |  6.8% → 9.0% |  2.54 GiB → 3.34 GiB | 144 → 177 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|   +704.8% |   +692.07 MiB |  0.3% → 2.1% |   98.2 MiB → 790 MiB |     4 → 7 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|    +63.4% |   +609.16 MiB |  2.5% → 4.1% |   961 MiB → 1.53 GiB |   85 → 92 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|    +58.4% |  +587.664 MiB |  2.6% → 4.2% | 1,006 MiB → 1.56 GiB |   23 → 36 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  +1632.3% |  +512.818 MiB |  0.1% → 1.4% |   31.4 MiB → 544 MiB |    7 → 13 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|       new |  +370.148 MiB |  0.0% → 1.0% |        0 B → 370 MiB |     0 → 1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← truncated |
|   +486.0% |  +363.328 MiB |  0.2% → 1.2% |   74.8 MiB → 438 MiB |        10 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|   +259.7% |  +340.531 MiB |  0.3% → 1.2% |    131 MiB → 472 MiB |   18 → 16 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|       new |  +291.886 MiB |  0.0% → 0.8% |        0 B → 292 MiB |     0 → 1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← truncated |
|  +1767.4% |  +272.109 MiB | <0.1% → 0.8% |   15.4 MiB → 288 MiB |     2 → 1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| +11611.0% |  +266.905 MiB | <0.1% → 0.7% |    2.3 MiB → 269 MiB |     2 → 6 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|       new |  +257.221 MiB |  0.0% → 0.7% |        0 B → 257 MiB |     0 → 1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← truncated |
|  +5383.2% |  +229.463 MiB | <0.1% → 0.6% |   4.26 MiB → 234 MiB |     1 → 4 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|    +44.1% |  +219.453 MiB |  1.3% → 1.9% |    498 MiB → 717 MiB |   39 → 27 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|       new |  +197.991 MiB |  0.0% → 0.5% |        0 B → 198 MiB |     0 → 5 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|    +51.5% |  +176.961 MiB |  0.9% → 1.4% |    344 MiB → 521 MiB |   20 → 25 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|   +834.8% |  +169.658 MiB |  0.1% → 0.5% |   20.3 MiB → 190 MiB |         4 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|   +211.3% |  +154.936 MiB |  0.2% → 0.6% |   73.3 MiB → 228 MiB |     5 → 8 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|       new |  +140.626 MiB |  0.0% → 0.4% |        0 B → 141 MiB |     0 → 3 | `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

### Improvements

Call stacks with the largest decrease in bytes allocated in their leaf frame. `truncated` stands for missing outermost callers.

Common call stack: `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|  Change |        Delta |            % |                 Size |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------: | -----------: | -----------: | -------------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -69.1% | -645.944 MiB |  2.4% → 0.8% |    935 MiB → 289 MiB |    14 → 7 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -47.2% | -482.707 MiB |  2.7% → 1.4% |  1,022 MiB → 539 MiB |   19 → 26 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -16.2% | -402.039 MiB |  6.5% → 5.5% |  2.42 GiB → 2.03 GiB | 132 → 118 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -25.2% | -386.267 MiB |  4.0% → 3.0% |  1.49 GiB → 1.12 GiB |   90 → 86 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -98.1% | -379.063 MiB | 1.0% → <0.1% |    386 MiB → 7.2 MiB |     6 → 1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  -27.6% | -370.443 MiB |  3.5% → 2.6% |   1.31 GiB → 974 MiB |   60 → 43 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -26.9% | -367.045 MiB |  3.6% → 2.6% | 1.33 GiB → 1,000 MiB |   44 → 32 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -34.1% | -345.915 MiB |  2.7% → 1.8% |  1,016 MiB → 670 MiB |   40 → 33 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -42.5% | -344.853 MiB |  2.1% → 1.2% |    811 MiB → 466 MiB |    16 → 8 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -48.2% | -344.033 MiB |  1.9% → 1.0% |    714 MiB → 370 MiB |   29 → 30 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -98.6% | -309.985 MiB | 0.8% → <0.1% |   314 MiB → 4.25 MiB |         2 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← truncated                                                                                                                              |
| removed | -304.103 MiB |  0.8% → 0.0% |        304 MiB → 0 B |     1 → 0 | `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← truncated      |
|  -37.7% | -297.693 MiB |  2.1% → 1.3% |    789 MiB → 492 MiB |   28 → 26 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed | -272.089 MiB |  0.7% → 0.0% |        272 MiB → 0 B |     2 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| removed | -267.963 MiB |  0.7% → 0.0% |        268 MiB → 0 B |     1 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← truncated                                                                                                                        |
| removed | -259.186 MiB |  0.7% → 0.0% |        259 MiB → 0 B |     1 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -54.4% | -258.056 MiB |  1.2% → 0.6% |    474 MiB → 216 MiB |   26 → 22 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← truncated                                                                                                                                                                                                                                                                                                                                                      |
|  -93.2% | -253.151 MiB | 0.7% → <0.1% |   272 MiB → 18.6 MiB |     2 → 3 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← truncated                                               |
| removed | -214.453 MiB |  0.6% → 0.0% |        214 MiB → 0 B |     2 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← truncated |
|  -91.7% | -177.935 MiB | 0.5% → <0.1% |   194 MiB → 16.2 MiB |     5 → 2 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

# Retained heap profile diff

Retained 4.09 MiB → 2.62 MiB (-1.467 MiB, -35.9%) over 14 objects → 9 objects (299 KiB → 298 KiB per object).

| Category         | Change |      Delta |      % |                Size | Objects |
| ---------------- | -----: | ---------: | -----: | ------------------: | ------: |
| Standard library | -35.9% | -1.467 MiB | 100.0% | 4.08 MiB → 2.62 MiB |  12 → 8 |
| Ours             | -50.0% |      -40 B |  <0.1% |         80 B → 40 B |   2 → 1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

|  Change |        Delta |            % |               Size | Objects | Function                            | Location                       |
| ------: | -----------: | -----------: | -----------------: | ------: | ----------------------------------- | ------------------------------ |
| +433.6% | +255.085 KiB | 1.4% → 11.7% | 58.8 KiB → 314 KiB |   1 → 2 | `initCEN(int, ZipCoder)`            | `java.util.zip.ZipFile$Source` |
|     new |       +128 B | 0.0% → <0.1% |        0 B → 128 B |   0 → 1 | `copyOfRangeByte(byte[], int, int)` | `java.util.Arrays`             |
| +100.0% |        +24 B |        <0.1% |        24 B → 48 B |   1 → 2 | `valueOf(double)`                   | `java.lang.Double`             |
|     new |        +24 B | 0.0% → <0.1% |         0 B → 24 B |   0 → 1 | `toString()`                        | `java.lang.StringBuilder`      |

#### Improvements

Functions with the largest decrease in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |      Delta |             % |                Size | Objects | Function                          | Location                                    |
| ------: | ---------: | ------------: | ------------------: | ------: | --------------------------------- | ------------------------------------------- |
|  -45.4% | -1.716 MiB | 92.5% → 78.7% | 3.78 MiB → 2.06 MiB |   5 → 1 | `copyOf(Object[], int)`           | `java.util.Arrays`                          |
| removed |      -64 B |  <0.1% → 0.0% |          64 B → 0 B |   1 → 0 | `newLinkedHashMap(int)`           | `java.util.LinkedHashMap`                   |
|  -50.0% |      -40 B |         <0.1% |         80 B → 40 B |   2 → 1 | `lambda$generateData$4(int)`      | `org.renaissance.jdk.concurrent.JavaKMeans` |
| removed |      -32 B |  <0.1% → 0.0% |          32 B → 0 B |   1 → 0 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap`    |
| removed |      -32 B |  <0.1% → 0.0% |          32 B → 0 B |   2 → 0 | `getClassLoadingLock(String)`     | `java.lang.ClassLoader`                     |

##### Standard library

|  Change |      Delta |             % |                Size | Objects | Function                          | Location                                 |
| ------: | ---------: | ------------: | ------------------: | ------: | --------------------------------- | ---------------------------------------- |
|  -45.4% | -1.716 MiB | 92.5% → 78.7% | 3.78 MiB → 2.06 MiB |   5 → 1 | `copyOf(Object[], int)`           | `java.util.Arrays`                       |
| removed |      -64 B |  <0.1% → 0.0% |          64 B → 0 B |   1 → 0 | `newLinkedHashMap(int)`           | `java.util.LinkedHashMap`                |
| removed |      -32 B |  <0.1% → 0.0% |          32 B → 0 B |   1 → 0 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |
| removed |      -32 B |  <0.1% → 0.0% |          32 B → 0 B |   2 → 0 | `getClassLoadingLock(String)`     | `java.lang.ClassLoader`                  |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |        Delta |      % |               Size | Objects | Location                            |
| ------: | -----------: | -----: | -----------------: | ------: | ----------------------------------- |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `java.util.zip.ZipFile$Source:1733` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |  Delta |             % |        Size | Objects | Location                |
| -----: | -----: | ------------: | ----------: | ------: | ----------------------- |
|    new | +128 B | 0.0% → 100.0% | 0 B → 128 B |   0 → 1 | `java.util.Arrays:3863` |

##### `valueOf(double)` (`java.lang.Double`)

|  Change | Delta |      % |        Size | Objects | Location               |
| ------: | ----: | -----: | ----------: | ------: | ---------------------- |
| +100.0% | +24 B | 100.0% | 24 B → 48 B |   1 → 2 | `java.lang.Double:773` |

##### `toString()` (`java.lang.StringBuilder`)

| Change | Delta |             % |       Size | Objects | Location                      |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------------- |
|    new | +24 B | 0.0% → 100.0% | 0 B → 24 B |   0 → 1 | `java.lang.StringBuilder:475` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Objects | Location                |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- |
| -45.4% | -1.716 MiB | 100.0% | 3.78 MiB → 2.06 MiB |   5 → 1 | `java.util.Arrays:3482` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

|  Change | Delta |             % |       Size | Objects | Location                       |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------ |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `java.util.LinkedHashMap:1078` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |        Size | Objects | Location                                       |
| -----: | ----: | -----: | ----------: | ------: | ---------------------------------------------- |
| -50.0% | -40 B | 100.0% | 80 B → 40 B |   2 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % |       Size | Objects | Location                                      |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `java.util.concurrent.ConcurrentHashMap:1019` |

##### `getClassLoadingLock(String)` (`java.lang.ClassLoader`)

|  Change | Delta |             % |       Size | Objects | Location                    |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   2 → 0 | `java.lang.ClassLoader:680` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |        Delta |      % |               Size | Objects | Caller                                          | Location                       |
| ------: | -----------: | -----: | -----------------: | ------: | ----------------------------------------------- | ------------------------------ |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |  Delta |             % |        Size | Objects | Caller                          | Location           |
| -----: | -----: | ------------: | ----------: | ------: | ------------------------------- | ------------------ |
|    new | +128 B | 0.0% → 100.0% | 0 B → 128 B |   0 → 1 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `valueOf(double)` (`java.lang.Double`)

|  Change | Delta |      % |        Size | Objects | Caller                                           | Location                                    |
| ------: | ----: | -----: | ----------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +100.0% | +24 B | 100.0% | 24 B → 48 B |   1 → 2 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `toString()` (`java.lang.StringBuilder`)

| Change | Delta |             % |       Size | Objects | Caller                                       | Location                                    |
| -----: | ----: | ------------: | ---------: | ------: | -------------------------------------------- | ------------------------------------------- |
|    new | +24 B | 0.0% → 100.0% | 0 B → 24 B |   0 → 1 | `lookupPregenerated(LambdaForm, MethodType)` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Objects | Caller      | Location              |
| -----: | ---------: | -----: | ------------------: | ------: | ----------- | --------------------- |
| -45.4% | -1.716 MiB | 100.0% | 3.78 MiB → 2.06 MiB |   5 → 1 | `grow(int)` | `java.util.ArrayList` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

|  Change | Delta |             % |       Size | Objects | Caller        | Location                   |
| ------: | ----: | ------------: | ---------: | ------: | ------------- | -------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `<init>(int)` | `java.util.jar.Attributes` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % |       Size | Objects | Caller       | Location                                                               |
| ------: | ----: | ------------: | ---------: | ------: | ------------ | ---------------------------------------------------------------------- |
| removed | -80 B | 100.0% → 0.0% | 80 B → 0 B |   2 → 0 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a1d48` |
|     new | +40 B | 0.0% → 100.0% | 0 B → 40 B |   0 → 1 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d960` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % |       Size | Objects | Caller                        | Location                                 |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------- | ---------------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `putIfAbsent(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `getClassLoadingLock(String)` (`java.lang.ClassLoader`)

|  Change | Delta |            % |       Size | Objects | Caller                             | Location                                 |
| ------: | ----: | -----------: | ---------: | ------: | ---------------------------------- | ---------------------------------------- |
| removed | -16 B | 50.0% → 0.0% | 16 B → 0 B |   1 → 0 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |
| removed | -16 B | 50.0% → 0.0% | 16 B → 0 B |   1 → 0 | `loadClass(String, boolean)`       | `java.lang.ClassLoader`                  |

### Total size

#### Regressions

Functions with the largest increase in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size | Objects | Function                                                                                                               | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|     new |   +2.309 MiB |  0.0% → 88.2% |      0 B → 2.31 MiB |   0 → 6 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +12.1% | +255.218 KiB | 50.4% → 88.3% | 2.06 MiB → 2.31 MiB |   4 → 7 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +12.1% | +255.156 KiB | 50.5% → 88.3% | 2.06 MiB → 2.31 MiB |       7 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +11.8% | +255.093 KiB | 51.9% → 90.4% | 2.12 MiB → 2.37 MiB |   9 → 8 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  +11.8% | +255.093 KiB | 51.9% → 90.4% | 2.12 MiB → 2.37 MiB |   9 → 8 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`                   |
|  +11.8% | +255.093 KiB | 51.9% → 90.4% | 2.12 MiB → 2.37 MiB |   9 → 8 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`                    |
|  +11.8% | +255.093 KiB | 51.9% → 90.4% | 2.12 MiB → 2.37 MiB |   9 → 8 | `invokeExact_MT(Object, Object, Object, Object)`                                                                       | `java.lang.invoke.Invokers$Holder`                                     |
|  +11.8% | +255.093 KiB | 51.9% → 90.4% | 2.12 MiB → 2.37 MiB |   9 → 8 | `invokeImpl(Object, Object[])`                                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |
|  +11.8% | +255.093 KiB | 51.9% → 90.4% | 2.12 MiB → 2.37 MiB |   9 → 8 | `invoke(Object, Object[])`                                                                                             | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |
|  +11.8% | +255.093 KiB | 51.9% → 90.4% | 2.12 MiB → 2.37 MiB |   9 → 8 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
|  +11.8% | +255.093 KiB | 51.9% → 90.4% | 2.12 MiB → 2.37 MiB |   9 → 8 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  +11.8% | +255.093 KiB | 51.9% → 90.4% | 2.12 MiB → 2.37 MiB |   9 → 8 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  +11.8% | +255.093 KiB | 51.9% → 90.4% | 2.12 MiB → 2.37 MiB |   9 → 8 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  +12.1% | +255.093 KiB | 50.4% → 88.2% | 2.06 MiB → 2.31 MiB |   4 → 6 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8` |
|  +12.1% | +255.093 KiB | 50.4% → 88.2% | 2.06 MiB → 2.31 MiB |   4 → 6 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
|  +12.1% | +255.093 KiB | 50.4% → 88.2% | 2.06 MiB → 2.31 MiB |   4 → 6 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
| +433.6% | +255.085 KiB |  1.4% → 11.7% |  58.8 KiB → 314 KiB |   1 → 2 | `initCEN(int, ZipCoder)`                                                                                               | `java.util.zip.ZipFile$Source`                                         |
| +433.6% | +255.085 KiB |  1.4% → 11.7% |  58.8 KiB → 314 KiB |   1 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                                                                        | `java.util.zip.ZipFile$Source`                                         |
| +433.6% | +255.085 KiB |  1.4% → 11.7% |  58.8 KiB → 314 KiB |   1 → 2 | `get(File, boolean, ZipCoder)`                                                                                         | `java.util.zip.ZipFile$Source`                                         |
| +433.6% | +255.085 KiB |  1.4% → 11.7% |  58.8 KiB → 314 KiB |   1 → 2 | `<init>(ZipFile, ZipCoder, File, int)`                                                                                 | `java.util.zip.ZipFile$CleanableResource`                              |

##### Standard library

|  Change |        Delta |             % |                Size | Objects | Function                                                       | Location                                             |
| ------: | -----------: | ------------: | ------------------: | ------: | -------------------------------------------------------------- | ---------------------------------------------------- |
|  +11.8% | +255.093 KiB | 51.9% → 90.4% | 2.12 MiB → 2.37 MiB |   9 → 8 | `invokeStatic(Object, Object)`                                 | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
|  +11.8% | +255.093 KiB | 51.9% → 90.4% | 2.12 MiB → 2.37 MiB |   9 → 8 | `invoke(Object, Object, Object)`                               | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`  |
|  +11.8% | +255.093 KiB | 51.9% → 90.4% | 2.12 MiB → 2.37 MiB |   9 → 8 | `invokeExact_MT(Object, Object, Object, Object)`               | `java.lang.invoke.Invokers$Holder`                   |
|  +11.8% | +255.093 KiB | 51.9% → 90.4% | 2.12 MiB → 2.37 MiB |   9 → 8 | `invokeImpl(Object, Object[])`                                 | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +11.8% | +255.093 KiB | 51.9% → 90.4% | 2.12 MiB → 2.37 MiB |   9 → 8 | `invoke(Object, Object[])`                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +11.8% | +255.093 KiB | 51.9% → 90.4% | 2.12 MiB → 2.37 MiB |   9 → 8 | `invoke(Object, Object[])`                                     | `java.lang.reflect.Method`                           |
|  +12.1% | +255.093 KiB | 50.4% → 88.2% | 2.06 MiB → 2.31 MiB |   4 → 6 | `apply(Object)`                                                | `scala.runtime.function.JProcedure1`                 |
|  +12.1% | +255.093 KiB | 50.4% → 88.2% | 2.06 MiB → 2.31 MiB |   4 → 6 | `foreach(Function1)`                                           | `scala.collection.immutable.List`                    |
| +433.6% | +255.085 KiB |  1.4% → 11.7% |  58.8 KiB → 314 KiB |   1 → 2 | `initCEN(int, ZipCoder)`                                       | `java.util.zip.ZipFile$Source`                       |
| +433.6% | +255.085 KiB |  1.4% → 11.7% |  58.8 KiB → 314 KiB |   1 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                | `java.util.zip.ZipFile$Source`                       |
| +433.6% | +255.085 KiB |  1.4% → 11.7% |  58.8 KiB → 314 KiB |   1 → 2 | `get(File, boolean, ZipCoder)`                                 | `java.util.zip.ZipFile$Source`                       |
| +433.6% | +255.085 KiB |  1.4% → 11.7% |  58.8 KiB → 314 KiB |   1 → 2 | `<init>(ZipFile, ZipCoder, File, int)`                         | `java.util.zip.ZipFile$CleanableResource`            |
| +433.6% | +255.085 KiB |  1.4% → 11.7% |  58.8 KiB → 314 KiB |   1 → 2 | `<init>(File, int, Charset)`                                   | `java.util.zip.ZipFile`                              |
| +433.6% | +255.085 KiB |  1.4% → 11.7% |  58.8 KiB → 314 KiB |   1 → 2 | `<init>(File, int)`                                            | `java.util.zip.ZipFile`                              |
| +433.6% | +255.085 KiB |  1.4% → 11.7% |  58.8 KiB → 314 KiB |   1 → 2 | `<init>(File, boolean, int, Runtime$Version)`                  | `java.util.jar.JarFile`                              |
| +433.6% | +255.085 KiB |  1.4% → 11.7% |  58.8 KiB → 314 KiB |   1 → 2 | `getJarFile(URL)`                                              | `jdk.internal.loader.URLClassPath$JarLoader`         |
| +433.6% | +255.085 KiB |  1.4% → 11.7% |  58.8 KiB → 314 KiB |   1 → 2 | `run()`                                                        | `jdk.internal.loader.URLClassPath$JarLoader$1`       |
| +433.6% | +255.085 KiB |  1.4% → 11.7% |  58.8 KiB → 314 KiB |   1 → 2 | `ensureOpen()`                                                 | `jdk.internal.loader.URLClassPath$JarLoader`         |
| +433.6% | +255.085 KiB |  1.4% → 11.7% |  58.8 KiB → 314 KiB |   1 → 2 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` | `jdk.internal.loader.URLClassPath$JarLoader`         |
| +433.6% | +255.085 KiB |  1.4% → 11.7% |  58.8 KiB → 314 KiB |   1 → 2 | `run()`                                                        | `jdk.internal.loader.URLClassPath$3`                 |

#### Improvements

Functions with the largest decrease in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |      Delta |             % |                Size | Objects | Function                                                                                                               | Location                                                               |
| ------: | ---------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |  -2.06 MiB |  50.4% → 0.0% |      2.06 MiB → 0 B |   4 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -45.4% | -1.716 MiB | 92.5% → 78.7% | 3.78 MiB → 2.06 MiB |   5 → 1 | `copyOf(Object[], int)`                                                                                                | `java.util.Arrays`                                                     |
|  -45.4% | -1.716 MiB | 92.5% → 78.7% | 3.78 MiB → 2.06 MiB |   5 → 1 | `grow(int)`                                                                                                            | `java.util.ArrayList`                                                  |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `addAll(Collection)`                                                                                                   | `java.util.ArrayList`                                                  |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204fd0` |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                    |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204d88` |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `forEach(BiConsumer)`                                                                                                  | `java.util.HashMap`                                                    |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                                   |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `invoke()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011ffbc0` |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `exec()`                                                                                                               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |

##### Standard library

|  Change |      Delta |             % |                Size | Objects | Function                                             | Location                                            |
| ------: | ---------: | ------------: | ------------------: | ------: | ---------------------------------------------------- | --------------------------------------------------- |
|  -45.4% | -1.716 MiB | 92.5% → 78.7% | 3.78 MiB → 2.06 MiB |   5 → 1 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                  |
|  -45.4% | -1.716 MiB | 92.5% → 78.7% | 3.78 MiB → 2.06 MiB |   5 → 1 | `grow(int)`                                          | `java.util.ArrayList`                               |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `addAll(Collection)`                                 | `java.util.ArrayList`                               |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                 |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                 |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                 |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                 |
| removed | -1.716 MiB |  42.0% → 0.0% |      1.72 MiB → 0 B |   4 → 0 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`         |
| removed |      -64 B |  <0.1% → 0.0% |          64 B → 0 B |   1 → 0 | `newLinkedHashMap(int)`                              | `java.util.LinkedHashMap`                           |
| removed |      -64 B |  <0.1% → 0.0% |          64 B → 0 B |   1 → 0 | `<init>(int)`                                        | `java.util.jar.Attributes`                          |
| removed |      -64 B |  <0.1% → 0.0% |          64 B → 0 B |   1 → 0 | `read(InputStream, String)`                          | `java.util.jar.Manifest`                            |
| removed |      -64 B |  <0.1% → 0.0% |          64 B → 0 B |   1 → 0 | `<init>(JarVerifier, InputStream, String)`           | `java.util.jar.Manifest`                            |
| removed |      -64 B |  <0.1% → 0.0% |          64 B → 0 B |   1 → 0 | `<init>(InputStream, String)`                        | `java.util.jar.Manifest`                            |
| removed |      -64 B |  <0.1% → 0.0% |          64 B → 0 B |   1 → 0 | `getManifestFromReference()`                         | `java.util.jar.JarFile`                             |
| removed |      -64 B |  <0.1% → 0.0% |          64 B → 0 B |   1 → 0 | `getManifest()`                                      | `java.util.jar.JarFile`                             |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |      Delta |             % |           Size | Objects | Caller              | Location                                                               |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
|    new | +2.309 MiB | 0.0% → 100.0% | 0 B → 2.31 MiB |   0 → 6 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |      % |                Size | Objects | Caller           | Location                                    |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------- | ------------------------------------------- |
| +12.1% | +255.218 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   4 → 7 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |      % |                Size | Objects | Caller           | Location                                   |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------- | ------------------------------------------ |
| +12.1% | +255.156 KiB | 100.0% | 2.06 MiB → 2.31 MiB |       7 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change |        Delta |      % |                Size | Objects | Caller                         | Location                                             |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------ | ---------------------------------------------------- |
| +11.8% | +255.093 KiB | 100.0% | 2.12 MiB → 2.37 MiB |   9 → 8 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`)

| Change |        Delta |      % |                Size | Objects | Caller                           | Location                                            |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------- | --------------------------------------------------- |
| +11.8% | +255.093 KiB | 100.0% | 2.12 MiB → 2.37 MiB |   9 → 8 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001082400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`)

| Change |        Delta |      % |                Size | Objects | Caller                                           | Location                           |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| +11.8% | +255.093 KiB | 100.0% | 2.12 MiB → 2.37 MiB |   9 → 8 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |        Delta |      % |                Size | Objects | Caller                         | Location                                          |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------ | ------------------------------------------------- |
| +11.8% | +255.093 KiB | 100.0% | 2.12 MiB → 2.37 MiB |   9 → 8 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |        Delta |      % |                Size | Objects | Caller                     | Location                                          |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | ------------------------------------------------- |
| +11.8% | +255.093 KiB | 100.0% | 2.12 MiB → 2.37 MiB |   9 → 8 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |        Delta |      % |                Size | Objects | Caller                     | Location                   |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | -------------------------- |
| +11.8% | +255.093 KiB | 100.0% | 2.12 MiB → 2.37 MiB |   9 → 8 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |        Delta |      % |                Size | Objects | Caller                                                      | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------------------- | ------------------------------- |
| +11.8% | +255.093 KiB | 100.0% | 2.12 MiB → 2.37 MiB |   9 → 8 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Caller                                 | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------------- | ------------------------------- |
| +11.8% | +255.093 KiB | 100.0% | 2.12 MiB → 2.37 MiB |   9 → 8 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Caller           | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------- | ------------------------------- |
| +11.8% | +255.093 KiB | 100.0% | 2.12 MiB → 2.37 MiB |   9 → 8 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`)

| Change |        Delta |      % |                Size | Objects | Caller          | Location                             |
| -----: | -----------: | -----: | ------------------: | ------: | --------------- | ------------------------------------ |
| +12.1% | +255.093 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   4 → 6 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change |        Delta |      % |                Size | Objects | Caller               | Location                             |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------- | ------------------------------------ |
| +12.1% | +255.093 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   4 → 6 | `apply(Object)`      | `scala.runtime.function.JProcedure1` |
| +12.1% | +255.093 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   4 → 6 | `foreach(Function1)` | `scala.collection.immutable.List`    |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change |        Delta |      % |                Size | Objects | Caller                                                                        | Location                                    |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| +12.1% | +255.093 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   4 → 6 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |        Delta |      % |               Size | Objects | Caller                                          | Location                       |
| ------: | -----------: | -----: | -----------------: | ------: | ----------------------------------------------- | ------------------------------ |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(ZipFile$Source$Key, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |        Delta |      % |               Size | Objects | Caller                         | Location                       |
| ------: | -----------: | -----: | -----------------: | ------: | ------------------------------ | ------------------------------ |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `get(File, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `get(File, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |        Delta |      % |               Size | Objects | Caller                                 | Location                                  |
| ------: | -----------: | -----: | -----------------: | ------: | -------------------------------------- | ----------------------------------------- |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `<init>(ZipFile, ZipCoder, File, int)` | `java.util.zip.ZipFile$CleanableResource` |

##### `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`)

|  Change |        Delta |      % |               Size | Objects | Caller                       | Location                |
| ------: | -----------: | -----: | -----------------: | ------: | ---------------------------- | ----------------------- |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `<init>(File, int, Charset)` | `java.util.zip.ZipFile` |

##### `<init>(File, int, Charset)` (`java.util.zip.ZipFile`)

|  Change |        Delta |      % |               Size | Objects | Caller              | Location                |
| ------: | -----------: | -----: | -----------------: | ------: | ------------------- | ----------------------- |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `<init>(File, int)` | `java.util.zip.ZipFile` |

##### `<init>(File, int)` (`java.util.zip.ZipFile`)

|  Change |        Delta |      % |               Size | Objects | Caller                                        | Location                |
| ------: | -----------: | -----: | -----------------: | ------: | --------------------------------------------- | ----------------------- |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `<init>(File, boolean, int, Runtime$Version)` | `java.util.jar.JarFile` |

##### `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`)

|  Change |        Delta |      % |               Size | Objects | Caller            | Location                                     |
| ------: | -----------: | -----: | -----------------: | ------: | ----------------- | -------------------------------------------- |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `getJarFile(URL)` | `jdk.internal.loader.URLClassPath$JarLoader` |

##### `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`)

|  Change |        Delta |      % |               Size | Objects | Caller  | Location                                       |
| ------: | -----------: | -----: | -----------------: | ------: | ------- | ---------------------------------------------- |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `run()` | `jdk.internal.loader.URLClassPath$JarLoader$1` |

##### `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`)

|  Change |        Delta |      % |               Size | Objects | Caller                                                                      | Location                                       |
| ------: | -----------: | -----: | -----------------: | ------: | --------------------------------------------------------------------------- | ---------------------------------------------- |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `run()`                                                                     | `jdk.internal.loader.URLClassPath$JarLoader$1` |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`               |

##### `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`)

|  Change |        Delta |      % |               Size | Objects | Caller                                                         | Location                                     |
| ------: | -----------: | -----: | -----------------: | ------: | -------------------------------------------------------------- | -------------------------------------------- |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` | `jdk.internal.loader.URLClassPath$JarLoader` |

##### `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` (`jdk.internal.loader.URLClassPath$JarLoader`)

|  Change |        Delta |      % |               Size | Objects | Caller  | Location                             |
| ------: | -----------: | -----: | -----------------: | ------: | ------- | ------------------------------------ |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `run()` | `jdk.internal.loader.URLClassPath$3` |

##### `run()` (`jdk.internal.loader.URLClassPath$3`)

|  Change |        Delta |      % |               Size | Objects | Caller                                                                      | Location                             |
| ------: | -----------: | -----: | -----------------: | ------: | --------------------------------------------------------------------------- | ------------------------------------ |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `run()`                                                                     | `jdk.internal.loader.URLClassPath$3` |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`     |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |     Delta |             % |           Size | Objects | Caller              | Location                                                               |
| ------: | --------: | ------------: | -------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| removed | -2.06 MiB | 100.0% → 0.0% | 2.06 MiB → 0 B |   4 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000000801198798` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Objects | Caller      | Location              |
| -----: | ---------: | -----: | ------------------: | ------: | ----------- | --------------------- |
| -45.4% | -1.716 MiB | 100.0% | 3.78 MiB → 2.06 MiB |   5 → 1 | `grow(int)` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change |      Delta |            % |           Size | Objects | Caller               | Location              |
| ------: | ---------: | -----------: | -------------: | ------: | -------------------- | --------------------- |
| removed | -1.716 MiB | 45.4% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `addAll(Collection)` | `java.util.ArrayList` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|  Change |      Delta |             % |           Size | Objects | Caller                       | Location                                    |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------------- | ------------------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |      Delta |             % |           Size | Objects | Caller                  | Location                                                               |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204fd0` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204fd0`)

|  Change |      Delta |             % |           Size | Objects | Caller                              | Location            |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------------------- | ------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change |      Delta |             % |           Size | Objects | Caller                              | Location                                    |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------------------- | ------------------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |      Delta |             % |           Size | Objects | Caller                   | Location                                                               |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204d88` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204d88`)

|  Change |      Delta |             % |           Size | Objects | Caller                | Location            |
| ------: | ---------: | ------------: | -------------: | ------: | --------------------- | ------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|  Change |      Delta |             % |           Size | Objects | Caller            | Location                                    |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------- | ------------------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |      Delta |             % |           Size | Objects | Caller                     | Location                                                   |
| ------: | ---------: | ------------: | -------------: | ------: | -------------------------- | ---------------------------------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |      Delta |             % |           Size | Objects | Caller                           | Location                                                   |
| ------: | ---------: | ------------: | -------------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |      Delta |             % |           Size | Objects | Caller      | Location                                               |
| ------: | ---------: | ------------: | -------------: | ------: | ----------- | ------------------------------------------------------ |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change |      Delta |             % |           Size | Objects | Caller   | Location                             |
| ------: | ---------: | ------------: | -------------: | ------: | -------- | ------------------------------------ |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|  Change |      Delta |             % |           Size | Objects | Caller     | Location                            |
| ------: | ---------: | ------------: | -------------: | ------: | ---------- | ----------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change |      Delta |             % |           Size | Objects | Caller                                               | Location                                      |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`           |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|  Change |      Delta |             % |           Size | Objects | Caller                         | Location                                    |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------------ | ------------------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |      Delta |             % |           Size | Objects | Caller   | Location                                                               |
| ------: | ---------: | ------------: | -------------: | ------: | -------- | ---------------------------------------------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011ffbc0` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011ffbc0`)

|  Change |      Delta |             % |           Size | Objects | Caller   | Location                                            |
| ------: | ---------: | ------------: | -------------: | ------: | -------- | --------------------------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|  Change |      Delta |             % |           Size | Objects | Caller     | Location                            |
| ------: | ---------: | ------------: | -------------: | ------: | ---------- | ----------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change |      Delta |             % |           Size | Objects | Caller                                   | Location                            |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------------------------- | ----------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|  Change |      Delta |             % |           Size | Objects | Caller                              | Location                            |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------------------- | ----------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change |      Delta |             % |           Size | Objects | Caller  | Location                                    |
| ------: | ---------: | ------------: | -------------: | ------: | ------- | ------------------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

|  Change | Delta |             % |       Size | Objects | Caller        | Location                   |
| ------: | ----: | ------------: | ---------: | ------: | ------------- | -------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `<init>(int)` | `java.util.jar.Attributes` |

##### `<init>(int)` (`java.util.jar.Attributes`)

|  Change | Delta |             % |       Size | Objects | Caller                      | Location                 |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------- | ------------------------ |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `read(InputStream, String)` | `java.util.jar.Manifest` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

|  Change | Delta |             % |       Size | Objects | Caller                                     | Location                 |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------ | ------------------------ |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `<init>(JarVerifier, InputStream, String)` | `java.util.jar.Manifest` |

##### `<init>(JarVerifier, InputStream, String)` (`java.util.jar.Manifest`)

|  Change | Delta |             % |       Size | Objects | Caller                        | Location                 |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------- | ------------------------ |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `<init>(InputStream, String)` | `java.util.jar.Manifest` |

##### `<init>(InputStream, String)` (`java.util.jar.Manifest`)

|  Change | Delta |             % |       Size | Objects | Caller                       | Location                |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------- | ----------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `getManifestFromReference()` | `java.util.jar.JarFile` |

##### `getManifestFromReference()` (`java.util.jar.JarFile`)

|  Change | Delta |             % |       Size | Objects | Caller          | Location                |
| ------: | ----: | ------------: | ---------: | ------: | --------------- | ----------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `getManifest()` | `java.util.jar.JarFile` |

##### `getManifest()` (`java.util.jar.JarFile`)

|  Change | Delta |             % |       Size | Objects | Caller          | Location                                       |
| ------: | ----: | ------------: | ---------: | ------: | --------------- | ---------------------------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `getManifest()` | `jdk.internal.loader.URLClassPath$JarLoader$2` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |            % |           Size | Objects | Callee                                                                                       | Location                                  |
| -----: | -----------: | -----------: | -------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |    +2.06 MiB | 0.0% → 89.2% | 0 B → 2.06 MiB |   0 → 5 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new | +255.085 KiB | 0.0% → 10.8% |  0 B → 255 KiB |   0 → 1 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |            % |                Size | Objects | Callee                                                           | Location                               |
| -----: | -----------: | -----------: | ------------------: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| +12.1% | +255.093 KiB |       100.0% | 2.06 MiB → 2.31 MiB |   4 → 6 | `foreach(Function1)`                                             | `scala.collection.immutable.List`      |
|    new |       +128 B | 0.0% → <0.1% |         0 B → 128 B |   0 → 1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |            % |                Size | Objects | Callee                                                                        | Location                                    |
| ------: | -----------: | -----------: | ------------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
|  +12.1% | +255.218 KiB |       100.0% | 2.06 MiB → 2.31 MiB |   4 → 7 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |        -48 B | <0.1% → 0.0% |          48 B → 0 B |   2 → 0 | `parse(String[])`                                                             | `org.renaissance.harness.ConfigParser`      |
| removed |        -16 B | <0.1% → 0.0% |          16 B → 0 B |   1 → 0 | `loadClass(String)`                                                           | `java.lang.ClassLoader`                     |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change |        Delta |             % |                Size | Objects | Callee              | Location                                    |
| -----: | -----------: | ------------: | ------------------: | ------: | ------------------- | ------------------------------------------- |
| +12.1% | +255.156 KiB | 97.3% → 97.6% | 2.06 MiB → 2.31 MiB |       7 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
|  -0.1% |        -64 B |   2.7% → 2.4% | 58.9 KiB → 58.8 KiB |   2 → 1 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`)

| Change |        Delta |      % |                Size | Objects | Callee           | Location                                   |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------- | ------------------------------------------ |
| +11.8% | +255.093 KiB | 100.0% | 2.12 MiB → 2.37 MiB |   9 → 8 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`)

| Change |        Delta |      % |                Size | Objects | Callee                         | Location                                             |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------ | ---------------------------------------------------- |
| +11.8% | +255.093 KiB | 100.0% | 2.12 MiB → 2.37 MiB |   9 → 8 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |        Delta |      % |                Size | Objects | Callee                           | Location                                            |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------- | --------------------------------------------------- |
| +11.8% | +255.093 KiB | 100.0% | 2.12 MiB → 2.37 MiB |   9 → 8 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001082400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |        Delta |      % |                Size | Objects | Callee                                           | Location                           |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| +11.8% | +255.093 KiB | 100.0% | 2.12 MiB → 2.37 MiB |   9 → 8 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |        Delta |      % |                Size | Objects | Callee                         | Location                                          |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------ | ------------------------------------------------- |
| +11.8% | +255.093 KiB | 100.0% | 2.12 MiB → 2.37 MiB |   9 → 8 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |        Delta |      % |                Size | Objects | Callee                     | Location                                          |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | ------------------------------------------------- |
| +11.8% | +255.093 KiB | 100.0% | 2.12 MiB → 2.37 MiB |   9 → 8 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Callee                     | Location                   |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | -------------------------- |
| +11.8% | +255.093 KiB | 100.0% | 2.12 MiB → 2.37 MiB |   9 → 8 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Callee                                                      | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------------------- | ------------------------------- |
| +11.8% | +255.093 KiB | 100.0% | 2.12 MiB → 2.37 MiB |   9 → 8 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Callee                                 | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------------- | ------------------------------- |
| +11.8% | +255.093 KiB | 100.0% | 2.12 MiB → 2.37 MiB |   9 → 8 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`)

|  Change |      Delta |             % |           Size | Objects | Callee                                                                                                                 | Location                                    |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new | +2.309 MiB | 0.0% → 100.0% | 0 B → 2.31 MiB |   0 → 6 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |  -2.06 MiB | 100.0% → 0.0% | 2.06 MiB → 0 B |   4 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change |        Delta |      % |                Size | Objects | Callee              | Location                                                               |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| +12.1% | +255.093 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   4 → 6 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8` |
| +12.1% | +255.093 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   4 → 6 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change |        Delta |      % |                Size | Objects | Callee          | Location                             |
| -----: | -----------: | -----: | ------------------: | ------: | --------------- | ------------------------------------ |
| +12.1% | +255.093 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   4 → 6 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `<init>(ZipFile$Source$Key, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |        Delta |      % |               Size | Objects | Callee                   | Location                       |
| ------: | -----------: | -----: | -----------------: | ------: | ------------------------ | ------------------------------ |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `initCEN(int, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `get(File, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |        Delta |      % |               Size | Objects | Callee                                          | Location                       |
| ------: | -----------: | -----: | -----------------: | ------: | ----------------------------------------------- | ------------------------------ |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`)

|  Change |        Delta |      % |               Size | Objects | Callee                         | Location                       |
| ------: | -----------: | -----: | -----------------: | ------: | ------------------------------ | ------------------------------ |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `get(File, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(File, int, Charset)` (`java.util.zip.ZipFile`)

|  Change |        Delta |      % |               Size | Objects | Callee                                 | Location                                  |
| ------: | -----------: | -----: | -----------------: | ------: | -------------------------------------- | ----------------------------------------- |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `<init>(ZipFile, ZipCoder, File, int)` | `java.util.zip.ZipFile$CleanableResource` |

##### `<init>(File, int)` (`java.util.zip.ZipFile`)

|  Change |        Delta |      % |               Size | Objects | Callee                       | Location                |
| ------: | -----------: | -----: | -----------------: | ------: | ---------------------------- | ----------------------- |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `<init>(File, int, Charset)` | `java.util.zip.ZipFile` |

##### `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`)

|  Change |        Delta |      % |               Size | Objects | Callee              | Location                |
| ------: | -----------: | -----: | -----------------: | ------: | ------------------- | ----------------------- |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `<init>(File, int)` | `java.util.zip.ZipFile` |

##### `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`)

|  Change |        Delta |      % |               Size | Objects | Callee                                        | Location                |
| ------: | -----------: | -----: | -----------------: | ------: | --------------------------------------------- | ----------------------- |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `<init>(File, boolean, int, Runtime$Version)` | `java.util.jar.JarFile` |

##### `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`)

|  Change |        Delta |      % |               Size | Objects | Callee            | Location                                       |
| ------: | -----------: | -----: | -----------------: | ------: | ----------------- | ---------------------------------------------- |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `getJarFile(URL)` | `jdk.internal.loader.URLClassPath$JarLoader`   |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `run()`           | `jdk.internal.loader.URLClassPath$JarLoader$1` |

##### `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`)

|  Change |        Delta |      % |               Size | Objects | Callee                                                          | Location                         |
| ------: | -----------: | -----: | -----------------: | ------: | --------------------------------------------------------------- | -------------------------------- |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` | `java.security.AccessController` |

##### `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` (`jdk.internal.loader.URLClassPath$JarLoader`)

|  Change |        Delta |      % |               Size | Objects | Callee         | Location                                     |
| ------: | -----------: | -----: | -----------------: | ------: | -------------- | -------------------------------------------- |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `ensureOpen()` | `jdk.internal.loader.URLClassPath$JarLoader` |

##### `run()` (`jdk.internal.loader.URLClassPath$3`)

|  Change |        Delta |      % |               Size | Objects | Callee                                                         | Location                                     |
| ------: | -----------: | -----: | -----------------: | ------: | -------------------------------------------------------------- | -------------------------------------------- |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` | `jdk.internal.loader.URLClassPath$JarLoader` |
| +433.6% | +255.085 KiB | 100.0% | 58.8 KiB → 314 KiB |   1 → 2 | `run()`                                                        | `jdk.internal.loader.URLClassPath$3`         |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |     Delta |             % |           Size | Objects | Callee               | Location                                  |
| ------: | --------: | ------------: | -------------: | ------: | -------------------- | ----------------------------------------- |
| removed | -2.06 MiB | 100.0% → 0.0% | 2.06 MiB → 0 B |   4 → 0 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |      Delta |      % |                Size | Objects | Callee                  | Location           |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- | ------------------ |
| -45.4% | -1.716 MiB | 100.0% | 3.78 MiB → 2.06 MiB |   5 → 1 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|  Change |      Delta |             % |           Size | Objects | Callee      | Location              |
| ------: | ---------: | ------------: | -------------: | ------: | ----------- | --------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `grow(int)` | `java.util.ArrayList` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |      Delta |             % |           Size | Objects | Callee               | Location              |
| ------: | ---------: | ------------: | -------------: | ------: | -------------------- | --------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `addAll(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204fd0`)

|  Change |      Delta |             % |           Size | Objects | Callee                       | Location                                    |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------------- | ------------------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change |      Delta |             % |           Size | Objects | Callee                  | Location                                                               |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204fd0` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |      Delta |             % |           Size | Objects | Callee                              | Location            |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------------------- | ------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204d88`)

|  Change |      Delta |             % |           Size | Objects | Callee                              | Location                                    |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------------------- | ------------------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|  Change |      Delta |             % |           Size | Objects | Callee                   | Location                                                               |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204d88` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |      Delta |             % |           Size | Objects | Callee                | Location            |
| ------: | ---------: | ------------: | -------------: | ------: | --------------------- | ------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |      Delta |             % |           Size | Objects | Callee            | Location                                    |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------- | ------------------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |      Delta |             % |           Size | Objects | Callee                     | Location                                                   |
| ------: | ---------: | ------------: | -------------: | ------: | -------------------------- | ---------------------------------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change |      Delta |             % |           Size | Objects | Callee                           | Location                                                   |
| ------: | ---------: | ------------: | -------------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|  Change |      Delta |             % |           Size | Objects | Callee      | Location                                               |
| ------: | ---------: | ------------: | -------------: | ------: | ----------- | ------------------------------------------------------ |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change |      Delta |             % |           Size | Objects | Callee   | Location                                            |
| ------: | ---------: | ------------: | -------------: | ------: | -------- | --------------------------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `exec()` | `java.util.concurrent.RecursiveTask`                |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|  Change |      Delta |             % |           Size | Objects | Callee     | Location                            |
| ------: | ---------: | ------------: | -------------: | ------: | ---------- | ----------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |      Delta |             % |           Size | Objects | Callee     | Location                            |
| ------: | ---------: | ------------: | -------------: | ------: | ---------- | ----------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011ffbc0`)

|  Change |      Delta |             % |           Size | Objects | Callee                         | Location                                    |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------------ | ------------------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|  Change |      Delta |             % |           Size | Objects | Callee   | Location                                                               |
| ------: | ---------: | ------------: | -------------: | ------: | -------- | ---------------------------------------------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011ffbc0` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change |      Delta |             % |           Size | Objects | Callee     | Location                            |
| ------: | ---------: | ------------: | -------------: | ------: | ---------- | ----------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|  Change |      Delta |             % |           Size | Objects | Callee                                               | Location                                      |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change |      Delta |             % |           Size | Objects | Callee                                   | Location                            |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------------------------- | ----------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|  Change |      Delta |             % |           Size | Objects | Callee                              | Location                            |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------------------- | ----------------------------------- |
| removed | -1.716 MiB | 100.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `<init>(int)` (`java.util.jar.Attributes`)

|  Change | Delta |             % |       Size | Objects | Callee                  | Location                  |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------- | ------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `newLinkedHashMap(int)` | `java.util.LinkedHashMap` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

|  Change | Delta |             % |       Size | Objects | Callee        | Location                   |
| ------: | ----: | ------------: | ---------: | ------: | ------------- | -------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `<init>(int)` | `java.util.jar.Attributes` |

##### `<init>(JarVerifier, InputStream, String)` (`java.util.jar.Manifest`)

|  Change | Delta |             % |       Size | Objects | Callee                      | Location                 |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------- | ------------------------ |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `read(InputStream, String)` | `java.util.jar.Manifest` |

##### `<init>(InputStream, String)` (`java.util.jar.Manifest`)

|  Change | Delta |             % |       Size | Objects | Callee                                     | Location                 |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------ | ------------------------ |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `<init>(JarVerifier, InputStream, String)` | `java.util.jar.Manifest` |

##### `getManifestFromReference()` (`java.util.jar.JarFile`)

|  Change | Delta |             % |       Size | Objects | Callee                        | Location                 |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------- | ------------------------ |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `<init>(InputStream, String)` | `java.util.jar.Manifest` |

##### `getManifest()` (`java.util.jar.JarFile`)

|  Change | Delta |             % |       Size | Objects | Callee                       | Location                |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------- | ----------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `getManifestFromReference()` | `java.util.jar.JarFile` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes retained in their leaf frame.

Common call stack: `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`

| Change |        Delta |            % |           Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -----: | -----------: | -----------: | -------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +2.06 MiB | 0.0% → 78.7% | 0 B → 2.06 MiB |   0 → 1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `accept(Object, Object)` (`java.util.stream.Collectors$$Lambda.0x00000070010c4338`) ← `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|    new | +255.085 KiB |  0.0% → 9.5% |  0 B → 255 KiB |   0 → 1 | `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`) ← `<init>(ZipFile$Source$Key, boolean, ZipCoder)` ← `get(File, boolean, ZipCoder)` ← `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`) ← `<init>(File, int, Charset)` (`java.util.zip.ZipFile`) ← `<init>(File, int)` ← `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`) ← `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` ← `run()` (`jdk.internal.loader.URLClassPath$3`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `getLoader(URL)` (`jdk.internal.loader.URLClassPath`) ← `getLoader(int)` ← `getResource(String, boolean)` ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `getDeclaredConstructors0(boolean)` (`java.lang.Class`) ← `privateGetDeclaredConstructors(boolean)` ← `getConstructor0(Class[], int)` ← `getDeclaredConstructor(Class[])` ← `createBenchmark(BenchmarkDescriptor)` (`org.renaissance.core.BenchmarkSuite`) ← `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|    new |       +128 B | 0.0% → <0.1% |    0 B → 128 B |   0 → 1 | `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`) ← `copyOfRange(byte[], int, int)` ← `<init>(AbstractStringBuilder, Void)` (`java.lang.String`) ← `<init>(StringBuilder)` ← `toString()` (`java.lang.StringBuilder`) ← `unparseMethod(Class, Class[])` (`sun.invoke.util.BytecodeDescriptor`) ← `toMethodDescriptorString()` (`java.lang.invoke.MethodType`) ← `methodPrologue()` (`java.lang.invoke.InvokerBytecodeGenerator`) ← `addMethod()` ← `generateCustomizedCodeBytes()` ← `generateCustomizedCode(LambdaForm, MethodType)` ← `compileToBytecode()` (`java.lang.invoke.LambdaForm`) ← `callSiteForm(MethodType, boolean)` (`java.lang.invoke.Invokers`) ← `linkToTargetMethod(MethodType)` ← `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`) ← `linkCallSite(Object, Object, Object, Object, Object, Object[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|    new |        +48 B | 0.0% → <0.1% |     0 B → 48 B |   0 → 2 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d728`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d4f0`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|    new |        +40 B | 0.0% → <0.1% |     0 B → 40 B |   0 → 1 | `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d960`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`) ← `builder(long, IntFunction)` (`java.util.stream.Nodes`) ← `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`) ← `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`) ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d4f0`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|    new |        +24 B | 0.0% → <0.1% |     0 B → 24 B |   0 → 1 | `toString()` (`java.lang.StringBuilder`) ← `lookupPregenerated(LambdaForm, MethodType)` (`java.lang.invoke.InvokerBytecodeGenerator`) ← `generateCustomizedCode(LambdaForm, MethodType)` ← `compileToBytecode()` (`java.lang.invoke.LambdaForm`) ← `prepare()` ← `<init>(MethodType, LambdaForm)` (`java.lang.invoke.MethodHandle`) ← `<init>(MethodType, LambdaForm)` (`java.lang.invoke.BoundMethodHandle`) ← `<init>(MethodType, LambdaForm, Object)` (`java.lang.invoke.BoundMethodHandle$Species_L`) ← `make(MethodType, LambdaForm, Object)` ← `makeReinvoker(MethodHandle)` (`java.lang.invoke.BoundMethodHandle`) ← `rebind()` (`java.lang.invoke.DirectMethodHandle`) ← `prepender(Class)` (`java.lang.invoke.StringConcatFactory`) ← `prepender(String, Class)` ← `prepender(int, String[], Class[], int)` ← `filterInPrependers(MethodHandle, String[], Class[])` ← `generateMHInlineCopy(MethodType, String[])` ← `makeConcatWithConstants(MethodHandles$Lookup, String, MethodType, String, Object[])` ← `invokeStatic(Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`) ← `delegate(Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.DelegatingMethodHandle$Holder`) ← `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`) ← `makeSite(MethodHandle, String, MethodType, Object, Class)` (`java.lang.invoke.CallSite`) ← `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`) ← `linkCallSite(Object, Object, Object, Object, Object, Object[])` ← `rowToArray$1$$anonfun$1(Map, int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `apply$mcDI$sp(int)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011f6680`) ← `apply(Object)` (`scala.runtime.java8.JFunction1$mcDI$sp`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `setUpBeforeAll$$anonfun$1(Map)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011a2908`) ← `lambda$toCsvRows$2(String[], Function, String)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`) ← `apply(Object)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x000000700119b5c8`) ← `accept(Object)` (`java.util.stream.ReferencePipeline$3$1`) ← `forEachRemaining(Consumer)` (`java.util.Spliterators$ArraySpliterator`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `toCsvRows(Function)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) |

### Improvements

Call stacks with the largest decrease in bytes retained in their leaf frame.

|  Change |      Delta |            % |           Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------: | ---------: | -----------: | -------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| removed |  -2.06 MiB | 50.4% → 0.0% | 2.06 MiB → 0 B |   1 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `accept(Object, Object)` (`java.util.stream.Collectors$$Lambda.0x00000008010c40c8`) ← `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000000801198798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed | -1.716 MiB | 42.0% → 0.0% | 1.72 MiB → 0 B |   4 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed |      -80 B | <0.1% → 0.0% |     80 B → 0 B |   2 → 0 | `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a1d48`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`) ← `builder(long, IntFunction)` (`java.util.stream.Nodes`) ← `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`) ← `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`) ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a18d8`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000000801198798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                       |
| removed |      -64 B | <0.1% → 0.0% |     64 B → 0 B |   1 → 0 | `newLinkedHashMap(int)` (`java.util.LinkedHashMap`) ← `<init>(int)` (`java.util.jar.Attributes`) ← `read(InputStream, String)` (`java.util.jar.Manifest`) ← `<init>(JarVerifier, InputStream, String)` ← `<init>(InputStream, String)` ← `getManifestFromReference()` (`java.util.jar.JarFile`) ← `getManifest()` ← `getManifest()` (`jdk.internal.loader.URLClassPath$JarLoader$2`) ← `defineClass(String, Resource)` (`java.net.URLClassLoader`) ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed |      -32 B | <0.1% → 0.0% |     32 B → 0 B |   1 → 0 | `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`) ← `putIfAbsent(Object, Object)` ← `getClassLoadingLock(String)` (`java.lang.ClassLoader`) ← `loadClass(String, boolean)` ← `loadClass(String)` ← `from(IterableOnce)` (`scala.collection.immutable.ListMap$`) ← `from(IterableOnce)` ← `apply(Seq)` (`scala.collection.MapFactory`) ← `apply$(MapFactory, Seq)` ← `apply(Seq)` (`scala.collection.immutable.ListMap$`) ← `runParser(Seq, Object, List, OParserSetup)` (`scopt.ORunner$`) ← `parse(Seq, Object)` (`scopt.OptionParser`) ← `parse(String[])` (`org.renaissance.harness.ConfigParser`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed |      -24 B | <0.1% → 0.0% |     24 B → 0 B |   1 → 0 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a1b10`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a18d8`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000000801198798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
| removed |      -16 B | <0.1% → 0.0% |     16 B → 0 B |   1 → 0 | `getClassLoadingLock(String)` (`java.lang.ClassLoader`) ← `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |      -16 B | <0.1% → 0.0% |     16 B → 0 B |   1 → 0 | `getClassLoadingLock(String)` (`java.lang.ClassLoader`) ← `loadClass(String, boolean)` ← `loadClass(String)` ← `withBenchmarkSpecification(String)` (`org.renaissance.harness.Config`) ← `org$renaissance$harness$ConfigParser$$anon$1$$_$$lessinit$greater$$anonfun$25(String, Config)` (`org.renaissance.harness.ConfigParser`) ← `apply(Object, Object)` (`org.renaissance.harness.ConfigParser$$anon$1$$Lambda.0x000000080115f290`) ← `action$$anonfun$1(Function2, Object, Object)` (`scopt.OptionDef`) ← `apply(Object, Object)` (`scopt.OptionDef$$Lambda.0x00000008011572e0`) ← `applyArgument(String, Object, Option)` (`scopt.OptionDef`) ← `handleArgument$1(List, OParserSetup, ListBuffer, ListBuffer, ListBuffer, ObjectRef, BooleanRef, ListBuffer, LazyRef, LazyRef, LazyRef, OptionDef, String)` (`scopt.ORunner$`) ← `runParser(Seq, Object, List, OParserSetup)` ← `parse(Seq, Object)` (`scopt.OptionParser`) ← `parse(String[])` (`org.renaissance.harness.ConfigParser`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

# Lock contention profile diff

Blocked 7.38s → 7.64s (+262.17ms, +3.6%) over 83 contentions → 80 contentions (89.0ms → 95.6ms per contention).

| Category         | Change |     Delta |      % |          Time | Contentions |
| ---------------- | -----: | --------: | -----: | ------------: | ----------: |
| Standard library |  +3.6% | +262.17ms | 100.0% | 7.38s → 7.64s |     83 → 80 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

| Change |     Delta |      % |          Time | Contentions | Function              | Location                   |
| -----: | --------: | -----: | ------------: | ----------: | --------------------- | -------------------------- |
|  +3.6% | +262.17ms | 100.0% | 7.38s → 7.64s |     83 → 80 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change |     Delta |             % |              Time | Contentions | Caller            | Location                                 |
| -----: | --------: | ------------: | ----------------: | ----------: | ----------------- | ---------------------------------------- |
|  +2.7% | +191.32ms | 96.3% → 95.5% |     7.11s → 7.30s |     74 → 69 | `park()`          | `java.util.concurrent.locks.LockSupport` |
| +26.1% |  +70.85ms |   3.7% → 4.5% | 271.8ms → 342.7ms |      9 → 11 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

### Total time

#### Regressions

Functions with the largest increase in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |     Delta |             % |          Time | Contentions | Function                                                                                                               | Location                                                               |
| -----: | --------: | ------------: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |   +5.921s |  0.0% → 77.4% |   0ms → 5.92s |      0 → 16 | `$anonfun$2(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|    new |   +5.921s |  0.0% → 77.4% |   0ms → 5.92s |      0 → 16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| +18.9% | +271.91ms | 19.5% → 22.4% | 1.43s → 1.70s |     57 → 63 | `awaitWork(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
|  +3.6% | +262.17ms |        100.0% | 7.38s → 7.64s |     83 → 80 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                             |
|  +2.7% | +191.32ms | 96.3% → 95.5% | 7.11s → 7.30s |     74 → 69 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                               |
|  +9.6% | +150.57ms | 21.3% → 22.6% | 1.57s → 1.72s |     66 → 64 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
|  +9.6% | +150.57ms | 21.3% → 22.6% | 1.57s → 1.72s |     66 → 64 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                            |
|  +2.3% | +130.41ms | 78.4% → 77.4% | 5.79s → 5.92s |          16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  +2.3% | +130.41ms | 78.4% → 77.4% | 5.79s → 5.92s |          16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +2.3% | +130.41ms | 78.4% → 77.4% | 5.79s → 5.92s |          16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +2.3% | +130.41ms | 78.4% → 77.4% | 5.79s → 5.92s |          16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000700121db90`   |
|  +2.3% | +130.41ms | 78.4% → 77.4% | 5.79s → 5.92s |          16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
|  +2.3% | +130.41ms | 78.4% → 77.4% | 5.79s → 5.92s |          16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +2.3% | +130.41ms | 78.4% → 77.4% | 5.79s → 5.92s |          16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  +2.3% | +130.41ms | 78.4% → 77.4% | 5.79s → 5.92s |          16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  +2.3% | +130.41ms | 78.4% → 77.4% | 5.79s → 5.92s |          16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8` |
|  +2.3% | +130.41ms | 78.4% → 77.4% | 5.79s → 5.92s |          16 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
|  +2.3% | +130.41ms | 78.4% → 77.4% | 5.79s → 5.92s |          16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  +2.3% | +130.41ms | 78.4% → 77.4% | 5.79s → 5.92s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +2.3% | +130.41ms | 78.4% → 77.4% | 5.79s → 5.92s |          16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |

##### Standard library

| Change |     Delta |             % |              Time | Contentions | Function                                         | Location                                             |
| -----: | --------: | ------------: | ----------------: | ----------: | ------------------------------------------------ | ---------------------------------------------------- |
| +18.9% | +271.91ms | 19.5% → 22.4% |     1.43s → 1.70s |     57 → 63 | `awaitWork(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
|  +3.6% | +262.17ms |        100.0% |     7.38s → 7.64s |     83 → 80 | `park(boolean, long)`                            | `jdk.internal.misc.Unsafe`                           |
|  +2.7% | +191.32ms | 96.3% → 95.5% |     7.11s → 7.30s |     74 → 69 | `park()`                                         | `java.util.concurrent.locks.LockSupport`             |
|  +9.6% | +150.57ms | 21.3% → 22.6% |     1.57s → 1.72s |     66 → 64 | `runWorker(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
|  +9.6% | +150.57ms | 21.3% → 22.6% |     1.57s → 1.72s |     66 → 64 | `run()`                                          | `java.util.concurrent.ForkJoinWorkerThread`          |
|  +2.3% | +130.41ms | 78.4% → 77.4% |     5.79s → 5.92s |          16 | `get()`                                          | `java.util.concurrent.ForkJoinTask`                  |
|  +2.3% | +130.41ms | 78.4% → 77.4% |     5.79s → 5.92s |          16 | `map(Function1)`                                 | `scala.collection.immutable.Range`                   |
|  +2.3% | +130.41ms | 78.4% → 77.4% |     5.79s → 5.92s |          16 | `apply(Object)`                                  | `scala.runtime.function.JProcedure1`                 |
|  +2.3% | +130.41ms | 78.4% → 77.4% |     5.79s → 5.92s |          16 | `foreach(Function1)`                             | `scala.collection.immutable.List`                    |
|  +2.3% | +130.41ms | 78.4% → 77.4% |     5.79s → 5.92s |          16 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
|  +2.3% | +130.41ms | 78.4% → 77.4% |     5.79s → 5.92s |          16 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`  |
|  +2.3% | +130.41ms | 78.4% → 77.4% |     5.79s → 5.92s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                   |
|  +2.3% | +130.41ms | 78.4% → 77.4% |     5.79s → 5.92s |          16 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +2.3% | +130.41ms | 78.4% → 77.4% |     5.79s → 5.92s |          16 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +2.3% | +130.41ms | 78.4% → 77.4% |     5.79s → 5.92s |          16 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                           |
| +26.1% |  +70.85ms |   3.7% → 4.5% | 271.8ms → 342.7ms |      9 → 11 | `parkUntil(long)`                                | `java.util.concurrent.locks.LockSupport`             |

#### Improvements

Functions with the largest decrease in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |             % |             Time | Contentions | Function                                                                                                               | Location                                                               |
| ------: | --------: | ------------: | ---------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |   -5.791s |  78.4% → 0.0% |      5.79s → 0ms |      16 → 0 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| removed |   -5.791s |  78.4% → 0.0% |      5.79s → 0ms |      16 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -90.2% | -140.15ms |   2.1% → 0.2% | 155.4ms → 15.3ms |      10 → 1 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                    |
|  -90.2% | -140.15ms |   2.1% → 0.2% | 155.4ms → 15.3ms |      10 → 1 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -90.2% | -140.15ms |   2.1% → 0.2% | 155.4ms → 15.3ms |      10 → 1 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                                   |
|  -90.2% | -140.15ms |   2.1% → 0.2% | 155.4ms → 15.3ms |      10 → 1 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
|  -88.8% | -121.34ms |   1.9% → 0.2% | 136.6ms → 15.3ms |       9 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  -88.8% | -121.34ms |   1.9% → 0.2% | 136.6ms → 15.3ms |       9 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                                    |
|  -82.4% |  -71.54ms |   1.2% → 0.2% |  86.8ms → 15.3ms |       6 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                              | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| removed |  -57.74ms |   0.8% → 0.0% |     57.7ms → 0ms |       4 → 0 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                                                              | `java.util.concurrent.ForkJoinPool`                                    |
|  -69.2% |  -34.28ms |   0.7% → 0.2% |  49.6ms → 15.3ms |       4 → 1 | `invoke()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
|  -61.4% |  -24.25ms |   0.5% → 0.2% |  39.5ms → 15.3ms |       3 → 1 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -61.4% |  -24.25ms |   0.5% → 0.2% |  39.5ms → 15.3ms |       3 → 1 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -61.4% |  -24.25ms |   0.5% → 0.2% |  39.5ms → 15.3ms |       3 → 1 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| removed |  -10.03ms |   0.1% → 0.0% |     10.0ms → 0ms |       1 → 0 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |  -10.03ms |   0.1% → 0.0% |     10.0ms → 0ms |       1 → 0 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011ffbc0` |
| removed |  -10.03ms |   0.1% → 0.0% |     10.0ms → 0ms |       1 → 0 | `exec()`                                                                                                               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|   -0.2% |   -9.74ms | 80.5% → 77.6% |    5.94s → 5.93s |     26 → 17 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |

##### Standard library

|  Change |     Delta |             % |             Time | Contentions | Function                                                  | Location                                            |
| ------: | --------: | ------------: | ---------------: | ----------: | --------------------------------------------------------- | --------------------------------------------------- |
|  -90.2% | -140.15ms |   2.1% → 0.2% | 155.4ms → 15.3ms |      10 → 1 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                 |
|  -90.2% | -140.15ms |   2.1% → 0.2% | 155.4ms → 15.3ms |      10 → 1 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                |
|  -90.2% | -140.15ms |   2.1% → 0.2% | 155.4ms → 15.3ms |      10 → 1 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                 |
|  -88.8% | -121.34ms |   1.9% → 0.2% | 136.6ms → 15.3ms |       9 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|  -88.8% | -121.34ms |   1.9% → 0.2% | 136.6ms → 15.3ms |       9 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                 |
|  -82.4% |  -71.54ms |   1.2% → 0.2% |  86.8ms → 15.3ms |       6 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| removed |  -57.74ms |   0.8% → 0.0% |     57.7ms → 0ms |       4 → 0 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                 |
|  -69.2% |  -34.28ms |   0.7% → 0.2% |  49.6ms → 15.3ms |       4 → 1 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| removed |  -10.03ms |   0.1% → 0.0% |     10.0ms → 0ms |       1 → 0 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|   -0.2% |   -9.74ms | 80.5% → 77.6% |    5.94s → 5.93s |     26 → 17 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                 |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |   Delta |             % |        Time | Contentions | Caller                       | Location                                  |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------- | ----------------------------------------- |
|    new | +5.921s | 0.0% → 100.0% | 0ms → 5.92s |      0 → 16 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |   Delta |             % |        Time | Contentions | Caller              | Location                                                               |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------- | ---------------------------------------------------------------------- |
|    new | +5.921s | 0.0% → 100.0% | 0ms → 5.92s |      0 → 16 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |      % |          Time | Contentions | Caller                              | Location                            |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------------------- | ----------------------------------- |
| +18.9% | +271.91ms | 100.0% | 1.43s → 1.70s |     57 → 63 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change |     Delta |             % |              Time | Contentions | Caller            | Location                                 |
| -----: | --------: | ------------: | ----------------: | ----------: | ----------------- | ---------------------------------------- |
|  +2.7% | +191.32ms | 96.3% → 95.5% |     7.11s → 7.30s |     74 → 69 | `park()`          | `java.util.concurrent.locks.LockSupport` |
| +26.1% |  +70.85ms |   3.7% → 4.5% | 271.8ms → 342.7ms |      9 → 11 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change |     Delta |             % |          Time | Contentions | Caller                              | Location                            |
| -----: | --------: | ------------: | ------------: | ----------: | ----------------------------------- | ----------------------------------- |
| +17.3% | +201.06ms | 16.4% → 18.7% | 1.16s → 1.36s |     48 → 52 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |
|  -0.2% |   -9.74ms | 83.6% → 81.3% | 5.94s → 5.93s |     26 → 17 | `awaitDone(int, long)`              | `java.util.concurrent.ForkJoinTask` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |      % |          Time | Contentions | Caller  | Location                                    |
| -----: | --------: | -----: | ------------: | ----------: | ------- | ------------------------------------------- |
|  +9.6% | +150.57ms | 100.0% | 1.57s → 1.72s |     66 → 64 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |      % |          Time | Contentions | Caller                | Location                                    |
| -----: | --------: | -----: | ------------: | ----------: | --------------------- | ------------------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |   Delta |             % |        Time | Contentions | Caller            | Location                                  |
| ------: | ------: | ------------: | ----------: | ----------: | ----------------- | ----------------------------------------- |
|     new | +5.921s | 0.0% → 100.0% | 0ms → 5.92s |      0 → 16 | `$anonfun$2(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |
| removed | -5.791s | 100.0% → 0.0% | 5.79s → 0ms |      16 → 0 | `$anonfun$1(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |     Delta |      % |          Time | Contentions | Caller          | Location                                                             |
| -----: | --------: | -----: | ------------: | ----------: | --------------- | -------------------------------------------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000700121db90` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000700121db90`)

| Change |     Delta |      % |          Time | Contentions | Caller           | Location                           |
| -----: | --------: | -----: | ------------: | ----------: | ---------------- | ---------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `map(Function1)` | `scala.collection.immutable.Range` |

##### `map(Function1)` (`scala.collection.immutable.Range`)

| Change |     Delta |      % |          Time | Contentions | Caller                  | Location                                  |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------- | ----------------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |     Delta |      % |          Time | Contentions | Caller                  | Location                                  |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------- | ----------------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change |     Delta |      % |          Time | Contentions | Caller               | Location                                  |
| -----: | --------: | -----: | ------------: | ----------: | -------------------- | ----------------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|  Change |   Delta |             % |        Time | Contentions | Caller                                                                                                                 | Location                                    |
| ------: | ------: | ------------: | ----------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new | +5.921s | 0.0% → 100.0% | 0ms → 5.92s |      0 → 16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed | -5.791s | 100.0% → 0.0% | 5.79s → 0ms |      16 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`)

| Change |     Delta |      % |          Time | Contentions | Caller          | Location                             |
| -----: | --------: | -----: | ------------: | ----------: | --------------- | ------------------------------------ |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change |     Delta |      % |          Time | Contentions | Caller               | Location                             |
| -----: | --------: | -----: | ------------: | ----------: | -------------------- | ------------------------------------ |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `apply(Object)`      | `scala.runtime.function.JProcedure1` |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `foreach(Function1)` | `scala.collection.immutable.List`    |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change |     Delta |      % |          Time | Contentions | Caller                                                                        | Location                                    |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |     Delta |      % |          Time | Contentions | Caller           | Location                                    |
| -----: | --------: | -----: | ------------: | ----------: | ---------------- | ------------------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |     Delta |      % |          Time | Contentions | Caller           | Location                                   |
| -----: | --------: | -----: | ------------: | ----------: | ---------------- | ------------------------------------------ |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`)

| Change |     Delta |      % |          Time | Contentions | Caller                           | Location                                            |
| -----: | --------: | -----: | ------------: | ----------: | -------------------------------- | --------------------------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001082400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`)

| Change |     Delta |      % |          Time | Contentions | Caller                                           | Location                           |
| -----: | --------: | -----: | ------------: | ----------: | ------------------------------------------------ | ---------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |     Delta |      % |          Time | Contentions | Caller                         | Location                                          |
| -----: | --------: | -----: | ------------: | ----------: | ------------------------------ | ------------------------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |     Delta |      % |          Time | Contentions | Caller                     | Location                                          |
| -----: | --------: | -----: | ------------: | ----------: | -------------------------- | ------------------------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |     Delta |      % |          Time | Contentions | Caller                     | Location                   |
| -----: | --------: | -----: | ------------: | ----------: | -------------------------- | -------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |     Delta |      % |          Time | Contentions | Caller                                                      | Location                        |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------------------------------------------- | ------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

| Change |    Delta |      % |              Time | Contentions | Caller                              | Location                            |
| -----: | -------: | -----: | ----------------: | ----------: | ----------------------------------- | ----------------------------------- |
| +26.1% | +70.85ms | 100.0% | 271.8ms → 342.7ms |      9 → 11 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |   Delta |             % |        Time | Contentions | Caller                       | Location                                  |
| ------: | ------: | ------------: | ----------: | ----------: | ---------------------------- | ----------------------------------------- |
| removed | -5.791s | 100.0% → 0.0% | 5.79s → 0ms |      16 → 0 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |   Delta |             % |        Time | Contentions | Caller              | Location                                                               |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------- | ---------------------------------------------------------------------- |
| removed | -5.791s | 100.0% → 0.0% | 5.79s → 0ms |      16 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000000801198798` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |      % |             Time | Contentions | Caller      | Location                                               |
| -----: | --------: | -----: | ---------------: | ----------: | ----------- | ------------------------------------------------------ |
| -90.2% | -140.15ms | 100.0% | 155.4ms → 15.3ms |      10 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |     Delta |      % |             Time | Contentions | Caller   | Location                             |
| -----: | --------: | -----: | ---------------: | ----------: | -------- | ------------------------------------ |
| -90.2% | -140.15ms | 100.0% | 155.4ms → 15.3ms |      10 → 1 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |     Delta |      % |             Time | Contentions | Caller     | Location                            |
| -----: | --------: | -----: | ---------------: | ----------: | ---------- | ----------------------------------- |
| -90.2% | -140.15ms | 100.0% | 155.4ms → 15.3ms |      10 → 1 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change |     Delta |              % |             Time | Contentions | Caller                                                    | Location                                      |
| ------: | --------: | -------------: | ---------------: | ----------: | --------------------------------------------------------- | --------------------------------------------- |
|  -88.8% | -121.34ms | 87.9% → 100.0% | 136.6ms → 15.3ms |       9 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -82.4% |  -71.54ms | 55.9% → 100.0% |  86.8ms → 15.3ms |       6 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |  -57.74ms |   37.2% → 0.0% |     57.7ms → 0ms |       4 → 0 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  -69.2% |  -34.28ms | 31.9% → 100.0% |  49.6ms → 15.3ms |       4 → 1 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |     Delta |      % |             Time | Contentions | Caller                                   | Location                            |
| -----: | --------: | -----: | ---------------: | ----------: | ---------------------------------------- | ----------------------------------- |
| -88.8% | -121.34ms | 100.0% | 136.6ms → 15.3ms |       9 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |      % |             Time | Contentions | Caller                              | Location                            |
| -----: | --------: | -----: | ---------------: | ----------: | ----------------------------------- | ----------------------------------- |
| -88.8% | -121.34ms | 100.0% | 136.6ms → 15.3ms |       9 → 1 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |    Delta |      % |            Time | Contentions | Caller                 | Location                            |
| -----: | -------: | -----: | --------------: | ----------: | ---------------------- | ----------------------------------- |
| -82.4% | -71.54ms | 100.0% | 86.8ms → 15.3ms |       6 → 1 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change |    Delta |             % |         Time | Contentions | Caller                 | Location                            |
| ------: | -------: | ------------: | -----------: | ----------: | ---------------------- | ----------------------------------- |
| removed | -57.74ms | 100.0% → 0.0% | 57.7ms → 0ms |       4 → 0 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|  Change |    Delta |              % |            Time | Contentions | Caller                         | Location                                               |
| ------: | -------: | -------------: | --------------: | ----------: | ------------------------------ | ------------------------------------------------------ |
|  -61.4% | -24.25ms | 79.8% → 100.0% | 39.5ms → 15.3ms |       3 → 1 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| removed | -10.03ms |   20.2% → 0.0% |    10.0ms → 0ms |       1 → 0 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |    Delta |      % |            Time | Contentions | Caller                     | Location                                               |
| -----: | -------: | -----: | --------------: | ----------: | -------------------------- | ------------------------------------------------------ |
| -61.4% | -24.25ms | 100.0% | 39.5ms → 15.3ms |       3 → 1 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |    Delta |      % |            Time | Contentions | Caller              | Location                                               |
| -----: | -------: | -----: | --------------: | ----------: | ------------------- | ------------------------------------------------------ |
| -61.4% | -24.25ms | 100.0% | 39.5ms → 15.3ms |       3 → 1 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |    Delta |      % |            Time | Contentions | Caller              | Location                                               |
| -----: | -------: | -----: | --------------: | ----------: | ------------------- | ------------------------------------------------------ |
| -61.4% | -24.25ms | 100.0% | 39.5ms → 15.3ms |       3 → 1 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -61.4% | -24.25ms | 100.0% | 39.5ms → 15.3ms |       3 → 1 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |    Delta |             % |         Time | Contentions | Caller   | Location                                                               |
| ------: | -------: | ------------: | -----------: | ----------: | -------- | ---------------------------------------------------------------------- |
| removed | -10.03ms | 100.0% → 0.0% | 10.0ms → 0ms |       1 → 0 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011ffbc0` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011ffbc0`)

|  Change |    Delta |             % |         Time | Contentions | Caller   | Location                                            |
| ------: | -------: | ------------: | -----------: | ----------: | -------- | --------------------------------------------------- |
| removed | -10.03ms | 100.0% → 0.0% | 10.0ms → 0ms |       1 → 0 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|  Change |    Delta |             % |         Time | Contentions | Caller     | Location                            |
| ------: | -------: | ------------: | -----------: | ----------: | ---------- | ----------------------------------- |
| removed | -10.03ms | 100.0% → 0.0% | 10.0ms → 0ms |       1 → 0 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |             % |             Time | Contentions | Caller   | Location                            |
| -----: | --------: | ------------: | ---------------: | ----------: | -------- | ----------------------------------- |
| -90.2% | -140.15ms |   2.6% → 0.3% | 155.4ms → 15.3ms |      10 → 1 | `join()` | `java.util.concurrent.ForkJoinTask` |
|  +2.3% | +130.41ms | 97.4% → 99.7% |    5.79s → 5.92s |          16 | `get()`  | `java.util.concurrent.ForkJoinTask` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |   Delta |             % |        Time | Contentions | Callee                | Location                                    |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------- | ------------------------------------------- |
|    new | +5.921s | 0.0% → 100.0% | 0ms → 5.92s |      0 → 16 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |   Delta |             % |        Time | Contentions | Callee               | Location                                  |
| -----: | ------: | ------------: | ----------: | ----------: | -------------------- | ----------------------------------------- |
|    new | +5.921s | 0.0% → 100.0% | 0ms → 5.92s |      0 → 16 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |             % |              Time | Contentions | Callee            | Location                                 |
| -----: | --------: | ------------: | ----------------: | ----------: | ----------------- | ---------------------------------------- |
| +17.3% | +201.06ms | 81.1% → 80.0% |     1.16s → 1.36s |     48 → 52 | `park()`          | `java.util.concurrent.locks.LockSupport` |
| +26.1% |  +70.85ms | 18.9% → 20.0% | 271.8ms → 342.7ms |      9 → 11 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change |     Delta |      % |          Time | Contentions | Callee                | Location                   |
| -----: | --------: | -----: | ------------: | ----------: | --------------------- | -------------------------- |
|  +2.7% | +191.32ms | 100.0% | 7.11s → 7.30s |     74 → 69 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |             % |             Time | Contentions | Callee                                   | Location                            |
| -----: | --------: | ------------: | ---------------: | ----------: | ---------------------------------------- | ----------------------------------- |
| +18.9% | +271.91ms | 91.3% → 99.1% |    1.43s → 1.70s |     57 → 63 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |
| -88.8% | -121.34ms |   8.7% → 0.9% | 136.6ms → 15.3ms |       9 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |     Delta |      % |          Time | Contentions | Callee                              | Location                            |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------------------- | ----------------------------------- |
|  +9.6% | +150.57ms | 100.0% | 1.57s → 1.72s |     66 → 64 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |      % |          Time | Contentions | Callee                 | Location                            |
| -----: | --------: | -----: | ------------: | ----------: | ---------------------- | ----------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |     Delta |      % |          Time | Contentions | Callee  | Location                            |
| -----: | --------: | -----: | ------------: | ----------: | ------- | ----------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `get()` | `java.util.concurrent.ForkJoinTask` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |   Delta |             % |        Time | Contentions | Callee            | Location                                  |
| ------: | ------: | ------------: | ----------: | ----------: | ----------------- | ----------------------------------------- |
|     new | +5.921s | 0.0% → 100.0% | 0ms → 5.92s |      0 → 16 | `$anonfun$2(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |
| removed | -5.791s | 100.0% → 0.0% | 5.79s → 0ms |      16 → 0 | `$anonfun$1(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000700121db90`)

| Change |     Delta |      % |          Time | Contentions | Callee                       | Location                                  |
| -----: | --------: | -----: | ------------: | ----------: | ---------------------------- | ----------------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `map(Function1)` (`scala.collection.immutable.Range`)

| Change |     Delta |      % |          Time | Contentions | Callee          | Location                                                             |
| -----: | --------: | -----: | ------------: | ----------: | --------------- | -------------------------------------------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000700121db90` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |     Delta |      % |          Time | Contentions | Callee           | Location                           |
| -----: | --------: | -----: | ------------: | ----------: | ---------------- | ---------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `map(Function1)` | `scala.collection.immutable.Range` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change |     Delta |      % |          Time | Contentions | Callee                  | Location                                  |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------- | ----------------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

| Change |     Delta |      % |          Time | Contentions | Callee                  | Location                                  |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------- | ----------------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                                                                                                 | Location                                    |
| ------: | ------: | ------------: | ----------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new | +5.921s | 0.0% → 100.0% | 0ms → 5.92s |      0 → 16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed | -5.791s | 100.0% → 0.0% | 5.79s → 0ms |      16 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change |     Delta |      % |          Time | Contentions | Callee              | Location                                                               |
| -----: | --------: | -----: | ------------: | ----------: | ------------------- | ---------------------------------------------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8` |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change |     Delta |      % |          Time | Contentions | Callee          | Location                             |
| -----: | --------: | -----: | ------------: | ----------: | --------------- | ------------------------------------ |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |     Delta |      % |          Time | Contentions | Callee               | Location                          |
| -----: | --------: | -----: | ------------: | ----------: | -------------------- | --------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |     Delta |      % |          Time | Contentions | Callee                                                                        | Location                                    |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`)

| Change |     Delta |      % |          Time | Contentions | Callee           | Location                                   |
| -----: | --------: | -----: | ------------: | ----------: | ---------------- | ------------------------------------------ |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`)

| Change |     Delta |      % |          Time | Contentions | Callee                         | Location                                             |
| -----: | --------: | -----: | ------------: | ----------: | ------------------------------ | ---------------------------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |     Delta |      % |          Time | Contentions | Callee                           | Location                                            |
| -----: | --------: | -----: | ------------: | ----------: | -------------------------------- | --------------------------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001082400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |     Delta |      % |          Time | Contentions | Callee                                           | Location                           |
| -----: | --------: | -----: | ------------: | ----------: | ------------------------------------------------ | ---------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |     Delta |      % |          Time | Contentions | Callee                         | Location                                          |
| -----: | --------: | -----: | ------------: | ----------: | ------------------------------ | ------------------------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |     Delta |      % |          Time | Contentions | Callee                     | Location                                          |
| -----: | --------: | -----: | ------------: | ----------: | -------------------------- | ------------------------------------------------- |
|  +2.3% | +130.41ms | 100.0% | 5.79s → 5.92s |          16 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

| Change |    Delta |      % |              Time | Contentions | Callee                | Location                   |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------- | -------------------------- |
| +26.1% | +70.85ms | 100.0% | 271.8ms → 342.7ms |      9 → 11 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |   Delta |             % |        Time | Contentions | Callee                | Location                                    |
| ------: | ------: | ------------: | ----------: | ----------: | --------------------- | ------------------------------------------- |
| removed | -5.791s | 100.0% → 0.0% | 5.79s → 0ms |      16 → 0 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |   Delta |             % |        Time | Contentions | Callee               | Location                                  |
| ------: | ------: | ------------: | ----------: | ----------: | -------------------- | ----------------------------------------- |
| removed | -5.791s | 100.0% → 0.0% | 5.79s → 0ms |      16 → 0 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |      % |             Time | Contentions | Callee                 | Location                            |
| -----: | --------: | -----: | ---------------: | ----------: | ---------------------- | ----------------------------------- |
| -90.2% | -140.15ms | 100.0% | 155.4ms → 15.3ms |      10 → 1 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |     Delta |              % |             Time | Contentions | Callee              | Location                                               |
| -----: | --------: | -------------: | ---------------: | ----------: | ------------------- | ------------------------------------------------------ |
| -90.2% | -140.15ms |         100.0% | 155.4ms → 15.3ms |      10 → 1 | `join()`            | `java.util.concurrent.ForkJoinTask`                    |
| -61.4% |  -24.25ms | 25.4% → 100.0% |  39.5ms → 15.3ms |       3 → 1 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |     Delta |      % |             Time | Contentions | Callee      | Location                                               |
| -----: | --------: | -----: | ---------------: | ----------: | ----------- | ------------------------------------------------------ |
| -90.2% | -140.15ms | 100.0% | 155.4ms → 15.3ms |      10 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change |     Delta |           % |             Time | Contentions | Callee   | Location                                            |
| ------: | --------: | ----------: | ---------------: | ----------: | -------- | --------------------------------------------------- |
|  -90.2% | -140.15ms |      100.0% | 155.4ms → 15.3ms |      10 → 1 | `exec()` | `java.util.concurrent.RecursiveTask`                |
| removed |  -10.03ms | 6.5% → 0.0% |     10.0ms → 0ms |       1 → 0 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |     Delta |      % |             Time | Contentions | Callee     | Location                            |
| -----: | --------: | -----: | ---------------: | ----------: | ---------- | ----------------------------------- |
| -88.8% | -121.34ms | 100.0% | 136.6ms → 15.3ms |       9 → 1 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |      % |             Time | Contentions | Callee                                               | Location                                      |
| -----: | --------: | -----: | ---------------: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| -88.8% | -121.34ms | 100.0% | 136.6ms → 15.3ms |       9 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |    Delta |      % |            Time | Contentions | Callee     | Location                            |
| -----: | -------: | -----: | --------------: | ----------: | ---------- | ----------------------------------- |
| -82.4% | -71.54ms | 100.0% | 86.8ms → 15.3ms |       6 → 1 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change |    Delta |             % |         Time | Contentions | Callee     | Location                            |
| ------: | -------: | ------------: | -----------: | ----------: | ---------- | ----------------------------------- |
| removed | -57.74ms | 100.0% → 0.0% | 57.7ms → 0ms |       4 → 0 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |    Delta |      % |            Time | Contentions | Callee     | Location                            |
| -----: | -------: | -----: | --------------: | ----------: | ---------- | ----------------------------------- |
| -69.2% | -34.28ms | 100.0% | 49.6ms → 15.3ms |       4 → 1 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |    Delta |      % |            Time | Contentions | Callee     | Location                            |
| -----: | -------: | -----: | --------------: | ----------: | ---------- | ----------------------------------- |
| -61.4% | -24.25ms | 100.0% | 39.5ms → 15.3ms |       3 → 1 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |    Delta |      % |            Time | Contentions | Callee          | Location                                               |
| -----: | -------: | -----: | --------------: | ----------: | --------------- | ------------------------------------------------------ |
| -61.4% | -24.25ms | 100.0% | 39.5ms → 15.3ms |       3 → 1 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |    Delta |      % |            Time | Contentions | Callee                     | Location                                               |
| -----: | -------: | -----: | --------------: | ----------: | -------------------------- | ------------------------------------------------------ |
| -61.4% | -24.25ms | 100.0% | 39.5ms → 15.3ms |       3 → 1 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -61.4% | -24.25ms | 100.0% | 39.5ms → 15.3ms |       3 → 1 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |    Delta |             % |         Time | Contentions | Callee     | Location                            |
| ------: | -------: | ------------: | -----------: | ----------: | ---------- | ----------------------------------- |
| removed | -10.03ms | 100.0% → 0.0% | 10.0ms → 0ms |       1 → 0 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011ffbc0`)

|  Change |    Delta |             % |         Time | Contentions | Callee                         | Location                                    |
| ------: | -------: | ------------: | -----------: | ----------: | ------------------------------ | ------------------------------------------- |
| removed | -10.03ms | 100.0% → 0.0% | 10.0ms → 0ms |       1 → 0 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|  Change |    Delta |             % |         Time | Contentions | Callee   | Location                                                               |
| ------: | -------: | ------------: | -----------: | ----------: | -------- | ---------------------------------------------------------------------- |
| removed | -10.03ms | 100.0% → 0.0% | 10.0ms → 0ms |       1 → 0 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011ffbc0` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change |    Delta |           % |            Time | Contentions | Callee                                                    | Location                                      |
| ------: | -------: | ----------: | --------------: | ----------: | --------------------------------------------------------- | --------------------------------------------- |
|  -82.4% | -71.54ms | 1.5% → 0.3% | 86.8ms → 15.3ms |       6 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed | -57.74ms | 1.0% → 0.0% |    57.7ms → 0ms |       4 → 0 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|   -0.2% |  -9.74ms |      100.0% |   5.94s → 5.93s |     26 → 17 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time blocked in their leaf frame.

| Change |     Delta |             % |              Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -----: | --------: | ------------: | ----------------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|    new |   +5.921s |  0.0% → 77.4% |       0ms → 5.92s |      0 → 16 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000700121db90`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
| +17.3% | +201.06ms | 15.8% → 17.9% |     1.16s → 1.36s |     48 → 52 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +26.1% |  +70.85ms |   3.7% → 4.5% | 271.8ms → 342.7ms |      9 → 11 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|    new |  +15.27ms |   0.0% → 0.2% |      0ms → 15.3ms |       0 → 1 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

### Improvements

Call stacks with the largest decrease in time blocked in their leaf frame. `truncated` stands for missing outermost callers.

|  Change |    Delta |            % |         Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------: | -------: | -----------: | -----------: | ----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |  -5.791s | 78.4% → 0.0% |  5.79s → 0ms |      16 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000008011f6c70`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000000801198798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000801001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000801082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| removed | -57.96ms |  0.8% → 0.0% | 58.0ms → 0ms |       3 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed | -19.03ms |  0.3% → 0.0% | 19.0ms → 0ms |       1 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed | -18.83ms |  0.3% → 0.0% | 18.8ms → 0ms |       1 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| removed | -18.81ms |  0.3% → 0.0% | 18.8ms → 0ms |       1 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← truncated |
| removed | -10.66ms |  0.1% → 0.0% | 10.7ms → 0ms |       1 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed | -10.06ms |  0.1% → 0.0% | 10.1ms → 0ms |       1 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed | -10.05ms |  0.1% → 0.0% | 10.0ms → 0ms |       1 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed | -10.03ms |  0.1% → 0.0% | 10.0ms → 0ms |       1 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

# Sampling profile diff

Collected 1,810 samples → 1,629 samples (-181 samples, -10.0%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             | -11.4% |  -191 | 92.7% → 91.2% | 1,677 → 1,486 |
| Standard library |  +7.5% |   +10 |   7.3% → 8.8% |     133 → 143 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                  | Location                                                                              |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  +23.1% |    +9 | 2.2% → 2.9% | 39 → 48 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                                                   |
|     new |    +9 | 0.0% → 0.6% |   0 → 9 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                                                   |
|  +24.2% |    +8 | 1.8% → 2.5% | 33 → 41 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                                                    |
|  +45.5% |    +5 | 0.6% → 1.0% | 11 → 16 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                                   |
| +100.0% |    +2 | 0.1% → 0.2% |   2 → 4 | `nextNode()`                                              | `java.util.HashMap$HashIterator`                                                      |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `accept(Object)`                                          | `java.util.stream.ReduceOps$3ReducingSink`                                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`                                         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                                                   |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `lambda$merge$7(Map, Object, List)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   +6.7% |    +1 | 0.8% → 1.0% | 15 → 16 | `apply(Object)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `unpark(Thread)`                                          | `java.util.concurrent.locks.LockSupport`                                              |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `refersTo0(Object)`                                       | `java.lang.ref.Reference`                                                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `checkIndex(int, int)`                                    | `java.util.Objects`                                                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `createSubtask(int, int)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `add(double[], double[])`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `resize()`                                                | `java.util.HashMap`                                                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(ThreadGroup, Runnable, long, int, boolean)`       | `java.lang.Thread$FieldHolder`                                                        |

##### Ours

| Change | Delta |           % | Samples | Function                            | Location                                                                              |
| -----: | ----: | ----------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `compute()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
| +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +6.7% |    +1 | 0.8% → 1.0% | 15 → 16 | `apply(Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `createSubtask(int, int)`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `add(double[], double[])`           | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                  | Location                                      |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
|  +23.1% |    +9 | 2.2% → 2.9% | 39 → 48 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                           |
|     new |    +9 | 0.0% → 0.6% |   0 → 9 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                           |
|  +24.2% |    +8 | 1.8% → 2.5% | 33 → 41 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                            |
|  +45.5% |    +5 | 0.6% → 1.0% | 11 → 16 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| +100.0% |    +2 | 0.1% → 0.2% |   2 → 4 | `nextNode()`                                              | `java.util.HashMap$HashIterator`              |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `accept(Object)`                                          | `java.util.stream.ReduceOps$3ReducingSink`    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `unpark(Thread)`                                          | `java.util.concurrent.locks.LockSupport`      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `refersTo0(Object)`                                       | `java.lang.ref.Reference`                     |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `checkIndex(int, int)`                                    | `java.util.Objects`                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `resize()`                                                | `java.util.HashMap`                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(ThreadGroup, Runnable, long, int, boolean)`       | `java.lang.Thread$FieldHolder`                |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                      | Location                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------- | ---------------------------------------------------------- |
|  -15.3% |  -124 | 44.6% → 42.0% | 808 → 684 | `accumulate(Double[], double[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -14.7% |   -17 |   6.4% → 6.1% |  116 → 99 | `collectClusters(int[])`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -4.0% |   -16 | 22.3% → 23.8% | 403 → 387 | `distance(Double[], Double[])`                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -7.2% |   -16 | 12.2% → 12.6% | 221 → 205 | `findNearestCentroid()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -16.5% |   -13 |   4.4% → 4.1% |   79 → 66 | `vectorSum()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |   -10 |   0.6% → 0.0% |    10 → 0 | `grow(int)`                                                   | `java.util.ArrayList`                                      |
|  -26.7% |    -8 |   1.7% → 1.4% |   30 → 22 | `computeDirectly()`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -77.8% |    -7 |   0.5% → 0.1% |     9 → 2 | `tryRemoveAndExec(ForkJoinTask, boolean)`                     | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `doExec()`                                                    | `java.util.concurrent.ForkJoinTask`                        |
|  -25.0% |    -1 |          0.2% |     4 → 3 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                                   |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `normalizeAndCheck(String)`                                   | `sun.nio.fs.UnixPath`                                      |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `indexOf(byte[], byte, int, String, int)`                     | `java.lang.String`                                         |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `seek0(long)`                                                 | `java.io.RandomAccessFile`                                 |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `forEachRemaining(IntConsumer)`                               | `java.util.stream.Streams$RangeIntSpliterator`             |
|  -33.3% |    -1 |   0.2% → 0.1% |     3 → 2 | `wrapSink(Sink)`                                              | `java.util.stream.AbstractPipeline`                        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `putMethodInfo(ByteVector)`                                   | `jdk.internal.org.objectweb.asm.MethodWriter`              |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -33.3% |    -1 |   0.2% → 0.1% |     3 → 2 | `unpark(Object)`                                              | `jdk.internal.misc.Unsafe`                                 |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `push(ForkJoinTask, ForkJoinPool, boolean)`                   | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `forkThreshold()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Ours

|  Change | Delta |             % |   Samples | Function                         | Location                                                   |
| ------: | ----: | ------------: | --------: | -------------------------------- | ---------------------------------------------------------- |
|  -15.3% |  -124 | 44.6% → 42.0% | 808 → 684 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -14.7% |   -17 |   6.4% → 6.1% |  116 → 99 | `collectClusters(int[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -4.0% |   -16 | 22.3% → 23.8% | 403 → 387 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -7.2% |   -16 | 12.2% → 12.6% | 221 → 205 | `findNearestCentroid()`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -16.5% |   -13 |   4.4% → 4.1% |   79 → 66 | `vectorSum()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -26.7% |    -8 |   1.7% → 1.4% |   30 → 22 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `forkThreshold()`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                      | Location                                       |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------- | ---------------------------------------------- |
| removed |   -10 | 0.6% → 0.0% |  10 → 0 | `grow(int)`                                                   | `java.util.ArrayList`                          |
|  -77.8% |    -7 | 0.5% → 0.1% |   9 → 2 | `tryRemoveAndExec(ForkJoinTask, boolean)`                     | `java.util.concurrent.ForkJoinPool$WorkQueue`  |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `doExec()`                                                    | `java.util.concurrent.ForkJoinTask`            |
|  -25.0% |    -1 |        0.2% |   4 → 3 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `normalizeAndCheck(String)`                                   | `sun.nio.fs.UnixPath`                          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `indexOf(byte[], byte, int, String, int)`                     | `java.lang.String`                             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `seek0(long)`                                                 | `java.io.RandomAccessFile`                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `forEachRemaining(IntConsumer)`                               | `java.util.stream.Streams$RangeIntSpliterator` |
|  -33.3% |    -1 | 0.2% → 0.1% |   3 → 2 | `wrapSink(Sink)`                                              | `java.util.stream.AbstractPipeline`            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `putMethodInfo(ByteVector)`                                   | `jdk.internal.org.objectweb.asm.MethodWriter`  |
|  -33.3% |    -1 | 0.2% → 0.1% |   3 → 2 | `unpark(Object)`                                              | `jdk.internal.misc.Unsafe`                     |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `push(ForkJoinTask, ForkJoinPool, boolean)`                   | `java.util.concurrent.ForkJoinPool$WorkQueue`  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(AbstractPipeline, int)`                               | `java.util.stream.ReferencePipeline`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `awaitWork(ForkJoinPool$WorkQueue)`                           | `java.util.concurrent.ForkJoinPool`            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `putVal(int, Object, Object, boolean, boolean)`               | `java.util.HashMap`                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `afterNodeInsertion(boolean)`                                 | `java.util.LinkedHashMap`                      |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |           % | Samples | Function                                | Location                                                               |
| ------: | ----: | ----------: | ------: | --------------------------------------- | ---------------------------------------------------------------------- |
|  +18.5% |   +10 | 3.0% → 3.9% | 54 → 64 | `computeIfAbsent(Object, Function)`     | `java.util.HashMap`                                                    |
|  +24.2% |    +8 | 1.8% → 2.5% | 33 → 41 | `copyOf(Object[], int)`                 | `java.util.Arrays`                                                     |
|  +53.8% |    +7 | 0.7% → 1.2% | 13 → 20 | `merge(Map, Map)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +53.8% |    +7 | 0.7% → 1.2% | 13 → 20 | `combineResults(Map, Map)`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +53.8% |    +7 | 0.7% → 1.2% | 13 → 20 | `combineResults(Object, Object)`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +100.0% |    +6 | 0.3% → 0.7% |  6 → 12 | `lambda$merge$7(Map, Object, List)`     | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +100.0% |    +6 | 0.3% → 0.7% |  6 → 12 | `accept(Object, Object)`                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |
| +100.0% |    +6 | 0.3% → 0.7% |  6 → 12 | `forEach(BiConsumer)`                   | `java.util.HashMap`                                                    |
| +125.0% |    +5 | 0.2% → 0.6% |   4 → 9 | `merge(Object, Object, BiFunction)`     | `java.util.HashMap`                                                    |
|   +5.1% |    +2 | 2.2% → 2.5% | 39 → 41 | `grow()`                                | `java.util.ArrayList`                                                  |
|   +5.1% |    +2 | 2.2% → 2.5% | 39 → 41 | `add(Object, Object[], int)`            | `java.util.ArrayList`                                                  |
|   +5.1% |    +2 | 2.2% → 2.5% | 39 → 41 | `add(Object)`                           | `java.util.ArrayList`                                                  |
| +100.0% |    +2 | 0.1% → 0.2% |   2 → 4 | `nextNode()`                            | `java.util.HashMap$HashIterator`                                       |
| +100.0% |    +2 | 0.1% → 0.2% |   2 → 4 | `next()`                                | `java.util.HashMap$EntryIterator`                                      |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `read(byte[], int, int)`                | `java.io.FilterInputStream`                                            |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `transferTo(OutputStream)`              | `java.io.InputStream`                                                  |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `copy(InputStream, Path, CopyOption[])` | `java.nio.file.Files`                                                  |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `extractResource(String, Path)`         | `org.renaissance.core.ResourceUtils`                                   |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `extractResources(Iterable, Path)`      | `org.renaissance.core.ResourceUtils`                                   |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `createClassLoaderForModule(String)`    | `org.renaissance.core.ModuleLoader`                                    |

##### Ours

|  Change | Delta |           % | Samples | Function                             | Location                                                                              |
| ------: | ----: | ----------: | ------: | ------------------------------------ | ------------------------------------------------------------------------------------- |
|  +53.8% |    +7 | 0.7% → 1.2% | 13 → 20 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +53.8% |    +7 | 0.7% → 1.2% | 13 → 20 | `combineResults(Map, Map)`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +53.8% |    +7 | 0.7% → 1.2% | 13 → 20 | `combineResults(Object, Object)`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +100.0% |    +6 | 0.3% → 0.7% |  6 → 12 | `lambda$merge$7(Map, Object, List)`  | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| +100.0% |    +6 | 0.3% → 0.7% |  6 → 12 | `accept(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`                |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `extractResource(String, Path)`      | `org.renaissance.core.ResourceUtils`                                                  |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `extractResources(Iterable, Path)`   | `org.renaissance.core.ResourceUtils`                                                  |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader`                                                   |
|   +6.7% |    +1 | 0.8% → 1.0% | 15 → 16 | `apply(Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `combineResults(Object, Object)`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |

##### Standard library

|  Change | Delta |           % | Samples | Function                                | Location                                   |
| ------: | ----: | ----------: | ------: | --------------------------------------- | ------------------------------------------ |
|  +18.5% |   +10 | 3.0% → 3.9% | 54 → 64 | `computeIfAbsent(Object, Function)`     | `java.util.HashMap`                        |
|  +24.2% |    +8 | 1.8% → 2.5% | 33 → 41 | `copyOf(Object[], int)`                 | `java.util.Arrays`                         |
| +100.0% |    +6 | 0.3% → 0.7% |  6 → 12 | `forEach(BiConsumer)`                   | `java.util.HashMap`                        |
| +125.0% |    +5 | 0.2% → 0.6% |   4 → 9 | `merge(Object, Object, BiFunction)`     | `java.util.HashMap`                        |
|   +5.1% |    +2 | 2.2% → 2.5% | 39 → 41 | `grow()`                                | `java.util.ArrayList`                      |
|   +5.1% |    +2 | 2.2% → 2.5% | 39 → 41 | `add(Object, Object[], int)`            | `java.util.ArrayList`                      |
|   +5.1% |    +2 | 2.2% → 2.5% | 39 → 41 | `add(Object)`                           | `java.util.ArrayList`                      |
| +100.0% |    +2 | 0.1% → 0.2% |   2 → 4 | `nextNode()`                            | `java.util.HashMap$HashIterator`           |
| +100.0% |    +2 | 0.1% → 0.2% |   2 → 4 | `next()`                                | `java.util.HashMap$EntryIterator`          |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `read(byte[], int, int)`                | `java.io.FilterInputStream`                |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `transferTo(OutputStream)`              | `java.io.InputStream`                      |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `copy(InputStream, Path, CopyOption[])` | `java.nio.file.Files`                      |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `accept(Object)`                        | `java.util.stream.ReduceOps$3ReducingSink` |
|  +16.7% |    +1 | 0.3% → 0.4% |   6 → 7 | `putMapEntries(Map, boolean)`           | `java.util.HashMap`                        |
|  +16.7% |    +1 | 0.3% → 0.4% |   6 → 7 | `<init>(Map)`                           | `java.util.HashMap`                        |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `refersTo0(Object)`                     | `java.lang.ref.Reference`                  |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `refersToImpl(Object)`                  | `java.lang.ref.Reference`                  |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `refersTo(Object)`                      | `java.lang.ref.Reference`                  |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `matchesKey(WeakHashMap$Entry, Object)` | `java.util.WeakHashMap`                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `remove(Object)`                        | `java.util.WeakHashMap`                    |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                                             | Location                                                   |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------------- |
| -14.4% |  -210 | 80.4% → 76.5% | 1,456 → 1,246 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| -14.3% |  -199 | 76.6% → 72.9% | 1,387 → 1,188 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                        |
| -13.8% |  -189 | 75.8% → 72.6% | 1,372 → 1,183 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                        |
| -13.9% |  -185 | 73.5% → 70.3% | 1,331 → 1,146 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                |
| -10.2% |  -179 | 96.6% → 96.3% | 1,748 → 1,569 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  -9.8% |  -176 | 99.0% → 99.1% | 1,791 → 1,615 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|  -9.8% |  -176 | 99.0% → 99.1% | 1,791 → 1,615 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                       |
|  -9.8% |  -176 | 99.0% → 99.2% | 1,792 → 1,616 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                        |
|  -9.6% |  -168 | 97.1% → 97.6% | 1,758 → 1,590 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                        |
|  -9.5% |  -167 | 97.1% → 97.6% | 1,757 → 1,590 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                        |
| -15.3% |  -136 | 49.0% → 46.1% |     887 → 751 | `vectorSum()`                                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -15.3% |  -136 | 49.0% → 46.1% |     887 → 751 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -15.3% |  -124 | 44.6% → 42.0% |     808 → 684 | `accumulate(Double[], double[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -14.5% |   -53 | 20.2% → 19.2% |     365 → 312 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                        |
| -14.8% |   -51 | 19.1% → 18.0% |     345 → 294 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -14.1% |   -50 | 19.6% → 18.7% |     355 → 305 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -13.8% |   -49 | 19.6% → 18.7% |     354 → 305 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -5.1% |   -44 | 47.6% → 50.2% |     862 → 818 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -5.1% |   -32 | 34.5% → 36.3% |     624 → 592 | `findNearestCentroid()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -4.0% |   -16 | 22.3% → 23.8% |     403 → 387 | `distance(Double[], Double[])`                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                    | Location                                                               |
| ------: | ----: | ------------: | ------------: | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
|   -9.8% |  -176 | 99.0% → 99.1% | 1,791 → 1,615 | `compute()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -15.3% |  -136 | 49.0% → 46.1% |     887 → 751 | `vectorSum()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -15.3% |  -136 | 49.0% → 46.1% |     887 → 751 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -15.3% |  -124 | 44.6% → 42.0% |     808 → 684 | `accumulate(Double[], double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -14.8% |   -51 | 19.1% → 18.0% |     345 → 294 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -14.1% |   -50 | 19.6% → 18.7% |     355 → 305 | `computeClusterAverages()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -13.8% |   -49 | 19.6% → 18.7% |     354 → 305 | `average(List)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -5.1% |   -44 | 47.6% → 50.2% |     862 → 818 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -5.1% |   -32 | 34.5% → 36.3% |     624 → 592 | `findNearestCentroid()`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -4.0% |   -16 | 22.3% → 23.8% |     403 → 387 | `distance(Double[], Double[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -42.9% |    -6 |   0.8% → 0.5% |        14 → 8 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -42.9% |    -6 |   0.8% → 0.5% |        14 → 8 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite`                             |
|  -33.3% |    -5 |   0.8% → 0.6% |       15 → 10 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                                        |
|  -33.3% |    -5 |   0.8% → 0.6% |       15 → 10 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                                        |
|  -33.3% |    -5 |   0.8% → 0.6% |       15 → 10 | `main(String[])`                                            | `org.renaissance.core.Launcher`                                        |
|  -31.3% |    -5 |   0.9% → 0.7% |       16 → 11 | `call()`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0` |
|   -1.9% |    -4 | 11.5% → 12.5% |     208 → 204 | `collectClusters(int[])`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -4 |   0.2% → 0.0% |         4 → 0 | `lambda$merge$6(List, List)`                                | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |    -4 |   0.2% → 0.0% |         4 → 0 | `apply(Object, Object)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `createParser(Map)`                                         | `org.renaissance.harness.ConfigParser`                                 |

##### Standard library

| Change | Delta |             % |       Samples | Function                                                                    | Location                                             |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------------------------- | ---------------------------------------------------- |
| -14.4% |  -210 | 80.4% → 76.5% | 1,456 → 1,246 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                        | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
| -14.3% |  -199 | 76.6% → 72.9% | 1,387 → 1,188 | `scan(ForkJoinPool$WorkQueue, int, int)`                                    | `java.util.concurrent.ForkJoinPool`                  |
| -13.8% |  -189 | 75.8% → 72.6% | 1,372 → 1,183 | `runWorker(ForkJoinPool$WorkQueue)`                                         | `java.util.concurrent.ForkJoinPool`                  |
| -13.9% |  -185 | 73.5% → 70.3% | 1,331 → 1,146 | `run()`                                                                     | `java.util.concurrent.ForkJoinWorkerThread`          |
| -10.2% |  -179 | 96.6% → 96.3% | 1,748 → 1,569 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  -9.8% |  -176 | 99.0% → 99.1% | 1,791 → 1,615 | `exec()`                                                                    | `java.util.concurrent.RecursiveTask`                 |
|  -9.8% |  -176 | 99.0% → 99.2% | 1,792 → 1,616 | `doExec()`                                                                  | `java.util.concurrent.ForkJoinTask`                  |
|  -9.6% |  -168 | 97.1% → 97.6% | 1,758 → 1,590 | `awaitDone(int, long)`                                                      | `java.util.concurrent.ForkJoinTask`                  |
|  -9.5% |  -167 | 97.1% → 97.6% | 1,757 → 1,590 | `join()`                                                                    | `java.util.concurrent.ForkJoinTask`                  |
| -14.5% |   -53 | 20.2% → 19.2% |     365 → 312 | `invoke()`                                                                  | `java.util.concurrent.ForkJoinTask`                  |
| -42.9% |    -6 |   0.8% → 0.5% |        14 → 8 | `invokeStatic(Object, Object)`                                              | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
| -42.9% |    -6 |   0.8% → 0.5% |        14 → 8 | `invoke(Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`  |
| -42.9% |    -6 |   0.8% → 0.5% |        14 → 8 | `invokeExact_MT(Object, Object, Object, Object)`                            | `java.lang.invoke.Invokers$Holder`                   |
| -42.9% |    -6 |   0.8% → 0.5% |        14 → 8 | `invokeImpl(Object, Object[])`                                              | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| -42.9% |    -6 |   0.8% → 0.5% |        14 → 8 | `invoke(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| -42.9% |    -6 |   0.8% → 0.5% |        14 → 8 | `invoke(Object, Object[])`                                                  | `java.lang.reflect.Method`                           |
|  -1.1% |    -5 | 24.3% → 26.6% |     439 → 434 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                   | `java.util.concurrent.ForkJoinPool`                  |
| -66.7% |    -4 |   0.3% → 0.1% |         6 → 2 | `run()`                                                                     | `java.net.URLClassLoader$1`                          |
| -66.7% |    -4 |   0.3% → 0.1% |         6 → 2 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`                     |
| -66.7% |    -4 |   0.3% → 0.1% |         6 → 2 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`             | `java.security.AccessController`                     |

# Allocated heap profile diff

Allocated 37.7 GiB → 37.8 GiB (+130.109 MiB, +0.3%) over 1,972 samples → 2,040 samples (19.6 MiB → 19 MiB per sample).

| Category         | Change |        Delta |             % |                Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| Standard library |  +0.7% | +261.764 MiB | 94.2% → 94.5% | 35.5 GiB → 35.8 GiB | 1,864 → 1,920 |
| Ours             |  -5.9% | -131.654 MiB |   5.8% → 5.5% | 2.19 GiB → 2.06 GiB |     106 → 118 |
| Unknown          | -16.6% |       -440 B |         <0.1% | 2.59 KiB → 2.16 KiB |             2 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|   Change |        Delta |             % |                Size |       Samples | Function                                                                        | Location                                                   |
| -------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  +344.2% | +206.673 MiB |   0.2% → 0.7% |    60 MiB → 267 MiB |        9 → 12 | `grow(int)`                                                                     | `java.util.ArrayList`                                      |
| +5295.3% | +175.264 MiB |  <0.1% → 0.5% |  3.31 MiB → 179 MiB |         2 → 6 | `lambda$merge$6(List, List)`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|    +0.5% | +165.754 MiB | 92.6% → 92.7% |   34.9 GiB → 35 GiB | 1,714 → 1,756 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                                         |
|      new | +159.122 MiB |   0.0% → 0.4% |       0 B → 159 MiB |         0 → 1 | `entryFor(String)`                                                              | `java.util.jar.JarFile`                                    |
| +1297.5% | +119.946 MiB |  <0.1% → 0.3% |  9.24 MiB → 129 MiB |        3 → 10 | `createSubtask(int, int)`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +656.5% |  +81.038 MiB |  <0.1% → 0.2% | 12.3 MiB → 93.4 MiB |         2 → 5 | `add(double[], double[])`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +159.9% |  +63.903 MiB |   0.1% → 0.3% |    40 MiB → 104 MiB |         2 → 8 | `lambda$collectClusters$0(Double[])`                                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|      new |  +33.881 MiB |   0.0% → 0.1% |      0 B → 33.9 MiB |         0 → 2 | `merge(Map, Map)`                                                               | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +17.5% |  +24.294 MiB |          0.4% |   139 MiB → 163 MiB |        12 → 3 | `createSubtask(int, int)`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +327.9% |  +10.865 MiB |         <0.1% | 3.31 MiB → 14.2 MiB |        6 → 21 | `copyOf(Object[], int, Class)`                                                  | `java.util.Arrays`                                         |
|  +560.3% |   +6.295 MiB |         <0.1% | 1.12 MiB → 7.42 MiB |        4 → 21 | `valueOf(double)`                                                               | `java.lang.Double`                                         |
|   +56.5% |   +2.266 MiB |         <0.1% | 4.01 MiB → 6.28 MiB |       11 → 17 | `intStream(Spliterator$OfInt, boolean)`                                         | `java.util.stream.StreamSupport`                           |
|  +142.1% |   +2.105 MiB |         <0.1% | 1.48 MiB → 3.59 MiB |         4 → 9 | `opWrapSink(int, Sink)`                                                         | `java.util.stream.IntPipeline$1`                           |
|      new |   +1.029 MiB |  0.0% → <0.1% |      0 B → 1.03 MiB |         0 → 1 | `createSubtask(int, int)`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +187.8% | +815.148 KiB |         <0.1% |  434 KiB → 1.22 MiB |         1 → 3 | `fillInStackTrace(int)`                                                         | `java.lang.Throwable`                                      |
|      new |  +810.39 KiB |  0.0% → <0.1% |       0 B → 810 KiB |         0 → 2 | `newString(byte[], int, int)`                                                   | `java.lang.StringLatin1`                                   |
|      new | +788.414 KiB |  0.0% → <0.1% |       0 B → 788 KiB |         0 → 2 | `transferTo(OutputStream)`                                                      | `java.io.InputStream`                                      |
|      new | +787.703 KiB |  0.0% → <0.1% |       0 B → 788 KiB |         0 → 2 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                    |
|      new | +777.281 KiB |  0.0% → <0.1% |       0 B → 777 KiB |         0 → 1 | `selectBenchmarks(BenchmarkSuite, Seq)`                                         | `org.renaissance.harness.RenaissanceSuite$`                |
|  +204.1% | +690.039 KiB |         <0.1% |     338 KiB → 1 MiB |         1 → 3 | `copyOfRangeByte(byte[], int, int)`                                             | `java.util.Arrays`                                         |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                                                        | Location                                      |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------- | --------------------------------------------- |
| +344.2% | +206.673 MiB |   0.2% → 0.7% |    60 MiB → 267 MiB |        9 → 12 | `grow(int)`                                                                     | `java.util.ArrayList`                         |
|   +0.5% | +165.754 MiB | 92.6% → 92.7% |   34.9 GiB → 35 GiB | 1,714 → 1,756 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                            |
|     new | +159.122 MiB |   0.0% → 0.4% |       0 B → 159 MiB |         0 → 1 | `entryFor(String)`                                                              | `java.util.jar.JarFile`                       |
| +327.9% |  +10.865 MiB |         <0.1% | 3.31 MiB → 14.2 MiB |        6 → 21 | `copyOf(Object[], int, Class)`                                                  | `java.util.Arrays`                            |
| +560.3% |   +6.295 MiB |         <0.1% | 1.12 MiB → 7.42 MiB |        4 → 21 | `valueOf(double)`                                                               | `java.lang.Double`                            |
|  +56.5% |   +2.266 MiB |         <0.1% | 4.01 MiB → 6.28 MiB |       11 → 17 | `intStream(Spliterator$OfInt, boolean)`                                         | `java.util.stream.StreamSupport`              |
| +142.1% |   +2.105 MiB |         <0.1% | 1.48 MiB → 3.59 MiB |         4 → 9 | `opWrapSink(int, Sink)`                                                         | `java.util.stream.IntPipeline$1`              |
| +187.8% | +815.148 KiB |         <0.1% |  434 KiB → 1.22 MiB |         1 → 3 | `fillInStackTrace(int)`                                                         | `java.lang.Throwable`                         |
|     new |  +810.39 KiB |  0.0% → <0.1% |       0 B → 810 KiB |         0 → 2 | `newString(byte[], int, int)`                                                   | `java.lang.StringLatin1`                      |
|     new | +788.414 KiB |  0.0% → <0.1% |       0 B → 788 KiB |         0 → 2 | `transferTo(OutputStream)`                                                      | `java.io.InputStream`                         |
|     new | +787.703 KiB |  0.0% → <0.1% |       0 B → 788 KiB |         0 → 2 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                       |
| +204.1% | +690.039 KiB |         <0.1% |     338 KiB → 1 MiB |         1 → 3 | `copyOfRangeByte(byte[], int, int)`                                             | `java.util.Arrays`                            |
|     new | +468.554 KiB |  0.0% → <0.1% |       0 B → 469 KiB |         0 → 2 | `allocateInstance(Object)`                                                      | `java.lang.invoke.DirectMethodHandle`         |
| +111.4% |  +423.71 KiB |         <0.1% |   380 KiB → 804 KiB |         1 → 2 | `<init>(ClassWriter)`                                                           | `jdk.internal.org.objectweb.asm.SymbolTable`  |
|     new | +417.296 KiB |  0.0% → <0.1% |       0 B → 417 KiB |         0 → 1 | `getInputStream(ZipEntry)`                                                      | `java.util.zip.ZipFile`                       |
|     new | +387.921 KiB |  0.0% → <0.1% |       0 B → 388 KiB |         0 → 1 | `visitFrameStart(int, int, int)`                                                | `jdk.internal.org.objectweb.asm.MethodWriter` |
|     new | +387.765 KiB |  0.0% → <0.1% |       0 B → 388 KiB |         0 → 1 | `loadConvert(char[], int, int, StringBuilder)`                                  | `java.util.Properties`                        |
|     new | +387.585 KiB |  0.0% → <0.1% |       0 B → 388 KiB |         0 → 1 | `add(Provider, String, String, String, HashMap)`                                | `sun.security.provider.SunEntries`            |
|     new | +318.812 KiB |  0.0% → <0.1% |       0 B → 319 KiB |         0 → 1 | `range(int, int)`                                                               | `java.util.stream.IntStream`                  |
|     new | +254.078 KiB |  0.0% → <0.1% |       0 B → 254 KiB |         0 → 1 | `<init>(int)`                                                                   | `jdk.internal.org.objectweb.asm.ByteVector`   |

##### Ours

|   Change |        Delta |            % |                Size | Samples | Function                                | Location                                                   |
| -------: | -----------: | -----------: | ------------------: | ------: | --------------------------------------- | ---------------------------------------------------------- |
| +5295.3% | +175.264 MiB | <0.1% → 0.5% |  3.31 MiB → 179 MiB |   2 → 6 | `lambda$merge$6(List, List)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +1297.5% | +119.946 MiB | <0.1% → 0.3% |  9.24 MiB → 129 MiB |  3 → 10 | `createSubtask(int, int)`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +656.5% |  +81.038 MiB | <0.1% → 0.2% | 12.3 MiB → 93.4 MiB |   2 → 5 | `add(double[], double[])`               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +159.9% |  +63.903 MiB |  0.1% → 0.3% |    40 MiB → 104 MiB |   2 → 8 | `lambda$collectClusters$0(Double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|      new |  +33.881 MiB |  0.0% → 0.1% |      0 B → 33.9 MiB |   0 → 2 | `merge(Map, Map)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +17.5% |  +24.294 MiB |         0.4% |   139 MiB → 163 MiB |  12 → 3 | `createSubtask(int, int)`               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|      new |   +1.029 MiB | 0.0% → <0.1% |      0 B → 1.03 MiB |   0 → 1 | `createSubtask(int, int)`               | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|      new | +777.281 KiB | 0.0% → <0.1% |       0 B → 777 KiB |   0 → 1 | `selectBenchmarks(BenchmarkSuite, Seq)` | `org.renaissance.harness.RenaissanceSuite$`                |
|    +2.7% |   +40.32 KiB |        <0.1% | 1.48 MiB → 1.52 MiB |   4 → 5 | `lambda$generateData$4(int)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |          Delta |            % |                Size | Samples | Function                                             | Location                                                   |
| ------: | -------------: | -----------: | ------------------: | ------: | ---------------------------------------------------- | ---------------------------------------------------------- |
|  -95.9% |   -292.021 MiB | 0.8% → <0.1% |  305 MiB → 12.5 MiB |       5 | `collectClusters(int[])`                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -14.7% |   -239.033 MiB |  4.2% → 3.6% | 1.59 GiB → 1.36 GiB | 68 → 70 | `findNearestCentroid()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |   -158.213 MiB |  0.4% → 0.0% |       158 MiB → 0 B |   1 → 0 | `newLinkedHashMap(int)`                              | `java.util.LinkedHashMap`                                  |
|  -96.1% |    -74.747 MiB | 0.2% → <0.1% |    77.8 MiB → 3 MiB |   4 → 2 | `vectorSum()`                                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -46.7% |    -65.669 MiB |  0.4% → 0.2% |  141 MiB → 74.9 MiB | 11 → 10 | `newNode(int, Object, Object, HashMap$Node)`         | `java.util.HashMap`                                        |
|  -27.6% |    -54.217 MiB |  0.5% → 0.4% |   196 MiB → 142 MiB |   6 → 4 | `resize()`                                           | `java.util.HashMap`                                        |
| removed |    -16.934 MiB | <0.1% → 0.0% |      16.9 MiB → 0 B |   1 → 0 | `lambda$boxed$0(int)`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -61.5% |     -8.891 MiB |        <0.1% | 14.5 MiB → 5.57 MiB | 39 → 14 | `mapToObj(IntFunction, int)`                         | `java.util.stream.IntPipeline`                             |
| removed |     -7.767 MiB | <0.1% → 0.0% |      7.77 MiB → 0 B |   1 → 0 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -42.3% |     -2.162 MiB |        <0.1% | 5.11 MiB → 2.95 MiB |       1 | `iterator()`                                         | `java.util.HashMap$EntrySet`                               |
|  -84.6% |     -2.079 MiB |        <0.1% |  2.46 MiB → 388 KiB |   7 → 1 | `builder(long, IntFunction)`                         | `java.util.stream.Nodes`                                   |
|  -10.5% |     -1.203 MiB |        <0.1% | 11.4 MiB → 10.2 MiB | 21 → 17 | `copyOf(byte[], int)`                                | `java.util.Arrays`                                         |
| removed |     -1.115 MiB | <0.1% → 0.0% |      1.12 MiB → 0 B |   2 → 0 | `<init>(int)`                                        | `java.lang.AbstractStringBuilder`                          |
|  -20.2% | -1,002.757 KiB |        <0.1% | 4.85 MiB → 3.87 MiB |  10 → 9 | `<init>(InputStream, Inflater, int)`                 | `java.util.zip.InflaterInputStream`                        |
| removed |   -951.109 KiB | <0.1% → 0.0% |       951 KiB → 0 B |   1 → 0 | `collectGarbage(String)`                             | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
| removed |   -484.421 KiB | <0.1% → 0.0% |       484 KiB → 0 B |   2 → 0 | `addConstantNameAndType(String, String)`             | `jdk.internal.org.objectweb.asm.SymbolTable`               |
|   -2.0% |    -433.25 KiB |         0.1% | 21.3 MiB → 20.8 MiB |       1 | `initTable()`                                        | `java.util.concurrent.ConcurrentHashMap`                   |
| removed |    -409.07 KiB | <0.1% → 0.0% |       409 KiB → 0 B |   1 → 0 | `visitMethod(int, String, String, String, String[])` | `jdk.internal.org.objectweb.asm.ClassWriter`               |
| removed |   -393.125 KiB | <0.1% → 0.0% |       393 KiB → 0 B |   1 → 0 | `initCEN(int, ZipCoder)`                             | `java.util.zip.ZipFile$Source`                             |
| removed |   -386.453 KiB | <0.1% → 0.0% |       386 KiB → 0 B |   1 → 0 | `opt(String, Read)`                                  | `scopt.OptionParser`                                       |

##### Standard library

|  Change |          Delta |            % |                Size | Samples | Function                                                       | Location                                     |
| ------: | -------------: | -----------: | ------------------: | ------: | -------------------------------------------------------------- | -------------------------------------------- |
| removed |   -158.213 MiB |  0.4% → 0.0% |       158 MiB → 0 B |   1 → 0 | `newLinkedHashMap(int)`                                        | `java.util.LinkedHashMap`                    |
|  -46.7% |    -65.669 MiB |  0.4% → 0.2% |  141 MiB → 74.9 MiB | 11 → 10 | `newNode(int, Object, Object, HashMap$Node)`                   | `java.util.HashMap`                          |
|  -27.6% |    -54.217 MiB |  0.5% → 0.4% |   196 MiB → 142 MiB |   6 → 4 | `resize()`                                                     | `java.util.HashMap`                          |
|  -61.5% |     -8.891 MiB |        <0.1% | 14.5 MiB → 5.57 MiB | 39 → 14 | `mapToObj(IntFunction, int)`                                   | `java.util.stream.IntPipeline`               |
|  -42.3% |     -2.162 MiB |        <0.1% | 5.11 MiB → 2.95 MiB |       1 | `iterator()`                                                   | `java.util.HashMap$EntrySet`                 |
|  -84.6% |     -2.079 MiB |        <0.1% |  2.46 MiB → 388 KiB |   7 → 1 | `builder(long, IntFunction)`                                   | `java.util.stream.Nodes`                     |
|  -10.5% |     -1.203 MiB |        <0.1% | 11.4 MiB → 10.2 MiB | 21 → 17 | `copyOf(byte[], int)`                                          | `java.util.Arrays`                           |
| removed |     -1.115 MiB | <0.1% → 0.0% |      1.12 MiB → 0 B |   2 → 0 | `<init>(int)`                                                  | `java.lang.AbstractStringBuilder`            |
|  -20.2% | -1,002.757 KiB |        <0.1% | 4.85 MiB → 3.87 MiB |  10 → 9 | `<init>(InputStream, Inflater, int)`                           | `java.util.zip.InflaterInputStream`          |
| removed |   -484.421 KiB | <0.1% → 0.0% |       484 KiB → 0 B |   2 → 0 | `addConstantNameAndType(String, String)`                       | `jdk.internal.org.objectweb.asm.SymbolTable` |
|   -2.0% |    -433.25 KiB |         0.1% | 21.3 MiB → 20.8 MiB |       1 | `initTable()`                                                  | `java.util.concurrent.ConcurrentHashMap`     |
| removed |    -409.07 KiB | <0.1% → 0.0% |       409 KiB → 0 B |   1 → 0 | `visitMethod(int, String, String, String, String[])`           | `jdk.internal.org.objectweb.asm.ClassWriter` |
| removed |   -393.125 KiB | <0.1% → 0.0% |       393 KiB → 0 B |   1 → 0 | `initCEN(int, ZipCoder)`                                       | `java.util.zip.ZipFile$Source`               |
| removed |   -382.453 KiB | <0.1% → 0.0% |       382 KiB → 0 B |   1 → 0 | `<init>()`                                                     | `jdk.internal.org.objectweb.asm.ByteVector`  |
| removed |   -380.445 KiB | <0.1% → 0.0% |       380 KiB → 0 B |   1 → 0 | `checkResource(String, boolean, JarEntry)`                     | `jdk.internal.loader.URLClassPath$JarLoader` |
| removed |   -379.476 KiB | <0.1% → 0.0% |       379 KiB → 0 B |   1 → 0 | `clone()`                                                      | `java.lang.Object`                           |
| removed |   -379.468 KiB | <0.1% → 0.0% |       379 KiB → 0 B |   1 → 0 | `getContents()`                                                | `sun.text.resources.cldr.FormatData_en`      |
|  -49.3% |   -375.734 KiB |        <0.1% |   762 KiB → 386 KiB |   2 → 1 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` | `java.util.concurrent.ConcurrentHashMap`     |
|  -21.3% |   -119.781 KiB |        <0.1% |   562 KiB → 442 KiB |       1 | `allocateUninitializedArray0(Class, int)`                      | `jdk.internal.misc.Unsafe`                   |
| removed |    -31.187 KiB | <0.1% → 0.0% |      31.2 KiB → 0 B |   1 → 0 | `doPeriodic()`                                                 | `jdk.jfr.internal.periodic.PeriodicEvents`   |

##### Ours

|  Change |        Delta |            % |                Size | Samples | Function                   | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------: | -------------------------- | ---------------------------------------------------------- |
|  -95.9% | -292.021 MiB | 0.8% → <0.1% |  305 MiB → 12.5 MiB |       5 | `collectClusters(int[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -14.7% | -239.033 MiB |  4.2% → 3.6% | 1.59 GiB → 1.36 GiB | 68 → 70 | `findNearestCentroid()`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -96.1% |  -74.747 MiB | 0.2% → <0.1% |    77.8 MiB → 3 MiB |   4 → 2 | `vectorSum()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |  -16.934 MiB | <0.1% → 0.0% |      16.9 MiB → 0 B |   1 → 0 | `lambda$boxed$0(int)`      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |   -7.767 MiB | <0.1% → 0.0% |      7.77 MiB → 0 B |   1 → 0 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed | -951.109 KiB | <0.1% → 0.0% |       951 KiB → 0 B |   1 → 0 | `collectGarbage(String)`   | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
| removed | -386.453 KiB | <0.1% → 0.0% |       386 KiB → 0 B |   1 → 0 | `opt(String, Read)`        | `scopt.OptionParser`                                       |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|    Change |          Delta |             % |                Size |       Samples | Function                                                  | Location                                                   |
| --------: | -------------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------------- |
|    +73.4% |     +2.435 GiB |  8.8% → 15.2% | 3.32 GiB → 5.76 GiB |     208 → 259 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
|     +5.5% |     +1.406 GiB | 67.8% → 71.3% |   25.6 GiB → 27 GiB | 1,234 → 1,329 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
|     +5.5% |     +1.406 GiB | 67.8% → 71.3% |   25.6 GiB → 27 GiB | 1,234 → 1,329 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
|     +4.5% |     +1.141 GiB | 67.0% → 69.8% | 25.2 GiB → 26.4 GiB | 1,220 → 1,304 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|    +25.8% | +1,013.912 MiB | 10.2% → 12.8% | 3.84 GiB → 4.83 GiB |     206 → 238 | `grow()`                                                  | `java.util.ArrayList`                                      |
|    +25.8% | +1,013.912 MiB | 10.2% → 12.8% | 3.84 GiB → 4.83 GiB |     206 → 238 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                      |
|    +25.8% | +1,013.912 MiB | 10.2% → 12.8% | 3.84 GiB → 4.83 GiB |     206 → 238 | `add(Object)`                                             | `java.util.ArrayList`                                      |
|    +15.9% |   +715.017 MiB | 11.7% → 13.5% |  4.4 GiB → 5.09 GiB |     222 → 258 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     +3.9% |   +630.829 MiB | 41.9% → 43.4% | 15.8 GiB → 16.4 GiB |     870 → 885 | `grow(int)`                                               | `java.util.ArrayList`                                      |
|     +7.8% |   +475.984 MiB | 15.9% → 17.1% | 5.99 GiB → 6.45 GiB |     290 → 328 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     +0.5% |    +176.62 MiB | 92.6% → 92.7% | 34.9 GiB → 35.1 GiB | 1,720 → 1,777 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                         |
|       new |   +159.122 MiB |   0.0% → 0.4% |       0 B → 159 MiB |         0 → 1 | `entryFor(String)`                                        | `java.util.jar.JarFile`                                    |
|       new |   +159.122 MiB |   0.0% → 0.4% |       0 B → 159 MiB |         0 → 1 | `entryFor(JarFile, String)`                               | `java.util.jar.JavaUtilJarAccessImpl`                      |
|       new |   +159.122 MiB |   0.0% → 0.4% |       0 B → 159 MiB |         0 → 1 | `getZipEntry(String, int)`                                | `java.util.zip.ZipFile`                                    |
|       new |   +159.122 MiB |   0.0% → 0.4% |       0 B → 159 MiB |         0 → 1 | `getEntry(String)`                                        | `java.util.zip.ZipFile`                                    |
|       new |   +159.122 MiB |   0.0% → 0.4% |       0 B → 159 MiB |         0 → 1 | `getEntry(String)`                                        | `java.util.jar.JarFile`                                    |
|       new |   +159.122 MiB |   0.0% → 0.4% |       0 B → 159 MiB |         0 → 1 | `getJarEntry(String)`                                     | `java.util.jar.JarFile`                                    |
| +10578.6% |    +158.73 MiB |  <0.1% → 0.4% |   1.5 MiB → 160 MiB |             3 | `getResource(String, boolean)`                            | `jdk.internal.loader.URLClassPath`                         |
| +14184.8% |   +158.384 MiB |  <0.1% → 0.4% |  1.12 MiB → 160 MiB |             2 | `getResource(String, boolean)`                            | `jdk.internal.loader.URLClassPath$JarLoader`               |
|  +2338.1% |   +156.817 MiB |  <0.1% → 0.4% |  6.71 MiB → 164 MiB |       11 → 12 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader`                                    |

##### Standard library

|    Change |          Delta |             % |                Size |       Samples | Function                                                                        | Location                                      |
| --------: | -------------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------- | --------------------------------------------- |
|    +73.4% |     +2.435 GiB |  8.8% → 15.2% | 3.32 GiB → 5.76 GiB |     208 → 259 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                       | `java.util.concurrent.ForkJoinPool`           |
|     +5.5% |     +1.406 GiB | 67.8% → 71.3% |   25.6 GiB → 27 GiB | 1,234 → 1,329 | `awaitDone(int, long)`                                                          | `java.util.concurrent.ForkJoinTask`           |
|     +5.5% |     +1.406 GiB | 67.8% → 71.3% |   25.6 GiB → 27 GiB | 1,234 → 1,329 | `join()`                                                                        | `java.util.concurrent.ForkJoinTask`           |
|     +4.5% |     +1.141 GiB | 67.0% → 69.8% | 25.2 GiB → 26.4 GiB | 1,220 → 1,304 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                       | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|    +25.8% | +1,013.912 MiB | 10.2% → 12.8% | 3.84 GiB → 4.83 GiB |     206 → 238 | `grow()`                                                                        | `java.util.ArrayList`                         |
|    +25.8% | +1,013.912 MiB | 10.2% → 12.8% | 3.84 GiB → 4.83 GiB |     206 → 238 | `add(Object, Object[], int)`                                                    | `java.util.ArrayList`                         |
|    +25.8% | +1,013.912 MiB | 10.2% → 12.8% | 3.84 GiB → 4.83 GiB |     206 → 238 | `add(Object)`                                                                   | `java.util.ArrayList`                         |
|     +3.9% |   +630.829 MiB | 41.9% → 43.4% | 15.8 GiB → 16.4 GiB |     870 → 885 | `grow(int)`                                                                     | `java.util.ArrayList`                         |
|     +0.5% |    +176.62 MiB | 92.6% → 92.7% | 34.9 GiB → 35.1 GiB | 1,720 → 1,777 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                            |
|       new |   +159.122 MiB |   0.0% → 0.4% |       0 B → 159 MiB |         0 → 1 | `entryFor(String)`                                                              | `java.util.jar.JarFile`                       |
|       new |   +159.122 MiB |   0.0% → 0.4% |       0 B → 159 MiB |         0 → 1 | `entryFor(JarFile, String)`                                                     | `java.util.jar.JavaUtilJarAccessImpl`         |
|       new |   +159.122 MiB |   0.0% → 0.4% |       0 B → 159 MiB |         0 → 1 | `getZipEntry(String, int)`                                                      | `java.util.zip.ZipFile`                       |
|       new |   +159.122 MiB |   0.0% → 0.4% |       0 B → 159 MiB |         0 → 1 | `getEntry(String)`                                                              | `java.util.zip.ZipFile`                       |
|       new |   +159.122 MiB |   0.0% → 0.4% |       0 B → 159 MiB |         0 → 1 | `getEntry(String)`                                                              | `java.util.jar.JarFile`                       |
|       new |   +159.122 MiB |   0.0% → 0.4% |       0 B → 159 MiB |         0 → 1 | `getJarEntry(String)`                                                           | `java.util.jar.JarFile`                       |
| +10578.6% |    +158.73 MiB |  <0.1% → 0.4% |   1.5 MiB → 160 MiB |             3 | `getResource(String, boolean)`                                                  | `jdk.internal.loader.URLClassPath`            |
| +14184.8% |   +158.384 MiB |  <0.1% → 0.4% |  1.12 MiB → 160 MiB |             2 | `getResource(String, boolean)`                                                  | `jdk.internal.loader.URLClassPath$JarLoader`  |
|  +2338.1% |   +156.817 MiB |  <0.1% → 0.4% |  6.71 MiB → 164 MiB |       11 → 12 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                       |
|  +2338.1% |   +156.817 MiB |  <0.1% → 0.4% |  6.71 MiB → 164 MiB |       11 → 12 | `defineClass(String, byte[], int, int, CodeSource)`                             | `java.security.SecureClassLoader`             |
|  +2332.4% |   +156.429 MiB |  <0.1% → 0.4% |  6.71 MiB → 163 MiB |            11 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                       |

##### Ours

|   Change |        Delta |             % |                Size |       Samples | Function                                         | Location                                                                              |
| -------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------ | ------------------------------------------------------------------------------------- |
|   +15.9% | +715.017 MiB | 11.7% → 13.5% |  4.4 GiB → 5.09 GiB |     222 → 258 | `collectClusters(int[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|    +7.8% | +475.984 MiB | 15.9% → 17.1% | 5.99 GiB → 6.45 GiB |     290 → 328 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|    +0.3% | +131.015 MiB |         99.4% | 37.5 GiB → 37.6 GiB | 1,844 → 1,914 | `compute()`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
| +1297.5% | +119.946 MiB |  <0.1% → 0.3% |  9.24 MiB → 129 MiB |        3 → 10 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +656.5% |  +81.038 MiB |  <0.1% → 0.2% | 12.3 MiB → 93.4 MiB |         2 → 5 | `add(double[], double[])`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +656.5% |  +81.038 MiB |  <0.1% → 0.2% | 12.3 MiB → 93.4 MiB |         2 → 5 | `combineResults(double[], double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +656.5% |  +81.038 MiB |  <0.1% → 0.2% | 12.3 MiB → 93.4 MiB |         2 → 5 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  +623.2% |  +79.576 MiB |  <0.1% → 0.2% | 12.8 MiB → 92.3 MiB |         3 → 5 | `average(List)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +159.9% |  +63.903 MiB |   0.1% → 0.3% |    40 MiB → 104 MiB |         2 → 8 | `lambda$collectClusters$0(Double[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +159.9% |  +63.903 MiB |   0.1% → 0.3% |    40 MiB → 104 MiB |         2 → 8 | `apply(Object)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000007001204b38` |
|  +146.4% |  +54.874 MiB |   0.1% → 0.2% | 37.5 MiB → 92.3 MiB |             5 | `computeClusterAverages()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +146.4% |  +54.874 MiB |   0.1% → 0.2% | 37.5 MiB → 92.3 MiB |             5 | `computeDirectly()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   +17.5% |  +24.294 MiB |          0.4% |   139 MiB → 163 MiB |        12 → 3 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +560.3% |   +6.295 MiB |         <0.1% | 1.12 MiB → 7.42 MiB |        4 → 21 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a1b10`                |
|  +560.3% |   +6.295 MiB |         <0.1% | 1.12 MiB → 7.42 MiB |        4 → 21 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|      new |    +5.54 MiB |  0.0% → <0.1% |      0 B → 5.54 MiB |         0 → 2 | `combineResults(Map, Map)`                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|      new |    +5.54 MiB |  0.0% → <0.1% |      0 B → 5.54 MiB |         0 → 2 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|      new |   +1.029 MiB |  0.0% → <0.1% |      0 B → 1.03 MiB |         0 → 1 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|    +2.0% | +517.937 KiB |          0.1% |   25 MiB → 25.5 MiB |       69 → 70 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|    +2.0% | +517.937 KiB |          0.1% |   25 MiB → 25.5 MiB |       69 → 70 | `apply(int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a18d8`                |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |                Size |       Samples | Function                                             | Location                                                               |
| -----: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| -11.1% | -869.226 MiB | 20.3% → 18.0% |  7.65 GiB → 6.8 GiB |     208 → 197 | `lambda$run$0(int, List, int)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| -11.1% | -869.226 MiB | 20.3% → 18.0% |  7.65 GiB → 6.8 GiB |     208 → 197 | `call()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0` |
| -11.1% | -869.226 MiB | 20.3% → 18.0% |  7.65 GiB → 6.8 GiB |     208 → 197 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|  -1.7% | -634.949 MiB | 95.6% → 93.6% |   36 GiB → 35.4 GiB | 1,753 → 1,828 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  -1.3% | -488.524 MiB | 93.9% → 92.3% | 35.4 GiB → 34.9 GiB | 1,726 → 1,800 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
|  -1.3% | -488.524 MiB | 93.9% → 92.3% | 35.4 GiB → 34.9 GiB | 1,726 → 1,800 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
|  -1.5% | -477.369 MiB | 82.8% → 81.3% | 31.2 GiB → 30.8 GiB | 1,531 → 1,563 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -1.5% | -477.369 MiB | 82.8% → 81.3% | 31.2 GiB → 30.8 GiB | 1,531 → 1,563 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -1.5% | -471.828 MiB | 82.8% → 81.3% | 31.2 GiB → 30.8 GiB | 1,531 → 1,565 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.4% | -455.354 MiB | 82.5% → 81.1% | 31.1 GiB → 30.7 GiB | 1,525 → 1,557 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.4% | -455.354 MiB | 82.5% → 81.1% | 31.1 GiB → 30.7 GiB | 1,525 → 1,557 | `apply(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |
|  -1.4% | -452.761 MiB | 82.5% → 81.1% | 31.1 GiB → 30.7 GiB | 1,525 → 1,558 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |
|  -1.4% | -452.761 MiB | 82.5% → 81.1% | 31.1 GiB → 30.7 GiB | 1,525 → 1,558 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -1.4% | -452.761 MiB | 82.5% → 81.1% | 31.1 GiB → 30.7 GiB | 1,525 → 1,558 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |
|  -1.4% | -452.761 MiB | 82.5% → 81.1% | 31.1 GiB → 30.7 GiB | 1,525 → 1,558 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                    |
|  -4.9% | -437.279 MiB | 23.2% → 22.0% | 8.74 GiB → 8.31 GiB |     390 → 418 | `<init>(Collection)`                                 | `java.util.ArrayList`                                                  |
|  -1.0% | -376.256 MiB | 94.3% → 93.0% | 35.5 GiB → 35.2 GiB | 1,732 → 1,805 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
|  -4.2% | -331.408 MiB | 20.5% → 19.6% | 7.73 GiB → 7.41 GiB |     216 → 209 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
|  -1.3% | -247.536 MiB | 50.8% → 50.0% | 19.1 GiB → 18.9 GiB |     859 → 904 | `toArray()`                                          | `java.util.ArrayList`                                                  |
| -14.7% | -239.033 MiB |   4.2% → 3.6% | 1.59 GiB → 1.36 GiB |       68 → 70 | `findNearestCentroid()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                             | Location                                            |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------- | --------------------------------------------------- |
|  -11.1% | -869.226 MiB | 20.3% → 18.0% |  7.65 GiB → 6.8 GiB |     208 → 197 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|   -1.7% | -634.949 MiB | 95.6% → 93.6% |   36 GiB → 35.4 GiB | 1,753 → 1,828 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|   -1.3% | -488.524 MiB | 93.9% → 92.3% | 35.4 GiB → 34.9 GiB | 1,726 → 1,800 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                 |
|   -1.3% | -488.524 MiB | 93.9% → 92.3% | 35.4 GiB → 34.9 GiB | 1,726 → 1,800 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`         |
|   -1.4% | -452.761 MiB | 82.5% → 81.1% | 31.1 GiB → 30.7 GiB | 1,525 → 1,558 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                 |
|   -1.4% | -452.761 MiB | 82.5% → 81.1% | 31.1 GiB → 30.7 GiB | 1,525 → 1,558 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                 |
|   -4.9% | -437.279 MiB | 23.2% → 22.0% | 8.74 GiB → 8.31 GiB |     390 → 418 | `<init>(Collection)`                                 | `java.util.ArrayList`                               |
|   -1.0% | -376.256 MiB | 94.3% → 93.0% | 35.5 GiB → 35.2 GiB | 1,732 → 1,805 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                 |
|   -4.2% | -331.408 MiB | 20.5% → 19.6% | 7.73 GiB → 7.41 GiB |     216 → 209 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                 |
|   -1.3% | -247.536 MiB | 50.8% → 50.0% | 19.1 GiB → 18.9 GiB |     859 → 904 | `toArray()`                                          | `java.util.ArrayList`                               |
|   -0.8% | -193.339 MiB | 59.4% → 58.7% | 22.4 GiB → 22.2 GiB |         1,133 | `addAll(Collection)`                                 | `java.util.ArrayList`                               |
|  -99.3% | -158.543 MiB |  0.4% → <0.1% |  160 MiB → 1.14 MiB |         4 → 3 | `read(InputStream, String)`                          | `java.util.jar.Manifest`                            |
|  -99.3% | -158.543 MiB |  0.4% → <0.1% |  160 MiB → 1.14 MiB |         4 → 3 | `<init>(JarVerifier, InputStream, String)`           | `java.util.jar.Manifest`                            |
|  -99.3% | -158.543 MiB |  0.4% → <0.1% |  160 MiB → 1.14 MiB |         4 → 3 | `<init>(InputStream, String)`                        | `java.util.jar.Manifest`                            |
|  -99.3% | -158.543 MiB |  0.4% → <0.1% |  160 MiB → 1.14 MiB |         4 → 3 | `getManifestFromReference()`                         | `java.util.jar.JarFile`                             |
|  -99.3% | -158.543 MiB |  0.4% → <0.1% |  160 MiB → 1.14 MiB |         4 → 3 | `getManifest()`                                      | `java.util.jar.JarFile`                             |
|  -99.3% | -158.543 MiB |  0.4% → <0.1% |  160 MiB → 1.14 MiB |         4 → 3 | `getManifest()`                                      | `jdk.internal.loader.URLClassPath$JarLoader$2`      |
| removed | -158.213 MiB |   0.4% → 0.0% |       158 MiB → 0 B |         1 → 0 | `newLinkedHashMap(int)`                              | `java.util.LinkedHashMap`                           |
| removed | -158.213 MiB |   0.4% → 0.0% |       158 MiB → 0 B |         1 → 0 | `<init>(int)`                                        | `java.util.jar.Attributes`                          |
|  -46.7% |  -65.669 MiB |   0.4% → 0.2% |  141 MiB → 74.9 MiB |       11 → 10 | `newNode(int, Object, Object, HashMap$Node)`         | `java.util.HashMap`                                 |

##### Ours

|  Change |        Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                                          |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
|  -11.1% | -869.226 MiB | 20.3% → 18.0% |  7.65 GiB → 6.8 GiB |     208 → 197 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                       |
|  -11.1% | -869.226 MiB | 20.3% → 18.0% |  7.65 GiB → 6.8 GiB |     208 → 197 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`            |
|   -1.5% | -477.369 MiB | 82.8% → 81.3% | 31.2 GiB → 30.8 GiB | 1,531 → 1,563 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                        |
|   -1.5% | -477.369 MiB | 82.8% → 81.3% | 31.2 GiB → 30.8 GiB | 1,531 → 1,563 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                        |
|   -1.5% | -471.828 MiB | 82.8% → 81.3% | 31.2 GiB → 30.8 GiB | 1,531 → 1,565 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                                       |
|   -1.4% | -455.354 MiB | 82.5% → 81.1% | 31.1 GiB → 30.7 GiB | 1,525 → 1,557 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                       |
|   -1.4% | -455.354 MiB | 82.5% → 81.1% | 31.1 GiB → 30.7 GiB | 1,525 → 1,557 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0`            |
|   -1.4% | -452.761 MiB | 82.5% → 81.1% | 31.1 GiB → 30.7 GiB | 1,525 → 1,558 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                       |
|   -1.4% | -452.761 MiB | 82.5% → 81.1% | 31.1 GiB → 30.7 GiB | 1,525 → 1,558 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88`            |
|  -14.7% | -239.033 MiB |   4.2% → 3.6% | 1.59 GiB → 1.36 GiB |       68 → 70 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                        |
|  -96.1% |  -74.747 MiB |  0.2% → <0.1% |    77.8 MiB → 3 MiB |         4 → 2 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                         |
|  -96.1% |  -74.747 MiB |  0.2% → <0.1% |    77.8 MiB → 3 MiB |         4 → 2 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                         |
| removed |  -16.934 MiB |  <0.1% → 0.0% |      16.9 MiB → 0 B |         1 → 0 | `lambda$boxed$0(int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                            |
| removed |  -16.934 MiB |  <0.1% → 0.0% |      16.9 MiB → 0 B |         1 → 0 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda.0x0000007001205510` |
| removed |  -16.934 MiB |  <0.1% → 0.0% |      16.9 MiB → 0 B |         1 → 0 | `boxed(double[])`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                            |
|   -0.8% |   -1.279 MiB |          0.4% |   165 MiB → 164 MiB |         7 → 5 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                                         |
| removed | -951.109 KiB |  <0.1% → 0.0% |       951 KiB → 0 B |         1 → 0 | `collectGarbage(String)`                                                                                               | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`                          |
| removed | -951.109 KiB |  <0.1% → 0.0% |       951 KiB → 0 B |         1 → 0 | `afterOperationSetUp(String, int, boolean)`                                                                            | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`                          |
| removed | -951.109 KiB |  <0.1% → 0.0% |       951 KiB → 0 B |         1 → 0 | `notifyAfterOperationSetUp(String, int, boolean)`                                                                      | `org.renaissance.harness.EventDispatcher`                                         |
|   -0.5% | -931.359 KiB |          0.5% |   191 MiB → 190 MiB |       78 → 76 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                       |

# Retained heap profile diff

Retained 2.57 MiB → 2.75 MiB (+184.023 KiB, +7.0%) over 13 objects → 10 objects (202 KiB → 282 KiB per object).

| Category         | Change |        Delta |      % |                Size | Objects |
| ---------------- | -----: | -----------: | -----: | ------------------: | ------: |
| Standard library |  +7.0% | +184.007 KiB | 100.0% | 2.57 MiB → 2.75 MiB |  12 → 9 |
| Ours             | +66.7% |        +16 B |  <0.1% |         24 B → 40 B |       1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

| Change |       Delta |             % |                Size | Objects | Function                                                                        | Location                                    |
| -----: | ----------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------- |
|  +9.2% | +194.64 KiB | 80.2% → 81.8% | 2.06 MiB → 2.25 MiB |   1 → 2 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                          |
|    new |      +112 B |  0.0% → <0.1% |         0 B → 112 B |   0 → 1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                     |
|    new |       +40 B |  0.0% → <0.1% |          0 B → 40 B |   0 → 1 | `lambda$generateData$4(int)`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans` |
|    new |       +24 B |  0.0% → <0.1% |          0 B → 24 B |   0 → 1 | `newString(byte[], int, int)`                                                   | `java.lang.StringLatin1`                    |

##### Standard library

| Change |       Delta |             % |                Size | Objects | Function                                                                        | Location                 |
| -----: | ----------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------------------- | ------------------------ |
|  +9.2% | +194.64 KiB | 80.2% → 81.8% | 2.06 MiB → 2.25 MiB |   1 → 2 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`       |
|    new |      +112 B |  0.0% → <0.1% |         0 B → 112 B |   0 → 1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`  |
|    new |       +24 B |  0.0% → <0.1% |          0 B → 24 B |   0 → 1 | `newString(byte[], int, int)`                                                   | `java.lang.StringLatin1` |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

|  Change |      Delta |            % |           Size | Objects | Function                                                       | Location                                 |
| ------: | ---------: | -----------: | -------------: | ------: | -------------------------------------------------------------- | ---------------------------------------- |
| removed | -8.015 KiB |  0.3% → 0.0% | 8.02 KiB → 0 B |   1 → 0 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` | `java.util.concurrent.ConcurrentHashMap` |
| removed | -2.164 KiB |  0.1% → 0.0% | 2.16 KiB → 0 B |   1 → 0 | `copyOf(Object[], int, Class)`                                 | `java.util.Arrays`                       |
| removed |     -544 B | <0.1% → 0.0% |    544 B → 0 B |   2 → 0 | `registerWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`      |
| removed |      -32 B | <0.1% → 0.0% |     32 B → 0 B |   1 → 0 | `newNode(int, Object, Object, HashMap$Node)`                   | `java.util.HashMap`                      |
| removed |      -24 B | <0.1% → 0.0% |     24 B → 0 B |   1 → 0 | `opt(String, Read)`                                            | `scopt.OptionParser`                     |
|  -25.0% |      -24 B |        <0.1% |    96 B → 72 B |   4 → 3 | `valueOf(double)`                                              | `java.lang.Double`                       |

##### Standard library

|  Change |      Delta |            % |           Size | Objects | Function                                                       | Location                                 |
| ------: | ---------: | -----------: | -------------: | ------: | -------------------------------------------------------------- | ---------------------------------------- |
| removed | -8.015 KiB |  0.3% → 0.0% | 8.02 KiB → 0 B |   1 → 0 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` | `java.util.concurrent.ConcurrentHashMap` |
| removed | -2.164 KiB |  0.1% → 0.0% | 2.16 KiB → 0 B |   1 → 0 | `copyOf(Object[], int, Class)`                                 | `java.util.Arrays`                       |
| removed |     -544 B | <0.1% → 0.0% |    544 B → 0 B |   2 → 0 | `registerWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`      |
| removed |      -32 B | <0.1% → 0.0% |     32 B → 0 B |   1 → 0 | `newNode(int, Object, Object, HashMap$Node)`                   | `java.util.HashMap`                      |
|  -25.0% |      -24 B |        <0.1% |    96 B → 72 B |   4 → 3 | `valueOf(double)`                                              | `java.lang.Double`                       |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|    Change |        Delta |             % |                Size | Objects | Function                                             | Location                                                               |
| --------: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
|       new |    +2.06 MiB |  0.0% → 74.9% |      0 B → 2.06 MiB |   0 → 1 | `accept(Object, Object)`                             | `java.util.stream.Collectors$$Lambda.0x00000070010c40c8`               |
|       new |  +194.64 KiB |   0.0% → 6.9% |       0 B → 195 KiB |   0 → 1 | `addAll(Collection)`                                 | `java.util.ArrayList`                                                  |
|       new |  +194.64 KiB |   0.0% → 6.9% |       0 B → 195 KiB |   0 → 1 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|       new |  +194.64 KiB |   0.0% → 6.9% |       0 B → 195 KiB |   0 → 1 | `apply(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd0` |
|       new |  +194.64 KiB |   0.0% → 6.9% |       0 B → 195 KiB |   0 → 1 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |
|       new |  +194.64 KiB |   0.0% → 6.9% |       0 B → 195 KiB |   0 → 1 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|       new |  +194.64 KiB |   0.0% → 6.9% |       0 B → 195 KiB |   0 → 1 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204d88` |
|       new |  +194.64 KiB |   0.0% → 6.9% |       0 B → 195 KiB |   0 → 1 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                    |
|       new |  +194.64 KiB |   0.0% → 6.9% |       0 B → 195 KiB |   0 → 1 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|       new |  +194.64 KiB |   0.0% → 6.9% |       0 B → 195 KiB |   0 → 1 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|       new |  +194.64 KiB |   0.0% → 6.9% |       0 B → 195 KiB |   0 → 1 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|       new |  +194.64 KiB |   0.0% → 6.9% |       0 B → 195 KiB |   0 → 1 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|       new |  +194.64 KiB |   0.0% → 6.9% |       0 B → 195 KiB |   0 → 1 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
|       new |  +194.64 KiB |   0.0% → 6.9% |       0 B → 195 KiB |   0 → 1 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
|       new |  +194.64 KiB |   0.0% → 6.9% |       0 B → 195 KiB |   0 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|       new |  +194.64 KiB |   0.0% → 6.9% |       0 B → 195 KiB |   0 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
|       new |  +194.64 KiB |   0.0% → 6.9% |       0 B → 195 KiB |   0 → 1 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
| +36538.2% | +194.109 KiB |  <0.1% → 6.9% |     544 B → 195 KiB |   2 → 1 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
|     +9.1% | +192.476 KiB | 80.3% → 81.8% | 2.06 MiB → 2.25 MiB |       2 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                                     |
|     +9.1% | +192.476 KiB | 80.3% → 81.8% | 2.06 MiB → 2.25 MiB |       2 | `grow(int)`                                          | `java.util.ArrayList`                                                  |

##### Standard library

|    Change |        Delta |             % |                Size | Objects | Function                                             | Location                                                 |
| --------: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------------- | -------------------------------------------------------- |
|       new |    +2.06 MiB |  0.0% → 74.9% |      0 B → 2.06 MiB |   0 → 1 | `accept(Object, Object)`                             | `java.util.stream.Collectors$$Lambda.0x00000070010c40c8` |
|       new |  +194.64 KiB |   0.0% → 6.9% |       0 B → 195 KiB |   0 → 1 | `addAll(Collection)`                                 | `java.util.ArrayList`                                    |
|       new |  +194.64 KiB |   0.0% → 6.9% |       0 B → 195 KiB |   0 → 1 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                      |
|       new |  +194.64 KiB |   0.0% → 6.9% |       0 B → 195 KiB |   0 → 1 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                      |
|       new |  +194.64 KiB |   0.0% → 6.9% |       0 B → 195 KiB |   0 → 1 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                     |
|       new |  +194.64 KiB |   0.0% → 6.9% |       0 B → 195 KiB |   0 → 1 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                      |
|       new |  +194.64 KiB |   0.0% → 6.9% |       0 B → 195 KiB |   0 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`            |
|       new |  +194.64 KiB |   0.0% → 6.9% |       0 B → 195 KiB |   0 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                      |
|       new |  +194.64 KiB |   0.0% → 6.9% |       0 B → 195 KiB |   0 → 1 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                      |
| +36538.2% | +194.109 KiB |  <0.1% → 6.9% |     544 B → 195 KiB |   2 → 1 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`              |
|     +9.1% | +192.476 KiB | 80.3% → 81.8% | 2.06 MiB → 2.25 MiB |       2 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                       |
|     +9.1% | +192.476 KiB | 80.3% → 81.8% | 2.06 MiB → 2.25 MiB |       2 | `grow(int)`                                          | `java.util.ArrayList`                                    |
|       new |       +112 B |  0.0% → <0.1% |         0 B → 112 B |   0 → 1 | `<clinit>()`                                         | `scala.Predef$`                                          |
|       ~0% |        +40 B | 80.2% → 74.9% |            2.06 MiB |   5 → 6 | `copyInto(Sink, Spliterator)`                        | `java.util.stream.AbstractPipeline`                      |
|       ~0% |        +40 B | 80.2% → 74.9% |            2.06 MiB |   5 → 6 | `wrapAndCopyInto(Sink, Spliterator)`                 | `java.util.stream.AbstractPipeline`                      |
|       ~0% |        +40 B | 80.2% → 74.9% |            2.06 MiB |   5 → 6 | `evaluateSequential(PipelineHelper, Spliterator)`    | `java.util.stream.ReduceOps$ReduceOp`                    |
|       ~0% |        +40 B | 80.2% → 74.9% |            2.06 MiB |   5 → 6 | `evaluate(TerminalOp)`                               | `java.util.stream.AbstractPipeline`                      |
|       ~0% |        +40 B | 80.2% → 74.9% |            2.06 MiB |   5 → 6 | `collect(Collector)`                                 | `java.util.stream.ReferencePipeline`                     |
|       new |        +40 B |  0.0% → <0.1% |          0 B → 40 B |   0 → 1 | `<init>(long, IntFunction)`                          | `java.util.stream.Nodes$ArrayNode`                       |
|       new |        +40 B |  0.0% → <0.1% |          0 B → 40 B |   0 → 1 | `<init>(long, IntFunction)`                          | `java.util.stream.Nodes$FixedNodeBuilder`                |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |       Delta |             % |                Size | Objects | Function                                                       | Location                                                 |
| ------: | ----------: | ------------: | ------------------: | ------: | -------------------------------------------------------------- | -------------------------------------------------------- |
| -100.0% |   -2.06 MiB | 80.2% → <0.1% |     2.06 MiB → 24 B |       1 | `accept(Object, Object)`                                       | `java.util.stream.Collectors$$Lambda.0x000000700100c230` |
| removed | -10.179 KiB |   0.4% → 0.0% |      10.2 KiB → 0 B |   2 → 0 | `parse(Seq, Object)`                                           | `scopt.OptionParser`                                     |
| removed | -10.179 KiB |   0.4% → 0.0% |      10.2 KiB → 0 B |   2 → 0 | `parse(String[])`                                              | `org.renaissance.harness.ConfigParser`                   |
|   -0.4% | -10.085 KiB | 90.3% → 84.0% | 2.32 MiB → 2.31 MiB |  10 → 8 | `main(String[])`                                               | `org.renaissance.harness.RenaissanceSuite`               |
|   -0.4% | -10.085 KiB | 90.3% → 84.0% | 2.32 MiB → 2.31 MiB |  10 → 8 | `invokeStatic(Object, Object)`                                 | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`     |
|   -0.4% | -10.085 KiB | 90.3% → 84.0% | 2.32 MiB → 2.31 MiB |  10 → 8 | `invoke(Object, Object, Object)`                               | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`      |
|   -0.4% | -10.085 KiB | 90.3% → 84.0% | 2.32 MiB → 2.31 MiB |  10 → 8 | `invokeExact_MT(Object, Object, Object, Object)`               | `java.lang.invoke.Invokers$Holder`                       |
|   -0.4% | -10.085 KiB | 90.3% → 84.0% | 2.32 MiB → 2.31 MiB |  10 → 8 | `invokeImpl(Object, Object[])`                                 | `jdk.internal.reflect.DirectMethodHandleAccessor`        |
|   -0.4% | -10.085 KiB | 90.3% → 84.0% | 2.32 MiB → 2.31 MiB |  10 → 8 | `invoke(Object, Object[])`                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`        |
|   -0.4% | -10.085 KiB | 90.3% → 84.0% | 2.32 MiB → 2.31 MiB |  10 → 8 | `invoke(Object, Object[])`                                     | `java.lang.reflect.Method`                               |
|   -0.4% | -10.085 KiB | 90.3% → 84.0% | 2.32 MiB → 2.31 MiB |  10 → 8 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`    | `org.renaissance.core.Launcher`                          |
|   -0.4% | -10.085 KiB | 90.3% → 84.0% | 2.32 MiB → 2.31 MiB |  10 → 8 | `launchHarnessClass(String, String[])`                         | `org.renaissance.core.Launcher`                          |
|   -0.4% | -10.085 KiB | 90.3% → 84.0% | 2.32 MiB → 2.31 MiB |  10 → 8 | `main(String[])`                                               | `org.renaissance.core.Launcher`                          |
|   -0.5% | -10.054 KiB | 80.6% → 74.9% | 2.07 MiB → 2.06 MiB |   8 → 7 | `main(String[])`                                               | `org.renaissance.harness.RenaissanceSuite$`              |
|   -3.0% |  -8.015 KiB |  10.0% → 9.1% |   264 KiB → 256 KiB |   2 → 1 | `putVal(Object, Object, boolean)`                              | `java.util.concurrent.ConcurrentHashMap`                 |
| removed |  -8.015 KiB |   0.3% → 0.0% |      8.02 KiB → 0 B |   1 → 0 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` | `java.util.concurrent.ConcurrentHashMap`                 |
| removed |  -8.015 KiB |   0.3% → 0.0% |      8.02 KiB → 0 B |   1 → 0 | `addCount(long, int)`                                          | `java.util.concurrent.ConcurrentHashMap`                 |
| removed |  -8.015 KiB |   0.3% → 0.0% |      8.02 KiB → 0 B |   1 → 0 | `putIfAbsent(Object, Object)`                                  | `java.util.concurrent.ConcurrentHashMap`                 |
| removed |  -8.015 KiB |   0.3% → 0.0% |      8.02 KiB → 0 B |   1 → 0 | `internKey(ReferencedKeyMap, Object)`                          | `jdk.internal.util.ReferencedKeyMap`                     |
| removed |  -8.015 KiB |   0.3% → 0.0% |      8.02 KiB → 0 B |   1 → 0 | `intern(ReferencedKeyMap, Object)`                             | `jdk.internal.util.ReferencedKeyMap`                     |

##### Standard library

|  Change |       Delta |             % |                Size | Objects | Function                                                       | Location                                                 |
| ------: | ----------: | ------------: | ------------------: | ------: | -------------------------------------------------------------- | -------------------------------------------------------- |
| -100.0% |   -2.06 MiB | 80.2% → <0.1% |     2.06 MiB → 24 B |       1 | `accept(Object, Object)`                                       | `java.util.stream.Collectors$$Lambda.0x000000700100c230` |
|   -0.4% | -10.085 KiB | 90.3% → 84.0% | 2.32 MiB → 2.31 MiB |  10 → 8 | `invokeStatic(Object, Object)`                                 | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`     |
|   -0.4% | -10.085 KiB | 90.3% → 84.0% | 2.32 MiB → 2.31 MiB |  10 → 8 | `invoke(Object, Object, Object)`                               | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`      |
|   -0.4% | -10.085 KiB | 90.3% → 84.0% | 2.32 MiB → 2.31 MiB |  10 → 8 | `invokeExact_MT(Object, Object, Object, Object)`               | `java.lang.invoke.Invokers$Holder`                       |
|   -0.4% | -10.085 KiB | 90.3% → 84.0% | 2.32 MiB → 2.31 MiB |  10 → 8 | `invokeImpl(Object, Object[])`                                 | `jdk.internal.reflect.DirectMethodHandleAccessor`        |
|   -0.4% | -10.085 KiB | 90.3% → 84.0% | 2.32 MiB → 2.31 MiB |  10 → 8 | `invoke(Object, Object[])`                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`        |
|   -0.4% | -10.085 KiB | 90.3% → 84.0% | 2.32 MiB → 2.31 MiB |  10 → 8 | `invoke(Object, Object[])`                                     | `java.lang.reflect.Method`                               |
|   -3.0% |  -8.015 KiB |  10.0% → 9.1% |   264 KiB → 256 KiB |   2 → 1 | `putVal(Object, Object, boolean)`                              | `java.util.concurrent.ConcurrentHashMap`                 |
| removed |  -8.015 KiB |   0.3% → 0.0% |      8.02 KiB → 0 B |   1 → 0 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` | `java.util.concurrent.ConcurrentHashMap`                 |
| removed |  -8.015 KiB |   0.3% → 0.0% |      8.02 KiB → 0 B |   1 → 0 | `addCount(long, int)`                                          | `java.util.concurrent.ConcurrentHashMap`                 |
| removed |  -8.015 KiB |   0.3% → 0.0% |      8.02 KiB → 0 B |   1 → 0 | `putIfAbsent(Object, Object)`                                  | `java.util.concurrent.ConcurrentHashMap`                 |
| removed |  -8.015 KiB |   0.3% → 0.0% |      8.02 KiB → 0 B |   1 → 0 | `internKey(ReferencedKeyMap, Object)`                          | `jdk.internal.util.ReferencedKeyMap`                     |
| removed |  -8.015 KiB |   0.3% → 0.0% |      8.02 KiB → 0 B |   1 → 0 | `intern(ReferencedKeyMap, Object)`                             | `jdk.internal.util.ReferencedKeyMap`                     |
| removed |  -8.015 KiB |   0.3% → 0.0% |      8.02 KiB → 0 B |   1 → 0 | `intern(Object)`                                               | `jdk.internal.util.ReferencedKeySet`                     |
| removed |  -8.015 KiB |   0.3% → 0.0% |      8.02 KiB → 0 B |   1 → 0 | `makeImpl(Class, Class[], boolean)`                            | `java.lang.invoke.MethodType`                            |
| removed |  -8.015 KiB |   0.3% → 0.0% |      8.02 KiB → 0 B |   1 → 0 | `methodType(Class, Class[], boolean)`                          | `java.lang.invoke.MethodType`                            |
| removed |  -8.015 KiB |   0.3% → 0.0% |      8.02 KiB → 0 B |   1 → 0 | `changeReturnType(Class)`                                      | `java.lang.invoke.MethodType`                            |
| removed |  -8.015 KiB |   0.3% → 0.0% |      8.02 KiB → 0 B |   1 → 0 | `makeAllocator(MemberName)`                                    | `java.lang.invoke.DirectMethodHandle`                    |
| removed |  -8.015 KiB |   0.3% → 0.0% |      8.02 KiB → 0 B |   1 → 0 | `make(MemberName)`                                             | `java.lang.invoke.DirectMethodHandle`                    |
| removed |  -8.015 KiB |   0.3% → 0.0% |      8.02 KiB → 0 B |   1 → 0 | `getDirectConstructorCommon(Class, MemberName, boolean)`       | `java.lang.invoke.MethodHandles$Lookup`                  |

# Lock contention profile diff

Blocked 7.03s → 7.44s (+416.73ms, +5.9%) over 54 contentions → 58 contentions (130.2ms → 128.4ms per contention).

| Category         | Change |     Delta |      % |          Time | Contentions |
| ---------------- | -----: | --------: | -----: | ------------: | ----------: |
| Standard library |  +5.9% | +416.73ms | 100.0% | 7.03s → 7.44s |     54 → 58 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

##### Standard library

| Change |     Delta |      % |          Time | Contentions | Function              | Location                   |
| -----: | --------: | -----: | ------------: | ----------: | --------------------- | -------------------------- |
|  +5.9% | +416.73ms | 100.0% | 7.03s → 7.44s |     54 → 58 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |     Delta |             % |              Time | Contentions | Function                                                                                                               | Location                                                               |
| -----: | --------: | ------------: | ----------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  +5.9% | +416.73ms |        100.0% |     7.03s → 7.44s |     54 → 58 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                             |
| +48.4% | +408.31ms | 12.0% → 16.8% |   842.8ms → 1.25s |     37 → 42 | `awaitWork(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
| +46.6% | +397.44ms | 12.1% → 16.8% |   853.6ms → 1.25s |     38 → 42 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
| +46.6% | +397.44ms | 12.1% → 16.8% |   853.6ms → 1.25s |     38 → 42 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                            |
| +92.9% | +226.11ms |   3.5% → 6.3% | 243.3ms → 469.4ms |     11 → 16 | `parkUntil(long)`                                                                                                      | `java.util.concurrent.locks.LockSupport`                               |
|  +2.8% | +190.61ms | 96.5% → 93.7% |     6.78s → 6.97s |     43 → 42 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                               |
|  +0.3% |  +19.29ms | 87.9% → 83.2% |     6.17s → 6.19s |          16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  +0.3% |  +19.29ms | 87.9% → 83.2% |     6.17s → 6.19s |          16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +0.3% |  +19.29ms | 87.9% → 83.2% |     6.17s → 6.19s |          16 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +0.3% |  +19.29ms | 87.9% → 83.2% |     6.17s → 6.19s |          16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +0.3% |  +19.29ms | 87.9% → 83.2% |     6.17s → 6.19s |          16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011f6c70`   |
|  +0.3% |  +19.29ms | 87.9% → 83.2% |     6.17s → 6.19s |          16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
|  +0.3% |  +19.29ms | 87.9% → 83.2% |     6.17s → 6.19s |          16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +0.3% |  +19.29ms | 87.9% → 83.2% |     6.17s → 6.19s |          16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  +0.3% |  +19.29ms | 87.9% → 83.2% |     6.17s → 6.19s |          16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  +0.3% |  +19.29ms | 87.9% → 83.2% |     6.17s → 6.19s |          16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +0.3% |  +19.29ms | 87.9% → 83.2% |     6.17s → 6.19s |          16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798` |
|  +0.3% |  +19.29ms | 87.9% → 83.2% |     6.17s → 6.19s |          16 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
|  +0.3% |  +19.29ms | 87.9% → 83.2% |     6.17s → 6.19s |          16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  +0.3% |  +19.29ms | 87.9% → 83.2% |     6.17s → 6.19s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |

##### Standard library

| Change |     Delta |             % |              Time | Contentions | Function                                         | Location                                             |
| -----: | --------: | ------------: | ----------------: | ----------: | ------------------------------------------------ | ---------------------------------------------------- |
|  +5.9% | +416.73ms |        100.0% |     7.03s → 7.44s |     54 → 58 | `park(boolean, long)`                            | `jdk.internal.misc.Unsafe`                           |
| +48.4% | +408.31ms | 12.0% → 16.8% |   842.8ms → 1.25s |     37 → 42 | `awaitWork(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
| +46.6% | +397.44ms | 12.1% → 16.8% |   853.6ms → 1.25s |     38 → 42 | `runWorker(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
| +46.6% | +397.44ms | 12.1% → 16.8% |   853.6ms → 1.25s |     38 → 42 | `run()`                                          | `java.util.concurrent.ForkJoinWorkerThread`          |
| +92.9% | +226.11ms |   3.5% → 6.3% | 243.3ms → 469.4ms |     11 → 16 | `parkUntil(long)`                                | `java.util.concurrent.locks.LockSupport`             |
|  +2.8% | +190.61ms | 96.5% → 93.7% |     6.78s → 6.97s |     43 → 42 | `park()`                                         | `java.util.concurrent.locks.LockSupport`             |
|  +0.3% |  +19.29ms | 87.9% → 83.2% |     6.17s → 6.19s |          16 | `get()`                                          | `java.util.concurrent.ForkJoinTask`                  |
|  +0.3% |  +19.29ms | 87.9% → 83.2% |     6.17s → 6.19s |          16 | `map(Function1)`                                 | `scala.collection.immutable.Range`                   |
|  +0.3% |  +19.29ms | 87.9% → 83.2% |     6.17s → 6.19s |          16 | `apply(Object)`                                  | `scala.runtime.function.JProcedure1`                 |
|  +0.3% |  +19.29ms | 87.9% → 83.2% |     6.17s → 6.19s |          16 | `foreach(Function1)`                             | `scala.collection.immutable.List`                    |
|  +0.3% |  +19.29ms | 87.9% → 83.2% |     6.17s → 6.19s |          16 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
|  +0.3% |  +19.29ms | 87.9% → 83.2% |     6.17s → 6.19s |          16 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`  |
|  +0.3% |  +19.29ms | 87.9% → 83.2% |     6.17s → 6.19s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                   |
|  +0.3% |  +19.29ms | 87.9% → 83.2% |     6.17s → 6.19s |          16 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +0.3% |  +19.29ms | 87.9% → 83.2% |     6.17s → 6.19s |          16 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +0.3% |  +19.29ms | 87.9% → 83.2% |     6.17s → 6.19s |          16 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                           |
|  +0.1% |   +8.42ms | 88.0% → 83.2% |     6.18s → 6.19s |     17 → 16 | `awaitDone(int, long)`                           | `java.util.concurrent.ForkJoinTask`                  |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |    Delta |           % |         Time | Contentions | Function                                             | Location                                                               |
| ------: | -------: | ----------: | -----------: | ----------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| removed | -10.87ms | 0.2% → 0.0% | 10.9ms → 0ms |       1 → 0 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                                    |
| removed | -10.87ms | 0.2% → 0.0% | 10.9ms → 0ms |       1 → 0 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| removed | -10.87ms | 0.2% → 0.0% | 10.9ms → 0ms |       1 → 0 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
| removed | -10.87ms | 0.2% → 0.0% | 10.9ms → 0ms |       1 → 0 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
| removed | -10.87ms | 0.2% → 0.0% | 10.9ms → 0ms |       1 → 0 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
| removed | -10.87ms | 0.2% → 0.0% | 10.9ms → 0ms |       1 → 0 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| removed | -10.87ms | 0.2% → 0.0% | 10.9ms → 0ms |       1 → 0 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| removed | -10.87ms | 0.2% → 0.0% | 10.9ms → 0ms |       1 → 0 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| removed | -10.87ms | 0.2% → 0.0% | 10.9ms → 0ms |       1 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| removed | -10.87ms | 0.2% → 0.0% | 10.9ms → 0ms |       1 → 0 | `lambda$run$0(int, List, int)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -10.87ms | 0.2% → 0.0% | 10.9ms → 0ms |       1 → 0 | `call()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0` |
| removed | -10.87ms | 0.2% → 0.0% | 10.9ms → 0ms |       1 → 0 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
| removed | -10.87ms | 0.2% → 0.0% | 10.9ms → 0ms |       1 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| removed | -10.87ms | 0.2% → 0.0% | 10.9ms → 0ms |       1 → 0 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |

##### Standard library

|  Change |    Delta |           % |         Time | Contentions | Function                                             | Location                                            |
| ------: | -------: | ----------: | -----------: | ----------: | ---------------------------------------------------- | --------------------------------------------------- |
| removed | -10.87ms | 0.2% → 0.0% | 10.9ms → 0ms |       1 → 0 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                 |
| removed | -10.87ms | 0.2% → 0.0% | 10.9ms → 0ms |       1 → 0 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                |
| removed | -10.87ms | 0.2% → 0.0% | 10.9ms → 0ms |       1 → 0 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| removed | -10.87ms | 0.2% → 0.0% | 10.9ms → 0ms |       1 → 0 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| removed | -10.87ms | 0.2% → 0.0% | 10.9ms → 0ms |       1 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| removed | -10.87ms | 0.2% → 0.0% | 10.9ms → 0ms |       1 → 0 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| removed | -10.87ms | 0.2% → 0.0% | 10.9ms → 0ms |       1 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| removed | -10.87ms | 0.2% → 0.0% | 10.9ms → 0ms |       1 → 0 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                 |

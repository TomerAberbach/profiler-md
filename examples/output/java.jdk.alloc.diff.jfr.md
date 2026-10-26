# Sampling profile diff

Collected 1,962 → 1,569 samples (-393 samples, -20.0%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             | -21.5% |  -380 | 90.2% → 88.5% | 1,769 → 1,389 |
| Standard library |  -6.7% |   -13 |  9.8% → 11.5% |     193 → 180 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % |   Samples | Function                                                  | Location                                                   |
| ------: | ----: | ----------: | --------: | --------------------------------------------------------- | ---------------------------------------------------------- |
|     new |   +13 | 0.0% → 0.8% |    0 → 13 | `grow(int)`                                               | `java.util.ArrayList`                                      |
|  +25.0% |    +4 | 0.8% → 1.3% |   16 → 20 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
|  +13.0% |    +3 | 1.2% → 1.7% |   23 → 26 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +200.0% |    +2 | 0.1% → 0.2% |     1 → 3 | `accept(Object)`                                          | `java.util.stream.ReduceOps$3ReducingSink`                 |
|  +50.0% |    +2 | 0.2% → 0.4% |     4 → 6 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  +66.7% |    +2 | 0.2% → 0.3% |     3 → 5 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
| +100.0% |    +2 | 0.1% → 0.3% |     2 → 4 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                                        |
|     new |    +1 | 0.0% → 0.1% |     0 → 1 | `wrapAndCopyInto(Sink, Spliterator)`                      | `java.util.stream.AbstractPipeline`                        |
|     new |    +1 | 0.0% → 0.1% |     0 → 1 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|   +0.8% |    +1 | 6.7% → 8.4% | 131 → 132 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +1 | 0.0% → 0.1% |     0 → 1 | `lambda$merge$6(List, List)`                              | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +50.0% |    +1 | 0.1% → 0.2% |     2 → 3 | `<init>(HashMap)`                                         | `java.util.HashMap$HashIterator`                           |
|     new |    +1 | 0.0% → 0.1% |     0 → 1 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`                   |
| +100.0% |    +1 |        0.1% |     1 → 2 | `add(double[], double[])`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |    +1 | 0.0% → 0.1% |     0 → 1 | `write0(FileDescriptor, long, int)`                       | `sun.nio.ch.UnixFileDispatcherImpl`                        |
|     new |    +1 | 0.0% → 0.1% |     0 → 1 | `match(byte[], byte[], byte[], byte[])`                   | `java.util.jar.JarFile`                                    |
|     new |    +1 | 0.0% → 0.1% |     0 → 1 | `currentTimeMillis()`                                     | `java.lang.System`                                         |
|     new |    +1 | 0.0% → 0.1% |     0 → 1 | `spliterator(double[], int, int, int)`                    | `java.util.Spliterators`                                   |
|     new |    +1 | 0.0% → 0.1% |     0 → 1 | `uncompensate()`                                          | `java.util.concurrent.ForkJoinPool`                        |
|     new |    +1 | 0.0% → 0.1% |     0 → 1 | `createSubtask(int, int)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Ours

|  Change | Delta |           % |   Samples | Function                     | Location                                                   |
| ------: | ----: | ----------: | --------: | ---------------------------- | ---------------------------------------------------------- |
|  +13.0% |    +3 | 1.2% → 1.7% |   23 → 26 | `computeDirectly()`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +1 | 0.0% → 0.1% |     0 → 1 | `compute()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|   +0.8% |    +1 | 6.7% → 8.4% | 131 → 132 | `collectClusters(int[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +1 | 0.0% → 0.1% |     0 → 1 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +100.0% |    +1 |        0.1% |     1 → 2 | `add(double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |    +1 | 0.0% → 0.1% |     0 → 1 | `createSubtask(int, int)`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                  | Location                                      |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
|     new |   +13 | 0.0% → 0.8% |  0 → 13 | `grow(int)`                                               | `java.util.ArrayList`                         |
|  +25.0% |    +4 | 0.8% → 1.3% | 16 → 20 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `accept(Object)`                                          | `java.util.stream.ReduceOps$3ReducingSink`    |
|  +50.0% |    +2 | 0.2% → 0.4% |   4 → 6 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +66.7% |    +2 | 0.2% → 0.3% |   3 → 5 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
| +100.0% |    +2 | 0.1% → 0.3% |   2 → 4 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `wrapAndCopyInto(Sink, Spliterator)`                      | `java.util.stream.AbstractPipeline`           |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `<init>(HashMap)`                                         | `java.util.HashMap$HashIterator`              |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `write0(FileDescriptor, long, int)`                       | `sun.nio.ch.UnixFileDispatcherImpl`           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `match(byte[], byte[], byte[], byte[])`                   | `java.util.jar.JarFile`                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `currentTimeMillis()`                                     | `java.lang.System`                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `spliterator(double[], int, int, int)`                    | `java.util.Spliterators`                      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `uncompensate()`                                          | `java.util.concurrent.ForkJoinPool`           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `afterNodeInsertion(boolean)`                             | `java.util.LinkedHashMap`                     |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `signalWaiters()`                                         | `java.util.concurrent.ForkJoinTask`           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(Spliterator, int, boolean)`                       | `java.util.stream.DoublePipeline`             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(AbstractPipeline, int)`                           | `java.util.stream.AbstractPipeline`           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `begin(long)`                                             | `java.util.stream.Sink$ChainedDouble`         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `resize()`                                                | `java.util.HashMap`                           |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                                      | Location                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------- | ---------------------------------------------------------- |
|  -27.5% |  -232 | 43.1% → 39.1% | 845 → 613 | `accumulate(Double[], double[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -23.4% |   -68 | 14.8% → 14.2% | 291 → 223 | `findNearestCentroid()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -87.7% |   -57 |   3.3% → 0.5% |    65 → 8 | `vectorSum()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -6.9% |   -28 | 20.7% → 24.1% | 406 → 378 | `distance(Double[], Double[])`                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -33.3% |   -13 |   2.0% → 1.7% |   39 → 26 | `copyOf(Object[], int)`                                       | `java.util.Arrays`                                         |
|  -12.9% |    -9 |   3.6% → 3.9% |   70 → 61 | `computeIfAbsent(Object, Function)`                           | `java.util.HashMap`                                        |
|  -70.0% |    -7 |   0.5% → 0.2% |    10 → 3 | `doExec()`                                                    | `java.util.concurrent.ForkJoinTask`                        |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `wrapSink(Sink)`                                              | `java.util.stream.AbstractPipeline`                        |
|  -37.5% |    -3 |   0.4% → 0.3% |     8 → 5 | `merge(Object, Object, BiFunction)`                           | `java.util.HashMap`                                        |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `join()`                                                      | `java.util.concurrent.ForkJoinTask`                        |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `checkIndex(int, int)`                                        | `java.util.Objects`                                        |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `lambda$merge$7(Map, Object, List)`                           | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `<init>(Map)`                                                 | `java.util.HashMap`                                        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `getChars(byte[], int, int, char[], int)`                     | `java.lang.StringUTF16`                                    |
|  -16.7% |    -1 |          0.3% |     6 → 5 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                                   |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `visitField(int, String, String, String, Object)`             | `jdk.internal.org.objectweb.asm.ClassWriter`               |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `readBytes0(byte[], int, int)`                                | `java.io.RandomAccessFile`                                 |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `nanoTime()`                                                  | `java.lang.System`                                         |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `allocateInstance(Class)`                                     | `jdk.internal.misc.Unsafe`                                 |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `scan(ForkJoinPool$WorkQueue, int, int)`                      | `java.util.concurrent.ForkJoinPool`                        |

##### Ours

|  Change | Delta |             % |   Samples | Function                             | Location                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------------ | ---------------------------------------------------------- |
|  -27.5% |  -232 | 43.1% → 39.1% | 845 → 613 | `accumulate(Double[], double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -23.4% |   -68 | 14.8% → 14.2% | 291 → 223 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -87.7% |   -57 |   3.3% → 0.5% |    65 → 8 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -6.9% |   -28 | 20.7% → 24.1% | 406 → 378 | `distance(Double[], Double[])`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `lambda$merge$7(Map, Object, List)`  | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                      | Location                                     |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------- | -------------------------------------------- |
|  -33.3% |   -13 | 2.0% → 1.7% | 39 → 26 | `copyOf(Object[], int)`                                       | `java.util.Arrays`                           |
|  -12.9% |    -9 | 3.6% → 3.9% | 70 → 61 | `computeIfAbsent(Object, Function)`                           | `java.util.HashMap`                          |
|  -70.0% |    -7 | 0.5% → 0.2% |  10 → 3 | `doExec()`                                                    | `java.util.concurrent.ForkJoinTask`          |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `wrapSink(Sink)`                                              | `java.util.stream.AbstractPipeline`          |
|  -37.5% |    -3 | 0.4% → 0.3% |   8 → 5 | `merge(Object, Object, BiFunction)`                           | `java.util.HashMap`                          |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `join()`                                                      | `java.util.concurrent.ForkJoinTask`          |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `checkIndex(int, int)`                                        | `java.util.Objects`                          |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `<init>(Map)`                                                 | `java.util.HashMap`                          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getChars(byte[], int, int, char[], int)`                     | `java.lang.StringUTF16`                      |
|  -16.7% |    -1 |        0.3% |   6 → 5 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                     |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `visitField(int, String, String, String, Object)`             | `jdk.internal.org.objectweb.asm.ClassWriter` |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `readBytes0(byte[], int, int)`                                | `java.io.RandomAccessFile`                   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `nanoTime()`                                                  | `java.lang.System`                           |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `allocateInstance(Class)`                                     | `jdk.internal.misc.Unsafe`                   |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `scan(ForkJoinPool$WorkQueue, int, int)`                      | `java.util.concurrent.ForkJoinPool`          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `forEach(BiConsumer)`                                         | `java.util.HashMap`                          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `accept(double)`                                              | `java.util.stream.DoublePipeline$1$1`        |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `hash(Object)`                                                | `java.util.HashMap`                          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `awaitWork(ForkJoinPool$WorkQueue)`                           | `java.util.concurrent.ForkJoinPool`          |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------- |
|    new |   +13 | 0.0% → 100.0% |  0 → 13 | `java.util.ArrayList:239` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| +100.0% |    +4 | 25.0% → 40.0% |   4 → 8 | `java.util.concurrent.ForkJoinPool:2058` |
|  +25.0% |    +1 |         25.0% |   4 → 5 | `java.util.concurrent.ForkJoinPool:2039` |
|  -12.5% |    -1 | 50.0% → 35.0% |   8 → 7 | `java.util.concurrent.ForkJoinPool:2053` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Location                                                       |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------- |
| +13.0% |    +3 | 100.0% | 23 → 26 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:204` |

##### `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`)

|  Change | Delta |      % | Samples | Location                                       |
| ------: | ----: | -----: | ------: | ---------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `java.util.stream.ReduceOps$3ReducingSink:169` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| +200.0% |    +2 | 25.0% → 50.0% |   1 → 3 | `java.util.concurrent.ForkJoinPool$WorkQueue:1332` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| +200.0% |    +2 | 33.3% → 60.0% |   1 → 3 | `java.util.concurrent.ForkJoinTask:437` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Location                |
| ------: | ----: | -----------: | ------: | ----------------------- |
|     new |    +3 | 0.0% → 75.0% |   0 → 3 | `java.util.HashMap:649` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:646` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:670` |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `java.util.HashMap:635` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.stream.AbstractPipeline:499` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % | Samples | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:150` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
|  -2.6% |    -1 | 29.0% → 28.0% | 38 → 37 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |
|  +1.1% |    +1 | 70.2% → 70.5% | 92 → 93 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
|    new |    +1 |   0.0% → 0.8% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Location                                        |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `<init>(HashMap)` (`java.util.HashMap$HashIterator`)

| Change | Delta |            % | Samples | Location                              |
| -----: | ----: | -----------: | ------: | ------------------------------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `java.util.HashMap$HashIterator:1587` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.locks.LockSupport:368` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |            % | Samples | Location                                                      |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `match(byte[], byte[], byte[], byte[])` (`java.util.jar.JarFile`)

| Change | Delta |             % | Samples | Location                     |
| -----: | ----: | ------------: | ------: | ---------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.jar.JarFile:1000` |

##### `spliterator(double[], int, int, int)` (`java.util.Spliterators`)

| Change | Delta |             % | Samples | Location                     |
| -----: | ----: | ------------: | ------: | ---------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.Spliterators:372` |

##### `uncompensate()` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % | Samples | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool:2008` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Location                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `afterNodeInsertion(boolean)` (`java.util.LinkedHashMap`)

| Change | Delta |             % | Samples | Location                      |
| -----: | ----: | ------------: | ------: | ----------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.LinkedHashMap:324` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ForkJoinTask:302` |

##### `<init>(Spliterator, int, boolean)` (`java.util.stream.DoublePipeline`)

| Change | Delta |             % | Samples | Location                             |
| -----: | ----: | ------------: | ------: | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.stream.DoublePipeline:79` |

##### `<init>(AbstractPipeline, int)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.stream.AbstractPipeline:211` |

##### `begin(long)` (`java.util.stream.Sink$ChainedDouble`)

| Change | Delta |             % | Samples | Location                                  |
| -----: | ----: | ------------: | ------: | ----------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.stream.Sink$ChainedDouble:352` |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashMap:741` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Location                                                      |
| -----: | ----: | -----: | --------: | ------------------------------------------------------------- |
| -27.5% |  -232 | 100.0% | 845 → 613 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Location                                                       |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------------- |
| -23.7% |   -64 | 92.8% → 92.4% | 270 → 206 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
| -22.2% |    -4 |   6.2% → 6.3% |   18 → 14 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- |
|  -98.4% |   -60 | 93.8% → 12.5% |  61 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |
| +133.3% |    +4 |  4.6% → 87.5% |   3 → 7 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |
| removed |    -1 |   1.5% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Location                                                       |
| -----: | ----: | -----: | --------: | -------------------------------------------------------------- |
|  -6.9% |   -28 | 100.0% | 406 → 378 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| -33.3% |   -13 | 100.0% | 39 → 26 | `java.util.Arrays:3482` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                 |
| -----: | ----: | ------------: | ------: | ------------------------ |
| -11.8% |    -8 | 97.1% → 98.4% | 68 → 60 | `java.util.HashMap:1219` |
| -50.0% |    -1 |   2.9% → 1.6% |   2 → 1 | `java.util.HashMap:1206` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % | Samples | Location                                |
| -----: | ----: | -----: | ------: | --------------------------------------- |
| -70.0% |    -7 | 100.0% |  10 → 3 | `java.util.concurrent.ForkJoinTask:387` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `java.util.stream.AbstractPipeline:546` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
| removed |    -4 |  50.0% → 0.0% |   4 → 0 | `java.util.HashMap:1371` |
|     new |    +2 |  0.0% → 40.0% |   0 → 2 | `java.util.HashMap:1391` |
|  -25.0% |    -1 | 50.0% → 60.0% |   4 → 3 | `java.util.HashMap:1384` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.concurrent.ForkJoinTask:654` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.Objects:385` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Location                                        |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans:112` |

##### `<init>(Map)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.HashMap:492` |

##### `getChars(byte[], int, int, char[], int)` (`java.lang.StringUTF16`)

|  Change | Delta |             % | Samples | Location                    |
| ------: | ----: | ------------: | ------: | --------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.StringUTF16:440` |

##### `visitField(int, String, String, String, Object)` (`jdk.internal.org.objectweb.asm.ClassWriter`)

|  Change | Delta |             % | Samples | Location                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `jdk.internal.org.objectweb.asm.ClassWriter:483` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1827` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Location                                                       |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.HashMap:1428` |

##### `accept(double)` (`java.util.stream.DoublePipeline$1$1`)

|  Change | Delta |             % | Samples | Location                                  |
| ------: | ----: | ------------: | ------: | ----------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.stream.DoublePipeline$1$1:176` |

##### `hash(Object)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.HashMap:338` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1881` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller   | Location              |
| -----: | ----: | ------------: | ------: | -------- | --------------------- |
|    new |   +13 | 0.0% → 100.0% |  0 → 13 | `grow()` | `java.util.ArrayList` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| +25.0% |    +4 | 100.0% | 16 → 20 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------- | ---------------------------------------------------------- |
| +13.0% |    +3 | 100.0% | 23 → 26 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`)

|  Change | Delta |      % | Samples | Caller        | Location                           |
| ------: | ----: | -----: | ------: | ------------- | ---------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % | Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| +50.0% |    +2 | 100.0% |   4 → 6 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % | Samples | Caller   | Location                            |
| -----: | ----: | -----: | ------: | -------- | ----------------------------------- |
| +66.7% |    +2 | 100.0% |   3 → 5 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Caller                        | Location            |
| ------: | ----: | -----: | ------: | ----------------------------- | ------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |             % | Samples | Caller                                        | Location                            |
| -----: | ----: | ------------: | ------: | --------------------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % | Samples | Caller   | Location                             |
| -----: | ----: | ------------: | ------: | -------- | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
|  +0.8% |    +1 | 100.0% | 131 → 132 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Caller                  | Location                                                               |
| -----: | ----: | ------------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178` |

##### `<init>(HashMap)` (`java.util.HashMap$HashIterator`)

| Change | Delta |      % | Samples | Caller            | Location                          |
| -----: | ----: | -----: | ------: | ----------------- | --------------------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `<init>(HashMap)` | `java.util.HashMap$EntryIterator` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |             % | Samples | Caller                              | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |      % | Samples | Caller                               | Location                                                  |
| ------: | ----: | -----: | ------: | ------------------------------------ | --------------------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `write0(FileDescriptor, long, int)` (`sun.nio.ch.UnixFileDispatcherImpl`)

| Change | Delta |             % | Samples | Caller                             | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `write(FileDescriptor, long, int)` | `sun.nio.ch.UnixFileDispatcherImpl` |

##### `match(byte[], byte[], byte[], byte[])` (`java.util.jar.JarFile`)

| Change | Delta |             % | Samples | Caller                        | Location                |
| -----: | ----: | ------------: | ------: | ----------------------------- | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `checkForSpecialAttributes()` | `java.util.jar.JarFile` |

##### `currentTimeMillis()` (`java.lang.System`)

| Change | Delta |             % | Samples | Caller              | Location                                    |
| -----: | ----: | ------------: | ------: | ------------------- | ------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getVmStartNanos()` | `org.renaissance.harness.RenaissanceSuite$` |

##### `spliterator(double[], int, int, int)` (`java.util.Spliterators`)

| Change | Delta |             % | Samples | Caller                            | Location           |
| -----: | ----: | ------------: | ------: | --------------------------------- | ------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `spliterator(double[], int, int)` | `java.util.Arrays` |

##### `uncompensate()` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % | Samples | Caller                 | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `afterNodeInsertion(boolean)` (`java.util.LinkedHashMap`)

| Change | Delta |             % | Samples | Caller                                          | Location            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Caller      | Location                            |
| -----: | ----: | ------------: | ------: | ----------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `setDone()` | `java.util.concurrent.ForkJoinTask` |

##### `<init>(Spliterator, int, boolean)` (`java.util.stream.DoublePipeline`)

| Change | Delta |             % | Samples | Caller                              | Location                               |
| -----: | ----: | ------------: | ------: | ----------------------------------- | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(Spliterator, int, boolean)` | `java.util.stream.DoublePipeline$Head` |

##### `<init>(AbstractPipeline, int)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |             % | Samples | Caller                          | Location                             |
| -----: | ----: | ------------: | ------: | ------------------------------- | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(AbstractPipeline, int)` | `java.util.stream.ReferencePipeline` |

##### `begin(long)` (`java.util.stream.Sink$ChainedDouble`)

| Change | Delta |             % | Samples | Caller                        | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller                                          | Location            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller        | Location                                                  |
| -----: | ----: | -----: | --------: | ------------- | --------------------------------------------------------- |
| -27.5% |  -232 | 100.0% | 845 → 613 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
| -23.4% |   -68 | 100.0% | 291 → 223 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % | Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | ------: | ------------------- | --------------------------------------------------------- |
| -87.7% |   -57 | 100.0% |  65 → 8 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------- |
|  -6.9% |   -28 | 100.0% | 406 → 378 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |             % | Samples | Caller      | Location              |
| -----: | ----: | ------------: | ------: | ----------- | --------------------- |
| -35.1% |   -13 | 94.9% → 92.3% | 37 → 24 | `grow(int)` | `java.util.ArrayList` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|  Change | Delta |              % | Samples | Caller                         | Location                                                   |
| ------: | ----: | -------------: | ------: | ------------------------------ | ---------------------------------------------------------- |
|  -11.6% |    -8 | 98.6% → 100.0% | 69 → 61 | `collectClusters(int[])`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 |    1.4% → 0.0% |   1 → 0 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool`                        |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Caller                                                    | Location                                      |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
|  -75.0% |    -6 | 80.0% → 66.7% |   8 → 2 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -2 |  20.0% → 0.0% |   2 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Caller                               | Location                            |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ----------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                              | Location                                    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| -37.5% |    -3 | 100.0% |   8 → 5 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|  Change | Delta |             % | Samples | Caller     | Location              |
| ------: | ----: | ------------: | ------: | ---------- | --------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `get(int)` | `java.util.ArrayList` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Caller                   | Location                                                               |
| ------: | ----: | ------------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30` |

##### `<init>(Map)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller            | Location                                    |
| ------: | ----: | ------------: | ------: | ----------------- | ------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `getChars(byte[], int, int, char[], int)` (`java.lang.StringUTF16`)

|  Change | Delta |             % | Samples | Caller            | Location                |
| ------: | ----: | ------------: | ------: | ----------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `toChars(byte[])` | `java.lang.StringUTF16` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |      % | Samples | Caller                      | Location                 |
| -----: | ----: | -----: | ------: | --------------------------- | ------------------------ |
| -16.7% |    -1 | 100.0% |   6 → 5 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `visitField(int, String, String, String, Object)` (`jdk.internal.org.objectweb.asm.ClassWriter`)

|  Change | Delta |             % | Samples | Caller                              | Location                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `clinit(ClassWriter, String, List)` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `readBytes0(byte[], int, int)` (`java.io.RandomAccessFile`)

| Change | Delta |      % | Samples | Caller                        | Location                   |
| -----: | ----: | -----: | ------: | ----------------------------- | -------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `readBytes(byte[], int, int)` | `java.io.RandomAccessFile` |

##### `nanoTime()` (`java.lang.System`)

|  Change | Delta |             % | Samples | Caller              | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------- | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getVmStartNanos()` | `org.renaissance.harness.RenaissanceSuite$` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |      % | Samples | Caller                     | Location                              |
| -----: | ----: | -----: | ------: | -------------------------- | ------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Caller                              | Location                            |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Caller          | Location                                                                              |
| -----: | ----: | -----: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller            | Location                                    |
| ------: | ----: | ------------: | ------: | ----------------- | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `accept(double)` (`java.util.stream.DoublePipeline$1$1`)

|  Change | Delta |             % | Samples | Caller                             | Location                                        |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ----------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `forEachRemaining(DoubleConsumer)` | `java.util.Spliterators$DoubleArraySpliterator` |

##### `hash(Object)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                        | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------- | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Caller                              | Location                            |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % | Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|     new |    +6 | 0.0% → 0.4% |   0 → 6 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| +400.0% |    +4 | 0.1% → 0.3% |   1 → 5 | `boxed(double[])`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +50.0% |    +4 | 0.4% → 0.8% |  8 → 12 | `putMapEntries(Map, boolean)`                                                                                          | `java.util.HashMap`                                                    |
| +200.0% |    +4 | 0.1% → 0.4% |   2 → 6 | `putVal(int, Object, Object, boolean, boolean)`                                                                        | `java.util.HashMap`                                                    |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `accept(Object)`                                                                                                       | `java.util.stream.ReduceOps$3ReducingSink`                             |
|  +20.0% |    +2 | 0.5% → 0.8% | 10 → 12 | `<init>(Map)`                                                                                                          | `java.util.HashMap`                                                    |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `stream(double[], int, int)`                                                                                           | `java.util.Arrays`                                                     |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `stream(double[])`                                                                                                     | `java.util.Arrays`                                                     |
|  +25.0% |    +1 | 0.2% → 0.3% |   4 → 5 | `transferTo(OutputStream)`                                                                                             | `java.io.InputStream`                                                  |
|  +25.0% |    +1 | 0.2% → 0.3% |   4 → 5 | `copy(InputStream, Path, CopyOption[])`                                                                                | `java.nio.file.Files`                                                  |
|  +25.0% |    +1 | 0.2% → 0.3% |   4 → 5 | `extractResource(String, Path)`                                                                                        | `org.renaissance.core.ResourceUtils`                                   |
|  +25.0% |    +1 | 0.2% → 0.3% |   4 → 5 | `extractResources(Iterable, Path)`                                                                                     | `org.renaissance.core.ResourceUtils`                                   |
|  +25.0% |    +1 | 0.2% → 0.3% |   4 → 5 | `createClassLoaderForModule(String)`                                                                                   | `org.renaissance.core.ModuleLoader`                                    |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178` |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `<init>(HashMap)`                                                                                                      | `java.util.HashMap$HashIterator`                                       |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `<init>(HashMap)`                                                                                                      | `java.util.HashMap$EntryIterator`                                      |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `iterator()`                                                                                                           | `java.util.HashMap$EntrySet`                                           |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                               |
| +100.0% |    +1 |        0.1% |   1 → 2 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |

##### Ours

|  Change | Delta |           % | Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|     new |    +6 | 0.0% → 0.4% |   0 → 6 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| +400.0% |    +4 | 0.1% → 0.3% |   1 → 5 | `boxed(double[])`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +25.0% |    +1 | 0.2% → 0.3% |   4 → 5 | `extractResource(String, Path)`                                                                                        | `org.renaissance.core.ResourceUtils`                                   |
|  +25.0% |    +1 | 0.2% → 0.3% |   4 → 5 | `extractResources(Iterable, Path)`                                                                                     | `org.renaissance.core.ResourceUtils`                                   |
|  +25.0% |    +1 | 0.2% → 0.3% |   4 → 5 | `createClassLoaderForModule(String)`                                                                                   | `org.renaissance.core.ModuleLoader`                                    |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178` |
| +100.0% |    +1 |        0.1% |   1 → 2 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +100.0% |    +1 |        0.1% |   1 → 2 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +100.0% |    +1 |        0.1% |   1 → 2 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `updateOption(OptionDef, Read)`                                                                                        | `scopt.OptionParser`                                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                           | Location                                   |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------ |
|  +50.0% |    +4 | 0.4% → 0.8% |  8 → 12 | `putMapEntries(Map, boolean)`                                                                      | `java.util.HashMap`                        |
| +200.0% |    +4 | 0.1% → 0.4% |   2 → 6 | `putVal(int, Object, Object, boolean, boolean)`                                                    | `java.util.HashMap`                        |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `accept(Object)`                                                                                   | `java.util.stream.ReduceOps$3ReducingSink` |
|  +20.0% |    +2 | 0.5% → 0.8% | 10 → 12 | `<init>(Map)`                                                                                      | `java.util.HashMap`                        |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `stream(double[], int, int)`                                                                       | `java.util.Arrays`                         |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `stream(double[])`                                                                                 | `java.util.Arrays`                         |
|  +25.0% |    +1 | 0.2% → 0.3% |   4 → 5 | `transferTo(OutputStream)`                                                                         | `java.io.InputStream`                      |
|  +25.0% |    +1 | 0.2% → 0.3% |   4 → 5 | `copy(InputStream, Path, CopyOption[])`                                                            | `java.nio.file.Files`                      |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `<init>(HashMap)`                                                                                  | `java.util.HashMap$HashIterator`           |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `<init>(HashMap)`                                                                                  | `java.util.HashMap$EntryIterator`          |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `iterator()`                                                                                       | `java.util.HashMap$EntrySet`               |
|  +50.0% |    +1 | 0.1% → 0.2% |   2 → 3 | `park()`                                                                                           | `java.util.concurrent.locks.LockSupport`   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `write0(FileDescriptor, long, int)`                                                                | `sun.nio.ch.UnixFileDispatcherImpl`        |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `write(FileDescriptor, long, int)`                                                                 | `sun.nio.ch.UnixFileDispatcherImpl`        |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `writeFromNativeBuffer(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` | `sun.nio.ch.IOUtil`                        |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `write(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)`                 | `sun.nio.ch.IOUtil`                        |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `write(FileDescriptor, ByteBuffer, long, boolean, int, NativeDispatcher)`                          | `sun.nio.ch.IOUtil`                        |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `write(ByteBuffer)`                                                                                | `sun.nio.ch.FileChannelImpl`               |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `writeFully(ByteBuffer)`                                                                           | `sun.nio.ch.ChannelOutputStream`           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `write(byte[], int, int)`                                                                          | `sun.nio.ch.ChannelOutputStream`           |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |       Samples | Function                                                  | Location                                                   |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------------- |
| -20.0% |  -388 | 98.9% → 99.0% | 1,941 → 1,553 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                        |
| -20.0% |  -388 | 99.1% → 99.2% | 1,944 → 1,556 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
| -20.0% |  -388 | 99.1% → 99.2% | 1,944 → 1,556 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                |
| -19.9% |  -387 | 98.9% → 99.0% | 1,940 → 1,553 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| -19.9% |  -387 | 98.9% → 99.0% | 1,940 → 1,553 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| -19.8% |  -382 | 98.5% → 98.8% | 1,932 → 1,550 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| -19.8% |  -382 | 98.5% → 98.8% | 1,932 → 1,550 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                       |
| -19.9% |  -379 | 97.0% → 97.1% | 1,903 → 1,524 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
| -19.9% |  -379 | 97.0% → 97.1% | 1,903 → 1,524 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
| -19.8% |  -373 | 95.9% → 96.1% | 1,881 → 1,508 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| -31.9% |  -291 | 46.5% → 39.6% |     912 → 621 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -31.9% |  -291 | 46.5% → 39.6% |     912 → 621 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -27.5% |  -232 | 43.1% → 39.1% |     845 → 613 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -32.1% |  -126 | 20.0% → 17.0% |     392 → 266 | `average(List)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -31.3% |  -123 | 20.0% → 17.2% |     393 → 270 | `computeClusterAverages()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -31.3% |  -123 | 20.0% → 17.2% |     393 → 270 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -22.4% |  -117 | 26.6% → 25.8% |     522 → 405 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| -10.5% |  -101 | 49.0% → 54.8% |     961 → 860 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -13.8% |   -96 | 35.5% → 38.3% |     697 → 601 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -8.5% |   -40 | 24.1% → 27.5% |     472 → 432 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -19.8% |  -382 | 98.5% → 98.8% | 1,932 → 1,550 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -31.9% |  -291 | 46.5% → 39.6% |     912 → 621 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -31.9% |  -291 | 46.5% → 39.6% |     912 → 621 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -27.5% |  -232 | 43.1% → 39.1% |     845 → 613 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -32.1% |  -126 | 20.0% → 17.0% |     392 → 266 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -31.3% |  -123 | 20.0% → 17.2% |     393 → 270 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -31.3% |  -123 | 20.0% → 17.2% |     393 → 270 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -10.5% |  -101 | 49.0% → 54.8% |     961 → 860 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -13.8% |   -96 | 35.5% → 38.3% |     697 → 601 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -6.9% |   -28 | 20.7% → 24.1% |     406 → 378 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -8 |   0.4% → 0.0% |         8 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   -3.5% |    -8 | 11.7% → 14.1% |     230 → 222 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -3.5% |    -8 | 11.7% → 14.1% |     230 → 222 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70` |
|   -3.3% |    -8 | 12.3% → 14.9% |     241 → 233 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -33.3% |    -4 |   0.6% → 0.5% |        12 → 8 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -80.0% |    -4 |   0.3% → 0.1% |         5 → 1 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -80.0% |    -4 |   0.3% → 0.1% |         5 → 1 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d4f0` |
|  -33.3% |    -4 |   0.6% → 0.5% |        12 → 8 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -33.3% |    -4 |   0.6% → 0.5% |        12 → 8 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30` |
|  -18.8% |    -3 |          0.8% |       16 → 13 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |

##### Standard library

| Change | Delta |             % |       Samples | Function                                                  | Location                                             |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------- |
| -20.0% |  -388 | 98.9% → 99.0% | 1,941 → 1,553 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                  |
| -20.0% |  -388 | 99.1% → 99.2% | 1,944 → 1,556 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                  |
| -20.0% |  -388 | 99.1% → 99.2% | 1,944 → 1,556 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`          |
| -19.9% |  -387 | 98.9% → 99.0% | 1,940 → 1,553 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                  |
| -19.9% |  -387 | 98.9% → 99.0% | 1,940 → 1,553 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
| -19.8% |  -382 | 98.5% → 98.8% | 1,932 → 1,550 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                 |
| -19.9% |  -379 | 97.0% → 97.1% | 1,903 → 1,524 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                  |
| -19.9% |  -379 | 97.0% → 97.1% | 1,903 → 1,524 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                  |
| -19.8% |  -373 | 95.9% → 96.1% | 1,881 → 1,508 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
| -22.4% |  -117 | 26.6% → 25.8% |     522 → 405 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                  |
|  -8.5% |   -40 | 24.1% → 27.5% |     472 → 432 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
| -33.3% |   -13 |   2.0% → 1.7% |       39 → 26 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                   |
| -13.5% |   -10 |   3.8% → 4.1% |       74 → 64 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                  |
|  -3.5% |    -8 | 11.7% → 14.1% |     230 → 222 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
| -38.5% |    -5 |   0.7% → 0.5% |        13 → 8 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                  |
| -28.6% |    -4 |   0.7% → 0.6% |       14 → 10 | `invoke(Object, Object[])`                                | `java.lang.reflect.Method`                           |
| -23.1% |    -3 |   0.7% → 0.6% |       13 → 10 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
| -23.1% |    -3 |   0.7% → 0.6% |       13 → 10 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`  |
| -23.1% |    -3 |   0.7% → 0.6% |       13 → 10 | `invokeExact_MT(Object, Object, Object, Object)`          | `java.lang.invoke.Invokers$Holder`                   |
| -23.1% |    -3 |   0.7% → 0.6% |       13 → 10 | `invokeImpl(Object, Object[])`                            | `jdk.internal.reflect.DirectMethodHandleAccessor`    |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |             % | Samples | Caller              | Location                                                               |
| -----: | ----: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8` |

##### `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |      % | Samples | Caller                     | Location                                               |
| ------: | ----: | -----: | ------: | -------------------------- | ------------------------------------------------------ |
| +400.0% |    +4 | 100.0% |   1 → 5 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller        | Location            |
| -----: | ----: | -----: | ------: | ------------- | ------------------- |
| +50.0% |    +4 | 100.0% |  8 → 12 | `<init>(Map)` | `java.util.HashMap` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Caller                        | Location            |
| ------: | ----: | -----: | ------: | ----------------------------- | ------------------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`)

|  Change | Delta |      % | Samples | Caller        | Location                           |
| ------: | ----: | -----: | ------: | ------------- | ---------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `<init>(Map)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller            | Location                                    |
| -----: | ----: | -----: | ------: | ----------------- | ------------------------------------------- |
| +20.0% |    +2 | 100.0% | 10 → 12 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `stream(double[], int, int)` (`java.util.Arrays`)

| Change | Delta |             % | Samples | Caller             | Location           |
| -----: | ----: | ------------: | ------: | ------------------ | ------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `stream(double[])` | `java.util.Arrays` |

##### `stream(double[])` (`java.util.Arrays`)

| Change | Delta |             % | Samples | Caller            | Location                                               |
| -----: | ----: | ------------: | ------: | ----------------- | ------------------------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `transferTo(OutputStream)` (`java.io.InputStream`)

| Change | Delta |      % | Samples | Caller                                  | Location              |
| -----: | ----: | -----: | ------: | --------------------------------------- | --------------------- |
| +25.0% |    +1 | 100.0% |   4 → 5 | `copy(InputStream, Path, CopyOption[])` | `java.nio.file.Files` |

##### `copy(InputStream, Path, CopyOption[])` (`java.nio.file.Files`)

| Change | Delta |      % | Samples | Caller                          | Location                             |
| -----: | ----: | -----: | ------: | ------------------------------- | ------------------------------------ |
| +25.0% |    +1 | 100.0% |   4 → 5 | `extractResource(String, Path)` | `org.renaissance.core.ResourceUtils` |

##### `extractResource(String, Path)` (`org.renaissance.core.ResourceUtils`)

| Change | Delta |      % | Samples | Caller                             | Location                             |
| -----: | ----: | -----: | ------: | ---------------------------------- | ------------------------------------ |
| +25.0% |    +1 | 100.0% |   4 → 5 | `extractResources(Iterable, Path)` | `org.renaissance.core.ResourceUtils` |

##### `extractResources(Iterable, Path)` (`org.renaissance.core.ResourceUtils`)

| Change | Delta |      % | Samples | Caller                               | Location                            |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------------------------------- |
| +25.0% |    +1 | 100.0% |   4 → 5 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |

##### `createClassLoaderForModule(String)` (`org.renaissance.core.ModuleLoader`)

| Change | Delta |             % | Samples | Caller                                                      | Location                        |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- | ------------------------------- |
| +50.0% |    +1 | 50.0% → 60.0% |   2 → 3 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Caller                  | Location                                                               |
| -----: | ----: | -----: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`)

| Change | Delta |      % | Samples | Caller                              | Location            |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `<init>(HashMap)` (`java.util.HashMap$HashIterator`)

| Change | Delta |      % | Samples | Caller            | Location                          |
| -----: | ----: | -----: | ------: | ----------------- | --------------------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `<init>(HashMap)` | `java.util.HashMap$EntryIterator` |

##### `<init>(HashMap)` (`java.util.HashMap$EntryIterator`)

| Change | Delta |      % | Samples | Caller       | Location                     |
| -----: | ----: | -----: | ------: | ------------ | ---------------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `iterator()` | `java.util.HashMap$EntrySet` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

| Change | Delta |      % | Samples | Caller                        | Location            |
| -----: | ----: | -----: | ------: | ----------------------------- | ------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |            % | Samples | Caller                              | Location                            |
| -----: | ----: | -----------: | ------: | ----------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |      % | Samples | Caller                               | Location                                                  |
| ------: | ----: | -----: | ------: | ------------------------------------ | --------------------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |      % | Samples | Caller                           | Location                                                  |
| ------: | ----: | -----: | ------: | -------------------------------- | --------------------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |      % | Samples | Caller      | Location                                               |
| ------: | ----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `updateOption(OptionDef, Read)` (`scopt.OptionParser`)

| Change | Delta |             % | Samples | Caller                                 | Location             |
| -----: | ----: | ------------: | ------: | -------------------------------------- | -------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `makeDef(OptionDefKind, String, Read)` | `scopt.OptionParser` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `write0(FileDescriptor, long, int)` (`sun.nio.ch.UnixFileDispatcherImpl`)

| Change | Delta |             % | Samples | Caller                             | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `write(FileDescriptor, long, int)` | `sun.nio.ch.UnixFileDispatcherImpl` |

##### `write(FileDescriptor, long, int)` (`sun.nio.ch.UnixFileDispatcherImpl`)

| Change | Delta |             % | Samples | Caller                                                                                             | Location            |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `writeFromNativeBuffer(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` | `sun.nio.ch.IOUtil` |

##### `writeFromNativeBuffer(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` (`sun.nio.ch.IOUtil`)

| Change | Delta |             % | Samples | Caller                                                                             | Location            |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `write(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` | `sun.nio.ch.IOUtil` |

##### `write(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` (`sun.nio.ch.IOUtil`)

| Change | Delta |             % | Samples | Caller                                                                    | Location            |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `write(FileDescriptor, ByteBuffer, long, boolean, int, NativeDispatcher)` | `sun.nio.ch.IOUtil` |

##### `write(FileDescriptor, ByteBuffer, long, boolean, int, NativeDispatcher)` (`sun.nio.ch.IOUtil`)

| Change | Delta |             % | Samples | Caller              | Location                     |
| -----: | ----: | ------------: | ------: | ------------------- | ---------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `write(ByteBuffer)` | `sun.nio.ch.FileChannelImpl` |

##### `write(ByteBuffer)` (`sun.nio.ch.FileChannelImpl`)

| Change | Delta |             % | Samples | Caller                   | Location                         |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `writeFully(ByteBuffer)` | `sun.nio.ch.ChannelOutputStream` |

##### `writeFully(ByteBuffer)` (`sun.nio.ch.ChannelOutputStream`)

| Change | Delta |             % | Samples | Caller                    | Location                         |
| -----: | ----: | ------------: | ------: | ------------------------- | -------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `write(byte[], int, int)` | `sun.nio.ch.ChannelOutputStream` |

##### `write(byte[], int, int)` (`sun.nio.ch.ChannelOutputStream`)

| Change | Delta |             % | Samples | Caller                     | Location              |
| -----: | ----: | ------------: | ------: | -------------------------- | --------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transferTo(OutputStream)` | `java.io.InputStream` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Caller                              | Location                            |
| -----: | ----: | -----: | ------------: | ----------------------------------- | ----------------------------------- |
| -20.0% |  -388 | 100.0% | 1,941 → 1,553 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Caller  | Location                                    |
| -----: | ----: | -----: | ------------: | ------- | ------------------------------------------- |
| -20.0% |  -388 | 100.0% | 1,944 → 1,556 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Caller                                                    | Location                                      |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
| -19.9% |  -387 |        100.0% | 1,940 → 1,553 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -19.9% |  -374 |         97.0% | 1,881 → 1,507 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -22.4% |  -117 | 26.9% → 26.1% |     522 → 405 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  -8.8% |   -40 | 23.5% → 26.8% |     456 → 416 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Caller                                   | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------------------------- | ----------------------------------- |
| -19.9% |  -387 | 100.0% | 1,940 → 1,553 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |      % |       Samples | Caller   | Location                             |
| -----: | ----: | -----: | ------------: | -------- | ------------------------------------ |
| -19.8% |  -382 | 100.0% | 1,932 → 1,550 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Caller     | Location                            |
| -----: | ----: | -----: | ------------: | ---------- | ----------------------------------- |
| -19.8% |  -382 | 100.0% | 1,932 → 1,550 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Caller   | Location                            |
| -----: | ----: | -----: | ------------: | -------- | ----------------------------------- |
| -19.9% |  -379 | 100.0% | 1,903 → 1,524 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Caller      | Location                                               |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------ |
| -19.9% |  -379 | 100.0% | 1,903 → 1,524 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------- | ----------------------------------- |
| -19.8% |  -373 | 100.0% | 1,881 → 1,508 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | --------: | ------------------- | --------------------------------------------------------- |
| -31.9% |  -291 | 100.0% | 912 → 621 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | --------: | ------------------- | --------------------------------------------------------- |
| -31.9% |  -291 | 100.0% | 912 → 621 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| -31.9% |  -291 | 100.0% | 912 → 621 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller        | Location                                                  |
| -----: | ----: | -----: | --------: | ------------- | --------------------------------------------------------- |
| -27.5% |  -232 | 100.0% | 845 → 613 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller                     | Location                                               |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------------ |
| -32.1% |  -126 | 100.0% | 392 → 266 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                               |
| -----: | ----: | -----: | --------: | ------------------- | ------------------------------------------------------ |
| -31.3% |  -123 | 100.0% | 393 → 270 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                               |
| -----: | ----: | -----: | --------: | ------------------- | ------------------------------------------------------ |
| -31.3% |  -123 | 100.0% | 393 → 270 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -31.3% |  -123 | 100.0% | 393 → 270 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |   Samples | Caller                         | Location                                               |
| -----: | ----: | ------------: | --------: | ------------------------------ | ------------------------------------------------------ |
| -32.1% |  -126 | 75.1% → 65.7% | 392 → 266 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -3.5% |    -8 | 44.1% → 54.8% | 230 → 222 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
| -10.5% |  -101 | 100.0% | 961 → 860 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -10.5% |  -101 | 100.0% | 961 → 860 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
| -13.8% |   -96 | 100.0% | 697 → 601 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |              % |   Samples | Caller                 | Location                            |
| -----: | ----: | -------------: | --------: | ---------------------- | ----------------------------------- |
|  -8.3% |   -39 | 99.8% → 100.0% | 471 → 432 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------- |
|  -6.9% |   -28 | 100.0% | 406 → 378 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Caller              | Location                                                               |
| ------: | ----: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| removed |    -8 | 100.0% → 0.0% |   8 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a001198798` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Caller   | Location                                                               |
| -----: | ----: | -----: | --------: | -------- | ---------------------------------------------------------------------- |
|  -3.5% |    -8 | 100.0% | 230 → 222 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`)

| Change | Delta |      % |   Samples | Caller   | Location                                            |
| -----: | ----: | -----: | --------: | -------- | --------------------------------------------------- |
|  -3.5% |    -8 | 100.0% | 230 → 222 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
|  -3.3% |    -8 | 100.0% | 241 → 233 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |      % | Samples | Caller           | Location                                   |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------ |
| -33.3% |    -4 | 100.0% |  12 → 8 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Caller       | Location                                                               |
| -----: | ----: | -----: | ------: | ------------ | ---------------------------------------------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d4f0` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d4f0`)

| Change | Delta |      % | Samples | Caller        | Location                           |
| -----: | ----: | -----: | ------: | ------------- | ---------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Caller                   | Location                                                               |
| -----: | ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| -33.3% |    -4 | 100.0% |  12 → 8 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`)

| Change | Delta |      % | Samples | Caller                | Location            |
| -----: | ----: | -----: | ------: | --------------------- | ------------------- |
| -33.3% |    -4 | 100.0% |  12 → 8 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Caller                                 | Location                        |
| -----: | ----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| -18.8% |    -3 | 100.0% | 16 → 13 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |             % | Samples | Caller      | Location              |
| -----: | ----: | ------------: | ------: | ----------- | --------------------- |
| -35.1% |   -13 | 94.9% → 92.3% | 37 → 24 | `grow(int)` | `java.util.ArrayList` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|  Change | Delta |              % | Samples | Caller                         | Location                                                   |
| ------: | ----: | -------------: | ------: | ------------------------------ | ---------------------------------------------------------- |
|  -12.3% |    -9 | 98.6% → 100.0% | 73 → 64 | `collectClusters(int[])`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 |    1.4% → 0.0% |   1 → 0 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool`                        |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change | Delta |      % |   Samples | Caller     | Location                            |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------- |
|  -3.5% |    -8 | 100.0% | 230 → 222 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller            | Location                                    |
| -----: | ----: | -----: | ------: | ----------------- | ------------------------------------------- |
| -38.5% |    -5 | 100.0% |  13 → 8 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change | Delta |      % | Samples | Caller                                                      | Location                        |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------- | ------------------------------- |
| -28.6% |    -4 | 100.0% | 14 → 10 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`)

| Change | Delta |      % | Samples | Caller                           | Location                                            |
| -----: | ----: | -----: | ------: | -------------------------------- | --------------------------------------------------- |
| -23.1% |    -3 | 100.0% | 13 → 10 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001082400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`)

| Change | Delta |      % | Samples | Caller                                           | Location                           |
| -----: | ----: | -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| -23.1% |    -3 | 100.0% | 13 → 10 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % | Samples | Caller                         | Location                                          |
| -----: | ----: | -----: | ------: | ------------------------------ | ------------------------------------------------- |
| -23.1% |    -3 | 100.0% | 13 → 10 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Caller                     | Location                                          |
| -----: | ----: | -----: | ------: | -------------------------- | ------------------------------------------------- |
| -23.1% |    -3 | 100.0% | 13 → 10 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |    +4 | 0.0% → 66.7% |   0 → 4 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |    +2 | 0.0% → 33.3% |   0 → 2 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |              % | Samples | Callee                 | Location                             |
| ------: | ----: | -------------: | ------: | ---------------------- | ------------------------------------ |
|     new |    +2 |   0.0% → 40.0% |   0 → 2 | `stream(double[])`     | `java.util.Arrays`                   |
| +100.0% |    +1 | 100.0% → 40.0% |   1 → 2 | `toArray(IntFunction)` | `java.util.stream.ReferencePipeline` |
|     new |    +1 |   0.0% → 20.0% |   0 → 1 | `boxed()`              | `java.util.stream.DoublePipeline`    |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Callee                                          | Location                     |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ---------------------------- |
| +200.0% |    +4 | 25.0% → 50.0% |   2 → 6 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`          |
|  +50.0% |    +1 |         25.0% |   2 → 3 | `iterator()`                                    | `java.util.HashMap$EntrySet` |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `hash(Object)`                                  | `java.util.HashMap`          |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Callee                        | Location                  |
| -----: | ----: | -----------: | ------: | ----------------------------- | ------------------------- |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `afterNodeInsertion(boolean)` | `java.util.LinkedHashMap` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `resize()`                    | `java.util.HashMap`       |

##### `<init>(Map)` (`java.util.HashMap`)

| Change | Delta |              % | Samples | Callee                        | Location            |
| -----: | ----: | -------------: | ------: | ----------------------------- | ------------------- |
| +50.0% |    +4 | 80.0% → 100.0% |  8 → 12 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `stream(double[], int, int)` (`java.util.Arrays`)

| Change | Delta |            % | Samples | Callee                                        | Location                         |
| -----: | ----: | -----------: | ------: | --------------------------------------------- | -------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `spliterator(double[], int, int)`             | `java.util.Arrays`               |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `doubleStream(Spliterator$OfDouble, boolean)` | `java.util.stream.StreamSupport` |

##### `stream(double[])` (`java.util.Arrays`)

| Change | Delta |             % | Samples | Callee                       | Location           |
| -----: | ----: | ------------: | ------: | ---------------------------- | ------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `stream(double[], int, int)` | `java.util.Arrays` |

##### `transferTo(OutputStream)` (`java.io.InputStream`)

| Change | Delta |            % | Samples | Callee                    | Location                         |
| -----: | ----: | -----------: | ------: | ------------------------- | -------------------------------- |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `write(byte[], int, int)` | `sun.nio.ch.ChannelOutputStream` |

##### `copy(InputStream, Path, CopyOption[])` (`java.nio.file.Files`)

| Change | Delta |      % | Samples | Callee                     | Location              |
| -----: | ----: | -----: | ------: | -------------------------- | --------------------- |
| +25.0% |    +1 | 100.0% |   4 → 5 | `transferTo(OutputStream)` | `java.io.InputStream` |

##### `extractResource(String, Path)` (`org.renaissance.core.ResourceUtils`)

| Change | Delta |      % | Samples | Callee                                  | Location              |
| -----: | ----: | -----: | ------: | --------------------------------------- | --------------------- |
| +25.0% |    +1 | 100.0% |   4 → 5 | `copy(InputStream, Path, CopyOption[])` | `java.nio.file.Files` |

##### `extractResources(Iterable, Path)` (`org.renaissance.core.ResourceUtils`)

| Change | Delta |      % | Samples | Callee                          | Location                             |
| -----: | ----: | -----: | ------: | ------------------------------- | ------------------------------------ |
| +25.0% |    +1 | 100.0% |   4 → 5 | `extractResource(String, Path)` | `org.renaissance.core.ResourceUtils` |

##### `createClassLoaderForModule(String)` (`org.renaissance.core.ModuleLoader`)

| Change | Delta |      % | Samples | Callee                             | Location                             |
| -----: | ----: | -----: | ------: | ---------------------------------- | ------------------------------------ |
| +25.0% |    +1 | 100.0% |   4 → 5 | `extractResources(Iterable, Path)` | `org.renaissance.core.ResourceUtils` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`)

| Change | Delta |      % | Samples | Callee                       | Location                                    |
| -----: | ----: | -----: | ------: | ---------------------------- | ------------------------------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `<init>(HashMap)` (`java.util.HashMap$EntryIterator`)

| Change | Delta |      % | Samples | Callee            | Location                         |
| -----: | ----: | -----: | ------: | ----------------- | -------------------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `<init>(HashMap)` | `java.util.HashMap$HashIterator` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

| Change | Delta |      % | Samples | Callee            | Location                          |
| -----: | ----: | -----: | ------: | ----------------- | --------------------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `<init>(HashMap)` | `java.util.HashMap$EntryIterator` |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |      % | Samples | Callee                    | Location                                                  |
| ------: | ----: | -----: | ------: | ------------------------- | --------------------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `add(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |      % | Samples | Callee                               | Location                                                  |
| ------: | ----: | -----: | ------: | ------------------------------------ | --------------------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `updateOption(OptionDef, Read)` (`scopt.OptionParser`)

| Change | Delta |             % | Samples | Callee                  | Location                       |
| -----: | ----: | ------------: | ------: | ----------------------- | ------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `indexWhere(Function1)` | `scala.collection.AbstractSeq` |

##### `write(FileDescriptor, long, int)` (`sun.nio.ch.UnixFileDispatcherImpl`)

| Change | Delta |             % | Samples | Callee                              | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `write0(FileDescriptor, long, int)` | `sun.nio.ch.UnixFileDispatcherImpl` |

##### `writeFromNativeBuffer(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` (`sun.nio.ch.IOUtil`)

| Change | Delta |             % | Samples | Callee                             | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `write(FileDescriptor, long, int)` | `sun.nio.ch.UnixFileDispatcherImpl` |

##### `write(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` (`sun.nio.ch.IOUtil`)

| Change | Delta |             % | Samples | Callee                                                                                             | Location            |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `writeFromNativeBuffer(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` | `sun.nio.ch.IOUtil` |

##### `write(FileDescriptor, ByteBuffer, long, boolean, int, NativeDispatcher)` (`sun.nio.ch.IOUtil`)

| Change | Delta |             % | Samples | Callee                                                                             | Location            |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `write(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` | `sun.nio.ch.IOUtil` |

##### `write(ByteBuffer)` (`sun.nio.ch.FileChannelImpl`)

| Change | Delta |             % | Samples | Callee                                                                    | Location            |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `write(FileDescriptor, ByteBuffer, long, boolean, int, NativeDispatcher)` | `sun.nio.ch.IOUtil` |

##### `writeFully(ByteBuffer)` (`sun.nio.ch.ChannelOutputStream`)

| Change | Delta |             % | Samples | Callee              | Location                     |
| -----: | ----: | ------------: | ------: | ------------------- | ---------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `write(ByteBuffer)` | `sun.nio.ch.FileChannelImpl` |

##### `write(byte[], int, int)` (`sun.nio.ch.ChannelOutputStream`)

| Change | Delta |             % | Samples | Callee                   | Location                         |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `writeFully(ByteBuffer)` | `sun.nio.ch.ChannelOutputStream` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |              % |       Samples | Callee                                               | Location                                      |
| -----: | ----: | -------------: | ------------: | ---------------------------------------------------- | --------------------------------------------- |
| -19.9% |  -387 | 99.9% → 100.0% | 1,940 → 1,553 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |     % |       Samples | Callee                                   | Location                            |
| -----: | ----: | ----: | ------------: | ---------------------------------------- | ----------------------------------- |
| -20.0% |  -388 | 99.8% | 1,941 → 1,553 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change | Delta |      % |       Samples | Callee                              | Location                            |
| -----: | ----: | -----: | ------------: | ----------------------------------- | ----------------------------------- |
| -20.0% |  -388 | 100.0% | 1,944 → 1,556 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Callee      | Location                                            |
| -----: | ----: | ------------: | ------------: | ----------- | --------------------------------------------------- |
| -19.8% |  -382 | 99.6% → 99.8% | 1,932 → 1,550 | `exec()`    | `java.util.concurrent.RecursiveTask`                |
|  -3.5% |    -8 | 11.9% → 14.3% |     230 → 222 | `exec()`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|    new |    +1 |   0.0% → 0.1% |         0 → 1 | `setDone()` | `java.util.concurrent.ForkJoinTask`                 |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Callee     | Location                            |
| -----: | ----: | -----: | ------------: | ---------- | ----------------------------------- |
| -19.9% |  -387 | 100.0% | 1,940 → 1,553 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % |       Samples | Callee                           | Location                                                   |
| -----: | ----: | ------------: | ------------: | -------------------------------- | ---------------------------------------------------------- |
| -19.9% |  -379 | 98.5% → 98.3% | 1,903 → 1,524 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| -31.9% |  -291 | 47.2% → 40.1% |     912 → 621 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -31.3% |  -123 | 20.3% → 17.4% |     393 → 270 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -10.5% |  -101 | 49.7% → 55.5% |     961 → 860 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -13.0% |    -3 |   1.2% → 1.3% |       23 → 20 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Callee      | Location                                               |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------ |
| -19.8% |  -382 | 100.0% | 1,932 → 1,550 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Callee                                                    | Location                                      |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
| -19.8% |  -373 | 98.8% → 99.0% | 1,881 → 1,508 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -8.3% |   -39 | 24.8% → 28.3% |     471 → 432 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|    new |    +1 |   0.0% → 0.1% |         0 → 1 | `uncompensate()`                                          | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Callee                 | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------- | ----------------------------------- |
| -19.9% |  -379 | 100.0% | 1,903 → 1,524 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |              % |       Samples | Callee     | Location                            |
| -----: | ----: | -------------: | ------------: | ---------- | ----------------------------------- |
| -19.9% |  -374 | 100.0% → 99.9% | 1,881 → 1,507 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % |   Samples | Callee                           | Location                                                  |
| ------: | ----: | ------------: | --------: | -------------------------------- | --------------------------------------------------------- |
|  -27.5% |  -232 | 92.7% → 98.7% | 845 → 613 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `get(int)`                       | `java.util.ArrayList`                                     |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Callee              | Location                                                  |
| -----: | ----: | -----: | --------: | ------------------- | --------------------------------------------------------- |
| -31.9% |  -291 | 100.0% | 912 → 621 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| -31.9% |  -291 | 100.0% | 912 → 621 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Callee     | Location                            |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------- |
| -32.1% |  -126 | 100.0% | 392 → 266 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % |   Samples | Callee            | Location                                               |
| ------: | ----: | ------------: | --------: | ----------------- | ------------------------------------------------------ |
|  -32.1% |  -126 | 99.7% → 98.5% | 392 → 266 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +400.0% |    +4 |   0.3% → 1.9% |     1 → 5 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Callee                     | Location                                               |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------------ |
| -31.3% |  -123 | 100.0% | 393 → 270 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -31.3% |  -123 | 100.0% | 393 → 270 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |   Samples | Callee     | Location                            |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------- |
| -22.4% |  -117 | 100.0% | 522 → 405 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Callee                   | Location                                                   |
| -----: | ----: | ------------: | --------: | ------------------------ | ---------------------------------------------------------- |
| -10.5% |  -101 |        100.0% | 961 → 860 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -13.8% |   -96 | 72.5% → 69.9% | 697 → 601 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -3.3% |    -8 | 25.1% → 27.1% | 241 → 233 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Callee                         | Location                                                   |
| -----: | ----: | ------------: | --------: | ------------------------------ | ---------------------------------------------------------- |
|  -6.9% |   -28 | 58.2% → 62.9% | 406 → 378 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |   Samples | Callee                         | Location                            |
| -----: | ----: | ------------: | --------: | ------------------------------ | ----------------------------------- |
|  -8.8% |   -40 | 96.6% → 96.3% | 456 → 416 | `doExec()`                     | `java.util.concurrent.ForkJoinTask` |
| -33.3% |    -1 |   0.6% → 0.5% |     3 → 2 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed |    -6 | 75.0% → 0.0% |   6 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed |    -2 | 25.0% → 0.0% |   2 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Callee     | Location                            |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------- |
|  -3.5% |    -8 | 100.0% | 230 → 222 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`)

| Change | Delta |      % |   Samples | Callee                         | Location                                    |
| -----: | ----: | -----: | --------: | ------------------------------ | ------------------------------------------- |
|  -3.5% |    -8 | 100.0% | 230 → 222 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Callee                              | Location            |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ------------------- |
| -12.3% |    -9 | 30.3% → 27.5% | 73 → 64 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Callee                                                                        | Location                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
|  -22.2% |    -2 | 75.0% → 87.5% |   9 → 7 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `<clinit>()`                                                                  | `scala.Predef$`                             |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `apply(Seq)`                                                                  | `scala.collection.immutable.Map$`           |

##### `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |              % | Samples | Callee                                         | Location                                            |
| ------: | ----: | -------------: | ------: | ---------------------------------------------- | --------------------------------------------------- |
| removed |    -3 |   60.0% → 0.0% |   3 → 0 | `toArray(IntFunction)`                         | `java.util.stream.ReferencePipeline`                |
|  -50.0% |    -1 | 40.0% → 100.0% |   2 → 1 | `linkToTargetMethod(int, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001220800` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121d4f0`)

| Change | Delta |      % | Samples | Callee                                           | Location                                    |
| -----: | ----: | -----: | ------: | ------------------------------------------------ | ------------------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |              % | Samples | Callee                              | Location            |
| -----: | ----: | -------------: | ------: | ----------------------------------- | ------------------- |
| -20.0% |    -2 | 83.3% → 100.0% |  10 → 8 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`)

| Change | Delta |      % | Samples | Callee                              | Location                                    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| -33.3% |    -4 | 100.0% |  12 → 8 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |             % | Samples | Callee                               | Location                            |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ----------------------------------- |
| -28.6% |    -4 | 87.5% → 76.9% | 14 → 10 | `invoke(Object, Object[])`           | `java.lang.reflect.Method`          |
| +50.0% |    +1 | 12.5% → 23.1% |   2 → 3 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |           % | Samples | Callee          | Location                                                                              |
| -----: | ----: | ----------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| -25.0% |    -1 | 5.4% → 4.7% |   4 → 3 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change | Delta |      % |   Samples | Callee   | Location                                                               |
| -----: | ----: | -----: | --------: | -------- | ---------------------------------------------------------------------- |
|  -3.5% |    -8 | 100.0% | 230 → 222 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change | Delta |              % | Samples | Callee                   | Location                                                               |
| -----: | ----: | -------------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| -33.3% |    -4 | 92.3% → 100.0% |  12 → 8 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|  Change | Delta |              % | Samples | Callee                     | Location                                          |
| ------: | ----: | -------------: | ------: | -------------------------- | ------------------------------------------------- |
|  -23.1% |    -3 | 92.9% → 100.0% | 13 → 10 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
| removed |    -1 |    7.1% → 0.0% |   1 → 0 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`)

| Change | Delta |      % | Samples | Callee           | Location                                   |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------ |
| -23.1% |    -3 | 100.0% | 13 → 10 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`)

| Change | Delta |      % | Samples | Callee                         | Location                                             |
| -----: | ----: | -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| -23.1% |    -3 | 100.0% | 13 → 10 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % | Samples | Callee                           | Location                                            |
| -----: | ----: | -----: | ------: | -------------------------------- | --------------------------------------------------- |
| -23.1% |    -3 | 100.0% | 13 → 10 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001082400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Callee                                           | Location                           |
| -----: | ----: | -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| -23.1% |    -3 | 100.0% | 13 → 10 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------: | ----: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +137.5% |   +11 | 0.4% → 1.2% |  8 → 19 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| +142.9% |   +10 | 0.4% → 1.1% |  7 → 17 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  +30.0% |    +9 | 1.5% → 2.5% | 30 → 39 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +75.0% |    +9 | 0.6% → 1.3% | 12 → 21 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  +15.2% |    +5 | 1.7% → 2.4% | 33 → 38 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                           |
|  +45.5% |    +5 | 0.6% → 1.0% | 11 → 16 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  +62.5% |    +5 | 0.4% → 0.8% |  8 → 13 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| +400.0% |    +4 | 0.1% → 0.3% |   1 → 5 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
| +100.0% |    +3 | 0.2% → 0.4% |   3 → 6 | `computeIfAbsent(Object, Function)` (`java.util.HashMap`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `computeIfAbsent(Object, Function)` (`java.util.HashMap`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                      |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  +13.3% |    +2 | 0.8% → 1.1% | 15 → 17 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +25.0% |    +2 | 0.4% → 0.6% |  8 → 10 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

Common call stack: `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -38.6% |   -34 | 4.5% → 3.4% | 88 → 54 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -33.0% |   -32 | 4.9% → 4.1% | 97 → 65 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -43.9% |   -25 | 2.9% → 2.0% | 57 → 32 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -34.3% |   -23 | 3.4% → 2.8% | 67 → 44 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -60.6% |   -20 | 1.7% → 0.8% | 33 → 13 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -46.5% |   -20 | 2.2% → 1.5% | 43 → 23 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -52.6% |   -20 | 1.9% → 1.1% | 38 → 18 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -64.0% |   -16 | 1.3% → 0.6% |  25 → 9 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -38.5% |   -15 | 2.0% → 1.5% | 39 → 24 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -46.9% |   -15 | 1.6% → 1.1% | 32 → 17 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) |
|  -46.7% |   -14 | 1.5% → 1.0% | 30 → 16 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -22.0% |   -13 | 3.0% → 2.9% | 59 → 46 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  -52.0% |   -13 | 1.3% → 0.8% | 25 → 12 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  -45.5% |   -10 | 1.1% → 0.8% | 22 → 12 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  -16.7% |   -10 | 3.1% → 3.2% | 60 → 50 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -22.2% |    -8 |        1.8% | 36 → 28 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed |    -8 | 0.4% → 0.0% |   8 → 0 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  -33.3% |    -8 | 1.2% → 1.0% | 24 → 16 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                  |
|  -70.0% |    -7 | 0.5% → 0.2% |  10 → 3 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -70.0% |    -7 | 0.5% → 0.2% |  10 → 3 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

# Allocated heap profile diff

Allocated 38 GiB → 37.3 GiB (-690.775 MiB, -1.8%) over 4,052 → 2,371 samples (9.6 MiB → 16.1 MiB per sample).

| Category         | Change |        Delta |             % |                Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| Standard library |  -2.1% | -763.721 MiB | 93.8% → 93.5% | 35.7 GiB → 34.9 GiB | 3,782 → 2,224 |
| Ours             |  +3.0% |  +72.946 MiB |   6.2% → 6.5% | 2.34 GiB → 2.41 GiB |     268 → 146 |
| Unknown          | -19.4% |       -424 B |         <0.1% | 2.13 KiB → 1.72 KiB |         2 → 1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|   Change |        Delta |            % |                Size | Samples | Function                                          | Location                                                   |
| -------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------------------- | ---------------------------------------------------------- |
|  +523.1% | +226.717 MiB |  0.1% → 0.7% |  43.3 MiB → 270 MiB | 12 → 15 | `createSubtask(int, int)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +1077.5% |  +57.343 MiB | <0.1% → 0.2% | 5.32 MiB → 62.7 MiB |   5 → 3 | `vectorSum()`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +452.5% |  +55.903 MiB | <0.1% → 0.2% | 12.4 MiB → 68.3 MiB |   8 → 4 | `resize()`                                        | `java.util.HashMap`                                        |
|   +66.0% |   +37.06 MiB |  0.1% → 0.2% | 56.2 MiB → 93.3 MiB |  11 → 5 | `add(double[], double[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|      new |  +20.849 MiB |  0.0% → 0.1% |      0 B → 20.8 MiB |   0 → 1 | `initTable()`                                     | `java.util.concurrent.ConcurrentHashMap`                   |
|   +11.4% |  +20.468 MiB |         0.5% |   180 MiB → 200 MiB |  14 → 9 | `lambda$collectClusters$0(Double[])`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +737.6% |    +4.96 MiB |        <0.1% |  689 KiB → 5.63 MiB |  3 → 10 | `opWrapSink(int, Sink)`                           | `java.util.stream.IntPipeline$1`                           |
|  +131.3% |   +3.567 MiB |        <0.1% | 2.72 MiB → 6.28 MiB |  5 → 11 | `range(int, int)`                                 | `java.util.stream.IntStream`                               |
|  +251.2% |   +3.027 MiB |        <0.1% |  1.2 MiB → 4.23 MiB |  3 → 10 | `<init>(InputStream, Inflater, int)`              | `java.util.zip.InflaterInputStream`                        |
|   +49.3% |    +2.38 MiB |        <0.1% | 4.83 MiB → 7.21 MiB | 13 → 12 | `intStream(Spliterator$OfInt, boolean)`           | `java.util.stream.StreamSupport`                           |
|   +12.5% |   +1.915 MiB |        <0.1% | 15.4 MiB → 17.3 MiB | 31 → 45 | `copyOf(byte[], int)`                             | `java.util.Arrays`                                         |
|      new |   +1.365 MiB | 0.0% → <0.1% |      0 B → 1.37 MiB |   0 → 2 | `enlarge(int)`                                    | `jdk.internal.org.objectweb.asm.ByteVector`                |
|   +49.0% |   +1.286 MiB |        <0.1% | 2.63 MiB → 3.91 MiB |   7 → 6 | `lambda$generateData$4(int)`                      | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  +102.8% |   +1.148 MiB |        <0.1% | 1.12 MiB → 2.26 MiB |   3 → 1 | `iterator()`                                      | `java.util.HashMap$EntrySet`                               |
|      new | +773.617 KiB | 0.0% → <0.1% |       0 B → 774 KiB |   0 → 2 | `transferTo(OutputStream)`                        | `java.io.InputStream`                                      |
|  +343.5% | +761.593 KiB |        <0.1% |   222 KiB → 983 KiB |   1 → 3 | `allocateInstance(Class)`                         | `jdk.internal.misc.Unsafe`                                 |
|      new | +402.687 KiB | 0.0% → <0.1% |       0 B → 403 KiB |   0 → 1 | `getClassLoadingLock(String)`                     | `java.lang.ClassLoader`                                    |
|      new |  +390.89 KiB | 0.0% → <0.1% |       0 B → 391 KiB |   0 → 1 | `resolveInvokerMember(Class, String, MethodType)` | `java.lang.invoke.InvokerBytecodeGenerator`                |
|      new |  +387.71 KiB | 0.0% → <0.1% |       0 B → 388 KiB |   0 → 1 | `newLinkedHashMap(int)`                           | `java.util.LinkedHashMap`                                  |
|      new | +387.703 KiB | 0.0% → <0.1% |       0 B → 388 KiB |   0 → 1 | `addConstantUtf8(String)`                         | `jdk.internal.org.objectweb.asm.SymbolTable`               |

##### Standard library

|  Change |        Delta |            % |                Size | Samples | Function                                          | Location                                     |
| ------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------------------- | -------------------------------------------- |
| +452.5% |  +55.903 MiB | <0.1% → 0.2% | 12.4 MiB → 68.3 MiB |   8 → 4 | `resize()`                                        | `java.util.HashMap`                          |
|     new |  +20.849 MiB |  0.0% → 0.1% |      0 B → 20.8 MiB |   0 → 1 | `initTable()`                                     | `java.util.concurrent.ConcurrentHashMap`     |
| +737.6% |    +4.96 MiB |        <0.1% |  689 KiB → 5.63 MiB |  3 → 10 | `opWrapSink(int, Sink)`                           | `java.util.stream.IntPipeline$1`             |
| +131.3% |   +3.567 MiB |        <0.1% | 2.72 MiB → 6.28 MiB |  5 → 11 | `range(int, int)`                                 | `java.util.stream.IntStream`                 |
| +251.2% |   +3.027 MiB |        <0.1% |  1.2 MiB → 4.23 MiB |  3 → 10 | `<init>(InputStream, Inflater, int)`              | `java.util.zip.InflaterInputStream`          |
|  +49.3% |    +2.38 MiB |        <0.1% | 4.83 MiB → 7.21 MiB | 13 → 12 | `intStream(Spliterator$OfInt, boolean)`           | `java.util.stream.StreamSupport`             |
|  +12.5% |   +1.915 MiB |        <0.1% | 15.4 MiB → 17.3 MiB | 31 → 45 | `copyOf(byte[], int)`                             | `java.util.Arrays`                           |
|     new |   +1.365 MiB | 0.0% → <0.1% |      0 B → 1.37 MiB |   0 → 2 | `enlarge(int)`                                    | `jdk.internal.org.objectweb.asm.ByteVector`  |
| +102.8% |   +1.148 MiB |        <0.1% | 1.12 MiB → 2.26 MiB |   3 → 1 | `iterator()`                                      | `java.util.HashMap$EntrySet`                 |
|     new | +773.617 KiB | 0.0% → <0.1% |       0 B → 774 KiB |   0 → 2 | `transferTo(OutputStream)`                        | `java.io.InputStream`                        |
| +343.5% | +761.593 KiB |        <0.1% |   222 KiB → 983 KiB |   1 → 3 | `allocateInstance(Class)`                         | `jdk.internal.misc.Unsafe`                   |
|     new | +402.687 KiB | 0.0% → <0.1% |       0 B → 403 KiB |   0 → 1 | `getClassLoadingLock(String)`                     | `java.lang.ClassLoader`                      |
|     new |  +390.89 KiB | 0.0% → <0.1% |       0 B → 391 KiB |   0 → 1 | `resolveInvokerMember(Class, String, MethodType)` | `java.lang.invoke.InvokerBytecodeGenerator`  |
|     new |  +387.71 KiB | 0.0% → <0.1% |       0 B → 388 KiB |   0 → 1 | `newLinkedHashMap(int)`                           | `java.util.LinkedHashMap`                    |
|     new | +387.703 KiB | 0.0% → <0.1% |       0 B → 388 KiB |   0 → 1 | `addConstantUtf8(String)`                         | `jdk.internal.org.objectweb.asm.SymbolTable` |
|     new | +387.664 KiB | 0.0% → <0.1% |       0 B → 388 KiB |   0 → 1 | `<clinit>()`                                      | `java.time.format.DateTimeFormatterBuilder`  |
|  +39.5% | +254.851 KiB |        <0.1% |   645 KiB → 900 KiB |   1 → 2 | `readNBytes(int)`                                 | `java.io.InputStream`                        |
|   +8.9% | +248.101 KiB |        <0.1% | 2.73 MiB → 2.97 MiB |   3 → 5 | `allocateInstance(Object)`                        | `java.lang.invoke.DirectMethodHandle`        |
|  +38.4% | +149.101 KiB |        <0.1% |   389 KiB → 538 KiB |       1 | `<init>(int)`                                     | `java.lang.AbstractStringBuilder`            |
|   +4.6% |  +17.585 KiB |        <0.1% |   386 KiB → 403 KiB |       1 | `<init>(InputStream, int)`                        | `java.util.jar.Manifest$FastInputStream`     |

##### Ours

|   Change |        Delta |            % |                Size | Samples | Function                             | Location                                                   |
| -------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|  +523.1% | +226.717 MiB |  0.1% → 0.7% |  43.3 MiB → 270 MiB | 12 → 15 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +1077.5% |  +57.343 MiB | <0.1% → 0.2% | 5.32 MiB → 62.7 MiB |   5 → 3 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +66.0% |   +37.06 MiB |  0.1% → 0.2% | 56.2 MiB → 93.3 MiB |  11 → 5 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +11.4% |  +20.468 MiB |         0.5% |   180 MiB → 200 MiB |  14 → 9 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +49.0% |   +1.286 MiB |        <0.1% | 2.63 MiB → 3.91 MiB |   7 → 6 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |

#### Improvements

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |       Samples | Function                                              | Location                                                   |
| ------: | -----------: | ------------: | ------------------: | ------------: | ----------------------------------------------------- | ---------------------------------------------------------- |
|   -1.3% | -446.929 MiB | 91.6% → 92.1% | 34.8 GiB → 34.4 GiB | 3,551 → 2,024 | `copyOf(Object[], int)`                               | `java.util.Arrays`                                         |
|   -9.7% | -126.309 MiB |   3.3% → 3.1% | 1.27 GiB → 1.14 GiB |      140 → 77 | `findNearestCentroid()`                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -86.5% | -124.227 MiB |   0.4% → 0.1% |  144 MiB → 19.4 MiB |       18 → 33 | `valueOf(double)`                                     | `java.lang.Double`                                         |
|  -29.1% | -105.857 MiB |   0.9% → 0.7% |   363 MiB → 257 MiB |       29 → 11 | `grow(int)`                                           | `java.util.ArrayList`                                      |
|  -99.4% |  -72.245 MiB |  0.2% → <0.1% |  72.7 MiB → 475 KiB |             1 | `entrySet()`                                          | `java.util.HashMap`                                        |
|  -33.5% |  -60.971 MiB |   0.5% → 0.3% |   182 MiB → 121 MiB |       24 → 14 | `newNode(int, Object, Object, HashMap$Node)`          | `java.util.HashMap`                                        |
|  -10.7% |  -57.634 MiB |   1.4% → 1.3% |   538 MiB → 481 MiB |       44 → 14 | `createSubtask(int, int)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -59.1% |  -38.296 MiB |   0.2% → 0.1% | 64.9 MiB → 26.6 MiB |        11 → 6 | `lambda$merge$6(List, List)`                          | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -46.8% |  -26.713 MiB |          0.1% | 57.1 MiB → 30.4 MiB |         9 → 4 | `collectClusters(int[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -97.8% |  -20.432 MiB |  0.1% → <0.1% |  20.9 MiB → 468 KiB |             1 | `initCEN(int, ZipCoder)`                              | `java.util.zip.ZipFile$Source`                             |
|  -54.1% |  -11.566 MiB |  0.1% → <0.1% | 21.4 MiB → 9.81 MiB |       46 → 14 | `mapToObj(IntFunction, int)`                          | `java.util.stream.IntPipeline`                             |
| removed |  -10.966 MiB |  <0.1% → 0.0% |        11 MiB → 0 B |         1 → 0 | `lambda$run$0(int, List, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -82.0% |   -5.161 MiB |         <0.1% | 6.29 MiB → 1.13 MiB |         2 → 3 | `copyOfRangeByte(byte[], int, int)`                   | `java.util.Arrays`                                         |
|  -93.1% |   -5.057 MiB |         <0.1% |  5.43 MiB → 384 KiB |         8 → 1 | `copyOf(Object[], int, Class)`                        | `java.util.Arrays`                                         |
| removed |   -4.998 MiB |  <0.1% → 0.0% |         5 MiB → 0 B |         1 → 0 | `boxed(double[])`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   -3.5% |   -4.836 MiB |   0.4% → 0.3% |   137 MiB → 132 MiB |        11 → 7 | `merge(Map, Map)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -50.1% |   -2.454 MiB |         <0.1% |  4.9 MiB → 2.44 MiB |         7 → 4 | `builder(long, IntFunction)`                          | `java.util.stream.Nodes`                                   |
|  -78.1% |   -1.371 MiB |         <0.1% |  1.76 MiB → 395 KiB |         2 → 1 | `fillInStackTrace(int)`                               | `java.lang.Throwable`                                      |
|  -70.6% | -971.679 KiB |         <0.1% |  1.34 MiB → 404 KiB |             1 | `read(Manifest$FastInputStream, byte[], String, int)` | `java.util.jar.Attributes`                                 |
| removed | -740.789 KiB |  <0.1% → 0.0% |       741 KiB → 0 B |         1 → 0 | `mapToObj(DoubleFunction, int)`                       | `java.util.stream.DoublePipeline`                          |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                              | Location                                     |
| ------: | -----------: | ------------: | ------------------: | ------------: | ----------------------------------------------------- | -------------------------------------------- |
|   -1.3% | -446.929 MiB | 91.6% → 92.1% | 34.8 GiB → 34.4 GiB | 3,551 → 2,024 | `copyOf(Object[], int)`                               | `java.util.Arrays`                           |
|  -86.5% | -124.227 MiB |   0.4% → 0.1% |  144 MiB → 19.4 MiB |       18 → 33 | `valueOf(double)`                                     | `java.lang.Double`                           |
|  -29.1% | -105.857 MiB |   0.9% → 0.7% |   363 MiB → 257 MiB |       29 → 11 | `grow(int)`                                           | `java.util.ArrayList`                        |
|  -99.4% |  -72.245 MiB |  0.2% → <0.1% |  72.7 MiB → 475 KiB |             1 | `entrySet()`                                          | `java.util.HashMap`                          |
|  -33.5% |  -60.971 MiB |   0.5% → 0.3% |   182 MiB → 121 MiB |       24 → 14 | `newNode(int, Object, Object, HashMap$Node)`          | `java.util.HashMap`                          |
|  -97.8% |  -20.432 MiB |  0.1% → <0.1% |  20.9 MiB → 468 KiB |             1 | `initCEN(int, ZipCoder)`                              | `java.util.zip.ZipFile$Source`               |
|  -54.1% |  -11.566 MiB |  0.1% → <0.1% | 21.4 MiB → 9.81 MiB |       46 → 14 | `mapToObj(IntFunction, int)`                          | `java.util.stream.IntPipeline`               |
|  -82.0% |   -5.161 MiB |         <0.1% | 6.29 MiB → 1.13 MiB |         2 → 3 | `copyOfRangeByte(byte[], int, int)`                   | `java.util.Arrays`                           |
|  -93.1% |   -5.057 MiB |         <0.1% |  5.43 MiB → 384 KiB |         8 → 1 | `copyOf(Object[], int, Class)`                        | `java.util.Arrays`                           |
|  -50.1% |   -2.454 MiB |         <0.1% |  4.9 MiB → 2.44 MiB |         7 → 4 | `builder(long, IntFunction)`                          | `java.util.stream.Nodes`                     |
|  -78.1% |   -1.371 MiB |         <0.1% |  1.76 MiB → 395 KiB |         2 → 1 | `fillInStackTrace(int)`                               | `java.lang.Throwable`                        |
|  -70.6% | -971.679 KiB |         <0.1% |  1.34 MiB → 404 KiB |             1 | `read(Manifest$FastInputStream, byte[], String, int)` | `java.util.jar.Attributes`                   |
| removed | -740.789 KiB |  <0.1% → 0.0% |       741 KiB → 0 B |         1 → 0 | `mapToObj(DoubleFunction, int)`                       | `java.util.stream.DoublePipeline`            |
| removed | -490.546 KiB |  <0.1% → 0.0% |       491 KiB → 0 B |         1 → 0 | `unparseMethod(Class, Class[])`                       | `sun.invoke.util.BytecodeDescriptor`         |
| removed |  -402.25 KiB |  <0.1% → 0.0% |       402 KiB → 0 B |         1 → 0 | `clone()`                                             | `java.lang.Object`                           |
| removed | -401.281 KiB |  <0.1% → 0.0% |       401 KiB → 0 B |         1 → 0 | `entryKey(Object)`                                    | `jdk.internal.util.ReferencedKeyMap`         |
| removed | -394.929 KiB |  <0.1% → 0.0% |       395 KiB → 0 B |         1 → 0 | `toString()`                                          | `java.lang.StringBuilder`                    |
| removed | -394.484 KiB |  <0.1% → 0.0% |       394 KiB → 0 B |         1 → 0 | `getInputStream(ZipEntry)`                            | `java.util.zip.ZipFile`                      |
| removed | -389.289 KiB |  <0.1% → 0.0% |       389 KiB → 0 B |         1 → 0 | `addConstantUtf8Reference(int, String)`               | `jdk.internal.org.objectweb.asm.SymbolTable` |
| removed | -389.273 KiB |  <0.1% → 0.0% |       389 KiB → 0 B |         1 → 0 | `copyOfRange(byte[], int, int)`                       | `java.util.Arrays`                           |

##### Ours

|  Change |        Delta |            % |                Size |  Samples | Function                       | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | -------: | ------------------------------ | ---------------------------------------------------------- |
|   -9.7% | -126.309 MiB |  3.3% → 3.1% | 1.27 GiB → 1.14 GiB | 140 → 77 | `findNearestCentroid()`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -10.7% |  -57.634 MiB |  1.4% → 1.3% |   538 MiB → 481 MiB |  44 → 14 | `createSubtask(int, int)`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -59.1% |  -38.296 MiB |  0.2% → 0.1% | 64.9 MiB → 26.6 MiB |   11 → 6 | `lambda$merge$6(List, List)`   | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -46.8% |  -26.713 MiB |         0.1% | 57.1 MiB → 30.4 MiB |    9 → 4 | `collectClusters(int[])`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |  -10.966 MiB | <0.1% → 0.0% |        11 MiB → 0 B |    1 → 0 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |   -4.998 MiB | <0.1% → 0.0% |         5 MiB → 0 B |    1 → 0 | `boxed(double[])`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   -3.5% |   -4.836 MiB |  0.4% → 0.3% |   137 MiB → 132 MiB |   11 → 7 | `merge(Map, Map)`              | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed | -179.132 KiB | <0.1% → 0.0% |       179 KiB → 0 B |    2 → 0 | `collectGarbage(String)`       | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |        Delta |      % |               Size | Samples | Location                                                      |
| ------: | -----------: | -----: | -----------------: | ------: | ------------------------------------------------------------- |
| +523.1% | +226.717 MiB | 100.0% | 43.3 MiB → 270 MiB | 12 → 15 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|   Change |       Delta |      % |                Size | Samples | Location                                                      |
| -------: | ----------: | -----: | ------------------: | ------: | ------------------------------------------------------------- |
| +1077.5% | +57.343 MiB | 100.0% | 5.32 MiB → 62.7 MiB |   5 → 3 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `resize()` (`java.util.HashMap`)

|  Change |       Delta |      % |                Size | Samples | Location                |
| ------: | ----------: | -----: | ------------------: | ------: | ----------------------- |
| +452.5% | +55.903 MiB | 100.0% | 12.4 MiB → 68.3 MiB |   8 → 4 | `java.util.HashMap:710` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |      Delta |      % |                Size | Samples | Location                                                      |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------------------------------- |
| +66.0% | +37.06 MiB | 100.0% | 56.2 MiB → 93.3 MiB |  11 → 5 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

| Change |       Delta |             % |           Size | Samples | Location                                      |
| -----: | ----------: | ------------: | -------------: | ------: | --------------------------------------------- |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `java.util.concurrent.ConcurrentHashMap:2301` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size | Samples | Location                                                       |
| -----: | ----------: | -----: | ----------------: | ------: | -------------------------------------------------------------- |
| +11.4% | +20.468 MiB | 100.0% | 180 MiB → 200 MiB |  14 → 9 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|  Change |     Delta |      % |               Size | Samples | Location                             |
| ------: | --------: | -----: | -----------------: | ------: | ------------------------------------ |
| +737.6% | +4.96 MiB | 100.0% | 689 KiB → 5.63 MiB |  3 → 10 | `java.util.stream.IntPipeline$1:177` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|  Change |      Delta |      % |                Size | Samples | Location                          |
| ------: | ---------: | -----: | ------------------: | ------: | --------------------------------- |
| +131.3% | +3.567 MiB | 100.0% | 2.72 MiB → 6.28 MiB |  5 → 11 | `java.util.stream.IntStream:1083` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

|  Change |      Delta |      % |               Size | Samples | Location                               |
| ------: | ---------: | -----: | -----------------: | ------: | -------------------------------------- |
| +251.2% | +3.027 MiB | 100.0% | 1.2 MiB → 4.23 MiB |  3 → 10 | `java.util.zip.InflaterInputStream:89` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

| Change |     Delta |      % |                Size | Samples | Location                             |
| -----: | --------: | -----: | ------------------: | ------: | ------------------------------------ |
| +49.3% | +2.38 MiB | 100.0% | 4.83 MiB → 7.21 MiB | 13 → 12 | `java.util.stream.StreamSupport:138` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Samples | Location                |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- |
| +12.5% | +1.915 MiB | 100.0% | 15.4 MiB → 17.3 MiB | 31 → 45 | `java.util.Arrays:3541` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |      Delta |             % |           Size | Samples | Location                                        |
| -----: | ---------: | ------------: | -------------: | ------: | ----------------------------------------------- |
|    new | +1.365 MiB | 0.0% → 100.0% | 0 B → 1.37 MiB |   0 → 2 | `jdk.internal.org.objectweb.asm.ByteVector:401` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |                Size | Samples | Location                                       |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------------------------------- |
| +49.0% | +1.286 MiB | 100.0% | 2.63 MiB → 3.91 MiB |   7 → 6 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

|  Change |      Delta |      % |                Size | Samples | Location                          |
| ------: | ---------: | -----: | ------------------: | ------: | --------------------------------- |
| +102.8% | +1.148 MiB | 100.0% | 1.12 MiB → 2.26 MiB |   3 → 1 | `java.util.HashMap$EntrySet:1106` |

##### `transferTo(OutputStream)` (`java.io.InputStream`)

| Change |        Delta |             % |          Size | Samples | Location                  |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------- |
|    new | +773.617 KiB | 0.0% → 100.0% | 0 B → 774 KiB |   0 → 2 | `java.io.InputStream:794` |

##### `getClassLoadingLock(String)` (`java.lang.ClassLoader`)

| Change |        Delta |             % |          Size | Samples | Location                    |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------- |
|    new | +402.687 KiB | 0.0% → 100.0% | 0 B → 403 KiB |   0 → 1 | `java.lang.ClassLoader:680` |

##### `resolveInvokerMember(Class, String, MethodType)` (`java.lang.invoke.InvokerBytecodeGenerator`)

| Change |       Delta |             % |          Size | Samples | Location                                        |
| -----: | ----------: | ------------: | ------------: | ------: | ----------------------------------------------- |
|    new | +390.89 KiB | 0.0% → 100.0% | 0 B → 391 KiB |   0 → 1 | `java.lang.invoke.InvokerBytecodeGenerator:254` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

| Change |       Delta |             % |          Size | Samples | Location                       |
| -----: | ----------: | ------------: | ------------: | ------: | ------------------------------ |
|    new | +387.71 KiB | 0.0% → 100.0% | 0 B → 388 KiB |   0 → 1 | `java.util.LinkedHashMap:1078` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |        Delta |             % |          Size | Samples | Location                                         |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
|    new | +387.703 KiB | 0.0% → 100.0% | 0 B → 388 KiB |   0 → 1 | `jdk.internal.org.objectweb.asm.SymbolTable:807` |

##### `<clinit>()` (`java.time.format.DateTimeFormatterBuilder`)

| Change |        Delta |             % |          Size | Samples | Location                                        |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- |
|    new | +387.664 KiB | 0.0% → 100.0% | 0 B → 388 KiB |   0 → 1 | `java.time.format.DateTimeFormatterBuilder:166` |

##### `readNBytes(int)` (`java.io.InputStream`)

| Change |        Delta |              % |              Size | Samples | Location                  |
| -----: | -----------: | -------------: | ----------------: | ------: | ------------------------- |
|    new | +458.273 KiB |   0.0% → 50.9% |     0 B → 458 KiB |   0 → 1 | `java.io.InputStream:448` |
| -31.5% | -203.421 KiB | 100.0% → 49.1% | 645 KiB → 442 KiB |       1 | `java.io.InputStream:408` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |        Delta |      % |                Size | Samples | Location                                  |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------- |
|  +8.9% | +248.101 KiB | 100.0% | 2.73 MiB → 2.97 MiB |   3 → 5 | `java.lang.invoke.DirectMethodHandle:501` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

| Change |        Delta |      % |              Size | Samples | Location                              |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------------------------- |
| +38.4% | +149.101 KiB | 100.0% | 389 KiB → 538 KiB |       1 | `java.lang.AbstractStringBuilder:101` |

##### `<init>(InputStream, int)` (`java.util.jar.Manifest$FastInputStream`)

| Change |       Delta |      % |              Size | Samples | Location                                     |
| -----: | ----------: | -----: | ----------------: | ------: | -------------------------------------------- |
|  +4.6% | +17.585 KiB | 100.0% | 386 KiB → 403 KiB |       1 | `java.util.jar.Manifest$FastInputStream:421` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |      % |                Size |       Samples | Location                |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------------- |
|  -1.3% | -446.929 MiB | 100.0% | 34.8 GiB → 34.4 GiB | 3,551 → 2,024 | `java.util.Arrays:3482` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |                Size |  Samples | Location                                                       |
| -----: | -----------: | -----: | ------------------: | -------: | -------------------------------------------------------------- |
|  -9.7% | -126.309 MiB | 100.0% | 1.27 GiB → 1.14 GiB | 140 → 77 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `valueOf(double)` (`java.lang.Double`)

| Change |        Delta |      % |               Size | Samples | Location               |
| -----: | -----------: | -----: | -----------------: | ------: | ---------------------- |
| -86.5% | -124.227 MiB | 100.0% | 144 MiB → 19.4 MiB | 18 → 33 | `java.lang.Double:773` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |        Delta |      % |              Size | Samples | Location                  |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------------- |
| -29.1% | -105.857 MiB | 100.0% | 363 MiB → 257 MiB | 29 → 11 | `java.util.ArrayList:239` |

##### `entrySet()` (`java.util.HashMap`)

| Change |       Delta |      % |               Size | Samples | Location                 |
| -----: | ----------: | -----: | -----------------: | ------: | ------------------------ |
| -99.4% | -72.245 MiB | 100.0% | 72.7 MiB → 475 KiB |       1 | `java.util.HashMap:1099` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |      % |              Size | Samples | Location                 |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------ |
| -33.5% | -60.971 MiB | 100.0% | 182 MiB → 121 MiB | 24 → 14 | `java.util.HashMap:1909` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size | Samples | Location                                                       |
| -----: | ----------: | -----: | ----------------: | ------: | -------------------------------------------------------------- |
| -10.7% | -57.634 MiB | 100.0% | 538 MiB → 481 MiB | 44 → 14 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |                Size | Samples | Location                                        |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------------------------------------- |
| -59.1% | -38.296 MiB | 100.0% | 64.9 MiB → 26.6 MiB |  11 → 6 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size | Samples | Location                                                       |
| -----: | ----------: | -----: | ------------------: | ------: | -------------------------------------------------------------- |
| -46.8% | -26.713 MiB | 100.0% | 57.1 MiB → 30.4 MiB |   9 → 4 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |       Delta |      % |               Size | Samples | Location                            |
| -----: | ----------: | -----: | -----------------: | ------: | ----------------------------------- |
| -97.8% | -20.432 MiB | 100.0% | 20.9 MiB → 468 KiB |       1 | `java.util.zip.ZipFile$Source:1733` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

| Change |       Delta |      % |                Size | Samples | Location                           |
| -----: | ----------: | -----: | ------------------: | ------: | ---------------------------------- |
| -54.1% | -11.566 MiB | 100.0% | 21.4 MiB → 9.81 MiB | 46 → 14 | `java.util.stream.IntPipeline:174` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |       Delta |             % |         Size | Samples | Location                                       |
| ------: | ----------: | ------------: | -----------: | ------: | ---------------------------------------------- |
| removed | -10.966 MiB | 100.0% → 0.0% | 11 MiB → 0 B |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans:53` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Samples | Location                |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- |
| -82.0% | -5.161 MiB | 100.0% | 6.29 MiB → 1.13 MiB |   2 → 3 | `java.util.Arrays:3863` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |      Delta |      % |               Size | Samples | Location                |
| -----: | ---------: | -----: | -----------------: | ------: | ----------------------- |
| -93.1% | -5.057 MiB | 100.0% | 5.43 MiB → 384 KiB |   8 → 1 | `java.util.Arrays:3513` |

##### `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |      Delta |             % |        Size | Samples | Location                                                   |
| ------: | ---------: | ------------: | ----------: | ------: | ---------------------------------------------------------- |
| removed | -4.998 MiB | 100.0% → 0.0% | 5 MiB → 0 B |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:327` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |              Size | Samples | Location                                        |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------------------------------- |
|  -3.5% | -4.836 MiB | 100.0% | 137 MiB → 132 MiB |  11 → 7 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |      % |               Size | Samples | Location                     |
| -----: | ---------: | -----: | -----------------: | ------: | ---------------------------- |
| -50.1% | -2.454 MiB | 100.0% | 4.9 MiB → 2.44 MiB |   7 → 4 | `java.util.stream.Nodes:168` |

##### `read(Manifest$FastInputStream, byte[], String, int)` (`java.util.jar.Attributes`)

| Change |        Delta |      % |               Size | Samples | Location                       |
| -----: | -----------: | -----: | -----------------: | ------: | ------------------------------ |
| -70.6% | -971.679 KiB | 100.0% | 1.34 MiB → 404 KiB |       1 | `java.util.jar.Attributes:371` |

##### `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`)

|  Change |        Delta |             % |          Size | Samples | Location                              |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------- |
| removed | -740.789 KiB | 100.0% → 0.0% | 741 KiB → 0 B |   1 → 0 | `java.util.stream.DoublePipeline:170` |

##### `unparseMethod(Class, Class[])` (`sun.invoke.util.BytecodeDescriptor`)

|  Change |        Delta |             % |          Size | Samples | Location                                 |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------- |
| removed | -490.546 KiB | 100.0% → 0.0% | 491 KiB → 0 B |   1 → 0 | `sun.invoke.util.BytecodeDescriptor:135` |

##### `entryKey(Object)` (`jdk.internal.util.ReferencedKeyMap`)

|  Change |        Delta |             % |          Size | Samples | Location                                 |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------- |
| removed | -401.281 KiB | 100.0% → 0.0% | 401 KiB → 0 B |   1 → 0 | `jdk.internal.util.ReferencedKeyMap:165` |

##### `toString()` (`java.lang.StringBuilder`)

|  Change |        Delta |             % |          Size | Samples | Location                      |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------- |
| removed | -394.929 KiB | 100.0% → 0.0% | 395 KiB → 0 B |   1 → 0 | `java.lang.StringBuilder:475` |

##### `getInputStream(ZipEntry)` (`java.util.zip.ZipFile`)

|  Change |        Delta |             % |          Size | Samples | Location                    |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------- |
| removed | -394.484 KiB | 100.0% → 0.0% | 394 KiB → 0 B |   1 → 0 | `java.util.zip.ZipFile:390` |

##### `addConstantUtf8Reference(int, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |        Delta |             % |          Size | Samples | Location                                          |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------- |
| removed | -389.289 KiB | 100.0% → 0.0% | 389 KiB → 0 B |   1 → 0 | `jdk.internal.org.objectweb.asm.SymbolTable:1040` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|  Change |        Delta |             % |          Size | Samples | Location                |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------- |
| removed | -389.273 KiB | 100.0% → 0.0% | 389 KiB → 0 B |   1 → 0 | `java.util.Arrays:3856` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

|  Change |        Delta |             % |          Size | Samples | Location                                                    |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
| removed | -179.132 KiB | 100.0% → 0.0% | 179 KiB → 0 B |   2 → 0 | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin:26` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |        Delta |      % |               Size | Samples | Caller      | Location                                               |
| ------: | -----------: | -----: | -----------------: | ------: | ----------- | ------------------------------------------------------ |
| +523.1% | +226.717 MiB | 100.0% | 43.3 MiB → 270 MiB | 12 → 15 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|   Change |       Delta |      % |                Size | Samples | Caller              | Location                                                  |
| -------: | ----------: | -----: | ------------------: | ------: | ------------------- | --------------------------------------------------------- |
| +1077.5% | +57.343 MiB | 100.0% | 5.32 MiB → 62.7 MiB |   5 → 3 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `resize()` (`java.util.HashMap`)

|  Change |        Delta |             % |                Size | Samples | Caller                                          | Location            |
| ------: | -----------: | ------------: | ------------------: | ------: | ----------------------------------------------- | ------------------- |
| +966.5% |  +55.527 MiB | 46.5% → 89.8% | 5.75 MiB → 61.3 MiB |   3 → 2 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|   +5.7% | +385.335 KiB | 53.5% → 10.2% | 6.61 MiB → 6.99 MiB |   5 → 2 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |      Delta |      % |                Size | Samples | Caller                               | Location                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| +66.0% | +37.06 MiB | 100.0% | 56.2 MiB → 93.3 MiB |  11 → 5 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

| Change |       Delta |             % |           Size | Samples | Caller                            | Location                                 |
| -----: | ----------: | ------------: | -------------: | ------: | --------------------------------- | ---------------------------------------- |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size | Samples | Caller          | Location                                                                              |
| -----: | ----------: | -----: | ----------------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| +11.4% | +20.468 MiB | 100.0% | 180 MiB → 200 MiB |  14 → 9 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|  Change |     Delta |      % |               Size | Samples | Caller           | Location                            |
| ------: | --------: | -----: | -----------------: | ------: | ---------------- | ----------------------------------- |
| +737.6% | +4.96 MiB | 100.0% | 689 KiB → 5.63 MiB |  3 → 10 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|  Change |      Delta |      % |                Size | Samples | Caller                                           | Location                                    |
| ------: | ---------: | -----: | ------------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +131.3% | +3.567 MiB | 100.0% | 2.72 MiB → 6.28 MiB |  5 → 11 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

|  Change |      Delta |      % |               Size | Samples | Caller                                                                                  | Location                                           |
| ------: | ---------: | -----: | -----------------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| +251.2% | +3.027 MiB | 100.0% | 1.2 MiB → 4.23 MiB |  3 → 10 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

| Change |     Delta |      % |                Size | Samples | Caller            | Location                     |
| -----: | --------: | -----: | ------------------: | ------: | ----------------- | ---------------------------- |
| +49.3% | +2.38 MiB | 100.0% | 4.83 MiB → 7.21 MiB | 13 → 12 | `range(int, int)` | `java.util.stream.IntStream` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |        Delta |             % |                Size | Samples | Caller                        | Location                          |
| -----: | -----------: | ------------: | ------------------: | ------: | ----------------------------- | --------------------------------- |
| +10.9% |   +1.595 MiB | 95.1% → 93.8% | 14.6 MiB → 16.2 MiB | 29 → 41 | `getBytes()`                  | `jdk.internal.loader.Resource`    |
| +42.4% | +328.476 KiB |   4.9% → 6.2% |  775 KiB → 1.08 MiB |   2 → 4 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |        Delta |            % |            Size | Samples | Caller            | Location                                    |
| -----: | -----------: | -----------: | --------------: | ------: | ----------------- | ------------------------------------------- |
|    new | +999.765 KiB | 0.0% → 71.5% | 0 B → 1,000 KiB |   0 → 1 | `put12(int, int)` | `jdk.internal.org.objectweb.asm.ByteVector` |
|    new | +398.945 KiB | 0.0% → 28.5% |   0 B → 399 KiB |   0 → 1 | `putUTF8(String)` | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |                Size | Samples | Caller       | Location                                            |
| -----: | ---------: | -----: | ------------------: | ------: | ------------ | --------------------------------------------------- |
| +49.0% | +1.286 MiB | 100.0% | 2.63 MiB → 3.91 MiB |   7 → 6 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

|  Change |      Delta |      % |                Size | Samples | Caller                        | Location            |
| ------: | ---------: | -----: | ------------------: | ------: | ----------------------------- | ------------------- |
| +102.8% | +1.148 MiB | 100.0% | 1.12 MiB → 2.26 MiB |   3 → 1 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `transferTo(OutputStream)` (`java.io.InputStream`)

| Change |        Delta |             % |          Size | Samples | Caller                                  | Location              |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------- | --------------------- |
|    new | +773.617 KiB | 0.0% → 100.0% | 0 B → 774 KiB |   0 → 2 | `copy(InputStream, Path, CopyOption[])` | `java.nio.file.Files` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

|  Change |        Delta |      % |              Size | Samples | Caller                     | Location                              |
| ------: | -----------: | -----: | ----------------: | ------: | -------------------------- | ------------------------------------- |
| +343.5% | +761.593 KiB | 100.0% | 222 KiB → 983 KiB |   1 → 3 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `getClassLoadingLock(String)` (`java.lang.ClassLoader`)

| Change |        Delta |             % |          Size | Samples | Caller                             | Location                                 |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------- | ---------------------------------------- |
|    new | +402.687 KiB | 0.0% → 100.0% | 0 B → 403 KiB |   0 → 1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `resolveInvokerMember(Class, String, MethodType)` (`java.lang.invoke.InvokerBytecodeGenerator`)

| Change |       Delta |             % |          Size | Samples | Caller               | Location                                    |
| -----: | ----------: | ------------: | ------------: | ------: | -------------------- | ------------------------------------------- |
|    new | +390.89 KiB | 0.0% → 100.0% | 0 B → 391 KiB |   0 → 1 | `loadMethod(byte[])` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

| Change |       Delta |             % |          Size | Samples | Caller        | Location                   |
| -----: | ----------: | ------------: | ------------: | ------: | ------------- | -------------------------- |
|    new | +387.71 KiB | 0.0% → 100.0% | 0 B → 388 KiB |   0 → 1 | `<init>(int)` | `java.util.jar.Attributes` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |        Delta |             % |          Size | Samples | Caller                                  | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------- | -------------------------------------------- |
|    new | +387.703 KiB | 0.0% → 100.0% | 0 B → 388 KiB |   0 → 1 | `addConstantUtf8Reference(int, String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `<clinit>()` (`java.time.format.DateTimeFormatterBuilder`)

| Change |        Delta |             % |          Size | Samples | Caller       | Location                             |
| -----: | -----------: | ------------: | ------------: | ------: | ------------ | ------------------------------------ |
|    new | +387.664 KiB | 0.0% → 100.0% | 0 B → 388 KiB |   0 → 1 | `<clinit>()` | `java.time.format.DateTimeFormatter` |

##### `readNBytes(int)` (`java.io.InputStream`)

| Change |        Delta |      % |              Size | Samples | Caller           | Location              |
| -----: | -----------: | -----: | ----------------: | ------: | ---------------- | --------------------- |
| +39.5% | +254.851 KiB | 100.0% | 645 KiB → 900 KiB |   1 → 2 | `readAllBytes()` | `java.io.InputStream` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |        Delta |              % |                Size | Samples | Caller                                               | Location                                             |
| ------: | -----------: | -------------: | ------------------: | ------: | ---------------------------------------------------- | ---------------------------------------------------- |
|  +57.7% |   +1.086 MiB | 69.1% → 100.0% | 1.88 MiB → 2.97 MiB |   2 → 5 | `newInvokeSpecial(Object, int, int, Object)`         | `java.lang.invoke.LambdaForm$DMH.0x0000007001220000` |
| removed | -864.468 KiB |   30.9% → 0.0% |       864 KiB → 0 B |   1 → 0 | `newInvokeSpecial(Object, Object, int, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000a001200400` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

| Change |        Delta |      % |              Size | Samples | Caller     | Location                  |
| -----: | -----------: | -----: | ----------------: | ------: | ---------- | ------------------------- |
| +38.4% | +149.101 KiB | 100.0% | 389 KiB → 538 KiB |       1 | `<init>()` | `java.lang.StringBuilder` |

##### `<init>(InputStream, int)` (`java.util.jar.Manifest$FastInputStream`)

| Change |       Delta |      % |              Size | Samples | Caller                | Location                                 |
| -----: | ----------: | -----: | ----------------: | ------: | --------------------- | ---------------------------------------- |
|  +4.6% | +17.585 KiB | 100.0% | 386 KiB → 403 KiB |       1 | `<init>(InputStream)` | `java.util.jar.Manifest$FastInputStream` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |             % |                Size |       Samples | Caller      | Location              |
| -----: | -----------: | ------------: | ------------------: | ------------: | ----------- | --------------------- |
|  -7.1% |   -1.282 GiB | 52.0% → 48.9% | 18.1 GiB → 16.8 GiB | 1,908 → 1,058 | `grow(int)` | `java.util.ArrayList` |
|  +5.1% | +866.001 MiB | 48.0% → 51.1% | 16.7 GiB → 17.6 GiB |   1,643 → 966 | `toArray()` | `java.util.ArrayList` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |                Size |  Samples | Caller              | Location                                                   |
| -----: | -----------: | -----: | ------------------: | -------: | ------------------- | ---------------------------------------------------------- |
|  -9.7% | -126.309 MiB | 100.0% | 1.27 GiB → 1.14 GiB | 140 → 77 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `valueOf(double)` (`java.lang.Double`)

|  Change |        Delta |              % |               Size | Samples | Caller                                           | Location                                                     |
| ------: | -----------: | -------------: | -----------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------ |
|  -86.4% | -123.185 MiB | 99.3% → 100.0% | 143 MiB → 19.4 MiB | 17 → 33 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                  |
| removed |   -1.041 MiB |    0.7% → 0.0% |     1.04 MiB → 0 B |   1 → 0 | `apply(double)`                                  | `java.util.stream.DoublePipeline$$Lambda.0x000000a0010d4c10` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |        Delta |      % |              Size | Samples | Caller   | Location              |
| -----: | -----------: | -----: | ----------------: | ------: | -------- | --------------------- |
| -29.1% | -105.857 MiB | 100.0% | 363 MiB → 257 MiB | 29 → 11 | `grow()` | `java.util.ArrayList` |

##### `entrySet()` (`java.util.HashMap`)

| Change |       Delta |      % |               Size | Samples | Caller                        | Location            |
| -----: | ----------: | -----: | -----------------: | ------: | ----------------------------- | ------------------- |
| -99.4% | -72.245 MiB | 100.0% | 72.7 MiB → 475 KiB |       1 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|  Change |       Delta |             % |                Size | Samples | Caller                                          | Location            |
| ------: | ----------: | ------------: | ------------------: | ------: | ----------------------------------------------- | ------------------- |
|  -77.4% | -39.386 MiB |  28.0% → 9.5% | 50.9 MiB → 11.5 MiB |  13 → 8 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|  -13.4% | -16.968 MiB | 69.5% → 90.5% |   126 MiB → 110 MiB |  10 → 6 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
| removed |  -4.615 MiB |   2.5% → 0.0% |      4.62 MiB → 0 B |   1 → 0 | `merge(Object, Object, BiFunction)`             | `java.util.HashMap` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size | Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ----------------: | ------: | ----------- | ------------------------------------------------------ |
| -10.7% | -57.634 MiB | 100.0% | 538 MiB → 481 MiB | 44 → 14 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |                Size | Samples | Caller                  | Location                                                               |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| -59.1% | -38.296 MiB | 100.0% | 64.9 MiB → 26.6 MiB |  11 → 6 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size | Samples | Caller              | Location                                                   |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------- | ---------------------------------------------------------- |
| -46.8% | -26.713 MiB | 100.0% | 57.1 MiB → 30.4 MiB |   9 → 4 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |       Delta |      % |               Size | Samples | Caller                                          | Location                       |
| -----: | ----------: | -----: | -----------------: | ------: | ----------------------------------------------- | ------------------------------ |
| -97.8% | -20.432 MiB | 100.0% | 20.9 MiB → 468 KiB |       1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

| Change |       Delta |      % |                Size | Samples | Caller                  | Location                       |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------------- | ------------------------------ |
| -54.1% | -11.566 MiB | 100.0% | 21.4 MiB → 9.81 MiB | 46 → 14 | `mapToObj(IntFunction)` | `java.util.stream.IntPipeline` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |       Delta |             % |         Size | Samples | Caller   | Location                                                               |
| ------: | ----------: | ------------: | -----------: | ------: | -------- | ---------------------------------------------------------------------- |
| removed | -10.966 MiB | 100.0% → 0.0% | 11 MiB → 0 B |   1 → 0 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Samples | Caller                          | Location           |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------- | ------------------ |
| -82.0% | -5.161 MiB | 100.0% | 6.29 MiB → 1.13 MiB |   2 → 3 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |      Delta |      % |               Size | Samples | Caller                  | Location           |
| -----: | ---------: | -----: | -----------------: | ------: | ----------------------- | ------------------ |
| -93.1% | -5.057 MiB | 100.0% | 5.43 MiB → 384 KiB |   8 → 1 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |      Delta |             % |        Size | Samples | Caller                     | Location                                               |
| ------: | ---------: | ------------: | ----------: | ------: | -------------------------- | ------------------------------------------------------ |
| removed | -4.998 MiB | 100.0% → 0.0% | 5 MiB → 0 B |   1 → 0 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |              Size | Samples | Caller                     | Location                                                   |
| -----: | ---------: | -----: | ----------------: | ------: | -------------------------- | ---------------------------------------------------------- |
|  -3.5% | -4.836 MiB | 100.0% | 137 MiB → 132 MiB |  11 → 7 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |      % |               Size | Samples | Caller                               | Location                             |
| -----: | ---------: | -----: | -----------------: | ------: | ------------------------------------ | ------------------------------------ |
| -50.1% | -2.454 MiB | 100.0% | 4.9 MiB → 2.44 MiB |   7 → 4 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `fillInStackTrace(int)` (`java.lang.Throwable`)

| Change |      Delta |      % |               Size | Samples | Caller               | Location              |
| -----: | ---------: | -----: | -----------------: | ------: | -------------------- | --------------------- |
| -78.1% | -1.371 MiB | 100.0% | 1.76 MiB → 395 KiB |   2 → 1 | `fillInStackTrace()` | `java.lang.Throwable` |

##### `read(Manifest$FastInputStream, byte[], String, int)` (`java.util.jar.Attributes`)

| Change |        Delta |      % |               Size | Samples | Caller                      | Location                 |
| -----: | -----------: | -----: | -----------------: | ------: | --------------------------- | ------------------------ |
| -70.6% | -971.679 KiB | 100.0% | 1.34 MiB → 404 KiB |       1 | `read(InputStream, String)` | `java.util.jar.Manifest` |

##### `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`)

|  Change |        Delta |             % |          Size | Samples | Caller    | Location                          |
| ------: | -----------: | ------------: | ------------: | ------: | --------- | --------------------------------- |
| removed | -740.789 KiB | 100.0% → 0.0% | 741 KiB → 0 B |   1 → 0 | `boxed()` | `java.util.stream.DoublePipeline` |

##### `unparseMethod(Class, Class[])` (`sun.invoke.util.BytecodeDescriptor`)

|  Change |        Delta |             % |          Size | Samples | Caller                       | Location                      |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------- | ----------------------------- |
| removed | -490.546 KiB | 100.0% → 0.0% | 491 KiB → 0 B |   1 → 0 | `toMethodDescriptorString()` | `java.lang.invoke.MethodType` |

##### `clone()` (`java.lang.Object`)

|  Change |       Delta |             % |          Size | Samples | Caller                          | Location           |
| ------: | ----------: | ------------: | ------------: | ------: | ------------------------------- | ------------------ |
| removed | -402.25 KiB | 100.0% → 0.0% | 402 KiB → 0 B |   1 → 0 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `entryKey(Object)` (`jdk.internal.util.ReferencedKeyMap`)

|  Change |        Delta |             % |          Size | Samples | Caller                                | Location                             |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------- | ------------------------------------ |
| removed | -401.281 KiB | 100.0% → 0.0% | 401 KiB → 0 B |   1 → 0 | `internKey(ReferencedKeyMap, Object)` | `jdk.internal.util.ReferencedKeyMap` |

##### `toString()` (`java.lang.StringBuilder`)

|  Change |        Delta |             % |          Size | Samples | Caller                | Location                    |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------- | --------------------------- |
| removed | -394.929 KiB | 100.0% → 0.0% | 395 KiB → 0 B |   1 → 0 | `toExternalForm(URL)` | `java.net.URLStreamHandler` |

##### `getInputStream(ZipEntry)` (`java.util.zip.ZipFile`)

|  Change |        Delta |             % |          Size | Samples | Caller                     | Location                |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------- | ----------------------- |
| removed | -394.484 KiB | 100.0% → 0.0% | 394 KiB → 0 B |   1 → 0 | `getInputStream(ZipEntry)` | `java.util.jar.JarFile` |

##### `addConstantUtf8Reference(int, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |        Delta |             % |          Size | Samples | Caller                     | Location                                     |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------- | -------------------------------------------- |
| removed | -389.289 KiB | 100.0% → 0.0% | 389 KiB → 0 B |   1 → 0 | `addConstantClass(String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|  Change |        Delta |             % |          Size | Samples | Caller                                | Location           |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------- | ------------------ |
| removed | -389.273 KiB | 100.0% → 0.0% | 389 KiB → 0 B |   1 → 0 | `<init>(AbstractStringBuilder, Void)` | `java.lang.String` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

|  Change |        Delta |             % |          Size | Samples | Caller                                      | Location                                                 |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| removed | -179.132 KiB | 100.0% → 0.0% | 179 KiB → 0 B |   2 → 0 | `afterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|   Change |        Delta |             % |                Size |     Samples | Function                                                                                                               | Location                                                               |
| -------: | -----------: | ------------: | ------------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    +5.0% | +863.127 MiB | 44.0% → 47.0% | 16.7 GiB → 17.6 GiB | 1,647 → 966 | `toArray()`                                                                                                            | `java.util.ArrayList`                                                  |
|    +8.1% | +643.999 MiB | 20.4% → 22.5% | 7.76 GiB → 8.39 GiB |   728 → 437 | `<init>(Collection)`                                                                                                   | `java.util.ArrayList`                                                  |
|    +3.3% | +283.367 MiB | 22.0% → 23.1% | 8.35 GiB → 8.63 GiB |   503 → 302 | `invoke()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
|  +523.1% | +226.717 MiB |   0.1% → 0.7% |  43.3 MiB → 270 MiB |     12 → 15 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|    +5.4% | +176.793 MiB |   8.5% → 9.1% | 3.21 GiB → 3.39 GiB |   408 → 257 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                                                              | `java.util.concurrent.ForkJoinPool`                                    |
|    +1.6% | +134.558 MiB | 21.9% → 22.7% | 8.33 GiB → 8.47 GiB |   490 → 293 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    +1.6% | +134.558 MiB | 21.9% → 22.7% | 8.33 GiB → 8.47 GiB |   490 → 293 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70` |
|    +1.6% | +134.558 MiB | 21.9% → 22.7% | 8.33 GiB → 8.47 GiB |   490 → 293 | `exec()`                                                                                                               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|  +342.5% | +132.493 MiB |   0.1% → 0.4% |  38.7 MiB → 171 MiB |     15 → 10 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +235.2% | +120.789 MiB |   0.1% → 0.5% |  51.4 MiB → 172 MiB |     19 → 11 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +235.2% | +120.789 MiB |   0.1% → 0.5% |  51.4 MiB → 172 MiB |     19 → 11 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|      new |  +70.618 MiB |   0.0% → 0.2% |      0 B → 70.6 MiB |     0 → 128 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| +1077.5% |  +57.343 MiB |  <0.1% → 0.2% | 5.32 MiB → 62.7 MiB |       5 → 3 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +1077.5% |  +57.343 MiB |  <0.1% → 0.2% | 5.32 MiB → 62.7 MiB |       5 → 3 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  +452.5% |  +55.903 MiB |  <0.1% → 0.2% | 12.4 MiB → 68.3 MiB |       8 → 4 | `resize()`                                                                                                             | `java.util.HashMap`                                                    |
|   +66.0% |   +37.06 MiB |   0.1% → 0.2% | 56.2 MiB → 93.3 MiB |      11 → 5 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +66.0% |   +37.06 MiB |   0.1% → 0.2% | 56.2 MiB → 93.3 MiB |      11 → 5 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +66.0% |   +37.06 MiB |   0.1% → 0.2% | 56.2 MiB → 93.3 MiB |      11 → 5 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|      new |  +20.849 MiB |   0.0% → 0.1% |      0 B → 20.8 MiB |       0 → 1 | `initTable()`                                                                                                          | `java.util.concurrent.ConcurrentHashMap`                               |
|      new |  +20.849 MiB |   0.0% → 0.1% |      0 B → 20.8 MiB |       0 → 1 | `putVal(Object, Object, boolean)`                                                                                      | `java.util.concurrent.ConcurrentHashMap`                               |

##### Standard library

|  Change |        Delta |             % |                Size |     Samples | Function                                                                          | Location                                            |
| ------: | -----------: | ------------: | ------------------: | ----------: | --------------------------------------------------------------------------------- | --------------------------------------------------- |
|   +5.0% | +863.127 MiB | 44.0% → 47.0% | 16.7 GiB → 17.6 GiB | 1,647 → 966 | `toArray()`                                                                       | `java.util.ArrayList`                               |
|   +8.1% | +643.999 MiB | 20.4% → 22.5% | 7.76 GiB → 8.39 GiB |   728 → 437 | `<init>(Collection)`                                                              | `java.util.ArrayList`                               |
|   +3.3% | +283.367 MiB | 22.0% → 23.1% | 8.35 GiB → 8.63 GiB |   503 → 302 | `invoke()`                                                                        | `java.util.concurrent.ForkJoinTask`                 |
|   +5.4% | +176.793 MiB |   8.5% → 9.1% | 3.21 GiB → 3.39 GiB |   408 → 257 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                         | `java.util.concurrent.ForkJoinPool`                 |
|   +1.6% | +134.558 MiB | 21.9% → 22.7% | 8.33 GiB → 8.47 GiB |   490 → 293 | `exec()`                                                                          | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| +452.5% |  +55.903 MiB |  <0.1% → 0.2% | 12.4 MiB → 68.3 MiB |       8 → 4 | `resize()`                                                                        | `java.util.HashMap`                                 |
|     new |  +20.849 MiB |   0.0% → 0.1% |      0 B → 20.8 MiB |       0 → 1 | `initTable()`                                                                     | `java.util.concurrent.ConcurrentHashMap`            |
|     new |  +20.849 MiB |   0.0% → 0.1% |      0 B → 20.8 MiB |       0 → 1 | `putVal(Object, Object, boolean)`                                                 | `java.util.concurrent.ConcurrentHashMap`            |
|     new |  +20.849 MiB |   0.0% → 0.1% |      0 B → 20.8 MiB |       0 → 1 | `put(Object, Object)`                                                             | `java.util.concurrent.ConcurrentHashMap`            |
|     new |  +20.849 MiB |   0.0% → 0.1% |      0 B → 20.8 MiB |       0 → 1 | `storeString(String)`                                                             | `jdk.jfr.internal.StringPool`                       |
|     new |  +20.849 MiB |   0.0% → 0.1% |      0 B → 20.8 MiB |       0 → 1 | `addString(String)`                                                               | `jdk.jfr.internal.StringPool`                       |
|     new |  +20.849 MiB |   0.0% → 0.1% |      0 B → 20.8 MiB |       0 → 1 | `putString(String)`                                                               | `jdk.jfr.internal.event.EventWriter`                |
|     new |  +20.849 MiB |   0.0% → 0.1% |      0 B → 20.8 MiB |       0 → 1 | `commit(long, long, long, String, String, boolean, long, long, long, long, long)` | `jdk.jfr.events.ActiveRecordingEvent`               |
|     new |  +20.849 MiB |   0.0% → 0.1% |      0 B → 20.8 MiB |       0 → 1 | `writeMetaEvents()`                                                               | `jdk.jfr.internal.PlatformRecorder`                 |
|     new |  +20.849 MiB |   0.0% → 0.1% |      0 B → 20.8 MiB |       0 → 1 | `start(PlatformRecording)`                                                        | `jdk.jfr.internal.PlatformRecorder`                 |
|     new |  +20.849 MiB |   0.0% → 0.1% |      0 B → 20.8 MiB |       0 → 1 | `start()`                                                                         | `jdk.jfr.internal.PlatformRecording`                |
|     new |  +20.849 MiB |   0.0% → 0.1% |      0 B → 20.8 MiB |       0 → 1 | `start()`                                                                         | `jdk.jfr.Recording`                                 |
|     new |  +20.849 MiB |   0.0% → 0.1% |      0 B → 20.8 MiB |       0 → 1 | `execute(ArgumentParser)`                                                         | `jdk.jfr.internal.dcmd.DCmdStart`                   |
|     new |  +20.849 MiB |   0.0% → 0.1% |      0 B → 20.8 MiB |       0 → 1 | `execute(String, String, char)`                                                   | `jdk.jfr.internal.dcmd.AbstractDCmd`                |
|  +27.6% |  +15.763 MiB |   0.1% → 0.2% |   57 MiB → 72.8 MiB |     17 → 10 | `putVal(int, Object, Object, boolean, boolean)`                                   | `java.util.HashMap`                                 |

##### Ours

|   Change |        Delta |             % |                Size |   Samples | Function                                                                                                               | Location                                                                                      |
| -------: | -----------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|  +523.1% | +226.717 MiB |   0.1% → 0.7% |  43.3 MiB → 270 MiB |   12 → 15 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
|    +1.6% | +134.558 MiB | 21.9% → 22.7% | 8.33 GiB → 8.47 GiB | 490 → 293 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                                   |
|    +1.6% | +134.558 MiB | 21.9% → 22.7% | 8.33 GiB → 8.47 GiB | 490 → 293 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`                        |
|  +342.5% | +132.493 MiB |   0.1% → 0.4% |  38.7 MiB → 171 MiB |   15 → 10 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                        |
|  +235.2% | +120.789 MiB |   0.1% → 0.5% |  51.4 MiB → 172 MiB |   19 → 11 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                        |
|  +235.2% | +120.789 MiB |   0.1% → 0.5% |  51.4 MiB → 172 MiB |   19 → 11 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                        |
|      new |  +70.618 MiB |   0.0% → 0.2% |      0 B → 70.6 MiB |   0 → 128 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                   |
| +1077.5% |  +57.343 MiB |  <0.1% → 0.2% | 5.32 MiB → 62.7 MiB |     5 → 3 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
| +1077.5% |  +57.343 MiB |  <0.1% → 0.2% | 5.32 MiB → 62.7 MiB |     5 → 3 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
|   +66.0% |   +37.06 MiB |   0.1% → 0.2% | 56.2 MiB → 93.3 MiB |    11 → 5 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
|   +66.0% |   +37.06 MiB |   0.1% → 0.2% | 56.2 MiB → 93.3 MiB |    11 → 5 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
|   +66.0% |   +37.06 MiB |   0.1% → 0.2% | 56.2 MiB → 93.3 MiB |    11 → 5 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
|   +11.4% |  +20.468 MiB |          0.5% |   180 MiB → 200 MiB |    14 → 9 | `lambda$collectClusters$0(Double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                    |
|   +11.4% |  +20.468 MiB |          0.5% |   180 MiB → 200 MiB |    14 → 9 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0`         |
|      new |   +7.482 MiB |  0.0% → <0.1% |      0 B → 7.48 MiB |    0 → 19 | `rowToArray$1(Map)`                                                                                                    | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|      new |   +7.482 MiB |  0.0% → <0.1% |      0 B → 7.48 MiB |    0 → 19 | `setUpBeforeAll$$anonfun$1(Map)`                                                                                       | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|      new |   +7.482 MiB |  0.0% → <0.1% |      0 B → 7.48 MiB |    0 → 19 | `lambda$toCsvRows$2(String[], Function, String)`                                                                       | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                            |
|      new |   +7.482 MiB |  0.0% → <0.1% |      0 B → 7.48 MiB |    0 → 19 | `apply(Object)`                                                                                                        | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x000000700119b5c8` |
|      new |   +7.482 MiB |  0.0% → <0.1% |      0 B → 7.48 MiB |    0 → 19 | `toCsvRows(Function)`                                                                                                  | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                            |
|  +786.4% |   +6.638 MiB |         <0.1% |  864 KiB → 7.48 MiB |    1 → 19 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011a2908`                          |

#### Improvements

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |        Delta |             % |                Size |       Samples | Function                                             | Location                                                   |
| -----: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------------- |
|  -5.3% |   -1.418 GiB | 69.9% → 67.4% | 26.6 GiB → 25.2 GiB | 2,755 → 1,535 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  -7.5% |   -1.387 GiB | 48.6% → 45.7% | 18.5 GiB → 17.1 GiB | 1,941 → 1,070 | `grow(int)`                                          | `java.util.ArrayList`                                      |
|  -4.7% |   -1.273 GiB | 70.6% → 68.5% | 26.8 GiB → 25.6 GiB | 2,785 → 1,554 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                        |
|  -4.7% |   -1.273 GiB | 70.6% → 68.5% | 26.8 GiB → 25.6 GiB | 2,785 → 1,554 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                        |
|  -3.3% | -773.104 MiB | 59.9% → 58.9% |   22.7 GiB → 22 GiB | 2,336 → 1,298 | `addAll(Collection)`                                 | `java.util.ArrayList`                                      |
|  -9.0% | -579.558 MiB | 16.5% → 15.3% | 6.29 GiB → 5.72 GiB |     702 → 396 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -1.5% | -570.733 MiB | 99.4% → 99.7% | 37.8 GiB → 37.2 GiB | 3,884 → 2,191 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                        |
|  -1.5% | -570.733 MiB | 99.4% → 99.7% | 37.8 GiB → 37.2 GiB | 3,884 → 2,191 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  -1.5% | -570.733 MiB | 99.4% → 99.7% | 37.8 GiB → 37.2 GiB | 3,884 → 2,191 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                        |
|  -1.5% | -570.733 MiB | 99.4% → 99.7% | 37.8 GiB → 37.2 GiB | 3,884 → 2,191 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                        |
|  -1.5% | -570.733 MiB | 99.4% → 99.7% | 37.8 GiB → 37.2 GiB | 3,884 → 2,191 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                |
|  -1.4% | -559.767 MiB | 99.4% → 99.7% | 37.8 GiB → 37.2 GiB | 3,883 → 2,191 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|  -1.4% | -559.767 MiB | 99.4% → 99.7% | 37.8 GiB → 37.2 GiB | 3,883 → 2,191 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                       |
|  -8.8% | -453.249 MiB | 13.2% → 12.3% | 5.02 GiB → 4.57 GiB |     562 → 319 | `collectClusters(int[])`                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -1.3% | -451.986 MiB | 91.6% → 92.1% | 34.8 GiB → 34.4 GiB | 3,559 → 2,025 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                         |
|  -9.0% | -428.739 MiB | 12.3% → 11.4% | 4.66 GiB → 4.24 GiB |     524 → 301 | `grow()`                                             | `java.util.ArrayList`                                      |
|  -9.0% | -428.739 MiB | 12.3% → 11.4% | 4.66 GiB → 4.24 GiB |     524 → 301 | `add(Object, Object[], int)`                         | `java.util.ArrayList`                                      |
|  -9.0% | -428.739 MiB | 12.3% → 11.4% | 4.66 GiB → 4.24 GiB |     524 → 301 | `add(Object)`                                        | `java.util.ArrayList`                                      |
|  -0.7% | -231.992 MiB | 81.1% → 82.0% | 30.8 GiB → 30.6 GiB | 3,105 → 1,757 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -0.7% | -227.376 MiB | 81.1% → 82.0% | 30.8 GiB → 30.6 GiB | 3,104 → 1,757 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Standard library

| Change |        Delta |             % |                Size |       Samples | Function                                             | Location                                       |
| -----: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------- |
|  -5.3% |   -1.418 GiB | 69.9% → 67.4% | 26.6 GiB → 25.2 GiB | 2,755 → 1,535 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`  |
|  -7.5% |   -1.387 GiB | 48.6% → 45.7% | 18.5 GiB → 17.1 GiB | 1,941 → 1,070 | `grow(int)`                                          | `java.util.ArrayList`                          |
|  -4.7% |   -1.273 GiB | 70.6% → 68.5% | 26.8 GiB → 25.6 GiB | 2,785 → 1,554 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`            |
|  -4.7% |   -1.273 GiB | 70.6% → 68.5% | 26.8 GiB → 25.6 GiB | 2,785 → 1,554 | `join()`                                             | `java.util.concurrent.ForkJoinTask`            |
|  -3.3% | -773.104 MiB | 59.9% → 58.9% |   22.7 GiB → 22 GiB | 2,336 → 1,298 | `addAll(Collection)`                                 | `java.util.ArrayList`                          |
|  -1.5% | -570.733 MiB | 99.4% → 99.7% | 37.8 GiB → 37.2 GiB | 3,884 → 2,191 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`            |
|  -1.5% | -570.733 MiB | 99.4% → 99.7% | 37.8 GiB → 37.2 GiB | 3,884 → 2,191 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`  |
|  -1.5% | -570.733 MiB | 99.4% → 99.7% | 37.8 GiB → 37.2 GiB | 3,884 → 2,191 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`            |
|  -1.5% | -570.733 MiB | 99.4% → 99.7% | 37.8 GiB → 37.2 GiB | 3,884 → 2,191 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`            |
|  -1.5% | -570.733 MiB | 99.4% → 99.7% | 37.8 GiB → 37.2 GiB | 3,884 → 2,191 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`    |
|  -1.4% | -559.767 MiB | 99.4% → 99.7% | 37.8 GiB → 37.2 GiB | 3,883 → 2,191 | `exec()`                                             | `java.util.concurrent.RecursiveTask`           |
|  -1.3% | -451.986 MiB | 91.6% → 92.1% | 34.8 GiB → 34.4 GiB | 3,559 → 2,025 | `copyOf(Object[], int)`                              | `java.util.Arrays`                             |
|  -9.0% | -428.739 MiB | 12.3% → 11.4% | 4.66 GiB → 4.24 GiB |     524 → 301 | `grow()`                                             | `java.util.ArrayList`                          |
|  -9.0% | -428.739 MiB | 12.3% → 11.4% | 4.66 GiB → 4.24 GiB |     524 → 301 | `add(Object, Object[], int)`                         | `java.util.ArrayList`                          |
|  -9.0% | -428.739 MiB | 12.3% → 11.4% | 4.66 GiB → 4.24 GiB |     524 → 301 | `add(Object)`                                        | `java.util.ArrayList`                          |
|  -0.5% | -172.016 MiB | 80.5% → 81.5% | 30.6 GiB → 30.4 GiB | 3,076 → 1,741 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                            |
|  -0.5% | -172.016 MiB | 80.5% → 81.5% | 30.6 GiB → 30.4 GiB | 3,076 → 1,741 | `forEach(BiConsumer)`                                | `java.util.HashMap`                            |
| -86.5% | -124.227 MiB |   0.4% → 0.1% |  144 MiB → 19.4 MiB |       18 → 33 | `valueOf(double)`                                    | `java.lang.Double`                             |
| -67.1% | -121.891 MiB |   0.5% → 0.2% |  182 MiB → 59.9 MiB |     101 → 100 | `accept(int)`                                        | `java.util.stream.IntPipeline$1$1`             |
| -67.1% | -121.891 MiB |   0.5% → 0.2% |  182 MiB → 59.9 MiB |     101 → 100 | `forEachRemaining(IntConsumer)`                      | `java.util.stream.Streams$RangeIntSpliterator` |

##### Ours

|  Change |        Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   -9.0% | -579.558 MiB | 16.5% → 15.3% | 6.29 GiB → 5.72 GiB |     702 → 396 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -1.4% | -559.767 MiB | 99.4% → 99.7% | 37.8 GiB → 37.2 GiB | 3,883 → 2,191 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|   -8.8% | -453.249 MiB | 13.2% → 12.3% | 5.02 GiB → 4.57 GiB |     562 → 319 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.7% | -231.992 MiB | 81.1% → 82.0% | 30.8 GiB → 30.6 GiB | 3,105 → 1,757 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.7% | -227.376 MiB | 81.1% → 82.0% | 30.8 GiB → 30.6 GiB | 3,104 → 1,757 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -0.7% | -227.376 MiB | 81.1% → 82.0% | 30.8 GiB → 30.6 GiB | 3,104 → 1,757 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed | -190.784 MiB |   0.5% → 0.0% |       191 MiB → 0 B |       112 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|   -0.5% | -172.016 MiB | 80.5% → 81.5% | 30.6 GiB → 30.4 GiB | 3,076 → 1,741 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.5% | -172.016 MiB | 80.5% → 81.5% | 30.6 GiB → 30.4 GiB | 3,076 → 1,741 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30` |
|   -0.5% | -167.401 MiB | 80.5% → 81.5% | 30.6 GiB → 30.4 GiB | 3,075 → 1,741 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -0.5% | -167.401 MiB | 80.5% → 81.5% | 30.6 GiB → 30.4 GiB | 3,075 → 1,741 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178` |
|   -9.7% | -126.309 MiB |   3.3% → 3.1% | 1.27 GiB → 1.14 GiB |      140 → 77 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -86.4% | -123.185 MiB |   0.4% → 0.1% |  143 MiB → 19.4 MiB |       17 → 33 | `lambda$generateData$3(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -67.8% | -123.181 MiB |   0.5% → 0.2% |  182 MiB → 58.6 MiB |      101 → 98 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -67.8% | -123.181 MiB |   0.5% → 0.2% |  182 MiB → 58.6 MiB |      101 → 98 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`                    |
|  -64.2% | -122.255 MiB |   0.5% → 0.2% |  190 MiB → 68.1 MiB |     111 → 121 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  -67.1% | -121.891 MiB |   0.5% → 0.2% |  182 MiB → 59.9 MiB |     101 → 100 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -58.9% | -120.889 MiB |   0.5% → 0.2% |  205 MiB → 84.4 MiB |     151 → 163 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -63.0% | -120.165 MiB |   0.5% → 0.2% |  191 MiB → 70.6 MiB |     112 → 128 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8` |
|  -63.0% | -120.165 MiB |   0.5% → 0.2% |  191 MiB → 70.6 MiB |     112 → 128 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `toArray()` (`java.util.ArrayList`)

| Change |        Delta |             % |                Size |   Samples | Caller               | Location              |
| -----: | -----------: | ------------: | ------------------: | --------: | -------------------- | --------------------- |
|  +8.1% | +643.999 MiB | 46.4% → 47.8% | 7.76 GiB → 8.39 GiB | 728 → 437 | `<init>(Collection)` | `java.util.ArrayList` |
|  +2.4% | +219.127 MiB | 53.6% → 52.2% | 8.95 GiB → 9.16 GiB | 919 → 529 | `addAll(Collection)` | `java.util.ArrayList` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Caller                       | Location                                    |
| -----: | -----------: | -----: | ------------------: | --------: | ---------------------------- | ------------------------------------------- |
|  +8.1% | +643.999 MiB | 100.0% | 7.76 GiB → 8.39 GiB | 728 → 437 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|  Change |        Delta |             % |                Size |   Samples | Caller                         | Location                                               |
| ------: | -----------: | ------------: | ------------------: | --------: | ------------------------------ | ------------------------------------------------------ |
|   +1.7% | +145.525 MiB | 99.7% → 98.1% | 8.32 GiB → 8.47 GiB | 489 → 293 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
| +342.5% | +132.493 MiB |   0.5% → 1.9% |  38.7 MiB → 171 MiB |   15 → 10 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |        Delta |      % |               Size | Samples | Caller      | Location                                               |
| ------: | -----------: | -----: | -----------------: | ------: | ----------- | ------------------------------------------------------ |
| +523.1% | +226.717 MiB | 100.0% | 43.3 MiB → 270 MiB | 12 → 15 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |   Samples | Caller                 | Location                            |
| -----: | -----------: | -----: | ------------------: | --------: | ---------------------- | ----------------------------------- |
|  +5.4% | +176.793 MiB | 100.0% | 3.21 GiB → 3.39 GiB | 408 → 257 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |                Size |   Samples | Caller   | Location                                                               |
| -----: | -----------: | -----: | ------------------: | --------: | -------- | ---------------------------------------------------------------------- |
|  +1.6% | +134.558 MiB | 100.0% | 8.33 GiB → 8.47 GiB | 490 → 293 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`)

| Change |        Delta |      % |                Size |   Samples | Caller   | Location                                            |
| -----: | -----------: | -----: | ------------------: | --------: | -------- | --------------------------------------------------- |
|  +1.6% | +134.558 MiB | 100.0% | 8.33 GiB → 8.47 GiB | 490 → 293 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |        Delta |      % |                Size |   Samples | Caller     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------: | ---------- | ----------------------------------- |
|  +1.6% | +134.558 MiB | 100.0% | 8.33 GiB → 8.47 GiB | 490 → 293 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |        Delta |      % |               Size | Samples | Caller                     | Location                                               |
| ------: | -----------: | -----: | -----------------: | ------: | -------------------------- | ------------------------------------------------------ |
| +342.5% | +132.493 MiB | 100.0% | 38.7 MiB → 171 MiB | 15 → 10 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |        Delta |      % |               Size | Samples | Caller              | Location                                               |
| ------: | -----------: | -----: | -----------------: | ------: | ------------------- | ------------------------------------------------------ |
| +235.2% | +120.789 MiB | 100.0% | 51.4 MiB → 172 MiB | 19 → 11 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |        Delta |      % |               Size | Samples | Caller              | Location                                               |
| ------: | -----------: | -----: | -----------------: | ------: | ------------------- | ------------------------------------------------------ |
| +235.2% | +120.789 MiB | 100.0% | 51.4 MiB → 172 MiB | 19 → 11 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +235.2% | +120.789 MiB | 100.0% | 51.4 MiB → 172 MiB | 19 → 11 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |       Delta |             % |           Size | Samples | Caller              | Location                                                               |
| -----: | ----------: | ------------: | -------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
|    new | +70.618 MiB | 0.0% → 100.0% | 0 B → 70.6 MiB | 0 → 128 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|   Change |       Delta |      % |                Size | Samples | Caller              | Location                                                  |
| -------: | ----------: | -----: | ------------------: | ------: | ------------------- | --------------------------------------------------------- |
| +1077.5% | +57.343 MiB | 100.0% | 5.32 MiB → 62.7 MiB |   5 → 3 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|   Change |       Delta |      % |                Size | Samples | Caller              | Location                                                  |
| -------: | ----------: | -----: | ------------------: | ------: | ------------------- | --------------------------------------------------------- |
| +1077.5% | +57.343 MiB | 100.0% | 5.32 MiB → 62.7 MiB |   5 → 3 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| +1077.5% | +57.343 MiB | 100.0% | 5.32 MiB → 62.7 MiB |   5 → 3 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |

##### `resize()` (`java.util.HashMap`)

|  Change |        Delta |             % |                Size | Samples | Caller                                          | Location            |
| ------: | -----------: | ------------: | ------------------: | ------: | ----------------------------------------------- | ------------------- |
| +966.5% |  +55.527 MiB | 46.5% → 89.8% | 5.75 MiB → 61.3 MiB |   3 → 2 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|   +5.7% | +385.335 KiB | 53.5% → 10.2% | 6.61 MiB → 6.99 MiB |   5 → 2 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |      Delta |      % |                Size | Samples | Caller                               | Location                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| +66.0% | +37.06 MiB | 100.0% | 56.2 MiB → 93.3 MiB |  11 → 5 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |      Delta |      % |                Size | Samples | Caller                           | Location                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | -------------------------------- | --------------------------------------------------------- |
| +66.0% | +37.06 MiB | 100.0% | 56.2 MiB → 93.3 MiB |  11 → 5 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |      Delta |      % |                Size | Samples | Caller      | Location                                               |
| -----: | ---------: | -----: | ------------------: | ------: | ----------- | ------------------------------------------------------ |
| +66.0% | +37.06 MiB | 100.0% | 56.2 MiB → 93.3 MiB |  11 → 5 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

| Change |       Delta |             % |           Size | Samples | Caller                            | Location                                 |
| -----: | ----------: | ------------: | -------------: | ------: | --------------------------------- | ---------------------------------------- |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

| Change |       Delta |             % |           Size | Samples | Caller                | Location                                 |
| -----: | ----------: | ------------: | -------------: | ------: | --------------------- | ---------------------------------------- |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `put(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `put(Object, Object)` (`java.util.concurrent.ConcurrentHashMap`)

| Change |       Delta |             % |           Size | Samples | Caller                | Location                      |
| -----: | ----------: | ------------: | -------------: | ------: | --------------------- | ----------------------------- |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `storeString(String)` | `jdk.jfr.internal.StringPool` |

##### `storeString(String)` (`jdk.jfr.internal.StringPool`)

| Change |       Delta |             % |           Size | Samples | Caller              | Location                      |
| -----: | ----------: | ------------: | -------------: | ------: | ------------------- | ----------------------------- |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `addString(String)` | `jdk.jfr.internal.StringPool` |

##### `addString(String)` (`jdk.jfr.internal.StringPool`)

| Change |       Delta |             % |           Size | Samples | Caller              | Location                             |
| -----: | ----------: | ------------: | -------------: | ------: | ------------------- | ------------------------------------ |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `putString(String)` | `jdk.jfr.internal.event.EventWriter` |

##### `putString(String)` (`jdk.jfr.internal.event.EventWriter`)

| Change |       Delta |             % |           Size | Samples | Caller                                                                            | Location                              |
| -----: | ----------: | ------------: | -------------: | ------: | --------------------------------------------------------------------------------- | ------------------------------------- |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `commit(long, long, long, String, String, boolean, long, long, long, long, long)` | `jdk.jfr.events.ActiveRecordingEvent` |

##### `commit(long, long, long, String, String, boolean, long, long, long, long, long)` (`jdk.jfr.events.ActiveRecordingEvent`)

| Change |       Delta |             % |           Size | Samples | Caller              | Location                            |
| -----: | ----------: | ------------: | -------------: | ------: | ------------------- | ----------------------------------- |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `writeMetaEvents()` | `jdk.jfr.internal.PlatformRecorder` |

##### `writeMetaEvents()` (`jdk.jfr.internal.PlatformRecorder`)

| Change |       Delta |             % |           Size | Samples | Caller                     | Location                            |
| -----: | ----------: | ------------: | -------------: | ------: | -------------------------- | ----------------------------------- |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `start(PlatformRecording)` | `jdk.jfr.internal.PlatformRecorder` |

##### `start(PlatformRecording)` (`jdk.jfr.internal.PlatformRecorder`)

| Change |       Delta |             % |           Size | Samples | Caller    | Location                             |
| -----: | ----------: | ------------: | -------------: | ------: | --------- | ------------------------------------ |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `start()` | `jdk.jfr.internal.PlatformRecording` |

##### `start()` (`jdk.jfr.internal.PlatformRecording`)

| Change |       Delta |             % |           Size | Samples | Caller    | Location            |
| -----: | ----------: | ------------: | -------------: | ------: | --------- | ------------------- |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `start()` | `jdk.jfr.Recording` |

##### `start()` (`jdk.jfr.Recording`)

| Change |       Delta |             % |           Size | Samples | Caller                    | Location                          |
| -----: | ----------: | ------------: | -------------: | ------: | ------------------------- | --------------------------------- |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `execute(ArgumentParser)` | `jdk.jfr.internal.dcmd.DCmdStart` |

##### `execute(ArgumentParser)` (`jdk.jfr.internal.dcmd.DCmdStart`)

| Change |       Delta |             % |           Size | Samples | Caller                          | Location                             |
| -----: | ----------: | ------------: | -------------: | ------: | ------------------------------- | ------------------------------------ |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `execute(String, String, char)` | `jdk.jfr.internal.dcmd.AbstractDCmd` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change |        Delta |             % |                Size | Samples | Caller                        | Location            |
| -----: | -----------: | ------------: | ------------------: | ------: | ----------------------------- | ------------------- |
| +28.6% |  +15.957 MiB | 98.0% → 98.7% | 55.9 MiB → 71.8 MiB |  14 → 7 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |
| -17.2% | -199.312 KiB |   2.0% → 1.3% |  1.13 MiB → 957 KiB |       3 | `put(Object, Object)`         | `java.util.HashMap` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size | Samples | Caller          | Location                                                                              |
| -----: | ----------: | -----: | ----------------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| +11.4% | +20.468 MiB | 100.0% | 180 MiB → 200 MiB |  14 → 9 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0`)

| Change |       Delta |      % |              Size | Samples | Caller                              | Location            |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------------------------- | ------------------- |
| +11.4% | +20.468 MiB | 100.0% | 180 MiB → 200 MiB |  14 → 9 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |      Delta |             % |           Size | Samples | Caller                           | Location                                  |
| -----: | ---------: | ------------: | -------------: | ------: | -------------------------------- | ----------------------------------------- |
|    new | +7.482 MiB | 0.0% → 100.0% | 0 B → 7.48 MiB |  0 → 19 | `setUpBeforeAll$$anonfun$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `setUpBeforeAll$$anonfun$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |      Delta |             % |           Size | Samples | Caller          | Location                                                             |
| -----: | ---------: | ------------: | -------------: | ------: | --------------- | -------------------------------------------------------------------- |
|    new | +7.482 MiB | 0.0% → 100.0% | 0 B → 7.48 MiB |  0 → 19 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011a2908` |

##### `lambda$toCsvRows$2(String[], Function, String)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change |      Delta |             % |           Size | Samples | Caller          | Location                                                                                      |
| -----: | ---------: | ------------: | -------------: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
|    new | +7.482 MiB | 0.0% → 100.0% | 0 B → 7.48 MiB |  0 → 19 | `apply(Object)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x000000700119b5c8` |

##### `apply(Object)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x000000700119b5c8`)

| Change |      Delta |             % |           Size | Samples | Caller           | Location                                 |
| -----: | ---------: | ------------: | -------------: | ------: | ---------------- | ---------------------------------------- |
|    new | +7.482 MiB | 0.0% → 100.0% | 0 B → 7.48 MiB |  0 → 19 | `accept(Object)` | `java.util.stream.ReferencePipeline$3$1` |

##### `toCsvRows(Function)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change |      Delta |             % |           Size | Samples | Caller                             | Location                                  |
| -----: | ---------: | ------------: | -------------: | ------: | ---------------------------------- | ----------------------------------------- |
|    new | +7.482 MiB | 0.0% → 100.0% | 0 B → 7.48 MiB |  0 → 19 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011a2908`)

|  Change |        Delta |             % |           Size | Samples | Caller                                           | Location                                                           |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------ |
|     new |   +7.482 MiB | 0.0% → 100.0% | 0 B → 7.48 MiB |  0 → 19 | `lambda$toCsvRows$2(String[], Function, String)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
| removed | -864.468 KiB | 100.0% → 0.0% |  864 KiB → 0 B |   1 → 0 | `map(Function1)`                                 | `scala.collection.immutable.Range`                                 |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |      Delta |      % |                Size |       Samples | Caller                 | Location                            |
| -----: | ---------: | -----: | ------------------: | ------------: | ---------------------- | ----------------------------------- |
|  -5.3% | -1.418 GiB | 100.0% | 26.6 GiB → 25.2 GiB | 2,755 → 1,535 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |        Delta |             % |                Size |     Samples | Caller               | Location              |
| -----: | -----------: | ------------: | ------------------: | ----------: | -------------------- | --------------------- |
|  -7.0% | -992.231 MiB | 74.8% → 75.2% | 13.8 GiB → 12.8 GiB | 1,417 → 769 | `addAll(Collection)` | `java.util.ArrayList` |
|  -9.0% | -428.739 MiB | 25.2% → 24.8% | 4.66 GiB → 4.24 GiB |   524 → 301 | `grow()`             | `java.util.ArrayList` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |      Delta |      % |                Size |       Samples | Caller   | Location                            |
| -----: | ---------: | -----: | ------------------: | ------------: | -------- | ----------------------------------- |
|  -4.7% | -1.273 GiB | 100.0% | 26.8 GiB → 25.6 GiB | 2,785 → 1,554 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |      Delta |      % |                Size |       Samples | Caller      | Location                                               |
| -----: | ---------: | -----: | ------------------: | ------------: | ----------- | ------------------------------------------------------ |
|  -4.7% | -1.273 GiB | 100.0% | 26.8 GiB → 25.6 GiB | 2,785 → 1,554 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change |        Delta |      % |              Size |       Samples | Caller                       | Location                                    |
| -----: | -----------: | -----: | ----------------: | ------------: | ---------------------------- | ------------------------------------------- |
|  -3.3% | -773.104 MiB | 100.0% | 22.7 GiB → 22 GiB | 2,336 → 1,298 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |                Size |   Samples | Caller              | Location                                                   |
| -----: | -----------: | -----: | ------------------: | --------: | ------------------- | ---------------------------------------------------------- |
|  -9.0% | -579.558 MiB | 100.0% | 6.29 GiB → 5.72 GiB | 702 → 396 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -9.0% | -579.558 MiB | 100.0% | 6.29 GiB → 5.72 GiB | 702 → 396 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |       Samples | Caller                                                    | Location                                      |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  -5.3% |   -1.418 GiB | 70.4% → 67.6% | 26.6 GiB → 25.2 GiB | 2,755 → 1,535 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -1.5% | -570.733 MiB |        100.0% | 37.8 GiB → 37.2 GiB | 3,884 → 2,191 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +3.3% | +283.367 MiB | 22.1% → 23.2% | 8.35 GiB → 8.63 GiB |     503 → 302 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  +5.4% | +176.793 MiB |   8.5% → 9.1% | 3.21 GiB → 3.39 GiB |     408 → 257 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |                Size |       Samples | Caller                                   | Location                            |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------------------------------------- | ----------------------------------- |
|  -1.5% | -570.733 MiB | 100.0% | 37.8 GiB → 37.2 GiB | 3,884 → 2,191 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |       Samples | Caller                              | Location                            |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------------------------- | ----------------------------------- |
|  -1.5% | -570.733 MiB | 100.0% | 37.8 GiB → 37.2 GiB | 3,884 → 2,191 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |       Samples | Caller  | Location                                    |
| -----: | -----------: | -----: | ------------------: | ------------: | ------- | ------------------------------------------- |
|  -1.5% | -570.733 MiB | 100.0% | 37.8 GiB → 37.2 GiB | 3,884 → 2,191 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |        Delta |      % |                Size |       Samples | Caller   | Location                             |
| -----: | -----------: | -----: | ------------------: | ------------: | -------- | ------------------------------------ |
|  -1.4% | -559.767 MiB | 100.0% | 37.8 GiB → 37.2 GiB | 3,883 → 2,191 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |        Delta |      % |                Size |       Samples | Caller     | Location                            |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------- | ----------------------------------- |
|  -1.4% | -559.767 MiB | 100.0% | 37.8 GiB → 37.2 GiB | 3,883 → 2,191 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |                Size |   Samples | Caller              | Location                                                   |
| -----: | -----------: | -----: | ------------------: | --------: | ------------------- | ---------------------------------------------------------- |
|  -8.8% | -453.249 MiB | 100.0% | 5.02 GiB → 4.57 GiB | 562 → 319 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |             % |                Size |       Samples | Caller      | Location              |
| -----: | -----------: | ------------: | ------------------: | ------------: | ----------- | --------------------- |
|  -7.1% |   -1.284 GiB | 52.0% → 48.9% | 18.1 GiB → 16.8 GiB | 1,912 → 1,059 | `grow(int)` | `java.util.ArrayList` |
|  +5.0% | +863.127 MiB | 48.0% → 51.1% | 16.7 GiB → 17.6 GiB |   1,647 → 966 | `toArray()` | `java.util.ArrayList` |

##### `grow()` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Caller                       | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | ---------------------------- | --------------------- |
|  -9.0% | -428.739 MiB | 100.0% | 4.66 GiB → 4.24 GiB | 524 → 301 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Caller        | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | ------------- | --------------------- |
|  -9.0% | -428.739 MiB | 100.0% | 4.66 GiB → 4.24 GiB | 524 → 301 | `add(Object)` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change |        Delta |            % |                Size |   Samples | Caller                                                           | Location                                                   |
| -----: | -----------: | -----------: | ------------------: | --------: | ---------------------------------------------------------------- | ---------------------------------------------------------- |
|  -9.0% | -430.411 MiB |       100.0% | 4.66 GiB → 4.24 GiB | 524 → 298 | `collectClusters(int[])`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +1.29 MiB | 0.0% → <0.1% |      0 B → 1.29 MiB |     0 → 2 | `accept(Object, Object)`                                         | `java.util.stream.Collectors$$Lambda.0x00000070010c40c8`   |
|    new | +390.734 KiB | 0.0% → <0.1% |       0 B → 391 KiB |     0 → 1 | `appendInternal(DateTimeFormatterBuilder$DateTimePrinterParser)` | `java.time.format.DateTimeFormatterBuilder`                |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |        Delta |            % |                Size |       Samples | Caller                     | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | ------------: | -------------------------- | ---------------------------------------------------------- |
|   -0.7% | -227.376 MiB |       100.0% | 30.8 GiB → 30.6 GiB | 3,104 → 1,757 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |   -4.615 MiB | <0.1% → 0.0% |      4.62 MiB → 0 B |         1 → 0 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |                Size |       Samples | Caller                           | Location                                                   |
| -----: | -----------: | -----: | ------------------: | ------------: | -------------------------------- | ---------------------------------------------------------- |
|  -0.7% | -227.376 MiB | 100.0% | 30.8 GiB → 30.6 GiB | 3,104 → 1,757 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change |        Delta |      % |                Size |       Samples | Caller                              | Location                                    |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------------------------- | ------------------------------------------- |
|  -0.5% | -172.016 MiB | 100.0% | 30.6 GiB → 30.4 GiB | 3,076 → 1,741 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change |        Delta |      % |                Size |       Samples | Caller            | Location                                    |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------- | ------------------------------------------- |
|  -0.5% | -172.016 MiB | 100.0% | 30.6 GiB → 30.4 GiB | 3,076 → 1,741 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `valueOf(double)` (`java.lang.Double`)

|  Change |        Delta |              % |               Size | Samples | Caller                                           | Location                                                     |
| ------: | -----------: | -------------: | -----------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------ |
|  -86.4% | -123.185 MiB | 99.3% → 100.0% | 143 MiB → 19.4 MiB | 17 → 33 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                  |
| removed |   -1.041 MiB |    0.7% → 0.0% |     1.04 MiB → 0 B |   1 → 0 | `apply(double)`                                  | `java.util.stream.DoublePipeline$$Lambda.0x000000a0010d4c10` |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

| Change |        Delta |      % |               Size |   Samples | Caller                          | Location                                       |
| -----: | -----------: | -----: | -----------------: | --------: | ------------------------------- | ---------------------------------------------- |
| -67.1% | -121.891 MiB | 100.0% | 182 MiB → 59.9 MiB | 101 → 100 | `forEachRemaining(IntConsumer)` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

| Change |        Delta |      % |               Size |   Samples | Caller                       | Location                      |
| -----: | -----------: | -----: | -----------------: | --------: | ---------------------------- | ----------------------------- |
| -67.1% | -121.891 MiB | 100.0% | 182 MiB → 59.9 MiB | 101 → 100 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |                Size |       Samples | Caller      | Location                                               |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------- | ------------------------------------------------------ |
|  -0.7% | -227.376 MiB | 100.0% | 30.8 GiB → 30.6 GiB | 3,104 → 1,757 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |             % |          Size | Samples | Caller              | Location                                                               |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| removed | -190.784 MiB | 100.0% → 0.0% | 191 MiB → 0 B | 112 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a001198798` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |                Size |       Samples | Caller                   | Location                                                               |
| -----: | -----------: | -----: | ------------------: | ------------: | ------------------------ | ---------------------------------------------------------------------- |
|  -0.5% | -172.016 MiB | 100.0% | 30.6 GiB → 30.4 GiB | 3,076 → 1,741 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`)

| Change |        Delta |      % |                Size |       Samples | Caller                | Location            |
| -----: | -----------: | -----: | ------------------: | ------------: | --------------------- | ------------------- |
|  -0.5% | -172.016 MiB | 100.0% | 30.6 GiB → 30.4 GiB | 3,076 → 1,741 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |                Size |       Samples | Caller                  | Location                                                               |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------------- | ---------------------------------------------------------------------- |
|  -0.5% | -167.401 MiB | 100.0% | 30.6 GiB → 30.4 GiB | 3,075 → 1,741 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`)

| Change |        Delta |      % |                Size |       Samples | Caller                              | Location            |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------------------------- | ------------------- |
|  -0.5% | -167.401 MiB | 100.0% | 30.6 GiB → 30.4 GiB | 3,075 → 1,741 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |                Size |  Samples | Caller              | Location                                                   |
| -----: | -----------: | -----: | ------------------: | -------: | ------------------- | ---------------------------------------------------------- |
|  -9.7% | -126.309 MiB | 100.0% | 1.27 GiB → 1.14 GiB | 140 → 77 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |               Size | Samples | Caller       | Location                                            |
| -----: | -----------: | -----: | -----------------: | ------: | ------------ | --------------------------------------------------- |
| -86.4% | -123.185 MiB | 100.0% | 143 MiB → 19.4 MiB | 17 → 33 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |               Size |  Samples | Caller       | Location                                            |
| -----: | -----------: | -----: | -----------------: | -------: | ------------ | --------------------------------------------------- |
| -67.8% | -123.181 MiB | 100.0% | 182 MiB → 58.6 MiB | 101 → 98 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`)

| Change |        Delta |           % |                Size |  Samples | Caller                      | Location                           |
| -----: | -----------: | ----------: | ------------------: | -------: | --------------------------- | ---------------------------------- |
| -67.8% | -123.181 MiB |      100.0% |  182 MiB → 58.6 MiB | 101 → 98 | `accept(int)`               | `java.util.stream.IntPipeline$1$1` |
| +49.0% |   +1.286 MiB | 1.4% → 6.7% | 2.63 MiB → 3.91 MiB |    7 → 6 | `<init>(long, IntFunction)` | `java.util.stream.Nodes$ArrayNode` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|  Change |        Delta |             % |           Size | Samples | Caller                                                                                                                 | Location                                    |
| ------: | -----------: | ------------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed | -190.391 MiB | 100.0% → 0.0% |  190 MiB → 0 B | 111 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
|     new |  +68.136 MiB | 0.0% → 100.0% | 0 B → 68.1 MiB | 0 → 121 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |               Size |   Samples | Caller                             | Location                                  |
| -----: | -----------: | -----: | -----------------: | --------: | ---------------------------------- | ----------------------------------------- |
| -67.1% | -121.891 MiB | 100.0% | 182 MiB → 59.9 MiB | 101 → 100 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |      % |               Size |   Samples | Caller           | Location                                   |
| -----: | -----------: | -----: | -----------------: | --------: | ---------------- | ------------------------------------------ |
| -58.9% | -120.889 MiB | 100.0% | 205 MiB → 84.4 MiB | 151 → 163 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`)

| Change |        Delta |      % |               Size |   Samples | Caller          | Location                             |
| -----: | -----------: | -----: | -----------------: | --------: | --------------- | ------------------------------------ |
| -63.0% | -120.165 MiB | 100.0% | 191 MiB → 70.6 MiB | 112 → 128 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |      % |               Size |   Samples | Caller           | Location                                    |
| -----: | -----------: | -----: | -----------------: | --------: | ---------------- | ------------------------------------------- |
| -63.0% | -120.165 MiB | 100.0% | 191 MiB → 70.6 MiB | 112 → 128 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `toArray()` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |     Samples | Callee                  | Location           |
| -----: | -----------: | -----: | ------------------: | ----------: | ----------------------- | ------------------ |
|  +5.0% | +863.127 MiB | 100.0% | 16.7 GiB → 17.6 GiB | 1,647 → 966 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee      | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | ----------- | --------------------- |
|  +8.1% | +643.999 MiB | 100.0% | 7.76 GiB → 8.39 GiB | 728 → 437 | `toArray()` | `java.util.ArrayList` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |      % |                Size |   Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------: | ---------- | ----------------------------------- |
|  +3.3% | +283.367 MiB | 100.0% | 8.35 GiB → 8.63 GiB | 503 → 302 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |   Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------: | ---------- | ----------------------------------- |
|  +5.4% | +176.793 MiB | 100.0% | 3.21 GiB → 3.39 GiB | 408 → 257 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |              % |                Size |   Samples | Callee     | Location                            |
| -----: | -----------: | -------------: | ------------------: | --------: | ---------- | ----------------------------------- |
|  +1.7% | +145.525 MiB | 99.9% → 100.0% | 8.32 GiB → 8.47 GiB | 489 → 293 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`)

| Change |        Delta |      % |                Size |   Samples | Callee                         | Location                                    |
| -----: | -----------: | -----: | ------------------: | --------: | ------------------------------ | ------------------------------------------- |
|  +1.6% | +134.558 MiB | 100.0% | 8.33 GiB → 8.47 GiB | 490 → 293 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |        Delta |      % |                Size |   Samples | Callee   | Location                                                               |
| -----: | -----------: | -----: | ------------------: | --------: | -------- | ---------------------------------------------------------------------- |
|  +1.6% | +134.558 MiB | 100.0% | 8.33 GiB → 8.47 GiB | 490 → 293 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |        Delta |      % |               Size | Samples | Callee     | Location                            |
| ------: | -----------: | -----: | -----------------: | ------: | ---------- | ----------------------------------- |
| +342.5% | +132.493 MiB | 100.0% | 38.7 MiB → 171 MiB | 15 → 10 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |        Delta |             % |                 Size | Samples | Callee            | Location                                               |
| ------: | -----------: | ------------: | -------------------: | ------: | ----------------- | ------------------------------------------------------ |
| +342.5% | +132.493 MiB | 75.3% → 99.4% |   38.7 MiB → 171 MiB | 15 → 10 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -92.3% |  -11.703 MiB |  24.7% → 0.6% | 12.7 MiB → 1,000 KiB |   4 → 1 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |        Delta |      % |               Size | Samples | Callee                     | Location                                               |
| ------: | -----------: | -----: | -----------------: | ------: | -------------------------- | ------------------------------------------------------ |
| +235.2% | +120.789 MiB | 100.0% | 51.4 MiB → 172 MiB | 19 → 11 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +235.2% | +120.789 MiB | 100.0% | 51.4 MiB → 172 MiB | 19 → 11 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |       Delta |            % |           Size | Samples | Callee                                                                                       | Location                                  |
| -----: | ----------: | -----------: | -------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new | +68.136 MiB | 0.0% → 96.5% | 0 B → 68.1 MiB | 0 → 121 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |  +2.482 MiB |  0.0% → 3.5% | 0 B → 2.48 MiB |   0 → 7 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|   Change |       Delta |      % |                Size | Samples | Callee              | Location                                                  |
| -------: | ----------: | -----: | ------------------: | ------: | ------------------- | --------------------------------------------------------- |
| +1077.5% | +57.343 MiB | 100.0% | 5.32 MiB → 62.7 MiB |   5 → 3 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| +1077.5% | +57.343 MiB | 100.0% | 5.32 MiB → 62.7 MiB |   5 → 3 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |      Delta |      % |                Size | Samples | Callee                    | Location                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------- | --------------------------------------------------------- |
| +66.0% | +37.06 MiB | 100.0% | 56.2 MiB → 93.3 MiB |  11 → 5 | `add(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |      Delta |      % |                Size | Samples | Callee                               | Location                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| +66.0% | +37.06 MiB | 100.0% | 56.2 MiB → 93.3 MiB |  11 → 5 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

| Change |       Delta |             % |           Size | Samples | Callee        | Location                                 |
| -----: | ----------: | ------------: | -------------: | ------: | ------------- | ---------------------------------------- |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `initTable()` | `java.util.concurrent.ConcurrentHashMap` |

##### `put(Object, Object)` (`java.util.concurrent.ConcurrentHashMap`)

| Change |       Delta |             % |           Size | Samples | Callee                            | Location                                 |
| -----: | ----------: | ------------: | -------------: | ------: | --------------------------------- | ---------------------------------------- |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `storeString(String)` (`jdk.jfr.internal.StringPool`)

| Change |       Delta |             % |           Size | Samples | Callee                | Location                                 |
| -----: | ----------: | ------------: | -------------: | ------: | --------------------- | ---------------------------------------- |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `put(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `addString(String)` (`jdk.jfr.internal.StringPool`)

| Change |       Delta |             % |           Size | Samples | Callee                | Location                      |
| -----: | ----------: | ------------: | -------------: | ------: | --------------------- | ----------------------------- |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `storeString(String)` | `jdk.jfr.internal.StringPool` |

##### `putString(String)` (`jdk.jfr.internal.event.EventWriter`)

| Change |       Delta |             % |           Size | Samples | Callee              | Location                      |
| -----: | ----------: | ------------: | -------------: | ------: | ------------------- | ----------------------------- |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `addString(String)` | `jdk.jfr.internal.StringPool` |

##### `commit(long, long, long, String, String, boolean, long, long, long, long, long)` (`jdk.jfr.events.ActiveRecordingEvent`)

| Change |       Delta |             % |           Size | Samples | Callee              | Location                             |
| -----: | ----------: | ------------: | -------------: | ------: | ------------------- | ------------------------------------ |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `putString(String)` | `jdk.jfr.internal.event.EventWriter` |

##### `writeMetaEvents()` (`jdk.jfr.internal.PlatformRecorder`)

| Change |       Delta |             % |           Size | Samples | Callee                                                                            | Location                              |
| -----: | ----------: | ------------: | -------------: | ------: | --------------------------------------------------------------------------------- | ------------------------------------- |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `commit(long, long, long, String, String, boolean, long, long, long, long, long)` | `jdk.jfr.events.ActiveRecordingEvent` |

##### `start(PlatformRecording)` (`jdk.jfr.internal.PlatformRecorder`)

| Change |       Delta |             % |           Size | Samples | Callee              | Location                            |
| -----: | ----------: | ------------: | -------------: | ------: | ------------------- | ----------------------------------- |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `writeMetaEvents()` | `jdk.jfr.internal.PlatformRecorder` |

##### `start()` (`jdk.jfr.internal.PlatformRecording`)

| Change |       Delta |             % |           Size | Samples | Callee                     | Location                            |
| -----: | ----------: | ------------: | -------------: | ------: | -------------------------- | ----------------------------------- |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `start(PlatformRecording)` | `jdk.jfr.internal.PlatformRecorder` |

##### `start()` (`jdk.jfr.Recording`)

| Change |       Delta |             % |           Size | Samples | Callee    | Location                             |
| -----: | ----------: | ------------: | -------------: | ------: | --------- | ------------------------------------ |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `start()` | `jdk.jfr.internal.PlatformRecording` |

##### `execute(ArgumentParser)` (`jdk.jfr.internal.dcmd.DCmdStart`)

| Change |       Delta |             % |           Size | Samples | Callee    | Location            |
| -----: | ----------: | ------------: | -------------: | ------: | --------- | ------------------- |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `start()` | `jdk.jfr.Recording` |

##### `execute(String, String, char)` (`jdk.jfr.internal.dcmd.AbstractDCmd`)

| Change |       Delta |             % |           Size | Samples | Callee                    | Location                          |
| -----: | ----------: | ------------: | -------------: | ------: | ------------------------- | --------------------------------- |
|    new | +20.849 MiB | 0.0% → 100.0% | 0 B → 20.8 MiB |   0 → 1 | `execute(ArgumentParser)` | `jdk.jfr.internal.dcmd.DCmdStart` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change |        Delta |             % |                Size | Samples | Callee                                       | Location                  |
| ------: | -----------: | ------------: | ------------------: | ------: | -------------------------------------------- | ------------------------- |
| +966.5% |  +55.527 MiB | 10.1% → 84.2% | 5.75 MiB → 61.3 MiB |   3 → 2 | `resize()`                                   | `java.util.HashMap`       |
|  -77.4% |  -39.386 MiB | 89.3% → 15.8% | 50.9 MiB → 11.5 MiB |  13 → 8 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`       |
| removed | -386.281 KiB |   0.7% → 0.0% |       386 KiB → 0 B |   1 → 0 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.LinkedHashMap` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000700121ece0`)

| Change |       Delta |      % |              Size | Samples | Callee                               | Location                                                   |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
| +11.4% | +20.468 MiB | 100.0% | 180 MiB → 200 MiB |  14 → 9 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |      Delta |            % |           Size | Samples | Callee              | Location                            |
| -----: | ---------: | -----------: | -------------: | ------: | ------------------- | ----------------------------------- |
|    new |  +4.49 MiB | 0.0% → 60.0% | 0 B → 4.49 MiB |  0 → 12 | `<clinit>()`        | `scala.Predef$`                     |
|    new | +1.285 MiB | 0.0% → 17.2% | 0 B → 1.29 MiB |   0 → 3 | `map(Function1)`    | `scala.collection.immutable.Range`  |
|    new | +1.178 MiB | 0.0% → 15.8% | 0 B → 1.18 MiB |   0 → 3 | `loadClass(String)` | `java.lang.ClassLoader`             |
|    new | +540.5 KiB |  0.0% → 7.1% |  0 B → 541 KiB |   0 → 1 | `toArray(ClassTag)` | `scala.collection.AbstractIterable` |

##### `setUpBeforeAll$$anonfun$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |      Delta |             % |           Size | Samples | Callee              | Location                                  |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------- | ----------------------------------------- |
|    new | +7.482 MiB | 0.0% → 100.0% | 0 B → 7.48 MiB |  0 → 19 | `rowToArray$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `lambda$toCsvRows$2(String[], Function, String)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change |      Delta |             % |           Size | Samples | Callee          | Location                                                             |
| -----: | ---------: | ------------: | -------------: | ------: | --------------- | -------------------------------------------------------------------- |
|    new | +7.482 MiB | 0.0% → 100.0% | 0 B → 7.48 MiB |  0 → 19 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011a2908` |

##### `apply(Object)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x000000700119b5c8`)

| Change |      Delta |             % |           Size | Samples | Callee                                           | Location                                                           |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------ |
|    new | +7.482 MiB | 0.0% → 100.0% | 0 B → 7.48 MiB |  0 → 19 | `lambda$toCsvRows$2(String[], Function, String)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `toCsvRows(Function)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change |      Delta |             % |           Size | Samples | Callee               | Location                             |
| -----: | ---------: | ------------: | -------------: | ------: | -------------------- | ------------------------------------ |
|    new | +7.482 MiB | 0.0% → 100.0% | 0 B → 7.48 MiB |  0 → 19 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011a2908`)

|  Change |        Delta |             % |           Size | Samples | Callee                           | Location                                  |
| ------: | -----------: | ------------: | -------------: | ------: | -------------------------------- | ----------------------------------------- |
|     new |   +7.482 MiB | 0.0% → 100.0% | 0 B → 7.48 MiB |  0 → 19 | `setUpBeforeAll$$anonfun$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |
| removed | -864.468 KiB | 100.0% → 0.0% |  864 KiB → 0 B |   1 → 0 | `$anonfun$adapted$1(Object)`     | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |      Delta |      % |                Size |       Samples | Callee     | Location                            |
| -----: | ---------: | -----: | ------------------: | ------------: | ---------- | ----------------------------------- |
|  -5.3% | -1.418 GiB | 100.0% | 26.6 GiB → 25.2 GiB | 2,755 → 1,535 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |      Delta |             % |                Size |       Samples | Callee                  | Location           |
| -----: | ---------: | ------------: | ------------------: | ------------: | ----------------------- | ------------------ |
|  -7.1% | -1.284 GiB | 98.1% → 98.5% | 18.1 GiB → 16.8 GiB | 1,912 → 1,059 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |       Samples | Callee                                                    | Location                                      |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  -5.3% |   -1.418 GiB | 99.0% → 98.4% | 26.6 GiB → 25.2 GiB | 2,755 → 1,535 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +5.4% | +176.793 MiB | 12.0% → 13.2% | 3.21 GiB → 3.39 GiB |     408 → 257 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |      Delta |      % |                Size |       Samples | Callee                 | Location                            |
| -----: | ---------: | -----: | ------------------: | ------------: | ---------------------- | ----------------------------------- |
|  -4.7% | -1.273 GiB | 100.0% | 26.8 GiB → 25.6 GiB | 2,785 → 1,554 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change |        Delta |             % |                Size |     Samples | Callee      | Location              |
| -----: | -----------: | ------------: | ------------------: | ----------: | ----------- | --------------------- |
|  -7.0% | -992.231 MiB | 60.7% → 58.3% | 13.8 GiB → 12.8 GiB | 1,417 → 769 | `grow(int)` | `java.util.ArrayList` |
|  +2.4% | +219.127 MiB | 39.3% → 41.7% | 8.95 GiB → 9.16 GiB |   919 → 529 | `toArray()` | `java.util.ArrayList` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |             % |                Size |   Samples | Callee                   | Location                                                   |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------ | ---------------------------------------------------------- |
|  -9.0% | -579.558 MiB |        100.0% | 6.29 GiB → 5.72 GiB | 702 → 396 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -8.8% | -453.249 MiB | 79.8% → 80.0% | 5.02 GiB → 4.57 GiB | 562 → 319 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -9.7% | -126.309 MiB | 20.2% → 20.0% | 1.27 GiB → 1.14 GiB |  140 → 77 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |       Samples | Callee   | Location                                            |
| -----: | -----------: | ------------: | ------------------: | ------------: | -------- | --------------------------------------------------- |
|  -1.4% | -559.767 MiB |        100.0% | 37.8 GiB → 37.2 GiB | 3,883 → 2,191 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|  +1.6% | +134.558 MiB | 22.1% → 22.8% | 8.33 GiB → 8.47 GiB |     490 → 293 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |                Size |       Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------- | ----------------------------------- |
|  -1.5% | -570.733 MiB | 100.0% | 37.8 GiB → 37.2 GiB | 3,884 → 2,191 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |       Samples | Callee                                               | Location                                      |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------------------------------------------------- | --------------------------------------------- |
|  -1.5% | -570.733 MiB | 100.0% | 37.8 GiB → 37.2 GiB | 3,884 → 2,191 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |       Samples | Callee                                   | Location                            |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------------------------------------- | ----------------------------------- |
|  -1.5% | -570.733 MiB | 100.0% | 37.8 GiB → 37.2 GiB | 3,884 → 2,191 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |        Delta |      % |                Size |       Samples | Callee                              | Location                            |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------------------------- | ----------------------------------- |
|  -1.5% | -570.733 MiB | 100.0% | 37.8 GiB → 37.2 GiB | 3,884 → 2,191 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change |        Delta |             % |                Size |       Samples | Callee                           | Location                                                   |
| ------: | -----------: | ------------: | ------------------: | ------------: | -------------------------------- | ---------------------------------------------------------- |
|   -4.7% |   -1.273 GiB | 71.1% → 68.7% | 26.8 GiB → 25.6 GiB | 2,785 → 1,554 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
|   -9.0% | -579.558 MiB | 16.6% → 15.4% | 6.29 GiB → 5.72 GiB |     702 → 396 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -0.7% | -227.376 MiB | 81.6% → 82.2% | 30.8 GiB → 30.6 GiB | 3,104 → 1,757 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +523.1% | +226.717 MiB |   0.1% → 0.7% |  43.3 MiB → 270 MiB |       12 → 15 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +235.2% | +120.789 MiB |   0.1% → 0.5% |  51.4 MiB → 172 MiB |       19 → 11 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |        Delta |      % |                Size |       Samples | Callee      | Location                                               |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------- | ------------------------------------------------------ |
|  -1.4% | -559.767 MiB | 100.0% | 37.8 GiB → 37.2 GiB | 3,883 → 2,191 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |             % |                Size |   Samples | Callee                              | Location              |
| -----: | -----------: | ------------: | ------------------: | --------: | ----------------------------------- | --------------------- |
|  -9.0% | -430.411 MiB | 92.8% → 92.6% | 4.66 GiB → 4.24 GiB | 524 → 298 | `add(Object)`                       | `java.util.ArrayList` |
|  +1.2% |   +3.875 MiB |   6.1% → 6.8% |   313 MiB → 317 MiB |   29 → 17 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |      Delta |     % |               Size | Samples | Callee                         | Location           |
| -----: | ---------: | ----: | -----------------: | ------: | ------------------------------ | ------------------ |
| -93.1% | -5.057 MiB | <0.1% | 5.43 MiB → 384 KiB |   8 → 1 | `copyOf(Object[], int, Class)` | `java.util.Arrays` |

##### `grow()` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee      | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | ----------- | --------------------- |
|  -9.0% | -428.739 MiB | 100.0% | 4.66 GiB → 4.24 GiB | 524 → 301 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee   | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | -------- | --------------------- |
|  -9.0% | -428.739 MiB | 100.0% | 4.66 GiB → 4.24 GiB | 524 → 301 | `grow()` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee                       | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | ---------------------------- | --------------------- |
|  -9.0% | -428.739 MiB | 100.0% | 4.66 GiB → 4.24 GiB | 524 → 301 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |             % |                Size |       Samples | Callee                | Location            |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------- | ------------------- |
|  -0.5% | -172.016 MiB | 99.2% → 99.3% | 30.6 GiB → 30.4 GiB | 3,076 → 1,741 | `forEach(BiConsumer)` | `java.util.HashMap` |
| -42.5% |  -55.139 MiB |   0.4% → 0.2% |  130 MiB → 74.6 MiB |        18 → 9 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |                Size |       Samples | Callee            | Location                                    |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------- | ------------------------------------------- |
|  -0.7% | -227.376 MiB | 100.0% | 30.8 GiB → 30.6 GiB | 3,104 → 1,757 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change |        Delta |            % |                Size |       Samples | Callee                                       | Location                                                               |
| ------: | -----------: | -----------: | ------------------: | ------------: | -------------------------------------------- | ---------------------------------------------------------------------- |
|   -0.5% | -167.401 MiB |       100.0% | 30.6 GiB → 30.4 GiB | 3,075 → 1,741 | `apply(Object, Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178` |
| removed |   -4.615 MiB | <0.1% → 0.0% |      4.62 MiB → 0 B |         1 → 0 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                                    |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change |        Delta |      % |                Size |       Samples | Callee                   | Location                                                               |
| -----: | -----------: | -----: | ------------------: | ------------: | ------------------------ | ---------------------------------------------------------------------- |
|  -0.5% | -172.016 MiB | 100.0% | 30.6 GiB → 30.4 GiB | 3,076 → 1,741 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30` |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

| Change |        Delta |              % |               Size |  Samples | Callee           | Location                                            |
| -----: | -----------: | -------------: | -----------------: | -------: | ---------------- | --------------------------------------------------- |
| -67.8% | -123.181 MiB | 100.0% → 97.8% | 182 MiB → 58.6 MiB | 101 → 98 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |
|    new |    +1.29 MiB |    0.0% → 2.2% |     0 B → 1.29 MiB |    0 → 2 | `accept(Object)` | `java.util.stream.ReduceOps$3ReducingSink`          |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

| Change |        Delta |      % |               Size |   Samples | Callee        | Location                           |
| -----: | -----------: | -----: | -----------------: | --------: | ------------- | ---------------------------------- |
| -67.1% | -121.891 MiB | 100.0% | 182 MiB → 59.9 MiB | 101 → 100 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |                Size |       Samples | Callee                     | Location                                                   |
| -----: | -----------: | -----: | ------------------: | ------------: | -------------------------- | ---------------------------------------------------------- |
|  -0.7% | -227.376 MiB | 100.0% | 30.8 GiB → 30.6 GiB | 3,104 → 1,757 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |            % |          Size | Samples | Callee                                                                                       | Location                                  |
| ------: | -----------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed | -190.391 MiB | 99.8% → 0.0% | 190 MiB → 0 B | 111 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed |  -402.25 KiB |  0.2% → 0.0% | 402 KiB → 0 B |   1 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |                Size |       Samples | Callee                              | Location            |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------------------------- | ------------------- |
|  -0.5% | -172.016 MiB | 100.0% | 30.6 GiB → 30.4 GiB | 3,076 → 1,741 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`)

| Change |        Delta |      % |                Size |       Samples | Callee                              | Location                                    |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------------------------- | ------------------------------------------- |
|  -0.5% | -172.016 MiB | 100.0% | 30.6 GiB → 30.4 GiB | 3,076 → 1,741 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |             % |                Size |       Samples | Callee               | Location              |
| -----: | -----------: | ------------: | ------------------: | ------------: | -------------------- | --------------------- |
|  -3.3% | -773.104 MiB | 74.4% → 72.3% |   22.7 GiB → 22 GiB | 2,336 → 1,298 | `addAll(Collection)` | `java.util.ArrayList` |
|  +8.1% | +643.999 MiB | 25.4% → 27.6% | 7.76 GiB → 8.39 GiB |     728 → 437 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`)

| Change |        Delta |      % |                Size |       Samples | Callee                       | Location                                    |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------------------------- | ------------------------------------------- |
|  -0.5% | -167.401 MiB | 100.0% | 30.6 GiB → 30.4 GiB | 3,075 → 1,741 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |               Size | Samples | Callee            | Location           |
| -----: | -----------: | -----: | -----------------: | ------: | ----------------- | ------------------ |
| -86.4% | -123.185 MiB | 100.0% | 143 MiB → 19.4 MiB | 17 → 33 | `valueOf(double)` | `java.lang.Double` |

##### `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |             % |                Size | Samples | Callee                                         | Location                                            |
| -----: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------- | --------------------------------------------------- |
| -79.2% | -119.393 MiB | 82.9% → 53.5% |  151 MiB → 31.3 MiB | 34 → 53 | `toArray(IntFunction)`                         | `java.util.stream.ReferencePipeline`                |
| -54.1% |  -11.566 MiB | 11.8% → 16.7% | 21.4 MiB → 9.81 MiB | 46 → 14 | `mapToObj(IntFunction)`                        | `java.util.stream.IntPipeline`                      |
| +78.8% |   +5.947 MiB |  4.2% → 23.0% | 7.55 MiB → 13.5 MiB | 18 → 23 | `range(int, int)`                              | `java.util.stream.IntStream`                        |
| +87.2% |    +1.83 MiB |   1.2% → 6.7% |  2.1 MiB → 3.93 MiB |   3 → 8 | `linkToTargetMethod(int, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001220800` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`)

| Change |        Delta |             % |                Size |  Samples | Callee                                           | Location                                    |
| -----: | -----------: | ------------: | ------------------: | -------: | ------------------------------------------------ | ------------------------------------------- |
| -86.4% | -123.185 MiB | 78.4% → 33.0% |  143 MiB → 19.4 MiB |  17 → 33 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |
| -67.8% | -123.181 MiB |        100.0% |  182 MiB → 58.6 MiB | 101 → 98 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |
| +49.0% |   +1.286 MiB |   1.4% → 6.7% | 2.63 MiB → 3.91 MiB |    7 → 6 | `lambda$generateData$4(int)`                     | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|  Change |        Delta |              % |               Size |   Samples | Callee                             | Location                                  |
| ------: | -----------: | -------------: | -----------------: | --------: | ---------------------------------- | ----------------------------------------- |
|  -62.5% | -113.622 MiB | 95.5% → 100.0% | 182 MiB → 68.1 MiB | 101 → 121 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |
| removed |   -8.632 MiB |    4.5% → 0.0% |     8.63 MiB → 0 B |    10 → 0 | `executeOperation(int)`            | `org.renaissance.harness.ExecutionDriver` |

##### `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |               Size |   Samples | Callee               | Location                             |
| -----: | -----------: | -----: | -----------------: | --------: | -------------------- | ------------------------------------ |
| -67.1% | -121.891 MiB | 100.0% | 182 MiB → 59.9 MiB | 101 → 100 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |             % |                Size |   Samples | Callee                                                                        | Location                                    |
| -----: | -----------: | ------------: | ------------------: | --------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| -63.0% | -120.165 MiB | 92.9% → 83.7% |  191 MiB → 70.6 MiB | 112 → 128 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
| -10.7% | -440.671 KiB |   2.0% → 4.2% | 4.01 MiB → 3.58 MiB |    11 → 9 | `<clinit>()`                                                                  | `scala.Predef$`                             |
| -14.9% | -429.492 KiB |   1.4% → 2.8% |  2.82 MiB → 2.4 MiB |     8 → 6 | `parse(String[])`                                                             | `org.renaissance.harness.ConfigParser`      |
|    new | +390.734 KiB |   0.0% → 0.5% |       0 B → 391 KiB |     0 → 1 | `createScratchDirectory(Path, String, boolean)`                               | `org.renaissance.core.DirUtils`             |
|    new | +387.703 KiB |   0.0% → 0.4% |       0 B → 388 KiB |     0 → 1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])`              | `java.lang.invoke.MethodHandleNatives`      |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`)

|  Change |        Delta |             % |           Size | Samples | Callee                                                                                                                 | Location                                    |
| ------: | -----------: | ------------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed | -190.784 MiB | 100.0% → 0.0% |  191 MiB → 0 B | 112 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
|     new |  +70.618 MiB | 0.0% → 100.0% | 0 B → 70.6 MiB | 0 → 128 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |      % |               Size |   Samples | Callee               | Location                          |
| -----: | -----------: | -----: | -----------------: | --------: | -------------------- | --------------------------------- |
| -63.0% | -120.165 MiB | 100.0% | 191 MiB → 70.6 MiB | 112 → 128 | `foreach(Function1)` | `scala.collection.immutable.List` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes allocated in their leaf frame.

Common call stack: `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|   Change |        Delta |            % |                Size |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------: | -----------: | -----------: | ------------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   +37.8% | +410.522 MiB |  2.8% → 3.9% | 1.06 GiB → 1.46 GiB |   68 → 33 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|   +22.4% | +391.662 MiB |  4.5% → 5.6% | 1.71 GiB → 2.09 GiB | 194 → 117 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|   +12.0% | +383.702 MiB |  8.2% → 9.4% |  3.13 GiB → 3.5 GiB | 358 → 208 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +4538.8% | +366.395 MiB | <0.1% → 1.0% |  8.07 MiB → 374 MiB |         3 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                 |
|   +15.6% | +361.901 MiB |  6.0% → 7.0% | 2.26 GiB → 2.62 GiB | 295 → 177 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|   +44.3% | +334.395 MiB |  1.9% → 2.8% |  755 MiB → 1.06 GiB |  106 → 64 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +349.7% |  +300.79 MiB |  0.2% → 1.0% |    86 MiB → 387 MiB |   18 → 21 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| +8797.9% |  +268.62 MiB | <0.1% → 0.7% |  3.05 MiB → 272 MiB |     1 → 3 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +3696.5% | +237.555 MiB | <0.1% → 0.6% |  6.43 MiB → 244 MiB |     2 → 5 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                   |
|  +878.5% | +226.145 MiB |  0.1% → 0.7% |  25.7 MiB → 252 MiB |         5 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|      new | +224.139 MiB |  0.0% → 0.6% |       0 B → 224 MiB |     0 → 1 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) |
|   +43.3% | +223.173 MiB |  1.3% → 1.9% |   515 MiB → 738 MiB |   46 → 28 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  +221.6% | +221.018 MiB |  0.3% → 0.8% |  99.7 MiB → 321 MiB |     8 → 4 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|   +67.3% | +219.234 MiB |  0.8% → 1.4% |   326 MiB → 545 MiB |   41 → 34 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|   +23.8% | +205.309 MiB |  2.2% → 2.8% |  863 MiB → 1.04 GiB |  137 → 75 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|      new | +203.363 MiB |  0.0% → 0.5% |       0 B → 203 MiB |     0 → 1 | `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|   +30.6% |  +200.21 MiB |  1.7% → 2.2% |   654 MiB → 854 MiB |   38 → 25 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  +117.1% | +193.402 MiB |  0.4% → 0.9% |   165 MiB → 359 MiB |   22 → 17 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +522.9% |  +170.94 MiB |  0.1% → 0.5% |  32.7 MiB → 204 MiB |     5 → 9 | `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| +2016.0% | +164.618 MiB | <0.1% → 0.5% |  8.17 MiB → 173 MiB |     6 → 5 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

### Improvements

Call stacks with the largest decrease in bytes allocated in their leaf frame.

|  Change |        Delta |            % |               Size |  Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------: | -----------: | -----------: | -----------------: | -------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -48.9% | -752.151 MiB |  3.9% → 2.1% |  1.5 GiB → 785 MiB | 104 → 53 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -35.0% | -524.087 MiB |  3.9% → 2.6% | 1.46 GiB → 975 MiB | 153 → 66 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -96.8% | -485.077 MiB | 1.3% → <0.1% | 501 MiB → 16.2 MiB |   29 → 5 | `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -93.9% | -398.932 MiB |  1.1% → 0.1% | 425 MiB → 26.1 MiB |   14 → 6 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -31.6% | -369.385 MiB |  3.0% → 2.1% | 1.14 GiB → 798 MiB |  79 → 34 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -55.6% | -320.448 MiB |  1.5% → 0.7% |  576 MiB → 256 MiB |  37 → 15 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -48.2% | -316.769 MiB |  1.7% → 0.9% |  657 MiB → 341 MiB |  24 → 13 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -26.8% | -248.386 MiB |  2.4% → 1.8% |  925 MiB → 677 MiB |  96 → 54 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -79.7% | -246.542 MiB |  0.8% → 0.2% | 309 MiB → 62.6 MiB |   25 → 7 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed | -242.831 MiB |  0.6% → 0.0% |      243 MiB → 0 B |    3 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                               |
|  -30.4% | -218.156 MiB |  1.8% → 1.3% |  719 MiB → 501 MiB |  85 → 46 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -41.8% | -214.668 MiB |  1.3% → 0.8% |  514 MiB → 299 MiB |  36 → 13 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed | -213.945 MiB |  0.5% → 0.0% |      214 MiB → 0 B |    1 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                         |
|  -49.9% | -199.791 MiB |  1.0% → 0.5% |  400 MiB → 200 MiB |  46 → 17 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                   |
|  -99.2% | -199.083 MiB | 0.5% → <0.1% | 201 MiB → 1.53 MiB |   14 → 2 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |  -191.32 MiB |  0.5% → 0.0% |      191 MiB → 0 B |    1 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                           |
|  -94.6% | -160.468 MiB | 0.4% → <0.1% | 170 MiB → 9.07 MiB |    5 → 2 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -97.6% |  -144.62 MiB | 0.4% → <0.1% |  148 MiB → 3.5 MiB |   11 → 2 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
| removed | -142.539 MiB |  0.4% → 0.0% |      143 MiB → 0 B |   17 → 0 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a001198798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -38.8% | -135.547 MiB |  0.9% → 0.6% |  350 MiB → 214 MiB |  51 → 20 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

# Retained heap profile diff

Retained 2.31 MiB → 2.81 MiB (+511.078 KiB, +21.6%) over 8 → 14 objects (296 KiB → 205 KiB per object).

| Category         |  Change |        Delta |            % |                Size | Objects |
| ---------------- | ------: | -----------: | -----------: | ------------------: | ------: |
| Standard library |  +21.6% | +511.117 KiB |       100.0% | 2.31 MiB → 2.81 MiB |  7 → 14 |
| Ours             | removed |        -40 B | <0.1% → 0.0% |          40 B → 0 B |   1 → 0 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

| Change |        Delta |             % |                Size | Objects | Function                      | Location                                 |
| -----: | -----------: | ------------: | ------------------: | ------: | ----------------------------- | ---------------------------------------- |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `initTable()`                 | `java.util.concurrent.ConcurrentHashMap` |
|  +9.3% |  +196.25 KiB | 89.2% → 80.2% | 2.06 MiB → 2.25 MiB |   1 → 3 | `copyOf(Object[], int)`       | `java.util.Arrays`                       |
| +23.1% |  +58.835 KiB | 10.8% → 10.9% |   255 KiB → 314 KiB |   1 → 2 | `initCEN(int, ZipCoder)`      | `java.util.zip.ZipFile$Source`           |
|    new |        +64 B |  0.0% → <0.1% |          0 B → 64 B |   0 → 1 | `newLinkedHashMap(int)`       | `java.util.LinkedHashMap`                |
| +50.0% |        +48 B |         <0.1% |        96 B → 144 B |   4 → 6 | `valueOf(double)`             | `java.lang.Double`                       |
|    new |        +16 B |  0.0% → <0.1% |          0 B → 16 B |   0 → 1 | `getClassLoadingLock(String)` | `java.lang.ClassLoader`                  |

#### Improvements

Functions with the largest decrease in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |  Delta |            % |        Size | Objects | Function                                                                        | Location                                    |
| ------: | -----: | -----------: | ----------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------- |
| removed | -112 B | <0.1% → 0.0% | 112 B → 0 B |   1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                     |
| removed |  -40 B | <0.1% → 0.0% |  40 B → 0 B |   1 → 0 | `lambda$generateData$4(int)`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### Standard library

|  Change |  Delta |            % |        Size | Objects | Function                                                                        | Location                |
| ------: | -----: | -----------: | ----------: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| removed | -112 B | <0.1% → 0.0% | 112 B → 0 B |   1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

| Change |        Delta |             % |          Size | Objects | Location                                      |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `java.util.concurrent.ConcurrentHashMap:2301` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |       Delta |      % |                Size | Objects | Location                |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------------- |
|  +9.3% | +196.25 KiB | 100.0% | 2.06 MiB → 2.25 MiB |   1 → 3 | `java.util.Arrays:3482` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |       Delta |      % |              Size | Objects | Location                            |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------------------------- |
| +23.1% | +58.835 KiB | 100.0% | 255 KiB → 314 KiB |   1 → 2 | `java.util.zip.ZipFile$Source:1733` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

| Change | Delta |             % |       Size | Objects | Location                       |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------ |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `java.util.LinkedHashMap:1078` |

##### `valueOf(double)` (`java.lang.Double`)

| Change | Delta |      % |         Size | Objects | Location               |
| -----: | ----: | -----: | -----------: | ------: | ---------------------- |
| +50.0% | +48 B | 100.0% | 96 B → 144 B |   4 → 6 | `java.lang.Double:773` |

##### `getClassLoadingLock(String)` (`java.lang.ClassLoader`)

| Change | Delta |             % |       Size | Objects | Location                    |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------- |
|    new | +16 B | 0.0% → 100.0% | 0 B → 16 B |   0 → 1 | `java.lang.ClassLoader:680` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % |       Size | Objects | Location                                       |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

| Change |        Delta |             % |          Size | Objects | Caller                            | Location                                 |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------- | ---------------------------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |       Delta |      % |                Size | Objects | Caller      | Location              |
| -----: | ----------: | -----: | ------------------: | ------: | ----------- | --------------------- |
|  +9.3% | +196.25 KiB | 100.0% | 2.06 MiB → 2.25 MiB |   1 → 3 | `grow(int)` | `java.util.ArrayList` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |       Delta |      % |              Size | Objects | Caller                                          | Location                       |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------------------------------------- | ------------------------------ |
| +23.1% | +58.835 KiB | 100.0% | 255 KiB → 314 KiB |   1 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

| Change | Delta |             % |       Size | Objects | Caller        | Location                   |
| -----: | ----: | ------------: | ---------: | ------: | ------------- | -------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `<init>(int)` | `java.util.jar.Attributes` |

##### `valueOf(double)` (`java.lang.Double`)

| Change | Delta |      % |         Size | Objects | Caller                                           | Location                                    |
| -----: | ----: | -----: | -----------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +50.0% | +48 B | 100.0% | 96 B → 144 B |   4 → 6 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `getClassLoadingLock(String)` (`java.lang.ClassLoader`)

| Change | Delta |             % |       Size | Objects | Caller                             | Location                                 |
| -----: | ----: | ------------: | ---------: | ------: | ---------------------------------- | ---------------------------------------- |
|    new | +16 B | 0.0% → 100.0% | 0 B → 16 B |   0 → 1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|  Change |  Delta |             % |        Size | Objects | Caller                                                    | Location                |
| ------: | -----: | ------------: | ----------: | ------: | --------------------------------------------------------- | ----------------------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % |       Size | Objects | Caller       | Location                                            |
| ------: | ----: | ------------: | ---------: | ------: | ------------ | --------------------------------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

### Total size

#### Regressions

Functions with the largest increase in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |        Delta |             % |                Size | Objects | Function                                                                                                               | Location                                                               |
| -----: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |    +2.31 MiB |  0.0% → 82.2% |      0 B → 2.31 MiB |   0 → 9 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `initTable()`                                                                                                          | `java.util.concurrent.ConcurrentHashMap`                               |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `putVal(Object, Object, boolean)`                                                                                      | `java.util.concurrent.ConcurrentHashMap`                               |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `put(Object, Object)`                                                                                                  | `java.util.concurrent.ConcurrentHashMap`                               |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `storeString(String)`                                                                                                  | `jdk.jfr.internal.StringPool`                                          |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `addString(String)`                                                                                                    | `jdk.jfr.internal.StringPool`                                          |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `putString(String)`                                                                                                    | `jdk.jfr.internal.event.EventWriter`                                   |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `commit(long, long, long, String, String, boolean, long, long, long, long, long)`                                      | `jdk.jfr.events.ActiveRecordingEvent`                                  |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `writeMetaEvents()`                                                                                                    | `jdk.jfr.internal.PlatformRecorder`                                    |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `start(PlatformRecording)`                                                                                             | `jdk.jfr.internal.PlatformRecorder`                                    |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `start()`                                                                                                              | `jdk.jfr.internal.PlatformRecording`                                   |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `start()`                                                                                                              | `jdk.jfr.Recording`                                                    |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `execute(ArgumentParser)`                                                                                              | `jdk.jfr.internal.dcmd.DCmdStart`                                      |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `execute(String, String, char)`                                                                                        | `jdk.jfr.internal.dcmd.AbstractDCmd`                                   |
| +12.1% | +255.156 KiB | 89.2% → 82.2% | 2.06 MiB → 2.31 MiB |   6 → 9 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8` |
| +12.1% | +255.156 KiB | 89.2% → 82.2% | 2.06 MiB → 2.31 MiB |   6 → 9 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
| +12.1% | +255.156 KiB | 89.2% → 82.2% | 2.06 MiB → 2.31 MiB |   6 → 9 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
| +12.1% | +255.156 KiB | 89.2% → 82.2% | 2.06 MiB → 2.31 MiB |   6 → 9 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|    new | +255.148 KiB |   0.0% → 8.9% |       0 B → 255 KiB |   0 → 2 | `getDeclaredConstructors0(boolean)`                                                                                    | `java.lang.Class`                                                      |
|    new | +255.148 KiB |   0.0% → 8.9% |       0 B → 255 KiB |   0 → 2 | `privateGetDeclaredConstructors(boolean)`                                                                              | `java.lang.Class`                                                      |

##### Standard library

| Change |        Delta |             % |                Size | Objects | Function                                                                          | Location                                 |
| -----: | -----------: | ------------: | ------------------: | ------: | --------------------------------------------------------------------------------- | ---------------------------------------- |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `initTable()`                                                                     | `java.util.concurrent.ConcurrentHashMap` |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `putVal(Object, Object, boolean)`                                                 | `java.util.concurrent.ConcurrentHashMap` |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `put(Object, Object)`                                                             | `java.util.concurrent.ConcurrentHashMap` |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `storeString(String)`                                                             | `jdk.jfr.internal.StringPool`            |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `addString(String)`                                                               | `jdk.jfr.internal.StringPool`            |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `putString(String)`                                                               | `jdk.jfr.internal.event.EventWriter`     |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `commit(long, long, long, String, String, boolean, long, long, long, long, long)` | `jdk.jfr.events.ActiveRecordingEvent`    |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `writeMetaEvents()`                                                               | `jdk.jfr.internal.PlatformRecorder`      |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `start(PlatformRecording)`                                                        | `jdk.jfr.internal.PlatformRecorder`      |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `start()`                                                                         | `jdk.jfr.internal.PlatformRecording`     |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `start()`                                                                         | `jdk.jfr.Recording`                      |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `execute(ArgumentParser)`                                                         | `jdk.jfr.internal.dcmd.DCmdStart`        |
|    new | +256.015 KiB |   0.0% → 8.9% |       0 B → 256 KiB |   0 → 1 | `execute(String, String, char)`                                                   | `jdk.jfr.internal.dcmd.AbstractDCmd`     |
| +12.1% | +255.156 KiB | 89.2% → 82.2% | 2.06 MiB → 2.31 MiB |   6 → 9 | `apply(Object)`                                                                   | `scala.runtime.function.JProcedure1`     |
| +12.1% | +255.156 KiB | 89.2% → 82.2% | 2.06 MiB → 2.31 MiB |   6 → 9 | `foreach(Function1)`                                                              | `scala.collection.immutable.List`        |
|    new | +255.148 KiB |   0.0% → 8.9% |       0 B → 255 KiB |   0 → 2 | `getDeclaredConstructors0(boolean)`                                               | `java.lang.Class`                        |
|    new | +255.148 KiB |   0.0% → 8.9% |       0 B → 255 KiB |   0 → 2 | `privateGetDeclaredConstructors(boolean)`                                         | `java.lang.Class`                        |
|    new | +255.148 KiB |   0.0% → 8.9% |       0 B → 255 KiB |   0 → 2 | `getConstructor0(Class[], int)`                                                   | `java.lang.Class`                        |
|    new | +255.148 KiB |   0.0% → 8.9% |       0 B → 255 KiB |   0 → 2 | `getDeclaredConstructor(Class[])`                                                 | `java.lang.Class`                        |
|  +9.3% |  +196.25 KiB | 89.2% → 80.2% | 2.06 MiB → 2.25 MiB |   1 → 3 | `copyOf(Object[], int)`                                                           | `java.util.Arrays`                       |

#### Improvements

Functions with the largest decrease in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |     Delta |            % |           Size | Objects | Function                                                                                                               | Location                                    |
| ------: | --------: | -----------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed | -2.06 MiB | 89.2% → 0.0% | 2.06 MiB → 0 B |   6 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                                        | `java.lang.ClassLoader`                     |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `defineClass(String, byte[], int, int, ProtectionDomain)`                                                              | `java.lang.ClassLoader`                     |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `defineClass(String, byte[], int, int, CodeSource)`                                                                    | `java.security.SecureClassLoader`           |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `updated(Object, Object)`                                                                                              | `scala.collection.immutable.Map$EmptyMap$`  |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `addOne(Object, Object)`                                                                                               | `scala.collection.immutable.MapBuilderImpl` |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `addOne(Tuple2)`                                                                                                       | `scala.collection.immutable.MapBuilderImpl` |
| removed |    -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `addOne(Object)`                                                                                                       | `scala.collection.immutable.MapBuilderImpl` |
|  -85.7% |     -96 B |        <0.1% |   112 B → 16 B |       1 | `addAll(IterableOnce)`                                                                                                 | `scala.collection.mutable.Growable`         |
|  -85.7% |     -96 B |        <0.1% |   112 B → 16 B |       1 | `addAll$(Growable, IterableOnce)`                                                                                      | `scala.collection.mutable.Growable`         |
|  -85.7% |     -96 B |        <0.1% |   112 B → 16 B |       1 | `addAll(IterableOnce)`                                                                                                 | `scala.collection.immutable.MapBuilderImpl` |
|  -85.7% |     -96 B |        <0.1% |   112 B → 16 B |       1 | `from(IterableOnce)`                                                                                                   | `scala.collection.immutable.Map$`           |
|  -85.7% |     -96 B |        <0.1% |   112 B → 16 B |       1 | `apply(Seq)`                                                                                                           | `scala.collection.MapFactory`               |
|  -85.7% |     -96 B |        <0.1% |   112 B → 16 B |       1 | `apply$(MapFactory, Seq)`                                                                                              | `scala.collection.MapFactory`               |
|  -85.7% |     -96 B |        <0.1% |   112 B → 16 B |       1 | `apply(Seq)`                                                                                                           | `scala.collection.immutable.Map$`           |
|  -42.9% |     -48 B |        <0.1% |   112 B → 64 B |       1 | `defineClass(String, Resource)`                                                                                        | `java.net.URLClassLoader`                   |
| removed |     -40 B | <0.1% → 0.0% |     40 B → 0 B |   1 → 0 | `lambda$generateData$4(int)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans` |
| removed |     -40 B | <0.1% → 0.0% |     40 B → 0 B |   1 → 0 | `<init>(long, IntFunction)`                                                                                            | `java.util.stream.Nodes$ArrayNode`          |
| removed |     -40 B | <0.1% → 0.0% |     40 B → 0 B |   1 → 0 | `<init>(long, IntFunction)`                                                                                            | `java.util.stream.Nodes$FixedNodeBuilder`   |
| removed |     -40 B | <0.1% → 0.0% |     40 B → 0 B |   1 → 0 | `builder(long, IntFunction)`                                                                                           | `java.util.stream.Nodes`                    |

##### Standard library

|  Change |  Delta |            % |         Size | Objects | Function                                                                        | Location                                    |
| ------: | -----: | -----------: | -----------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------- |
| removed | -112 B | <0.1% → 0.0% |  112 B → 0 B |   1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                     |
| removed | -112 B | <0.1% → 0.0% |  112 B → 0 B |   1 → 0 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                     |
| removed | -112 B | <0.1% → 0.0% |  112 B → 0 B |   1 → 0 | `defineClass(String, byte[], int, int, CodeSource)`                             | `java.security.SecureClassLoader`           |
| removed | -112 B | <0.1% → 0.0% |  112 B → 0 B |   1 → 0 | `updated(Object, Object)`                                                       | `scala.collection.immutable.Map$EmptyMap$`  |
| removed | -112 B | <0.1% → 0.0% |  112 B → 0 B |   1 → 0 | `addOne(Object, Object)`                                                        | `scala.collection.immutable.MapBuilderImpl` |
| removed | -112 B | <0.1% → 0.0% |  112 B → 0 B |   1 → 0 | `addOne(Tuple2)`                                                                | `scala.collection.immutable.MapBuilderImpl` |
| removed | -112 B | <0.1% → 0.0% |  112 B → 0 B |   1 → 0 | `addOne(Object)`                                                                | `scala.collection.immutable.MapBuilderImpl` |
|  -85.7% |  -96 B |        <0.1% | 112 B → 16 B |       1 | `addAll(IterableOnce)`                                                          | `scala.collection.mutable.Growable`         |
|  -85.7% |  -96 B |        <0.1% | 112 B → 16 B |       1 | `addAll$(Growable, IterableOnce)`                                               | `scala.collection.mutable.Growable`         |
|  -85.7% |  -96 B |        <0.1% | 112 B → 16 B |       1 | `addAll(IterableOnce)`                                                          | `scala.collection.immutable.MapBuilderImpl` |
|  -85.7% |  -96 B |        <0.1% | 112 B → 16 B |       1 | `from(IterableOnce)`                                                            | `scala.collection.immutable.Map$`           |
|  -85.7% |  -96 B |        <0.1% | 112 B → 16 B |       1 | `apply(Seq)`                                                                    | `scala.collection.MapFactory`               |
|  -85.7% |  -96 B |        <0.1% | 112 B → 16 B |       1 | `apply$(MapFactory, Seq)`                                                       | `scala.collection.MapFactory`               |
|  -85.7% |  -96 B |        <0.1% | 112 B → 16 B |       1 | `apply(Seq)`                                                                    | `scala.collection.immutable.Map$`           |
|  -42.9% |  -48 B |        <0.1% | 112 B → 64 B |       1 | `defineClass(String, Resource)`                                                 | `java.net.URLClassLoader`                   |
| removed |  -40 B | <0.1% → 0.0% |   40 B → 0 B |   1 → 0 | `<init>(long, IntFunction)`                                                     | `java.util.stream.Nodes$ArrayNode`          |
| removed |  -40 B | <0.1% → 0.0% |   40 B → 0 B |   1 → 0 | `<init>(long, IntFunction)`                                                     | `java.util.stream.Nodes$FixedNodeBuilder`   |
| removed |  -40 B | <0.1% → 0.0% |   40 B → 0 B |   1 → 0 | `builder(long, IntFunction)`                                                    | `java.util.stream.Nodes`                    |
| removed |  -40 B | <0.1% → 0.0% |   40 B → 0 B |   1 → 0 | `makeNodeBuilder(long, IntFunction)`                                            | `java.util.stream.ReferencePipeline`        |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |     Delta |             % |           Size | Objects | Caller              | Location                                                               |
| -----: | --------: | ------------: | -------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
|    new | +2.31 MiB | 0.0% → 100.0% | 0 B → 2.31 MiB |   0 → 9 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

| Change |        Delta |             % |          Size | Objects | Caller                            | Location                                 |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------- | ---------------------------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

| Change |        Delta |             % |          Size | Objects | Caller                | Location                                 |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------- | ---------------------------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `put(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `put(Object, Object)` (`java.util.concurrent.ConcurrentHashMap`)

| Change |        Delta |             % |          Size | Objects | Caller                | Location                      |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------- | ----------------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `storeString(String)` | `jdk.jfr.internal.StringPool` |

##### `storeString(String)` (`jdk.jfr.internal.StringPool`)

| Change |        Delta |             % |          Size | Objects | Caller              | Location                      |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------- | ----------------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `addString(String)` | `jdk.jfr.internal.StringPool` |

##### `addString(String)` (`jdk.jfr.internal.StringPool`)

| Change |        Delta |             % |          Size | Objects | Caller              | Location                             |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------- | ------------------------------------ |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `putString(String)` | `jdk.jfr.internal.event.EventWriter` |

##### `putString(String)` (`jdk.jfr.internal.event.EventWriter`)

| Change |        Delta |             % |          Size | Objects | Caller                                                                            | Location                              |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------------------------------- | ------------------------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `commit(long, long, long, String, String, boolean, long, long, long, long, long)` | `jdk.jfr.events.ActiveRecordingEvent` |

##### `commit(long, long, long, String, String, boolean, long, long, long, long, long)` (`jdk.jfr.events.ActiveRecordingEvent`)

| Change |        Delta |             % |          Size | Objects | Caller              | Location                            |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------- | ----------------------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `writeMetaEvents()` | `jdk.jfr.internal.PlatformRecorder` |

##### `writeMetaEvents()` (`jdk.jfr.internal.PlatformRecorder`)

| Change |        Delta |             % |          Size | Objects | Caller                     | Location                            |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------- | ----------------------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `start(PlatformRecording)` | `jdk.jfr.internal.PlatformRecorder` |

##### `start(PlatformRecording)` (`jdk.jfr.internal.PlatformRecorder`)

| Change |        Delta |             % |          Size | Objects | Caller    | Location                             |
| -----: | -----------: | ------------: | ------------: | ------: | --------- | ------------------------------------ |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `start()` | `jdk.jfr.internal.PlatformRecording` |

##### `start()` (`jdk.jfr.internal.PlatformRecording`)

| Change |        Delta |             % |          Size | Objects | Caller    | Location            |
| -----: | -----------: | ------------: | ------------: | ------: | --------- | ------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `start()` | `jdk.jfr.Recording` |

##### `start()` (`jdk.jfr.Recording`)

| Change |        Delta |             % |          Size | Objects | Caller                    | Location                          |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------- | --------------------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `execute(ArgumentParser)` | `jdk.jfr.internal.dcmd.DCmdStart` |

##### `execute(ArgumentParser)` (`jdk.jfr.internal.dcmd.DCmdStart`)

| Change |        Delta |             % |          Size | Objects | Caller                          | Location                             |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------- | ------------------------------------ |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `execute(String, String, char)` | `jdk.jfr.internal.dcmd.AbstractDCmd` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`)

| Change |        Delta |      % |                Size | Objects | Caller          | Location                             |
| -----: | -----------: | -----: | ------------------: | ------: | --------------- | ------------------------------------ |
| +12.1% | +255.156 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 9 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change |        Delta |      % |                Size | Objects | Caller               | Location                             |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------- | ------------------------------------ |
| +12.1% | +255.156 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 9 | `apply(Object)`      | `scala.runtime.function.JProcedure1` |
| +12.1% | +255.156 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 9 | `foreach(Function1)` | `scala.collection.immutable.List`    |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change |        Delta |      % |                Size | Objects | Caller                                                                        | Location                                    |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| +12.1% | +255.156 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 9 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |      % |                Size | Objects | Caller           | Location                                    |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------- | ------------------------------------------- |
| +12.1% | +255.156 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 9 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `getDeclaredConstructors0(boolean)` (`java.lang.Class`)

| Change |        Delta |             % |          Size | Objects | Caller                                    | Location          |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------- | ----------------- |
|    new | +255.148 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 2 | `privateGetDeclaredConstructors(boolean)` | `java.lang.Class` |

##### `privateGetDeclaredConstructors(boolean)` (`java.lang.Class`)

| Change |        Delta |             % |          Size | Objects | Caller                          | Location          |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------- | ----------------- |
|    new | +255.148 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 2 | `getConstructor0(Class[], int)` | `java.lang.Class` |

##### `getConstructor0(Class[], int)` (`java.lang.Class`)

| Change |        Delta |             % |          Size | Objects | Caller                            | Location          |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------- | ----------------- |
|    new | +255.148 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 2 | `getDeclaredConstructor(Class[])` | `java.lang.Class` |

##### `getDeclaredConstructor(Class[])` (`java.lang.Class`)

| Change |        Delta |             % |          Size | Objects | Caller                                 | Location                              |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------- | ------------------------------------- |
|    new | +255.148 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 2 | `createBenchmark(BenchmarkDescriptor)` | `org.renaissance.core.BenchmarkSuite` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |       Delta |      % |                Size | Objects | Caller      | Location              |
| -----: | ----------: | -----: | ------------------: | ------: | ----------- | --------------------- |
|  +9.3% | +196.25 KiB | 100.0% | 2.06 MiB → 2.25 MiB |   1 → 3 | `grow(int)` | `java.util.ArrayList` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |     Delta |             % |           Size | Objects | Caller              | Location                                                               |
| ------: | --------: | ------------: | -------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| removed | -2.06 MiB | 100.0% → 0.0% | 2.06 MiB → 0 B |   6 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a001198798` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|  Change |  Delta |             % |        Size | Objects | Caller                                                    | Location                |
| ------: | -----: | ------------: | ----------: | ------: | --------------------------------------------------------- | ----------------------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|  Change |  Delta |             % |        Size | Objects | Caller                                              | Location                          |
| ------: | -----: | ------------: | ----------: | ------: | --------------------------------------------------- | --------------------------------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `defineClass(String, byte[], int, int, CodeSource)` | `java.security.SecureClassLoader` |

##### `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`)

|  Change |  Delta |             % |        Size | Objects | Caller                          | Location                  |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------- | ------------------------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `defineClass(String, Resource)` | `java.net.URLClassLoader` |

##### `updated(Object, Object)` (`scala.collection.immutable.Map$EmptyMap$`)

|  Change |  Delta |             % |        Size | Objects | Caller                    | Location                                    |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------- | ------------------------------------------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `updated(Object, Object)` | `scala.collection.immutable.Map$EmptyMap$`  |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `addOne(Object, Object)`  | `scala.collection.immutable.MapBuilderImpl` |

##### `addOne(Object, Object)` (`scala.collection.immutable.MapBuilderImpl`)

|  Change |  Delta |             % |        Size | Objects | Caller           | Location                                    |
| ------: | -----: | ------------: | ----------: | ------: | ---------------- | ------------------------------------------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `addOne(Tuple2)` | `scala.collection.immutable.MapBuilderImpl` |

##### `addOne(Tuple2)` (`scala.collection.immutable.MapBuilderImpl`)

|  Change |  Delta |             % |        Size | Objects | Caller           | Location                                    |
| ------: | -----: | ------------: | ----------: | ------: | ---------------- | ------------------------------------------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `addOne(Object)` | `scala.collection.immutable.MapBuilderImpl` |

##### `addOne(Object)` (`scala.collection.immutable.MapBuilderImpl`)

|  Change |  Delta |             % |        Size | Objects | Caller                 | Location                            |
| ------: | -----: | ------------: | ----------: | ------: | ---------------------- | ----------------------------------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `addAll(IterableOnce)` | `scala.collection.mutable.Growable` |

##### `addAll(IterableOnce)` (`scala.collection.mutable.Growable`)

| Change | Delta |      % |         Size | Objects | Caller                            | Location                            |
| -----: | ----: | -----: | -----------: | ------: | --------------------------------- | ----------------------------------- |
| -85.7% | -96 B | 100.0% | 112 B → 16 B |       1 | `addAll$(Growable, IterableOnce)` | `scala.collection.mutable.Growable` |

##### `addAll$(Growable, IterableOnce)` (`scala.collection.mutable.Growable`)

| Change | Delta |      % |         Size | Objects | Caller                 | Location                                    |
| -----: | ----: | -----: | -----------: | ------: | ---------------------- | ------------------------------------------- |
| -85.7% | -96 B | 100.0% | 112 B → 16 B |       1 | `addAll(IterableOnce)` | `scala.collection.immutable.MapBuilderImpl` |

##### `addAll(IterableOnce)` (`scala.collection.immutable.MapBuilderImpl`)

| Change | Delta |      % |         Size | Objects | Caller               | Location                          |
| -----: | ----: | -----: | -----------: | ------: | -------------------- | --------------------------------- |
| -85.7% | -96 B | 100.0% | 112 B → 16 B |       1 | `from(IterableOnce)` | `scala.collection.immutable.Map$` |

##### `from(IterableOnce)` (`scala.collection.immutable.Map$`)

| Change | Delta |      % |         Size | Objects | Caller               | Location                          |
| -----: | ----: | -----: | -----------: | ------: | -------------------- | --------------------------------- |
| -85.7% | -96 B | 100.0% | 112 B → 16 B |       1 | `from(IterableOnce)` | `scala.collection.immutable.Map$` |
| -85.7% | -96 B | 100.0% | 112 B → 16 B |       1 | `apply(Seq)`         | `scala.collection.MapFactory`     |

##### `apply(Seq)` (`scala.collection.MapFactory`)

| Change | Delta |      % |         Size | Objects | Caller                    | Location                      |
| -----: | ----: | -----: | -----------: | ------: | ------------------------- | ----------------------------- |
| -85.7% | -96 B | 100.0% | 112 B → 16 B |       1 | `apply$(MapFactory, Seq)` | `scala.collection.MapFactory` |

##### `apply$(MapFactory, Seq)` (`scala.collection.MapFactory`)

| Change | Delta |      % |         Size | Objects | Caller       | Location                          |
| -----: | ----: | -----: | -----------: | ------: | ------------ | --------------------------------- |
| -85.7% | -96 B | 100.0% | 112 B → 16 B |       1 | `apply(Seq)` | `scala.collection.immutable.Map$` |

##### `apply(Seq)` (`scala.collection.immutable.Map$`)

| Change | Delta |      % |         Size | Objects | Caller           | Location                                    |
| -----: | ----: | -----: | -----------: | ------: | ---------------- | ------------------------------------------- |
| -85.7% | -96 B | 100.0% | 112 B → 16 B |       1 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `defineClass(String, Resource)` (`java.net.URLClassLoader`)

| Change | Delta |      % |         Size | Objects | Caller  | Location                    |
| -----: | ----: | -----: | -----------: | ------: | ------- | --------------------------- |
| -42.9% | -48 B | 100.0% | 112 B → 64 B |       1 | `run()` | `java.net.URLClassLoader$1` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % |       Size | Objects | Caller       | Location                                            |
| ------: | ----: | ------------: | ---------: | ------: | ------------ | --------------------------------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`)

|  Change | Delta |             % |       Size | Objects | Caller                      | Location                                  |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------- | ----------------------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `<init>(long, IntFunction)` | `java.util.stream.Nodes$FixedNodeBuilder` |

##### `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`)

|  Change | Delta |             % |       Size | Objects | Caller                       | Location                 |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------- | ------------------------ |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `builder(long, IntFunction)` | `java.util.stream.Nodes` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

|  Change | Delta |             % |       Size | Objects | Caller                               | Location                             |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------ | ------------------------------------ |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`)

|  Change | Delta |             % |       Size | Objects | Caller                                        | Location                            |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------------------------- | ----------------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |            % |           Size | Objects | Callee                                                                                       | Location                                  |
| -----: | -----------: | -----------: | -------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |    +2.06 MiB | 0.0% → 89.2% | 0 B → 2.06 MiB |   0 → 7 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new | +255.148 KiB | 0.0% → 10.8% |  0 B → 255 KiB |   0 → 2 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

| Change |        Delta |             % |          Size | Objects | Callee        | Location                                 |
| -----: | -----------: | ------------: | ------------: | ------: | ------------- | ---------------------------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `initTable()` | `java.util.concurrent.ConcurrentHashMap` |

##### `put(Object, Object)` (`java.util.concurrent.ConcurrentHashMap`)

| Change |        Delta |             % |          Size | Objects | Callee                            | Location                                 |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------- | ---------------------------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `storeString(String)` (`jdk.jfr.internal.StringPool`)

| Change |        Delta |             % |          Size | Objects | Callee                | Location                                 |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------- | ---------------------------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `put(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `addString(String)` (`jdk.jfr.internal.StringPool`)

| Change |        Delta |             % |          Size | Objects | Callee                | Location                      |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------- | ----------------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `storeString(String)` | `jdk.jfr.internal.StringPool` |

##### `putString(String)` (`jdk.jfr.internal.event.EventWriter`)

| Change |        Delta |             % |          Size | Objects | Callee              | Location                      |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------- | ----------------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `addString(String)` | `jdk.jfr.internal.StringPool` |

##### `commit(long, long, long, String, String, boolean, long, long, long, long, long)` (`jdk.jfr.events.ActiveRecordingEvent`)

| Change |        Delta |             % |          Size | Objects | Callee              | Location                             |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------- | ------------------------------------ |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `putString(String)` | `jdk.jfr.internal.event.EventWriter` |

##### `writeMetaEvents()` (`jdk.jfr.internal.PlatformRecorder`)

| Change |        Delta |             % |          Size | Objects | Callee                                                                            | Location                              |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------------------------------- | ------------------------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `commit(long, long, long, String, String, boolean, long, long, long, long, long)` | `jdk.jfr.events.ActiveRecordingEvent` |

##### `start(PlatformRecording)` (`jdk.jfr.internal.PlatformRecorder`)

| Change |        Delta |             % |          Size | Objects | Callee              | Location                            |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------- | ----------------------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `writeMetaEvents()` | `jdk.jfr.internal.PlatformRecorder` |

##### `start()` (`jdk.jfr.internal.PlatformRecording`)

| Change |        Delta |             % |          Size | Objects | Callee                     | Location                            |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------- | ----------------------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `start(PlatformRecording)` | `jdk.jfr.internal.PlatformRecorder` |

##### `start()` (`jdk.jfr.Recording`)

| Change |        Delta |             % |          Size | Objects | Callee    | Location                             |
| -----: | -----------: | ------------: | ------------: | ------: | --------- | ------------------------------------ |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `start()` | `jdk.jfr.internal.PlatformRecording` |

##### `execute(ArgumentParser)` (`jdk.jfr.internal.dcmd.DCmdStart`)

| Change |        Delta |             % |          Size | Objects | Callee    | Location            |
| -----: | -----------: | ------------: | ------------: | ------: | --------- | ------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `start()` | `jdk.jfr.Recording` |

##### `execute(String, String, char)` (`jdk.jfr.internal.dcmd.AbstractDCmd`)

| Change |        Delta |             % |          Size | Objects | Callee                    | Location                          |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------- | --------------------------------- |
|    new | +256.015 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `execute(ArgumentParser)` | `jdk.jfr.internal.dcmd.DCmdStart` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`)

|  Change |     Delta |             % |           Size | Objects | Callee                                                                                                                 | Location                                    |
| ------: | --------: | ------------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new | +2.31 MiB | 0.0% → 100.0% | 0 B → 2.31 MiB |   0 → 9 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed | -2.06 MiB | 100.0% → 0.0% | 2.06 MiB → 0 B |   6 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change |        Delta |      % |                Size | Objects | Callee              | Location                                                               |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| +12.1% | +255.156 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 9 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8` |
| +12.1% | +255.156 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 9 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change |        Delta |      % |                Size | Objects | Callee          | Location                             |
| -----: | -----------: | -----: | ------------------: | ------: | --------------- | ------------------------------------ |
| +12.1% | +255.156 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 9 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |      % |                Size | Objects | Callee               | Location                          |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------- | --------------------------------- |
| +12.1% | +255.156 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 9 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `getDeclaredConstructors0(boolean)` (`java.lang.Class`)

| Change |        Delta |             % |          Size | Objects | Callee              | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------- | ----------------------- |
|    new | +255.148 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 2 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `privateGetDeclaredConstructors(boolean)` (`java.lang.Class`)

| Change |        Delta |             % |          Size | Objects | Callee                              | Location          |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------- | ----------------- |
|    new | +255.148 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 2 | `getDeclaredConstructors0(boolean)` | `java.lang.Class` |

##### `getConstructor0(Class[], int)` (`java.lang.Class`)

| Change |        Delta |             % |          Size | Objects | Callee                                    | Location          |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------- | ----------------- |
|    new | +255.148 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 2 | `privateGetDeclaredConstructors(boolean)` | `java.lang.Class` |

##### `getDeclaredConstructor(Class[])` (`java.lang.Class`)

| Change |        Delta |             % |          Size | Objects | Callee                          | Location          |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------- | ----------------- |
|    new | +255.148 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 2 | `getConstructor0(Class[], int)` | `java.lang.Class` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |     Delta |             % |           Size | Objects | Callee               | Location                                  |
| ------: | --------: | ------------: | -------------: | ------: | -------------------- | ----------------------------------------- |
| removed | -2.06 MiB | 100.0% → 0.0% | 2.06 MiB → 0 B |   6 → 0 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|  Change |  Delta |             % |        Size | Objects | Callee                                                                          | Location                |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`)

|  Change |  Delta |             % |        Size | Objects | Callee                                                    | Location                |
| ------: | -----: | ------------: | ----------: | ------: | --------------------------------------------------------- | ----------------------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `updated(Object, Object)` (`scala.collection.immutable.Map$EmptyMap$`)

|  Change |  Delta |             % |        Size | Objects | Callee                    | Location                                   |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------- | ------------------------------------------ |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `loadClass(String)`       | `java.lang.ClassLoader`                    |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `updated(Object, Object)` | `scala.collection.immutable.Map$EmptyMap$` |

##### `addOne(Object, Object)` (`scala.collection.immutable.MapBuilderImpl`)

|  Change |  Delta |             % |        Size | Objects | Callee                    | Location                                   |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------- | ------------------------------------------ |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `updated(Object, Object)` | `scala.collection.immutable.Map$EmptyMap$` |

##### `addOne(Tuple2)` (`scala.collection.immutable.MapBuilderImpl`)

|  Change |  Delta |             % |        Size | Objects | Callee                   | Location                                    |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------ | ------------------------------------------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `addOne(Object, Object)` | `scala.collection.immutable.MapBuilderImpl` |

##### `addOne(Object)` (`scala.collection.immutable.MapBuilderImpl`)

|  Change |  Delta |             % |        Size | Objects | Callee           | Location                                    |
| ------: | -----: | ------------: | ----------: | ------: | ---------------- | ------------------------------------------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `addOne(Tuple2)` | `scala.collection.immutable.MapBuilderImpl` |

##### `addAll(IterableOnce)` (`scala.collection.mutable.Growable`)

|  Change |  Delta |             % |        Size | Objects | Callee           | Location                                    |
| ------: | -----: | ------------: | ----------: | ------: | ---------------- | ------------------------------------------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `addOne(Object)` | `scala.collection.immutable.MapBuilderImpl` |
|     new |  +16 B | 0.0% → 100.0% |  0 B → 16 B |   0 → 1 | `iterator()`     | `scala.collection.immutable.ArraySeq$ofRef` |

##### `addAll$(Growable, IterableOnce)` (`scala.collection.mutable.Growable`)

| Change | Delta |      % |         Size | Objects | Callee                 | Location                            |
| -----: | ----: | -----: | -----------: | ------: | ---------------------- | ----------------------------------- |
| -85.7% | -96 B | 100.0% | 112 B → 16 B |       1 | `addAll(IterableOnce)` | `scala.collection.mutable.Growable` |

##### `addAll(IterableOnce)` (`scala.collection.immutable.MapBuilderImpl`)

| Change | Delta |      % |         Size | Objects | Callee                            | Location                            |
| -----: | ----: | -----: | -----------: | ------: | --------------------------------- | ----------------------------------- |
| -85.7% | -96 B | 100.0% | 112 B → 16 B |       1 | `addAll$(Growable, IterableOnce)` | `scala.collection.mutable.Growable` |

##### `from(IterableOnce)` (`scala.collection.immutable.Map$`)

| Change | Delta |      % |         Size | Objects | Callee                 | Location                                    |
| -----: | ----: | -----: | -----------: | ------: | ---------------------- | ------------------------------------------- |
| -85.7% | -96 B | 100.0% | 112 B → 16 B |       1 | `addAll(IterableOnce)` | `scala.collection.immutable.MapBuilderImpl` |
| -85.7% | -96 B | 100.0% | 112 B → 16 B |       1 | `from(IterableOnce)`   | `scala.collection.immutable.Map$`           |

##### `apply(Seq)` (`scala.collection.MapFactory`)

| Change | Delta |      % |         Size | Objects | Callee               | Location                          |
| -----: | ----: | -----: | -----------: | ------: | -------------------- | --------------------------------- |
| -85.7% | -96 B | 100.0% | 112 B → 16 B |       1 | `from(IterableOnce)` | `scala.collection.immutable.Map$` |

##### `apply$(MapFactory, Seq)` (`scala.collection.MapFactory`)

| Change | Delta |      % |         Size | Objects | Callee       | Location                      |
| -----: | ----: | -----: | -----------: | ------: | ------------ | ----------------------------- |
| -85.7% | -96 B | 100.0% | 112 B → 16 B |       1 | `apply(Seq)` | `scala.collection.MapFactory` |

##### `apply(Seq)` (`scala.collection.immutable.Map$`)

| Change | Delta |      % |         Size | Objects | Callee                    | Location                      |
| -----: | ----: | -----: | -----------: | ------: | ------------------------- | ----------------------------- |
| -85.7% | -96 B | 100.0% | 112 B → 16 B |       1 | `apply$(MapFactory, Seq)` | `scala.collection.MapFactory` |

##### `defineClass(String, Resource)` (`java.net.URLClassLoader`)

|  Change |  Delta |             % |        Size | Objects | Callee                                              | Location                                       |
| ------: | -----: | ------------: | ----------: | ------: | --------------------------------------------------- | ---------------------------------------------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `defineClass(String, byte[], int, int, CodeSource)` | `java.security.SecureClassLoader`              |
|     new |  +64 B | 0.0% → 100.0% |  0 B → 64 B |   0 → 1 | `getManifest()`                                     | `jdk.internal.loader.URLClassPath$JarLoader$2` |

##### `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`)

|  Change | Delta |             % |       Size | Objects | Callee       | Location                                            |
| ------: | ----: | ------------: | ---------: | ------: | ------------ | --------------------------------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`)

|  Change | Delta |             % |       Size | Objects | Callee                      | Location                           |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------- | ---------------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `<init>(long, IntFunction)` | `java.util.stream.Nodes$ArrayNode` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

|  Change | Delta |             % |       Size | Objects | Callee                      | Location                                  |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------- | ----------------------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `<init>(long, IntFunction)` | `java.util.stream.Nodes$FixedNodeBuilder` |

##### `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`)

|  Change | Delta |             % |       Size | Objects | Callee                       | Location                 |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------- | ------------------------ |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `builder(long, IntFunction)` | `java.util.stream.Nodes` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes retained in their leaf frame.

| Change |        Delta |            % |           Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -----: | -----------: | -----------: | -------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +2.06 MiB | 0.0% → 73.4% | 0 B → 2.06 MiB |   0 → 1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `accept(Object, Object)` (`java.util.stream.Collectors$$Lambda.0x00000070010c40c8`) ← `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|    new | +256.015 KiB |  0.0% → 8.9% |  0 B → 256 KiB |   0 → 1 | `initTable()` (`java.util.concurrent.ConcurrentHashMap`) ← `putVal(Object, Object, boolean)` ← `put(Object, Object)` ← `storeString(String)` (`jdk.jfr.internal.StringPool`) ← `addString(String)` ← `putString(String)` (`jdk.jfr.internal.event.EventWriter`) ← `commit(long, long, long, String, String, boolean, long, long, long, long, long)` (`jdk.jfr.events.ActiveRecordingEvent`) ← `writeMetaEvents()` (`jdk.jfr.internal.PlatformRecorder`) ← `start(PlatformRecording)` ← `start()` (`jdk.jfr.internal.PlatformRecording`) ← `start()` (`jdk.jfr.Recording`) ← `execute(ArgumentParser)` (`jdk.jfr.internal.dcmd.DCmdStart`) ← `execute(String, String, char)` (`jdk.jfr.internal.dcmd.AbstractDCmd`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|    new | +255.085 KiB |  0.0% → 8.9% |  0 B → 255 KiB |   0 → 1 | `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`) ← `<init>(ZipFile$Source$Key, boolean, ZipCoder)` ← `get(File, boolean, ZipCoder)` ← `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`) ← `<init>(File, int, Charset)` (`java.util.zip.ZipFile`) ← `<init>(File, int)` ← `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`) ← `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` ← `run()` (`jdk.internal.loader.URLClassPath$3`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `getLoader(URL)` (`jdk.internal.loader.URLClassPath`) ← `getLoader(int)` ← `getResource(String, boolean)` ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `getDeclaredConstructors0(boolean)` (`java.lang.Class`) ← `privateGetDeclaredConstructors(boolean)` ← `getConstructor0(Class[], int)` ← `getDeclaredConstructor(Class[])` ← `createBenchmark(BenchmarkDescriptor)` (`org.renaissance.core.BenchmarkSuite`) ← `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
|    new |  +196.25 KiB |  0.0% → 6.8% |  0 B → 196 KiB |   0 → 2 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|    new |       +144 B | 0.0% → <0.1% |    0 B → 144 B |   0 → 6 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                     |
|    new |        +64 B | 0.0% → <0.1% |     0 B → 64 B |   0 → 1 | `newLinkedHashMap(int)` (`java.util.LinkedHashMap`) ← `<init>(int)` (`java.util.jar.Attributes`) ← `read(InputStream, String)` (`java.util.jar.Manifest`) ← `<init>(JarVerifier, InputStream, String)` ← `<init>(InputStream, String)` ← `getManifestFromReference()` (`java.util.jar.JarFile`) ← `getManifest()` ← `getManifest()` (`jdk.internal.loader.URLClassPath$JarLoader$2`) ← `defineClass(String, Resource)` (`java.net.URLClassLoader`) ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `getDeclaredConstructors0(boolean)` (`java.lang.Class`) ← `privateGetDeclaredConstructors(boolean)` ← `getConstructor0(Class[], int)` ← `getDeclaredConstructor(Class[])` ← `createBenchmark(BenchmarkDescriptor)` (`org.renaissance.core.BenchmarkSuite`) ← `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|    new |        +16 B | 0.0% → <0.1% |     0 B → 16 B |   0 → 1 | `getClassLoadingLock(String)` (`java.lang.ClassLoader`) ← `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `releaseFence()` (`scala.runtime.Statics`) ← `<init>(Object)` (`scala.collection.ArrayOps$ArrayIterator`) ← `iterator()` (`scala.collection.immutable.ArraySeq$ofRef`) ← `addAll(IterableOnce)` (`scala.collection.mutable.Growable`) ← `addAll$(Growable, IterableOnce)` ← `addAll(IterableOnce)` (`scala.collection.immutable.MapBuilderImpl`) ← `from(IterableOnce)` (`scala.collection.immutable.Map$`) ← `from(IterableOnce)` ← `apply(Seq)` (`scala.collection.MapFactory`) ← `apply$(MapFactory, Seq)` ← `apply(Seq)` (`scala.collection.immutable.Map$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

### Improvements

Call stacks with the largest decrease in bytes retained in their leaf frame.

Common call stack: `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`

|  Change |       Delta |            % |               Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------: | ----------: | -----------: | -----------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |   -2.06 MiB | 89.2% → 0.0% |     2.06 MiB → 0 B |   1 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `accept(Object, Object)` (`java.util.stream.Collectors$$Lambda.0x000000a0010c40c8`) ← `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a001198798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -76.9% | -196.25 KiB | 10.8% → 2.0% | 255 KiB → 58.8 KiB |       1 | `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`) ← `<init>(ZipFile$Source$Key, boolean, ZipCoder)` ← `get(File, boolean, ZipCoder)` ← `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`) ← `<init>(File, int, Charset)` (`java.util.zip.ZipFile`) ← `<init>(File, int)` ← `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`) ← `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` ← `run()` (`jdk.internal.loader.URLClassPath$3`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `getLoader(URL)` (`jdk.internal.loader.URLClassPath`) ← `getLoader(int)` ← `getResource(String, boolean)` ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |      -112 B | <0.1% → 0.0% |        112 B → 0 B |   1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`) ← `defineClass(String, byte[], int, int, ProtectionDomain)` ← `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`) ← `defineClass(String, Resource)` (`java.net.URLClassLoader`) ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `updated(Object, Object)` (`scala.collection.immutable.Map$EmptyMap$`) ← `updated(Object, Object)` ← `addOne(Object, Object)` (`scala.collection.immutable.MapBuilderImpl`) ← `addOne(Tuple2)` ← `addOne(Object)` ← `addAll(IterableOnce)` (`scala.collection.mutable.Growable`) ← `addAll$(Growable, IterableOnce)` ← `addAll(IterableOnce)` (`scala.collection.immutable.MapBuilderImpl`) ← `from(IterableOnce)` (`scala.collection.immutable.Map$`) ← `from(IterableOnce)` ← `apply(Seq)` (`scala.collection.MapFactory`) ← `apply$(MapFactory, Seq)` ← `apply(Seq)` (`scala.collection.immutable.Map$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed |       -96 B | <0.1% → 0.0% |         96 B → 0 B |   4 → 0 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a001198798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` |
| removed |       -40 B | <0.1% → 0.0% |         40 B → 0 B |   1 → 0 | `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`) ← `builder(long, IntFunction)` (`java.util.stream.Nodes`) ← `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`) ← `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`) ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a001198798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])`                                                       |

# Lock contention profile diff

Blocked 38.36s → 9.92s (-28.437s, -74.1%) over 1,707 → 126 contentions (22.5ms → 78.8ms per contention).

| Category         | Change |    Delta |      % |           Time | Contentions |
| ---------------- | -----: | -------: | -----: | -------------: | ----------: |
| Standard library | -74.1% | -28.437s | 100.0% | 38.36s → 9.92s | 1,707 → 126 |

## Hottest functions

### Self time

#### Improvements

Functions with the largest decrease in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

| Change |    Delta |      % |           Time | Contentions | Function              | Location                   |
| -----: | -------: | -----: | -------------: | ----------: | --------------------- | -------------------------- |
| -74.1% | -28.437s | 100.0% | 38.36s → 9.92s | 1,707 → 126 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change |    Delta |             % |            Time | Contentions | Caller            | Location                                 |
| -----: | -------: | ------------: | --------------: | ----------: | ----------------- | ---------------------------------------- |
| -74.2% | -27.327s | 95.9% → 95.5% |  36.80s → 9.48s | 1,608 → 115 | `park()`          | `java.util.concurrent.locks.LockSupport` |
| -71.2% |  -1.110s |   4.1% → 4.5% | 1.56s → 449.6ms |     99 → 11 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

### Total time

#### Regressions

Functions with the largest increase in time blocked within the function and its callees.

| Change |   Delta |            % |        Time | Contentions | Function                                                                                                               | Location                                    |
| -----: | ------: | -----------: | ----------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|    new | +7.382s | 0.0% → 74.3% | 0ms → 7.38s |      0 → 16 | `$anonfun$2(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`   |
|    new | +7.382s | 0.0% → 74.3% | 0ms → 7.38s |      0 → 16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

#### Improvements

Functions with the largest decrease in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |             % |           Time | Contentions | Function                                                                                                               | Location                                                               |
| ------: | -------: | ------------: | -------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -74.1% | -28.437s |        100.0% | 38.36s → 9.92s | 1,707 → 126 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                             |
|  -74.2% | -27.327s | 95.9% → 95.5% | 36.80s → 9.48s | 1,608 → 115 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                               |
|  -89.8% | -22.519s | 65.3% → 25.7% | 25.06s → 2.54s | 1,691 → 110 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
|  -89.8% | -22.519s | 65.3% → 25.7% | 25.06s → 2.54s | 1,691 → 110 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                            |
|  -89.8% | -21.660s | 62.9% → 24.8% | 24.12s → 2.46s | 1,624 → 106 | `awaitWork(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
| removed | -13.300s |  34.7% → 0.0% |   13.30s → 0ms |      16 → 0 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| removed | -13.300s |  34.7% → 0.0% |   13.30s → 0ms |      16 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -47.6% |  -6.777s | 37.1% → 75.2% | 14.24s → 7.46s |     83 → 20 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
|  -44.5% |  -5.918s | 34.7% → 74.3% | 13.30s → 7.38s |          16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  -44.5% |  -5.918s | 34.7% → 74.3% | 13.30s → 7.38s |          16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -44.5% |  -5.918s | 34.7% → 74.3% | 13.30s → 7.38s |          16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -44.5% |  -5.918s | 34.7% → 74.3% | 13.30s → 7.38s |          16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000700121db90`   |
|  -44.5% |  -5.918s | 34.7% → 74.3% | 13.30s → 7.38s |          16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
|  -44.5% |  -5.918s | 34.7% → 74.3% | 13.30s → 7.38s |          16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -44.5% |  -5.918s | 34.7% → 74.3% | 13.30s → 7.38s |          16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  -44.5% |  -5.918s | 34.7% → 74.3% | 13.30s → 7.38s |          16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  -44.5% |  -5.918s | 34.7% → 74.3% | 13.30s → 7.38s |          16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8` |
|  -44.5% |  -5.918s | 34.7% → 74.3% | 13.30s → 7.38s |          16 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
|  -44.5% |  -5.918s | 34.7% → 74.3% | 13.30s → 7.38s |          16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  -44.5% |  -5.918s | 34.7% → 74.3% | 13.30s → 7.38s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |

##### Standard library

| Change |     Delta |             % |             Time | Contentions | Function                                         | Location                                             |
| -----: | --------: | ------------: | ---------------: | ----------: | ------------------------------------------------ | ---------------------------------------------------- |
| -74.1% |  -28.437s |        100.0% |   38.36s → 9.92s | 1,707 → 126 | `park(boolean, long)`                            | `jdk.internal.misc.Unsafe`                           |
| -74.2% |  -27.327s | 95.9% → 95.5% |   36.80s → 9.48s | 1,608 → 115 | `park()`                                         | `java.util.concurrent.locks.LockSupport`             |
| -89.8% |  -22.519s | 65.3% → 25.7% |   25.06s → 2.54s | 1,691 → 110 | `runWorker(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
| -89.8% |  -22.519s | 65.3% → 25.7% |   25.06s → 2.54s | 1,691 → 110 | `run()`                                          | `java.util.concurrent.ForkJoinWorkerThread`          |
| -89.8% |  -21.660s | 62.9% → 24.8% |   24.12s → 2.46s | 1,624 → 106 | `awaitWork(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
| -47.6% |   -6.777s | 37.1% → 75.2% |   14.24s → 7.46s |     83 → 20 | `awaitDone(int, long)`                           | `java.util.concurrent.ForkJoinTask`                  |
| -44.5% |   -5.918s | 34.7% → 74.3% |   13.30s → 7.38s |          16 | `get()`                                          | `java.util.concurrent.ForkJoinTask`                  |
| -44.5% |   -5.918s | 34.7% → 74.3% |   13.30s → 7.38s |          16 | `map(Function1)`                                 | `scala.collection.immutable.Range`                   |
| -44.5% |   -5.918s | 34.7% → 74.3% |   13.30s → 7.38s |          16 | `apply(Object)`                                  | `scala.runtime.function.JProcedure1`                 |
| -44.5% |   -5.918s | 34.7% → 74.3% |   13.30s → 7.38s |          16 | `foreach(Function1)`                             | `scala.collection.immutable.List`                    |
| -44.5% |   -5.918s | 34.7% → 74.3% |   13.30s → 7.38s |          16 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
| -44.5% |   -5.918s | 34.7% → 74.3% |   13.30s → 7.38s |          16 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`  |
| -44.5% |   -5.918s | 34.7% → 74.3% |   13.30s → 7.38s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                   |
| -44.5% |   -5.918s | 34.7% → 74.3% |   13.30s → 7.38s |          16 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| -44.5% |   -5.918s | 34.7% → 74.3% |   13.30s → 7.38s |          16 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| -44.5% |   -5.918s | 34.7% → 74.3% |   13.30s → 7.38s |          16 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                           |
| -71.2% |   -1.110s |   4.1% → 4.5% |  1.56s → 449.6ms |     99 → 11 | `parkUntil(long)`                                | `java.util.concurrent.locks.LockSupport`             |
| -91.0% | -859.55ms |   2.5% → 0.9% | 944.3ms → 84.8ms |      67 → 4 | `join()`                                         | `java.util.concurrent.ForkJoinTask`                  |
| -91.0% | -859.55ms |   2.5% → 0.9% | 944.3ms → 84.8ms |      67 → 4 | `exec()`                                         | `java.util.concurrent.RecursiveTask`                 |
| -91.0% | -859.55ms |   2.5% → 0.9% | 944.3ms → 84.8ms |      67 → 4 | `doExec()`                                       | `java.util.concurrent.ForkJoinTask`                  |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |   Delta |             % |        Time | Contentions | Caller                       | Location                                  |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------- | ----------------------------------------- |
|    new | +7.382s | 0.0% → 100.0% | 0ms → 7.38s |      0 → 16 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |   Delta |             % |        Time | Contentions | Caller              | Location                                                               |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------- | ---------------------------------------------------------------------- |
|    new | +7.382s | 0.0% → 100.0% | 0ms → 7.38s |      0 → 16 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change |    Delta |             % |            Time | Contentions | Caller            | Location                                 |
| -----: | -------: | ------------: | --------------: | ----------: | ----------------- | ---------------------------------------- |
| -74.2% | -27.327s | 95.9% → 95.5% |  36.80s → 9.48s | 1,608 → 115 | `park()`          | `java.util.concurrent.locks.LockSupport` |
| -71.2% |  -1.110s |   4.1% → 4.5% | 1.56s → 449.6ms |     99 → 11 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change |    Delta |             % |           Time | Contentions | Caller                              | Location                            |
| -----: | -------: | ------------: | -------------: | ----------: | ----------------------------------- | ----------------------------------- |
| -91.1% | -20.549s | 61.3% → 21.2% | 22.56s → 2.01s |  1,525 → 95 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |
| -47.6% |  -6.777s | 38.7% → 78.8% | 14.24s → 7.46s |     83 → 20 | `awaitDone(int, long)`              | `java.util.concurrent.ForkJoinTask` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |    Delta |      % |           Time | Contentions | Caller  | Location                                    |
| -----: | -------: | -----: | -------------: | ----------: | ------- | ------------------------------------------- |
| -89.8% | -22.519s | 100.0% | 25.06s → 2.54s | 1,691 → 110 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |    Delta |      % |           Time | Contentions | Caller                              | Location                            |
| -----: | -------: | -----: | -------------: | ----------: | ----------------------------------- | ----------------------------------- |
| -89.8% | -21.660s | 100.0% | 24.12s → 2.46s | 1,624 → 106 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |    Delta |             % |         Time | Contentions | Caller                       | Location                                  |
| ------: | -------: | ------------: | -----------: | ----------: | ---------------------------- | ----------------------------------------- |
| removed | -13.300s | 100.0% → 0.0% | 13.30s → 0ms |      16 → 0 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |    Delta |             % |         Time | Contentions | Caller              | Location                                                               |
| ------: | -------: | ------------: | -----------: | ----------: | ------------------- | ---------------------------------------------------------------------- |
| removed | -13.300s | 100.0% → 0.0% | 13.30s → 0ms |      16 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a001198798` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |             % |             Time | Contentions | Caller   | Location                            |
| -----: | --------: | ------------: | ---------------: | ----------: | -------- | ----------------------------------- |
| -44.5% |   -5.918s | 93.4% → 98.9% |   13.30s → 7.38s |          16 | `get()`  | `java.util.concurrent.ForkJoinTask` |
| -91.0% | -859.55ms |   6.6% → 1.1% | 944.3ms → 84.8ms |      67 → 4 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |      % |           Time | Contentions | Caller                | Location                                    |
| -----: | ------: | -----: | -------------: | ----------: | --------------------- | ------------------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |    Delta |             % |         Time | Contentions | Caller            | Location                                  |
| ------: | -------: | ------------: | -----------: | ----------: | ----------------- | ----------------------------------------- |
| removed | -13.300s | 100.0% → 0.0% | 13.30s → 0ms |      16 → 0 | `$anonfun$1(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |
|     new |  +7.382s | 0.0% → 100.0% |  0ms → 7.38s |      0 → 16 | `$anonfun$2(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |   Delta |      % |           Time | Contentions | Caller          | Location                                                             |
| -----: | ------: | -----: | -------------: | ----------: | --------------- | -------------------------------------------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000700121db90` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000700121db90`)

| Change |   Delta |      % |           Time | Contentions | Caller           | Location                           |
| -----: | ------: | -----: | -------------: | ----------: | ---------------- | ---------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `map(Function1)` | `scala.collection.immutable.Range` |

##### `map(Function1)` (`scala.collection.immutable.Range`)

| Change |   Delta |      % |           Time | Contentions | Caller                  | Location                                  |
| -----: | ------: | -----: | -------------: | ----------: | ----------------------- | ----------------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |   Delta |      % |           Time | Contentions | Caller                  | Location                                  |
| -----: | ------: | -----: | -------------: | ----------: | ----------------------- | ----------------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change |   Delta |      % |           Time | Contentions | Caller               | Location                                  |
| -----: | ------: | -----: | -------------: | ----------: | -------------------- | ----------------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|  Change |    Delta |             % |         Time | Contentions | Caller                                                                                                                 | Location                                    |
| ------: | -------: | ------------: | -----------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed | -13.300s | 100.0% → 0.0% | 13.30s → 0ms |      16 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
|     new |  +7.382s | 0.0% → 100.0% |  0ms → 7.38s |      0 → 16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`)

| Change |   Delta |      % |           Time | Contentions | Caller          | Location                             |
| -----: | ------: | -----: | -------------: | ----------: | --------------- | ------------------------------------ |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change |   Delta |      % |           Time | Contentions | Caller               | Location                             |
| -----: | ------: | -----: | -------------: | ----------: | -------------------- | ------------------------------------ |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `apply(Object)`      | `scala.runtime.function.JProcedure1` |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `foreach(Function1)` | `scala.collection.immutable.List`    |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change |   Delta |      % |           Time | Contentions | Caller                                                                        | Location                                    |
| -----: | ------: | -----: | -------------: | ----------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |   Delta |      % |           Time | Contentions | Caller           | Location                                    |
| -----: | ------: | -----: | -------------: | ----------: | ---------------- | ------------------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`)

| Change |   Delta |      % |           Time | Contentions | Caller                           | Location                                            |
| -----: | ------: | -----: | -------------: | ----------: | -------------------------------- | --------------------------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001082400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`)

| Change |   Delta |      % |           Time | Contentions | Caller                                           | Location                           |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------------------------ | ---------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |   Delta |      % |           Time | Contentions | Caller                         | Location                                          |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------ | ------------------------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |   Delta |      % |           Time | Contentions | Caller                     | Location                                          |
| -----: | ------: | -----: | -------------: | ----------: | -------------------------- | ------------------------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |   Delta |      % |           Time | Contentions | Caller                     | Location                   |
| -----: | ------: | -----: | -------------: | ----------: | -------------------------- | -------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |   Delta |      % |           Time | Contentions | Caller                                                      | Location                        |
| -----: | ------: | -----: | -------------: | ----------: | ----------------------------------------------------------- | ------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

| Change |   Delta |      % |            Time | Contentions | Caller                              | Location                            |
| -----: | ------: | -----: | --------------: | ----------: | ----------------------------------- | ----------------------------------- |
| -71.2% | -1.110s | 100.0% | 1.56s → 449.6ms |     99 → 11 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |      % |             Time | Contentions | Caller      | Location                                               |
| -----: | --------: | -----: | ---------------: | ----------: | ----------- | ------------------------------------------------------ |
| -91.0% | -859.55ms | 100.0% | 944.3ms → 84.8ms |      67 → 4 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |     Delta |      % |             Time | Contentions | Caller     | Location                            |
| -----: | --------: | -----: | ---------------: | ----------: | ---------- | ----------------------------------- |
| -91.0% | -859.55ms | 100.0% | 944.3ms → 84.8ms |      67 → 4 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change |     Delta |             % |             Time | Contentions | Caller                                                    | Location                                      |
| ------: | --------: | ------------: | ---------------: | ----------: | --------------------------------------------------------- | --------------------------------------------- |
|  -91.0% | -859.55ms |        100.0% | 944.3ms → 84.8ms |      67 → 4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -97.8% | -448.62ms | 48.6% → 12.0% | 458.8ms → 10.2ms |      34 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed | -175.81ms |  18.6% → 0.0% |    175.8ms → 0ms |      13 → 0 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  -94.2% | -171.55ms | 19.3% → 12.4% | 182.1ms → 10.5ms |      14 → 1 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |   Delta |             % |        Time | Contentions | Callee                | Location                                    |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------- | ------------------------------------------- |
|    new | +7.382s | 0.0% → 100.0% | 0ms → 7.38s |      0 → 16 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |   Delta |             % |        Time | Contentions | Callee               | Location                                  |
| -----: | ------: | ------------: | ----------: | ----------: | -------------------- | ----------------------------------------- |
|    new | +7.382s | 0.0% → 100.0% | 0ms → 7.38s |      0 → 16 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change |    Delta |      % |           Time | Contentions | Callee                | Location                   |
| -----: | -------: | -----: | -------------: | ----------: | --------------------- | -------------------------- |
| -74.2% | -27.327s | 100.0% | 36.80s → 9.48s | 1,608 → 115 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |             % |             Time | Contentions | Callee                                   | Location                            |
| -----: | --------: | ------------: | ---------------: | ----------: | ---------------------------------------- | ----------------------------------- |
| -89.8% |  -21.660s | 96.2% → 96.7% |   24.12s → 2.46s | 1,624 → 106 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |
| -91.0% | -859.55ms |   3.8% → 3.3% | 944.3ms → 84.8ms |      67 → 4 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |    Delta |      % |           Time | Contentions | Callee                              | Location                            |
| -----: | -------: | -----: | -------------: | ----------: | ----------------------------------- | ----------------------------------- |
| -89.8% | -22.519s | 100.0% | 25.06s → 2.54s | 1,691 → 110 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |    Delta |             % |            Time | Contentions | Callee            | Location                                 |
| -----: | -------: | ------------: | --------------: | ----------: | ----------------- | ---------------------------------------- |
| -91.1% | -20.549s | 93.5% → 81.7% |  22.56s → 2.01s |  1,525 → 95 | `park()`          | `java.util.concurrent.locks.LockSupport` |
| -71.2% |  -1.110s |  6.5% → 18.3% | 1.56s → 449.6ms |     99 → 11 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |    Delta |             % |         Time | Contentions | Callee                | Location                                    |
| ------: | -------: | ------------: | -----------: | ----------: | --------------------- | ------------------------------------------- |
| removed | -13.300s | 100.0% → 0.0% | 13.30s → 0ms |      16 → 0 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |    Delta |             % |         Time | Contentions | Callee               | Location                                  |
| ------: | -------: | ------------: | -----------: | ----------: | -------------------- | ----------------------------------------- |
| removed | -13.300s | 100.0% → 0.0% | 13.30s → 0ms |      16 → 0 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change |     Delta |           % |             Time | Contentions | Callee                                                    | Location                                      |
| ------: | --------: | ----------: | ---------------: | ----------: | --------------------------------------------------------- | --------------------------------------------- |
|  -47.6% |   -6.777s |      100.0% |   14.24s → 7.46s |     83 → 20 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
|  -97.8% | -448.62ms | 3.2% → 0.1% | 458.8ms → 10.2ms |      34 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed | -175.81ms | 1.2% → 0.0% |    175.8ms → 0ms |      13 → 0 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |      % |           Time | Contentions | Callee                 | Location                            |
| -----: | ------: | -----: | -------------: | ----------: | ---------------------- | ----------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |   Delta |      % |           Time | Contentions | Callee  | Location                            |
| -----: | ------: | -----: | -------------: | ----------: | ------- | ----------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `get()` | `java.util.concurrent.ForkJoinTask` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |    Delta |             % |         Time | Contentions | Callee            | Location                                  |
| ------: | -------: | ------------: | -----------: | ----------: | ----------------- | ----------------------------------------- |
| removed | -13.300s | 100.0% → 0.0% | 13.30s → 0ms |      16 → 0 | `$anonfun$1(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |
|     new |  +7.382s | 0.0% → 100.0% |  0ms → 7.38s |      0 → 16 | `$anonfun$2(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000700121db90`)

| Change |   Delta |      % |           Time | Contentions | Callee                       | Location                                  |
| -----: | ------: | -----: | -------------: | ----------: | ---------------------------- | ----------------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `map(Function1)` (`scala.collection.immutable.Range`)

| Change |   Delta |      % |           Time | Contentions | Callee          | Location                                                             |
| -----: | ------: | -----: | -------------: | ----------: | --------------- | -------------------------------------------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000700121db90` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |   Delta |      % |           Time | Contentions | Callee           | Location                           |
| -----: | ------: | -----: | -------------: | ----------: | ---------------- | ---------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `map(Function1)` | `scala.collection.immutable.Range` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change |   Delta |      % |           Time | Contentions | Callee                  | Location                                  |
| -----: | ------: | -----: | -------------: | ----------: | ----------------------- | ----------------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

| Change |   Delta |      % |           Time | Contentions | Callee                  | Location                                  |
| -----: | ------: | -----: | -------------: | ----------: | ----------------------- | ----------------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`)

|  Change |    Delta |             % |         Time | Contentions | Callee                                                                                                                 | Location                                    |
| ------: | -------: | ------------: | -----------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed | -13.300s | 100.0% → 0.0% | 13.30s → 0ms |      16 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
|     new |  +7.382s | 0.0% → 100.0% |  0ms → 7.38s |      0 → 16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change |   Delta |      % |           Time | Contentions | Callee              | Location                                                               |
| -----: | ------: | -----: | -------------: | ----------: | ------------------- | ---------------------------------------------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8` |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change |   Delta |      % |           Time | Contentions | Callee          | Location                             |
| -----: | ------: | -----: | -------------: | ----------: | --------------- | ------------------------------------ |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |   Delta |      % |           Time | Contentions | Callee               | Location                          |
| -----: | ------: | -----: | -------------: | ----------: | -------------------- | --------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`)

| Change |   Delta |      % |           Time | Contentions | Callee           | Location                                   |
| -----: | ------: | -----: | -------------: | ----------: | ---------------- | ------------------------------------------ |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`)

| Change |   Delta |      % |           Time | Contentions | Callee                         | Location                                             |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------ | ---------------------------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |   Delta |      % |           Time | Contentions | Callee                           | Location                                            |
| -----: | ------: | -----: | -------------: | ----------: | -------------------------------- | --------------------------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001082400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |   Delta |      % |           Time | Contentions | Callee                                           | Location                           |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------------------------ | ---------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |   Delta |      % |           Time | Contentions | Callee                         | Location                                          |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------ | ------------------------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |   Delta |      % |           Time | Contentions | Callee                     | Location                                          |
| -----: | ------: | -----: | -------------: | ----------: | -------------------------- | ------------------------------------------------- |
| -44.5% | -5.918s | 100.0% | 13.30s → 7.38s |          16 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

| Change |   Delta |      % |            Time | Contentions | Callee                | Location                   |
| -----: | ------: | -----: | --------------: | ----------: | --------------------- | -------------------------- |
| -71.2% | -1.110s | 100.0% | 1.56s → 449.6ms |     99 → 11 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |      % |             Time | Contentions | Callee                 | Location                            |
| -----: | --------: | -----: | ---------------: | ----------: | ---------------------- | ----------------------------------- |
| -91.0% | -859.55ms | 100.0% | 944.3ms → 84.8ms |      67 → 4 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |     Delta |      % |             Time | Contentions | Callee      | Location                                               |
| -----: | --------: | -----: | ---------------: | ----------: | ----------- | ------------------------------------------------------ |
| -91.0% | -859.55ms | 100.0% | 944.3ms → 84.8ms |      67 → 4 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |             % |             Time | Contentions | Callee   | Location                                            |
| -----: | --------: | ------------: | ---------------: | ----------: | -------- | --------------------------------------------------- |
| -91.0% | -859.55ms |        100.0% | 944.3ms → 84.8ms |      67 → 4 | `exec()` | `java.util.concurrent.RecursiveTask`                |
| -91.3% | -110.68ms | 12.8% → 12.4% | 121.2ms → 10.5ms |       9 → 1 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time blocked in their leaf frame.

| Change |   Delta |            % |        Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -----: | ------: | -----------: | ----------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|    new | +7.382s | 0.0% → 74.3% | 0ms → 7.38s |      0 → 16 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000700121db90`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |

### Improvements

Call stacks with the largest decrease in time blocked in their leaf frame.

|  Change |     Delta |             % |             Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------: | --------: | ------------: | ---------------: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -91.1% |  -20.549s | 58.8% → 20.3% |   22.56s → 2.01s |  1,525 → 95 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |  -13.300s |  34.7% → 0.0% |     13.30s → 0ms |      16 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a0011f6c70`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a001198798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -71.2% |   -1.110s |   4.1% → 4.5% |  1.56s → 449.6ms |     99 → 11 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  -82.5% | -301.94ms |   1.0% → 0.6% | 366.0ms → 64.0ms |      24 → 2 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -94.1% | -161.84ms |   0.4% → 0.1% | 172.0ms → 10.2ms |      12 → 1 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -87.7% |  -74.89ms |   0.2% → 0.1% |  85.4ms → 10.5ms |       6 → 1 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000700121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed |  -50.02ms |   0.1% → 0.0% |     50.0ms → 0ms |       4 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed |  -29.07ms |   0.1% → 0.0% |     29.1ms → 0ms |       2 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed |  -23.96ms |   0.1% → 0.0% |     24.0ms → 0ms |       2 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed |  -21.23ms |   0.1% → 0.0% |     21.2ms → 0ms |       2 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed |  -20.64ms |   0.1% → 0.0% |     20.6ms → 0ms |       1 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed |  -15.98ms |  <0.1% → 0.0% |     16.0ms → 0ms |       1 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                               |
| removed |  -15.76ms |  <0.1% → 0.0% |     15.8ms → 0ms |       1 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed |  -15.59ms |  <0.1% → 0.0% |     15.6ms → 0ms |       1 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |  -15.20ms |  <0.1% → 0.0% |     15.2ms → 0ms |       1 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |  -13.77ms |  <0.1% → 0.0% |     13.8ms → 0ms |       1 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
| removed |  -13.30ms |  <0.1% → 0.0% |     13.3ms → 0ms |       1 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed |  -12.16ms |  <0.1% → 0.0% |     12.2ms → 0ms |       1 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |  -11.60ms |  <0.1% → 0.0% |     11.6ms → 0ms |       1 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed |  -10.76ms |  <0.1% → 0.0% |     10.8ms → 0ms |       1 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

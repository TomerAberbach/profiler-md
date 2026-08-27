# Sampling profile diff

Collected 1,467 samples → 1,479 samples (+12 samples, +0.8%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             |  +0.2% |    +3 | 89.6% → 89.1% | 1,315 → 1,318 |
| Standard library |  +5.9% |    +9 | 10.4% → 10.9% |     152 → 161 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                  | Location                                                                              |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  +14.2% |   +75 | 36.1% → 40.9% | 530 → 605 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +700.0% |   +14 |   0.1% → 1.1% |    2 → 16 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                                                   |
|   +5.0% |   +10 | 13.6% → 14.2% | 200 → 210 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +200.0% |   +10 |   0.3% → 1.0% |    5 → 15 | `grow(int)`                                               | `java.util.ArrayList`                                                                 |
|  +61.5% |    +8 |   0.9% → 1.4% |   13 → 21 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                                   |
| +175.0% |    +7 |   0.3% → 0.7% |    4 → 11 | `apply(Object)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000801204b38` |
|     new |    +4 |   0.0% → 0.3% |     0 → 4 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                                                   |
|   +8.8% |    +3 |   2.3% → 2.5% |   34 → 37 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                                                    |
|   +9.1% |    +2 |   1.5% → 1.6% |   22 → 24 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                                                   |
| +100.0% |    +1 |          0.1% |     1 → 2 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                                                   |
| +100.0% |    +1 |          0.1% |     1 → 2 | `add(double[], double[])`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +100.0% |    +1 |          0.1% |     1 → 2 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                                                   |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `unpark(Thread)`                                          | `java.util.concurrent.locks.LockSupport`                                              |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `tryCompensate(long, boolean)`                            | `java.util.concurrent.ForkJoinPool`                                                   |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `checkAccess0(File, int)`                                 | `java.io.UnixFileSystem`                                                              |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `valueOf(double)`                                         | `java.lang.Double`                                                                    |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `wrapSink(Sink)`                                          | `java.util.stream.AbstractPipeline`                                                   |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `checkIndex(int, int)`                                    | `java.util.Objects`                                                                   |

##### Ours

|  Change | Delta |             % |   Samples | Function                         | Location                                                                              |
| ------: | ----: | ------------: | --------: | -------------------------------- | ------------------------------------------------------------------------------------- |
|  +14.2% |   +75 | 36.1% → 40.9% | 530 → 605 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +5.0% |   +10 | 13.6% → 14.2% | 200 → 210 | `findNearestCentroid()`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +175.0% |    +7 |   0.3% → 0.7% |    4 → 11 | `apply(Object)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000801204b38` |
|   +9.1% |    +2 |   1.5% → 1.6% |   22 → 24 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `compute()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
| +100.0% |    +1 |          0.1% |     1 → 2 | `add(double[], double[])`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                  | Location                                 |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------- | ---------------------------------------- |
| +700.0% |   +14 | 0.1% → 1.1% |  2 → 16 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                      |
| +200.0% |   +10 | 0.3% → 1.0% |  5 → 15 | `grow(int)`                                               | `java.util.ArrayList`                    |
|  +61.5% |    +8 | 0.9% → 1.4% | 13 → 21 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`      |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`      |
|   +8.8% |    +3 | 2.3% → 2.5% | 34 → 37 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`      |
| +100.0% |    +1 |        0.1% |   1 → 2 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`      |
| +100.0% |    +1 |        0.1% |   1 → 2 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `unpark(Thread)`                                          | `java.util.concurrent.locks.LockSupport` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `tryCompensate(long, boolean)`                            | `java.util.concurrent.ForkJoinPool`      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `checkAccess0(File, int)`                                 | `java.io.UnixFileSystem`                 |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `valueOf(double)`                                         | `java.lang.Double`                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `wrapSink(Sink)`                                          | `java.util.stream.AbstractPipeline`      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `checkIndex(int, int)`                                    | `java.util.Objects`                      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `accept(double)`                                          | `java.util.stream.DoublePipeline$1$1`    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `forEachRemaining(Consumer)`                              | `java.util.Spliterator$OfDouble`         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `nextNode()`                                              | `java.util.HashMap$HashIterator`         |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                                     | Location                                                   |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  -10.3% |   -39 | 25.9% → 23.1% | 380 → 341 | `distance(Double[], Double[])`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -23.1% |   -25 |   7.4% → 5.6% |  108 → 83 | `collectClusters(int[])`                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -34.9% |   -22 |   4.3% → 2.8% |   63 → 41 | `vectorSum()`                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -34.9% |   -22 |   4.3% → 2.8% |   63 → 41 | `computeIfAbsent(Object, Function)`                                          | `java.util.HashMap`                                        |
| removed |    -4 |   0.3% → 0.0% |     4 → 0 | `lambda$merge$6(List, List)`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `park(boolean, long)`                                                        | `jdk.internal.misc.Unsafe`                                 |
|  -50.0% |    -2 |   0.3% → 0.1% |     4 → 2 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                | `java.util.zip.Inflater`                                   |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `doExec()`                                                                   | `java.util.concurrent.ForkJoinTask`                        |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `resize()`                                                                   | `java.util.HashMap`                                        |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `lambda$merge$7(Map, Object, List)`                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `readBytes0(byte[], int, int)`                                               | `java.io.RandomAccessFile`                                 |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `definePackage(String, String, String, String, String, String, String, URL)` | `java.lang.ClassLoader`                                    |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `write0(FileDescriptor, long, int)`                                          | `sun.nio.ch.UnixFileDispatcherImpl`                        |
|  -20.0% |    -1 |          0.3% |     5 → 4 | `accept(Object)`                                                             | `java.util.stream.ReduceOps$3ReducingSink`                 |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                    | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  -50.0% |    -1 |          0.1% |     2 → 1 | `runWorker(ForkJoinPool$WorkQueue)`                                          | `java.util.concurrent.ForkJoinPool`                        |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `getAndClearSlot(ForkJoinTask[], int)`                                       | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `allocateInstance(Class)`                                                    | `jdk.internal.misc.Unsafe`                                 |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `<init>(AbstractPipeline, int)`                                              | `java.util.stream.ReferencePipeline`                       |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)`                                  | `java.util.concurrent.ForkJoinPool$WorkQueue`              |

##### Ours

|  Change | Delta |             % |   Samples | Function                            | Location                                                   |
| ------: | ----: | ------------: | --------: | ----------------------------------- | ---------------------------------------------------------- |
|  -10.3% |   -39 | 25.9% → 23.1% | 380 → 341 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -23.1% |   -25 |   7.4% → 5.6% |  108 → 83 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -34.9% |   -22 |   4.3% → 2.8% |   63 → 41 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -4 |   0.3% → 0.0% |     4 → 0 | `lambda$merge$6(List, List)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                     | Location                                      |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------- | --------------------------------------------- |
|  -34.9% |   -22 | 4.3% → 2.8% | 63 → 41 | `computeIfAbsent(Object, Function)`                                          | `java.util.HashMap`                           |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `park(boolean, long)`                                                        | `jdk.internal.misc.Unsafe`                    |
|  -50.0% |    -2 | 0.3% → 0.1% |   4 → 2 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                | `java.util.zip.Inflater`                      |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `doExec()`                                                                   | `java.util.concurrent.ForkJoinTask`           |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `resize()`                                                                   | `java.util.HashMap`                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `readBytes0(byte[], int, int)`                                               | `java.io.RandomAccessFile`                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `definePackage(String, String, String, String, String, String, String, URL)` | `java.lang.ClassLoader`                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `write0(FileDescriptor, long, int)`                                          | `sun.nio.ch.UnixFileDispatcherImpl`           |
|  -20.0% |    -1 |        0.3% |   5 → 4 | `accept(Object)`                                                             | `java.util.stream.ReduceOps$3ReducingSink`    |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                    | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -50.0% |    -1 |        0.1% |   2 → 1 | `runWorker(ForkJoinPool$WorkQueue)`                                          | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `getAndClearSlot(ForkJoinTask[], int)`                                       | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `allocateInstance(Class)`                                                    | `jdk.internal.misc.Unsafe`                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(AbstractPipeline, int)`                                              | `java.util.stream.ReferencePipeline`          |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)`                                  | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `<init>(HashMap)`                                                            | `java.util.HashMap$HashIterator`              |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % |       Samples | Function                                  | Location                                                               |
| ------: | ----: | ------------: | ------------: | ----------------------------------------- | ---------------------------------------------------------------------- |
|  +14.2% |   +75 | 36.1% → 40.9% |     530 → 605 | `accumulate(Double[], double[])`          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +8.9% |   +53 | 40.4% → 43.7% |     593 → 646 | `vectorSum()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +8.9% |   +53 | 40.4% → 43.7% |     593 → 646 | `computeDirectly()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   +1.3% |   +19 | 96.7% → 97.2% | 1,418 → 1,437 | `awaitDone(int, long)`                    | `java.util.concurrent.ForkJoinTask`                                    |
|   +1.3% |   +19 | 96.7% → 97.2% | 1,418 → 1,437 | `join()`                                  | `java.util.concurrent.ForkJoinTask`                                    |
|   +6.2% |   +16 | 17.6% → 18.5% |     258 → 274 | `invoke()`                                | `java.util.concurrent.ForkJoinTask`                                    |
|   +1.0% |   +15 | 98.8% → 99.1% | 1,450 → 1,465 | `doExec()`                                | `java.util.concurrent.ForkJoinTask`                                    |
|   +1.0% |   +14 | 98.7% → 98.9% | 1,448 → 1,462 | `compute()`                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|   +1.0% |   +14 | 98.7% → 98.9% | 1,448 → 1,462 | `exec()`                                  | `java.util.concurrent.RecursiveTask`                                   |
|   +0.9% |   +13 | 95.8% → 95.9% | 1,406 → 1,419 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|   +5.4% |   +13 | 16.3% → 17.0% |     239 → 252 | `computeClusterAverages()`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +5.6% |   +13 | 15.7% → 16.5% |     231 → 244 | `computeDirectly()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   +5.0% |   +12 | 16.2% → 16.9% |     238 → 250 | `average(List)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  +30.8% |   +12 |   2.7% → 3.4% |       39 → 51 | `grow(int)`                               | `java.util.ArrayList`                                                  |
|  +30.8% |   +12 |   2.7% → 3.4% |       39 → 51 | `grow()`                                  | `java.util.ArrayList`                                                  |
|  +30.8% |   +12 |   2.7% → 3.4% |       39 → 51 | `add(Object, Object[], int)`              | `java.util.ArrayList`                                                  |
|  +30.8% |   +12 |   2.7% → 3.4% |       39 → 51 | `add(Object)`                             | `java.util.ArrayList`                                                  |
| +183.3% |   +11 |   0.4% → 1.1% |        6 → 17 | `merge(Object, Object, BiFunction)`       | `java.util.HashMap`                                                    |
|  +45.5% |   +10 |   1.5% → 2.2% |       22 → 32 | `call()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011ffbc0` |
|  +36.0% |    +9 |   1.7% → 2.3% |       25 → 34 | `lambda$run$0(int, List, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |

##### Ours

|  Change | Delta |             % |       Samples | Function                             | Location                                                                              |
| ------: | ----: | ------------: | ------------: | ------------------------------------ | ------------------------------------------------------------------------------------- |
|  +14.2% |   +75 | 36.1% → 40.9% |     530 → 605 | `accumulate(Double[], double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +8.9% |   +53 | 40.4% → 43.7% |     593 → 646 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +8.9% |   +53 | 40.4% → 43.7% |     593 → 646 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|   +1.0% |   +14 | 98.7% → 98.9% | 1,448 → 1,462 | `compute()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|   +5.4% |   +13 | 16.3% → 17.0% |     239 → 252 | `computeClusterAverages()`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   +5.6% |   +13 | 15.7% → 16.5% |     231 → 244 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   +5.0% |   +12 | 16.2% → 16.9% |     238 → 250 | `average(List)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  +45.5% |   +10 |   1.5% → 2.2% |       22 → 32 | `call()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011ffbc0`                |
|  +36.0% |    +9 |   1.7% → 2.3% |       25 → 34 | `lambda$run$0(int, List, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| +112.5% |    +9 |   0.5% → 1.1% |        8 → 17 | `lambda$merge$7(Map, Object, List)`  | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| +112.5% |    +9 |   0.5% → 1.1% |        8 → 17 | `accept(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204d88`                |
|  +66.7% |    +8 |   0.8% → 1.4% |       12 → 20 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +66.7% |    +8 |   0.8% → 1.4% |       12 → 20 | `combineResults(Map, Map)`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +66.7% |    +8 |   0.8% → 1.4% |       12 → 20 | `combineResults(Object, Object)`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +175.0% |    +7 |   0.3% → 0.7% |        4 → 11 | `apply(Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000801204b38` |
|  +20.0% |    +1 |   0.3% → 0.4% |         5 → 6 | `generateData(int, int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  +20.0% |    +1 |   0.3% → 0.4% |         5 → 6 | `setUpBeforeAll(BenchmarkContext)`   | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
|  +20.0% |    +1 |   0.3% → 0.4% |         5 → 6 | `executeBenchmark()`                 | `org.renaissance.harness.ExecutionDriver`                                             |
| +100.0% |    +1 |          0.1% |         1 → 2 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +100.0% |    +1 |          0.1% |         1 → 2 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                      | Location                                            |
| ------: | ----: | ------------: | ------------: | --------------------------------------------- | --------------------------------------------------- |
|   +1.3% |   +19 | 96.7% → 97.2% | 1,418 → 1,437 | `awaitDone(int, long)`                        | `java.util.concurrent.ForkJoinTask`                 |
|   +1.3% |   +19 | 96.7% → 97.2% | 1,418 → 1,437 | `join()`                                      | `java.util.concurrent.ForkJoinTask`                 |
|   +6.2% |   +16 | 17.6% → 18.5% |     258 → 274 | `invoke()`                                    | `java.util.concurrent.ForkJoinTask`                 |
|   +1.0% |   +15 | 98.8% → 99.1% | 1,450 → 1,465 | `doExec()`                                    | `java.util.concurrent.ForkJoinTask`                 |
|   +1.0% |   +14 | 98.7% → 98.9% | 1,448 → 1,462 | `exec()`                                      | `java.util.concurrent.RecursiveTask`                |
|   +0.9% |   +13 | 95.8% → 95.9% | 1,406 → 1,419 | `tryRemoveAndExec(ForkJoinTask, boolean)`     | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|  +30.8% |   +12 |   2.7% → 3.4% |       39 → 51 | `grow(int)`                                   | `java.util.ArrayList`                               |
|  +30.8% |   +12 |   2.7% → 3.4% |       39 → 51 | `grow()`                                      | `java.util.ArrayList`                               |
|  +30.8% |   +12 |   2.7% → 3.4% |       39 → 51 | `add(Object, Object[], int)`                  | `java.util.ArrayList`                               |
|  +30.8% |   +12 |   2.7% → 3.4% |       39 → 51 | `add(Object)`                                 | `java.util.ArrayList`                               |
| +183.3% |   +11 |   0.4% → 1.1% |        6 → 17 | `merge(Object, Object, BiFunction)`           | `java.util.HashMap`                                 |
| +112.5% |    +9 |   0.5% → 1.1% |        8 → 17 | `forEach(BiConsumer)`                         | `java.util.HashMap`                                 |
|   +0.5% |    +5 | 72.2% → 71.9% | 1,059 → 1,064 | `run()`                                       | `java.util.concurrent.ForkJoinWorkerThread`         |
|  +22.2% |    +4 |   1.2% → 1.5% |       18 → 22 | `exec()`                                      | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  +60.0% |    +3 |   0.3% → 0.5% |         5 → 8 | `copyInto(Sink, Spliterator)`                 | `java.util.stream.AbstractPipeline`                 |
|  +60.0% |    +3 |   0.3% → 0.5% |         5 → 8 | `wrapAndCopyInto(Sink, Spliterator)`          | `java.util.stream.AbstractPipeline`                 |
|   +8.8% |    +3 |   2.3% → 2.5% |       34 → 37 | `copyOf(Object[], int)`                       | `java.util.Arrays`                                  |
|     new |    +3 |   0.0% → 0.2% |         0 → 3 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline`                 |
|     new |    +3 |   0.0% → 0.2% |         0 → 3 | `evaluateToArrayNode(IntFunction)`            | `java.util.stream.AbstractPipeline`                 |
|     new |    +3 |   0.0% → 0.2% |         0 → 3 | `toArray(IntFunction)`                        | `java.util.stream.ReferencePipeline`                |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |   Samples | Function                                                    | Location                                                   |
| -----: | ----: | ------------: | --------: | ----------------------------------------------------------- | ---------------------------------------------------------- |
|  -6.6% |   -54 | 55.6% → 51.5% | 816 → 762 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -10.3% |   -39 | 25.9% → 23.1% | 380 → 341 | `distance(Double[], Double[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -13.5% |   -29 | 14.7% → 12.6% | 215 → 186 | `collectClusters(int[])`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -4.8% |   -28 | 39.5% → 37.3% | 580 → 552 | `findNearestCentroid()`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -24.6% |   -17 |   4.7% → 3.5% |   69 → 52 | `computeIfAbsent(Object, Function)`                         | `java.util.HashMap`                                        |
|  -1.4% |    -6 | 28.5% → 27.9% | 418 → 412 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`   | `java.util.concurrent.ForkJoinPool`                        |
| -33.3% |    -4 |   0.8% → 0.5% |    12 → 8 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                            |
| -60.0% |    -3 |   0.3% → 0.1% |     5 → 2 | `read(byte[], int, int)`                                    | `java.util.zip.InflaterInputStream`                        |
| -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `transferTo(OutputStream)`                                  | `java.io.InputStream`                                      |
| -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `copy(InputStream, Path, CopyOption[])`                     | `java.nio.file.Files`                                      |
| -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `extractResource(String, Path)`                             | `org.renaissance.core.ResourceUtils`                       |
| -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `extractResources(Iterable, Path)`                          | `org.renaissance.core.ResourceUtils`                       |
| -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `createClassLoaderForModule(String)`                        | `org.renaissance.core.ModuleLoader`                        |
| -25.0% |    -3 |   0.8% → 0.6% |    12 → 9 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                            |
| -25.0% |    -3 |   0.8% → 0.6% |    12 → 9 | `main(String[])`                                            | `org.renaissance.core.Launcher`                            |
| -30.0% |    -3 |   0.7% → 0.5% |    10 → 7 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite$`                |
| -30.0% |    -3 |   0.7% → 0.5% |    10 → 7 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite`                 |
| -30.0% |    -3 |   0.7% → 0.5% |    10 → 7 | `invokeStatic(Object, Object)`                              | `java.lang.invoke.LambdaForm$DMH.0x0000000801001c00`       |
| -30.0% |    -3 |   0.7% → 0.5% |    10 → 7 | `invoke(Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x0000000801082400`        |
| -30.0% |    -3 |   0.7% → 0.5% |    10 → 7 | `invokeExact_MT(Object, Object, Object, Object)`            | `java.lang.invoke.Invokers$Holder`                         |

##### Ours

|  Change | Delta |             % |   Samples | Function                                                                                     | Location                                                               |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|   -6.6% |   -54 | 55.6% → 51.5% | 816 → 762 | `computeDirectly()`                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -10.3% |   -39 | 25.9% → 23.1% | 380 → 341 | `distance(Double[], Double[])`                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -13.5% |   -29 | 14.7% → 12.6% | 215 → 186 | `collectClusters(int[])`                                                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   -4.8% |   -28 | 39.5% → 37.3% | 580 → 552 | `findNearestCentroid()`                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -33.3% |    -4 |   0.8% → 0.5% |    12 → 8 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                  | `org.renaissance.core.Launcher`                                        |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `extractResource(String, Path)`                                                              | `org.renaissance.core.ResourceUtils`                                   |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `extractResources(Iterable, Path)`                                                           | `org.renaissance.core.ResourceUtils`                                   |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `createClassLoaderForModule(String)`                                                         | `org.renaissance.core.ModuleLoader`                                    |
|  -25.0% |    -3 |   0.8% → 0.6% |    12 → 9 | `launchHarnessClass(String, String[])`                                                       | `org.renaissance.core.Launcher`                                        |
|  -25.0% |    -3 |   0.8% → 0.6% |    12 → 9 | `main(String[])`                                                                             | `org.renaissance.core.Launcher`                                        |
|  -30.0% |    -3 |   0.7% → 0.5% |    10 → 7 | `main(String[])`                                                                             | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -30.0% |    -3 |   0.7% → 0.5% |    10 → 7 | `main(String[])`                                                                             | `org.renaissance.harness.RenaissanceSuite`                             |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `lambda$merge$6(List, List)`                                                                 | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `apply(Object, Object)`                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204fd0` |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `getBenchmarkClassLoader(BenchmarkDescriptor)`                                               | `org.renaissance.core.BenchmarkSuite`                                  |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `createBenchmark(BenchmarkDescriptor)`                                                       | `org.renaissance.core.BenchmarkSuite`                                  |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver`                              |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `<init>()`                                                                                   | `scopt.Read$$anon$2`                                                   |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `<clinit>()`                                                                                 | `scopt.Read$`                                                          |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `head(Seq)`                                                                                  | `scopt.OptionParser`                                                   |

##### Standard library

|  Change | Delta |             % |   Samples | Function                                                                    | Location                                             |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------------------- | ---------------------------------------------------- |
|  -24.6% |   -17 |   4.7% → 3.5% |   69 → 52 | `computeIfAbsent(Object, Function)`                                         | `java.util.HashMap`                                  |
|   -1.4% |    -6 | 28.5% → 27.9% | 418 → 412 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                   | `java.util.concurrent.ForkJoinPool`                  |
|  -60.0% |    -3 |   0.3% → 0.1% |     5 → 2 | `read(byte[], int, int)`                                                    | `java.util.zip.InflaterInputStream`                  |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `transferTo(OutputStream)`                                                  | `java.io.InputStream`                                |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `copy(InputStream, Path, CopyOption[])`                                     | `java.nio.file.Files`                                |
|  -30.0% |    -3 |   0.7% → 0.5% |    10 → 7 | `invokeStatic(Object, Object)`                                              | `java.lang.invoke.LambdaForm$DMH.0x0000000801001c00` |
|  -30.0% |    -3 |   0.7% → 0.5% |    10 → 7 | `invoke(Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000000801082400`  |
|  -30.0% |    -3 |   0.7% → 0.5% |    10 → 7 | `invokeExact_MT(Object, Object, Object, Object)`                            | `java.lang.invoke.Invokers$Holder`                   |
|  -30.0% |    -3 |   0.7% → 0.5% |    10 → 7 | `invokeImpl(Object, Object[])`                                              | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  -30.0% |    -3 |   0.7% → 0.5% |    10 → 7 | `invoke(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  -30.0% |    -3 |   0.7% → 0.5% |    10 → 7 | `invoke(Object, Object[])`                                                  | `java.lang.reflect.Method`                           |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `park(boolean, long)`                                                       | `jdk.internal.misc.Unsafe`                           |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `park()`                                                                    | `java.util.concurrent.locks.LockSupport`             |
|  -50.0% |    -2 |   0.3% → 0.1% |     4 → 2 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`               | `java.util.zip.Inflater`                             |
|  -50.0% |    -2 |   0.3% → 0.1% |     4 → 2 | `inflate(byte[], int, int)`                                                 | `java.util.zip.Inflater`                             |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `read(byte[], int, int)`                                                    | `java.io.FilterInputStream`                          |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `defineClass(String, Resource)`                                             | `java.net.URLClassLoader`                            |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `run()`                                                                     | `java.net.URLClassLoader$1`                          |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`                     |
|  -66.7% |    -2 |   0.2% → 0.1% |     3 → 1 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`             | `java.security.AccessController`                     |

# Allocated heap profile diff

Allocated 37.9 GiB → 37.8 GiB (-52.029 MiB, -0.1%) over 2,033 samples → 2,021 samples (19.1 MiB → 19.2 MiB per sample).

| Category         | Change |        Delta |             % |                Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| Standard library |  +1.4% | +510.838 MiB | 94.4% → 95.9% | 35.8 GiB → 36.3 GiB | 1,924 → 1,927 |
| Ours             | -26.0% | -562.868 MiB |   5.6% → 4.1% | 2.11 GiB → 1.56 GiB |      106 → 92 |
| Unknown          |  -7.5% |       -160 B |         <0.1% | 2.07 KiB → 1.91 KiB |         3 → 2 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |             % |                Size |       Samples | Function                                                                        | Location                                                  |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------- | --------------------------------------------------------- |
|   +1.5% | +519.773 MiB | 91.8% → 93.2% | 34.8 GiB → 35.3 GiB | 1,772 → 1,751 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                                        |
|     new | +158.216 MiB |   0.0% → 0.4% |       0 B → 158 MiB |         0 → 1 | `read(InputStream, String)`                                                     | `java.util.jar.Manifest`                                  |
| +485.9% | +119.347 MiB |   0.1% → 0.4% |  24.6 MiB → 144 MiB |         3 → 5 | `lambda$merge$6(List, List)`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`               |
|     new |  +60.906 MiB |   0.0% → 0.2% |      0 B → 60.9 MiB |         0 → 1 | `awaitDone(int, long)`                                                          | `java.util.concurrent.ForkJoinTask`                       |
| +185.9% |   +48.43 MiB |   0.1% → 0.2% | 26.1 MiB → 74.5 MiB |         1 → 3 | `add(double[], double[])`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  +20.4% |  +47.154 MiB |   0.6% → 0.7% |   231 MiB → 279 MiB |        5 → 11 | `grow(int)`                                                                     | `java.util.ArrayList`                                     |
|  +17.1% |  +19.723 MiB |          0.3% |   116 MiB → 135 MiB |         6 → 7 | `resize()`                                                                      | `java.util.HashMap`                                       |
| +227.4% |  +10.203 MiB |         <0.1% | 4.49 MiB → 14.7 MiB |        8 → 23 | `copyOf(Object[], int, Class)`                                                  | `java.util.Arrays`                                        |
| +146.0% |   +4.287 MiB |         <0.1% | 2.94 MiB → 7.22 MiB |         2 → 1 | `vectorSum()`                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| +224.8% |   +2.499 MiB |         <0.1% | 1.11 MiB → 3.61 MiB |        3 → 10 | `allocateInstance(Class)`                                                       | `jdk.internal.misc.Unsafe`                                |
| +116.6% |   +1.728 MiB |         <0.1% | 1.48 MiB → 3.21 MiB |         4 → 8 | `range(int, int)`                                                               | `java.util.stream.IntStream`                              |
|  +43.5% |   +1.609 MiB |         <0.1% |  3.7 MiB → 5.31 MiB |       12 → 14 | `intStream(Spliterator$OfInt, boolean)`                                         | `java.util.stream.StreamSupport`                          |
|     new |   +1.343 MiB |  0.0% → <0.1% |      0 B → 1.34 MiB |         0 → 1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                   |
|     new |  +935.57 KiB |  0.0% → <0.1% |       0 B → 936 KiB |         0 → 1 | `result()`                                                                      | `scala.collection.immutable.VectorBuilder`                |
|  +23.6% | +895.617 KiB |         <0.1% | 3.71 MiB → 4.58 MiB |       10 → 14 | `mapToObj(IntFunction, int)`                                                    | `java.util.stream.IntPipeline`                            |
|     new | +792.695 KiB |  0.0% → <0.1% |       0 B → 793 KiB |         0 → 2 | `loadConvert(char[], int, int, StringBuilder)`                                  | `java.util.Properties`                                    |
|     new | +775.484 KiB |  0.0% → <0.1% |       0 B → 775 KiB |         0 → 2 | `allocateInstance(Object)`                                                      | `java.lang.invoke.DirectMethodHandle`                     |
|  +66.2% | +753.648 KiB |         <0.1% | 1.11 MiB → 1.85 MiB |         3 → 6 | `builder(long, IntFunction)`                                                    | `java.util.stream.Nodes`                                  |
|     new | +666.656 KiB |  0.0% → <0.1% |       0 B → 667 KiB |         0 → 1 | `<init>(InputStream, int)`                                                      | `java.util.jar.Manifest$FastInputStream`                  |
|  +80.1% | +617.984 KiB |         <0.1% |  771 KiB → 1.36 MiB |         2 → 1 | `fillInStackTrace(int)`                                                         | `java.lang.Throwable`                                     |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                                                        | Location                                   |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------- | ------------------------------------------ |
|   +1.5% | +519.773 MiB | 91.8% → 93.2% | 34.8 GiB → 35.3 GiB | 1,772 → 1,751 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                         |
|     new | +158.216 MiB |   0.0% → 0.4% |       0 B → 158 MiB |         0 → 1 | `read(InputStream, String)`                                                     | `java.util.jar.Manifest`                   |
|     new |  +60.906 MiB |   0.0% → 0.2% |      0 B → 60.9 MiB |         0 → 1 | `awaitDone(int, long)`                                                          | `java.util.concurrent.ForkJoinTask`        |
|  +20.4% |  +47.154 MiB |   0.6% → 0.7% |   231 MiB → 279 MiB |        5 → 11 | `grow(int)`                                                                     | `java.util.ArrayList`                      |
|  +17.1% |  +19.723 MiB |          0.3% |   116 MiB → 135 MiB |         6 → 7 | `resize()`                                                                      | `java.util.HashMap`                        |
| +227.4% |  +10.203 MiB |         <0.1% | 4.49 MiB → 14.7 MiB |        8 → 23 | `copyOf(Object[], int, Class)`                                                  | `java.util.Arrays`                         |
| +224.8% |   +2.499 MiB |         <0.1% | 1.11 MiB → 3.61 MiB |        3 → 10 | `allocateInstance(Class)`                                                       | `jdk.internal.misc.Unsafe`                 |
| +116.6% |   +1.728 MiB |         <0.1% | 1.48 MiB → 3.21 MiB |         4 → 8 | `range(int, int)`                                                               | `java.util.stream.IntStream`               |
|  +43.5% |   +1.609 MiB |         <0.1% |  3.7 MiB → 5.31 MiB |       12 → 14 | `intStream(Spliterator$OfInt, boolean)`                                         | `java.util.stream.StreamSupport`           |
|     new |   +1.343 MiB |  0.0% → <0.1% |      0 B → 1.34 MiB |         0 → 1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                    |
|     new |  +935.57 KiB |  0.0% → <0.1% |       0 B → 936 KiB |         0 → 1 | `result()`                                                                      | `scala.collection.immutable.VectorBuilder` |
|  +23.6% | +895.617 KiB |         <0.1% | 3.71 MiB → 4.58 MiB |       10 → 14 | `mapToObj(IntFunction, int)`                                                    | `java.util.stream.IntPipeline`             |
|     new | +792.695 KiB |  0.0% → <0.1% |       0 B → 793 KiB |         0 → 2 | `loadConvert(char[], int, int, StringBuilder)`                                  | `java.util.Properties`                     |
|     new | +775.484 KiB |  0.0% → <0.1% |       0 B → 775 KiB |         0 → 2 | `allocateInstance(Object)`                                                      | `java.lang.invoke.DirectMethodHandle`      |
|  +66.2% | +753.648 KiB |         <0.1% | 1.11 MiB → 1.85 MiB |         3 → 6 | `builder(long, IntFunction)`                                                    | `java.util.stream.Nodes`                   |
|     new | +666.656 KiB |  0.0% → <0.1% |       0 B → 667 KiB |         0 → 1 | `<init>(InputStream, int)`                                                      | `java.util.jar.Manifest$FastInputStream`   |
|  +80.1% | +617.984 KiB |         <0.1% |  771 KiB → 1.36 MiB |         2 → 1 | `fillInStackTrace(int)`                                                         | `java.lang.Throwable`                      |
|  +11.2% | +469.664 KiB |         <0.1% | 4.09 MiB → 4.55 MiB |        7 → 11 | `<init>(InputStream, Inflater, int)`                                            | `java.util.zip.InflaterInputStream`        |
|     new | +402.687 KiB |  0.0% → <0.1% |       0 B → 403 KiB |         0 → 1 | `clone()`                                                                       | `java.lang.Object`                         |
|     new | +394.703 KiB |  0.0% → <0.1% |       0 B → 395 KiB |         0 → 1 | `loadClass(String, boolean)`                                                    | `jdk.internal.loader.BuiltinClassLoader`   |

##### Ours

|  Change |        Delta |            % |                Size | Samples | Function                     | Location                                                  |
| ------: | -----------: | -----------: | ------------------: | ------: | ---------------------------- | --------------------------------------------------------- |
| +485.9% | +119.347 MiB |  0.1% → 0.4% |  24.6 MiB → 144 MiB |   3 → 5 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans`               |
| +185.9% |   +48.43 MiB |  0.1% → 0.2% | 26.1 MiB → 74.5 MiB |   1 → 3 | `add(double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| +146.0% |   +4.287 MiB |        <0.1% | 2.94 MiB → 7.22 MiB |   2 → 1 | `vectorSum()`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|     new | +388.703 KiB | 0.0% → <0.1% |       0 B → 389 KiB |   0 → 1 | `parse(String)`              | `org.renaissance.core.Version`                            |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |          Delta |            % |                Size | Samples | Function                                     | Location                                                   |
| ------: | -------------: | -----------: | ------------------: | ------: | -------------------------------------------- | ---------------------------------------------------------- |
|  -30.4% |   -386.462 MiB |  3.3% → 2.3% |  1.24 GiB → 886 MiB | 62 → 55 | `findNearestCentroid()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -49.4% |    -304.62 MiB |  1.6% → 0.8% |   616 MiB → 312 MiB | 15 → 14 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                        |
|  -85.4% |   -170.112 MiB |  0.5% → 0.1% |  199 MiB → 29.1 MiB |   5 → 2 | `merge(Map, Map)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -78.0% |   -114.283 MiB |  0.4% → 0.1% |  147 MiB → 32.3 MiB |       4 | `lambda$collectClusters$0(Double[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -19.2% |    -26.339 MiB |  0.4% → 0.3% |   137 MiB → 111 MiB |   3 → 4 | `collectClusters(int[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -13.8% |    -21.895 MiB |         0.4% |   158 MiB → 137 MiB |   9 → 8 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -7.7% |    -14.848 MiB |         0.5% |   192 MiB → 177 MiB |  10 → 6 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -66.8% |     -6.257 MiB |        <0.1% |  9.36 MiB → 3.1 MiB |  25 → 8 | `valueOf(double)`                            | `java.lang.Double`                                         |
| removed |     -1.604 MiB | <0.1% → 0.0% |       1.6 MiB → 0 B |   1 → 0 | `iterator()`                                 | `java.util.HashMap$EntrySet`                               |
|  -54.7% |     -1.371 MiB |        <0.1% | 2.51 MiB → 1.14 MiB |   7 → 3 | `lambda$generateData$4(int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |     -1.215 MiB | <0.1% → 0.0% |      1.22 MiB → 0 B |   2 → 0 | `entrySet()`                                 | `java.util.HashMap`                                        |
| removed |      -1.13 MiB | <0.1% → 0.0% |      1.13 MiB → 0 B |   3 → 0 | `allocateUninitializedArray0(Class, int)`    | `jdk.internal.misc.Unsafe`                                 |
|   -8.4% | -1,004.703 KiB |        <0.1% | 11.7 MiB → 10.7 MiB | 22 → 21 | `copyOf(byte[], int)`                        | `java.util.Arrays`                                         |
| removed |   -845.453 KiB | <0.1% → 0.0% |       845 KiB → 0 B |   1 → 0 | `<init>(ClassWriter)`                        | `jdk.internal.org.objectweb.asm.SymbolTable`               |
| removed |   -770.039 KiB | <0.1% → 0.0% |       770 KiB → 0 B |   2 → 0 | `putVal(Object, Object, boolean)`            | `java.util.concurrent.ConcurrentHashMap`                   |
| removed |   -668.156 KiB | <0.1% → 0.0% |       668 KiB → 0 B |   2 → 0 | `addConstantUtf8(String)`                    | `jdk.internal.org.objectweb.asm.SymbolTable`               |
|   -1.9% |   -414.375 KiB |         0.1% | 21.2 MiB → 20.8 MiB |       1 | `initTable()`                                | `java.util.concurrent.ConcurrentHashMap`                   |
| removed |   -398.625 KiB | <0.1% → 0.0% |       399 KiB → 0 B |   2 → 0 | `valueOf(int)`                               | `java.lang.Integer`                                        |
| removed |   -395.421 KiB | <0.1% → 0.0% |       395 KiB → 0 B |   1 → 0 | `transferTo(OutputStream)`                   | `java.io.InputStream`                                      |
|  -33.2% |   -383.148 KiB |        <0.1% |  1.13 MiB → 770 KiB |   3 → 2 | `enlarge(int)`                               | `jdk.internal.org.objectweb.asm.ByteVector`                |

##### Standard library

|  Change |          Delta |            % |                Size | Samples | Function                                     | Location                                     |
| ------: | -------------: | -----------: | ------------------: | ------: | -------------------------------------------- | -------------------------------------------- |
|  -49.4% |    -304.62 MiB |  1.6% → 0.8% |   616 MiB → 312 MiB | 15 → 14 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                          |
|  -66.8% |     -6.257 MiB |        <0.1% |  9.36 MiB → 3.1 MiB |  25 → 8 | `valueOf(double)`                            | `java.lang.Double`                           |
| removed |     -1.604 MiB | <0.1% → 0.0% |       1.6 MiB → 0 B |   1 → 0 | `iterator()`                                 | `java.util.HashMap$EntrySet`                 |
| removed |     -1.215 MiB | <0.1% → 0.0% |      1.22 MiB → 0 B |   2 → 0 | `entrySet()`                                 | `java.util.HashMap`                          |
| removed |      -1.13 MiB | <0.1% → 0.0% |      1.13 MiB → 0 B |   3 → 0 | `allocateUninitializedArray0(Class, int)`    | `jdk.internal.misc.Unsafe`                   |
|   -8.4% | -1,004.703 KiB |        <0.1% | 11.7 MiB → 10.7 MiB | 22 → 21 | `copyOf(byte[], int)`                        | `java.util.Arrays`                           |
| removed |   -845.453 KiB | <0.1% → 0.0% |       845 KiB → 0 B |   1 → 0 | `<init>(ClassWriter)`                        | `jdk.internal.org.objectweb.asm.SymbolTable` |
| removed |   -770.039 KiB | <0.1% → 0.0% |       770 KiB → 0 B |   2 → 0 | `putVal(Object, Object, boolean)`            | `java.util.concurrent.ConcurrentHashMap`     |
| removed |   -668.156 KiB | <0.1% → 0.0% |       668 KiB → 0 B |   2 → 0 | `addConstantUtf8(String)`                    | `jdk.internal.org.objectweb.asm.SymbolTable` |
|   -1.9% |   -414.375 KiB |         0.1% | 21.2 MiB → 20.8 MiB |       1 | `initTable()`                                | `java.util.concurrent.ConcurrentHashMap`     |
| removed |   -398.625 KiB | <0.1% → 0.0% |       399 KiB → 0 B |   2 → 0 | `valueOf(int)`                               | `java.lang.Integer`                          |
| removed |   -395.421 KiB | <0.1% → 0.0% |       395 KiB → 0 B |   1 → 0 | `transferTo(OutputStream)`                   | `java.io.InputStream`                        |
|  -33.2% |   -383.148 KiB |        <0.1% |  1.13 MiB → 770 KiB |   3 → 2 | `enlarge(int)`                               | `jdk.internal.org.objectweb.asm.ByteVector`  |
| removed |   -379.437 KiB | <0.1% → 0.0% |       379 KiB → 0 B |   1 → 0 | `parseName(byte[], int)`                     | `java.util.jar.Manifest`                     |
| removed |   -375.851 KiB | <0.1% → 0.0% |       376 KiB → 0 B |   1 → 0 | `compress(char[], int, int)`                 | `java.lang.StringUTF16`                      |
| removed |   -321.125 KiB | <0.1% → 0.0% |       321 KiB → 0 B |   1 → 0 | `newLinkedHashMap(int)`                      | `java.util.LinkedHashMap`                    |
|  -14.7% |    -177.25 KiB |        <0.1% |    1.17 MiB → 1 MiB |   2 → 3 | `copyOfRangeByte(byte[], int, int)`          | `java.util.Arrays`                           |
| removed |    -31.187 KiB | <0.1% → 0.0% |      31.2 KiB → 0 B |   1 → 0 | `doPeriodic()`                               | `jdk.jfr.internal.periodic.PeriodicEvents`   |
|   -2.4% |    -10.156 KiB |        <0.1% |   432 KiB → 422 KiB |       1 | `newString(byte[], int, int)`                | `java.lang.StringLatin1`                     |

##### Ours

| Change |        Delta |           % |                Size | Samples | Function                             | Location                                                   |
| -----: | -----------: | ----------: | ------------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
| -30.4% | -386.462 MiB | 3.3% → 2.3% |  1.24 GiB → 886 MiB | 62 → 55 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -85.4% | -170.112 MiB | 0.5% → 0.1% |  199 MiB → 29.1 MiB |   5 → 2 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| -78.0% | -114.283 MiB | 0.4% → 0.1% |  147 MiB → 32.3 MiB |       4 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -19.2% |  -26.339 MiB | 0.4% → 0.3% |   137 MiB → 111 MiB |   3 → 4 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -13.8% |  -21.895 MiB |        0.4% |   158 MiB → 137 MiB |   9 → 8 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -7.7% |  -14.848 MiB |        0.5% |   192 MiB → 177 MiB |  10 → 6 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -54.7% |   -1.371 MiB |       <0.1% | 2.51 MiB → 1.14 MiB |   7 → 3 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |                Size |       Samples | Function                                             | Location                                                               |
| -----: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| +16.2% |   +2.706 GiB | 44.0% → 51.3% | 16.7 GiB → 19.4 GiB |     891 → 918 | `grow(int)`                                          | `java.util.ArrayList`                                                  |
|  +9.5% |   +2.162 GiB | 60.0% → 65.8% | 22.7 GiB → 24.9 GiB | 1,152 → 1,188 | `addAll(Collection)`                                 | `java.util.ArrayList`                                                  |
|  +5.2% |   +1.327 GiB | 67.4% → 71.0% | 25.5 GiB → 26.9 GiB | 1,277 → 1,295 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                                    |
|  +5.2% |   +1.327 GiB | 67.4% → 71.0% | 25.5 GiB → 26.9 GiB | 1,277 → 1,295 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                                    |
|  +4.2% |   +1.074 GiB | 66.9% → 69.8% | 25.3 GiB → 26.4 GiB | 1,252 → 1,272 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  +2.3% | +831.547 MiB | 92.8% → 95.1% |   35.2 GiB → 36 GiB | 1,821 → 1,800 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  +2.3% | +818.899 MiB | 92.1% → 94.4% | 34.9 GiB → 35.7 GiB | 1,800 → 1,778 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
| +11.4% | +814.148 MiB | 18.5% → 20.6% |    7 GiB → 7.79 GiB |     224 → 210 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
|  +9.9% | +701.961 MiB | 18.2% → 20.0% |  6.9 GiB → 7.58 GiB |     214 → 201 | `call()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011ffbc0` |
|  +9.9% | +701.961 MiB | 18.2% → 20.0% |  6.9 GiB → 7.58 GiB |     214 → 201 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|  +8.9% | +631.742 MiB | 18.4% → 20.0% | 6.96 GiB → 7.58 GiB |     215 → 201 | `lambda$run$0(int, List, int)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +2.0% | +627.089 MiB | 81.5% → 83.2% | 30.9 GiB → 31.5 GiB | 1,556 → 1,562 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +2.0% | +627.089 MiB | 81.5% → 83.2% | 30.9 GiB → 31.5 GiB | 1,556 → 1,562 | `apply(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204fd0` |
|  +2.0% | +627.089 MiB | 81.5% → 83.2% | 30.9 GiB → 31.5 GiB | 1,556 → 1,562 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |
|  +2.0% | +627.089 MiB | 81.5% → 83.2% | 30.9 GiB → 31.5 GiB | 1,556 → 1,562 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +2.0% | +627.089 MiB | 81.5% → 83.2% | 30.9 GiB → 31.5 GiB | 1,556 → 1,562 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204d88` |
|  +2.0% | +627.089 MiB | 81.5% → 83.2% | 30.9 GiB → 31.5 GiB | 1,556 → 1,562 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                    |
|  +1.7% | +609.827 MiB | 92.1% → 93.8% | 34.9 GiB → 35.5 GiB | 1,793 → 1,774 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
|  +1.7% | +609.827 MiB | 92.1% → 93.8% | 34.9 GiB → 35.5 GiB | 1,793 → 1,774 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
|  +1.5% | +529.977 MiB | 91.8% → 93.3% | 34.8 GiB → 35.3 GiB | 1,780 → 1,774 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                                     |

##### Standard library

| Change |        Delta |             % |                Size |       Samples | Function                                             | Location                                            |
| -----: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------- | --------------------------------------------------- |
| +16.2% |   +2.706 GiB | 44.0% → 51.3% | 16.7 GiB → 19.4 GiB |     891 → 918 | `grow(int)`                                          | `java.util.ArrayList`                               |
|  +9.5% |   +2.162 GiB | 60.0% → 65.8% | 22.7 GiB → 24.9 GiB | 1,152 → 1,188 | `addAll(Collection)`                                 | `java.util.ArrayList`                               |
|  +5.2% |   +1.327 GiB | 67.4% → 71.0% | 25.5 GiB → 26.9 GiB | 1,277 → 1,295 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                 |
|  +5.2% |   +1.327 GiB | 67.4% → 71.0% | 25.5 GiB → 26.9 GiB | 1,277 → 1,295 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                 |
|  +4.2% |   +1.074 GiB | 66.9% → 69.8% | 25.3 GiB → 26.4 GiB | 1,252 → 1,272 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|  +2.3% | +831.547 MiB | 92.8% → 95.1% |   35.2 GiB → 36 GiB | 1,821 → 1,800 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|  +2.3% | +818.899 MiB | 92.1% → 94.4% | 34.9 GiB → 35.7 GiB | 1,800 → 1,778 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                 |
| +11.4% | +814.148 MiB | 18.5% → 20.6% |    7 GiB → 7.79 GiB |     224 → 210 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                 |
|  +9.9% | +701.961 MiB | 18.2% → 20.0% |  6.9 GiB → 7.58 GiB |     214 → 201 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  +2.0% | +627.089 MiB | 81.5% → 83.2% | 30.9 GiB → 31.5 GiB | 1,556 → 1,562 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                 |
|  +2.0% | +627.089 MiB | 81.5% → 83.2% | 30.9 GiB → 31.5 GiB | 1,556 → 1,562 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                 |
|  +1.7% | +609.827 MiB | 92.1% → 93.8% | 34.9 GiB → 35.5 GiB | 1,793 → 1,774 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                 |
|  +1.7% | +609.827 MiB | 92.1% → 93.8% | 34.9 GiB → 35.5 GiB | 1,793 → 1,774 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`         |
|  +1.5% | +529.977 MiB | 91.8% → 93.3% | 34.8 GiB → 35.3 GiB | 1,780 → 1,774 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                  |
|  +1.6% |  +69.389 MiB | 11.0% → 11.1% | 4.15 GiB → 4.22 GiB |     232 → 228 | `grow()`                                             | `java.util.ArrayList`                               |
|  +1.6% |  +69.389 MiB | 11.0% → 11.1% | 4.15 GiB → 4.22 GiB |     232 → 228 | `add(Object, Object[], int)`                         | `java.util.ArrayList`                               |
|  +1.6% |  +69.389 MiB | 11.0% → 11.1% | 4.15 GiB → 4.22 GiB |     232 → 228 | `add(Object)`                                        | `java.util.ArrayList`                               |
|  +9.2% |  +24.017 MiB |          0.7% |   260 MiB → 284 MiB |        10 → 8 | `putMapEntries(Map, boolean)`                        | `java.util.HashMap`                                 |
|  +9.2% |  +24.017 MiB |          0.7% |   260 MiB → 284 MiB |        10 → 8 | `<init>(Map)`                                        | `java.util.HashMap`                                 |
| +17.1% |  +19.723 MiB |          0.3% |   116 MiB → 135 MiB |         6 → 7 | `resize()`                                           | `java.util.HashMap`                                 |

##### Ours

|  Change |        Delta |             % |                Size |       Samples | Function                             | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------ | ---------------------------------------------------------------------- |
|   +9.9% | +701.961 MiB | 18.2% → 20.0% |  6.9 GiB → 7.58 GiB |     214 → 201 | `call()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011ffbc0` |
|   +8.9% | +631.742 MiB | 18.4% → 20.0% | 6.96 GiB → 7.58 GiB |     215 → 201 | `lambda$run$0(int, List, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +2.0% | +627.089 MiB | 81.5% → 83.2% | 30.9 GiB → 31.5 GiB | 1,556 → 1,562 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +2.0% | +627.089 MiB | 81.5% → 83.2% | 30.9 GiB → 31.5 GiB | 1,556 → 1,562 | `apply(Object, Object)`              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204fd0` |
|   +2.0% | +627.089 MiB | 81.5% → 83.2% | 30.9 GiB → 31.5 GiB | 1,556 → 1,562 | `lambda$merge$7(Map, Object, List)`  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +2.0% | +627.089 MiB | 81.5% → 83.2% | 30.9 GiB → 31.5 GiB | 1,556 → 1,562 | `accept(Object, Object)`             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000000801204d88` |
|   +1.5% | +480.994 MiB | 82.7% → 84.0% | 31.3 GiB → 31.8 GiB | 1,571 → 1,572 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   +1.4% | +444.374 MiB | 82.7% → 83.9% | 31.3 GiB → 31.8 GiB |         1,571 | `combineResults(Map, Map)`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|   +1.4% | +444.374 MiB | 82.7% → 83.9% | 31.3 GiB → 31.8 GiB |         1,571 | `combineResults(Object, Object)`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| +624.3% | +176.792 MiB |   0.1% → 0.5% |  28.3 MiB → 205 MiB |         4 → 6 | `average(List)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +624.3% | +176.792 MiB |   0.1% → 0.5% |  28.3 MiB → 205 MiB |         4 → 6 | `computeClusterAverages()`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +624.3% | +176.792 MiB |   0.1% → 0.5% |  28.3 MiB → 205 MiB |         4 → 6 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +185.9% |   +48.43 MiB |   0.1% → 0.2% | 26.1 MiB → 74.5 MiB |         1 → 3 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +185.9% |   +48.43 MiB |   0.1% → 0.2% | 26.1 MiB → 74.5 MiB |         1 → 3 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +185.9% |   +48.43 MiB |   0.1% → 0.2% | 26.1 MiB → 74.5 MiB |         1 → 3 | `combineResults(Object, Object)`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|     new |   +36.62 MiB |   0.0% → 0.1% |      0 B → 36.6 MiB |         0 → 1 | `combineResults(Map, Map)`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|     new |   +36.62 MiB |   0.0% → 0.1% |      0 B → 36.6 MiB |         0 → 1 | `combineResults(Object, Object)`     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +163.7% |  +15.328 MiB |  <0.1% → 0.1% | 9.36 MiB → 24.7 MiB |       25 → 68 | `apply(int)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a18d8` |
| +146.0% |   +4.287 MiB |         <0.1% | 2.94 MiB → 7.22 MiB |         2 → 1 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| +146.0% |   +4.287 MiB |         <0.1% | 2.94 MiB → 7.22 MiB |         2 → 1 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |                Size |       Samples | Function                                                  | Location                                                                              |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| -11.7% |   -2.143 GiB | 48.3% → 42.7% | 18.3 GiB → 16.2 GiB |     894 → 867 | `toArray()`                                               | `java.util.ArrayList`                                                                 |
| -20.5% |   -1.666 GiB | 21.4% → 17.1% | 8.13 GiB → 6.46 GiB |     401 → 369 | `<init>(Collection)`                                      | `java.util.ArrayList`                                                                 |
| -10.0% | -610.854 MiB | 15.8% → 14.2% | 5.98 GiB → 5.38 GiB |     313 → 302 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| -10.1% |  -499.15 MiB | 12.8% → 11.5% | 4.84 GiB → 4.35 GiB |     237 → 211 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                                   |
| -30.4% | -386.462 MiB |   3.3% → 2.3% |  1.24 GiB → 886 MiB |       62 → 55 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| -49.4% |  -304.62 MiB |   1.6% → 0.8% |   616 MiB → 312 MiB |       15 → 14 | `newNode(int, Object, Object, HashMap$Node)`              | `java.util.HashMap`                                                                   |
| -57.8% | -267.064 MiB |   1.2% → 0.5% |   462 MiB → 195 MiB |            16 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                                                   |
|  -4.6% | -224.391 MiB | 12.5% → 11.9% | 4.73 GiB → 4.52 GiB |     251 → 247 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| -99.8% | -158.954 MiB |  0.4% → <0.1% |   159 MiB → 388 KiB |         2 → 1 | `put(Object, Object)`                                     | `java.util.HashMap`                                                                   |
| -31.7% | -132.116 MiB |   1.1% → 0.7% |   416 MiB → 284 MiB |             9 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                                                                   |
| -78.0% | -114.283 MiB |   0.4% → 0.1% |  147 MiB → 32.3 MiB |             4 | `lambda$collectClusters$0(Double[])`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| -78.0% | -114.283 MiB |   0.4% → 0.1% |  147 MiB → 32.3 MiB |             4 | `apply(Object)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000801204b38` |
|  -0.1% |  -52.979 MiB |         99.4% | 37.7 GiB → 37.6 GiB | 1,906 → 1,893 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|  -0.1% |  -52.979 MiB |         99.4% | 37.7 GiB → 37.6 GiB | 1,906 → 1,893 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                                                  |
|  -0.1% |  -52.979 MiB |         99.4% | 37.7 GiB → 37.6 GiB | 1,906 → 1,893 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                                                   |
| -95.3% |  -22.953 MiB |  0.1% → <0.1% | 24.1 MiB → 1.14 MiB |        67 → 3 | `apply(int)`                                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a1d48`                |
| -13.8% |  -21.895 MiB |          0.4% |   158 MiB → 137 MiB |         9 → 8 | `createSubtask(int, int)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -7.7% |  -14.848 MiB |          0.5% |   192 MiB → 177 MiB |        10 → 6 | `createSubtask(int, int)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| -48.7% |   -6.868 MiB |         <0.1% | 14.1 MiB → 7.22 MiB |       38 → 20 | `evaluate(Spliterator, boolean, IntFunction)`             | `java.util.stream.AbstractPipeline`                                                   |
| -48.7% |   -6.868 MiB |         <0.1% | 14.1 MiB → 7.22 MiB |       38 → 20 | `evaluateToArrayNode(IntFunction)`                        | `java.util.stream.AbstractPipeline`                                                   |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                                  | Location                                       |
| ------: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------- |
|  -11.7% |   -2.143 GiB | 48.3% → 42.7% | 18.3 GiB → 16.2 GiB |     894 → 867 | `toArray()`                                               | `java.util.ArrayList`                          |
|  -20.5% |   -1.666 GiB | 21.4% → 17.1% | 8.13 GiB → 6.46 GiB |     401 → 369 | `<init>(Collection)`                                      | `java.util.ArrayList`                          |
|  -10.1% |  -499.15 MiB | 12.8% → 11.5% | 4.84 GiB → 4.35 GiB |     237 → 211 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`            |
|  -49.4% |  -304.62 MiB |   1.6% → 0.8% |   616 MiB → 312 MiB |       15 → 14 | `newNode(int, Object, Object, HashMap$Node)`              | `java.util.HashMap`                            |
|  -57.8% | -267.064 MiB |   1.2% → 0.5% |   462 MiB → 195 MiB |            16 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                            |
|  -99.8% | -158.954 MiB |  0.4% → <0.1% |   159 MiB → 388 KiB |         2 → 1 | `put(Object, Object)`                                     | `java.util.HashMap`                            |
|  -31.7% | -132.116 MiB |   1.1% → 0.7% |   416 MiB → 284 MiB |             9 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                            |
|   -0.1% |  -52.979 MiB |         99.4% | 37.7 GiB → 37.6 GiB | 1,906 → 1,893 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`           |
|   -0.1% |  -52.979 MiB |         99.4% | 37.7 GiB → 37.6 GiB | 1,906 → 1,893 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`            |
|  -48.7% |   -6.868 MiB |         <0.1% | 14.1 MiB → 7.22 MiB |       38 → 20 | `evaluate(Spliterator, boolean, IntFunction)`             | `java.util.stream.AbstractPipeline`            |
|  -48.7% |   -6.868 MiB |         <0.1% | 14.1 MiB → 7.22 MiB |       38 → 20 | `evaluateToArrayNode(IntFunction)`                        | `java.util.stream.AbstractPipeline`            |
|  -48.7% |   -6.868 MiB |         <0.1% | 14.1 MiB → 7.22 MiB |       38 → 20 | `toArray(IntFunction)`                                    | `java.util.stream.ReferencePipeline`           |
|  -66.8% |   -6.257 MiB |         <0.1% |  9.36 MiB → 3.1 MiB |        25 → 8 | `valueOf(double)`                                         | `java.lang.Double`                             |
| removed |   -1.604 MiB |  <0.1% → 0.0% |       1.6 MiB → 0 B |         1 → 0 | `iterator()`                                              | `java.util.HashMap$EntrySet`                   |
|  -84.6% |   -1.505 MiB |         <0.1% |  1.78 MiB → 280 KiB |         5 → 1 | `generateInnerClass()`                                    | `java.lang.invoke.InnerClassLambdaMetafactory` |
|  -84.6% |   -1.505 MiB |         <0.1% |  1.78 MiB → 280 KiB |         5 → 1 | `spinInnerClass()`                                        | `java.lang.invoke.InnerClassLambdaMetafactory` |
|  -84.6% |   -1.505 MiB |         <0.1% |  1.78 MiB → 280 KiB |         5 → 1 | `buildCallSite()`                                         | `java.lang.invoke.InnerClassLambdaMetafactory` |
|  -54.7% |   -1.371 MiB |         <0.1% | 2.51 MiB → 1.14 MiB |         7 → 3 | `<init>(long, IntFunction)`                               | `java.util.stream.Nodes$ArrayNode`             |
|  -54.7% |   -1.371 MiB |         <0.1% | 2.51 MiB → 1.14 MiB |         7 → 3 | `<init>(long, IntFunction)`                               | `java.util.stream.Nodes$FixedNodeBuilder`      |
| removed |   -1.215 MiB |  <0.1% → 0.0% |      1.22 MiB → 0 B |         2 → 0 | `entrySet()`                                              | `java.util.HashMap`                            |

##### Ours

|  Change |        Delta |             % |                Size |       Samples | Function                                                     | Location                                                                              |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
|  -10.0% | -610.854 MiB | 15.8% → 14.2% | 5.98 GiB → 5.38 GiB |     313 → 302 | `computeDirectly()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -30.4% | -386.462 MiB |   3.3% → 2.3% |  1.24 GiB → 886 MiB |       62 → 55 | `findNearestCentroid()`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -4.6% | -224.391 MiB | 12.5% → 11.9% | 4.73 GiB → 4.52 GiB |     251 → 247 | `collectClusters(int[])`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -78.0% | -114.283 MiB |   0.4% → 0.1% |  147 MiB → 32.3 MiB |             4 | `lambda$collectClusters$0(Double[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -78.0% | -114.283 MiB |   0.4% → 0.1% |  147 MiB → 32.3 MiB |             4 | `apply(Object)`                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x0000000801204b38` |
|   -0.1% |  -52.979 MiB |         99.4% | 37.7 GiB → 37.6 GiB | 1,906 → 1,893 | `compute()`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|  -95.3% |  -22.953 MiB |  0.1% → <0.1% | 24.1 MiB → 1.14 MiB |        67 → 3 | `apply(int)`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000008011a1d48`                |
|  -13.8% |  -21.895 MiB |          0.4% |   158 MiB → 137 MiB |         9 → 8 | `createSubtask(int, int)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -7.7% |  -14.848 MiB |          0.5% |   192 MiB → 177 MiB |        10 → 6 | `createSubtask(int, int)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  -66.8% |   -6.257 MiB |         <0.1% |  9.36 MiB → 3.1 MiB |        25 → 8 | `lambda$generateData$3(int, int, Random[], int)`             | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  -54.7% |   -1.371 MiB |         <0.1% | 2.51 MiB → 1.14 MiB |         7 → 3 | `lambda$generateData$4(int)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| removed |  -456.96 KiB |  <0.1% → 0.0% |       457 KiB → 0 B |         1 → 0 | `onChange(OptionDef, Read)`                                  | `scopt.OptionParser`                                                                  |
| removed |  -456.96 KiB |  <0.1% → 0.0% |       457 KiB → 0 B |         1 → 0 | `fireChange(OptionDef, Read)`                                | `scopt.OptionDef`                                                                     |
| removed |  -456.96 KiB |  <0.1% → 0.0% |       457 KiB → 0 B |         1 → 0 | `text(String)`                                               | `scopt.OptionDef`                                                                     |
| removed | -386.414 KiB |  <0.1% → 0.0% |       386 KiB → 0 B |         1 → 0 | `hasOverrides()`                                             | `org.renaissance.core.BenchmarkDescriptor$Configuration`                              |
| removed | -386.414 KiB |  <0.1% → 0.0% |       386 KiB → 0 B |         1 → 0 | `visibleName(String)`                                        | `org.renaissance.core.BenchmarkDescriptor$Configuration`                              |
| removed | -386.414 KiB |  <0.1% → 0.0% |       386 KiB → 0 B |         1 → 0 | `<init>(BenchmarkDescriptor, String)`                        | `org.renaissance.core.BenchmarkDescriptor$Configuration`                              |
| removed | -386.414 KiB |  <0.1% → 0.0% |       386 KiB → 0 B |         1 → 0 | `<init>(BenchmarkDescriptor, String, BenchmarkDescriptor$1)` | `org.renaissance.core.BenchmarkDescriptor$Configuration`                              |
| removed | -386.414 KiB |  <0.1% → 0.0% |       386 KiB → 0 B |         1 → 0 | `getConfiguration(String)`                                   | `org.renaissance.core.BenchmarkDescriptor`                                            |
| removed | -386.414 KiB |  <0.1% → 0.0% |       386 KiB → 0 B |         1 → 0 | `createBenchmarkContext(BenchmarkDescriptor)`                | `org.renaissance.core.BenchmarkSuite`                                                 |

# Retained heap profile diff

Retained 2.56 MiB → 2.31 MiB (-255.343 KiB, -9.7%) over 10 objects → 9 objects (262 KiB → 263 KiB per object).

| Category         | Change |        Delta |      % |                Size | Objects |
| ---------------- | -----: | -----------: | -----: | ------------------: | ------: |
| Standard library |  -9.7% | -255.343 KiB | 100.0% | 2.56 MiB → 2.31 MiB |   9 → 8 |
| Ours             |   0.0% |          0 B |  <0.1% |                40 B |       1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Standard library

| Change | Delta |            % |       Size | Objects | Function                                       | Location                             |
| -----: | ----: | -----------: | ---------: | ------: | ---------------------------------------------- | ------------------------------------ |
|    new | +64 B | 0.0% → <0.1% | 0 B → 64 B |   0 → 1 | `copyOfRangeByte(byte[], int, int)`            | `java.util.Arrays`                   |
|    new | +32 B | 0.0% → <0.1% | 0 B → 32 B |   0 → 1 | `entryKey(Object)`                             | `jdk.internal.util.ReferencedKeyMap` |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B |   0 → 1 | `loadConvert(char[], int, int, StringBuilder)` | `java.util.Properties`               |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |        Delta |             % |          Size | Objects | Function                 | Location                       |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------ | ------------------------------ |
| removed | -255.085 KiB |   9.7% → 0.0% | 255 KiB → 0 B |   1 → 0 | `initCEN(int, ZipCoder)` | `java.util.zip.ZipFile$Source` |
|     ~0% |       -336 B | 80.5% → 89.2% |      2.06 MiB |   2 → 1 | `copyOf(Object[], int)`  | `java.util.Arrays`             |
|  -40.0% |        -48 B |         <0.1% |  120 B → 72 B |   5 → 3 | `valueOf(double)`        | `java.lang.Double`             |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

##### Standard library

| Change | Delta |            % |       Size | Objects | Function                                                                                 | Location                                       |
| -----: | ----: | -----------: | ---------: | ------: | ---------------------------------------------------------------------------------------- | ---------------------------------------------- |
|    new | +64 B | 0.0% → <0.1% | 0 B → 64 B |   0 → 1 | `copyOfRangeByte(byte[], int, int)`                                                      | `java.util.Arrays`                             |
|    new | +64 B | 0.0% → <0.1% | 0 B → 64 B |   0 → 1 | `copyOfRange(byte[], int, int)`                                                          | `java.util.Arrays`                             |
|    new | +64 B | 0.0% → <0.1% | 0 B → 64 B |   0 → 1 | `<init>(Charset, byte[], int, int)`                                                      | `java.lang.String`                             |
|    new | +64 B | 0.0% → <0.1% | 0 B → 64 B |   0 → 1 | `<init>(byte[], int, int, Charset)`                                                      | `java.lang.String`                             |
|    new | +64 B | 0.0% → <0.1% | 0 B → 64 B |   0 → 1 | `parseName(byte[], int)`                                                                 | `java.util.jar.Manifest`                       |
|    new | +64 B | 0.0% → <0.1% | 0 B → 64 B |   0 → 1 | `read(InputStream, String)`                                                              | `java.util.jar.Manifest`                       |
|    new | +64 B | 0.0% → <0.1% | 0 B → 64 B |   0 → 1 | `<init>(JarVerifier, InputStream, String)`                                               | `java.util.jar.Manifest`                       |
|    new | +64 B | 0.0% → <0.1% | 0 B → 64 B |   0 → 1 | `<init>(InputStream, String)`                                                            | `java.util.jar.Manifest`                       |
|    new | +64 B | 0.0% → <0.1% | 0 B → 64 B |   0 → 1 | `getManifestFromReference()`                                                             | `java.util.jar.JarFile`                        |
|    new | +64 B | 0.0% → <0.1% | 0 B → 64 B |   0 → 1 | `getManifest()`                                                                          | `java.util.jar.JarFile`                        |
|    new | +64 B | 0.0% → <0.1% | 0 B → 64 B |   0 → 1 | `getManifest()`                                                                          | `jdk.internal.loader.URLClassPath$JarLoader$2` |
|    new | +64 B | 0.0% → <0.1% | 0 B → 64 B |   0 → 1 | `defineClass(String, Resource)`                                                          | `java.net.URLClassLoader`                      |
|    new | +32 B | 0.0% → <0.1% | 0 B → 32 B |   0 → 1 | `entryKey(Object)`                                                                       | `jdk.internal.util.ReferencedKeyMap`           |
|    new | +32 B | 0.0% → <0.1% | 0 B → 32 B |   0 → 1 | `internKey(ReferencedKeyMap, Object)`                                                    | `jdk.internal.util.ReferencedKeyMap`           |
|    new | +32 B | 0.0% → <0.1% | 0 B → 32 B |   0 → 1 | `intern(ReferencedKeyMap, Object)`                                                       | `jdk.internal.util.ReferencedKeyMap`           |
|    new | +32 B | 0.0% → <0.1% | 0 B → 32 B |   0 → 1 | `intern(Object)`                                                                         | `jdk.internal.util.ReferencedKeySet`           |
|    new | +32 B | 0.0% → <0.1% | 0 B → 32 B |   0 → 1 | `makeImpl(Class, Class[], boolean)`                                                      | `java.lang.invoke.MethodType`                  |
|    new | +32 B | 0.0% → <0.1% | 0 B → 32 B |   0 → 1 | `insertParameterTypes(int, Class[])`                                                     | `java.lang.invoke.MethodType`                  |
|    new | +32 B | 0.0% → <0.1% | 0 B → 32 B |   0 → 1 | `make(byte, Class, MemberName, Class)`                                                   | `java.lang.invoke.DirectMethodHandle`          |
|    new | +32 B | 0.0% → <0.1% | 0 B → 32 B |   0 → 1 | `getDirectMethodCommon(byte, Class, MemberName, boolean, boolean, MethodHandles$Lookup)` | `java.lang.invoke.MethodHandles$Lookup`        |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

##### Standard library

|  Change |        Delta |            % |           Size | Objects | Function                                                                    | Location                                       |
| ------: | -----------: | -----------: | -------------: | ------: | --------------------------------------------------------------------------- | ---------------------------------------------- |
| removed | -255.085 KiB |  9.7% → 0.0% |  255 KiB → 0 B |   1 → 0 | `initCEN(int, ZipCoder)`                                                    | `java.util.zip.ZipFile$Source`                 |
| removed | -255.085 KiB |  9.7% → 0.0% |  255 KiB → 0 B |   1 → 0 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                             | `java.util.zip.ZipFile$Source`                 |
| removed | -255.085 KiB |  9.7% → 0.0% |  255 KiB → 0 B |   1 → 0 | `get(File, boolean, ZipCoder)`                                              | `java.util.zip.ZipFile$Source`                 |
| removed | -255.085 KiB |  9.7% → 0.0% |  255 KiB → 0 B |   1 → 0 | `<init>(ZipFile, ZipCoder, File, int)`                                      | `java.util.zip.ZipFile$CleanableResource`      |
| removed | -255.085 KiB |  9.7% → 0.0% |  255 KiB → 0 B |   1 → 0 | `<init>(File, int, Charset)`                                                | `java.util.zip.ZipFile`                        |
| removed | -255.085 KiB |  9.7% → 0.0% |  255 KiB → 0 B |   1 → 0 | `<init>(File, int)`                                                         | `java.util.zip.ZipFile`                        |
| removed | -255.085 KiB |  9.7% → 0.0% |  255 KiB → 0 B |   1 → 0 | `<init>(File, boolean, int, Runtime$Version)`                               | `java.util.jar.JarFile`                        |
| removed | -255.085 KiB |  9.7% → 0.0% |  255 KiB → 0 B |   1 → 0 | `getJarFile(URL)`                                                           | `jdk.internal.loader.URLClassPath$JarLoader`   |
| removed | -255.085 KiB |  9.7% → 0.0% |  255 KiB → 0 B |   1 → 0 | `run()`                                                                     | `jdk.internal.loader.URLClassPath$JarLoader$1` |
| removed | -255.085 KiB |  9.7% → 0.0% |  255 KiB → 0 B |   1 → 0 | `ensureOpen()`                                                              | `jdk.internal.loader.URLClassPath$JarLoader`   |
| removed | -255.085 KiB |  9.7% → 0.0% |  255 KiB → 0 B |   1 → 0 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)`              | `jdk.internal.loader.URLClassPath$JarLoader`   |
| removed | -255.085 KiB |  9.7% → 0.0% |  255 KiB → 0 B |   1 → 0 | `run()`                                                                     | `jdk.internal.loader.URLClassPath$3`           |
| removed | -255.085 KiB |  9.7% → 0.0% |  255 KiB → 0 B |   1 → 0 | `getLoader(URL)`                                                            | `jdk.internal.loader.URLClassPath`             |
| removed | -255.085 KiB |  9.7% → 0.0% |  255 KiB → 0 B |   1 → 0 | `getLoader(int)`                                                            | `jdk.internal.loader.URLClassPath`             |
| removed | -255.085 KiB |  9.7% → 0.0% |  255 KiB → 0 B |   1 → 0 | `getResource(String, boolean)`                                              | `jdk.internal.loader.URLClassPath`             |
| -100.0% | -255.023 KiB | 9.7% → <0.1% | 255 KiB → 64 B |       1 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`               |
| -100.0% | -255.023 KiB | 9.7% → <0.1% | 255 KiB → 64 B |       1 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`             | `java.security.AccessController`               |
| -100.0% | -255.023 KiB | 9.7% → <0.1% | 255 KiB → 64 B |       1 | `run()`                                                                     | `java.net.URLClassLoader$1`                    |
| -100.0% | -255.023 KiB | 9.7% → <0.1% | 255 KiB → 64 B |       1 | `findClass(String)`                                                         | `java.net.URLClassLoader`                      |
| -100.0% | -255.023 KiB | 9.7% → <0.1% | 255 KiB → 64 B |       1 | `loadClass(String, boolean)`                                                | `java.lang.ClassLoader`                        |

# Lock contention profile diff

Blocked 7.50s → 7.89s (+392.64ms, +5.2%) over 68 contentions → 70 contentions (110.3ms → 112.8ms per contention).

| Category         | Change |     Delta |      % |          Time | Contentions |
| ---------------- | -----: | --------: | -----: | ------------: | ----------: |
| Standard library |  +5.2% | +392.64ms | 100.0% | 7.50s → 7.89s |     68 → 70 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

##### Standard library

| Change |     Delta |      % |          Time | Contentions | Function              | Location                   |
| -----: | --------: | -----: | ------------: | ----------: | --------------------- | -------------------------- |
|  +5.2% | +392.64ms | 100.0% | 7.50s → 7.89s |     68 → 70 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |     Delta |             % |          Time | Contentions | Function                                                                                                               | Location                                                               |
| -----: | --------: | ------------: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  +5.2% | +392.64ms |        100.0% | 7.50s → 7.89s |     68 → 70 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                             |
|  +5.2% | +366.07ms |         94.3% | 7.07s → 7.44s |     53 → 56 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                               |
|  +3.6% | +218.82ms | 81.6% → 80.3% | 6.12s → 6.34s |          16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  +3.6% | +218.82ms | 81.6% → 80.3% | 6.12s → 6.34s |          16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  +3.6% | +218.82ms | 81.6% → 80.3% | 6.12s → 6.34s |          16 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +3.6% | +218.82ms | 81.6% → 80.3% | 6.12s → 6.34s |          16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +3.6% | +218.82ms | 81.6% → 80.3% | 6.12s → 6.34s |          16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000008011f6c70`   |
|  +3.6% | +218.82ms | 81.6% → 80.3% | 6.12s → 6.34s |          16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
|  +3.6% | +218.82ms | 81.6% → 80.3% | 6.12s → 6.34s |          16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  +3.6% | +218.82ms | 81.6% → 80.3% | 6.12s → 6.34s |          16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  +3.6% | +218.82ms | 81.6% → 80.3% | 6.12s → 6.34s |          16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  +3.6% | +218.82ms | 81.6% → 80.3% | 6.12s → 6.34s |          16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +3.6% | +218.82ms | 81.6% → 80.3% | 6.12s → 6.34s |          16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000000801198798` |
|  +3.6% | +218.82ms | 81.6% → 80.3% | 6.12s → 6.34s |          16 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
|  +3.6% | +218.82ms | 81.6% → 80.3% | 6.12s → 6.34s |          16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  +3.6% | +218.82ms | 81.6% → 80.3% | 6.12s → 6.34s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +3.6% | +218.82ms | 81.6% → 80.3% | 6.12s → 6.34s |          16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  +3.6% | +218.82ms | 81.6% → 80.3% | 6.12s → 6.34s |          16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  +3.6% | +218.82ms | 81.6% → 80.3% | 6.12s → 6.34s |          16 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x0000000801001c00`                   |
|  +3.6% | +218.82ms | 81.6% → 80.3% | 6.12s → 6.34s |          16 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000000801082400`                    |

##### Standard library

| Change |     Delta |             % |              Time | Contentions | Function                                                  | Location                                             |
| -----: | --------: | ------------: | ----------------: | ----------: | --------------------------------------------------------- | ---------------------------------------------------- |
|  +5.2% | +392.64ms |        100.0% |     7.50s → 7.89s |     68 → 70 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                           |
|  +5.2% | +366.07ms |         94.3% |     7.07s → 7.44s |     53 → 56 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`             |
|  +3.6% | +218.82ms | 81.6% → 80.3% |     6.12s → 6.34s |          16 | `get()`                                                   | `java.util.concurrent.ForkJoinTask`                  |
|  +3.6% | +218.82ms | 81.6% → 80.3% |     6.12s → 6.34s |          16 | `map(Function1)`                                          | `scala.collection.immutable.Range`                   |
|  +3.6% | +218.82ms | 81.6% → 80.3% |     6.12s → 6.34s |          16 | `apply(Object)`                                           | `scala.runtime.function.JProcedure1`                 |
|  +3.6% | +218.82ms | 81.6% → 80.3% |     6.12s → 6.34s |          16 | `foreach(Function1)`                                      | `scala.collection.immutable.List`                    |
|  +3.6% | +218.82ms | 81.6% → 80.3% |     6.12s → 6.34s |          16 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000000801001c00` |
|  +3.6% | +218.82ms | 81.6% → 80.3% |     6.12s → 6.34s |          16 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000000801082400`  |
|  +3.6% | +218.82ms | 81.6% → 80.3% |     6.12s → 6.34s |          16 | `invokeExact_MT(Object, Object, Object, Object)`          | `java.lang.invoke.Invokers$Holder`                   |
|  +3.6% | +218.82ms | 81.6% → 80.3% |     6.12s → 6.34s |          16 | `invokeImpl(Object, Object[])`                            | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +3.6% | +218.82ms | 81.6% → 80.3% |     6.12s → 6.34s |          16 | `invoke(Object, Object[])`                                | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +3.6% | +218.82ms | 81.6% → 80.3% |     6.12s → 6.34s |          16 | `invoke(Object, Object[])`                                | `java.lang.reflect.Method`                           |
| +15.4% | +203.24ms | 17.5% → 19.2% |     1.31s → 1.51s |     50 → 51 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                  |
|  +3.1% | +189.40ms | 82.5% → 80.8% |     6.18s → 6.37s |     18 → 19 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                  |
| +12.6% | +173.82ms | 18.4% → 19.7% |     1.37s → 1.55s |     52 → 54 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                  |
| +12.6% | +173.82ms | 18.4% → 19.7% |     1.37s → 1.55s |     52 → 54 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`          |
|  +6.2% |  +26.57ms |          5.7% | 426.9ms → 453.4ms |     15 → 14 | `parkUntil(long)`                                         | `java.util.concurrent.locks.LockSupport`             |
|    new |  +10.59ms |   0.0% → 0.1% |      0ms → 10.6ms |       0 → 1 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
|    new |  +10.02ms |   0.0% → 0.1% |      0ms → 10.0ms |       0 → 1 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                  |
|    new |  +10.02ms |   0.0% → 0.1% |      0ms → 10.0ms |       0 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`        |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

| Change |    Delta |           % |            Time | Contentions | Function                                             | Location                                               |
| -----: | -------: | ----------: | --------------: | ----------: | ---------------------------------------------------- | ------------------------------------------------------ |
| -47.9% | -29.42ms | 0.8% → 0.4% | 61.4ms → 32.0ms |       2 → 3 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                    |
| -47.9% | -29.42ms | 0.8% → 0.4% | 61.4ms → 32.0ms |       2 → 3 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |
| -47.9% | -29.42ms | 0.8% → 0.4% | 61.4ms → 32.0ms |       2 → 3 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                   |
| -47.9% | -29.42ms | 0.8% → 0.4% | 61.4ms → 32.0ms |       2 → 3 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                    |
| -47.9% | -29.42ms | 0.8% → 0.4% | 61.4ms → 32.0ms |       2 → 3 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
| -47.9% | -29.42ms | 0.8% → 0.4% | 61.4ms → 32.0ms |       2 → 3 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                    |

##### Standard library

| Change |    Delta |           % |            Time | Contentions | Function                                             | Location                                      |
| -----: | -------: | ----------: | --------------: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| -47.9% | -29.42ms | 0.8% → 0.4% | 61.4ms → 32.0ms |       2 → 3 | `join()`                                             | `java.util.concurrent.ForkJoinTask`           |
| -47.9% | -29.42ms | 0.8% → 0.4% | 61.4ms → 32.0ms |       2 → 3 | `exec()`                                             | `java.util.concurrent.RecursiveTask`          |
| -47.9% | -29.42ms | 0.8% → 0.4% | 61.4ms → 32.0ms |       2 → 3 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`           |
| -47.9% | -29.42ms | 0.8% → 0.4% | 61.4ms → 32.0ms |       2 → 3 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -47.9% | -29.42ms | 0.8% → 0.4% | 61.4ms → 32.0ms |       2 → 3 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`           |

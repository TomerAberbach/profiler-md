# Sampling profile diff

Collected 1,520 samples → 1,161 samples (-359 samples, -23.6%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             | -25.6% |  -355 | 91.1% → 88.7% | 1,385 → 1,030 |
| Standard library |  -3.0% |    -4 |  8.9% → 11.3% |     135 → 131 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                  | Location                                                   |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------- | ---------------------------------------------------------- |
|  +23.1% |    +3 | 0.9% → 1.4% | 13 → 16 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
|     new |    +3 | 0.0% → 0.3% |   0 → 3 | `grow(int)`                                               | `java.util.ArrayList`                                      |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|   +4.1% |    +2 | 3.2% → 4.4% | 49 → 51 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                        |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `write0(FileDescriptor, long, int)`                       | `sun.nio.ch.UnixFileDispatcherImpl`                        |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                        |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(Map)`                                             | `java.util.HashMap`                                        |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                                        |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `unpark(Object)`                                          | `jdk.internal.misc.Unsafe`                                 |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `unpark(Thread)`                                          | `java.util.concurrent.locks.LockSupport`                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getEntry(String)`                                        | `java.util.zip.ZipFile`                                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `mkdir0(long, int)`                                       | `sun.nio.fs.UnixNativeDispatcher`                          |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getLongInternal(MemorySessionImpl, Object, long)`        | `jdk.internal.misc.ScopedMemoryAccess`                     |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `wrapSink(Sink)`                                          | `java.util.stream.AbstractPipeline`                        |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getClass()`                                              | `java.lang.Object`                                         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `addAll(Collection)`                                      | `java.util.ArrayList`                                      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getAndAddCtl(long)`                                      | `java.util.concurrent.ForkJoinPool`                        |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `createSubtask(int, int)`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `append(CharSequence)`                                    | `java.io.PrintStream`                                      |

##### Ours

| Change | Delta |           % | Samples | Function                  | Location                                                   |
| -----: | ----: | ----------: | ------: | ------------------------- | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                  | Location                                      |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
|  +23.1% |    +3 | 0.9% → 1.4% | 13 → 16 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|     new |    +3 | 0.0% → 0.3% |   0 → 3 | `grow(int)`                                               | `java.util.ArrayList`                         |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|   +4.1% |    +2 | 3.2% → 4.4% | 49 → 51 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                           |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `write0(FileDescriptor, long, int)`                       | `sun.nio.ch.UnixFileDispatcherImpl`           |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(Map)`                                             | `java.util.HashMap`                           |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                           |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `unpark(Object)`                                          | `jdk.internal.misc.Unsafe`                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `unpark(Thread)`                                          | `java.util.concurrent.locks.LockSupport`      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getEntry(String)`                                        | `java.util.zip.ZipFile`                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `mkdir0(long, int)`                                       | `sun.nio.fs.UnixNativeDispatcher`             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getLongInternal(MemorySessionImpl, Object, long)`        | `jdk.internal.misc.ScopedMemoryAccess`        |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `wrapSink(Sink)`                                          | `java.util.stream.AbstractPipeline`           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getClass()`                                              | `java.lang.Object`                            |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `addAll(Collection)`                                      | `java.util.ArrayList`                         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getAndAddCtl(long)`                                      | `java.util.concurrent.ForkJoinPool`           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `append(CharSequence)`                                    | `java.io.PrintStream`                         |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                                                      | Location                                                                                                                                                                    |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -26.7% |  -171 | 42.1% → 40.4% | 640 → 469 | `accumulate(Double[], double[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |
|  -29.2% |  -114 | 25.7% → 23.8% | 390 → 276 | `distance(Double[], Double[])`                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|  -15.5% |   -28 | 11.9% → 13.2% | 181 → 153 | `findNearestCentroid()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|  -16.5% |   -16 |   6.4% → 7.0% |   97 → 81 | `collectClusters(int[])`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|  -91.7% |   -11 |   0.8% → 0.1% |    12 → 1 | `apply(Object)`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011e4b38 → org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000090011fece0` |
|  -18.9% |    -7 |   2.4% → 2.6% |   37 → 30 | `copyOf(Object[], int)`                                       | `java.util.Arrays`                                                                                                                                                          |
|  -24.0% |    -6 |          1.6% |   25 → 19 | `computeDirectly()`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|  -17.6% |    -6 |   2.2% → 2.4% |   34 → 28 | `vectorSum()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |
|  -85.7% |    -6 |   0.5% → 0.1% |     7 → 1 | `merge(Object, Object, BiFunction)`                           | `java.util.HashMap`                                                                                                                                                         |
| removed |    -4 |   0.3% → 0.0% |     4 → 0 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                                                                                                                                                    |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `<init>(HashMap)`                                             | `java.util.HashMap$HashIterator`                                                                                                                                            |
|  -40.0% |    -2 |          0.3% |     5 → 3 | `accept(Object)`                                              | `java.util.stream.ReduceOps$3ReducingSink`                                                                                                                                  |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)`                     | `java.util.concurrent.ForkJoinPool$WorkQueue`                                                                                                                               |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `createSubtask(int, int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `forEachRemaining(IntConsumer)`                               | `java.util.stream.Streams$RangeIntSpliterator`                                                                                                                              |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `compute()`                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                                                                                                      |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `doExec()`                                                    | `java.util.concurrent.ForkJoinTask`                                                                                                                                         |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `join()`                                                      | `java.util.concurrent.ForkJoinTask`                                                                                                                                         |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `evaluate(Spliterator, boolean, IntFunction)`                 | `java.util.stream.AbstractPipeline`                                                                                                                                         |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `add(double[], double[])`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |

##### Ours

|  Change | Delta |             % |   Samples | Function                         | Location                                                                                                                                                                    |
| ------: | ----: | ------------: | --------: | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -26.7% |  -171 | 42.1% → 40.4% | 640 → 469 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |
|  -29.2% |  -114 | 25.7% → 23.8% | 390 → 276 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|  -15.5% |   -28 | 11.9% → 13.2% | 181 → 153 | `findNearestCentroid()`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|  -16.5% |   -16 |   6.4% → 7.0% |   97 → 81 | `collectClusters(int[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|  -91.7% |   -11 |   0.8% → 0.1% |    12 → 1 | `apply(Object)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011e4b38 → org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000090011fece0` |
|  -24.0% |    -6 |          1.6% |   25 → 19 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|  -17.6% |    -6 |   2.2% → 2.4% |   34 → 28 | `vectorSum()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |
| removed |    -2 |   0.1% → 0.0% |     2 → 0 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `compute()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                                                                                                      |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `add(double[], double[])`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                      | Location                                       |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------- | ---------------------------------------------- |
|  -18.9% |    -7 | 2.4% → 2.6% | 37 → 30 | `copyOf(Object[], int)`                                       | `java.util.Arrays`                             |
|  -85.7% |    -6 | 0.5% → 0.1% |   7 → 1 | `merge(Object, Object, BiFunction)`                           | `java.util.HashMap`                            |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                       |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `<init>(HashMap)`                                             | `java.util.HashMap$HashIterator`               |
|  -40.0% |    -2 |        0.3% |   5 → 3 | `accept(Object)`                                              | `java.util.stream.ReduceOps$3ReducingSink`     |
| removed |    -2 | 0.1% → 0.0% |   2 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)`                     | `java.util.concurrent.ForkJoinPool$WorkQueue`  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `forEachRemaining(IntConsumer)`                               | `java.util.stream.Streams$RangeIntSpliterator` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `doExec()`                                                    | `java.util.concurrent.ForkJoinTask`            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `join()`                                                      | `java.util.concurrent.ForkJoinTask`            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `evaluate(Spliterator, boolean, IntFunction)`                 | `java.util.stream.AbstractPipeline`            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `resize()`                                                    | `java.util.HashMap`                            |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `awaitWork(ForkJoinPool$WorkQueue)`                           | `java.util.concurrent.ForkJoinPool`            |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| +100.0% |    +5 | 38.5% → 62.5% |  5 → 10 | `java.util.concurrent.ForkJoinPool:2053` |
|  -75.0% |    -3 |  30.8% → 6.3% |   4 → 1 | `java.util.concurrent.ForkJoinPool:2039` |
| removed |    -2 |  15.4% → 0.0% |   2 → 0 | `java.util.concurrent.ForkJoinPool:2073` |
|  +50.0% |    +1 | 15.4% → 18.8% |   2 → 3 | `java.util.concurrent.ForkJoinPool:2058` |
|     new |    +1 |   0.0% → 6.3% |   0 → 1 | `java.util.concurrent.ForkJoinPool:2081` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `java.util.ArrayList:239` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |             % | Samples | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.concurrent.ForkJoinPool$WorkQueue:1312` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |              % | Samples | Location                 |
| -----: | ----: | -------------: | ------: | ------------------------ |
|  +2.0% |    +1 | 100.0% → 98.0% | 49 → 50 | `java.util.HashMap:1219` |
|    new |    +1 |    0.0% → 2.0% |   0 → 1 | `java.util.HashMap:1206` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.concurrent.ForkJoinTask:440` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:437` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ForkJoinTask:668` |

##### `<init>(Map)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashMap:492` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Location                |
| ------: | ----: | -----: | ------: | ----------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `java.util.HashMap:635` |

##### `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.locks.LockSupport:181` |

##### `getEntry(String)` (`java.util.zip.ZipFile`)

| Change | Delta |             % | Samples | Location                    |
| -----: | ----: | ------------: | ------: | --------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.zip.ZipFile:338` |

##### `getLongInternal(MemorySessionImpl, Object, long)` (`jdk.internal.misc.ScopedMemoryAccess`)

| Change | Delta |             % | Samples | Location                                    |
| -----: | ----: | ------------: | ------: | ------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `jdk.internal.misc.ScopedMemoryAccess:2560` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.stream.AbstractPipeline:546` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.ArrayList:761` |

##### `getAndAddCtl(long)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % | Samples | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool:1541` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `append(CharSequence)` (`java.io.PrintStream`)

| Change | Delta |             % | Samples | Location                   |
| -----: | ----: | ------------: | ------: | -------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.io.PrintStream:1465` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |              % |   Samples | Location                                                      |
| -----: | ----: | -------------: | --------: | ------------------------------------------------------------- |
| -26.9% |  -172 | 100.0% → 99.8% | 640 → 468 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |
|    new |    +1 |    0.0% → 0.2% |     0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Location                                                       |
| -----: | ----: | -----: | --------: | -------------------------------------------------------------- |
| -29.2% |  -114 | 100.0% | 390 → 276 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |   Samples | Location                                                       |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------- |
|  -19.9% |   -34 | 94.5% → 89.5% | 171 → 137 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
|  +44.4% |    +4 |   5.0% → 8.5% |    9 → 13 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |
| +200.0% |    +2 |   0.6% → 2.0% |     1 → 3 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| -13.1% |    -8 | 62.9% → 65.4% | 61 → 53 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
| -20.6% |    -7 | 35.1% → 33.3% | 34 → 27 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |
| -50.0% |    -1 |   2.1% → 1.2% |   2 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| -18.9% |    -7 | 100.0% | 37 → 30 | `java.util.Arrays:3482` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Location                                                       |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------- |
| -24.0% |    -6 | 100.0% | 25 → 19 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:204` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|   Change | Delta |             % | Samples | Location                                                      |
| -------: | ----: | ------------: | ------: | ------------------------------------------------------------- |
|   -96.3% |   -26 |  79.4% → 3.6% |  27 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |
| +1050.0% |   +21 |  5.9% → 82.1% |  2 → 23 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |
|   -20.0% |    -1 | 14.7% → 14.3% |   5 → 4 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
| removed |    -7 | 100.0% → 0.0% |   7 → 0 | `java.util.HashMap:1384` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashMap:1371` |

##### `<init>(HashMap)` (`java.util.HashMap$HashIterator`)

|  Change | Delta |             % | Samples | Location                              |
| ------: | ----: | ------------: | ------: | ------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `java.util.HashMap$HashIterator:1593` |

##### `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`)

| Change | Delta |      % | Samples | Location                                       |
| -----: | ----: | -----: | ------: | ---------------------------------------------- |
| -40.0% |    -2 | 100.0% |   5 → 3 | `java.util.stream.ReduceOps$3ReducingSink:169` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |            % | Samples | Location                                           |
| ------: | ----: | -----------: | ------: | -------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool$WorkQueue:1332` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool$WorkQueue:1347` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.stream.Streams$RangeIntSpliterator:104` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change | Delta |             % | Samples | Location                                                   |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:146` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:387` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:651` |

##### `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.stream.AbstractPipeline:575` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:432` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.HashMap:741` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1881` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| +23.1% |    +3 | 100.0% | 13 → 16 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller   | Location              |
| -----: | ----: | ------------: | ------: | -------- | --------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `grow()` | `java.util.ArrayList` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |             % | Samples | Caller                                   | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ----------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                   | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------- |
|  +4.1% |    +2 | 100.0% | 49 → 51 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `write0(FileDescriptor, long, int)` (`sun.nio.ch.UnixFileDispatcherImpl`)

| Change | Delta |             % | Samples | Caller                             | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `write(FileDescriptor, long, int)` | `sun.nio.ch.UnixFileDispatcherImpl` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |      % | Samples | Caller   | Location                            |
| ------: | ----: | -----: | ------: | -------- | ----------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Caller          | Location                                               |
| -----: | ----: | ------------: | ------: | --------------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `<init>(Map)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller            | Location                                    |
| -----: | ----: | ------------: | ------: | ----------------- | ------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Caller                        | Location            |
| ------: | ----: | -----: | ------: | ----------------------------- | ------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `unpark(Object)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |      % | Samples | Caller           | Location                                 |
| ------: | ----: | -----: | ------: | ---------------- | ---------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `unpark(Thread)` | `java.util.concurrent.locks.LockSupport` |

##### `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |             % | Samples | Caller            | Location                            |
| -----: | ----: | ------------: | ------: | ----------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `signalWaiters()` | `java.util.concurrent.ForkJoinTask` |

##### `getEntry(String)` (`java.util.zip.ZipFile`)

| Change | Delta |             % | Samples | Caller             | Location                |
| -----: | ----: | ------------: | ------: | ------------------ | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getEntry(String)` | `java.util.jar.JarFile` |

##### `mkdir0(long, int)` (`sun.nio.fs.UnixNativeDispatcher`)

| Change | Delta |             % | Samples | Caller                 | Location                          |
| -----: | ----: | ------------: | ------: | ---------------------- | --------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `mkdir(UnixPath, int)` | `sun.nio.fs.UnixNativeDispatcher` |

##### `getLongInternal(MemorySessionImpl, Object, long)` (`jdk.internal.misc.ScopedMemoryAccess`)

| Change | Delta |             % | Samples | Caller                                     | Location                               |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getLong(MemorySessionImpl, Object, long)` | `jdk.internal.misc.ScopedMemoryAccess` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |             % | Samples | Caller                               | Location                            |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `getClass()` (`java.lang.Object`)

| Change | Delta |             % | Samples | Caller               | Location              |
| -----: | ----: | ------------: | ------: | -------------------- | --------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(Collection)` | `java.util.ArrayList` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller                       | Location                                    |
| -----: | ----: | ------------: | ------: | ---------------------------- | ------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `getAndAddCtl(long)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % | Samples | Caller           | Location                            |
| -----: | ----: | ------------: | ------: | ---------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `uncompensate()` | `java.util.concurrent.ForkJoinPool` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `append(CharSequence)` (`java.io.PrintStream`)

| Change | Delta |             % | Samples | Caller                 | Location              |
| -----: | ----: | ------------: | ------: | ---------------------- | --------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `append(CharSequence)` | `java.io.PrintStream` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller        | Location                                                  |
| -----: | ----: | -----: | --------: | ------------- | --------------------------------------------------------- |
| -26.7% |  -171 | 100.0% | 640 → 469 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------- |
| -29.2% |  -114 | 100.0% | 390 → 276 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
| -15.5% |   -28 | 100.0% | 181 → 153 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------- | ---------------------------------------------------------- |
| -16.5% |   -16 | 100.0% | 97 → 81 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000090011fece0`)

| Change | Delta |      % | Samples | Caller                              | Location            |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------- |
| -91.7% |   -11 | 100.0% |  12 → 1 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |              % | Samples | Caller      | Location              |
| -----: | ----: | -------------: | ------: | ----------- | --------------------- |
| -27.0% |   -10 | 100.0% → 90.0% | 37 → 27 | `grow(int)` | `java.util.ArrayList` |
|    new |    +3 |   0.0% → 10.0% |   0 → 3 | `toArray()` | `java.util.ArrayList` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------- | ---------------------------------------------------------- |
| -24.0% |    -6 | 100.0% | 25 → 19 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % | Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | ------: | ------------------- | --------------------------------------------------------- |
| -17.6% |    -6 | 100.0% | 34 → 28 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                              | Location                                    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| -85.7% |    -6 | 100.0% |   7 → 1 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|  Change | Delta |             % | Samples | Caller                      | Location                 |
| ------: | ----: | ------------: | ------: | --------------------------- | ------------------------ |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `<init>(HashMap)` (`java.util.HashMap$HashIterator`)

|  Change | Delta |             % | Samples | Caller            | Location                          |
| ------: | ----: | ------------: | ------: | ----------------- | --------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `<init>(HashMap)` | `java.util.HashMap$EntryIterator` |

##### `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`)

| Change | Delta |      % | Samples | Caller        | Location                           |
| -----: | ----: | -----: | ------: | ------------- | ---------------------------------- |
| -40.0% |    -2 | 100.0% |   5 → 3 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Caller                 | Location                            |
| ------: | ----: | ------------: | ------: | ---------------------- | ----------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

|  Change | Delta |             % | Samples | Caller                       | Location                      |
| ------: | ----: | ------------: | ------: | ---------------------------- | ----------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change | Delta |             % | Samples | Caller   | Location                             |
| ------: | ----: | ------------: | ------: | -------- | ------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Caller                                               | Location                                      |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Caller                             | Location                            |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `evaluateToArrayNode(IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Caller                               | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                                          | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Caller                              | Location                            |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |           % | Samples | Function                                                                                                               | Location                                                                                                                                      |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|  +52.9% |    +9 | 1.1% → 2.2% | 17 → 26 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011fdf70` |
|  +53.3% |    +8 | 1.0% → 2.0% | 15 → 23 | `exec()`                                                                                                               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                                                                                           |
|     new |    +8 | 0.0% → 0.7% |   0 → 8 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|  +35.0% |    +7 | 1.3% → 2.3% | 20 → 27 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011ff3c8`                                                                        |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `<init>(Collection)`                                                                                                   | `java.util.ArrayList`                                                                                                                         |
|     new |    +3 | 0.0% → 0.3% |   0 → 3 | `toArray()`                                                                                                            | `java.util.ArrayList`                                                                                                                         |
| +200.0% |    +2 | 0.1% → 0.3% |   1 → 3 | `createBenchmark(BenchmarkDescriptor)`                                                                                 | `org.renaissance.core.BenchmarkSuite`                                                                                                         |
| +200.0% |    +2 | 0.1% → 0.3% |   1 → 3 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)`                           | `org.renaissance.harness.ExecutionDriver`                                                                                                     |
| +200.0% |    +2 | 0.1% → 0.3% |   1 → 3 | `unpark(Thread)`                                                                                                       | `java.util.concurrent.locks.LockSupport`                                                                                                      |
| +200.0% |    +2 | 0.1% → 0.3% |   1 → 3 | `signalWaiters()`                                                                                                      | `java.util.concurrent.ForkJoinTask`                                                                                                           |
| +200.0% |    +2 | 0.1% → 0.3% |   1 → 3 | `setDone()`                                                                                                            | `java.util.concurrent.ForkJoinTask`                                                                                                           |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `getResource(String, boolean)`                                                                                         | `jdk.internal.loader.URLClassPath`                                                                                                            |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `write0(FileDescriptor, long, int)`                                                                                    | `sun.nio.ch.UnixFileDispatcherImpl`                                                                                                           |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `write(FileDescriptor, long, int)`                                                                                     | `sun.nio.ch.UnixFileDispatcherImpl`                                                                                                           |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `writeFromNativeBuffer(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)`                     | `sun.nio.ch.IOUtil`                                                                                                                           |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `write(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)`                                     | `sun.nio.ch.IOUtil`                                                                                                                           |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `write(FileDescriptor, ByteBuffer, long, boolean, int, NativeDispatcher)`                                              | `sun.nio.ch.IOUtil`                                                                                                                           |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `write(ByteBuffer)`                                                                                                    | `sun.nio.ch.FileChannelImpl`                                                                                                                  |

##### Ours

|  Change | Delta |           % | Samples | Function                                                                                                               | Location                                                                                                                                      |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|  +52.9% |    +9 | 1.1% → 2.2% | 17 → 26 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011fdf70` |
|     new |    +8 | 0.0% → 0.7% |   0 → 8 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|  +35.0% |    +7 | 1.3% → 2.3% | 20 → 27 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011ff3c8`                                                                        |
| +200.0% |    +2 | 0.1% → 0.3% |   1 → 3 | `createBenchmark(BenchmarkDescriptor)`                                                                                 | `org.renaissance.core.BenchmarkSuite`                                                                                                         |
| +200.0% |    +2 | 0.1% → 0.3% |   1 → 3 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)`                           | `org.renaissance.harness.ExecutionDriver`                                                                                                     |
|  +11.1% |    +1 | 0.6% → 0.9% |  9 → 10 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                                                                                               |
|  +11.1% |    +1 | 0.6% → 0.9% |  9 → 10 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                                                                                               |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `getBenchmarkClassLoader(BenchmarkDescriptor)`                                                                         | `org.renaissance.core.BenchmarkSuite`                                                                                                         |
|  +14.3% |    +1 | 0.5% → 0.7% |   7 → 8 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001178798 → org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000900117c3b8` |
|  +14.3% |    +1 | 0.5% → 0.7% |   7 → 8 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|  +14.3% |    +1 | 0.5% → 0.7% |   7 → 8 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `createScratchRoot(Path, boolean)`                                                                                     | `org.renaissance.core.Launcher`                                                                                                               |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `createModuleJarsDirectory(String)`                                                                                    | `org.renaissance.core.ModuleLoader`                                                                                                           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011fd4f0`                                                                        |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `printAfterSuccessMessage(int, long)`                                                                                  | `org.renaissance.harness.ExecutionDriver`                                                                                                     |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                           | Location                                            |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
|  +53.3% |    +8 | 1.0% → 2.0% | 15 → 23 | `exec()`                                                                                           | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `<init>(Collection)`                                                                               | `java.util.ArrayList`                               |
|     new |    +3 | 0.0% → 0.3% |   0 → 3 | `toArray()`                                                                                        | `java.util.ArrayList`                               |
| +200.0% |    +2 | 0.1% → 0.3% |   1 → 3 | `unpark(Thread)`                                                                                   | `java.util.concurrent.locks.LockSupport`            |
| +200.0% |    +2 | 0.1% → 0.3% |   1 → 3 | `signalWaiters()`                                                                                  | `java.util.concurrent.ForkJoinTask`                 |
| +200.0% |    +2 | 0.1% → 0.3% |   1 → 3 | `setDone()`                                                                                        | `java.util.concurrent.ForkJoinTask`                 |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `getResource(String, boolean)`                                                                     | `jdk.internal.loader.URLClassPath`                  |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `write0(FileDescriptor, long, int)`                                                                | `sun.nio.ch.UnixFileDispatcherImpl`                 |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `write(FileDescriptor, long, int)`                                                                 | `sun.nio.ch.UnixFileDispatcherImpl`                 |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `writeFromNativeBuffer(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` | `sun.nio.ch.IOUtil`                                 |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `write(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)`                 | `sun.nio.ch.IOUtil`                                 |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `write(FileDescriptor, ByteBuffer, long, boolean, int, NativeDispatcher)`                          | `sun.nio.ch.IOUtil`                                 |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `write(ByteBuffer)`                                                                                | `sun.nio.ch.FileChannelImpl`                        |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `writeFully(ByteBuffer)`                                                                           | `sun.nio.ch.ChannelOutputStream`                    |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `write(byte[], int, int)`                                                                          | `sun.nio.ch.ChannelOutputStream`                    |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `loadClass(String)`                                                                                | `java.lang.ClassLoader`                             |
|  +14.3% |    +1 | 0.5% → 0.7% |   7 → 8 | `apply(Object)`                                                                                    | `scala.runtime.function.JProcedure1`                |
|  +14.3% |    +1 | 0.5% → 0.7% |   7 → 8 | `foreach(Function1)`                                                                               | `scala.collection.immutable.List`                   |
| +100.0% |    +1 | 0.1% → 0.2% |   1 → 2 | `unpark(Object)`                                                                                   | `jdk.internal.misc.Unsafe`                          |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `getEntry(String)`                                                                                 | `java.util.zip.ZipFile`                             |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                                                  | Location                                                   |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------------------- |
| -31.2% |  -373 | 78.7% → 70.9% |   1,196 → 823 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| -31.9% |  -372 | 76.6% → 68.3% |   1,165 → 793 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                        |
| -31.9% |  -370 | 76.3% → 68.0% |   1,160 → 790 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
| -24.5% |  -364 | 97.6% → 96.5% | 1,484 → 1,120 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
| -24.5% |  -363 | 97.6% → 96.5% | 1,483 → 1,120 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
| -24.0% |  -361 | 99.1% → 98.7% | 1,507 → 1,146 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| -24.0% |  -361 | 99.1% → 98.7% | 1,507 → 1,146 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                       |
| -23.9% |  -360 | 99.2% → 98.9% | 1,508 → 1,148 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| -32.0% |  -358 | 73.6% → 65.5% |   1,119 → 761 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                |
| -24.3% |  -356 | 96.6% → 95.8% | 1,468 → 1,112 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| -22.6% |  -178 | 51.9% → 52.6% |     789 → 611 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -26.3% |  -177 | 44.3% → 42.8% |     674 → 497 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -26.3% |  -177 | 44.3% → 42.8% |     674 → 497 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -26.7% |  -171 | 42.1% → 40.4% |     640 → 469 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -24.9% |  -142 | 37.6% → 37.0% |     571 → 429 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -29.2% |  -114 | 25.7% → 23.8% |     390 → 276 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -24.8% |  -101 | 26.8% → 26.4% |     407 → 306 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
| -15.0% |   -38 | 16.7% → 18.6% |     254 → 216 | `computeClusterAverages()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -15.3% |   -38 | 16.4% → 18.2% |     249 → 211 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -14.6% |   -37 | 16.6% → 18.6% |     253 → 216 | `average(List)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                                                                                                                                    |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -24.0% |  -361 | 99.1% → 98.7% | 1,507 → 1,146 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                                                                                                      |
|  -22.6% |  -178 | 51.9% → 52.6% |     789 → 611 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|  -26.3% |  -177 | 44.3% → 42.8% |     674 → 497 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |
|  -26.3% |  -177 | 44.3% → 42.8% |     674 → 497 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |
|  -26.7% |  -171 | 42.1% → 40.4% |     640 → 469 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |
|  -24.9% |  -142 | 37.6% → 37.0% |     571 → 429 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|  -29.2% |  -114 | 25.7% → 23.8% |     390 → 276 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|  -15.0% |   -38 | 16.7% → 18.6% |     254 → 216 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                                                      |
|  -15.3% |   -38 | 16.4% → 18.2% |     249 → 211 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                                                      |
|  -14.6% |   -37 | 16.6% → 18.6% |     253 → 216 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                                                                                                      |
|  -15.5% |   -30 | 12.7% → 14.0% |     193 → 163 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|  -91.7% |   -11 |   0.8% → 0.1% |        12 → 1 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011e4b38 → org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000090011fece0` |
| removed |    -7 |   0.5% → 0.0% |         7 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                                                                                                 |
|  -16.7% |    -3 |   1.2% → 1.3% |       18 → 15 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                                                 |
|  -16.7% |    -3 |   1.2% → 1.3% |       18 → 15 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|  -16.7% |    -3 |   1.2% → 1.3% |       18 → 15 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|  -33.3% |    -2 |   0.4% → 0.3% |         6 → 4 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                                                 |
|  -33.3% |    -2 |   0.4% → 0.3% |         6 → 4 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                                                   |
| removed |    -2 |   0.1% → 0.0% |         2 → 0 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |
|  -33.3% |    -1 |          0.2% |         3 → 2 | `extractResource(String, Path)`                                                                                        | `org.renaissance.core.ResourceUtils`                                                                                                                                        |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                                      | Location                                      |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------------------- | --------------------------------------------- |
|  -31.2% |  -373 | 78.7% → 70.9% |   1,196 → 823 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`          | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -31.9% |  -372 | 76.6% → 68.3% |   1,165 → 793 | `scan(ForkJoinPool$WorkQueue, int, int)`                      | `java.util.concurrent.ForkJoinPool`           |
|  -31.9% |  -370 | 76.3% → 68.0% |   1,160 → 790 | `runWorker(ForkJoinPool$WorkQueue)`                           | `java.util.concurrent.ForkJoinPool`           |
|  -24.5% |  -364 | 97.6% → 96.5% | 1,484 → 1,120 | `join()`                                                      | `java.util.concurrent.ForkJoinTask`           |
|  -24.5% |  -363 | 97.6% → 96.5% | 1,483 → 1,120 | `awaitDone(int, long)`                                        | `java.util.concurrent.ForkJoinTask`           |
|  -24.0% |  -361 | 99.1% → 98.7% | 1,507 → 1,146 | `exec()`                                                      | `java.util.concurrent.RecursiveTask`          |
|  -23.9% |  -360 | 99.2% → 98.9% | 1,508 → 1,148 | `doExec()`                                                    | `java.util.concurrent.ForkJoinTask`           |
|  -32.0% |  -358 | 73.6% → 65.5% |   1,119 → 761 | `run()`                                                       | `java.util.concurrent.ForkJoinWorkerThread`   |
|  -24.3% |  -356 | 96.6% → 95.8% | 1,468 → 1,112 | `tryRemoveAndExec(ForkJoinTask, boolean)`                     | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -24.8% |  -101 | 26.8% → 26.4% |     407 → 306 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`     | `java.util.concurrent.ForkJoinPool`           |
|  -11.3% |   -30 | 17.4% → 20.2% |     265 → 235 | `invoke()`                                                    | `java.util.concurrent.ForkJoinTask`           |
|  -14.8% |    -9 |   4.0% → 4.5% |       61 → 52 | `computeIfAbsent(Object, Function)`                           | `java.util.HashMap`                           |
|  -18.9% |    -7 |   2.4% → 2.6% |       37 → 30 | `copyOf(Object[], int)`                                       | `java.util.Arrays`                            |
|  -18.9% |    -7 |   2.4% → 2.6% |       37 → 30 | `grow(int)`                                                   | `java.util.ArrayList`                         |
|  -18.9% |    -7 |   2.4% → 2.6% |       37 → 30 | `grow()`                                                      | `java.util.ArrayList`                         |
|  -18.9% |    -7 |   2.4% → 2.6% |       37 → 30 | `add(Object, Object[], int)`                                  | `java.util.ArrayList`                         |
|  -18.9% |    -7 |   2.4% → 2.6% |       37 → 30 | `add(Object)`                                                 | `java.util.ArrayList`                         |
| removed |    -4 |   0.3% → 0.0% |         4 → 0 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                      |
| removed |    -4 |   0.3% → 0.0% |         4 → 0 | `inflate(byte[], int, int)`                                   | `java.util.zip.Inflater`                      |
| removed |    -4 |   0.3% → 0.0% |         4 → 0 | `read(byte[], int, int)`                                      | `java.util.zip.InflaterInputStream`           |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011fdf70`)

| Change | Delta |      % | Samples | Callee                         | Location                                    |
| -----: | ----: | -----: | ------: | ------------------------------ | ------------------------------------------- |
| +52.9% |    +9 | 100.0% | 17 → 26 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change | Delta |      % | Samples | Callee   | Location                                                                                                                                      |
| -----: | ----: | -----: | ------: | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| +53.3% |    +8 | 100.0% | 15 → 23 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011fdf70` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |    +5 | 0.0% → 62.5% |   0 → 5 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |    +3 | 0.0% → 37.5% |   0 → 3 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Callee     | Location                            |
| -----: | ----: | -----: | ------: | ---------- | ----------------------------------- |
| +35.0% |    +7 | 100.0% | 20 → 27 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |            % | Samples | Callee               | Location              |
| -----: | ----: | -----------: | ------: | -------------------- | --------------------- |
|    new |    +4 | 0.0% → 80.0% |   0 → 4 | `<init>(Collection)` | `java.util.ArrayList` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `addAll(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011ff3c8`)

| Change | Delta |             % | Samples | Callee                       | Location                                    |
| -----: | ----: | ------------: | ------: | ---------------------------- | ------------------------------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change | Delta |            % | Samples | Callee       | Location              |
| -----: | ----: | -----------: | ------: | ------------ | --------------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `toArray()`  | `java.util.ArrayList` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `getClass()` | `java.lang.Object`    |

##### `toArray()` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Callee                  | Location           |
| -----: | ----: | ------------: | ------: | ----------------------- | ------------------ |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `createBenchmark(BenchmarkDescriptor)` (`org.renaissance.core.BenchmarkSuite`)

|  Change | Delta |              % | Samples | Callee                                         | Location                              |
| ------: | ----: | -------------: | ------: | ---------------------------------------------- | ------------------------------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `getBenchmarkClassLoader(BenchmarkDescriptor)` | `org.renaissance.core.BenchmarkSuite` |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `loadClass(String)`                            | `java.lang.ClassLoader`               |

##### `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` (`org.renaissance.harness.ExecutionDriver`)

|  Change | Delta |      % | Samples | Callee                                 | Location                              |
| ------: | ----: | -----: | ------: | -------------------------------------- | ------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `createBenchmark(BenchmarkDescriptor)` | `org.renaissance.core.BenchmarkSuite` |

##### `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`)

|  Change | Delta |              % | Samples | Callee           | Location                   |
| ------: | ----: | -------------: | ------: | ---------------- | -------------------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `unpark(Object)` | `jdk.internal.misc.Unsafe` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |      % | Samples | Callee           | Location                                 |
| ------: | ----: | -----: | ------: | ---------------- | ---------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `unpark(Thread)` | `java.util.concurrent.locks.LockSupport` |

##### `setDone()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |      % | Samples | Callee            | Location                            |
| ------: | ----: | -----: | ------: | ----------------- | ----------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `signalWaiters()` | `java.util.concurrent.ForkJoinTask` |

##### `getResource(String, boolean)` (`jdk.internal.loader.URLClassPath`)

| Change | Delta |            % | Samples | Callee                         | Location                                     |
| -----: | ----: | -----------: | ------: | ------------------------------ | -------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `getResource(String, boolean)` | `jdk.internal.loader.URLClassPath$JarLoader` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `getLoader(int)`               | `jdk.internal.loader.URLClassPath`           |

##### `write(FileDescriptor, long, int)` (`sun.nio.ch.UnixFileDispatcherImpl`)

| Change | Delta |             % | Samples | Callee                              | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ----------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `write0(FileDescriptor, long, int)` | `sun.nio.ch.UnixFileDispatcherImpl` |

##### `writeFromNativeBuffer(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` (`sun.nio.ch.IOUtil`)

| Change | Delta |             % | Samples | Callee                             | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `write(FileDescriptor, long, int)` | `sun.nio.ch.UnixFileDispatcherImpl` |

##### `write(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` (`sun.nio.ch.IOUtil`)

| Change | Delta |             % | Samples | Callee                                                                                             | Location            |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------- | ------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `writeFromNativeBuffer(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` | `sun.nio.ch.IOUtil` |

##### `write(FileDescriptor, ByteBuffer, long, boolean, int, NativeDispatcher)` (`sun.nio.ch.IOUtil`)

| Change | Delta |             % | Samples | Callee                                                                             | Location            |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------- | ------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `write(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` | `sun.nio.ch.IOUtil` |

##### `write(ByteBuffer)` (`sun.nio.ch.FileChannelImpl`)

| Change | Delta |             % | Samples | Callee                                                                    | Location            |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------- | ------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `write(FileDescriptor, ByteBuffer, long, boolean, int, NativeDispatcher)` | `sun.nio.ch.IOUtil` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |            % | Samples | Callee                             | Location                        |
| -----: | ----: | -----------: | ------: | ---------------------------------- | ------------------------------- |
|    new |    +1 | 0.0% → 10.0% |   0 → 1 | `createScratchRoot(Path, boolean)` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Callee                                 | Location                        |
| -----: | ----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| +11.1% |    +1 | 100.0% |  9 → 10 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `getBenchmarkClassLoader(BenchmarkDescriptor)` (`org.renaissance.core.BenchmarkSuite`)

|  Change | Delta |      % | Samples | Callee                               | Location                            |
| ------: | ----: | -----: | ------: | ------------------------------------ | ----------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000900117c3b8`)

|  Change | Delta |             % | Samples | Callee                                                                                                                 | Location                                    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new |    +8 | 0.0% → 100.0% |   0 → 8 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |    -7 | 100.0% → 0.0% |   7 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |      % | Samples | Callee               | Location                          |
| -----: | ----: | -----: | ------: | -------------------- | --------------------------------- |
| +14.3% |    +1 | 100.0% |   7 → 8 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |      % | Samples | Callee                                                                        | Location                                    |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| +14.3% |    +1 | 100.0% |   7 → 8 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `createScratchRoot(Path, boolean)` (`org.renaissance.core.Launcher`)

| Change | Delta |             % | Samples | Callee              | Location                |
| -----: | ----: | ------------: | ------: | ------------------- | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `createModuleJarsDirectory(String)` (`org.renaissance.core.ModuleLoader`)

| Change | Delta |             % | Samples | Callee                                     | Location              |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | --------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `createDirectories(Path, FileAttribute[])` | `java.nio.file.Files` |

##### `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Callee                 | Location                             |
| -----: | ----: | ------------: | ------: | ---------------------- | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `toArray(IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011fd4f0`)

| Change | Delta |             % | Samples | Callee                                           | Location                                    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `printAfterSuccessMessage(int, long)` (`org.renaissance.harness.ExecutionDriver`)

| Change | Delta |             % | Samples | Callee                             | Location              |
| -----: | ----: | ------------: | ------: | ---------------------------------- | --------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `printf(Locale, String, Object[])` | `java.io.PrintStream` |

##### `writeFully(ByteBuffer)` (`sun.nio.ch.ChannelOutputStream`)

| Change | Delta |             % | Samples | Callee              | Location                     |
| -----: | ----: | ------------: | ------: | ------------------- | ---------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `write(ByteBuffer)` | `sun.nio.ch.FileChannelImpl` |

##### `write(byte[], int, int)` (`sun.nio.ch.ChannelOutputStream`)

| Change | Delta |             % | Samples | Callee                   | Location                         |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `writeFully(ByteBuffer)` | `sun.nio.ch.ChannelOutputStream` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

| Change | Delta |            % | Samples | Callee                       | Location                                          |
| -----: | ----: | -----------: | ------: | ---------------------------- | ------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change | Delta |      % | Samples | Callee              | Location                                                                                                                                      |
| -----: | ----: | -----: | ------: | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| +14.3% |    +1 | 100.0% |   7 → 8 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001178798 → org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000900117c3b8` |
| +14.3% |    +1 | 100.0% |   7 → 8 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                                                                                          |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change | Delta |      % | Samples | Callee          | Location                             |
| -----: | ----: | -----: | ------: | --------------- | ------------------------------------ |
| +14.3% |    +1 | 100.0% |   7 → 8 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |              % |     Samples | Callee     | Location                            |
| -----: | ----: | -------------: | ----------: | ---------- | ----------------------------------- |
| -31.4% |  -375 | 100.0% → 99.8% | 1,196 → 821 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |     Samples | Callee                                               | Location                                      |
| -----: | ----: | -----: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| -31.9% |  -372 | 100.0% | 1,165 → 793 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % |     Samples | Callee                                   | Location                            |
| ------: | ----: | ------------: | ----------: | ---------------------------------------- | ----------------------------------- |
|  -31.9% |  -369 | 99.8% → 99.9% | 1,158 → 789 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |
| removed |    -1 |   0.1% → 0.0% |       1 → 0 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |              % |       Samples | Callee                 | Location                            |
| -----: | ----: | -------------: | ------------: | ---------------------- | ----------------------------------- |
| -24.5% |  -363 | 99.9% → 100.0% | 1,483 → 1,120 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % |       Samples | Callee                                                    | Location                                      |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  -24.3% |  -356 | 99.0% → 99.3% | 1,468 → 1,112 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -24.8% |  -100 | 27.2% → 27.1% |     404 → 304 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                           |
|     new |    +1 |   0.0% → 0.1% |         0 → 1 | `uncompensate()`                                          | `java.util.concurrent.ForkJoinPool`           |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % |       Samples | Callee                           | Location                                                   |
| -----: | ----: | ------------: | ------------: | -------------------------------- | ---------------------------------------------------------- |
| -24.5% |  -364 | 98.5% → 97.7% | 1,484 → 1,120 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| -22.6% |  -178 | 52.4% → 53.3% |     789 → 611 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -26.3% |  -177 | 44.7% → 43.4% |     674 → 497 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -15.3% |   -38 | 16.5% → 18.4% |     249 → 211 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -16.7% |    -3 |   1.2% → 1.3% |       18 → 15 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Callee      | Location                                               |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------ |
| -24.0% |  -361 | 100.0% | 1,507 → 1,146 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % |       Samples | Callee                              | Location                                            |
| ------: | ----: | ------------: | ------------: | ----------------------------------- | --------------------------------------------------- |
|  -24.0% |  -361 | 99.9% → 99.8% | 1,507 → 1,146 | `exec()`                            | `java.util.concurrent.RecursiveTask`                |
|  +58.3% |    +7 |   0.8% → 1.7% |       12 → 19 | `exec()`                            | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| +200.0% |    +2 |   0.1% → 0.3% |         1 → 3 | `setDone()`                         | `java.util.concurrent.ForkJoinTask`                 |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`                                 |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change | Delta |      % |     Samples | Callee                              | Location                            |
| -----: | ----: | -----: | ----------: | ----------------------------------- | ----------------------------------- |
| -32.0% |  -358 | 100.0% | 1,119 → 761 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Callee     | Location                            |
| -----: | ----: | -----: | ------------: | ---------- | ----------------------------------- |
| -24.3% |  -356 | 100.0% | 1,468 → 1,112 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Callee                   | Location                                                   |
| -----: | ----: | ------------: | --------: | ------------------------ | ---------------------------------------------------------- |
| -22.6% |  -178 |        100.0% | 789 → 611 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -24.9% |  -142 | 72.4% → 70.2% | 571 → 429 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -15.5% |   -30 | 24.5% → 26.7% | 193 → 163 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |   Samples | Callee                           | Location                                                  |
| -----: | ----: | ------------: | --------: | -------------------------------- | --------------------------------------------------------- |
| -26.7% |  -171 | 95.0% → 94.4% | 640 → 469 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Callee              | Location                                                  |
| -----: | ----: | -----: | --------: | ------------------- | --------------------------------------------------------- |
| -26.3% |  -177 | 100.0% | 674 → 497 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| -26.3% |  -177 | 100.0% | 674 → 497 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Callee                         | Location                                                   |
| -----: | ----: | ------------: | --------: | ------------------------------ | ---------------------------------------------------------- |
| -29.2% |  -114 | 68.3% → 64.3% | 390 → 276 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |   Samples | Callee     | Location                            |
| -----: | ----: | ------------: | --------: | ---------- | ----------------------------------- |
| -25.6% |  -102 | 98.0% → 97.1% | 399 → 297 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |              % |   Samples | Callee            | Location                                               |
| ------: | ----: | -------------: | --------: | ----------------- | ------------------------------------------------------ |
|  -14.6% |   -37 | 99.6% → 100.0% | 253 → 216 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| removed |    -1 |    0.4% → 0.0% |     1 → 0 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Callee                     | Location                                               |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------------ |
| -15.3% |   -38 | 100.0% | 249 → 211 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -15.3% |   -38 | 100.0% | 249 → 211 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Callee     | Location                            |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------- |
| -14.6% |   -37 | 100.0% | 253 → 216 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Callee                              | Location              |
| -----: | ----: | ------------: | ------: | ----------------------------------- | --------------------- |
| -11.9% |    -7 | 30.6% → 31.9% | 59 → 52 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |
| -18.9% |    -7 | 19.2% → 18.4% | 37 → 30 | `add(Object)`                       | `java.util.ArrayList` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed |    -6 | 85.7% → 0.0% |   6 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Callee                | Location            |
| -----: | ----: | ------------: | ------: | --------------------- | ------------------- |
| -22.2% |    -2 | 50.0% → 46.7% |   9 → 7 | `<init>(Map)`         | `java.util.HashMap` |
| -11.1% |    -1 | 50.0% → 53.3% |   9 → 8 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Callee            | Location                                    |
| -----: | ----: | -----: | ------: | ----------------- | ------------------------------------------- |
| -16.7% |    -3 | 100.0% | 18 → 15 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Callee                     | Location                                                   |
| -----: | ----: | -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| -16.7% |    -3 | 100.0% | 18 → 15 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Callee               | Location                             |
| -----: | ----: | -----: | ------: | -------------------- | ------------------------------------ |
| -33.3% |    -2 | 100.0% |   6 → 4 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |      % | Samples | Callee                        | Location                                    |
| -----: | ----: | -----: | ------: | ----------------------------- | ------------------------------------------- |
| -33.3% |    -2 | 100.0% |   6 → 4 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `extractResource(String, Path)` (`org.renaissance.core.ResourceUtils`)

| Change | Delta |      % | Samples | Callee                                  | Location              |
| -----: | ----: | -----: | ------: | --------------------------------------- | --------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `copy(InputStream, Path, CopyOption[])` | `java.nio.file.Files` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |   Samples | Callee     | Location                            |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------- |
| -11.3% |   -30 | 100.0% | 265 → 235 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Callee          | Location                                                                                                                                                                    |
| -----: | ----: | -----------: | ------: | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -91.7% |   -11 | 19.7% → 1.9% |  12 → 1 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011e4b38 → org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000090011fece0` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |              % | Samples | Callee                  | Location           |
| -----: | ----: | -------------: | ------: | ----------------------- | ------------------ |
| -27.0% |   -10 | 100.0% → 90.0% | 37 → 27 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `grow()` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Callee      | Location              |
| -----: | ----: | -----: | ------: | ----------- | --------------------- |
| -18.9% |    -7 | 100.0% | 37 → 30 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Callee   | Location              |
| -----: | ----: | -----: | ------: | -------- | --------------------- |
| -18.9% |    -7 | 100.0% | 37 → 30 | `grow()` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Callee                       | Location              |
| -----: | ----: | -----: | ------: | ---------------------------- | --------------------- |
| -18.9% |    -7 | 100.0% | 37 → 30 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|  Change | Delta |             % | Samples | Callee                                                        | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- | ------------------------ |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|  Change | Delta |             % | Samples | Callee                      | Location                 |
| ------: | ----: | ------------: | ------: | --------------------------- | ------------------------ |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

# Allocated heap profile diff

Allocated 37.8 GiB → 37.7 GiB (-147.036 MiB, -0.4%) over 1,935 samples → 2,113 samples (20 MiB → 18.3 MiB per sample).

| Category         | Change |      Delta |             % |                Size |       Samples |
| ---------------- | -----: | ---------: | ------------: | ------------------: | ------------: |
| Standard library |  -3.6% | -1.297 GiB | 95.8% → 92.7% | 36.2 GiB → 34.9 GiB | 1,835 → 1,993 |
| Ours             | +72.5% | +1.153 GiB |   4.2% → 7.3% | 1.59 GiB → 2.74 GiB |      99 → 119 |
| Unknown          | -11.9% |     -240 B |         <0.1% | 1.97 KiB → 1.73 KiB |             1 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|   Change |        Delta |            % |                Size | Samples | Function                                     | Location                                                   |
| -------: | -----------: | -----------: | ------------------: | ------: | -------------------------------------------- | ---------------------------------------------------------- |
|  +710.5% | +839.242 MiB |  0.3% → 2.5% |   118 MiB → 957 MiB |  5 → 22 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +1140.5% | +237.893 MiB |  0.1% → 0.7% |  20.9 MiB → 259 MiB |   5 → 7 | `resize()`                                   | `java.util.HashMap`                                        |
|      new | +206.628 MiB |  0.0% → 0.5% |       0 B → 207 MiB |   0 → 1 | `lambda$run$0(int, List, int)`               | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +1606.7% | +140.046 MiB | <0.1% → 0.4% |  8.72 MiB → 149 MiB |   6 → 7 | `collectClusters(int[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +442.4% | +122.447 MiB |  0.1% → 0.4% |  27.7 MiB → 150 MiB |   2 → 3 | `vectorSum()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +69.2% |  +70.246 MiB |  0.3% → 0.4% |   102 MiB → 172 MiB |   5 → 8 | `lambda$merge$6(List, List)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +77.1% |  +46.773 MiB |  0.2% → 0.3% |  60.7 MiB → 107 MiB |   3 → 2 | `lambda$collectClusters$0(Double[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +52.0% |  +45.244 MiB |  0.2% → 0.3% |    87 MiB → 132 MiB |      10 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                        |
|  +153.9% |  +11.699 MiB | <0.1% → 0.1% |  7.6 MiB → 19.3 MiB | 21 → 28 | `valueOf(double)`                            | `java.lang.Double`                                         |
|    +1.3% |  +11.374 MiB |  2.3% → 2.4% |   905 MiB → 916 MiB | 56 → 54 | `findNearestCentroid()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +297.4% |   +5.107 MiB |        <0.1% | 1.72 MiB → 6.83 MiB |  5 → 12 | `opWrapSink(int, Sink)`                      | `java.util.stream.IntPipeline$1`                           |
|  +225.2% |   +4.721 MiB |        <0.1% |  2.1 MiB → 6.82 MiB |   6 → 8 | `range(int, int)`                            | `java.util.stream.IntStream`                               |
|  +198.2% |   +4.534 MiB |        <0.1% | 2.29 MiB → 6.82 MiB |  6 → 13 | `intStream(Spliterator$OfInt, boolean)`      | `java.util.stream.StreamSupport`                           |
|  +188.8% |   +4.289 MiB |        <0.1% | 2.27 MiB → 6.56 MiB |  6 → 10 | `builder(long, IntFunction)`                 | `java.util.stream.Nodes`                                   |
|   +57.0% |   +4.053 MiB |        <0.1% | 7.11 MiB → 11.2 MiB |   2 → 1 | `iterator()`                                 | `java.util.HashMap$EntrySet`                               |
|  +130.8% |   +3.961 MiB |        <0.1% | 3.03 MiB → 6.99 MiB |  8 → 13 | `mapToObj(IntFunction, int)`                 | `java.util.stream.IntPipeline`                             |
|  +883.6% |   +3.345 MiB |        <0.1% |  388 KiB → 3.72 MiB |   1 → 5 | `allocateInstance(Object)`                   | `java.lang.invoke.DirectMethodHandle`                      |
|   +25.6% |   +3.276 MiB |        <0.1% | 12.8 MiB → 16.1 MiB | 25 → 41 | `copyOf(byte[], int)`                        | `java.util.Arrays`                                         |
|   +67.9% |   +2.437 MiB |        <0.1% | 3.59 MiB → 6.02 MiB |  7 → 15 | `<init>(InputStream, Inflater, int)`         | `java.util.zip.InflaterInputStream`                        |
|   +76.0% |   +2.151 MiB |        <0.1% | 2.83 MiB → 4.98 MiB |   8 → 6 | `lambda$generateData$4(int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |

##### Standard library

|   Change |        Delta |            % |                Size | Samples | Function                                                  | Location                                     |
| -------: | -----------: | -----------: | ------------------: | ------: | --------------------------------------------------------- | -------------------------------------------- |
| +1140.5% | +237.893 MiB |  0.1% → 0.7% |  20.9 MiB → 259 MiB |   5 → 7 | `resize()`                                                | `java.util.HashMap`                          |
|   +52.0% |  +45.244 MiB |  0.2% → 0.3% |    87 MiB → 132 MiB |      10 | `newNode(int, Object, Object, HashMap$Node)`              | `java.util.HashMap`                          |
|  +153.9% |  +11.699 MiB | <0.1% → 0.1% |  7.6 MiB → 19.3 MiB | 21 → 28 | `valueOf(double)`                                         | `java.lang.Double`                           |
|  +297.4% |   +5.107 MiB |        <0.1% | 1.72 MiB → 6.83 MiB |  5 → 12 | `opWrapSink(int, Sink)`                                   | `java.util.stream.IntPipeline$1`             |
|  +225.2% |   +4.721 MiB |        <0.1% |  2.1 MiB → 6.82 MiB |   6 → 8 | `range(int, int)`                                         | `java.util.stream.IntStream`                 |
|  +198.2% |   +4.534 MiB |        <0.1% | 2.29 MiB → 6.82 MiB |  6 → 13 | `intStream(Spliterator$OfInt, boolean)`                   | `java.util.stream.StreamSupport`             |
|  +188.8% |   +4.289 MiB |        <0.1% | 2.27 MiB → 6.56 MiB |  6 → 10 | `builder(long, IntFunction)`                              | `java.util.stream.Nodes`                     |
|   +57.0% |   +4.053 MiB |        <0.1% | 7.11 MiB → 11.2 MiB |   2 → 1 | `iterator()`                                              | `java.util.HashMap$EntrySet`                 |
|  +130.8% |   +3.961 MiB |        <0.1% | 3.03 MiB → 6.99 MiB |  8 → 13 | `mapToObj(IntFunction, int)`                              | `java.util.stream.IntPipeline`               |
|  +883.6% |   +3.345 MiB |        <0.1% |  388 KiB → 3.72 MiB |   1 → 5 | `allocateInstance(Object)`                                | `java.lang.invoke.DirectMethodHandle`        |
|   +25.6% |   +3.276 MiB |        <0.1% | 12.8 MiB → 16.1 MiB | 25 → 41 | `copyOf(byte[], int)`                                     | `java.util.Arrays`                           |
|   +67.9% |   +2.437 MiB |        <0.1% | 3.59 MiB → 6.02 MiB |  7 → 15 | `<init>(InputStream, Inflater, int)`                      | `java.util.zip.InflaterInputStream`          |
|      new | +697.421 KiB | 0.0% → <0.1% |       0 B → 697 KiB |   0 → 1 | `doubleStream(Spliterator$OfDouble, boolean)`             | `java.util.stream.StreamSupport`             |
|      new | +537.507 KiB | 0.0% → <0.1% |       0 B → 538 KiB |   0 → 1 | `enlarge(int)`                                            | `jdk.internal.org.objectweb.asm.ByteVector`  |
|      new | +511.992 KiB | 0.0% → <0.1% |       0 B → 512 KiB |   0 → 1 | `run()`                                                   | `jdk.internal.loader.URLClassPath$3`         |
|      new | +438.656 KiB | 0.0% → <0.1% |       0 B → 439 KiB |   0 → 1 | `toString()`                                              | `java.lang.StringBuilder`                    |
|      new | +403.679 KiB | 0.0% → <0.1% |       0 B → 404 KiB |   0 → 1 | `<init>(int)`                                             | `java.io.ByteArrayOutputStream`              |
|      new | +402.687 KiB | 0.0% → <0.1% |       0 B → 403 KiB |   0 → 1 | `addConstantMemberReference(int, String, String, String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |
|      new | +391.695 KiB | 0.0% → <0.1% |       0 B → 392 KiB |   0 → 1 | `read(Manifest$FastInputStream, byte[], String, int)`     | `java.util.jar.Attributes`                   |
|      new | +388.179 KiB | 0.0% → <0.1% |       0 B → 388 KiB |   0 → 1 | `allocateUninitializedArray(Class, int)`                  | `jdk.internal.misc.Unsafe`                   |

##### Ours

|   Change |        Delta |            % |                Size | Samples | Function                             | Location                                                   |
| -------: | -----------: | -----------: | ------------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|  +710.5% | +839.242 MiB |  0.3% → 2.5% |   118 MiB → 957 MiB |  5 → 22 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|      new | +206.628 MiB |  0.0% → 0.5% |       0 B → 207 MiB |   0 → 1 | `lambda$run$0(int, List, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +1606.7% | +140.046 MiB | <0.1% → 0.4% |  8.72 MiB → 149 MiB |   6 → 7 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +442.4% | +122.447 MiB |  0.1% → 0.4% |  27.7 MiB → 150 MiB |   2 → 3 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +69.2% |  +70.246 MiB |  0.3% → 0.4% |   102 MiB → 172 MiB |   5 → 8 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   +77.1% |  +46.773 MiB |  0.2% → 0.3% |  60.7 MiB → 107 MiB |   3 → 2 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    +1.3% |  +11.374 MiB |  2.3% → 2.4% |   905 MiB → 916 MiB | 56 → 54 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +76.0% |   +2.151 MiB |        <0.1% | 2.83 MiB → 4.98 MiB |   8 → 6 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|      new | +406.664 KiB | 0.0% → <0.1% |       0 B → 407 KiB |   0 → 1 | `main(String[])`                     | `org.renaissance.harness.RenaissanceSuite$`                |
|      new | +385.851 KiB | 0.0% → <0.1% |       0 B → 386 KiB |   0 → 1 | `computeClusterAverages()`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |             % |                Size |       Samples | Function                                                                        | Location                                                  |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------- | --------------------------------------------------------- |
|   -3.5% |   -1.252 GiB | 93.9% → 91.0% | 35.5 GiB → 34.3 GiB | 1,671 → 1,798 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                                        |
|  -55.0% | -196.625 MiB |   0.9% → 0.4% |   357 MiB → 161 MiB |        13 → 7 | `grow(int)`                                                                     | `java.util.ArrayList`                                     |
| removed | -158.634 MiB |   0.4% → 0.0% |       159 MiB → 0 B |         1 → 0 | `read(InputStream, String)`                                                     | `java.util.jar.Manifest`                                  |
|  -51.8% | -131.565 MiB |   0.7% → 0.3% |   254 MiB → 123 MiB |         8 → 7 | `merge(Map, Map)`                                                               | `org.renaissance.jdk.concurrent.JavaKMeans`               |
|  -85.2% | -124.599 MiB |   0.4% → 0.1% |  146 MiB → 21.7 MiB |         4 → 5 | `createSubtask(int, int)`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| removed |  -12.665 MiB |  <0.1% → 0.0% |      12.7 MiB → 0 B |        19 → 0 | `copyOf(Object[], int, Class)`                                                  | `java.util.Arrays`                                        |
| removed |   -6.927 MiB |  <0.1% → 0.0% |      6.93 MiB → 0 B |         1 → 0 | `entrySet()`                                                                    | `java.util.HashMap`                                       |
|  -59.8% |   -2.252 MiB |         <0.1% | 3.77 MiB → 1.52 MiB |             2 | `add(double[], double[])`                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| removed |   -1.343 MiB |  <0.1% → 0.0% |      1.34 MiB → 0 B |         1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                   |
| removed | -779.367 KiB |  <0.1% → 0.0% |       779 KiB → 0 B |         2 → 0 | `<init>(int)`                                                                   | `java.lang.AbstractStringBuilder`                         |
|  -50.4% | -585.914 KiB |         <0.1% |  1.14 MiB → 577 KiB |             2 | `newString(byte[], int, int)`                                                   | `java.lang.StringLatin1`                                  |
|  -22.0% | -547.226 KiB |         <0.1% | 2.43 MiB → 1.89 MiB |         7 → 5 | `allocateInstance(Class)`                                                       | `jdk.internal.misc.Unsafe`                                |
| removed | -482.609 KiB |  <0.1% → 0.0% |       483 KiB → 0 B |         1 → 0 | `newStringUTF8NoRepl(byte[], int, int, boolean)`                                | `java.lang.String`                                        |
| removed | -434.828 KiB |  <0.1% → 0.0% |       435 KiB → 0 B |         2 → 0 | `putVal(Object, Object, boolean)`                                               | `java.util.concurrent.ConcurrentHashMap`                  |
| removed | -414.875 KiB |  <0.1% → 0.0% |       415 KiB → 0 B |         1 → 0 | `getInputStream(ZipEntry)`                                                      | `java.util.zip.ZipFile`                                   |
| removed |  -398.82 KiB |  <0.1% → 0.0% |       399 KiB → 0 B |         1 → 0 | `put(Object, Object)`                                                           | `java.util.WeakHashMap`                                   |
| removed |  -395.14 KiB |  <0.1% → 0.0% |       395 KiB → 0 B |         1 → 0 | `toArray()`                                                                     | `java.util.stream.IntPipeline`                            |
| removed |  -394.39 KiB |  <0.1% → 0.0% |       394 KiB → 0 B |         1 → 0 | `<init>(int)`                                                                   | `jdk.internal.org.objectweb.asm.ByteVector`               |
|  -49.2% | -389.742 KiB |         <0.1% |   793 KiB → 403 KiB |         2 → 1 | `copyOfRangeByte(byte[], int, int)`                                             | `java.util.Arrays`                                        |
| removed | -265.476 KiB |  <0.1% → 0.0% |       265 KiB → 0 B |         1 → 0 | `initClassName()`                                                               | `java.lang.Class`                                         |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                                                        | Location                                     |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------------------------------------------------------- | -------------------------------------------- |
|   -3.5% |   -1.252 GiB | 93.9% → 91.0% | 35.5 GiB → 34.3 GiB | 1,671 → 1,798 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                           |
|  -55.0% | -196.625 MiB |   0.9% → 0.4% |   357 MiB → 161 MiB |        13 → 7 | `grow(int)`                                                                     | `java.util.ArrayList`                        |
| removed | -158.634 MiB |   0.4% → 0.0% |       159 MiB → 0 B |         1 → 0 | `read(InputStream, String)`                                                     | `java.util.jar.Manifest`                     |
| removed |  -12.665 MiB |  <0.1% → 0.0% |      12.7 MiB → 0 B |        19 → 0 | `copyOf(Object[], int, Class)`                                                  | `java.util.Arrays`                           |
| removed |   -6.927 MiB |  <0.1% → 0.0% |      6.93 MiB → 0 B |         1 → 0 | `entrySet()`                                                                    | `java.util.HashMap`                          |
| removed |   -1.343 MiB |  <0.1% → 0.0% |      1.34 MiB → 0 B |         1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                      |
| removed | -779.367 KiB |  <0.1% → 0.0% |       779 KiB → 0 B |         2 → 0 | `<init>(int)`                                                                   | `java.lang.AbstractStringBuilder`            |
|  -50.4% | -585.914 KiB |         <0.1% |  1.14 MiB → 577 KiB |             2 | `newString(byte[], int, int)`                                                   | `java.lang.StringLatin1`                     |
|  -22.0% | -547.226 KiB |         <0.1% | 2.43 MiB → 1.89 MiB |         7 → 5 | `allocateInstance(Class)`                                                       | `jdk.internal.misc.Unsafe`                   |
| removed | -482.609 KiB |  <0.1% → 0.0% |       483 KiB → 0 B |         1 → 0 | `newStringUTF8NoRepl(byte[], int, int, boolean)`                                | `java.lang.String`                           |
| removed | -434.828 KiB |  <0.1% → 0.0% |       435 KiB → 0 B |         2 → 0 | `putVal(Object, Object, boolean)`                                               | `java.util.concurrent.ConcurrentHashMap`     |
| removed | -414.875 KiB |  <0.1% → 0.0% |       415 KiB → 0 B |         1 → 0 | `getInputStream(ZipEntry)`                                                      | `java.util.zip.ZipFile`                      |
| removed |  -398.82 KiB |  <0.1% → 0.0% |       399 KiB → 0 B |         1 → 0 | `put(Object, Object)`                                                           | `java.util.WeakHashMap`                      |
| removed |  -395.14 KiB |  <0.1% → 0.0% |       395 KiB → 0 B |         1 → 0 | `toArray()`                                                                     | `java.util.stream.IntPipeline`               |
| removed |  -394.39 KiB |  <0.1% → 0.0% |       394 KiB → 0 B |         1 → 0 | `<init>(int)`                                                                   | `jdk.internal.org.objectweb.asm.ByteVector`  |
|  -49.2% | -389.742 KiB |         <0.1% |   793 KiB → 403 KiB |         2 → 1 | `copyOfRangeByte(byte[], int, int)`                                             | `java.util.Arrays`                           |
| removed | -265.476 KiB |  <0.1% → 0.0% |       265 KiB → 0 B |         1 → 0 | `initClassName()`                                                               | `java.lang.Class`                            |
|  -27.4% | -146.671 KiB |         <0.1% |   535 KiB → 389 KiB |             1 | `addConstantUtf8(String)`                                                       | `jdk.internal.org.objectweb.asm.SymbolTable` |
|   -3.8% |  -15.421 KiB |         <0.1% |   408 KiB → 392 KiB |             1 | `transferTo(OutputStream)`                                                      | `java.io.InputStream`                        |

##### Ours

| Change |        Delta |           % |                Size | Samples | Function                  | Location                                                  |
| -----: | -----------: | ----------: | ------------------: | ------: | ------------------------- | --------------------------------------------------------- |
| -51.8% | -131.565 MiB | 0.7% → 0.3% |   254 MiB → 123 MiB |   8 → 7 | `merge(Map, Map)`         | `org.renaissance.jdk.concurrent.JavaKMeans`               |
| -85.2% | -124.599 MiB | 0.4% → 0.1% |  146 MiB → 21.7 MiB |   4 → 5 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| -59.8% |   -2.252 MiB |       <0.1% | 3.77 MiB → 1.52 MiB |       2 | `add(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |        Delta |      % |              Size | Samples | Location                                                       |
| ------: | -----------: | -----: | ----------------: | ------: | -------------------------------------------------------------- |
| +710.5% | +839.242 MiB | 100.0% | 118 MiB → 957 MiB |  5 → 22 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `resize()` (`java.util.HashMap`)

|   Change |        Delta |      % |               Size | Samples | Location                |
| -------: | -----------: | -----: | -----------------: | ------: | ----------------------- |
| +1140.5% | +237.893 MiB | 100.0% | 20.9 MiB → 259 MiB |   5 → 7 | `java.util.HashMap:710` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |             % |          Size | Samples | Location                                       |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------- |
|    new | +206.628 MiB | 0.0% → 100.0% | 0 B → 207 MiB |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans:53` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|   Change |        Delta |      % |               Size | Samples | Location                                                       |
| -------: | -----------: | -----: | -----------------: | ------: | -------------------------------------------------------------- |
| +1606.7% | +140.046 MiB | 100.0% | 8.72 MiB → 149 MiB |   6 → 7 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |        Delta |      % |               Size | Samples | Location                                                      |
| ------: | -----------: | -----: | -----------------: | ------: | ------------------------------------------------------------- |
| +442.4% | +122.447 MiB | 100.0% | 27.7 MiB → 150 MiB |   2 → 3 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |              Size | Samples | Location                                        |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------------------------------------- |
| +69.2% | +70.246 MiB | 100.0% | 102 MiB → 172 MiB |   5 → 8 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |               Size | Samples | Location                                                       |
| -----: | ----------: | -----: | -----------------: | ------: | -------------------------------------------------------------- |
| +77.1% | +46.773 MiB | 100.0% | 60.7 MiB → 107 MiB |   3 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |      % |             Size | Samples | Location                 |
| -----: | ----------: | -----: | ---------------: | ------: | ------------------------ |
| +52.0% | +45.244 MiB | 100.0% | 87 MiB → 132 MiB |      10 | `java.util.HashMap:1909` |

##### `valueOf(double)` (`java.lang.Double`)

|  Change |       Delta |      % |               Size | Samples | Location               |
| ------: | ----------: | -----: | -----------------: | ------: | ---------------------- |
| +153.9% | +11.699 MiB | 100.0% | 7.6 MiB → 19.3 MiB | 21 → 28 | `java.lang.Double:773` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size | Samples | Location                                                       |
| -----: | ----------: | -----: | ----------------: | ------: | -------------------------------------------------------------- |
|  +1.3% | +11.374 MiB | 100.0% | 905 MiB → 916 MiB | 56 → 54 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|  Change |      Delta |      % |                Size | Samples | Location                             |
| ------: | ---------: | -----: | ------------------: | ------: | ------------------------------------ |
| +297.4% | +5.107 MiB | 100.0% | 1.72 MiB → 6.83 MiB |  5 → 12 | `java.util.stream.IntPipeline$1:177` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|  Change |      Delta |      % |               Size | Samples | Location                          |
| ------: | ---------: | -----: | -----------------: | ------: | --------------------------------- |
| +225.2% | +4.721 MiB | 100.0% | 2.1 MiB → 6.82 MiB |   6 → 8 | `java.util.stream.IntStream:1083` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

|  Change |      Delta |      % |                Size | Samples | Location                             |
| ------: | ---------: | -----: | ------------------: | ------: | ------------------------------------ |
| +198.2% | +4.534 MiB | 100.0% | 2.29 MiB → 6.82 MiB |  6 → 13 | `java.util.stream.StreamSupport:138` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

|  Change |      Delta |      % |                Size | Samples | Location                     |
| ------: | ---------: | -----: | ------------------: | ------: | ---------------------------- |
| +188.8% | +4.289 MiB | 100.0% | 2.27 MiB → 6.56 MiB |  6 → 10 | `java.util.stream.Nodes:168` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

| Change |      Delta |      % |                Size | Samples | Location                          |
| -----: | ---------: | -----: | ------------------: | ------: | --------------------------------- |
| +57.0% | +4.053 MiB | 100.0% | 7.11 MiB → 11.2 MiB |   2 → 1 | `java.util.HashMap$EntrySet:1106` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

|  Change |      Delta |      % |                Size | Samples | Location                           |
| ------: | ---------: | -----: | ------------------: | ------: | ---------------------------------- |
| +130.8% | +3.961 MiB | 100.0% | 3.03 MiB → 6.99 MiB |  8 → 13 | `java.util.stream.IntPipeline:174` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |      Delta |      % |               Size | Samples | Location                                  |
| ------: | ---------: | -----: | -----------------: | ------: | ----------------------------------------- |
| +883.6% | +3.345 MiB | 100.0% | 388 KiB → 3.72 MiB |   1 → 5 | `java.lang.invoke.DirectMethodHandle:501` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Samples | Location                |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- |
| +25.6% | +3.276 MiB | 100.0% | 12.8 MiB → 16.1 MiB | 25 → 41 | `java.util.Arrays:3541` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

| Change |      Delta |      % |                Size | Samples | Location                               |
| -----: | ---------: | -----: | ------------------: | ------: | -------------------------------------- |
| +67.9% | +2.437 MiB | 100.0% | 3.59 MiB → 6.02 MiB |  7 → 15 | `java.util.zip.InflaterInputStream:89` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |                Size | Samples | Location                                       |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------------------------------- |
| +76.0% | +2.151 MiB | 100.0% | 2.83 MiB → 4.98 MiB |   8 → 6 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

| Change |        Delta |             % |          Size | Samples | Location                             |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------ |
|    new | +697.421 KiB | 0.0% → 100.0% | 0 B → 697 KiB |   0 → 1 | `java.util.stream.StreamSupport:274` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |        Delta |             % |          Size | Samples | Location                                        |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- |
|    new | +537.507 KiB | 0.0% → 100.0% | 0 B → 538 KiB |   0 → 1 | `jdk.internal.org.objectweb.asm.ByteVector:401` |

##### `run()` (`jdk.internal.loader.URLClassPath$3`)

| Change |        Delta |             % |          Size | Samples | Location                                 |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------------- |
|    new | +511.992 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `jdk.internal.loader.URLClassPath$3:500` |

##### `toString()` (`java.lang.StringBuilder`)

| Change |        Delta |             % |          Size | Samples | Location                      |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------- |
|    new | +438.656 KiB | 0.0% → 100.0% | 0 B → 439 KiB |   0 → 1 | `java.lang.StringBuilder:475` |

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

| Change |        Delta |             % |          Size | Samples | Location                           |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------- |
|    new | +403.679 KiB | 0.0% → 100.0% | 0 B → 404 KiB |   0 → 1 | `java.io.ByteArrayOutputStream:81` |

##### `addConstantMemberReference(int, String, String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |        Delta |             % |          Size | Samples | Location                                         |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
|    new | +402.687 KiB | 0.0% → 100.0% | 0 B → 403 KiB |   0 → 1 | `jdk.internal.org.objectweb.asm.SymbolTable:605` |

##### `read(Manifest$FastInputStream, byte[], String, int)` (`java.util.jar.Attributes`)

| Change |        Delta |             % |          Size | Samples | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------ |
|    new | +391.695 KiB | 0.0% → 100.0% | 0 B → 392 KiB |   0 → 1 | `java.util.jar.Attributes:371` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

| Change |        Delta |             % |          Size | Samples | Location                        |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------- |
|    new | +388.179 KiB | 0.0% → 100.0% | 0 B → 388 KiB |   0 → 1 | `jdk.internal.misc.Unsafe:1380` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |             % |          Size | Samples | Location                                       |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------- |
|    new | +406.664 KiB | 0.0% → 100.0% | 0 B → 407 KiB |   0 → 1 | `org.renaissance.harness.RenaissanceSuite$:38` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |             % |          Size | Samples | Location                                                   |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------------------- |
|    new | +385.851 KiB | 0.0% → 100.0% | 0 B → 386 KiB |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:314` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size |       Samples | Location                |
| -----: | ---------: | -----: | ------------------: | ------------: | ----------------------- |
|  -3.5% | -1.252 GiB | 100.0% | 35.5 GiB → 34.3 GiB | 1,671 → 1,798 | `java.util.Arrays:3482` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |        Delta |      % |              Size | Samples | Location                  |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------------- |
| -55.0% | -196.625 MiB | 100.0% | 357 MiB → 161 MiB |  13 → 7 | `java.util.ArrayList:239` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

|  Change |        Delta |             % |          Size | Samples | Location                     |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------- |
| removed | -158.634 MiB | 100.0% → 0.0% | 159 MiB → 0 B |   1 → 0 | `java.util.jar.Manifest:332` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |              Size | Samples | Location                                        |
| -----: | -----------: | -----: | ----------------: | ------: | ----------------------------------------------- |
| -51.8% | -131.565 MiB | 100.0% | 254 MiB → 123 MiB |   8 → 7 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |        Delta |      % |               Size | Samples | Location                                                      |
| -----: | -----------: | -----: | -----------------: | ------: | ------------------------------------------------------------- |
| -85.2% | -124.599 MiB | 100.0% | 146 MiB → 21.7 MiB |   4 → 5 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|  Change |       Delta |             % |           Size | Samples | Location                |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------------- |
| removed | -12.665 MiB | 100.0% → 0.0% | 12.7 MiB → 0 B |  19 → 0 | `java.util.Arrays:3513` |

##### `entrySet()` (`java.util.HashMap`)

|  Change |      Delta |             % |           Size | Samples | Location                 |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------ |
| removed | -6.927 MiB | 100.0% → 0.0% | 6.93 MiB → 0 B |   1 → 0 | `java.util.HashMap:1099` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |      Delta |      % |                Size | Samples | Location                                                      |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------------------------------- |
| -59.8% | -2.252 MiB | 100.0% | 3.77 MiB → 1.52 MiB |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|  Change |        Delta |             % |          Size | Samples | Location                              |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------- |
| removed | -779.367 KiB | 100.0% → 0.0% | 779 KiB → 0 B |   2 → 0 | `java.lang.AbstractStringBuilder:101` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change |        Delta |      % |               Size | Samples | Location                     |
| -----: | -----------: | -----: | -----------------: | ------: | ---------------------------- |
| -50.4% | -585.914 KiB | 100.0% | 1.14 MiB → 577 KiB |       2 | `java.lang.StringLatin1:750` |

##### `newStringUTF8NoRepl(byte[], int, int, boolean)` (`java.lang.String`)

|  Change |        Delta |             % |          Size | Samples | Location               |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------- |
| removed | -482.609 KiB | 100.0% → 0.0% | 483 KiB → 0 B |   1 → 0 | `java.lang.String:709` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |        Delta |             % |          Size | Samples | Location                                      |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------------- |
| removed | -434.828 KiB | 100.0% → 0.0% | 435 KiB → 0 B |   2 → 0 | `java.util.concurrent.ConcurrentHashMap:1019` |

##### `getInputStream(ZipEntry)` (`java.util.zip.ZipFile`)

|  Change |        Delta |             % |          Size | Samples | Location                    |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------- |
| removed | -414.875 KiB | 100.0% → 0.0% | 415 KiB → 0 B |   1 → 0 | `java.util.zip.ZipFile:390` |

##### `put(Object, Object)` (`java.util.WeakHashMap`)

|  Change |       Delta |             % |          Size | Samples | Location                    |
| ------: | ----------: | ------------: | ------------: | ------: | --------------------------- |
| removed | -398.82 KiB | 100.0% → 0.0% | 399 KiB → 0 B |   1 → 0 | `java.util.WeakHashMap:476` |

##### `toArray()` (`java.util.stream.IntPipeline`)

|  Change |       Delta |             % |          Size | Samples | Location                           |
| ------: | ----------: | ------------: | ------------: | ------: | ---------------------------------- |
| removed | -395.14 KiB | 100.0% → 0.0% | 395 KiB → 0 B |   1 → 0 | `java.util.stream.IntPipeline:562` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |       Delta |             % |          Size | Samples | Location                                       |
| ------: | ----------: | ------------: | ------------: | ------: | ---------------------------------------------- |
| removed | -394.39 KiB | 100.0% → 0.0% | 394 KiB → 0 B |   1 → 0 | `jdk.internal.org.objectweb.asm.ByteVector:87` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |        Delta |      % |              Size | Samples | Location                |
| -----: | -----------: | -----: | ----------------: | ------: | ----------------------- |
| -49.2% | -389.742 KiB | 100.0% | 793 KiB → 403 KiB |   2 → 1 | `java.util.Arrays:3863` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |        Delta |      % |              Size | Samples | Location                                         |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------------------------------------ |
| -27.4% | -146.671 KiB | 100.0% | 535 KiB → 389 KiB |       1 | `jdk.internal.org.objectweb.asm.SymbolTable:807` |

##### `transferTo(OutputStream)` (`java.io.InputStream`)

| Change |       Delta |      % |              Size | Samples | Location                  |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------- |
|  -3.8% | -15.421 KiB | 100.0% | 408 KiB → 392 KiB |       1 | `java.io.InputStream:794` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |        Delta |      % |              Size | Samples | Caller      | Location                                               |
| ------: | -----------: | -----: | ----------------: | ------: | ----------- | ------------------------------------------------------ |
| +710.5% | +839.242 MiB | 100.0% | 118 MiB → 957 MiB |  5 → 22 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `resize()` (`java.util.HashMap`)

|   Change |        Delta |             % |               Size | Samples | Caller                                          | Location            |
| -------: | -----------: | ------------: | -----------------: | ------: | ----------------------------------------------- | ------------------- |
| +1499.1% | +242.086 MiB | 77.4% → 99.8% | 16.1 MiB → 258 MiB |   4 → 5 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
|   -89.1% |   -4.193 MiB |  22.6% → 0.2% | 4.71 MiB → 528 KiB |   1 → 2 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |             % |          Size | Samples | Caller   | Location                                                                                                                                      |
| -----: | -----------: | ------------: | ------------: | ------: | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +206.628 MiB | 0.0% → 100.0% | 0 B → 207 MiB |   0 → 1 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011fdf70` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|   Change |        Delta |      % |               Size | Samples | Caller              | Location                                                   |
| -------: | -----------: | -----: | -----------------: | ------: | ------------------- | ---------------------------------------------------------- |
| +1606.7% | +140.046 MiB | 100.0% | 8.72 MiB → 149 MiB |   6 → 7 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |        Delta |      % |               Size | Samples | Caller              | Location                                                  |
| ------: | -----------: | -----: | -----------------: | ------: | ------------------- | --------------------------------------------------------- |
| +442.4% | +122.447 MiB | 100.0% | 27.7 MiB → 150 MiB |   2 → 3 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |              Size | Samples | Caller                  | Location                                                                                                                                      |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| +69.2% | +70.246 MiB | 100.0% | 102 MiB → 172 MiB |   5 → 8 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011ff3c8` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |               Size | Samples | Caller          | Location                                                                                                                                                                    |
| -----: | ----------: | -----: | -----------------: | ------: | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +77.1% | +46.773 MiB | 100.0% | 60.7 MiB → 107 MiB |   3 → 2 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011e4b38 → org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000090011fece0` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|   Change |       Delta |             % |                Size | Samples | Caller                                          | Location            |
| -------: | ----------: | ------------: | ------------------: | ------: | ----------------------------------------------- | ------------------- |
| +2450.1% | +96.062 MiB |  4.5% → 75.6% |  3.92 MiB → 100 MiB |   5 → 4 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|   -61.1% | -50.818 MiB | 95.5% → 24.4% | 83.1 MiB → 32.3 MiB |   5 → 6 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `valueOf(double)` (`java.lang.Double`)

|  Change |       Delta |      % |               Size | Samples | Caller                                           | Location                                    |
| ------: | ----------: | -----: | -----------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +153.9% | +11.699 MiB | 100.0% | 7.6 MiB → 19.3 MiB | 21 → 28 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |              Size | Samples | Caller              | Location                                                   |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------- | ---------------------------------------------------------- |
|  +1.3% | +11.374 MiB | 100.0% | 905 MiB → 916 MiB | 56 → 54 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|  Change |      Delta |      % |                Size | Samples | Caller           | Location                            |
| ------: | ---------: | -----: | ------------------: | ------: | ---------------- | ----------------------------------- |
| +297.4% | +5.107 MiB | 100.0% | 1.72 MiB → 6.83 MiB |  5 → 12 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|  Change |      Delta |      % |               Size | Samples | Caller                                           | Location                                    |
| ------: | ---------: | -----: | -----------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +225.2% | +4.721 MiB | 100.0% | 2.1 MiB → 6.82 MiB |   6 → 8 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

|  Change |      Delta |      % |                Size | Samples | Caller            | Location                     |
| ------: | ---------: | -----: | ------------------: | ------: | ----------------- | ---------------------------- |
| +198.2% | +4.534 MiB | 100.0% | 2.29 MiB → 6.82 MiB |  6 → 13 | `range(int, int)` | `java.util.stream.IntStream` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

|  Change |      Delta |      % |                Size | Samples | Caller                               | Location                             |
| ------: | ---------: | -----: | ------------------: | ------: | ------------------------------------ | ------------------------------------ |
| +188.8% | +4.289 MiB | 100.0% | 2.27 MiB → 6.56 MiB |  6 → 10 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

| Change |      Delta |      % |                Size | Samples | Caller                        | Location            |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------------- | ------------------- |
| +57.0% | +4.053 MiB | 100.0% | 7.11 MiB → 11.2 MiB |   2 → 1 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

|  Change |      Delta |      % |                Size | Samples | Caller                  | Location                       |
| ------: | ---------: | -----: | ------------------: | ------: | ----------------------- | ------------------------------ |
| +130.8% | +3.961 MiB | 100.0% | 3.03 MiB → 6.99 MiB |  8 → 13 | `mapToObj(IntFunction)` | `java.util.stream.IntPipeline` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |      Delta |      % |               Size | Samples | Caller                                       | Location                                                                                                  |
| ------: | ---------: | -----: | -----------------: | ------: | -------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| +883.6% | +3.345 MiB | 100.0% | 388 KiB → 3.72 MiB |   1 → 5 | `newInvokeSpecial(Object, int, int, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001182400 → java.lang.invoke.LambdaForm$DMH.0x0000009001200000` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |      Delta |             % |                Size | Samples | Caller                        | Location                          |
| -----: | ---------: | ------------: | ------------------: | ------: | ----------------------------- | --------------------------------- |
| +26.3% | +3.276 MiB | 97.0% → 97.6% | 12.4 MiB → 15.7 MiB | 24 → 40 | `getBytes()`                  | `jdk.internal.loader.Resource`    |
|  -0.1% |     -272 B |   3.0% → 2.4% |   388 KiB → 387 KiB |       1 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

| Change |      Delta |      % |                Size | Samples | Caller                                                                                  | Location                                           |
| -----: | ---------: | -----: | ------------------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| +67.9% | +2.437 MiB | 100.0% | 3.59 MiB → 6.02 MiB |  7 → 15 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |                Size | Samples | Caller       | Location                                                                                                                                      |
| -----: | ---------: | -----: | ------------------: | ------: | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| +76.0% | +2.151 MiB | 100.0% | 2.83 MiB → 4.98 MiB |   8 → 6 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001181d48 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011fd960` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

| Change |        Delta |             % |          Size | Samples | Caller                       | Location           |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------- | ------------------ |
|    new | +697.421 KiB | 0.0% → 100.0% | 0 B → 697 KiB |   0 → 1 | `stream(double[], int, int)` | `java.util.Arrays` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |        Delta |             % |          Size | Samples | Caller            | Location                                    |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------- | ------------------------------------------- |
|    new | +537.507 KiB | 0.0% → 100.0% | 0 B → 538 KiB |   0 → 1 | `putUTF8(String)` | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `run()` (`jdk.internal.loader.URLClassPath$3`)

| Change |        Delta |             % |          Size | Samples | Caller  | Location                             |
| -----: | -----------: | ------------: | ------------: | ------: | ------- | ------------------------------------ |
|    new | +511.992 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `run()` | `jdk.internal.loader.URLClassPath$3` |

##### `toString()` (`java.lang.StringBuilder`)

| Change |        Delta |             % |          Size | Samples | Caller                | Location                    |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------- | --------------------------- |
|    new | +438.656 KiB | 0.0% → 100.0% | 0 B → 439 KiB |   0 → 1 | `toExternalForm(URL)` | `java.net.URLStreamHandler` |

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

| Change |        Delta |             % |          Size | Samples | Caller     | Location                        |
| -----: | -----------: | ------------: | ------------: | ------: | ---------- | ------------------------------- |
|    new | +403.679 KiB | 0.0% → 100.0% | 0 B → 404 KiB |   0 → 1 | `<init>()` | `java.io.ByteArrayOutputStream` |

##### `addConstantMemberReference(int, String, String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |        Delta |             % |          Size | Samples | Caller                                                  | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------------- | -------------------------------------------- |
|    new | +402.687 KiB | 0.0% → 100.0% | 0 B → 403 KiB |   0 → 1 | `addConstantMethodref(String, String, String, boolean)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `read(Manifest$FastInputStream, byte[], String, int)` (`java.util.jar.Attributes`)

| Change |        Delta |             % |          Size | Samples | Caller                      | Location                 |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------- | ------------------------ |
|    new | +391.695 KiB | 0.0% → 100.0% | 0 B → 392 KiB |   0 → 1 | `read(InputStream, String)` | `java.util.jar.Manifest` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

| Change |        Delta |             % |          Size | Samples | Caller           | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------- | ------------------------------ |
|    new | +388.179 KiB | 0.0% → 100.0% | 0 B → 388 KiB |   0 → 1 | `newArray(long)` | `java.lang.StringConcatHelper` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |             % |          Size | Samples | Caller           | Location                                   |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------- | ------------------------------------------ |
|    new | +406.664 KiB | 0.0% → 100.0% | 0 B → 407 KiB |   0 → 1 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |        Delta |             % |          Size | Samples | Caller              | Location                                               |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------- | ------------------------------------------------------ |
|    new | +385.851 KiB | 0.0% → 100.0% | 0 B → 386 KiB |   0 → 1 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |      Delta |             % |                Size |   Samples | Caller      | Location              |
| -----: | ---------: | ------------: | ------------------: | --------: | ----------- | --------------------- |
| -15.4% | -2.923 GiB | 53.4% → 46.8% |   19 GiB → 16.1 GiB | 849 → 917 | `toArray()` | `java.util.ArrayList` |
| +10.1% | +1.671 GiB | 46.6% → 53.2% | 16.5 GiB → 18.2 GiB | 822 → 881 | `grow(int)` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |        Delta |      % |              Size | Samples | Caller   | Location              |
| -----: | -----------: | -----: | ----------------: | ------: | -------- | --------------------- |
| -55.0% | -196.625 MiB | 100.0% | 357 MiB → 161 MiB |  13 → 7 | `grow()` | `java.util.ArrayList` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

|  Change |        Delta |             % |          Size | Samples | Caller                                     | Location                 |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------ | ------------------------ |
| removed | -158.634 MiB | 100.0% → 0.0% | 159 MiB → 0 B |   1 → 0 | `<init>(JarVerifier, InputStream, String)` | `java.util.jar.Manifest` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |              Size | Samples | Caller                     | Location                                                   |
| -----: | -----------: | -----: | ----------------: | ------: | -------------------------- | ---------------------------------------------------------- |
| -51.8% | -131.565 MiB | 100.0% | 254 MiB → 123 MiB |   8 → 7 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |        Delta |      % |               Size | Samples | Caller      | Location                                               |
| -----: | -----------: | -----: | -----------------: | ------: | ----------- | ------------------------------------------------------ |
| -85.2% | -124.599 MiB | 100.0% | 146 MiB → 21.7 MiB |   4 → 5 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|  Change |       Delta |             % |           Size | Samples | Caller                  | Location           |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------------- | ------------------ |
| removed | -12.665 MiB | 100.0% → 0.0% | 12.7 MiB → 0 B |  19 → 0 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `entrySet()` (`java.util.HashMap`)

|  Change |      Delta |             % |           Size | Samples | Caller                        | Location            |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------------- | ------------------- |
| removed | -6.927 MiB | 100.0% → 0.0% | 6.93 MiB → 0 B |   1 → 0 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |      Delta |      % |                Size | Samples | Caller                               | Location                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| -59.8% | -2.252 MiB | 100.0% | 3.77 MiB → 1.52 MiB |       2 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|  Change |      Delta |             % |           Size | Samples | Caller                                                    | Location                |
| ------: | ---------: | ------------: | -------------: | ------: | --------------------------------------------------------- | ----------------------- |
| removed | -1.343 MiB | 100.0% → 0.0% | 1.34 MiB → 0 B |   1 → 0 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|  Change |        Delta |            % |          Size | Samples | Caller        | Location                  |
| ------: | -----------: | -----------: | ------------: | ------: | ------------- | ------------------------- |
| removed | -391.664 KiB | 50.3% → 0.0% | 392 KiB → 0 B |   1 → 0 | `<init>()`    | `java.lang.StringBuilder` |
| removed | -387.703 KiB | 49.7% → 0.0% | 388 KiB → 0 B |   1 → 0 | `<init>(int)` | `java.lang.StringBuilder` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change |        Delta |      % |               Size | Samples | Caller                | Location           |
| -----: | -----------: | -----: | -----------------: | ------: | --------------------- | ------------------ |
| -50.4% | -585.914 KiB | 100.0% | 1.14 MiB → 577 KiB |       2 | `substring(int, int)` | `java.lang.String` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

| Change |        Delta |      % |                Size | Samples | Caller                     | Location                              |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | ------------------------------------- |
| -22.0% | -547.226 KiB | 100.0% | 2.43 MiB → 1.89 MiB |   7 → 5 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `newStringUTF8NoRepl(byte[], int, int, boolean)` (`java.lang.String`)

|  Change |        Delta |             % |          Size | Samples | Caller                                  | Location             |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------- | -------------------- |
| removed | -482.609 KiB | 100.0% → 0.0% | 483 KiB → 0 B |   1 → 0 | `newStringUTF8NoRepl(byte[], int, int)` | `java.lang.System$2` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |        Delta |             % |          Size | Samples | Caller                        | Location                                 |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------- | ---------------------------------------- |
| removed | -434.828 KiB | 100.0% → 0.0% | 435 KiB → 0 B |   2 → 0 | `putIfAbsent(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `getInputStream(ZipEntry)` (`java.util.zip.ZipFile`)

|  Change |        Delta |             % |          Size | Samples | Caller                     | Location                |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------- | ----------------------- |
| removed | -414.875 KiB | 100.0% → 0.0% | 415 KiB → 0 B |   1 → 0 | `getInputStream(ZipEntry)` | `java.util.jar.JarFile` |

##### `put(Object, Object)` (`java.util.WeakHashMap`)

|  Change |       Delta |             % |          Size | Samples | Caller        | Location                           |
| ------: | ----------: | ------------: | ------------: | ------: | ------------- | ---------------------------------- |
| removed | -398.82 KiB | 100.0% → 0.0% | 399 KiB → 0 B |   1 → 0 | `add(Object)` | `java.util.Collections$SetFromMap` |

##### `toArray()` (`java.util.stream.IntPipeline`)

|  Change |       Delta |             % |          Size | Samples | Caller          | Location                       |
| ------: | ----------: | ------------: | ------------: | ------: | --------------- | ------------------------------ |
| removed | -395.14 KiB | 100.0% → 0.0% | 395 KiB → 0 B |   1 → 0 | `parse(String)` | `org.renaissance.core.Version` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |       Delta |             % |          Size | Samples | Caller          | Location                                     |
| ------: | ----------: | ------------: | ------------: | ------: | --------------- | -------------------------------------------- |
| removed | -394.39 KiB | 100.0% → 0.0% | 394 KiB → 0 B |   1 → 0 | `toByteArray()` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |        Delta |      % |              Size | Samples | Caller                          | Location           |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------------------- | ------------------ |
| -49.2% | -389.742 KiB | 100.0% | 793 KiB → 403 KiB |   2 → 1 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `initClassName()` (`java.lang.Class`)

|  Change |        Delta |             % |          Size | Samples | Caller      | Location          |
| ------: | -----------: | ------------: | ------------: | ------: | ----------- | ----------------- |
| removed | -265.476 KiB | 100.0% → 0.0% | 265 KiB → 0 B |   1 → 0 | `getName()` | `java.lang.Class` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |        Delta |             % |          Size | Samples | Caller                                                            | Location                                      |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------------------------- | --------------------------------------------- |
| removed | -535.359 KiB | 100.0% → 0.0% | 535 KiB → 0 B |   1 → 0 | `addConstantNameAndType(String, String)`                          | `jdk.internal.org.objectweb.asm.SymbolTable`  |
|     new | +388.687 KiB | 0.0% → 100.0% | 0 B → 389 KiB |   0 → 1 | `<init>(SymbolTable, int, String, String, String, String[], int)` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `transferTo(OutputStream)` (`java.io.InputStream`)

| Change |       Delta |      % |              Size | Samples | Caller                                  | Location              |
| -----: | ----------: | -----: | ----------------: | ------: | --------------------------------------- | --------------------- |
|  -3.8% | -15.421 KiB | 100.0% | 408 KiB → 392 KiB |       1 | `copy(InputStream, Path, CopyOption[])` | `java.nio.file.Files` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|   Change |        Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                                                                                                      |
| -------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|    +8.7% |   +1.468 GiB | 44.7% → 48.8% | 16.9 GiB → 18.4 GiB |     851 → 888 | `grow(int)`                                                                                                            | `java.util.ArrayList`                                                                                                                         |
|    +5.3% |   +1.192 GiB | 60.1% → 63.5% | 22.7 GiB → 23.9 GiB | 1,102 → 1,208 | `addAll(Collection)`                                                                                                   | `java.util.ArrayList`                                                                                                                         |
|  +710.5% | +839.242 MiB |   0.3% → 2.5% |   118 MiB → 957 MiB |        5 → 22 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|  +148.8% | +238.042 MiB |   0.4% → 1.0% |   160 MiB → 398 MiB |       12 → 13 | `computeIfAbsent(Object, Function)`                                                                                    | `java.util.HashMap`                                                                                                                           |
| +1140.5% | +237.893 MiB |   0.1% → 0.7% |  20.9 MiB → 259 MiB |         5 → 7 | `resize()`                                                                                                             | `java.util.HashMap`                                                                                                                           |
|    +0.6% |  +213.08 MiB | 94.4% → 95.3% | 35.7 GiB → 35.9 GiB | 1,699 → 1,852 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`                                                                                                 |
|    +2.4% |  +186.81 MiB | 19.8% → 20.4% |  7.5 GiB → 7.68 GiB |     209 → 211 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|    +2.4% |  +186.81 MiB | 19.8% → 20.4% |  7.5 GiB → 7.68 GiB |     209 → 211 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011fdf70` |
|    +2.4% |  +186.81 MiB | 19.8% → 20.4% |  7.5 GiB → 7.68 GiB |     209 → 211 | `exec()`                                                                                                               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                                                                                           |
|    +0.4% |  +133.33 MiB | 93.1% → 93.8% | 35.2 GiB → 35.3 GiB | 1,676 → 1,831 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                                                                                           |
|    +0.4% |  +133.33 MiB | 93.1% → 93.8% | 35.2 GiB → 35.3 GiB | 1,676 → 1,831 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                                                                                                   |
|  +442.4% | +122.447 MiB |   0.1% → 0.4% |  27.7 MiB → 150 MiB |         2 → 3 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
|  +442.4% | +122.447 MiB |   0.1% → 0.4% |  27.7 MiB → 150 MiB |         2 → 3 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
| +1064.6% |  +91.868 MiB |  <0.1% → 0.3% |  8.63 MiB → 100 MiB |             6 | `putVal(int, Object, Object, boolean, boolean)`                                                                        | `java.util.HashMap`                                                                                                                           |
|  +415.0% |  +89.567 MiB |   0.1% → 0.3% |  21.6 MiB → 111 MiB |         6 → 5 | `putMapEntries(Map, boolean)`                                                                                          | `java.util.HashMap`                                                                                                                           |
|  +415.0% |  +89.567 MiB |   0.1% → 0.3% |  21.6 MiB → 111 MiB |         6 → 5 | `<init>(Map)`                                                                                                          | `java.util.HashMap`                                                                                                                           |
|      new |  +74.547 MiB |   0.0% → 0.2% |      0 B → 74.5 MiB |       0 → 127 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|  +197.3% |  +48.625 MiB |   0.1% → 0.2% | 24.6 MiB → 73.3 MiB |      68 → 123 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                     |
|  +186.9% |  +47.457 MiB |   0.1% → 0.2% | 25.4 MiB → 72.9 MiB |      69 → 122 | `copyInto(Sink, Spliterator)`                                                                                          | `java.util.stream.AbstractPipeline`                                                                                                           |
|  +186.9% |  +47.457 MiB |   0.1% → 0.2% | 25.4 MiB → 72.9 MiB |      69 → 122 | `wrapAndCopyInto(Sink, Spliterator)`                                                                                   | `java.util.stream.AbstractPipeline`                                                                                                           |

##### Standard library

|   Change |        Delta |             % |                Size |       Samples | Function                                             | Location                                            |
| -------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------- | --------------------------------------------------- |
|    +8.7% |   +1.468 GiB | 44.7% → 48.8% | 16.9 GiB → 18.4 GiB |     851 → 888 | `grow(int)`                                          | `java.util.ArrayList`                               |
|    +5.3% |   +1.192 GiB | 60.1% → 63.5% | 22.7 GiB → 23.9 GiB | 1,102 → 1,208 | `addAll(Collection)`                                 | `java.util.ArrayList`                               |
|  +148.8% | +238.042 MiB |   0.4% → 1.0% |   160 MiB → 398 MiB |       12 → 13 | `computeIfAbsent(Object, Function)`                  | `java.util.HashMap`                                 |
| +1140.5% | +237.893 MiB |   0.1% → 0.7% |  20.9 MiB → 259 MiB |         5 → 7 | `resize()`                                           | `java.util.HashMap`                                 |
|    +0.6% |  +213.08 MiB | 94.4% → 95.3% | 35.7 GiB → 35.9 GiB | 1,699 → 1,852 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|    +2.4% |  +186.81 MiB | 19.8% → 20.4% |  7.5 GiB → 7.68 GiB |     209 → 211 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|    +0.4% |  +133.33 MiB | 93.1% → 93.8% | 35.2 GiB → 35.3 GiB | 1,676 → 1,831 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                 |
|    +0.4% |  +133.33 MiB | 93.1% → 93.8% | 35.2 GiB → 35.3 GiB | 1,676 → 1,831 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`         |
| +1064.6% |  +91.868 MiB |  <0.1% → 0.3% |  8.63 MiB → 100 MiB |             6 | `putVal(int, Object, Object, boolean, boolean)`      | `java.util.HashMap`                                 |
|  +415.0% |  +89.567 MiB |   0.1% → 0.3% |  21.6 MiB → 111 MiB |         6 → 5 | `putMapEntries(Map, boolean)`                        | `java.util.HashMap`                                 |
|  +415.0% |  +89.567 MiB |   0.1% → 0.3% |  21.6 MiB → 111 MiB |         6 → 5 | `<init>(Map)`                                        | `java.util.HashMap`                                 |
|  +186.9% |  +47.457 MiB |   0.1% → 0.2% | 25.4 MiB → 72.9 MiB |      69 → 122 | `copyInto(Sink, Spliterator)`                        | `java.util.stream.AbstractPipeline`                 |
|  +186.9% |  +47.457 MiB |   0.1% → 0.2% | 25.4 MiB → 72.9 MiB |      69 → 122 | `wrapAndCopyInto(Sink, Spliterator)`                 | `java.util.stream.AbstractPipeline`                 |
|  +186.9% |  +47.457 MiB |   0.1% → 0.2% | 25.4 MiB → 72.9 MiB |      69 → 122 | `evaluateSequential(PipelineHelper, Spliterator)`    | `java.util.stream.ReduceOps$ReduceOp`               |
|  +186.9% |  +47.457 MiB |   0.1% → 0.2% | 25.4 MiB → 72.9 MiB |      69 → 122 | `evaluate(TerminalOp)`                               | `java.util.stream.AbstractPipeline`                 |
|  +186.9% |  +47.457 MiB |   0.1% → 0.2% | 25.4 MiB → 72.9 MiB |      69 → 122 | `collect(Collector)`                                 | `java.util.stream.ReferencePipeline`                |
|   +52.0% |  +45.244 MiB |   0.2% → 0.3% |    87 MiB → 132 MiB |            10 | `newNode(int, Object, Object, HashMap$Node)`         | `java.util.HashMap`                                 |
|  +163.1% |  +40.192 MiB |   0.1% → 0.2% | 24.6 MiB → 64.8 MiB |      68 → 101 | `accept(int)`                                        | `java.util.stream.IntPipeline$1$1`                  |
|  +163.1% |  +40.192 MiB |   0.1% → 0.2% | 24.6 MiB → 64.8 MiB |      68 → 101 | `forEachRemaining(IntConsumer)`                      | `java.util.stream.Streams$RangeIntSpliterator`      |
|  +163.1% |  +40.192 MiB |   0.1% → 0.2% | 24.6 MiB → 64.8 MiB |      68 → 101 | `forEachRemaining(Consumer)`                         | `java.util.Spliterator$OfInt`                       |

##### Ours

|  Change |        Delta |             % |                Size |   Samples | Function                                                                                                               | Location                                                                                                                                                                    |
| ------: | -----------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +710.5% | +839.242 MiB |   0.3% → 2.5% |   118 MiB → 957 MiB |    5 → 22 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|   +2.4% |  +186.81 MiB | 19.8% → 20.4% |  7.5 GiB → 7.68 GiB | 209 → 211 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                                                 |
|   +2.4% |  +186.81 MiB | 19.8% → 20.4% |  7.5 GiB → 7.68 GiB | 209 → 211 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011fdf70`                               |
| +442.4% | +122.447 MiB |   0.1% → 0.4% |  27.7 MiB → 150 MiB |     2 → 3 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |
| +442.4% | +122.447 MiB |   0.1% → 0.4% |  27.7 MiB → 150 MiB |     2 → 3 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                                                   |
|     new |  +74.547 MiB |   0.0% → 0.2% |      0 B → 74.5 MiB |   0 → 127 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                                                                                                 |
| +197.3% |  +48.625 MiB |   0.1% → 0.2% | 24.6 MiB → 73.3 MiB |  68 → 123 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                                                   |
|  +77.1% |  +46.773 MiB |   0.2% → 0.3% |  60.7 MiB → 107 MiB |     3 → 2 | `lambda$collectClusters$0(Double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|  +77.1% |  +46.773 MiB |   0.2% → 0.3% |  60.7 MiB → 107 MiB |     3 → 2 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011e4b38 → org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000090011fece0` |
| +163.1% |  +40.192 MiB |   0.1% → 0.2% | 24.6 MiB → 64.8 MiB |  68 → 101 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                                                 |
| +159.4% |  +39.276 MiB |   0.1% → 0.2% | 24.6 MiB → 63.9 MiB |  68 → 100 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                                                 |
| +159.4% |  +39.276 MiB |   0.1% → 0.2% | 24.6 MiB → 63.9 MiB |  68 → 100 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011818d8 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011fd4f0`                               |
| +153.9% |  +11.699 MiB |  <0.1% → 0.1% |  7.6 MiB → 19.3 MiB |   21 → 28 | `lambda$generateData$3(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                                                 |
| +153.9% |  +11.699 MiB |  <0.1% → 0.1% |  7.6 MiB → 19.3 MiB |   21 → 28 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001181b10 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011fd728`                               |
|   +1.3% |  +11.374 MiB |   2.3% → 2.4% |   905 MiB → 916 MiB |   56 → 54 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                                                  |
|     new |   +7.644 MiB |  0.0% → <0.1% |      0 B → 7.64 MiB |    0 → 20 | `rowToArray$1(Map)`                                                                                                    | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                                                   |
|     new |   +7.644 MiB |  0.0% → <0.1% |      0 B → 7.64 MiB |    0 → 20 | `setUpBeforeAll$$anonfun$1(Map)`                                                                                       | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                                                   |
|     new |   +7.644 MiB |  0.0% → <0.1% |      0 B → 7.64 MiB |    0 → 20 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x0000009001182908`                                                                                                        |
|     new |   +7.644 MiB |  0.0% → <0.1% |      0 B → 7.64 MiB |    0 → 20 | `lambda$toCsvRows$2(String[], Function, String)`                                                                       | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                                                                                                          |
|     new |   +7.644 MiB |  0.0% → <0.1% |      0 B → 7.64 MiB |    0 → 20 | `apply(Object)`                                                                                                        | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x000000900117b5c8`                                                                               |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |                Size |       Samples | Function                                                  | Location                                                                                                                                      |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| -15.4% |   -2.925 GiB | 50.2% → 42.6% |   19 GiB → 16.1 GiB |     852 → 917 | `toArray()`                                               | `java.util.ArrayList`                                                                                                                         |
|  -9.0% |   -2.326 GiB | 68.3% → 62.4% | 25.8 GiB → 23.5 GiB | 1,231 → 1,268 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                                                                                                           |
|  -9.0% |   -2.326 GiB | 68.3% → 62.4% | 25.8 GiB → 23.5 GiB | 1,231 → 1,268 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                                                                                                           |
|  -8.7% |   -2.235 GiB | 67.6% → 62.0% | 25.6 GiB → 23.3 GiB | 1,218 → 1,245 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`                                                                                                 |
| -20.9% |   -1.909 GiB | 24.2% → 19.2% | 9.16 GiB → 7.25 GiB |     372 → 409 | `<init>(Collection)`                                      | `java.util.ArrayList`                                                                                                                         |
|  -3.6% |   -1.264 GiB | 94.0% → 91.0% | 35.5 GiB → 34.3 GiB | 1,690 → 1,798 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                                                                                                            |
| -22.9% |   -1.164 GiB | 13.4% → 10.4% | 5.08 GiB → 3.92 GiB |     230 → 219 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                                                                                           |
| -18.4% | -757.708 MiB |  10.6% → 8.7% | 4.02 GiB → 3.28 GiB |     229 → 188 | `grow()`                                                  | `java.util.ArrayList`                                                                                                                         |
| -18.4% | -757.708 MiB |  10.6% → 8.7% | 4.02 GiB → 3.28 GiB |     229 → 188 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                                                                                                         |
| -18.4% | -757.708 MiB |  10.6% → 8.7% | 4.02 GiB → 3.28 GiB |     229 → 188 | `add(Object)`                                             | `java.util.ArrayList`                                                                                                                         |
|  -2.1% |  -705.61 MiB | 85.2% → 83.7% | 32.2 GiB → 31.5 GiB | 1,493 → 1,637 | `merge(Map, Map)`                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|  -2.1% |  -705.61 MiB | 85.2% → 83.7% | 32.2 GiB → 31.5 GiB | 1,493 → 1,637 | `combineResults(Map, Map)`                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|  -2.1% |  -705.61 MiB | 85.2% → 83.7% | 32.2 GiB → 31.5 GiB | 1,493 → 1,637 | `combineResults(Object, Object)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|  -2.0% | -663.612 MiB | 84.5% → 83.1% |   32 GiB → 31.3 GiB | 1,479 → 1,625 | `lambda$merge$6(List, List)`                              | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|  -2.0% | -663.612 MiB | 84.5% → 83.1% |   32 GiB → 31.3 GiB | 1,479 → 1,625 | `apply(Object, Object)`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011ff3c8` |
|  -2.0% | -663.612 MiB | 84.5% → 83.1% |   32 GiB → 31.3 GiB | 1,479 → 1,625 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                                                                                                           |
|  -2.0% | -663.612 MiB | 84.5% → 83.1% |   32 GiB → 31.3 GiB | 1,479 → 1,625 | `lambda$merge$7(Map, Object, List)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|  -2.0% | -663.612 MiB | 84.5% → 83.1% |   32 GiB → 31.3 GiB | 1,479 → 1,625 | `accept(Object, Object)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011ff180` |
|  -2.0% | -663.612 MiB | 84.5% → 83.1% |   32 GiB → 31.3 GiB | 1,479 → 1,625 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                                                                                                           |
|  -8.9% | -380.535 MiB | 11.1% → 10.1% | 4.18 GiB → 3.81 GiB |     247 → 207 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |

##### Standard library

| Change |        Delta |             % |                Size |       Samples | Function                                                  | Location                                       |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | ---------------------------------------------- |
| -15.4% |   -2.925 GiB | 50.2% → 42.6% |   19 GiB → 16.1 GiB |     852 → 917 | `toArray()`                                               | `java.util.ArrayList`                          |
|  -9.0% |   -2.326 GiB | 68.3% → 62.4% | 25.8 GiB → 23.5 GiB | 1,231 → 1,268 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`            |
|  -9.0% |   -2.326 GiB | 68.3% → 62.4% | 25.8 GiB → 23.5 GiB | 1,231 → 1,268 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`            |
|  -8.7% |   -2.235 GiB | 67.6% → 62.0% | 25.6 GiB → 23.3 GiB | 1,218 → 1,245 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`  |
| -20.9% |   -1.909 GiB | 24.2% → 19.2% | 9.16 GiB → 7.25 GiB |     372 → 409 | `<init>(Collection)`                                      | `java.util.ArrayList`                          |
|  -3.6% |   -1.264 GiB | 94.0% → 91.0% | 35.5 GiB → 34.3 GiB | 1,690 → 1,798 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                             |
| -22.9% |   -1.164 GiB | 13.4% → 10.4% | 5.08 GiB → 3.92 GiB |     230 → 219 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`            |
| -18.4% | -757.708 MiB |  10.6% → 8.7% | 4.02 GiB → 3.28 GiB |     229 → 188 | `grow()`                                                  | `java.util.ArrayList`                          |
| -18.4% | -757.708 MiB |  10.6% → 8.7% | 4.02 GiB → 3.28 GiB |     229 → 188 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                          |
| -18.4% | -757.708 MiB |  10.6% → 8.7% | 4.02 GiB → 3.28 GiB |     229 → 188 | `add(Object)`                                             | `java.util.ArrayList`                          |
|  -2.0% | -663.612 MiB | 84.5% → 83.1% |   32 GiB → 31.3 GiB | 1,479 → 1,625 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                            |
|  -2.0% | -663.612 MiB | 84.5% → 83.1% |   32 GiB → 31.3 GiB | 1,479 → 1,625 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                            |
|  -0.6% | -238.876 MiB | 99.4% → 99.2% | 37.6 GiB → 37.4 GiB | 1,809 → 1,932 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`           |
| -99.2% | -158.253 MiB |  0.4% → <0.1% |  160 MiB → 1.29 MiB |         3 → 4 | `read(InputStream, String)`                               | `java.util.jar.Manifest`                       |
| -99.2% | -158.253 MiB |  0.4% → <0.1% |  160 MiB → 1.29 MiB |         3 → 4 | `<init>(JarVerifier, InputStream, String)`                | `java.util.jar.Manifest`                       |
| -99.2% | -158.253 MiB |  0.4% → <0.1% |  160 MiB → 1.29 MiB |         3 → 4 | `<init>(InputStream, String)`                             | `java.util.jar.Manifest`                       |
| -98.9% | -157.864 MiB |  0.4% → <0.1% |  160 MiB → 1.68 MiB |         3 → 5 | `getManifestFromReference()`                              | `java.util.jar.JarFile`                        |
| -98.9% | -157.864 MiB |  0.4% → <0.1% |  160 MiB → 1.68 MiB |         3 → 5 | `getManifest()`                                           | `java.util.jar.JarFile`                        |
| -98.9% | -157.864 MiB |  0.4% → <0.1% |  160 MiB → 1.68 MiB |         3 → 5 | `getManifest()`                                           | `jdk.internal.loader.URLClassPath$JarLoader$2` |
| -87.5% | -155.653 MiB |   0.5% → 0.1% |  178 MiB → 22.3 MiB |       38 → 57 | `defineClass(String, Resource)`                           | `java.net.URLClassLoader`                      |

##### Ours

|  Change |        Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                                                                                                      |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|   -2.1% |  -705.61 MiB | 85.2% → 83.7% | 32.2 GiB → 31.5 GiB | 1,493 → 1,637 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   -2.1% |  -705.61 MiB | 85.2% → 83.7% | 32.2 GiB → 31.5 GiB | 1,493 → 1,637 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   -2.1% |  -705.61 MiB | 85.2% → 83.7% | 32.2 GiB → 31.5 GiB | 1,493 → 1,637 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   -2.0% | -663.612 MiB | 84.5% → 83.1% |   32 GiB → 31.3 GiB | 1,479 → 1,625 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   -2.0% | -663.612 MiB | 84.5% → 83.1% |   32 GiB → 31.3 GiB | 1,479 → 1,625 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011ff3c8` |
|   -2.0% | -663.612 MiB | 84.5% → 83.1% |   32 GiB → 31.3 GiB | 1,479 → 1,625 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|   -2.0% | -663.612 MiB | 84.5% → 83.1% |   32 GiB → 31.3 GiB | 1,479 → 1,625 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011ff180` |
|   -8.9% | -380.535 MiB | 11.1% → 10.1% | 4.18 GiB → 3.81 GiB |     247 → 207 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   -7.1% | -369.161 MiB | 13.4% → 12.5% | 5.07 GiB → 4.71 GiB |     303 → 261 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|   -0.6% | -238.876 MiB | 99.4% → 99.2% | 37.6 GiB → 37.4 GiB | 1,809 → 1,932 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                                                                        |
| removed | -190.313 MiB |   0.5% → 0.0% |       190 MiB → 0 B |        75 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
| removed | -165.275 MiB |   0.4% → 0.0% |       165 MiB → 0 B |         6 → 0 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                     |
| removed | -165.275 MiB |   0.4% → 0.0% |       165 MiB → 0 B |         6 → 0 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                                                                                                     |
|  -85.2% | -124.599 MiB |   0.4% → 0.1% |  146 MiB → 21.7 MiB |         4 → 5 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                                                                     |
|  -61.6% | -117.025 MiB |   0.5% → 0.2% |  190 MiB → 72.9 MiB |      74 → 122 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                                                                                                     |
|  -56.7% | -116.052 MiB |   0.5% → 0.2% |  205 MiB → 88.6 MiB |     112 → 162 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|  -60.8% | -115.766 MiB |   0.5% → 0.2% |  190 MiB → 74.5 MiB |      75 → 127 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001178798 → org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000900117c3b8` |
|  -60.8% | -115.766 MiB |   0.5% → 0.2% |  190 MiB → 74.5 MiB |      75 → 127 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|  -55.5% | -115.611 MiB |   0.5% → 0.2% |  208 MiB → 92.9 MiB |     121 → 173 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                                                                                               |
|  -55.5% | -115.611 MiB |   0.5% → 0.2% |  208 MiB → 92.9 MiB |     121 → 173 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                                                                                               |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `grow(int)` (`java.util.ArrayList`)

| Change |     Delta |             % |                Size |   Samples | Callee                  | Location           |
| -----: | --------: | ------------: | ------------------: | --------: | ----------------------- | ------------------ |
| +10.0% | +1.66 GiB | 97.9% → 99.1% | 16.6 GiB → 18.2 GiB | 838 → 881 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change |      Delta |             % |                Size |   Samples | Callee      | Location              |
| -----: | ---------: | ------------: | ------------------: | --------: | ----------- | --------------------- |
| +17.1% | +2.208 GiB | 56.8% → 63.2% | 12.9 GiB → 15.1 GiB | 622 → 700 | `grow(int)` | `java.util.ArrayList` |
| -10.3% | -1.016 GiB | 43.2% → 36.8% | 9.82 GiB → 8.81 GiB | 480 → 508 | `toArray()` | `java.util.ArrayList` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|   Change |        Delta |             % |                Size | Samples | Callee                                       | Location                                                                                                                                                                    |
| -------: | -----------: | ------------: | ------------------: | ------: | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +1499.1% | +242.086 MiB | 10.1% → 64.9% |  16.1 MiB → 258 MiB |   4 → 5 | `resize()`                                   | `java.util.HashMap`                                                                                                                                                         |
|   -61.1% |  -50.818 MiB |  52.0% → 8.1% | 83.1 MiB → 32.3 MiB |   5 → 6 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                                                                                                                                         |
|   +77.1% |  +46.773 MiB | 37.9% → 27.0% |  60.7 MiB → 107 MiB |   3 → 2 | `apply(Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011e4b38 → org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000090011fece0` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |       Delta |      % |                Size |       Samples | Callee     | Location                            |
| -----: | ----------: | -----: | ------------------: | ------------: | ---------- | ----------------------------------- |
|  +0.6% | +213.08 MiB | 100.0% | 35.7 GiB → 35.9 GiB | 1,699 → 1,852 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |              % |               Size |   Samples | Callee     | Location                            |
| -----: | ----------: | -------------: | -----------------: | --------: | ---------- | ----------------------------------- |
|  -0.3% | -19.818 MiB | 100.0% → 97.4% | 7.5 GiB → 7.48 GiB | 209 → 210 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011fdf70`)

| Change |       Delta |      % |               Size |   Samples | Callee                         | Location                                    |
| -----: | ----------: | -----: | -----------------: | --------: | ------------------------------ | ------------------------------------------- |
|  +2.4% | +186.81 MiB | 100.0% | 7.5 GiB → 7.68 GiB | 209 → 211 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |       Delta |      % |               Size |   Samples | Callee   | Location                                                                                                                                      |
| -----: | ----------: | -----: | -----------------: | --------: | -------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|  +2.4% | +186.81 MiB | 100.0% | 7.5 GiB → 7.68 GiB | 209 → 211 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011fdf70` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |       Delta |      % |                Size |       Samples | Callee                                   | Location                            |
| -----: | ----------: | -----: | ------------------: | ------------: | ---------------------------------------- | ----------------------------------- |
|  +0.4% | +133.33 MiB | 100.0% | 35.2 GiB → 35.3 GiB | 1,676 → 1,831 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |       Delta |      % |                Size |       Samples | Callee                              | Location                            |
| -----: | ----------: | -----: | ------------------: | ------------: | ----------------------------------- | ----------------------------------- |
|  +0.4% | +133.33 MiB | 100.0% | 35.2 GiB → 35.3 GiB | 1,676 → 1,831 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |        Delta |      % |               Size | Samples | Callee              | Location                                                  |
| ------: | -----------: | -----: | -----------------: | ------: | ------------------- | --------------------------------------------------------- |
| +442.4% | +122.447 MiB | 100.0% | 27.7 MiB → 150 MiB |   2 → 3 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| +442.4% | +122.447 MiB | 100.0% | 27.7 MiB → 150 MiB |   2 → 3 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|   Change |       Delta |             % |               Size | Samples | Callee                                       | Location            |
| -------: | ----------: | ------------: | -----------------: | ------: | -------------------------------------------- | ------------------- |
| +2450.1% | +96.062 MiB | 45.4% → 99.5% | 3.92 MiB → 100 MiB |   5 → 4 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap` |
|   -89.1% |  -4.193 MiB |  54.6% → 0.5% | 4.71 MiB → 528 KiB |   1 → 2 | `resize()`                                   | `java.util.HashMap` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

|   Change |       Delta |             % |                Size | Samples | Callee                                          | Location                     |
| -------: | ----------: | ------------: | ------------------: | ------: | ----------------------------------------------- | ---------------------------- |
| +1225.8% | +92.441 MiB | 34.9% → 90.0% |  7.54 MiB → 100 MiB |   3 → 4 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`          |
|  removed |  -6.927 MiB |  32.1% → 0.0% |      6.93 MiB → 0 B |   1 → 0 | `entrySet()`                                    | `java.util.HashMap`          |
|   +57.0% |  +4.053 MiB | 33.0% → 10.0% | 7.11 MiB → 11.2 MiB |   2 → 1 | `iterator()`                                    | `java.util.HashMap$EntrySet` |

##### `<init>(Map)` (`java.util.HashMap`)

|  Change |       Delta |      % |               Size | Samples | Callee                        | Location            |
| ------: | ----------: | -----: | -----------------: | ------: | ----------------------------- | ------------------- |
| +415.0% | +89.567 MiB | 100.0% | 21.6 MiB → 111 MiB |   6 → 5 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |       Delta |            % |           Size | Samples | Callee                                                                                       | Location                                  |
| -----: | ----------: | -----------: | -------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new | +72.461 MiB | 0.0% → 97.2% | 0 B → 72.5 MiB | 0 → 121 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |  +2.086 MiB |  0.0% → 2.8% | 0 B → 2.09 MiB |   0 → 6 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |        Delta |              % |                Size |  Samples | Callee                        | Location                                                           |
| ------: | -----------: | -------------: | ------------------: | -------: | ----------------------------- | ------------------------------------------------------------------ |
| +163.1% |  +40.192 MiB | 100.0% → 88.5% | 24.6 MiB → 64.8 MiB | 68 → 101 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |
|     new |   +7.644 MiB |   0.0% → 10.4% |      0 B → 7.64 MiB |   0 → 20 | `toCsvRows(Function)`         | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
|     new | +420.523 KiB |    0.0% → 0.6% |       0 B → 421 KiB |    0 → 1 | `asScala()`                   | `scala.collection.convert.AsScalaExtensions$ListHasAsScala`        |
|     new |  +387.71 KiB |    0.0% → 0.5% |       0 B → 388 KiB |    0 → 1 | `toInteger()`                 | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|  Change |        Delta |             % |                Size |  Samples | Callee                       | Location                                  |
| ------: | -----------: | ------------: | ------------------: | -------: | ---------------------------- | ----------------------------------------- |
| +163.1% |  +40.192 MiB | 97.0% → 89.0% | 24.6 MiB → 64.8 MiB | 68 → 101 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt`             |
|     new |   +7.644 MiB |  0.0% → 10.5% |      0 B → 7.64 MiB |   0 → 20 | `forEachRemaining(Consumer)` | `java.util.Spliterators$ArraySpliterator` |
| removed | -775.539 KiB |   3.0% → 0.0% |       776 KiB → 0 B |    1 → 0 | `forEachRemaining(Consumer)` | `java.util.HashMap$EntrySpliterator`      |
|     new | +387.679 KiB |   0.0% → 0.5% |       0 B → 388 KiB |    0 → 1 | `forEachRemaining(Consumer)` | `java.util.HashMap$KeySpliterator`        |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|  Change |       Delta |           % |                Size |  Samples | Callee                        | Location                            |
| ------: | ----------: | ----------: | ------------------: | -------: | ----------------------------- | ----------------------------------- |
| +186.9% | +47.457 MiB |      100.0% | 25.4 MiB → 72.9 MiB | 69 → 122 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |
| +297.4% |  +5.107 MiB | 6.8% → 9.4% | 1.72 MiB → 6.83 MiB |   5 → 12 | `wrapSink(Sink)`              | `java.util.stream.AbstractPipeline` |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

|  Change |       Delta |      % |                Size |  Samples | Callee                               | Location                            |
| ------: | ----------: | -----: | ------------------: | -------: | ------------------------------------ | ----------------------------------- |
| +186.9% | +47.457 MiB | 100.0% | 25.4 MiB → 72.9 MiB | 69 → 122 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

|  Change |       Delta |      % |                Size |  Samples | Callee                                            | Location                              |
| ------: | ----------: | -----: | ------------------: | -------: | ------------------------------------------------- | ------------------------------------- |
| +186.9% | +47.457 MiB | 100.0% | 25.4 MiB → 72.9 MiB | 69 → 122 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

|  Change |       Delta |      % |                Size |  Samples | Callee                 | Location                            |
| ------: | ----------: | -----: | ------------------: | -------: | ---------------------- | ----------------------------------- |
| +186.9% | +47.457 MiB | 100.0% | 25.4 MiB → 72.9 MiB | 69 → 122 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

|  Change |        Delta |              % |                Size |  Samples | Callee           | Location                                                                                                                                      |
| ------: | -----------: | -------------: | ------------------: | -------: | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| +159.4% |  +39.276 MiB | 100.0% → 98.6% | 24.6 MiB → 63.9 MiB | 68 → 100 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011818d8 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011fd4f0` |
| +153.9% |  +11.699 MiB |  30.8% → 29.8% |  7.6 MiB → 19.3 MiB |  21 → 28 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001181b10 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011fd728` |
|     new | +937.898 KiB |    0.0% → 1.4% |       0 B → 938 KiB |    0 → 1 | `accept(Object)` | `java.util.stream.ReduceOps$3ReducingSink`                                                                                                    |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

|  Change |       Delta |      % |                Size |  Samples | Callee        | Location                           |
| ------: | ----------: | -----: | ------------------: | -------: | ------------- | ---------------------------------- |
| +163.1% | +40.192 MiB | 100.0% | 24.6 MiB → 64.8 MiB | 68 → 101 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

|  Change |       Delta |      % |                Size |  Samples | Callee                          | Location                                       |
| ------: | ----------: | -----: | ------------------: | -------: | ------------------------------- | ---------------------------------------------- |
| +163.1% | +40.192 MiB | 100.0% | 24.6 MiB → 64.8 MiB | 68 → 101 | `forEachRemaining(IntConsumer)` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000090011fece0`)

| Change |       Delta |      % |               Size | Samples | Callee                               | Location                                                   |
| -----: | ----------: | -----: | -----------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
| +77.1% | +46.773 MiB | 100.0% | 60.7 MiB → 107 MiB |   3 → 2 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |       Delta |      % |                Size |  Samples | Callee               | Location                             |
| ------: | ----------: | -----: | ------------------: | -------: | -------------------- | ------------------------------------ |
| +163.1% | +40.192 MiB | 100.0% | 24.6 MiB → 64.8 MiB | 68 → 101 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |       Delta |             % |                Size | Samples | Callee                                         | Location                                                                                                |
| ------: | ----------: | ------------: | ------------------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| +161.2% | +23.248 MiB | 58.5% → 58.9% | 14.4 MiB → 37.7 MiB | 40 → 56 | `toArray(IntFunction)`                         | `java.util.stream.ReferencePipeline`                                                                    |
| +211.2% |  +9.255 MiB | 17.8% → 21.3% | 4.38 MiB → 13.6 MiB | 12 → 21 | `range(int, int)`                              | `java.util.stream.IntStream`                                                                            |
| +130.8% |  +3.961 MiB | 12.3% → 10.9% | 3.03 MiB → 6.99 MiB |  8 → 13 | `mapToObj(IntFunction)`                        | `java.util.stream.IntPipeline`                                                                          |
| +100.2% |   +2.81 MiB |  11.4% → 8.8% | 2.81 MiB → 5.62 MiB |  8 → 10 | `linkToTargetMethod(int, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001182c00 → java.lang.invoke.LambdaForm$MH.0x0000009001200800` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011fd4f0`)

|  Change |       Delta |      % |                Size |  Samples | Callee                                           | Location                                    |
| ------: | ----------: | -----: | ------------------: | -------: | ------------------------------------------------ | ------------------------------------------- |
| +159.4% | +39.276 MiB | 100.0% | 24.6 MiB → 63.9 MiB | 68 → 100 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |       Delta |      % |               Size | Samples | Callee            | Location           |
| ------: | ----------: | -----: | -----------------: | ------: | ----------------- | ------------------ |
| +153.9% | +11.699 MiB | 100.0% | 7.6 MiB → 19.3 MiB | 21 → 28 | `valueOf(double)` | `java.lang.Double` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011fd728`)

|  Change |       Delta |      % |               Size | Samples | Callee                                           | Location                                    |
| ------: | ----------: | -----: | -----------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +153.9% | +11.699 MiB | 100.0% | 7.6 MiB → 19.3 MiB | 21 → 28 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |        Delta |            % |           Size | Samples | Callee              | Location                            |
| -----: | -----------: | -----------: | -------------: | ------: | ------------------- | ----------------------------------- |
|    new |   +4.871 MiB | 0.0% → 63.7% | 0 B → 4.87 MiB |  0 → 13 | `<clinit>()`        | `scala.Predef$`                     |
|    new |   +1.182 MiB | 0.0% → 15.5% | 0 B → 1.18 MiB |   0 → 3 | `map(Function1)`    | `scala.collection.immutable.Range`  |
|    new | +827.617 KiB | 0.0% → 10.6% |  0 B → 828 KiB |   0 → 2 | `loadClass(String)` | `java.lang.ClassLoader`             |
|    new | +800.359 KiB | 0.0% → 10.2% |  0 B → 800 KiB |   0 → 2 | `toArray(ClassTag)` | `scala.collection.AbstractIterable` |

##### `setUpBeforeAll$$anonfun$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |      Delta |             % |           Size | Samples | Callee              | Location                                  |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------- | ----------------------------------------- |
|    new | +7.644 MiB | 0.0% → 100.0% | 0 B → 7.64 MiB |  0 → 20 | `rowToArray$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x0000009001182908`)

| Change |      Delta |             % |           Size | Samples | Callee                           | Location                                  |
| -----: | ---------: | ------------: | -------------: | ------: | -------------------------------- | ----------------------------------------- |
|    new | +7.644 MiB | 0.0% → 100.0% | 0 B → 7.64 MiB |  0 → 20 | `setUpBeforeAll$$anonfun$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `lambda$toCsvRows$2(String[], Function, String)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change |      Delta |             % |           Size | Samples | Callee          | Location                                                             |
| -----: | ---------: | ------------: | -------------: | ------: | --------------- | -------------------------------------------------------------------- |
|    new | +7.644 MiB | 0.0% → 100.0% | 0 B → 7.64 MiB |  0 → 20 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x0000009001182908` |

##### `apply(Object)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x000000900117b5c8`)

| Change |      Delta |             % |           Size | Samples | Callee                                           | Location                                                           |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------ |
|    new | +7.644 MiB | 0.0% → 100.0% | 0 B → 7.64 MiB |  0 → 20 | `lambda$toCsvRows$2(String[], Function, String)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `toArray()` (`java.util.ArrayList`)

| Change |      Delta |      % |              Size |   Samples | Callee                  | Location           |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------- | ------------------ |
| -15.4% | -2.925 GiB | 100.0% | 19 GiB → 16.1 GiB | 852 → 917 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |      Delta |             % |                Size |       Samples | Callee                                                    | Location                                      |
| -----: | ---------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  -8.7% | -2.235 GiB | 99.0% → 99.3% | 25.6 GiB → 23.3 GiB | 1,218 → 1,245 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -23.2% | -1.179 GiB | 19.7% → 16.6% |  5.08 GiB → 3.9 GiB |     230 → 218 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |      Delta |      % |                Size |       Samples | Callee                 | Location                            |
| -----: | ---------: | -----: | ------------------: | ------------: | ---------------------- | ----------------------------------- |
|  -9.0% | -2.326 GiB | 100.0% | 25.8 GiB → 23.5 GiB | 1,231 → 1,268 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |      Delta |      % |                Size |       Samples | Callee     | Location                            |
| -----: | ---------: | -----: | ------------------: | ------------: | ---------- | ----------------------------------- |
|  -8.7% | -2.235 GiB | 100.0% | 25.6 GiB → 23.3 GiB | 1,218 → 1,245 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change |      Delta |      % |                Size |   Samples | Callee      | Location              |
| -----: | ---------: | -----: | ------------------: | --------: | ----------- | --------------------- |
| -20.9% | -1.909 GiB | 100.0% | 9.16 GiB → 7.25 GiB | 372 → 409 | `toArray()` | `java.util.ArrayList` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change |       Delta |            % |           Size | Samples | Callee                         | Location           |
| ------: | ----------: | -----------: | -------------: | ------: | ------------------------------ | ------------------ |
| removed | -12.665 MiB | <0.1% → 0.0% | 12.7 MiB → 0 B |  19 → 0 | `copyOf(Object[], int, Class)` | `java.util.Arrays` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |      Delta |      % |                Size |   Samples | Callee     | Location                            |
| -----: | ---------: | -----: | ------------------: | --------: | ---------- | ----------------------------------- |
| -22.9% | -1.164 GiB | 100.0% | 5.08 GiB → 3.92 GiB | 230 → 219 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `grow()` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee      | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | ----------- | --------------------- |
| -18.4% | -757.708 MiB | 100.0% | 4.02 GiB → 3.28 GiB | 229 → 188 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee   | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | -------- | --------------------- |
| -18.4% | -757.708 MiB | 100.0% | 4.02 GiB → 3.28 GiB | 229 → 188 | `grow()` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee                       | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | ---------------------------- | --------------------- |
| -18.4% | -757.708 MiB | 100.0% | 4.02 GiB → 3.28 GiB | 229 → 188 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |        Delta |             % |               Size |       Samples | Callee                | Location            |
| ------: | -----------: | ------------: | -----------------: | ------------: | --------------------- | ------------------- |
|   -2.0% | -663.612 MiB | 99.2% → 99.3% |  32 GiB → 31.3 GiB | 1,479 → 1,625 | `forEach(BiConsumer)` | `java.util.HashMap` |
| +415.0% |  +89.567 MiB |   0.1% → 0.3% | 21.6 MiB → 111 MiB |         6 → 5 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |       Samples | Callee            | Location                                    |
| -----: | ----------: | -----: | ------------------: | ------------: | ----------------- | ------------------------------------------- |
|  -2.1% | -705.61 MiB | 100.0% | 32.2 GiB → 31.5 GiB | 1,493 → 1,637 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |       Samples | Callee                     | Location                                                   |
| -----: | ----------: | -----: | ------------------: | ------------: | -------------------------- | ---------------------------------------------------------- |
|  -2.1% | -705.61 MiB | 100.0% | 32.2 GiB → 31.5 GiB | 1,493 → 1,637 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |             % |                Size |       Samples | Callee               | Location              |
| -----: | ---------: | ------------: | ------------------: | ------------: | -------------------- | --------------------- |
| -20.9% | -1.909 GiB | 28.6% → 23.1% | 9.16 GiB → 7.25 GiB |     372 → 409 | `<init>(Collection)` | `java.util.ArrayList` |
|  +5.3% | +1.192 GiB | 71.0% → 76.3% | 22.7 GiB → 23.9 GiB | 1,102 → 1,208 | `addAll(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011ff3c8`)

| Change |        Delta |      % |              Size |       Samples | Callee                       | Location                                    |
| -----: | -----------: | -----: | ----------------: | ------------: | ---------------------------- | ------------------------------------------- |
|  -2.0% | -663.612 MiB | 100.0% | 32 GiB → 31.3 GiB | 1,479 → 1,625 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change |        Delta |      % |              Size |       Samples | Callee                  | Location                                                                                                                                      |
| -----: | -----------: | -----: | ----------------: | ------------: | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|  -2.0% | -663.612 MiB | 100.0% | 32 GiB → 31.3 GiB | 1,479 → 1,625 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011ff3c8` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |              Size |       Samples | Callee                              | Location            |
| -----: | -----------: | -----: | ----------------: | ------------: | ----------------------------------- | ------------------- |
|  -2.0% | -663.612 MiB | 100.0% | 32 GiB → 31.3 GiB | 1,479 → 1,625 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011ff180`)

| Change |        Delta |      % |              Size |       Samples | Callee                              | Location                                    |
| -----: | -----------: | -----: | ----------------: | ------------: | ----------------------------------- | ------------------------------------------- |
|  -2.0% | -663.612 MiB | 100.0% | 32 GiB → 31.3 GiB | 1,479 → 1,625 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change |        Delta |      % |              Size |       Samples | Callee                   | Location                                                                                                                                      |
| -----: | -----------: | -----: | ----------------: | ------------: | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
|  -2.0% | -663.612 MiB | 100.0% | 32 GiB → 31.3 GiB | 1,479 → 1,625 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011ff180` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |        Delta |             % |                Size |   Samples | Callee                              | Location              |
| ------: | -----------: | ------------: | ------------------: | --------: | ----------------------------------- | --------------------- |
|  -18.4% | -758.624 MiB | 96.1% → 86.0% | 4.02 GiB → 3.28 GiB | 229 → 187 | `add(Object)`                       | `java.util.ArrayList` |
| +148.8% | +238.042 MiB |  3.7% → 10.2% |   160 MiB → 398 MiB |   12 → 13 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |        Delta |      % |                Size |       Samples | Callee      | Location                                               |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------- | ------------------------------------------------------ |
|  -0.6% | -238.876 MiB | 100.0% | 37.6 GiB → 37.4 GiB | 1,809 → 1,932 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

| Change |        Delta |            % |              Size | Samples | Callee                                                | Location                   |
| -----: | -----------: | -----------: | ----------------: | ------: | ----------------------------------------------------- | -------------------------- |
|    new | +795.375 KiB | 0.0% → 60.1% |     0 B → 795 KiB |   0 → 2 | `read(Manifest$FastInputStream, byte[], String, int)` | `java.util.jar.Attributes` |
| -85.0% | -792.921 KiB | 0.6% → 10.6% | 933 KiB → 140 KiB |   2 → 1 | `put(Object, Object)`                                 | `java.util.HashMap`        |
|    new | +387.734 KiB | 0.0% → 29.3% |     0 B → 388 KiB |   0 → 1 | `parseName(byte[], int)`                              | `java.util.jar.Manifest`   |

##### `<init>(JarVerifier, InputStream, String)` (`java.util.jar.Manifest`)

| Change |        Delta |      % |               Size | Samples | Callee                      | Location                 |
| -----: | -----------: | -----: | -----------------: | ------: | --------------------------- | ------------------------ |
| -99.2% | -158.253 MiB | 100.0% | 160 MiB → 1.29 MiB |   3 → 4 | `read(InputStream, String)` | `java.util.jar.Manifest` |

##### `<init>(InputStream, String)` (`java.util.jar.Manifest`)

| Change |        Delta |      % |               Size | Samples | Callee                                     | Location                 |
| -----: | -----------: | -----: | -----------------: | ------: | ------------------------------------------ | ------------------------ |
| -99.2% | -158.253 MiB | 100.0% | 160 MiB → 1.29 MiB |   3 → 4 | `<init>(JarVerifier, InputStream, String)` | `java.util.jar.Manifest` |

##### `getManifestFromReference()` (`java.util.jar.JarFile`)

| Change |        Delta |              % |               Size | Samples | Callee                        | Location                 |
| -----: | -----------: | -------------: | -----------------: | ------: | ----------------------------- | ------------------------ |
| -99.2% | -158.253 MiB | 100.0% → 76.9% | 160 MiB → 1.29 MiB |   3 → 4 | `<init>(InputStream, String)` | `java.util.jar.Manifest` |
|    new | +398.492 KiB |   0.0% → 23.1% |      0 B → 398 KiB |   0 → 1 | `getInputStream(ZipEntry)`    | `java.util.zip.ZipFile`  |

##### `getManifest()` (`java.util.jar.JarFile`)

| Change |        Delta |      % |               Size | Samples | Callee                       | Location                |
| -----: | -----------: | -----: | -----------------: | ------: | ---------------------------- | ----------------------- |
| -98.9% | -157.864 MiB | 100.0% | 160 MiB → 1.68 MiB |   3 → 5 | `getManifestFromReference()` | `java.util.jar.JarFile` |

##### `getManifest()` (`jdk.internal.loader.URLClassPath$JarLoader$2`)

| Change |        Delta |      % |               Size | Samples | Callee          | Location                |
| -----: | -----------: | -----: | -----------------: | ------: | --------------- | ----------------------- |
| -98.9% | -157.864 MiB | 100.0% | 160 MiB → 1.68 MiB |   3 → 5 | `getManifest()` | `java.util.jar.JarFile` |

##### `defineClass(String, Resource)` (`java.net.URLClassLoader`)

|  Change |        Delta |            % |                Size | Samples | Callee                                              | Location                                       |
| ------: | -----------: | -----------: | ------------------: | ------: | --------------------------------------------------- | ---------------------------------------------- |
|  -98.9% | -157.864 MiB | 89.6% → 7.5% |  160 MiB → 1.68 MiB |   3 → 5 | `getManifest()`                                     | `jdk.internal.loader.URLClassPath$JarLoader$2` |
|  +24.0% |   +2.892 MiB | 6.8% → 67.0% | 12.1 MiB → 14.9 MiB | 23 → 38 | `getBytes()`                                        | `jdk.internal.loader.URLClassPath$JarLoader$2` |
|  +19.9% | +893.296 KiB | 2.5% → 23.5% | 4.38 MiB → 5.25 MiB |  9 → 13 | `getByteBuffer()`                                   | `jdk.internal.loader.Resource`                 |
|   -8.4% | -591.703 KiB | 3.9% → 28.4% | 6.91 MiB → 6.33 MiB | 13 → 16 | `defineClass(String, byte[], int, int, CodeSource)` | `java.security.SecureClassLoader`              |
| removed | -387.679 KiB |  0.2% → 0.0% |       388 KiB → 0 B |   1 → 0 | `<init>(URL, CodeSigner[])`                         | `java.security.CodeSource`                     |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |             % |                Size |   Samples | Callee                   | Location                                                   |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------ | ---------------------------------------------------------- |
|  -8.9% | -380.535 MiB | 82.6% → 81.0% | 4.18 GiB → 3.81 GiB | 247 → 207 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -7.1% | -369.161 MiB |        100.0% | 5.07 GiB → 4.71 GiB | 303 → 261 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +1.3% |  +11.374 MiB | 17.4% → 19.0% |   905 MiB → 916 MiB |   56 → 54 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change |        Delta |             % |                Size |       Samples | Callee                           | Location                                                   |
| ------: | -----------: | ------------: | ------------------: | ------------: | -------------------------------- | ---------------------------------------------------------- |
|   -9.0% |   -2.326 GiB | 68.8% → 63.0% | 25.8 GiB → 23.5 GiB | 1,231 → 1,268 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| +710.5% | +839.242 MiB |   0.3% → 2.5% |   118 MiB → 957 MiB |        5 → 22 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -2.1% |  -705.61 MiB | 85.8% → 84.4% | 32.2 GiB → 31.5 GiB | 1,493 → 1,637 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -7.1% | -369.161 MiB | 13.5% → 12.6% | 5.07 GiB → 4.71 GiB |     303 → 261 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -85.2% | -124.599 MiB |   0.4% → 0.1% |  146 MiB → 21.7 MiB |         4 → 5 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |            % |          Size | Samples | Callee                                                                                       | Location                                  |
| ------: | -----------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed | -189.915 MiB | 99.8% → 0.0% | 190 MiB → 0 B |  74 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed | -407.679 KiB |  0.2% → 0.0% | 408 KiB → 0 B |   1 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |        Delta |            % |           Size | Samples | Callee              | Location                           |
| ------: | -----------: | -----------: | -------------: | ------: | ------------------- | ---------------------------------- |
| removed | -159.978 MiB | 96.8% → 0.0% |  160 MiB → 0 B |   2 → 0 | `loadClass(String)` | `java.lang.ClassLoader`            |
| removed |   -4.069 MiB |  2.5% → 0.0% | 4.07 MiB → 0 B |   3 → 0 | `<clinit>()`        | `scala.Predef$`                    |
| removed |   -1.227 MiB |  0.7% → 0.0% | 1.23 MiB → 0 B |   1 → 0 | `map(Function1)`    | `scala.collection.immutable.Range` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|  Change |        Delta |             % |          Size | Samples | Callee                  | Location                                  |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------- | ----------------------------------------- |
| removed | -165.275 MiB | 100.0% → 0.0% | 165 MiB → 0 B |   6 → 0 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|  Change |        Delta |              % |                Size |  Samples | Callee                             | Location                                  |
| ------: | -----------: | -------------: | ------------------: | -------: | ---------------------------------- | ----------------------------------------- |
| removed | -165.275 MiB |   87.0% → 0.0% |       165 MiB → 0 B |    6 → 0 | `executeOperation(int)`            | `org.renaissance.harness.ExecutionDriver` |
| +195.8% |  +48.249 MiB | 13.0% → 100.0% | 24.6 MiB → 72.9 MiB | 68 → 122 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |             % |                Size |  Samples | Callee                                                                        | Location                                    |
| ------: | -----------: | ------------: | ------------------: | -------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
|  -60.8% | -115.766 MiB | 93.0% → 84.1% |  190 MiB → 74.5 MiB | 75 → 127 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|  -11.3% | -453.132 KiB |   1.9% → 3.9% | 3.92 MiB → 3.48 MiB |   11 → 9 | `<clinit>()`                                                                  | `scala.Predef$`                             |
|     new | +399.046 KiB |   0.0% → 0.4% |       0 B → 399 KiB |    0 → 1 | `pluginsWithArgs()`                                                           | `org.renaissance.harness.Config`            |
| removed |  -395.14 KiB |   0.2% → 0.0% |       395 KiB → 0 B |    1 → 0 | `excludeIncompatible(BenchmarkSuite, Seq)`                                    | `org.renaissance.harness.RenaissanceSuite$` |
|     new | +388.179 KiB |   0.0% → 0.4% |       0 B → 388 KiB |    0 → 1 | `getMatchingBenchmarks(Predicate)`                                            | `org.renaissance.core.BenchmarkSuite`       |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000900117c3b8`)

|  Change |        Delta |             % |           Size | Samples | Callee                                                                                                                 | Location                                    |
| ------: | -----------: | ------------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed | -190.313 MiB | 100.0% → 0.0% |  190 MiB → 0 B |  75 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
|     new |  +74.547 MiB | 0.0% → 100.0% | 0 B → 74.5 MiB | 0 → 127 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |      % |               Size |  Samples | Callee               | Location                          |
| -----: | -----------: | -----: | -----------------: | -------: | -------------------- | --------------------------------- |
| -60.8% | -115.766 MiB | 100.0% | 190 MiB → 74.5 MiB | 75 → 127 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |             % |               Size |   Samples | Callee                                                      | Location                            |
| -----: | -----------: | ------------: | -----------------: | --------: | ----------------------------------------------------------- | ----------------------------------- |
| -55.7% | -115.618 MiB | 99.6% → 99.2% | 208 MiB → 92.1 MiB | 119 → 171 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`     |
|  +2.4% |   +9.414 KiB |   0.2% → 0.4% |  388 KiB → 397 KiB |         1 | `create(Path, URI)`                                         | `org.renaissance.core.ModuleLoader` |
|  -0.7% |   -2.789 KiB |   0.2% → 0.4% |  387 KiB → 384 KiB |         1 | `createScratchRoot(Path, boolean)`                          | `org.renaissance.core.Launcher`     |

##### `main(String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |               Size |   Samples | Callee                                 | Location                        |
| -----: | -----------: | -----: | -----------------: | --------: | -------------------------------------- | ------------------------------- |
| -55.5% | -115.611 MiB | 100.0% | 208 MiB → 92.9 MiB | 121 → 173 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

# Retained heap profile diff

Retained 2.64 MiB → 2.71 MiB (+70.328 KiB, +2.6%) over 11 objects → 13 objects (246 KiB → 214 KiB per object).

| Category         | Change |       Delta |      % |                Size | Objects |
| ---------------- | -----: | ----------: | -----: | ------------------: | ------: |
| Standard library |  +2.6% | +70.265 KiB | 100.0% | 2.64 MiB → 2.71 MiB |  9 → 10 |
| Ours             | +80.0% |       +64 B |  <0.1% |        80 B → 144 B |   2 → 3 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

|  Change |        Delta |            % |          Size | Objects | Function                 | Location                                    |
| ------: | -----------: | -----------: | ------------: | ------: | ------------------------ | ------------------------------------------- |
|     new | +313.921 KiB | 0.0% → 11.3% | 0 B → 314 KiB |   0 → 2 | `initCEN(int, ZipCoder)` | `java.util.zip.ZipFile$Source`              |
| +400.0% |        +96 B |        <0.1% |  24 B → 120 B |   1 → 5 | `valueOf(double)`        | `java.lang.Double`                          |
|     new |        +64 B | 0.0% → <0.1% |    0 B → 64 B |   0 → 1 | `main(String[])`         | `org.renaissance.harness.RenaissanceSuite$` |

##### Standard library

|  Change |        Delta |            % |          Size | Objects | Function                 | Location                       |
| ------: | -----------: | -----------: | ------------: | ------: | ------------------------ | ------------------------------ |
|     new | +313.921 KiB | 0.0% → 11.3% | 0 B → 314 KiB |   0 → 2 | `initCEN(int, ZipCoder)` | `java.util.zip.ZipFile$Source` |
| +400.0% |        +96 B |        <0.1% |  24 B → 120 B |   1 → 5 | `valueOf(double)`        | `java.lang.Double`             |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

##### Standard library

|  Change |        Delta |             % |                Size | Objects | Function                                     | Location            |
| ------: | -----------: | ------------: | ------------------: | ------: | -------------------------------------------- | ------------------- |
|   -9.9% | -243.609 KiB | 90.5% → 79.5% | 2.39 MiB → 2.16 MiB |   4 → 2 | `copyOf(Object[], int)`                      | `java.util.Arrays`  |
| removed |        -64 B |  <0.1% → 0.0% |          64 B → 0 B |   1 → 0 | `initClassName()`                            | `java.lang.Class`   |
| removed |        -48 B |  <0.1% → 0.0% |          48 B → 0 B |   1 → 0 | `clone()`                                    | `java.lang.Object`  |
| removed |        -32 B |  <0.1% → 0.0% |          32 B → 0 B |   1 → 0 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap` |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |             % |          Size | Objects | Location                            |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------- |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `java.util.zip.ZipFile$Source:1733` |

##### `valueOf(double)` (`java.lang.Double`)

|  Change | Delta |      % |         Size | Objects | Location               |
| ------: | ----: | -----: | -----------: | ------: | ---------------------- |
| +400.0% | +96 B | 100.0% | 24 B → 120 B |   1 → 5 | `java.lang.Double:773` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |             % |       Size | Objects | Location                                       |
| -----: | ----: | ------------: | ---------: | ------: | ---------------------------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `org.renaissance.harness.RenaissanceSuite$:38` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |      % |                Size | Objects | Location                |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------- |
|  -9.9% | -243.609 KiB | 100.0% | 2.39 MiB → 2.16 MiB |   4 → 2 | `java.util.Arrays:3482` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|  Change | Delta |             % |       Size | Objects | Location                 |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------ |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `java.util.HashMap:1909` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |             % |          Size | Objects | Caller                                          | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- | ------------------------------ |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `valueOf(double)` (`java.lang.Double`)

|  Change | Delta |      % |         Size | Objects | Caller                                           | Location                                    |
| ------: | ----: | -----: | -----------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +400.0% | +96 B | 100.0% | 24 B → 120 B |   1 → 5 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |             % |       Size | Objects | Caller           | Location                                   |
| -----: | ----: | ------------: | ---------: | ------: | ---------------- | ------------------------------------------ |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |      % |                Size | Objects | Caller      | Location              |
| -----: | -----------: | -----: | ------------------: | ------: | ----------- | --------------------- |
|  -9.9% | -243.609 KiB | 100.0% | 2.39 MiB → 2.16 MiB |   4 → 2 | `grow(int)` | `java.util.ArrayList` |

##### `initClassName()` (`java.lang.Class`)

|  Change | Delta |             % |       Size | Objects | Caller      | Location          |
| ------: | ----: | ------------: | ---------: | ------: | ----------- | ----------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `getName()` | `java.lang.Class` |

##### `clone()` (`java.lang.Object`)

|  Change | Delta |             % |       Size | Objects | Caller    | Location                      |
| ------: | ----: | ------------: | ---------: | ------: | --------- | ----------------------------- |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   1 → 0 | `clone()` | `java.lang.invoke.MemberName` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|  Change | Delta |             % |       Size | Objects | Caller                                          | Location            |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------------------- | ------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

| Change |        Delta |             % |                Size | Objects | Function                                                                                                               | Location                                                                                                  |
| -----: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|    new |    +2.31 MiB |  0.0% → 85.1% |      0 B → 2.31 MiB |   0 → 9 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                               |
| +14.9% | +313.937 KiB | 77.9% → 87.3% | 2.06 MiB → 2.37 MiB |  7 → 11 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                                                                |
| +14.9% | +313.937 KiB | 77.9% → 87.3% | 2.06 MiB → 2.37 MiB |  7 → 11 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00 → java.lang.invoke.LambdaForm$DMH.0x0000009001001c00` |
| +14.9% | +313.937 KiB | 77.9% → 87.3% | 2.06 MiB → 2.37 MiB |  7 → 11 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000007001082400 → java.lang.invoke.LambdaForm$MH.0x0000009001082400`   |
| +14.9% | +313.937 KiB | 77.9% → 87.3% | 2.06 MiB → 2.37 MiB |  7 → 11 | `invokeExact_MT(Object, Object, Object, Object)`                                                                       | `java.lang.invoke.Invokers$Holder`                                                                        |
| +14.9% | +313.937 KiB | 77.9% → 87.3% | 2.06 MiB → 2.37 MiB |  7 → 11 | `invokeImpl(Object, Object[])`                                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                         |
| +14.9% | +313.937 KiB | 77.9% → 87.3% | 2.06 MiB → 2.37 MiB |  7 → 11 | `invoke(Object, Object[])`                                                                                             | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                         |
| +14.9% | +313.937 KiB | 77.9% → 87.3% | 2.06 MiB → 2.37 MiB |  7 → 11 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                                                                |
| +14.9% | +313.937 KiB | 77.9% → 87.3% | 2.06 MiB → 2.37 MiB |  7 → 11 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                                                           |
| +14.9% | +313.937 KiB | 77.9% → 87.3% | 2.06 MiB → 2.37 MiB |  7 → 11 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                                                           |
| +14.9% | +313.937 KiB | 77.9% → 87.3% | 2.06 MiB → 2.37 MiB |  7 → 11 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                                                           |
|    new | +313.921 KiB |  0.0% → 11.3% |       0 B → 314 KiB |   0 → 2 | `initCEN(int, ZipCoder)`                                                                                               | `java.util.zip.ZipFile$Source`                                                                            |
|    new | +313.921 KiB |  0.0% → 11.3% |       0 B → 314 KiB |   0 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                                                                        | `java.util.zip.ZipFile$Source`                                                                            |
|    new | +313.921 KiB |  0.0% → 11.3% |       0 B → 314 KiB |   0 → 2 | `get(File, boolean, ZipCoder)`                                                                                         | `java.util.zip.ZipFile$Source`                                                                            |
|    new | +313.921 KiB |  0.0% → 11.3% |       0 B → 314 KiB |   0 → 2 | `<init>(ZipFile, ZipCoder, File, int)`                                                                                 | `java.util.zip.ZipFile$CleanableResource`                                                                 |
|    new | +313.921 KiB |  0.0% → 11.3% |       0 B → 314 KiB |   0 → 2 | `<init>(File, int, Charset)`                                                                                           | `java.util.zip.ZipFile`                                                                                   |
|    new | +313.921 KiB |  0.0% → 11.3% |       0 B → 314 KiB |   0 → 2 | `<init>(File, int)`                                                                                                    | `java.util.zip.ZipFile`                                                                                   |
|    new | +313.921 KiB |  0.0% → 11.3% |       0 B → 314 KiB |   0 → 2 | `<init>(File, boolean, int, Runtime$Version)`                                                                          | `java.util.jar.JarFile`                                                                                   |
|    new | +313.921 KiB |  0.0% → 11.3% |       0 B → 314 KiB |   0 → 2 | `getJarFile(URL)`                                                                                                      | `jdk.internal.loader.URLClassPath$JarLoader`                                                              |
|    new | +313.921 KiB |  0.0% → 11.3% |       0 B → 314 KiB |   0 → 2 | `run()`                                                                                                                | `jdk.internal.loader.URLClassPath$JarLoader$1`                                                            |

##### Standard library

| Change |        Delta |             % |                Size | Objects | Function                                                       | Location                                                                                                  |
| -----: | -----------: | ------------: | ------------------: | ------: | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| +14.9% | +313.937 KiB | 77.9% → 87.3% | 2.06 MiB → 2.37 MiB |  7 → 11 | `invokeStatic(Object, Object)`                                 | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00 → java.lang.invoke.LambdaForm$DMH.0x0000009001001c00` |
| +14.9% | +313.937 KiB | 77.9% → 87.3% | 2.06 MiB → 2.37 MiB |  7 → 11 | `invoke(Object, Object, Object)`                               | `java.lang.invoke.LambdaForm$MH.0x0000007001082400 → java.lang.invoke.LambdaForm$MH.0x0000009001082400`   |
| +14.9% | +313.937 KiB | 77.9% → 87.3% | 2.06 MiB → 2.37 MiB |  7 → 11 | `invokeExact_MT(Object, Object, Object, Object)`               | `java.lang.invoke.Invokers$Holder`                                                                        |
| +14.9% | +313.937 KiB | 77.9% → 87.3% | 2.06 MiB → 2.37 MiB |  7 → 11 | `invokeImpl(Object, Object[])`                                 | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                         |
| +14.9% | +313.937 KiB | 77.9% → 87.3% | 2.06 MiB → 2.37 MiB |  7 → 11 | `invoke(Object, Object[])`                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                         |
| +14.9% | +313.937 KiB | 77.9% → 87.3% | 2.06 MiB → 2.37 MiB |  7 → 11 | `invoke(Object, Object[])`                                     | `java.lang.reflect.Method`                                                                                |
|    new | +313.921 KiB |  0.0% → 11.3% |       0 B → 314 KiB |   0 → 2 | `initCEN(int, ZipCoder)`                                       | `java.util.zip.ZipFile$Source`                                                                            |
|    new | +313.921 KiB |  0.0% → 11.3% |       0 B → 314 KiB |   0 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                | `java.util.zip.ZipFile$Source`                                                                            |
|    new | +313.921 KiB |  0.0% → 11.3% |       0 B → 314 KiB |   0 → 2 | `get(File, boolean, ZipCoder)`                                 | `java.util.zip.ZipFile$Source`                                                                            |
|    new | +313.921 KiB |  0.0% → 11.3% |       0 B → 314 KiB |   0 → 2 | `<init>(ZipFile, ZipCoder, File, int)`                         | `java.util.zip.ZipFile$CleanableResource`                                                                 |
|    new | +313.921 KiB |  0.0% → 11.3% |       0 B → 314 KiB |   0 → 2 | `<init>(File, int, Charset)`                                   | `java.util.zip.ZipFile`                                                                                   |
|    new | +313.921 KiB |  0.0% → 11.3% |       0 B → 314 KiB |   0 → 2 | `<init>(File, int)`                                            | `java.util.zip.ZipFile`                                                                                   |
|    new | +313.921 KiB |  0.0% → 11.3% |       0 B → 314 KiB |   0 → 2 | `<init>(File, boolean, int, Runtime$Version)`                  | `java.util.jar.JarFile`                                                                                   |
|    new | +313.921 KiB |  0.0% → 11.3% |       0 B → 314 KiB |   0 → 2 | `getJarFile(URL)`                                              | `jdk.internal.loader.URLClassPath$JarLoader`                                                              |
|    new | +313.921 KiB |  0.0% → 11.3% |       0 B → 314 KiB |   0 → 2 | `run()`                                                        | `jdk.internal.loader.URLClassPath$JarLoader$1`                                                            |
|    new | +313.921 KiB |  0.0% → 11.3% |       0 B → 314 KiB |   0 → 2 | `ensureOpen()`                                                 | `jdk.internal.loader.URLClassPath$JarLoader`                                                              |
|    new | +313.921 KiB |  0.0% → 11.3% |       0 B → 314 KiB |   0 → 2 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` | `jdk.internal.loader.URLClassPath$JarLoader`                                                              |
|    new | +313.921 KiB |  0.0% → 11.3% |       0 B → 314 KiB |   0 → 2 | `run()`                                                        | `jdk.internal.loader.URLClassPath$3`                                                                      |
|    new | +313.921 KiB |  0.0% → 11.3% |       0 B → 314 KiB |   0 → 2 | `getLoader(URL)`                                               | `jdk.internal.loader.URLClassPath`                                                                        |
|    new | +313.921 KiB |  0.0% → 11.3% |       0 B → 314 KiB |   0 → 2 | `getLoader(int)`                                               | `jdk.internal.loader.URLClassPath`                                                                        |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |        Delta |             % |                Size | Objects | Function                                                                                                               | Location                                                                                                                                      |
| ------: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -2.06 MiB |  77.9% → 0.0% |      2.06 MiB → 0 B |   4 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
|   -9.9% | -243.609 KiB | 90.5% → 79.5% | 2.39 MiB → 2.16 MiB |   4 → 2 | `copyOf(Object[], int)`                                                                                                | `java.util.Arrays`                                                                                                                            |
|   -9.9% | -243.609 KiB | 90.5% → 79.5% | 2.39 MiB → 2.16 MiB |   4 → 2 | `grow(int)`                                                                                                            | `java.util.ArrayList`                                                                                                                         |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `addAll(Collection)`                                                                                                   | `java.util.ArrayList`                                                                                                                         |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011ff3c8` |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                                                                                           |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011ff180` |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `forEach(BiConsumer)`                                                                                                  | `java.util.HashMap`                                                                                                                           |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                                    |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                                                                        |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                                                                                                          |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                                                                                           |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`                                                                                                 |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                                                                                                           |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                                                                                           |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                                                                                                   |

##### Standard library

|  Change |        Delta |             % |                Size | Objects | Function                                                  | Location                                      |
| ------: | -----------: | ------------: | ------------------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
|   -9.9% | -243.609 KiB | 90.5% → 79.5% | 2.39 MiB → 2.16 MiB |   4 → 2 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                            |
|   -9.9% | -243.609 KiB | 90.5% → 79.5% | 2.39 MiB → 2.16 MiB |   4 → 2 | `grow(int)`                                               | `java.util.ArrayList`                         |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `addAll(Collection)`                                      | `java.util.ArrayList`                         |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                           |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                           |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`          |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
|  -71.3% | -243.609 KiB |  12.6% → 3.5% |  342 KiB → 98.1 KiB |   3 → 1 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`   |
| removed |  -48.976 KiB |   1.8% → 0.0% |        49 KiB → 0 B |   1 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |  -48.976 KiB |   1.8% → 0.0% |        49 KiB → 0 B |   1 → 0 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
| removed |  -48.976 KiB |   1.8% → 0.0% |        49 KiB → 0 B |   1 → 0 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`           |
| removed |        -96 B |  <0.1% → 0.0% |          96 B → 0 B |   2 → 0 | `defineClass(String, Resource)`                           | `java.net.URLClassLoader`                     |
| removed |        -64 B |  <0.1% → 0.0% |          64 B → 0 B |   1 → 0 | `initClassName()`                                         | `java.lang.Class`                             |
| removed |        -64 B |  <0.1% → 0.0% |          64 B → 0 B |   1 → 0 | `getName()`                                               | `java.lang.Class`                             |
| removed |        -64 B |  <0.1% → 0.0% |          64 B → 0 B |   1 → 0 | `getPackageName()`                                        | `java.lang.Class`                             |
| removed |        -64 B |  <0.1% → 0.0% |          64 B → 0 B |   1 → 0 | `postDefineClass(Class, ProtectionDomain)`                | `java.lang.ClassLoader`                       |
| removed |        -64 B |  <0.1% → 0.0% |          64 B → 0 B |   1 → 0 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader`                       |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |            % |           Size | Objects | Callee                                                                                       | Location                                  |
| -----: | -----------: | -----------: | -------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |    +2.06 MiB | 0.0% → 89.2% | 0 B → 2.06 MiB |   0 → 8 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new | +255.085 KiB | 0.0% → 10.8% |  0 B → 255 KiB |   0 → 1 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|     Change |        Delta |              % |                Size | Objects | Callee              | Location                                    |
| ---------: | -----------: | -------------: | ------------------: | ------: | ------------------- | ------------------------------------------- |
|     +12.1% | +255.132 KiB | 100.0% → 97.6% | 2.06 MiB → 2.31 MiB |  6 → 10 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
| +188175.0% |  +58.804 KiB |   <0.1% → 2.4% |     32 B → 58.8 KiB |       1 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000009001001c00`)

| Change |        Delta |      % |                Size | Objects | Callee           | Location                                   |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------- | ------------------------------------------ |
| +14.9% | +313.937 KiB | 100.0% | 2.06 MiB → 2.37 MiB |  7 → 11 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000009001082400`)

| Change |        Delta |      % |                Size | Objects | Callee                         | Location                                                                                                  |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------ | --------------------------------------------------------------------------------------------------------- |
| +14.9% | +313.937 KiB | 100.0% | 2.06 MiB → 2.37 MiB |  7 → 11 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00 → java.lang.invoke.LambdaForm$DMH.0x0000009001001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |        Delta |      % |                Size | Objects | Callee                           | Location                                                                                                |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------------------- |
| +14.9% | +313.937 KiB | 100.0% | 2.06 MiB → 2.37 MiB |  7 → 11 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001082400 → java.lang.invoke.LambdaForm$MH.0x0000009001082400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |        Delta |      % |                Size | Objects | Callee                                           | Location                           |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| +14.9% | +313.937 KiB | 100.0% | 2.06 MiB → 2.37 MiB |  7 → 11 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |        Delta |      % |                Size | Objects | Callee                         | Location                                          |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------ | ------------------------------------------------- |
| +14.9% | +313.937 KiB | 100.0% | 2.06 MiB → 2.37 MiB |  7 → 11 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |        Delta |      % |                Size | Objects | Callee                     | Location                                          |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | ------------------------------------------------- |
| +14.9% | +313.937 KiB | 100.0% | 2.06 MiB → 2.37 MiB |  7 → 11 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Callee                     | Location                   |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | -------------------------- |
| +14.9% | +313.937 KiB | 100.0% | 2.06 MiB → 2.37 MiB |  7 → 11 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Callee                                                      | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------------------- | ------------------------------- |
| +14.9% | +313.937 KiB | 100.0% | 2.06 MiB → 2.37 MiB |  7 → 11 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Callee                                 | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------------- | ------------------------------- |
| +14.9% | +313.937 KiB | 100.0% | 2.06 MiB → 2.37 MiB |  7 → 11 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `<init>(ZipFile$Source$Key, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |             % |          Size | Objects | Callee                   | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------ | ------------------------------ |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `initCEN(int, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `get(File, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |             % |          Size | Objects | Callee                                          | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- | ------------------------------ |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`)

| Change |        Delta |             % |          Size | Objects | Callee                         | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------ | ------------------------------ |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `get(File, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(File, int, Charset)` (`java.util.zip.ZipFile`)

| Change |        Delta |             % |          Size | Objects | Callee                                 | Location                                  |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------- | ----------------------------------------- |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `<init>(ZipFile, ZipCoder, File, int)` | `java.util.zip.ZipFile$CleanableResource` |

##### `<init>(File, int)` (`java.util.zip.ZipFile`)

| Change |        Delta |             % |          Size | Objects | Callee                       | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------- | ----------------------- |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `<init>(File, int, Charset)` | `java.util.zip.ZipFile` |

##### `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`)

| Change |        Delta |             % |          Size | Objects | Callee              | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------- | ----------------------- |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `<init>(File, int)` | `java.util.zip.ZipFile` |

##### `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`)

| Change |        Delta |             % |          Size | Objects | Callee                                        | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------- | ----------------------- |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `<init>(File, boolean, int, Runtime$Version)` | `java.util.jar.JarFile` |

##### `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`)

| Change |        Delta |             % |          Size | Objects | Callee            | Location                                       |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------- | ---------------------------------------------- |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `getJarFile(URL)` | `jdk.internal.loader.URLClassPath$JarLoader`   |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `run()`           | `jdk.internal.loader.URLClassPath$JarLoader$1` |

##### `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`)

| Change |        Delta |             % |          Size | Objects | Callee                                                          | Location                         |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------------- | -------------------------------- |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` | `java.security.AccessController` |

##### `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` (`jdk.internal.loader.URLClassPath$JarLoader`)

| Change |        Delta |             % |          Size | Objects | Callee         | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | -------------- | -------------------------------------------- |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `ensureOpen()` | `jdk.internal.loader.URLClassPath$JarLoader` |

##### `run()` (`jdk.internal.loader.URLClassPath$3`)

| Change |        Delta |             % |          Size | Objects | Callee                                                         | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------------------- | -------------------------------------------- |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` | `jdk.internal.loader.URLClassPath$JarLoader` |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `run()`                                                        | `jdk.internal.loader.URLClassPath$3`         |

##### `getLoader(URL)` (`jdk.internal.loader.URLClassPath`)

| Change |        Delta |             % |          Size | Objects | Callee                                                          | Location                         |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------------- | -------------------------------- |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` | `java.security.AccessController` |

##### `getLoader(int)` (`jdk.internal.loader.URLClassPath`)

| Change |        Delta |             % |          Size | Objects | Callee           | Location                           |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------- | ---------------------------------- |
|    new | +313.921 KiB | 0.0% → 100.0% | 0 B → 314 KiB |   0 → 2 | `getLoader(URL)` | `jdk.internal.loader.URLClassPath` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |     Delta |             % |           Size | Objects | Callee               | Location                                  |
| ------: | --------: | ------------: | -------------: | ------: | -------------------- | ----------------------------------------- |
| removed | -2.06 MiB | 100.0% → 0.0% | 2.06 MiB → 0 B |   4 → 0 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size | Objects | Callee                  | Location           |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------- | ------------------ |
|  -9.9% | -243.609 KiB | 100.0% | 2.39 MiB → 2.16 MiB |   4 → 2 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change |        Delta |      % |               Size | Objects | Callee      | Location              |
| -----: | -----------: | -----: | -----------------: | ------: | ----------- | --------------------- |
| -71.3% | -243.609 KiB | 100.0% | 342 KiB → 98.1 KiB |   3 → 1 | `grow(int)` | `java.util.ArrayList` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |               Size | Objects | Callee               | Location              |
| -----: | -----------: | -----: | -----------------: | ------: | -------------------- | --------------------- |
| -71.3% | -243.609 KiB | 100.0% | 342 KiB → 98.1 KiB |   3 → 1 | `addAll(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011ff3c8`)

| Change |        Delta |      % |               Size | Objects | Callee                       | Location                                    |
| -----: | -----------: | -----: | -----------------: | ------: | ---------------------------- | ------------------------------------------- |
| -71.3% | -243.609 KiB | 100.0% | 342 KiB → 98.1 KiB |   3 → 1 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change |        Delta |      % |               Size | Objects | Callee                  | Location                                                                                                                                      |
| -----: | -----------: | -----: | -----------------: | ------: | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| -71.3% | -243.609 KiB | 100.0% | 342 KiB → 98.1 KiB |   3 → 1 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011ff3c8` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |               Size | Objects | Callee                              | Location            |
| -----: | -----------: | -----: | -----------------: | ------: | ----------------------------------- | ------------------- |
| -71.3% | -243.609 KiB | 100.0% | 342 KiB → 98.1 KiB |   3 → 1 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011ff180`)

| Change |        Delta |      % |               Size | Objects | Callee                              | Location                                    |
| -----: | -----------: | -----: | -----------------: | ------: | ----------------------------------- | ------------------------------------------- |
| -71.3% | -243.609 KiB | 100.0% | 342 KiB → 98.1 KiB |   3 → 1 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change |        Delta |      % |               Size | Objects | Callee                   | Location                                                                                                                                      |
| -----: | -----------: | -----: | -----------------: | ------: | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| -71.3% | -243.609 KiB | 100.0% | 342 KiB → 98.1 KiB |   3 → 1 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88 → org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000090011ff180` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |               Size | Objects | Callee                | Location            |
| -----: | -----------: | -----: | -----------------: | ------: | --------------------- | ------------------- |
| -71.3% | -243.609 KiB | 100.0% | 342 KiB → 98.1 KiB |   3 → 1 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |               Size | Objects | Callee            | Location                                    |
| -----: | -----------: | -----: | -----------------: | ------: | ----------------- | ------------------------------------------- |
| -71.3% | -243.609 KiB | 100.0% | 342 KiB → 98.1 KiB |   3 → 1 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |               Size | Objects | Callee                     | Location                                                   |
| -----: | -----------: | -----: | -----------------: | ------: | -------------------------- | ---------------------------------------------------------- |
| -71.3% | -243.609 KiB | 100.0% | 342 KiB → 98.1 KiB |   3 → 1 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change |        Delta |            % |               Size | Objects | Callee                           | Location                                                   |
| ------: | -----------: | -----------: | -----------------: | ------: | -------------------------------- | ---------------------------------------------------------- |
|  -71.3% | -243.609 KiB |       100.0% | 342 KiB → 98.1 KiB |   3 → 1 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |  -48.976 KiB | 14.3% → 0.0% |       49 KiB → 0 B |   1 → 0 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |        Delta |      % |               Size | Objects | Callee      | Location                                               |
| -----: | -----------: | -----: | -----------------: | ------: | ----------- | ------------------------------------------------------ |
| -71.3% | -243.609 KiB | 100.0% | 342 KiB → 98.1 KiB |   3 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |      % |               Size | Objects | Callee   | Location                             |
| -----: | -----------: | -----: | -----------------: | ------: | -------- | ------------------------------------ |
| -71.3% | -243.609 KiB | 100.0% | 342 KiB → 98.1 KiB |   3 → 1 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |               Size | Objects | Callee     | Location                            |
| -----: | -----------: | -----: | -----------------: | ------: | ---------- | ----------------------------------- |
| -71.3% | -243.609 KiB | 100.0% | 342 KiB → 98.1 KiB |   3 → 1 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |               Size | Objects | Callee                                               | Location                                      |
| -----: | -----------: | -----: | -----------------: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| -71.3% | -243.609 KiB | 100.0% | 342 KiB → 98.1 KiB |   3 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |               Size | Objects | Callee                                   | Location                            |
| -----: | -----------: | -----: | -----------------: | ------: | ---------------------------------------- | ----------------------------------- |
| -71.3% | -243.609 KiB | 100.0% | 342 KiB → 98.1 KiB |   3 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |        Delta |      % |               Size | Objects | Callee                              | Location                            |
| -----: | -----------: | -----: | -----------------: | ------: | ----------------------------------- | ----------------------------------- |
| -71.3% | -243.609 KiB | 100.0% | 342 KiB → 98.1 KiB |   3 → 1 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change |       Delta |             % |         Size | Objects | Callee     | Location                            |
| ------: | ----------: | ------------: | -----------: | ------: | ---------- | ----------------------------------- |
| removed | -48.976 KiB | 100.0% → 0.0% | 49 KiB → 0 B |   1 → 0 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change |       Delta |             % |         Size | Objects | Callee                                    | Location                                      |
| ------: | ----------: | ------------: | -----------: | ------: | ----------------------------------------- | --------------------------------------------- |
| removed | -48.976 KiB | 100.0% → 0.0% | 49 KiB → 0 B |   1 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change |       Delta |             % |         Size | Objects | Callee                 | Location                            |
| ------: | ----------: | ------------: | -----------: | ------: | ---------------------- | ----------------------------------- |
| removed | -48.976 KiB | 100.0% → 0.0% | 49 KiB → 0 B |   1 → 0 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `defineClass(String, Resource)` (`java.net.URLClassLoader`)

|  Change | Delta |            % |       Size | Objects | Callee                                              | Location                                       |
| ------: | ----: | -----------: | ---------: | ------: | --------------------------------------------------- | ---------------------------------------------- |
| removed | -64 B | 66.7% → 0.0% | 64 B → 0 B |   1 → 0 | `defineClass(String, byte[], int, int, CodeSource)` | `java.security.SecureClassLoader`              |
| removed | -32 B | 33.3% → 0.0% | 32 B → 0 B |   1 → 0 | `getManifest()`                                     | `jdk.internal.loader.URLClassPath$JarLoader$2` |

##### `getName()` (`java.lang.Class`)

|  Change | Delta |             % |       Size | Objects | Callee            | Location          |
| ------: | ----: | ------------: | ---------: | ------: | ----------------- | ----------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `initClassName()` | `java.lang.Class` |

##### `getPackageName()` (`java.lang.Class`)

|  Change | Delta |             % |       Size | Objects | Callee      | Location          |
| ------: | ----: | ------------: | ---------: | ------: | ----------- | ----------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `getName()` | `java.lang.Class` |

##### `postDefineClass(Class, ProtectionDomain)` (`java.lang.ClassLoader`)

|  Change | Delta |             % |       Size | Objects | Callee             | Location          |
| ------: | ----: | ------------: | ---------: | ------: | ------------------ | ----------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `getPackageName()` | `java.lang.Class` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|  Change | Delta |             % |       Size | Objects | Callee                                     | Location                |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------ | ----------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `postDefineClass(Class, ProtectionDomain)` | `java.lang.ClassLoader` |

# Lock contention profile diff

Blocked 7.44s → 8.62s (+1.182s, +15.9%) over 76 contentions → 88 contentions (98.0ms per contention).

| Category         | Change |   Delta |      % |          Time | Contentions |
| ---------------- | -----: | ------: | -----: | ------------: | ----------: |
| Standard library | +15.9% | +1.182s | 100.0% | 7.44s → 8.62s |     76 → 88 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

##### Standard library

| Change |   Delta |      % |          Time | Contentions | Function              | Location                   |
| -----: | ------: | -----: | ------------: | ----------: | --------------------- | -------------------------- |
| +15.9% | +1.182s | 100.0% | 7.44s → 8.62s |     76 → 88 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change |     Delta |             % |              Time | Contentions | Caller            | Location                                 |
| -----: | --------: | ------------: | ----------------: | ----------: | ----------------- | ---------------------------------------- |
| +14.1% | +999.22ms | 94.9% → 93.5% |     7.06s → 8.06s |     59 → 73 | `park()`          | `java.util.concurrent.locks.LockSupport` |
| +48.1% | +183.29ms |   5.1% → 6.5% | 381.0ms → 564.3ms |     17 → 15 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

| Change |     Delta |             % |          Time | Contentions | Function                                                                                                               | Location                                                                                                                                      |
| -----: | --------: | ------------: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
|    new |   +6.612s |  0.0% → 76.6% |   0ms → 6.61s |      0 → 16 | `$anonfun$2(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                     |
|    new |   +6.612s |  0.0% → 76.6% |   0ms → 6.61s |      0 → 16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
| +15.9% |   +1.182s |        100.0% | 7.44s → 8.62s |     76 → 88 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                                                                                                    |
| +14.1% | +999.22ms | 94.9% → 93.5% | 7.06s → 8.06s |     59 → 73 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                                                                                                      |
| +10.3% | +616.73ms | 80.5% → 76.6% | 5.99s → 6.61s |          16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                                                                                           |
| +10.3% | +616.73ms | 80.5% → 76.6% | 5.99s → 6.61s |          16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                                                                                                   |
| +10.3% | +616.73ms | 80.5% → 76.6% | 5.99s → 6.61s |          16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                     |
| +10.3% | +616.73ms | 80.5% → 76.6% | 5.99s → 6.61s |          16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011d6c70 → org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000090011fdb90`     |
| +10.3% | +616.73ms | 80.5% → 76.6% | 5.99s → 6.61s |          16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                                                                                            |
| +10.3% | +616.73ms | 80.5% → 76.6% | 5.99s → 6.61s |          16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                                                                                                     |
| +10.3% | +616.73ms | 80.5% → 76.6% | 5.99s → 6.61s |          16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                                                                                                     |
| +10.3% | +616.73ms | 80.5% → 76.6% | 5.99s → 6.61s |          16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                                                                                                     |
| +10.3% | +616.73ms | 80.5% → 76.6% | 5.99s → 6.61s |          16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001178798 → org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000900117c3b8` |
| +10.3% | +616.73ms | 80.5% → 76.6% | 5.99s → 6.61s |          16 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                                                                                          |
| +10.3% | +616.73ms | 80.5% → 76.6% | 5.99s → 6.61s |          16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                                                                                             |
| +10.3% | +616.73ms | 80.5% → 76.6% | 5.99s → 6.61s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
| +10.3% | +616.73ms | 80.5% → 76.6% | 5.99s → 6.61s |          16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                                                                                                   |
| +10.3% | +616.73ms | 80.5% → 76.6% | 5.99s → 6.61s |          16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                                                                                                    |
| +10.3% | +616.73ms | 80.5% → 76.6% | 5.99s → 6.61s |          16 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00 → java.lang.invoke.LambdaForm$DMH.0x0000009001001c00`                                     |
| +10.3% | +616.73ms | 80.5% → 76.6% | 5.99s → 6.61s |          16 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000007001082400 → java.lang.invoke.LambdaForm$MH.0x0000009001082400`                                       |

##### Standard library

| Change |     Delta |             % |              Time | Contentions | Function                                                  | Location                                                                                                  |
| -----: | --------: | ------------: | ----------------: | ----------: | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| +15.9% |   +1.182s |        100.0% |     7.44s → 8.62s |     76 → 88 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                                                                                |
| +14.1% | +999.22ms | 94.9% → 93.5% |     7.06s → 8.06s |     59 → 73 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`                                                                  |
| +10.3% | +616.73ms | 80.5% → 76.6% |     5.99s → 6.61s |          16 | `get()`                                                   | `java.util.concurrent.ForkJoinTask`                                                                       |
| +10.3% | +616.73ms | 80.5% → 76.6% |     5.99s → 6.61s |          16 | `map(Function1)`                                          | `scala.collection.immutable.Range`                                                                        |
| +10.3% | +616.73ms | 80.5% → 76.6% |     5.99s → 6.61s |          16 | `apply(Object)`                                           | `scala.runtime.function.JProcedure1`                                                                      |
| +10.3% | +616.73ms | 80.5% → 76.6% |     5.99s → 6.61s |          16 | `foreach(Function1)`                                      | `scala.collection.immutable.List`                                                                         |
| +10.3% | +616.73ms | 80.5% → 76.6% |     5.99s → 6.61s |          16 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00 → java.lang.invoke.LambdaForm$DMH.0x0000009001001c00` |
| +10.3% | +616.73ms | 80.5% → 76.6% |     5.99s → 6.61s |          16 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x0000007001082400 → java.lang.invoke.LambdaForm$MH.0x0000009001082400`   |
| +10.3% | +616.73ms | 80.5% → 76.6% |     5.99s → 6.61s |          16 | `invokeExact_MT(Object, Object, Object, Object)`          | `java.lang.invoke.Invokers$Holder`                                                                        |
| +10.3% | +616.73ms | 80.5% → 76.6% |     5.99s → 6.61s |          16 | `invokeImpl(Object, Object[])`                            | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                         |
| +10.3% | +616.73ms | 80.5% → 76.6% |     5.99s → 6.61s |          16 | `invoke(Object, Object[])`                                | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                         |
| +10.3% | +616.73ms | 80.5% → 76.6% |     5.99s → 6.61s |          16 | `invoke(Object, Object[])`                                | `java.lang.reflect.Method`                                                                                |
|  +9.9% | +597.65ms | 81.3% → 77.1% |     6.05s → 6.64s |     20 → 19 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                                                                       |
| +42.0% | +584.86ms | 18.7% → 22.9% |     1.39s → 1.97s |     56 → 69 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                                                                       |
| +39.0% | +565.77ms | 19.5% → 23.4% |     1.44s → 2.01s |     60 → 72 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                                                                       |
| +39.0% | +565.77ms | 19.5% → 23.4% |     1.44s → 2.01s |     60 → 72 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                                                               |
| +48.1% | +183.29ms |   5.1% → 6.5% | 381.0ms → 564.3ms |     17 → 15 | `parkUntil(long)`                                         | `java.util.concurrent.locks.LockSupport`                                                                  |
|    new |  +24.70ms |   0.0% → 0.3% |      0ms → 24.7ms |       0 → 2 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                                                       |
| +47.5% |  +11.83ms |   0.3% → 0.4% |   24.9ms → 36.7ms |       2 → 3 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`                                                             |

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |    Delta |            % |            Time | Contentions | Function                                                                                                               | Location                                                               |
| ------: | -------: | -----------: | --------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |  -5.995s | 80.5% → 0.0% |     5.99s → 0ms |      16 → 0 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| removed |  -5.995s | 80.5% → 0.0% |     5.99s → 0ms |      16 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| removed | -24.89ms |  0.3% → 0.0% |    24.9ms → 0ms |       2 → 0 | `invoke()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
| removed | -24.89ms |  0.3% → 0.0% |    24.9ms → 0ms |       2 → 0 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| removed | -24.89ms |  0.3% → 0.0% |    24.9ms → 0ms |       2 → 0 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| removed | -24.89ms |  0.3% → 0.0% |    24.9ms → 0ms |       2 → 0 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -34.2% | -19.09ms |  0.7% → 0.4% | 55.8ms → 36.7ms |       4 → 3 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                    |
|  -34.2% | -19.09ms |  0.7% → 0.4% | 55.8ms → 36.7ms |       4 → 3 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  -34.2% | -19.09ms |  0.7% → 0.4% | 55.8ms → 36.7ms |       4 → 3 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                                   |
|  -34.2% | -19.09ms |  0.7% → 0.4% | 55.8ms → 36.7ms |       4 → 3 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
|  -34.2% | -19.09ms |  0.7% → 0.4% | 55.8ms → 36.7ms |       4 → 3 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  -34.2% | -19.09ms |  0.7% → 0.4% | 55.8ms → 36.7ms |       4 → 3 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                                    |
| removed | -14.10ms |  0.2% → 0.0% |    14.1ms → 0ms |       1 → 0 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed | -14.10ms |  0.2% → 0.0% |    14.1ms → 0ms |       1 → 0 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0` |
| removed | -14.10ms |  0.2% → 0.0% |    14.1ms → 0ms |       1 → 0 | `exec()`                                                                                                               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |

##### Standard library

|  Change |    Delta |           % |            Time | Contentions | Function                                             | Location                                            |
| ------: | -------: | ----------: | --------------: | ----------: | ---------------------------------------------------- | --------------------------------------------------- |
| removed | -24.89ms | 0.3% → 0.0% |    24.9ms → 0ms |       2 → 0 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                 |
|  -34.2% | -19.09ms | 0.7% → 0.4% | 55.8ms → 36.7ms |       4 → 3 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                 |
|  -34.2% | -19.09ms | 0.7% → 0.4% | 55.8ms → 36.7ms |       4 → 3 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                |
|  -34.2% | -19.09ms | 0.7% → 0.4% | 55.8ms → 36.7ms |       4 → 3 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                 |
|  -34.2% | -19.09ms | 0.7% → 0.4% | 55.8ms → 36.7ms |       4 → 3 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|  -34.2% | -19.09ms | 0.7% → 0.4% | 55.8ms → 36.7ms |       4 → 3 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                 |
| removed | -14.10ms | 0.2% → 0.0% |    14.1ms → 0ms |       1 → 0 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |   Delta |             % |        Time | Contentions | Callee                | Location                                    |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------- | ------------------------------------------- |
|    new | +6.612s | 0.0% → 100.0% | 0ms → 6.61s |      0 → 16 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |   Delta |             % |        Time | Contentions | Callee               | Location                                  |
| -----: | ------: | ------------: | ----------: | ----------: | -------------------- | ----------------------------------------- |
|    new | +6.612s | 0.0% → 100.0% | 0ms → 6.61s |      0 → 16 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change |     Delta |      % |          Time | Contentions | Callee                | Location                   |
| -----: | --------: | -----: | ------------: | ----------: | --------------------- | -------------------------- |
| +14.1% | +999.22ms | 100.0% | 7.06s → 8.06s |     59 → 73 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |      % |          Time | Contentions | Callee                 | Location                            |
| -----: | --------: | -----: | ------------: | ----------: | ---------------------- | ----------------------------------- |
| +10.3% | +616.73ms | 100.0% | 5.99s → 6.61s |          16 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |     Delta |      % |          Time | Contentions | Callee  | Location                            |
| -----: | --------: | -----: | ------------: | ----------: | ------- | ----------------------------------- |
| +10.3% | +616.73ms | 100.0% | 5.99s → 6.61s |          16 | `get()` | `java.util.concurrent.ForkJoinTask` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |   Delta |             % |        Time | Contentions | Callee            | Location                                  |
| ------: | ------: | ------------: | ----------: | ----------: | ----------------- | ----------------------------------------- |
|     new | +6.612s | 0.0% → 100.0% | 0ms → 6.61s |      0 → 16 | `$anonfun$2(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |
| removed | -5.995s | 100.0% → 0.0% | 5.99s → 0ms |      16 → 0 | `$anonfun$1(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000090011fdb90`)

| Change |     Delta |      % |          Time | Contentions | Callee                       | Location                                  |
| -----: | --------: | -----: | ------------: | ----------: | ---------------------------- | ----------------------------------------- |
| +10.3% | +616.73ms | 100.0% | 5.99s → 6.61s |          16 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `map(Function1)` (`scala.collection.immutable.Range`)

| Change |     Delta |      % |          Time | Contentions | Callee          | Location                                                                                                                                  |
| -----: | --------: | -----: | ------------: | ----------: | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| +10.3% | +616.73ms | 100.0% | 5.99s → 6.61s |          16 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011d6c70 → org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000090011fdb90` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |     Delta |      % |          Time | Contentions | Callee           | Location                           |
| -----: | --------: | -----: | ------------: | ----------: | ---------------- | ---------------------------------- |
| +10.3% | +616.73ms | 100.0% | 5.99s → 6.61s |          16 | `map(Function1)` | `scala.collection.immutable.Range` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change |     Delta |      % |          Time | Contentions | Callee                  | Location                                  |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------- | ----------------------------------------- |
| +10.3% | +616.73ms | 100.0% | 5.99s → 6.61s |          16 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

| Change |     Delta |      % |          Time | Contentions | Callee                  | Location                                  |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------- | ----------------------------------------- |
| +10.3% | +616.73ms | 100.0% | 5.99s → 6.61s |          16 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000900117c3b8`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                                                                                                 | Location                                    |
| ------: | ------: | ------------: | ----------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new | +6.612s | 0.0% → 100.0% | 0ms → 6.61s |      0 → 16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed | -5.995s | 100.0% → 0.0% | 5.99s → 0ms |      16 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change |     Delta |      % |          Time | Contentions | Callee              | Location                                                                                                                                      |
| -----: | --------: | -----: | ------------: | ----------: | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| +10.3% | +616.73ms | 100.0% | 5.99s → 6.61s |          16 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001178798 → org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000900117c3b8` |
| +10.3% | +616.73ms | 100.0% | 5.99s → 6.61s |          16 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                                                                                          |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change |     Delta |      % |          Time | Contentions | Callee          | Location                             |
| -----: | --------: | -----: | ------------: | ----------: | --------------- | ------------------------------------ |
| +10.3% | +616.73ms | 100.0% | 5.99s → 6.61s |          16 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |     Delta |      % |          Time | Contentions | Callee               | Location                          |
| -----: | --------: | -----: | ------------: | ----------: | -------------------- | --------------------------------- |
| +10.3% | +616.73ms | 100.0% | 5.99s → 6.61s |          16 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |     Delta |      % |          Time | Contentions | Callee                                                                        | Location                                    |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| +10.3% | +616.73ms | 100.0% | 5.99s → 6.61s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change |     Delta |      % |          Time | Contentions | Callee           | Location                                    |
| -----: | --------: | -----: | ------------: | ----------: | ---------------- | ------------------------------------------- |
| +10.3% | +616.73ms | 100.0% | 5.99s → 6.61s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000009001001c00`)

| Change |     Delta |      % |          Time | Contentions | Callee           | Location                                   |
| -----: | --------: | -----: | ------------: | ----------: | ---------------- | ------------------------------------------ |
| +10.3% | +616.73ms | 100.0% | 5.99s → 6.61s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000009001082400`)

| Change |     Delta |      % |          Time | Contentions | Callee                         | Location                                                                                                  |
| -----: | --------: | -----: | ------------: | ----------: | ------------------------------ | --------------------------------------------------------------------------------------------------------- |
| +10.3% | +616.73ms | 100.0% | 5.99s → 6.61s |          16 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00 → java.lang.invoke.LambdaForm$DMH.0x0000009001001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |     Delta |      % |          Time | Contentions | Callee                           | Location                                                                                                |
| -----: | --------: | -----: | ------------: | ----------: | -------------------------------- | ------------------------------------------------------------------------------------------------------- |
| +10.3% | +616.73ms | 100.0% | 5.99s → 6.61s |          16 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001082400 → java.lang.invoke.LambdaForm$MH.0x0000009001082400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |     Delta |      % |          Time | Contentions | Callee                                           | Location                           |
| -----: | --------: | -----: | ------------: | ----------: | ------------------------------------------------ | ---------------------------------- |
| +10.3% | +616.73ms | 100.0% | 5.99s → 6.61s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |     Delta |      % |          Time | Contentions | Callee                         | Location                                          |
| -----: | --------: | -----: | ------------: | ----------: | ------------------------------ | ------------------------------------------------- |
| +10.3% | +616.73ms | 100.0% | 5.99s → 6.61s |          16 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |     Delta |      % |          Time | Contentions | Callee                     | Location                                          |
| -----: | --------: | -----: | ------------: | ----------: | -------------------------- | ------------------------------------------------- |
| +10.3% | +616.73ms | 100.0% | 5.99s → 6.61s |          16 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |           % |            Time | Contentions | Callee                                                    | Location                                      |
| -----: | --------: | ----------: | --------------: | ----------: | --------------------------------------------------------- | --------------------------------------------- |
|  +9.9% | +597.65ms |      100.0% |   6.05s → 6.64s |     20 → 19 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
|    new |  +24.70ms | 0.0% → 0.4% |    0ms → 24.7ms |       0 → 2 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| +47.5% |  +11.83ms | 0.4% → 0.6% | 24.9ms → 36.7ms |       2 → 3 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |             % |              Time | Contentions | Callee            | Location                                 |
| -----: | --------: | ------------: | ----------------: | ----------: | ----------------- | ---------------------------------------- |
| +39.7% | +401.57ms | 72.7% → 71.5% |     1.01s → 1.41s |     39 → 54 | `park()`          | `java.util.concurrent.locks.LockSupport` |
| +48.1% | +183.29ms | 27.3% → 28.5% | 381.0ms → 564.3ms |     17 → 15 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |             % |            Time | Contentions | Callee                                   | Location                            |
| -----: | --------: | ------------: | --------------: | ----------: | ---------------------------------------- | ----------------------------------- |
| +42.0% | +584.86ms | 96.1% → 98.2% |   1.39s → 1.97s |     56 → 69 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |
| -34.2% |  -19.09ms |   3.9% → 1.8% | 55.8ms → 36.7ms |       4 → 3 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |     Delta |      % |          Time | Contentions | Callee                              | Location                            |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------------------- | ----------------------------------- |
| +39.0% | +565.77ms | 100.0% | 1.44s → 2.01s |     60 → 72 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

| Change |     Delta |      % |              Time | Contentions | Callee                | Location                   |
| -----: | --------: | -----: | ----------------: | ----------: | --------------------- | -------------------------- |
| +48.1% | +183.29ms | 100.0% | 381.0ms → 564.3ms |     17 → 15 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |    Delta |             % |         Time | Contentions | Callee     | Location                            |
| -----: | -------: | ------------: | -----------: | ----------: | ---------- | ----------------------------------- |
|    new | +24.70ms | 0.0% → 100.0% | 0ms → 24.7ms |       0 → 2 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |    Delta |      % |            Time | Contentions | Callee     | Location                            |
| -----: | -------: | -----: | --------------: | ----------: | ---------- | ----------------------------------- |
| +47.5% | +11.83ms | 100.0% | 24.9ms → 36.7ms |       2 → 3 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |   Delta |             % |        Time | Contentions | Callee                | Location                                    |
| ------: | ------: | ------------: | ----------: | ----------: | --------------------- | ------------------------------------------- |
| removed | -5.995s | 100.0% → 0.0% | 5.99s → 0ms |      16 → 0 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |   Delta |             % |        Time | Contentions | Callee               | Location                                  |
| ------: | ------: | ------------: | ----------: | ----------: | -------------------- | ----------------------------------------- |
| removed | -5.995s | 100.0% → 0.0% | 5.99s → 0ms |      16 → 0 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|  Change |    Delta |             % |         Time | Contentions | Callee     | Location                            |
| ------: | -------: | ------------: | -----------: | ----------: | ---------- | ----------------------------------- |
| removed | -24.89ms | 100.0% → 0.0% | 24.9ms → 0ms |       2 → 0 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |    Delta |             % |         Time | Contentions | Callee     | Location                            |
| ------: | -------: | ------------: | -----------: | ----------: | ---------- | ----------------------------------- |
| removed | -24.89ms | 100.0% → 0.0% | 24.9ms → 0ms |       2 → 0 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |    Delta |             % |         Time | Contentions | Callee          | Location                                               |
| ------: | -------: | ------------: | -----------: | ----------: | --------------- | ------------------------------------------------------ |
| removed | -24.89ms | 100.0% → 0.0% | 24.9ms → 0ms |       2 → 0 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |    Delta |             % |         Time | Contentions | Callee                     | Location                                               |
| ------: | -------: | ------------: | -----------: | ----------: | -------------------------- | ------------------------------------------------------ |
| removed | -24.89ms | 100.0% → 0.0% | 24.9ms → 0ms |       2 → 0 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| removed | -24.89ms | 100.0% → 0.0% | 24.9ms → 0ms |       2 → 0 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |    Delta |      % |            Time | Contentions | Callee                 | Location                            |
| -----: | -------: | -----: | --------------: | ----------: | ---------------------- | ----------------------------------- |
| -34.2% | -19.09ms | 100.0% | 55.8ms → 36.7ms |       4 → 3 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change |    Delta |            % |            Time | Contentions | Callee              | Location                                               |
| ------: | -------: | -----------: | --------------: | ----------: | ------------------- | ------------------------------------------------------ |
| removed | -24.89ms | 44.6% → 0.0% |    24.9ms → 0ms |       2 → 0 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -34.2% | -19.09ms |       100.0% | 55.8ms → 36.7ms |       4 → 3 | `join()`            | `java.util.concurrent.ForkJoinTask`                    |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |    Delta |      % |            Time | Contentions | Callee      | Location                                               |
| -----: | -------: | -----: | --------------: | ----------: | ----------- | ------------------------------------------------------ |
| -34.2% | -19.09ms | 100.0% | 55.8ms → 36.7ms |       4 → 3 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change |    Delta |            % |            Time | Contentions | Callee   | Location                                            |
| ------: | -------: | -----------: | --------------: | ----------: | -------- | --------------------------------------------------- |
|  -34.2% | -19.09ms |       100.0% | 55.8ms → 36.7ms |       4 → 3 | `exec()` | `java.util.concurrent.RecursiveTask`                |
| removed | -14.10ms | 25.3% → 0.0% |    14.1ms → 0ms |       1 → 0 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |    Delta |      % |            Time | Contentions | Callee     | Location                            |
| -----: | -------: | -----: | --------------: | ----------: | ---------- | ----------------------------------- |
| -34.2% | -19.09ms | 100.0% | 55.8ms → 36.7ms |       4 → 3 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |    Delta |      % |            Time | Contentions | Callee                                               | Location                                      |
| -----: | -------: | -----: | --------------: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| -34.2% | -19.09ms | 100.0% | 55.8ms → 36.7ms |       4 → 3 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |    Delta |             % |         Time | Contentions | Callee     | Location                            |
| ------: | -------: | ------------: | -----------: | ----------: | ---------- | ----------------------------------- |
| removed | -14.10ms | 100.0% → 0.0% | 14.1ms → 0ms |       1 → 0 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0`)

|  Change |    Delta |             % |         Time | Contentions | Callee                         | Location                                    |
| ------: | -------: | ------------: | -----------: | ----------: | ------------------------------ | ------------------------------------------- |
| removed | -14.10ms | 100.0% → 0.0% | 14.1ms → 0ms |       1 → 0 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|  Change |    Delta |             % |         Time | Contentions | Callee   | Location                                                               |
| ------: | -------: | ------------: | -----------: | ----------: | -------- | ---------------------------------------------------------------------- |
| removed | -14.10ms | 100.0% → 0.0% | 14.1ms → 0ms |       1 → 0 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0` |

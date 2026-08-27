# Lock contention profile

Blocked 2.7ms over 19 contentions (140.7µs per contention).

| Category         |     % |   Time | Contentions |
| ---------------- | ----: | -----: | ----------: |
| Standard library | 99.6% |  2.7ms |          18 |
| Ours             |  0.4% | 10.3µs |           1 |

## Hottest functions

### Self time

Functions ranked by time blocked directly in the function body, excluding callees.

|     % |   Time | Contentions | Function                                    | Location                                               |
| ----: | -----: | ----------: | ------------------------------------------- | ------------------------------------------------------ |
| 72.9% |  1.9ms |           4 | `loadClass(String, boolean)`                | `java.lang.ClassLoader`                                |
| 10.5% |  0.3ms |           5 | `mapToObj(DoubleFunction, int)`             | `java.util.stream.DoublePipeline`                      |
|  7.7% |  0.2ms |           5 | `opWrapSink(int, Sink)`                     | `java.util.stream.DoublePipeline$1`                    |
|  6.2% |  0.2ms |           1 | `<init>(boolean)`                           | `java.util.concurrent.locks.ReentrantReadWriteLock`    |
|  1.0% | 26.5µs |           1 | `loadClassOrNull(String, boolean)`          | `jdk.internal.loader.BuiltinClassLoader`               |
|  0.8% | 21.9µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files`                                  |
|  0.5% | 12.3µs |           1 | `<clinit>()`                                | `java.nio.file.FileVisitResult`                        |
|  0.4% | 10.3µs |           1 | `average(List)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

#### Categories

##### Standard library

|     % |   Time | Contentions | Function                                    | Location                                            |
| ----: | -----: | ----------: | ------------------------------------------- | --------------------------------------------------- |
| 72.9% |  1.9ms |           4 | `loadClass(String, boolean)`                | `java.lang.ClassLoader`                             |
| 10.5% |  0.3ms |           5 | `mapToObj(DoubleFunction, int)`             | `java.util.stream.DoublePipeline`                   |
|  7.7% |  0.2ms |           5 | `opWrapSink(int, Sink)`                     | `java.util.stream.DoublePipeline$1`                 |
|  6.2% |  0.2ms |           1 | `<init>(boolean)`                           | `java.util.concurrent.locks.ReentrantReadWriteLock` |
|  1.0% | 26.5µs |           1 | `loadClassOrNull(String, boolean)`          | `jdk.internal.loader.BuiltinClassLoader`            |
|  0.8% | 21.9µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files`                               |
|  0.5% | 12.3µs |           1 | `<clinit>()`                                | `java.nio.file.FileVisitResult`                     |

#### Lines

Lines ranked by contribution to each function's self time.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Location                    |
| -----: | ----: | ----------: | --------------------------- |
| 100.0% | 1.9ms |           4 | `java.lang.ClassLoader:573` |

##### `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`)

|      % |  Time | Contentions | Location                              |
| -----: | ----: | ----------: | ------------------------------------- |
| 100.0% | 0.3ms |           5 | `java.util.stream.DoublePipeline:170` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

|      % |  Time | Contentions | Location                                |
| -----: | ----: | ----------: | --------------------------------------- |
| 100.0% | 0.2ms |           5 | `java.util.stream.DoublePipeline$1:173` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

|      % |  Time | Contentions | Location                                                |
| -----: | ----: | ----------: | ------------------------------------------------------- |
| 100.0% | 0.2ms |           1 | `java.util.concurrent.locks.ReentrantReadWriteLock:241` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |   Time | Contentions | Location                                     |
| -----: | -----: | ----------: | -------------------------------------------- |
| 100.0% | 26.5µs |           1 | `jdk.internal.loader.BuiltinClassLoader:651` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

|      % |   Time | Contentions | Location                   |
| -----: | -----: | ----------: | -------------------------- |
| 100.0% | 21.9µs |           1 | `java.nio.file.Files:2794` |

##### `<clinit>()` (`java.nio.file.FileVisitResult`)

|      % |   Time | Contentions | Location                           |
| -----: | -----: | ----------: | ---------------------------------- |
| 100.0% | 12.3µs |           1 | `java.nio.file.FileVisitResult:53` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |   Time | Contentions | Location                                                   |
| -----: | -----: | ----------: | ---------------------------------------------------------- |
| 100.0% | 10.3µs |           1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:332` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Caller              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 1.9ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`)

|      % |  Time | Contentions | Caller    | Location                          |
| -----: | ----: | ----------: | --------- | --------------------------------- |
| 100.0% | 0.3ms |           5 | `boxed()` | `java.util.stream.DoublePipeline` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

|      % |  Time | Contentions | Caller           | Location                            |
| -----: | ----: | ----------: | ---------------- | ----------------------------------- |
| 100.0% | 0.2ms |           5 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

|      % |  Time | Contentions | Caller                                           | Location                         |
| -----: | ----: | ----------: | ------------------------------------------------ | -------------------------------- |
| 100.0% | 0.2ms |           1 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |   Time | Contentions | Caller                       | Location                                 |
| -----: | -----: | ----------: | ---------------------------- | ---------------------------------------- |
| 100.0% | 26.5µs |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

|      % |   Time | Contentions | Caller                            | Location              |
| -----: | -----: | ----------: | --------------------------------- | --------------------- |
| 100.0% | 21.9µs |           1 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files` |

##### `<clinit>()` (`java.nio.file.FileVisitResult`)

|      % |   Time | Contentions | Caller                                           | Location                          |
| -----: | -----: | ----------: | ------------------------------------------------ | --------------------------------- |
| 100.0% | 12.3µs |           1 | `preVisitDirectory(Object, BasicFileAttributes)` | `java.nio.file.SimpleFileVisitor` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |   Time | Contentions | Caller                     | Location                                               |
| -----: | -----: | ----------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 10.3µs |           1 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

### Total time

Functions ranked by total time blocked in the function and all its callees.

|     % |  Time | Contentions | Function                                             | Location                                               |
| ----: | ----: | ----------: | ---------------------------------------------------- | ------------------------------------------------------ |
| 91.5% | 2.4ms |          15 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 91.5% | 2.4ms |          15 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 91.5% | 2.4ms |          15 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |
| 91.5% | 2.4ms |          15 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                   |
| 91.5% | 2.4ms |          15 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                    |
| 91.5% | 2.4ms |          15 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
| 91.5% | 2.4ms |          15 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                    |
| 91.5% | 2.4ms |          15 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                    |
| 91.5% | 2.4ms |          15 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`            |
| 73.9% | 2.0ms |           5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                                |
| 73.3% | 2.0ms |           5 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 72.9% | 1.9ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                                |
| 58.1% | 1.6ms |           9 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
| 58.1% | 1.6ms |           9 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                    |
| 58.1% | 1.6ms |           9 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                    |
| 18.2% | 0.5ms |          10 | `boxed(double[])`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 10.5% | 0.3ms |           5 | `mapToObj(DoubleFunction, int)`                      | `java.util.stream.DoublePipeline`                      |
| 10.5% | 0.3ms |           5 | `boxed()`                                            | `java.util.stream.DoublePipeline`                      |
|  8.5% | 0.2ms |           4 | `deleteRecursively(Path, boolean)`                   | `org.renaissance.core.DirUtils`                        |
|  8.5% | 0.2ms |           4 | `deleteRecursively(Path)`                            | `org.renaissance.core.DirUtils`                        |

#### Categories

##### Standard library

|     % |  Time | Contentions | Function                                             | Location                                      |
| ----: | ----: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| 91.5% | 2.4ms |          15 | `exec()`                                             | `java.util.concurrent.RecursiveTask`          |
| 91.5% | 2.4ms |          15 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`           |
| 91.5% | 2.4ms |          15 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 91.5% | 2.4ms |          15 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`           |
| 91.5% | 2.4ms |          15 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`           |
| 91.5% | 2.4ms |          15 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`   |
| 73.9% | 2.0ms |           5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                       |
| 72.9% | 1.9ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                       |
| 58.1% | 1.6ms |           9 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 58.1% | 1.6ms |           9 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`           |
| 58.1% | 1.6ms |           9 | `join()`                                             | `java.util.concurrent.ForkJoinTask`           |
| 10.5% | 0.3ms |           5 | `mapToObj(DoubleFunction, int)`                      | `java.util.stream.DoublePipeline`             |
| 10.5% | 0.3ms |           5 | `boxed()`                                            | `java.util.stream.DoublePipeline`             |
|  8.5% | 0.2ms |           4 | `runWith(Object, Runnable)`                          | `java.lang.Thread`                            |
|  8.5% | 0.2ms |           4 | `run()`                                              | `java.lang.Thread`                            |
|  7.7% | 0.2ms |           5 | `opWrapSink(int, Sink)`                              | `java.util.stream.DoublePipeline$1`           |
|  7.7% | 0.2ms |           5 | `wrapSink(Sink)`                                     | `java.util.stream.AbstractPipeline`           |
|  7.7% | 0.2ms |           5 | `wrapAndCopyInto(Sink, Spliterator)`                 | `java.util.stream.AbstractPipeline`           |
|  7.7% | 0.2ms |           5 | `evaluate(Spliterator, boolean, IntFunction)`        | `java.util.stream.AbstractPipeline`           |
|  7.7% | 0.2ms |           5 | `evaluateToArrayNode(IntFunction)`                   | `java.util.stream.AbstractPipeline`           |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % |  Time | Contentions | Callee            | Location                                               |
| ----: | ----: | ----------: | ----------------- | ------------------------------------------------------ |
| 80.1% | 2.0ms |           5 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 19.9% | 0.5ms |          10 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Callee                     | Location                                               |
| -----: | ----: | ----------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 2.4ms |          15 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% | 2.4ms |          15 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |  Time | Contentions | Callee              | Location                                               |
| -----: | ----: | ----------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 2.4ms |          15 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  63.5% | 1.6ms |           9 | `join()`            | `java.util.concurrent.ForkJoinTask`                    |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |  Time | Contentions | Callee      | Location                                               |
| -----: | ----: | ----------: | ----------- | ------------------------------------------------------ |
| 100.0% | 2.4ms |          15 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time | Contentions | Callee   | Location                                            |
| -----: | -----: | ----------: | -------- | --------------------------------------------------- |
| 100.0% |  2.4ms |          15 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|   0.4% | 10.5µs |           2 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 2.4ms |          15 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Callee                                               | Location                                      |
| -----: | ----: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 2.4ms |          15 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Callee                                   | Location                            |
| -----: | ----: | ----------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 2.4ms |          15 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % |  Time | Contentions | Callee                              | Location                            |
| -----: | ----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 2.4ms |          15 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|     % |   Time | Contentions | Callee                       | Location                                          |
| ----: | -----: | ----------: | ---------------------------- | ------------------------------------------------- |
| 98.7% |  1.9ms |           4 | `loadClass(String, boolean)` | `java.lang.ClassLoader`                           |
|  1.3% | 26.5µs |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % |  Time | Contentions | Callee              | Location                |
| ----: | ----: | ----------: | ------------------- | ----------------------- |
| 99.5% | 1.9ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 1.6ms |           9 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee                                    | Location                                      |
| -----: | ----: | ----------: | ----------------------------------------- | --------------------------------------------- |
| 100.0% | 1.6ms |           9 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee                 | Location                            |
| -----: | ----: | ----------: | ---------------------- | ----------------------------------- |
| 100.0% | 1.6ms |           9 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % |  Time | Contentions | Callee                 | Location                             |
| ----: | ----: | ----------: | ---------------------- | ------------------------------------ |
| 57.7% | 0.3ms |           5 | `boxed()`              | `java.util.stream.DoublePipeline`    |
| 42.3% | 0.2ms |           5 | `toArray(IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `boxed()` (`java.util.stream.DoublePipeline`)

|      % |  Time | Contentions | Callee                          | Location                          |
| -----: | ----: | ----------: | ------------------------------- | --------------------------------- |
| 100.0% | 0.3ms |           5 | `mapToObj(DoubleFunction, int)` | `java.util.stream.DoublePipeline` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

|     % |   Time | Contentions | Callee                            | Location                |
| ----: | -----: | ----------: | --------------------------------- | ----------------------- |
| 88.3% |  0.2ms |           3 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files`   |
| 11.7% | 26.5µs |           1 | `loadClass(String)`               | `java.lang.ClassLoader` |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Callee                             | Location                        |
| -----: | ----: | ----------: | ---------------------------------- | ------------------------------- |
| 100.0% | 0.2ms |           4 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee  | Location                                                   |
| -----: | ----: | ----------: | ------- | ---------------------------------------------------------- |
| 100.0% | 0.2ms |           4 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68` |

##### `run()` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 0.2ms |           4 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|      % |  Time | Contentions | Callee                  | Location                            |
| -----: | ----: | ----------: | ----------------------- | ----------------------------------- |
| 100.0% | 0.2ms |           5 | `opWrapSink(int, Sink)` | `java.util.stream.DoublePipeline$1` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |  Time | Contentions | Callee           | Location                            |
| -----: | ----: | ----------: | ---------------- | ----------------------------------- |
| 100.0% | 0.2ms |           5 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`)

|      % |  Time | Contentions | Callee                               | Location                            |
| -----: | ----: | ----------: | ------------------------------------ | ----------------------------------- |
| 100.0% | 0.2ms |           5 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluateToArrayNode(IntFunction)` (`java.util.stream.AbstractPipeline`)

|      % |  Time | Contentions | Callee                                        | Location                            |
| -----: | ----: | ----------: | --------------------------------------------- | ----------------------------------- |
| 100.0% | 0.2ms |           5 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline` |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame.

|     % |   Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----: | -----: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 48.9% |  1.3ms |           2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 24.0% |  0.6ms |           2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  6.2% |  0.2ms |           1 | `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`) ← `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`) ← `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  5.3% |  0.1ms |           2 | `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`) ← `boxed()` ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  5.2% |  0.1ms |           2 | `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`) ← `boxed()` ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  4.1% |  0.1ms |           2 | `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`) ← `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  3.2% |  0.1ms |           2 | `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`) ← `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.0% | 26.5µs |           1 | `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String)` (`java.lang.ClassLoader`) ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.8% | 21.9µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.5% | 12.3µs |           1 | `<clinit>()` (`java.nio.file.FileVisitResult`) ← `preVisitDirectory(Object, BasicFileAttributes)` (`java.nio.file.SimpleFileVisitor`) ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.4% | 10.3µs |           1 | `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.4% |  9.8µs |           1 | `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`) ← `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
| <0.1% |  0.7µs |           1 | `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`) ← `boxed()` ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                    |

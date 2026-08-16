# Lock contention profile

Blocked 1.9ms over 19 contentions (98.9µs per contention).

| Category         |      % |  Time | Contentions |
| ---------------- | -----: | ----: | ----------: |
| Standard library | 100.0% | 1.9ms |          19 |

## Hottest functions

### Self time

Functions ranked by time blocked directly in the function body, excluding callees.

#### Categories

##### Standard library

|     % |   Time | Contentions | Function                                         | Location                                            |
| ----: | -----: | ----------: | ------------------------------------------------ | --------------------------------------------------- |
| 68.9% |  1.3ms |           5 | `loadClass(String, boolean)`                     | `java.lang.ClassLoader`                             |
| 16.7% |  0.3ms |           2 | `loadClassOrNull(String, boolean)`               | `jdk.internal.loader.BuiltinClassLoader`            |
|  6.4% |  0.1ms |           5 | `opWrapSink(int, Sink)`                          | `java.util.stream.DoublePipeline$1`                 |
|  2.6% | 47.9µs |           1 | `<init>(boolean)`                                | `java.util.concurrent.locks.ReentrantReadWriteLock` |
|  1.4% | 26.3µs |           1 | `getDeclaredMethods0(boolean)`                   | `java.lang.Class`                                   |
|  1.3% | 25.0µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)`      | `java.nio.file.Files`                               |
|  1.2% | 22.7µs |           1 | `iterator(DirectoryStream)`                      | `sun.nio.fs.UnixDirectoryStream`                    |
|  1.1% | 20.4µs |           1 | `doubleStream(Spliterator$OfDouble, boolean)`    | `java.util.stream.StreamSupport`                    |
|  0.2% |  4.6µs |           1 | `preVisitDirectory(Object, BasicFileAttributes)` | `java.nio.file.SimpleFileVisitor`                   |
|  0.2% |  4.5µs |           1 | `<clinit>()`                                     | `java.nio.file.FileTreeWalker$EventType`            |

#### Lines

Lines ranked by contribution to each function's self time.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Location                    |
| -----: | ----: | ----------: | --------------------------- |
| 100.0% | 1.3ms |           5 | `java.lang.ClassLoader:573` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Location                                     |
| -----: | ----: | ----------: | -------------------------------------------- |
| 100.0% | 0.3ms |           2 | `jdk.internal.loader.BuiltinClassLoader:651` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

|      % |  Time | Contentions | Location                                |
| -----: | ----: | ----------: | --------------------------------------- |
| 100.0% | 0.1ms |           5 | `java.util.stream.DoublePipeline$1:173` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

|      % |   Time | Contentions | Location                                                |
| -----: | -----: | ----------: | ------------------------------------------------------- |
| 100.0% | 47.9µs |           1 | `java.util.concurrent.locks.ReentrantReadWriteLock:241` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

|      % |   Time | Contentions | Location                   |
| -----: | -----: | ----------: | -------------------------- |
| 100.0% | 25.0µs |           1 | `java.nio.file.Files:2791` |

##### `iterator(DirectoryStream)` (`sun.nio.fs.UnixDirectoryStream`)

|      % |   Time | Contentions | Location                             |
| -----: | -----: | ----------: | ------------------------------------ |
| 100.0% | 22.7µs |           1 | `sun.nio.fs.UnixDirectoryStream:119` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

|      % |   Time | Contentions | Location                             |
| -----: | -----: | ----------: | ------------------------------------ |
| 100.0% | 20.4µs |           1 | `java.util.stream.StreamSupport:274` |

##### `preVisitDirectory(Object, BasicFileAttributes)` (`java.nio.file.SimpleFileVisitor`)

|      % |  Time | Contentions | Location                             |
| -----: | ----: | ----------: | ------------------------------------ |
| 100.0% | 4.6µs |           1 | `java.nio.file.SimpleFileVisitor:62` |

##### `<clinit>()` (`java.nio.file.FileTreeWalker$EventType`)

|      % |  Time | Contentions | Location                                     |
| -----: | ----: | ----------: | -------------------------------------------- |
| 100.0% | 4.5µs |           1 | `java.nio.file.FileTreeWalker$EventType:121` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Caller              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 1.3ms |           5 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Caller                       | Location                                 |
| -----: | ----: | ----------: | ---------------------------- | ---------------------------------------- |
| 100.0% | 0.3ms |           2 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

|      % |  Time | Contentions | Caller           | Location                            |
| -----: | ----: | ----------: | ---------------- | ----------------------------------- |
| 100.0% | 0.1ms |           5 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

|      % |   Time | Contentions | Caller                                           | Location                         |
| -----: | -----: | ----------: | ------------------------------------------------ | -------------------------------- |
| 100.0% | 47.9µs |           1 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream` |

##### `getDeclaredMethods0(boolean)` (`java.lang.Class`)

|      % |   Time | Contentions | Caller                               | Location          |
| -----: | -----: | ----------: | ------------------------------------ | ----------------- |
| 100.0% | 26.3µs |           1 | `privateGetDeclaredMethods(boolean)` | `java.lang.Class` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

|      % |   Time | Contentions | Caller                            | Location              |
| -----: | -----: | ----------: | --------------------------------- | --------------------- |
| 100.0% | 25.0µs |           1 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files` |

##### `iterator(DirectoryStream)` (`sun.nio.fs.UnixDirectoryStream`)

|      % |   Time | Contentions | Caller       | Location                         |
| -----: | -----: | ----------: | ------------ | -------------------------------- |
| 100.0% | 22.7µs |           1 | `iterator()` | `sun.nio.fs.UnixDirectoryStream` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

|      % |   Time | Contentions | Caller                       | Location           |
| -----: | -----: | ----------: | ---------------------------- | ------------------ |
| 100.0% | 20.4µs |           1 | `stream(double[], int, int)` | `java.util.Arrays` |

##### `preVisitDirectory(Object, BasicFileAttributes)` (`java.nio.file.SimpleFileVisitor`)

|      % |  Time | Contentions | Caller                                      | Location              |
| -----: | ----: | ----------: | ------------------------------------------- | --------------------- |
| 100.0% | 4.6µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `<clinit>()` (`java.nio.file.FileTreeWalker$EventType`)

|      % |  Time | Contentions | Caller                          | Location                       |
| -----: | ----: | ----------: | ------------------------------- | ------------------------------ |
| 100.0% | 4.5µs |           1 | `visit(Path, boolean, boolean)` | `java.nio.file.FileTreeWalker` |

### Total time

Functions ranked by total time blocked in the function and all its callees.

|     % |  Time | Contentions | Function                                             | Location                                                   |
| ----: | ----: | ----------: | ---------------------------------------------------- | ---------------------------------------------------------- |
| 85.6% | 1.6ms |           7 | `loadClass(String)`                                  | `java.lang.ClassLoader`                                    |
| 76.3% | 1.4ms |          11 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 76.3% | 1.4ms |          11 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 76.3% | 1.4ms |          11 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| 76.3% | 1.4ms |          11 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                       |
| 76.3% | 1.4ms |          11 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                        |
| 76.3% | 1.4ms |          11 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 76.3% | 1.4ms |          11 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                        |
| 76.3% | 1.4ms |          11 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                        |
| 76.3% | 1.4ms |          11 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                |
| 68.9% | 1.3ms |           5 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                                    |
| 67.8% | 1.3ms |           4 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 42.7% | 0.8ms |           5 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 42.7% | 0.8ms |           5 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                        |
| 42.7% | 0.8ms |           5 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                        |
| 23.7% | 0.4ms |           8 | `deleteRecursively(Path, boolean)`                   | `org.renaissance.core.DirUtils`                            |
| 23.7% | 0.4ms |           8 | `deleteRecursively(Path)`                            | `org.renaissance.core.DirUtils`                            |
| 23.7% | 0.4ms |           8 | `lambda$createScratchDirectory$1(Path)`              | `org.renaissance.core.DirUtils`                            |
| 23.7% | 0.4ms |           8 | `run()`                                              | `org.renaissance.core.DirUtils$$Lambda.0x000000f801003a68` |
| 23.7% | 0.4ms |           8 | `runWith(Object, Runnable)`                          | `java.lang.Thread`                                         |

#### Categories

##### Standard library

|     % |  Time | Contentions | Function                                             | Location                                          |
| ----: | ----: | ----------: | ---------------------------------------------------- | ------------------------------------------------- |
| 85.6% | 1.6ms |           7 | `loadClass(String)`                                  | `java.lang.ClassLoader`                           |
| 76.3% | 1.4ms |          11 | `exec()`                                             | `java.util.concurrent.RecursiveTask`              |
| 76.3% | 1.4ms |          11 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`               |
| 76.3% | 1.4ms |          11 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`     |
| 76.3% | 1.4ms |          11 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`               |
| 76.3% | 1.4ms |          11 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`               |
| 76.3% | 1.4ms |          11 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`       |
| 68.9% | 1.3ms |           5 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                           |
| 42.7% | 0.8ms |           5 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`     |
| 42.7% | 0.8ms |           5 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`               |
| 42.7% | 0.8ms |           5 | `join()`                                             | `java.util.concurrent.ForkJoinTask`               |
| 23.7% | 0.4ms |           8 | `runWith(Object, Runnable)`                          | `java.lang.Thread`                                |
| 23.7% | 0.4ms |           8 | `run()`                                              | `java.lang.Thread`                                |
| 16.7% | 0.3ms |           2 | `loadClassOrNull(String, boolean)`                   | `jdk.internal.loader.BuiltinClassLoader`          |
| 16.7% | 0.3ms |           2 | `loadClass(String, boolean)`                         | `jdk.internal.loader.BuiltinClassLoader`          |
| 16.7% | 0.3ms |           2 | `loadClass(String, boolean)`                         | `jdk.internal.loader.ClassLoaders$AppClassLoader` |
|  7.2% | 0.1ms |           7 | `walkFileTree(Path, FileVisitor)`                    | `java.nio.file.Files`                             |
|  6.4% | 0.1ms |           5 | `opWrapSink(int, Sink)`                              | `java.util.stream.DoublePipeline$1`               |
|  6.4% | 0.1ms |           5 | `wrapSink(Sink)`                                     | `java.util.stream.AbstractPipeline`               |
|  6.4% | 0.1ms |           5 | `wrapAndCopyInto(Sink, Spliterator)`                 | `java.util.stream.AbstractPipeline`               |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `loadClass(String)` (`java.lang.ClassLoader`)

|     % |  Time | Contentions | Callee                       | Location                                          |
| ----: | ----: | ----------: | ---------------------------- | ------------------------------------------------- |
| 80.4% | 1.3ms |           5 | `loadClass(String, boolean)` | `java.lang.ClassLoader`                           |
| 19.6% | 0.3ms |           2 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % |  Time | Contentions | Callee            | Location                                               |
| ----: | ----: | ----------: | ----------------- | ------------------------------------------------------ |
| 88.9% | 1.3ms |           4 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 11.1% | 0.2ms |           7 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Callee                     | Location                                               |
| -----: | ----: | ----------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 1.4ms |          11 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% | 1.4ms |          11 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |  Time | Contentions | Callee              | Location                                               |
| -----: | ----: | ----------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 1.4ms |          11 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  55.9% | 0.8ms |           5 | `join()`            | `java.util.concurrent.ForkJoinTask`                    |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |  Time | Contentions | Callee      | Location                                               |
| -----: | ----: | ----------: | ----------- | ------------------------------------------------------ |
| 100.0% | 1.4ms |          11 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time | Contentions | Callee   | Location                                            |
| -----: | -----: | ----------: | -------- | --------------------------------------------------- |
| 100.0% |  1.4ms |          11 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|   1.9% | 27.0µs |           1 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 1.4ms |          11 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Callee                                               | Location                                      |
| -----: | ----: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 1.4ms |          11 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Callee                                   | Location                            |
| -----: | ----: | ----------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 1.4ms |          11 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % |  Time | Contentions | Callee                              | Location                            |
| -----: | ----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 1.4ms |          11 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Callee              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 1.3ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 0.8ms |           5 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee                                    | Location                                      |
| -----: | ----: | ----------: | ----------------------------------------- | --------------------------------------------- |
| 100.0% | 0.8ms |           5 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee                 | Location                            |
| -----: | ----: | ----------: | ---------------------- | ----------------------------------- |
| 100.0% | 0.8ms |           5 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

|     % |  Time | Contentions | Callee                            | Location                |
| ----: | ----: | ----------: | --------------------------------- | ----------------------- |
| 69.7% | 0.3ms |           1 | `loadClass(String)`               | `java.lang.ClassLoader` |
| 30.3% | 0.1ms |           7 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files`   |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Callee                             | Location                        |
| -----: | ----: | ----------: | ---------------------------------- | ------------------------------- |
| 100.0% | 0.4ms |           8 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Callee                    | Location                        |
| -----: | ----: | ----------: | ------------------------- | ------------------------------- |
| 100.0% | 0.4ms |           8 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000f801003a68`)

|      % |  Time | Contentions | Callee                                  | Location                        |
| -----: | ----: | ----------: | --------------------------------------- | ------------------------------- |
| 100.0% | 0.4ms |           8 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee  | Location                                                   |
| -----: | ----: | ----------: | ------- | ---------------------------------------------------------- |
| 100.0% | 0.4ms |           8 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x000000f801003a68` |

##### `run()` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 0.4ms |           8 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Callee                             | Location                                 |
| -----: | ----: | ----------: | ---------------------------------- | ---------------------------------------- |
| 100.0% | 0.3ms |           2 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`)

|      % |  Time | Contentions | Callee                       | Location                                 |
| -----: | ----: | ----------: | ---------------------------- | ---------------------------------------- |
| 100.0% | 0.3ms |           2 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`)

|     % |   Time | Contentions | Callee                                      | Location              |
| ----: | -----: | ----------: | ------------------------------------------- | --------------------- |
| 80.6% |  0.1ms |           6 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |
| 19.4% | 26.3µs |           1 | `noneOf(Class)`                             | `java.util.EnumSet`   |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|      % |  Time | Contentions | Callee                  | Location                            |
| -----: | ----: | ----------: | ----------------------- | ----------------------------------- |
| 100.0% | 0.1ms |           5 | `opWrapSink(int, Sink)` | `java.util.stream.DoublePipeline$1` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |  Time | Contentions | Callee           | Location                            |
| -----: | ----: | ----------: | ---------------- | ----------------------------------- |
| 100.0% | 0.1ms |           5 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame.

|     % |   Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----: | -----: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 38.9% |  0.7ms |           2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 28.9% |  0.5ms |           2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 16.5% |  0.3ms |           1 | `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String)` (`java.lang.ClassLoader`) ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000f801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.6% | 49.1µs |           2 | `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`) ← `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.6% | 47.9µs |           1 | `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`) ← `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`) ← `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000f801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.3% | 43.2µs |           2 | `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`) ← `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.4% | 27.0µs |           1 | `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`) ← `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f801183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|  1.4% | 26.3µs |           1 | `getDeclaredMethods0(boolean)` (`java.lang.Class`) ← `privateGetDeclaredMethods(boolean)` ← `getMethodsRecursive(String, Class[], boolean)` ← `getMethod0(String, Class[])` ← `getMethod(String, Class[])` ← `getEnumConstantsShared()` ← `getEnumConstantsShared(Class)` (`java.lang.System$2`) ← `getUniverse(Class)` (`java.util.EnumSet`) ← `noneOf(Class)` ← `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`) ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000f801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.3% | 25.0µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000f801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.2% | 22.7µs |           1 | `iterator(DirectoryStream)` (`sun.nio.fs.UnixDirectoryStream`) ← `iterator()` ← `<init>(Path, Object, DirectoryStream)` (`java.nio.file.FileTreeWalker$DirectoryNode`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000f801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.1% | 20.4µs |           1 | `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`) ← `stream(double[], int, int)` (`java.util.Arrays`) ← `stream(double[])` ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.0% | 19.3µs |           1 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.2% |  4.6µs |           1 | `preVisitDirectory(Object, BasicFileAttributes)` (`java.nio.file.SimpleFileVisitor`) ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000f801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.2% |  4.5µs |           1 | `<clinit>()` (`java.nio.file.FileTreeWalker$EventType`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000f801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.2% |  4.1µs |           1 | `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String)` (`java.lang.ClassLoader`) ← `visitFile(Path, BasicFileAttributes)` (`org.renaissance.core.DirUtils$1`) ← `visitFile(Object, BasicFileAttributes)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000f801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

# Lock contention profile

Blocked 1.9ms over 27 contentions (69.7µs per contention).

| Category         |      % |  Time | Contentions |
| ---------------- | -----: | ----: | ----------: |
| Standard library | 100.0% | 1.9ms |          27 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 1.5ms (79.7%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 1.5ms (79.7%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       └── 1.5ms (79.7%) scan(ForkJoinPool$WorkQueue, int, int)
│           └── 1.5ms (79.7%) topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool$WorkQueue
│               └── 1.5ms (79.7%) doExec() at java.util.concurrent.ForkJoinTask
│                   └── … 1.5ms (79.7%) exec() at java.util.concurrent.RecursiveTask
│                       └── 1.5ms (79.7%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│                           └── 1.5ms (79.7%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│                               └── … 1.5ms (79.7%) computeClusterAverages() at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│                                   ├── 1.3ms (67.8%) average(List)
│                                   │   └── 1.3ms (67.8%) loadClass(String) at java.lang.ClassLoader
│                                   │       └── 1.3ms (67.8%) loadClass(String, boolean)
│                                   └── 0.2ms (12.0%) boxed(double[])
│                                       ├── 0.2ms (10.4%) boxed() at java.util.stream.DoublePipeline
│                                       │   └── 0.2ms (10.4%) mapToObj(DoubleFunction, int)
│                                       ├── … 20.4µs (1.1%) doubleStream(Spliterator$OfDouble, boolean) at java.util.stream.StreamSupport
│                                       └── … 10.0µs (0.5%) opWrapSink(int, Sink) at java.util.stream.DoublePipeline$1
└── 0.4ms (20.3%) run() at java.lang.Thread
    └── 0.4ms (20.3%) runWith(Object, Runnable)
        └── 0.4ms (20.3%) run() at org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68
            └── 0.4ms (20.3%) lambda$createScratchDirectory$1(Path) at org.renaissance.core.DirUtils
                └── 0.4ms (20.3%) deleteRecursively(Path)
                    └── 0.4ms (20.3%) deleteRecursively(Path, boolean)
                        ├── 0.3ms (16.2%) walkFileTree(Path, FileVisitor) at java.nio.file.Files
                        │   └── 0.3ms (16.2%, self 2.1%) walkFileTree(Path, Set, int, FileVisitor)
                        │       ├── 0.2ms (10.5%) walk(Path) at java.nio.file.FileTreeWalker
                        │       │   └── 0.2ms (10.5%, self 0.8%) visit(Path, boolean, boolean)
                        │       │       ├── 0.2ms (8.5%, self 0.5%) newDirectoryStream(Path) at java.nio.file.Files
                        │       │       │   ├── … 0.1ms (7.2%, self 6.6%) <init>(boolean) at java.util.concurrent.locks.ReentrantReadWriteLock
                        │       │       │   │   └── 9.8µs (0.5%) <init>() at java.util.concurrent.locks.ReentrantReadWriteLock$FairSync
                        │       │       │   │       └── 9.8µs (0.5%) <init>() at java.util.concurrent.locks.ReentrantReadWriteLock$Sync
                        │       │       │   └── 15.3µs (0.8%) <clinit>() at java.nio.file.Files$AcceptAllFilter
                        │       │       └── 22.4µs (1.2%) <clinit>() at java.nio.file.FileTreeWalker$EventType
                        │       ├── 32.0µs (1.7%, self 0.7%) preVisitDirectory(Object, BasicFileAttributes) at java.nio.file.SimpleFileVisitor
                        │       │   └── 19.7µs (1.0%) <clinit>() at java.nio.file.FileVisitResult
                        │       ├── 14.4µs (0.8%) <clinit>() at java.nio.file.Files$3
                        │       ├── 11.2µs (0.6%) <clinit>() at java.nio.file.FileTreeWalker
                        │       └── 9.2µs (0.5%) <init>(Collection, int) at java.nio.file.FileTreeWalker
                        └── … 0.1ms (4.1%) loadClass(String, boolean) at jdk.internal.loader.BuiltinClassLoader
                            └── 0.1ms (4.1%) loadClassOrNull(String, boolean)
```

## Hottest functions

### Self time

Functions with the most time blocked within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |   Time | Contentions | Function                                         | Location                                                 |
| ----: | -----: | ----------: | ------------------------------------------------ | -------------------------------------------------------- |
| 67.8% |  1.3ms |           4 | `loadClass(String, boolean)`                     | `java.lang.ClassLoader`                                  |
| 10.4% |  0.2ms |           3 | `mapToObj(DoubleFunction, int)`                  | `java.util.stream.DoublePipeline`                        |
|  6.6% |  0.1ms |           3 | `<init>(boolean)`                                | `java.util.concurrent.locks.ReentrantReadWriteLock`      |
|  4.1% |  0.1ms |           1 | `loadClassOrNull(String, boolean)`               | `jdk.internal.loader.BuiltinClassLoader`                 |
|  2.1% | 39.1µs |           2 | `walkFileTree(Path, Set, int, FileVisitor)`      | `java.nio.file.Files`                                    |
|  1.2% | 22.4µs |           1 | `<clinit>()`                                     | `java.nio.file.FileTreeWalker$EventType`                 |
|  1.1% | 20.4µs |           2 | `doubleStream(Spliterator$OfDouble, boolean)`    | `java.util.stream.StreamSupport`                         |
|  1.0% | 19.7µs |           1 | `<clinit>()`                                     | `java.nio.file.FileVisitResult`                          |
|  0.8% | 15.8µs |           1 | `visit(Path, boolean, boolean)`                  | `java.nio.file.FileTreeWalker`                           |
|  0.8% | 15.3µs |           1 | `<clinit>()`                                     | `java.nio.file.Files$AcceptAllFilter`                    |
|  0.8% | 14.4µs |           1 | `<clinit>()`                                     | `java.nio.file.Files$3`                                  |
|  0.7% | 12.4µs |           1 | `preVisitDirectory(Object, BasicFileAttributes)` | `java.nio.file.SimpleFileVisitor`                        |
|  0.6% | 11.2µs |           1 | `<clinit>()`                                     | `java.nio.file.FileTreeWalker`                           |
|  0.5% | 10.0µs |           1 | `newDirectoryStream(Path)`                       | `java.nio.file.Files`                                    |
|  0.5% | 10.0µs |           2 | `opWrapSink(int, Sink)`                          | `java.util.stream.DoublePipeline$1`                      |
|  0.5% |  9.8µs |           1 | `<init>()`                                       | `java.util.concurrent.locks.ReentrantReadWriteLock$Sync` |
|  0.5% |  9.2µs |           1 | `<init>(Collection, int)`                        | `java.nio.file.FileTreeWalker`                           |

#### Lines

Lines with the largest contribution to each function's self time.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Location                    |
| -----: | ----: | ----------: | --------------------------- |
| 100.0% | 1.3ms |           4 | `java.lang.ClassLoader:573` |

##### `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`)

|      % |  Time | Contentions | Location                              |
| -----: | ----: | ----------: | ------------------------------------- |
| 100.0% | 0.2ms |           3 | `java.util.stream.DoublePipeline:170` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

|     % |   Time | Contentions | Location                                                |
| ----: | -----: | ----------: | ------------------------------------------------------- |
| 65.3% |  0.1ms |           1 | `java.util.concurrent.locks.ReentrantReadWriteLock:241` |
| 25.1% | 31.4µs |           1 | `java.util.concurrent.locks.ReentrantReadWriteLock:242` |
|  9.6% | 12.0µs |           1 | `java.util.concurrent.locks.ReentrantReadWriteLock:243` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Location                                     |
| -----: | ----: | ----------: | -------------------------------------------- |
| 100.0% | 0.1ms |           1 | `jdk.internal.loader.BuiltinClassLoader:651` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

|     % |   Time | Contentions | Location                   |
| ----: | -----: | ----------: | -------------------------- |
| 63.6% | 24.9µs |           1 | `java.nio.file.Files:2791` |
| 36.4% | 14.2µs |           1 | `java.nio.file.Files:2794` |

##### `<clinit>()` (`java.nio.file.FileTreeWalker$EventType`)

|      % |   Time | Contentions | Location                                     |
| -----: | -----: | ----------: | -------------------------------------------- |
| 100.0% | 22.4µs |           1 | `java.nio.file.FileTreeWalker$EventType:113` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

|      % |   Time | Contentions | Location                             |
| -----: | -----: | ----------: | ------------------------------------ |
| 100.0% | 20.4µs |           2 | `java.util.stream.StreamSupport:274` |

##### `<clinit>()` (`java.nio.file.FileVisitResult`)

|      % |   Time | Contentions | Location                           |
| -----: | -----: | ----------: | ---------------------------------- |
| 100.0% | 19.7µs |           1 | `java.nio.file.FileVisitResult:42` |

##### `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`)

|      % |   Time | Contentions | Location                           |
| -----: | -----: | ----------: | ---------------------------------- |
| 100.0% | 15.8µs |           1 | `java.nio.file.FileTreeWalker:312` |

##### `<clinit>()` (`java.nio.file.Files$AcceptAllFilter`)

|      % |   Time | Contentions | Location                                  |
| -----: | -----: | ----------: | ----------------------------------------- |
| 100.0% | 15.3µs |           1 | `java.nio.file.Files$AcceptAllFilter:445` |

##### `<clinit>()` (`java.nio.file.Files$3`)

|      % |   Time | Contentions | Location                     |
| -----: | -----: | ----------: | ---------------------------- |
| 100.0% | 14.4µs |           1 | `java.nio.file.Files$3:2794` |

##### `preVisitDirectory(Object, BasicFileAttributes)` (`java.nio.file.SimpleFileVisitor`)

|      % |   Time | Contentions | Location                             |
| -----: | -----: | ----------: | ------------------------------------ |
| 100.0% | 12.4µs |           1 | `java.nio.file.SimpleFileVisitor:62` |

##### `<clinit>()` (`java.nio.file.FileTreeWalker`)

|      % |   Time | Contentions | Location                          |
| -----: | -----: | ----------: | --------------------------------- |
| 100.0% | 11.2µs |           1 | `java.nio.file.FileTreeWalker:57` |

##### `newDirectoryStream(Path)` (`java.nio.file.Files`)

|      % |   Time | Contentions | Location                  |
| -----: | -----: | ----------: | ------------------------- |
| 100.0% | 10.0µs |           1 | `java.nio.file.Files:482` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

|      % |   Time | Contentions | Location                                |
| -----: | -----: | ----------: | --------------------------------------- |
| 100.0% | 10.0µs |           2 | `java.util.stream.DoublePipeline$1:173` |

##### `<init>()` (`java.util.concurrent.locks.ReentrantReadWriteLock$Sync`)

|      % |  Time | Contentions | Location                                                     |
| -----: | ----: | ----------: | ------------------------------------------------------------ |
| 100.0% | 9.8µs |           1 | `java.util.concurrent.locks.ReentrantReadWriteLock$Sync:339` |

##### `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`)

|      % |  Time | Contentions | Location                           |
| -----: | ----: | ----------: | ---------------------------------- |
| 100.0% | 9.2µs |           1 | `java.nio.file.FileTreeWalker:192` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Caller              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 1.3ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`)

|      % |  Time | Contentions | Caller    | Location                          |
| -----: | ----: | ----------: | --------- | --------------------------------- |
| 100.0% | 0.2ms |           3 | `boxed()` | `java.util.stream.DoublePipeline` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

|      % |  Time | Contentions | Caller                                           | Location                         |
| -----: | ----: | ----------: | ------------------------------------------------ | -------------------------------- |
| 100.0% | 0.1ms |           3 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Caller                       | Location                                 |
| -----: | ----: | ----------: | ---------------------------- | ---------------------------------------- |
| 100.0% | 0.1ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

|      % |   Time | Contentions | Caller                            | Location              |
| -----: | -----: | ----------: | --------------------------------- | --------------------- |
| 100.0% | 39.1µs |           2 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files` |

##### `<clinit>()` (`java.nio.file.FileTreeWalker$EventType`)

|      % |   Time | Contentions | Caller                          | Location                       |
| -----: | -----: | ----------: | ------------------------------- | ------------------------------ |
| 100.0% | 22.4µs |           1 | `visit(Path, boolean, boolean)` | `java.nio.file.FileTreeWalker` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

|      % |   Time | Contentions | Caller                       | Location           |
| -----: | -----: | ----------: | ---------------------------- | ------------------ |
| 100.0% | 20.4µs |           2 | `stream(double[], int, int)` | `java.util.Arrays` |

##### `<clinit>()` (`java.nio.file.FileVisitResult`)

|      % |   Time | Contentions | Caller                                           | Location                          |
| -----: | -----: | ----------: | ------------------------------------------------ | --------------------------------- |
| 100.0% | 19.7µs |           1 | `preVisitDirectory(Object, BasicFileAttributes)` | `java.nio.file.SimpleFileVisitor` |

##### `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`)

|      % |   Time | Contentions | Caller       | Location                       |
| -----: | -----: | ----------: | ------------ | ------------------------------ |
| 100.0% | 15.8µs |           1 | `walk(Path)` | `java.nio.file.FileTreeWalker` |

##### `<clinit>()` (`java.nio.file.Files$AcceptAllFilter`)

|      % |   Time | Contentions | Caller                     | Location              |
| -----: | -----: | ----------: | -------------------------- | --------------------- |
| 100.0% | 15.3µs |           1 | `newDirectoryStream(Path)` | `java.nio.file.Files` |

##### `<clinit>()` (`java.nio.file.Files$3`)

|      % |   Time | Contentions | Caller                                      | Location              |
| -----: | -----: | ----------: | ------------------------------------------- | --------------------- |
| 100.0% | 14.4µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `preVisitDirectory(Object, BasicFileAttributes)` (`java.nio.file.SimpleFileVisitor`)

|      % |   Time | Contentions | Caller                                      | Location              |
| -----: | -----: | ----------: | ------------------------------------------- | --------------------- |
| 100.0% | 12.4µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `<clinit>()` (`java.nio.file.FileTreeWalker`)

|      % |   Time | Contentions | Caller                                      | Location              |
| -----: | -----: | ----------: | ------------------------------------------- | --------------------- |
| 100.0% | 11.2µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `newDirectoryStream(Path)` (`java.nio.file.Files`)

|      % |   Time | Contentions | Caller                          | Location                       |
| -----: | -----: | ----------: | ------------------------------- | ------------------------------ |
| 100.0% | 10.0µs |           1 | `visit(Path, boolean, boolean)` | `java.nio.file.FileTreeWalker` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

|      % |   Time | Contentions | Caller           | Location                            |
| -----: | -----: | ----------: | ---------------- | ----------------------------------- |
| 100.0% | 10.0µs |           2 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `<init>()` (`java.util.concurrent.locks.ReentrantReadWriteLock$Sync`)

|      % |  Time | Contentions | Caller     | Location                                                     |
| -----: | ----: | ----------: | ---------- | ------------------------------------------------------------ |
| 100.0% | 9.8µs |           1 | `<init>()` | `java.util.concurrent.locks.ReentrantReadWriteLock$FairSync` |

##### `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`)

|      % |  Time | Contentions | Caller                                      | Location              |
| -----: | ----: | ----------: | ------------------------------------------- | --------------------- |
| 100.0% | 9.2µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

### Total time

Functions with the most time blocked within the function and its callees.

|     % |  Time | Contentions | Function                                             | Location                                                   |
| ----: | ----: | ----------: | ---------------------------------------------------- | ---------------------------------------------------------- |
| 79.7% | 1.5ms |          11 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 79.7% | 1.5ms |          11 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 79.7% | 1.5ms |          11 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| 79.7% | 1.5ms |          11 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                       |
| 79.7% | 1.5ms |          11 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                        |
| 79.7% | 1.5ms |          11 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 79.7% | 1.5ms |          11 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                        |
| 79.7% | 1.5ms |          11 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                        |
| 79.7% | 1.5ms |          11 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                |
| 71.9% | 1.4ms |           5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                                    |
| 67.8% | 1.3ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                                    |
| 67.8% | 1.3ms |           4 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 42.8% | 0.8ms |           5 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 42.8% | 0.8ms |           5 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                        |
| 42.8% | 0.8ms |           5 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                        |
| 20.3% | 0.4ms |          16 | `deleteRecursively(Path, boolean)`                   | `org.renaissance.core.DirUtils`                            |
| 20.3% | 0.4ms |          16 | `deleteRecursively(Path)`                            | `org.renaissance.core.DirUtils`                            |
| 20.3% | 0.4ms |          16 | `lambda$createScratchDirectory$1(Path)`              | `org.renaissance.core.DirUtils`                            |
| 20.3% | 0.4ms |          16 | `run()`                                              | `org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68` |
| 20.3% | 0.4ms |          16 | `runWith(Object, Runnable)`                          | `java.lang.Thread`                                         |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |  Time | Contentions | Function                                             | Location                                      |
| ----: | ----: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| 79.7% | 1.5ms |          11 | `exec()`                                             | `java.util.concurrent.RecursiveTask`          |
| 79.7% | 1.5ms |          11 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`           |
| 79.7% | 1.5ms |          11 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 79.7% | 1.5ms |          11 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`           |
| 79.7% | 1.5ms |          11 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`           |
| 79.7% | 1.5ms |          11 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`   |
| 71.9% | 1.4ms |           5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                       |
| 67.8% | 1.3ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                       |
| 42.8% | 0.8ms |           5 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 42.8% | 0.8ms |           5 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`           |
| 42.8% | 0.8ms |           5 | `join()`                                             | `java.util.concurrent.ForkJoinTask`           |
| 20.3% | 0.4ms |          16 | `runWith(Object, Runnable)`                          | `java.lang.Thread`                            |
| 20.3% | 0.4ms |          16 | `run()`                                              | `java.lang.Thread`                            |
| 16.2% | 0.3ms |          15 | `walkFileTree(Path, Set, int, FileVisitor)`          | `java.nio.file.Files`                         |
| 16.2% | 0.3ms |          15 | `walkFileTree(Path, FileVisitor)`                    | `java.nio.file.Files`                         |
| 10.5% | 0.2ms |           8 | `visit(Path, boolean, boolean)`                      | `java.nio.file.FileTreeWalker`                |
| 10.5% | 0.2ms |           8 | `walk(Path)`                                         | `java.nio.file.FileTreeWalker`                |
| 10.4% | 0.2ms |           3 | `mapToObj(DoubleFunction, int)`                      | `java.util.stream.DoublePipeline`             |
| 10.4% | 0.2ms |           3 | `boxed()`                                            | `java.util.stream.DoublePipeline`             |
|  8.5% | 0.2ms |           6 | `newDirectoryStream(Path)`                           | `java.nio.file.Files`                         |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Caller              | Location                                               |
| -----: | ----: | ----------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 1.5ms |          11 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Caller              | Location                                               |
| -----: | ----: | ----------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 1.5ms |          11 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% | 1.5ms |          11 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |  Time | Contentions | Caller   | Location                             |
| -----: | ----: | ----------: | -------- | ------------------------------------ |
| 100.0% | 1.5ms |          11 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |  Time | Contentions | Caller     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 1.5ms |          11 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Caller                                               | Location                                      |
| -----: | ----: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 1.5ms |          11 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  53.7% | 0.8ms |           5 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Caller                                   | Location                            |
| -----: | ----: | ----------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 1.5ms |          11 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Caller                              | Location                            |
| -----: | ----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 1.5ms |          11 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Caller  | Location                                    |
| -----: | ----: | ----------: | ------- | ------------------------------------------- |
| 100.0% | 1.5ms |          11 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|     % |  Time | Contentions | Caller                             | Location                                               |
| ----: | ----: | ----------: | ---------------------------------- | ------------------------------------------------------ |
| 94.3% | 1.3ms |           4 | `average(List)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  5.7% | 0.1ms |           1 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils`                        |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Caller              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 1.3ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Caller                     | Location                                               |
| -----: | ----: | ----------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 1.3ms |           4 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Caller                 | Location                            |
| -----: | ----: | ----------: | ---------------------- | ----------------------------------- |
| 100.0% | 0.8ms |           5 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Caller   | Location                            |
| -----: | ----: | ----------: | -------- | ----------------------------------- |
| 100.0% | 0.8ms |           5 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Caller      | Location                                               |
| -----: | ----: | ----------: | ----------- | ------------------------------------------------------ |
| 100.0% | 0.8ms |           5 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Caller                    | Location                        |
| -----: | ----: | ----------: | ------------------------- | ------------------------------- |
| 100.0% | 0.4ms |          16 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Caller                                  | Location                        |
| -----: | ----: | ----------: | --------------------------------------- | ------------------------------- |
| 100.0% | 0.4ms |          16 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Caller  | Location                                                   |
| -----: | ----: | ----------: | ------- | ---------------------------------------------------------- |
| 100.0% | 0.4ms |          16 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`)

|      % |  Time | Contentions | Caller                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 0.4ms |          16 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Caller  | Location           |
| -----: | ----: | ----------: | ------- | ------------------ |
| 100.0% | 0.4ms |          16 | `run()` | `java.lang.Thread` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

|      % |  Time | Contentions | Caller                            | Location              |
| -----: | ----: | ----------: | --------------------------------- | --------------------- |
| 100.0% | 0.3ms |          15 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files` |

##### `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`)

|      % |  Time | Contentions | Caller                             | Location                        |
| -----: | ----: | ----------: | ---------------------------------- | ------------------------------- |
| 100.0% | 0.3ms |          15 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

##### `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`)

|      % |  Time | Contentions | Caller       | Location                       |
| -----: | ----: | ----------: | ------------ | ------------------------------ |
| 100.0% | 0.2ms |           8 | `walk(Path)` | `java.nio.file.FileTreeWalker` |

##### `walk(Path)` (`java.nio.file.FileTreeWalker`)

|      % |  Time | Contentions | Caller                                      | Location              |
| -----: | ----: | ----------: | ------------------------------------------- | --------------------- |
| 100.0% | 0.2ms |           8 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`)

|      % |  Time | Contentions | Caller    | Location                          |
| -----: | ----: | ----------: | --------- | --------------------------------- |
| 100.0% | 0.2ms |           3 | `boxed()` | `java.util.stream.DoublePipeline` |

##### `boxed()` (`java.util.stream.DoublePipeline`)

|      % |  Time | Contentions | Caller            | Location                                               |
| -----: | ----: | ----------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 0.2ms |           3 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `newDirectoryStream(Path)` (`java.nio.file.Files`)

|      % |  Time | Contentions | Caller                          | Location                       |
| -----: | ----: | ----------: | ------------------------------- | ------------------------------ |
| 100.0% | 0.2ms |           6 | `visit(Path, boolean, boolean)` | `java.nio.file.FileTreeWalker` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % |  Time | Contentions | Callee            | Location                                               |
| ----: | ----: | ----------: | ----------------- | ------------------------------------------------------ |
| 85.0% | 1.3ms |           4 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 15.0% | 0.2ms |           7 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Callee                     | Location                                               |
| -----: | ----: | ----------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 1.5ms |          11 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% | 1.5ms |          11 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |  Time | Contentions | Callee              | Location                                               |
| -----: | ----: | ----------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 1.5ms |          11 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  53.7% | 0.8ms |           5 | `join()`            | `java.util.concurrent.ForkJoinTask`                    |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |  Time | Contentions | Callee      | Location                                               |
| -----: | ----: | ----------: | ----------- | ------------------------------------------------------ |
| 100.0% | 1.5ms |          11 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee   | Location                             |
| -----: | ----: | ----------: | -------- | ------------------------------------ |
| 100.0% | 1.5ms |          11 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 1.5ms |          11 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Callee                                               | Location                                      |
| -----: | ----: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 1.5ms |          11 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Callee                                   | Location                            |
| -----: | ----: | ----------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 1.5ms |          11 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % |  Time | Contentions | Callee                              | Location                            |
| -----: | ----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 1.5ms |          11 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|     % |  Time | Contentions | Callee                       | Location                                          |
| ----: | ----: | ----------: | ---------------------------- | ------------------------------------------------- |
| 94.3% | 1.3ms |           4 | `loadClass(String, boolean)` | `java.lang.ClassLoader`                           |
|  5.7% | 0.1ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

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
| 79.7% | 0.3ms |          15 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files`   |
| 20.3% | 0.1ms |           1 | `loadClass(String)`               | `java.lang.ClassLoader` |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Callee                             | Location                        |
| -----: | ----: | ----------: | ---------------------------------- | ------------------------------- |
| 100.0% | 0.4ms |          16 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Callee                    | Location                        |
| -----: | ----: | ----------: | ------------------------- | ------------------------------- |
| 100.0% | 0.4ms |          16 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`)

|      % |  Time | Contentions | Callee                                  | Location                        |
| -----: | ----: | ----------: | --------------------------------------- | ------------------------------- |
| 100.0% | 0.4ms |          16 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee  | Location                                                   |
| -----: | ----: | ----------: | ------- | ---------------------------------------------------------- |
| 100.0% | 0.4ms |          16 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68` |

##### `run()` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 0.4ms |          16 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

|     % |   Time | Contentions | Callee                                           | Location                          |
| ----: | -----: | ----------: | ------------------------------------------------ | --------------------------------- |
| 65.2% |  0.2ms |           8 | `walk(Path)`                                     | `java.nio.file.FileTreeWalker`    |
| 10.5% | 32.0µs |           2 | `preVisitDirectory(Object, BasicFileAttributes)` | `java.nio.file.SimpleFileVisitor` |
|  4.7% | 14.4µs |           1 | `<clinit>()`                                     | `java.nio.file.Files$3`           |
|  3.7% | 11.2µs |           1 | `<clinit>()`                                     | `java.nio.file.FileTreeWalker`    |
|  3.0% |  9.2µs |           1 | `<init>(Collection, int)`                        | `java.nio.file.FileTreeWalker`    |

##### `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`)

|      % |  Time | Contentions | Callee                                      | Location              |
| -----: | ----: | ----------: | ------------------------------------------- | --------------------- |
| 100.0% | 0.3ms |          15 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`)

|     % |   Time | Contentions | Callee                     | Location                                 |
| ----: | -----: | ----------: | -------------------------- | ---------------------------------------- |
| 80.8% |  0.2ms |           6 | `newDirectoryStream(Path)` | `java.nio.file.Files`                    |
| 11.3% | 22.4µs |           1 | `<clinit>()`               | `java.nio.file.FileTreeWalker$EventType` |

##### `walk(Path)` (`java.nio.file.FileTreeWalker`)

|      % |  Time | Contentions | Callee                          | Location                       |
| -----: | ----: | ----------: | ------------------------------- | ------------------------------ |
| 100.0% | 0.2ms |           8 | `visit(Path, boolean, boolean)` | `java.nio.file.FileTreeWalker` |

##### `boxed()` (`java.util.stream.DoublePipeline`)

|      % |  Time | Contentions | Callee                          | Location                          |
| -----: | ----: | ----------: | ------------------------------- | --------------------------------- |
| 100.0% | 0.2ms |           3 | `mapToObj(DoubleFunction, int)` | `java.util.stream.DoublePipeline` |

##### `newDirectoryStream(Path)` (`java.nio.file.Files`)

|     % |   Time | Contentions | Callee                                             | Location                              |
| ----: | -----: | ----------: | -------------------------------------------------- | ------------------------------------- |
| 84.2% |  0.1ms |           4 | `newDirectoryStream(Path, DirectoryStream$Filter)` | `sun.nio.fs.UnixFileSystemProvider`   |
|  9.6% | 15.3µs |           1 | `<clinit>()`                                       | `java.nio.file.Files$AcceptAllFilter` |

## Hottest call stacks

Call stacks with the most time blocked in their leaf frame.

|     % |   Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----: | -----: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 40.6% |  0.8ms |           2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                         |
| 27.1% |  0.5ms |           2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  9.2% |  0.2ms |           2 | `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`) ← `boxed()` ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  6.6% |  0.1ms |           3 | `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`) ← `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`) ← `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  4.1% |  0.1ms |           1 | `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String)` (`java.lang.ClassLoader`) ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.1% | 39.1µs |           2 | `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.2% | 22.4µs |           1 | `<clinit>()` (`java.nio.file.FileTreeWalker$EventType`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.1% | 21.0µs |           1 | `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`) ← `boxed()` ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                    |
|  1.0% | 19.7µs |           1 | `<clinit>()` (`java.nio.file.FileVisitResult`) ← `preVisitDirectory(Object, BasicFileAttributes)` (`java.nio.file.SimpleFileVisitor`) ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.8% | 15.8µs |           1 | `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.8% | 15.3µs |           1 | `<clinit>()` (`java.nio.file.Files$AcceptAllFilter`) ← `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.8% | 14.4µs |           1 | `<clinit>()` (`java.nio.file.Files$3`) ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.7% | 12.4µs |           1 | `preVisitDirectory(Object, BasicFileAttributes)` (`java.nio.file.SimpleFileVisitor`) ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.6% | 11.2µs |           1 | `<clinit>()` (`java.nio.file.FileTreeWalker`) ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.6% | 11.1µs |           1 | `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`) ← `stream(double[], int, int)` (`java.util.Arrays`) ← `stream(double[])` ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                          |
|  0.5% | 10.0µs |           1 | `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.5% |  9.8µs |           1 | `<init>()` (`java.util.concurrent.locks.ReentrantReadWriteLock$Sync`) ← `<init>()` (`java.util.concurrent.locks.ReentrantReadWriteLock$FairSync`) ← `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`) ← `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`) ← `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                               |
|  0.5% |  9.3µs |           1 | `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`) ← `stream(double[], int, int)` (`java.util.Arrays`) ← `stream(double[])` ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.5% |  9.3µs |           1 | `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`) ← `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|  0.5% |  9.2µs |           1 | `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`) ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

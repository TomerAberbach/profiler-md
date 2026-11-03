# Lock contention profile diff

Blocked 1.7ms → 1.9ms (+0.22ms, +13.1%) over 10 → 27 contentions (166.4µs → 69.7µs per contention).

| Category         | Change |   Delta |      % |          Time | Contentions |
| ---------------- | -----: | ------: | -----: | ------------: | ----------: |
| Standard library | +13.1% | +0.22ms | 100.0% | 1.7ms → 1.9ms |     10 → 27 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 1.3ms → 1.5ms (75.4% → 79.7%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 1.3ms → 1.5ms (75.4% → 79.7%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       └── 1.3ms → 1.5ms (75.4% → 79.7%) scan(ForkJoinPool$WorkQueue, int, int)
│           └── 1.3ms → 1.5ms (75.4% → 79.7%) topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool$WorkQueue
│               └── 1.3ms → 1.5ms (75.4% → 79.7%) doExec() at java.util.concurrent.ForkJoinTask
│                   └── … 1.3ms → 1.5ms (75.4% → 79.7%) exec() at java.util.concurrent.RecursiveTask
│                       └── 1.3ms → 1.5ms (75.4% → 79.7%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│                           └── 1.3ms → 1.5ms (75.4% → 79.7%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│                               └── … 1.3ms → 1.5ms (75.4% → 79.7%) computeClusterAverages() at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│                                   ├── 1.3ms (75.4% → 67.8%) average(List)
│                                   │   └── 1.3ms (75.4% → 67.8%) loadClass(String) at java.lang.ClassLoader
│                                   │       └── 1.3ms (75.4% → 67.8%) loadClass(String, boolean)
│                                   └── 0ms → 0.2ms (0.0% → 12.0%) boxed(double[])
│                                       ├── 0ms → 0.2ms (0.0% → 10.4%) boxed() at java.util.stream.DoublePipeline
│                                       │   └── 0ms → 0.2ms (0.0% → 10.4%) mapToObj(DoubleFunction, int)
│                                       ├── … 0ms → 20.4µs (0.0% → 1.1%) doubleStream(Spliterator$OfDouble, boolean) at java.util.stream.StreamSupport
│                                       └── … 0ms → 10.0µs (0.0% → 0.5%) opWrapSink(int, Sink) at java.util.stream.DoublePipeline$1
└── 0.4ms (24.6% → 20.3%) run() at java.lang.Thread
    └── 0.4ms (24.6% → 20.3%) runWith(Object, Runnable)
        └── 0.4ms (24.6% → 20.3%) run() at org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68
            └── 0.4ms (24.6% → 20.3%) lambda$createScratchDirectory$1(Path) at org.renaissance.core.DirUtils
                └── 0.4ms (24.6% → 20.3%) deleteRecursively(Path)
                    └── 0.4ms (24.6% → 20.3%) deleteRecursively(Path, boolean)
                        ├── 0.2ms → 0.3ms (9.4% → 16.2%) walkFileTree(Path, FileVisitor) at java.nio.file.Files
                        │   ├── 0.1ms → 0.3ms (8.2% → 16.2%, self 2.5% → 2.1%) walkFileTree(Path, Set, int, FileVisitor)
                        │   │   ├── 30.8µs → 0.2ms (1.9% → 10.5%) walk(Path) at java.nio.file.FileTreeWalker
                        │   │   │   └── 30.8µs → 0.2ms (1.9% → 10.5%, self 0.0% → 0.8%) visit(Path, boolean, boolean)
                        │   │   │       ├── 30.8µs → 0.2ms (1.9% → 8.5%, self 0.0% → 0.5%) newDirectoryStream(Path) at java.nio.file.Files
                        │   │   │       │   ├── … 30.8µs → 0.1ms (1.9% → 7.2%, self 1.9% → 6.6%) <init>(boolean) at java.util.concurrent.locks.ReentrantReadWriteLock
                        │   │   │       │   │   └── 0ms → 9.8µs (0.0% → 0.5%) <init>() at java.util.concurrent.locks.ReentrantReadWriteLock$FairSync
                        │   │   │       │   │       └── 0ms → 9.8µs (0.0% → 0.5%) <init>() at java.util.concurrent.locks.ReentrantReadWriteLock$Sync
                        │   │   │       │   └── 0ms → 15.3µs (0.0% → 0.8%) <clinit>() at java.nio.file.Files$AcceptAllFilter
                        │   │   │       └── 0ms → 22.4µs (0.0% → 1.2%) <clinit>() at java.nio.file.FileTreeWalker$EventType
                        │   │   ├── 0.1ms → 32.0µs (3.5% → 1.7%, self 3.5% → 0.7%) preVisitDirectory(Object, BasicFileAttributes) at java.nio.file.SimpleFileVisitor
                        │   │   │   └── 0ms → 19.7µs (0.0% → 1.0%) <clinit>() at java.nio.file.FileVisitResult
                        │   │   ├── 5.5µs → 9.2µs (0.3% → 0.5%) <init>(Collection, int) at java.nio.file.FileTreeWalker
                        │   │   ├── 0ms → 14.4µs (0.0% → 0.8%) <clinit>() at java.nio.file.Files$3
                        │   │   └── 0ms → 11.2µs (0.0% → 0.6%) <clinit>() at java.nio.file.FileTreeWalker
                        │   └── … 20.0µs → 0ms (1.2% → 0.0%) getDeclaredMethods0(boolean) at java.lang.Class
                        └── … 0.3ms → 0.1ms (15.2% → 4.1%) loadClassOrNull(String, boolean) at jdk.internal.loader.BuiltinClassLoader
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

|  Change |   Delta |             % |           Time | Contentions | Function                                      | Location                                                 |
| ------: | ------: | ------------: | -------------: | ----------: | --------------------------------------------- | -------------------------------------------------------- |
|     new | +0.19ms |  0.0% → 10.4% |    0ms → 0.2ms |       0 → 3 | `mapToObj(DoubleFunction, int)`               | `java.util.stream.DoublePipeline`                        |
| +305.4% | +0.09ms |   1.9% → 6.6% | 30.8µs → 0.1ms |       1 → 3 | `<init>(boolean)`                             | `java.util.concurrent.locks.ReentrantReadWriteLock`      |
|     new | +0.02ms |   0.0% → 1.2% |   0ms → 22.4µs |       0 → 1 | `<clinit>()`                                  | `java.nio.file.FileTreeWalker$EventType`                 |
|     new | +0.02ms |   0.0% → 1.1% |   0ms → 20.4µs |       0 → 2 | `doubleStream(Spliterator$OfDouble, boolean)` | `java.util.stream.StreamSupport`                         |
|   +1.6% | +0.02ms | 75.4% → 67.8% |          1.3ms |           4 | `loadClass(String, boolean)`                  | `java.lang.ClassLoader`                                  |
|     new | +0.02ms |   0.0% → 1.0% |   0ms → 19.7µs |       0 → 1 | `<clinit>()`                                  | `java.nio.file.FileVisitResult`                          |
|     new | +0.02ms |   0.0% → 0.8% |   0ms → 15.8µs |       0 → 1 | `visit(Path, boolean, boolean)`               | `java.nio.file.FileTreeWalker`                           |
|     new | +0.02ms |   0.0% → 0.8% |   0ms → 15.3µs |       0 → 1 | `<clinit>()`                                  | `java.nio.file.Files$AcceptAllFilter`                    |
|     new | +0.01ms |   0.0% → 0.8% |   0ms → 14.4µs |       0 → 1 | `<clinit>()`                                  | `java.nio.file.Files$3`                                  |
|     new | +0.01ms |   0.0% → 0.6% |   0ms → 11.2µs |       0 → 1 | `<clinit>()`                                  | `java.nio.file.FileTreeWalker`                           |
|     new | +0.01ms |   0.0% → 0.5% |   0ms → 10.0µs |       0 → 1 | `newDirectoryStream(Path)`                    | `java.nio.file.Files`                                    |
|     new | +0.01ms |   0.0% → 0.5% |   0ms → 10.0µs |       0 → 2 | `opWrapSink(int, Sink)`                       | `java.util.stream.DoublePipeline$1`                      |
|     new | +0.01ms |   0.0% → 0.5% |    0ms → 9.8µs |       0 → 1 | `<init>()`                                    | `java.util.concurrent.locks.ReentrantReadWriteLock$Sync` |
|  +67.4% | +3.71µs |   0.3% → 0.5% |  5.5µs → 9.2µs |           1 | `<init>(Collection, int)`                     | `java.nio.file.FileTreeWalker`                           |

#### Improvements

Functions with the largest decrease in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

|  Change |   Delta |            % |            Time | Contentions | Function                                         | Location                                 |
| ------: | ------: | -----------: | --------------: | ----------: | ------------------------------------------------ | ---------------------------------------- |
|  -69.4% | -0.18ms | 15.2% → 4.1% |   0.3ms → 0.1ms |           1 | `loadClassOrNull(String, boolean)`               | `jdk.internal.loader.BuiltinClassLoader` |
|  -78.8% | -0.05ms |  3.5% → 0.7% |  0.1ms → 12.4µs |           1 | `preVisitDirectory(Object, BasicFileAttributes)` | `java.nio.file.SimpleFileVisitor`        |
| removed | -0.02ms |  1.2% → 0.0% |    20.0µs → 0ms |       1 → 0 | `getDeclaredMethods0(boolean)`                   | `java.lang.Class`                        |
|   -5.1% | -2.08µs |  2.5% → 2.1% | 41.2µs → 39.1µs |       1 → 2 | `walkFileTree(Path, Set, int, FileVisitor)`      | `java.nio.file.Files`                    |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`)

| Change |   Delta |             % |        Time | Contentions | Location                              |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------- |
|    new | +0.19ms | 0.0% → 100.0% | 0ms → 0.2ms |       0 → 3 | `java.util.stream.DoublePipeline:170` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

|  Change |   Delta |              % |           Time | Contentions | Location                                                |
| ------: | ------: | -------------: | -------------: | ----------: | ------------------------------------------------------- |
| +164.7% | +0.05ms | 100.0% → 65.3% | 30.8µs → 0.1ms |           1 | `java.util.concurrent.locks.ReentrantReadWriteLock:241` |
|     new | +0.03ms |   0.0% → 25.1% |   0ms → 31.4µs |       0 → 1 | `java.util.concurrent.locks.ReentrantReadWriteLock:242` |
|     new | +0.01ms |    0.0% → 9.6% |   0ms → 12.0µs |       0 → 1 | `java.util.concurrent.locks.ReentrantReadWriteLock:243` |

##### `<clinit>()` (`java.nio.file.FileTreeWalker$EventType`)

| Change |   Delta |             % |         Time | Contentions | Location                                     |
| -----: | ------: | ------------: | -----------: | ----------: | -------------------------------------------- |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 22.4µs |       0 → 1 | `java.nio.file.FileTreeWalker$EventType:113` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

| Change |   Delta |             % |         Time | Contentions | Location                             |
| -----: | ------: | ------------: | -----------: | ----------: | ------------------------------------ |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 20.4µs |       0 → 2 | `java.util.stream.StreamSupport:274` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

| Change |   Delta |      % |  Time | Contentions | Location                    |
| -----: | ------: | -----: | ----: | ----------: | --------------------------- |
|  +1.6% | +0.02ms | 100.0% | 1.3ms |           4 | `java.lang.ClassLoader:573` |

##### `<clinit>()` (`java.nio.file.FileVisitResult`)

| Change |   Delta |             % |         Time | Contentions | Location                           |
| -----: | ------: | ------------: | -----------: | ----------: | ---------------------------------- |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 19.7µs |       0 → 1 | `java.nio.file.FileVisitResult:42` |

##### `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`)

| Change |   Delta |             % |         Time | Contentions | Location                           |
| -----: | ------: | ------------: | -----------: | ----------: | ---------------------------------- |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 15.8µs |       0 → 1 | `java.nio.file.FileTreeWalker:312` |

##### `<clinit>()` (`java.nio.file.Files$AcceptAllFilter`)

| Change |   Delta |             % |         Time | Contentions | Location                                  |
| -----: | ------: | ------------: | -----------: | ----------: | ----------------------------------------- |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 15.3µs |       0 → 1 | `java.nio.file.Files$AcceptAllFilter:445` |

##### `<clinit>()` (`java.nio.file.Files$3`)

| Change |   Delta |             % |         Time | Contentions | Location                     |
| -----: | ------: | ------------: | -----------: | ----------: | ---------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 14.4µs |       0 → 1 | `java.nio.file.Files$3:2794` |

##### `<clinit>()` (`java.nio.file.FileTreeWalker`)

| Change |   Delta |             % |         Time | Contentions | Location                          |
| -----: | ------: | ------------: | -----------: | ----------: | --------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 11.2µs |       0 → 1 | `java.nio.file.FileTreeWalker:57` |

##### `newDirectoryStream(Path)` (`java.nio.file.Files`)

| Change |   Delta |             % |         Time | Contentions | Location                  |
| -----: | ------: | ------------: | -----------: | ----------: | ------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 10.0µs |       0 → 1 | `java.nio.file.Files:482` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

| Change |   Delta |             % |         Time | Contentions | Location                                |
| -----: | ------: | ------------: | -----------: | ----------: | --------------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 10.0µs |       0 → 2 | `java.util.stream.DoublePipeline$1:173` |

##### `<init>()` (`java.util.concurrent.locks.ReentrantReadWriteLock$Sync`)

| Change |   Delta |             % |        Time | Contentions | Location                                                     |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------ |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 9.8µs |       0 → 1 | `java.util.concurrent.locks.ReentrantReadWriteLock$Sync:339` |

##### `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`)

| Change |   Delta |      % |          Time | Contentions | Location                           |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------- |
| +67.4% | +3.71µs | 100.0% | 5.5µs → 9.2µs |           1 | `java.nio.file.FileTreeWalker:192` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |   Delta |      % |          Time | Contentions | Location                                     |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------------------------- |
| -69.4% | -0.18ms | 100.0% | 0.3ms → 0.1ms |           1 | `jdk.internal.loader.BuiltinClassLoader:651` |

##### `preVisitDirectory(Object, BasicFileAttributes)` (`java.nio.file.SimpleFileVisitor`)

| Change |   Delta |      % |           Time | Contentions | Location                             |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------------ |
| -78.8% | -0.05ms | 100.0% | 0.1ms → 12.4µs |           1 | `java.nio.file.SimpleFileVisitor:62` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

| Change |   Delta |              % |            Time | Contentions | Location                   |
| -----: | ------: | -------------: | --------------: | ----------: | -------------------------- |
| -39.6% | -0.02ms | 100.0% → 63.6% | 41.2µs → 24.9µs |           1 | `java.nio.file.Files:2791` |
|    new | +0.01ms |   0.0% → 36.4% |    0ms → 14.2µs |       0 → 1 | `java.nio.file.Files:2794` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`)

| Change |   Delta |             % |        Time | Contentions | Caller    | Location                          |
| -----: | ------: | ------------: | ----------: | ----------: | --------- | --------------------------------- |
|    new | +0.19ms | 0.0% → 100.0% | 0ms → 0.2ms |       0 → 3 | `boxed()` | `java.util.stream.DoublePipeline` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

|  Change |   Delta |      % |           Time | Contentions | Caller                                           | Location                         |
| ------: | ------: | -----: | -------------: | ----------: | ------------------------------------------------ | -------------------------------- |
| +305.4% | +0.09ms | 100.0% | 30.8µs → 0.1ms |       1 → 3 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream` |

##### `<clinit>()` (`java.nio.file.FileTreeWalker$EventType`)

| Change |   Delta |             % |         Time | Contentions | Caller                          | Location                       |
| -----: | ------: | ------------: | -----------: | ----------: | ------------------------------- | ------------------------------ |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 22.4µs |       0 → 1 | `visit(Path, boolean, boolean)` | `java.nio.file.FileTreeWalker` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

| Change |   Delta |             % |         Time | Contentions | Caller                       | Location           |
| -----: | ------: | ------------: | -----------: | ----------: | ---------------------------- | ------------------ |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 20.4µs |       0 → 2 | `stream(double[], int, int)` | `java.util.Arrays` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

| Change |   Delta |      % |  Time | Contentions | Caller              | Location                |
| -----: | ------: | -----: | ----: | ----------: | ------------------- | ----------------------- |
|  +1.6% | +0.02ms | 100.0% | 1.3ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `<clinit>()` (`java.nio.file.FileVisitResult`)

| Change |   Delta |             % |         Time | Contentions | Caller                                           | Location                          |
| -----: | ------: | ------------: | -----------: | ----------: | ------------------------------------------------ | --------------------------------- |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 19.7µs |       0 → 1 | `preVisitDirectory(Object, BasicFileAttributes)` | `java.nio.file.SimpleFileVisitor` |

##### `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`)

| Change |   Delta |             % |         Time | Contentions | Caller       | Location                       |
| -----: | ------: | ------------: | -----------: | ----------: | ------------ | ------------------------------ |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 15.8µs |       0 → 1 | `walk(Path)` | `java.nio.file.FileTreeWalker` |

##### `<clinit>()` (`java.nio.file.Files$AcceptAllFilter`)

| Change |   Delta |             % |         Time | Contentions | Caller                     | Location              |
| -----: | ------: | ------------: | -----------: | ----------: | -------------------------- | --------------------- |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 15.3µs |       0 → 1 | `newDirectoryStream(Path)` | `java.nio.file.Files` |

##### `<clinit>()` (`java.nio.file.Files$3`)

| Change |   Delta |             % |         Time | Contentions | Caller                                      | Location              |
| -----: | ------: | ------------: | -----------: | ----------: | ------------------------------------------- | --------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 14.4µs |       0 → 1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `<clinit>()` (`java.nio.file.FileTreeWalker`)

| Change |   Delta |             % |         Time | Contentions | Caller                                      | Location              |
| -----: | ------: | ------------: | -----------: | ----------: | ------------------------------------------- | --------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 11.2µs |       0 → 1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `newDirectoryStream(Path)` (`java.nio.file.Files`)

| Change |   Delta |             % |         Time | Contentions | Caller                          | Location                       |
| -----: | ------: | ------------: | -----------: | ----------: | ------------------------------- | ------------------------------ |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 10.0µs |       0 → 1 | `visit(Path, boolean, boolean)` | `java.nio.file.FileTreeWalker` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

| Change |   Delta |             % |         Time | Contentions | Caller           | Location                            |
| -----: | ------: | ------------: | -----------: | ----------: | ---------------- | ----------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 10.0µs |       0 → 2 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `<init>()` (`java.util.concurrent.locks.ReentrantReadWriteLock$Sync`)

| Change |   Delta |             % |        Time | Contentions | Caller     | Location                                                     |
| -----: | ------: | ------------: | ----------: | ----------: | ---------- | ------------------------------------------------------------ |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 9.8µs |       0 → 1 | `<init>()` | `java.util.concurrent.locks.ReentrantReadWriteLock$FairSync` |

##### `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`)

| Change |   Delta |      % |          Time | Contentions | Caller                                      | Location              |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------- | --------------------- |
| +67.4% | +3.71µs | 100.0% | 5.5µs → 9.2µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |   Delta |      % |          Time | Contentions | Caller                       | Location                                 |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------- | ---------------------------------------- |
| -69.4% | -0.18ms | 100.0% | 0.3ms → 0.1ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `preVisitDirectory(Object, BasicFileAttributes)` (`java.nio.file.SimpleFileVisitor`)

| Change |   Delta |      % |           Time | Contentions | Caller                                      | Location              |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------------------- | --------------------- |
| -78.8% | -0.05ms | 100.0% | 0.1ms → 12.4µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `getDeclaredMethods0(boolean)` (`java.lang.Class`)

|  Change |   Delta |             % |         Time | Contentions | Caller                               | Location          |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------------ | ----------------- |
| removed | -0.02ms | 100.0% → 0.0% | 20.0µs → 0ms |       1 → 0 | `privateGetDeclaredMethods(boolean)` | `java.lang.Class` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

| Change |   Delta |      % |            Time | Contentions | Caller                            | Location              |
| -----: | ------: | -----: | --------------: | ----------: | --------------------------------- | --------------------- |
|  -5.1% | -2.08µs | 100.0% | 41.2µs → 39.1µs |       1 → 2 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files` |

### Total time

#### Regressions

Functions with the largest increase in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |   Delta |             % |           Time | Contentions | Function                                             | Location                                               |
| ------: | ------: | ------------: | -------------: | ----------: | ---------------------------------------------------- | ------------------------------------------------------ |
| +116.9% | +0.43ms | 22.3% → 42.8% |  0.4ms → 0.8ms |       1 → 5 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
| +116.9% | +0.43ms | 22.3% → 42.8% |  0.4ms → 0.8ms |       1 → 5 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                    |
| +116.9% | +0.43ms | 22.3% → 42.8% |  0.4ms → 0.8ms |       1 → 5 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                    |
|  +19.5% | +0.24ms | 75.4% → 79.7% |  1.3ms → 1.5ms |      4 → 11 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  +19.5% | +0.24ms | 75.4% → 79.7% |  1.3ms → 1.5ms |      4 → 11 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  +19.5% | +0.24ms | 75.4% → 79.7% |  1.3ms → 1.5ms |      4 → 11 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |
|  +19.5% | +0.24ms | 75.4% → 79.7% |  1.3ms → 1.5ms |      4 → 11 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                   |
|  +19.5% | +0.24ms | 75.4% → 79.7% |  1.3ms → 1.5ms |      4 → 11 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                    |
|  +19.5% | +0.24ms | 75.4% → 79.7% |  1.3ms → 1.5ms |      4 → 11 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
|  +19.5% | +0.24ms | 75.4% → 79.7% |  1.3ms → 1.5ms |      4 → 11 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                    |
|  +19.5% | +0.24ms | 75.4% → 79.7% |  1.3ms → 1.5ms |      4 → 11 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                    |
|  +19.5% | +0.24ms | 75.4% → 79.7% |  1.3ms → 1.5ms |      4 → 11 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`            |
|     new | +0.23ms |  0.0% → 12.0% |    0ms → 0.2ms |       0 → 7 | `boxed(double[])`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|     new | +0.19ms |  0.0% → 10.4% |    0ms → 0.2ms |       0 → 3 | `mapToObj(DoubleFunction, int)`                      | `java.util.stream.DoublePipeline`                      |
|     new | +0.19ms |  0.0% → 10.4% |    0ms → 0.2ms |       0 → 3 | `boxed()`                                            | `java.util.stream.DoublePipeline`                      |
| +124.0% | +0.17ms |  8.2% → 16.2% |  0.1ms → 0.3ms |      4 → 15 | `walkFileTree(Path, Set, int, FileVisitor)`          | `java.nio.file.Files`                                  |
| +543.0% | +0.17ms |  1.9% → 10.5% | 30.8µs → 0.2ms |       1 → 8 | `visit(Path, boolean, boolean)`                      | `java.nio.file.FileTreeWalker`                         |
| +543.0% | +0.17ms |  1.9% → 10.5% | 30.8µs → 0.2ms |       1 → 8 | `walk(Path)`                                         | `java.nio.file.FileTreeWalker`                         |
|  +95.3% | +0.15ms |  9.4% → 16.2% |  0.2ms → 0.3ms |      5 → 15 | `walkFileTree(Path, FileVisitor)`                    | `java.nio.file.Files`                                  |
| +419.3% | +0.13ms |   1.9% → 8.5% | 30.8µs → 0.2ms |       1 → 6 | `newDirectoryStream(Path)`                           | `java.nio.file.Files`                                  |

##### Standard library

|  Change |   Delta |             % |           Time | Contentions | Function                                             | Location                                            |
| ------: | ------: | ------------: | -------------: | ----------: | ---------------------------------------------------- | --------------------------------------------------- |
| +116.9% | +0.43ms | 22.3% → 42.8% |  0.4ms → 0.8ms |       1 → 5 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| +116.9% | +0.43ms | 22.3% → 42.8% |  0.4ms → 0.8ms |       1 → 5 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                 |
| +116.9% | +0.43ms | 22.3% → 42.8% |  0.4ms → 0.8ms |       1 → 5 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                 |
|  +19.5% | +0.24ms | 75.4% → 79.7% |  1.3ms → 1.5ms |      4 → 11 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                |
|  +19.5% | +0.24ms | 75.4% → 79.7% |  1.3ms → 1.5ms |      4 → 11 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                 |
|  +19.5% | +0.24ms | 75.4% → 79.7% |  1.3ms → 1.5ms |      4 → 11 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|  +19.5% | +0.24ms | 75.4% → 79.7% |  1.3ms → 1.5ms |      4 → 11 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                 |
|  +19.5% | +0.24ms | 75.4% → 79.7% |  1.3ms → 1.5ms |      4 → 11 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                 |
|  +19.5% | +0.24ms | 75.4% → 79.7% |  1.3ms → 1.5ms |      4 → 11 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`         |
|     new | +0.19ms |  0.0% → 10.4% |    0ms → 0.2ms |       0 → 3 | `mapToObj(DoubleFunction, int)`                      | `java.util.stream.DoublePipeline`                   |
|     new | +0.19ms |  0.0% → 10.4% |    0ms → 0.2ms |       0 → 3 | `boxed()`                                            | `java.util.stream.DoublePipeline`                   |
| +124.0% | +0.17ms |  8.2% → 16.2% |  0.1ms → 0.3ms |      4 → 15 | `walkFileTree(Path, Set, int, FileVisitor)`          | `java.nio.file.Files`                               |
| +543.0% | +0.17ms |  1.9% → 10.5% | 30.8µs → 0.2ms |       1 → 8 | `visit(Path, boolean, boolean)`                      | `java.nio.file.FileTreeWalker`                      |
| +543.0% | +0.17ms |  1.9% → 10.5% | 30.8µs → 0.2ms |       1 → 8 | `walk(Path)`                                         | `java.nio.file.FileTreeWalker`                      |
|  +95.3% | +0.15ms |  9.4% → 16.2% |  0.2ms → 0.3ms |      5 → 15 | `walkFileTree(Path, FileVisitor)`                    | `java.nio.file.Files`                               |
| +419.3% | +0.13ms |   1.9% → 8.5% | 30.8µs → 0.2ms |       1 → 6 | `newDirectoryStream(Path)`                           | `java.nio.file.Files`                               |
| +337.3% | +0.10ms |   1.9% → 7.2% | 30.8µs → 0.1ms |       1 → 4 | `<init>(boolean)`                                    | `java.util.concurrent.locks.ReentrantReadWriteLock` |
| +337.3% | +0.10ms |   1.9% → 7.2% | 30.8µs → 0.1ms |       1 → 4 | `<init>(UnixPath, long, DirectoryStream$Filter)`     | `sun.nio.fs.UnixDirectoryStream`                    |
| +337.3% | +0.10ms |   1.9% → 7.2% | 30.8µs → 0.1ms |       1 → 4 | `newDirectoryStream(Path, DirectoryStream$Filter)`   | `sun.nio.fs.UnixFileSystemProvider`                 |
|     new | +0.02ms |   0.0% → 1.2% |   0ms → 22.4µs |       0 → 1 | `<clinit>()`                                         | `java.nio.file.FileTreeWalker$EventType`            |

#### Improvements

Functions with the largest decrease in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |   Delta |             % |           Time | Contentions | Function                                         | Location                                                   |
| ------: | ------: | ------------: | -------------: | ----------: | ------------------------------------------------ | ---------------------------------------------------------- |
|  -69.4% | -0.18ms |  15.2% → 4.1% |  0.3ms → 0.1ms |           1 | `loadClassOrNull(String, boolean)`               | `jdk.internal.loader.BuiltinClassLoader`                   |
|  -69.4% | -0.18ms |  15.2% → 4.1% |  0.3ms → 0.1ms |           1 | `loadClass(String, boolean)`                     | `jdk.internal.loader.BuiltinClassLoader`                   |
|  -69.4% | -0.18ms |  15.2% → 4.1% |  0.3ms → 0.1ms |           1 | `loadClass(String, boolean)`                     | `jdk.internal.loader.ClassLoaders$AppClassLoader`          |
|  -10.3% | -0.16ms | 90.6% → 71.9% |  1.5ms → 1.4ms |           5 | `loadClass(String)`                              | `java.lang.ClassLoader`                                    |
|   -6.6% | -0.03ms | 24.6% → 20.3% |          0.4ms |      6 → 16 | `deleteRecursively(Path, boolean)`               | `org.renaissance.core.DirUtils`                            |
|   -6.6% | -0.03ms | 24.6% → 20.3% |          0.4ms |      6 → 16 | `deleteRecursively(Path)`                        | `org.renaissance.core.DirUtils`                            |
|   -6.6% | -0.03ms | 24.6% → 20.3% |          0.4ms |      6 → 16 | `lambda$createScratchDirectory$1(Path)`          | `org.renaissance.core.DirUtils`                            |
|   -6.6% | -0.03ms | 24.6% → 20.3% |          0.4ms |      6 → 16 | `run()`                                          | `org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68` |
|   -6.6% | -0.03ms | 24.6% → 20.3% |          0.4ms |      6 → 16 | `runWith(Object, Runnable)`                      | `java.lang.Thread`                                         |
|   -6.6% | -0.03ms | 24.6% → 20.3% |          0.4ms |      6 → 16 | `run()`                                          | `java.lang.Thread`                                         |
|  -45.0% | -0.03ms |   3.5% → 1.7% | 0.1ms → 32.0µs |       1 → 2 | `preVisitDirectory(Object, BasicFileAttributes)` | `java.nio.file.SimpleFileVisitor`                          |
| removed | -0.02ms |   1.2% → 0.0% |   20.0µs → 0ms |       1 → 0 | `getDeclaredMethods0(boolean)`                   | `java.lang.Class`                                          |
| removed | -0.02ms |   1.2% → 0.0% |   20.0µs → 0ms |       1 → 0 | `privateGetDeclaredMethods(boolean)`             | `java.lang.Class`                                          |
| removed | -0.02ms |   1.2% → 0.0% |   20.0µs → 0ms |       1 → 0 | `getMethodsRecursive(String, Class[], boolean)`  | `java.lang.Class`                                          |
| removed | -0.02ms |   1.2% → 0.0% |   20.0µs → 0ms |       1 → 0 | `getMethod0(String, Class[])`                    | `java.lang.Class`                                          |
| removed | -0.02ms |   1.2% → 0.0% |   20.0µs → 0ms |       1 → 0 | `getMethod(String, Class[])`                     | `java.lang.Class`                                          |
| removed | -0.02ms |   1.2% → 0.0% |   20.0µs → 0ms |       1 → 0 | `getEnumConstantsShared()`                       | `java.lang.Class`                                          |
| removed | -0.02ms |   1.2% → 0.0% |   20.0µs → 0ms |       1 → 0 | `getEnumConstantsShared(Class)`                  | `java.lang.System$2`                                       |
| removed | -0.02ms |   1.2% → 0.0% |   20.0µs → 0ms |       1 → 0 | `getUniverse(Class)`                             | `java.util.EnumSet`                                        |
| removed | -0.02ms |   1.2% → 0.0% |   20.0µs → 0ms |       1 → 0 | `noneOf(Class)`                                  | `java.util.EnumSet`                                        |

##### Standard library

|  Change |   Delta |             % |           Time | Contentions | Function                                         | Location                                          |
| ------: | ------: | ------------: | -------------: | ----------: | ------------------------------------------------ | ------------------------------------------------- |
|  -69.4% | -0.18ms |  15.2% → 4.1% |  0.3ms → 0.1ms |           1 | `loadClassOrNull(String, boolean)`               | `jdk.internal.loader.BuiltinClassLoader`          |
|  -69.4% | -0.18ms |  15.2% → 4.1% |  0.3ms → 0.1ms |           1 | `loadClass(String, boolean)`                     | `jdk.internal.loader.BuiltinClassLoader`          |
|  -69.4% | -0.18ms |  15.2% → 4.1% |  0.3ms → 0.1ms |           1 | `loadClass(String, boolean)`                     | `jdk.internal.loader.ClassLoaders$AppClassLoader` |
|  -10.3% | -0.16ms | 90.6% → 71.9% |  1.5ms → 1.4ms |           5 | `loadClass(String)`                              | `java.lang.ClassLoader`                           |
|   -6.6% | -0.03ms | 24.6% → 20.3% |          0.4ms |      6 → 16 | `runWith(Object, Runnable)`                      | `java.lang.Thread`                                |
|   -6.6% | -0.03ms | 24.6% → 20.3% |          0.4ms |      6 → 16 | `run()`                                          | `java.lang.Thread`                                |
|  -45.0% | -0.03ms |   3.5% → 1.7% | 0.1ms → 32.0µs |       1 → 2 | `preVisitDirectory(Object, BasicFileAttributes)` | `java.nio.file.SimpleFileVisitor`                 |
| removed | -0.02ms |   1.2% → 0.0% |   20.0µs → 0ms |       1 → 0 | `getDeclaredMethods0(boolean)`                   | `java.lang.Class`                                 |
| removed | -0.02ms |   1.2% → 0.0% |   20.0µs → 0ms |       1 → 0 | `privateGetDeclaredMethods(boolean)`             | `java.lang.Class`                                 |
| removed | -0.02ms |   1.2% → 0.0% |   20.0µs → 0ms |       1 → 0 | `getMethodsRecursive(String, Class[], boolean)`  | `java.lang.Class`                                 |
| removed | -0.02ms |   1.2% → 0.0% |   20.0µs → 0ms |       1 → 0 | `getMethod0(String, Class[])`                    | `java.lang.Class`                                 |
| removed | -0.02ms |   1.2% → 0.0% |   20.0µs → 0ms |       1 → 0 | `getMethod(String, Class[])`                     | `java.lang.Class`                                 |
| removed | -0.02ms |   1.2% → 0.0% |   20.0µs → 0ms |       1 → 0 | `getEnumConstantsShared()`                       | `java.lang.Class`                                 |
| removed | -0.02ms |   1.2% → 0.0% |   20.0µs → 0ms |       1 → 0 | `getEnumConstantsShared(Class)`                  | `java.lang.System$2`                              |
| removed | -0.02ms |   1.2% → 0.0% |   20.0µs → 0ms |       1 → 0 | `getUniverse(Class)`                             | `java.util.EnumSet`                               |
| removed | -0.02ms |   1.2% → 0.0% |   20.0µs → 0ms |       1 → 0 | `noneOf(Class)`                                  | `java.util.EnumSet`                               |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change |   Delta |      % |          Time | Contentions | Caller                 | Location                            |
| ------: | ------: | -----: | ------------: | ----------: | ---------------------- | ----------------------------------- |
| +116.9% | +0.43ms | 100.0% | 0.4ms → 0.8ms |       1 → 5 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change |   Delta |      % |          Time | Contentions | Caller   | Location                            |
| ------: | ------: | -----: | ------------: | ----------: | -------- | ----------------------------------- |
| +116.9% | +0.43ms | 100.0% | 0.4ms → 0.8ms |       1 → 5 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change |   Delta |      % |          Time | Contentions | Caller      | Location                                               |
| ------: | ------: | -----: | ------------: | ----------: | ----------- | ------------------------------------------------------ |
| +116.9% | +0.43ms | 100.0% | 0.4ms → 0.8ms |       1 → 5 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |      % |          Time | Contentions | Caller              | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | ------------------- | ------------------------------------------------------ |
| +19.5% | +0.24ms | 100.0% | 1.3ms → 1.5ms |      4 → 11 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |      % |          Time | Contentions | Caller              | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | ------------------- | ------------------------------------------------------ |
| +19.5% | +0.24ms | 100.0% | 1.3ms → 1.5ms |      4 → 11 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +19.5% | +0.24ms | 100.0% | 1.3ms → 1.5ms |      4 → 11 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |   Delta |      % |          Time | Contentions | Caller   | Location                             |
| -----: | ------: | -----: | ------------: | ----------: | -------- | ------------------------------------ |
| +19.5% | +0.24ms | 100.0% | 1.3ms → 1.5ms |      4 → 11 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |   Delta |      % |          Time | Contentions | Caller     | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------- |
| +19.5% | +0.24ms | 100.0% | 1.3ms → 1.5ms |      4 → 11 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change |   Delta |             % |          Time | Contentions | Caller                                               | Location                                      |
| ------: | ------: | ------------: | ------------: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| +116.9% | +0.43ms | 29.6% → 53.7% | 0.4ms → 0.8ms |       1 → 5 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +19.5% | +0.24ms |        100.0% | 1.3ms → 1.5ms |      4 → 11 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |   Delta |      % |          Time | Contentions | Caller                                   | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------------- | ----------------------------------- |
| +19.5% | +0.24ms | 100.0% | 1.3ms → 1.5ms |      4 → 11 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |   Delta |      % |          Time | Contentions | Caller                              | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------- | ----------------------------------- |
| +19.5% | +0.24ms | 100.0% | 1.3ms → 1.5ms |      4 → 11 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |   Delta |      % |          Time | Contentions | Caller  | Location                                    |
| -----: | ------: | -----: | ------------: | ----------: | ------- | ------------------------------------------- |
| +19.5% | +0.24ms | 100.0% | 1.3ms → 1.5ms |      4 → 11 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |             % |        Time | Contentions | Caller                     | Location                                               |
| -----: | ------: | ------------: | ----------: | ----------: | -------------------------- | ------------------------------------------------------ |
|    new | +0.23ms | 0.0% → 100.0% | 0ms → 0.2ms |       0 → 7 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`)

| Change |   Delta |             % |        Time | Contentions | Caller    | Location                          |
| -----: | ------: | ------------: | ----------: | ----------: | --------- | --------------------------------- |
|    new | +0.19ms | 0.0% → 100.0% | 0ms → 0.2ms |       0 → 3 | `boxed()` | `java.util.stream.DoublePipeline` |

##### `boxed()` (`java.util.stream.DoublePipeline`)

| Change |   Delta |             % |        Time | Contentions | Caller            | Location                                               |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------- | ------------------------------------------------------ |
|    new | +0.19ms | 0.0% → 100.0% | 0ms → 0.2ms |       0 → 3 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

|  Change |   Delta |      % |          Time | Contentions | Caller                            | Location              |
| ------: | ------: | -----: | ------------: | ----------: | --------------------------------- | --------------------- |
| +124.0% | +0.17ms | 100.0% | 0.1ms → 0.3ms |      4 → 15 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files` |

##### `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`)

|  Change |   Delta |      % |           Time | Contentions | Caller       | Location                       |
| ------: | ------: | -----: | -------------: | ----------: | ------------ | ------------------------------ |
| +543.0% | +0.17ms | 100.0% | 30.8µs → 0.2ms |       1 → 8 | `walk(Path)` | `java.nio.file.FileTreeWalker` |

##### `walk(Path)` (`java.nio.file.FileTreeWalker`)

|  Change |   Delta |      % |           Time | Contentions | Caller                                      | Location              |
| ------: | ------: | -----: | -------------: | ----------: | ------------------------------------------- | --------------------- |
| +543.0% | +0.17ms | 100.0% | 30.8µs → 0.2ms |       1 → 8 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`)

| Change |   Delta |      % |          Time | Contentions | Caller                             | Location                        |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------- | ------------------------------- |
| +95.3% | +0.15ms | 100.0% | 0.2ms → 0.3ms |      5 → 15 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

##### `newDirectoryStream(Path)` (`java.nio.file.Files`)

|  Change |   Delta |      % |           Time | Contentions | Caller                          | Location                       |
| ------: | ------: | -----: | -------------: | ----------: | ------------------------------- | ------------------------------ |
| +419.3% | +0.13ms | 100.0% | 30.8µs → 0.2ms |       1 → 6 | `visit(Path, boolean, boolean)` | `java.nio.file.FileTreeWalker` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

|  Change |   Delta |      % |           Time | Contentions | Caller                                           | Location                         |
| ------: | ------: | -----: | -------------: | ----------: | ------------------------------------------------ | -------------------------------- |
| +337.3% | +0.10ms | 100.0% | 30.8µs → 0.1ms |       1 → 4 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream` |

##### `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`)

|  Change |   Delta |      % |           Time | Contentions | Caller                                             | Location                            |
| ------: | ------: | -----: | -------------: | ----------: | -------------------------------------------------- | ----------------------------------- |
| +337.3% | +0.10ms | 100.0% | 30.8µs → 0.1ms |       1 → 4 | `newDirectoryStream(Path, DirectoryStream$Filter)` | `sun.nio.fs.UnixFileSystemProvider` |

##### `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`)

|  Change |   Delta |      % |           Time | Contentions | Caller                     | Location              |
| ------: | ------: | -----: | -------------: | ----------: | -------------------------- | --------------------- |
| +337.3% | +0.10ms | 100.0% | 30.8µs → 0.1ms |       1 → 4 | `newDirectoryStream(Path)` | `java.nio.file.Files` |

##### `<clinit>()` (`java.nio.file.FileTreeWalker$EventType`)

| Change |   Delta |             % |         Time | Contentions | Caller                          | Location                       |
| -----: | ------: | ------------: | -----------: | ----------: | ------------------------------- | ------------------------------ |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 22.4µs |       0 → 1 | `visit(Path, boolean, boolean)` | `java.nio.file.FileTreeWalker` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |   Delta |      % |          Time | Contentions | Caller                       | Location                                 |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------- | ---------------------------------------- |
| -69.4% | -0.18ms | 100.0% | 0.3ms → 0.1ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |   Delta |      % |          Time | Contentions | Caller                       | Location                                          |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------- | ------------------------------------------------- |
| -69.4% | -0.18ms | 100.0% | 0.3ms → 0.1ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`)

| Change |   Delta |      % |          Time | Contentions | Caller              | Location                |
| -----: | ------: | -----: | ------------: | ----------: | ------------------- | ----------------------- |
| -69.4% | -0.18ms | 100.0% | 0.3ms → 0.1ms |           1 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

| Change |   Delta |             % |          Time | Contentions | Caller                             | Location                                               |
| -----: | ------: | ------------: | ------------: | ----------: | ---------------------------------- | ------------------------------------------------------ |
| -69.4% | -0.18ms |  16.8% → 5.7% | 0.3ms → 0.1ms |           1 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils`                        |
|  +1.6% | +0.02ms | 83.2% → 94.3% |         1.3ms |           4 | `average(List)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |  Time | Contentions | Caller                    | Location                        |
| -----: | ------: | -----: | ----: | ----------: | ------------------------- | ------------------------------- |
|  -6.6% | -0.03ms | 100.0% | 0.4ms |      6 → 16 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |  Time | Contentions | Caller                                  | Location                        |
| -----: | ------: | -----: | ----: | ----------: | --------------------------------------- | ------------------------------- |
|  -6.6% | -0.03ms | 100.0% | 0.4ms |      6 → 16 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |  Time | Contentions | Caller  | Location                                                   |
| -----: | ------: | -----: | ----: | ----------: | ------- | ---------------------------------------------------------- |
|  -6.6% | -0.03ms | 100.0% | 0.4ms |      6 → 16 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`)

| Change |   Delta |      % |  Time | Contentions | Caller                      | Location           |
| -----: | ------: | -----: | ----: | ----------: | --------------------------- | ------------------ |
|  -6.6% | -0.03ms | 100.0% | 0.4ms |      6 → 16 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change |   Delta |      % |  Time | Contentions | Caller  | Location           |
| -----: | ------: | -----: | ----: | ----------: | ------- | ------------------ |
|  -6.6% | -0.03ms | 100.0% | 0.4ms |      6 → 16 | `run()` | `java.lang.Thread` |

##### `preVisitDirectory(Object, BasicFileAttributes)` (`java.nio.file.SimpleFileVisitor`)

| Change |   Delta |      % |           Time | Contentions | Caller                                      | Location              |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------------------- | --------------------- |
| -45.0% | -0.03ms | 100.0% | 0.1ms → 32.0µs |       1 → 2 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `getDeclaredMethods0(boolean)` (`java.lang.Class`)

|  Change |   Delta |             % |         Time | Contentions | Caller                               | Location          |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------------ | ----------------- |
| removed | -0.02ms | 100.0% → 0.0% | 20.0µs → 0ms |       1 → 0 | `privateGetDeclaredMethods(boolean)` | `java.lang.Class` |

##### `privateGetDeclaredMethods(boolean)` (`java.lang.Class`)

|  Change |   Delta |             % |         Time | Contentions | Caller                                          | Location          |
| ------: | ------: | ------------: | -----------: | ----------: | ----------------------------------------------- | ----------------- |
| removed | -0.02ms | 100.0% → 0.0% | 20.0µs → 0ms |       1 → 0 | `getMethodsRecursive(String, Class[], boolean)` | `java.lang.Class` |

##### `getMethodsRecursive(String, Class[], boolean)` (`java.lang.Class`)

|  Change |   Delta |             % |         Time | Contentions | Caller                        | Location          |
| ------: | ------: | ------------: | -----------: | ----------: | ----------------------------- | ----------------- |
| removed | -0.02ms | 100.0% → 0.0% | 20.0µs → 0ms |       1 → 0 | `getMethod0(String, Class[])` | `java.lang.Class` |

##### `getMethod0(String, Class[])` (`java.lang.Class`)

|  Change |   Delta |             % |         Time | Contentions | Caller                       | Location          |
| ------: | ------: | ------------: | -----------: | ----------: | ---------------------------- | ----------------- |
| removed | -0.02ms | 100.0% → 0.0% | 20.0µs → 0ms |       1 → 0 | `getMethod(String, Class[])` | `java.lang.Class` |

##### `getMethod(String, Class[])` (`java.lang.Class`)

|  Change |   Delta |             % |         Time | Contentions | Caller                     | Location          |
| ------: | ------: | ------------: | -----------: | ----------: | -------------------------- | ----------------- |
| removed | -0.02ms | 100.0% → 0.0% | 20.0µs → 0ms |       1 → 0 | `getEnumConstantsShared()` | `java.lang.Class` |

##### `getEnumConstantsShared()` (`java.lang.Class`)

|  Change |   Delta |             % |         Time | Contentions | Caller                          | Location             |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------- | -------------------- |
| removed | -0.02ms | 100.0% → 0.0% | 20.0µs → 0ms |       1 → 0 | `getEnumConstantsShared(Class)` | `java.lang.System$2` |

##### `getEnumConstantsShared(Class)` (`java.lang.System$2`)

|  Change |   Delta |             % |         Time | Contentions | Caller               | Location            |
| ------: | ------: | ------------: | -----------: | ----------: | -------------------- | ------------------- |
| removed | -0.02ms | 100.0% → 0.0% | 20.0µs → 0ms |       1 → 0 | `getUniverse(Class)` | `java.util.EnumSet` |

##### `getUniverse(Class)` (`java.util.EnumSet`)

|  Change |   Delta |             % |         Time | Contentions | Caller          | Location            |
| ------: | ------: | ------------: | -----------: | ----------: | --------------- | ------------------- |
| removed | -0.02ms | 100.0% → 0.0% | 20.0µs → 0ms |       1 → 0 | `noneOf(Class)` | `java.util.EnumSet` |

##### `noneOf(Class)` (`java.util.EnumSet`)

|  Change |   Delta |             % |         Time | Contentions | Caller                            | Location              |
| ------: | ------: | ------------: | -----------: | ----------: | --------------------------------- | --------------------- |
| removed | -0.02ms | 100.0% → 0.0% | 20.0µs → 0ms |       1 → 0 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change |   Delta |      % |          Time | Contentions | Callee     | Location                            |
| ------: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------- |
| +116.9% | +0.43ms | 100.0% | 0.4ms → 0.8ms |       1 → 5 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change |   Delta |      % |          Time | Contentions | Callee                                    | Location                                      |
| ------: | ------: | -----: | ------------: | ----------: | ----------------------------------------- | --------------------------------------------- |
| +116.9% | +0.43ms | 100.0% | 0.4ms → 0.8ms |       1 → 5 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change |   Delta |      % |          Time | Contentions | Callee                 | Location                            |
| ------: | ------: | -----: | ------------: | ----------: | ---------------------- | ----------------------------------- |
| +116.9% | +0.43ms | 100.0% | 0.4ms → 0.8ms |       1 → 5 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |              % |        Time | Contentions | Callee            | Location                                               |
| -----: | ------: | -------------: | ----------: | ----------: | ----------------- | ------------------------------------------------------ |
|    new | +0.23ms |   0.0% → 15.0% | 0ms → 0.2ms |       0 → 7 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  +1.6% | +0.02ms | 100.0% → 85.0% |       1.3ms |           4 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |      % |          Time | Contentions | Callee                     | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------- | ------------------------------------------------------ |
| +19.5% | +0.24ms | 100.0% | 1.3ms → 1.5ms |      4 → 11 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +19.5% | +0.24ms | 100.0% | 1.3ms → 1.5ms |      4 → 11 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change |   Delta |             % |          Time | Contentions | Callee              | Location                                               |
| ------: | ------: | ------------: | ------------: | ----------: | ------------------- | ------------------------------------------------------ |
| +116.9% | +0.43ms | 29.6% → 53.7% | 0.4ms → 0.8ms |       1 → 5 | `join()`            | `java.util.concurrent.ForkJoinTask`                    |
|  +19.5% | +0.24ms |        100.0% | 1.3ms → 1.5ms |      4 → 11 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |   Delta |      % |          Time | Contentions | Callee      | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | ----------- | ------------------------------------------------------ |
| +19.5% | +0.24ms | 100.0% | 1.3ms → 1.5ms |      4 → 11 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |      % |          Time | Contentions | Callee   | Location                             |
| -----: | ------: | -----: | ------------: | ----------: | -------- | ------------------------------------ |
| +19.5% | +0.24ms | 100.0% | 1.3ms → 1.5ms |      4 → 11 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |   Delta |      % |          Time | Contentions | Callee     | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------- |
| +19.5% | +0.24ms | 100.0% | 1.3ms → 1.5ms |      4 → 11 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |   Delta |      % |          Time | Contentions | Callee                                               | Location                                      |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| +19.5% | +0.24ms | 100.0% | 1.3ms → 1.5ms |      4 → 11 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |   Delta |      % |          Time | Contentions | Callee                                   | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------------- | ----------------------------------- |
| +19.5% | +0.24ms | 100.0% | 1.3ms → 1.5ms |      4 → 11 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |   Delta |      % |          Time | Contentions | Callee                              | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------- | ----------------------------------- |
| +19.5% | +0.24ms | 100.0% | 1.3ms → 1.5ms |      4 → 11 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |            % |         Time | Contentions | Callee                 | Location                             |
| -----: | ------: | -----------: | -----------: | ----------: | ---------------------- | ------------------------------------ |
|    new | +0.19ms | 0.0% → 86.5% |  0ms → 0.2ms |       0 → 3 | `boxed()`              | `java.util.stream.DoublePipeline`    |
|    new | +0.02ms |  0.0% → 9.1% | 0ms → 20.4µs |       0 → 2 | `stream(double[])`     | `java.util.Arrays`                   |
|    new | +0.01ms |  0.0% → 4.4% | 0ms → 10.0µs |       0 → 2 | `toArray(IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `boxed()` (`java.util.stream.DoublePipeline`)

| Change |   Delta |             % |        Time | Contentions | Callee                          | Location                          |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------- | --------------------------------- |
|    new | +0.19ms | 0.0% → 100.0% | 0ms → 0.2ms |       0 → 3 | `mapToObj(DoubleFunction, int)` | `java.util.stream.DoublePipeline` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

|  Change |   Delta |             % |           Time | Contentions | Callee                                           | Location                          |
| ------: | ------: | ------------: | -------------: | ----------: | ------------------------------------------------ | --------------------------------- |
| +543.0% | +0.17ms | 22.7% → 65.2% | 30.8µs → 0.2ms |       1 → 8 | `walk(Path)`                                     | `java.nio.file.FileTreeWalker`    |
|  -45.0% | -0.03ms | 42.9% → 10.5% | 0.1ms → 32.0µs |       1 → 2 | `preVisitDirectory(Object, BasicFileAttributes)` | `java.nio.file.SimpleFileVisitor` |
|     new | +0.01ms |   0.0% → 4.7% |   0ms → 14.4µs |       0 → 1 | `<clinit>()`                                     | `java.nio.file.Files$3`           |
|     new | +0.01ms |   0.0% → 3.7% |   0ms → 11.2µs |       0 → 1 | `<clinit>()`                                     | `java.nio.file.FileTreeWalker`    |
|  +67.4% | +3.71µs |   4.1% → 3.0% |  5.5µs → 9.2µs |           1 | `<init>(Collection, int)`                        | `java.nio.file.FileTreeWalker`    |

##### `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`)

|  Change |   Delta |              % |           Time | Contentions | Callee                     | Location                                 |
| ------: | ------: | -------------: | -------------: | ----------: | -------------------------- | ---------------------------------------- |
| +419.3% | +0.13ms | 100.0% → 80.8% | 30.8µs → 0.2ms |       1 → 6 | `newDirectoryStream(Path)` | `java.nio.file.Files`                    |
|     new | +0.02ms |   0.0% → 11.3% |   0ms → 22.4µs |       0 → 1 | `<clinit>()`               | `java.nio.file.FileTreeWalker$EventType` |

##### `walk(Path)` (`java.nio.file.FileTreeWalker`)

|  Change |   Delta |      % |           Time | Contentions | Callee                          | Location                       |
| ------: | ------: | -----: | -------------: | ----------: | ------------------------------- | ------------------------------ |
| +543.0% | +0.17ms | 100.0% | 30.8µs → 0.2ms |       1 → 8 | `visit(Path, boolean, boolean)` | `java.nio.file.FileTreeWalker` |

##### `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`)

|  Change |   Delta |              % |          Time | Contentions | Callee                                      | Location              |
| ------: | ------: | -------------: | ------------: | ----------: | ------------------------------------------- | --------------------- |
| +124.0% | +0.17ms | 87.2% → 100.0% | 0.1ms → 0.3ms |      4 → 15 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |
| removed | -0.02ms |   12.8% → 0.0% |  20.0µs → 0ms |       1 → 0 | `noneOf(Class)`                             | `java.util.EnumSet`   |

##### `newDirectoryStream(Path)` (`java.nio.file.Files`)

|  Change |   Delta |              % |           Time | Contentions | Callee                                             | Location                              |
| ------: | ------: | -------------: | -------------: | ----------: | -------------------------------------------------- | ------------------------------------- |
| +337.3% | +0.10ms | 100.0% → 84.2% | 30.8µs → 0.1ms |       1 → 4 | `newDirectoryStream(Path, DirectoryStream$Filter)` | `sun.nio.fs.UnixFileSystemProvider`   |
|     new | +0.02ms |    0.0% → 9.6% |   0ms → 15.3µs |       0 → 1 | `<clinit>()`                                       | `java.nio.file.Files$AcceptAllFilter` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

| Change |   Delta |           % |        Time | Contentions | Callee     | Location                                                     |
| -----: | ------: | ----------: | ----------: | ----------: | ---------- | ------------------------------------------------------------ |
|    new | +0.01ms | 0.0% → 7.3% | 0ms → 9.8µs |       0 → 1 | `<init>()` | `java.util.concurrent.locks.ReentrantReadWriteLock$FairSync` |

##### `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`)

|  Change |   Delta |      % |           Time | Contentions | Callee            | Location                                            |
| ------: | ------: | -----: | -------------: | ----------: | ----------------- | --------------------------------------------------- |
| +337.3% | +0.10ms | 100.0% | 30.8µs → 0.1ms |       1 → 4 | `<init>(boolean)` | `java.util.concurrent.locks.ReentrantReadWriteLock` |

##### `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`)

|  Change |   Delta |      % |           Time | Contentions | Callee                                           | Location                         |
| ------: | ------: | -----: | -------------: | ----------: | ------------------------------------------------ | -------------------------------- |
| +337.3% | +0.10ms | 100.0% | 30.8µs → 0.1ms |       1 → 4 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |   Delta |      % |          Time | Contentions | Callee                             | Location                                 |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------- | ---------------------------------------- |
| -69.4% | -0.18ms | 100.0% | 0.3ms → 0.1ms |           1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`)

| Change |   Delta |      % |          Time | Contentions | Callee                       | Location                                 |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------- | ---------------------------------------- |
| -69.4% | -0.18ms | 100.0% | 0.3ms → 0.1ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

| Change |   Delta |             % |          Time | Contentions | Callee                       | Location                                          |
| -----: | ------: | ------------: | ------------: | ----------: | ---------------------------- | ------------------------------------------------- |
| -69.4% | -0.18ms |  16.8% → 5.7% | 0.3ms → 0.1ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |
|  +1.6% | +0.02ms | 83.2% → 94.3% |         1.3ms |           4 | `loadClass(String, boolean)` | `java.lang.ClassLoader`                           |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |             % |          Time | Contentions | Callee                            | Location                |
| -----: | ------: | ------------: | ------------: | ----------: | --------------------------------- | ----------------------- |
| -69.4% | -0.18ms | 61.9% → 20.3% | 0.3ms → 0.1ms |           1 | `loadClass(String)`               | `java.lang.ClassLoader` |
| +95.3% | +0.15ms | 38.1% → 79.7% | 0.2ms → 0.3ms |      5 → 15 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files`   |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |  Time | Contentions | Callee                             | Location                        |
| -----: | ------: | -----: | ----: | ----------: | ---------------------------------- | ------------------------------- |
|  -6.6% | -0.03ms | 100.0% | 0.4ms |      6 → 16 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |  Time | Contentions | Callee                    | Location                        |
| -----: | ------: | -----: | ----: | ----------: | ------------------------- | ------------------------------- |
|  -6.6% | -0.03ms | 100.0% | 0.4ms |      6 → 16 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`)

| Change |   Delta |      % |  Time | Contentions | Callee                                  | Location                        |
| -----: | ------: | -----: | ----: | ----------: | --------------------------------------- | ------------------------------- |
|  -6.6% | -0.03ms | 100.0% | 0.4ms |      6 → 16 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change |   Delta |      % |  Time | Contentions | Callee  | Location                                                   |
| -----: | ------: | -----: | ----: | ----------: | ------- | ---------------------------------------------------------- |
|  -6.6% | -0.03ms | 100.0% | 0.4ms |      6 → 16 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68` |

##### `run()` (`java.lang.Thread`)

| Change |   Delta |      % |  Time | Contentions | Callee                      | Location           |
| -----: | ------: | -----: | ----: | ----------: | --------------------------- | ------------------ |
|  -6.6% | -0.03ms | 100.0% | 0.4ms |      6 → 16 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `preVisitDirectory(Object, BasicFileAttributes)` (`java.nio.file.SimpleFileVisitor`)

| Change |   Delta |            % |         Time | Contentions | Callee       | Location                        |
| -----: | ------: | -----------: | -----------: | ----------: | ------------ | ------------------------------- |
|    new | +0.02ms | 0.0% → 61.4% | 0ms → 19.7µs |       0 → 1 | `<clinit>()` | `java.nio.file.FileVisitResult` |

##### `privateGetDeclaredMethods(boolean)` (`java.lang.Class`)

|  Change |   Delta |             % |         Time | Contentions | Callee                         | Location          |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------ | ----------------- |
| removed | -0.02ms | 100.0% → 0.0% | 20.0µs → 0ms |       1 → 0 | `getDeclaredMethods0(boolean)` | `java.lang.Class` |

##### `getMethodsRecursive(String, Class[], boolean)` (`java.lang.Class`)

|  Change |   Delta |             % |         Time | Contentions | Callee                               | Location          |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------------ | ----------------- |
| removed | -0.02ms | 100.0% → 0.0% | 20.0µs → 0ms |       1 → 0 | `privateGetDeclaredMethods(boolean)` | `java.lang.Class` |

##### `getMethod0(String, Class[])` (`java.lang.Class`)

|  Change |   Delta |             % |         Time | Contentions | Callee                                          | Location          |
| ------: | ------: | ------------: | -----------: | ----------: | ----------------------------------------------- | ----------------- |
| removed | -0.02ms | 100.0% → 0.0% | 20.0µs → 0ms |       1 → 0 | `getMethodsRecursive(String, Class[], boolean)` | `java.lang.Class` |

##### `getMethod(String, Class[])` (`java.lang.Class`)

|  Change |   Delta |             % |         Time | Contentions | Callee                        | Location          |
| ------: | ------: | ------------: | -----------: | ----------: | ----------------------------- | ----------------- |
| removed | -0.02ms | 100.0% → 0.0% | 20.0µs → 0ms |       1 → 0 | `getMethod0(String, Class[])` | `java.lang.Class` |

##### `getEnumConstantsShared()` (`java.lang.Class`)

|  Change |   Delta |             % |         Time | Contentions | Callee                       | Location          |
| ------: | ------: | ------------: | -----------: | ----------: | ---------------------------- | ----------------- |
| removed | -0.02ms | 100.0% → 0.0% | 20.0µs → 0ms |       1 → 0 | `getMethod(String, Class[])` | `java.lang.Class` |

##### `getEnumConstantsShared(Class)` (`java.lang.System$2`)

|  Change |   Delta |             % |         Time | Contentions | Callee                     | Location          |
| ------: | ------: | ------------: | -----------: | ----------: | -------------------------- | ----------------- |
| removed | -0.02ms | 100.0% → 0.0% | 20.0µs → 0ms |       1 → 0 | `getEnumConstantsShared()` | `java.lang.Class` |

##### `getUniverse(Class)` (`java.util.EnumSet`)

|  Change |   Delta |             % |         Time | Contentions | Callee                          | Location             |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------- | -------------------- |
| removed | -0.02ms | 100.0% → 0.0% | 20.0µs → 0ms |       1 → 0 | `getEnumConstantsShared(Class)` | `java.lang.System$2` |

##### `noneOf(Class)` (`java.util.EnumSet`)

|  Change |   Delta |             % |         Time | Contentions | Callee               | Location            |
| ------: | ------: | ------------: | -----------: | ----------: | -------------------- | ------------------- |
| removed | -0.02ms | 100.0% → 0.0% | 20.0µs → 0ms |       1 → 0 | `getUniverse(Class)` | `java.util.EnumSet` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time blocked in their leaf frame.

|  Change |   Delta |             % |           Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------: | ------: | ------------: | -------------: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +105.8% | +0.39ms | 22.3% → 40.6% |  0.4ms → 0.8ms |       1 → 2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                         |
|     new | +0.17ms |   0.0% → 9.2% |    0ms → 0.2ms |       0 → 2 | `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`) ← `boxed()` ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| +305.4% | +0.09ms |   1.9% → 6.6% | 30.8µs → 0.1ms |       1 → 3 | `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`) ← `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`) ← `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new | +0.02ms |   0.0% → 1.2% |   0ms → 22.4µs |       0 → 1 | `<clinit>()` (`java.nio.file.FileTreeWalker$EventType`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     new | +0.02ms |   0.0% → 1.1% |   0ms → 21.0µs |       0 → 1 | `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`) ← `boxed()` ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                    |
|     new | +0.02ms |   0.0% → 1.0% |   0ms → 19.7µs |       0 → 1 | `<clinit>()` (`java.nio.file.FileVisitResult`) ← `preVisitDirectory(Object, BasicFileAttributes)` (`java.nio.file.SimpleFileVisitor`) ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|     new | +0.02ms |   0.0% → 0.8% |   0ms → 15.8µs |       0 → 1 | `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|     new | +0.02ms |   0.0% → 0.8% |   0ms → 15.3µs |       0 → 1 | `<clinit>()` (`java.nio.file.Files$AcceptAllFilter`) ← `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|     new | +0.01ms |   0.0% → 0.8% |   0ms → 14.4µs |       0 → 1 | `<clinit>()` (`java.nio.file.Files$3`) ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|     new | +0.01ms |   0.0% → 0.6% |   0ms → 11.2µs |       0 → 1 | `<clinit>()` (`java.nio.file.FileTreeWalker`) ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|     new | +0.01ms |   0.0% → 0.6% |   0ms → 11.1µs |       0 → 1 | `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`) ← `stream(double[], int, int)` (`java.util.Arrays`) ← `stream(double[])` ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                          |
|     new | +0.01ms |   0.0% → 0.5% |   0ms → 10.0µs |       0 → 1 | `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|     new | +0.01ms |   0.0% → 0.5% |    0ms → 9.8µs |       0 → 1 | `<init>()` (`java.util.concurrent.locks.ReentrantReadWriteLock$Sync`) ← `<init>()` (`java.util.concurrent.locks.ReentrantReadWriteLock$FairSync`) ← `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`) ← `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`) ← `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                               |
|     new | +0.01ms |   0.0% → 0.5% |    0ms → 9.3µs |       0 → 1 | `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`) ← `stream(double[], int, int)` (`java.util.Arrays`) ← `stream(double[])` ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|     new | +0.01ms |   0.0% → 0.5% |    0ms → 9.3µs |       0 → 1 | `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`) ← `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|  +67.4% | +3.71µs |   0.3% → 0.5% |  5.5µs → 9.2µs |           1 | `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`) ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     new | +0.71µs |  0.0% → <0.1% |    0ms → 0.7µs |       0 → 1 | `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`) ← `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                   |

### Improvements

Call stacks with the largest decrease in time blocked in their leaf frame.

|  Change |   Delta |             % |            Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------: | ------: | ------------: | --------------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  -42.3% | -0.37ms | 53.1% → 27.1% |   0.9ms → 0.5ms |       3 → 2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)           |
|  -69.4% | -0.18ms |  15.2% → 4.1% |   0.3ms → 0.1ms |           1 | `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String)` (`java.lang.ClassLoader`) ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                             |
|  -78.8% | -0.05ms |   3.5% → 0.7% |  0.1ms → 12.4µs |           1 | `preVisitDirectory(Object, BasicFileAttributes)` (`java.nio.file.SimpleFileVisitor`) ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                              |
| removed | -0.02ms |   1.2% → 0.0% |    20.0µs → 0ms |       1 → 0 | `getDeclaredMethods0(boolean)` (`java.lang.Class`) ← `privateGetDeclaredMethods(boolean)` ← `getMethodsRecursive(String, Class[], boolean)` ← `getMethod0(String, Class[])` ← `getMethod(String, Class[])` ← `getEnumConstantsShared()` ← `getEnumConstantsShared(Class)` (`java.lang.System$2`) ← `getUniverse(Class)` (`java.util.EnumSet`) ← `noneOf(Class)` ← `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`) ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` |
|   -5.1% | -2.08µs |   2.5% → 2.1% | 41.2µs → 39.1µs |       1 → 2 | `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                     |

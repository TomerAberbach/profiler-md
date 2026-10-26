# Lock contention profile diff

Blocked 1.6ms → 8.0ms (+6.36ms, +393.5%) over 11 → 9 contentions (146.9µs → 886.1µs per contention).

| Category         |  Change |   Delta |              % |          Time | Contentions |
| ---------------- | ------: | ------: | -------------: | ------------: | ----------: |
| Standard library | +388.0% | +6.27ms | 100.0% → 98.9% | 1.6ms → 7.9ms |      11 → 8 |
| Ours             |     new | +0.09ms |    0.0% → 1.1% |   0ms → 0.1ms |       0 → 1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 1.0ms → 7.7ms (64.9% → 96.2%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 1.0ms → 7.7ms (64.9% → 96.2%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       └── 1.0ms → 7.7ms (64.9% → 96.2%) scan(ForkJoinPool$WorkQueue, int, int)
│           └── 1.0ms → 7.7ms (64.9% → 96.2%) topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool$WorkQueue
│               └── 1.0ms → 7.7ms (64.9% → 96.2%) doExec() at java.util.concurrent.ForkJoinTask
│                   └── … 1.0ms → 7.7ms (64.9% → 96.2%) exec() at java.util.concurrent.RecursiveTask
│                       └── 1.0ms → 7.7ms (64.9% → 96.2%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│                           └── 1.0ms → 7.7ms (64.9% → 96.2%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│                               └── … 1.0ms → 7.7ms (64.9% → 96.2%) computeClusterAverages() at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│                                   └── 1.0ms → 7.7ms (64.9% → 96.2%, self 0.0% → 1.1%) average(List)
│                                       └── 1.0ms → 7.6ms (64.9% → 95.1%) loadClass(String) at java.lang.ClassLoader
│                                           └── 1.0ms → 7.6ms (64.9% → 95.1%) loadClass(String, boolean)
└── 0.6ms → 0.3ms (35.1% → 3.8%) run() at java.lang.Thread
    └── 0.6ms → 0.3ms (35.1% → 3.8%) runWith(Object, Runnable)
        └── 0.6ms → 0.3ms (35.1% → 3.8%) run() at org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68
            └── 0.6ms → 0.3ms (35.1% → 3.8%) lambda$createScratchDirectory$1(Path) at org.renaissance.core.DirUtils
                └── 0.6ms → 0.3ms (35.1% → 3.8%) deleteRecursively(Path)
                    └── 0.6ms → 0.3ms (35.1% → 3.8%) deleteRecursively(Path, boolean)
                        ├── 0.4ms → 0.2ms (22.5% → 2.8%) loadClass(String) at java.lang.ClassLoader
                        │   └── 0.4ms → 0.2ms (22.5% → 2.8%) loadClass(String, boolean) at jdk.internal.loader.ClassLoaders$AppClassLoader
                        │       └── 0.4ms → 0.2ms (22.5% → 2.8%) loadClass(String, boolean) at jdk.internal.loader.BuiltinClassLoader
                        │           └── 0.4ms → 0.2ms (22.5% → 2.8%, self 24.4% → 2.8% globally) loadClassOrNull(String, boolean)
                        └── 0.2ms → 0.1ms (12.6% → 1.1%) walkFileTree(Path, FileVisitor) at java.nio.file.Files
                            ├── 0.2ms → 0.1ms (11.5% → 1.1%, self 3.6% → 0.6%) walkFileTree(Path, Set, int, FileVisitor)
                            │   ├── 0.1ms → 36.5µs (5.9% → 0.5%) walk(Path) at java.nio.file.FileTreeWalker
                            │   │   └── 0.1ms → 36.5µs (5.9% → 0.5%) visit(Path, boolean, boolean)
                            │   │       ├── 0.1ms → 36.5µs (4.5% → 0.5%) newDirectoryStream(Path) at java.nio.file.Files
                            │   │       │   └── 0.1ms → 36.5µs (4.5% → 0.5%) newDirectoryStream(Path, DirectoryStream$Filter) at sun.nio.fs.UnixFileSystemProvider
                            │   │       │       └── 0.1ms → 36.5µs (4.5% → 0.5%) <init>(UnixPath, long, DirectoryStream$Filter) at sun.nio.fs.UnixDirectoryStream
                            │   │       │           └── 0.1ms → 36.5µs (4.5% → 0.5%, self 4.5% → 0.4%) <init>(boolean) at java.util.concurrent.locks.ReentrantReadWriteLock
                            │   │       │               └── 0ms → 5.1µs (0.0% → 0.1%) <init>() at java.util.concurrent.locks.ReentrantReadWriteLock$FairSync
                            │   │       │                   └── 0ms → 5.1µs (0.0% → 0.1%) <init>() at java.util.concurrent.locks.ReentrantReadWriteLock$Sync
                            │   │       └── … 23.7µs → 0ms (1.5% → 0.0%) iterator(DirectoryStream) at sun.nio.fs.UnixDirectoryStream
                            │   └── 30.3µs → 0ms (1.9% → 0.0%) visitFile(Object, BasicFileAttributes) at org.renaissance.core.DirUtils$1
                            │       └── 30.3µs → 0ms (1.9% → 0.0%) visitFile(Path, BasicFileAttributes)
                            │           └── 30.3µs → 0ms (1.9% → 0.0%) loadClass(String) at java.lang.ClassLoader
                            │               └── 30.3µs → 0ms (1.9% → 0.0%) loadClass(String, boolean) at jdk.internal.loader.ClassLoaders$AppClassLoader
                            │                   └── 30.3µs → 0ms (1.9% → 0.0%) loadClass(String, boolean) at jdk.internal.loader.BuiltinClassLoader
                            │                       └── 30.3µs → 0ms (1.9% → 0.0%) loadClassOrNull(String, boolean)
                            └── … 18.1µs → 0ms (1.1% → 0.0%) getDeclaredMethods0(boolean) at java.lang.Class
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |   Delta |             % |          Time | Contentions | Function                     | Location                                                 |
| ------: | ------: | ------------: | ------------: | ----------: | ---------------------------- | -------------------------------------------------------- |
| +622.5% | +6.53ms | 64.9% → 95.1% | 1.0ms → 7.6ms |           4 | `loadClass(String, boolean)` | `java.lang.ClassLoader`                                  |
|     new | +0.09ms |   0.0% → 1.1% |   0ms → 0.1ms |       0 → 1 | `average(List)`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`   |
|     new | +0.01ms |   0.0% → 0.1% |   0ms → 5.1µs |       0 → 1 | `<init>()`                   | `java.util.concurrent.locks.ReentrantReadWriteLock$Sync` |

##### Standard library

|  Change |   Delta |             % |          Time | Contentions | Function                     | Location                                                 |
| ------: | ------: | ------------: | ------------: | ----------: | ---------------------------- | -------------------------------------------------------- |
| +622.5% | +6.53ms | 64.9% → 95.1% | 1.0ms → 7.6ms |           4 | `loadClass(String, boolean)` | `java.lang.ClassLoader`                                  |
|     new | +0.01ms |   0.0% → 0.1% |   0ms → 5.1µs |       0 → 1 | `<init>()`                   | `java.util.concurrent.locks.ReentrantReadWriteLock$Sync` |

##### Ours

| Change |   Delta |           % |        Time | Contentions | Function        | Location                                               |
| -----: | ------: | ----------: | ----------: | ----------: | --------------- | ------------------------------------------------------ |
|    new | +0.09ms | 0.0% → 1.1% | 0ms → 0.1ms |       0 → 1 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

#### Improvements

Functions with the largest decrease in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

|  Change |   Delta |            % |           Time | Contentions | Function                                    | Location                                            |
| ------: | ------: | -----------: | -------------: | ----------: | ------------------------------------------- | --------------------------------------------------- |
|  -43.8% | -0.17ms | 24.4% → 2.8% |  0.4ms → 0.2ms |       2 → 1 | `loadClassOrNull(String, boolean)`          | `jdk.internal.loader.BuiltinClassLoader`            |
|  -56.7% | -0.04ms |  4.5% → 0.4% | 0.1ms → 31.3µs |       2 → 1 | `<init>(boolean)`                           | `java.util.concurrent.locks.ReentrantReadWriteLock` |
| removed | -0.02ms |  1.5% → 0.0% |   23.7µs → 0ms |       1 → 0 | `iterator(DirectoryStream)`                 | `sun.nio.fs.UnixDirectoryStream`                    |
| removed | -0.02ms |  1.1% → 0.0% |   18.1µs → 0ms |       1 → 0 | `getDeclaredMethods0(boolean)`              | `java.lang.Class`                                   |
|  -19.6% | -0.01ms |  3.6% → 0.6% | 0.1ms → 47.3µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files`                               |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|  Change |   Delta |      % |          Time | Contentions | Location                    |
| ------: | ------: | -----: | ------------: | ----------: | --------------------------- |
| +622.5% | +6.53ms | 100.0% | 1.0ms → 7.6ms |           4 | `java.lang.ClassLoader:573` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |             % |        Time | Contentions | Location                                                   |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------------------------------------- |
|    new | +0.09ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:332` |

##### `<init>()` (`java.util.concurrent.locks.ReentrantReadWriteLock$Sync`)

| Change |   Delta |             % |        Time | Contentions | Location                                                     |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------ |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 5.1µs |       0 → 1 | `java.util.concurrent.locks.ReentrantReadWriteLock$Sync:339` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |   Delta |      % |          Time | Contentions | Location                                     |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------------------------- |
| -43.8% | -0.17ms | 100.0% | 0.4ms → 0.2ms |       2 → 1 | `jdk.internal.loader.BuiltinClassLoader:651` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

|  Change |   Delta |              % |           Time | Contentions | Location                                                |
| ------: | ------: | -------------: | -------------: | ----------: | ------------------------------------------------------- |
| removed | -0.02ms |   30.9% → 0.0% |   22.4µs → 0ms |       1 → 0 | `java.util.concurrent.locks.ReentrantReadWriteLock:242` |
|  -37.4% | -0.02ms | 69.1% → 100.0% | 0.1ms → 31.3µs |           1 | `java.util.concurrent.locks.ReentrantReadWriteLock:241` |

##### `iterator(DirectoryStream)` (`sun.nio.fs.UnixDirectoryStream`)

|  Change |   Delta |             % |         Time | Contentions | Location                             |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------------ |
| removed | -0.02ms | 100.0% → 0.0% | 23.7µs → 0ms |       1 → 0 | `sun.nio.fs.UnixDirectoryStream:119` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

| Change |   Delta |      % |           Time | Contentions | Location                   |
| -----: | ------: | -----: | -------------: | ----------: | -------------------------- |
| -19.6% | -0.01ms | 100.0% | 0.1ms → 47.3µs |           1 | `java.nio.file.Files:2791` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|  Change |   Delta |      % |          Time | Contentions | Caller              | Location                |
| ------: | ------: | -----: | ------------: | ----------: | ------------------- | ----------------------- |
| +622.5% | +6.53ms | 100.0% | 1.0ms → 7.6ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |             % |        Time | Contentions | Caller                     | Location                                               |
| -----: | ------: | ------------: | ----------: | ----------: | -------------------------- | ------------------------------------------------------ |
|    new | +0.09ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 1 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `<init>()` (`java.util.concurrent.locks.ReentrantReadWriteLock$Sync`)

| Change |   Delta |             % |        Time | Contentions | Caller     | Location                                                     |
| -----: | ------: | ------------: | ----------: | ----------: | ---------- | ------------------------------------------------------------ |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 5.1µs |       0 → 1 | `<init>()` | `java.util.concurrent.locks.ReentrantReadWriteLock$FairSync` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |   Delta |      % |          Time | Contentions | Caller                       | Location                                 |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------- | ---------------------------------------- |
| -43.8% | -0.17ms | 100.0% | 0.4ms → 0.2ms |       2 → 1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

| Change |   Delta |      % |           Time | Contentions | Caller                                           | Location                         |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------------------------ | -------------------------------- |
| -56.7% | -0.04ms | 100.0% | 0.1ms → 31.3µs |       2 → 1 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream` |

##### `iterator(DirectoryStream)` (`sun.nio.fs.UnixDirectoryStream`)

|  Change |   Delta |             % |         Time | Contentions | Caller       | Location                         |
| ------: | ------: | ------------: | -----------: | ----------: | ------------ | -------------------------------- |
| removed | -0.02ms | 100.0% → 0.0% | 23.7µs → 0ms |       1 → 0 | `iterator()` | `sun.nio.fs.UnixDirectoryStream` |

##### `getDeclaredMethods0(boolean)` (`java.lang.Class`)

|  Change |   Delta |             % |         Time | Contentions | Caller                               | Location          |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------------ | ----------------- |
| removed | -0.02ms | 100.0% → 0.0% | 18.1µs → 0ms |       1 → 0 | `privateGetDeclaredMethods(boolean)` | `java.lang.Class` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

| Change |   Delta |      % |           Time | Contentions | Caller                            | Location              |
| -----: | ------: | -----: | -------------: | ----------: | --------------------------------- | --------------------- |
| -19.6% | -0.01ms | 100.0% | 0.1ms → 47.3µs |           1 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files` |

### Total time

#### Regressions

Functions with the largest increase in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |   Delta |             % |          Time | Contentions | Function                                             | Location                                                               |
| ------: | ------: | ------------: | ------------: | ----------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| +630.9% | +6.62ms | 64.9% → 96.2% | 1.0ms → 7.7ms |       4 → 5 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +630.9% | +6.62ms | 64.9% → 96.2% | 1.0ms → 7.7ms |       4 → 5 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +630.9% | +6.62ms | 64.9% → 96.2% | 1.0ms → 7.7ms |       4 → 5 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +630.9% | +6.62ms | 64.9% → 96.2% | 1.0ms → 7.7ms |       4 → 5 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| +630.9% | +6.62ms | 64.9% → 96.2% | 1.0ms → 7.7ms |       4 → 5 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
| +630.9% | +6.62ms | 64.9% → 96.2% | 1.0ms → 7.7ms |       4 → 5 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
| +630.9% | +6.62ms | 64.9% → 96.2% | 1.0ms → 7.7ms |       4 → 5 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| +630.9% | +6.62ms | 64.9% → 96.2% | 1.0ms → 7.7ms |       4 → 5 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
| +630.9% | +6.62ms | 64.9% → 96.2% | 1.0ms → 7.7ms |       4 → 5 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
| +630.9% | +6.62ms | 64.9% → 96.2% | 1.0ms → 7.7ms |       4 → 5 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
| +622.5% | +6.53ms | 64.9% → 95.1% | 1.0ms → 7.6ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                                                |
| +440.7% | +6.36ms | 89.3% → 97.8% | 1.4ms → 7.8ms |       6 → 5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                                                |
| +876.1% | +5.93ms | 41.9% → 82.8% | 0.7ms → 6.6ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| +876.1% | +5.93ms | 41.9% → 82.8% | 0.7ms → 6.6ms |           2 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                                    |
| +876.1% | +5.93ms | 41.9% → 82.8% | 0.7ms → 6.6ms |           2 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                                    |
|     new | +5.37ms |  0.0% → 67.3% |   0ms → 5.4ms |       0 → 1 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
|     new | +5.37ms |  0.0% → 67.3% |   0ms → 5.4ms |       0 → 1 | `lambda$run$0(int, List, int)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     new | +5.37ms |  0.0% → 67.3% |   0ms → 5.4ms |       0 → 1 | `call()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |
|     new | +5.37ms |  0.0% → 67.3% |   0ms → 5.4ms |       0 → 1 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|     new | +0.01ms |   0.0% → 0.1% |   0ms → 5.1µs |       0 → 1 | `<init>()`                                           | `java.util.concurrent.locks.ReentrantReadWriteLock$Sync`               |

##### Standard library

|  Change |   Delta |             % |          Time | Contentions | Function                                             | Location                                                     |
| ------: | ------: | ------------: | ------------: | ----------: | ---------------------------------------------------- | ------------------------------------------------------------ |
| +630.9% | +6.62ms | 64.9% → 96.2% | 1.0ms → 7.7ms |       4 → 5 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                         |
| +630.9% | +6.62ms | 64.9% → 96.2% | 1.0ms → 7.7ms |       4 → 5 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                          |
| +630.9% | +6.62ms | 64.9% → 96.2% | 1.0ms → 7.7ms |       4 → 5 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                |
| +630.9% | +6.62ms | 64.9% → 96.2% | 1.0ms → 7.7ms |       4 → 5 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                          |
| +630.9% | +6.62ms | 64.9% → 96.2% | 1.0ms → 7.7ms |       4 → 5 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                          |
| +630.9% | +6.62ms | 64.9% → 96.2% | 1.0ms → 7.7ms |       4 → 5 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                  |
| +622.5% | +6.53ms | 64.9% → 95.1% | 1.0ms → 7.6ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                                      |
| +440.7% | +6.36ms | 89.3% → 97.8% | 1.4ms → 7.8ms |       6 → 5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                                      |
| +876.1% | +5.93ms | 41.9% → 82.8% | 0.7ms → 6.6ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`                |
| +876.1% | +5.93ms | 41.9% → 82.8% | 0.7ms → 6.6ms |           2 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                          |
| +876.1% | +5.93ms | 41.9% → 82.8% | 0.7ms → 6.6ms |           2 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                          |
|     new | +5.37ms |  0.0% → 67.3% |   0ms → 5.4ms |       0 → 1 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                          |
|     new | +5.37ms |  0.0% → 67.3% |   0ms → 5.4ms |       0 → 1 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable`          |
|     new | +0.01ms |   0.0% → 0.1% |   0ms → 5.1µs |       0 → 1 | `<init>()`                                           | `java.util.concurrent.locks.ReentrantReadWriteLock$Sync`     |
|     new | +0.01ms |   0.0% → 0.1% |   0ms → 5.1µs |       0 → 1 | `<init>()`                                           | `java.util.concurrent.locks.ReentrantReadWriteLock$FairSync` |

##### Ours

|  Change |   Delta |             % |          Time | Contentions | Function                       | Location                                                               |
| ------: | ------: | ------------: | ------------: | ----------: | ------------------------------ | ---------------------------------------------------------------------- |
| +630.9% | +6.62ms | 64.9% → 96.2% | 1.0ms → 7.7ms |       4 → 5 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +630.9% | +6.62ms | 64.9% → 96.2% | 1.0ms → 7.7ms |       4 → 5 | `computeClusterAverages()`     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +630.9% | +6.62ms | 64.9% → 96.2% | 1.0ms → 7.7ms |       4 → 5 | `computeDirectly()`            | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +630.9% | +6.62ms | 64.9% → 96.2% | 1.0ms → 7.7ms |       4 → 5 | `compute()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|     new | +5.37ms |  0.0% → 67.3% |   0ms → 5.4ms |       0 → 1 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|     new | +5.37ms |  0.0% → 67.3% |   0ms → 5.4ms |       0 → 1 | `call()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

#### Improvements

Functions with the largest decrease in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |   Delta |            % |           Time | Contentions | Function                                           | Location                                                   |
| ------: | ------: | -----------: | -------------: | ----------: | -------------------------------------------------- | ---------------------------------------------------------- |
|  -46.2% | -0.26ms | 35.1% → 3.8% |  0.6ms → 0.3ms |       7 → 4 | `deleteRecursively(Path, boolean)`                 | `org.renaissance.core.DirUtils`                            |
|  -46.2% | -0.26ms | 35.1% → 3.8% |  0.6ms → 0.3ms |       7 → 4 | `deleteRecursively(Path)`                          | `org.renaissance.core.DirUtils`                            |
|  -46.2% | -0.26ms | 35.1% → 3.8% |  0.6ms → 0.3ms |       7 → 4 | `lambda$createScratchDirectory$1(Path)`            | `org.renaissance.core.DirUtils`                            |
|  -46.2% | -0.26ms | 35.1% → 3.8% |  0.6ms → 0.3ms |       7 → 4 | `run()`                                            | `org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68` |
|  -46.2% | -0.26ms | 35.1% → 3.8% |  0.6ms → 0.3ms |       7 → 4 | `runWith(Object, Runnable)`                        | `java.lang.Thread`                                         |
|  -46.2% | -0.26ms | 35.1% → 3.8% |  0.6ms → 0.3ms |       7 → 4 | `run()`                                            | `java.lang.Thread`                                         |
|  -43.8% | -0.17ms | 24.4% → 2.8% |  0.4ms → 0.2ms |       2 → 1 | `loadClassOrNull(String, boolean)`                 | `jdk.internal.loader.BuiltinClassLoader`                   |
|  -43.8% | -0.17ms | 24.4% → 2.8% |  0.4ms → 0.2ms |       2 → 1 | `loadClass(String, boolean)`                       | `jdk.internal.loader.BuiltinClassLoader`                   |
|  -43.8% | -0.17ms | 24.4% → 2.8% |  0.4ms → 0.2ms |       2 → 1 | `loadClass(String, boolean)`                       | `jdk.internal.loader.ClassLoaders$AppClassLoader`          |
|  -58.8% | -0.12ms | 12.6% → 1.1% |  0.2ms → 0.1ms |       6 → 3 | `walkFileTree(Path, FileVisitor)`                  | `java.nio.file.Files`                                      |
|  -54.8% | -0.10ms | 11.5% → 1.1% |  0.2ms → 0.1ms |       5 → 3 | `walkFileTree(Path, Set, int, FileVisitor)`        | `java.nio.file.Files`                                      |
|  -62.1% | -0.06ms |  5.9% → 0.5% | 0.1ms → 36.5µs |       3 → 2 | `visit(Path, boolean, boolean)`                    | `java.nio.file.FileTreeWalker`                             |
|  -62.1% | -0.06ms |  5.9% → 0.5% | 0.1ms → 36.5µs |       3 → 2 | `walk(Path)`                                       | `java.nio.file.FileTreeWalker`                             |
|  -49.7% | -0.04ms |  4.5% → 0.5% | 0.1ms → 36.5µs |           2 | `<init>(boolean)`                                  | `java.util.concurrent.locks.ReentrantReadWriteLock`        |
|  -49.7% | -0.04ms |  4.5% → 0.5% | 0.1ms → 36.5µs |           2 | `<init>(UnixPath, long, DirectoryStream$Filter)`   | `sun.nio.fs.UnixDirectoryStream`                           |
|  -49.7% | -0.04ms |  4.5% → 0.5% | 0.1ms → 36.5µs |           2 | `newDirectoryStream(Path, DirectoryStream$Filter)` | `sun.nio.fs.UnixFileSystemProvider`                        |
|  -49.7% | -0.04ms |  4.5% → 0.5% | 0.1ms → 36.5µs |           2 | `newDirectoryStream(Path)`                         | `java.nio.file.Files`                                      |
| removed | -0.03ms |  1.9% → 0.0% |   30.3µs → 0ms |       1 → 0 | `visitFile(Path, BasicFileAttributes)`             | `org.renaissance.core.DirUtils$1`                          |
| removed | -0.03ms |  1.9% → 0.0% |   30.3µs → 0ms |       1 → 0 | `visitFile(Object, BasicFileAttributes)`           | `org.renaissance.core.DirUtils$1`                          |
| removed | -0.02ms |  1.5% → 0.0% |   23.7µs → 0ms |       1 → 0 | `iterator(DirectoryStream)`                        | `sun.nio.fs.UnixDirectoryStream`                           |

##### Standard library

|  Change |   Delta |            % |           Time | Contentions | Function                                           | Location                                            |
| ------: | ------: | -----------: | -------------: | ----------: | -------------------------------------------------- | --------------------------------------------------- |
|  -46.2% | -0.26ms | 35.1% → 3.8% |  0.6ms → 0.3ms |       7 → 4 | `runWith(Object, Runnable)`                        | `java.lang.Thread`                                  |
|  -46.2% | -0.26ms | 35.1% → 3.8% |  0.6ms → 0.3ms |       7 → 4 | `run()`                                            | `java.lang.Thread`                                  |
|  -43.8% | -0.17ms | 24.4% → 2.8% |  0.4ms → 0.2ms |       2 → 1 | `loadClassOrNull(String, boolean)`                 | `jdk.internal.loader.BuiltinClassLoader`            |
|  -43.8% | -0.17ms | 24.4% → 2.8% |  0.4ms → 0.2ms |       2 → 1 | `loadClass(String, boolean)`                       | `jdk.internal.loader.BuiltinClassLoader`            |
|  -43.8% | -0.17ms | 24.4% → 2.8% |  0.4ms → 0.2ms |       2 → 1 | `loadClass(String, boolean)`                       | `jdk.internal.loader.ClassLoaders$AppClassLoader`   |
|  -58.8% | -0.12ms | 12.6% → 1.1% |  0.2ms → 0.1ms |       6 → 3 | `walkFileTree(Path, FileVisitor)`                  | `java.nio.file.Files`                               |
|  -54.8% | -0.10ms | 11.5% → 1.1% |  0.2ms → 0.1ms |       5 → 3 | `walkFileTree(Path, Set, int, FileVisitor)`        | `java.nio.file.Files`                               |
|  -62.1% | -0.06ms |  5.9% → 0.5% | 0.1ms → 36.5µs |       3 → 2 | `visit(Path, boolean, boolean)`                    | `java.nio.file.FileTreeWalker`                      |
|  -62.1% | -0.06ms |  5.9% → 0.5% | 0.1ms → 36.5µs |       3 → 2 | `walk(Path)`                                       | `java.nio.file.FileTreeWalker`                      |
|  -49.7% | -0.04ms |  4.5% → 0.5% | 0.1ms → 36.5µs |           2 | `<init>(boolean)`                                  | `java.util.concurrent.locks.ReentrantReadWriteLock` |
|  -49.7% | -0.04ms |  4.5% → 0.5% | 0.1ms → 36.5µs |           2 | `<init>(UnixPath, long, DirectoryStream$Filter)`   | `sun.nio.fs.UnixDirectoryStream`                    |
|  -49.7% | -0.04ms |  4.5% → 0.5% | 0.1ms → 36.5µs |           2 | `newDirectoryStream(Path, DirectoryStream$Filter)` | `sun.nio.fs.UnixFileSystemProvider`                 |
|  -49.7% | -0.04ms |  4.5% → 0.5% | 0.1ms → 36.5µs |           2 | `newDirectoryStream(Path)`                         | `java.nio.file.Files`                               |
| removed | -0.02ms |  1.5% → 0.0% |   23.7µs → 0ms |       1 → 0 | `iterator(DirectoryStream)`                        | `sun.nio.fs.UnixDirectoryStream`                    |
| removed | -0.02ms |  1.5% → 0.0% |   23.7µs → 0ms |       1 → 0 | `iterator()`                                       | `sun.nio.fs.UnixDirectoryStream`                    |
| removed | -0.02ms |  1.5% → 0.0% |   23.7µs → 0ms |       1 → 0 | `<init>(Path, Object, DirectoryStream)`            | `java.nio.file.FileTreeWalker$DirectoryNode`        |
| removed | -0.02ms |  1.1% → 0.0% |   18.1µs → 0ms |       1 → 0 | `getDeclaredMethods0(boolean)`                     | `java.lang.Class`                                   |
| removed | -0.02ms |  1.1% → 0.0% |   18.1µs → 0ms |       1 → 0 | `privateGetDeclaredMethods(boolean)`               | `java.lang.Class`                                   |
| removed | -0.02ms |  1.1% → 0.0% |   18.1µs → 0ms |       1 → 0 | `getMethodsRecursive(String, Class[], boolean)`    | `java.lang.Class`                                   |
| removed | -0.02ms |  1.1% → 0.0% |   18.1µs → 0ms |       1 → 0 | `getMethod0(String, Class[])`                      | `java.lang.Class`                                   |

##### Ours

|  Change |   Delta |            % |          Time | Contentions | Function                                 | Location                                                   |
| ------: | ------: | -----------: | ------------: | ----------: | ---------------------------------------- | ---------------------------------------------------------- |
|  -46.2% | -0.26ms | 35.1% → 3.8% | 0.6ms → 0.3ms |       7 → 4 | `deleteRecursively(Path, boolean)`       | `org.renaissance.core.DirUtils`                            |
|  -46.2% | -0.26ms | 35.1% → 3.8% | 0.6ms → 0.3ms |       7 → 4 | `deleteRecursively(Path)`                | `org.renaissance.core.DirUtils`                            |
|  -46.2% | -0.26ms | 35.1% → 3.8% | 0.6ms → 0.3ms |       7 → 4 | `lambda$createScratchDirectory$1(Path)`  | `org.renaissance.core.DirUtils`                            |
|  -46.2% | -0.26ms | 35.1% → 3.8% | 0.6ms → 0.3ms |       7 → 4 | `run()`                                  | `org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68` |
| removed | -0.03ms |  1.9% → 0.0% |  30.3µs → 0ms |       1 → 0 | `visitFile(Path, BasicFileAttributes)`   | `org.renaissance.core.DirUtils$1`                          |
| removed | -0.03ms |  1.9% → 0.0% |  30.3µs → 0ms |       1 → 0 | `visitFile(Object, BasicFileAttributes)` | `org.renaissance.core.DirUtils$1`                          |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |   Delta |      % |          Time | Contentions | Caller                     | Location                                               |
| ------: | ------: | -----: | ------------: | ----------: | -------------------------- | ------------------------------------------------------ |
| +630.9% | +6.62ms | 100.0% | 1.0ms → 7.7ms |       4 → 5 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |   Delta |      % |          Time | Contentions | Caller              | Location                                               |
| ------: | ------: | -----: | ------------: | ----------: | ------------------- | ------------------------------------------------------ |
| +630.9% | +6.62ms | 100.0% | 1.0ms → 7.7ms |       4 → 5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |   Delta |      % |          Time | Contentions | Caller              | Location                                               |
| ------: | ------: | -----: | ------------: | ----------: | ------------------- | ------------------------------------------------------ |
| +630.9% | +6.62ms | 100.0% | 1.0ms → 7.7ms |       4 → 5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +630.9% | +6.62ms | 100.0% | 1.0ms → 7.7ms |       4 → 5 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change |   Delta |      % |          Time | Contentions | Caller   | Location                             |
| ------: | ------: | -----: | ------------: | ----------: | -------- | ------------------------------------ |
| +630.9% | +6.62ms | 100.0% | 1.0ms → 7.7ms |       4 → 5 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|  Change |   Delta |      % |          Time | Contentions | Caller     | Location                            |
| ------: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------- |
| +630.9% | +6.62ms | 100.0% | 1.0ms → 7.7ms |       4 → 5 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change |   Delta |             % |          Time | Contentions | Caller                                               | Location                                      |
| ------: | ------: | ------------: | ------------: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| +630.9% | +6.62ms |        100.0% | 1.0ms → 7.7ms |       4 → 5 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| +876.1% | +5.93ms | 64.5% → 86.1% | 0.7ms → 6.6ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|     new | +5.37ms |  0.0% → 70.0% |   0ms → 5.4ms |       0 → 1 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change |   Delta |      % |          Time | Contentions | Caller                                   | Location                            |
| ------: | ------: | -----: | ------------: | ----------: | ---------------------------------------- | ----------------------------------- |
| +630.9% | +6.62ms | 100.0% | 1.0ms → 7.7ms |       4 → 5 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|  Change |   Delta |      % |          Time | Contentions | Caller                              | Location                            |
| ------: | ------: | -----: | ------------: | ----------: | ----------------------------------- | ----------------------------------- |
| +630.9% | +6.62ms | 100.0% | 1.0ms → 7.7ms |       4 → 5 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change |   Delta |      % |          Time | Contentions | Caller  | Location                                    |
| ------: | ------: | -----: | ------------: | ----------: | ------- | ------------------------------------------- |
| +630.9% | +6.62ms | 100.0% | 1.0ms → 7.7ms |       4 → 5 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|  Change |   Delta |      % |          Time | Contentions | Caller              | Location                |
| ------: | ------: | -----: | ------------: | ----------: | ------------------- | ----------------------- |
| +622.5% | +6.53ms | 100.0% | 1.0ms → 7.6ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|  Change |   Delta |             % |          Time | Contentions | Caller                                 | Location                                               |
| ------: | ------: | ------------: | ------------: | ----------: | -------------------------------------- | ------------------------------------------------------ |
| +622.5% | +6.53ms | 72.7% → 97.2% | 1.0ms → 7.6ms |           4 | `average(List)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -39.1% | -0.14ms |  25.2% → 2.8% | 0.4ms → 0.2ms |           1 | `deleteRecursively(Path, boolean)`     | `org.renaissance.core.DirUtils`                        |
| removed | -0.03ms |   2.1% → 0.0% |  30.3µs → 0ms |       1 → 0 | `visitFile(Path, BasicFileAttributes)` | `org.renaissance.core.DirUtils$1`                      |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change |   Delta |      % |          Time | Contentions | Caller                 | Location                            |
| ------: | ------: | -----: | ------------: | ----------: | ---------------------- | ----------------------------------- |
| +876.1% | +5.93ms | 100.0% | 0.7ms → 6.6ms |           2 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change |   Delta |      % |          Time | Contentions | Caller   | Location                            |
| ------: | ------: | -----: | ------------: | ----------: | -------- | ----------------------------------- |
| +876.1% | +5.93ms | 100.0% | 0.7ms → 6.6ms |           2 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change |   Delta |      % |          Time | Contentions | Caller      | Location                                               |
| ------: | ------: | -----: | ------------: | ----------: | ----------- | ------------------------------------------------------ |
| +876.1% | +5.93ms | 100.0% | 0.7ms → 6.6ms |           2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |             % |        Time | Contentions | Caller                         | Location                                    |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------ | ------------------------------------------- |
|    new | +5.37ms | 0.0% → 100.0% | 0ms → 5.4ms |       0 → 1 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |   Delta |             % |        Time | Contentions | Caller   | Location                                                               |
| -----: | ------: | ------------: | ----------: | ----------: | -------- | ---------------------------------------------------------------------- |
|    new | +5.37ms | 0.0% → 100.0% | 0ms → 5.4ms |       0 → 1 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`)

| Change |   Delta |             % |        Time | Contentions | Caller   | Location                                            |
| -----: | ------: | ------------: | ----------: | ----------: | -------- | --------------------------------------------------- |
|    new | +5.37ms | 0.0% → 100.0% | 0ms → 5.4ms |       0 → 1 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |   Delta |             % |        Time | Contentions | Caller     | Location                            |
| -----: | ------: | ------------: | ----------: | ----------: | ---------- | ----------------------------------- |
|    new | +5.37ms | 0.0% → 100.0% | 0ms → 5.4ms |       0 → 1 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `<init>()` (`java.util.concurrent.locks.ReentrantReadWriteLock$Sync`)

| Change |   Delta |             % |        Time | Contentions | Caller     | Location                                                     |
| -----: | ------: | ------------: | ----------: | ----------: | ---------- | ------------------------------------------------------------ |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 5.1µs |       0 → 1 | `<init>()` | `java.util.concurrent.locks.ReentrantReadWriteLock$FairSync` |

##### `<init>()` (`java.util.concurrent.locks.ReentrantReadWriteLock$FairSync`)

| Change |   Delta |             % |        Time | Contentions | Caller            | Location                                            |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------- | --------------------------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 5.1µs |       0 → 1 | `<init>(boolean)` | `java.util.concurrent.locks.ReentrantReadWriteLock` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |          Time | Contentions | Caller                    | Location                        |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------- | ------------------------------- |
| -46.2% | -0.26ms | 100.0% | 0.6ms → 0.3ms |       7 → 4 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |          Time | Contentions | Caller                                  | Location                        |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------------------- | ------------------------------- |
| -46.2% | -0.26ms | 100.0% | 0.6ms → 0.3ms |       7 → 4 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |          Time | Contentions | Caller  | Location                                                   |
| -----: | ------: | -----: | ------------: | ----------: | ------- | ---------------------------------------------------------- |
| -46.2% | -0.26ms | 100.0% | 0.6ms → 0.3ms |       7 → 4 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`)

| Change |   Delta |      % |          Time | Contentions | Caller                      | Location           |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------- | ------------------ |
| -46.2% | -0.26ms | 100.0% | 0.6ms → 0.3ms |       7 → 4 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change |   Delta |      % |          Time | Contentions | Caller  | Location           |
| -----: | ------: | -----: | ------------: | ----------: | ------- | ------------------ |
| -46.2% | -0.26ms | 100.0% | 0.6ms → 0.3ms |       7 → 4 | `run()` | `java.lang.Thread` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |   Delta |      % |          Time | Contentions | Caller                       | Location                                 |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------- | ---------------------------------------- |
| -43.8% | -0.17ms | 100.0% | 0.4ms → 0.2ms |       2 → 1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |   Delta |      % |          Time | Contentions | Caller                       | Location                                          |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------- | ------------------------------------------------- |
| -43.8% | -0.17ms | 100.0% | 0.4ms → 0.2ms |       2 → 1 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`)

| Change |   Delta |      % |          Time | Contentions | Caller              | Location                |
| -----: | ------: | -----: | ------------: | ----------: | ------------------- | ----------------------- |
| -43.8% | -0.17ms | 100.0% | 0.4ms → 0.2ms |       2 → 1 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`)

| Change |   Delta |      % |          Time | Contentions | Caller                             | Location                        |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------- | ------------------------------- |
| -58.8% | -0.12ms | 100.0% | 0.2ms → 0.1ms |       6 → 3 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

| Change |   Delta |      % |          Time | Contentions | Caller                            | Location              |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------------- | --------------------- |
| -54.8% | -0.10ms | 100.0% | 0.2ms → 0.1ms |       5 → 3 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files` |

##### `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`)

| Change |   Delta |      % |           Time | Contentions | Caller       | Location                       |
| -----: | ------: | -----: | -------------: | ----------: | ------------ | ------------------------------ |
| -62.1% | -0.06ms | 100.0% | 0.1ms → 36.5µs |       3 → 2 | `walk(Path)` | `java.nio.file.FileTreeWalker` |

##### `walk(Path)` (`java.nio.file.FileTreeWalker`)

| Change |   Delta |      % |           Time | Contentions | Caller                                      | Location              |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------------------- | --------------------- |
| -62.1% | -0.06ms | 100.0% | 0.1ms → 36.5µs |       3 → 2 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

| Change |   Delta |      % |           Time | Contentions | Caller                                           | Location                         |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------------------------ | -------------------------------- |
| -49.7% | -0.04ms | 100.0% | 0.1ms → 36.5µs |           2 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream` |

##### `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`)

| Change |   Delta |      % |           Time | Contentions | Caller                                             | Location                            |
| -----: | ------: | -----: | -------------: | ----------: | -------------------------------------------------- | ----------------------------------- |
| -49.7% | -0.04ms | 100.0% | 0.1ms → 36.5µs |           2 | `newDirectoryStream(Path, DirectoryStream$Filter)` | `sun.nio.fs.UnixFileSystemProvider` |

##### `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`)

| Change |   Delta |      % |           Time | Contentions | Caller                     | Location              |
| -----: | ------: | -----: | -------------: | ----------: | -------------------------- | --------------------- |
| -49.7% | -0.04ms | 100.0% | 0.1ms → 36.5µs |           2 | `newDirectoryStream(Path)` | `java.nio.file.Files` |

##### `newDirectoryStream(Path)` (`java.nio.file.Files`)

| Change |   Delta |      % |           Time | Contentions | Caller                          | Location                       |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------- | ------------------------------ |
| -49.7% | -0.04ms | 100.0% | 0.1ms → 36.5µs |           2 | `visit(Path, boolean, boolean)` | `java.nio.file.FileTreeWalker` |

##### `visitFile(Path, BasicFileAttributes)` (`org.renaissance.core.DirUtils$1`)

|  Change |   Delta |             % |         Time | Contentions | Caller                                   | Location                          |
| ------: | ------: | ------------: | -----------: | ----------: | ---------------------------------------- | --------------------------------- |
| removed | -0.03ms | 100.0% → 0.0% | 30.3µs → 0ms |       1 → 0 | `visitFile(Object, BasicFileAttributes)` | `org.renaissance.core.DirUtils$1` |

##### `visitFile(Object, BasicFileAttributes)` (`org.renaissance.core.DirUtils$1`)

|  Change |   Delta |             % |         Time | Contentions | Caller                                      | Location              |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------------------- | --------------------- |
| removed | -0.03ms | 100.0% → 0.0% | 30.3µs → 0ms |       1 → 0 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `iterator(DirectoryStream)` (`sun.nio.fs.UnixDirectoryStream`)

|  Change |   Delta |             % |         Time | Contentions | Caller       | Location                         |
| ------: | ------: | ------------: | -----------: | ----------: | ------------ | -------------------------------- |
| removed | -0.02ms | 100.0% → 0.0% | 23.7µs → 0ms |       1 → 0 | `iterator()` | `sun.nio.fs.UnixDirectoryStream` |

##### `iterator()` (`sun.nio.fs.UnixDirectoryStream`)

|  Change |   Delta |             % |         Time | Contentions | Caller                                  | Location                                     |
| ------: | ------: | ------------: | -----------: | ----------: | --------------------------------------- | -------------------------------------------- |
| removed | -0.02ms | 100.0% → 0.0% | 23.7µs → 0ms |       1 → 0 | `<init>(Path, Object, DirectoryStream)` | `java.nio.file.FileTreeWalker$DirectoryNode` |

##### `<init>(Path, Object, DirectoryStream)` (`java.nio.file.FileTreeWalker$DirectoryNode`)

|  Change |   Delta |             % |         Time | Contentions | Caller                          | Location                       |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------- | ------------------------------ |
| removed | -0.02ms | 100.0% → 0.0% | 23.7µs → 0ms |       1 → 0 | `visit(Path, boolean, boolean)` | `java.nio.file.FileTreeWalker` |

##### `getDeclaredMethods0(boolean)` (`java.lang.Class`)

|  Change |   Delta |             % |         Time | Contentions | Caller                               | Location          |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------------ | ----------------- |
| removed | -0.02ms | 100.0% → 0.0% | 18.1µs → 0ms |       1 → 0 | `privateGetDeclaredMethods(boolean)` | `java.lang.Class` |

##### `privateGetDeclaredMethods(boolean)` (`java.lang.Class`)

|  Change |   Delta |             % |         Time | Contentions | Caller                                          | Location          |
| ------: | ------: | ------------: | -----------: | ----------: | ----------------------------------------------- | ----------------- |
| removed | -0.02ms | 100.0% → 0.0% | 18.1µs → 0ms |       1 → 0 | `getMethodsRecursive(String, Class[], boolean)` | `java.lang.Class` |

##### `getMethodsRecursive(String, Class[], boolean)` (`java.lang.Class`)

|  Change |   Delta |             % |         Time | Contentions | Caller                        | Location          |
| ------: | ------: | ------------: | -----------: | ----------: | ----------------------------- | ----------------- |
| removed | -0.02ms | 100.0% → 0.0% | 18.1µs → 0ms |       1 → 0 | `getMethod0(String, Class[])` | `java.lang.Class` |

##### `getMethod0(String, Class[])` (`java.lang.Class`)

|  Change |   Delta |             % |         Time | Contentions | Caller                       | Location          |
| ------: | ------: | ------------: | -----------: | ----------: | ---------------------------- | ----------------- |
| removed | -0.02ms | 100.0% → 0.0% | 18.1µs → 0ms |       1 → 0 | `getMethod(String, Class[])` | `java.lang.Class` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |   Delta |              % |          Time | Contentions | Callee              | Location                |
| ------: | ------: | -------------: | ------------: | ----------: | ------------------- | ----------------------- |
| +622.5% | +6.53ms | 100.0% → 98.8% | 1.0ms → 7.6ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |   Delta |      % |          Time | Contentions | Callee          | Location                                               |
| ------: | ------: | -----: | ------------: | ----------: | --------------- | ------------------------------------------------------ |
| +630.9% | +6.62ms | 100.0% | 1.0ms → 7.7ms |       4 → 5 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |   Delta |      % |          Time | Contentions | Callee                     | Location                                               |
| ------: | ------: | -----: | ------------: | ----------: | -------------------------- | ------------------------------------------------------ |
| +630.9% | +6.62ms | 100.0% | 1.0ms → 7.7ms |       4 → 5 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +630.9% | +6.62ms | 100.0% | 1.0ms → 7.7ms |       4 → 5 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change |   Delta |             % |          Time | Contentions | Callee              | Location                                               |
| ------: | ------: | ------------: | ------------: | ----------: | ------------------- | ------------------------------------------------------ |
| +630.9% | +6.62ms |        100.0% | 1.0ms → 7.7ms |       4 → 5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +876.1% | +5.93ms | 64.5% → 86.1% | 0.7ms → 6.6ms |           2 | `join()`            | `java.util.concurrent.ForkJoinTask`                    |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|  Change |   Delta |      % |          Time | Contentions | Callee      | Location                                               |
| ------: | ------: | -----: | ------------: | ----------: | ----------- | ------------------------------------------------------ |
| +630.9% | +6.62ms | 100.0% | 1.0ms → 7.7ms |       4 → 5 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change |   Delta |            % |          Time | Contentions | Callee   | Location                                            |
| ------: | ------: | -----------: | ------------: | ----------: | -------- | --------------------------------------------------- |
| +630.9% | +6.62ms |       100.0% | 1.0ms → 7.7ms |       4 → 5 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|     new | +5.37ms | 0.0% → 70.0% |   0ms → 5.4ms |       0 → 1 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change |   Delta |      % |          Time | Contentions | Callee     | Location                            |
| ------: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------- |
| +630.9% | +6.62ms | 100.0% | 1.0ms → 7.7ms |       4 → 5 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|  Change |   Delta |      % |          Time | Contentions | Callee                                               | Location                                      |
| ------: | ------: | -----: | ------------: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| +630.9% | +6.62ms | 100.0% | 1.0ms → 7.7ms |       4 → 5 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change |   Delta |      % |          Time | Contentions | Callee                                   | Location                            |
| ------: | ------: | -----: | ------------: | ----------: | ---------------------------------------- | ----------------------------------- |
| +630.9% | +6.62ms | 100.0% | 1.0ms → 7.7ms |       4 → 5 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|  Change |   Delta |      % |          Time | Contentions | Callee                              | Location                            |
| ------: | ------: | -----: | ------------: | ----------: | ----------------------------------- | ----------------------------------- |
| +630.9% | +6.62ms | 100.0% | 1.0ms → 7.7ms |       4 → 5 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|  Change |   Delta |             % |          Time | Contentions | Callee                       | Location                                          |
| ------: | ------: | ------------: | ------------: | ----------: | ---------------------------- | ------------------------------------------------- |
| +622.5% | +6.53ms | 72.7% → 97.2% | 1.0ms → 7.6ms |           4 | `loadClass(String, boolean)` | `java.lang.ClassLoader`                           |
|  -43.8% | -0.17ms |  27.3% → 2.8% | 0.4ms → 0.2ms |       2 → 1 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change |   Delta |      % |          Time | Contentions | Callee     | Location                            |
| ------: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------- |
| +876.1% | +5.93ms | 100.0% | 0.7ms → 6.6ms |           2 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change |   Delta |      % |          Time | Contentions | Callee                                    | Location                                      |
| ------: | ------: | -----: | ------------: | ----------: | ----------------------------------------- | --------------------------------------------- |
| +876.1% | +5.93ms | 100.0% | 0.7ms → 6.6ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|  Change |   Delta |      % |          Time | Contentions | Callee                 | Location                            |
| ------: | ------: | -----: | ------------: | ----------: | ---------------------- | ----------------------------------- |
| +876.1% | +5.93ms | 100.0% | 0.7ms → 6.6ms |           2 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |             % |        Time | Contentions | Callee     | Location                            |
| -----: | ------: | ------------: | ----------: | ----------: | ---------- | ----------------------------------- |
|    new | +5.37ms | 0.0% → 100.0% | 0ms → 5.4ms |       0 → 1 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |   Delta |             % |        Time | Contentions | Callee     | Location                            |
| -----: | ------: | ------------: | ----------: | ----------: | ---------- | ----------------------------------- |
|    new | +5.37ms | 0.0% → 100.0% | 0ms → 5.4ms |       0 → 1 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`)

| Change |   Delta |             % |        Time | Contentions | Callee                         | Location                                    |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------ | ------------------------------------------- |
|    new | +5.37ms | 0.0% → 100.0% | 0ms → 5.4ms |       0 → 1 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |   Delta |             % |        Time | Contentions | Callee   | Location                                                               |
| -----: | ------: | ------------: | ----------: | ----------: | -------- | ---------------------------------------------------------------------- |
|    new | +5.37ms | 0.0% → 100.0% | 0ms → 5.4ms |       0 → 1 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `<init>()` (`java.util.concurrent.locks.ReentrantReadWriteLock$FairSync`)

| Change |   Delta |             % |        Time | Contentions | Callee     | Location                                                 |
| -----: | ------: | ------------: | ----------: | ----------: | ---------- | -------------------------------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 5.1µs |       0 → 1 | `<init>()` | `java.util.concurrent.locks.ReentrantReadWriteLock$Sync` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |             % |          Time | Contentions | Callee                            | Location                |
| -----: | ------: | ------------: | ------------: | ----------: | --------------------------------- | ----------------------- |
| -39.1% | -0.14ms | 64.1% → 72.5% | 0.4ms → 0.2ms |           1 | `loadClass(String)`               | `java.lang.ClassLoader` |
| -58.8% | -0.12ms | 35.9% → 27.5% | 0.2ms → 0.1ms |       6 → 3 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files`   |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |          Time | Contentions | Callee                             | Location                        |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------- | ------------------------------- |
| -46.2% | -0.26ms | 100.0% | 0.6ms → 0.3ms |       7 → 4 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |          Time | Contentions | Callee                    | Location                        |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------- | ------------------------------- |
| -46.2% | -0.26ms | 100.0% | 0.6ms → 0.3ms |       7 → 4 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`)

| Change |   Delta |      % |          Time | Contentions | Callee                                  | Location                        |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------------------- | ------------------------------- |
| -46.2% | -0.26ms | 100.0% | 0.6ms → 0.3ms |       7 → 4 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change |   Delta |      % |          Time | Contentions | Callee  | Location                                                   |
| -----: | ------: | -----: | ------------: | ----------: | ------- | ---------------------------------------------------------- |
| -46.2% | -0.26ms | 100.0% | 0.6ms → 0.3ms |       7 → 4 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68` |

##### `run()` (`java.lang.Thread`)

| Change |   Delta |      % |          Time | Contentions | Callee                      | Location           |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------- | ------------------ |
| -46.2% | -0.26ms | 100.0% | 0.6ms → 0.3ms |       7 → 4 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |   Delta |      % |          Time | Contentions | Callee                             | Location                                 |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------- | ---------------------------------------- |
| -43.8% | -0.17ms | 100.0% | 0.4ms → 0.2ms |       2 → 1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`)

| Change |   Delta |      % |          Time | Contentions | Callee                       | Location                                 |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------- | ---------------------------------------- |
| -43.8% | -0.17ms | 100.0% | 0.4ms → 0.2ms |       2 → 1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`)

|  Change |   Delta |              % |          Time | Contentions | Callee                                      | Location              |
| ------: | ------: | -------------: | ------------: | ----------: | ------------------------------------------- | --------------------- |
|  -54.8% | -0.10ms | 91.1% → 100.0% | 0.2ms → 0.1ms |       5 → 3 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |
| removed | -0.02ms |    8.9% → 0.0% |  18.1µs → 0ms |       1 → 0 | `noneOf(Class)`                             | `java.util.EnumSet`   |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

|  Change |   Delta |             % |           Time | Contentions | Callee                                   | Location                          |
| ------: | ------: | ------------: | -------------: | ----------: | ---------------------------------------- | --------------------------------- |
|  -62.1% | -0.06ms | 51.9% → 43.5% | 0.1ms → 36.5µs |       3 → 2 | `walk(Path)`                             | `java.nio.file.FileTreeWalker`    |
| removed | -0.03ms |  16.3% → 0.0% |   30.3µs → 0ms |       1 → 0 | `visitFile(Object, BasicFileAttributes)` | `org.renaissance.core.DirUtils$1` |

##### `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`)

|  Change |   Delta |              % |           Time | Contentions | Callee                                  | Location                                     |
| ------: | ------: | -------------: | -------------: | ----------: | --------------------------------------- | -------------------------------------------- |
|  -49.7% | -0.04ms | 75.3% → 100.0% | 0.1ms → 36.5µs |           2 | `newDirectoryStream(Path)`              | `java.nio.file.Files`                        |
| removed | -0.02ms |   24.7% → 0.0% |   23.7µs → 0ms |       1 → 0 | `<init>(Path, Object, DirectoryStream)` | `java.nio.file.FileTreeWalker$DirectoryNode` |

##### `walk(Path)` (`java.nio.file.FileTreeWalker`)

| Change |   Delta |      % |           Time | Contentions | Callee                          | Location                       |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------- | ------------------------------ |
| -62.1% | -0.06ms | 100.0% | 0.1ms → 36.5µs |       3 → 2 | `visit(Path, boolean, boolean)` | `java.nio.file.FileTreeWalker` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

| Change |   Delta |            % |        Time | Contentions | Callee     | Location                                                     |
| -----: | ------: | -----------: | ----------: | ----------: | ---------- | ------------------------------------------------------------ |
|    new | +0.01ms | 0.0% → 14.1% | 0ms → 5.1µs |       0 → 1 | `<init>()` | `java.util.concurrent.locks.ReentrantReadWriteLock$FairSync` |

##### `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`)

| Change |   Delta |      % |           Time | Contentions | Callee            | Location                                            |
| -----: | ------: | -----: | -------------: | ----------: | ----------------- | --------------------------------------------------- |
| -49.7% | -0.04ms | 100.0% | 0.1ms → 36.5µs |           2 | `<init>(boolean)` | `java.util.concurrent.locks.ReentrantReadWriteLock` |

##### `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`)

| Change |   Delta |      % |           Time | Contentions | Callee                                           | Location                         |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------------------------ | -------------------------------- |
| -49.7% | -0.04ms | 100.0% | 0.1ms → 36.5µs |           2 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream` |

##### `newDirectoryStream(Path)` (`java.nio.file.Files`)

| Change |   Delta |      % |           Time | Contentions | Callee                                             | Location                            |
| -----: | ------: | -----: | -------------: | ----------: | -------------------------------------------------- | ----------------------------------- |
| -49.7% | -0.04ms | 100.0% | 0.1ms → 36.5µs |           2 | `newDirectoryStream(Path, DirectoryStream$Filter)` | `sun.nio.fs.UnixFileSystemProvider` |

##### `visitFile(Path, BasicFileAttributes)` (`org.renaissance.core.DirUtils$1`)

|  Change |   Delta |             % |         Time | Contentions | Callee              | Location                |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------- | ----------------------- |
| removed | -0.03ms | 100.0% → 0.0% | 30.3µs → 0ms |       1 → 0 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `visitFile(Object, BasicFileAttributes)` (`org.renaissance.core.DirUtils$1`)

|  Change |   Delta |             % |         Time | Contentions | Callee                                 | Location                          |
| ------: | ------: | ------------: | -----------: | ----------: | -------------------------------------- | --------------------------------- |
| removed | -0.03ms | 100.0% → 0.0% | 30.3µs → 0ms |       1 → 0 | `visitFile(Path, BasicFileAttributes)` | `org.renaissance.core.DirUtils$1` |

##### `iterator()` (`sun.nio.fs.UnixDirectoryStream`)

|  Change |   Delta |             % |         Time | Contentions | Callee                      | Location                         |
| ------: | ------: | ------------: | -----------: | ----------: | --------------------------- | -------------------------------- |
| removed | -0.02ms | 100.0% → 0.0% | 23.7µs → 0ms |       1 → 0 | `iterator(DirectoryStream)` | `sun.nio.fs.UnixDirectoryStream` |

##### `<init>(Path, Object, DirectoryStream)` (`java.nio.file.FileTreeWalker$DirectoryNode`)

|  Change |   Delta |             % |         Time | Contentions | Callee       | Location                         |
| ------: | ------: | ------------: | -----------: | ----------: | ------------ | -------------------------------- |
| removed | -0.02ms | 100.0% → 0.0% | 23.7µs → 0ms |       1 → 0 | `iterator()` | `sun.nio.fs.UnixDirectoryStream` |

##### `privateGetDeclaredMethods(boolean)` (`java.lang.Class`)

|  Change |   Delta |             % |         Time | Contentions | Callee                         | Location          |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------ | ----------------- |
| removed | -0.02ms | 100.0% → 0.0% | 18.1µs → 0ms |       1 → 0 | `getDeclaredMethods0(boolean)` | `java.lang.Class` |

##### `getMethodsRecursive(String, Class[], boolean)` (`java.lang.Class`)

|  Change |   Delta |             % |         Time | Contentions | Callee                               | Location          |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------------ | ----------------- |
| removed | -0.02ms | 100.0% → 0.0% | 18.1µs → 0ms |       1 → 0 | `privateGetDeclaredMethods(boolean)` | `java.lang.Class` |

##### `getMethod0(String, Class[])` (`java.lang.Class`)

|  Change |   Delta |             % |         Time | Contentions | Callee                                          | Location          |
| ------: | ------: | ------------: | -----------: | ----------: | ----------------------------------------------- | ----------------- |
| removed | -0.02ms | 100.0% → 0.0% | 18.1µs → 0ms |       1 → 0 | `getMethodsRecursive(String, Class[], boolean)` | `java.lang.Class` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time blocked in their leaf frame.

|  Change |   Delta |             % |          Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------: | ------: | ------------: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     new | +5.37ms |  0.0% → 67.3% |   0ms → 5.4ms |       0 → 1 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
| +161.7% | +0.60ms | 23.1% → 12.2% | 0.4ms → 1.0ms |           2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +83.3% | +0.56ms | 41.9% → 15.6% | 0.7ms → 1.2ms |       2 → 1 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|     new | +0.09ms |   0.0% → 1.1% |   0ms → 0.1ms |       0 → 1 | `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     new | +0.01ms |   0.0% → 0.1% |   0ms → 5.1µs |       0 → 1 | `<init>()` (`java.util.concurrent.locks.ReentrantReadWriteLock$Sync`) ← `<init>()` (`java.util.concurrent.locks.ReentrantReadWriteLock$FairSync`) ← `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`) ← `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`) ← `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

### Improvements

Call stacks with the largest decrease in time blocked in their leaf frame.

Common call stack: `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`

|  Change |   Delta |            % |           Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------: | ------: | -----------: | -------------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -39.1% | -0.14ms | 22.5% → 2.8% |  0.4ms → 0.2ms |           1 | `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String)` (`java.lang.ClassLoader`)                                                                                                                                                                                                                                                           |
|  -56.7% | -0.04ms |  4.5% → 0.4% | 0.1ms → 31.3µs |       2 → 1 | `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`) ← `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`) ← `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` |
| removed | -0.03ms |  1.9% → 0.0% |   30.3µs → 0ms |       1 → 0 | `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String)` (`java.lang.ClassLoader`) ← `visitFile(Path, BasicFileAttributes)` (`org.renaissance.core.DirUtils$1`) ← `visitFile(Object, BasicFileAttributes)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)`                         |
| removed | -0.02ms |  1.5% → 0.0% |   23.7µs → 0ms |       1 → 0 | `iterator(DirectoryStream)` (`sun.nio.fs.UnixDirectoryStream`) ← `iterator()` ← `<init>(Path, Object, DirectoryStream)` (`java.nio.file.FileTreeWalker$DirectoryNode`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)`                                                                                                                                        |
| removed | -0.02ms |  1.1% → 0.0% |   18.1µs → 0ms |       1 → 0 | `getDeclaredMethods0(boolean)` (`java.lang.Class`) ← `privateGetDeclaredMethods(boolean)` ← `getMethodsRecursive(String, Class[], boolean)` ← `getMethod0(String, Class[])` ← `getMethod(String, Class[])` ← `getEnumConstantsShared()` ← `getEnumConstantsShared(Class)` (`java.lang.System$2`) ← `getUniverse(Class)` (`java.util.EnumSet`) ← `noneOf(Class)` ← `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`)                                                                               |
|  -19.6% | -0.01ms |  3.6% → 0.6% | 0.1ms → 47.3µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)`                                                                                                                                                                                                                                                                                                                                                                                                   |

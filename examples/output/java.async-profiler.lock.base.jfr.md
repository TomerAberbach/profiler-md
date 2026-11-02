# Lock contention profile

Blocked 2.2ms over 12 contentions (181.3µs per contention).

| Category         |     % |   Time | Contentions |
| ---------------- | ----: | -----: | ----------: |
| Standard library | 98.5% |  2.1ms |          11 |
| Ours             |  1.5% | 32.5µs |           1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 2.0ms (91.1%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 2.0ms (91.1%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       └── 2.0ms (91.1%) scan(ForkJoinPool$WorkQueue, int, int)
│           └── 2.0ms (91.1%) topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool$WorkQueue
│               └── 2.0ms (91.1%) doExec() at java.util.concurrent.ForkJoinTask
│                   └── … 2.0ms (91.1%) exec() at java.util.concurrent.RecursiveTask
│                       └── 2.0ms (91.1%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│                           └── 2.0ms (91.1%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│                               └── … 2.0ms (91.1%) computeClusterAverages() at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│                                   └── 2.0ms (91.1%) average(List)
│                                       └── 2.0ms (91.1%) loadClass(String) at java.lang.ClassLoader
│                                           └── 2.0ms (91.1%) loadClass(String, boolean)
└── 0.2ms (8.9%) run() at java.lang.Thread
    └── 0.2ms (8.9%) runWith(Object, Runnable)
        └── 0.2ms (8.9%) run() at org.renaissance.core.DirUtils$$Lambda.0x000000e801003a68
            └── 0.2ms (8.9%) lambda$createScratchDirectory$1(Path) at org.renaissance.core.DirUtils
                └── 0.2ms (8.9%) deleteRecursively(Path)
                    └── 0.2ms (8.9%, self 1.5%) deleteRecursively(Path, boolean)
                        └── 0.2ms (7.5%) walkFileTree(Path, FileVisitor) at java.nio.file.Files
                            ├── 0.2ms (7.1%, self 0.5%) walkFileTree(Path, Set, int, FileVisitor)
                            │   ├── 0.1ms (6.3%) walk(Path) at java.nio.file.FileTreeWalker
                            │   │   └── 0.1ms (6.3%) visit(Path, boolean, boolean)
                            │   │       └── 0.1ms (6.3%) newDirectoryStream(Path) at java.nio.file.Files
                            │   │           └── 0.1ms (6.3%) newDirectoryStream(Path, DirectoryStream$Filter) at sun.nio.fs.UnixFileSystemProvider
                            │   │               └── 0.1ms (6.3%, self 2.0%) <init>(UnixPath, long, DirectoryStream$Filter) at sun.nio.fs.UnixDirectoryStream
                            │   │                   └── 0.1ms (4.3%) <init>(boolean) at java.util.concurrent.locks.ReentrantReadWriteLock
                            │   └── 6.0µs (0.3%) <init>(Collection, int) at java.nio.file.FileTreeWalker
                            └── 7.7µs (0.4%) noneOf(Class) at java.util.EnumSet
                                └── 7.7µs (0.4%) getUniverse(Class)
                                    └── 7.7µs (0.4%) getEnumConstantsShared(Class) at java.lang.System$2
                                        └── 7.7µs (0.4%) getEnumConstantsShared() at java.lang.Class
                                            └── 7.7µs (0.4%) getMethod(String, Class[])
                                                └── 7.7µs (0.4%) getMethod0(String, Class[])
                                                    └── 7.7µs (0.4%) getMethodsRecursive(String, Class[], boolean)
                                                        └── 7.7µs (0.4%) privateGetDeclaredMethods(boolean)
                                                            └── 7.7µs (0.4%) getDeclaredMethods0(boolean)
```

## Hottest functions

### Self time

Functions with the most time blocked within the function body, excluding callees.

|     % |   Time | Contentions | Function                                         | Location                                            |
| ----: | -----: | ----------: | ------------------------------------------------ | --------------------------------------------------- |
| 91.1% |  2.0ms |           4 | `loadClass(String, boolean)`                     | `java.lang.ClassLoader`                             |
|  4.3% |  0.1ms |           1 | `<init>(boolean)`                                | `java.util.concurrent.locks.ReentrantReadWriteLock` |
|  2.0% | 43.8µs |           2 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream`                    |
|  1.5% | 32.5µs |           1 | `deleteRecursively(Path, boolean)`               | `org.renaissance.core.DirUtils`                     |
|  0.5% | 11.1µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)`      | `java.nio.file.Files`                               |
|  0.4% |  7.7µs |           1 | `getDeclaredMethods0(boolean)`                   | `java.lang.Class`                                   |
|  0.3% |  6.0µs |           1 | `<init>(Collection, int)`                        | `java.nio.file.FileTreeWalker`                      |
| <0.1% |  0.5µs |           1 | `<clinit>()`                                     | `java.nio.file.FileTreeWalker`                      |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |   Time | Contentions | Function                                         | Location                                            |
| ----: | -----: | ----------: | ------------------------------------------------ | --------------------------------------------------- |
| 91.1% |  2.0ms |           4 | `loadClass(String, boolean)`                     | `java.lang.ClassLoader`                             |
|  4.3% |  0.1ms |           1 | `<init>(boolean)`                                | `java.util.concurrent.locks.ReentrantReadWriteLock` |
|  2.0% | 43.8µs |           2 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream`                    |
|  0.5% | 11.1µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)`      | `java.nio.file.Files`                               |
|  0.4% |  7.7µs |           1 | `getDeclaredMethods0(boolean)`                   | `java.lang.Class`                                   |
|  0.3% |  6.0µs |           1 | `<init>(Collection, int)`                        | `java.nio.file.FileTreeWalker`                      |
| <0.1% |  0.5µs |           1 | `<clinit>()`                                     | `java.nio.file.FileTreeWalker`                      |

##### Ours

|    % |   Time | Contentions | Function                           | Location                        |
| ---: | -----: | ----------: | ---------------------------------- | ------------------------------- |
| 1.5% | 32.5µs |           1 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

#### Lines

Lines with the largest contribution to each function's self time.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Location                    |
| -----: | ----: | ----------: | --------------------------- |
| 100.0% | 2.0ms |           4 | `java.lang.ClassLoader:573` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

|      % |  Time | Contentions | Location                                                |
| -----: | ----: | ----------: | ------------------------------------------------------- |
| 100.0% | 0.1ms |           1 | `java.util.concurrent.locks.ReentrantReadWriteLock:241` |

##### `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`)

|      % |   Time | Contentions | Location                            |
| -----: | -----: | ----------: | ----------------------------------- |
| 100.0% | 43.8µs |           2 | `sun.nio.fs.UnixDirectoryStream:52` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

|      % |   Time | Contentions | Location                           |
| -----: | -----: | ----------: | ---------------------------------- |
| 100.0% | 32.5µs |           1 | `org.renaissance.core.DirUtils:28` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

|      % |   Time | Contentions | Location                   |
| -----: | -----: | ----------: | -------------------------- |
| 100.0% | 11.1µs |           1 | `java.nio.file.Files:2791` |

##### `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`)

|      % |  Time | Contentions | Location                           |
| -----: | ----: | ----------: | ---------------------------------- |
| 100.0% | 6.0µs |           1 | `java.nio.file.FileTreeWalker:192` |

##### `<clinit>()` (`java.nio.file.FileTreeWalker`)

|      % |  Time | Contentions | Location                          |
| -----: | ----: | ----------: | --------------------------------- |
| 100.0% | 0.5µs |           1 | `java.nio.file.FileTreeWalker:57` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Caller              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 2.0ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

|      % |  Time | Contentions | Caller                                           | Location                         |
| -----: | ----: | ----------: | ------------------------------------------------ | -------------------------------- |
| 100.0% | 0.1ms |           1 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream` |

##### `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`)

|      % |   Time | Contentions | Caller                                             | Location                            |
| -----: | -----: | ----------: | -------------------------------------------------- | ----------------------------------- |
| 100.0% | 43.8µs |           2 | `newDirectoryStream(Path, DirectoryStream$Filter)` | `sun.nio.fs.UnixFileSystemProvider` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

|      % |   Time | Contentions | Caller                    | Location                        |
| -----: | -----: | ----------: | ------------------------- | ------------------------------- |
| 100.0% | 32.5µs |           1 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

|      % |   Time | Contentions | Caller                            | Location              |
| -----: | -----: | ----------: | --------------------------------- | --------------------- |
| 100.0% | 11.1µs |           1 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files` |

##### `getDeclaredMethods0(boolean)` (`java.lang.Class`)

|      % |  Time | Contentions | Caller                               | Location          |
| -----: | ----: | ----------: | ------------------------------------ | ----------------- |
| 100.0% | 7.7µs |           1 | `privateGetDeclaredMethods(boolean)` | `java.lang.Class` |

##### `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`)

|      % |  Time | Contentions | Caller                                      | Location              |
| -----: | ----: | ----------: | ------------------------------------------- | --------------------- |
| 100.0% | 6.0µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `<clinit>()` (`java.nio.file.FileTreeWalker`)

|      % |  Time | Contentions | Caller                                      | Location              |
| -----: | ----: | ----------: | ------------------------------------------- | --------------------- |
| 100.0% | 0.5µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

### Total time

Functions with the most time blocked within the function and its callees.

|     % |  Time | Contentions | Function                                             | Location                                                   |
| ----: | ----: | ----------: | ---------------------------------------------------- | ---------------------------------------------------------- |
| 91.1% | 2.0ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                                    |
| 91.1% | 2.0ms |           4 | `loadClass(String)`                                  | `java.lang.ClassLoader`                                    |
| 91.1% | 2.0ms |           4 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 91.1% | 2.0ms |           4 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 91.1% | 2.0ms |           4 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 91.1% | 2.0ms |           4 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| 91.1% | 2.0ms |           4 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                       |
| 91.1% | 2.0ms |           4 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                        |
| 91.1% | 2.0ms |           4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 91.1% | 2.0ms |           4 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                        |
| 91.1% | 2.0ms |           4 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                        |
| 91.1% | 2.0ms |           4 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                |
| 66.6% | 1.4ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 66.6% | 1.4ms |           2 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                        |
| 66.6% | 1.4ms |           2 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                        |
|  8.9% | 0.2ms |           8 | `deleteRecursively(Path, boolean)`                   | `org.renaissance.core.DirUtils`                            |
|  8.9% | 0.2ms |           8 | `deleteRecursively(Path)`                            | `org.renaissance.core.DirUtils`                            |
|  8.9% | 0.2ms |           8 | `lambda$createScratchDirectory$1(Path)`              | `org.renaissance.core.DirUtils`                            |
|  8.9% | 0.2ms |           8 | `run()`                                              | `org.renaissance.core.DirUtils$$Lambda.0x000000e801003a68` |
|  8.9% | 0.2ms |           8 | `runWith(Object, Runnable)`                          | `java.lang.Thread`                                         |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |  Time | Contentions | Function                                             | Location                                      |
| ----: | ----: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| 91.1% | 2.0ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                       |
| 91.1% | 2.0ms |           4 | `loadClass(String)`                                  | `java.lang.ClassLoader`                       |
| 91.1% | 2.0ms |           4 | `exec()`                                             | `java.util.concurrent.RecursiveTask`          |
| 91.1% | 2.0ms |           4 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`           |
| 91.1% | 2.0ms |           4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 91.1% | 2.0ms |           4 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`           |
| 91.1% | 2.0ms |           4 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`           |
| 91.1% | 2.0ms |           4 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`   |
| 66.6% | 1.4ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 66.6% | 1.4ms |           2 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`           |
| 66.6% | 1.4ms |           2 | `join()`                                             | `java.util.concurrent.ForkJoinTask`           |
|  8.9% | 0.2ms |           8 | `runWith(Object, Runnable)`                          | `java.lang.Thread`                            |
|  8.9% | 0.2ms |           8 | `run()`                                              | `java.lang.Thread`                            |
|  7.5% | 0.2ms |           7 | `walkFileTree(Path, FileVisitor)`                    | `java.nio.file.Files`                         |
|  7.1% | 0.2ms |           6 | `walkFileTree(Path, Set, int, FileVisitor)`          | `java.nio.file.Files`                         |
|  6.3% | 0.1ms |           3 | `<init>(UnixPath, long, DirectoryStream$Filter)`     | `sun.nio.fs.UnixDirectoryStream`              |
|  6.3% | 0.1ms |           3 | `newDirectoryStream(Path, DirectoryStream$Filter)`   | `sun.nio.fs.UnixFileSystemProvider`           |
|  6.3% | 0.1ms |           3 | `newDirectoryStream(Path)`                           | `java.nio.file.Files`                         |
|  6.3% | 0.1ms |           3 | `visit(Path, boolean, boolean)`                      | `java.nio.file.FileTreeWalker`                |
|  6.3% | 0.1ms |           3 | `walk(Path)`                                         | `java.nio.file.FileTreeWalker`                |

##### Ours

|     % |  Time | Contentions | Function                                | Location                                                   |
| ----: | ----: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| 91.1% | 2.0ms |           4 | `average(List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 91.1% | 2.0ms |           4 | `computeClusterAverages()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 91.1% | 2.0ms |           4 | `computeDirectly()`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 91.1% | 2.0ms |           4 | `compute()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|  8.9% | 0.2ms |           8 | `deleteRecursively(Path, boolean)`      | `org.renaissance.core.DirUtils`                            |
|  8.9% | 0.2ms |           8 | `deleteRecursively(Path)`               | `org.renaissance.core.DirUtils`                            |
|  8.9% | 0.2ms |           8 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils`                            |
|  8.9% | 0.2ms |           8 | `run()`                                 | `org.renaissance.core.DirUtils$$Lambda.0x000000e801003a68` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Caller              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 2.0ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Caller          | Location                                               |
| -----: | ----: | ----------: | --------------- | ------------------------------------------------------ |
| 100.0% | 2.0ms |           4 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Caller                     | Location                                               |
| -----: | ----: | ----------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 2.0ms |           4 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Caller              | Location                                               |
| -----: | ----: | ----------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 2.0ms |           4 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Caller              | Location                                               |
| -----: | ----: | ----------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 2.0ms |           4 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% | 2.0ms |           4 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |  Time | Contentions | Caller   | Location                             |
| -----: | ----: | ----------: | -------- | ------------------------------------ |
| 100.0% | 2.0ms |           4 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |  Time | Contentions | Caller     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 2.0ms |           4 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Caller                                               | Location                                      |
| -----: | ----: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 2.0ms |           4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  73.1% | 1.4ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Caller                                   | Location                            |
| -----: | ----: | ----------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 2.0ms |           4 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Caller                              | Location                            |
| -----: | ----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 2.0ms |           4 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Caller  | Location                                    |
| -----: | ----: | ----------: | ------- | ------------------------------------------- |
| 100.0% | 2.0ms |           4 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Caller                 | Location                            |
| -----: | ----: | ----------: | ---------------------- | ----------------------------------- |
| 100.0% | 1.4ms |           2 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Caller   | Location                            |
| -----: | ----: | ----------: | -------- | ----------------------------------- |
| 100.0% | 1.4ms |           2 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Caller      | Location                                               |
| -----: | ----: | ----------: | ----------- | ------------------------------------------------------ |
| 100.0% | 1.4ms |           2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Caller                    | Location                        |
| -----: | ----: | ----------: | ------------------------- | ------------------------------- |
| 100.0% | 0.2ms |           8 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Caller                                  | Location                        |
| -----: | ----: | ----------: | --------------------------------------- | ------------------------------- |
| 100.0% | 0.2ms |           8 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Caller  | Location                                                   |
| -----: | ----: | ----------: | ------- | ---------------------------------------------------------- |
| 100.0% | 0.2ms |           8 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x000000e801003a68` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000e801003a68`)

|      % |  Time | Contentions | Caller                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 0.2ms |           8 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Caller  | Location           |
| -----: | ----: | ----------: | ------- | ------------------ |
| 100.0% | 0.2ms |           8 | `run()` | `java.lang.Thread` |

##### `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`)

|      % |  Time | Contentions | Caller                             | Location                        |
| -----: | ----: | ----------: | ---------------------------------- | ------------------------------- |
| 100.0% | 0.2ms |           7 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

|      % |  Time | Contentions | Caller                            | Location              |
| -----: | ----: | ----------: | --------------------------------- | --------------------- |
| 100.0% | 0.2ms |           6 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files` |

##### `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`)

|      % |  Time | Contentions | Caller                                             | Location                            |
| -----: | ----: | ----------: | -------------------------------------------------- | ----------------------------------- |
| 100.0% | 0.1ms |           3 | `newDirectoryStream(Path, DirectoryStream$Filter)` | `sun.nio.fs.UnixFileSystemProvider` |

##### `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`)

|      % |  Time | Contentions | Caller                     | Location              |
| -----: | ----: | ----------: | -------------------------- | --------------------- |
| 100.0% | 0.1ms |           3 | `newDirectoryStream(Path)` | `java.nio.file.Files` |

##### `newDirectoryStream(Path)` (`java.nio.file.Files`)

|      % |  Time | Contentions | Caller                          | Location                       |
| -----: | ----: | ----------: | ------------------------------- | ------------------------------ |
| 100.0% | 0.1ms |           3 | `visit(Path, boolean, boolean)` | `java.nio.file.FileTreeWalker` |

##### `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`)

|      % |  Time | Contentions | Caller       | Location                       |
| -----: | ----: | ----------: | ------------ | ------------------------------ |
| 100.0% | 0.1ms |           3 | `walk(Path)` | `java.nio.file.FileTreeWalker` |

##### `walk(Path)` (`java.nio.file.FileTreeWalker`)

|      % |  Time | Contentions | Caller                                      | Location              |
| -----: | ----: | ----------: | ------------------------------------------- | --------------------- |
| 100.0% | 0.1ms |           3 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `loadClass(String)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Callee                       | Location                |
| -----: | ----: | ----------: | ---------------------------- | ----------------------- |
| 100.0% | 2.0ms |           4 | `loadClass(String, boolean)` | `java.lang.ClassLoader` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Callee              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 2.0ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Callee          | Location                                               |
| -----: | ----: | ----------: | --------------- | ------------------------------------------------------ |
| 100.0% | 2.0ms |           4 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Callee                     | Location                                               |
| -----: | ----: | ----------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 2.0ms |           4 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% | 2.0ms |           4 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |  Time | Contentions | Callee              | Location                                               |
| -----: | ----: | ----------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 2.0ms |           4 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  73.1% | 1.4ms |           2 | `join()`            | `java.util.concurrent.ForkJoinTask`                    |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |  Time | Contentions | Callee      | Location                                               |
| -----: | ----: | ----------: | ----------- | ------------------------------------------------------ |
| 100.0% | 2.0ms |           4 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee   | Location                             |
| -----: | ----: | ----------: | -------- | ------------------------------------ |
| 100.0% | 2.0ms |           4 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 2.0ms |           4 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Callee                                               | Location                                      |
| -----: | ----: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 2.0ms |           4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Callee                                   | Location                            |
| -----: | ----: | ----------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 2.0ms |           4 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % |  Time | Contentions | Callee                              | Location                            |
| -----: | ----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 2.0ms |           4 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 1.4ms |           2 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee                                    | Location                                      |
| -----: | ----: | ----------: | ----------------------------------------- | --------------------------------------------- |
| 100.0% | 1.4ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee                 | Location                            |
| -----: | ----: | ----------: | ---------------------- | ----------------------------------- |
| 100.0% | 1.4ms |           2 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

|     % |  Time | Contentions | Callee                            | Location              |
| ----: | ----: | ----------: | --------------------------------- | --------------------- |
| 83.3% | 0.2ms |           7 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files` |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Callee                             | Location                        |
| -----: | ----: | ----------: | ---------------------------------- | ------------------------------- |
| 100.0% | 0.2ms |           8 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Callee                    | Location                        |
| -----: | ----: | ----------: | ------------------------- | ------------------------------- |
| 100.0% | 0.2ms |           8 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000e801003a68`)

|      % |  Time | Contentions | Callee                                  | Location                        |
| -----: | ----: | ----------: | --------------------------------------- | ------------------------------- |
| 100.0% | 0.2ms |           8 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee  | Location                                                   |
| -----: | ----: | ----------: | ------- | ---------------------------------------------------------- |
| 100.0% | 0.2ms |           8 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x000000e801003a68` |

##### `run()` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 0.2ms |           8 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`)

|     % |  Time | Contentions | Callee                                      | Location              |
| ----: | ----: | ----------: | ------------------------------------------- | --------------------- |
| 95.3% | 0.2ms |           6 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |
|  4.7% | 7.7µs |           1 | `noneOf(Class)`                             | `java.util.EnumSet`   |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

|     % |  Time | Contentions | Callee                    | Location                       |
| ----: | ----: | ----------: | ------------------------- | ------------------------------ |
| 88.6% | 0.1ms |           3 | `walk(Path)`              | `java.nio.file.FileTreeWalker` |
|  3.9% | 6.0µs |           1 | `<init>(Collection, int)` | `java.nio.file.FileTreeWalker` |
|  0.3% | 0.5µs |           1 | `<clinit>()`              | `java.nio.file.FileTreeWalker` |

##### `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`)

|     % |  Time | Contentions | Callee            | Location                                            |
| ----: | ----: | ----------: | ----------------- | --------------------------------------------------- |
| 68.1% | 0.1ms |           1 | `<init>(boolean)` | `java.util.concurrent.locks.ReentrantReadWriteLock` |

##### `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`)

|      % |  Time | Contentions | Callee                                           | Location                         |
| -----: | ----: | ----------: | ------------------------------------------------ | -------------------------------- |
| 100.0% | 0.1ms |           3 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream` |

##### `newDirectoryStream(Path)` (`java.nio.file.Files`)

|      % |  Time | Contentions | Callee                                             | Location                            |
| -----: | ----: | ----------: | -------------------------------------------------- | ----------------------------------- |
| 100.0% | 0.1ms |           3 | `newDirectoryStream(Path, DirectoryStream$Filter)` | `sun.nio.fs.UnixFileSystemProvider` |

##### `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`)

|      % |  Time | Contentions | Callee                     | Location              |
| -----: | ----: | ----------: | -------------------------- | --------------------- |
| 100.0% | 0.1ms |           3 | `newDirectoryStream(Path)` | `java.nio.file.Files` |

##### `walk(Path)` (`java.nio.file.FileTreeWalker`)

|      % |  Time | Contentions | Callee                          | Location                       |
| -----: | ----: | ----------: | ------------------------------- | ------------------------------ |
| 100.0% | 0.1ms |           3 | `visit(Path, boolean, boolean)` | `java.nio.file.FileTreeWalker` |

## Hottest call stacks

Call stacks with the most time blocked in their leaf frame.

|     % |   Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----: | -----: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 66.6% |  1.4ms |           2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
| 24.5% |  0.5ms |           2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                   |
|  4.3% |  0.1ms |           1 | `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`) ← `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`) ← `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000e801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                           |
|  2.0% | 43.8µs |           2 | `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`) ← `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000e801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                     |
|  1.5% | 32.5µs |           1 | `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000e801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.5% | 11.1µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000e801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.4% |  7.7µs |           1 | `getDeclaredMethods0(boolean)` (`java.lang.Class`) ← `privateGetDeclaredMethods(boolean)` ← `getMethodsRecursive(String, Class[], boolean)` ← `getMethod0(String, Class[])` ← `getMethod(String, Class[])` ← `getEnumConstantsShared()` ← `getEnumConstantsShared(Class)` (`java.lang.System$2`) ← `getUniverse(Class)` (`java.util.EnumSet`) ← `noneOf(Class)` ← `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`) ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000e801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                         |
|  0.3% |  6.0µs |           1 | `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`) ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000e801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| <0.1% |  0.5µs |           1 | `<clinit>()` (`java.nio.file.FileTreeWalker`) ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000e801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

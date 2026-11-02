# Lock contention profile

Blocked 3.6ms over 12 contentions (303.1µs per contention).

| Category         |     % |  Time | Contentions |
| ---------------- | ----: | ----: | ----------: |
| Standard library | 99.8% | 3.6ms |          11 |
| Ours             |  0.2% | 8.2µs |           1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 3.3ms (92.0%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 3.3ms (92.0%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       └── 3.3ms (92.0%) scan(ForkJoinPool$WorkQueue, int, int)
│           └── 3.3ms (92.0%) topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool$WorkQueue
│               └── 3.3ms (92.0%) doExec() at java.util.concurrent.ForkJoinTask
│                   └── … 3.3ms (92.0%) exec() at java.util.concurrent.RecursiveTask
│                       └── 3.3ms (92.0%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│                           └── 3.3ms (92.0%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│                               └── … 3.3ms (92.0%) computeClusterAverages() at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│                                   └── 3.3ms (92.0%) average(List)
│                                       └── 3.3ms (91.8%) loadClass(String) at java.lang.ClassLoader
│                                           └── 3.3ms (91.8%) loadClass(String, boolean)
└── 0.3ms (8.0%) run() at java.lang.Thread
    └── 0.3ms (8.0%) runWith(Object, Runnable)
        └── 0.3ms (8.0%) run() at org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68
            └── 0.3ms (8.0%) lambda$createScratchDirectory$1(Path) at org.renaissance.core.DirUtils
                └── 0.3ms (8.0%) deleteRecursively(Path)
                    └── 0.3ms (8.0%) deleteRecursively(Path, boolean)
                        ├── 0.2ms (5.8%) loadClass(String) at java.lang.ClassLoader
                        │   └── 0.2ms (5.8%) loadClass(String, boolean) at jdk.internal.loader.ClassLoaders$AppClassLoader
                        │       └── 0.2ms (5.8%) loadClass(String, boolean) at jdk.internal.loader.BuiltinClassLoader
                        │           └── 0.2ms (5.8%) loadClassOrNull(String, boolean)
                        └── 0.1ms (2.2%) walkFileTree(Path, FileVisitor) at java.nio.file.Files
                            ├── 0.1ms (1.8%) walkFileTree(Path, Set, int, FileVisitor)
                            │   ├── 0.1ms (1.7%) walk(Path) at java.nio.file.FileTreeWalker
                            │   │   └── 0.1ms (1.7%) visit(Path, boolean, boolean)
                            │   │       ├── 49.3µs (1.4%) newDirectoryStream(Path) at java.nio.file.Files
                            │   │       │   └── 49.3µs (1.4%) newDirectoryStream(Path, DirectoryStream$Filter) at sun.nio.fs.UnixFileSystemProvider
                            │   │       │       └── 49.3µs (1.4%) <init>(UnixPath, long, DirectoryStream$Filter) at sun.nio.fs.UnixDirectoryStream
                            │   │       │           └── 49.3µs (1.4%) <init>(boolean) at java.util.concurrent.locks.ReentrantReadWriteLock
                            │   │       └── 11.8µs (0.3%) <init>(Path, Object, DirectoryStream) at java.nio.file.FileTreeWalker$DirectoryNode
                            │   │           └── 11.8µs (0.3%) iterator() at sun.nio.fs.UnixDirectoryStream
                            │   │               └── 11.8µs (0.3%) iterator(DirectoryStream)
                            │   │                   └── 6.6µs (0.2%) <clinit>() at sun.nio.fs.UnixDirectoryStream$UnixDirectoryIterator
                            │   └── 5.0µs (0.1%) <clinit>() at java.nio.file.Files$3
                            └── … 14.4µs (0.4%) getMethod(String, Class[]) at java.lang.Class
                                └── 14.4µs (0.4%) getMethod0(String, Class[])
                                    └── 14.4µs (0.4%) getMethodsRecursive(String, Class[], boolean)
                                        └── 14.4µs (0.4%) privateGetDeclaredMethods(boolean)
                                            └── 14.4µs (0.4%) getDeclaredMethods0(boolean)
```

## Hottest functions

### Self time

Functions with the most time blocked within the function body, excluding callees.

|     % |   Time | Contentions | Function                           | Location                                               |
| ----: | -----: | ----------: | ---------------------------------- | ------------------------------------------------------ |
| 91.8% |  3.3ms |           4 | `loadClass(String, boolean)`       | `java.lang.ClassLoader`                                |
|  5.8% |  0.2ms |           1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader`               |
|  1.4% | 49.3µs |           1 | `<init>(boolean)`                  | `java.util.concurrent.locks.ReentrantReadWriteLock`    |
|  0.4% | 14.4µs |           1 | `getDeclaredMethods0(boolean)`     | `java.lang.Class`                                      |
|  0.2% |  8.2µs |           1 | `average(List)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.2% |  6.6µs |           1 | `<clinit>()`                       | `sun.nio.fs.UnixDirectoryStream$UnixDirectoryIterator` |
|  0.1% |  5.2µs |           1 | `iterator(DirectoryStream)`        | `sun.nio.fs.UnixDirectoryStream`                       |
|  0.1% |  5.0µs |           1 | `<clinit>()`                       | `java.nio.file.Files$3`                                |
| <0.1% |  0.3µs |           1 | `<init>(Collection, int)`          | `java.nio.file.FileTreeWalker`                         |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |   Time | Contentions | Function                           | Location                                               |
| ----: | -----: | ----------: | ---------------------------------- | ------------------------------------------------------ |
| 91.8% |  3.3ms |           4 | `loadClass(String, boolean)`       | `java.lang.ClassLoader`                                |
|  5.8% |  0.2ms |           1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader`               |
|  1.4% | 49.3µs |           1 | `<init>(boolean)`                  | `java.util.concurrent.locks.ReentrantReadWriteLock`    |
|  0.4% | 14.4µs |           1 | `getDeclaredMethods0(boolean)`     | `java.lang.Class`                                      |
|  0.2% |  6.6µs |           1 | `<clinit>()`                       | `sun.nio.fs.UnixDirectoryStream$UnixDirectoryIterator` |
|  0.1% |  5.2µs |           1 | `iterator(DirectoryStream)`        | `sun.nio.fs.UnixDirectoryStream`                       |
|  0.1% |  5.0µs |           1 | `<clinit>()`                       | `java.nio.file.Files$3`                                |
| <0.1% |  0.3µs |           1 | `<init>(Collection, int)`          | `java.nio.file.FileTreeWalker`                         |

#### Lines

Lines with the largest contribution to each function's self time.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Location                    |
| -----: | ----: | ----------: | --------------------------- |
| 100.0% | 3.3ms |           4 | `java.lang.ClassLoader:573` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Location                                     |
| -----: | ----: | ----------: | -------------------------------------------- |
| 100.0% | 0.2ms |           1 | `jdk.internal.loader.BuiltinClassLoader:651` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

|      % |   Time | Contentions | Location                                                |
| -----: | -----: | ----------: | ------------------------------------------------------- |
| 100.0% | 49.3µs |           1 | `java.util.concurrent.locks.ReentrantReadWriteLock:241` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Location                                                   |
| -----: | ----: | ----------: | ---------------------------------------------------------- |
| 100.0% | 8.2µs |           1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:332` |

##### `<clinit>()` (`sun.nio.fs.UnixDirectoryStream$UnixDirectoryIterator`)

|      % |  Time | Contentions | Location                                                   |
| -----: | ----: | ----------: | ---------------------------------------------------------- |
| 100.0% | 6.6µs |           1 | `sun.nio.fs.UnixDirectoryStream$UnixDirectoryIterator:132` |

##### `iterator(DirectoryStream)` (`sun.nio.fs.UnixDirectoryStream`)

|      % |  Time | Contentions | Location                             |
| -----: | ----: | ----------: | ------------------------------------ |
| 100.0% | 5.2µs |           1 | `sun.nio.fs.UnixDirectoryStream:119` |

##### `<clinit>()` (`java.nio.file.Files$3`)

|      % |  Time | Contentions | Location                     |
| -----: | ----: | ----------: | ---------------------------- |
| 100.0% | 5.0µs |           1 | `java.nio.file.Files$3:2794` |

##### `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`)

|      % |  Time | Contentions | Location                           |
| -----: | ----: | ----------: | ---------------------------------- |
| 100.0% | 0.3µs |           1 | `java.nio.file.FileTreeWalker:192` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Caller              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 3.3ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Caller                       | Location                                 |
| -----: | ----: | ----------: | ---------------------------- | ---------------------------------------- |
| 100.0% | 0.2ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

|      % |   Time | Contentions | Caller                                           | Location                         |
| -----: | -----: | ----------: | ------------------------------------------------ | -------------------------------- |
| 100.0% | 49.3µs |           1 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream` |

##### `getDeclaredMethods0(boolean)` (`java.lang.Class`)

|      % |   Time | Contentions | Caller                               | Location          |
| -----: | -----: | ----------: | ------------------------------------ | ----------------- |
| 100.0% | 14.4µs |           1 | `privateGetDeclaredMethods(boolean)` | `java.lang.Class` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Caller                     | Location                                               |
| -----: | ----: | ----------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 8.2µs |           1 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `<clinit>()` (`sun.nio.fs.UnixDirectoryStream$UnixDirectoryIterator`)

|      % |  Time | Contentions | Caller                      | Location                         |
| -----: | ----: | ----------: | --------------------------- | -------------------------------- |
| 100.0% | 6.6µs |           1 | `iterator(DirectoryStream)` | `sun.nio.fs.UnixDirectoryStream` |

##### `iterator(DirectoryStream)` (`sun.nio.fs.UnixDirectoryStream`)

|      % |  Time | Contentions | Caller       | Location                         |
| -----: | ----: | ----------: | ------------ | -------------------------------- |
| 100.0% | 5.2µs |           1 | `iterator()` | `sun.nio.fs.UnixDirectoryStream` |

##### `<clinit>()` (`java.nio.file.Files$3`)

|      % |  Time | Contentions | Caller                                      | Location              |
| -----: | ----: | ----------: | ------------------------------------------- | --------------------- |
| 100.0% | 5.0µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`)

|      % |  Time | Contentions | Caller                                      | Location              |
| -----: | ----: | ----------: | ------------------------------------------- | --------------------- |
| 100.0% | 0.3µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

### Total time

Functions with the most time blocked within the function and its callees.

|     % |  Time | Contentions | Function                                             | Location                                                               |
| ----: | ----: | ----------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| 97.6% | 3.5ms |           5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                                                |
| 92.0% | 3.3ms |           5 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 92.0% | 3.3ms |           5 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 92.0% | 3.3ms |           5 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 92.0% | 3.3ms |           5 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 92.0% | 3.3ms |           5 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
| 92.0% | 3.3ms |           5 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
| 92.0% | 3.3ms |           5 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| 92.0% | 3.3ms |           5 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
| 92.0% | 3.3ms |           5 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
| 92.0% | 3.3ms |           5 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
| 91.8% | 3.3ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                                                |
| 14.5% | 0.5ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| 14.5% | 0.5ms |           2 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                                    |
| 14.5% | 0.5ms |           2 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                                    |
|  9.8% | 0.4ms |           1 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
|  9.8% | 0.4ms |           1 | `lambda$run$0(int, List, int)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  9.8% | 0.4ms |           1 | `call()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |
|  9.8% | 0.4ms |           1 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|  8.0% | 0.3ms |           7 | `deleteRecursively(Path, boolean)`                   | `org.renaissance.core.DirUtils`                                        |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |  Time | Contentions | Function                                             | Location                                            |
| ----: | ----: | ----------: | ---------------------------------------------------- | --------------------------------------------------- |
| 97.6% | 3.5ms |           5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                             |
| 92.0% | 3.3ms |           5 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                |
| 92.0% | 3.3ms |           5 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| 92.0% | 3.3ms |           5 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 92.0% | 3.3ms |           5 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                 |
| 92.0% | 3.3ms |           5 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                 |
| 92.0% | 3.3ms |           5 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`         |
| 91.8% | 3.3ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                             |
| 14.5% | 0.5ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 14.5% | 0.5ms |           2 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                 |
| 14.5% | 0.5ms |           2 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                 |
|  9.8% | 0.4ms |           1 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                 |
|  9.8% | 0.4ms |           1 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  8.0% | 0.3ms |           7 | `runWith(Object, Runnable)`                          | `java.lang.Thread`                                  |
|  8.0% | 0.3ms |           7 | `run()`                                              | `java.lang.Thread`                                  |
|  5.8% | 0.2ms |           1 | `loadClassOrNull(String, boolean)`                   | `jdk.internal.loader.BuiltinClassLoader`            |
|  5.8% | 0.2ms |           1 | `loadClass(String, boolean)`                         | `jdk.internal.loader.BuiltinClassLoader`            |
|  5.8% | 0.2ms |           1 | `loadClass(String, boolean)`                         | `jdk.internal.loader.ClassLoaders$AppClassLoader`   |
|  2.2% | 0.1ms |           6 | `walkFileTree(Path, FileVisitor)`                    | `java.nio.file.Files`                               |
|  1.8% | 0.1ms |           5 | `walkFileTree(Path, Set, int, FileVisitor)`          | `java.nio.file.Files`                               |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `loadClass(String)` (`java.lang.ClassLoader`)

|     % |  Time | Contentions | Caller                             | Location                                               |
| ----: | ----: | ----------: | ---------------------------------- | ------------------------------------------------------ |
| 94.1% | 3.3ms |           4 | `average(List)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  5.9% | 0.2ms |           1 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils`                        |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Caller                     | Location                                               |
| -----: | ----: | ----------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 3.3ms |           5 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Caller              | Location                                               |
| -----: | ----: | ----------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 3.3ms |           5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Caller              | Location                                               |
| -----: | ----: | ----------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 3.3ms |           5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% | 3.3ms |           5 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |  Time | Contentions | Caller   | Location                             |
| -----: | ----: | ----------: | -------- | ------------------------------------ |
| 100.0% | 3.3ms |           5 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |  Time | Contentions | Caller     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 3.3ms |           5 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Caller                                               | Location                                      |
| -----: | ----: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 3.3ms |           5 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  15.7% | 0.5ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  10.7% | 0.4ms |           1 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Caller                                   | Location                            |
| -----: | ----: | ----------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 3.3ms |           5 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Caller                              | Location                            |
| -----: | ----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 3.3ms |           5 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Caller  | Location                                    |
| -----: | ----: | ----------: | ------- | ------------------------------------------- |
| 100.0% | 3.3ms |           5 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Caller              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 3.3ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Caller                 | Location                            |
| -----: | ----: | ----------: | ---------------------- | ----------------------------------- |
| 100.0% | 0.5ms |           2 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Caller   | Location                            |
| -----: | ----: | ----------: | -------- | ----------------------------------- |
| 100.0% | 0.5ms |           2 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Caller      | Location                                               |
| -----: | ----: | ----------: | ----------- | ------------------------------------------------------ |
| 100.0% | 0.5ms |           2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Caller                         | Location                                    |
| -----: | ----: | ----------: | ------------------------------ | ------------------------------------------- |
| 100.0% | 0.4ms |           1 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |  Time | Contentions | Caller   | Location                                                               |
| -----: | ----: | ----------: | -------- | ---------------------------------------------------------------------- |
| 100.0% | 0.4ms |           1 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`)

|      % |  Time | Contentions | Caller   | Location                                            |
| -----: | ----: | ----------: | -------- | --------------------------------------------------- |
| 100.0% | 0.4ms |           1 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % |  Time | Contentions | Caller     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 0.4ms |           1 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Caller                    | Location                        |
| -----: | ----: | ----------: | ------------------------- | ------------------------------- |
| 100.0% | 0.3ms |           7 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Caller  | Location           |
| -----: | ----: | ----------: | ------- | ------------------ |
| 100.0% | 0.3ms |           7 | `run()` | `java.lang.Thread` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Caller                       | Location                                 |
| -----: | ----: | ----------: | ---------------------------- | ---------------------------------------- |
| 100.0% | 0.2ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Caller                       | Location                                          |
| -----: | ----: | ----------: | ---------------------------- | ------------------------------------------------- |
| 100.0% | 0.2ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`)

|      % |  Time | Contentions | Caller              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 0.2ms |           1 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`)

|      % |  Time | Contentions | Caller                             | Location                        |
| -----: | ----: | ----------: | ---------------------------------- | ------------------------------- |
| 100.0% | 0.1ms |           6 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

|      % |  Time | Contentions | Caller                            | Location              |
| -----: | ----: | ----------: | --------------------------------- | --------------------- |
| 100.0% | 0.1ms |           5 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `loadClass(String)` (`java.lang.ClassLoader`)

|     % |  Time | Contentions | Callee                       | Location                                          |
| ----: | ----: | ----------: | ---------------------------- | ------------------------------------------------- |
| 94.1% | 3.3ms |           4 | `loadClass(String, boolean)` | `java.lang.ClassLoader`                           |
|  5.9% | 0.2ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % |  Time | Contentions | Callee              | Location                |
| ----: | ----: | ----------: | ------------------- | ----------------------- |
| 99.8% | 3.3ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Callee          | Location                                               |
| -----: | ----: | ----------: | --------------- | ------------------------------------------------------ |
| 100.0% | 3.3ms |           5 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Callee                     | Location                                               |
| -----: | ----: | ----------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 3.3ms |           5 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% | 3.3ms |           5 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |  Time | Contentions | Callee              | Location                                               |
| -----: | ----: | ----------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 3.3ms |           5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  15.7% | 0.5ms |           2 | `join()`            | `java.util.concurrent.ForkJoinTask`                    |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |  Time | Contentions | Callee      | Location                                               |
| -----: | ----: | ----------: | ----------- | ------------------------------------------------------ |
| 100.0% | 3.3ms |           5 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee   | Location                                            |
| -----: | ----: | ----------: | -------- | --------------------------------------------------- |
| 100.0% | 3.3ms |           5 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|  10.7% | 0.4ms |           1 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 3.3ms |           5 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Callee                                               | Location                                      |
| -----: | ----: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 3.3ms |           5 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Callee                                   | Location                            |
| -----: | ----: | ----------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 3.3ms |           5 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % |  Time | Contentions | Callee                              | Location                            |
| -----: | ----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 3.3ms |           5 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 0.5ms |           2 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee                                    | Location                                      |
| -----: | ----: | ----------: | ----------------------------------------- | --------------------------------------------- |
| 100.0% | 0.5ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee                 | Location                            |
| -----: | ----: | ----------: | ---------------------- | ----------------------------------- |
| 100.0% | 0.5ms |           2 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 0.4ms |           1 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 0.4ms |           1 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`)

|      % |  Time | Contentions | Callee                         | Location                                    |
| -----: | ----: | ----------: | ------------------------------ | ------------------------------------------- |
| 100.0% | 0.4ms |           1 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % |  Time | Contentions | Callee   | Location                                                               |
| -----: | ----: | ----------: | -------- | ---------------------------------------------------------------------- |
| 100.0% | 0.4ms |           1 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

|     % |  Time | Contentions | Callee                            | Location                |
| ----: | ----: | ----------: | --------------------------------- | ----------------------- |
| 72.3% | 0.2ms |           1 | `loadClass(String)`               | `java.lang.ClassLoader` |
| 27.7% | 0.1ms |           6 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files`   |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee  | Location                                                   |
| -----: | ----: | ----------: | ------- | ---------------------------------------------------------- |
| 100.0% | 0.3ms |           7 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68` |

##### `run()` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 0.3ms |           7 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Callee                             | Location                                 |
| -----: | ----: | ----------: | ---------------------------------- | ---------------------------------------- |
| 100.0% | 0.2ms |           1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`)

|      % |  Time | Contentions | Callee                       | Location                                 |
| -----: | ----: | ----------: | ---------------------------- | ---------------------------------------- |
| 100.0% | 0.2ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`)

|     % |   Time | Contentions | Callee                                      | Location              |
| ----: | -----: | ----------: | ------------------------------------------- | --------------------- |
| 82.1% |  0.1ms |           5 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |
| 17.9% | 14.4µs |           1 | `noneOf(Class)`                             | `java.util.EnumSet`   |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

|     % |  Time | Contentions | Callee                    | Location                       |
| ----: | ----: | ----------: | ------------------------- | ------------------------------ |
| 92.1% | 0.1ms |           3 | `walk(Path)`              | `java.nio.file.FileTreeWalker` |
|  7.5% | 5.0µs |           1 | `<clinit>()`              | `java.nio.file.Files$3`        |
|  0.4% | 0.3µs |           1 | `<init>(Collection, int)` | `java.nio.file.FileTreeWalker` |

## Hottest call stacks

Call stacks with the most time blocked in their leaf frame.

|     % |   Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | -----: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 77.3% |  2.8ms |           2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  9.8% |  0.4ms |           1 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|  5.8% |  0.2ms |           1 | `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String)` (`java.lang.ClassLoader`) ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  4.7% |  0.2ms |           1 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.4% | 49.3µs |           1 | `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`) ← `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`) ← `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.4% | 14.4µs |           1 | `getDeclaredMethods0(boolean)` (`java.lang.Class`) ← `privateGetDeclaredMethods(boolean)` ← `getMethodsRecursive(String, Class[], boolean)` ← `getMethod0(String, Class[])` ← `getMethod(String, Class[])` ← `getEnumConstantsShared()` ← `getEnumConstantsShared(Class)` (`java.lang.System$2`) ← `getUniverse(Class)` (`java.util.EnumSet`) ← `noneOf(Class)` ← `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`) ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.2% |  8.2µs |           1 | `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.2% |  6.6µs |           1 | `<clinit>()` (`sun.nio.fs.UnixDirectoryStream$UnixDirectoryIterator`) ← `iterator(DirectoryStream)` (`sun.nio.fs.UnixDirectoryStream`) ← `iterator()` ← `<init>(Path, Object, DirectoryStream)` (`java.nio.file.FileTreeWalker$DirectoryNode`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.1% |  5.2µs |           1 | `iterator(DirectoryStream)` (`sun.nio.fs.UnixDirectoryStream`) ← `iterator()` ← `<init>(Path, Object, DirectoryStream)` (`java.nio.file.FileTreeWalker$DirectoryNode`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.1% |  5.0µs |           1 | `<clinit>()` (`java.nio.file.Files$3`) ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <0.1% |  0.3µs |           1 | `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`) ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

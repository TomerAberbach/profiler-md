# Lock contention profile

Blocked 1.9ms over 15 contentions (125.0µs per contention).

| Category         |      % |  Time | Contentions |
| ---------------- | -----: | ----: | ----------: |
| Standard library | 100.0% | 1.9ms |          15 |

## Hottest functions

### Self time

Functions ranked by time blocked directly in the function body, excluding callees.

#### Categories

##### Standard library

|     % |   Time | Contentions | Function                           | Location                                            |
| ----: | -----: | ----------: | ---------------------------------- | --------------------------------------------------- |
| 67.5% |  1.3ms |           4 | `loadClass(String, boolean)`       | `java.lang.ClassLoader`                             |
| 21.9% |  0.4ms |           2 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader`            |
|  4.2% |  0.1ms |           3 | `<init>(boolean)`                  | `java.util.concurrent.locks.ReentrantReadWriteLock` |
|  2.7% |  0.1ms |           1 | `getDeclaredMethods0(boolean)`     | `java.lang.Class`                                   |
|  1.3% | 24.5µs |           1 | `$values()`                        | `java.nio.file.FileVisitOption`                     |
|  0.9% | 17.0µs |           1 | `visit(Path, boolean, boolean)`    | `java.nio.file.FileTreeWalker`                      |
|  0.6% | 11.9µs |           1 | `newDirectoryStream(Path)`         | `java.nio.file.Files`                               |
|  0.5% |  9.8µs |           1 | `$values()`                        | `java.nio.file.FileTreeWalker$EventType`            |
|  0.3% |  6.5µs |           1 | `<init>(Collection, int)`          | `java.nio.file.FileTreeWalker`                      |

#### Lines

Lines ranked by contribution to each function's self time.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Location                    |
| -----: | ----: | ----------: | --------------------------- |
| 100.0% | 1.3ms |           4 | `java.lang.ClassLoader:573` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Location                                     |
| -----: | ----: | ----------: | -------------------------------------------- |
| 100.0% | 0.4ms |           2 | `jdk.internal.loader.BuiltinClassLoader:651` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

|     % |   Time | Contentions | Location                                                |
| ----: | -----: | ----------: | ------------------------------------------------------- |
| 55.4% | 43.2µs |           2 | `java.util.concurrent.locks.ReentrantReadWriteLock:241` |
| 44.6% | 34.8µs |           1 | `java.util.concurrent.locks.ReentrantReadWriteLock:242` |

##### `$values()` (`java.nio.file.FileVisitOption`)

|      % |   Time | Contentions | Location                           |
| -----: | -----: | ----------: | ---------------------------------- |
| 100.0% | 24.5µs |           1 | `java.nio.file.FileVisitOption:36` |

##### `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`)

|      % |   Time | Contentions | Location                           |
| -----: | -----: | ----------: | ---------------------------------- |
| 100.0% | 17.0µs |           1 | `java.nio.file.FileTreeWalker:312` |

##### `newDirectoryStream(Path)` (`java.nio.file.Files`)

|      % |   Time | Contentions | Location                  |
| -----: | -----: | ----------: | ------------------------- |
| 100.0% | 11.9µs |           1 | `java.nio.file.Files:482` |

##### `$values()` (`java.nio.file.FileTreeWalker$EventType`)

|      % |  Time | Contentions | Location                                     |
| -----: | ----: | ----------: | -------------------------------------------- |
| 100.0% | 9.8µs |           1 | `java.nio.file.FileTreeWalker$EventType:109` |

##### `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`)

|      % |  Time | Contentions | Location                           |
| -----: | ----: | ----------: | ---------------------------------- |
| 100.0% | 6.5µs |           1 | `java.nio.file.FileTreeWalker:192` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Caller              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 1.3ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Caller                       | Location                                 |
| -----: | ----: | ----------: | ---------------------------- | ---------------------------------------- |
| 100.0% | 0.4ms |           2 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

|      % |  Time | Contentions | Caller                                           | Location                         |
| -----: | ----: | ----------: | ------------------------------------------------ | -------------------------------- |
| 100.0% | 0.1ms |           3 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream` |

##### `getDeclaredMethods0(boolean)` (`java.lang.Class`)

|      % |  Time | Contentions | Caller                               | Location          |
| -----: | ----: | ----------: | ------------------------------------ | ----------------- |
| 100.0% | 0.1ms |           1 | `privateGetDeclaredMethods(boolean)` | `java.lang.Class` |

##### `$values()` (`java.nio.file.FileVisitOption`)

|      % |   Time | Contentions | Caller       | Location                        |
| -----: | -----: | ----------: | ------------ | ------------------------------- |
| 100.0% | 24.5µs |           1 | `<clinit>()` | `java.nio.file.FileVisitOption` |

##### `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`)

|      % |   Time | Contentions | Caller       | Location                       |
| -----: | -----: | ----------: | ------------ | ------------------------------ |
| 100.0% | 17.0µs |           1 | `walk(Path)` | `java.nio.file.FileTreeWalker` |

##### `newDirectoryStream(Path)` (`java.nio.file.Files`)

|      % |   Time | Contentions | Caller                          | Location                       |
| -----: | -----: | ----------: | ------------------------------- | ------------------------------ |
| 100.0% | 11.9µs |           1 | `visit(Path, boolean, boolean)` | `java.nio.file.FileTreeWalker` |

##### `$values()` (`java.nio.file.FileTreeWalker$EventType`)

|      % |  Time | Contentions | Caller       | Location                                 |
| -----: | ----: | ----------: | ------------ | ---------------------------------------- |
| 100.0% | 9.8µs |           1 | `<clinit>()` | `java.nio.file.FileTreeWalker$EventType` |

##### `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`)

|      % |  Time | Contentions | Caller                                      | Location              |
| -----: | ----: | ----------: | ------------------------------------------- | --------------------- |
| 100.0% | 6.5µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

### Total time

Functions ranked by total time blocked in the function and all its callees.

|     % |  Time | Contentions | Function                                             | Location                                                   |
| ----: | ----: | ----------: | ---------------------------------------------------- | ---------------------------------------------------------- |
| 89.4% | 1.7ms |           6 | `loadClass(String)`                                  | `java.lang.ClassLoader`                                    |
| 67.5% | 1.3ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                                    |
| 67.5% | 1.3ms |           4 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 67.5% | 1.3ms |           4 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 67.5% | 1.3ms |           4 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 67.5% | 1.3ms |           4 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| 67.5% | 1.3ms |           4 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                       |
| 67.5% | 1.3ms |           4 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                        |
| 67.5% | 1.3ms |           4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 67.5% | 1.3ms |           4 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                        |
| 67.5% | 1.3ms |           4 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                        |
| 67.5% | 1.3ms |           4 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                |
| 44.8% | 0.8ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 44.8% | 0.8ms |           2 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                        |
| 44.8% | 0.8ms |           2 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                        |
| 32.5% | 0.6ms |          11 | `deleteRecursively(Path, boolean)`                   | `org.renaissance.core.DirUtils`                            |
| 32.5% | 0.6ms |          11 | `deleteRecursively(Path)`                            | `org.renaissance.core.DirUtils`                            |
| 32.5% | 0.6ms |          11 | `lambda$createScratchDirectory$1(Path)`              | `org.renaissance.core.DirUtils`                            |
| 32.5% | 0.6ms |          11 | `run()`                                              | `org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68` |
| 32.5% | 0.6ms |          11 | `runWith(Object, Runnable)`                          | `java.lang.Thread`                                         |

#### Categories

##### Standard library

|     % |  Time | Contentions | Function                                             | Location                                          |
| ----: | ----: | ----------: | ---------------------------------------------------- | ------------------------------------------------- |
| 89.4% | 1.7ms |           6 | `loadClass(String)`                                  | `java.lang.ClassLoader`                           |
| 67.5% | 1.3ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                           |
| 67.5% | 1.3ms |           4 | `exec()`                                             | `java.util.concurrent.RecursiveTask`              |
| 67.5% | 1.3ms |           4 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`               |
| 67.5% | 1.3ms |           4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`     |
| 67.5% | 1.3ms |           4 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`               |
| 67.5% | 1.3ms |           4 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`               |
| 67.5% | 1.3ms |           4 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`       |
| 44.8% | 0.8ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`     |
| 44.8% | 0.8ms |           2 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`               |
| 44.8% | 0.8ms |           2 | `join()`                                             | `java.util.concurrent.ForkJoinTask`               |
| 32.5% | 0.6ms |          11 | `runWith(Object, Runnable)`                          | `java.lang.Thread`                                |
| 32.5% | 0.6ms |          11 | `run()`                                              | `java.lang.Thread`                                |
| 21.9% | 0.4ms |           2 | `loadClassOrNull(String, boolean)`                   | `jdk.internal.loader.BuiltinClassLoader`          |
| 21.9% | 0.4ms |           2 | `loadClass(String, boolean)`                         | `jdk.internal.loader.BuiltinClassLoader`          |
| 21.9% | 0.4ms |           2 | `loadClass(String, boolean)`                         | `jdk.internal.loader.ClassLoaders$AppClassLoader` |
| 11.6% | 0.2ms |          10 | `walkFileTree(Path, FileVisitor)`                    | `java.nio.file.Files`                             |
|  7.6% | 0.1ms |           8 | `walkFileTree(Path, Set, int, FileVisitor)`          | `java.nio.file.Files`                             |
|  6.2% | 0.1ms |           6 | `visit(Path, boolean, boolean)`                      | `java.nio.file.FileTreeWalker`                    |
|  6.2% | 0.1ms |           6 | `walk(Path)`                                         | `java.nio.file.FileTreeWalker`                    |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `loadClass(String)` (`java.lang.ClassLoader`)

|     % |  Time | Contentions | Callee                       | Location                                          |
| ----: | ----: | ----------: | ---------------------------- | ------------------------------------------------- |
| 75.5% | 1.3ms |           4 | `loadClass(String, boolean)` | `java.lang.ClassLoader`                           |
| 24.5% | 0.4ms |           2 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Callee              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 1.3ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Callee          | Location                                               |
| -----: | ----: | ----------: | --------------- | ------------------------------------------------------ |
| 100.0% | 1.3ms |           4 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Callee                     | Location                                               |
| -----: | ----: | ----------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 1.3ms |           4 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% | 1.3ms |           4 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |  Time | Contentions | Callee              | Location                                               |
| -----: | ----: | ----------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 1.3ms |           4 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  66.3% | 0.8ms |           2 | `join()`            | `java.util.concurrent.ForkJoinTask`                    |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |  Time | Contentions | Callee      | Location                                               |
| -----: | ----: | ----------: | ----------- | ------------------------------------------------------ |
| 100.0% | 1.3ms |           4 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee   | Location                             |
| -----: | ----: | ----------: | -------- | ------------------------------------ |
| 100.0% | 1.3ms |           4 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 1.3ms |           4 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Callee                                               | Location                                      |
| -----: | ----: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 1.3ms |           4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Callee                                   | Location                            |
| -----: | ----: | ----------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 1.3ms |           4 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % |  Time | Contentions | Callee                              | Location                            |
| -----: | ----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 1.3ms |           4 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 0.8ms |           2 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee                                    | Location                                      |
| -----: | ----: | ----------: | ----------------------------------------- | --------------------------------------------- |
| 100.0% | 0.8ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee                 | Location                            |
| -----: | ----: | ----------: | ---------------------- | ----------------------------------- |
| 100.0% | 0.8ms |           2 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

|     % |  Time | Contentions | Callee                            | Location                |
| ----: | ----: | ----------: | --------------------------------- | ----------------------- |
| 64.2% | 0.4ms |           1 | `loadClass(String)`               | `java.lang.ClassLoader` |
| 35.8% | 0.2ms |          10 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files`   |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Callee                             | Location                        |
| -----: | ----: | ----------: | ---------------------------------- | ------------------------------- |
| 100.0% | 0.6ms |          11 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Callee                    | Location                        |
| -----: | ----: | ----------: | ------------------------- | ------------------------------- |
| 100.0% | 0.6ms |          11 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`)

|      % |  Time | Contentions | Callee                                  | Location                        |
| -----: | ----: | ----------: | --------------------------------------- | ------------------------------- |
| 100.0% | 0.6ms |          11 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee  | Location                                                   |
| -----: | ----: | ----------: | ------- | ---------------------------------------------------------- |
| 100.0% | 0.6ms |          11 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68` |

##### `run()` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 0.6ms |          11 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Callee                             | Location                                 |
| -----: | ----: | ----------: | ---------------------------------- | ---------------------------------------- |
| 100.0% | 0.4ms |           2 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`)

|      % |  Time | Contentions | Callee                       | Location                                 |
| -----: | ----: | ----------: | ---------------------------- | ---------------------------------------- |
| 100.0% | 0.4ms |           2 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`)

|     % |  Time | Contentions | Callee                                      | Location              |
| ----: | ----: | ----------: | ------------------------------------------- | --------------------- |
| 65.2% | 0.1ms |           8 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |
| 34.8% | 0.1ms |           2 | `noneOf(Class)`                             | `java.util.EnumSet`   |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

|     % |   Time | Contentions | Callee                                   | Location                          |
| ----: | -----: | ----------: | ---------------------------------------- | --------------------------------- |
| 82.0% |  0.1ms |           6 | `walk(Path)`                             | `java.nio.file.FileTreeWalker`    |
| 13.5% | 19.2µs |           1 | `visitFile(Object, BasicFileAttributes)` | `org.renaissance.core.DirUtils$1` |
|  4.5% |  6.5µs |           1 | `<init>(Collection, int)`                | `java.nio.file.FileTreeWalker`    |

##### `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`)

|     % |  Time | Contentions | Callee                     | Location                                 |
| ----: | ----: | ----------: | -------------------------- | ---------------------------------------- |
| 77.0% | 0.1ms |           4 | `newDirectoryStream(Path)` | `java.nio.file.Files`                    |
|  8.4% | 9.8µs |           1 | `<clinit>()`               | `java.nio.file.FileTreeWalker$EventType` |

##### `walk(Path)` (`java.nio.file.FileTreeWalker`)

|      % |  Time | Contentions | Callee                          | Location                       |
| -----: | ----: | ----------: | ------------------------------- | ------------------------------ |
| 100.0% | 0.1ms |           6 | `visit(Path, boolean, boolean)` | `java.nio.file.FileTreeWalker` |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame.

|     % |   Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----: | -----: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 44.8% |  0.8ms |           2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
| 22.7% |  0.4ms |           2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                   |
| 20.8% |  0.4ms |           1 | `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String)` (`java.lang.ClassLoader`) ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  4.2% |  0.1ms |           3 | `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`) ← `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`) ← `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                           |
|  2.7% |  0.1ms |           1 | `getDeclaredMethods0(boolean)` (`java.lang.Class`) ← `privateGetDeclaredMethods(boolean)` ← `getMethodsRecursive(String, Class[], boolean)` ← `getMethod0(String, Class[])` ← `getMethod(String, Class[])` ← `getEnumConstantsShared()` ← `getEnumConstantsShared(Class)` (`java.lang.System$2`) ← `getUniverse(Class)` (`java.util.EnumSet`) ← `noneOf(Class)` ← `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`) ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                         |
|  1.3% | 24.5µs |           1 | `$values()` (`java.nio.file.FileVisitOption`) ← `<clinit>()` ← `ensureClassInitialized0(Class)` (`jdk.internal.misc.Unsafe`) ← `ensureClassInitialized(Class)` ← `ensureClassInitialized(Class)` (`jdk.internal.reflect.MethodHandleAccessorFactory`) ← `newMethodAccessor(Method, boolean)` ← `newMethodAccessor(Method, boolean)` (`jdk.internal.reflect.ReflectionFactory`) ← `acquireMethodAccessor()` (`java.lang.reflect.Method`) ← `invoke(Object, Object[])` ← `getEnumConstantsShared()` (`java.lang.Class`) ← `getEnumConstantsShared(Class)` (`java.lang.System$2`) ← `getUniverse(Class)` (`java.util.EnumSet`) ← `noneOf(Class)` ← `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`) ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                           |
|  1.0% | 19.2µs |           1 | `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String)` (`java.lang.ClassLoader`) ← `visitFile(Path, BasicFileAttributes)` (`org.renaissance.core.DirUtils$1`) ← `visitFile(Object, BasicFileAttributes)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                   |
|  0.9% | 17.0µs |           1 | `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.6% | 11.9µs |           1 | `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.5% |  9.8µs |           1 | `$values()` (`java.nio.file.FileTreeWalker$EventType`) ← `<clinit>()` ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.3% |  6.5µs |           1 | `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`) ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

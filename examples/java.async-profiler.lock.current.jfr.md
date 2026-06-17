# Lock contention profile

Blocked 1.6ms over 10 samples (159.3µs per sample).

| Category |      % |  Time | Samples |
| -------- | -----: | ----: | ------: |
| ours     | 100.0% | 1.6ms |      10 |

## Hottest functions

### Self time

Functions ranked by time blocked directly in the function body, excluding callees.

|     % |  Time | Samples | Function                                         | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------ | ------------------------------------------------- |
| 77.4% | 1.2ms |       4 | `loadClass(String, boolean)`                     | java.lang.ClassLoader                             |
| 15.7% | 0.3ms |       2 | `loadClassOrNull(String, boolean)`               | jdk.internal.loader.BuiltinClassLoader            |
|  3.8% | 0.1ms |       1 | `<init>(boolean)`                                | java.util.concurrent.locks.ReentrantReadWriteLock |
|  1.4% |   0ms |       1 | `getDeclaredMethods0(boolean)`                   | java.lang.Class                                   |
|  1.4% |   0ms |       1 | `<init>(Collection, int)`                        | java.nio.file.FileTreeWalker                      |
|  0.4% |   0ms |       1 | `preVisitDirectory(Object, BasicFileAttributes)` | java.nio.file.SimpleFileVisitor                   |

#### Lines

Lines ranked by contribution to each function's self time.

##### `loadClass(String, boolean)` (java.lang.ClassLoader)

|      % |  Time | Samples | Location                  |
| -----: | ----: | ------: | ------------------------- |
| 100.0% | 1.2ms |       4 | java.lang.ClassLoader:573 |

##### `loadClassOrNull(String, boolean)` (jdk.internal.loader.BuiltinClassLoader)

|      % |  Time | Samples | Location                                   |
| -----: | ----: | ------: | ------------------------------------------ |
| 100.0% | 0.3ms |       2 | jdk.internal.loader.BuiltinClassLoader:651 |

##### `<init>(boolean)` (java.util.concurrent.locks.ReentrantReadWriteLock)

|      % |  Time | Samples | Location                                              |
| -----: | ----: | ------: | ----------------------------------------------------- |
| 100.0% | 0.1ms |       1 | java.util.concurrent.locks.ReentrantReadWriteLock:241 |

##### `<init>(Collection, int)` (java.nio.file.FileTreeWalker)

|      % | Time | Samples | Location                         |
| -----: | ---: | ------: | -------------------------------- |
| 100.0% |  0ms |       1 | java.nio.file.FileTreeWalker:192 |

##### `preVisitDirectory(Object, BasicFileAttributes)` (java.nio.file.SimpleFileVisitor)

|      % | Time | Samples | Location                           |
| -----: | ---: | ------: | ---------------------------------- |
| 100.0% |  0ms |       1 | java.nio.file.SimpleFileVisitor:62 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `loadClass(String, boolean)` (java.lang.ClassLoader)

|      % |  Time | Samples | Caller              | Location              |
| -----: | ----: | ------: | ------------------- | --------------------- |
| 100.0% | 1.2ms |       4 | `loadClass(String)` | java.lang.ClassLoader |

##### `loadClassOrNull(String, boolean)` (jdk.internal.loader.BuiltinClassLoader)

|      % |  Time | Samples | Caller                       | Location                               |
| -----: | ----: | ------: | ---------------------------- | -------------------------------------- |
| 100.0% | 0.3ms |       2 | `loadClass(String, boolean)` | jdk.internal.loader.BuiltinClassLoader |

##### `<init>(boolean)` (java.util.concurrent.locks.ReentrantReadWriteLock)

|      % |  Time | Samples | Caller                                           | Location                       |
| -----: | ----: | ------: | ------------------------------------------------ | ------------------------------ |
| 100.0% | 0.1ms |       1 | `<init>(UnixPath, long, DirectoryStream$Filter)` | sun.nio.fs.UnixDirectoryStream |

##### `getDeclaredMethods0(boolean)` (java.lang.Class)

|      % | Time | Samples | Caller                               | Location        |
| -----: | ---: | ------: | ------------------------------------ | --------------- |
| 100.0% |  0ms |       1 | `privateGetDeclaredMethods(boolean)` | java.lang.Class |

##### `<init>(Collection, int)` (java.nio.file.FileTreeWalker)

|      % | Time | Samples | Caller                                      | Location            |
| -----: | ---: | ------: | ------------------------------------------- | ------------------- |
| 100.0% |  0ms |       1 | `walkFileTree(Path, Set, int, FileVisitor)` | java.nio.file.Files |

##### `preVisitDirectory(Object, BasicFileAttributes)` (java.nio.file.SimpleFileVisitor)

|      % | Time | Samples | Caller                                      | Location            |
| -----: | ---: | ------: | ------------------------------------------- | ------------------- |
| 100.0% |  0ms |       1 | `walkFileTree(Path, Set, int, FileVisitor)` | java.nio.file.Files |

### Total time

Functions ranked by total time blocked in the function and all its callees.

|     % |  Time | Samples | Function                                             | Location                                                 |
| ----: | ----: | ------: | ---------------------------------------------------- | -------------------------------------------------------- |
| 93.1% | 1.5ms |       6 | `loadClass(String)`                                  | java.lang.ClassLoader                                    |
| 77.4% | 1.2ms |       4 | `loadClass(String, boolean)`                         | java.lang.ClassLoader                                    |
| 77.4% | 1.2ms |       4 | `average(List)`                                      | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| 77.4% | 1.2ms |       4 | `computeClusterAverages()`                           | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| 77.4% | 1.2ms |       4 | `computeDirectly()`                                  | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| 77.4% | 1.2ms |       4 | `computeDirectly()`                                  | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| 77.4% | 1.2ms |       4 | `compute()`                                          | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask     |
| 77.4% | 1.2ms |       4 | `exec()`                                             | java.util.concurrent.RecursiveTask                       |
| 77.4% | 1.2ms |       4 | `doExec()`                                           | java.util.concurrent.ForkJoinTask                        |
| 77.4% | 1.2ms |       4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue              |
| 77.4% | 1.2ms |       4 | `scan(ForkJoinPool$WorkQueue, int, int)`             | java.util.concurrent.ForkJoinPool                        |
| 77.4% | 1.2ms |       4 | `runWorker(ForkJoinPool$WorkQueue)`                  | java.util.concurrent.ForkJoinPool                        |
| 77.4% | 1.2ms |       4 | `run()`                                              | java.util.concurrent.ForkJoinWorkerThread                |
| 33.5% | 0.5ms |       2 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | java.util.concurrent.ForkJoinPool$WorkQueue              |
| 33.5% | 0.5ms |       2 | `awaitDone(int, long)`                               | java.util.concurrent.ForkJoinTask                        |
| 33.5% | 0.5ms |       2 | `join()`                                             | java.util.concurrent.ForkJoinTask                        |
| 22.6% | 0.4ms |       6 | `deleteRecursively(Path, boolean)`                   | org.renaissance.core.DirUtils                            |
| 22.6% | 0.4ms |       6 | `deleteRecursively(Path)`                            | org.renaissance.core.DirUtils                            |
| 22.6% | 0.4ms |       6 | `lambda$createScratchDirectory$1(Path)`              | org.renaissance.core.DirUtils                            |
| 22.6% | 0.4ms |       6 | `run()`                                              | org.renaissance.core.DirUtils$$Lambda.0x000000f001003a68 |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `loadClass(String)` (java.lang.ClassLoader)

|     % |  Time | Samples | Callee                       | Location                                        |
| ----: | ----: | ------: | ---------------------------- | ----------------------------------------------- |
| 83.1% | 1.2ms |       4 | `loadClass(String, boolean)` | java.lang.ClassLoader                           |
| 16.9% | 0.3ms |       2 | `loadClass(String, boolean)` | jdk.internal.loader.ClassLoaders$AppClassLoader |

##### `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Time | Samples | Callee              | Location              |
| -----: | ----: | ------: | ------------------- | --------------------- |
| 100.0% | 1.2ms |       4 | `loadClass(String)` | java.lang.ClassLoader |

##### `computeClusterAverages()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Time | Samples | Callee          | Location                                             |
| -----: | ----: | ------: | --------------- | ---------------------------------------------------- |
| 100.0% | 1.2ms |       4 | `average(List)` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Time | Samples | Callee                     | Location                                             |
| -----: | ----: | ------: | -------------------------- | ---------------------------------------------------- |
| 100.0% | 1.2ms |       4 | `computeClusterAverages()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `computeDirectly()` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask)

|      % |  Time | Samples | Callee              | Location                                             |
| -----: | ----: | ------: | ------------------- | ---------------------------------------------------- |
| 100.0% | 1.2ms |       4 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|      % |  Time | Samples | Callee              | Location                                             |
| -----: | ----: | ------: | ------------------- | ---------------------------------------------------- |
| 100.0% | 1.2ms |       4 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |
|  43.4% | 0.5ms |       2 | `join()`            | java.util.concurrent.ForkJoinTask                    |

##### `exec()` (java.util.concurrent.RecursiveTask)

|      % |  Time | Samples | Callee      | Location                                             |
| -----: | ----: | ------: | ----------- | ---------------------------------------------------- |
| 100.0% | 1.2ms |       4 | `compute()` | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask |

##### `doExec()` (java.util.concurrent.ForkJoinTask)

|      % |  Time | Samples | Callee   | Location                           |
| -----: | ----: | ------: | -------- | ---------------------------------- |
| 100.0% | 1.2ms |       4 | `exec()` | java.util.concurrent.RecursiveTask |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % |  Time | Samples | Callee     | Location                          |
| -----: | ----: | ------: | ---------- | --------------------------------- |
| 100.0% | 1.2ms |       4 | `doExec()` | java.util.concurrent.ForkJoinTask |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool)

|      % |  Time | Samples | Callee                                               | Location                                    |
| -----: | ----: | ------: | ---------------------------------------------------- | ------------------------------------------- |
| 100.0% | 1.2ms |       4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool$WorkQueue |

##### `runWorker(ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool)

|      % |  Time | Samples | Callee                                   | Location                          |
| -----: | ----: | ------: | ---------------------------------------- | --------------------------------- |
| 100.0% | 1.2ms |       4 | `scan(ForkJoinPool$WorkQueue, int, int)` | java.util.concurrent.ForkJoinPool |

##### `run()` (java.util.concurrent.ForkJoinWorkerThread)

|      % |  Time | Samples | Callee                              | Location                          |
| -----: | ----: | ------: | ----------------------------------- | --------------------------------- |
| 100.0% | 1.2ms |       4 | `runWorker(ForkJoinPool$WorkQueue)` | java.util.concurrent.ForkJoinPool |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue)

|      % |  Time | Samples | Callee     | Location                          |
| -----: | ----: | ------: | ---------- | --------------------------------- |
| 100.0% | 0.5ms |       2 | `doExec()` | java.util.concurrent.ForkJoinTask |

##### `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask)

|      % |  Time | Samples | Callee                                    | Location                                    |
| -----: | ----: | ------: | ----------------------------------------- | ------------------------------------------- |
| 100.0% | 0.5ms |       2 | `tryRemoveAndExec(ForkJoinTask, boolean)` | java.util.concurrent.ForkJoinPool$WorkQueue |

##### `join()` (java.util.concurrent.ForkJoinTask)

|      % |  Time | Samples | Callee                 | Location                          |
| -----: | ----: | ------: | ---------------------- | --------------------------------- |
| 100.0% | 0.5ms |       2 | `awaitDone(int, long)` | java.util.concurrent.ForkJoinTask |

##### `deleteRecursively(Path, boolean)` (org.renaissance.core.DirUtils)

|     % |  Time | Samples | Callee                            | Location              |
| ----: | ----: | ------: | --------------------------------- | --------------------- |
| 61.7% | 0.2ms |       1 | `loadClass(String)`               | java.lang.ClassLoader |
| 38.3% | 0.1ms |       5 | `walkFileTree(Path, FileVisitor)` | java.nio.file.Files   |

##### `deleteRecursively(Path)` (org.renaissance.core.DirUtils)

|      % |  Time | Samples | Callee                             | Location                      |
| -----: | ----: | ------: | ---------------------------------- | ----------------------------- |
| 100.0% | 0.4ms |       6 | `deleteRecursively(Path, boolean)` | org.renaissance.core.DirUtils |

##### `lambda$createScratchDirectory$1(Path)` (org.renaissance.core.DirUtils)

|      % |  Time | Samples | Callee                    | Location                      |
| -----: | ----: | ------: | ------------------------- | ----------------------------- |
| 100.0% | 0.4ms |       6 | `deleteRecursively(Path)` | org.renaissance.core.DirUtils |

##### `run()` (org.renaissance.core.DirUtils$$Lambda.0x000000f001003a68)

|      % |  Time | Samples | Callee                                  | Location                      |
| -----: | ----: | ------: | --------------------------------------- | ----------------------------- |
| 100.0% | 0.4ms |       6 | `lambda$createScratchDirectory$1(Path)` | org.renaissance.core.DirUtils |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame.

|     % |  Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 43.8% | 0.7ms |       2 | `loadClass(String, boolean)` (java.lang.ClassLoader) ← `loadClass(String)` ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread)                                                                                                                                                                                                                                                                                                                                         |
| 33.5% | 0.5ms |       2 | `loadClass(String, boolean)` (java.lang.ClassLoader) ← `loadClass(String)` ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `awaitDone(int, long)` (java.util.concurrent.ForkJoinTask) ← `join()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `exec()` (java.util.concurrent.RecursiveTask) ← `doExec()` (java.util.concurrent.ForkJoinTask) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (java.util.concurrent.ForkJoinPool$WorkQueue) ← `scan(ForkJoinPool$WorkQueue, int, int)` (java.util.concurrent.ForkJoinPool) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (java.util.concurrent.ForkJoinWorkerThread) |
| 14.0% | 0.2ms |       1 | `loadClassOrNull(String, boolean)` (jdk.internal.loader.BuiltinClassLoader) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (jdk.internal.loader.ClassLoaders$AppClassLoader) ← `loadClass(String)` (java.lang.ClassLoader) ← `deleteRecursively(Path, boolean)` (org.renaissance.core.DirUtils) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (org.renaissance.core.DirUtils$$Lambda.0x000000f001003a68) ← `runWith(Object, Runnable)` (java.lang.Thread) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  3.8% | 0.1ms |       1 | `<init>(boolean)` (java.util.concurrent.locks.ReentrantReadWriteLock) ← `<init>(UnixPath, long, DirectoryStream$Filter)` (sun.nio.fs.UnixDirectoryStream) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (sun.nio.fs.UnixFileSystemProvider) ← `newDirectoryStream(Path)` (java.nio.file.Files) ← `visit(Path, boolean, boolean)` (java.nio.file.FileTreeWalker) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (java.nio.file.Files) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (org.renaissance.core.DirUtils) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (org.renaissance.core.DirUtils$$Lambda.0x000000f001003a68) ← `runWith(Object, Runnable)` (java.lang.Thread) ← `run()`                                                                                                                                                                                                                                                   |
|  1.8% |   0ms |       1 | `loadClassOrNull(String, boolean)` (jdk.internal.loader.BuiltinClassLoader) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (jdk.internal.loader.ClassLoaders$AppClassLoader) ← `loadClass(String)` (java.lang.ClassLoader) ← `visitFile(Path, BasicFileAttributes)` (org.renaissance.core.DirUtils$1) ← `visitFile(Object, BasicFileAttributes)` ← `walkFileTree(Path, Set, int, FileVisitor)` (java.nio.file.Files) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (org.renaissance.core.DirUtils) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (org.renaissance.core.DirUtils$$Lambda.0x000000f001003a68) ← `runWith(Object, Runnable)` (java.lang.Thread) ← `run()`                                                                                                                                                                                                                                                                         |
|  1.4% |   0ms |       1 | `getDeclaredMethods0(boolean)` (java.lang.Class) ← `privateGetDeclaredMethods(boolean)` ← `getMethodsRecursive(String, Class[], boolean)` ← `getMethod0(String, Class[])` ← `getMethod(String, Class[])` ← `getEnumConstantsShared()` ← `getEnumConstantsShared(Class)` (java.lang.System$2) ← `getUniverse(Class)` (java.util.EnumSet) ← `noneOf(Class)` ← `walkFileTree(Path, FileVisitor)` (java.nio.file.Files) ← `deleteRecursively(Path, boolean)` (org.renaissance.core.DirUtils) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (org.renaissance.core.DirUtils$$Lambda.0x000000f001003a68) ← `runWith(Object, Runnable)` (java.lang.Thread) ← `run()`                                                                                                                                                                                                                                                                                                                             |
|  1.4% |   0ms |       1 | `<init>(Collection, int)` (java.nio.file.FileTreeWalker) ← `walkFileTree(Path, Set, int, FileVisitor)` (java.nio.file.Files) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (org.renaissance.core.DirUtils) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (org.renaissance.core.DirUtils$$Lambda.0x000000f001003a68) ← `runWith(Object, Runnable)` (java.lang.Thread) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.4% |   0ms |       1 | `preVisitDirectory(Object, BasicFileAttributes)` (java.nio.file.SimpleFileVisitor) ← `walkFileTree(Path, Set, int, FileVisitor)` (java.nio.file.Files) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (org.renaissance.core.DirUtils) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (org.renaissance.core.DirUtils$$Lambda.0x000000f001003a68) ← `runWith(Object, Runnable)` (java.lang.Thread) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

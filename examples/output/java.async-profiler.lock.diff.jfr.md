# Lock contention profile diff

Blocked 1.6ms → 8.0ms (+6.36ms, +393.5%) over 11 contentions → 9 contentions (146.9µs → 886.1µs per contention).

| Category         |  Change |   Delta |              % |          Time | Contentions |
| ---------------- | ------: | ------: | -------------: | ------------: | ----------: |
| Standard library | +388.0% | +6.27ms | 100.0% → 98.9% | 1.6ms → 7.9ms |      11 → 8 |
| Ours             |     new | +0.09ms |    0.0% → 1.1% |   0ms → 0.1ms |       0 → 1 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

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

Functions with the largest decrease in time blocked directly in the function body, excluding callees.

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

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

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

Functions with the largest decrease in total time blocked in the function and all its callees.

|  Change |   Delta |            % |           Time | Contentions | Function                                           | Location                                                                                                              |
| ------: | ------: | -----------: | -------------: | ----------: | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
|  -46.2% | -0.26ms | 35.1% → 3.8% |  0.6ms → 0.3ms |       7 → 4 | `deleteRecursively(Path, boolean)`                 | `org.renaissance.core.DirUtils`                                                                                       |
|  -46.2% | -0.26ms | 35.1% → 3.8% |  0.6ms → 0.3ms |       7 → 4 | `deleteRecursively(Path)`                          | `org.renaissance.core.DirUtils`                                                                                       |
|  -46.2% | -0.26ms | 35.1% → 3.8% |  0.6ms → 0.3ms |       7 → 4 | `lambda$createScratchDirectory$1(Path)`            | `org.renaissance.core.DirUtils`                                                                                       |
|  -46.2% | -0.26ms | 35.1% → 3.8% |  0.6ms → 0.3ms |       7 → 4 | `run()`                                            | `org.renaissance.core.DirUtils$$Lambda.0x0000000301003a68 → org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68` |
|  -46.2% | -0.26ms | 35.1% → 3.8% |  0.6ms → 0.3ms |       7 → 4 | `runWith(Object, Runnable)`                        | `java.lang.Thread`                                                                                                    |
|  -46.2% | -0.26ms | 35.1% → 3.8% |  0.6ms → 0.3ms |       7 → 4 | `run()`                                            | `java.lang.Thread`                                                                                                    |
|  -43.8% | -0.17ms | 24.4% → 2.8% |  0.4ms → 0.2ms |       2 → 1 | `loadClassOrNull(String, boolean)`                 | `jdk.internal.loader.BuiltinClassLoader`                                                                              |
|  -43.8% | -0.17ms | 24.4% → 2.8% |  0.4ms → 0.2ms |       2 → 1 | `loadClass(String, boolean)`                       | `jdk.internal.loader.BuiltinClassLoader`                                                                              |
|  -43.8% | -0.17ms | 24.4% → 2.8% |  0.4ms → 0.2ms |       2 → 1 | `loadClass(String, boolean)`                       | `jdk.internal.loader.ClassLoaders$AppClassLoader`                                                                     |
|  -58.8% | -0.12ms | 12.6% → 1.1% |  0.2ms → 0.1ms |       6 → 3 | `walkFileTree(Path, FileVisitor)`                  | `java.nio.file.Files`                                                                                                 |
|  -54.8% | -0.10ms | 11.5% → 1.1% |  0.2ms → 0.1ms |       5 → 3 | `walkFileTree(Path, Set, int, FileVisitor)`        | `java.nio.file.Files`                                                                                                 |
|  -62.1% | -0.06ms |  5.9% → 0.5% | 0.1ms → 36.5µs |       3 → 2 | `visit(Path, boolean, boolean)`                    | `java.nio.file.FileTreeWalker`                                                                                        |
|  -62.1% | -0.06ms |  5.9% → 0.5% | 0.1ms → 36.5µs |       3 → 2 | `walk(Path)`                                       | `java.nio.file.FileTreeWalker`                                                                                        |
|  -49.7% | -0.04ms |  4.5% → 0.5% | 0.1ms → 36.5µs |           2 | `<init>(boolean)`                                  | `java.util.concurrent.locks.ReentrantReadWriteLock`                                                                   |
|  -49.7% | -0.04ms |  4.5% → 0.5% | 0.1ms → 36.5µs |           2 | `<init>(UnixPath, long, DirectoryStream$Filter)`   | `sun.nio.fs.UnixDirectoryStream`                                                                                      |
|  -49.7% | -0.04ms |  4.5% → 0.5% | 0.1ms → 36.5µs |           2 | `newDirectoryStream(Path, DirectoryStream$Filter)` | `sun.nio.fs.UnixFileSystemProvider`                                                                                   |
|  -49.7% | -0.04ms |  4.5% → 0.5% | 0.1ms → 36.5µs |           2 | `newDirectoryStream(Path)`                         | `java.nio.file.Files`                                                                                                 |
| removed | -0.03ms |  1.9% → 0.0% |   30.3µs → 0ms |       1 → 0 | `visitFile(Path, BasicFileAttributes)`             | `org.renaissance.core.DirUtils$1`                                                                                     |
| removed | -0.03ms |  1.9% → 0.0% |   30.3µs → 0ms |       1 → 0 | `visitFile(Object, BasicFileAttributes)`           | `org.renaissance.core.DirUtils$1`                                                                                     |
| removed | -0.02ms |  1.5% → 0.0% |   23.7µs → 0ms |       1 → 0 | `iterator(DirectoryStream)`                        | `sun.nio.fs.UnixDirectoryStream`                                                                                      |

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

|  Change |   Delta |            % |          Time | Contentions | Function                                 | Location                                                                                                              |
| ------: | ------: | -----------: | ------------: | ----------: | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
|  -46.2% | -0.26ms | 35.1% → 3.8% | 0.6ms → 0.3ms |       7 → 4 | `deleteRecursively(Path, boolean)`       | `org.renaissance.core.DirUtils`                                                                                       |
|  -46.2% | -0.26ms | 35.1% → 3.8% | 0.6ms → 0.3ms |       7 → 4 | `deleteRecursively(Path)`                | `org.renaissance.core.DirUtils`                                                                                       |
|  -46.2% | -0.26ms | 35.1% → 3.8% | 0.6ms → 0.3ms |       7 → 4 | `lambda$createScratchDirectory$1(Path)`  | `org.renaissance.core.DirUtils`                                                                                       |
|  -46.2% | -0.26ms | 35.1% → 3.8% | 0.6ms → 0.3ms |       7 → 4 | `run()`                                  | `org.renaissance.core.DirUtils$$Lambda.0x0000000301003a68 → org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68` |
| removed | -0.03ms |  1.9% → 0.0% |  30.3µs → 0ms |       1 → 0 | `visitFile(Path, BasicFileAttributes)`   | `org.renaissance.core.DirUtils$1`                                                                                     |
| removed | -0.03ms |  1.9% → 0.0% |  30.3µs → 0ms |       1 → 0 | `visitFile(Object, BasicFileAttributes)` | `org.renaissance.core.DirUtils$1`                                                                                     |

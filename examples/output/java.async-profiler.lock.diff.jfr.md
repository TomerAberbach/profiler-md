# Lock contention profile diff

Blocked 2.2ms → 3.6ms (+1.46ms, +67.2%) over 12 contentions (181.3µs → 303.1µs per contention).

| Category         | Change |   Delta |             % |           Time | Contentions |
| ---------------- | -----: | ------: | ------------: | -------------: | ----------: |
| Standard library | +69.3% | +1.49ms | 98.5% → 99.8% |  2.1ms → 3.6ms |          11 |
| Ours             | -74.8% | -0.02ms |   1.5% → 0.2% | 32.5µs → 8.2µs |           1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 2.0ms → 3.3ms (91.1% → 92.0%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 2.0ms → 3.3ms (91.1% → 92.0%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       └── 2.0ms → 3.3ms (91.1% → 92.0%) scan(ForkJoinPool$WorkQueue, int, int)
│           └── 2.0ms → 3.3ms (91.1% → 92.0%) topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool$WorkQueue
│               └── 2.0ms → 3.3ms (91.1% → 92.0%) doExec() at java.util.concurrent.ForkJoinTask
│                   └── … 2.0ms → 3.3ms (91.1% → 92.0%) exec() at java.util.concurrent.RecursiveTask
│                       └── 2.0ms → 3.3ms (91.1% → 92.0%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│                           └── 2.0ms → 3.3ms (91.1% → 92.0%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│                               └── … 2.0ms → 3.3ms (91.1% → 92.0%) computeClusterAverages() at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│                                   └── 2.0ms → 3.3ms (91.1% → 92.0%) average(List)
│                                       └── 2.0ms → 3.3ms (91.1% → 91.8%) loadClass(String) at java.lang.ClassLoader
│                                           └── 2.0ms → 3.3ms (91.1% → 91.8%) loadClass(String, boolean)
└── 0.2ms → 0.3ms (8.9% → 8.0%) run() at java.lang.Thread
    └── 0.2ms → 0.3ms (8.9% → 8.0%) runWith(Object, Runnable)
        └── 0.2ms → 0.3ms (8.9% → 8.0%) run() at org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68
            └── 0.2ms → 0.3ms (8.9% → 8.0%) lambda$createScratchDirectory$1(Path) at org.renaissance.core.DirUtils
                └── 0.2ms → 0.3ms (8.9% → 8.0%) deleteRecursively(Path)
                    └── 0.2ms → 0.3ms (8.9% → 8.0%, self 1.5% → 0.0%) deleteRecursively(Path, boolean)
                        ├── 0.2ms → 0.1ms (7.5% → 2.2%) walkFileTree(Path, FileVisitor) at java.nio.file.Files
                        │   ├── 0.2ms → 0.1ms (7.1% → 1.8%, self 0.5% → 0.0%) walkFileTree(Path, Set, int, FileVisitor)
                        │   │   ├── 0.1ms (6.3% → 1.7%) walk(Path) at java.nio.file.FileTreeWalker
                        │   │   │   └── 0.1ms (6.3% → 1.7%) visit(Path, boolean, boolean)
                        │   │   │       ├── 0.1ms → 49.3µs (6.3% → 1.4%) newDirectoryStream(Path) at java.nio.file.Files
                        │   │   │       │   └── 0.1ms → 49.3µs (6.3% → 1.4%) newDirectoryStream(Path, DirectoryStream$Filter) at sun.nio.fs.UnixFileSystemProvider
                        │   │   │       │       └── 0.1ms → 49.3µs (6.3% → 1.4%, self 2.0% → 0.0%) <init>(UnixPath, long, DirectoryStream$Filter) at sun.nio.fs.UnixDirectoryStream
                        │   │   │       │           └── 0.1ms → 49.3µs (4.3% → 1.4%) <init>(boolean) at java.util.concurrent.locks.ReentrantReadWriteLock
                        │   │   │       └── 0ms → 11.8µs (0.0% → 0.3%) <init>(Path, Object, DirectoryStream) at java.nio.file.FileTreeWalker$DirectoryNode
                        │   │   │           └── 0ms → 11.8µs (0.0% → 0.3%) iterator() at sun.nio.fs.UnixDirectoryStream
                        │   │   │               └── 0ms → 11.8µs (0.0% → 0.3%) iterator(DirectoryStream)
                        │   │   │                   └── 0ms → 6.6µs (0.0% → 0.2%) <clinit>() at sun.nio.fs.UnixDirectoryStream$UnixDirectoryIterator
                        │   │   ├── 6.0µs → 0.3µs (0.3% → <0.1%) <init>(Collection, int) at java.nio.file.FileTreeWalker
                        │   │   └── 0ms → 5.0µs (0.0% → 0.1%) <clinit>() at java.nio.file.Files$3
                        │   └── … 7.7µs → 14.4µs (0.4%) getMethod0(String, Class[]) at java.lang.Class
                        │       └── 7.7µs → 14.4µs (0.4%) getMethodsRecursive(String, Class[], boolean)
                        │           └── 7.7µs → 14.4µs (0.4%) privateGetDeclaredMethods(boolean)
                        │               └── 7.7µs → 14.4µs (0.4%) getDeclaredMethods0(boolean)
                        └── 0ms → 0.2ms (0.0% → 5.8%) loadClass(String) at java.lang.ClassLoader
                            └── 0ms → 0.2ms (0.0% → 5.8%) loadClass(String, boolean) at jdk.internal.loader.ClassLoaders$AppClassLoader
                                └── 0ms → 0.2ms (0.0% → 5.8%) loadClass(String, boolean) at jdk.internal.loader.BuiltinClassLoader
                                    └── 0ms → 0.2ms (0.0% → 5.8%) loadClassOrNull(String, boolean)
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |   Delta |             % |           Time | Contentions | Function                           | Location                                               |
| -----: | ------: | ------------: | -------------: | ----------: | ---------------------------------- | ------------------------------------------------------ |
| +68.5% | +1.36ms | 91.1% → 91.8% |  2.0ms → 3.3ms |           4 | `loadClass(String, boolean)`       | `java.lang.ClassLoader`                                |
|    new | +0.21ms |   0.0% → 5.8% |    0ms → 0.2ms |       0 → 1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader`               |
|    new | +0.01ms |   0.0% → 0.2% |    0ms → 8.2µs |       0 → 1 | `average(List)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +88.0% | +0.01ms |          0.4% | 7.7µs → 14.4µs |           1 | `getDeclaredMethods0(boolean)`     | `java.lang.Class`                                      |
|    new | +0.01ms |   0.0% → 0.2% |    0ms → 6.6µs |       0 → 1 | `<clinit>()`                       | `sun.nio.fs.UnixDirectoryStream$UnixDirectoryIterator` |
|    new | +0.01ms |   0.0% → 0.1% |    0ms → 5.2µs |       0 → 1 | `iterator(DirectoryStream)`        | `sun.nio.fs.UnixDirectoryStream`                       |
|    new | +4.96µs |   0.0% → 0.1% |    0ms → 5.0µs |       0 → 1 | `<clinit>()`                       | `java.nio.file.Files$3`                                |

##### Standard library

| Change |   Delta |             % |           Time | Contentions | Function                           | Location                                               |
| -----: | ------: | ------------: | -------------: | ----------: | ---------------------------------- | ------------------------------------------------------ |
| +68.5% | +1.36ms | 91.1% → 91.8% |  2.0ms → 3.3ms |           4 | `loadClass(String, boolean)`       | `java.lang.ClassLoader`                                |
|    new | +0.21ms |   0.0% → 5.8% |    0ms → 0.2ms |       0 → 1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader`               |
| +88.0% | +0.01ms |          0.4% | 7.7µs → 14.4µs |           1 | `getDeclaredMethods0(boolean)`     | `java.lang.Class`                                      |
|    new | +0.01ms |   0.0% → 0.2% |    0ms → 6.6µs |       0 → 1 | `<clinit>()`                       | `sun.nio.fs.UnixDirectoryStream$UnixDirectoryIterator` |
|    new | +0.01ms |   0.0% → 0.1% |    0ms → 5.2µs |       0 → 1 | `iterator(DirectoryStream)`        | `sun.nio.fs.UnixDirectoryStream`                       |
|    new | +4.96µs |   0.0% → 0.1% |    0ms → 5.0µs |       0 → 1 | `<clinit>()`                       | `java.nio.file.Files$3`                                |

##### Ours

| Change |   Delta |           % |        Time | Contentions | Function        | Location                                               |
| -----: | ------: | ----------: | ----------: | ----------: | --------------- | ------------------------------------------------------ |
|    new | +0.01ms | 0.0% → 0.2% | 0ms → 8.2µs |       0 → 1 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

#### Improvements

Functions with the largest decrease in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |   Delta |            % |           Time | Contentions | Function                                         | Location                                            |
| ------: | ------: | -----------: | -------------: | ----------: | ------------------------------------------------ | --------------------------------------------------- |
|  -47.1% | -0.04ms |  4.3% → 1.4% | 0.1ms → 49.3µs |           1 | `<init>(boolean)`                                | `java.util.concurrent.locks.ReentrantReadWriteLock` |
| removed | -0.04ms |  2.0% → 0.0% |   43.8µs → 0ms |       2 → 0 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream`                    |
| removed | -0.03ms |  1.5% → 0.0% |   32.5µs → 0ms |       1 → 0 | `deleteRecursively(Path, boolean)`               | `org.renaissance.core.DirUtils`                     |
| removed | -0.01ms |  0.5% → 0.0% |   11.1µs → 0ms |       1 → 0 | `walkFileTree(Path, Set, int, FileVisitor)`      | `java.nio.file.Files`                               |
|  -95.8% | -0.01ms | 0.3% → <0.1% |  6.0µs → 0.3µs |           1 | `<init>(Collection, int)`                        | `java.nio.file.FileTreeWalker`                      |
| removed | -0.46µs | <0.1% → 0.0% |    0.5µs → 0ms |       1 → 0 | `<clinit>()`                                     | `java.nio.file.FileTreeWalker`                      |

##### Standard library

|  Change |   Delta |            % |           Time | Contentions | Function                                         | Location                                            |
| ------: | ------: | -----------: | -------------: | ----------: | ------------------------------------------------ | --------------------------------------------------- |
|  -47.1% | -0.04ms |  4.3% → 1.4% | 0.1ms → 49.3µs |           1 | `<init>(boolean)`                                | `java.util.concurrent.locks.ReentrantReadWriteLock` |
| removed | -0.04ms |  2.0% → 0.0% |   43.8µs → 0ms |       2 → 0 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream`                    |
| removed | -0.01ms |  0.5% → 0.0% |   11.1µs → 0ms |       1 → 0 | `walkFileTree(Path, Set, int, FileVisitor)`      | `java.nio.file.Files`                               |
|  -95.8% | -0.01ms | 0.3% → <0.1% |  6.0µs → 0.3µs |           1 | `<init>(Collection, int)`                        | `java.nio.file.FileTreeWalker`                      |
| removed | -0.46µs | <0.1% → 0.0% |    0.5µs → 0ms |       1 → 0 | `<clinit>()`                                     | `java.nio.file.FileTreeWalker`                      |

##### Ours

|  Change |   Delta |           % |         Time | Contentions | Function                           | Location                        |
| ------: | ------: | ----------: | -----------: | ----------: | ---------------------------------- | ------------------------------- |
| removed | -0.03ms | 1.5% → 0.0% | 32.5µs → 0ms |       1 → 0 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

| Change |   Delta |      % |          Time | Contentions | Location                    |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------- |
| +68.5% | +1.36ms | 100.0% | 2.0ms → 3.3ms |           4 | `java.lang.ClassLoader:573` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |   Delta |             % |        Time | Contentions | Location                                     |
| -----: | ------: | ------------: | ----------: | ----------: | -------------------------------------------- |
|    new | +0.21ms | 0.0% → 100.0% | 0ms → 0.2ms |       0 → 1 | `jdk.internal.loader.BuiltinClassLoader:651` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |             % |        Time | Contentions | Location                                                   |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 8.2µs |       0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:332` |

##### `<clinit>()` (`sun.nio.fs.UnixDirectoryStream$UnixDirectoryIterator`)

| Change |   Delta |             % |        Time | Contentions | Location                                                   |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 6.6µs |       0 → 1 | `sun.nio.fs.UnixDirectoryStream$UnixDirectoryIterator:132` |

##### `iterator(DirectoryStream)` (`sun.nio.fs.UnixDirectoryStream`)

| Change |   Delta |             % |        Time | Contentions | Location                             |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------ |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 5.2µs |       0 → 1 | `sun.nio.fs.UnixDirectoryStream:119` |

##### `<clinit>()` (`java.nio.file.Files$3`)

| Change |   Delta |             % |        Time | Contentions | Location                     |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------- |
|    new | +4.96µs | 0.0% → 100.0% | 0ms → 5.0µs |       0 → 1 | `java.nio.file.Files$3:2794` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

| Change |   Delta |      % |           Time | Contentions | Location                                                |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------------------------------- |
| -47.1% | -0.04ms | 100.0% | 0.1ms → 49.3µs |           1 | `java.util.concurrent.locks.ReentrantReadWriteLock:241` |

##### `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`)

|  Change |   Delta |             % |         Time | Contentions | Location                            |
| ------: | ------: | ------------: | -----------: | ----------: | ----------------------------------- |
| removed | -0.04ms | 100.0% → 0.0% | 43.8µs → 0ms |       2 → 0 | `sun.nio.fs.UnixDirectoryStream:52` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

|  Change |   Delta |             % |         Time | Contentions | Location                           |
| ------: | ------: | ------------: | -----------: | ----------: | ---------------------------------- |
| removed | -0.03ms | 100.0% → 0.0% | 32.5µs → 0ms |       1 → 0 | `org.renaissance.core.DirUtils:28` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

|  Change |   Delta |             % |         Time | Contentions | Location                   |
| ------: | ------: | ------------: | -----------: | ----------: | -------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 11.1µs → 0ms |       1 → 0 | `java.nio.file.Files:2791` |

##### `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`)

| Change |   Delta |      % |          Time | Contentions | Location                           |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------- |
| -95.8% | -0.01ms | 100.0% | 6.0µs → 0.3µs |           1 | `java.nio.file.FileTreeWalker:192` |

##### `<clinit>()` (`java.nio.file.FileTreeWalker`)

|  Change |   Delta |             % |        Time | Contentions | Location                          |
| ------: | ------: | ------------: | ----------: | ----------: | --------------------------------- |
| removed | -0.46µs | 100.0% → 0.0% | 0.5µs → 0ms |       1 → 0 | `java.nio.file.FileTreeWalker:57` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

| Change |   Delta |      % |          Time | Contentions | Caller              | Location                |
| -----: | ------: | -----: | ------------: | ----------: | ------------------- | ----------------------- |
| +68.5% | +1.36ms | 100.0% | 2.0ms → 3.3ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |   Delta |             % |        Time | Contentions | Caller                       | Location                                 |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------- | ---------------------------------------- |
|    new | +0.21ms | 0.0% → 100.0% | 0ms → 0.2ms |       0 → 1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |             % |        Time | Contentions | Caller                     | Location                                               |
| -----: | ------: | ------------: | ----------: | ----------: | -------------------------- | ------------------------------------------------------ |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 8.2µs |       0 → 1 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `getDeclaredMethods0(boolean)` (`java.lang.Class`)

| Change |   Delta |      % |           Time | Contentions | Caller                               | Location          |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------------ | ----------------- |
| +88.0% | +0.01ms | 100.0% | 7.7µs → 14.4µs |           1 | `privateGetDeclaredMethods(boolean)` | `java.lang.Class` |

##### `<clinit>()` (`sun.nio.fs.UnixDirectoryStream$UnixDirectoryIterator`)

| Change |   Delta |             % |        Time | Contentions | Caller                      | Location                         |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------------- | -------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 6.6µs |       0 → 1 | `iterator(DirectoryStream)` | `sun.nio.fs.UnixDirectoryStream` |

##### `iterator(DirectoryStream)` (`sun.nio.fs.UnixDirectoryStream`)

| Change |   Delta |             % |        Time | Contentions | Caller       | Location                         |
| -----: | ------: | ------------: | ----------: | ----------: | ------------ | -------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 5.2µs |       0 → 1 | `iterator()` | `sun.nio.fs.UnixDirectoryStream` |

##### `<clinit>()` (`java.nio.file.Files$3`)

| Change |   Delta |             % |        Time | Contentions | Caller                                      | Location              |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------- | --------------------- |
|    new | +4.96µs | 0.0% → 100.0% | 0ms → 5.0µs |       0 → 1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

| Change |   Delta |      % |           Time | Contentions | Caller                                           | Location                         |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------------------------ | -------------------------------- |
| -47.1% | -0.04ms | 100.0% | 0.1ms → 49.3µs |           1 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream` |

##### `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`)

|  Change |   Delta |             % |         Time | Contentions | Caller                                             | Location                            |
| ------: | ------: | ------------: | -----------: | ----------: | -------------------------------------------------- | ----------------------------------- |
| removed | -0.04ms | 100.0% → 0.0% | 43.8µs → 0ms |       2 → 0 | `newDirectoryStream(Path, DirectoryStream$Filter)` | `sun.nio.fs.UnixFileSystemProvider` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

|  Change |   Delta |             % |         Time | Contentions | Caller                    | Location                        |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------- | ------------------------------- |
| removed | -0.03ms | 100.0% → 0.0% | 32.5µs → 0ms |       1 → 0 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

|  Change |   Delta |             % |         Time | Contentions | Caller                            | Location              |
| ------: | ------: | ------------: | -----------: | ----------: | --------------------------------- | --------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 11.1µs → 0ms |       1 → 0 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files` |

##### `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`)

| Change |   Delta |      % |          Time | Contentions | Caller                                      | Location              |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------- | --------------------- |
| -95.8% | -0.01ms | 100.0% | 6.0µs → 0.3µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `<clinit>()` (`java.nio.file.FileTreeWalker`)

|  Change |   Delta |             % |        Time | Contentions | Caller                                      | Location              |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------------------------------- | --------------------- |
| removed | -0.46µs | 100.0% → 0.0% | 0.5µs → 0ms |       1 → 0 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

### Total time

#### Regressions

Functions with the largest increase in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |   Delta |             % |          Time | Contentions | Function                                             | Location                                                               |
| -----: | ------: | ------------: | ------------: | ----------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| +79.1% | +1.57ms | 91.1% → 97.6% | 2.0ms → 3.5ms |       4 → 5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                                                |
| +68.9% | +1.36ms | 91.1% → 92.0% | 2.0ms → 3.3ms |       4 → 5 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +68.9% | +1.36ms | 91.1% → 92.0% | 2.0ms → 3.3ms |       4 → 5 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +68.9% | +1.36ms | 91.1% → 92.0% | 2.0ms → 3.3ms |       4 → 5 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +68.9% | +1.36ms | 91.1% → 92.0% | 2.0ms → 3.3ms |       4 → 5 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| +68.9% | +1.36ms | 91.1% → 92.0% | 2.0ms → 3.3ms |       4 → 5 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
| +68.9% | +1.36ms | 91.1% → 92.0% | 2.0ms → 3.3ms |       4 → 5 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
| +68.9% | +1.36ms | 91.1% → 92.0% | 2.0ms → 3.3ms |       4 → 5 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| +68.9% | +1.36ms | 91.1% → 92.0% | 2.0ms → 3.3ms |       4 → 5 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
| +68.9% | +1.36ms | 91.1% → 92.0% | 2.0ms → 3.3ms |       4 → 5 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
| +68.9% | +1.36ms | 91.1% → 92.0% | 2.0ms → 3.3ms |       4 → 5 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
| +68.5% | +1.36ms | 91.1% → 91.8% | 2.0ms → 3.3ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                                                |
|    new | +0.36ms |   0.0% → 9.8% |   0ms → 0.4ms |       0 → 1 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
|    new | +0.36ms |   0.0% → 9.8% |   0ms → 0.4ms |       0 → 1 | `lambda$run$0(int, List, int)`                       | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    new | +0.36ms |   0.0% → 9.8% |   0ms → 0.4ms |       0 → 1 | `call()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |
|    new | +0.36ms |   0.0% → 9.8% |   0ms → 0.4ms |       0 → 1 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|    new | +0.21ms |   0.0% → 5.8% |   0ms → 0.2ms |       0 → 1 | `loadClassOrNull(String, boolean)`                   | `jdk.internal.loader.BuiltinClassLoader`                               |
|    new | +0.21ms |   0.0% → 5.8% |   0ms → 0.2ms |       0 → 1 | `loadClass(String, boolean)`                         | `jdk.internal.loader.BuiltinClassLoader`                               |
|    new | +0.21ms |   0.0% → 5.8% |   0ms → 0.2ms |       0 → 1 | `loadClass(String, boolean)`                         | `jdk.internal.loader.ClassLoaders$AppClassLoader`                      |
| +49.6% | +0.10ms |   8.9% → 8.0% | 0.2ms → 0.3ms |       8 → 7 | `deleteRecursively(Path, boolean)`                   | `org.renaissance.core.DirUtils`                                        |

##### Standard library

| Change |   Delta |             % |           Time | Contentions | Function                                             | Location                                            |
| -----: | ------: | ------------: | -------------: | ----------: | ---------------------------------------------------- | --------------------------------------------------- |
| +79.1% | +1.57ms | 91.1% → 97.6% |  2.0ms → 3.5ms |       4 → 5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                             |
| +68.9% | +1.36ms | 91.1% → 92.0% |  2.0ms → 3.3ms |       4 → 5 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                |
| +68.9% | +1.36ms | 91.1% → 92.0% |  2.0ms → 3.3ms |       4 → 5 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| +68.9% | +1.36ms | 91.1% → 92.0% |  2.0ms → 3.3ms |       4 → 5 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| +68.9% | +1.36ms | 91.1% → 92.0% |  2.0ms → 3.3ms |       4 → 5 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                 |
| +68.9% | +1.36ms | 91.1% → 92.0% |  2.0ms → 3.3ms |       4 → 5 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                 |
| +68.9% | +1.36ms | 91.1% → 92.0% |  2.0ms → 3.3ms |       4 → 5 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`         |
| +68.5% | +1.36ms | 91.1% → 91.8% |  2.0ms → 3.3ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                             |
|    new | +0.36ms |   0.0% → 9.8% |    0ms → 0.4ms |       0 → 1 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                 |
|    new | +0.36ms |   0.0% → 9.8% |    0ms → 0.4ms |       0 → 1 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|    new | +0.21ms |   0.0% → 5.8% |    0ms → 0.2ms |       0 → 1 | `loadClassOrNull(String, boolean)`                   | `jdk.internal.loader.BuiltinClassLoader`            |
|    new | +0.21ms |   0.0% → 5.8% |    0ms → 0.2ms |       0 → 1 | `loadClass(String, boolean)`                         | `jdk.internal.loader.BuiltinClassLoader`            |
|    new | +0.21ms |   0.0% → 5.8% |    0ms → 0.2ms |       0 → 1 | `loadClass(String, boolean)`                         | `jdk.internal.loader.ClassLoaders$AppClassLoader`   |
| +49.6% | +0.10ms |   8.9% → 8.0% |  0.2ms → 0.3ms |       8 → 7 | `runWith(Object, Runnable)`                          | `java.lang.Thread`                                  |
| +49.6% | +0.10ms |   8.9% → 8.0% |  0.2ms → 0.3ms |       8 → 7 | `run()`                                              | `java.lang.Thread`                                  |
|    new | +0.01ms |   0.0% → 0.3% |   0ms → 11.8µs |       0 → 2 | `iterator(DirectoryStream)`                          | `sun.nio.fs.UnixDirectoryStream`                    |
|    new | +0.01ms |   0.0% → 0.3% |   0ms → 11.8µs |       0 → 2 | `iterator()`                                         | `sun.nio.fs.UnixDirectoryStream`                    |
|    new | +0.01ms |   0.0% → 0.3% |   0ms → 11.8µs |       0 → 2 | `<init>(Path, Object, DirectoryStream)`              | `java.nio.file.FileTreeWalker$DirectoryNode`        |
| +88.0% | +0.01ms |          0.4% | 7.7µs → 14.4µs |           1 | `getDeclaredMethods0(boolean)`                       | `java.lang.Class`                                   |
| +88.0% | +0.01ms |          0.4% | 7.7µs → 14.4µs |           1 | `privateGetDeclaredMethods(boolean)`                 | `java.lang.Class`                                   |

##### Ours

| Change |   Delta |             % |          Time | Contentions | Function                                | Location                                                               |
| -----: | ------: | ------------: | ------------: | ----------: | --------------------------------------- | ---------------------------------------------------------------------- |
| +68.9% | +1.36ms | 91.1% → 92.0% | 2.0ms → 3.3ms |       4 → 5 | `average(List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +68.9% | +1.36ms | 91.1% → 92.0% | 2.0ms → 3.3ms |       4 → 5 | `computeClusterAverages()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +68.9% | +1.36ms | 91.1% → 92.0% | 2.0ms → 3.3ms |       4 → 5 | `computeDirectly()`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| +68.9% | +1.36ms | 91.1% → 92.0% | 2.0ms → 3.3ms |       4 → 5 | `compute()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|    new | +0.36ms |   0.0% → 9.8% |   0ms → 0.4ms |       0 → 1 | `lambda$run$0(int, List, int)`          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|    new | +0.36ms |   0.0% → 9.8% |   0ms → 0.4ms |       0 → 1 | `call()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |
| +49.6% | +0.10ms |   8.9% → 8.0% | 0.2ms → 0.3ms |       8 → 7 | `deleteRecursively(Path, boolean)`      | `org.renaissance.core.DirUtils`                                        |
| +49.6% | +0.10ms |   8.9% → 8.0% | 0.2ms → 0.3ms |       8 → 7 | `deleteRecursively(Path)`               | `org.renaissance.core.DirUtils`                                        |
| +49.6% | +0.10ms |   8.9% → 8.0% | 0.2ms → 0.3ms |       8 → 7 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils`                                        |
| +49.6% | +0.10ms |   8.9% → 8.0% | 0.2ms → 0.3ms |       8 → 7 | `run()`                                 | `org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`             |

#### Improvements

Functions with the largest decrease in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

|  Change |   Delta |             % |           Time | Contentions | Function                                           | Location                                            |
| ------: | ------: | ------------: | -------------: | ----------: | -------------------------------------------------- | --------------------------------------------------- |
|  -63.6% | -0.92ms | 66.6% → 14.5% |  1.4ms → 0.5ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)`          | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|  -63.6% | -0.92ms | 66.6% → 14.5% |  1.4ms → 0.5ms |           2 | `awaitDone(int, long)`                             | `java.util.concurrent.ForkJoinTask`                 |
|  -63.6% | -0.92ms | 66.6% → 14.5% |  1.4ms → 0.5ms |           2 | `join()`                                           | `java.util.concurrent.ForkJoinTask`                 |
|  -57.1% | -0.09ms |   7.1% → 1.8% |  0.2ms → 0.1ms |       6 → 5 | `walkFileTree(Path, Set, int, FileVisitor)`        | `java.nio.file.Files`                               |
|  -64.0% | -0.09ms |   6.3% → 1.4% | 0.1ms → 49.3µs |       3 → 1 | `<init>(UnixPath, long, DirectoryStream$Filter)`   | `sun.nio.fs.UnixDirectoryStream`                    |
|  -64.0% | -0.09ms |   6.3% → 1.4% | 0.1ms → 49.3µs |       3 → 1 | `newDirectoryStream(Path, DirectoryStream$Filter)` | `sun.nio.fs.UnixFileSystemProvider`                 |
|  -64.0% | -0.09ms |   6.3% → 1.4% | 0.1ms → 49.3µs |       3 → 1 | `newDirectoryStream(Path)`                         | `java.nio.file.Files`                               |
|  -50.2% | -0.08ms |   7.5% → 2.2% |  0.2ms → 0.1ms |       7 → 6 | `walkFileTree(Path, FileVisitor)`                  | `java.nio.file.Files`                               |
|  -55.4% | -0.08ms |   6.3% → 1.7% |          0.1ms |           3 | `visit(Path, boolean, boolean)`                    | `java.nio.file.FileTreeWalker`                      |
|  -55.4% | -0.08ms |   6.3% → 1.7% |          0.1ms |           3 | `walk(Path)`                                       | `java.nio.file.FileTreeWalker`                      |
|  -47.1% | -0.04ms |   4.3% → 1.4% | 0.1ms → 49.3µs |           1 | `<init>(boolean)`                                  | `java.util.concurrent.locks.ReentrantReadWriteLock` |
|  -95.8% | -0.01ms |  0.3% → <0.1% |  6.0µs → 0.3µs |           1 | `<init>(Collection, int)`                          | `java.nio.file.FileTreeWalker`                      |
| removed | -0.46µs |  <0.1% → 0.0% |    0.5µs → 0ms |       1 → 0 | `<clinit>()`                                       | `java.nio.file.FileTreeWalker`                      |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `loadClass(String)` (`java.lang.ClassLoader`)

| Change |   Delta |              % |          Time | Contentions | Caller                             | Location                                               |
| -----: | ------: | -------------: | ------------: | ----------: | ---------------------------------- | ------------------------------------------------------ |
| +68.5% | +1.36ms | 100.0% → 94.1% | 2.0ms → 3.3ms |           4 | `average(List)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|    new | +0.21ms |    0.0% → 5.9% |   0ms → 0.2ms |       0 → 1 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils`                        |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |      % |          Time | Contentions | Caller                     | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------- | ------------------------------------------------------ |
| +68.9% | +1.36ms | 100.0% | 2.0ms → 3.3ms |       4 → 5 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |      % |          Time | Contentions | Caller              | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | ------------------- | ------------------------------------------------------ |
| +68.9% | +1.36ms | 100.0% | 2.0ms → 3.3ms |       4 → 5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |      % |          Time | Contentions | Caller              | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | ------------------- | ------------------------------------------------------ |
| +68.9% | +1.36ms | 100.0% | 2.0ms → 3.3ms |       4 → 5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +68.9% | +1.36ms | 100.0% | 2.0ms → 3.3ms |       4 → 5 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |   Delta |      % |          Time | Contentions | Caller   | Location                             |
| -----: | ------: | -----: | ------------: | ----------: | -------- | ------------------------------------ |
| +68.9% | +1.36ms | 100.0% | 2.0ms → 3.3ms |       4 → 5 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |   Delta |      % |          Time | Contentions | Caller     | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------- |
| +68.9% | +1.36ms | 100.0% | 2.0ms → 3.3ms |       4 → 5 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |             % |          Time | Contentions | Caller                                               | Location                                      |
| -----: | ------: | ------------: | ------------: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| +68.9% | +1.36ms |        100.0% | 2.0ms → 3.3ms |       4 → 5 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -63.6% | -0.92ms | 73.1% → 15.7% | 1.4ms → 0.5ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|    new | +0.36ms |  0.0% → 10.7% |   0ms → 0.4ms |       0 → 1 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |   Delta |      % |          Time | Contentions | Caller                                   | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------------- | ----------------------------------- |
| +68.9% | +1.36ms | 100.0% | 2.0ms → 3.3ms |       4 → 5 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |   Delta |      % |          Time | Contentions | Caller                              | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------- | ----------------------------------- |
| +68.9% | +1.36ms | 100.0% | 2.0ms → 3.3ms |       4 → 5 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |   Delta |      % |          Time | Contentions | Caller  | Location                                    |
| -----: | ------: | -----: | ------------: | ----------: | ------- | ------------------------------------------- |
| +68.9% | +1.36ms | 100.0% | 2.0ms → 3.3ms |       4 → 5 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

| Change |   Delta |      % |          Time | Contentions | Caller              | Location                |
| -----: | ------: | -----: | ------------: | ----------: | ------------------- | ----------------------- |
| +68.5% | +1.36ms | 100.0% | 2.0ms → 3.3ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |             % |        Time | Contentions | Caller                         | Location                                    |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------ | ------------------------------------------- |
|    new | +0.36ms | 0.0% → 100.0% | 0ms → 0.4ms |       0 → 1 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |   Delta |             % |        Time | Contentions | Caller   | Location                                                               |
| -----: | ------: | ------------: | ----------: | ----------: | -------- | ---------------------------------------------------------------------- |
|    new | +0.36ms | 0.0% → 100.0% | 0ms → 0.4ms |       0 → 1 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`)

| Change |   Delta |             % |        Time | Contentions | Caller   | Location                                            |
| -----: | ------: | ------------: | ----------: | ----------: | -------- | --------------------------------------------------- |
|    new | +0.36ms | 0.0% → 100.0% | 0ms → 0.4ms |       0 → 1 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |   Delta |             % |        Time | Contentions | Caller     | Location                            |
| -----: | ------: | ------------: | ----------: | ----------: | ---------- | ----------------------------------- |
|    new | +0.36ms | 0.0% → 100.0% | 0ms → 0.4ms |       0 → 1 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |   Delta |             % |        Time | Contentions | Caller                       | Location                                 |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------- | ---------------------------------------- |
|    new | +0.21ms | 0.0% → 100.0% | 0ms → 0.2ms |       0 → 1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |   Delta |             % |        Time | Contentions | Caller                       | Location                                          |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------- | ------------------------------------------------- |
|    new | +0.21ms | 0.0% → 100.0% | 0ms → 0.2ms |       0 → 1 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`)

| Change |   Delta |             % |        Time | Contentions | Caller              | Location                |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------- | ----------------------- |
|    new | +0.21ms | 0.0% → 100.0% | 0ms → 0.2ms |       0 → 1 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |          Time | Contentions | Caller                    | Location                        |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------- | ------------------------------- |
| +49.6% | +0.10ms | 100.0% | 0.2ms → 0.3ms |       8 → 7 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change |   Delta |      % |          Time | Contentions | Caller  | Location           |
| -----: | ------: | -----: | ------------: | ----------: | ------- | ------------------ |
| +49.6% | +0.10ms | 100.0% | 0.2ms → 0.3ms |       8 → 7 | `run()` | `java.lang.Thread` |

##### `iterator(DirectoryStream)` (`sun.nio.fs.UnixDirectoryStream`)

| Change |   Delta |             % |         Time | Contentions | Caller       | Location                         |
| -----: | ------: | ------------: | -----------: | ----------: | ------------ | -------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 11.8µs |       0 → 2 | `iterator()` | `sun.nio.fs.UnixDirectoryStream` |

##### `iterator()` (`sun.nio.fs.UnixDirectoryStream`)

| Change |   Delta |             % |         Time | Contentions | Caller                                  | Location                                     |
| -----: | ------: | ------------: | -----------: | ----------: | --------------------------------------- | -------------------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 11.8µs |       0 → 2 | `<init>(Path, Object, DirectoryStream)` | `java.nio.file.FileTreeWalker$DirectoryNode` |

##### `<init>(Path, Object, DirectoryStream)` (`java.nio.file.FileTreeWalker$DirectoryNode`)

| Change |   Delta |             % |         Time | Contentions | Caller                          | Location                       |
| -----: | ------: | ------------: | -----------: | ----------: | ------------------------------- | ------------------------------ |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 11.8µs |       0 → 2 | `visit(Path, boolean, boolean)` | `java.nio.file.FileTreeWalker` |

##### `getDeclaredMethods0(boolean)` (`java.lang.Class`)

| Change |   Delta |      % |           Time | Contentions | Caller                               | Location          |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------------ | ----------------- |
| +88.0% | +0.01ms | 100.0% | 7.7µs → 14.4µs |           1 | `privateGetDeclaredMethods(boolean)` | `java.lang.Class` |

##### `privateGetDeclaredMethods(boolean)` (`java.lang.Class`)

| Change |   Delta |      % |           Time | Contentions | Caller                                          | Location          |
| -----: | ------: | -----: | -------------: | ----------: | ----------------------------------------------- | ----------------- |
| +88.0% | +0.01ms | 100.0% | 7.7µs → 14.4µs |           1 | `getMethodsRecursive(String, Class[], boolean)` | `java.lang.Class` |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |          Time | Contentions | Caller                                  | Location                        |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------------------- | ------------------------------- |
| +49.6% | +0.10ms | 100.0% | 0.2ms → 0.3ms |       8 → 7 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |          Time | Contentions | Caller  | Location                                                   |
| -----: | ------: | -----: | ------------: | ----------: | ------- | ---------------------------------------------------------- |
| +49.6% | +0.10ms | 100.0% | 0.2ms → 0.3ms |       8 → 7 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`)

| Change |   Delta |      % |          Time | Contentions | Caller                      | Location           |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------- | ------------------ |
| +49.6% | +0.10ms | 100.0% | 0.2ms → 0.3ms |       8 → 7 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |   Delta |      % |          Time | Contentions | Caller                 | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------- | ----------------------------------- |
| -63.6% | -0.92ms | 100.0% | 1.4ms → 0.5ms |           2 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |      % |          Time | Contentions | Caller   | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | -------- | ----------------------------------- |
| -63.6% | -0.92ms | 100.0% | 1.4ms → 0.5ms |           2 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |      % |          Time | Contentions | Caller      | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | ----------- | ------------------------------------------------------ |
| -63.6% | -0.92ms | 100.0% | 1.4ms → 0.5ms |           2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

| Change |   Delta |      % |          Time | Contentions | Caller                            | Location              |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------------- | --------------------- |
| -57.1% | -0.09ms | 100.0% | 0.2ms → 0.1ms |       6 → 5 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files` |

##### `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`)

| Change |   Delta |      % |           Time | Contentions | Caller                                             | Location                            |
| -----: | ------: | -----: | -------------: | ----------: | -------------------------------------------------- | ----------------------------------- |
| -64.0% | -0.09ms | 100.0% | 0.1ms → 49.3µs |       3 → 1 | `newDirectoryStream(Path, DirectoryStream$Filter)` | `sun.nio.fs.UnixFileSystemProvider` |

##### `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`)

| Change |   Delta |      % |           Time | Contentions | Caller                     | Location              |
| -----: | ------: | -----: | -------------: | ----------: | -------------------------- | --------------------- |
| -64.0% | -0.09ms | 100.0% | 0.1ms → 49.3µs |       3 → 1 | `newDirectoryStream(Path)` | `java.nio.file.Files` |

##### `newDirectoryStream(Path)` (`java.nio.file.Files`)

| Change |   Delta |      % |           Time | Contentions | Caller                          | Location                       |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------- | ------------------------------ |
| -64.0% | -0.09ms | 100.0% | 0.1ms → 49.3µs |       3 → 1 | `visit(Path, boolean, boolean)` | `java.nio.file.FileTreeWalker` |

##### `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`)

| Change |   Delta |      % |          Time | Contentions | Caller                             | Location                        |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------- | ------------------------------- |
| -50.2% | -0.08ms | 100.0% | 0.2ms → 0.1ms |       7 → 6 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

##### `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`)

| Change |   Delta |      % |  Time | Contentions | Caller       | Location                       |
| -----: | ------: | -----: | ----: | ----------: | ------------ | ------------------------------ |
| -55.4% | -0.08ms | 100.0% | 0.1ms |           3 | `walk(Path)` | `java.nio.file.FileTreeWalker` |

##### `walk(Path)` (`java.nio.file.FileTreeWalker`)

| Change |   Delta |      % |  Time | Contentions | Caller                                      | Location              |
| -----: | ------: | -----: | ----: | ----------: | ------------------------------------------- | --------------------- |
| -55.4% | -0.08ms | 100.0% | 0.1ms |           3 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`)

| Change |   Delta |      % |           Time | Contentions | Caller                                           | Location                         |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------------------------ | -------------------------------- |
| -47.1% | -0.04ms | 100.0% | 0.1ms → 49.3µs |           1 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream` |

##### `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`)

| Change |   Delta |      % |          Time | Contentions | Caller                                      | Location              |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------- | --------------------- |
| -95.8% | -0.01ms | 100.0% | 6.0µs → 0.3µs |           1 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

##### `<clinit>()` (`java.nio.file.FileTreeWalker`)

|  Change |   Delta |             % |        Time | Contentions | Caller                                      | Location              |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------------------------------- | --------------------- |
| removed | -0.46µs | 100.0% → 0.0% | 0.5µs → 0ms |       1 → 0 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `loadClass(String)` (`java.lang.ClassLoader`)

| Change |   Delta |              % |          Time | Contentions | Callee                       | Location                                          |
| -----: | ------: | -------------: | ------------: | ----------: | ---------------------------- | ------------------------------------------------- |
| +68.5% | +1.36ms | 100.0% → 94.1% | 2.0ms → 3.3ms |           4 | `loadClass(String, boolean)` | `java.lang.ClassLoader`                           |
|    new | +0.21ms |    0.0% → 5.9% |   0ms → 0.2ms |       0 → 1 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |              % |          Time | Contentions | Callee              | Location                |
| -----: | ------: | -------------: | ------------: | ----------: | ------------------- | ----------------------- |
| +68.5% | +1.36ms | 100.0% → 99.8% | 2.0ms → 3.3ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |      % |          Time | Contentions | Callee          | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | --------------- | ------------------------------------------------------ |
| +68.9% | +1.36ms | 100.0% | 2.0ms → 3.3ms |       4 → 5 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |      % |          Time | Contentions | Callee                     | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------- | ------------------------------------------------------ |
| +68.9% | +1.36ms | 100.0% | 2.0ms → 3.3ms |       4 → 5 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +68.9% | +1.36ms | 100.0% | 2.0ms → 3.3ms |       4 → 5 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |   Delta |             % |          Time | Contentions | Callee              | Location                                               |
| -----: | ------: | ------------: | ------------: | ----------: | ------------------- | ------------------------------------------------------ |
| +68.9% | +1.36ms |        100.0% | 2.0ms → 3.3ms |       4 → 5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -63.6% | -0.92ms | 73.1% → 15.7% | 1.4ms → 0.5ms |           2 | `join()`            | `java.util.concurrent.ForkJoinTask`                    |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |   Delta |      % |          Time | Contentions | Callee      | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | ----------- | ------------------------------------------------------ |
| +68.9% | +1.36ms | 100.0% | 2.0ms → 3.3ms |       4 → 5 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |            % |          Time | Contentions | Callee   | Location                                            |
| -----: | ------: | -----------: | ------------: | ----------: | -------- | --------------------------------------------------- |
| +68.9% | +1.36ms |       100.0% | 2.0ms → 3.3ms |       4 → 5 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|    new | +0.36ms | 0.0% → 10.7% |   0ms → 0.4ms |       0 → 1 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |   Delta |      % |          Time | Contentions | Callee     | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------- |
| +68.9% | +1.36ms | 100.0% | 2.0ms → 3.3ms |       4 → 5 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |   Delta |      % |          Time | Contentions | Callee                                               | Location                                      |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| +68.9% | +1.36ms | 100.0% | 2.0ms → 3.3ms |       4 → 5 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |   Delta |      % |          Time | Contentions | Callee                                   | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------------- | ----------------------------------- |
| +68.9% | +1.36ms | 100.0% | 2.0ms → 3.3ms |       4 → 5 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |   Delta |      % |          Time | Contentions | Callee                              | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------- | ----------------------------------- |
| +68.9% | +1.36ms | 100.0% | 2.0ms → 3.3ms |       4 → 5 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |             % |        Time | Contentions | Callee     | Location                            |
| -----: | ------: | ------------: | ----------: | ----------: | ---------- | ----------------------------------- |
|    new | +0.36ms | 0.0% → 100.0% | 0ms → 0.4ms |       0 → 1 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |   Delta |             % |        Time | Contentions | Callee     | Location                            |
| -----: | ------: | ------------: | ----------: | ----------: | ---------- | ----------------------------------- |
|    new | +0.36ms | 0.0% → 100.0% | 0ms → 0.4ms |       0 → 1 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`)

| Change |   Delta |             % |        Time | Contentions | Callee                         | Location                                    |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------ | ------------------------------------------- |
|    new | +0.36ms | 0.0% → 100.0% | 0ms → 0.4ms |       0 → 1 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |   Delta |             % |        Time | Contentions | Callee   | Location                                                               |
| -----: | ------: | ------------: | ----------: | ----------: | -------- | ---------------------------------------------------------------------- |
|    new | +0.36ms | 0.0% → 100.0% | 0ms → 0.4ms |       0 → 1 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |   Delta |             % |        Time | Contentions | Callee                             | Location                                 |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------------- | ---------------------------------------- |
|    new | +0.21ms | 0.0% → 100.0% | 0ms → 0.2ms |       0 → 1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`)

| Change |   Delta |             % |        Time | Contentions | Callee                       | Location                                 |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------- | ---------------------------------------- |
|    new | +0.21ms | 0.0% → 100.0% | 0ms → 0.2ms |       0 → 1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |             % |          Time | Contentions | Callee                            | Location                |
| -----: | ------: | ------------: | ------------: | ----------: | --------------------------------- | ----------------------- |
|    new | +0.21ms |  0.0% → 72.3% |   0ms → 0.2ms |       0 → 1 | `loadClass(String)`               | `java.lang.ClassLoader` |
| -50.2% | -0.08ms | 83.3% → 27.7% | 0.2ms → 0.1ms |       7 → 6 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files`   |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change |   Delta |      % |          Time | Contentions | Callee  | Location                                                   |
| -----: | ------: | -----: | ------------: | ----------: | ------- | ---------------------------------------------------------- |
| +49.6% | +0.10ms | 100.0% | 0.2ms → 0.3ms |       8 → 7 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68` |

##### `run()` (`java.lang.Thread`)

| Change |   Delta |      % |          Time | Contentions | Callee                      | Location           |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------- | ------------------ |
| +49.6% | +0.10ms | 100.0% | 0.2ms → 0.3ms |       8 → 7 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `iterator(DirectoryStream)` (`sun.nio.fs.UnixDirectoryStream`)

| Change |   Delta |            % |        Time | Contentions | Callee       | Location                                               |
| -----: | ------: | -----------: | ----------: | ----------: | ------------ | ------------------------------------------------------ |
|    new | +0.01ms | 0.0% → 55.6% | 0ms → 6.6µs |       0 → 1 | `<clinit>()` | `sun.nio.fs.UnixDirectoryStream$UnixDirectoryIterator` |

##### `iterator()` (`sun.nio.fs.UnixDirectoryStream`)

| Change |   Delta |             % |         Time | Contentions | Callee                      | Location                         |
| -----: | ------: | ------------: | -----------: | ----------: | --------------------------- | -------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 11.8µs |       0 → 2 | `iterator(DirectoryStream)` | `sun.nio.fs.UnixDirectoryStream` |

##### `<init>(Path, Object, DirectoryStream)` (`java.nio.file.FileTreeWalker$DirectoryNode`)

| Change |   Delta |             % |         Time | Contentions | Callee       | Location                         |
| -----: | ------: | ------------: | -----------: | ----------: | ------------ | -------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 11.8µs |       0 → 2 | `iterator()` | `sun.nio.fs.UnixDirectoryStream` |

##### `privateGetDeclaredMethods(boolean)` (`java.lang.Class`)

| Change |   Delta |      % |           Time | Contentions | Callee                         | Location          |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------ | ----------------- |
| +88.0% | +0.01ms | 100.0% | 7.7µs → 14.4µs |           1 | `getDeclaredMethods0(boolean)` | `java.lang.Class` |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |          Time | Contentions | Callee                             | Location                        |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------- | ------------------------------- |
| +49.6% | +0.10ms | 100.0% | 0.2ms → 0.3ms |       8 → 7 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |          Time | Contentions | Callee                    | Location                        |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------- | ------------------------------- |
| +49.6% | +0.10ms | 100.0% | 0.2ms → 0.3ms |       8 → 7 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`)

| Change |   Delta |      % |          Time | Contentions | Callee                                  | Location                        |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------------------- | ------------------------------- |
| +49.6% | +0.10ms | 100.0% | 0.2ms → 0.3ms |       8 → 7 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |   Delta |      % |          Time | Contentions | Callee     | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------- |
| -63.6% | -0.92ms | 100.0% | 1.4ms → 0.5ms |           2 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |      % |          Time | Contentions | Callee                                    | Location                                      |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------------- | --------------------------------------------- |
| -63.6% | -0.92ms | 100.0% | 1.4ms → 0.5ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |      % |          Time | Contentions | Callee                 | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------- | ----------------------------------- |
| -63.6% | -0.92ms | 100.0% | 1.4ms → 0.5ms |           2 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`)

|  Change |   Delta |             % |          Time | Contentions | Callee                    | Location                       |
| ------: | ------: | ------------: | ------------: | ----------: | ------------------------- | ------------------------------ |
|  -55.4% | -0.08ms | 88.6% → 92.1% |         0.1ms |           3 | `walk(Path)`              | `java.nio.file.FileTreeWalker` |
|  -95.8% | -0.01ms |   3.9% → 0.4% | 6.0µs → 0.3µs |           1 | `<init>(Collection, int)` | `java.nio.file.FileTreeWalker` |
|     new | +4.96µs |   0.0% → 7.5% |   0ms → 5.0µs |       0 → 1 | `<clinit>()`              | `java.nio.file.Files$3`        |
| removed | -0.46µs |   0.3% → 0.0% |   0.5µs → 0ms |       1 → 0 | `<clinit>()`              | `java.nio.file.FileTreeWalker` |

##### `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`)

| Change |   Delta |              % |           Time | Contentions | Callee            | Location                                            |
| -----: | ------: | -------------: | -------------: | ----------: | ----------------- | --------------------------------------------------- |
| -47.1% | -0.04ms | 68.1% → 100.0% | 0.1ms → 49.3µs |           1 | `<init>(boolean)` | `java.util.concurrent.locks.ReentrantReadWriteLock` |

##### `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`)

| Change |   Delta |      % |           Time | Contentions | Callee                                           | Location                         |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------------------------ | -------------------------------- |
| -64.0% | -0.09ms | 100.0% | 0.1ms → 49.3µs |       3 → 1 | `<init>(UnixPath, long, DirectoryStream$Filter)` | `sun.nio.fs.UnixDirectoryStream` |

##### `newDirectoryStream(Path)` (`java.nio.file.Files`)

| Change |   Delta |      % |           Time | Contentions | Callee                                             | Location                            |
| -----: | ------: | -----: | -------------: | ----------: | -------------------------------------------------- | ----------------------------------- |
| -64.0% | -0.09ms | 100.0% | 0.1ms → 49.3µs |       3 → 1 | `newDirectoryStream(Path, DirectoryStream$Filter)` | `sun.nio.fs.UnixFileSystemProvider` |

##### `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`)

| Change |   Delta |             % |           Time | Contentions | Callee                                      | Location              |
| -----: | ------: | ------------: | -------------: | ----------: | ------------------------------------------- | --------------------- |
| -57.1% | -0.09ms | 95.3% → 82.1% |  0.2ms → 0.1ms |       6 → 5 | `walkFileTree(Path, Set, int, FileVisitor)` | `java.nio.file.Files` |
| +88.0% | +0.01ms |  4.7% → 17.9% | 7.7µs → 14.4µs |           1 | `noneOf(Class)`                             | `java.util.EnumSet`   |

##### `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`)

| Change |   Delta |              % |           Time | Contentions | Callee                                  | Location                                     |
| -----: | ------: | -------------: | -------------: | ----------: | --------------------------------------- | -------------------------------------------- |
| -64.0% | -0.09ms | 100.0% → 80.6% | 0.1ms → 49.3µs |       3 → 1 | `newDirectoryStream(Path)`              | `java.nio.file.Files`                        |
|    new | +0.01ms |   0.0% → 19.4% |   0ms → 11.8µs |       0 → 2 | `<init>(Path, Object, DirectoryStream)` | `java.nio.file.FileTreeWalker$DirectoryNode` |

##### `walk(Path)` (`java.nio.file.FileTreeWalker`)

| Change |   Delta |      % |  Time | Contentions | Callee                          | Location                       |
| -----: | ------: | -----: | ----: | ----------: | ------------------------------- | ------------------------------ |
| -55.4% | -0.08ms | 100.0% | 0.1ms |           3 | `visit(Path, boolean, boolean)` | `java.nio.file.FileTreeWalker` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time blocked in their leaf frame.

|  Change |   Delta |             % |           Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------: | ------: | ------------: | -------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +427.9% | +2.28ms | 24.5% → 77.3% |  0.5ms → 2.8ms |           2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     new | +0.36ms |   0.0% → 9.8% |    0ms → 0.4ms |       0 → 1 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|     new | +0.21ms |   0.0% → 5.8% |    0ms → 0.2ms |       0 → 1 | `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String)` (`java.lang.ClassLoader`) ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|     new | +0.01ms |   0.0% → 0.2% |    0ms → 8.2µs |       0 → 1 | `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  +88.0% | +0.01ms |          0.4% | 7.7µs → 14.4µs |           1 | `getDeclaredMethods0(boolean)` (`java.lang.Class`) ← `privateGetDeclaredMethods(boolean)` ← `getMethodsRecursive(String, Class[], boolean)` ← `getMethod0(String, Class[])` ← `getMethod(String, Class[])` ← `getEnumConstantsShared()` ← `getEnumConstantsShared(Class)` (`java.lang.System$2`) ← `getUniverse(Class)` (`java.util.EnumSet`) ← `noneOf(Class)` ← `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`) ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     new | +0.01ms |   0.0% → 0.2% |    0ms → 6.6µs |       0 → 1 | `<clinit>()` (`sun.nio.fs.UnixDirectoryStream$UnixDirectoryIterator`) ← `iterator(DirectoryStream)` (`sun.nio.fs.UnixDirectoryStream`) ← `iterator()` ← `<init>(Path, Object, DirectoryStream)` (`java.nio.file.FileTreeWalker$DirectoryNode`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|     new | +0.01ms |   0.0% → 0.1% |    0ms → 5.2µs |       0 → 1 | `iterator(DirectoryStream)` (`sun.nio.fs.UnixDirectoryStream`) ← `iterator()` ← `<init>(Path, Object, DirectoryStream)` (`java.nio.file.FileTreeWalker$DirectoryNode`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     new | +4.96µs |   0.0% → 0.1% |    0ms → 5.0µs |       0 → 1 | `<clinit>()` (`java.nio.file.Files$3`) ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

### Improvements

Call stacks with the largest decrease in time blocked in their leaf frame.

|  Change |   Delta |            % |           Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------: | ------: | -----------: | -------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -88.3% | -1.28ms | 66.6% → 4.7% |  1.4ms → 0.2ms |       2 → 1 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|  -47.1% | -0.04ms |  4.3% → 1.4% | 0.1ms → 49.3µs |           1 | `<init>(boolean)` (`java.util.concurrent.locks.ReentrantReadWriteLock`) ← `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`) ← `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                           |
| removed | -0.04ms |  2.0% → 0.0% |   43.8µs → 0ms |       2 → 0 | `<init>(UnixPath, long, DirectoryStream$Filter)` (`sun.nio.fs.UnixDirectoryStream`) ← `newDirectoryStream(Path, DirectoryStream$Filter)` (`sun.nio.fs.UnixFileSystemProvider`) ← `newDirectoryStream(Path)` (`java.nio.file.Files`) ← `visit(Path, boolean, boolean)` (`java.nio.file.FileTreeWalker`) ← `walk(Path)` ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000e801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                     |
| removed | -0.03ms |  1.5% → 0.0% |   32.5µs → 0ms |       1 → 0 | `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000e801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed | -0.01ms |  0.5% → 0.0% |   11.1µs → 0ms |       1 → 0 | `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000e801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -95.8% | -0.01ms | 0.3% → <0.1% |  6.0µs → 0.3µs |           1 | `<init>(Collection, int)` (`java.nio.file.FileTreeWalker`) ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed | -0.46µs | <0.1% → 0.0% |    0.5µs → 0ms |       1 → 0 | `<clinit>()` (`java.nio.file.FileTreeWalker`) ← `walkFileTree(Path, Set, int, FileVisitor)` (`java.nio.file.Files`) ← `walkFileTree(Path, FileVisitor)` ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000e801003a68`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

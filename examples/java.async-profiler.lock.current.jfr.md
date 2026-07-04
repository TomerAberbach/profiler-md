# Lock contention profile

Blocked 1.6ms over 10 samples (159.3µs per sample).

| Category |      % |  Time | Samples |
| -------- | -----: | ----: | ------: |
| stdlib   | 100.0% | 1.6ms |      10 |

## Hottest functions

### Total time

Functions ranked by total time blocked in the function and all its callees.

|     % |   Time | Samples | Function                                 | Location                                                 |
| ----: | -----: | ------: | ---------------------------------------- | -------------------------------------------------------- |
| 93.1% |  1.5ms |       6 | `loadClass(String)`                      | java.lang.ClassLoader                                    |
| 77.4% |  1.2ms |       4 | `average(List)`                          | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| 77.4% |  1.2ms |       4 | `computeClusterAverages()`               | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| 77.4% |  1.2ms |       4 | `computeDirectly()`                      | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask     |
| 77.4% |  1.2ms |       4 | `compute()`                              | org.renaissance.jdk.concurrent.JavaKMeans$RangedTask     |
| 33.5% |  0.5ms |       2 | `join()`                                 | java.util.concurrent.ForkJoinTask                        |
| 22.6% |  0.4ms |       6 | `deleteRecursively(Path, boolean)`       | org.renaissance.core.DirUtils                            |
| 22.6% |  0.4ms |       6 | `deleteRecursively(Path)`                | org.renaissance.core.DirUtils                            |
| 22.6% |  0.4ms |       6 | `lambda$createScratchDirectory$1(Path)`  | org.renaissance.core.DirUtils                            |
| 22.6% |  0.4ms |       6 | `run()`                                  | org.renaissance.core.DirUtils$$Lambda.0x000000f001003a68 |
|  8.7% |  0.1ms |       5 | `walkFileTree(Path, FileVisitor)`        | java.nio.file.Files                                      |
|  1.8% | 28.0µs |       1 | `visitFile(Path, BasicFileAttributes)`   | org.renaissance.core.DirUtils$1                          |
|  1.8% | 28.0µs |       1 | `visitFile(Object, BasicFileAttributes)` | org.renaissance.core.DirUtils$1                          |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

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
| 100.0% | 1.2ms |       4 | `computeDirectly()`        | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |

##### `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)

|      % |  Time | Samples | Callee              | Location                                             |
| -----: | ----: | ------: | ------------------- | ---------------------------------------------------- |
| 100.0% | 1.2ms |       4 | `computeDirectly()` | org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask |
|  43.4% | 0.5ms |       2 | `join()`            | java.util.concurrent.ForkJoinTask                    |

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

##### `visitFile(Path, BasicFileAttributes)` (org.renaissance.core.DirUtils$1)

|      % |   Time | Samples | Callee              | Location              |
| -----: | -----: | ------: | ------------------- | --------------------- |
| 100.0% | 28.0µs |       1 | `loadClass(String)` | java.lang.ClassLoader |

##### `visitFile(Object, BasicFileAttributes)` (org.renaissance.core.DirUtils$1)

|      % |   Time | Samples | Callee                                 | Location                        |
| -----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 28.0µs |       1 | `visitFile(Path, BasicFileAttributes)` | org.renaissance.core.DirUtils$1 |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame.

|     % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 43.8% |  0.7ms |       2 | `loadClass(String)` (java.lang.ClassLoader) ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                                                                                                                                          |
| 33.5% |  0.5ms |       2 | `loadClass(String)` (java.lang.ClassLoader) ← `average(List)` (org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask) ← `join()` (java.util.concurrent.ForkJoinTask) ← `compute()` (org.renaissance.jdk.concurrent.JavaKMeans$RangedTask)                                                      |
| 14.0% |  0.2ms |       1 | `loadClass(String)` (java.lang.ClassLoader) ← `deleteRecursively(Path, boolean)` (org.renaissance.core.DirUtils) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (org.renaissance.core.DirUtils$$Lambda.0x000000f001003a68)                                                                                                                                                                                 |
|  6.9% |  0.1ms |       4 | `walkFileTree(Path, FileVisitor)` (java.nio.file.Files) ← `deleteRecursively(Path, boolean)` (org.renaissance.core.DirUtils) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (org.renaissance.core.DirUtils$$Lambda.0x000000f001003a68)                                                                                                                                                                     |
|  1.8% | 28.0µs |       1 | `loadClass(String)` (java.lang.ClassLoader) ← `visitFile(Path, BasicFileAttributes)` (org.renaissance.core.DirUtils$1) ← `visitFile(Object, BasicFileAttributes)` ← `walkFileTree(Path, FileVisitor)` (java.nio.file.Files) ← `deleteRecursively(Path, boolean)` (org.renaissance.core.DirUtils) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (org.renaissance.core.DirUtils$$Lambda.0x000000f001003a68) |

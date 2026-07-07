# Lock contention profile

Blocked 1.9ms over 19 samples (98.9µs per sample).

| Category |      % |  Time | Samples |
| -------- | -----: | ----: | ------: |
| stdlib   | 100.0% | 1.9ms |      19 |

## Hottest functions

### Total time

Functions ranked by total time blocked in the function and all its callees.

|     % |   Time | Samples | Function                                 | Location                                                               |
| ----: | -----: | ------: | ---------------------------------------- | ---------------------------------------------------------------------- |
| 85.6% |  1.6ms |       7 | `loadClass(String)`                      | `java.lang.ClassLoader`                                                |
| 76.3% |  1.4ms |      11 | `computeClusterAverages()`               | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 76.3% |  1.4ms |      11 | `computeDirectly()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 76.3% |  1.4ms |      11 | `compute()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 67.8% |  1.3ms |       4 | `average(List)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 42.7% |  0.8ms |       5 | `join()`                                 | `java.util.concurrent.ForkJoinTask`                                    |
| 23.7% |  0.4ms |       8 | `deleteRecursively(Path, boolean)`       | `org.renaissance.core.DirUtils`                                        |
| 23.7% |  0.4ms |       8 | `deleteRecursively(Path)`                | `org.renaissance.core.DirUtils`                                        |
| 23.7% |  0.4ms |       8 | `lambda$createScratchDirectory$1(Path)`  | `org.renaissance.core.DirUtils`                                        |
| 23.7% |  0.4ms |       8 | `run()`                                  | `org.renaissance.core.DirUtils$$Lambda.0x000000f801003a68`             |
|  8.5% |  0.2ms |       7 | `boxed(double[])`                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  7.2% |  0.1ms |       7 | `walkFileTree(Path, FileVisitor)`        | `java.nio.file.Files`                                                  |
|  6.4% |  0.1ms |       5 | `toArray(IntFunction)`                   | `java.util.stream.ReferencePipeline`                                   |
|  1.4% | 27.0µs |       1 | `invoke()`                               | `java.util.concurrent.ForkJoinTask`                                    |
|  1.4% | 27.0µs |       1 | `lambda$run$0(int, List, int)`           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  1.4% | 27.0µs |       1 | `call()`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f801183d68` |
|  1.1% | 20.4µs |       1 | `stream(double[])`                       | `java.util.Arrays`                                                     |
|  0.2% |  4.1µs |       1 | `visitFile(Path, BasicFileAttributes)`   | `org.renaissance.core.DirUtils$1`                                      |
|  0.2% |  4.1µs |       1 | `visitFile(Object, BasicFileAttributes)` | `org.renaissance.core.DirUtils$1`                                      |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % |  Time | Samples | Callee            | Location                                               |
| ----: | ----: | ------: | ----------------- | ------------------------------------------------------ |
| 88.9% | 1.3ms |       4 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 11.1% | 0.2ms |       7 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Samples | Callee                     | Location                                               |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 1.4ms |      11 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% | 1.4ms |      11 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |  Time | Samples | Callee              | Location                                               |
| -----: | ----: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 1.4ms |      11 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  55.9% | 0.8ms |       5 | `join()`            | `java.util.concurrent.ForkJoinTask`                    |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Samples | Callee              | Location                |
| -----: | ----: | ------: | ------------------- | ----------------------- |
| 100.0% | 1.3ms |       4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

|     % |  Time | Samples | Callee                            | Location                |
| ----: | ----: | ------: | --------------------------------- | ----------------------- |
| 69.7% | 0.3ms |       1 | `loadClass(String)`               | `java.lang.ClassLoader` |
| 30.3% | 0.1ms |       7 | `walkFileTree(Path, FileVisitor)` | `java.nio.file.Files`   |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Samples | Callee                             | Location                        |
| -----: | ----: | ------: | ---------------------------------- | ------------------------------- |
| 100.0% | 0.4ms |       8 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Samples | Callee                    | Location                        |
| -----: | ----: | ------: | ------------------------- | ------------------------------- |
| 100.0% | 0.4ms |       8 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000f801003a68`)

|      % |  Time | Samples | Callee                                  | Location                        |
| -----: | ----: | ------: | --------------------------------------- | ------------------------------- |
| 100.0% | 0.4ms |       8 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % |   Time | Samples | Callee                 | Location                             |
| ----: | -----: | ------: | ---------------------- | ------------------------------------ |
| 75.0% |  0.1ms |       5 | `toArray(IntFunction)` | `java.util.stream.ReferencePipeline` |
| 12.8% | 20.4µs |       1 | `stream(double[])`     | `java.util.Arrays`                   |
| 12.1% | 19.3µs |       1 | `loadClass(String)`    | `java.lang.ClassLoader`              |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |   Time | Samples | Callee     | Location                            |
| -----: | -----: | ------: | ---------- | ----------------------------------- |
| 100.0% | 27.0µs |       1 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f801183d68`)

|      % |   Time | Samples | Callee                         | Location                                    |
| -----: | -----: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% | 27.0µs |       1 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `visitFile(Path, BasicFileAttributes)` (`org.renaissance.core.DirUtils$1`)

|      % |  Time | Samples | Callee              | Location                |
| -----: | ----: | ------: | ------------------- | ----------------------- |
| 100.0% | 4.1µs |       1 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `visitFile(Object, BasicFileAttributes)` (`org.renaissance.core.DirUtils$1`)

|      % |  Time | Samples | Callee                                 | Location                          |
| -----: | ----: | ------: | -------------------------------------- | --------------------------------- |
| 100.0% | 4.1µs |       1 | `visitFile(Path, BasicFileAttributes)` | `org.renaissance.core.DirUtils$1` |

## Hottest call stacks

Call stacks ranked by time blocked in their leaf frame.

|     % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 38.9% |  0.7ms |       2 | `loadClass(String)` (`java.lang.ClassLoader`) ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                 |
| 28.9% |  0.5ms |       2 | `loadClass(String)` (`java.lang.ClassLoader`) ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 16.5% |  0.3ms |       1 | `loadClass(String)` (`java.lang.ClassLoader`) ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000f801003a68`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  7.0% |  0.1ms |       6 | `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`) ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000f801003a68`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.6% | 49.1µs |       2 | `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  2.3% | 43.2µs |       2 | `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                               |
|  1.4% | 27.0µs |       1 | `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `join()` (`java.util.concurrent.ForkJoinTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `invoke()` (`java.util.concurrent.ForkJoinTask`) ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f801183d68`) |
|  1.1% | 20.4µs |       1 | `stream(double[])` (`java.util.Arrays`) ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.0% | 19.3µs |       1 | `loadClass(String)` (`java.lang.ClassLoader`) ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.2% |  4.1µs |       1 | `loadClass(String)` (`java.lang.ClassLoader`) ← `visitFile(Path, BasicFileAttributes)` (`org.renaissance.core.DirUtils$1`) ← `visitFile(Object, BasicFileAttributes)` ← `walkFileTree(Path, FileVisitor)` (`java.nio.file.Files`) ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000f801003a68`)                                                                                                                                                                                                                                                                                                            |

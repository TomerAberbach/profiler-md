# Lock contention profile

Blocked 1.1ms over 6 contentions (177.5µs per contention).

| Category         |     % |   Time | Contentions |
| ---------------- | ----: | -----: | ----------: |
| Standard library | 98.5% |  1.0ms |           5 |
| Ours             |  1.5% | 15.6µs |           1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 0.8ms (77.8%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 0.8ms (77.8%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       └── 0.8ms (77.8%) scan(ForkJoinPool$WorkQueue, int, int)
│           └── 0.8ms (77.8%) topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool$WorkQueue
│               └── 0.8ms (77.8%) doExec() at java.util.concurrent.ForkJoinTask
│                   └── … 0.8ms (77.8%) exec() at java.util.concurrent.RecursiveTask
│                       └── 0.8ms (77.8%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│                           └── 0.8ms (77.8%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│                               └── … 0.8ms (77.8%) computeClusterAverages() at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│                                   └── 0.8ms (77.8%, self 1.5%) average(List)
│                                       └── 0.8ms (76.3%) loadClass(String) at java.lang.ClassLoader
│                                           └── 0.8ms (76.3%) loadClass(String, boolean)
└── 0.2ms (22.2%) run() at java.lang.Thread
    └── 0.2ms (22.2%) runWith(Object, Runnable)
        └── 0.2ms (22.2%) run() at org.renaissance.core.DirUtils$$Lambda.0x000000a001009000
            └── 0.2ms (22.2%) lambda$createScratchDirectory$1(Path) at org.renaissance.core.DirUtils
                └── 0.2ms (22.2%) deleteRecursively(Path)
                    └── 0.2ms (22.2%) deleteRecursively(Path, boolean)
                        └── 0.2ms (22.2%) loadClass(String) at java.lang.ClassLoader
                            └── 0.2ms (22.2%) loadClass(String, boolean) at jdk.internal.loader.ClassLoaders$AppClassLoader
                                └── 0.2ms (22.2%) loadClass(String, boolean) at jdk.internal.loader.BuiltinClassLoader
                                    └── 0.2ms (22.2%) loadClassOrNull(String, boolean)
```

## Hottest functions

### Self time

Functions with the most time blocked within the function body, excluding callees.

|     % |   Time | Contentions | Function                           | Location                                               |
| ----: | -----: | ----------: | ---------------------------------- | ------------------------------------------------------ |
| 76.3% |  0.8ms |           4 | `loadClass(String, boolean)`       | `java.lang.ClassLoader`                                |
| 22.2% |  0.2ms |           1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader`               |
|  1.5% | 15.6µs |           1 | `average(List)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |  Time | Contentions | Function                           | Location                                 |
| ----: | ----: | ----------: | ---------------------------------- | ---------------------------------------- |
| 76.3% | 0.8ms |           4 | `loadClass(String, boolean)`       | `java.lang.ClassLoader`                  |
| 22.2% | 0.2ms |           1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### Ours

|    % |   Time | Contentions | Function        | Location                                               |
| ---: | -----: | ----------: | --------------- | ------------------------------------------------------ |
| 1.5% | 15.6µs |           1 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

#### Lines

Lines with the largest contribution to each function's self time.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Location                    |
| -----: | ----: | ----------: | --------------------------- |
| 100.0% | 0.8ms |           4 | `java.lang.ClassLoader:573` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Location                                     |
| -----: | ----: | ----------: | -------------------------------------------- |
| 100.0% | 0.2ms |           1 | `jdk.internal.loader.BuiltinClassLoader:651` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |   Time | Contentions | Location                                                   |
| -----: | -----: | ----------: | ---------------------------------------------------------- |
| 100.0% | 15.6µs |           1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:332` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Caller              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 0.8ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Caller                       | Location                                 |
| -----: | ----: | ----------: | ---------------------------- | ---------------------------------------- |
| 100.0% | 0.2ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |   Time | Contentions | Caller                     | Location                                               |
| -----: | -----: | ----------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 15.6µs |           1 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

### Total time

Functions with the most time blocked within the function and its callees.

|     % |  Time | Contentions | Function                                             | Location                                               |
| ----: | ----: | ----------: | ---------------------------------------------------- | ------------------------------------------------------ |
| 98.5% | 1.0ms |           5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                                |
| 77.8% | 0.8ms |           5 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 77.8% | 0.8ms |           5 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 77.8% | 0.8ms |           5 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 77.8% | 0.8ms |           5 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |
| 77.8% | 0.8ms |           5 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                   |
| 77.8% | 0.8ms |           5 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                    |
| 77.8% | 0.8ms |           5 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
| 77.8% | 0.8ms |           5 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                    |
| 77.8% | 0.8ms |           5 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                    |
| 77.8% | 0.8ms |           5 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`            |
| 76.3% | 0.8ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                                |
| 25.5% | 0.3ms |           3 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
| 25.5% | 0.3ms |           3 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                    |
| 25.5% | 0.3ms |           3 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                    |
| 22.2% | 0.2ms |           1 | `loadClassOrNull(String, boolean)`                   | `jdk.internal.loader.BuiltinClassLoader`               |
| 22.2% | 0.2ms |           1 | `loadClass(String, boolean)`                         | `jdk.internal.loader.BuiltinClassLoader`               |
| 22.2% | 0.2ms |           1 | `loadClass(String, boolean)`                         | `jdk.internal.loader.ClassLoaders$AppClassLoader`      |
| 22.2% | 0.2ms |           1 | `deleteRecursively(Path, boolean)`                   | `org.renaissance.core.DirUtils`                        |
| 22.2% | 0.2ms |           1 | `deleteRecursively(Path)`                            | `org.renaissance.core.DirUtils`                        |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |  Time | Contentions | Function                                             | Location                                            |
| ----: | ----: | ----------: | ---------------------------------------------------- | --------------------------------------------------- |
| 98.5% | 1.0ms |           5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                             |
| 77.8% | 0.8ms |           5 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                |
| 77.8% | 0.8ms |           5 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| 77.8% | 0.8ms |           5 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 77.8% | 0.8ms |           5 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                 |
| 77.8% | 0.8ms |           5 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                 |
| 77.8% | 0.8ms |           5 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`         |
| 76.3% | 0.8ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                             |
| 25.5% | 0.3ms |           3 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 25.5% | 0.3ms |           3 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                 |
| 25.5% | 0.3ms |           3 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                 |
| 22.2% | 0.2ms |           1 | `loadClassOrNull(String, boolean)`                   | `jdk.internal.loader.BuiltinClassLoader`            |
| 22.2% | 0.2ms |           1 | `loadClass(String, boolean)`                         | `jdk.internal.loader.BuiltinClassLoader`            |
| 22.2% | 0.2ms |           1 | `loadClass(String, boolean)`                         | `jdk.internal.loader.ClassLoaders$AppClassLoader`   |
| 22.2% | 0.2ms |           1 | `runWith(Object, Runnable)`                          | `java.lang.Thread`                                  |
| 22.2% | 0.2ms |           1 | `run()`                                              | `java.lang.Thread`                                  |
| 13.3% | 0.1ms |           1 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| 13.3% | 0.1ms |           1 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### Ours

|     % |  Time | Contentions | Function                                | Location                                                               |
| ----: | ----: | ----------: | --------------------------------------- | ---------------------------------------------------------------------- |
| 77.8% | 0.8ms |           5 | `average(List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 77.8% | 0.8ms |           5 | `computeClusterAverages()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 77.8% | 0.8ms |           5 | `computeDirectly()`                     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 77.8% | 0.8ms |           5 | `compute()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 22.2% | 0.2ms |           1 | `deleteRecursively(Path, boolean)`      | `org.renaissance.core.DirUtils`                                        |
| 22.2% | 0.2ms |           1 | `deleteRecursively(Path)`               | `org.renaissance.core.DirUtils`                                        |
| 22.2% | 0.2ms |           1 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils`                                        |
| 22.2% | 0.2ms |           1 | `run()`                                 | `org.renaissance.core.DirUtils$$Lambda.0x000000a001009000`             |
| 13.3% | 0.1ms |           1 | `lambda$run$0(int, List, int)`          | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 13.3% | 0.1ms |           1 | `call()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011f9cf0` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `loadClass(String)` (`java.lang.ClassLoader`)

|     % |  Time | Contentions | Caller                             | Location                                               |
| ----: | ----: | ----------: | ---------------------------------- | ------------------------------------------------------ |
| 77.5% | 0.8ms |           4 | `average(List)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 22.5% | 0.2ms |           1 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils`                        |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Caller                     | Location                                               |
| -----: | ----: | ----------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 0.8ms |           5 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Caller              | Location                                               |
| -----: | ----: | ----------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 0.8ms |           5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Caller              | Location                                               |
| -----: | ----: | ----------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 0.8ms |           5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% | 0.8ms |           5 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |  Time | Contentions | Caller   | Location                             |
| -----: | ----: | ----------: | -------- | ------------------------------------ |
| 100.0% | 0.8ms |           5 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |  Time | Contentions | Caller     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 0.8ms |           5 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Caller                                               | Location                                      |
| -----: | ----: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 0.8ms |           5 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  32.7% | 0.3ms |           3 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  17.1% | 0.1ms |           1 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Caller                                   | Location                            |
| -----: | ----: | ----------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 0.8ms |           5 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Caller                              | Location                            |
| -----: | ----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 0.8ms |           5 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Caller  | Location                                    |
| -----: | ----: | ----------: | ------- | ------------------------------------------- |
| 100.0% | 0.8ms |           5 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Caller              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 0.8ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Caller                 | Location                            |
| -----: | ----: | ----------: | ---------------------- | ----------------------------------- |
| 100.0% | 0.3ms |           3 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Caller   | Location                            |
| -----: | ----: | ----------: | -------- | ----------------------------------- |
| 100.0% | 0.3ms |           3 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Caller      | Location                                               |
| -----: | ----: | ----------: | ----------- | ------------------------------------------------------ |
| 100.0% | 0.3ms |           3 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

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

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Caller                    | Location                        |
| -----: | ----: | ----------: | ------------------------- | ------------------------------- |
| 100.0% | 0.2ms |           1 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Caller                                  | Location                        |
| -----: | ----: | ----------: | --------------------------------------- | ------------------------------- |
| 100.0% | 0.2ms |           1 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Caller  | Location           |
| -----: | ----: | ----------: | ------- | ------------------ |
| 100.0% | 0.2ms |           1 | `run()` | `java.lang.Thread` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Caller  | Location                                                   |
| -----: | ----: | ----------: | ------- | ---------------------------------------------------------- |
| 100.0% | 0.2ms |           1 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x000000a001009000` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000a001009000`)

|      % |  Time | Contentions | Caller                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 0.2ms |           1 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Caller                         | Location                                    |
| -----: | ----: | ----------: | ------------------------------ | ------------------------------------------- |
| 100.0% | 0.1ms |           1 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % |  Time | Contentions | Caller     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 0.1ms |           1 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |  Time | Contentions | Caller   | Location                                                               |
| -----: | ----: | ----------: | -------- | ---------------------------------------------------------------------- |
| 100.0% | 0.1ms |           1 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011f9cf0` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011f9cf0`)

|      % |  Time | Contentions | Caller   | Location                                            |
| -----: | ----: | ----------: | -------- | --------------------------------------------------- |
| 100.0% | 0.1ms |           1 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `loadClass(String)` (`java.lang.ClassLoader`)

|     % |  Time | Contentions | Callee                       | Location                                          |
| ----: | ----: | ----------: | ---------------------------- | ------------------------------------------------- |
| 77.5% | 0.8ms |           4 | `loadClass(String, boolean)` | `java.lang.ClassLoader`                           |
| 22.5% | 0.2ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % |  Time | Contentions | Callee              | Location                |
| ----: | ----: | ----------: | ------------------- | ----------------------- |
| 98.1% | 0.8ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Callee          | Location                                               |
| -----: | ----: | ----------: | --------------- | ------------------------------------------------------ |
| 100.0% | 0.8ms |           5 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Callee                     | Location                                               |
| -----: | ----: | ----------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 0.8ms |           5 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% | 0.8ms |           5 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |  Time | Contentions | Callee              | Location                                               |
| -----: | ----: | ----------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 0.8ms |           5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  32.7% | 0.3ms |           3 | `join()`            | `java.util.concurrent.ForkJoinTask`                    |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |  Time | Contentions | Callee      | Location                                               |
| -----: | ----: | ----------: | ----------- | ------------------------------------------------------ |
| 100.0% | 0.8ms |           5 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee   | Location                                            |
| -----: | ----: | ----------: | -------- | --------------------------------------------------- |
| 100.0% | 0.8ms |           5 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|  17.1% | 0.1ms |           1 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 0.8ms |           5 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Callee                                               | Location                                      |
| -----: | ----: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 0.8ms |           5 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Callee                                   | Location                            |
| -----: | ----: | ----------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 0.8ms |           5 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % |  Time | Contentions | Callee                              | Location                            |
| -----: | ----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 0.8ms |           5 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 0.3ms |           3 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee                                    | Location                                      |
| -----: | ----: | ----------: | ----------------------------------------- | --------------------------------------------- |
| 100.0% | 0.3ms |           3 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee                 | Location                            |
| -----: | ----: | ----------: | ---------------------- | ----------------------------------- |
| 100.0% | 0.3ms |           3 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Callee                             | Location                                 |
| -----: | ----: | ----------: | ---------------------------------- | ---------------------------------------- |
| 100.0% | 0.2ms |           1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`)

|      % |  Time | Contentions | Callee                       | Location                                 |
| -----: | ----: | ----------: | ---------------------------- | ---------------------------------------- |
| 100.0% | 0.2ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Callee              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 0.2ms |           1 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Callee                             | Location                        |
| -----: | ----: | ----------: | ---------------------------------- | ------------------------------- |
| 100.0% | 0.2ms |           1 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee  | Location                                                   |
| -----: | ----: | ----------: | ------- | ---------------------------------------------------------- |
| 100.0% | 0.2ms |           1 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x000000a001009000` |

##### `run()` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 0.2ms |           1 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

|      % |  Time | Contentions | Callee                    | Location                        |
| -----: | ----: | ----------: | ------------------------- | ------------------------------- |
| 100.0% | 0.2ms |           1 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000a001009000`)

|      % |  Time | Contentions | Callee                                  | Location                        |
| -----: | ----: | ----------: | --------------------------------------- | ------------------------------- |
| 100.0% | 0.2ms |           1 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 0.1ms |           1 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % |  Time | Contentions | Callee   | Location                                                               |
| -----: | ----: | ----------: | -------- | ---------------------------------------------------------------------- |
| 100.0% | 0.1ms |           1 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011f9cf0` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 0.1ms |           1 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011f9cf0`)

|      % |  Time | Contentions | Callee                         | Location                                    |
| -----: | ----: | ----------: | ------------------------------ | ------------------------------------------- |
| 100.0% | 0.1ms |           1 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

## Hottest call stacks

Call stacks with the most time blocked in their leaf frame.

|     % |   Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | -----: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 52.3% |  0.6ms |           2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 22.2% |  0.2ms |           1 | `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String)` (`java.lang.ClassLoader`) ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000a001009000`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 13.3% |  0.1ms |           1 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011f9cf0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
| 10.7% |  0.1ms |           1 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.5% | 15.6µs |           1 | `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

# Thread park profile

Parked 41.49s over 74,932 parks (553.7µs per park).

| Category         |      % |   Time |  Parks |
| ---------------- | -----: | -----: | -----: |
| Standard library | 100.0% | 41.49s | 74,932 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 35.21s (84.9%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 35.21s (84.9%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       ├── 25.07s (60.4%) awaitWork(ForkJoinPool$WorkQueue)
│       │   ├── 24.01s (57.9%) park() at java.util.concurrent.locks.LockSupport
│       │   │   └── 24.01s (57.9%, self 100.0% globally) park(boolean, long) at jdk.internal.misc.Unsafe
│       │   └── 1.07s (2.6%) parkUntil(long) at java.util.concurrent.locks.LockSupport
│       │       └── 1.07s (2.6%) park(boolean, long) at jdk.internal.misc.Unsafe
│       └── 10.14s (24.4%) scan(ForkJoinPool$WorkQueue, int, int)
│           └── 10.14s (24.4%) topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool$WorkQueue
│               └── 10.14s (24.4%) doExec() at java.util.concurrent.ForkJoinTask
│                   └── … 10.14s (24.4%) exec() at java.util.concurrent.RecursiveTask
│                       └── 10.14s (24.4%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│                           └── 10.14s (24.4%) join() at java.util.concurrent.ForkJoinTask
│                               └── 10.14s (24.4%) awaitDone(int, long)
│                                   └── 10.14s (24.4%) park() at java.util.concurrent.locks.LockSupport
│                                       └── 10.14s (24.4%) park(boolean, long) at jdk.internal.misc.Unsafe
└── … 6.28s (15.1%) invoke(Object, Object[]) at jdk.internal.reflect.DirectMethodHandleAccessor
    └── 6.28s (15.1%) invokeImpl(Object, Object[])
        └── 6.28s (15.1%) invokeExact_MT(Object, Object, Object, Object) at java.lang.invoke.Invokers$Holder
            └── 6.28s (15.1%) invoke(Object, Object, Object) at java.lang.invoke.LambdaForm$MH.0x000000a00100d800
                └── 6.28s (15.1%) invokeStatic(Object, Object) at java.lang.invoke.LambdaForm$DMH.0x000000a001001800
                    └── 6.28s (15.1%) main(String[]) at org.renaissance.harness.RenaissanceSuite
                        └── 6.28s (15.1%) main(String[]) at org.renaissance.harness.RenaissanceSuite$
                            └── 6.28s (15.1%) runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)
                                └── 6.28s (15.1%) foreach(Function1) at scala.collection.immutable.List
                                    └── 6.28s (15.1%) apply(Object) at scala.runtime.function.JProcedure1
                                        └── … 6.28s (15.1%) applyVoid(Object) at org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a0011583b8
                                            └── 6.28s (15.1%) runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor) at org.renaissance.harness.RenaissanceSuite$
                                                └── 6.28s (15.1%) executeBenchmark() at org.renaissance.harness.ExecutionDriver
                                                    └── 6.28s (15.1%) executeOperation(int)
                                                        └── 6.28s (15.1%) run(BenchmarkContext) at org.renaissance.jdk.concurrent.FjKmeans
                                                            └── 6.28s (15.1%) map(Function1) at scala.collection.immutable.Range
                                                                └── 6.28s (15.1%) apply(Object) at org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a0011f9910
                                                                    └── 6.28s (15.1%) $anonfun$adapted$1(Object) at org.renaissance.jdk.concurrent.FjKmeans
                                                                        └── 6.28s (15.1%) $anonfun$2(int)
                                                                            └── 6.28s (15.1%) run(int, List, int) at org.renaissance.jdk.concurrent.JavaKMeans
                                                                                └── 6.28s (15.1%) get() at java.util.concurrent.ForkJoinTask
                                                                                    └── 6.28s (15.1%) awaitDone(int, long)
                                                                                        └── 6.28s (15.1%) park() at java.util.concurrent.locks.LockSupport
                                                                                            └── 6.28s (15.1%) park(boolean, long) at jdk.internal.misc.Unsafe
```

## Hottest functions

### Self time

Functions with the most time parked within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|      % |   Time |  Parks | Function              | Location                   |
| -----: | -----: | -----: | --------------------- | -------------------------- |
| 100.0% | 41.49s | 74,932 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % |   Time |  Parks | Caller                    | Location                                 |
| ----: | -----: | -----: | ------------------------- | ---------------------------------------- |
| 97.4% | 40.42s | 70,876 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
|  2.6% |  1.07s |  4,055 | `parkUntil(long)`         | `java.util.concurrent.locks.LockSupport` |
| <0.1% |  0.2ms |      1 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

### Total time

Functions with the most time parked within the function and its callees.

|      % |   Time |  Parks | Function                                                                                                               | Location                                                               |
| -----: | -----: | -----: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% | 41.49s | 74,932 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                             |
|  97.4% | 40.42s | 70,876 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                               |
|  84.9% | 35.21s | 74,915 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
|  84.9% | 35.21s | 74,915 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                            |
|  60.4% | 25.07s | 29,600 | `awaitWork(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
|  39.6% | 16.42s | 45,331 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
|  24.4% | 10.14s | 45,315 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                    |
|  24.4% | 10.14s | 45,315 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  24.4% | 10.14s | 45,315 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                                   |
|  24.4% | 10.14s | 45,315 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
|  24.4% | 10.14s | 45,315 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  24.4% | 10.14s | 45,315 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                                    |
|  15.1% |  6.28s |     17 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  15.1% |  6.28s |     17 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  15.1% |  6.28s |     17 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a0011583b8` |
|  15.1% |  6.28s |     17 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
|  15.1% |  6.28s |     17 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  15.1% |  6.28s |     17 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  15.1% |  6.28s |     17 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  15.1% |  6.28s |     17 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|      % |   Time |  Parks | Function                                             | Location                                             |
| -----: | -----: | -----: | ---------------------------------------------------- | ---------------------------------------------------- |
| 100.0% | 41.49s | 74,932 | `park(boolean, long)`                                | `jdk.internal.misc.Unsafe`                           |
|  97.4% | 40.42s | 70,876 | `park()`                                             | `java.util.concurrent.locks.LockSupport`             |
|  84.9% | 35.21s | 74,915 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
|  84.9% | 35.21s | 74,915 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`          |
|  60.4% | 25.07s | 29,600 | `awaitWork(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
|  39.6% | 16.42s | 45,331 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                  |
|  24.4% | 10.14s | 45,315 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                  |
|  24.4% | 10.14s | 45,315 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                 |
|  24.4% | 10.14s | 45,315 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                  |
|  24.4% | 10.14s | 45,315 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  24.4% | 10.14s | 45,315 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                  |
|  15.1% |  6.28s |     17 | `apply(Object)`                                      | `scala.runtime.function.JProcedure1`                 |
|  15.1% |  6.28s |     17 | `foreach(Function1)`                                 | `scala.collection.immutable.List`                    |
|  15.1% |  6.28s |     17 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x000000a001001800` |
|  15.1% |  6.28s |     17 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x000000a00100d800`  |
|  15.1% |  6.28s |     17 | `invokeExact_MT(Object, Object, Object, Object)`     | `java.lang.invoke.Invokers$Holder`                   |
|  15.1% |  6.28s |     17 | `invokeImpl(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  15.1% |  6.28s |     17 | `invoke(Object, Object[])`                           | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  15.1% |  6.28s |     17 | `invoke(Object, Object[])`                           | `java.lang.reflect.Method`                           |
|  15.1% |  6.28s |     16 | `get()`                                              | `java.util.concurrent.ForkJoinTask`                  |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % |   Time |  Parks | Caller                    | Location                                 |
| ----: | -----: | -----: | ------------------------- | ---------------------------------------- |
| 97.4% | 40.42s | 70,876 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
|  2.6% |  1.07s |  4,055 | `parkUntil(long)`         | `java.util.concurrent.locks.LockSupport` |
| <0.1% |  0.2ms |      1 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|     % |   Time |  Parks | Caller                              | Location                            |
| ----: | -----: | -----: | ----------------------------------- | ----------------------------------- |
| 59.4% | 24.01s | 25,545 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |
| 40.6% | 16.42s | 45,331 | `awaitDone(int, long)`              | `java.util.concurrent.ForkJoinTask` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |   Time |  Parks | Caller  | Location                                    |
| -----: | -----: | -----: | ------- | ------------------------------------------- |
| 100.0% | 35.21s | 74,915 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |   Time |  Parks | Caller                              | Location                            |
| -----: | -----: | -----: | ----------------------------------- | ----------------------------------- |
| 100.0% | 25.07s | 29,600 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % |   Time |  Parks | Caller   | Location                            |
| ----: | -----: | -----: | -------- | ----------------------------------- |
| 61.7% | 10.14s | 45,315 | `join()` | `java.util.concurrent.ForkJoinTask` |
| 38.3% |  6.28s |     16 | `get()`  | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time |  Parks | Caller      | Location                                               |
| -----: | -----: | -----: | ----------- | ------------------------------------------------------ |
| 100.0% | 10.14s | 45,315 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |   Time |  Parks | Caller   | Location                             |
| -----: | -----: | -----: | -------- | ------------------------------------ |
| 100.0% | 10.14s | 45,315 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |   Time |  Parks | Caller     | Location                            |
| -----: | -----: | -----: | ---------- | ----------------------------------- |
| 100.0% | 10.14s | 45,315 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time |  Parks | Caller                                                    | Location                                      |
| -----: | -----: | -----: | --------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 10.14s | 45,315 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  56.3% |  5.71s | 27,263 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  25.7% |  2.60s | 16,016 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  18.4% |  1.86s |  9,437 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |   Time |  Parks | Caller                                   | Location                            |
| -----: | -----: | -----: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 10.14s | 45,315 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |   Time |  Parks | Caller                              | Location                            |
| -----: | -----: | -----: | ----------------------------------- | ----------------------------------- |
| 100.0% | 10.14s | 45,315 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|      % |  Time | Parks | Caller                                                                                                                 | Location                                    |
| -----: | ----: | ----: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 6.28s |    17 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Parks | Caller              | Location                                                               |
| -----: | ----: | ----: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 6.28s |    17 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a0011583b8` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a0011583b8`)

|      % |  Time | Parks | Caller          | Location                             |
| -----: | ----: | ----: | --------------- | ------------------------------------ |
| 100.0% | 6.28s |    17 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|      % |  Time | Parks | Caller               | Location                             |
| -----: | ----: | ----: | -------------------- | ------------------------------------ |
| 100.0% | 6.28s |    17 | `apply(Object)`      | `scala.runtime.function.JProcedure1` |
| 100.0% | 6.28s |    17 | `foreach(Function1)` | `scala.collection.immutable.List`    |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |  Time | Parks | Caller                                                                        | Location                                    |
| -----: | ----: | ----: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 6.28s |    17 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Parks | Caller           | Location                                    |
| -----: | ----: | ----: | ---------------- | ------------------------------------------- |
| 100.0% | 6.28s |    17 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Parks | Caller           | Location                                   |
| -----: | ----: | ----: | ---------------- | ------------------------------------------ |
| 100.0% | 6.28s |    17 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |  Time | Parks | Caller                         | Location                                             |
| -----: | ----: | ----: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 6.28s |    17 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a001001800` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a001001800`)

|      % |  Time | Parks | Caller                           | Location                                            |
| -----: | ----: | ----: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 6.28s |    17 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a00100d800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a00100d800`)

|      % |  Time | Parks | Caller                                           | Location                           |
| -----: | ----: | ----: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 6.28s |    17 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |  Time | Parks | Caller                         | Location                                          |
| -----: | ----: | ----: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 6.28s |    17 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |  Time | Parks | Caller                     | Location                                          |
| -----: | ----: | ----: | -------------------------- | ------------------------------------------------- |
| 100.0% | 6.28s |    17 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |  Time | Parks | Caller                     | Location                   |
| -----: | ----: | ----: | -------------------------- | -------------------------- |
| 100.0% | 6.28s |    17 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |  Time | Parks | Caller                                                      | Location                        |
| -----: | ----: | ----: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% | 6.28s |    17 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Parks | Caller                | Location                                    |
| -----: | ----: | ----: | --------------------- | ------------------------------------------- |
| 100.0% | 6.28s |    16 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % |   Time |  Parks | Callee                | Location                   |
| -----: | -----: | -----: | --------------------- | -------------------------- |
| 100.0% | 40.42s | 70,876 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % |   Time |  Parks | Callee                                   | Location                            |
| ----: | -----: | -----: | ---------------------------------------- | ----------------------------------- |
| 71.2% | 25.07s | 29,600 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |
| 28.8% | 10.14s | 45,315 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % |   Time |  Parks | Callee                              | Location                            |
| -----: | -----: | -----: | ----------------------------------- | ----------------------------------- |
| 100.0% | 35.21s | 74,915 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % |   Time |  Parks | Callee            | Location                                 |
| ----: | -----: | -----: | ----------------- | ---------------------------------------- |
| 95.7% | 24.01s | 25,545 | `park()`          | `java.util.concurrent.locks.LockSupport` |
|  4.3% |  1.07s |  4,055 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time |  Parks | Callee                                                    | Location                                      |
| -----: | -----: | -----: | --------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 16.42s | 45,331 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
|  34.8% |  5.71s | 27,263 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  15.9% |  2.60s | 16,016 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time |  Parks | Callee                 | Location                            |
| -----: | -----: | -----: | ---------------------- | ----------------------------------- |
| 100.0% | 10.14s | 45,315 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |   Time |  Parks | Callee              | Location                                               |
| -----: | -----: | -----: | ------------------- | ------------------------------------------------------ |
| 100.0% | 10.14s | 45,315 | `join()`            | `java.util.concurrent.ForkJoinTask`                    |
|  13.8% |  1.39s |  6,572 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |   Time |  Parks | Callee      | Location                                               |
| -----: | -----: | -----: | ----------- | ------------------------------------------------------ |
| 100.0% | 10.14s | 45,315 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |    Time |  Parks | Callee   | Location                                            |
| -----: | ------: | -----: | -------- | --------------------------------------------------- |
| 100.0% |  10.14s | 45,315 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|   6.8% | 692.3ms |  4,189 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |   Time |  Parks | Callee     | Location                            |
| -----: | -----: | -----: | ---------- | ----------------------------------- |
| 100.0% | 10.14s | 45,315 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |   Time |  Parks | Callee                                               | Location                                      |
| -----: | -----: | -----: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 10.14s | 45,315 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|      % |  Time | Parks | Callee                               | Location                                  |
| -----: | ----: | ----: | ------------------------------------ | ----------------------------------------- |
| 100.0% | 6.28s |    16 | `executeOperation(int)`              | `org.renaissance.harness.ExecutionDriver` |
|  <0.1% | 0.2ms |     1 | `tearDownAfterAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Parks | Callee               | Location                                  |
| -----: | ----: | ----: | -------------------- | ----------------------------------------- |
| 100.0% | 6.28s |    17 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a0011583b8`)

|      % |  Time | Parks | Callee                                                                                                                 | Location                                    |
| -----: | ----: | ----: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 6.28s |    17 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|      % |  Time | Parks | Callee              | Location                                                               |
| -----: | ----: | ----: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 6.28s |    17 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a0011583b8` |
| 100.0% | 6.28s |    17 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |  Time | Parks | Callee          | Location                             |
| -----: | ----: | ----: | --------------- | ------------------------------------ |
| 100.0% | 6.28s |    17 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Parks | Callee               | Location                          |
| -----: | ----: | ----: | -------------------- | --------------------------------- |
| 100.0% | 6.28s |    17 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Parks | Callee                                                                        | Location                                    |
| -----: | ----: | ----: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 6.28s |    17 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |  Time | Parks | Callee           | Location                                    |
| -----: | ----: | ----: | ---------------- | ------------------------------------------- |
| 100.0% | 6.28s |    17 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a001001800`)

|      % |  Time | Parks | Callee           | Location                                   |
| -----: | ----: | ----: | ---------------- | ------------------------------------------ |
| 100.0% | 6.28s |    17 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a00100d800`)

|      % |  Time | Parks | Callee                         | Location                                             |
| -----: | ----: | ----: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 6.28s |    17 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a001001800` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |  Time | Parks | Callee                           | Location                                            |
| -----: | ----: | ----: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 6.28s |    17 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a00100d800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |  Time | Parks | Callee                                           | Location                           |
| -----: | ----: | ----: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 6.28s |    17 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |  Time | Parks | Callee                         | Location                                          |
| -----: | ----: | ----: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 6.28s |    17 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |  Time | Parks | Callee                     | Location                                          |
| -----: | ----: | ----: | -------------------------- | ------------------------------------------------- |
| 100.0% | 6.28s |    17 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Parks | Callee                 | Location                            |
| -----: | ----: | ----: | ---------------------- | ----------------------------------- |
| 100.0% | 6.28s |    16 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

## Hottest call stacks

Call stacks with the most time parked in their leaf frame.

|     % |    Time |  Parks | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----: | ------: | -----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 57.9% |  24.01s | 25,545 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 15.1% |   6.28s |     16 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a0011f9910`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a0011583b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a001001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a00100d800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                           |
|  8.7% |   3.61s | 13,850 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  3.5% |   1.46s |  5,583 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.6% |   1.07s |  4,055 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.6% | 664.3ms |  2,601 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.9% | 358.2ms |  2,108 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.9% | 355.3ms |  1,275 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                         |
|  0.6% | 249.4ms |    750 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.6% | 239.5ms |  1,272 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.4% | 170.2ms |    651 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.4% | 151.6ms |    830 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                   |
|  0.3% | 138.8ms |    594 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)       |
|  0.3% | 130.2ms |    330 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.3% | 120.8ms |    781 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011f9cf0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.3% | 110.2ms |    538 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011f9cf0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.3% | 107.4ms |    598 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.2% |  93.6ms |    518 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|  0.2% |  84.7ms |    408 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                   |
|  0.2% |  71.3ms |    339 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011f9cf0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                       |

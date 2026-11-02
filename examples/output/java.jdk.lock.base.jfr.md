# Lock contention profile

Blocked 1.2ms over 13 contentions (93.2µs per contention).

| Category         |      % |  Time | Contentions |
| ---------------- | -----: | ----: | ----------: |
| Standard library | 100.0% | 1.2ms |          13 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 1.0ms (79.0%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 1.0ms (79.0%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       └── 1.0ms (79.0%) scan(ForkJoinPool$WorkQueue, int, int)
│           └── 1.0ms (79.0%) topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool$WorkQueue
│               └── 1.0ms (79.0%) doExec() at java.util.concurrent.ForkJoinTask
│                   └── … 1.0ms (79.0%) exec() at java.util.concurrent.RecursiveTask
│                       └── 1.0ms (79.0%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│                           └── 1.0ms (79.0%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│                               └── … 1.0ms (79.0%) computeClusterAverages() at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│                                   ├── 0.9ms (72.9%) average(List)
│                                   │   └── 0.9ms (72.9%) loadClass(String) at java.lang.ClassLoader
│                                   │       └── 0.9ms (72.9%) loadClass(String, boolean)
│                                   └── 0.1ms (6.1%) boxed(double[])
│                                       ├── 41.7µs (3.4%) stream(double[]) at java.util.Arrays
│                                       │   └── 41.7µs (3.4%) stream(double[], int, int)
│                                       │       └── 41.7µs (3.4%) doubleStream(Spliterator$OfDouble, boolean) at java.util.stream.StreamSupport
│                                       └── 32.5µs (2.7%) toArray(IntFunction) at java.util.stream.ReferencePipeline
│                                           └── 32.5µs (2.7%) evaluateToArrayNode(IntFunction) at java.util.stream.AbstractPipeline
│                                               └── 32.5µs (2.7%) evaluate(Spliterator, boolean, IntFunction)
│                                                   └── 32.5µs (2.7%) wrapAndCopyInto(Sink, Spliterator)
│                                                       └── 32.5µs (2.7%) wrapSink(Sink)
│                                                           └── 32.5µs (2.7%) opWrapSink(int, Sink) at java.util.stream.DoublePipeline$1
├── 0.3ms (20.7%) run() at java.lang.Thread
│   └── 0.3ms (20.7%) runWith(Object, Runnable)
│       ├── 0.2ms (19.9%) run() at org.renaissance.core.DirUtils$$Lambda.0x0000007001009000
│       │   └── 0.2ms (19.9%) lambda$createScratchDirectory$1(Path) at org.renaissance.core.DirUtils
│       │       └── 0.2ms (19.9%) deleteRecursively(Path)
│       │           └── 0.2ms (19.9%) deleteRecursively(Path, boolean)
│       │               └── 0.2ms (19.9%) loadClass(String) at java.lang.ClassLoader
│       │                   └── 0.2ms (19.9%) loadClass(String, boolean) at jdk.internal.loader.ClassLoaders$AppClassLoader
│       │                       └── 0.2ms (19.9%) loadClass(String, boolean) at jdk.internal.loader.BuiltinClassLoader
│       │                           └── 0.2ms (19.9%) loadClassOrNull(String, boolean)
│       └── 9.2µs (0.8%) run() at jdk.jfr.internal.PlatformRecorder$$Lambda.0x0000007001042ce0
│           └── 9.2µs (0.8%) lambda$startDiskMonitor$1() at jdk.jfr.internal.PlatformRecorder
│               └── 9.2µs (0.8%) periodicTask()
└── 3.8µs (0.3%) execute(String, String, char) at jdk.jfr.internal.dcmd.AbstractDCmd
    └── 3.8µs (0.3%) execute(ArgumentParser) at jdk.jfr.internal.dcmd.DCmdStart
        └── 3.8µs (0.3%) getId() at jdk.jfr.Recording
            └── 3.8µs (0.3%) getId() at jdk.jfr.internal.PlatformRecording
```

## Hottest functions

### Self time

Functions with the most time blocked within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |   Time | Contentions | Function                                      | Location                                 |
| ----: | -----: | ----------: | --------------------------------------------- | ---------------------------------------- |
| 72.9% |  0.9ms |           4 | `loadClass(String, boolean)`                  | `java.lang.ClassLoader`                  |
| 19.9% |  0.2ms |           1 | `loadClassOrNull(String, boolean)`            | `jdk.internal.loader.BuiltinClassLoader` |
|  3.4% | 41.7µs |           2 | `doubleStream(Spliterator$OfDouble, boolean)` | `java.util.stream.StreamSupport`         |
|  2.7% | 32.5µs |           4 | `opWrapSink(int, Sink)`                       | `java.util.stream.DoublePipeline$1`      |
|  0.8% |  9.2µs |           1 | `periodicTask()`                              | `jdk.jfr.internal.PlatformRecorder`      |
|  0.3% |  3.8µs |           1 | `getId()`                                     | `jdk.jfr.internal.PlatformRecording`     |

#### Lines

Lines with the largest contribution to each function's self time.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Location                    |
| -----: | ----: | ----------: | --------------------------- |
| 100.0% | 0.9ms |           4 | `java.lang.ClassLoader:573` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Location                                     |
| -----: | ----: | ----------: | -------------------------------------------- |
| 100.0% | 0.2ms |           1 | `jdk.internal.loader.BuiltinClassLoader:651` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

|      % |   Time | Contentions | Location                             |
| -----: | -----: | ----------: | ------------------------------------ |
| 100.0% | 41.7µs |           2 | `java.util.stream.StreamSupport:274` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

|      % |   Time | Contentions | Location                                |
| -----: | -----: | ----------: | --------------------------------------- |
| 100.0% | 32.5µs |           4 | `java.util.stream.DoublePipeline$1:173` |

##### `periodicTask()` (`jdk.jfr.internal.PlatformRecorder`)

|      % |  Time | Contentions | Location                                |
| -----: | ----: | ----------: | --------------------------------------- |
| 100.0% | 9.2µs |           1 | `jdk.jfr.internal.PlatformRecorder:526` |

##### `getId()` (`jdk.jfr.internal.PlatformRecording`)

|      % |  Time | Contentions | Location                                 |
| -----: | ----: | ----------: | ---------------------------------------- |
| 100.0% | 3.8µs |           1 | `jdk.jfr.internal.PlatformRecording:433` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Caller              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 0.9ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Caller                       | Location                                 |
| -----: | ----: | ----------: | ---------------------------- | ---------------------------------------- |
| 100.0% | 0.2ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

|      % |   Time | Contentions | Caller                       | Location           |
| -----: | -----: | ----------: | ---------------------------- | ------------------ |
| 100.0% | 41.7µs |           2 | `stream(double[], int, int)` | `java.util.Arrays` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

|      % |   Time | Contentions | Caller           | Location                            |
| -----: | -----: | ----------: | ---------------- | ----------------------------------- |
| 100.0% | 32.5µs |           4 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `periodicTask()` (`jdk.jfr.internal.PlatformRecorder`)

|      % |  Time | Contentions | Caller                        | Location                            |
| -----: | ----: | ----------: | ----------------------------- | ----------------------------------- |
| 100.0% | 9.2µs |           1 | `lambda$startDiskMonitor$1()` | `jdk.jfr.internal.PlatformRecorder` |

##### `getId()` (`jdk.jfr.internal.PlatformRecording`)

|      % |  Time | Contentions | Caller    | Location            |
| -----: | ----: | ----------: | --------- | ------------------- |
| 100.0% | 3.8µs |           1 | `getId()` | `jdk.jfr.Recording` |

### Total time

Functions with the most time blocked within the function and its callees.

|     % |  Time | Contentions | Function                                             | Location                                               |
| ----: | ----: | ----------: | ---------------------------------------------------- | ------------------------------------------------------ |
| 92.8% | 1.1ms |           5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                                |
| 79.0% | 1.0ms |          10 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 79.0% | 1.0ms |          10 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 79.0% | 1.0ms |          10 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |
| 79.0% | 1.0ms |          10 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                   |
| 79.0% | 1.0ms |          10 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                    |
| 79.0% | 1.0ms |          10 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
| 79.0% | 1.0ms |          10 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                    |
| 79.0% | 1.0ms |          10 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                    |
| 79.0% | 1.0ms |          10 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`            |
| 72.9% | 0.9ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                                |
| 72.9% | 0.9ms |           4 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 41.0% | 0.5ms |           7 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
| 41.0% | 0.5ms |           7 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                    |
| 41.0% | 0.5ms |           7 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                    |
| 20.7% | 0.3ms |           2 | `runWith(Object, Runnable)`                          | `java.lang.Thread`                                     |
| 20.7% | 0.3ms |           2 | `run()`                                              | `java.lang.Thread`                                     |
| 19.9% | 0.2ms |           1 | `loadClassOrNull(String, boolean)`                   | `jdk.internal.loader.BuiltinClassLoader`               |
| 19.9% | 0.2ms |           1 | `loadClass(String, boolean)`                         | `jdk.internal.loader.BuiltinClassLoader`               |
| 19.9% | 0.2ms |           1 | `loadClass(String, boolean)`                         | `jdk.internal.loader.ClassLoaders$AppClassLoader`      |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |   Time | Contentions | Function                                             | Location                                          |
| ----: | -----: | ----------: | ---------------------------------------------------- | ------------------------------------------------- |
| 92.8% |  1.1ms |           5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                           |
| 79.0% |  1.0ms |          10 | `exec()`                                             | `java.util.concurrent.RecursiveTask`              |
| 79.0% |  1.0ms |          10 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`               |
| 79.0% |  1.0ms |          10 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`     |
| 79.0% |  1.0ms |          10 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`               |
| 79.0% |  1.0ms |          10 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`               |
| 79.0% |  1.0ms |          10 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`       |
| 72.9% |  0.9ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                           |
| 41.0% |  0.5ms |           7 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`     |
| 41.0% |  0.5ms |           7 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`               |
| 41.0% |  0.5ms |           7 | `join()`                                             | `java.util.concurrent.ForkJoinTask`               |
| 20.7% |  0.3ms |           2 | `runWith(Object, Runnable)`                          | `java.lang.Thread`                                |
| 20.7% |  0.3ms |           2 | `run()`                                              | `java.lang.Thread`                                |
| 19.9% |  0.2ms |           1 | `loadClassOrNull(String, boolean)`                   | `jdk.internal.loader.BuiltinClassLoader`          |
| 19.9% |  0.2ms |           1 | `loadClass(String, boolean)`                         | `jdk.internal.loader.BuiltinClassLoader`          |
| 19.9% |  0.2ms |           1 | `loadClass(String, boolean)`                         | `jdk.internal.loader.ClassLoaders$AppClassLoader` |
|  3.4% | 41.7µs |           2 | `doubleStream(Spliterator$OfDouble, boolean)`        | `java.util.stream.StreamSupport`                  |
|  3.4% | 41.7µs |           2 | `stream(double[], int, int)`                         | `java.util.Arrays`                                |
|  3.4% | 41.7µs |           2 | `stream(double[])`                                   | `java.util.Arrays`                                |
|  2.7% | 32.5µs |           4 | `opWrapSink(int, Sink)`                              | `java.util.stream.DoublePipeline$1`               |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `loadClass(String)` (`java.lang.ClassLoader`)

|     % |  Time | Contentions | Caller                             | Location                                               |
| ----: | ----: | ----------: | ---------------------------------- | ------------------------------------------------------ |
| 78.6% | 0.9ms |           4 | `average(List)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 21.4% | 0.2ms |           1 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils`                        |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Caller              | Location                                               |
| -----: | ----: | ----------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 1.0ms |          10 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Caller              | Location                                               |
| -----: | ----: | ----------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 1.0ms |          10 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% | 1.0ms |          10 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |  Time | Contentions | Caller   | Location                             |
| -----: | ----: | ----------: | -------- | ------------------------------------ |
| 100.0% | 1.0ms |          10 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |  Time | Contentions | Caller     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 1.0ms |          10 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Caller                                               | Location                                      |
| -----: | ----: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 1.0ms |          10 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  51.9% | 0.5ms |           7 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|   0.9% | 8.5µs |           2 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Caller                                   | Location                            |
| -----: | ----: | ----------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 1.0ms |          10 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Caller                              | Location                            |
| -----: | ----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 1.0ms |          10 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Caller  | Location                                    |
| -----: | ----: | ----------: | ------- | ------------------------------------------- |
| 100.0% | 1.0ms |          10 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Caller              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 0.9ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Caller                     | Location                                               |
| -----: | ----: | ----------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 0.9ms |           4 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Caller                 | Location                            |
| -----: | ----: | ----------: | ---------------------- | ----------------------------------- |
| 100.0% | 0.5ms |           7 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Caller   | Location                            |
| -----: | ----: | ----------: | -------- | ----------------------------------- |
| 100.0% | 0.5ms |           7 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Caller      | Location                                               |
| -----: | ----: | ----------: | ----------- | ------------------------------------------------------ |
| 100.0% | 0.5ms |           7 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Caller  | Location           |
| -----: | ----: | ----------: | ------- | ------------------ |
| 100.0% | 0.3ms |           2 | `run()` | `java.lang.Thread` |

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

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

|      % |   Time | Contentions | Caller                       | Location           |
| -----: | -----: | ----------: | ---------------------------- | ------------------ |
| 100.0% | 41.7µs |           2 | `stream(double[], int, int)` | `java.util.Arrays` |

##### `stream(double[], int, int)` (`java.util.Arrays`)

|      % |   Time | Contentions | Caller             | Location           |
| -----: | -----: | ----------: | ------------------ | ------------------ |
| 100.0% | 41.7µs |           2 | `stream(double[])` | `java.util.Arrays` |

##### `stream(double[])` (`java.util.Arrays`)

|      % |   Time | Contentions | Caller            | Location                                               |
| -----: | -----: | ----------: | ----------------- | ------------------------------------------------------ |
| 100.0% | 41.7µs |           2 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

|      % |   Time | Contentions | Caller           | Location                            |
| -----: | -----: | ----------: | ---------------- | ----------------------------------- |
| 100.0% | 32.5µs |           4 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `loadClass(String)` (`java.lang.ClassLoader`)

|     % |  Time | Contentions | Callee                       | Location                                          |
| ----: | ----: | ----------: | ---------------------------- | ------------------------------------------------- |
| 78.6% | 0.9ms |           4 | `loadClass(String, boolean)` | `java.lang.ClassLoader`                           |
| 21.4% | 0.2ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % |  Time | Contentions | Callee            | Location                                               |
| ----: | ----: | ----------: | ----------------- | ------------------------------------------------------ |
| 92.2% | 0.9ms |           4 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  7.8% | 0.1ms |           6 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Callee                     | Location                                               |
| -----: | ----: | ----------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 1.0ms |          10 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% | 1.0ms |          10 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |  Time | Contentions | Callee              | Location                                               |
| -----: | ----: | ----------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 1.0ms |          10 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  51.9% | 0.5ms |           7 | `join()`            | `java.util.concurrent.ForkJoinTask`                    |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |  Time | Contentions | Callee      | Location                                               |
| -----: | ----: | ----------: | ----------- | ------------------------------------------------------ |
| 100.0% | 1.0ms |          10 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee   | Location                                            |
| -----: | ----: | ----------: | -------- | --------------------------------------------------- |
| 100.0% | 1.0ms |          10 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|   0.9% | 8.5µs |           2 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 1.0ms |          10 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Callee                                               | Location                                      |
| -----: | ----: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 1.0ms |          10 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Callee                                   | Location                            |
| -----: | ----: | ----------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 1.0ms |          10 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % |  Time | Contentions | Callee                              | Location                            |
| -----: | ----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 1.0ms |          10 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Callee              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 0.9ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 0.5ms |           7 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee                                    | Location                                      |
| -----: | ----: | ----------: | ----------------------------------------- | --------------------------------------------- |
| 100.0% | 0.5ms |           7 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee                 | Location                            |
| -----: | ----: | ----------: | ---------------------- | ----------------------------------- |
| 100.0% | 0.5ms |           7 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|     % |  Time | Contentions | Callee  | Location                                                       |
| ----: | ----: | ----------: | ------- | -------------------------------------------------------------- |
| 96.3% | 0.2ms |           1 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x0000007001009000`     |
|  3.7% | 9.2µs |           1 | `run()` | `jdk.jfr.internal.PlatformRecorder$$Lambda.0x0000007001042ce0` |

##### `run()` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 0.3ms |           2 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Callee                             | Location                                 |
| -----: | ----: | ----------: | ---------------------------------- | ---------------------------------------- |
| 100.0% | 0.2ms |           1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`)

|      % |  Time | Contentions | Callee                       | Location                                 |
| -----: | ----: | ----------: | ---------------------------- | ---------------------------------------- |
| 100.0% | 0.2ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `stream(double[], int, int)` (`java.util.Arrays`)

|      % |   Time | Contentions | Callee                                        | Location                         |
| -----: | -----: | ----------: | --------------------------------------------- | -------------------------------- |
| 100.0% | 41.7µs |           2 | `doubleStream(Spliterator$OfDouble, boolean)` | `java.util.stream.StreamSupport` |

##### `stream(double[])` (`java.util.Arrays`)

|      % |   Time | Contentions | Callee                       | Location           |
| -----: | -----: | ----------: | ---------------------------- | ------------------ |
| 100.0% | 41.7µs |           2 | `stream(double[], int, int)` | `java.util.Arrays` |

## Hottest call stacks

Call stacks with the most time blocked in their leaf frame.

|     % |   Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----: | -----: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 36.8% |  0.4ms |           2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 36.1% |  0.4ms |           2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 19.9% |  0.2ms |           1 | `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String)` (`java.lang.ClassLoader`) ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001009000`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  3.4% | 41.7µs |           2 | `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`) ← `stream(double[], int, int)` (`java.util.Arrays`) ← `stream(double[])` ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.2% | 14.8µs |           1 | `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`) ← `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.8% |  9.2µs |           1 | `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`) ← `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.8% |  9.2µs |           1 | `periodicTask()` (`jdk.jfr.internal.PlatformRecorder`) ← `lambda$startDiskMonitor$1()` ← `run()` (`jdk.jfr.internal.PlatformRecorder$$Lambda.0x0000007001042ce0`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.7% |  8.5µs |           2 | `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`) ← `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d7aa8`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|  0.3% |  3.8µs |           1 | `getId()` (`jdk.jfr.internal.PlatformRecording`) ← `getId()` (`jdk.jfr.Recording`) ← `execute(ArgumentParser)` (`jdk.jfr.internal.dcmd.DCmdStart`) ← `execute(String, String, char)` (`jdk.jfr.internal.dcmd.AbstractDCmd`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

# Thread park profile

Parked 40.76s over 72,057 parks (565.6µs per park).

| Category         |      % |   Time |  Parks |
| ---------------- | -----: | -----: | -----: |
| Standard library | 100.0% | 40.76s | 72,057 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 34.24s (84.0%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 34.24s (84.0%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       ├── 23.85s (58.5%) awaitWork(ForkJoinPool$WorkQueue)
│       │   ├── 22.39s (54.9%) park() at java.util.concurrent.locks.LockSupport
│       │   │   └── 22.39s (54.9%, self 100.0% globally) park(boolean, long) at jdk.internal.misc.Unsafe
│       │   └── 1.45s (3.6%) parkUntil(long) at java.util.concurrent.locks.LockSupport
│       │       └── 1.45s (3.6%) park(boolean, long) at jdk.internal.misc.Unsafe
│       └── 10.40s (25.5%) scan(ForkJoinPool$WorkQueue, int, int)
│           └── 10.40s (25.5%) topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool$WorkQueue
│               └── 10.40s (25.5%) doExec() at java.util.concurrent.ForkJoinTask
│                   └── … 10.40s (25.5%) exec() at java.util.concurrent.RecursiveTask
│                       └── 10.40s (25.5%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│                           └── 10.40s (25.5%) join() at java.util.concurrent.ForkJoinTask
│                               └── 10.40s (25.5%) awaitDone(int, long)
│                                   └── 10.40s (25.5%) park() at java.util.concurrent.locks.LockSupport
│                                       └── 10.40s (25.5%) park(boolean, long) at jdk.internal.misc.Unsafe
└── … 6.52s (16.0%) invoke(Object, Object[]) at jdk.internal.reflect.DirectMethodHandleAccessor
    └── 6.52s (16.0%) invokeImpl(Object, Object[])
        └── 6.52s (16.0%) invokeExact_MT(Object, Object, Object, Object) at java.lang.invoke.Invokers$Holder
            └── 6.52s (16.0%) invoke(Object, Object, Object) at java.lang.invoke.LambdaForm$MH.0x000000700100d800
                └── 6.52s (16.0%) invokeStatic(Object, Object) at java.lang.invoke.LambdaForm$DMH.0x0000007001001800
                    └── 6.52s (16.0%) main(String[]) at org.renaissance.harness.RenaissanceSuite
                        └── 6.52s (16.0%) main(String[]) at org.renaissance.harness.RenaissanceSuite$
                            └── 6.52s (16.0%) runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)
                                └── 6.52s (16.0%) foreach(Function1) at scala.collection.immutable.List
                                    └── 6.52s (16.0%) apply(Object) at scala.runtime.function.JProcedure1
                                        └── … 6.52s (16.0%) applyVoid(Object) at org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011545f0
                                            └── 6.52s (16.0%) runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor) at org.renaissance.harness.RenaissanceSuite$
                                                └── 6.52s (16.0%) executeBenchmark() at org.renaissance.harness.ExecutionDriver
                                                    └── 6.52s (16.0%) executeOperation(int)
                                                        └── 6.52s (16.0%) run(BenchmarkContext) at org.renaissance.jdk.concurrent.FjKmeans
                                                            └── 6.52s (16.0%) map(Function1) at scala.collection.immutable.Range
                                                                └── 6.52s (16.0%) apply(Object) at org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011d3668
                                                                    └── 6.52s (16.0%) $anonfun$adapted$1(Object) at org.renaissance.jdk.concurrent.FjKmeans
                                                                        └── 6.52s (16.0%) $anonfun$1(int)
                                                                            └── 6.52s (16.0%) run(int, List, int) at org.renaissance.jdk.concurrent.JavaKMeans
                                                                                └── 6.52s (16.0%) get() at java.util.concurrent.ForkJoinTask
                                                                                    └── 6.52s (16.0%) awaitDone(int, long)
                                                                                        └── 6.52s (16.0%) park() at java.util.concurrent.locks.LockSupport
                                                                                            └── 6.52s (16.0%) park(boolean, long) at jdk.internal.misc.Unsafe
```

## Hottest functions

### Self time

Functions with the most time parked within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|      % |   Time |  Parks | Function              | Location                   |
| -----: | -----: | -----: | --------------------- | -------------------------- |
| 100.0% | 40.76s | 72,057 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % |   Time |  Parks | Caller                    | Location                                 |
| ----: | -----: | -----: | ------------------------- | ---------------------------------------- |
| 96.4% | 39.30s | 68,084 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
|  3.6% |  1.45s |  3,972 | `parkUntil(long)`         | `java.util.concurrent.locks.LockSupport` |
| <0.1% |  0.1ms |      1 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

### Total time

Functions with the most time parked within the function and its callees.

|      % |   Time |  Parks | Function                                                                                                               | Location                                                               |
| -----: | -----: | -----: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% | 40.76s | 72,057 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                             |
|  96.4% | 39.30s | 68,084 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                               |
|  84.0% | 34.24s | 72,040 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
|  84.0% | 34.24s | 72,040 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                            |
|  58.5% | 23.85s | 28,604 | `awaitWork(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
|  41.5% | 16.91s | 43,452 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
|  25.5% | 10.40s | 43,436 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                    |
|  25.5% | 10.40s | 43,436 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  25.5% | 10.40s | 43,436 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                                   |
|  25.5% | 10.40s | 43,436 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
|  25.5% | 10.40s | 43,436 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  25.5% | 10.40s | 43,436 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                                    |
|  16.0% |  6.52s |     17 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  16.0% |  6.52s |     17 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  16.0% |  6.52s |     17 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011545f0` |
|  16.0% |  6.52s |     17 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
|  16.0% |  6.52s |     17 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  16.0% |  6.52s |     17 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  16.0% |  6.52s |     17 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  16.0% |  6.52s |     17 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|      % |   Time |  Parks | Function                                             | Location                                             |
| -----: | -----: | -----: | ---------------------------------------------------- | ---------------------------------------------------- |
| 100.0% | 40.76s | 72,057 | `park(boolean, long)`                                | `jdk.internal.misc.Unsafe`                           |
|  96.4% | 39.30s | 68,084 | `park()`                                             | `java.util.concurrent.locks.LockSupport`             |
|  84.0% | 34.24s | 72,040 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
|  84.0% | 34.24s | 72,040 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`          |
|  58.5% | 23.85s | 28,604 | `awaitWork(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
|  41.5% | 16.91s | 43,452 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                  |
|  25.5% | 10.40s | 43,436 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                  |
|  25.5% | 10.40s | 43,436 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                 |
|  25.5% | 10.40s | 43,436 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                  |
|  25.5% | 10.40s | 43,436 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  25.5% | 10.40s | 43,436 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                  |
|  16.0% |  6.52s |     17 | `apply(Object)`                                      | `scala.runtime.function.JProcedure1`                 |
|  16.0% |  6.52s |     17 | `foreach(Function1)`                                 | `scala.collection.immutable.List`                    |
|  16.0% |  6.52s |     17 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000007001001800` |
|  16.0% |  6.52s |     17 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x000000700100d800`  |
|  16.0% |  6.52s |     17 | `invokeExact_MT(Object, Object, Object, Object)`     | `java.lang.invoke.Invokers$Holder`                   |
|  16.0% |  6.52s |     17 | `invokeImpl(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  16.0% |  6.52s |     17 | `invoke(Object, Object[])`                           | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  16.0% |  6.52s |     17 | `invoke(Object, Object[])`                           | `java.lang.reflect.Method`                           |
|  16.0% |  6.52s |     16 | `get()`                                              | `java.util.concurrent.ForkJoinTask`                  |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % |   Time |  Parks | Caller                    | Location                                 |
| ----: | -----: | -----: | ------------------------- | ---------------------------------------- |
| 96.4% | 39.30s | 68,084 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
|  3.6% |  1.45s |  3,972 | `parkUntil(long)`         | `java.util.concurrent.locks.LockSupport` |
| <0.1% |  0.1ms |      1 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|     % |   Time |  Parks | Caller                              | Location                            |
| ----: | -----: | -----: | ----------------------------------- | ----------------------------------- |
| 57.0% | 22.39s | 24,632 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |
| 43.0% | 16.91s | 43,452 | `awaitDone(int, long)`              | `java.util.concurrent.ForkJoinTask` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |   Time |  Parks | Caller  | Location                                    |
| -----: | -----: | -----: | ------- | ------------------------------------------- |
| 100.0% | 34.24s | 72,040 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |   Time |  Parks | Caller                              | Location                            |
| -----: | -----: | -----: | ----------------------------------- | ----------------------------------- |
| 100.0% | 23.85s | 28,604 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % |   Time |  Parks | Caller   | Location                            |
| ----: | -----: | -----: | -------- | ----------------------------------- |
| 61.5% | 10.40s | 43,436 | `join()` | `java.util.concurrent.ForkJoinTask` |
| 38.5% |  6.52s |     16 | `get()`  | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time |  Parks | Caller      | Location                                               |
| -----: | -----: | -----: | ----------- | ------------------------------------------------------ |
| 100.0% | 10.40s | 43,436 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |   Time |  Parks | Caller   | Location                             |
| -----: | -----: | -----: | -------- | ------------------------------------ |
| 100.0% | 10.40s | 43,436 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |   Time |  Parks | Caller     | Location                            |
| -----: | -----: | -----: | ---------- | ----------------------------------- |
| 100.0% | 10.40s | 43,436 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time |  Parks | Caller                                                    | Location                                      |
| -----: | -----: | -----: | --------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 10.40s | 43,436 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  54.2% |  5.63s | 26,043 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  25.9% |  2.70s | 15,494 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  18.6% |  1.94s |  9,263 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |   Time |  Parks | Caller                                   | Location                            |
| -----: | -----: | -----: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 10.40s | 43,436 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |   Time |  Parks | Caller                              | Location                            |
| -----: | -----: | -----: | ----------------------------------- | ----------------------------------- |
| 100.0% | 10.40s | 43,436 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|      % |  Time | Parks | Caller                                                                                                                 | Location                                    |
| -----: | ----: | ----: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 6.52s |    17 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Parks | Caller              | Location                                                               |
| -----: | ----: | ----: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 6.52s |    17 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011545f0` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011545f0`)

|      % |  Time | Parks | Caller          | Location                             |
| -----: | ----: | ----: | --------------- | ------------------------------------ |
| 100.0% | 6.52s |    17 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|      % |  Time | Parks | Caller               | Location                             |
| -----: | ----: | ----: | -------------------- | ------------------------------------ |
| 100.0% | 6.52s |    17 | `apply(Object)`      | `scala.runtime.function.JProcedure1` |
| 100.0% | 6.52s |    17 | `foreach(Function1)` | `scala.collection.immutable.List`    |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |  Time | Parks | Caller                                                                        | Location                                    |
| -----: | ----: | ----: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 6.52s |    17 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Parks | Caller           | Location                                    |
| -----: | ----: | ----: | ---------------- | ------------------------------------------- |
| 100.0% | 6.52s |    17 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Parks | Caller           | Location                                   |
| -----: | ----: | ----: | ---------------- | ------------------------------------------ |
| 100.0% | 6.52s |    17 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |  Time | Parks | Caller                         | Location                                             |
| -----: | ----: | ----: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 6.52s |    17 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001800` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001800`)

|      % |  Time | Parks | Caller                           | Location                                            |
| -----: | ----: | ----: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 6.52s |    17 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700100d800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700100d800`)

|      % |  Time | Parks | Caller                                           | Location                           |
| -----: | ----: | ----: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 6.52s |    17 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |  Time | Parks | Caller                         | Location                                          |
| -----: | ----: | ----: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 6.52s |    17 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |  Time | Parks | Caller                     | Location                                          |
| -----: | ----: | ----: | -------------------------- | ------------------------------------------------- |
| 100.0% | 6.52s |    17 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |  Time | Parks | Caller                     | Location                   |
| -----: | ----: | ----: | -------------------------- | -------------------------- |
| 100.0% | 6.52s |    17 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |  Time | Parks | Caller                                                      | Location                        |
| -----: | ----: | ----: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% | 6.52s |    17 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Parks | Caller                | Location                                    |
| -----: | ----: | ----: | --------------------- | ------------------------------------------- |
| 100.0% | 6.52s |    16 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % |   Time |  Parks | Callee                | Location                   |
| -----: | -----: | -----: | --------------------- | -------------------------- |
| 100.0% | 39.30s | 68,084 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % |   Time |  Parks | Callee                                   | Location                            |
| ----: | -----: | -----: | ---------------------------------------- | ----------------------------------- |
| 69.6% | 23.85s | 28,604 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |
| 30.4% | 10.40s | 43,436 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % |   Time |  Parks | Callee                              | Location                            |
| -----: | -----: | -----: | ----------------------------------- | ----------------------------------- |
| 100.0% | 34.24s | 72,040 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % |   Time |  Parks | Callee            | Location                                 |
| ----: | -----: | -----: | ----------------- | ---------------------------------------- |
| 93.9% | 22.39s | 24,632 | `park()`          | `java.util.concurrent.locks.LockSupport` |
|  6.1% |  1.45s |  3,972 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time |  Parks | Callee                                                    | Location                                      |
| -----: | -----: | -----: | --------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 16.91s | 43,452 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
|  33.3% |  5.63s | 26,043 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  16.0% |  2.70s | 15,494 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time |  Parks | Callee                 | Location                            |
| -----: | -----: | -----: | ---------------------- | ----------------------------------- |
| 100.0% | 10.40s | 43,436 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |   Time |  Parks | Callee              | Location                                               |
| -----: | -----: | -----: | ------------------- | ------------------------------------------------------ |
| 100.0% | 10.40s | 43,436 | `join()`            | `java.util.concurrent.ForkJoinTask`                    |
|  13.8% |  1.43s |  6,342 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |   Time |  Parks | Callee      | Location                                               |
| -----: | -----: | -----: | ----------- | ------------------------------------------------------ |
| 100.0% | 10.40s | 43,436 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |    Time |  Parks | Callee   | Location                                            |
| -----: | ------: | -----: | -------- | --------------------------------------------------- |
| 100.0% |  10.40s | 43,436 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|   7.0% | 731.8ms |  4,250 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |   Time |  Parks | Callee     | Location                            |
| -----: | -----: | -----: | ---------- | ----------------------------------- |
| 100.0% | 10.40s | 43,436 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |   Time |  Parks | Callee                                               | Location                                      |
| -----: | -----: | -----: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 10.40s | 43,436 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|      % |  Time | Parks | Callee                               | Location                                  |
| -----: | ----: | ----: | ------------------------------------ | ----------------------------------------- |
| 100.0% | 6.52s |    16 | `executeOperation(int)`              | `org.renaissance.harness.ExecutionDriver` |
|  <0.1% | 0.1ms |     1 | `tearDownAfterAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Parks | Callee               | Location                                  |
| -----: | ----: | ----: | -------------------- | ----------------------------------------- |
| 100.0% | 6.52s |    17 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011545f0`)

|      % |  Time | Parks | Callee                                                                                                                 | Location                                    |
| -----: | ----: | ----: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 6.52s |    17 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|      % |  Time | Parks | Callee              | Location                                                               |
| -----: | ----: | ----: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 6.52s |    17 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011545f0` |
| 100.0% | 6.52s |    17 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |  Time | Parks | Callee          | Location                             |
| -----: | ----: | ----: | --------------- | ------------------------------------ |
| 100.0% | 6.52s |    17 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Parks | Callee               | Location                          |
| -----: | ----: | ----: | -------------------- | --------------------------------- |
| 100.0% | 6.52s |    17 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Parks | Callee                                                                        | Location                                    |
| -----: | ----: | ----: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 6.52s |    17 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |  Time | Parks | Callee           | Location                                    |
| -----: | ----: | ----: | ---------------- | ------------------------------------------- |
| 100.0% | 6.52s |    17 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001800`)

|      % |  Time | Parks | Callee           | Location                                   |
| -----: | ----: | ----: | ---------------- | ------------------------------------------ |
| 100.0% | 6.52s |    17 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700100d800`)

|      % |  Time | Parks | Callee                         | Location                                             |
| -----: | ----: | ----: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 6.52s |    17 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001800` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |  Time | Parks | Callee                           | Location                                            |
| -----: | ----: | ----: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 6.52s |    17 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700100d800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |  Time | Parks | Callee                                           | Location                           |
| -----: | ----: | ----: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 6.52s |    17 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |  Time | Parks | Callee                         | Location                                          |
| -----: | ----: | ----: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 6.52s |    17 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |  Time | Parks | Callee                     | Location                                          |
| -----: | ----: | ----: | -------------------------- | ------------------------------------------------- |
| 100.0% | 6.52s |    17 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Parks | Callee                 | Location                            |
| -----: | ----: | ----: | ---------------------- | ----------------------------------- |
| 100.0% | 6.52s |    16 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

## Hottest call stacks

Call stacks with the most time parked in their leaf frame.

|     % |    Time |  Parks | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----: | ------: | -----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 54.9% |  22.39s | 24,632 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 16.0% |   6.52s |     16 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011d3668`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011545f0`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700100d800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                           |
|  9.5% |   3.86s | 13,320 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  3.6% |   1.45s |  3,972 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  3.5% |   1.42s |  5,177 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.5% | 619.0ms |  2,373 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.0% | 388.8ms |  2,012 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.8% | 308.6ms |  1,205 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                         |
|  0.7% | 281.7ms |    770 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.6% | 243.0ms |  1,249 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.4% | 180.6ms |    599 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.3% | 140.9ms |    628 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.3% | 134.9ms |    735 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                   |
|  0.3% | 134.3ms |    550 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)       |
|  0.3% | 130.7ms |    756 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d7aa8`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.3% | 120.1ms |    574 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d7aa8`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.3% | 112.9ms |    294 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.2% |  87.0ms |    483 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|  0.2% |  71.3ms |    397 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                   |
|  0.2% |  68.4ms |    306 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d7aa8`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                       |

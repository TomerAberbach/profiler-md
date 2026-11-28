# Lock contention profile diff

Blocked 1.2ms → 1.1ms (-0.15ms, -12.1%) over 13 → 6 contentions (93.2µs → 177.5µs per contention).

| Category         | Change |   Delta |              % |          Time | Contentions |
| ---------------- | -----: | ------: | -------------: | ------------: | ----------: |
| Standard library | -13.3% | -0.16ms | 100.0% → 98.5% | 1.2ms → 1.0ms |      13 → 5 |
| Ours             |    new | +0.02ms |    0.0% → 1.5% |  0ms → 15.6µs |       0 → 1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 1.0ms → 0.8ms (79.0% → 77.8%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 1.0ms → 0.8ms (79.0% → 77.8%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       └── 1.0ms → 0.8ms (79.0% → 77.8%) scan(ForkJoinPool$WorkQueue, int, int)
│           └── 1.0ms → 0.8ms (79.0% → 77.8%) topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool$WorkQueue
│               └── 1.0ms → 0.8ms (79.0% → 77.8%) doExec() at java.util.concurrent.ForkJoinTask
│                   └── … 1.0ms → 0.8ms (79.0% → 77.8%) exec() at java.util.concurrent.RecursiveTask
│                       └── 1.0ms → 0.8ms (79.0% → 77.8%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│                           └── 1.0ms → 0.8ms (79.0% → 77.8%) computeDirectly(): Object at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│                               └── 1.0ms → 0.8ms (79.0% → 77.8%) computeDirectly(): Map
│                                   └── 1.0ms → 0.8ms (79.0% → 77.8%) computeClusterAverages()
│                                       ├── 0.9ms → 0.8ms (72.9% → 77.8%, self 0.0% → 1.5%) average(List)
│                                       │   └── 0.9ms → 0.8ms (72.9% → 76.3%) loadClass(String) at java.lang.ClassLoader
│                                       │       └── 0.9ms → 0.8ms (72.9% → 76.3%) loadClass(String, boolean)
│                                       └── 0.1ms → 0ms (6.1% → 0.0%) boxed(double[])
│                                           ├── 41.7µs → 0ms (3.4% → 0.0%) stream(double[]) at java.util.Arrays
│                                           │   └── 41.7µs → 0ms (3.4% → 0.0%) stream(double[], int, int)
│                                           │       └── 41.7µs → 0ms (3.4% → 0.0%) doubleStream(Spliterator$OfDouble, boolean) at java.util.stream.StreamSupport
│                                           └── 32.5µs → 0ms (2.7% → 0.0%) toArray(IntFunction) at java.util.stream.ReferencePipeline
│                                               └── 32.5µs → 0ms (2.7% → 0.0%) evaluateToArrayNode(IntFunction) at java.util.stream.AbstractPipeline
│                                                   └── 32.5µs → 0ms (2.7% → 0.0%) evaluate(Spliterator, boolean, IntFunction)
│                                                       └── 32.5µs → 0ms (2.7% → 0.0%) wrapAndCopyInto(Sink, Spliterator)
│                                                           └── 32.5µs → 0ms (2.7% → 0.0%) wrapSink(Sink)
│                                                               └── 32.5µs → 0ms (2.7% → 0.0%) opWrapSink(int, Sink) at java.util.stream.DoublePipeline$1
├── 0.3ms → 0.2ms (20.7% → 22.2%) run() at java.lang.Thread
│   └── 0.3ms → 0.2ms (20.7% → 22.2%) runWith(Object, Runnable)
│       ├── 0.2ms (19.9% → 22.2%) run() at org.renaissance.core.DirUtils$$Lambda.0x000000a001009000
│       │   └── 0.2ms (19.9% → 22.2%) lambda$createScratchDirectory$1(Path) at org.renaissance.core.DirUtils
│       │       └── 0.2ms (19.9% → 22.2%) deleteRecursively(Path)
│       │           └── 0.2ms (19.9% → 22.2%) deleteRecursively(Path, boolean)
│       │               └── 0.2ms (19.9% → 22.2%) loadClass(String) at java.lang.ClassLoader
│       │                   └── 0.2ms (19.9% → 22.2%) loadClass(String, boolean) at jdk.internal.loader.ClassLoaders$AppClassLoader
│       │                       └── 0.2ms (19.9% → 22.2%) loadClass(String, boolean) at jdk.internal.loader.BuiltinClassLoader
│       │                           └── 0.2ms (19.9% → 22.2%) loadClassOrNull(String, boolean)
│       └── 9.2µs → 0ms (0.8% → 0.0%) run() at jdk.jfr.internal.PlatformRecorder$$Lambda.0x0000007001042ce0
│           └── 9.2µs → 0ms (0.8% → 0.0%) lambda$startDiskMonitor$1() at jdk.jfr.internal.PlatformRecorder
│               └── 9.2µs → 0ms (0.8% → 0.0%) periodicTask()
└── 3.8µs → 0ms (0.3% → 0.0%) execute(String, String, char) at jdk.jfr.internal.dcmd.AbstractDCmd
    └── 3.8µs → 0ms (0.3% → 0.0%) execute(ArgumentParser) at jdk.jfr.internal.dcmd.DCmdStart
        └── 3.8µs → 0ms (0.3% → 0.0%) getId() at jdk.jfr.Recording
            └── 3.8µs → 0ms (0.3% → 0.0%) getId() at jdk.jfr.internal.PlatformRecording
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Ours

| Change |   Delta |           % |         Time | Contentions | Function        | Location                                               |
| -----: | ------: | ----------: | -----------: | ----------: | --------------- | ------------------------------------------------------ |
|    new | +0.02ms | 0.0% → 1.5% | 0ms → 15.6µs |       0 → 1 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

#### Improvements

Functions with the largest decrease in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

|  Change |   Delta |             % |          Time | Contentions | Function                                      | Location                                 |
| ------: | ------: | ------------: | ------------: | ----------: | --------------------------------------------- | ---------------------------------------- |
|   -7.9% | -0.07ms | 72.9% → 76.3% | 0.9ms → 0.8ms |           4 | `loadClass(String, boolean)`                  | `java.lang.ClassLoader`                  |
| removed | -0.04ms |   3.4% → 0.0% |  41.7µs → 0ms |       2 → 0 | `doubleStream(Spliterator$OfDouble, boolean)` | `java.util.stream.StreamSupport`         |
| removed | -0.03ms |   2.7% → 0.0% |  32.5µs → 0ms |       4 → 0 | `opWrapSink(int, Sink)`                       | `java.util.stream.DoublePipeline$1`      |
| removed | -0.01ms |   0.8% → 0.0% |   9.2µs → 0ms |       1 → 0 | `periodicTask()`                              | `jdk.jfr.internal.PlatformRecorder`      |
|   -1.8% | -4.42µs | 19.9% → 22.2% |         0.2ms |           1 | `loadClassOrNull(String, boolean)`            | `jdk.internal.loader.BuiltinClassLoader` |
| removed | -3.83µs |   0.3% → 0.0% |   3.8µs → 0ms |       1 → 0 | `getId()`                                     | `jdk.jfr.internal.PlatformRecording`     |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |             % |         Time | Contentions | Location                                                   |
| -----: | ------: | ------------: | -----------: | ----------: | ---------------------------------------------------------- |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 15.6µs |       0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:332` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

| Change |   Delta |      % |          Time | Contentions | Location                    |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------- |
|  -7.9% | -0.07ms | 100.0% | 0.9ms → 0.8ms |           4 | `java.lang.ClassLoader:573` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

|  Change |   Delta |             % |         Time | Contentions | Location                             |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------------ |
| removed | -0.04ms | 100.0% → 0.0% | 41.7µs → 0ms |       2 → 0 | `java.util.stream.StreamSupport:274` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

|  Change |   Delta |             % |         Time | Contentions | Location                                |
| ------: | ------: | ------------: | -----------: | ----------: | --------------------------------------- |
| removed | -0.03ms | 100.0% → 0.0% | 32.5µs → 0ms |       4 → 0 | `java.util.stream.DoublePipeline$1:173` |

##### `periodicTask()` (`jdk.jfr.internal.PlatformRecorder`)

|  Change |   Delta |             % |        Time | Contentions | Location                                |
| ------: | ------: | ------------: | ----------: | ----------: | --------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 9.2µs → 0ms |       1 → 0 | `jdk.jfr.internal.PlatformRecorder:526` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |   Delta |      % |  Time | Contentions | Location                                     |
| -----: | ------: | -----: | ----: | ----------: | -------------------------------------------- |
|  -1.8% | -4.42µs | 100.0% | 0.2ms |           1 | `jdk.internal.loader.BuiltinClassLoader:651` |

##### `getId()` (`jdk.jfr.internal.PlatformRecording`)

|  Change |   Delta |             % |        Time | Contentions | Location                                 |
| ------: | ------: | ------------: | ----------: | ----------: | ---------------------------------------- |
| removed | -3.83µs | 100.0% → 0.0% | 3.8µs → 0ms |       1 → 0 | `jdk.jfr.internal.PlatformRecording:433` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |             % |         Time | Contentions | Caller                     | Location                                               |
| -----: | ------: | ------------: | -----------: | ----------: | -------------------------- | ------------------------------------------------------ |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 15.6µs |       0 → 1 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

| Change |   Delta |      % |          Time | Contentions | Caller              | Location                |
| -----: | ------: | -----: | ------------: | ----------: | ------------------- | ----------------------- |
|  -7.9% | -0.07ms | 100.0% | 0.9ms → 0.8ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

|  Change |   Delta |             % |         Time | Contentions | Caller                       | Location           |
| ------: | ------: | ------------: | -----------: | ----------: | ---------------------------- | ------------------ |
| removed | -0.04ms | 100.0% → 0.0% | 41.7µs → 0ms |       2 → 0 | `stream(double[], int, int)` | `java.util.Arrays` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

|  Change |   Delta |             % |         Time | Contentions | Caller           | Location                            |
| ------: | ------: | ------------: | -----------: | ----------: | ---------------- | ----------------------------------- |
| removed | -0.03ms | 100.0% → 0.0% | 32.5µs → 0ms |       4 → 0 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `periodicTask()` (`jdk.jfr.internal.PlatformRecorder`)

|  Change |   Delta |             % |        Time | Contentions | Caller                        | Location                            |
| ------: | ------: | ------------: | ----------: | ----------: | ----------------------------- | ----------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 9.2µs → 0ms |       1 → 0 | `lambda$startDiskMonitor$1()` | `jdk.jfr.internal.PlatformRecorder` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |   Delta |      % |  Time | Contentions | Caller                       | Location                                 |
| -----: | ------: | -----: | ----: | ----------: | ---------------------------- | ---------------------------------------- |
|  -1.8% | -4.42µs | 100.0% | 0.2ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `getId()` (`jdk.jfr.internal.PlatformRecording`)

|  Change |   Delta |             % |        Time | Contentions | Caller    | Location            |
| ------: | ------: | ------------: | ----------: | ----------: | --------- | ------------------- |
| removed | -3.83µs | 100.0% → 0.0% | 3.8µs → 0ms |       1 → 0 | `getId()` | `jdk.jfr.Recording` |

### Total time

#### Regressions

Functions with the largest increase in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|   Change |   Delta |            % |          Time | Contentions | Function                       | Location                                                               |
| -------: | ------: | -----------: | ------------: | ----------: | ------------------------------ | ---------------------------------------------------------------------- |
| +1569.6% | +0.13ms | 0.7% → 13.3% | 8.5µs → 0.1ms |       2 → 1 | `invoke()`                     | `java.util.concurrent.ForkJoinTask`                                    |
| +1569.6% | +0.13ms | 0.7% → 13.3% | 8.5µs → 0.1ms |       2 → 1 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +1569.6% | +0.13ms | 0.7% → 13.3% | 8.5µs → 0.1ms |       2 → 1 | `call()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011f9cf0` |
| +1569.6% | +0.13ms | 0.7% → 13.3% | 8.5µs → 0.1ms |       2 → 1 | `exec()`                       | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |

##### Standard library

|   Change |   Delta |            % |          Time | Contentions | Function   | Location                                            |
| -------: | ------: | -----------: | ------------: | ----------: | ---------- | --------------------------------------------------- |
| +1569.6% | +0.13ms | 0.7% → 13.3% | 8.5µs → 0.1ms |       2 → 1 | `invoke()` | `java.util.concurrent.ForkJoinTask`                 |
| +1569.6% | +0.13ms | 0.7% → 13.3% | 8.5µs → 0.1ms |       2 → 1 | `exec()`   | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### Ours

|   Change |   Delta |            % |          Time | Contentions | Function                       | Location                                                               |
| -------: | ------: | -----------: | ------------: | ----------: | ------------------------------ | ---------------------------------------------------------------------- |
| +1569.6% | +0.13ms | 0.7% → 13.3% | 8.5µs → 0.1ms |       2 → 1 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +1569.6% | +0.13ms | 0.7% → 13.3% | 8.5µs → 0.1ms |       2 → 1 | `call()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011f9cf0` |

#### Improvements

Functions with the largest decrease in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |   Delta |             % |          Time | Contentions | Function                                             | Location                                               |
| ------: | ------: | ------------: | ------------: | ----------: | ---------------------------------------------------- | ------------------------------------------------------ |
|  -45.4% | -0.23ms | 41.0% → 25.5% | 0.5ms → 0.3ms |       7 → 3 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
|  -45.4% | -0.23ms | 41.0% → 25.5% | 0.5ms → 0.3ms |       7 → 3 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                    |
|  -45.4% | -0.23ms | 41.0% → 25.5% | 0.5ms → 0.3ms |       7 → 3 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                    |
|  -13.4% | -0.13ms | 79.0% → 77.8% | 1.0ms → 0.8ms |      10 → 5 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -13.4% | -0.13ms | 79.0% → 77.8% | 1.0ms → 0.8ms |      10 → 5 | `computeDirectly(): Map`                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -13.4% | -0.13ms | 79.0% → 77.8% | 1.0ms → 0.8ms |      10 → 5 | `computeDirectly(): Object`                          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -13.4% | -0.13ms | 79.0% → 77.8% | 1.0ms → 0.8ms |      10 → 5 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |
|  -13.4% | -0.13ms | 79.0% → 77.8% | 1.0ms → 0.8ms |      10 → 5 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                   |
|  -13.4% | -0.13ms | 79.0% → 77.8% | 1.0ms → 0.8ms |      10 → 5 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                    |
|  -13.4% | -0.13ms | 79.0% → 77.8% | 1.0ms → 0.8ms |      10 → 5 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
|  -13.4% | -0.13ms | 79.0% → 77.8% | 1.0ms → 0.8ms |      10 → 5 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                    |
|  -13.4% | -0.13ms | 79.0% → 77.8% | 1.0ms → 0.8ms |      10 → 5 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                    |
|  -13.4% | -0.13ms | 79.0% → 77.8% | 1.0ms → 0.8ms |      10 → 5 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`            |
|   -6.6% | -0.07ms | 92.8% → 98.5% | 1.1ms → 1.0ms |           5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                                |
| removed | -0.07ms |   6.1% → 0.0% |   0.1ms → 0ms |       6 → 0 | `boxed(double[])`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|   -7.9% | -0.07ms | 72.9% → 76.3% | 0.9ms → 0.8ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                                |
|   -6.1% | -0.05ms | 72.9% → 77.8% | 0.9ms → 0.8ms |       4 → 5 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| removed | -0.04ms |   3.4% → 0.0% |  41.7µs → 0ms |       2 → 0 | `doubleStream(Spliterator$OfDouble, boolean)`        | `java.util.stream.StreamSupport`                       |
| removed | -0.04ms |   3.4% → 0.0% |  41.7µs → 0ms |       2 → 0 | `stream(double[], int, int)`                         | `java.util.Arrays`                                     |
| removed | -0.04ms |   3.4% → 0.0% |  41.7µs → 0ms |       2 → 0 | `stream(double[])`                                   | `java.util.Arrays`                                     |

##### Standard library

|  Change |   Delta |             % |          Time | Contentions | Function                                             | Location                                      |
| ------: | ------: | ------------: | ------------: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
|  -45.4% | -0.23ms | 41.0% → 25.5% | 0.5ms → 0.3ms |       7 → 3 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -45.4% | -0.23ms | 41.0% → 25.5% | 0.5ms → 0.3ms |       7 → 3 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`           |
|  -45.4% | -0.23ms | 41.0% → 25.5% | 0.5ms → 0.3ms |       7 → 3 | `join()`                                             | `java.util.concurrent.ForkJoinTask`           |
|  -13.4% | -0.13ms | 79.0% → 77.8% | 1.0ms → 0.8ms |      10 → 5 | `exec()`                                             | `java.util.concurrent.RecursiveTask`          |
|  -13.4% | -0.13ms | 79.0% → 77.8% | 1.0ms → 0.8ms |      10 → 5 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`           |
|  -13.4% | -0.13ms | 79.0% → 77.8% | 1.0ms → 0.8ms |      10 → 5 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -13.4% | -0.13ms | 79.0% → 77.8% | 1.0ms → 0.8ms |      10 → 5 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`           |
|  -13.4% | -0.13ms | 79.0% → 77.8% | 1.0ms → 0.8ms |      10 → 5 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`           |
|  -13.4% | -0.13ms | 79.0% → 77.8% | 1.0ms → 0.8ms |      10 → 5 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`   |
|   -6.6% | -0.07ms | 92.8% → 98.5% | 1.1ms → 1.0ms |           5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                       |
|   -7.9% | -0.07ms | 72.9% → 76.3% | 0.9ms → 0.8ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                       |
| removed | -0.04ms |   3.4% → 0.0% |  41.7µs → 0ms |       2 → 0 | `doubleStream(Spliterator$OfDouble, boolean)`        | `java.util.stream.StreamSupport`              |
| removed | -0.04ms |   3.4% → 0.0% |  41.7µs → 0ms |       2 → 0 | `stream(double[], int, int)`                         | `java.util.Arrays`                            |
| removed | -0.04ms |   3.4% → 0.0% |  41.7µs → 0ms |       2 → 0 | `stream(double[])`                                   | `java.util.Arrays`                            |
| removed | -0.03ms |   2.7% → 0.0% |  32.5µs → 0ms |       4 → 0 | `opWrapSink(int, Sink)`                              | `java.util.stream.DoublePipeline$1`           |
| removed | -0.03ms |   2.7% → 0.0% |  32.5µs → 0ms |       4 → 0 | `wrapSink(Sink)`                                     | `java.util.stream.AbstractPipeline`           |
| removed | -0.03ms |   2.7% → 0.0% |  32.5µs → 0ms |       4 → 0 | `wrapAndCopyInto(Sink, Spliterator)`                 | `java.util.stream.AbstractPipeline`           |
| removed | -0.03ms |   2.7% → 0.0% |  32.5µs → 0ms |       4 → 0 | `evaluate(Spliterator, boolean, IntFunction)`        | `java.util.stream.AbstractPipeline`           |
| removed | -0.03ms |   2.7% → 0.0% |  32.5µs → 0ms |       4 → 0 | `evaluateToArrayNode(IntFunction)`                   | `java.util.stream.AbstractPipeline`           |
| removed | -0.03ms |   2.7% → 0.0% |  32.5µs → 0ms |       4 → 0 | `toArray(IntFunction)`                               | `java.util.stream.ReferencePipeline`          |

##### Ours

|  Change |   Delta |             % |          Time | Contentions | Function                                | Location                                                   |
| ------: | ------: | ------------: | ------------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
|  -13.4% | -0.13ms | 79.0% → 77.8% | 1.0ms → 0.8ms |      10 → 5 | `computeClusterAverages()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -13.4% | -0.13ms | 79.0% → 77.8% | 1.0ms → 0.8ms |      10 → 5 | `computeDirectly(): Map`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -13.4% | -0.13ms | 79.0% → 77.8% | 1.0ms → 0.8ms |      10 → 5 | `computeDirectly(): Object`             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -13.4% | -0.13ms | 79.0% → 77.8% | 1.0ms → 0.8ms |      10 → 5 | `compute()`                             | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| removed | -0.07ms |   6.1% → 0.0% |   0.1ms → 0ms |       6 → 0 | `boxed(double[])`                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   -6.1% | -0.05ms | 72.9% → 77.8% | 0.9ms → 0.8ms |       4 → 5 | `average(List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|   -1.8% | -4.42µs | 19.9% → 22.2% |         0.2ms |           1 | `deleteRecursively(Path, boolean)`      | `org.renaissance.core.DirUtils`                            |
|   -1.8% | -4.42µs | 19.9% → 22.2% |         0.2ms |           1 | `deleteRecursively(Path)`               | `org.renaissance.core.DirUtils`                            |
|   -1.8% | -4.42µs | 19.9% → 22.2% |         0.2ms |           1 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils`                            |
|   -1.8% | -4.42µs | 19.9% → 22.2% |         0.2ms |           1 | `run()`                                 | `org.renaissance.core.DirUtils$$Lambda.0x000000a001009000` |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|   Change |   Delta |      % |          Time | Contentions | Caller                         | Location                                    |
| -------: | ------: | -----: | ------------: | ----------: | ------------------------------ | ------------------------------------------- |
| +1569.6% | +0.13ms | 100.0% | 8.5µs → 0.1ms |       2 → 1 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|   Change |   Delta |      % |          Time | Contentions | Caller   | Location                                                               |
| -------: | ------: | -----: | ------------: | ----------: | -------- | ---------------------------------------------------------------------- |
| +1569.6% | +0.13ms | 100.0% | 8.5µs → 0.1ms |       2 → 1 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011f9cf0` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011f9cf0`)

|   Change |   Delta |      % |          Time | Contentions | Caller   | Location                                            |
| -------: | ------: | -----: | ------------: | ----------: | -------- | --------------------------------------------------- |
| +1569.6% | +0.13ms | 100.0% | 8.5µs → 0.1ms |       2 → 1 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|   Change |   Delta |      % |          Time | Contentions | Caller     | Location                            |
| -------: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------- |
| +1569.6% | +0.13ms | 100.0% | 8.5µs → 0.1ms |       2 → 1 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |   Delta |      % |          Time | Contentions | Caller                 | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------- | ----------------------------------- |
| -45.4% | -0.23ms | 100.0% | 0.5ms → 0.3ms |       7 → 3 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |      % |          Time | Contentions | Caller   | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | -------- | ----------------------------------- |
| -45.4% | -0.23ms | 100.0% | 0.5ms → 0.3ms |       7 → 3 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |      % |          Time | Contentions | Caller      | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | ----------- | ------------------------------------------------------ |
| -45.4% | -0.23ms | 100.0% | 0.5ms → 0.3ms |       7 → 3 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |      % |          Time | Contentions | Caller                   | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------ | ------------------------------------------------------ |
| -13.4% | -0.13ms | 100.0% | 1.0ms → 0.8ms |      10 → 5 | `computeDirectly(): Map` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly(): Map` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |      % |          Time | Contentions | Caller                      | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------- | ------------------------------------------------------ |
| -13.4% | -0.13ms | 100.0% | 1.0ms → 0.8ms |      10 → 5 | `computeDirectly(): Object` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly(): Object` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |      % |          Time | Contentions | Caller      | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | ----------- | ------------------------------------------------------ |
| -13.4% | -0.13ms | 100.0% | 1.0ms → 0.8ms |      10 → 5 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |   Delta |      % |          Time | Contentions | Caller   | Location                             |
| -----: | ------: | -----: | ------------: | ----------: | -------- | ------------------------------------ |
| -13.4% | -0.13ms | 100.0% | 1.0ms → 0.8ms |      10 → 5 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |   Delta |      % |          Time | Contentions | Caller     | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------- |
| -13.4% | -0.13ms | 100.0% | 1.0ms → 0.8ms |      10 → 5 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|   Change |   Delta |             % |          Time | Contentions | Caller                                               | Location                                      |
| -------: | ------: | ------------: | ------------: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
|   -45.4% | -0.23ms | 51.9% → 32.7% | 0.5ms → 0.3ms |       7 → 3 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| +1569.6% | +0.13ms |  0.9% → 17.1% | 8.5µs → 0.1ms |       2 → 1 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`           |
|   -13.4% | -0.13ms |        100.0% | 1.0ms → 0.8ms |      10 → 5 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |   Delta |      % |          Time | Contentions | Caller                                   | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------------- | ----------------------------------- |
| -13.4% | -0.13ms | 100.0% | 1.0ms → 0.8ms |      10 → 5 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |   Delta |      % |          Time | Contentions | Caller                              | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------- | ----------------------------------- |
| -13.4% | -0.13ms | 100.0% | 1.0ms → 0.8ms |      10 → 5 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |   Delta |      % |          Time | Contentions | Caller  | Location                                    |
| -----: | ------: | -----: | ------------: | ----------: | ------- | ------------------------------------------- |
| -13.4% | -0.13ms | 100.0% | 1.0ms → 0.8ms |      10 → 5 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

| Change |   Delta |             % |          Time | Contentions | Caller                             | Location                                               |
| -----: | ------: | ------------: | ------------: | ----------: | ---------------------------------- | ------------------------------------------------------ |
|  -7.9% | -0.07ms | 78.6% → 77.5% | 0.9ms → 0.8ms |           4 | `average(List)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -1.8% | -4.42µs | 21.4% → 22.5% |         0.2ms |           1 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils`                        |

##### `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |   Delta |             % |        Time | Contentions | Caller                     | Location                                               |
| ------: | ------: | ------------: | ----------: | ----------: | -------------------------- | ------------------------------------------------------ |
| removed | -0.07ms | 100.0% → 0.0% | 0.1ms → 0ms |       6 → 0 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

| Change |   Delta |      % |          Time | Contentions | Caller              | Location                |
| -----: | ------: | -----: | ------------: | ----------: | ------------------- | ----------------------- |
|  -7.9% | -0.07ms | 100.0% | 0.9ms → 0.8ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |      % |          Time | Contentions | Caller                     | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------- | ------------------------------------------------------ |
|  -6.1% | -0.05ms | 100.0% | 0.9ms → 0.8ms |       4 → 5 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`)

|  Change |   Delta |             % |         Time | Contentions | Caller                       | Location           |
| ------: | ------: | ------------: | -----------: | ----------: | ---------------------------- | ------------------ |
| removed | -0.04ms | 100.0% → 0.0% | 41.7µs → 0ms |       2 → 0 | `stream(double[], int, int)` | `java.util.Arrays` |

##### `stream(double[], int, int)` (`java.util.Arrays`)

|  Change |   Delta |             % |         Time | Contentions | Caller             | Location           |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------ | ------------------ |
| removed | -0.04ms | 100.0% → 0.0% | 41.7µs → 0ms |       2 → 0 | `stream(double[])` | `java.util.Arrays` |

##### `stream(double[])` (`java.util.Arrays`)

|  Change |   Delta |             % |         Time | Contentions | Caller            | Location                                               |
| ------: | ------: | ------------: | -----------: | ----------: | ----------------- | ------------------------------------------------------ |
| removed | -0.04ms | 100.0% → 0.0% | 41.7µs → 0ms |       2 → 0 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`)

|  Change |   Delta |             % |         Time | Contentions | Caller           | Location                            |
| ------: | ------: | ------------: | -----------: | ----------: | ---------------- | ----------------------------------- |
| removed | -0.03ms | 100.0% → 0.0% | 32.5µs → 0ms |       4 → 0 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|  Change |   Delta |             % |         Time | Contentions | Caller                               | Location                            |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------------ | ----------------------------------- |
| removed | -0.03ms | 100.0% → 0.0% | 32.5µs → 0ms |       4 → 0 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|  Change |   Delta |             % |         Time | Contentions | Caller                                        | Location                            |
| ------: | ------: | ------------: | -----------: | ----------: | --------------------------------------------- | ----------------------------------- |
| removed | -0.03ms | 100.0% → 0.0% | 32.5µs → 0ms |       4 → 0 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`)

|  Change |   Delta |             % |         Time | Contentions | Caller                             | Location                            |
| ------: | ------: | ------------: | -----------: | ----------: | ---------------------------------- | ----------------------------------- |
| removed | -0.03ms | 100.0% → 0.0% | 32.5µs → 0ms |       4 → 0 | `evaluateToArrayNode(IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `evaluateToArrayNode(IntFunction)` (`java.util.stream.AbstractPipeline`)

|  Change |   Delta |             % |         Time | Contentions | Caller                 | Location                             |
| ------: | ------: | ------------: | -----------: | ----------: | ---------------------- | ------------------------------------ |
| removed | -0.03ms | 100.0% → 0.0% | 32.5µs → 0ms |       4 → 0 | `toArray(IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`)

|  Change |   Delta |             % |         Time | Contentions | Caller            | Location                                               |
| ------: | ------: | ------------: | -----------: | ----------: | ----------------- | ------------------------------------------------------ |
| removed | -0.03ms | 100.0% → 0.0% | 32.5µs → 0ms |       4 → 0 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |  Time | Contentions | Caller                    | Location                        |
| -----: | ------: | -----: | ----: | ----------: | ------------------------- | ------------------------------- |
|  -1.8% | -4.42µs | 100.0% | 0.2ms |           1 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |  Time | Contentions | Caller                                  | Location                        |
| -----: | ------: | -----: | ----: | ----------: | --------------------------------------- | ------------------------------- |
|  -1.8% | -4.42µs | 100.0% | 0.2ms |           1 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |  Time | Contentions | Caller  | Location                                                   |
| -----: | ------: | -----: | ----: | ----------: | ------- | ---------------------------------------------------------- |
|  -1.8% | -4.42µs | 100.0% | 0.2ms |           1 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x000000a001009000` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000a001009000`)

| Change |   Delta |      % |  Time | Contentions | Caller                      | Location           |
| -----: | ------: | -----: | ----: | ----------: | --------------------------- | ------------------ |
|  -1.8% | -4.42µs | 100.0% | 0.2ms |           1 | `runWith(Object, Runnable)` | `java.lang.Thread` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|   Change |   Delta |      % |          Time | Contentions | Callee     | Location                            |
| -------: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------- |
| +1569.6% | +0.13ms | 100.0% | 8.5µs → 0.1ms |       2 → 1 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|   Change |   Delta |      % |          Time | Contentions | Callee     | Location                            |
| -------: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------- |
| +1569.6% | +0.13ms | 100.0% | 8.5µs → 0.1ms |       2 → 1 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011f9cf0`)

|   Change |   Delta |      % |          Time | Contentions | Callee                         | Location                                    |
| -------: | ------: | -----: | ------------: | ----------: | ------------------------------ | ------------------------------------------- |
| +1569.6% | +0.13ms | 100.0% | 8.5µs → 0.1ms |       2 → 1 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|   Change |   Delta |      % |          Time | Contentions | Callee   | Location                                                               |
| -------: | ------: | -----: | ------------: | ----------: | -------- | ---------------------------------------------------------------------- |
| +1569.6% | +0.13ms | 100.0% | 8.5µs → 0.1ms |       2 → 1 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011f9cf0` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |   Delta |      % |          Time | Contentions | Callee     | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------- |
| -45.4% | -0.23ms | 100.0% | 0.5ms → 0.3ms |       7 → 3 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |      % |          Time | Contentions | Callee                                    | Location                                      |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------------- | --------------------------------------------- |
| -45.4% | -0.23ms | 100.0% | 0.5ms → 0.3ms |       7 → 3 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |      % |          Time | Contentions | Callee                 | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------- | ----------------------------------- |
| -45.4% | -0.23ms | 100.0% | 0.5ms → 0.3ms |       7 → 3 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |   Delta |              % |          Time | Contentions | Callee            | Location                                               |
| ------: | ------: | -------------: | ------------: | ----------: | ----------------- | ------------------------------------------------------ |
| removed | -0.07ms |    7.8% → 0.0% |   0.1ms → 0ms |       6 → 0 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|   -6.1% | -0.05ms | 92.2% → 100.0% | 0.9ms → 0.8ms |       4 → 5 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly(): Map` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |      % |          Time | Contentions | Callee                     | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------- | ------------------------------------------------------ |
| -13.4% | -0.13ms | 100.0% | 1.0ms → 0.8ms |      10 → 5 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly(): Object` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |      % |          Time | Contentions | Callee                   | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------ | ------------------------------------------------------ |
| -13.4% | -0.13ms | 100.0% | 1.0ms → 0.8ms |      10 → 5 | `computeDirectly(): Map` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |   Delta |             % |          Time | Contentions | Callee                      | Location                                               |
| -----: | ------: | ------------: | ------------: | ----------: | --------------------------- | ------------------------------------------------------ |
| -45.4% | -0.23ms | 51.9% → 32.7% | 0.5ms → 0.3ms |       7 → 3 | `join()`                    | `java.util.concurrent.ForkJoinTask`                    |
| -13.4% | -0.13ms |        100.0% | 1.0ms → 0.8ms |      10 → 5 | `computeDirectly(): Object` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |   Delta |      % |          Time | Contentions | Callee      | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | ----------- | ------------------------------------------------------ |
| -13.4% | -0.13ms | 100.0% | 1.0ms → 0.8ms |      10 → 5 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|   Change |   Delta |            % |          Time | Contentions | Callee   | Location                                            |
| -------: | ------: | -----------: | ------------: | ----------: | -------- | --------------------------------------------------- |
| +1569.6% | +0.13ms | 0.9% → 17.1% | 8.5µs → 0.1ms |       2 → 1 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|   -13.4% | -0.13ms |       100.0% | 1.0ms → 0.8ms |      10 → 5 | `exec()` | `java.util.concurrent.RecursiveTask`                |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |   Delta |      % |          Time | Contentions | Callee     | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------- |
| -13.4% | -0.13ms | 100.0% | 1.0ms → 0.8ms |      10 → 5 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |   Delta |      % |          Time | Contentions | Callee                                               | Location                                      |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| -13.4% | -0.13ms | 100.0% | 1.0ms → 0.8ms |      10 → 5 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |   Delta |      % |          Time | Contentions | Callee                                   | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------------- | ----------------------------------- |
| -13.4% | -0.13ms | 100.0% | 1.0ms → 0.8ms |      10 → 5 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |   Delta |      % |          Time | Contentions | Callee                              | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------- | ----------------------------------- |
| -13.4% | -0.13ms | 100.0% | 1.0ms → 0.8ms |      10 → 5 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

| Change |   Delta |             % |          Time | Contentions | Callee                       | Location                                          |
| -----: | ------: | ------------: | ------------: | ----------: | ---------------------------- | ------------------------------------------------- |
|  -7.9% | -0.07ms | 78.6% → 77.5% | 0.9ms → 0.8ms |           4 | `loadClass(String, boolean)` | `java.lang.ClassLoader`                           |
|  -1.8% | -4.42µs | 21.4% → 22.5% |         0.2ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change |   Delta |            % |         Time | Contentions | Callee                 | Location                             |
| ------: | ------: | -----------: | -----------: | ----------: | ---------------------- | ------------------------------------ |
| removed | -0.04ms | 56.2% → 0.0% | 41.7µs → 0ms |       2 → 0 | `stream(double[])`     | `java.util.Arrays`                   |
| removed | -0.03ms | 43.8% → 0.0% | 32.5µs → 0ms |       4 → 0 | `toArray(IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |   Delta |              % |          Time | Contentions | Callee              | Location                |
| -----: | ------: | -------------: | ------------: | ----------: | ------------------- | ----------------------- |
|  -7.9% | -0.07ms | 100.0% → 98.1% | 0.9ms → 0.8ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `stream(double[], int, int)` (`java.util.Arrays`)

|  Change |   Delta |             % |         Time | Contentions | Callee                                        | Location                         |
| ------: | ------: | ------------: | -----------: | ----------: | --------------------------------------------- | -------------------------------- |
| removed | -0.04ms | 100.0% → 0.0% | 41.7µs → 0ms |       2 → 0 | `doubleStream(Spliterator$OfDouble, boolean)` | `java.util.stream.StreamSupport` |

##### `stream(double[])` (`java.util.Arrays`)

|  Change |   Delta |             % |         Time | Contentions | Callee                       | Location           |
| ------: | ------: | ------------: | -----------: | ----------: | ---------------------------- | ------------------ |
| removed | -0.04ms | 100.0% → 0.0% | 41.7µs → 0ms |       2 → 0 | `stream(double[], int, int)` | `java.util.Arrays` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|  Change |   Delta |             % |         Time | Contentions | Callee                  | Location                            |
| ------: | ------: | ------------: | -----------: | ----------: | ----------------------- | ----------------------------------- |
| removed | -0.03ms | 100.0% → 0.0% | 32.5µs → 0ms |       4 → 0 | `opWrapSink(int, Sink)` | `java.util.stream.DoublePipeline$1` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|  Change |   Delta |             % |         Time | Contentions | Callee           | Location                            |
| ------: | ------: | ------------: | -----------: | ----------: | ---------------- | ----------------------------------- |
| removed | -0.03ms | 100.0% → 0.0% | 32.5µs → 0ms |       4 → 0 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`)

|  Change |   Delta |             % |         Time | Contentions | Callee                               | Location                            |
| ------: | ------: | ------------: | -----------: | ----------: | ------------------------------------ | ----------------------------------- |
| removed | -0.03ms | 100.0% → 0.0% | 32.5µs → 0ms |       4 → 0 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluateToArrayNode(IntFunction)` (`java.util.stream.AbstractPipeline`)

|  Change |   Delta |             % |         Time | Contentions | Callee                                        | Location                            |
| ------: | ------: | ------------: | -----------: | ----------: | --------------------------------------------- | ----------------------------------- |
| removed | -0.03ms | 100.0% → 0.0% | 32.5µs → 0ms |       4 → 0 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`)

|  Change |   Delta |             % |         Time | Contentions | Callee                             | Location                            |
| ------: | ------: | ------------: | -----------: | ----------: | ---------------------------------- | ----------------------------------- |
| removed | -0.03ms | 100.0% → 0.0% | 32.5µs → 0ms |       4 → 0 | `evaluateToArrayNode(IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |  Time | Contentions | Callee              | Location                |
| -----: | ------: | -----: | ----: | ----------: | ------------------- | ----------------------- |
|  -1.8% | -4.42µs | 100.0% | 0.2ms |           1 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `deleteRecursively(Path)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |  Time | Contentions | Callee                             | Location                        |
| -----: | ------: | -----: | ----: | ----------: | ---------------------------------- | ------------------------------- |
|  -1.8% | -4.42µs | 100.0% | 0.2ms |           1 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils` |

##### `lambda$createScratchDirectory$1(Path)` (`org.renaissance.core.DirUtils`)

| Change |   Delta |      % |  Time | Contentions | Callee                    | Location                        |
| -----: | ------: | -----: | ----: | ----------: | ------------------------- | ------------------------------- |
|  -1.8% | -4.42µs | 100.0% | 0.2ms |           1 | `deleteRecursively(Path)` | `org.renaissance.core.DirUtils` |

##### `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000a001009000`)

| Change |   Delta |      % |  Time | Contentions | Callee                                  | Location                        |
| -----: | ------: | -----: | ----: | ----------: | --------------------------------------- | ------------------------------- |
|  -1.8% | -4.42µs | 100.0% | 0.2ms |           1 | `lambda$createScratchDirectory$1(Path)` | `org.renaissance.core.DirUtils` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time blocked in their leaf frame.

Common call stack: `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |   Delta |             % |          Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -----: | ------: | ------------: | ------------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|    new | +0.14ms |  0.0% → 13.3% |   0ms → 0.1ms |       0 → 1 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011f9cf0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) |
| +25.1% | +0.11ms | 36.8% → 52.3% | 0.4ms → 0.6ms |           2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|    new | +0.02ms |   0.0% → 1.5% |  0ms → 15.6µs |       0 → 1 | `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

### Improvements

Call stacks with the largest decrease in time blocked in their leaf frame.

|  Change |   Delta |             % |          Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------: | ------: | ------------: | ------------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -74.0% | -0.32ms | 36.1% → 10.7% | 0.4ms → 0.1ms |       2 → 1 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed | -0.04ms |   3.4% → 0.0% |  41.7µs → 0ms |       2 → 0 | `doubleStream(Spliterator$OfDouble, boolean)` (`java.util.stream.StreamSupport`) ← `stream(double[], int, int)` (`java.util.Arrays`) ← `stream(double[])` ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed | -0.01ms |   1.2% → 0.0% |  14.8µs → 0ms |       1 → 0 | `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`) ← `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed | -0.01ms |   0.8% → 0.0% |   9.2µs → 0ms |       1 → 0 | `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`) ← `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed | -0.01ms |   0.8% → 0.0% |   9.2µs → 0ms |       1 → 0 | `periodicTask()` (`jdk.jfr.internal.PlatformRecorder`) ← `lambda$startDiskMonitor$1()` ← `run()` (`jdk.jfr.internal.PlatformRecorder$$Lambda.0x0000007001042ce0`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed | -0.01ms |   0.7% → 0.0% |   8.5µs → 0ms |       2 → 0 | `opWrapSink(int, Sink)` (`java.util.stream.DoublePipeline$1`) ← `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d7aa8`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|   -1.8% | -4.42µs | 19.9% → 22.2% |         0.2ms |           1 | `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String)` (`java.lang.ClassLoader`) ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x000000a001009000`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed | -3.83µs |   0.3% → 0.0% |   3.8µs → 0ms |       1 → 0 | `getId()` (`jdk.jfr.internal.PlatformRecording`) ← `getId()` (`jdk.jfr.Recording`) ← `execute(ArgumentParser)` (`jdk.jfr.internal.dcmd.DCmdStart`) ← `execute(String, String, char)` (`jdk.jfr.internal.dcmd.AbstractDCmd`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

# Thread park profile diff

Parked 40.76s → 41.49s (+734.35ms, +1.8%) over 72,057 → 74,932 parks (565.6µs → 553.7µs per park).

| Category         | Change |     Delta |      % |            Time |           Parks |
| ---------------- | -----: | --------: | -----: | --------------: | --------------: |
| Standard library |  +1.8% | +734.35ms | 100.0% | 40.76s → 41.49s | 72,057 → 74,932 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 34.24s → 35.21s (84.0% → 84.9%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 34.24s → 35.21s (84.0% → 84.9%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       ├── 23.85s → 25.07s (58.5% → 60.4%) awaitWork(ForkJoinPool$WorkQueue)
│       │   ├── 22.39s → 24.01s (54.9% → 57.9%) park() at java.util.concurrent.locks.LockSupport
│       │   │   └── 22.39s → 24.01s (54.9% → 57.9%, self 100.0% globally) park(boolean, long) at jdk.internal.misc.Unsafe
│       │   └── 1.45s → 1.07s (3.6% → 2.6%) parkUntil(long) at java.util.concurrent.locks.LockSupport
│       │       └── 1.45s → 1.07s (3.6% → 2.6%) park(boolean, long) at jdk.internal.misc.Unsafe
│       └── 10.40s → 10.14s (25.5% → 24.4%) scan(ForkJoinPool$WorkQueue, int, int)
│           └── 10.40s → 10.14s (25.5% → 24.4%) topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool$WorkQueue
│               └── 10.40s → 10.14s (25.5% → 24.4%) doExec() at java.util.concurrent.ForkJoinTask
│                   └── … 10.40s → 10.14s (25.5% → 24.4%) exec() at java.util.concurrent.RecursiveTask
│                       └── 10.40s → 10.14s (25.5% → 24.4%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│                           └── 10.40s → 10.14s (25.5% → 24.4%) join() at java.util.concurrent.ForkJoinTask
│                               └── 10.40s → 10.14s (25.5% → 24.4%) awaitDone(int, long)
│                                   └── 10.40s → 10.14s (25.5% → 24.4%) park() at java.util.concurrent.locks.LockSupport
│                                       └── 10.40s → 10.14s (25.5% → 24.4%) park(boolean, long) at jdk.internal.misc.Unsafe
└── 6.52s → 6.28s (16.0% → 15.1%) main(String[]) at org.renaissance.core.Launcher
    └── 6.52s → 6.28s (16.0% → 15.1%) launchHarnessClass(String, String[])
        └── 6.52s → 6.28s (16.0% → 15.1%) loadAndInvokeHarnessClass(ModuleLoader, String, String[])
            └── 6.52s → 6.28s (16.0% → 15.1%) invoke(Object, Object[]) at java.lang.reflect.Method
                └── 6.52s → 6.28s (16.0% → 15.1%) invoke(Object, Object[]) at jdk.internal.reflect.DirectMethodHandleAccessor
                    └── 6.52s → 6.28s (16.0% → 15.1%) invokeImpl(Object, Object[])
                        └── 6.52s → 6.28s (16.0% → 15.1%) invokeExact_MT(Object, Object, Object, Object) at java.lang.invoke.Invokers$Holder
                            └── 6.52s → 6.28s (16.0% → 15.1%) invoke(Object, Object, Object) at java.lang.invoke.LambdaForm$MH.0x000000a00100d800
                                └── 6.52s → 6.28s (16.0% → 15.1%) invokeStatic(Object, Object) at java.lang.invoke.LambdaForm$DMH.0x000000a001001800
                                    └── 6.52s → 6.28s (16.0% → 15.1%) main(String[]) at org.renaissance.harness.RenaissanceSuite
                                        └── 6.52s → 6.28s (16.0% → 15.1%) main(String[]) at org.renaissance.harness.RenaissanceSuite$
                                            └── 6.52s → 6.28s (16.0% → 15.1%) runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)
                                                └── 6.52s → 6.28s (16.0% → 15.1%) foreach(Function1) at scala.collection.immutable.List
                                                    └── 6.52s → 6.28s (16.0% → 15.1%) apply(Object): Object at scala.runtime.function.JProcedure1
                                                        └── 6.52s → 6.28s (16.0% → 15.1%) apply(Object): BoxedUnit
                                                            └── 6.52s → 6.28s (16.0% → 15.1%) applyVoid(Object) at org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a0011583b8
                                                                ├── … 6.52s → 0ms (16.0% → 0.0%) $anonfun$adapted$1(Object) at org.renaissance.jdk.concurrent.FjKmeans
                                                                │   └── 6.52s → 0ms (16.0% → 0.0%) $anonfun$1(int)
                                                                │       └── 6.52s → 0ms (16.0% → 0.0%) run(int, List, int) at org.renaissance.jdk.concurrent.JavaKMeans
                                                                │           └── 6.52s → 0ms (16.0% → 0.0%) get() at java.util.concurrent.ForkJoinTask
                                                                │               └── 6.52s → 0ms (16.0% → 0.0%) awaitDone(int, long)
                                                                │                   └── 6.52s → 0ms (16.0% → 0.0%) park() at java.util.concurrent.locks.LockSupport
                                                                │                       └── 6.52s → 0ms (16.0% → 0.0%) park(boolean, long) at jdk.internal.misc.Unsafe
                                                                └── … 0ms → 6.28s (0.0% → 15.1%) park(boolean, long) at jdk.internal.misc.Unsafe
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time parked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

| Change |     Delta |      % |            Time |           Parks | Function              | Location                   |
| -----: | --------: | -----: | --------------: | --------------: | --------------------- | -------------------------- |
|  +1.8% | +734.35ms | 100.0% | 40.76s → 41.49s | 72,057 → 74,932 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change |     Delta |             % |            Time |           Parks | Caller                    | Location                                 |
| -----: | --------: | ------------: | --------------: | --------------: | ------------------------- | ---------------------------------------- |
|  +2.8% |   +1.120s | 96.4% → 97.4% | 39.30s → 40.42s | 68,084 → 70,876 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
| -26.5% | -385.27ms |   3.6% → 2.6% |   1.45s → 1.07s |   3,972 → 4,055 | `parkUntil(long)`         | `java.util.concurrent.locks.LockSupport` |
| +75.1% |   +0.10ms |         <0.1% |   0.1ms → 0.2ms |               1 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

### Total time

#### Regressions

Functions with the largest increase in time parked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |     Delta |             % |            Time |           Parks | Function                                                                                                               | Location                                                                |
| -----: | --------: | ------------: | --------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
|    new |   +6.281s |  0.0% → 15.1% |     0ms → 6.28s |          0 → 17 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                             |
|    new |   +6.281s |  0.0% → 15.1% |     0ms → 6.28s |          0 → 16 | `$anonfun$2(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                               |
|  +5.2% |   +1.228s | 58.5% → 60.4% | 23.85s → 25.07s | 28,604 → 29,600 | `awaitWork(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                     |
|  +2.8% |   +1.120s | 96.4% → 97.4% | 39.30s → 40.42s | 68,084 → 70,876 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                                |
|  +2.8% | +969.20ms | 84.0% → 84.9% | 34.24s → 35.21s | 72,040 → 74,915 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                     |
|  +2.8% | +969.20ms | 84.0% → 84.9% | 34.24s → 35.21s | 72,040 → 74,915 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                             |
|  +1.8% | +734.35ms |        100.0% | 40.76s → 41.49s | 72,057 → 74,932 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                              |
|  +1.4% |  +76.31ms |         13.8% |   5.63s → 5.71s | 26,043 → 27,263 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                              | `java.util.concurrent.ForkJoinPool$WorkQueue`                           |
| +75.1% |   +0.10ms |         <0.1% |   0.1ms → 0.2ms |               1 | `parkNanos(Object, long)`                                                                                              | `java.util.concurrent.locks.LockSupport`                                |
| +75.1% |   +0.10ms |         <0.1% |   0.1ms → 0.2ms |               1 | `awaitNanos(long)`                                                                                                     | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| +75.1% |   +0.10ms |         <0.1% |   0.1ms → 0.2ms |               1 | `awaitTermination(long, TimeUnit)`                                                                                     | `java.util.concurrent.ForkJoinPool`                                     |
| +75.1% |   +0.10ms |         <0.1% |   0.1ms → 0.2ms |               1 | `tearDown()`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                             |
| +75.1% |   +0.10ms |         <0.1% |   0.1ms → 0.2ms |               1 | `tearDownAfterAll(BenchmarkContext)`                                                                                   | `org.renaissance.jdk.concurrent.FjKmeans`                               |

##### Standard library

| Change |     Delta |             % |            Time |           Parks | Function                                  | Location                                                                |
| -----: | --------: | ------------: | --------------: | --------------: | ----------------------------------------- | ----------------------------------------------------------------------- |
|  +5.2% |   +1.228s | 58.5% → 60.4% | 23.85s → 25.07s | 28,604 → 29,600 | `awaitWork(ForkJoinPool$WorkQueue)`       | `java.util.concurrent.ForkJoinPool`                                     |
|  +2.8% |   +1.120s | 96.4% → 97.4% | 39.30s → 40.42s | 68,084 → 70,876 | `park()`                                  | `java.util.concurrent.locks.LockSupport`                                |
|  +2.8% | +969.20ms | 84.0% → 84.9% | 34.24s → 35.21s | 72,040 → 74,915 | `runWorker(ForkJoinPool$WorkQueue)`       | `java.util.concurrent.ForkJoinPool`                                     |
|  +2.8% | +969.20ms | 84.0% → 84.9% | 34.24s → 35.21s | 72,040 → 74,915 | `run()`                                   | `java.util.concurrent.ForkJoinWorkerThread`                             |
|  +1.8% | +734.35ms |        100.0% | 40.76s → 41.49s | 72,057 → 74,932 | `park(boolean, long)`                     | `jdk.internal.misc.Unsafe`                                              |
|  +1.4% |  +76.31ms |         13.8% |   5.63s → 5.71s | 26,043 → 27,263 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                           |
| +75.1% |   +0.10ms |         <0.1% |   0.1ms → 0.2ms |               1 | `parkNanos(Object, long)`                 | `java.util.concurrent.locks.LockSupport`                                |
| +75.1% |   +0.10ms |         <0.1% |   0.1ms → 0.2ms |               1 | `awaitNanos(long)`                        | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| +75.1% |   +0.10ms |         <0.1% |   0.1ms → 0.2ms |               1 | `awaitTermination(long, TimeUnit)`        | `java.util.concurrent.ForkJoinPool`                                     |

#### Improvements

Functions with the largest decrease in time parked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |             % |            Time |           Parks | Function                                                                                                               | Location                                                               |
| ------: | --------: | ------------: | --------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |   -6.516s |  16.0% → 0.0% |     6.52s → 0ms |          17 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| removed |   -6.516s |  16.0% → 0.0% |     6.52s → 0ms |          16 → 0 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|   -2.9% | -493.93ms | 41.5% → 39.6% | 16.91s → 16.42s | 43,452 → 45,331 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
|  -26.5% | -385.27ms |   3.6% → 2.6% |   1.45s → 1.07s |   3,972 → 4,055 | `parkUntil(long)`                                                                                                      | `java.util.concurrent.locks.LockSupport`                               |
|   -2.5% | -258.99ms | 25.5% → 24.4% | 10.40s → 10.14s | 43,436 → 45,315 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                    |
|   -2.5% | -258.99ms | 25.5% → 24.4% | 10.40s → 10.14s | 43,436 → 45,315 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|   -2.5% | -258.99ms | 25.5% → 24.4% | 10.40s → 10.14s | 43,436 → 45,315 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                                   |
|   -2.5% | -258.99ms | 25.5% → 24.4% | 10.40s → 10.14s | 43,436 → 45,315 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
|   -2.5% | -258.99ms | 25.5% → 24.4% | 10.40s → 10.14s | 43,436 → 45,315 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|   -2.5% | -258.99ms | 25.5% → 24.4% | 10.40s → 10.14s | 43,436 → 45,315 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                                    |
|   -3.6% | -234.95ms | 16.0% → 15.1% |   6.52s → 6.28s |              16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
|   -3.6% | -234.95ms | 16.0% → 15.1% |   6.52s → 6.28s |              16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|   -3.6% | -234.95ms | 16.0% → 15.1% |   6.52s → 6.28s |              16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|   -3.6% | -234.95ms | 16.0% → 15.1% |   6.52s → 6.28s |              16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a0011f9910`   |
|   -3.6% | -234.95ms | 16.0% → 15.1% |   6.52s → 6.28s |              16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
|   -3.6% | -234.95ms | 16.0% → 15.1% |   6.52s → 6.28s |              16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|   -3.6% | -234.95ms | 16.0% → 15.1% |   6.52s → 6.28s |              16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|   -3.6% | -234.85ms | 16.0% → 15.1% |   6.52s → 6.28s |              17 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|   -3.6% | -234.85ms | 16.0% → 15.1% |   6.52s → 6.28s |              17 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a0011583b8` |
|   -3.6% | -234.85ms | 16.0% → 15.1% |   6.52s → 6.28s |              17 | `apply(Object): BoxedUnit`                                                                                             | `scala.runtime.function.JProcedure1`                                   |

##### Standard library

| Change |     Delta |             % |            Time |           Parks | Function                                                  | Location                                             |
| -----: | --------: | ------------: | --------------: | --------------: | --------------------------------------------------------- | ---------------------------------------------------- |
|  -2.9% | -493.93ms | 41.5% → 39.6% | 16.91s → 16.42s | 43,452 → 45,331 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                  |
| -26.5% | -385.27ms |   3.6% → 2.6% |   1.45s → 1.07s |   3,972 → 4,055 | `parkUntil(long)`                                         | `java.util.concurrent.locks.LockSupport`             |
|  -2.5% | -258.99ms | 25.5% → 24.4% | 10.40s → 10.14s | 43,436 → 45,315 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                  |
|  -2.5% | -258.99ms | 25.5% → 24.4% | 10.40s → 10.14s | 43,436 → 45,315 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                 |
|  -2.5% | -258.99ms | 25.5% → 24.4% | 10.40s → 10.14s | 43,436 → 45,315 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                  |
|  -2.5% | -258.99ms | 25.5% → 24.4% | 10.40s → 10.14s | 43,436 → 45,315 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  -2.5% | -258.99ms | 25.5% → 24.4% | 10.40s → 10.14s | 43,436 → 45,315 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                  |
|  -3.6% | -234.95ms | 16.0% → 15.1% |   6.52s → 6.28s |              16 | `get()`                                                   | `java.util.concurrent.ForkJoinTask`                  |
|  -3.6% | -234.95ms | 16.0% → 15.1% |   6.52s → 6.28s |              16 | `map(Function1)`                                          | `scala.collection.immutable.Range`                   |
|  -3.6% | -234.85ms | 16.0% → 15.1% |   6.52s → 6.28s |              17 | `apply(Object): BoxedUnit`                                | `scala.runtime.function.JProcedure1`                 |
|  -3.6% | -234.85ms | 16.0% → 15.1% |   6.52s → 6.28s |              17 | `apply(Object): Object`                                   | `scala.runtime.function.JProcedure1`                 |
|  -3.6% | -234.85ms | 16.0% → 15.1% |   6.52s → 6.28s |              17 | `foreach(Function1)`                                      | `scala.collection.immutable.List`                    |
|  -3.6% | -234.85ms | 16.0% → 15.1% |   6.52s → 6.28s |              17 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x000000a001001800` |
|  -3.6% | -234.85ms | 16.0% → 15.1% |   6.52s → 6.28s |              17 | `invoke(Object, Object, Object)`                          | `java.lang.invoke.LambdaForm$MH.0x000000a00100d800`  |
|  -3.6% | -234.85ms | 16.0% → 15.1% |   6.52s → 6.28s |              17 | `invokeExact_MT(Object, Object, Object, Object)`          | `java.lang.invoke.Invokers$Holder`                   |
|  -3.6% | -234.85ms | 16.0% → 15.1% |   6.52s → 6.28s |              17 | `invokeImpl(Object, Object[])`                            | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  -3.6% | -234.85ms | 16.0% → 15.1% |   6.52s → 6.28s |              17 | `invoke(Object, Object[])`                                | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  -3.6% | -234.85ms | 16.0% → 15.1% |   6.52s → 6.28s |              17 | `invoke(Object, Object[])`                                | `java.lang.reflect.Method`                           |
|  -3.4% |  -92.69ms |   6.6% → 6.3% |   2.70s → 2.60s | 15,494 → 16,016 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
|  -3.7% |  -72.57ms |   4.7% → 4.5% |   1.94s → 1.86s |   9,263 → 9,437 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                  |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |   Delta |             % |        Time |  Parks | Caller              | Location                                                               |
| -----: | ------: | ------------: | ----------: | -----: | ------------------- | ---------------------------------------------------------------------- |
|    new | +6.281s | 0.0% → 100.0% | 0ms → 6.28s | 0 → 17 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a0011583b8` |

##### `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |   Delta |             % |        Time |  Parks | Caller                       | Location                                  |
| -----: | ------: | ------------: | ----------: | -----: | ---------------------------- | ----------------------------------------- |
|    new | +6.281s | 0.0% → 100.0% | 0ms → 6.28s | 0 → 16 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |   Delta |      % |            Time |           Parks | Caller                              | Location                            |
| -----: | ------: | -----: | --------------: | --------------: | ----------------------------------- | ----------------------------------- |
|  +5.2% | +1.228s | 100.0% | 23.85s → 25.07s | 28,604 → 29,600 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change |     Delta |             % |            Time |           Parks | Caller                              | Location                            |
| -----: | --------: | ------------: | --------------: | --------------: | ----------------------------------- | ----------------------------------- |
|  +7.2% |   +1.613s | 57.0% → 59.4% | 22.39s → 24.01s | 24,632 → 25,545 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |
|  -2.9% | -493.93ms | 43.0% → 40.6% | 16.91s → 16.42s | 43,452 → 45,331 | `awaitDone(int, long)`              | `java.util.concurrent.ForkJoinTask` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |      % |            Time |           Parks | Caller  | Location                                    |
| -----: | --------: | -----: | --------------: | --------------: | ------- | ------------------------------------------- |
|  +2.8% | +969.20ms | 100.0% | 34.24s → 35.21s | 72,040 → 74,915 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change |     Delta |             % |            Time |           Parks | Caller                    | Location                                 |
| -----: | --------: | ------------: | --------------: | --------------: | ------------------------- | ---------------------------------------- |
|  +2.8% |   +1.120s | 96.4% → 97.4% | 39.30s → 40.42s | 68,084 → 70,876 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
| -26.5% | -385.27ms |   3.6% → 2.6% |   1.45s → 1.07s |   3,972 → 4,055 | `parkUntil(long)`         | `java.util.concurrent.locks.LockSupport` |
| +75.1% |   +0.10ms |         <0.1% |   0.1ms → 0.2ms |               1 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |    Delta |      % |          Time |           Parks | Caller                 | Location                            |
| -----: | -------: | -----: | ------------: | --------------: | ---------------------- | ----------------------------------- |
|  +1.4% | +76.31ms | 100.0% | 5.63s → 5.71s | 26,043 → 27,263 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

| Change |   Delta |      % |          Time | Parks | Caller             | Location                                                                |
| -----: | ------: | -----: | ------------: | ----: | ------------------ | ----------------------------------------------------------------------- |
| +75.1% | +0.10ms | 100.0% | 0.1ms → 0.2ms |     1 | `awaitNanos(long)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `awaitNanos(long)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

| Change |   Delta |      % |          Time | Parks | Caller                             | Location                            |
| -----: | ------: | -----: | ------------: | ----: | ---------------------------------- | ----------------------------------- |
| +75.1% | +0.10ms | 100.0% | 0.1ms → 0.2ms |     1 | `awaitTermination(long, TimeUnit)` | `java.util.concurrent.ForkJoinPool` |

##### `awaitTermination(long, TimeUnit)` (`java.util.concurrent.ForkJoinPool`)

| Change |   Delta |      % |          Time | Parks | Caller       | Location                                    |
| -----: | ------: | -----: | ------------: | ----: | ------------ | ------------------------------------------- |
| +75.1% | +0.10ms | 100.0% | 0.1ms → 0.2ms |     1 | `tearDown()` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `tearDown()` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |   Delta |      % |          Time | Parks | Caller                               | Location                                  |
| -----: | ------: | -----: | ------------: | ----: | ------------------------------------ | ----------------------------------------- |
| +75.1% | +0.10ms | 100.0% | 0.1ms → 0.2ms |     1 | `tearDownAfterAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `tearDownAfterAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |   Delta |      % |          Time | Parks | Caller               | Location                                  |
| -----: | ------: | -----: | ------------: | ----: | -------------------- | ----------------------------------------- |
| +75.1% | +0.10ms | 100.0% | 0.1ms → 0.2ms |     1 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |   Delta |             % |        Time |  Parks | Caller              | Location                                                               |
| ------: | ------: | ------------: | ----------: | -----: | ------------------- | ---------------------------------------------------------------------- |
| removed | -6.516s | 100.0% → 0.0% | 6.52s → 0ms | 17 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011545f0` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |   Delta |             % |        Time |  Parks | Caller                       | Location                                  |
| ------: | ------: | ------------: | ----------: | -----: | ---------------------------- | ----------------------------------------- |
| removed | -6.516s | 100.0% → 0.0% | 6.52s → 0ms | 16 → 0 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |             % |            Time |           Parks | Caller   | Location                            |
| -----: | --------: | ------------: | --------------: | --------------: | -------- | ----------------------------------- |
|  -2.5% | -258.99ms | 61.5% → 61.7% | 10.40s → 10.14s | 43,436 → 45,315 | `join()` | `java.util.concurrent.ForkJoinTask` |
|  -3.6% | -234.95ms | 38.5% → 38.3% |   6.52s → 6.28s |              16 | `get()`  | `java.util.concurrent.ForkJoinTask` |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

| Change |     Delta |      % |          Time |         Parks | Caller                              | Location                            |
| -----: | --------: | -----: | ------------: | ------------: | ----------------------------------- | ----------------------------------- |
| -26.5% | -385.27ms | 100.0% | 1.45s → 1.07s | 3,972 → 4,055 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |      % |            Time |           Parks | Caller      | Location                                               |
| -----: | --------: | -----: | --------------: | --------------: | ----------- | ------------------------------------------------------ |
|  -2.5% | -258.99ms | 100.0% | 10.40s → 10.14s | 43,436 → 45,315 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |     Delta |      % |            Time |           Parks | Caller   | Location                             |
| -----: | --------: | -----: | --------------: | --------------: | -------- | ------------------------------------ |
|  -2.5% | -258.99ms | 100.0% | 10.40s → 10.14s | 43,436 → 45,315 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |     Delta |      % |            Time |           Parks | Caller     | Location                            |
| -----: | --------: | -----: | --------------: | --------------: | ---------- | ----------------------------------- |
|  -2.5% | -258.99ms | 100.0% | 10.40s → 10.14s | 43,436 → 45,315 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |             % |            Time |           Parks | Caller                                                    | Location                                      |
| -----: | --------: | ------------: | --------------: | --------------: | --------------------------------------------------------- | --------------------------------------------- |
|  -2.5% | -258.99ms |        100.0% | 10.40s → 10.14s | 43,436 → 45,315 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -3.4% |  -92.69ms | 25.9% → 25.7% |   2.70s → 2.60s | 15,494 → 16,016 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  +1.4% |  +76.31ms | 54.2% → 56.3% |   5.63s → 5.71s | 26,043 → 27,263 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -3.7% |  -72.57ms | 18.6% → 18.4% |   1.94s → 1.86s |   9,263 → 9,437 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |     Delta |      % |            Time |           Parks | Caller                                   | Location                            |
| -----: | --------: | -----: | --------------: | --------------: | ---------------------------------------- | ----------------------------------- |
|  -2.5% | -258.99ms | 100.0% | 10.40s → 10.14s | 43,436 → 45,315 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |      % |            Time |           Parks | Caller                              | Location                            |
| -----: | --------: | -----: | --------------: | --------------: | ----------------------------------- | ----------------------------------- |
|  -2.5% | -258.99ms | 100.0% | 10.40s → 10.14s | 43,436 → 45,315 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |      % |          Time | Parks | Caller                | Location                                    |
| -----: | --------: | -----: | ------------: | ----: | --------------------- | ------------------------------------------- |
|  -3.6% | -234.95ms | 100.0% | 6.52s → 6.28s |    16 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |   Delta |             % |        Time |  Parks | Caller            | Location                                  |
| ------: | ------: | ------------: | ----------: | -----: | ----------------- | ----------------------------------------- |
| removed | -6.516s | 100.0% → 0.0% | 6.52s → 0ms | 16 → 0 | `$anonfun$1(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |
|     new | +6.281s | 0.0% → 100.0% | 0ms → 6.28s | 0 → 16 | `$anonfun$2(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |     Delta |      % |          Time | Parks | Caller          | Location                                                             |
| -----: | --------: | -----: | ------------: | ----: | --------------- | -------------------------------------------------------------------- |
|  -3.6% | -234.95ms | 100.0% | 6.52s → 6.28s |    16 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a0011f9910` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a0011f9910`)

| Change |     Delta |      % |          Time | Parks | Caller           | Location                           |
| -----: | --------: | -----: | ------------: | ----: | ---------------- | ---------------------------------- |
|  -3.6% | -234.95ms | 100.0% | 6.52s → 6.28s |    16 | `map(Function1)` | `scala.collection.immutable.Range` |

##### `map(Function1)` (`scala.collection.immutable.Range`)

| Change |     Delta |      % |          Time | Parks | Caller                  | Location                                  |
| -----: | --------: | -----: | ------------: | ----: | ----------------------- | ----------------------------------------- |
|  -3.6% | -234.95ms | 100.0% | 6.52s → 6.28s |    16 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |     Delta |      % |          Time | Parks | Caller                  | Location                                  |
| -----: | --------: | -----: | ------------: | ----: | ----------------------- | ----------------------------------------- |
|  -3.6% | -234.95ms | 100.0% | 6.52s → 6.28s |    16 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change |     Delta |      % |          Time | Parks | Caller               | Location                                  |
| -----: | --------: | -----: | ------------: | ----: | -------------------- | ----------------------------------------- |
|  -3.6% | -234.95ms | 100.0% | 6.52s → 6.28s |    16 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|  Change |   Delta |             % |        Time |  Parks | Caller                                                                                                                 | Location                                    |
| ------: | ------: | ------------: | ----------: | -----: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed | -6.516s | 100.0% → 0.0% | 6.52s → 0ms | 17 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
|     new | +6.281s | 0.0% → 100.0% | 0ms → 6.28s | 0 → 17 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a0011583b8`)

| Change |     Delta |      % |          Time | Parks | Caller                     | Location                             |
| -----: | --------: | -----: | ------------: | ----: | -------------------------- | ------------------------------------ |
|  -3.6% | -234.85ms | 100.0% | 6.52s → 6.28s |    17 | `apply(Object): BoxedUnit` | `scala.runtime.function.JProcedure1` |

##### `apply(Object): BoxedUnit` (`scala.runtime.function.JProcedure1`)

| Change |     Delta |      % |          Time | Parks | Caller                  | Location                             |
| -----: | --------: | -----: | ------------: | ----: | ----------------------- | ------------------------------------ |
|  -3.6% | -234.85ms | 100.0% | 6.52s → 6.28s |    17 | `apply(Object): Object` | `scala.runtime.function.JProcedure1` |

##### `apply(Object): Object` (`scala.runtime.function.JProcedure1`)

| Change |     Delta |      % |          Time | Parks | Caller               | Location                          |
| -----: | --------: | -----: | ------------: | ----: | -------------------- | --------------------------------- |
|  -3.6% | -234.85ms | 100.0% | 6.52s → 6.28s |    17 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change |     Delta |      % |          Time | Parks | Caller                                                                        | Location                                    |
| -----: | --------: | -----: | ------------: | ----: | ----------------------------------------------------------------------------- | ------------------------------------------- |
|  -3.6% | -234.85ms | 100.0% | 6.52s → 6.28s |    17 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a001001800`)

| Change |     Delta |      % |          Time | Parks | Caller                           | Location                                            |
| -----: | --------: | -----: | ------------: | ----: | -------------------------------- | --------------------------------------------------- |
|  -3.6% | -234.85ms | 100.0% | 6.52s → 6.28s |    17 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a00100d800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a00100d800`)

| Change |     Delta |      % |          Time | Parks | Caller                                           | Location                           |
| -----: | --------: | -----: | ------------: | ----: | ------------------------------------------------ | ---------------------------------- |
|  -3.6% | -234.85ms | 100.0% | 6.52s → 6.28s |    17 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |     Delta |      % |          Time | Parks | Caller                         | Location                                          |
| -----: | --------: | -----: | ------------: | ----: | ------------------------------ | ------------------------------------------------- |
|  -3.6% | -234.85ms | 100.0% | 6.52s → 6.28s |    17 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |     Delta |      % |          Time | Parks | Caller                     | Location                                          |
| -----: | --------: | -----: | ------------: | ----: | -------------------------- | ------------------------------------------------- |
|  -3.6% | -234.85ms | 100.0% | 6.52s → 6.28s |    17 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |     Delta |      % |          Time | Parks | Caller                     | Location                   |
| -----: | --------: | -----: | ------------: | ----: | -------------------------- | -------------------------- |
|  -3.6% | -234.85ms | 100.0% | 6.52s → 6.28s |    17 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |     Delta |      % |          Time | Parks | Caller                                                      | Location                        |
| -----: | --------: | -----: | ------------: | ----: | ----------------------------------------------------------- | ------------------------------- |
|  -3.6% | -234.85ms | 100.0% | 6.52s → 6.28s |    17 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |    Delta |      % |          Time |           Parks | Caller                 | Location                            |
| -----: | -------: | -----: | ------------: | --------------: | ---------------------- | ----------------------------------- |
|  -3.4% | -92.69ms | 100.0% | 2.70s → 2.60s | 15,494 → 16,016 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |    Delta |             % |              Time |         Parks | Caller                         | Location                                               |
| -----: | -------: | ------------: | ----------------: | ------------: | ------------------------------ | ------------------------------------------------------ |
|  -2.8% | -40.22ms | 74.1% → 74.8% |     1.43s → 1.39s | 6,342 → 6,572 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -5.4% | -39.52ms | 37.8% → 37.2% | 731.8ms → 692.3ms | 4,250 → 4,189 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |   Delta |             % |        Time |  Parks | Callee               | Location                                  |
| -----: | ------: | ------------: | ----------: | -----: | -------------------- | ----------------------------------------- |
|    new | +6.281s | 0.0% → 100.0% | 0ms → 6.28s | 0 → 17 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |   Delta |             % |        Time |  Parks | Callee                | Location                                    |
| -----: | ------: | ------------: | ----------: | -----: | --------------------- | ------------------------------------------- |
|    new | +6.281s | 0.0% → 100.0% | 0ms → 6.28s | 0 → 16 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |             % |            Time |           Parks | Callee            | Location                                 |
| -----: | --------: | ------------: | --------------: | --------------: | ----------------- | ---------------------------------------- |
|  +7.2% |   +1.613s | 93.9% → 95.7% | 22.39s → 24.01s | 24,632 → 25,545 | `park()`          | `java.util.concurrent.locks.LockSupport` |
| -26.5% | -385.27ms |   6.1% → 4.3% |   1.45s → 1.07s |   3,972 → 4,055 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change |   Delta |      % |            Time |           Parks | Callee                | Location                   |
| -----: | ------: | -----: | --------------: | --------------: | --------------------- | -------------------------- |
|  +2.8% | +1.120s | 100.0% | 39.30s → 40.42s | 68,084 → 70,876 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |             % |            Time |           Parks | Callee                                   | Location                            |
| -----: | --------: | ------------: | --------------: | --------------: | ---------------------------------------- | ----------------------------------- |
|  +5.2% |   +1.228s | 69.6% → 71.2% | 23.85s → 25.07s | 28,604 → 29,600 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |
|  -2.5% | -258.99ms | 30.4% → 28.8% | 10.40s → 10.14s | 43,436 → 45,315 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |     Delta |      % |            Time |           Parks | Callee                              | Location                            |
| -----: | --------: | -----: | --------------: | --------------: | ----------------------------------- | ----------------------------------- |
|  +2.8% | +969.20ms | 100.0% | 34.24s → 35.21s | 72,040 → 74,915 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |    Delta |      % |          Time |           Parks | Callee     | Location                            |
| -----: | -------: | -----: | ------------: | --------------: | ---------- | ----------------------------------- |
|  +1.4% | +76.31ms | 100.0% | 5.63s → 5.71s | 26,043 → 27,263 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

| Change |   Delta |      % |          Time | Parks | Callee                | Location                   |
| -----: | ------: | -----: | ------------: | ----: | --------------------- | -------------------------- |
| +75.1% | +0.10ms | 100.0% | 0.1ms → 0.2ms |     1 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `awaitNanos(long)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

| Change |   Delta |      % |          Time | Parks | Callee                    | Location                                 |
| -----: | ------: | -----: | ------------: | ----: | ------------------------- | ---------------------------------------- |
| +75.1% | +0.10ms | 100.0% | 0.1ms → 0.2ms |     1 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `awaitTermination(long, TimeUnit)` (`java.util.concurrent.ForkJoinPool`)

| Change |   Delta |      % |          Time | Parks | Callee             | Location                                                                |
| -----: | ------: | -----: | ------------: | ----: | ------------------ | ----------------------------------------------------------------------- |
| +75.1% | +0.10ms | 100.0% | 0.1ms → 0.2ms |     1 | `awaitNanos(long)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `tearDown()` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |   Delta |      % |          Time | Parks | Callee                             | Location                            |
| -----: | ------: | -----: | ------------: | ----: | ---------------------------------- | ----------------------------------- |
| +75.1% | +0.10ms | 100.0% | 0.1ms → 0.2ms |     1 | `awaitTermination(long, TimeUnit)` | `java.util.concurrent.ForkJoinPool` |

##### `tearDownAfterAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |   Delta |      % |          Time | Parks | Callee       | Location                                    |
| -----: | ------: | -----: | ------------: | ----: | ------------ | ------------------------------------------- |
| +75.1% | +0.10ms | 100.0% | 0.1ms → 0.2ms |     1 | `tearDown()` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |   Delta |             % |        Time |  Parks | Callee               | Location                                  |
| ------: | ------: | ------------: | ----------: | -----: | -------------------- | ----------------------------------------- |
| removed | -6.516s | 100.0% → 0.0% | 6.52s → 0ms | 17 → 0 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |   Delta |             % |        Time |  Parks | Callee                | Location                                    |
| ------: | ------: | ------------: | ----------: | -----: | --------------------- | ------------------------------------------- |
| removed | -6.516s | 100.0% → 0.0% | 6.52s → 0ms | 16 → 0 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |             % |            Time |           Parks | Callee                                                    | Location                                      |
| -----: | --------: | ------------: | --------------: | --------------: | --------------------------------------------------------- | --------------------------------------------- |
|  -2.9% | -493.93ms |        100.0% | 16.91s → 16.42s | 43,452 → 45,331 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
|  -3.4% |  -92.69ms | 16.0% → 15.9% |   2.70s → 2.60s | 15,494 → 16,016 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  +1.4% |  +76.31ms | 33.3% → 34.8% |   5.63s → 5.71s | 26,043 → 27,263 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

| Change |     Delta |      % |          Time |         Parks | Callee                | Location                   |
| -----: | --------: | -----: | ------------: | ------------: | --------------------- | -------------------------- |
| -26.5% | -385.27ms | 100.0% | 1.45s → 1.07s | 3,972 → 4,055 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |      % |            Time |           Parks | Callee                 | Location                            |
| -----: | --------: | -----: | --------------: | --------------: | ---------------------- | ----------------------------------- |
|  -2.5% | -258.99ms | 100.0% | 10.40s → 10.14s | 43,436 → 45,315 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |     Delta |      % |            Time |           Parks | Callee                      | Location                                               |
| -----: | --------: | -----: | --------------: | --------------: | --------------------------- | ------------------------------------------------------ |
|  -2.5% | -258.99ms | 100.0% | 10.40s → 10.14s | 43,436 → 45,315 | `join()`                    | `java.util.concurrent.ForkJoinTask`                    |
|  -2.8% |  -40.22ms |  13.8% |   1.43s → 1.39s |   6,342 → 6,572 | `computeDirectly(): Object` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |     Delta |      % |            Time |           Parks | Callee      | Location                                               |
| -----: | --------: | -----: | --------------: | --------------: | ----------- | ------------------------------------------------------ |
|  -2.5% | -258.99ms | 100.0% | 10.40s → 10.14s | 43,436 → 45,315 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |           % |              Time |           Parks | Callee   | Location                                            |
| -----: | --------: | ----------: | ----------------: | --------------: | -------- | --------------------------------------------------- |
|  -2.5% | -258.99ms |      100.0% |   10.40s → 10.14s | 43,436 → 45,315 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|  -5.4% |  -39.52ms | 7.0% → 6.8% | 731.8ms → 692.3ms |   4,250 → 4,189 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |     Delta |      % |            Time |           Parks | Callee     | Location                            |
| -----: | --------: | -----: | --------------: | --------------: | ---------- | ----------------------------------- |
|  -2.5% | -258.99ms | 100.0% | 10.40s → 10.14s | 43,436 → 45,315 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |      % |            Time |           Parks | Callee                                               | Location                                      |
| -----: | --------: | -----: | --------------: | --------------: | ---------------------------------------------------- | --------------------------------------------- |
|  -2.5% | -258.99ms | 100.0% | 10.40s → 10.14s | 43,436 → 45,315 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |      % |          Time | Parks | Callee                 | Location                            |
| -----: | --------: | -----: | ------------: | ----: | ---------------------- | ----------------------------------- |
|  -3.6% | -234.95ms | 100.0% | 6.52s → 6.28s |    16 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |     Delta |      % |          Time | Parks | Callee  | Location                            |
| -----: | --------: | -----: | ------------: | ----: | ------- | ----------------------------------- |
|  -3.6% | -234.95ms | 100.0% | 6.52s → 6.28s |    16 | `get()` | `java.util.concurrent.ForkJoinTask` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |   Delta |             % |        Time |  Parks | Callee            | Location                                  |
| ------: | ------: | ------------: | ----------: | -----: | ----------------- | ----------------------------------------- |
| removed | -6.516s | 100.0% → 0.0% | 6.52s → 0ms | 16 → 0 | `$anonfun$1(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |
|     new | +6.281s | 0.0% → 100.0% | 0ms → 6.28s | 0 → 16 | `$anonfun$2(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a0011f9910`)

| Change |     Delta |      % |          Time | Parks | Callee                       | Location                                  |
| -----: | --------: | -----: | ------------: | ----: | ---------------------------- | ----------------------------------------- |
|  -3.6% | -234.95ms | 100.0% | 6.52s → 6.28s |    16 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `map(Function1)` (`scala.collection.immutable.Range`)

| Change |     Delta |      % |          Time | Parks | Callee          | Location                                                             |
| -----: | --------: | -----: | ------------: | ----: | --------------- | -------------------------------------------------------------------- |
|  -3.6% | -234.95ms | 100.0% | 6.52s → 6.28s |    16 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a0011f9910` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |     Delta |      % |          Time | Parks | Callee           | Location                           |
| -----: | --------: | -----: | ------------: | ----: | ---------------- | ---------------------------------- |
|  -3.6% | -234.95ms | 100.0% | 6.52s → 6.28s |    16 | `map(Function1)` | `scala.collection.immutable.Range` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change |     Delta |      % |          Time | Parks | Callee                  | Location                                  |
| -----: | --------: | -----: | ------------: | ----: | ----------------------- | ----------------------------------------- |
|  -3.6% | -234.95ms | 100.0% | 6.52s → 6.28s |    16 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

| Change |     Delta |      % |          Time | Parks | Callee                               | Location                                  |
| -----: | --------: | -----: | ------------: | ----: | ------------------------------------ | ----------------------------------------- |
|  -3.6% | -234.95ms | 100.0% | 6.52s → 6.28s |    16 | `executeOperation(int)`              | `org.renaissance.harness.ExecutionDriver` |
| +75.1% |   +0.10ms |  <0.1% | 0.1ms → 0.2ms |     1 | `tearDownAfterAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a0011583b8`)

|  Change |   Delta |             % |        Time |  Parks | Callee                                                                                                                 | Location                                    |
| ------: | ------: | ------------: | ----------: | -----: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed | -6.516s | 100.0% → 0.0% | 6.52s → 0ms | 17 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
|     new | +6.281s | 0.0% → 100.0% | 0ms → 6.28s | 0 → 17 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object): BoxedUnit` (`scala.runtime.function.JProcedure1`)

| Change |     Delta |      % |          Time | Parks | Callee              | Location                                                               |
| -----: | --------: | -----: | ------------: | ----: | ------------------- | ---------------------------------------------------------------------- |
|  -3.6% | -234.85ms | 100.0% | 6.52s → 6.28s |    17 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a0011583b8` |

##### `apply(Object): Object` (`scala.runtime.function.JProcedure1`)

| Change |     Delta |      % |          Time | Parks | Callee                     | Location                             |
| -----: | --------: | -----: | ------------: | ----: | -------------------------- | ------------------------------------ |
|  -3.6% | -234.85ms | 100.0% | 6.52s → 6.28s |    17 | `apply(Object): BoxedUnit` | `scala.runtime.function.JProcedure1` |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change |     Delta |      % |          Time | Parks | Callee                  | Location                             |
| -----: | --------: | -----: | ------------: | ----: | ----------------------- | ------------------------------------ |
|  -3.6% | -234.85ms | 100.0% | 6.52s → 6.28s |    17 | `apply(Object): Object` | `scala.runtime.function.JProcedure1` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a001001800`)

| Change |     Delta |      % |          Time | Parks | Callee           | Location                                   |
| -----: | --------: | -----: | ------------: | ----: | ---------------- | ------------------------------------------ |
|  -3.6% | -234.85ms | 100.0% | 6.52s → 6.28s |    17 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a00100d800`)

| Change |     Delta |      % |          Time | Parks | Callee                         | Location                                             |
| -----: | --------: | -----: | ------------: | ----: | ------------------------------ | ---------------------------------------------------- |
|  -3.6% | -234.85ms | 100.0% | 6.52s → 6.28s |    17 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a001001800` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |     Delta |      % |          Time | Parks | Callee                           | Location                                            |
| -----: | --------: | -----: | ------------: | ----: | -------------------------------- | --------------------------------------------------- |
|  -3.6% | -234.85ms | 100.0% | 6.52s → 6.28s |    17 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a00100d800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |     Delta |      % |          Time | Parks | Callee                                           | Location                           |
| -----: | --------: | -----: | ------------: | ----: | ------------------------------------------------ | ---------------------------------- |
|  -3.6% | -234.85ms | 100.0% | 6.52s → 6.28s |    17 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |     Delta |      % |          Time | Parks | Callee                         | Location                                          |
| -----: | --------: | -----: | ------------: | ----: | ------------------------------ | ------------------------------------------------- |
|  -3.6% | -234.85ms | 100.0% | 6.52s → 6.28s |    17 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |     Delta |      % |          Time | Parks | Callee                     | Location                                          |
| -----: | --------: | -----: | ------------: | ----: | -------------------------- | ------------------------------------------------- |
|  -3.6% | -234.85ms | 100.0% | 6.52s → 6.28s |    17 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |    Delta |      % |          Time |           Parks | Callee     | Location                            |
| -----: | -------: | -----: | ------------: | --------------: | ---------- | ----------------------------------- |
|  -3.4% | -92.69ms | 100.0% | 2.70s → 2.60s | 15,494 → 16,016 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |    Delta |      % |          Time |         Parks | Callee     | Location                            |
| -----: | -------: | -----: | ------------: | ------------: | ---------- | ----------------------------------- |
|  -3.7% | -72.57ms | 100.0% | 1.94s → 1.86s | 9,263 → 9,437 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time parked in their leaf frame.

|  Change |    Delta |             % |              Time |           Parks | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------: | -------: | ------------: | ----------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     new |  +6.281s |  0.0% → 15.1% |       0ms → 6.28s |          0 → 16 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a0011f9910`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a0011583b8`) ← `apply(Object): BoxedUnit` (`scala.runtime.function.JProcedure1`) ← `apply(Object): Object` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a001001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a00100d800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|   +7.2% |  +1.613s | 54.9% → 57.9% |   22.39s → 24.01s | 24,632 → 25,545 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +15.1% | +46.70ms |   0.8% → 0.9% | 308.6ms → 355.3ms |   1,205 → 1,275 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|   +7.3% | +45.37ms |   1.5% → 1.6% | 619.0ms → 664.3ms |   2,373 → 2,601 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|   +2.7% | +38.84ms |          3.5% |     1.42s → 1.46s |   5,177 → 5,583 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  +15.4% | +17.37ms |          0.3% | 112.9ms → 130.2ms |       294 → 330 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +12.4% | +16.67ms |   0.3% → 0.4% | 134.9ms → 151.6ms |       735 → 830 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +36.7% | +16.42ms |          0.1% |   44.8ms → 61.2ms |       249 → 277 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +18.8% | +13.40ms |          0.2% |   71.3ms → 84.7ms |       397 → 408 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +19.7% |  +9.26ms |          0.1% |   47.0ms → 56.2ms |       285 → 331 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| +193.3% |  +9.20ms |         <0.1% |    4.8ms → 14.0ms |         47 → 51 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|  +72.5% |  +8.60ms |         <0.1% |   11.9ms → 20.5ms |         60 → 58 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                       |
|  +31.2% |  +8.59ms |          0.1% |   27.6ms → 36.2ms |       122 → 131 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +35.8% |  +8.34ms |          0.1% |   23.3ms → 31.6ms |         93 → 96 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +55.0% |  +8.23ms |  <0.1% → 0.1% |   15.0ms → 23.2ms |        94 → 117 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                         |
| +130.3% |  +7.92ms |         <0.1% |    6.1ms → 14.0ms |         44 → 52 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011f9cf0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                             |
|  +14.8% |  +7.77ms |          0.1% |   52.5ms → 60.3ms |       172 → 189 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +51.0% |  +7.75ms |  <0.1% → 0.1% |   15.2ms → 22.9ms |         71 → 82 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|   +7.6% |  +6.64ms |          0.2% |   87.0ms → 93.6ms |       483 → 518 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +50.8% |  +5.76ms |         <0.1% |   11.3ms → 17.1ms |       105 → 101 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)       |

### Improvements

Call stacks with the largest decrease in time parked in their leaf frame.

|  Change |     Delta |            % |              Time |           Parks | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------: | --------: | -----------: | ----------------: | --------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| removed |   -6.516s | 16.0% → 0.0% |       6.52s → 0ms |          16 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011d3668`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011545f0`) ← `apply(Object): BoxedUnit` (`scala.runtime.function.JProcedure1`) ← `apply(Object): Object` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700100d800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -26.5% | -385.27ms |  3.6% → 2.6% |     1.45s → 1.07s |   3,972 → 4,055 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|   -6.5% | -252.36ms |  9.5% → 8.7% |     3.86s → 3.61s | 13,320 → 13,850 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -23.7% |  -33.45ms |         0.3% | 140.9ms → 107.4ms |       628 → 598 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -11.5% |  -32.25ms |  0.7% → 0.6% | 281.7ms → 249.4ms |       770 → 750 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|   -7.9% |  -30.66ms |  1.0% → 0.9% | 388.8ms → 358.2ms |   2,012 → 2,108 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -62.3% |  -12.51ms |        <0.1% |    20.1ms → 7.6ms |         64 → 54 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -30.6% |  -12.34ms |         0.1% |   40.3ms → 28.0ms |       221 → 194 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -18.6% |  -11.22ms |         0.1% |   60.4ms → 49.2ms |       249 → 279 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011f9cf0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -51.8% |  -11.17ms | 0.1% → <0.1% |   21.6ms → 10.4ms |         75 → 65 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                     |
|   -5.7% |  -10.31ms |         0.4% | 180.6ms → 170.2ms |       599 → 651 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -35.3% |  -10.11ms | 0.1% → <0.1% |   28.7ms → 18.6ms |       104 → 108 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|   -7.6% |   -9.88ms |         0.3% | 130.7ms → 120.8ms |       756 → 781 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011f9cf0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|   -8.2% |   -9.87ms |         0.3% | 120.1ms → 110.2ms |       574 → 538 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011f9cf0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -48.0% |   -8.62ms |        <0.1% |    18.0ms → 9.3ms |         72 → 65 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -15.3% |   -8.53ms |         0.1% |   55.7ms → 47.2ms |       295 → 283 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -94.3% |   -8.01ms |        <0.1% |     8.5ms → 0.5ms |           6 → 7 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|  -29.1% |   -6.66ms | 0.1% → <0.1% |   22.9ms → 16.2ms |       126 → 125 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -95.4% |   -6.15ms |        <0.1% |     6.4ms → 0.3ms |          14 → 8 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -21.6% |   -5.94ms |         0.1% |   27.5ms → 21.6ms |       123 → 115 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly(): Map` ← `computeDirectly(): Object` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011f9cf0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

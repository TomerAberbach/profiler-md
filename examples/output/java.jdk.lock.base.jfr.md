# Lock contention profile

Blocked 40.76s over 72,070 contentions (565.5µs per contention).

| Category         |      % |   Time | Contentions |
| ---------------- | -----: | -----: | ----------: |
| Standard library | 100.0% | 40.76s |      72,070 |

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

Functions with the most time blocked within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|      % |   Time | Contentions | Function                                      | Location                                 |
| -----: | -----: | ----------: | --------------------------------------------- | ---------------------------------------- |
| 100.0% | 40.76s |      72,057 | `park(boolean, long)`                         | `jdk.internal.misc.Unsafe`               |
|  <0.1% |  0.9ms |           4 | `loadClass(String, boolean)`                  | `java.lang.ClassLoader`                  |
|  <0.1% |  0.2ms |           1 | `loadClassOrNull(String, boolean)`            | `jdk.internal.loader.BuiltinClassLoader` |
|  <0.1% | 41.7µs |           2 | `doubleStream(Spliterator$OfDouble, boolean)` | `java.util.stream.StreamSupport`         |
|  <0.1% | 32.5µs |           4 | `opWrapSink(int, Sink)`                       | `java.util.stream.DoublePipeline$1`      |
|  <0.1% |  9.2µs |           1 | `periodicTask()`                              | `jdk.jfr.internal.PlatformRecorder`      |
|  <0.1% |  3.8µs |           1 | `getId()`                                     | `jdk.jfr.internal.PlatformRecording`     |

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

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % |   Time | Contentions | Caller                    | Location                                 |
| ----: | -----: | ----------: | ------------------------- | ---------------------------------------- |
| 96.4% | 39.30s |      68,084 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
|  3.6% |  1.45s |       3,972 | `parkUntil(long)`         | `java.util.concurrent.locks.LockSupport` |
| <0.1% |  0.1ms |           1 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

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

|      % |   Time | Contentions | Function                                                                                                               | Location                                                               |
| -----: | -----: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% | 40.76s |      72,057 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                             |
|  96.4% | 39.30s |      68,084 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                               |
|  84.0% | 34.24s |      72,050 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
|  84.0% | 34.24s |      72,050 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                            |
|  58.5% | 23.85s |      28,604 | `awaitWork(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
|  41.5% | 16.91s |      43,459 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
|  25.5% | 10.40s |      43,446 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  25.5% | 10.40s |      43,446 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                                   |
|  25.5% | 10.40s |      43,446 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
|  25.5% | 10.40s |      43,446 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  25.5% | 10.40s |      43,446 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                                    |
|  25.5% | 10.40s |      43,443 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                    |
|  16.0% |  6.52s |          17 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  16.0% |  6.52s |          17 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  16.0% |  6.52s |          17 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011545f0` |
|  16.0% |  6.52s |          17 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
|  16.0% |  6.52s |          17 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  16.0% |  6.52s |          17 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  16.0% |  6.52s |          17 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  16.0% |  6.52s |          17 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|      % |   Time | Contentions | Function                                             | Location                                             |
| -----: | -----: | ----------: | ---------------------------------------------------- | ---------------------------------------------------- |
| 100.0% | 40.76s |      72,057 | `park(boolean, long)`                                | `jdk.internal.misc.Unsafe`                           |
|  96.4% | 39.30s |      68,084 | `park()`                                             | `java.util.concurrent.locks.LockSupport`             |
|  84.0% | 34.24s |      72,050 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
|  84.0% | 34.24s |      72,050 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`          |
|  58.5% | 23.85s |      28,604 | `awaitWork(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
|  41.5% | 16.91s |      43,459 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                  |
|  25.5% | 10.40s |      43,446 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                 |
|  25.5% | 10.40s |      43,446 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                  |
|  25.5% | 10.40s |      43,446 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  25.5% | 10.40s |      43,446 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                  |
|  25.5% | 10.40s |      43,443 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                  |
|  16.0% |  6.52s |          17 | `apply(Object)`                                      | `scala.runtime.function.JProcedure1`                 |
|  16.0% |  6.52s |          17 | `foreach(Function1)`                                 | `scala.collection.immutable.List`                    |
|  16.0% |  6.52s |          17 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000007001001800` |
|  16.0% |  6.52s |          17 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x000000700100d800`  |
|  16.0% |  6.52s |          17 | `invokeExact_MT(Object, Object, Object, Object)`     | `java.lang.invoke.Invokers$Holder`                   |
|  16.0% |  6.52s |          17 | `invokeImpl(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  16.0% |  6.52s |          17 | `invoke(Object, Object[])`                           | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  16.0% |  6.52s |          17 | `invoke(Object, Object[])`                           | `java.lang.reflect.Method`                           |
|  16.0% |  6.52s |          16 | `get()`                                              | `java.util.concurrent.ForkJoinTask`                  |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % |   Time | Contentions | Caller                    | Location                                 |
| ----: | -----: | ----------: | ------------------------- | ---------------------------------------- |
| 96.4% | 39.30s |      68,084 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
|  3.6% |  1.45s |       3,972 | `parkUntil(long)`         | `java.util.concurrent.locks.LockSupport` |
| <0.1% |  0.1ms |           1 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|     % |   Time | Contentions | Caller                              | Location                            |
| ----: | -----: | ----------: | ----------------------------------- | ----------------------------------- |
| 57.0% | 22.39s |      24,632 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |
| 43.0% | 16.91s |      43,452 | `awaitDone(int, long)`              | `java.util.concurrent.ForkJoinTask` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |   Time | Contentions | Caller  | Location                                    |
| -----: | -----: | ----------: | ------- | ------------------------------------------- |
| 100.0% | 34.24s |      72,050 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |   Time | Contentions | Caller                              | Location                            |
| -----: | -----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 23.85s |      28,604 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % |   Time | Contentions | Caller   | Location                            |
| ----: | -----: | ----------: | -------- | ----------------------------------- |
| 61.5% | 10.40s |      43,443 | `join()` | `java.util.concurrent.ForkJoinTask` |
| 38.5% |  6.52s |          16 | `get()`  | `java.util.concurrent.ForkJoinTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |   Time | Contentions | Caller   | Location                             |
| -----: | -----: | ----------: | -------- | ------------------------------------ |
| 100.0% | 10.40s |      43,446 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |   Time | Contentions | Caller     | Location                            |
| -----: | -----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 10.40s |      43,446 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time | Contentions | Caller                                                    | Location                                      |
| -----: | -----: | ----------: | --------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 10.40s |      43,446 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  54.2% |  5.63s |      26,050 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  25.9% |  2.70s |      15,494 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  18.6% |  1.94s |       9,265 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |   Time | Contentions | Caller                                   | Location                            |
| -----: | -----: | ----------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 10.40s |      43,446 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |   Time | Contentions | Caller                              | Location                            |
| -----: | -----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 10.40s |      43,446 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time | Contentions | Caller      | Location                                               |
| -----: | -----: | ----------: | ----------- | ------------------------------------------------------ |
| 100.0% | 10.40s |      43,443 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|      % |  Time | Contentions | Caller                                                                                                                 | Location                                    |
| -----: | ----: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 6.52s |          17 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Contentions | Caller              | Location                                                               |
| -----: | ----: | ----------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 6.52s |          17 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011545f0` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011545f0`)

|      % |  Time | Contentions | Caller          | Location                             |
| -----: | ----: | ----------: | --------------- | ------------------------------------ |
| 100.0% | 6.52s |          17 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|      % |  Time | Contentions | Caller               | Location                             |
| -----: | ----: | ----------: | -------------------- | ------------------------------------ |
| 100.0% | 6.52s |          17 | `apply(Object)`      | `scala.runtime.function.JProcedure1` |
| 100.0% | 6.52s |          17 | `foreach(Function1)` | `scala.collection.immutable.List`    |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |  Time | Contentions | Caller                                                                        | Location                                    |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 6.52s |          17 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Contentions | Caller           | Location                                    |
| -----: | ----: | ----------: | ---------------- | ------------------------------------------- |
| 100.0% | 6.52s |          17 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Contentions | Caller           | Location                                   |
| -----: | ----: | ----------: | ---------------- | ------------------------------------------ |
| 100.0% | 6.52s |          17 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |  Time | Contentions | Caller                         | Location                                             |
| -----: | ----: | ----------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 6.52s |          17 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001800` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001800`)

|      % |  Time | Contentions | Caller                           | Location                                            |
| -----: | ----: | ----------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 6.52s |          17 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700100d800` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700100d800`)

|      % |  Time | Contentions | Caller                                           | Location                           |
| -----: | ----: | ----------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 6.52s |          17 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |  Time | Contentions | Caller                         | Location                                          |
| -----: | ----: | ----------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 6.52s |          17 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |  Time | Contentions | Caller                     | Location                                          |
| -----: | ----: | ----------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 6.52s |          17 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |  Time | Contentions | Caller                     | Location                   |
| -----: | ----: | ----------: | -------------------------- | -------------------------- |
| 100.0% | 6.52s |          17 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |  Time | Contentions | Caller                                                      | Location                        |
| -----: | ----: | ----------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% | 6.52s |          17 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Caller                | Location                                    |
| -----: | ----: | ----------: | --------------------- | ------------------------------------------- |
| 100.0% | 6.52s |          16 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % |   Time | Contentions | Callee                | Location                   |
| -----: | -----: | ----------: | --------------------- | -------------------------- |
| 100.0% | 39.30s |      68,084 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % |   Time | Contentions | Callee                                   | Location                            |
| ----: | -----: | ----------: | ---------------------------------------- | ----------------------------------- |
| 69.6% | 23.85s |      28,604 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |
| 30.4% | 10.40s |      43,446 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % |   Time | Contentions | Callee                              | Location                            |
| -----: | -----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 34.24s |      72,050 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % |   Time | Contentions | Callee            | Location                                 |
| ----: | -----: | ----------: | ----------------- | ---------------------------------------- |
| 93.9% | 22.39s |      24,632 | `park()`          | `java.util.concurrent.locks.LockSupport` |
|  6.1% |  1.45s |       3,972 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time | Contentions | Callee                                                    | Location                                      |
| -----: | -----: | ----------: | --------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 16.91s |      43,452 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
|  33.3% |  5.63s |      26,050 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  16.0% |  2.70s |      15,494 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |   Time | Contentions | Callee              | Location                                               |
| -----: | -----: | ----------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 10.40s |      43,443 | `join()`            | `java.util.concurrent.ForkJoinTask`                    |
|  13.8% |  1.43s |       6,352 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |   Time | Contentions | Callee      | Location                                               |
| -----: | -----: | ----------: | ----------- | ------------------------------------------------------ |
| 100.0% | 10.40s |      43,446 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |    Time | Contentions | Callee   | Location                                            |
| -----: | ------: | ----------: | -------- | --------------------------------------------------- |
| 100.0% |  10.40s |      43,446 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|   7.0% | 731.8ms |       4,252 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |   Time | Contentions | Callee     | Location                            |
| -----: | -----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 10.40s |      43,446 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |   Time | Contentions | Callee                                               | Location                                      |
| -----: | -----: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 10.40s |      43,446 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time | Contentions | Callee                 | Location                            |
| -----: | -----: | ----------: | ---------------------- | ----------------------------------- |
| 100.0% | 10.40s |      43,443 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|      % |  Time | Contentions | Callee                               | Location                                  |
| -----: | ----: | ----------: | ------------------------------------ | ----------------------------------------- |
| 100.0% | 6.52s |          16 | `executeOperation(int)`              | `org.renaissance.harness.ExecutionDriver` |
|  <0.1% | 0.1ms |           1 | `tearDownAfterAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Contentions | Callee               | Location                                  |
| -----: | ----: | ----------: | -------------------- | ----------------------------------------- |
| 100.0% | 6.52s |          17 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011545f0`)

|      % |  Time | Contentions | Callee                                                                                                                 | Location                                    |
| -----: | ----: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 6.52s |          17 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|      % |  Time | Contentions | Callee              | Location                                                               |
| -----: | ----: | ----------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 6.52s |          17 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011545f0` |
| 100.0% | 6.52s |          17 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |  Time | Contentions | Callee          | Location                             |
| -----: | ----: | ----------: | --------------- | ------------------------------------ |
| 100.0% | 6.52s |          17 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Contentions | Callee               | Location                          |
| -----: | ----: | ----------: | -------------------- | --------------------------------- |
| 100.0% | 6.52s |          17 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Contentions | Callee                                                                        | Location                                    |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 6.52s |          17 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |  Time | Contentions | Callee           | Location                                    |
| -----: | ----: | ----------: | ---------------- | ------------------------------------------- |
| 100.0% | 6.52s |          17 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001800`)

|      % |  Time | Contentions | Callee           | Location                                   |
| -----: | ----: | ----------: | ---------------- | ------------------------------------------ |
| 100.0% | 6.52s |          17 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700100d800`)

|      % |  Time | Contentions | Callee                         | Location                                             |
| -----: | ----: | ----------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 6.52s |          17 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001800` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |  Time | Contentions | Callee                           | Location                                            |
| -----: | ----: | ----------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 6.52s |          17 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000700100d800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |  Time | Contentions | Callee                                           | Location                           |
| -----: | ----: | ----------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 6.52s |          17 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |  Time | Contentions | Callee                         | Location                                          |
| -----: | ----: | ----------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 6.52s |          17 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |  Time | Contentions | Callee                     | Location                                          |
| -----: | ----: | ----------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 6.52s |          17 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee                 | Location                            |
| -----: | ----: | ----------: | ---------------------- | ----------------------------------- |
| 100.0% | 6.52s |          16 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

## Hottest call stacks

Call stacks with the most time blocked in their leaf frame.

|     % |    Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----: | ------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 54.9% |  22.39s |      24,632 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 16.0% |   6.52s |          16 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011d3668`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x00000070011545f0`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700100d800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                           |
|  9.5% |   3.86s |      13,320 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  3.6% |   1.45s |       3,972 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  3.5% |   1.42s |       5,177 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.5% | 619.0ms |       2,373 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.0% | 388.8ms |       2,012 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.8% | 308.6ms |       1,205 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                         |
|  0.7% | 281.7ms |         770 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.6% | 243.0ms |       1,249 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.4% | 180.6ms |         599 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.3% | 140.9ms |         628 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.3% | 134.9ms |         735 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                   |
|  0.3% | 134.3ms |         550 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)       |
|  0.3% | 130.7ms |         756 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d7aa8`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.3% | 120.1ms |         574 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d7aa8`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.3% | 112.9ms |         294 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.2% |  87.0ms |         483 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|  0.2% |  71.3ms |         397 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                   |
|  0.2% |  68.4ms |         306 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011d7aa8`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                       |

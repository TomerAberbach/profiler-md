# Sampling profile diff

Collected 1,303 → 1,406 samples (+103 samples, +7.9%).

| Category         | Change | Delta |             % |       Samples |
| ---------------- | -----: | ----: | ------------: | ------------: |
| Ours             |  +8.5% |   +99 | 89.7% → 90.2% | 1,169 → 1,268 |
| Standard library |  +3.0% |    +4 |  10.3% → 9.8% |     134 → 138 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 1,294 → 1,390 samples (99.3% → 98.9%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 1,294 → 1,390 samples (99.3% → 98.9%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       ├── … 1,291 → 1,385 samples (99.1% → 98.5%) doExec() at java.util.concurrent.ForkJoinTask
│       │   ├── … 1,286 → 1,381 samples (98.7% → 98.2%) exec() at java.util.concurrent.RecursiveTask
│       │   │   └── 1,286 → 1,380 samples (98.7% → 98.2%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│       │   │       ├── 673 → 782 samples (51.7% → 55.6%, self 1.2% → 2.1%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │       │   ├── … 495 → 567 samples (38.0% → 40.3%, self 13.1% → 12.9%) findNearestCentroid() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │       │   │   └── 324 → 386 samples (24.9% → 27.5%) distance(Double[], Double[])
│       │   │       │   └── … 162 → 185 samples (12.4% → 13.2%, self 6.0% → 7.0%) collectClusters(int[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │       │       ├── 53 → 51 samples (4.1% → 3.6%, self 4.1% → 3.2%) computeIfAbsent(Object, Function) at java.util.HashMap
│       │   │       │       │   └── 0 → 5 samples (0.0% → 0.4%) apply(Object) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000780121ece0
│       │   │       │       │       └── 0 → 2 samples (0.0% → 0.1%) lambda$collectClusters$0(Double[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │       │       └── … 31 → 36 samples (2.4% → 2.6%, self 3.0% → 2.6% globally) copyOf(Object[], int) at java.util.Arrays
│       │   │       ├── 577 → 559 samples (44.3% → 39.8%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       │   │       │   └── … 577 → 559 samples (44.3% → 39.8%, self 2.1% → 0.4%) vectorSum() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       │   │       │       └── 549 → 554 samples (42.1% → 39.4%) accumulate(Double[], double[])
│       │   │       ├── … 18 → 14 samples (1.4% → 1.0%) merge(Map, Map) at org.renaissance.jdk.concurrent.JavaKMeans
│       │   │       │   ├── … 13 → 5 samples (1.0% → 0.4%) lambda$merge$7(Map, Object, List) at org.renaissance.jdk.concurrent.JavaKMeans
│       │   │       │   │   └── 12 → 3 samples (0.9% → 0.2%) merge(Object, Object, BiFunction) at java.util.HashMap
│       │   │       │   │       └── … 8 → 0 samples (0.6% → 0.0%) copyOf(Object[], int) at java.util.Arrays
│       │   │       │   └── … 0 → 2 samples (0.0% → 0.1%) nextNode() at java.util.HashMap$HashIterator
│       │   │       ├── 15 → 14 samples (1.2% → 1.0%) join() at java.util.concurrent.ForkJoinTask
│       │   │       │   └── 14 → 13 samples (1.1% → 0.9%) awaitDone(int, long)
│       │   │       │       ├── 10 → 8 samples (0.8% → 0.6%) helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean) at java.util.concurrent.ForkJoinPool
│       │   │       │       └── 1 → 3 samples (0.1% → 0.2%) tryRemoveAndExec(ForkJoinTask, boolean) at java.util.concurrent.ForkJoinPool$WorkQueue
│       │   │       ├── 1 → 2 samples (0.1%) fork() at java.util.concurrent.ForkJoinTask
│       │   │       │   └── 1 → 2 samples (0.1%) push(ForkJoinTask, ForkJoinPool, boolean) at java.util.concurrent.ForkJoinPool$WorkQueue
│       │   │       ├── … 0 → 2 samples (0.0% → 0.1%) add(double[], double[]) at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       │   │       └── … 0 → 1 sample (0.0% → 0.1%) average(List) at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│       │   └── … 4 → 0 samples (0.3% → 0.0%) unpark(Object) at jdk.internal.misc.Unsafe
│       └── 0 → 3 samples (0.0% → 0.2%) awaitWork(ForkJoinPool$WorkQueue)
├── … 5 → 10 samples (0.4% → 0.7%) applyVoid(Object) at org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780119c3b8
│   ├── 0 → 10 samples (0.0% → 0.7%) runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor) at org.renaissance.harness.RenaissanceSuite$
│   │   ├── … 0 → 5 samples (0.0% → 0.4%) accept(Object) at java.util.stream.ReduceOps$3ReducingSink
│   │   └── … 0 → 1 sample (0.0% → 0.1%) write0(FileDescriptor, long, int) at sun.nio.ch.UnixFileDispatcherImpl
│   └── 5 → 0 samples (0.4% → 0.0%) runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor) at org.renaissance.harness.RenaissanceSuite$
│       ├── … 2 → 0 samples (0.2% → 0.0%) inflateBytesBytes(long, byte[], int, int, byte[], int, int) at java.util.zip.Inflater
│       └── … 1 → 0 samples (0.1% → 0.0%) wrapSink(Sink) at java.util.stream.AbstractPipeline
└── 0 → 1 sample (0.0% → 0.1%) putMapEntries(Map, boolean) at java.util.HashMap
    └── 0 → 1 sample (0.0% → 0.1%) createSubtask(int, int) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
```

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                    | Location                                                                              |
| ------: | ----: | ------------: | --------: | ------------------------------------------- | ------------------------------------------------------------------------------------- |
|  +19.1% |   +62 | 24.9% → 27.5% | 324 → 386 | `distance(Double[], Double[])`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +25.6% |   +20 |   6.0% → 7.0% |   78 → 98 | `collectClusters(int[])`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +87.5% |   +14 |   1.2% → 2.1% |   16 → 30 | `computeDirectly()`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +5.8% |   +10 | 13.1% → 12.9% | 171 → 181 | `findNearestCentroid()`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +0.9% |    +5 | 42.1% → 39.4% | 549 → 554 | `accumulate(Double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| +150.0% |    +3 |   0.2% → 0.4% |     2 → 5 | `accept(Object)`                            | `java.util.stream.ReduceOps$3ReducingSink`                                            |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `doExec()`                                  | `java.util.concurrent.ForkJoinTask`                                                   |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `awaitWork(ForkJoinPool$WorkQueue)`         | `java.util.concurrent.ForkJoinPool`                                                   |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `apply(Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000780121ece0` |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `tryRemoveAndExec(ForkJoinTask, boolean)`   | `java.util.concurrent.ForkJoinPool$WorkQueue`                                         |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `add(double[], double[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `lambda$collectClusters$0(Double[])`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `nextNode()`                                | `java.util.HashMap$HashIterator`                                                      |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `createSubtask(int, int)`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +100.0% |    +1 |          0.1% |     1 → 2 | `write0(FileDescriptor, long, int)`         | `sun.nio.ch.UnixFileDispatcherImpl`                                                   |
| +100.0% |    +1 |          0.1% |     1 → 2 | `compute()`                                 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `exec()`                                    | `java.util.concurrent.RecursiveTask`                                                  |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `average(List)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
| +100.0% |    +1 |          0.1% |     1 → 2 | `lambda$merge$7(Map, Object, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
| +100.0% |    +1 |          0.1% |     1 → 2 | `push(ForkJoinTask, ForkJoinPool, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                                         |

##### Ours

|  Change | Delta |             % |   Samples | Function                             | Location                                                                              |
| ------: | ----: | ------------: | --------: | ------------------------------------ | ------------------------------------------------------------------------------------- |
|  +19.1% |   +62 | 24.9% → 27.5% | 324 → 386 | `distance(Double[], Double[])`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +25.6% |   +20 |   6.0% → 7.0% |   78 → 98 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +87.5% |   +14 |   1.2% → 2.1% |   16 → 30 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +5.8% |   +10 | 13.1% → 12.9% | 171 → 181 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +0.9% |    +5 | 42.1% → 39.4% | 549 → 554 | `accumulate(Double[], double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `apply(Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000780121ece0` |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |    +2 |   0.0% → 0.1% |     0 → 2 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| +100.0% |    +1 |          0.1% |     1 → 2 | `compute()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `average(List)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
| +100.0% |    +1 |          0.1% |     1 → 2 | `lambda$merge$7(Map, Object, List)`  | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |

##### Standard library

|  Change | Delta |           % | Samples | Function                                    | Location                                        |
| ------: | ----: | ----------: | ------: | ------------------------------------------- | ----------------------------------------------- |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `accept(Object)`                            | `java.util.stream.ReduceOps$3ReducingSink`      |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `doExec()`                                  | `java.util.concurrent.ForkJoinTask`             |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `awaitWork(ForkJoinPool$WorkQueue)`         | `java.util.concurrent.ForkJoinPool`             |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `tryRemoveAndExec(ForkJoinTask, boolean)`   | `java.util.concurrent.ForkJoinPool$WorkQueue`   |
|     new |    +2 | 0.0% → 0.1% |   0 → 2 | `nextNode()`                                | `java.util.HashMap$HashIterator`                |
| +100.0% |    +1 |        0.1% |   1 → 2 | `write0(FileDescriptor, long, int)`         | `sun.nio.ch.UnixFileDispatcherImpl`             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `exec()`                                    | `java.util.concurrent.RecursiveTask`            |
| +100.0% |    +1 |        0.1% |   1 → 2 | `push(ForkJoinTask, ForkJoinPool, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue`   |
| +100.0% |    +1 |        0.1% |   1 → 2 | `resize()`                                  | `java.util.HashMap`                             |
| +100.0% |    +1 |        0.1% |   1 → 2 | `afterNodeInsertion(boolean)`               | `java.util.LinkedHashMap`                       |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `reset()`                                   | `java.util.zip.Inflater`                        |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `match(byte[], byte[], byte[], byte[])`     | `java.util.jar.JarFile`                         |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `allocateInstance(Class)`                   | `jdk.internal.misc.Unsafe`                      |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(AbstractPipeline, int)`             | `java.util.stream.AbstractPipeline`             |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `estimateSize()`                            | `java.util.Spliterators$DoubleArraySpliterator` |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `accept(double)`                            | `java.util.stream.DoublePipeline$1$1`           |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `<init>(HashMap)`                           | `java.util.HashMap$HashIterator`                |
|     new |    +1 | 0.0% → 0.1% |   0 → 1 | `unlink0(long)`                             | `sun.nio.fs.UnixNativeDispatcher`               |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % | Samples | Function                                                      | Location                                                  |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------- | --------------------------------------------------------- |
|  -82.1% |   -23 | 2.1% → 0.4% |  28 → 5 | `vectorSum()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -15.1% |    -8 | 4.1% → 3.2% | 53 → 45 | `computeIfAbsent(Object, Function)`                           | `java.util.HashMap`                                       |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `unpark(Object)`                                              | `jdk.internal.misc.Unsafe`                                |
|   -7.7% |    -3 | 3.0% → 2.6% | 39 → 36 | `copyOf(Object[], int)`                                       | `java.util.Arrays`                                        |
|  -20.0% |    -2 | 0.8% → 0.6% |  10 → 8 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`     | `java.util.concurrent.ForkJoinPool`                       |
|  -20.0% |    -1 | 0.4% → 0.3% |   5 → 4 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                                  |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `wrapSink(Sink)`                                              | `java.util.stream.AbstractPipeline`                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `awaitDone(int, long)`                                        | `java.util.concurrent.ForkJoinTask`                       |
|  -25.0% |    -1 | 0.3% → 0.2% |   4 → 3 | `merge(Object, Object, BiFunction)`                           | `java.util.HashMap`                                       |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `tryPoll()`                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`             |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `createSubtask(int, int)`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### Ours

|  Change | Delta |           % | Samples | Function                  | Location                                                  |
| ------: | ----: | ----------: | ------: | ------------------------- | --------------------------------------------------------- |
|  -82.1% |   -23 | 2.1% → 0.4% |  28 → 5 | `vectorSum()`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                      | Location                                      |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------- | --------------------------------------------- |
|  -15.1% |    -8 | 4.1% → 3.2% | 53 → 45 | `computeIfAbsent(Object, Function)`                           | `java.util.HashMap`                           |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `unpark(Object)`                                              | `jdk.internal.misc.Unsafe`                    |
|   -7.7% |    -3 | 3.0% → 2.6% | 39 → 36 | `copyOf(Object[], int)`                                       | `java.util.Arrays`                            |
|  -20.0% |    -2 | 0.8% → 0.6% |  10 → 8 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`     | `java.util.concurrent.ForkJoinPool`           |
|  -20.0% |    -1 | 0.4% → 0.3% |   5 → 4 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                      |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `wrapSink(Sink)`                                              | `java.util.stream.AbstractPipeline`           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `awaitDone(int, long)`                                        | `java.util.concurrent.ForkJoinTask`           |
|  -25.0% |    -1 | 0.3% → 0.2% |   4 → 3 | `merge(Object, Object, BiFunction)`                           | `java.util.HashMap`                           |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `tryPoll()`                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Location                                                       |
| -----: | ----: | -----: | --------: | -------------------------------------------------------------- |
| +19.1% |   +62 | 100.0% | 324 → 386 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| +34.0% |   +17 | 64.1% → 68.4% | 50 → 67 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
| +11.1% |    +3 | 34.6% → 30.6% | 27 → 30 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Location                                                       |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------- |
| +87.5% |   +14 | 100.0% | 16 → 30 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:204` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Location                                                       |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------------- |
| +45.5% |    +5 |   6.4% → 8.8% |   11 → 16 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |
|    new |    +4 |   0.0% → 2.2% |     0 → 4 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |
|  +0.6% |    +1 | 93.0% → 88.4% | 159 → 160 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Location                                                      |
| -----: | ----: | -----: | --------: | ------------------------------------------------------------- |
|  +0.9% |    +5 | 100.0% | 549 → 554 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`)

|  Change | Delta |      % | Samples | Location                                       |
| ------: | ----: | -----: | ------: | ---------------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `java.util.stream.ReduceOps$3ReducingSink:169` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `java.util.concurrent.ForkJoinTask:387` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % | Samples | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `java.util.concurrent.ForkJoinPool:1881` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |            % | Samples | Location                                           |
| -----: | ----: | -----------: | ------: | -------------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `java.util.concurrent.ForkJoinPool$WorkQueue:1347` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Location                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:432` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

| Change | Delta |             % | Samples | Location                              |
| -----: | ----: | ------------: | ------: | ------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.HashMap$HashIterator:1609` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |            % | Samples | Location                                                   |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:145` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |             % | Samples | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.RecursiveTask:110` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:334` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |      % | Samples | Location                                        |
| ------: | ----: | -----: | ------: | ----------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans:112` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |      % | Samples | Location                                           |
| ------: | ----: | -----: | ------: | -------------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `java.util.concurrent.ForkJoinPool$WorkQueue:1156` |

##### `resize()` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Location                |
| ------: | ----: | -----: | ------: | ----------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `java.util.HashMap:741` |

##### `afterNodeInsertion(boolean)` (`java.util.LinkedHashMap`)

|  Change | Delta |      % | Samples | Location                      |
| ------: | ----: | -----: | ------: | ----------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `java.util.LinkedHashMap:324` |

##### `reset()` (`java.util.zip.Inflater`)

| Change | Delta |             % | Samples | Location                     |
| -----: | ----: | ------------: | ------: | ---------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.zip.Inflater:696` |

##### `match(byte[], byte[], byte[], byte[])` (`java.util.jar.JarFile`)

| Change | Delta |             % | Samples | Location                     |
| -----: | ----: | ------------: | ------: | ---------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.jar.JarFile:1000` |

##### `<init>(AbstractPipeline, int)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.stream.AbstractPipeline:211` |

##### `estimateSize()` (`java.util.Spliterators$DoubleArraySpliterator`)

| Change | Delta |             % | Samples | Location                                             |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.Spliterators$DoubleArraySpliterator:1339` |

##### `accept(double)` (`java.util.stream.DoublePipeline$1$1`)

| Change | Delta |             % | Samples | Location                                  |
| -----: | ----: | ------------: | ------: | ----------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.stream.DoublePipeline$1$1:176` |

##### `<init>(HashMap)` (`java.util.HashMap$HashIterator`)

| Change | Delta |             % | Samples | Location                              |
| -----: | ----: | ------------: | ------: | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashMap$HashIterator:1593` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Location                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- |
| -92.3% |   -24 | 92.9% → 40.0% |  26 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |
|    new |    +1 |  0.0% → 20.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|  Change | Delta |              % | Samples | Location                 |
| ------: | ----: | -------------: | ------: | ------------------------ |
|  -13.5% |    -7 | 98.1% → 100.0% | 52 → 45 | `java.util.HashMap:1219` |
| removed |    -1 |    1.9% → 0.0% |   1 → 0 | `java.util.HashMap:1206` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
|  -7.7% |    -3 | 100.0% | 39 → 36 | `java.util.Arrays:3482` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
|  -75.0% |    -3 | 40.0% → 12.5% |   4 → 1 | `java.util.concurrent.ForkJoinPool:2039` |
| +100.0% |    +2 | 20.0% → 50.0% |   2 → 4 | `java.util.concurrent.ForkJoinPool:2058` |
|  -25.0% |    -1 | 40.0% → 37.5% |   4 → 3 | `java.util.concurrent.ForkJoinPool:2053` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.stream.AbstractPipeline:546` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinTask:437` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `java.util.HashMap:1409` |
|     new |    +3 | 0.0% → 100.0% |   0 → 3 | `java.util.HashMap:1384` |

##### `tryPoll()` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool$WorkQueue:1297` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------- |
| +19.1% |   +62 | 100.0% | 324 → 386 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------- | ---------------------------------------------------------- |
| +25.6% |   +20 | 100.0% | 78 → 98 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------- | ---------------------------------------------------------- |
| +87.5% |   +14 | 100.0% | 16 → 30 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
|  +5.8% |   +10 | 100.0% | 171 → 181 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller        | Location                                                  |
| -----: | ----: | -----: | --------: | ------------- | --------------------------------------------------------- |
|  +0.9% |    +5 | 100.0% | 549 → 554 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`)

|  Change | Delta |      % | Samples | Caller        | Location                           |
| ------: | ----: | -----: | ------: | ------------- | ---------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |            % | Samples | Caller                                               | Location                                      |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------- | --------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % | Samples | Caller                              | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ----------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000780121ece0`)

| Change | Delta |             % | Samples | Caller                              | Location            |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |      % | Samples | Caller                 | Location                            |
| ------: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Caller                               | Location                                                  |
| -----: | ----: | ------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Caller          | Location                                                                              |
| -----: | ----: | ------------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000780121ece0` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

| Change | Delta |             % | Samples | Caller   | Location                          |
| -----: | ----: | ------------: | ------: | -------- | --------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `next()` | `java.util.HashMap$EntryIterator` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |            % | Samples | Caller                        | Location                                               |
| -----: | ----: | -----------: | ------: | ----------------------------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `putMapEntries(Map, boolean)` | `java.util.HashMap`                                    |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `compute()`                   | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `write0(FileDescriptor, long, int)` (`sun.nio.ch.UnixFileDispatcherImpl`)

|  Change | Delta |      % | Samples | Caller                             | Location                            |
| ------: | ----: | -----: | ------: | ---------------------------------- | ----------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `write(FileDescriptor, long, int)` | `sun.nio.ch.UnixFileDispatcherImpl` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change | Delta |      % | Samples | Caller   | Location                             |
| ------: | ----: | -----: | ------: | -------- | ------------------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |             % | Samples | Caller     | Location                            |
| -----: | ----: | ------------: | ------: | ---------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Caller                     | Location                                               |
| -----: | ----: | ------------: | ------: | -------------------------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |      % | Samples | Caller                   | Location                                                               |
| ------: | ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |      % | Samples | Caller   | Location                            |
| ------: | ----: | -----: | ------: | -------- | ----------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `fork()` | `java.util.concurrent.ForkJoinTask` |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Caller                              | Location            |
| -----: | ----: | -----------: | ------: | ----------------------------------- | ------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `afterNodeInsertion(boolean)` (`java.util.LinkedHashMap`)

|  Change | Delta |      % | Samples | Caller                                          | Location            |
| ------: | ----: | -----: | ------: | ----------------------------------------------- | ------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `reset()` (`java.util.zip.Inflater`)

| Change | Delta |             % | Samples | Caller                      | Location                                  |
| -----: | ----: | ------------: | ------: | --------------------------- | ----------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `releaseInflater(Inflater)` | `java.util.zip.ZipFile$CleanableResource` |

##### `match(byte[], byte[], byte[], byte[])` (`java.util.jar.JarFile`)

| Change | Delta |             % | Samples | Caller                        | Location                |
| -----: | ----: | ------------: | ------: | ----------------------------- | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `checkForSpecialAttributes()` | `java.util.jar.JarFile` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % | Samples | Caller                     | Location                              |
| -----: | ----: | ------------: | ------: | -------------------------- | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `<init>(AbstractPipeline, int)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |             % | Samples | Caller                          | Location                             |
| -----: | ----: | ------------: | ------: | ------------------------------- | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(AbstractPipeline, int)` | `java.util.stream.ReferencePipeline` |

##### `estimateSize()` (`java.util.Spliterators$DoubleArraySpliterator`)

| Change | Delta |             % | Samples | Caller                  | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getExactSizeIfKnown()` | `java.util.Spliterator` |

##### `accept(double)` (`java.util.stream.DoublePipeline$1$1`)

| Change | Delta |             % | Samples | Caller                             | Location                                        |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `forEachRemaining(DoubleConsumer)` | `java.util.Spliterators$DoubleArraySpliterator` |

##### `<init>(HashMap)` (`java.util.HashMap$HashIterator`)

| Change | Delta |             % | Samples | Caller            | Location                          |
| -----: | ----: | ------------: | ------: | ----------------- | --------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(HashMap)` | `java.util.HashMap$EntryIterator` |

##### `unlink0(long)` (`sun.nio.fs.UnixNativeDispatcher`)

| Change | Delta |             % | Samples | Caller             | Location                          |
| -----: | ----: | ------------: | ------: | ------------------ | --------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `unlink(UnixPath)` | `sun.nio.fs.UnixNativeDispatcher` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % | Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | ------: | ------------------- | --------------------------------------------------------- |
| -82.1% |   -23 | 100.0% |  28 → 5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                   | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| -15.1% |    -8 | 100.0% | 53 → 45 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `unpark(Object)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % | Samples | Caller           | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------- | ---------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `unpark(Thread)` | `java.util.concurrent.locks.LockSupport` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change | Delta |              % | Samples | Caller      | Location              |
| ------: | ----: | -------------: | ------: | ----------- | --------------------- |
| removed |    -8 |   20.5% → 0.0% |   8 → 0 | `toArray()` | `java.util.ArrayList` |
|  +16.1% |    +5 | 79.5% → 100.0% | 31 → 36 | `grow(int)` | `java.util.ArrayList` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| -20.0% |    -2 | 100.0% |  10 → 8 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |      % | Samples | Caller                      | Location                 |
| -----: | ----: | -----: | ------: | --------------------------- | ------------------------ |
| -20.0% |    -1 | 100.0% |   5 → 4 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Caller                               | Location                            |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Caller   | Location                            |
| ------: | ----: | ------------: | ------: | -------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                              | Location                                    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| -25.0% |    -1 | 100.0% |   4 → 3 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `tryPoll()` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Caller                                               | Location                                      |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                   |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  +16.2% |  +109 | 51.7% → 55.6% |     673 → 782 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +7.4% |   +96 | 99.3% → 98.9% | 1,294 → 1,390 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                        |
|   +7.4% |   +96 | 99.3% → 98.9% | 1,294 → 1,390 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                |
|   +7.3% |   +94 | 98.9% → 98.4% | 1,289 → 1,383 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                       |
|   +7.3% |   +94 | 99.1% → 98.5% | 1,291 → 1,385 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                        |
|   +7.2% |   +93 | 98.9% → 98.3% | 1,289 → 1,382 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|   +7.2% |   +93 | 99.2% → 98.5% | 1,292 → 1,385 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|   +7.2% |   +93 | 99.2% → 98.5% | 1,292 → 1,385 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                        |
|   +7.4% |   +92 | 95.8% → 95.3% | 1,248 → 1,340 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                              | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|   +7.1% |   +89 | 96.6% → 95.9% | 1,259 → 1,348 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                        |
|   +7.0% |   +88 | 96.6% → 95.8% | 1,259 → 1,347 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                        |
|  +14.5% |   +72 | 38.0% → 40.3% |     495 → 567 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +19.1% |   +62 | 24.9% → 27.5% |     324 → 386 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +14.2% |   +23 | 12.4% → 13.2% |     162 → 185 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |   +10 |   0.0% → 0.7% |        0 → 10 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                |
| +200.0% |    +6 |   0.2% → 0.6% |         3 → 9 | `copyInto(Sink, Spliterator)`                                                                                          | `java.util.stream.AbstractPipeline`                        |
| +200.0% |    +6 |   0.2% → 0.6% |         3 → 9 | `wrapAndCopyInto(Sink, Spliterator)`                                                                                   | `java.util.stream.AbstractPipeline`                        |
|  +55.6% |    +5 |   0.7% → 1.0% |        9 → 14 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                            |
|  +55.6% |    +5 |   0.7% → 1.0% |        9 → 14 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                            |
|  +55.6% |    +5 |   0.7% → 1.0% |        9 → 14 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                            |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                                              |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  +16.2% |  +109 | 51.7% → 55.6% |     673 → 782 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   +7.2% |   +93 | 98.9% → 98.3% | 1,289 → 1,382 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                |
|  +14.5% |   +72 | 38.0% → 40.3% |     495 → 567 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +19.1% |   +62 | 24.9% → 27.5% |     324 → 386 | `distance(Double[], Double[])`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  +14.2% |   +23 | 12.4% → 13.2% |     162 → 185 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|     new |   +10 |   0.0% → 0.7% |        0 → 10 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|  +55.6% |    +5 |   0.7% → 1.0% |        9 → 14 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                                       |
|  +55.6% |    +5 |   0.7% → 1.0% |        9 → 14 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                                       |
|  +55.6% |    +5 |   0.7% → 1.0% |        9 → 14 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                                       |
|  +71.4% |    +5 |   0.5% → 0.9% |        7 → 12 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                                           |
|  +71.4% |    +5 |   0.5% → 0.9% |        7 → 12 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                                            |
| +100.0% |    +5 |   0.4% → 0.7% |        5 → 10 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780119c3b8`                |
| +100.0% |    +5 |   0.4% → 0.7% |        5 → 10 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                                           |
|   +0.9% |    +5 | 42.1% → 39.4% |     549 → 554 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|     new |    +5 |   0.0% → 0.4% |         0 → 5 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000780121ece0` |
| +133.3% |    +4 |   0.2% → 0.5% |         3 → 7 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                                             |
| +133.3% |    +4 |   0.2% → 0.5% |         3 → 7 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                                             |
| +100.0% |    +3 |   0.2% → 0.4% |         3 → 6 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|     new |    +3 |   0.0% → 0.2% |         0 → 3 | `boxed(double[])`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|     new |    +2 |   0.0% → 0.1% |         0 → 2 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                             | Location                                             |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------- | ---------------------------------------------------- |
|   +7.4% |   +96 | 99.3% → 98.9% | 1,294 → 1,390 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
|   +7.4% |   +96 | 99.3% → 98.9% | 1,294 → 1,390 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`          |
|   +7.3% |   +94 | 98.9% → 98.4% | 1,289 → 1,383 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                 |
|   +7.3% |   +94 | 99.1% → 98.5% | 1,291 → 1,385 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                  |
|   +7.2% |   +93 | 99.2% → 98.5% | 1,292 → 1,385 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   +7.2% |   +93 | 99.2% → 98.5% | 1,292 → 1,385 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                  |
|   +7.4% |   +92 | 95.8% → 95.3% | 1,248 → 1,340 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|   +7.1% |   +89 | 96.6% → 95.9% | 1,259 → 1,348 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                  |
|   +7.0% |   +88 | 96.6% → 95.8% | 1,259 → 1,347 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                  |
| +200.0% |    +6 |   0.2% → 0.6% |         3 → 9 | `copyInto(Sink, Spliterator)`                        | `java.util.stream.AbstractPipeline`                  |
| +200.0% |    +6 |   0.2% → 0.6% |         3 → 9 | `wrapAndCopyInto(Sink, Spliterator)`                 | `java.util.stream.AbstractPipeline`                  |
|  +71.4% |    +5 |   0.5% → 0.9% |        7 → 12 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00` |
|  +71.4% |    +5 |   0.5% → 0.9% |        7 → 12 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000007801082400`  |
|  +71.4% |    +5 |   0.5% → 0.9% |        7 → 12 | `invokeExact_MT(Object, Object, Object, Object)`     | `java.lang.invoke.Invokers$Holder`                   |
|  +71.4% |    +5 |   0.5% → 0.9% |        7 → 12 | `invokeImpl(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +71.4% |    +5 |   0.5% → 0.9% |        7 → 12 | `invoke(Object, Object[])`                           | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  +71.4% |    +5 |   0.5% → 0.9% |        7 → 12 | `invoke(Object, Object[])`                           | `java.lang.reflect.Method`                           |
| +100.0% |    +5 |   0.4% → 0.7% |        5 → 10 | `apply(Object)`                                      | `scala.runtime.function.JProcedure1`                 |
| +100.0% |    +5 |   0.4% → 0.7% |        5 → 10 | `foreach(Function1)`                                 | `scala.collection.immutable.List`                    |
|  +16.1% |    +5 |   2.4% → 2.6% |       31 → 36 | `grow(int)`                                          | `java.util.ArrayList`                                |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |   Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -13.5% |   -47 | 26.8% → 21.5% | 349 → 302 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -13.5% |   -47 | 26.8% → 21.5% | 349 → 302 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70` |
|  -13.5% |   -47 | 26.8% → 21.5% | 349 → 302 | `exec()`                                                                                                               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |
|   -5.8% |   -27 | 35.6% → 31.1% | 464 → 437 | `invoke()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
|   -8.4% |   -24 | 21.9% → 18.6% | 285 → 261 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -5.5% |   -22 | 30.9% → 27.1% | 403 → 381 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                                                              | `java.util.concurrent.ForkJoinPool`                                    |
|   -7.4% |   -21 | 21.9% → 18.8% | 285 → 264 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -7.4% |   -21 | 21.9% → 18.8% | 285 → 264 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -3.1% |   -18 | 44.3% → 39.8% | 577 → 559 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -3.1% |   -18 | 44.3% → 39.8% | 577 → 559 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -75.0% |    -9 |   0.9% → 0.2% |    12 → 3 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                    |
|  -61.5% |    -8 |   1.0% → 0.4% |    13 → 5 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -61.5% |    -8 |   1.0% → 0.4% |    13 → 5 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30` |
|  -61.5% |    -8 |   1.0% → 0.4% |    13 → 5 | `forEach(BiConsumer)`                                                                                                  | `java.util.HashMap`                                                    |
| removed |    -8 |   0.6% → 0.0% |     8 → 0 | `toArray()`                                                                                                            | `java.util.ArrayList`                                                  |
| removed |    -8 |   0.6% → 0.0% |     8 → 0 | `<init>(Collection)`                                                                                                   | `java.util.ArrayList`                                                  |
| removed |    -8 |   0.6% → 0.0% |     8 → 0 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |    -8 |   0.6% → 0.0% |     8 → 0 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070012056a8` |
| removed |    -5 |   0.4% → 0.0% |     5 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -22.2% |    -4 |   1.4% → 1.0% |   18 → 14 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |

##### Ours

|  Change | Delta |             % |   Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -13.5% |   -47 | 26.8% → 21.5% | 349 → 302 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -13.5% |   -47 | 26.8% → 21.5% | 349 → 302 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70` |
|   -8.4% |   -24 | 21.9% → 18.6% | 285 → 261 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -7.4% |   -21 | 21.9% → 18.8% | 285 → 264 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -7.4% |   -21 | 21.9% → 18.8% | 285 → 264 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|   -3.1% |   -18 | 44.3% → 39.8% | 577 → 559 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|   -3.1% |   -18 | 44.3% → 39.8% | 577 → 559 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  -61.5% |    -8 |   1.0% → 0.4% |    13 → 5 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -61.5% |    -8 |   1.0% → 0.4% |    13 → 5 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30` |
| removed |    -8 |   0.6% → 0.0% |     8 → 0 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| removed |    -8 |   0.6% → 0.0% |     8 → 0 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070012056a8` |
| removed |    -5 |   0.4% → 0.0% |     5 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -22.2% |    -4 |   1.4% → 1.0% |   18 → 14 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -22.2% |    -4 |   1.4% → 1.0% |   18 → 14 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  -22.2% |    -4 |   1.4% → 1.0% |   18 → 14 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `<init>()`                                                                                                             | `org.renaissance.harness.Config`                                       |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |

##### Standard library

|  Change | Delta |             % |   Samples | Function                                                                        | Location                                            |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------- | --------------------------------------------------- |
|  -13.5% |   -47 | 26.8% → 21.5% | 349 → 302 | `exec()`                                                                        | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|   -5.8% |   -27 | 35.6% → 31.1% | 464 → 437 | `invoke()`                                                                      | `java.util.concurrent.ForkJoinTask`                 |
|   -5.5% |   -22 | 30.9% → 27.1% | 403 → 381 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                       | `java.util.concurrent.ForkJoinPool`                 |
|  -75.0% |    -9 |   0.9% → 0.2% |    12 → 3 | `merge(Object, Object, BiFunction)`                                             | `java.util.HashMap`                                 |
|  -61.5% |    -8 |   1.0% → 0.4% |    13 → 5 | `forEach(BiConsumer)`                                                           | `java.util.HashMap`                                 |
| removed |    -8 |   0.6% → 0.0% |     8 → 0 | `toArray()`                                                                     | `java.util.ArrayList`                               |
| removed |    -8 |   0.6% → 0.0% |     8 → 0 | `<init>(Collection)`                                                            | `java.util.ArrayList`                               |
| removed |    -4 |   0.3% → 0.0% |     4 → 0 | `unpark(Object)`                                                                | `jdk.internal.misc.Unsafe`                          |
|  -80.0% |    -4 |   0.4% → 0.1% |     5 → 1 | `unpark(Thread)`                                                                | `java.util.concurrent.locks.LockSupport`            |
|  -80.0% |    -4 |   0.4% → 0.1% |     5 → 1 | `signalWaiters()`                                                               | `java.util.concurrent.ForkJoinTask`                 |
|  -80.0% |    -4 |   0.4% → 0.1% |     5 → 1 | `setDone()`                                                                     | `java.util.concurrent.ForkJoinTask`                 |
|   -7.7% |    -3 |   3.0% → 2.6% |   39 → 36 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                                  |
|   -3.8% |    -2 |   4.1% → 3.6% |   53 → 51 | `computeIfAbsent(Object, Function)`                                             | `java.util.HashMap`                                 |
|  -20.0% |    -1 |   0.4% → 0.3% |     5 → 4 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                   | `java.util.zip.Inflater`                            |
|  -20.0% |    -1 |   0.4% → 0.3% |     5 → 4 | `inflate(byte[], int, int)`                                                     | `java.util.zip.Inflater`                            |
|  -20.0% |    -1 |   0.4% → 0.3% |     5 → 4 | `read(byte[], int, int)`                                                        | `java.util.zip.InflaterInputStream`                 |
|  -33.3% |    -1 |   0.2% → 0.1% |     3 → 2 | `read(byte[], int, int)`                                                        | `java.io.FilterInputStream`                         |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                             |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                             |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `defineClass(String, byte[], int, int, CodeSource)`                             | `java.security.SecureClassLoader`                   |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
| +16.2% |  +109 | 100.0% | 673 → 782 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +16.2% |  +109 | 100.0% | 673 → 782 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Caller  | Location                                    |
| -----: | ----: | -----: | ------------: | ------- | ------------------------------------------- |
|  +7.4% |   +96 | 100.0% | 1,294 → 1,390 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Caller     | Location                            |
| -----: | ----: | -----: | ------------: | ---------- | ----------------------------------- |
|  +7.3% |   +94 | 100.0% | 1,289 → 1,383 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Caller                                                    | Location                                      |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  +7.3% |   +94 |        100.0% | 1,291 → 1,385 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +7.3% |   +91 |         96.7% | 1,248 → 1,339 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -5.8% |   -27 | 35.9% → 31.6% |     464 → 437 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  -4.6% |   -18 | 30.5% → 27.1% |     394 → 376 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |      % |       Samples | Caller   | Location                             |
| -----: | ----: | -----: | ------------: | -------- | ------------------------------------ |
|  +7.2% |   +93 | 100.0% | 1,289 → 1,382 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Caller                                   | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------------------------- | ----------------------------------- |
|  +7.2% |   +93 | 100.0% | 1,292 → 1,385 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Caller                              | Location                            |
| -----: | ----: | -----: | ------------: | ----------------------------------- | ----------------------------------- |
|  +7.2% |   +93 | 100.0% | 1,292 → 1,385 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------- | ----------------------------------- |
|  +7.4% |   +92 | 100.0% | 1,248 → 1,340 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Caller      | Location                                               |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------ |
|  +7.1% |   +89 | 100.0% | 1,259 → 1,348 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Caller   | Location                            |
| -----: | ----: | -----: | ------------: | -------- | ----------------------------------- |
|  +7.0% |   +88 | 100.0% | 1,259 → 1,347 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
| +14.5% |   +72 | 100.0% | 495 → 567 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------- |
| +19.1% |   +62 | 100.0% | 324 → 386 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
| +14.2% |   +23 | 100.0% | 162 → 185 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |             % | Samples | Caller              | Location                                                               |
| -----: | ----: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
|    new |   +10 | 0.0% → 100.0% |  0 → 10 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780119c3b8` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |      % | Samples | Caller                               | Location                            |
| ------: | ----: | -----: | ------: | ------------------------------------ | ----------------------------------- |
| +200.0% |    +6 | 100.0% |   3 → 9 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |              % | Samples | Caller                                            | Location                              |
| ------: | ----: | -------------: | ------: | ------------------------------------------------- | ------------------------------------- |
| +133.3% |    +4 | 100.0% → 77.8% |   3 → 7 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |
| +100.0% |    +1 |  33.3% → 22.2% |   1 → 2 | `evaluate(Spliterator, boolean, IntFunction)`     | `java.util.stream.AbstractPipeline`   |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Caller                                 | Location                        |
| -----: | ----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| +55.6% |    +5 | 100.0% |  9 → 14 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Caller           | Location                        |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------- |
| +55.6% |    +5 | 100.0% |  9 → 14 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |      % | Samples | Caller           | Location                                   |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------ |
| +71.4% |    +5 | 100.0% |  7 → 12 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change | Delta |      % | Samples | Caller                         | Location                                             |
| -----: | ----: | -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| +71.4% |    +5 | 100.0% |  7 → 12 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780119c3b8`)

|  Change | Delta |      % | Samples | Caller          | Location                             |
| ------: | ----: | -----: | ------: | --------------- | ------------------------------------ |
| +100.0% |    +5 | 100.0% |  5 → 10 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |      % | Samples | Caller           | Location                                    |
| ------: | ----: | -----: | ------: | ---------------- | ------------------------------------------- |
| +100.0% |    +5 | 100.0% |  5 → 10 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller        | Location                                                  |
| -----: | ----: | -----: | --------: | ------------- | --------------------------------------------------------- |
|  +0.9% |    +5 | 100.0% | 549 → 554 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000780121ece0`)

| Change | Delta |             % | Samples | Caller                              | Location            |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ------------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |      % | Samples | Caller               | Location                                  |
| ------: | ----: | -----: | ------: | -------------------- | ----------------------------------------- |
| +133.3% |    +4 | 100.0% |   3 → 7 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|  Change | Delta |             % | Samples | Caller                                                                                                                 | Location                                    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new |    +7 | 0.0% → 100.0% |   0 → 7 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |      % | Samples | Caller                             | Location                                  |
| ------: | ----: | -----: | ------: | ---------------------------------- | ----------------------------------------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Caller                     | Location                                               |
| -----: | ----: | ------------: | ------: | -------------------------- | ------------------------------------------------------ |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Caller                               | Location                                                  |
| -----: | ----: | ------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801001c00`)

| Change | Delta |      % | Samples | Caller                           | Location                                            |
| -----: | ----: | -----: | ------: | -------------------------------- | --------------------------------------------------- |
| +71.4% |    +5 | 100.0% |  7 → 12 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007801082400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007801082400`)

| Change | Delta |      % | Samples | Caller                                           | Location                           |
| -----: | ----: | -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| +71.4% |    +5 | 100.0% |  7 → 12 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % | Samples | Caller                         | Location                                          |
| -----: | ----: | -----: | ------: | ------------------------------ | ------------------------------------------------- |
| +71.4% |    +5 | 100.0% |  7 → 12 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Caller                     | Location                                          |
| -----: | ----: | -----: | ------: | -------------------------- | ------------------------------------------------- |
| +71.4% |    +5 | 100.0% |  7 → 12 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Caller                     | Location                   |
| -----: | ----: | -----: | ------: | -------------------------- | -------------------------- |
| +71.4% |    +5 | 100.0% |  7 → 12 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change | Delta |      % | Samples | Caller                                                      | Location                        |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------- | ------------------------------- |
| +71.4% |    +5 | 100.0% |  7 → 12 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|  Change | Delta |      % | Samples | Caller               | Location                             |
| ------: | ----: | -----: | ------: | -------------------- | ------------------------------------ |
| +100.0% |    +5 | 100.0% |  5 → 10 | `apply(Object)`      | `scala.runtime.function.JProcedure1` |
| +100.0% |    +5 | 100.0% |  5 → 10 | `foreach(Function1)` | `scala.collection.immutable.List`    |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|  Change | Delta |      % | Samples | Caller                                                                        | Location                                    |
| ------: | ----: | -----: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| +100.0% |    +5 | 100.0% |  5 → 10 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller   | Location              |
| -----: | ----: | -----: | ------: | -------- | --------------------- |
| +16.1% |    +5 | 100.0% | 31 → 36 | `grow()` | `java.util.ArrayList` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Caller   | Location                                                               |
| -----: | ----: | -----: | --------: | -------- | ---------------------------------------------------------------------- |
| -13.5% |   -47 | 100.0% | 349 → 302 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`)

| Change | Delta |      % |   Samples | Caller   | Location                                            |
| -----: | ----: | -----: | --------: | -------- | --------------------------------------------------- |
| -13.5% |   -47 | 100.0% | 349 → 302 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change | Delta |      % |   Samples | Caller     | Location                            |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------- |
| -13.5% |   -47 | 100.0% | 349 → 302 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |   Samples | Caller                         | Location                                               |
| -----: | ----: | ------------: | --------: | ------------------------------ | ------------------------------------------------------ |
| -13.5% |   -47 | 75.2% → 69.1% | 349 → 302 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
|  -8.8% |   -25 | 61.4% → 59.5% | 285 → 260 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller                     | Location                                               |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------------ |
|  -8.4% |   -24 | 100.0% | 285 → 261 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |   Samples | Caller                 | Location                            |
| -----: | ----: | -----: | --------: | ---------------------- | ----------------------------------- |
|  -5.5% |   -22 | 100.0% | 403 → 381 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                               |
| -----: | ----: | -----: | --------: | ------------------- | ------------------------------------------------------ |
|  -7.4% |   -21 | 100.0% | 285 → 264 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                               |
| -----: | ----: | -----: | --------: | ------------------- | ------------------------------------------------------ |
|  -7.4% |   -21 | 100.0% | 285 → 264 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -7.4% |   -21 | 100.0% | 285 → 264 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | --------: | ------------------- | --------------------------------------------------------- |
|  -3.1% |   -18 | 100.0% | 577 → 559 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | --------: | ------------------- | --------------------------------------------------------- |
|  -3.1% |   -18 | 100.0% | 577 → 559 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -3.1% |   -18 | 100.0% | 577 → 559 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                              | Location                                    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| -75.0% |    -9 | 100.0% |  12 → 3 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Caller                   | Location                                                               |
| -----: | ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| -61.5% |    -8 | 100.0% |  13 → 5 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`)

| Change | Delta |      % | Samples | Caller                | Location            |
| -----: | ----: | -----: | ------: | --------------------- | ------------------- |
| -61.5% |    -8 | 100.0% |  13 → 5 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller            | Location                                    |
| -----: | ----: | -----: | ------: | ----------------- | ------------------------------------------- |
| -61.5% |    -8 | 100.0% |  13 → 5 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `toArray()` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller               | Location              |
| ------: | ----: | ------------: | ------: | -------------------- | --------------------- |
| removed |    -8 | 100.0% → 0.0% |   8 → 0 | `<init>(Collection)` | `java.util.ArrayList` |

##### `<init>(Collection)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller                       | Location                                    |
| ------: | ----: | ------------: | ------: | ---------------------------- | ------------------------------------------- |
| removed |    -8 | 100.0% → 0.0% |   8 → 0 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Caller                  | Location                                                               |
| ------: | ----: | ------------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| removed |    -8 | 100.0% → 0.0% |   8 → 0 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070012056a8` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070012056a8`)

|  Change | Delta |             % | Samples | Caller                              | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------- |
| removed |    -8 | 100.0% → 0.0% |   8 → 0 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Caller              | Location                                                               |
| ------: | ----: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % | Samples | Caller                     | Location                                                   |
| -----: | ----: | -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| -22.2% |    -4 | 100.0% | 18 → 14 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Caller                           | Location                                                   |
| -----: | ----: | -----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| -22.2% |    -4 | 100.0% | 18 → 14 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Caller      | Location                                               |
| -----: | ----: | -----: | ------: | ----------- | ------------------------------------------------------ |
| -22.2% |    -4 | 100.0% | 18 → 14 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>()` (`org.renaissance.harness.Config`)

|  Change | Delta |             % | Samples | Caller            | Location                               |
| ------: | ----: | ------------: | ------: | ----------------- | -------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `parse(String[])` | `org.renaissance.harness.ConfigParser` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `unpark(Object)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % | Samples | Caller           | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------- | ---------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `unpark(Thread)` | `java.util.concurrent.locks.LockSupport` |

##### `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |      % | Samples | Caller            | Location                            |
| -----: | ----: | -----: | ------: | ----------------- | ----------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `signalWaiters()` | `java.util.concurrent.ForkJoinTask` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % | Samples | Caller      | Location                            |
| -----: | ----: | -----: | ------: | ----------- | ----------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `setDone()` | `java.util.concurrent.ForkJoinTask` |

##### `setDone()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % | Samples | Caller     | Location                            |
| -----: | ----: | -----: | ------: | ---------- | ----------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change | Delta |              % | Samples | Caller      | Location              |
| ------: | ----: | -------------: | ------: | ----------- | --------------------- |
| removed |    -8 |   20.5% → 0.0% |   8 → 0 | `toArray()` | `java.util.ArrayList` |
|  +16.1% |    +5 | 79.5% → 100.0% | 31 → 36 | `grow(int)` | `java.util.ArrayList` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                   | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------- |
|  -3.8% |    -2 | 100.0% | 53 → 51 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |      % | Samples | Caller                      | Location                 |
| -----: | ----: | -----: | ------: | --------------------------- | ------------------------ |
| -20.0% |    -1 | 100.0% |   5 → 4 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |      % | Samples | Caller                   | Location                            |
| -----: | ----: | -----: | ------: | ------------------------ | ----------------------------------- |
| -20.0% |    -1 | 100.0% |   5 → 4 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

| Change | Delta |             % | Samples | Caller                   | Location                    |
| -----: | ----: | ------------: | ------: | ------------------------ | --------------------------- |
| -33.3% |    -1 | 60.0% → 50.0% |   3 → 2 | `read(byte[], int, int)` | `java.io.FilterInputStream` |

##### `read(byte[], int, int)` (`java.io.FilterInputStream`)

| Change | Delta |      % | Samples | Caller                     | Location              |
| -----: | ----: | -----: | ------: | -------------------------- | --------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `transferTo(OutputStream)` | `java.io.InputStream` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Caller                                                    | Location                |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Caller                                              | Location                          |
| ------: | ----: | ------------: | ------: | --------------------------------------------------- | --------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `defineClass(String, byte[], int, int, CodeSource)` | `java.security.SecureClassLoader` |

##### `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`)

|  Change | Delta |             % | Samples | Caller                          | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------------- | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `defineClass(String, Resource)` | `java.net.URLClassLoader` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Callee                   | Location                                                   |
| -----: | ----: | ------------: | --------: | ------------------------ | ---------------------------------------------------------- |
| +16.2% |  +109 |        100.0% | 673 → 782 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +14.5% |   +72 | 73.6% → 72.5% | 495 → 567 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +14.2% |   +23 | 24.1% → 23.7% | 162 → 185 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |       Samples | Callee                                   | Location                            |
| -----: | ----: | ------------: | ------------: | ---------------------------------------- | ----------------------------------- |
|  +7.2% |   +93 | 99.8% → 99.6% | 1,292 → 1,385 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |
|    new |    +3 |   0.0% → 0.2% |         0 → 3 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change | Delta |      % |       Samples | Callee                              | Location                            |
| -----: | ----: | -----: | ------------: | ----------------------------------- | ----------------------------------- |
|  +7.4% |   +96 | 100.0% | 1,294 → 1,390 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |              % |       Samples | Callee      | Location                                               |
| -----: | ----: | -------------: | ------------: | ----------- | ------------------------------------------------------ |
|  +7.2% |   +93 | 100.0% → 99.9% | 1,289 → 1,382 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Callee      | Location                                            |
| -----: | ----: | ------------: | ------------: | ----------- | --------------------------------------------------- |
|  +7.3% |   +94 | 99.8% → 99.9% | 1,289 → 1,383 | `exec()`    | `java.util.concurrent.RecursiveTask`                |
| -13.5% |   -47 | 27.0% → 21.8% |     349 → 302 | `exec()`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| -80.0% |    -4 |   0.4% → 0.1% |         5 → 1 | `setDone()` | `java.util.concurrent.ForkJoinTask`                 |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % |       Samples | Callee                           | Location                                                   |
| -----: | ----: | ------------: | ------------: | -------------------------------- | ---------------------------------------------------------- |
| +16.2% |  +109 | 52.2% → 56.6% |     673 → 782 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +7.1% |   +89 | 97.7% → 97.5% | 1,259 → 1,348 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
|  -7.4% |   -21 | 22.1% → 19.1% |     285 → 264 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  -3.1% |   -18 | 44.8% → 40.4% |     577 → 559 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -22.2% |    -4 |   1.4% → 1.0% |       18 → 14 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |              % |       Samples | Callee      | Location                                      |
| ------: | ----: | -------------: | ------------: | ----------- | --------------------------------------------- |
|   +7.3% |   +94 | 99.9% → 100.0% | 1,291 → 1,385 | `doExec()`  | `java.util.concurrent.ForkJoinTask`           |
| removed |    -1 |    0.1% → 0.0% |         1 → 0 | `tryPoll()` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Callee                                               | Location                                      |
| -----: | ----: | -----: | ------------: | ---------------------------------------------------- | --------------------------------------------- |
|  +7.2% |   +93 | 100.0% | 1,292 → 1,385 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |              % |       Samples | Callee     | Location                            |
| -----: | ----: | -------------: | ------------: | ---------- | ----------------------------------- |
|  +7.3% |   +91 | 100.0% → 99.9% | 1,248 → 1,339 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |              % |       Samples | Callee                 | Location                            |
| -----: | ----: | -------------: | ------------: | ---------------------- | ----------------------------------- |
|  +7.0% |   +88 | 100.0% → 99.9% | 1,259 → 1,347 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Callee                                                    | Location                                      |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  +7.4% |   +92 | 99.1% → 99.5% | 1,248 → 1,340 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -5.5% |   -22 | 32.0% → 28.3% |     403 → 381 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Callee                         | Location                                                   |
| -----: | ----: | ------------: | --------: | ------------------------------ | ---------------------------------------------------------- |
| +19.1% |   +62 | 65.5% → 68.1% | 324 → 386 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Callee                              | Location              |
| -----: | ----: | ------------: | ------: | ----------------------------------- | --------------------- |
| +16.1% |    +5 | 19.1% → 19.5% | 31 → 36 | `add(Object)`                       | `java.util.ArrayList` |
|  -3.8% |    -2 | 32.7% → 27.6% | 53 → 51 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |    +7 | 0.0% → 70.0% |   0 → 7 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |    +3 | 0.0% → 30.0% |   0 → 3 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |              % | Samples | Callee                       | Location                                  |
| ------: | ----: | -------------: | ------: | ---------------------------- | ----------------------------------------- |
| +100.0% |    +3 | 100.0% → 66.7% |   3 → 6 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt`             |
|     new |    +1 |   0.0% → 11.1% |   0 → 1 | `forEachRemaining(Consumer)` | `java.util.Spliterators$ArraySpliterator` |
|     new |    +1 |   0.0% → 11.1% |   0 → 1 | `getExactSizeIfKnown()`      | `java.util.Spliterator`                   |
|     new |    +1 |   0.0% → 11.1% |   0 → 1 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfDouble`          |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |            % | Samples | Callee                        | Location                            |
| ------: | ----: | -----------: | ------: | ----------------------------- | ----------------------------------- |
| +200.0% |    +6 |       100.0% |   3 → 9 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `wrapSink(Sink)`              | `java.util.stream.AbstractPipeline` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |             % | Samples | Callee                     | Location                   |
| -----: | ----: | ------------: | ------: | -------------------------- | -------------------------- |
| +71.4% |    +5 | 77.8% → 85.7% |  7 → 12 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Callee                                                      | Location                        |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------- | ------------------------------- |
| +55.6% |    +5 | 100.0% |  9 → 14 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % | Samples | Callee                                 | Location                        |
| -----: | ----: | -----: | ------: | -------------------------------------- | ------------------------------- |
| +55.6% |    +5 | 100.0% |  9 → 14 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Callee                                                                        | Location                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| +100.0% |    +5 | 71.4% → 83.3% |  5 → 10 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `loadClass(String)`                                                           | `java.lang.ClassLoader`                     |
|     new |    +1 |   0.0% → 8.3% |   0 → 1 | `<init>(Map)`                                                                 | `org.renaissance.harness.ConfigParser`      |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change | Delta |      % | Samples | Callee           | Location                                    |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------- |
| +71.4% |    +5 | 100.0% |  7 → 12 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780119c3b8`)

|  Change | Delta |             % | Samples | Callee                                                                                                                 | Location                                    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new |   +10 | 0.0% → 100.0% |  0 → 10 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |      % | Samples | Callee               | Location                          |
| ------: | ----: | -----: | ------: | -------------------- | --------------------------------- |
| +100.0% |    +5 | 100.0% |  5 → 10 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000780121ece0`)

| Change | Delta |            % | Samples | Callee                               | Location                                                   |
| -----: | ----: | -----------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |              % | Samples | Callee                        | Location                                                           |
| ------: | ----: | -------------: | ------: | ----------------------------- | ------------------------------------------------------------------ |
| +100.0% |    +3 | 100.0% → 85.7% |   3 → 6 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |
|     new |    +1 |   0.0% → 14.3% |   0 → 1 | `toCsvRows(Function)`         | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|  Change | Delta |      % | Samples | Callee                             | Location                                  |
| ------: | ----: | -----: | ------: | ---------------------------------- | ----------------------------------------- |
| +133.3% |    +4 | 100.0% |   3 → 7 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |      % | Samples | Callee               | Location                             |
| ------: | ----: | -----: | ------: | -------------------- | ------------------------------------ |
| +100.0% |    +3 | 100.0% |   3 → 6 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |            % | Samples | Callee                 | Location                             |
| -----: | ----: | -----------: | ------: | ---------------------- | ------------------------------------ |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `toArray(IntFunction)` | `java.util.stream.ReferencePipeline` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `boxed()`              | `java.util.stream.DoublePipeline`    |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801001c00`)

| Change | Delta |      % | Samples | Callee           | Location                                   |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------ |
| +71.4% |    +5 | 100.0% |  7 → 12 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007801082400`)

| Change | Delta |      % | Samples | Callee                         | Location                                             |
| -----: | ----: | -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| +71.4% |    +5 | 100.0% |  7 → 12 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % | Samples | Callee                           | Location                                            |
| -----: | ----: | -----: | ------: | -------------------------------- | --------------------------------------------------- |
| +71.4% |    +5 | 100.0% |  7 → 12 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007801082400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Callee                                           | Location                           |
| -----: | ----: | -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| +71.4% |    +5 | 100.0% |  7 → 12 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Callee                         | Location                                          |
| -----: | ----: | -----: | ------: | ------------------------------ | ------------------------------------------------- |
| +71.4% |    +5 | 100.0% |  7 → 12 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change | Delta |      % | Samples | Callee                     | Location                                          |
| -----: | ----: | -----: | ------: | -------------------------- | ------------------------------------------------- |
| +71.4% |    +5 | 100.0% |  7 → 12 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|  Change | Delta |      % | Samples | Callee              | Location                                                               |
| ------: | ----: | -----: | ------: | ------------------- | ---------------------------------------------------------------------- |
| +100.0% |    +5 | 100.0% |  5 → 10 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780119c3b8` |
| +100.0% |    +5 | 100.0% |  5 → 10 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|  Change | Delta |      % | Samples | Callee          | Location                             |
| ------: | ----: | -----: | ------: | --------------- | ------------------------------------ |
| +100.0% |    +5 | 100.0% |  5 → 10 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Callee                  | Location           |
| -----: | ----: | -----: | ------: | ----------------------- | ------------------ |
| +16.1% |    +5 | 100.0% | 31 → 36 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Callee     | Location                            |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------- |
| -13.5% |   -47 | 100.0% | 349 → 302 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`)

| Change | Delta |      % |   Samples | Callee                         | Location                                    |
| -----: | ----: | -----: | --------: | ------------------------------ | ------------------------------------------- |
| -13.5% |   -47 | 100.0% | 349 → 302 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change | Delta |      % |   Samples | Callee   | Location                                                               |
| -----: | ----: | -----: | --------: | -------- | ---------------------------------------------------------------------- |
| -13.5% |   -47 | 100.0% | 349 → 302 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |   Samples | Callee     | Location                            |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------- |
|  -5.8% |   -27 | 100.0% | 464 → 437 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |              % |   Samples | Callee     | Location                            |
| -----: | ----: | -------------: | --------: | ---------- | ----------------------------------- |
|  -8.8% |   -25 | 100.0% → 99.6% | 285 → 260 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |   Samples | Callee     | Location                            |
| -----: | ----: | ------------: | --------: | ---------- | ----------------------------------- |
|  -4.6% |   -18 | 97.8% → 98.7% | 394 → 376 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |              % |   Samples | Callee            | Location                                               |
| -----: | ----: | -------------: | --------: | ----------------- | ------------------------------------------------------ |
|  -8.4% |   -24 | 100.0% → 98.9% | 285 → 261 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|    new |    +3 |    0.0% → 1.1% |     0 → 3 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Callee                     | Location                                               |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------------ |
|  -7.4% |   -21 | 100.0% | 285 → 264 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  -7.4% |   -21 | 100.0% | 285 → 264 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |   Samples | Callee                           | Location                                                  |
| -----: | ----: | ------------: | --------: | -------------------------------- | --------------------------------------------------------- |
|  +0.9% |    +5 | 95.1% → 99.1% | 549 → 554 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Callee              | Location                                                  |
| -----: | ----: | -----: | --------: | ------------------- | --------------------------------------------------------- |
|  -3.1% |   -18 | 100.0% | 577 → 559 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  -3.1% |   -18 | 100.0% | 577 → 559 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Callee                  | Location                                                               |
| ------: | ----: | -----------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| removed |    -8 | 66.7% → 0.0% |   8 → 0 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070012056a8` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Callee                              | Location            |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ------------------- |
| -75.0% |    -9 | 92.3% → 60.0% |  12 → 3 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`)

| Change | Delta |      % | Samples | Callee                              | Location                                    |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------------------------- |
| -61.5% |    -8 | 100.0% |  13 → 5 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Callee                   | Location                                                               |
| -----: | ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| -61.5% |    -8 | 100.0% |  13 → 5 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30` |

##### `toArray()` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Callee                  | Location           |
| ------: | ----: | ------------: | ------: | ----------------------- | ------------------ |
| removed |    -8 | 100.0% → 0.0% |   8 → 0 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `<init>(Collection)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Callee      | Location              |
| ------: | ----: | ------------: | ------: | ----------- | --------------------- |
| removed |    -8 | 100.0% → 0.0% |   8 → 0 | `toArray()` | `java.util.ArrayList` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Callee               | Location              |
| ------: | ----: | ------------: | ------: | -------------------- | --------------------- |
| removed |    -8 | 100.0% → 0.0% |   8 → 0 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070012056a8`)

|  Change | Delta |             % | Samples | Callee                       | Location                                    |
| ------: | ----: | ------------: | ------: | ---------------------------- | ------------------------------------------- |
| removed |    -8 | 100.0% → 0.0% |   8 → 0 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed |    -3 | 60.0% → 0.0% |   3 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Callee                | Location            |
| -----: | ----: | ------------: | ------: | --------------------- | ------------------- |
| -61.5% |    -8 | 72.2% → 35.7% |  13 → 5 | `forEach(BiConsumer)` | `java.util.HashMap` |
| +80.0% |    +4 | 27.8% → 64.3% |   5 → 9 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Callee            | Location                                    |
| -----: | ----: | -----: | ------: | ----------------- | ------------------------------------------- |
| -22.2% |    -4 | 100.0% | 18 → 14 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Callee                     | Location                                                   |
| -----: | ----: | -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| -22.2% |    -4 | 100.0% | 18 → 14 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `<init>()` (`org.renaissance.harness.Config`)

|  Change | Delta |             % | Samples | Callee              | Location                |
| ------: | ----: | ------------: | ------: | ------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`)

|  Change | Delta |            % | Samples | Callee           | Location                   |
| ------: | ----: | -----------: | ------: | ---------------- | -------------------------- |
| removed |    -4 | 80.0% → 0.0% |   4 → 0 | `unpark(Object)` | `jdk.internal.misc.Unsafe` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % | Samples | Callee           | Location                                 |
| -----: | ----: | -----: | ------: | ---------------- | ---------------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `unpark(Thread)` | `java.util.concurrent.locks.LockSupport` |

##### `setDone()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % | Samples | Callee            | Location                            |
| -----: | ----: | -----: | ------: | ----------------- | ----------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `signalWaiters()` | `java.util.concurrent.ForkJoinTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |           % | Samples | Callee          | Location                                                                              |
| -----: | ----: | ----------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
|    new |    +5 | 0.0% → 9.8% |   0 → 5 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000780121ece0` |
|    new |    +1 | 0.0% → 2.0% |   0 → 1 | `resize()`      | `java.util.HashMap`                                                                   |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |      % | Samples | Callee                                                        | Location                 |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------- | ------------------------ |
| -20.0% |    -1 | 100.0% |   5 → 4 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

| Change | Delta |      % | Samples | Callee                      | Location                 |
| -----: | ----: | -----: | ------: | --------------------------- | ------------------------ |
| -20.0% |    -1 | 100.0% |   5 → 4 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `read(byte[], int, int)` (`java.io.FilterInputStream`)

| Change | Delta |      % | Samples | Callee                   | Location                            |
| -----: | ----: | -----: | ------: | ------------------------ | ----------------------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Callee              | Location                |
| ------: | ----: | ------------: | ------: | ------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Callee                                                                          | Location                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`)

|  Change | Delta |             % | Samples | Callee                                                    | Location                |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------: | ----: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +71.4% |   +20 | 2.1% → 3.4% | 28 → 48 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  +88.2% |   +15 | 1.3% → 2.3% | 17 → 32 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +70.6% |   +12 | 1.3% → 2.1% | 17 → 29 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  +85.7% |   +12 | 1.1% → 1.8% | 14 → 26 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| +133.3% |   +12 | 0.7% → 1.5% |  9 → 21 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  +25.6% |   +10 | 3.0% → 3.5% | 39 → 49 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +12.1% |    +8 | 5.1% → 5.3% | 66 → 74 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
| +266.7% |    +8 | 0.2% → 0.8% |  3 → 11 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +22.2% |    +8 | 2.8% → 3.1% | 36 → 44 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  +47.1% |    +8 | 1.3% → 1.8% | 17 → 25 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| +400.0% |    +8 | 0.2% → 0.7% |  2 → 10 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  +25.0% |    +7 | 2.1% → 2.5% | 28 → 35 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +70.0% |    +7 | 0.8% → 1.2% | 10 → 17 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  +50.0% |    +6 | 0.9% → 1.3% | 12 → 18 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| +600.0% |    +6 | 0.1% → 0.5% |   1 → 7 | `computeIfAbsent(Object, Function)` (`java.util.HashMap`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| +100.0% |    +6 | 0.5% → 0.9% |  6 → 12 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                   |
|  +62.5% |    +5 | 0.6% → 0.9% |  8 → 13 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +55.6% |    +5 | 0.7% → 1.0% |  9 → 14 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  +25.0% |    +5 | 1.5% → 1.8% | 20 → 25 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007801082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

|  Change | Delta |           % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------: | ----: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -44.3% |   -27 | 4.7% → 2.4% | 61 → 34 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                   |
|  -54.2% |   -13 | 1.8% → 0.8% | 24 → 11 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|  -41.7% |   -10 | 1.8% → 1.0% | 24 → 14 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -81.8% |    -9 | 0.8% → 0.1% |  11 → 2 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -58.3% |    -7 | 0.9% → 0.4% |  12 → 5 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -70.0% |    -7 | 0.8% → 0.2% |  10 → 3 | `computeIfAbsent(Object, Function)` (`java.util.HashMap`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -15.4% |    -6 | 3.0% → 2.3% | 39 → 33 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -16.0% |    -4 | 1.9% → 1.5% | 25 → 21 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|   -8.2% |    -4 | 3.8% → 3.2% | 49 → 45 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |    -4 | 0.3% → 0.0% |   4 → 0 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -60.0% |    -3 | 0.4% → 0.1% |   5 → 2 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -50.0% |    -3 | 0.5% → 0.2% |   6 → 3 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                      |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `transferTo(OutputStream)` (`java.io.InputStream`) ← `copy(InputStream, Path, CopyOption[])` (`java.nio.file.Files`) ← `extractResource(String, Path)` (`org.renaissance.core.ResourceUtils`) ← `extractResources(Iterable, Path)` ← `createClassLoaderForModule(String)` (`org.renaissance.core.ModuleLoader`) ← `getBenchmarkClassLoader(BenchmarkDescriptor)` (`org.renaissance.core.BenchmarkSuite`) ← `createBenchmark(BenchmarkDescriptor)` ← `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

# Allocated heap profile diff

Allocated 37.7 GiB → 37.9 GiB (+168.678 MiB, +0.4%) over 2,765 → 2,253 samples (14 MiB → 17.2 MiB per sample).

| Category         | Change |        Delta |             % |                Size |       Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | ------------: |
| Standard library |    ~0% |   +11.72 MiB | 95.2% → 94.9% |   35.9 GiB → 36 GiB | 2,578 → 2,128 |
| Ours             |  +8.5% | +156.958 MiB |   4.8% → 5.1% |  1.8 GiB → 1.95 GiB |     185 → 124 |
| Unknown          |  -5.0% |       -104 B |         <0.1% | 2.02 KiB → 1.91 KiB |         2 → 1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 37.5 GiB → 37.7 GiB (99.4%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 37.5 GiB → 37.7 GiB (99.4%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       └── 37.5 GiB → 37.7 GiB (99.4%) scan(ForkJoinPool$WorkQueue, int, int)
│           └── 37.5 GiB → 37.7 GiB (99.4%) topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool$WorkQueue
│               └── 37.5 GiB → 37.7 GiB (99.4%) doExec() at java.util.concurrent.ForkJoinTask
│                   └── … 37.5 GiB → 37.7 GiB (99.4%) exec() at java.util.concurrent.RecursiveTask
│                       └── 37.5 GiB → 37.7 GiB (99.4%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│                           ├── 31.9 GiB → 31.8 GiB (84.6% → 84.0%) combineResults(Object, Object) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           │   └── 31.9 GiB → 31.8 GiB (84.6% → 84.0%) combineResults(Map, Map)
│                           │       └── 31.9 GiB → 31.8 GiB (84.6% → 84.0%) merge(Map, Map) at org.renaissance.jdk.concurrent.JavaKMeans
│                           │           └── … 31.7 GiB → 31.6 GiB (84.0% → 83.4%) merge(Object, Object, BiFunction) at java.util.HashMap
│                           │               └── 31.7 GiB → 31.6 GiB (84.0% → 83.4%) apply(Object, Object) at org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178
│                           │                   └── 31.7 GiB → 31.6 GiB (84.0% → 83.4%) lambda$merge$6(List, List) at org.renaissance.jdk.concurrent.JavaKMeans
│                           │                       ├── 24.2 GiB → 23.7 GiB (64.1% → 62.5%) addAll(Collection) at java.util.ArrayList
│                           │                       │   ├── 14.5 GiB → 13.2 GiB (38.5% → 34.9%) grow(int)
│                           │                       │   │   └── 14.5 GiB → 13.2 GiB (38.5% → 34.9%, self 93.7% → 93.9% globally) copyOf(Object[], int) at java.util.Arrays
│                           │                       │   └── 9.67 GiB → 10.5 GiB (25.6% → 27.6%) toArray()
│                           │                       │       └── 9.67 GiB → 10.5 GiB (25.6% → 27.6%) copyOf(Object[], int) at java.util.Arrays
│                           │                       └── 7.49 GiB → 7.9 GiB (19.8% → 20.8%) <init>(Collection) at java.util.ArrayList
│                           │                           └── 7.49 GiB → 7.9 GiB (19.8% → 20.8%) toArray()
│                           │                               └── 7.49 GiB → 7.9 GiB (19.8% → 20.8%) copyOf(Object[], int) at java.util.Arrays
│                           ├── 5.29 GiB → 5.25 GiB (14.0% → 13.8%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           │   ├── … 4.24 GiB → 4.45 GiB (11.2% → 11.7%, self 0.3% → 0.9%) collectClusters(int[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           │   │   ├── … 3.66 GiB → 4 GiB (9.7% → 10.6%) copyOf(Object[], int) at java.util.Arrays
│                           │   │   └── 383 MiB → 27.7 MiB (1.0% → 0.1%) computeIfAbsent(Object, Function) at java.util.HashMap
│                           │   │       ├── 193 MiB → 5.44 MiB (0.5% → <0.1%) apply(Object) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000780121ece0
│                           │   │       │   └── 193 MiB → 5.44 MiB (0.5% → <0.1%) lambda$collectClusters$0(Double[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           │   │       ├── 93.8 MiB → 19.3 MiB (0.2% → <0.1%) newNode(int, Object, Object, HashMap$Node)
│                           │   │       └── 96.2 MiB → 2.99 MiB (0.2% → <0.1%) resize()
│                           │   └── … 1.04 GiB → 819 MiB (2.8% → 2.1%) findNearestCentroid() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           ├── 197 MiB → 353 MiB (0.5% → 0.9%) createSubtask(int, int) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           ├── 91.7 MiB → 115 MiB (0.2% → 0.3%) createSubtask(int, int) at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│                           └── 27.5 MiB → 123 MiB (0.1% → 0.3%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│                               └── … 27.5 MiB → 123 MiB (0.1% → 0.3%) vectorSum() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
└── … 189 MiB → 194 MiB (0.5%) applyVoid(Object) at org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780119c3b8
    ├── … 176 MiB → 0 B (0.5% → 0.0%) apply(int) at org.renaissance.jdk.concurrent.JavaKMeans$$Lambda
    │   ├── … 105 MiB → 0 B (0.3% → 0.0%) builder(long, IntFunction) at java.util.stream.Nodes
    │   └── 24.4 MiB → 0 B (0.1% → 0.0%) lambda$generateData$3(int, int, Random[], int) at org.renaissance.jdk.concurrent.JavaKMeans
    │       └── 24.4 MiB → 0 B (0.1% → 0.0%) valueOf(double) at java.lang.Double
    └── … 0 B → 112 MiB (0.0% → 0.3%) lambda$generateData$4(int) at org.renaissance.jdk.concurrent.JavaKMeans
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |       Samples | Function                                              | Location                                                   |
| ------: | -----------: | ------------: | ------------------: | ------------: | ----------------------------------------------------- | ---------------------------------------------------------- |
|   +0.7% | +239.967 MiB | 93.7% → 93.9% | 35.4 GiB → 35.6 GiB | 2,381 → 1,936 | `copyOf(Object[], int)`                               | `java.util.Arrays`                                         |
| +197.6% | +231.148 MiB |   0.3% → 0.9% |   117 MiB → 348 MiB |        13 → 6 | `collectClusters(int[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +79.7% | +156.675 MiB |   0.5% → 0.9% |   197 MiB → 353 MiB |        9 → 10 | `createSubtask(int, int)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +877.9% | +100.851 MiB |  <0.1% → 0.3% |  11.5 MiB → 112 MiB |       17 → 13 | `lambda$generateData$4(int)`                          | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +347.3% |  +95.374 MiB |   0.1% → 0.3% |  27.5 MiB → 123 MiB |         6 → 9 | `vectorSum()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +25.2% |  +23.121 MiB |   0.2% → 0.3% |  91.7 MiB → 115 MiB |        15 → 9 | `createSubtask(int, int)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +612.3% |  +14.602 MiB |         <0.1% |   2.38 MiB → 17 MiB |         2 → 5 | `add(double[], double[])`                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|     new |   +6.181 MiB |  0.0% → <0.1% |      0 B → 6.18 MiB |         0 → 1 | `result()`                                            | `scala.collection.immutable.VectorBuilder`                 |
|  +58.0% |   +5.929 MiB |         <0.1% | 10.2 MiB → 16.2 MiB |       22 → 41 | `copyOf(byte[], int)`                                 | `java.util.Arrays`                                         |
| +155.2% |     +4.7 MiB |         <0.1% | 3.03 MiB → 7.73 MiB |         7 → 9 | `opWrapSink(int, Sink)`                               | `java.util.stream.IntPipeline$1`                           |
|  +20.2% |   +2.123 MiB |         <0.1% | 10.5 MiB → 12.6 MiB |       19 → 17 | `mapToObj(IntFunction, int)`                          | `java.util.stream.IntPipeline`                             |
|     new | +868.031 KiB |  0.0% → <0.1% |       0 B → 868 KiB |         0 → 2 | `readNBytes(int)`                                     | `java.io.InputStream`                                      |
|     new | +547.468 KiB |  0.0% → <0.1% |       0 B → 547 KiB |         0 → 1 | `entrySet()`                                          | `java.util.HashMap`                                        |
|     new | +403.671 KiB |  0.0% → <0.1% |       0 B → 404 KiB |         0 → 1 | `read(Manifest$FastInputStream, byte[], String, int)` | `java.util.jar.Attributes`                                 |
|     new | +388.671 KiB |  0.0% → <0.1% |       0 B → 389 KiB |         0 → 1 | `addConstantNameAndType(String, String)`              | `jdk.internal.org.objectweb.asm.SymbolTable`               |
|     new | +388.187 KiB |  0.0% → <0.1% |       0 B → 388 KiB |         0 → 1 | `copyOfRange(byte[], int, int)`                       | `java.util.Arrays`                                         |
|     new |  +387.71 KiB |  0.0% → <0.1% |       0 B → 388 KiB |         0 → 1 | `<init>(ClassWriter)`                                 | `jdk.internal.org.objectweb.asm.SymbolTable`               |
|     new | +387.664 KiB |  0.0% → <0.1% |       0 B → 388 KiB |         0 → 1 | `<clinit>()`                                          | `java.time.format.DateTimeFormatterBuilder`                |
|     new | +387.656 KiB |  0.0% → <0.1% |       0 B → 388 KiB |         0 → 1 | `allocateUninitializedArray0(Class, int)`             | `jdk.internal.misc.Unsafe`                                 |
|     new | +386.867 KiB |  0.0% → <0.1% |       0 B → 387 KiB |         0 → 1 | `copyOf(Object[], int, Class)`                        | `java.util.Arrays`                                         |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                                                                | Location                                           |
| ------: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
|   +0.7% | +239.967 MiB | 93.7% → 93.9% | 35.4 GiB → 35.6 GiB | 2,381 → 1,936 | `copyOf(Object[], int)`                                                                 | `java.util.Arrays`                                 |
|     new |   +6.181 MiB |  0.0% → <0.1% |      0 B → 6.18 MiB |         0 → 1 | `result()`                                                                              | `scala.collection.immutable.VectorBuilder`         |
|  +58.0% |   +5.929 MiB |         <0.1% | 10.2 MiB → 16.2 MiB |       22 → 41 | `copyOf(byte[], int)`                                                                   | `java.util.Arrays`                                 |
| +155.2% |     +4.7 MiB |         <0.1% | 3.03 MiB → 7.73 MiB |         7 → 9 | `opWrapSink(int, Sink)`                                                                 | `java.util.stream.IntPipeline$1`                   |
|  +20.2% |   +2.123 MiB |         <0.1% | 10.5 MiB → 12.6 MiB |       19 → 17 | `mapToObj(IntFunction, int)`                                                            | `java.util.stream.IntPipeline`                     |
|     new | +868.031 KiB |  0.0% → <0.1% |       0 B → 868 KiB |         0 → 2 | `readNBytes(int)`                                                                       | `java.io.InputStream`                              |
|     new | +547.468 KiB |  0.0% → <0.1% |       0 B → 547 KiB |         0 → 1 | `entrySet()`                                                                            | `java.util.HashMap`                                |
|     new | +403.671 KiB |  0.0% → <0.1% |       0 B → 404 KiB |         0 → 1 | `read(Manifest$FastInputStream, byte[], String, int)`                                   | `java.util.jar.Attributes`                         |
|     new | +388.671 KiB |  0.0% → <0.1% |       0 B → 389 KiB |         0 → 1 | `addConstantNameAndType(String, String)`                                                | `jdk.internal.org.objectweb.asm.SymbolTable`       |
|     new | +388.187 KiB |  0.0% → <0.1% |       0 B → 388 KiB |         0 → 1 | `copyOfRange(byte[], int, int)`                                                         | `java.util.Arrays`                                 |
|     new |  +387.71 KiB |  0.0% → <0.1% |       0 B → 388 KiB |         0 → 1 | `<init>(ClassWriter)`                                                                   | `jdk.internal.org.objectweb.asm.SymbolTable`       |
|     new | +387.664 KiB |  0.0% → <0.1% |       0 B → 388 KiB |         0 → 1 | `<clinit>()`                                                                            | `java.time.format.DateTimeFormatterBuilder`        |
|     new | +387.656 KiB |  0.0% → <0.1% |       0 B → 388 KiB |         0 → 1 | `allocateUninitializedArray0(Class, int)`                                               | `jdk.internal.misc.Unsafe`                         |
|     new | +386.867 KiB |  0.0% → <0.1% |       0 B → 387 KiB |         0 → 1 | `copyOf(Object[], int, Class)`                                                          | `java.util.Arrays`                                 |
|  +91.0% | +371.625 KiB |         <0.1% |   408 KiB → 780 KiB |         1 → 2 | `transferTo(OutputStream)`                                                              | `java.io.InputStream`                              |
|     new | +325.023 KiB |  0.0% → <0.1% |       0 B → 325 KiB |         0 → 1 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |
|   +2.6% | +181.492 KiB |         <0.1% |  6.8 MiB → 6.97 MiB |         8 → 7 | `allocateInstance(Object)`                                                              | `java.lang.invoke.DirectMethodHandle`              |
|  +34.5% | +138.015 KiB |         <0.1% |   400 KiB → 538 KiB |             1 | `enlarge(int)`                                                                          | `jdk.internal.org.objectweb.asm.ByteVector`        |
|   +0.1% |  +19.468 KiB |          0.1% |            20.8 MiB |             1 | `initTable()`                                                                           | `java.util.concurrent.ConcurrentHashMap`           |
|   +2.9% |  +11.375 KiB |         <0.1% |   388 KiB → 399 KiB |             1 | `copyOfRangeByte(byte[], int, int)`                                                     | `java.util.Arrays`                                 |

##### Ours

|  Change |        Delta |            % |               Size | Samples | Function                     | Location                                                   |
| ------: | -----------: | -----------: | -----------------: | ------: | ---------------------------- | ---------------------------------------------------------- |
| +197.6% | +231.148 MiB |  0.3% → 0.9% |  117 MiB → 348 MiB |  13 → 6 | `collectClusters(int[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +79.7% | +156.675 MiB |  0.5% → 0.9% |  197 MiB → 353 MiB |  9 → 10 | `createSubtask(int, int)`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +877.9% | +100.851 MiB | <0.1% → 0.3% | 11.5 MiB → 112 MiB | 17 → 13 | `lambda$generateData$4(int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +347.3% |  +95.374 MiB |  0.1% → 0.3% | 27.5 MiB → 123 MiB |   6 → 9 | `vectorSum()`                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  +25.2% |  +23.121 MiB |  0.2% → 0.3% | 91.7 MiB → 115 MiB |  15 → 9 | `createSubtask(int, int)`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +612.3% |  +14.602 MiB |        <0.1% |  2.38 MiB → 17 MiB |   2 → 5 | `add(double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

#### Improvements

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |          Delta |            % |                Size |  Samples | Function                                     | Location                                                   |
| ------: | -------------: | -----------: | ------------------: | -------: | -------------------------------------------- | ---------------------------------------------------------- |
|  -23.4% |   -250.232 MiB |  2.8% → 2.1% |  1.04 GiB → 819 MiB | 105 → 60 | `findNearestCentroid()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -97.2% |   -187.912 MiB | 0.5% → <0.1% |  193 MiB → 5.44 MiB |    5 → 3 | `lambda$collectClusters$0(Double[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -99.3% |   -103.754 MiB | 0.3% → <0.1% |   105 MiB → 775 KiB |        2 | `builder(long, IntFunction)`                 | `java.util.stream.Nodes`                                   |
|  -48.9% |    -81.114 MiB |  0.4% → 0.2% |  166 MiB → 84.9 MiB |  17 → 15 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                        |
|  -30.5% |    -33.453 MiB |  0.3% → 0.2% |  110 MiB → 76.1 MiB |    8 → 6 | `resize()`                                   | `java.util.HashMap`                                        |
|  -85.7% |    -19.908 MiB | 0.1% → <0.1% | 23.2 MiB → 3.32 MiB |    8 → 3 | `lambda$merge$6(List, List)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -12.0% |    -11.097 MiB |         0.2% |   92.1 MiB → 81 MiB |    9 → 7 | `grow(int)`                                  | `java.util.ArrayList`                                      |
|  -50.5% |     -6.349 MiB |        <0.1% | 12.6 MiB → 6.23 MiB |    3 → 2 | `iterator()`                                 | `java.util.HashMap$EntrySet`                               |
|   -5.7% |     -6.055 MiB |         0.3% |  106 MiB → 99.9 MiB |    4 → 6 | `merge(Map, Map)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  -91.5% |      -4.09 MiB |        <0.1% |  4.47 MiB → 388 KiB |    6 → 1 | `range(int, int)`                            | `java.util.stream.IntStream`                               |
|  -13.7% |     -1.659 MiB |        <0.1% | 12.1 MiB → 10.4 MiB |  19 → 14 | `intStream(Spliterator$OfInt, boolean)`      | `java.util.stream.StreamSupport`                           |
|  -80.0% |     -1.514 MiB |        <0.1% |  1.89 MiB → 388 KiB |    5 → 1 | `allocateInstance(Class)`                    | `jdk.internal.misc.Unsafe`                                 |
|  -20.0% |     -1.415 MiB |        <0.1% | 7.09 MiB → 5.68 MiB |  13 → 15 | `<init>(InputStream, Inflater, int)`         | `java.util.zip.InflaterInputStream`                        |
| removed |     -1.264 MiB | <0.1% → 0.0% |      1.26 MiB → 0 B |    1 → 0 | `<init>(int)`                                | `java.io.ByteArrayOutputStream`                            |
|   -4.0% | -1,010.109 KiB |         0.1% | 24.4 MiB → 23.4 MiB |  37 → 35 | `valueOf(double)`                            | `java.lang.Double`                                         |
| removed |   -725.273 KiB | <0.1% → 0.0% |       725 KiB → 0 B |    1 → 0 | `collectGarbage(String)`                     | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |
| removed |   -666.656 KiB | <0.1% → 0.0% |       667 KiB → 0 B |    1 → 0 | `<init>(InputStream, int)`                   | `java.util.jar.Manifest$FastInputStream`                   |
| removed |    -507.64 KiB | <0.1% → 0.0% |       508 KiB → 0 B |    1 → 0 | `awaitDone(int, long)`                       | `java.util.concurrent.ForkJoinTask`                        |
|  -60.5% |   -420.562 KiB |        <0.1% |   695 KiB → 274 KiB |    2 → 1 | `<init>(int)`                                | `java.lang.AbstractStringBuilder`                          |
| removed |   -409.765 KiB | <0.1% → 0.0% |       410 KiB → 0 B |    1 → 0 | `compress(char[], int, int)`                 | `java.lang.StringUTF16`                                    |

##### Standard library

|  Change |          Delta |            % |                Size | Samples | Function                                                          | Location                                       |
| ------: | -------------: | -----------: | ------------------: | ------: | ----------------------------------------------------------------- | ---------------------------------------------- |
|  -99.3% |   -103.754 MiB | 0.3% → <0.1% |   105 MiB → 775 KiB |       2 | `builder(long, IntFunction)`                                      | `java.util.stream.Nodes`                       |
|  -48.9% |    -81.114 MiB |  0.4% → 0.2% |  166 MiB → 84.9 MiB | 17 → 15 | `newNode(int, Object, Object, HashMap$Node)`                      | `java.util.HashMap`                            |
|  -30.5% |    -33.453 MiB |  0.3% → 0.2% |  110 MiB → 76.1 MiB |   8 → 6 | `resize()`                                                        | `java.util.HashMap`                            |
|  -12.0% |    -11.097 MiB |         0.2% |   92.1 MiB → 81 MiB |   9 → 7 | `grow(int)`                                                       | `java.util.ArrayList`                          |
|  -50.5% |     -6.349 MiB |        <0.1% | 12.6 MiB → 6.23 MiB |   3 → 2 | `iterator()`                                                      | `java.util.HashMap$EntrySet`                   |
|  -91.5% |      -4.09 MiB |        <0.1% |  4.47 MiB → 388 KiB |   6 → 1 | `range(int, int)`                                                 | `java.util.stream.IntStream`                   |
|  -13.7% |     -1.659 MiB |        <0.1% | 12.1 MiB → 10.4 MiB | 19 → 14 | `intStream(Spliterator$OfInt, boolean)`                           | `java.util.stream.StreamSupport`               |
|  -80.0% |     -1.514 MiB |        <0.1% |  1.89 MiB → 388 KiB |   5 → 1 | `allocateInstance(Class)`                                         | `jdk.internal.misc.Unsafe`                     |
|  -20.0% |     -1.415 MiB |        <0.1% | 7.09 MiB → 5.68 MiB | 13 → 15 | `<init>(InputStream, Inflater, int)`                              | `java.util.zip.InflaterInputStream`            |
| removed |     -1.264 MiB | <0.1% → 0.0% |      1.26 MiB → 0 B |   1 → 0 | `<init>(int)`                                                     | `java.io.ByteArrayOutputStream`                |
|   -4.0% | -1,010.109 KiB |         0.1% | 24.4 MiB → 23.4 MiB | 37 → 35 | `valueOf(double)`                                                 | `java.lang.Double`                             |
| removed |   -666.656 KiB | <0.1% → 0.0% |       667 KiB → 0 B |   1 → 0 | `<init>(InputStream, int)`                                        | `java.util.jar.Manifest$FastInputStream`       |
| removed |    -507.64 KiB | <0.1% → 0.0% |       508 KiB → 0 B |   1 → 0 | `awaitDone(int, long)`                                            | `java.util.concurrent.ForkJoinTask`            |
|  -60.5% |   -420.562 KiB |        <0.1% |   695 KiB → 274 KiB |   2 → 1 | `<init>(int)`                                                     | `java.lang.AbstractStringBuilder`              |
| removed |   -409.765 KiB | <0.1% → 0.0% |       410 KiB → 0 B |   1 → 0 | `compress(char[], int, int)`                                      | `java.lang.StringUTF16`                        |
| removed |   -402.656 KiB | <0.1% → 0.0% |       403 KiB → 0 B |   1 → 0 | `putVal(Object, Object, boolean)`                                 | `java.util.concurrent.ConcurrentHashMap`       |
| removed |   -395.648 KiB | <0.1% → 0.0% |       396 KiB → 0 B |   1 → 0 | `parseName(byte[], int)`                                          | `java.util.jar.Manifest`                       |
| removed |   -394.625 KiB | <0.1% → 0.0% |       395 KiB → 0 B |   1 → 0 | `buildCallSite()`                                                 | `java.lang.invoke.InnerClassLambdaMetafactory` |
| removed |   -394.625 KiB | <0.1% → 0.0% |       395 KiB → 0 B |   1 → 0 | `<init>(SymbolTable, int, String, String, String, String[], int)` | `jdk.internal.org.objectweb.asm.MethodWriter`  |
| removed |   -394.617 KiB | <0.1% → 0.0% |       395 KiB → 0 B |   1 → 0 | `initDataOffset()`                                                | `java.util.zip.ZipFile$ZipFileInputStream`     |

##### Ours

|  Change |        Delta |            % |                Size |  Samples | Function                             | Location                                                   |
| ------: | -----------: | -----------: | ------------------: | -------: | ------------------------------------ | ---------------------------------------------------------- |
|  -23.4% | -250.232 MiB |  2.8% → 2.1% |  1.04 GiB → 819 MiB | 105 → 60 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -97.2% | -187.912 MiB | 0.5% → <0.1% |  193 MiB → 5.44 MiB |    5 → 3 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -85.7% |  -19.908 MiB | 0.1% → <0.1% | 23.2 MiB → 3.32 MiB |    8 → 3 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|   -5.7% |   -6.055 MiB |         0.3% |  106 MiB → 99.9 MiB |    4 → 6 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed | -725.273 KiB | <0.1% → 0.0% |       725 KiB → 0 B |    1 → 0 | `collectGarbage(String)`             | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |      % |                Size |       Samples | Location                |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------------- |
|  +0.7% | +239.967 MiB | 100.0% | 35.4 GiB → 35.6 GiB | 2,381 → 1,936 | `java.util.Arrays:3482` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |        Delta |      % |              Size | Samples | Location                                                       |
| ------: | -----------: | -----: | ----------------: | ------: | -------------------------------------------------------------- |
| +197.6% | +231.148 MiB | 100.0% | 117 MiB → 348 MiB |  13 → 6 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size | Samples | Location                                                       |
| -----: | -----------: | -----: | ----------------: | ------: | -------------------------------------------------------------- |
| +79.7% | +156.675 MiB | 100.0% | 197 MiB → 353 MiB |  9 → 10 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |        Delta |      % |               Size | Samples | Location                                       |
| ------: | -----------: | -----: | -----------------: | ------: | ---------------------------------------------- |
| +877.9% | +100.851 MiB | 100.0% | 11.5 MiB → 112 MiB | 17 → 13 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |       Delta |      % |               Size | Samples | Location                                                      |
| ------: | ----------: | -----: | -----------------: | ------: | ------------------------------------------------------------- |
| +347.3% | +95.374 MiB | 100.0% | 27.5 MiB → 123 MiB |   6 → 9 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |               Size | Samples | Location                                                      |
| -----: | ----------: | -----: | -----------------: | ------: | ------------------------------------------------------------- |
| +25.2% | +23.121 MiB | 100.0% | 91.7 MiB → 115 MiB |  15 → 9 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |       Delta |      % |              Size | Samples | Location                                                      |
| ------: | ----------: | -----: | ----------------: | ------: | ------------------------------------------------------------- |
| +612.3% | +14.602 MiB | 100.0% | 2.38 MiB → 17 MiB |   2 → 5 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `result()` (`scala.collection.immutable.VectorBuilder`)

| Change |      Delta |             % |           Size | Samples | Location                                        |
| -----: | ---------: | ------------: | -------------: | ------: | ----------------------------------------------- |
|    new | +6.181 MiB | 0.0% → 100.0% | 0 B → 6.18 MiB |   0 → 1 | `scala.collection.immutable.VectorBuilder:1898` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Samples | Location                |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- |
| +58.0% | +5.929 MiB | 100.0% | 10.2 MiB → 16.2 MiB | 22 → 41 | `java.util.Arrays:3541` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|  Change |    Delta |      % |                Size | Samples | Location                             |
| ------: | -------: | -----: | ------------------: | ------: | ------------------------------------ |
| +155.2% | +4.7 MiB | 100.0% | 3.03 MiB → 7.73 MiB |   7 → 9 | `java.util.stream.IntPipeline$1:177` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

| Change |      Delta |      % |                Size | Samples | Location                           |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------------------- |
| +20.2% | +2.123 MiB | 100.0% | 10.5 MiB → 12.6 MiB | 19 → 17 | `java.util.stream.IntPipeline:174` |

##### `readNBytes(int)` (`java.io.InputStream`)

| Change |        Delta |            % |          Size | Samples | Location                  |
| -----: | -----------: | -----------: | ------------: | ------: | ------------------------- |
|    new | +441.789 KiB | 0.0% → 50.9% | 0 B → 442 KiB |   0 → 1 | `java.io.InputStream:408` |
|    new | +426.242 KiB | 0.0% → 49.1% | 0 B → 426 KiB |   0 → 1 | `java.io.InputStream:448` |

##### `entrySet()` (`java.util.HashMap`)

| Change |        Delta |             % |          Size | Samples | Location                 |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------ |
|    new | +547.468 KiB | 0.0% → 100.0% | 0 B → 547 KiB |   0 → 1 | `java.util.HashMap:1099` |

##### `read(Manifest$FastInputStream, byte[], String, int)` (`java.util.jar.Attributes`)

| Change |        Delta |             % |          Size | Samples | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------ |
|    new | +403.671 KiB | 0.0% → 100.0% | 0 B → 404 KiB |   0 → 1 | `java.util.jar.Attributes:371` |

##### `addConstantNameAndType(String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |        Delta |             % |          Size | Samples | Location                                         |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
|    new | +388.671 KiB | 0.0% → 100.0% | 0 B → 389 KiB |   0 → 1 | `jdk.internal.org.objectweb.asm.SymbolTable:773` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

| Change |        Delta |             % |          Size | Samples | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------- |
|    new | +388.187 KiB | 0.0% → 100.0% | 0 B → 388 KiB |   0 → 1 | `java.util.Arrays:3856` |

##### `<init>(ClassWriter)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |       Delta |             % |          Size | Samples | Location                                         |
| -----: | ----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
|    new | +387.71 KiB | 0.0% → 100.0% | 0 B → 388 KiB |   0 → 1 | `jdk.internal.org.objectweb.asm.SymbolTable:156` |

##### `<clinit>()` (`java.time.format.DateTimeFormatterBuilder`)

| Change |        Delta |             % |          Size | Samples | Location                                        |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- |
|    new | +387.664 KiB | 0.0% → 100.0% | 0 B → 388 KiB |   0 → 1 | `java.time.format.DateTimeFormatterBuilder:166` |

##### `allocateUninitializedArray0(Class, int)` (`jdk.internal.misc.Unsafe`)

| Change |        Delta |             % |          Size | Samples | Location                        |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------- |
|    new | +387.656 KiB | 0.0% → 100.0% | 0 B → 388 KiB |   0 → 1 | `jdk.internal.misc.Unsafe:1387` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |        Delta |             % |          Size | Samples | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------- |
|    new | +386.867 KiB | 0.0% → 100.0% | 0 B → 387 KiB |   0 → 1 | `java.util.Arrays:3513` |

##### `transferTo(OutputStream)` (`java.io.InputStream`)

| Change |        Delta |      % |              Size | Samples | Location                  |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------------- |
| +91.0% | +371.625 KiB | 100.0% | 408 KiB → 780 KiB |   1 → 2 | `java.io.InputStream:794` |

##### `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` (`java.util.zip.ZipFile$ZipFileInflaterInputStream`)

| Change |        Delta |             % |          Size | Samples | Location                                               |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------------ |
|    new | +325.023 KiB | 0.0% → 100.0% | 0 B → 325 KiB |   0 → 1 | `java.util.zip.ZipFile$ZipFileInflaterInputStream:476` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |        Delta |      % |               Size | Samples | Location                                  |
| -----: | -----------: | -----: | -----------------: | ------: | ----------------------------------------- |
|  +2.6% | +181.492 KiB | 100.0% | 6.8 MiB → 6.97 MiB |   8 → 7 | `java.lang.invoke.DirectMethodHandle:501` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |        Delta |      % |              Size | Samples | Location                                        |
| -----: | -----------: | -----: | ----------------: | ------: | ----------------------------------------------- |
| +34.5% | +138.015 KiB | 100.0% | 400 KiB → 538 KiB |       1 | `jdk.internal.org.objectweb.asm.ByteVector:401` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

| Change |       Delta |      % |     Size | Samples | Location                                      |
| -----: | ----------: | -----: | -------: | ------: | --------------------------------------------- |
|  +0.1% | +19.468 KiB | 100.0% | 20.8 MiB |       1 | `java.util.concurrent.ConcurrentHashMap:2301` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |       Delta |      % |              Size | Samples | Location                |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------------- |
|  +2.9% | +11.375 KiB | 100.0% | 388 KiB → 399 KiB |       1 | `java.util.Arrays:3863` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |               Size |  Samples | Location                                                       |
| -----: | -----------: | -----: | -----------------: | -------: | -------------------------------------------------------------- |
| -23.4% | -250.232 MiB | 100.0% | 1.04 GiB → 819 MiB | 105 → 60 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |               Size | Samples | Location                                                       |
| -----: | -----------: | -----: | -----------------: | ------: | -------------------------------------------------------------- |
| -97.2% | -187.912 MiB | 100.0% | 193 MiB → 5.44 MiB |   5 → 3 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |        Delta |      % |              Size | Samples | Location                     |
| -----: | -----------: | -----: | ----------------: | ------: | ---------------------------- |
| -99.3% | -103.754 MiB | 100.0% | 105 MiB → 775 KiB |       2 | `java.util.stream.Nodes:168` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |      % |               Size | Samples | Location                 |
| -----: | ----------: | -----: | -----------------: | ------: | ------------------------ |
| -48.9% | -81.114 MiB | 100.0% | 166 MiB → 84.9 MiB | 17 → 15 | `java.util.HashMap:1909` |

##### `resize()` (`java.util.HashMap`)

| Change |       Delta |      % |               Size | Samples | Location                |
| -----: | ----------: | -----: | -----------------: | ------: | ----------------------- |
| -30.5% | -33.453 MiB | 100.0% | 110 MiB → 76.1 MiB |   8 → 6 | `java.util.HashMap:710` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |                Size | Samples | Location                                        |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------------------------------------- |
| -85.7% | -19.908 MiB | 100.0% | 23.2 MiB → 3.32 MiB |   8 → 3 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |      % |              Size | Samples | Location                  |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------- |
| -12.0% | -11.097 MiB | 100.0% | 92.1 MiB → 81 MiB |   9 → 7 | `java.util.ArrayList:239` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

| Change |      Delta |      % |                Size | Samples | Location                          |
| -----: | ---------: | -----: | ------------------: | ------: | --------------------------------- |
| -50.5% | -6.349 MiB | 100.0% | 12.6 MiB → 6.23 MiB |   3 → 2 | `java.util.HashMap$EntrySet:1106` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |               Size | Samples | Location                                        |
| -----: | ---------: | -----: | -----------------: | ------: | ----------------------------------------------- |
|  -5.7% | -6.055 MiB | 100.0% | 106 MiB → 99.9 MiB |   4 → 6 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |     Delta |      % |               Size | Samples | Location                          |
| -----: | --------: | -----: | -----------------: | ------: | --------------------------------- |
| -91.5% | -4.09 MiB | 100.0% | 4.47 MiB → 388 KiB |   6 → 1 | `java.util.stream.IntStream:1083` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

| Change |      Delta |      % |                Size | Samples | Location                             |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------ |
| -13.7% | -1.659 MiB | 100.0% | 12.1 MiB → 10.4 MiB | 19 → 14 | `java.util.stream.StreamSupport:138` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

| Change |        Delta |              % |               Size | Samples | Location                                |
| -----: | -----------: | -------------: | -----------------: | ------: | --------------------------------------- |
| -25.3% |   -1.795 MiB | 100.0% → 93.3% | 7.09 MiB → 5.3 MiB | 13 → 14 | `java.util.zip.InflaterInputStream:89`  |
|    new | +388.687 KiB |    0.0% → 6.7% |      0 B → 389 KiB |   0 → 1 | `java.util.zip.InflaterInputStream:113` |

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

|  Change |      Delta |             % |           Size | Samples | Location                           |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------------------- |
| removed | -1.264 MiB | 100.0% → 0.0% | 1.26 MiB → 0 B |   1 → 0 | `java.io.ByteArrayOutputStream:81` |

##### `valueOf(double)` (`java.lang.Double`)

| Change |          Delta |      % |                Size | Samples | Location               |
| -----: | -------------: | -----: | ------------------: | ------: | ---------------------- |
|  -4.0% | -1,010.109 KiB | 100.0% | 24.4 MiB → 23.4 MiB | 37 → 35 | `java.lang.Double:773` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

|  Change |        Delta |             % |          Size | Samples | Location                                                    |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------------------- |
| removed | -725.273 KiB | 100.0% → 0.0% | 725 KiB → 0 B |   1 → 0 | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin:26` |

##### `<init>(InputStream, int)` (`java.util.jar.Manifest$FastInputStream`)

|  Change |        Delta |             % |          Size | Samples | Location                                     |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------------------- |
| removed | -666.656 KiB | 100.0% → 0.0% | 667 KiB → 0 B |   1 → 0 | `java.util.jar.Manifest$FastInputStream:421` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change |       Delta |             % |          Size | Samples | Location                                |
| ------: | ----------: | ------------: | ------------: | ------: | --------------------------------------- |
| removed | -507.64 KiB | 100.0% → 0.0% | 508 KiB → 0 B |   1 → 0 | `java.util.concurrent.ForkJoinTask:437` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

| Change |        Delta |      % |              Size | Samples | Location                              |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------------------------- |
| -60.5% | -420.562 KiB | 100.0% | 695 KiB → 274 KiB |   2 → 1 | `java.lang.AbstractStringBuilder:101` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

|  Change |        Delta |             % |          Size | Samples | Location                    |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------- |
| removed | -409.765 KiB | 100.0% → 0.0% | 410 KiB → 0 B |   1 → 0 | `java.lang.StringUTF16:211` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |        Delta |             % |          Size | Samples | Location                                      |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------------- |
| removed | -402.656 KiB | 100.0% → 0.0% | 403 KiB → 0 B |   1 → 0 | `java.util.concurrent.ConcurrentHashMap:1047` |

##### `parseName(byte[], int)` (`java.util.jar.Manifest`)

|  Change |        Delta |             % |          Size | Samples | Location                     |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------- |
| removed | -395.648 KiB | 100.0% → 0.0% | 396 KiB → 0 B |   1 → 0 | `java.util.jar.Manifest:365` |

##### `buildCallSite()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

|  Change |        Delta |             % |          Size | Samples | Location                                           |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------- |
| removed | -394.625 KiB | 100.0% → 0.0% | 395 KiB → 0 B |   1 → 0 | `java.lang.invoke.InnerClassLambdaMetafactory:236` |

##### `<init>(SymbolTable, int, String, String, String, String[], int)` (`jdk.internal.org.objectweb.asm.MethodWriter`)

|  Change |        Delta |             % |          Size | Samples | Location                                          |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------- |
| removed | -394.625 KiB | 100.0% → 0.0% | 395 KiB → 0 B |   1 → 0 | `jdk.internal.org.objectweb.asm.MethodWriter:656` |

##### `initDataOffset()` (`java.util.zip.ZipFile$ZipFileInputStream`)

|  Change |        Delta |             % |          Size | Samples | Location                                       |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------- |
| removed | -394.617 KiB | 100.0% → 0.0% | 395 KiB → 0 B |   1 → 0 | `java.util.zip.ZipFile$ZipFileInputStream:964` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |             % |                Size |     Samples | Caller      | Location              |
| -----: | -----------: | ------------: | ------------------: | ----------: | ----------- | --------------------- |
|  +7.0% |   +1.206 GiB | 48.5% → 51.6% | 17.2 GiB → 18.4 GiB | 1,163 → 966 | `toArray()` | `java.util.ArrayList` |
|  -5.3% | -995.896 MiB | 51.5% → 48.4% | 18.2 GiB → 17.2 GiB | 1,218 → 970 | `grow(int)` | `java.util.ArrayList` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change |        Delta |      % |              Size | Samples | Caller              | Location                                                   |
| ------: | -----------: | -----: | ----------------: | ------: | ------------------- | ---------------------------------------------------------- |
| +197.6% | +231.148 MiB | 100.0% | 117 MiB → 348 MiB |  13 → 6 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size | Samples | Caller      | Location                                               |
| -----: | -----------: | -----: | ----------------: | ------: | ----------- | ------------------------------------------------------ |
| +79.7% | +156.675 MiB | 100.0% | 197 MiB → 353 MiB |  9 → 10 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |        Delta |      % |               Size | Samples | Caller       | Location                                            |
| ------: | -----------: | -----: | -----------------: | ------: | ------------ | --------------------------------------------------- |
| +877.9% | +100.851 MiB | 100.0% | 11.5 MiB → 112 MiB | 17 → 13 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |       Delta |      % |               Size | Samples | Caller              | Location                                                  |
| ------: | ----------: | -----: | -----------------: | ------: | ------------------- | --------------------------------------------------------- |
| +347.3% | +95.374 MiB | 100.0% | 27.5 MiB → 123 MiB |   6 → 9 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |               Size | Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | -----------------: | ------: | ----------- | ------------------------------------------------------ |
| +25.2% | +23.121 MiB | 100.0% | 91.7 MiB → 115 MiB |  15 → 9 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |       Delta |      % |              Size | Samples | Caller                               | Location                                                  |
| ------: | ----------: | -----: | ----------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| +612.3% | +14.602 MiB | 100.0% | 2.38 MiB → 17 MiB |   2 → 5 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `result()` (`scala.collection.immutable.VectorBuilder`)

| Change |      Delta |             % |           Size | Samples | Caller     | Location                                   |
| -----: | ---------: | ------------: | -------------: | ------: | ---------- | ------------------------------------------ |
|    new | +6.181 MiB | 0.0% → 100.0% | 0 B → 6.18 MiB |   0 → 1 | `result()` | `scala.collection.immutable.VectorBuilder` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|  Change |        Delta |              % |                Size | Samples | Caller                        | Location                          |
| ------: | -----------: | -------------: | ------------------: | ------: | ----------------------------- | --------------------------------- |
|  +64.2% |   +6.315 MiB | 96.2% → 100.0% | 9.83 MiB → 16.2 MiB | 21 → 41 | `getBytes()`                  | `jdk.internal.loader.Resource`    |
| removed | -394.578 KiB |    3.8% → 0.0% |       395 KiB → 0 B |   1 → 0 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|  Change |    Delta |      % |                Size | Samples | Caller           | Location                            |
| ------: | -------: | -----: | ------------------: | ------: | ---------------- | ----------------------------------- |
| +155.2% | +4.7 MiB | 100.0% | 3.03 MiB → 7.73 MiB |   7 → 9 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

| Change |      Delta |      % |                Size | Samples | Caller                  | Location                       |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- | ------------------------------ |
| +20.2% | +2.123 MiB | 100.0% | 10.5 MiB → 12.6 MiB | 19 → 17 | `mapToObj(IntFunction)` | `java.util.stream.IntPipeline` |

##### `readNBytes(int)` (`java.io.InputStream`)

| Change |        Delta |             % |          Size | Samples | Caller           | Location              |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------- | --------------------- |
|    new | +868.031 KiB | 0.0% → 100.0% | 0 B → 868 KiB |   0 → 2 | `readAllBytes()` | `java.io.InputStream` |

##### `entrySet()` (`java.util.HashMap`)

| Change |        Delta |             % |          Size | Samples | Caller                        | Location            |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------- | ------------------- |
|    new | +547.468 KiB | 0.0% → 100.0% | 0 B → 547 KiB |   0 → 1 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `read(Manifest$FastInputStream, byte[], String, int)` (`java.util.jar.Attributes`)

| Change |        Delta |             % |          Size | Samples | Caller                      | Location                 |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------- | ------------------------ |
|    new | +403.671 KiB | 0.0% → 100.0% | 0 B → 404 KiB |   0 → 1 | `read(InputStream, String)` | `java.util.jar.Manifest` |

##### `addConstantNameAndType(String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |        Delta |             % |          Size | Samples | Caller                                                    | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------- | -------------------------------------------- |
|    new | +388.671 KiB | 0.0% → 100.0% | 0 B → 389 KiB |   0 → 1 | `addConstantMemberReference(int, String, String, String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

| Change |        Delta |             % |          Size | Samples | Caller                                | Location           |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------- | ------------------ |
|    new | +388.187 KiB | 0.0% → 100.0% | 0 B → 388 KiB |   0 → 1 | `<init>(AbstractStringBuilder, Void)` | `java.lang.String` |

##### `<init>(ClassWriter)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |       Delta |             % |          Size | Samples | Caller                     | Location                                     |
| -----: | ----------: | ------------: | ------------: | ------: | -------------------------- | -------------------------------------------- |
|    new | +387.71 KiB | 0.0% → 100.0% | 0 B → 388 KiB |   0 → 1 | `<init>(ClassReader, int)` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `<clinit>()` (`java.time.format.DateTimeFormatterBuilder`)

| Change |        Delta |             % |          Size | Samples | Caller       | Location                             |
| -----: | -----------: | ------------: | ------------: | ------: | ------------ | ------------------------------------ |
|    new | +387.664 KiB | 0.0% → 100.0% | 0 B → 388 KiB |   0 → 1 | `<clinit>()` | `java.time.format.DateTimeFormatter` |

##### `allocateUninitializedArray0(Class, int)` (`jdk.internal.misc.Unsafe`)

| Change |        Delta |             % |          Size | Samples | Caller                                   | Location                   |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------------- | -------------------------- |
|    new | +387.656 KiB | 0.0% → 100.0% | 0 B → 388 KiB |   0 → 1 | `allocateUninitializedArray(Class, int)` | `jdk.internal.misc.Unsafe` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |        Delta |             % |          Size | Samples | Caller                  | Location           |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------- | ------------------ |
|    new | +386.867 KiB | 0.0% → 100.0% | 0 B → 387 KiB |   0 → 1 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `transferTo(OutputStream)` (`java.io.InputStream`)

| Change |        Delta |      % |              Size | Samples | Caller                                  | Location              |
| -----: | -----------: | -----: | ----------------: | ------: | --------------------------------------- | --------------------- |
| +91.0% | +371.625 KiB | 100.0% | 408 KiB → 780 KiB |   1 → 2 | `copy(InputStream, Path, CopyOption[])` | `java.nio.file.Files` |

##### `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` (`java.util.zip.ZipFile$ZipFileInflaterInputStream`)

| Change |        Delta |             % |          Size | Samples | Caller                                                                        | Location                                           |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------------------------------------- | -------------------------------------------------- |
|    new | +325.023 KiB | 0.0% → 100.0% | 0 B → 325 KiB |   0 → 1 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |        Delta |      % |               Size | Samples | Caller                                       | Location                                             |
| -----: | -----------: | -----: | -----------------: | ------: | -------------------------------------------- | ---------------------------------------------------- |
|  +2.6% | +181.492 KiB | 100.0% | 6.8 MiB → 6.97 MiB |   8 → 7 | `newInvokeSpecial(Object, int, int, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007801220000` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |        Delta |      % |              Size | Samples | Caller            | Location                                    |
| -----: | -----------: | -----: | ----------------: | ------: | ----------------- | ------------------------------------------- |
| +34.5% | +138.015 KiB | 100.0% | 400 KiB → 538 KiB |       1 | `putUTF8(String)` | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

| Change |       Delta |      % |     Size | Samples | Caller                            | Location                                 |
| -----: | ----------: | -----: | -------: | ------: | --------------------------------- | ---------------------------------------- |
|  +0.1% | +19.468 KiB | 100.0% | 20.8 MiB |       1 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |       Delta |      % |              Size | Samples | Caller                          | Location           |
| -----: | ----------: | -----: | ----------------: | ------: | ------------------------------- | ------------------ |
|  +2.9% | +11.375 KiB | 100.0% | 388 KiB → 399 KiB |       1 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |               Size |  Samples | Caller              | Location                                                   |
| -----: | -----------: | -----: | -----------------: | -------: | ------------------- | ---------------------------------------------------------- |
| -23.4% | -250.232 MiB | 100.0% | 1.04 GiB → 819 MiB | 105 → 60 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |               Size | Samples | Caller          | Location                                                                              |
| -----: | -----------: | -----: | -----------------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| -97.2% | -187.912 MiB | 100.0% | 193 MiB → 5.44 MiB |   5 → 3 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000780121ece0` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |        Delta |      % |              Size | Samples | Caller                               | Location                             |
| -----: | -----------: | -----: | ----------------: | ------: | ------------------------------------ | ------------------------------------ |
| -99.3% | -103.754 MiB | 100.0% | 105 MiB → 775 KiB |       2 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |             % |                Size | Samples | Caller                                          | Location            |
| -----: | ----------: | ------------: | ------------------: | ------: | ----------------------------------------------- | ------------------- |
| -79.5% | -74.571 MiB | 56.5% → 22.7% | 93.8 MiB → 19.3 MiB |   6 → 7 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
|  -9.1% |  -6.543 MiB | 43.5% → 77.3% | 72.2 MiB → 65.7 MiB |  11 → 8 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `resize()` (`java.util.HashMap`)

|  Change |       Delta |             % |                Size | Samples | Caller                                          | Location            |
| ------: | ----------: | ------------: | ------------------: | ------: | ----------------------------------------------- | ------------------- |
|  -96.9% | -93.205 MiB |  87.8% → 3.9% | 96.2 MiB → 2.99 MiB |   7 → 2 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
| +447.8% | +59.751 MiB | 12.2% → 96.1% | 13.3 MiB → 73.1 MiB |   1 → 4 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |                Size | Samples | Caller                  | Location                                                               |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| -85.7% | -19.908 MiB | 100.0% | 23.2 MiB → 3.32 MiB |   8 → 3 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |       Delta |      % |              Size | Samples | Caller   | Location              |
| -----: | ----------: | -----: | ----------------: | ------: | -------- | --------------------- |
| -12.0% | -11.097 MiB | 100.0% | 92.1 MiB → 81 MiB |   9 → 7 | `grow()` | `java.util.ArrayList` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

| Change |      Delta |      % |                Size | Samples | Caller                        | Location            |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------------- | ------------------- |
| -50.5% | -6.349 MiB | 100.0% | 12.6 MiB → 6.23 MiB |   3 → 2 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |               Size | Samples | Caller                     | Location                                                   |
| -----: | ---------: | -----: | -----------------: | ------: | -------------------------- | ---------------------------------------------------------- |
|  -5.7% | -6.055 MiB | 100.0% | 106 MiB → 99.9 MiB |   4 → 6 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |     Delta |      % |               Size | Samples | Caller                                           | Location                                    |
| -----: | --------: | -----: | -----------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| -91.5% | -4.09 MiB | 100.0% | 4.47 MiB → 388 KiB |   6 → 1 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

| Change |      Delta |      % |                Size | Samples | Caller            | Location                     |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------- | ---------------------------- |
| -13.7% | -1.659 MiB | 100.0% | 12.1 MiB → 10.4 MiB | 19 → 14 | `range(int, int)` | `java.util.stream.IntStream` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

| Change |      Delta |      % |               Size | Samples | Caller                     | Location                              |
| -----: | ---------: | -----: | -----------------: | ------: | -------------------------- | ------------------------------------- |
| -80.0% | -1.514 MiB | 100.0% | 1.89 MiB → 388 KiB |   5 → 1 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

| Change |      Delta |      % |                Size | Samples | Caller                                                                                  | Location                                           |
| -----: | ---------: | -----: | ------------------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| -20.0% | -1.415 MiB | 100.0% | 7.09 MiB → 5.68 MiB | 13 → 15 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

|  Change |      Delta |             % |           Size | Samples | Caller     | Location                        |
| ------: | ---------: | ------------: | -------------: | ------: | ---------- | ------------------------------- |
| removed | -1.264 MiB | 100.0% → 0.0% | 1.26 MiB → 0 B |   1 → 0 | `<init>()` | `java.io.ByteArrayOutputStream` |

##### `valueOf(double)` (`java.lang.Double`)

| Change |          Delta |      % |                Size | Samples | Caller                                           | Location                                    |
| -----: | -------------: | -----: | ------------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
|  -4.0% | -1,010.109 KiB | 100.0% | 24.4 MiB → 23.4 MiB | 37 → 35 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

|  Change |        Delta |             % |          Size | Samples | Caller                                      | Location                                                 |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| removed | -725.273 KiB | 100.0% → 0.0% | 725 KiB → 0 B |   1 → 0 | `afterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin` |

##### `<init>(InputStream, int)` (`java.util.jar.Manifest$FastInputStream`)

|  Change |        Delta |             % |          Size | Samples | Caller                | Location                                 |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------- | ---------------------------------------- |
| removed | -666.656 KiB | 100.0% → 0.0% | 667 KiB → 0 B |   1 → 0 | `<init>(InputStream)` | `java.util.jar.Manifest$FastInputStream` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change |       Delta |             % |          Size | Samples | Caller   | Location                            |
| ------: | ----------: | ------------: | ------------: | ------: | -------- | ----------------------------------- |
| removed | -507.64 KiB | 100.0% → 0.0% | 508 KiB → 0 B |   1 → 0 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|  Change |       Delta |              % |              Size | Samples | Caller        | Location                  |
| ------: | ----------: | -------------: | ----------------: | ------: | ------------- | ------------------------- |
| removed | -453.07 KiB |   65.2% → 0.0% |     453 KiB → 0 B |   1 → 0 | `<init>(int)` | `java.lang.StringBuilder` |
|  +13.4% | +32.507 KiB | 34.8% → 100.0% | 242 KiB → 274 KiB |       1 | `<init>()`    | `java.lang.StringBuilder` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

|  Change |        Delta |             % |          Size | Samples | Caller                           | Location           |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------- | ------------------ |
| removed | -409.765 KiB | 100.0% → 0.0% | 410 KiB → 0 B |   1 → 0 | `<init>(char[], int, int, Void)` | `java.lang.String` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |        Delta |             % |          Size | Samples | Caller                        | Location                                 |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------- | ---------------------------------------- |
| removed | -402.656 KiB | 100.0% → 0.0% | 403 KiB → 0 B |   1 → 0 | `putIfAbsent(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `parseName(byte[], int)` (`java.util.jar.Manifest`)

|  Change |        Delta |             % |          Size | Samples | Caller                      | Location                 |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------- | ------------------------ |
| removed | -395.648 KiB | 100.0% → 0.0% | 396 KiB → 0 B |   1 → 0 | `read(InputStream, String)` | `java.util.jar.Manifest` |

##### `buildCallSite()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

|  Change |        Delta |             % |          Size | Samples | Caller                                                               | Location                             |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------------------------- | ------------------------------------ |
| removed | -394.625 KiB | 100.0% → 0.0% | 395 KiB → 0 B |   1 → 0 | `altMetafactory(MethodHandles$Lookup, String, MethodType, Object[])` | `java.lang.invoke.LambdaMetafactory` |

##### `<init>(SymbolTable, int, String, String, String, String[], int)` (`jdk.internal.org.objectweb.asm.MethodWriter`)

|  Change |        Delta |             % |          Size | Samples | Caller                                               | Location                                     |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------------- | -------------------------------------------- |
| removed | -394.625 KiB | 100.0% → 0.0% | 395 KiB → 0 B |   1 → 0 | `visitMethod(int, String, String, String, String[])` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `initDataOffset()` (`java.util.zip.ZipFile$ZipFileInputStream`)

|  Change |        Delta |             % |          Size | Samples | Caller                   | Location                                   |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------ | ------------------------------------------ |
| removed | -394.617 KiB | 100.0% → 0.0% | 395 KiB → 0 B |   1 → 0 | `read(byte[], int, int)` | `java.util.zip.ZipFile$ZipFileInputStream` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                   |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|   +7.0% |   +1.206 GiB | 45.5% → 48.5% | 17.2 GiB → 18.4 GiB |   1,163 → 966 | `toArray()`                                                                                                            | `java.util.ArrayList`                                      |
|   +5.5% | +421.039 MiB | 19.8% → 20.8% |  7.49 GiB → 7.9 GiB |     485 → 413 | `<init>(Collection)`                                                                                                   | `java.util.ArrayList`                                      |
|   +8.7% | +332.928 MiB | 10.0% → 10.8% | 3.76 GiB → 4.08 GiB |     296 → 234 | `grow()`                                                                                                               | `java.util.ArrayList`                                      |
|   +8.7% | +332.928 MiB | 10.0% → 10.8% | 3.76 GiB → 4.08 GiB |     296 → 234 | `add(Object, Object[], int)`                                                                                           | `java.util.ArrayList`                                      |
|   +8.7% | +332.928 MiB | 10.0% → 10.8% | 3.76 GiB → 4.08 GiB |     296 → 234 | `add(Object)`                                                                                                          | `java.util.ArrayList`                                      |
|   +0.7% | +240.345 MiB | 93.7% → 93.9% | 35.4 GiB → 35.6 GiB | 2,381 → 1,937 | `copyOf(Object[], int)`                                                                                                | `java.util.Arrays`                                         |
|   +4.8% |  +208.01 MiB | 11.2% → 11.7% | 4.24 GiB → 4.45 GiB |     326 → 250 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new | +194.157 MiB |   0.0% → 0.5% |       0 B → 194 MiB |       0 → 130 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                |
|   +0.4% | +162.965 MiB |         99.4% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|   +0.4% | +162.965 MiB |         99.4% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                       |
|   +0.4% | +162.965 MiB |         99.4% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                        |
|   +0.4% | +162.965 MiB |         99.4% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|   +0.4% | +162.965 MiB |         99.4% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                        |
|   +0.4% | +162.965 MiB |         99.4% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                        |
|   +0.4% | +162.965 MiB |         99.4% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                |
|  +79.7% | +156.675 MiB |   0.5% → 0.9% |   197 MiB → 353 MiB |        9 → 10 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +877.9% | +100.851 MiB |  <0.1% → 0.3% |  11.5 MiB → 112 MiB |       17 → 13 | `lambda$generateData$4(int)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| +877.9% | +100.851 MiB |  <0.1% → 0.3% |  11.5 MiB → 112 MiB |       17 → 13 | `<init>(long, IntFunction)`                                                                                            | `java.util.stream.Nodes$ArrayNode`                         |
| +877.9% | +100.851 MiB |  <0.1% → 0.3% |  11.5 MiB → 112 MiB |       17 → 13 | `<init>(long, IntFunction)`                                                                                            | `java.util.stream.Nodes$FixedNodeBuilder`                  |
| +347.3% |  +95.374 MiB |   0.1% → 0.3% |  27.5 MiB → 123 MiB |         6 → 9 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Standard library

|  Change |        Delta |             % |                Size |       Samples | Function                                             | Location                                      |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------- | --------------------------------------------- |
|   +7.0% |   +1.206 GiB | 45.5% → 48.5% | 17.2 GiB → 18.4 GiB |   1,163 → 966 | `toArray()`                                          | `java.util.ArrayList`                         |
|   +5.5% | +421.039 MiB | 19.8% → 20.8% |  7.49 GiB → 7.9 GiB |     485 → 413 | `<init>(Collection)`                                 | `java.util.ArrayList`                         |
|   +8.7% | +332.928 MiB | 10.0% → 10.8% | 3.76 GiB → 4.08 GiB |     296 → 234 | `grow()`                                             | `java.util.ArrayList`                         |
|   +8.7% | +332.928 MiB | 10.0% → 10.8% | 3.76 GiB → 4.08 GiB |     296 → 234 | `add(Object, Object[], int)`                         | `java.util.ArrayList`                         |
|   +8.7% | +332.928 MiB | 10.0% → 10.8% | 3.76 GiB → 4.08 GiB |     296 → 234 | `add(Object)`                                        | `java.util.ArrayList`                         |
|   +0.7% | +240.345 MiB | 93.7% → 93.9% | 35.4 GiB → 35.6 GiB | 2,381 → 1,937 | `copyOf(Object[], int)`                              | `java.util.Arrays`                            |
|   +0.4% | +162.965 MiB |         99.4% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `exec()`                                             | `java.util.concurrent.RecursiveTask`          |
|   +0.4% | +162.965 MiB |         99.4% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`           |
|   +0.4% | +162.965 MiB |         99.4% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|   +0.4% | +162.965 MiB |         99.4% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`           |
|   +0.4% | +162.965 MiB |         99.4% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`           |
|   +0.4% | +162.965 MiB |         99.4% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`   |
| +877.9% | +100.851 MiB |  <0.1% → 0.3% |  11.5 MiB → 112 MiB |       17 → 13 | `<init>(long, IntFunction)`                          | `java.util.stream.Nodes$ArrayNode`            |
| +877.9% | +100.851 MiB |  <0.1% → 0.3% |  11.5 MiB → 112 MiB |       17 → 13 | `<init>(long, IntFunction)`                          | `java.util.stream.Nodes$FixedNodeBuilder`     |
|  +62.2% |  +53.208 MiB |   0.2% → 0.4% |  85.5 MiB → 139 MiB |            12 | `putVal(int, Object, Object, boolean, boolean)`      | `java.util.HashMap`                           |
|  +46.4% |  +45.552 MiB |   0.3% → 0.4% |  98.1 MiB → 144 MiB |       15 → 10 | `putMapEntries(Map, boolean)`                        | `java.util.HashMap`                           |
|  +46.4% |  +45.552 MiB |   0.3% → 0.4% |  98.1 MiB → 144 MiB |       15 → 10 | `<init>(Map)`                                        | `java.util.HashMap`                           |
|     new |   +7.644 MiB |  0.0% → <0.1% |      0 B → 7.64 MiB |        0 → 20 | `accept(Object)`                                     | `java.util.stream.ReferencePipeline$3$1`      |
|     new |   +7.644 MiB |  0.0% → <0.1% |      0 B → 7.64 MiB |        0 → 20 | `forEachRemaining(Consumer)`                         | `java.util.Spliterators$ArraySpliterator`     |
|     new |   +7.344 MiB |  0.0% → <0.1% |      0 B → 7.34 MiB |         0 → 4 | `map(Function1)`                                     | `scala.collection.immutable.Range`            |

##### Ours

|  Change |        Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                                                      |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|   +4.8% |  +208.01 MiB | 11.2% → 11.7% | 4.24 GiB → 4.45 GiB |     326 → 250 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                    |
|     new | +194.157 MiB |   0.0% → 0.5% |       0 B → 194 MiB |       0 → 130 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                   |
|   +0.4% | +162.965 MiB |         99.4% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                                        |
|  +79.7% | +156.675 MiB |   0.5% → 0.9% |   197 MiB → 353 MiB |        9 → 10 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                    |
| +877.9% | +100.851 MiB |  <0.1% → 0.3% |  11.5 MiB → 112 MiB |       17 → 13 | `lambda$generateData$4(int)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                                   |
| +347.3% |  +95.374 MiB |   0.1% → 0.3% |  27.5 MiB → 123 MiB |         6 → 9 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
| +347.3% |  +95.374 MiB |   0.1% → 0.3% |  27.5 MiB → 123 MiB |         6 → 9 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
|  +25.2% |  +23.121 MiB |   0.2% → 0.3% |  91.7 MiB → 115 MiB |        15 → 9 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
| +612.3% |  +14.602 MiB |         <0.1% |   2.38 MiB → 17 MiB |         2 → 5 | `add(double[], double[])`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
| +612.3% |  +14.602 MiB |         <0.1% |   2.38 MiB → 17 MiB |         2 → 5 | `combineResults(double[], double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
| +612.3% |  +14.602 MiB |         <0.1% |   2.38 MiB → 17 MiB |         2 → 5 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
|     new |   +7.644 MiB |  0.0% → <0.1% |      0 B → 7.64 MiB |        0 → 20 | `rowToArray$1(Map)`                                                                                                    | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|     new |   +7.644 MiB |  0.0% → <0.1% |      0 B → 7.64 MiB |        0 → 20 | `setUpBeforeAll$$anonfun$1(Map)`                                                                                       | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|     new |   +7.644 MiB |  0.0% → <0.1% |      0 B → 7.64 MiB |        0 → 20 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000078011a2908`                          |
|     new |   +7.644 MiB |  0.0% → <0.1% |      0 B → 7.64 MiB |        0 → 20 | `lambda$toCsvRows$2(String[], Function, String)`                                                                       | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                            |
|     new |   +7.644 MiB |  0.0% → <0.1% |      0 B → 7.64 MiB |        0 → 20 | `apply(Object)`                                                                                                        | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x000000780119b5c8` |
|     new |   +7.644 MiB |  0.0% → <0.1% |      0 B → 7.64 MiB |        0 → 20 | `toCsvRows(Function)`                                                                                                  | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                            |
|   +2.8% |   +5.726 MiB |          0.5% |   206 MiB → 212 MiB |     172 → 174 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                                                    |
|   +2.8% |   +5.708 MiB |          0.5% |   207 MiB → 213 MiB |     175 → 177 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                                               |
|   +2.8% |   +5.708 MiB |          0.5% |   207 MiB → 213 MiB |     175 → 177 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                                               |

#### Improvements

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |          Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                                              |
| ------: | -------------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   -5.5% |     -1.408 GiB | 67.7% → 63.7% | 25.5 GiB → 24.1 GiB | 1,752 → 1,341 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                              | `java.util.concurrent.ForkJoinPool$WorkQueue`                                         |
|   -5.2% |     -1.342 GiB | 68.7% → 64.8% | 25.9 GiB → 24.6 GiB | 1,772 → 1,367 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                                   |
|   -5.2% |     -1.342 GiB | 68.7% → 64.8% | 25.9 GiB → 24.6 GiB | 1,772 → 1,367 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                                   |
|   -5.4% | -1,006.616 MiB | 48.5% → 45.7% | 18.3 GiB → 17.3 GiB |   1,227 → 978 | `grow(int)`                                                                                                            | `java.util.ArrayList`                                                                 |
|   -2.1% |   -524.721 MiB | 64.1% → 62.5% | 24.2 GiB → 23.7 GiB | 1,609 → 1,297 | `addAll(Collection)`                                                                                                   | `java.util.ArrayList`                                                                 |
|  -92.8% |   -355.689 MiB |   1.0% → 0.1% |  383 MiB → 27.7 MiB |       18 → 12 | `computeIfAbsent(Object, Function)`                                                                                    | `java.util.HashMap`                                                                   |
|   -7.3% |    -269.25 MiB |   9.5% → 8.8% | 3.59 GiB → 3.33 GiB |     303 → 212 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`                                                              | `java.util.concurrent.ForkJoinPool`                                                   |
|  -23.4% |   -250.232 MiB |   2.8% → 2.1% |  1.04 GiB → 819 MiB |      105 → 60 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed |   -188.651 MiB |   0.5% → 0.0% |       189 MiB → 0 B |       128 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|  -97.2% |   -187.912 MiB |  0.5% → <0.1% |  193 MiB → 5.44 MiB |         5 → 3 | `lambda$collectClusters$0(Double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -97.2% |   -187.912 MiB |  0.5% → <0.1% |  193 MiB → 5.44 MiB |         5 → 3 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000780121ece0` |
|   -1.9% |   -164.761 MiB | 22.9% → 22.4% | 8.63 GiB → 8.47 GiB |     372 → 309 | `invoke()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                                   |
|   -1.8% |   -156.576 MiB | 22.8% → 22.3% |  8.6 GiB → 8.45 GiB |     362 → 300 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -1.8% |   -156.576 MiB | 22.8% → 22.3% |  8.6 GiB → 8.45 GiB |     362 → 300 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`                |
|   -1.8% |   -156.576 MiB | 22.8% → 22.3% |  8.6 GiB → 8.45 GiB |     362 → 300 | `exec()`                                                                                                               | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                                   |
|   -0.4% |   -123.589 MiB | 84.0% → 83.4% | 31.7 GiB → 31.6 GiB | 2,102 → 1,713 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -0.4% |   -123.589 MiB | 84.0% → 83.4% | 31.7 GiB → 31.6 GiB | 2,102 → 1,713 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`                |
|   -0.4% |   -123.589 MiB | 84.0% → 83.4% | 31.7 GiB → 31.6 GiB | 2,102 → 1,713 | `merge(Object, Object, BiFunction)`                                                                                    | `java.util.HashMap`                                                                   |
|   -0.4% |   -123.589 MiB | 84.0% → 83.4% | 31.7 GiB → 31.6 GiB | 2,102 → 1,713 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -0.4% |   -123.589 MiB | 84.0% → 83.4% | 31.7 GiB → 31.6 GiB | 2,102 → 1,713 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`                |

##### Standard library

| Change |          Delta |             % |                Size |       Samples | Function                                                  | Location                                            |
| -----: | -------------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | --------------------------------------------------- |
|  -5.5% |     -1.408 GiB | 67.7% → 63.7% | 25.5 GiB → 24.1 GiB | 1,752 → 1,341 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
|  -5.2% |     -1.342 GiB | 68.7% → 64.8% | 25.9 GiB → 24.6 GiB | 1,772 → 1,367 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                 |
|  -5.2% |     -1.342 GiB | 68.7% → 64.8% | 25.9 GiB → 24.6 GiB | 1,772 → 1,367 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                 |
|  -5.4% | -1,006.616 MiB | 48.5% → 45.7% | 18.3 GiB → 17.3 GiB |   1,227 → 978 | `grow(int)`                                               | `java.util.ArrayList`                               |
|  -2.1% |   -524.721 MiB | 64.1% → 62.5% | 24.2 GiB → 23.7 GiB | 1,609 → 1,297 | `addAll(Collection)`                                      | `java.util.ArrayList`                               |
| -92.8% |   -355.689 MiB |   1.0% → 0.1% |  383 MiB → 27.7 MiB |       18 → 12 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                 |
|  -7.3% |    -269.25 MiB |   9.5% → 8.8% | 3.59 GiB → 3.33 GiB |     303 → 212 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                 |
|  -1.9% |   -164.761 MiB | 22.9% → 22.4% | 8.63 GiB → 8.47 GiB |     372 → 309 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                 |
|  -1.8% |   -156.576 MiB | 22.8% → 22.3% |  8.6 GiB → 8.45 GiB |     362 → 300 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  -0.4% |   -123.589 MiB | 84.0% → 83.4% | 31.7 GiB → 31.6 GiB | 2,102 → 1,713 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                 |
|  -0.4% |   -123.589 MiB | 84.0% → 83.4% | 31.7 GiB → 31.6 GiB | 2,102 → 1,713 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                 |
| -48.9% |    -81.114 MiB |   0.4% → 0.2% |  166 MiB → 84.9 MiB |       17 → 15 | `newNode(int, Object, Object, HashMap$Node)`              | `java.util.HashMap`                                 |
| -30.5% |    -33.453 MiB |   0.3% → 0.2% |  110 MiB → 76.1 MiB |         8 → 6 | `resize()`                                                | `java.util.HashMap`                                 |
| -50.5% |     -6.349 MiB |         <0.1% | 12.6 MiB → 6.23 MiB |         3 → 2 | `iterator()`                                              | `java.util.HashMap$EntrySet`                        |
| -34.7% |     -5.749 MiB |         <0.1% | 16.5 MiB → 10.8 MiB |       25 → 15 | `range(int, int)`                                         | `java.util.stream.IntStream`                        |
|  -2.1% |     -3.774 MiB |          0.5% |   181 MiB → 177 MiB |     121 → 101 | `accept(int)`                                             | `java.util.stream.IntPipeline$1$1`                  |
|  -2.1% |     -3.774 MiB |          0.5% |   181 MiB → 177 MiB |     121 → 101 | `forEachRemaining(IntConsumer)`                           | `java.util.stream.Streams$RangeIntSpliterator`      |
|  -2.1% |     -3.774 MiB |          0.5% |   181 MiB → 177 MiB |     121 → 101 | `forEachRemaining(Consumer)`                              | `java.util.Spliterator$OfInt`                       |
|  -2.5% |     -2.903 MiB |          0.3% |   116 MiB → 113 MiB |       19 → 15 | `builder(long, IntFunction)`                              | `java.util.stream.Nodes`                            |
|  -2.5% |     -2.903 MiB |          0.3% |   116 MiB → 113 MiB |       19 → 15 | `makeNodeBuilder(long, IntFunction)`                      | `java.util.stream.ReferencePipeline`                |

##### Ours

|  Change |        Delta |             % |                Size |       Samples | Function                                                                                                               | Location                                                                              |
| ------: | -----------: | ------------: | ------------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|  -23.4% | -250.232 MiB |   2.8% → 2.1% |  1.04 GiB → 819 MiB |      105 → 60 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| removed | -188.651 MiB |   0.5% → 0.0% |       189 MiB → 0 B |       128 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                           |
|  -97.2% | -187.912 MiB |  0.5% → <0.1% |  193 MiB → 5.44 MiB |         5 → 3 | `lambda$collectClusters$0(Double[])`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -97.2% | -187.912 MiB |  0.5% → <0.1% |  193 MiB → 5.44 MiB |         5 → 3 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000780121ece0` |
|   -1.8% | -156.576 MiB | 22.8% → 22.3% |  8.6 GiB → 8.45 GiB |     362 → 300 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -1.8% | -156.576 MiB | 22.8% → 22.3% |  8.6 GiB → 8.45 GiB |     362 → 300 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`                |
|   -0.4% | -123.589 MiB | 84.0% → 83.4% | 31.7 GiB → 31.6 GiB | 2,102 → 1,713 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -0.4% | -123.589 MiB | 84.0% → 83.4% | 31.7 GiB → 31.6 GiB | 2,102 → 1,713 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`                |
|   -0.4% | -123.589 MiB | 84.0% → 83.4% | 31.7 GiB → 31.6 GiB | 2,102 → 1,713 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -0.4% | -123.589 MiB | 84.0% → 83.4% | 31.7 GiB → 31.6 GiB | 2,102 → 1,713 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`                |
|   -0.3% |  -84.091 MiB | 84.6% → 84.0% | 31.9 GiB → 31.8 GiB | 2,121 → 1,729 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -0.3% |  -84.091 MiB | 84.6% → 84.0% | 31.9 GiB → 31.8 GiB | 2,121 → 1,729 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -0.3% |  -84.091 MiB | 84.6% → 84.0% | 31.9 GiB → 31.8 GiB | 2,121 → 1,729 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|   -0.8% |  -42.221 MiB | 14.0% → 13.8% | 5.29 GiB → 5.25 GiB |     431 → 310 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  -24.9% |    -9.54 MiB |          0.1% | 38.3 MiB → 28.7 MiB |        11 → 9 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  -24.9% |    -9.54 MiB |          0.1% | 38.3 MiB → 28.7 MiB |        11 → 9 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  -24.9% |    -9.54 MiB |          0.1% | 38.3 MiB → 28.7 MiB |        11 → 9 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|   -2.3% |   -4.152 MiB |          0.5% |   179 MiB → 175 MiB |      120 → 99 | `lambda$generateData$5(int, int, Random[], int)`                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|   -2.3% |   -4.152 MiB |          0.5% |   179 MiB → 175 MiB |      120 → 99 | `apply(int)`                                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`                                   |
|   -2.1% |   -3.774 MiB |          0.5% |   181 MiB → 177 MiB |     121 → 101 | `generateData(int, int, int)`                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `toArray()` (`java.util.ArrayList`)

| Change |        Delta |             % |                Size |   Samples | Caller               | Location              |
| -----: | -----------: | ------------: | ------------------: | --------: | -------------------- | --------------------- |
|  +8.2% | +814.823 MiB | 56.4% → 57.0% | 9.67 GiB → 10.5 GiB | 678 → 553 | `addAll(Collection)` | `java.util.ArrayList` |
|  +5.5% | +421.039 MiB | 43.6% → 43.0% |  7.49 GiB → 7.9 GiB | 485 → 413 | `<init>(Collection)` | `java.util.ArrayList` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change |        Delta |      % |               Size |   Samples | Caller                       | Location                                    |
| -----: | -----------: | -----: | -----------------: | --------: | ---------------------------- | ------------------------------------------- |
|  +5.5% | +421.039 MiB | 100.0% | 7.49 GiB → 7.9 GiB | 485 → 413 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `grow()` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Caller                       | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | ---------------------------- | --------------------- |
|  +8.7% | +332.928 MiB | 100.0% | 3.76 GiB → 4.08 GiB | 296 → 234 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Caller        | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | ------------- | --------------------- |
|  +8.7% | +332.928 MiB | 100.0% | 3.76 GiB → 4.08 GiB | 296 → 234 | `add(Object)` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change |        Delta |     % |                Size |   Samples | Caller                   | Location                                                   |
| -----: | -----------: | ----: | ------------------: | --------: | ------------------------ | ---------------------------------------------------------- |
|  +8.6% |  +332.55 MiB | 99.9% | 3.75 GiB → 4.08 GiB | 295 → 232 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +18.3% | +386.867 KiB |  0.1% | 2.06 MiB → 2.44 MiB |     1 → 2 | `accept(Object, Object)` | `java.util.stream.Collectors$$Lambda`                      |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |             % |                Size |     Samples | Caller      | Location              |
| -----: | -----------: | ------------: | ------------------: | ----------: | ----------- | --------------------- |
|  +7.0% |   +1.206 GiB | 48.5% → 51.6% | 17.2 GiB → 18.4 GiB | 1,163 → 966 | `toArray()` | `java.util.ArrayList` |
|  -5.3% | -995.518 MiB | 51.5% → 48.4% | 18.2 GiB → 17.2 GiB | 1,218 → 971 | `grow(int)` | `java.util.ArrayList` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |   Samples | Caller              | Location                                                   |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------- | ---------------------------------------------------------- |
|  +4.8% | +208.01 MiB | 100.0% | 4.24 GiB → 4.45 GiB | 326 → 250 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |             % |          Size | Samples | Caller              | Location                                                               |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
|    new | +194.157 MiB | 0.0% → 100.0% | 0 B → 194 MiB | 0 → 130 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780119c3b8` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change |        Delta |      % |                Size |       Samples | Caller   | Location                             |
| -----: | -----------: | -----: | ------------------: | ------------: | -------- | ------------------------------------ |
|  +0.4% | +162.965 MiB | 100.0% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |        Delta |      % |                Size |       Samples | Caller     | Location                            |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------- | ----------------------------------- |
|  +0.4% | +162.965 MiB | 100.0% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |       Samples | Caller                                                    | Location                                      |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  -5.5% |   -1.408 GiB | 68.1% → 64.1% | 25.5 GiB → 24.1 GiB | 1,752 → 1,341 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -7.3% |  -269.25 MiB |   9.6% → 8.8% | 3.59 GiB → 3.33 GiB |     303 → 212 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  -1.9% | -164.761 MiB | 23.0% → 22.5% | 8.63 GiB → 8.47 GiB |     372 → 309 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  +0.4% | +162.965 MiB |        100.0% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |                Size |       Samples | Caller                                   | Location                            |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------------------------------------- | ----------------------------------- |
|  +0.4% | +162.965 MiB | 100.0% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |       Samples | Caller                              | Location                            |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------------------------- | ----------------------------------- |
|  +0.4% | +162.965 MiB | 100.0% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |       Samples | Caller  | Location                                    |
| -----: | -----------: | -----: | ------------------: | ------------: | ------- | ------------------------------------------- |
|  +0.4% | +162.965 MiB | 100.0% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |              Size | Samples | Caller      | Location                                               |
| -----: | -----------: | -----: | ----------------: | ------: | ----------- | ------------------------------------------------------ |
| +79.7% | +156.675 MiB | 100.0% | 197 MiB → 353 MiB |  9 → 10 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |        Delta |      % |               Size | Samples | Caller       | Location                                            |
| ------: | -----------: | -----: | -----------------: | ------: | ------------ | --------------------------------------------------- |
| +877.9% | +100.851 MiB | 100.0% | 11.5 MiB → 112 MiB | 17 → 13 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`)

|  Change |        Delta |      % |               Size | Samples | Caller                      | Location                                  |
| ------: | -----------: | -----: | -----------------: | ------: | --------------------------- | ----------------------------------------- |
| +877.9% | +100.851 MiB | 100.0% | 11.5 MiB → 112 MiB | 17 → 13 | `<init>(long, IntFunction)` | `java.util.stream.Nodes$FixedNodeBuilder` |

##### `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`)

|  Change |        Delta |      % |               Size | Samples | Caller                       | Location                 |
| ------: | -----------: | -----: | -----------------: | ------: | ---------------------------- | ------------------------ |
| +877.9% | +100.851 MiB | 100.0% | 11.5 MiB → 112 MiB | 17 → 13 | `builder(long, IntFunction)` | `java.util.stream.Nodes` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |       Delta |      % |               Size | Samples | Caller              | Location                                                  |
| ------: | ----------: | -----: | -----------------: | ------: | ------------------- | --------------------------------------------------------- |
| +347.3% | +95.374 MiB | 100.0% | 27.5 MiB → 123 MiB |   6 → 9 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change |        Delta |              % |               Size | Samples | Caller                        | Location            |
| -----: | -----------: | -------------: | -----------------: | ------: | ----------------------------- | ------------------- |
| +60.0% |  +51.367 MiB | 100.0% → 98.7% | 85.5 MiB → 137 MiB |  12 → 7 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |
|    new |   +1.068 MiB |    0.0% → 0.8% |     0 B → 1.07 MiB |   0 → 4 | `put(Object, Object)`         | `java.util.HashMap` |
|    new | +790.296 KiB |    0.0% → 0.6% |      0 B → 790 KiB |   0 → 1 | `putIfAbsent(Object, Object)` | `java.util.HashMap` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change |       Delta |      % |               Size | Samples | Caller        | Location            |
| -----: | ----------: | -----: | -----------------: | ------: | ------------- | ------------------- |
| +46.4% | +45.552 MiB | 100.0% | 98.1 MiB → 144 MiB | 15 → 10 | `<init>(Map)` | `java.util.HashMap` |

##### `<init>(Map)` (`java.util.HashMap`)

| Change |       Delta |      % |               Size | Samples | Caller            | Location                                    |
| -----: | ----------: | -----: | -----------------: | ------: | ----------------- | ------------------------------------------- |
| +46.4% | +45.552 MiB | 100.0% | 98.1 MiB → 144 MiB | 15 → 10 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `accept(Object)` (`java.util.stream.ReferencePipeline$3$1`)

| Change |      Delta |             % |           Size | Samples | Caller                       | Location                                  |
| -----: | ---------: | ------------: | -------------: | ------: | ---------------------------- | ----------------------------------------- |
|    new | +7.644 MiB | 0.0% → 100.0% | 0 B → 7.64 MiB |  0 → 20 | `forEachRemaining(Consumer)` | `java.util.Spliterators$ArraySpliterator` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterators$ArraySpliterator`)

| Change |      Delta |             % |           Size | Samples | Caller                        | Location                            |
| -----: | ---------: | ------------: | -------------: | ------: | ----------------------------- | ----------------------------------- |
|    new | +7.644 MiB | 0.0% → 100.0% | 0 B → 7.64 MiB |  0 → 20 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `map(Function1)` (`scala.collection.immutable.Range`)

| Change |      Delta |            % |           Size | Samples | Caller                  | Location                                  |
| -----: | ---------: | -----------: | -------------: | ------: | ----------------------- | ----------------------------------------- |
|    new | +6.181 MiB | 0.0% → 84.2% | 0 B → 6.18 MiB |   0 → 1 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |
|    new | +1.163 MiB | 0.0% → 15.8% | 0 B → 1.16 MiB |   0 → 3 | `rowToArray$1(Map)`     | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |       Delta |      % |               Size | Samples | Caller              | Location                                                  |
| ------: | ----------: | -----: | -----------------: | ------: | ------------------- | --------------------------------------------------------- |
| +347.3% | +95.374 MiB | 100.0% | 27.5 MiB → 123 MiB |   6 → 9 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| +347.3% | +95.374 MiB | 100.0% | 27.5 MiB → 123 MiB |   6 → 9 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change |       Delta |      % |               Size | Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | -----------------: | ------: | ----------- | ------------------------------------------------------ |
| +25.2% | +23.121 MiB | 100.0% | 91.7 MiB → 115 MiB |  15 → 9 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |       Delta |      % |              Size | Samples | Caller                               | Location                                                  |
| ------: | ----------: | -----: | ----------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| +612.3% | +14.602 MiB | 100.0% | 2.38 MiB → 17 MiB |   2 → 5 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |       Delta |      % |              Size | Samples | Caller                           | Location                                                  |
| ------: | ----------: | -----: | ----------------: | ------: | -------------------------------- | --------------------------------------------------------- |
| +612.3% | +14.602 MiB | 100.0% | 2.38 MiB → 17 MiB |   2 → 5 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |       Delta |      % |              Size | Samples | Caller      | Location                                               |
| ------: | ----------: | -----: | ----------------: | ------: | ----------- | ------------------------------------------------------ |
| +612.3% | +14.602 MiB | 100.0% | 2.38 MiB → 17 MiB |   2 → 5 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |      Delta |             % |           Size | Samples | Caller                           | Location                                  |
| -----: | ---------: | ------------: | -------------: | ------: | -------------------------------- | ----------------------------------------- |
|    new | +7.644 MiB | 0.0% → 100.0% | 0 B → 7.64 MiB |  0 → 20 | `setUpBeforeAll$$anonfun$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `setUpBeforeAll$$anonfun$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |      Delta |             % |           Size | Samples | Caller          | Location                                                             |
| -----: | ---------: | ------------: | -------------: | ------: | --------------- | -------------------------------------------------------------------- |
|    new | +7.644 MiB | 0.0% → 100.0% | 0 B → 7.64 MiB |  0 → 20 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000078011a2908` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000078011a2908`)

| Change |      Delta |             % |           Size | Samples | Caller                                           | Location                                                           |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------ |
|    new | +7.644 MiB | 0.0% → 100.0% | 0 B → 7.64 MiB |  0 → 20 | `lambda$toCsvRows$2(String[], Function, String)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `lambda$toCsvRows$2(String[], Function, String)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change |      Delta |             % |           Size | Samples | Caller          | Location                                                                                      |
| -----: | ---------: | ------------: | -------------: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
|    new | +7.644 MiB | 0.0% → 100.0% | 0 B → 7.64 MiB |  0 → 20 | `apply(Object)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x000000780119b5c8` |

##### `apply(Object)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x000000780119b5c8`)

| Change |      Delta |             % |           Size | Samples | Caller           | Location                                 |
| -----: | ---------: | ------------: | -------------: | ------: | ---------------- | ---------------------------------------- |
|    new | +7.644 MiB | 0.0% → 100.0% | 0 B → 7.64 MiB |  0 → 20 | `accept(Object)` | `java.util.stream.ReferencePipeline$3$1` |

##### `toCsvRows(Function)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change |      Delta |             % |           Size | Samples | Caller                             | Location                                  |
| -----: | ---------: | ------------: | -------------: | ------: | ---------------------------------- | ----------------------------------------- |
|    new | +7.644 MiB | 0.0% → 100.0% | 0 B → 7.64 MiB |  0 → 20 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change |      Delta |      % |              Size |   Samples | Caller                         | Location                                             |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------------ | ---------------------------------------------------- |
|  +2.8% | +5.726 MiB | 100.0% | 206 MiB → 212 MiB | 172 → 174 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change |      Delta |      % |              Size |   Samples | Caller           | Location                        |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------- | ------------------------------- |
|  +2.8% | +5.708 MiB | 100.0% | 207 MiB → 213 MiB | 175 → 177 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |      Delta |      % |                Size |       Samples | Caller                 | Location                            |
| -----: | ---------: | -----: | ------------------: | ------------: | ---------------------- | ----------------------------------- |
|  -5.5% | -1.408 GiB | 100.0% | 25.5 GiB → 24.1 GiB | 1,752 → 1,341 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |      Delta |      % |                Size |       Samples | Caller   | Location                            |
| -----: | ---------: | -----: | ------------------: | ------------: | -------- | ----------------------------------- |
|  -5.2% | -1.342 GiB | 100.0% | 25.9 GiB → 24.6 GiB | 1,772 → 1,367 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |      Delta |      % |                Size |       Samples | Caller      | Location                                               |
| -----: | ---------: | -----: | ------------------: | ------------: | ----------- | ------------------------------------------------------ |
|  -5.2% | -1.342 GiB | 100.0% | 25.9 GiB → 24.6 GiB | 1,772 → 1,367 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |        Delta |             % |                Size |   Samples | Caller               | Location              |
| -----: | -----------: | ------------: | ------------------: | --------: | -------------------- | --------------------- |
|  -9.0% |   -1.308 GiB | 79.5% → 76.4% | 14.5 GiB → 13.2 GiB | 931 → 744 | `addAll(Collection)` | `java.util.ArrayList` |
|  +8.7% | +332.928 MiB | 20.5% → 23.6% | 3.76 GiB → 4.08 GiB | 296 → 234 | `grow()`             | `java.util.ArrayList` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |       Samples | Caller                       | Location                                    |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------------------------- | ------------------------------------------- |
|  -2.1% | -524.721 MiB | 100.0% | 24.2 GiB → 23.7 GiB | 1,609 → 1,297 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change |        Delta |      % |               Size | Samples | Caller                   | Location                                                   |
| -----: | -----------: | -----: | -----------------: | ------: | ------------------------ | ---------------------------------------------------------- |
| -92.8% | -355.689 MiB | 100.0% | 383 MiB → 27.7 MiB | 18 → 12 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |       Delta |      % |                Size |   Samples | Caller                 | Location                            |
| -----: | ----------: | -----: | ------------------: | --------: | ---------------------- | ----------------------------------- |
|  -7.3% | -269.25 MiB | 100.0% | 3.59 GiB → 3.33 GiB | 303 → 212 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |               Size |  Samples | Caller              | Location                                                   |
| -----: | -----------: | -----: | -----------------: | -------: | ------------------- | ---------------------------------------------------------- |
| -23.4% | -250.232 MiB | 100.0% | 1.04 GiB → 819 MiB | 105 → 60 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |             % |          Size | Samples | Caller              | Location                                                               |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| removed | -188.651 MiB | 100.0% → 0.0% | 189 MiB → 0 B | 128 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |      % |               Size | Samples | Caller          | Location                                                                              |
| -----: | -----------: | -----: | -----------------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| -97.2% | -187.912 MiB | 100.0% | 193 MiB → 5.44 MiB |   5 → 3 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000780121ece0` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000780121ece0`)

| Change |        Delta |      % |               Size | Samples | Caller                              | Location            |
| -----: | -----------: | -----: | -----------------: | ------: | ----------------------------------- | ------------------- |
| -97.2% | -187.912 MiB | 100.0% | 193 MiB → 5.44 MiB |   5 → 3 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |   Samples | Caller                         | Location                                               |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------------ | ------------------------------------------------------ |
|  -1.8% | -156.576 MiB | 99.6% → 99.7% |  8.6 GiB → 8.45 GiB | 362 → 300 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
| -24.9% |    -9.54 MiB |   0.4% → 0.3% | 38.3 MiB → 28.7 MiB |    11 → 9 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |               Size |   Samples | Caller   | Location                                                               |
| -----: | -----------: | -----: | -----------------: | --------: | -------- | ---------------------------------------------------------------------- |
|  -1.8% | -156.576 MiB | 100.0% | 8.6 GiB → 8.45 GiB | 362 → 300 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`)

| Change |        Delta |      % |               Size |   Samples | Caller   | Location                                            |
| -----: | -----------: | -----: | -----------------: | --------: | -------- | --------------------------------------------------- |
|  -1.8% | -156.576 MiB | 100.0% | 8.6 GiB → 8.45 GiB | 362 → 300 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |        Delta |      % |               Size |   Samples | Caller     | Location                            |
| -----: | -----------: | -----: | -----------------: | --------: | ---------- | ----------------------------------- |
|  -1.8% | -156.576 MiB | 100.0% | 8.6 GiB → 8.45 GiB | 362 → 300 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |                Size |       Samples | Caller                  | Location                                                               |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------------- | ---------------------------------------------------------------------- |
|  -0.4% | -123.589 MiB | 100.0% | 31.7 GiB → 31.6 GiB | 2,102 → 1,713 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`)

| Change |        Delta |      % |                Size |       Samples | Caller                              | Location            |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------------------------- | ------------------- |
|  -0.4% | -123.589 MiB | 100.0% | 31.7 GiB → 31.6 GiB | 2,102 → 1,713 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change |        Delta |      % |                Size |       Samples | Caller                              | Location                                    |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------------------------- | ------------------------------------------- |
|  -0.4% | -123.589 MiB | 100.0% | 31.7 GiB → 31.6 GiB | 2,102 → 1,713 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |                Size |       Samples | Caller                   | Location                                                               |
| -----: | -----------: | -----: | ------------------: | ------------: | ------------------------ | ---------------------------------------------------------------------- |
|  -0.4% | -123.589 MiB | 100.0% | 31.7 GiB → 31.6 GiB | 2,102 → 1,713 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`)

| Change |        Delta |      % |                Size |       Samples | Caller                | Location            |
| -----: | -----------: | -----: | ------------------: | ------------: | --------------------- | ------------------- |
|  -0.4% | -123.589 MiB | 100.0% | 31.7 GiB → 31.6 GiB | 2,102 → 1,713 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change |        Delta |      % |                Size |       Samples | Caller            | Location                                    |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------- | ------------------------------------------- |
|  -0.4% | -123.589 MiB | 100.0% | 31.7 GiB → 31.6 GiB | 2,102 → 1,713 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |       Delta |             % |                Size | Samples | Caller                                          | Location            |
| -----: | ----------: | ------------: | ------------------: | ------: | ----------------------------------------------- | ------------------- |
| -79.5% | -74.571 MiB | 56.5% → 22.7% | 93.8 MiB → 19.3 MiB |   6 → 7 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
|  -9.1% |  -6.543 MiB | 43.5% → 77.3% | 72.2 MiB → 65.7 MiB |  11 → 8 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `resize()` (`java.util.HashMap`)

|  Change |       Delta |             % |                Size | Samples | Caller                                          | Location            |
| ------: | ----------: | ------------: | ------------------: | ------: | ----------------------------------------------- | ------------------- |
|  -96.9% | -93.205 MiB |  87.8% → 3.9% | 96.2 MiB → 2.99 MiB |   7 → 2 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
| +447.8% | +59.751 MiB | 12.2% → 96.1% | 13.3 MiB → 73.1 MiB |   1 → 4 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

| Change |      Delta |      % |                Size | Samples | Caller                        | Location            |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------------- | ------------------- |
| -50.5% | -6.349 MiB | 100.0% | 12.6 MiB → 6.23 MiB |   3 → 2 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |      Delta |      % |                Size | Samples | Caller                                           | Location                                    |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| -34.7% | -5.749 MiB | 100.0% | 16.5 MiB → 10.8 MiB | 25 → 15 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

| Change |      Delta |      % |              Size |   Samples | Caller                          | Location                                       |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------------- | ---------------------------------------------- |
|  -2.1% | -3.774 MiB | 100.0% | 181 MiB → 177 MiB | 121 → 101 | `forEachRemaining(IntConsumer)` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

| Change |      Delta |      % |              Size |   Samples | Caller                       | Location                      |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------------------- | ----------------------------- |
|  -2.1% | -3.774 MiB | 100.0% | 181 MiB → 177 MiB | 121 → 101 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

| Change |      Delta |      % |              Size |   Samples | Caller                        | Location                            |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------------- | ----------------------------------- |
|  -2.1% | -3.774 MiB | 100.0% | 181 MiB → 177 MiB | 121 → 101 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

| Change |      Delta |      % |              Size | Samples | Caller                               | Location                             |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------ | ------------------------------------ |
|  -2.5% | -2.903 MiB | 100.0% | 116 MiB → 113 MiB | 19 → 15 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`)

| Change |      Delta |      % |              Size | Samples | Caller                                        | Location                            |
| -----: | ---------: | -----: | ----------------: | ------: | --------------------------------------------- | ----------------------------------- |
|  -2.5% | -2.903 MiB | 100.0% | 116 MiB → 113 MiB | 19 → 15 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |       Delta |      % |                Size |       Samples | Caller                     | Location                                                   |
| -----: | ----------: | -----: | ------------------: | ------------: | -------------------------- | ---------------------------------------------------------- |
|  -0.3% | -84.091 MiB | 100.0% | 31.9 GiB → 31.8 GiB | 2,121 → 1,729 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |       Samples | Caller                           | Location                                                   |
| -----: | ----------: | -----: | ------------------: | ------------: | -------------------------------- | ---------------------------------------------------------- |
|  -0.3% | -84.091 MiB | 100.0% | 31.9 GiB → 31.8 GiB | 2,121 → 1,729 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |       Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ------------------: | ------------: | ----------- | ------------------------------------------------------ |
|  -0.3% | -84.091 MiB | 100.0% | 31.9 GiB → 31.8 GiB | 2,121 → 1,729 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |   Samples | Caller              | Location                                                   |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------- | ---------------------------------------------------------- |
|  -0.8% | -42.221 MiB | 100.0% | 5.29 GiB → 5.25 GiB | 431 → 310 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -0.8% | -42.221 MiB | 100.0% | 5.29 GiB → 5.25 GiB | 431 → 310 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |     Delta |      % |                Size | Samples | Caller                     | Location                                               |
| -----: | --------: | -----: | ------------------: | ------: | -------------------------- | ------------------------------------------------------ |
| -24.9% | -9.54 MiB | 100.0% | 38.3 MiB → 28.7 MiB |  11 → 9 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |     Delta |      % |                Size | Samples | Caller              | Location                                               |
| -----: | --------: | -----: | ------------------: | ------: | ------------------- | ------------------------------------------------------ |
| -24.9% | -9.54 MiB | 100.0% | 38.3 MiB → 28.7 MiB |  11 → 9 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |     Delta |      % |                Size | Samples | Caller              | Location                                               |
| -----: | --------: | -----: | ------------------: | ------: | ------------------- | ------------------------------------------------------ |
| -24.9% | -9.54 MiB | 100.0% | 38.3 MiB → 28.7 MiB |  11 → 9 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -24.9% | -9.54 MiB | 100.0% | 38.3 MiB → 28.7 MiB |  11 → 9 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |              Size |  Samples | Caller       | Location                                            |
| -----: | ---------: | -----: | ----------------: | -------: | ------------ | --------------------------------------------------- |
|  -2.3% | -4.152 MiB | 100.0% | 179 MiB → 175 MiB | 120 → 99 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`)

|  Change |        Delta |            % |               Size |  Samples | Caller                      | Location                           |
| ------: | -----------: | -----------: | -----------------: | -------: | --------------------------- | ---------------------------------- |
| +877.9% | +100.851 MiB | 6.4% → 64.2% | 11.5 MiB → 112 MiB |  17 → 13 | `<init>(long, IntFunction)` | `java.util.stream.Nodes$ArrayNode` |
|   -2.3% |   -4.152 MiB |       100.0% |  179 MiB → 175 MiB | 120 → 99 | `accept(int)`               | `java.util.stream.IntPipeline$1$1` |

##### `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |              Size |   Samples | Caller                             | Location                                  |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------------------------- | ----------------------------------------- |
|  -2.1% | -3.774 MiB | 100.0% | 181 MiB → 177 MiB | 121 → 101 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `toArray()` (`java.util.ArrayList`)

| Change |      Delta |      % |                Size |     Samples | Callee                  | Location           |
| -----: | ---------: | -----: | ------------------: | ----------: | ----------------------- | ------------------ |
|  +7.0% | +1.206 GiB | 100.0% | 17.2 GiB → 18.4 GiB | 1,163 → 966 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change |        Delta |      % |               Size |   Samples | Callee      | Location              |
| -----: | -----------: | -----: | -----------------: | --------: | ----------- | --------------------- |
|  +5.5% | +421.039 MiB | 100.0% | 7.49 GiB → 7.9 GiB | 485 → 413 | `toArray()` | `java.util.ArrayList` |

##### `grow()` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee      | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | ----------- | --------------------- |
|  +8.7% | +332.928 MiB | 100.0% | 3.76 GiB → 4.08 GiB | 296 → 234 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee   | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | -------- | --------------------- |
|  +8.7% | +332.928 MiB | 100.0% | 3.76 GiB → 4.08 GiB | 296 → 234 | `grow()` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

| Change |        Delta |      % |                Size |   Samples | Callee                       | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | ---------------------------- | --------------------- |
|  +8.7% | +332.928 MiB | 100.0% | 3.76 GiB → 4.08 GiB | 296 → 234 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |            % |          Size | Samples | Callee                         | Location           |
| -----: | -----------: | -----------: | ------------: | ------: | ------------------------------ | ------------------ |
|    new | +386.867 KiB | 0.0% → <0.1% | 0 B → 387 KiB |   0 → 1 | `copyOf(Object[], int, Class)` | `java.util.Arrays` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |             % |                Size |   Samples | Callee                              | Location              |
| -----: | -----------: | ------------: | ------------------: | --------: | ----------------------------------- | --------------------- |
| -92.8% | -355.689 MiB |   8.8% → 0.6% |  383 MiB → 27.7 MiB |   18 → 12 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |
|  +8.6% |  +332.55 MiB | 88.5% → 91.7% | 3.75 GiB → 4.08 GiB | 295 → 232 | `add(Object)`                       | `java.util.ArrayList` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |            % |           Size | Samples | Callee                                                                                       | Location                                  |
| -----: | -----------: | -----------: | -------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new | +192.071 MiB | 0.0% → 98.9% |  0 B → 192 MiB | 0 → 124 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |   +2.086 MiB |  0.0% → 1.1% | 0 B → 2.09 MiB |   0 → 6 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change |        Delta |             % |                Size |       Samples | Callee                           | Location                                                   |
| ------: | -----------: | ------------: | ------------------: | ------------: | -------------------------------- | ---------------------------------------------------------- |
|   -5.2% |   -1.342 GiB | 69.1% → 65.2% | 25.9 GiB → 24.6 GiB | 1,772 → 1,367 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
|  +79.7% | +156.675 MiB |   0.5% → 0.9% |   197 MiB → 353 MiB |        9 → 10 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +347.3% |  +95.374 MiB |   0.1% → 0.3% |  27.5 MiB → 123 MiB |         6 → 9 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -0.3% |  -84.091 MiB | 85.1% → 84.5% | 31.9 GiB → 31.8 GiB | 2,121 → 1,729 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   -0.8% |  -42.221 MiB | 14.1% → 13.9% | 5.29 GiB → 5.25 GiB |     431 → 310 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |        Delta |      % |                Size |       Samples | Callee      | Location                                               |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------- | ------------------------------------------------------ |
|  +0.4% | +162.965 MiB | 100.0% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |             % |                Size |       Samples | Callee   | Location                                            |
| -----: | -----------: | ------------: | ------------------: | ------------: | -------- | --------------------------------------------------- |
|  +0.4% | +162.965 MiB |        100.0% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|  -1.8% | -156.576 MiB | 22.9% → 22.4% |  8.6 GiB → 8.45 GiB |     362 → 300 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |        Delta |      % |                Size |       Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------- | ----------------------------------- |
|  +0.4% | +162.965 MiB | 100.0% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |       Samples | Callee                                               | Location                                      |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------------------------------------------------- | --------------------------------------------- |
|  +0.4% | +162.965 MiB | 100.0% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |        Delta |      % |                Size |       Samples | Callee                                   | Location                            |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------------------------------------- | ----------------------------------- |
|  +0.4% | +162.965 MiB | 100.0% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |        Delta |      % |                Size |       Samples | Callee                              | Location                            |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------------------------- | ----------------------------------- |
|  +0.4% | +162.965 MiB | 100.0% | 37.5 GiB → 37.7 GiB | 2,585 → 2,072 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`)

|  Change |        Delta |      % |               Size | Samples | Callee       | Location                                            |
| ------: | -----------: | -----: | -----------------: | ------: | ------------ | --------------------------------------------------- |
| +877.9% | +100.851 MiB | 100.0% | 11.5 MiB → 112 MiB | 17 → 13 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`)

|  Change |        Delta |      % |               Size | Samples | Callee                      | Location                           |
| ------: | -----------: | -----: | -----------------: | ------: | --------------------------- | ---------------------------------- |
| +877.9% | +100.851 MiB | 100.0% | 11.5 MiB → 112 MiB | 17 → 13 | `<init>(long, IntFunction)` | `java.util.stream.Nodes$ArrayNode` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change |       Delta |             % |                Size | Samples | Callee                                       | Location            |
| ------: | ----------: | ------------: | ------------------: | ------: | -------------------------------------------- | ------------------- |
| +447.8% | +59.751 MiB | 15.6% → 52.7% | 13.3 MiB → 73.1 MiB |   1 → 4 | `resize()`                                   | `java.util.HashMap` |
|   -9.1% |  -6.543 MiB | 84.4% → 47.3% | 72.2 MiB → 65.7 MiB |  11 → 8 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change |        Delta |             % |                Size | Samples | Callee                                          | Location                     |
| -----: | -----------: | ------------: | ------------------: | ------: | ----------------------------------------------- | ---------------------------- |
| +60.0% |  +51.367 MiB | 87.2% → 95.3% |  85.5 MiB → 137 MiB |  12 → 7 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`          |
| -50.5% |   -6.349 MiB |  12.8% → 4.3% | 12.6 MiB → 6.23 MiB |   3 → 2 | `iterator()`                                    | `java.util.HashMap$EntrySet` |
|    new | +547.468 KiB |   0.0% → 0.4% |       0 B → 547 KiB |   0 → 1 | `entrySet()`                                    | `java.util.HashMap`          |

##### `<init>(Map)` (`java.util.HashMap`)

| Change |       Delta |      % |               Size | Samples | Callee                        | Location            |
| -----: | ----------: | -----: | -----------------: | ------: | ----------------------------- | ------------------- |
| +46.4% | +45.552 MiB | 100.0% | 98.1 MiB → 144 MiB | 15 → 10 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `accept(Object)` (`java.util.stream.ReferencePipeline$3$1`)

| Change |      Delta |             % |           Size | Samples | Callee          | Location                                                                                      |
| -----: | ---------: | ------------: | -------------: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
|    new | +7.644 MiB | 0.0% → 100.0% | 0 B → 7.64 MiB |  0 → 20 | `apply(Object)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x000000780119b5c8` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterators$ArraySpliterator`)

| Change |      Delta |             % |           Size | Samples | Callee           | Location                                 |
| -----: | ---------: | ------------: | -------------: | ------: | ---------------- | ---------------------------------------- |
|    new | +7.644 MiB | 0.0% → 100.0% | 0 B → 7.64 MiB |  0 → 20 | `accept(Object)` | `java.util.stream.ReferencePipeline$3$1` |

##### `map(Function1)` (`scala.collection.immutable.Range`)

| Change |        Delta |            % |           Size | Samples | Callee          | Location                                   |
| -----: | -----------: | -----------: | -------------: | ------: | --------------- | ------------------------------------------ |
|    new |   +6.181 MiB | 0.0% → 84.2% | 0 B → 6.18 MiB |   0 → 1 | `result()`      | `scala.collection.immutable.VectorBuilder` |
|    new | +765.351 KiB | 0.0% → 10.2% |  0 B → 765 KiB |   0 → 2 | `newBuilder()`  | `scala.collection.SeqFactory$Delegate`     |
|    new | +425.929 KiB |  0.0% → 5.7% |  0 B → 426 KiB |   0 → 1 | `apply(Object)` | `scala.runtime.java8.JFunction1$mcDI$sp`   |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |       Delta |      % |               Size | Samples | Callee              | Location                                                  |
| ------: | ----------: | -----: | -----------------: | ------: | ------------------- | --------------------------------------------------------- |
| +347.3% | +95.374 MiB | 100.0% | 27.5 MiB → 123 MiB |   6 → 9 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| +347.3% | +95.374 MiB | 100.0% | 27.5 MiB → 123 MiB |   6 → 9 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |       Delta |      % |              Size | Samples | Callee                    | Location                                                  |
| ------: | ----------: | -----: | ----------------: | ------: | ------------------------- | --------------------------------------------------------- |
| +612.3% | +14.602 MiB | 100.0% | 2.38 MiB → 17 MiB |   2 → 5 | `add(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change |       Delta |      % |              Size | Samples | Callee                               | Location                                                  |
| ------: | ----------: | -----: | ----------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| +612.3% | +14.602 MiB | 100.0% | 2.38 MiB → 17 MiB |   2 → 5 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |        Delta |            % |           Size | Samples | Callee              | Location                            |
| -----: | -----------: | -----------: | -------------: | ------: | ------------------- | ----------------------------------- |
|    new |   +4.865 MiB | 0.0% → 63.6% | 0 B → 4.87 MiB |  0 → 13 | `<clinit>()`        | `scala.Predef$`                     |
|    new |   +1.163 MiB | 0.0% → 15.2% | 0 B → 1.16 MiB |   0 → 3 | `map(Function1)`    | `scala.collection.immutable.Range`  |
|    new | +827.617 KiB | 0.0% → 10.6% |  0 B → 828 KiB |   0 → 2 | `loadClass(String)` | `java.lang.ClassLoader`             |
|    new | +826.617 KiB | 0.0% → 10.6% |  0 B → 827 KiB |   0 → 2 | `toArray(ClassTag)` | `scala.collection.AbstractIterable` |

##### `setUpBeforeAll$$anonfun$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |      Delta |             % |           Size | Samples | Callee              | Location                                  |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------- | ----------------------------------------- |
|    new | +7.644 MiB | 0.0% → 100.0% | 0 B → 7.64 MiB |  0 → 20 | `rowToArray$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000078011a2908`)

| Change |      Delta |             % |           Size | Samples | Callee                           | Location                                  |
| -----: | ---------: | ------------: | -------------: | ------: | -------------------------------- | ----------------------------------------- |
|    new | +7.644 MiB | 0.0% → 100.0% | 0 B → 7.64 MiB |  0 → 20 | `setUpBeforeAll$$anonfun$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `lambda$toCsvRows$2(String[], Function, String)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change |      Delta |             % |           Size | Samples | Callee          | Location                                                             |
| -----: | ---------: | ------------: | -------------: | ------: | --------------- | -------------------------------------------------------------------- |
|    new | +7.644 MiB | 0.0% → 100.0% | 0 B → 7.64 MiB |  0 → 20 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000078011a2908` |

##### `apply(Object)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x000000780119b5c8`)

| Change |      Delta |             % |           Size | Samples | Callee                                           | Location                                                           |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------ |
|    new | +7.644 MiB | 0.0% → 100.0% | 0 B → 7.64 MiB |  0 → 20 | `lambda$toCsvRows$2(String[], Function, String)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `toCsvRows(Function)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change |      Delta |             % |           Size | Samples | Callee               | Location                             |
| -----: | ---------: | ------------: | -------------: | ------: | -------------------- | ------------------------------------ |
|    new | +7.644 MiB | 0.0% → 100.0% | 0 B → 7.64 MiB |  0 → 20 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change |        Delta |             % |              Size |   Samples | Callee              | Location                                    |
| -----: | -----------: | ------------: | ----------------: | --------: | ------------------- | ------------------------------------------- |
|  +2.4% |   +4.902 MiB | 98.5% → 98.2% | 203 MiB → 208 MiB | 165 → 164 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
| +27.5% | +843.734 KiB |   1.5% → 1.8% |  3 MiB → 3.82 MiB |    7 → 10 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change |      Delta |     % |              Size |   Samples | Callee                                                      | Location                            |
| -----: | ---------: | ----: | ----------------: | --------: | ----------------------------------------------------------- | ----------------------------------- |
|  +2.8% | +5.706 MiB | 99.6% | 206 MiB → 212 MiB | 173 → 175 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`     |
|  +0.5% | +2.085 KiB |  0.2% | 385 KiB → 387 KiB |         1 | `create(Path, URI)`                                         | `org.renaissance.core.ModuleLoader` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

| Change |      Delta |      % |              Size |   Samples | Callee                                 | Location                        |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------------------------- | ------------------------------- |
|  +2.8% | +5.708 MiB | 100.0% | 207 MiB → 213 MiB | 175 → 177 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |      Delta |      % |                Size |       Samples | Callee     | Location                            |
| -----: | ---------: | -----: | ------------------: | ------------: | ---------- | ----------------------------------- |
|  -5.5% | -1.408 GiB | 100.0% | 25.5 GiB → 24.1 GiB | 1,752 → 1,341 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |       Delta |             % |                Size |       Samples | Callee                                                    | Location                                      |
| -----: | ----------: | ------------: | ------------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  -5.5% |  -1.408 GiB | 98.6% → 98.3% | 25.5 GiB → 24.1 GiB | 1,752 → 1,341 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -7.3% | -269.25 MiB | 13.9% → 13.6% | 3.59 GiB → 3.33 GiB |     303 → 212 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |      Delta |      % |                Size |       Samples | Callee                 | Location                            |
| -----: | ---------: | -----: | ------------------: | ------------: | ---------------------- | ----------------------------------- |
|  -5.2% | -1.342 GiB | 100.0% | 25.9 GiB → 24.6 GiB | 1,772 → 1,367 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |        Delta |     % |                Size |     Samples | Callee                  | Location           |
| -----: | -----------: | ----: | ------------------: | ----------: | ----------------------- | ------------------ |
|  -5.3% | -995.518 MiB | 99.5% | 18.2 GiB → 17.2 GiB | 1,218 → 971 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `addAll(Collection)` (`java.util.ArrayList`)

| Change |        Delta |             % |                Size |   Samples | Callee      | Location              |
| -----: | -----------: | ------------: | ------------------: | --------: | ----------- | --------------------- |
|  -9.0% |   -1.308 GiB | 60.0% → 55.8% | 14.5 GiB → 13.2 GiB | 931 → 744 | `grow(int)` | `java.util.ArrayList` |
|  +8.2% | +814.823 MiB | 40.0% → 44.2% | 9.67 GiB → 10.5 GiB | 678 → 553 | `toArray()` | `java.util.ArrayList` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change |        Delta |             % |                Size | Samples | Callee                                       | Location                                                                              |
| -----: | -----------: | ------------: | ------------------: | ------: | -------------------------------------------- | ------------------------------------------------------------------------------------- |
| -97.2% | -187.912 MiB | 50.4% → 19.7% |  193 MiB → 5.44 MiB |   5 → 3 | `apply(Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000780121ece0` |
| -96.9% |  -93.205 MiB | 25.1% → 10.8% | 96.2 MiB → 2.99 MiB |   7 → 2 | `resize()`                                   | `java.util.HashMap`                                                                   |
| -79.5% |  -74.571 MiB | 24.5% → 69.5% | 93.8 MiB → 19.3 MiB |   6 → 7 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                                                   |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change |       Delta |      % |                Size |   Samples | Callee     | Location                            |
| -----: | ----------: | -----: | ------------------: | --------: | ---------- | ----------------------------------- |
|  -7.3% | -269.25 MiB | 100.0% | 3.59 GiB → 3.33 GiB | 303 → 212 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |            % |          Size | Samples | Callee                                                                                       | Location                                  |
| ------: | -----------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed | -188.252 MiB | 99.8% → 0.0% | 188 MiB → 0 B | 127 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed | -408.421 KiB |  0.2% → 0.0% | 408 KiB → 0 B |   1 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000780121ece0`)

| Change |        Delta |      % |               Size | Samples | Callee                               | Location                                                   |
| -----: | -----------: | -----: | -----------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
| -97.2% | -187.912 MiB | 100.0% | 193 MiB → 5.44 MiB |   5 → 3 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change |        Delta |      % |                Size |   Samples | Callee     | Location                            |
| -----: | -----------: | -----: | ------------------: | --------: | ---------- | ----------------------------------- |
|  -1.9% | -164.761 MiB | 100.0% | 8.63 GiB → 8.47 GiB | 372 → 309 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |               Size |   Samples | Callee     | Location                            |
| -----: | -----------: | -----: | -----------------: | --------: | ---------- | ----------------------------------- |
|  -1.8% | -156.576 MiB | 100.0% | 8.6 GiB → 8.45 GiB | 362 → 300 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`)

| Change |        Delta |      % |               Size |   Samples | Callee                         | Location                                    |
| -----: | -----------: | -----: | -----------------: | --------: | ------------------------------ | ------------------------------------------- |
|  -1.8% | -156.576 MiB | 100.0% | 8.6 GiB → 8.45 GiB | 362 → 300 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

| Change |        Delta |      % |               Size |   Samples | Callee   | Location                                                               |
| -----: | -----------: | -----: | -----------------: | --------: | -------- | ---------------------------------------------------------------------- |
|  -1.8% | -156.576 MiB | 100.0% | 8.6 GiB → 8.45 GiB | 362 → 300 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |             % |                Size |       Samples | Callee               | Location              |
| -----: | -----------: | ------------: | ------------------: | ------------: | -------------------- | --------------------- |
|  -2.1% | -524.721 MiB | 76.3% → 75.0% | 24.2 GiB → 23.7 GiB | 1,609 → 1,297 | `addAll(Collection)` | `java.util.ArrayList` |
|  +5.5% | +421.039 MiB | 23.6% → 25.0% |  7.49 GiB → 7.9 GiB |     485 → 413 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`)

| Change |        Delta |      % |                Size |       Samples | Callee                       | Location                                    |
| -----: | -----------: | -----: | ------------------: | ------------: | ---------------------------- | ------------------------------------------- |
|  -0.4% | -123.589 MiB | 100.0% | 31.7 GiB → 31.6 GiB | 2,102 → 1,713 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

| Change |        Delta |      % |                Size |       Samples | Callee                  | Location                                                               |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------------- | ---------------------------------------------------------------------- |
|  -0.4% | -123.589 MiB | 100.0% | 31.7 GiB → 31.6 GiB | 2,102 → 1,713 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |      % |                Size |       Samples | Callee                              | Location            |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------------------------- | ------------------- |
|  -0.4% | -123.589 MiB | 100.0% | 31.7 GiB → 31.6 GiB | 2,102 → 1,713 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`)

| Change |        Delta |      % |                Size |       Samples | Callee                              | Location                                    |
| -----: | -----------: | -----: | ------------------: | ------------: | ----------------------------------- | ------------------------------------------- |
|  -0.4% | -123.589 MiB | 100.0% | 31.7 GiB → 31.6 GiB | 2,102 → 1,713 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

| Change |        Delta |      % |                Size |       Samples | Callee                   | Location                                                               |
| -----: | -----------: | -----: | ------------------: | ------------: | ------------------------ | ---------------------------------------------------------------------- |
|  -0.4% | -123.589 MiB | 100.0% | 31.7 GiB → 31.6 GiB | 2,102 → 1,713 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30` |

##### `range(int, int)` (`java.util.stream.IntStream`)

| Change |      Delta |             % |                Size | Samples | Callee                                  | Location                         |
| -----: | ---------: | ------------: | ------------------: | ------: | --------------------------------------- | -------------------------------- |
| -13.7% | -1.659 MiB | 73.0% → 96.5% | 12.1 MiB → 10.4 MiB | 19 → 14 | `intStream(Spliterator$OfInt, boolean)` | `java.util.stream.StreamSupport` |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

| Change |        Delta |             % |                Size |  Samples | Callee           | Location                                            |
| -----: | -----------: | ------------: | ------------------: | -------: | ---------------- | --------------------------------------------------- |
|  -2.3% |   -4.152 MiB | 98.9% → 98.6% |   179 MiB → 175 MiB | 120 → 99 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |
| +18.3% | +386.867 KiB |   1.1% → 1.4% | 2.06 MiB → 2.44 MiB |    1 → 2 | `accept(Object)` | `java.util.stream.ReduceOps$3ReducingSink`          |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

| Change |      Delta |      % |              Size |   Samples | Callee        | Location                           |
| -----: | ---------: | -----: | ----------------: | --------: | ------------- | ---------------------------------- |
|  -2.1% | -3.774 MiB | 100.0% | 181 MiB → 177 MiB | 121 → 101 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

| Change |      Delta |      % |              Size |   Samples | Callee                          | Location                                       |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------------- | ---------------------------------------------- |
|  -2.1% | -3.774 MiB | 100.0% | 181 MiB → 177 MiB | 121 → 101 | `forEachRemaining(IntConsumer)` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

|  Change |        Delta |            % |               Size | Samples | Callee                      | Location                                  |
| ------: | -----------: | -----------: | -----------------: | ------: | --------------------------- | ----------------------------------------- |
| +877.9% | +100.851 MiB | 9.9% → 99.3% | 11.5 MiB → 112 MiB | 17 → 13 | `<init>(long, IntFunction)` | `java.util.stream.Nodes$FixedNodeBuilder` |

##### `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`)

| Change |      Delta |      % |              Size | Samples | Callee                       | Location                 |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------- | ------------------------ |
|  -2.5% | -2.903 MiB | 100.0% | 116 MiB → 113 MiB | 19 → 15 | `builder(long, IntFunction)` | `java.util.stream.Nodes` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |             % |                Size |       Samples | Callee                | Location            |
| -----: | -----------: | ------------: | ------------------: | ------------: | --------------------- | ------------------- |
|  -0.4% | -123.589 MiB | 99.4% → 99.3% | 31.7 GiB → 31.6 GiB | 2,102 → 1,713 | `forEach(BiConsumer)` | `java.util.HashMap` |
| +46.4% |  +45.552 MiB |   0.3% → 0.4% |  98.1 MiB → 144 MiB |       15 → 10 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |       Samples | Callee            | Location                                    |
| -----: | ----------: | -----: | ------------------: | ------------: | ----------------- | ------------------------------------------- |
|  -0.3% | -84.091 MiB | 100.0% | 31.9 GiB → 31.8 GiB | 2,121 → 1,729 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |       Delta |      % |                Size |       Samples | Callee                     | Location                                                   |
| -----: | ----------: | -----: | ------------------: | ------------: | -------------------------- | ---------------------------------------------------------- |
|  -0.3% | -84.091 MiB | 100.0% | 31.9 GiB → 31.8 GiB | 2,121 → 1,729 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change |        Delta |             % |                Size |   Samples | Callee                   | Location                                                   |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------ | ---------------------------------------------------------- |
| -23.4% | -250.232 MiB | 19.8% → 15.3% |  1.04 GiB → 819 MiB |  105 → 60 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +4.8% |  +208.01 MiB | 80.2% → 84.7% | 4.24 GiB → 4.45 GiB | 326 → 250 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -0.8% |  -42.221 MiB |        100.0% | 5.29 GiB → 5.25 GiB | 431 → 310 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |     Delta |      % |                Size | Samples | Callee     | Location                            |
| -----: | --------: | -----: | ------------------: | ------: | ---------- | ----------------------------------- |
| -24.9% | -9.54 MiB | 100.0% | 38.3 MiB → 28.7 MiB |  11 → 9 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |     Delta |      % |                Size | Samples | Callee          | Location                                               |
| -----: | --------: | -----: | ------------------: | ------: | --------------- | ------------------------------------------------------ |
| -24.9% | -9.54 MiB | 100.0% | 38.3 MiB → 28.7 MiB |  11 → 9 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change |     Delta |      % |                Size | Samples | Callee                     | Location                                               |
| -----: | --------: | -----: | ------------------: | ------: | -------------------------- | ------------------------------------------------------ |
| -24.9% | -9.54 MiB | 100.0% | 38.3 MiB → 28.7 MiB |  11 → 9 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -24.9% | -9.54 MiB | 100.0% | 38.3 MiB → 28.7 MiB |  11 → 9 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |        Delta |             % |                Size | Samples | Callee                                         | Location                                            |
| -----: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------- | --------------------------------------------------- |
| -34.7% |   -5.749 MiB |   9.2% → 6.2% | 16.5 MiB → 10.8 MiB | 25 → 15 | `range(int, int)`                              | `java.util.stream.IntStream`                        |
| +20.2% |   +2.123 MiB |   5.9% → 7.2% | 10.5 MiB → 12.6 MiB | 19 → 17 | `mapToObj(IntFunction)`                        | `java.util.stream.IntPipeline`                      |
| -15.4% |   -1.337 MiB |   4.8% → 4.2% | 8.69 MiB → 7.35 MiB |  13 → 8 | `linkToTargetMethod(int, int, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007801220800` |
|  +0.6% | +830.726 KiB | 80.0% → 82.4% |   143 MiB → 144 MiB | 63 → 59 | `toArray(IntFunction)`                         | `java.util.stream.ReferencePipeline`                |

##### `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`)

|  Change |          Delta |             % |                Size |  Samples | Callee                                           | Location                                    |
| ------: | -------------: | ------------: | ------------------: | -------: | ------------------------------------------------ | ------------------------------------------- |
| +877.9% |   +100.851 MiB |  6.4% → 64.2% |  11.5 MiB → 112 MiB |  17 → 13 | `lambda$generateData$4(int)`                     | `org.renaissance.jdk.concurrent.JavaKMeans` |
|   -2.3% |     -4.152 MiB |        100.0% |   179 MiB → 175 MiB | 120 → 99 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |
|   -4.0% | -1,010.109 KiB | 13.6% → 13.4% | 24.4 MiB → 23.4 MiB |  37 → 35 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |      Delta |      % |              Size |   Samples | Callee               | Location                             |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------- | ------------------------------------ |
|  -2.1% | -3.774 MiB | 100.0% | 181 MiB → 177 MiB | 121 → 101 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes allocated in their leaf frame.

Common call stack: `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|   Change |        Delta |            % |                Size |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------: | -----------: | -----------: | ------------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   +66.0% |   +1.049 GiB |  4.2% → 7.0% | 1.59 GiB → 2.64 GiB | 142 → 136 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  +196.0% | +678.477 MiB |  0.9% → 2.6% |     346 MiB → 1 GiB |   22 → 24 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  +101.9% | +651.406 MiB |  1.7% → 3.3% |  639 MiB → 1.26 GiB |   21 → 26 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|   +14.7% |  +454.44 MiB |  8.0% → 9.1% | 3.01 GiB → 3.46 GiB | 236 → 202 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|   +93.6% | +380.625 MiB |  1.1% → 2.0% |   407 MiB → 787 MiB |   20 → 13 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|   +85.5% | +340.614 MiB |  1.0% → 1.9% |   398 MiB → 739 MiB |   39 → 29 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  +701.0% | +279.501 MiB |  0.1% → 0.8% |  39.9 MiB → 319 MiB |     7 → 5 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  +380.7% | +256.521 MiB |  0.2% → 0.8% |  67.4 MiB → 324 MiB |     5 → 7 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| +5468.9% | +251.846 MiB | <0.1% → 0.7% |  4.61 MiB → 256 MiB |     1 → 3 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|   +21.6% | +235.239 MiB |  2.8% → 3.4% | 1.07 GiB → 1.29 GiB |   50 → 47 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|   +26.0% | +213.865 MiB |  2.1% → 2.7% |  824 MiB → 1.01 GiB |   59 → 44 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|   +69.9% | +208.975 MiB |  0.8% → 1.3% |   299 MiB → 508 MiB |   26 → 25 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|      new | +191.133 MiB |  0.0% → 0.5% |       0 B → 191 MiB |     0 → 1 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) |
|   +33.5% | +189.653 MiB |  1.5% → 1.9% |   566 MiB → 755 MiB |   51 → 31 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  +223.0% |  +171.51 MiB |  0.2% → 0.6% |  76.9 MiB → 248 MiB |   20 → 13 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| +1720.8% |  +165.06 MiB | <0.1% → 0.5% |  9.59 MiB → 175 MiB |     4 → 6 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|   +84.2% |  +157.91 MiB |  0.5% → 0.9% |   188 MiB → 345 MiB |         7 | `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| +2789.7% | +133.595 MiB | <0.1% → 0.4% |  4.79 MiB → 138 MiB |     1 → 2 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|   +20.4% | +132.762 MiB |  1.7% → 2.0% |   651 MiB → 784 MiB |   37 → 28 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  +188.7% | +125.584 MiB |  0.2% → 0.5% |  66.5 MiB → 192 MiB |    9 → 10 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

### Improvements

Call stacks with the largest decrease in bytes allocated in their leaf frame.

Common call stack: `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|  Change |        Delta |            % |               Size |  Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------: | -----------: | -----------: | -----------------: | -------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -57.4% | -628.014 MiB |  2.8% → 1.2% | 1.07 GiB → 466 MiB |  51 → 32 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -93.2% | -559.101 MiB |  1.6% → 0.1% | 600 MiB → 40.7 MiB |   11 → 4 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -37.0% | -449.604 MiB |  3.1% → 2.0% | 1.19 GiB → 766 MiB |  54 → 48 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed | -437.369 MiB |  1.1% → 0.0% |      437 MiB → 0 B |    5 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070012056a8`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd8`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -41.1% | -318.202 MiB |  2.0% → 1.2% |  774 MiB → 456 MiB |  48 → 38 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -63.6% | -309.229 MiB |  1.3% → 0.5% |  486 MiB → 177 MiB |  15 → 16 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -93.9% | -279.402 MiB | 0.8% → <0.1% |   297 MiB → 18 MiB |    8 → 2 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) |
|  -46.2% | -278.723 MiB |  1.6% → 0.8% |  603 MiB → 324 MiB |  41 → 22 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed | -208.397 MiB |  0.5% → 0.0% |      208 MiB → 0 B |    5 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070012056a8`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd8`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -92.6% | -200.272 MiB | 0.6% → <0.1% | 216 MiB → 16.1 MiB |    7 → 4 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -79.9% | -200.236 MiB |  0.6% → 0.1% | 251 MiB → 50.3 MiB |    7 → 3 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -14.3% | -189.504 MiB |  3.4% → 2.9% | 1.3 GiB → 1.11 GiB | 104 → 81 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed | -177.956 MiB |  0.5% → 0.0% |      178 MiB → 0 B |    1 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070012056a8`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd8`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -56.0% |  -172.18 MiB |  0.8% → 0.3% |  307 MiB → 135 MiB |  21 → 14 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -63.0% | -169.641 MiB |  0.7% → 0.3% | 269 MiB → 99.7 MiB |  12 → 10 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -80.7% | -162.607 MiB |  0.5% → 0.1% | 202 MiB → 38.9 MiB |    2 → 5 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -91.4% | -162.221 MiB | 0.5% → <0.1% | 178 MiB → 15.3 MiB |        3 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                   |
|  -24.2% | -157.409 MiB |  1.7% → 1.3% |  650 MiB → 493 MiB |  30 → 24 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed | -148.784 MiB |  0.4% → 0.0% |      149 MiB → 0 B |    1 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070012056a8`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001204fd8`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -32.6% |  -137.18 MiB |  1.1% → 0.7% |  421 MiB → 284 MiB |  28 → 13 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121f178`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000780121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

# Retained heap profile diff

Retained 2.31 MiB → 2.56 MiB (+255.093 KiB, +10.8%) over 7 → 8 objects (338 KiB → 328 KiB per object).

| Category         |  Change |        Delta |      % |                Size | Objects |
| ---------------- | ------: | -----------: | -----: | ------------------: | ------: |
| Standard library |  +10.8% | +255.054 KiB | 100.0% | 2.31 MiB → 2.56 MiB |       6 |
| Ours             | +100.0% |        +40 B |  <0.1% |         40 B → 80 B |   1 → 2 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 2.06 MiB → 2.31 MiB (89.2% → 90.2%) main(String[]) at org.renaissance.core.Launcher
│   └── 2.06 MiB → 2.31 MiB (89.2% → 90.2%) launchHarnessClass(String, String[])
│       └── 2.06 MiB → 2.31 MiB (89.2% → 90.2%) loadAndInvokeHarnessClass(ModuleLoader, String, String[])
│           └── 2.06 MiB → 2.31 MiB (89.2% → 90.2%) invoke(Object, Object[]) at java.lang.reflect.Method
│               └── 2.06 MiB → 2.31 MiB (89.2% → 90.2%) invoke(Object, Object[]) at jdk.internal.reflect.DirectMethodHandleAccessor
│                   └── 2.06 MiB → 2.31 MiB (89.2% → 90.2%) invokeImpl(Object, Object[])
│                       └── 2.06 MiB → 2.31 MiB (89.2% → 90.2%) invokeExact_MT(Object, Object, Object, Object) at java.lang.invoke.Invokers$Holder
│                           └── 2.06 MiB → 2.31 MiB (89.2% → 90.2%) invoke(Object, Object, Object) at java.lang.invoke.LambdaForm$MH.0x0000007801082400
│                               └── 2.06 MiB → 2.31 MiB (89.2% → 90.2%) invokeStatic(Object, Object) at java.lang.invoke.LambdaForm$DMH.0x0000007801001c00
│                                   └── 2.06 MiB → 2.31 MiB (89.2% → 90.2%) main(String[]) at org.renaissance.harness.RenaissanceSuite
│                                       └── 2.06 MiB → 2.31 MiB (89.2% → 90.2%) main(String[]) at org.renaissance.harness.RenaissanceSuite$
│                                           └── 2.06 MiB → 2.31 MiB (89.2% → 90.2%) runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)
│                                               └── 2.06 MiB → 2.31 MiB (89.2% → 90.2%) foreach(Function1) at scala.collection.immutable.List
│                                                   └── 2.06 MiB → 2.31 MiB (89.2% → 90.2%) apply(Object) at scala.runtime.function.JProcedure1
│                                                       └── … 2.06 MiB → 2.31 MiB (89.2% → 90.2%) applyVoid(Object) at org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780119c3b8
│                                                           ├── 0 B → 2.31 MiB (0.0% → 90.2%) runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor) at org.renaissance.harness.RenaissanceSuite$
│                                                           │   ├── … 0 B → 2.06 MiB (0.0% → 80.5%) grow() at java.util.ArrayList
│                                                           │   │   └── 0 B → 2.06 MiB (0.0% → 80.5%) grow(int)
│                                                           │   │       └── 0 B → 2.06 MiB (0.0% → 80.5%) copyOf(Object[], int) at java.util.Arrays
│                                                           │   └── … 0 B → 255 KiB (0.0% → 9.7%) initCEN(int, ZipCoder) at java.util.zip.ZipFile$Source
│                                                           └── 2.06 MiB → 0 B (89.2% → 0.0%) runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor) at org.renaissance.harness.RenaissanceSuite$
│                                                               └── 2.06 MiB → 0 B (89.2% → 0.0%) executeBenchmark() at org.renaissance.harness.ExecutionDriver
│                                                                   └── 2.06 MiB → 0 B (89.2% → 0.0%) setUpBeforeAll(BenchmarkContext) at org.renaissance.jdk.concurrent.FjKmeans
│                                                                       └── 2.06 MiB → 0 B (89.2% → 0.0%) generateData(int, int, int) at org.renaissance.jdk.concurrent.JavaKMeans
│                                                                           └── 2.06 MiB → 0 B (89.2% → 0.0%) collect(Collector) at java.util.stream.ReferencePipeline
│                                                                               └── 2.06 MiB → 0 B (89.2% → 0.0%) evaluate(TerminalOp) at java.util.stream.AbstractPipeline
│                                                                                   └── 2.06 MiB → 0 B (89.2% → 0.0%) evaluateSequential(PipelineHelper, Spliterator) at java.util.stream.ReduceOps$ReduceOp
│                                                                                       └── 2.06 MiB → 0 B (89.2% → 0.0%) wrapAndCopyInto(Sink, Spliterator) at java.util.stream.AbstractPipeline
│                                                                                           └── 2.06 MiB → 0 B (89.2% → 0.0%) copyInto(Sink, Spliterator)
│                                                                                               └── 2.06 MiB → 0 B (89.2% → 0.0%) forEachRemaining(Consumer) at java.util.Spliterator$OfInt
│                                                                                                   └── 2.06 MiB → 0 B (89.2% → 0.0%) forEachRemaining(IntConsumer) at java.util.stream.Streams$RangeIntSpliterator
│                                                                                                       └── 2.06 MiB → 0 B (89.2% → 0.0%) accept(int) at java.util.stream.IntPipeline$1$1
│                                                                                                           └── 2.06 MiB → 0 B (89.2% → 0.0%) accept(Object) at java.util.stream.ReduceOps$3ReducingSink
│                                                                                                               └── 2.06 MiB → 0 B (89.2% → 0.0%) accept(Object, Object) at java.util.stream.Collectors$$Lambda.0x00000078010c40c8
│                                                                                                                   └── 2.06 MiB → 0 B (89.2% → 0.0%) add(Object) at java.util.ArrayList
│                                                                                                                       └── 2.06 MiB → 0 B (89.2% → 0.0%) add(Object, Object[], int)
│                                                                                                                           └── 2.06 MiB → 0 B (89.2% → 0.0%) grow()
│                                                                                                                               └── 2.06 MiB → 0 B (89.2% → 0.0%) grow(int)
│                                                                                                                                   └── 2.06 MiB → 0 B (89.2% → 0.0%, self 89.2% → 80.5% globally) copyOf(Object[], int) at java.util.Arrays
└── … 256 KiB (10.8% → 9.8%) initTable() at java.util.concurrent.ConcurrentHashMap
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |           % |          Size | Objects | Function                     | Location                                    |
| ------: | -----------: | ----------: | ------------: | ------: | ---------------------------- | ------------------------------------------- |
|     new | +255.085 KiB | 0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `initCEN(int, ZipCoder)`     | `java.util.zip.ZipFile$Source`              |
| +100.0% |        +40 B |       <0.1% |   40 B → 80 B |   1 → 2 | `lambda$generateData$4(int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |
|  +50.0% |        +24 B |       <0.1% |   48 B → 72 B |   2 → 3 | `valueOf(double)`            | `java.lang.Double`                          |

##### Standard library

| Change |        Delta |           % |          Size | Objects | Function                 | Location                       |
| -----: | -----------: | ----------: | ------------: | ------: | ------------------------ | ------------------------------ |
|    new | +255.085 KiB | 0.0% → 9.7% | 0 B → 255 KiB |   0 → 1 | `initCEN(int, ZipCoder)` | `java.util.zip.ZipFile$Source` |
| +50.0% |        +24 B |       <0.1% |   48 B → 72 B |   2 → 3 | `valueOf(double)`        | `java.lang.Double`             |

#### Improvements

Functions with the largest decrease in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

|  Change | Delta |            % |       Size | Objects | Function                          | Location                                 |
| ------: | ----: | -----------: | ---------: | ------: | --------------------------------- | ---------------------------------------- |
| removed | -32 B | <0.1% → 0.0% | 32 B → 0 B |   1 → 0 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B |   1 → 0 | `parseName(byte[], int)`          | `java.util.jar.Manifest`                 |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |             % |          Size | Objects | Location                            |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `java.util.zip.ZipFile$Source:1733` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |      % |        Size | Objects | Location                                       |
| ------: | ----: | -----: | ----------: | ------: | ---------------------------------------------- |
| +100.0% | +40 B | 100.0% | 40 B → 80 B |   1 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `valueOf(double)` (`java.lang.Double`)

| Change | Delta |      % |        Size | Objects | Location               |
| -----: | ----: | -----: | ----------: | ------: | ---------------------- |
| +50.0% | +24 B | 100.0% | 48 B → 72 B |   2 → 3 | `java.lang.Double:773` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % |       Size | Objects | Location                                      |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `java.util.concurrent.ConcurrentHashMap:1047` |

##### `parseName(byte[], int)` (`java.util.jar.Manifest`)

|  Change | Delta |             % |       Size | Objects | Location                     |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------- |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `java.util.jar.Manifest:365` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |             % |          Size | Objects | Caller                                          | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- | ------------------------------ |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |      % |        Size | Objects | Caller       | Location                                            |
| ------: | ----: | -----: | ----------: | ------: | ------------ | --------------------------------------------------- |
| +100.0% | +40 B | 100.0% | 40 B → 80 B |   1 → 2 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda` |

##### `valueOf(double)` (`java.lang.Double`)

| Change | Delta |      % |        Size | Objects | Caller                                           | Location                                    |
| -----: | ----: | -----: | ----------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +50.0% | +24 B | 100.0% | 48 B → 72 B |   2 → 3 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % |       Size | Objects | Caller                        | Location                                 |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------- | ---------------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `putIfAbsent(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `parseName(byte[], int)` (`java.util.jar.Manifest`)

|  Change | Delta |             % |       Size | Objects | Caller                      | Location                 |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------- | ------------------------ |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `read(InputStream, String)` | `java.util.jar.Manifest` |

### Total size

#### Regressions

Functions with the largest increase in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |        Delta |             % |                Size | Objects | Function                                                                                                               | Location                                                               |
| -----: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |    +2.31 MiB |  0.0% → 90.2% |      0 B → 2.31 MiB |   0 → 7 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| +12.1% | +255.148 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   4 → 7 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780119c3b8` |
| +12.1% | +255.148 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   4 → 7 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
| +12.1% | +255.148 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   4 → 7 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
| +12.1% | +255.148 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   4 → 7 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
| +12.1% | +255.117 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   5 → 7 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
| +12.1% | +255.093 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   6 → 7 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
| +12.1% | +255.093 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   6 → 7 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00`                   |
| +12.1% | +255.093 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   6 → 7 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x0000007801082400`                    |
| +12.1% | +255.093 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   6 → 7 | `invokeExact_MT(Object, Object, Object, Object)`                                                                       | `java.lang.invoke.Invokers$Holder`                                     |
| +12.1% | +255.093 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   6 → 7 | `invokeImpl(Object, Object[])`                                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |
| +12.1% | +255.093 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   6 → 7 | `invoke(Object, Object[])`                                                                                             | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |
| +12.1% | +255.093 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   6 → 7 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
| +12.1% | +255.093 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   6 → 7 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
| +12.1% | +255.093 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   6 → 7 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
| +12.1% | +255.093 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   6 → 7 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `initCEN(int, ZipCoder)`                                                                                               | `java.util.zip.ZipFile$Source`                                         |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                                                                        | `java.util.zip.ZipFile$Source`                                         |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `get(File, boolean, ZipCoder)`                                                                                         | `java.util.zip.ZipFile$Source`                                         |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `<init>(ZipFile, ZipCoder, File, int)`                                                                                 | `java.util.zip.ZipFile$CleanableResource`                              |

##### Standard library

| Change |        Delta |             % |                Size | Objects | Function                                                       | Location                                             |
| -----: | -----------: | ------------: | ------------------: | ------: | -------------------------------------------------------------- | ---------------------------------------------------- |
| +12.1% | +255.148 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   4 → 7 | `apply(Object)`                                                | `scala.runtime.function.JProcedure1`                 |
| +12.1% | +255.148 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   4 → 7 | `foreach(Function1)`                                           | `scala.collection.immutable.List`                    |
| +12.1% | +255.093 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   6 → 7 | `invokeStatic(Object, Object)`                                 | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00` |
| +12.1% | +255.093 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   6 → 7 | `invoke(Object, Object, Object)`                               | `java.lang.invoke.LambdaForm$MH.0x0000007801082400`  |
| +12.1% | +255.093 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   6 → 7 | `invokeExact_MT(Object, Object, Object, Object)`               | `java.lang.invoke.Invokers$Holder`                   |
| +12.1% | +255.093 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   6 → 7 | `invokeImpl(Object, Object[])`                                 | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| +12.1% | +255.093 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   6 → 7 | `invoke(Object, Object[])`                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| +12.1% | +255.093 KiB | 89.2% → 90.2% | 2.06 MiB → 2.31 MiB |   6 → 7 | `invoke(Object, Object[])`                                     | `java.lang.reflect.Method`                           |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `initCEN(int, ZipCoder)`                                       | `java.util.zip.ZipFile$Source`                       |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                | `java.util.zip.ZipFile$Source`                       |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `get(File, boolean, ZipCoder)`                                 | `java.util.zip.ZipFile$Source`                       |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `<init>(ZipFile, ZipCoder, File, int)`                         | `java.util.zip.ZipFile$CleanableResource`            |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `<init>(File, int, Charset)`                                   | `java.util.zip.ZipFile`                              |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `<init>(File, int)`                                            | `java.util.zip.ZipFile`                              |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `<init>(File, boolean, int, Runtime$Version)`                  | `java.util.jar.JarFile`                              |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `getJarFile(URL)`                                              | `jdk.internal.loader.URLClassPath$JarLoader`         |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `run()`                                                        | `jdk.internal.loader.URLClassPath$JarLoader$1`       |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `ensureOpen()`                                                 | `jdk.internal.loader.URLClassPath$JarLoader`         |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` | `jdk.internal.loader.URLClassPath$JarLoader`         |
|    new | +255.085 KiB |   0.0% → 9.7% |       0 B → 255 KiB |   0 → 1 | `run()`                                                        | `jdk.internal.loader.URLClassPath$3`                 |

#### Improvements

Functions with the largest decrease in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |     Delta |            % |           Size | Objects | Function                                                                                                               | Location                                    |
| ------: | --------: | -----------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed | -2.06 MiB | 89.2% → 0.0% | 2.06 MiB → 0 B |   4 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
|     ~0% |     -32 B | 10.8% → 9.8% |        256 KiB |   2 → 1 | `putVal(Object, Object, boolean)`                                                                                      | `java.util.concurrent.ConcurrentHashMap`    |
| removed |     -32 B | <0.1% → 0.0% |     32 B → 0 B |   1 → 0 | `putIfAbsent(Object, Object)`                                                                                          | `java.util.concurrent.ConcurrentHashMap`    |
| removed |     -32 B | <0.1% → 0.0% |     32 B → 0 B |   1 → 0 | `getClassLoadingLock(String)`                                                                                          | `java.lang.ClassLoader`                     |
| removed |     -32 B | <0.1% → 0.0% |     32 B → 0 B |   1 → 0 | `releaseFence()`                                                                                                       | `scala.runtime.Statics`                     |
| removed |     -32 B | <0.1% → 0.0% |     32 B → 0 B |   1 → 0 | `<init>(Object)`                                                                                                       | `scala.collection.ArrayOps$ArrayIterator`   |
| removed |     -32 B | <0.1% → 0.0% |     32 B → 0 B |   1 → 0 | `iterator()`                                                                                                           | `scala.collection.immutable.ArraySeq$ofRef` |
| removed |     -32 B | <0.1% → 0.0% |     32 B → 0 B |   1 → 0 | `addAll(IterableOnce)`                                                                                                 | `scala.collection.mutable.Growable`         |
| removed |     -32 B | <0.1% → 0.0% |     32 B → 0 B |   1 → 0 | `addAll$(Growable, IterableOnce)`                                                                                      | `scala.collection.mutable.Growable`         |
| removed |     -32 B | <0.1% → 0.0% |     32 B → 0 B |   1 → 0 | `addAll(IterableOnce)`                                                                                                 | `scala.collection.immutable.MapBuilderImpl` |
| removed |     -32 B | <0.1% → 0.0% |     32 B → 0 B |   1 → 0 | `from(IterableOnce)`                                                                                                   | `scala.collection.immutable.Map$`           |
| removed |     -32 B | <0.1% → 0.0% |     32 B → 0 B |   1 → 0 | `apply(Seq)`                                                                                                           | `scala.collection.MapFactory`               |
| removed |     -32 B | <0.1% → 0.0% |     32 B → 0 B |   1 → 0 | `apply$(MapFactory, Seq)`                                                                                              | `scala.collection.MapFactory`               |
| removed |     -32 B | <0.1% → 0.0% |     32 B → 0 B |   1 → 0 | `apply(Seq)`                                                                                                           | `scala.collection.immutable.Map$`           |
| removed |     -24 B | <0.1% → 0.0% |     24 B → 0 B |   1 → 0 | `parseName(byte[], int)`                                                                                               | `java.util.jar.Manifest`                    |
| removed |     -24 B | <0.1% → 0.0% |     24 B → 0 B |   1 → 0 | `read(InputStream, String)`                                                                                            | `java.util.jar.Manifest`                    |
| removed |     -24 B | <0.1% → 0.0% |     24 B → 0 B |   1 → 0 | `<init>(JarVerifier, InputStream, String)`                                                                             | `java.util.jar.Manifest`                    |
| removed |     -24 B | <0.1% → 0.0% |     24 B → 0 B |   1 → 0 | `<init>(InputStream, String)`                                                                                          | `java.util.jar.Manifest`                    |
| removed |     -24 B | <0.1% → 0.0% |     24 B → 0 B |   1 → 0 | `getManifestFromReference()`                                                                                           | `java.util.jar.JarFile`                     |
| removed |     -24 B | <0.1% → 0.0% |     24 B → 0 B |   1 → 0 | `getManifest()`                                                                                                        | `java.util.jar.JarFile`                     |

##### Standard library

|  Change | Delta |            % |       Size | Objects | Function                                   | Location                                       |
| ------: | ----: | -----------: | ---------: | ------: | ------------------------------------------ | ---------------------------------------------- |
|     ~0% | -32 B | 10.8% → 9.8% |    256 KiB |   2 → 1 | `putVal(Object, Object, boolean)`          | `java.util.concurrent.ConcurrentHashMap`       |
| removed | -32 B | <0.1% → 0.0% | 32 B → 0 B |   1 → 0 | `putIfAbsent(Object, Object)`              | `java.util.concurrent.ConcurrentHashMap`       |
| removed | -32 B | <0.1% → 0.0% | 32 B → 0 B |   1 → 0 | `getClassLoadingLock(String)`              | `java.lang.ClassLoader`                        |
| removed | -32 B | <0.1% → 0.0% | 32 B → 0 B |   1 → 0 | `releaseFence()`                           | `scala.runtime.Statics`                        |
| removed | -32 B | <0.1% → 0.0% | 32 B → 0 B |   1 → 0 | `<init>(Object)`                           | `scala.collection.ArrayOps$ArrayIterator`      |
| removed | -32 B | <0.1% → 0.0% | 32 B → 0 B |   1 → 0 | `iterator()`                               | `scala.collection.immutable.ArraySeq$ofRef`    |
| removed | -32 B | <0.1% → 0.0% | 32 B → 0 B |   1 → 0 | `addAll(IterableOnce)`                     | `scala.collection.mutable.Growable`            |
| removed | -32 B | <0.1% → 0.0% | 32 B → 0 B |   1 → 0 | `addAll$(Growable, IterableOnce)`          | `scala.collection.mutable.Growable`            |
| removed | -32 B | <0.1% → 0.0% | 32 B → 0 B |   1 → 0 | `addAll(IterableOnce)`                     | `scala.collection.immutable.MapBuilderImpl`    |
| removed | -32 B | <0.1% → 0.0% | 32 B → 0 B |   1 → 0 | `from(IterableOnce)`                       | `scala.collection.immutable.Map$`              |
| removed | -32 B | <0.1% → 0.0% | 32 B → 0 B |   1 → 0 | `apply(Seq)`                               | `scala.collection.MapFactory`                  |
| removed | -32 B | <0.1% → 0.0% | 32 B → 0 B |   1 → 0 | `apply$(MapFactory, Seq)`                  | `scala.collection.MapFactory`                  |
| removed | -32 B | <0.1% → 0.0% | 32 B → 0 B |   1 → 0 | `apply(Seq)`                               | `scala.collection.immutable.Map$`              |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B |   1 → 0 | `parseName(byte[], int)`                   | `java.util.jar.Manifest`                       |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B |   1 → 0 | `read(InputStream, String)`                | `java.util.jar.Manifest`                       |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B |   1 → 0 | `<init>(JarVerifier, InputStream, String)` | `java.util.jar.Manifest`                       |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B |   1 → 0 | `<init>(InputStream, String)`              | `java.util.jar.Manifest`                       |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B |   1 → 0 | `getManifestFromReference()`               | `java.util.jar.JarFile`                        |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B |   1 → 0 | `getManifest()`                            | `java.util.jar.JarFile`                        |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B |   1 → 0 | `getManifest()`                            | `jdk.internal.loader.URLClassPath$JarLoader$2` |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |     Delta |             % |           Size | Objects | Caller              | Location                                                               |
| -----: | --------: | ------------: | -------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
|    new | +2.31 MiB | 0.0% → 100.0% | 0 B → 2.31 MiB |   0 → 7 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780119c3b8` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780119c3b8`)

| Change |        Delta |      % |                Size | Objects | Caller          | Location                             |
| -----: | -----------: | -----: | ------------------: | ------: | --------------- | ------------------------------------ |
| +12.1% | +255.148 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   4 → 7 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change |        Delta |      % |                Size | Objects | Caller               | Location                             |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------- | ------------------------------------ |
| +12.1% | +255.148 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   4 → 7 | `apply(Object)`      | `scala.runtime.function.JProcedure1` |
| +12.1% | +255.148 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   4 → 7 | `foreach(Function1)` | `scala.collection.immutable.List`    |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change |        Delta |      % |                Size | Objects | Caller                                                                        | Location                                    |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| +12.1% | +255.148 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   4 → 7 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |      % |                Size | Objects | Caller           | Location                                    |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------- | ------------------------------------------- |
| +12.1% | +255.148 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   4 → 7 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |      % |                Size | Objects | Caller           | Location                                   |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------- | ------------------------------------------ |
| +12.1% | +255.117 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   5 → 7 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change |        Delta |      % |                Size | Objects | Caller                         | Location                                             |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------ | ---------------------------------------------------- |
| +12.1% | +255.093 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 7 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801001c00`)

| Change |        Delta |      % |                Size | Objects | Caller                           | Location                                            |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------- | --------------------------------------------------- |
| +12.1% | +255.093 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 7 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007801082400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007801082400`)

| Change |        Delta |      % |                Size | Objects | Caller                                           | Location                           |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| +12.1% | +255.093 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 7 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |        Delta |      % |                Size | Objects | Caller                         | Location                                          |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------ | ------------------------------------------------- |
| +12.1% | +255.093 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 7 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |        Delta |      % |                Size | Objects | Caller                     | Location                                          |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | ------------------------------------------------- |
| +12.1% | +255.093 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 7 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |        Delta |      % |                Size | Objects | Caller                     | Location                   |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | -------------------------- |
| +12.1% | +255.093 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 7 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |        Delta |      % |                Size | Objects | Caller                                                      | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------------------- | ------------------------------- |
| +12.1% | +255.093 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 7 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Caller                                 | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------------- | ------------------------------- |
| +12.1% | +255.093 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 7 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Caller           | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------- | ------------------------------- |
| +12.1% | +255.093 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 7 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |             % |          Size | Objects | Caller                                          | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- | ------------------------------ |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(ZipFile$Source$Key, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |             % |          Size | Objects | Caller                         | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------ | ------------------------------ |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `get(File, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `get(File, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |             % |          Size | Objects | Caller                                 | Location                                  |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------- | ----------------------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `<init>(ZipFile, ZipCoder, File, int)` | `java.util.zip.ZipFile$CleanableResource` |

##### `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`)

| Change |        Delta |             % |          Size | Objects | Caller                       | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------- | ----------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `<init>(File, int, Charset)` | `java.util.zip.ZipFile` |

##### `<init>(File, int, Charset)` (`java.util.zip.ZipFile`)

| Change |        Delta |             % |          Size | Objects | Caller              | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------- | ----------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `<init>(File, int)` | `java.util.zip.ZipFile` |

##### `<init>(File, int)` (`java.util.zip.ZipFile`)

| Change |        Delta |             % |          Size | Objects | Caller                                        | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------- | ----------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `<init>(File, boolean, int, Runtime$Version)` | `java.util.jar.JarFile` |

##### `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`)

| Change |        Delta |             % |          Size | Objects | Caller            | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------- | -------------------------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `getJarFile(URL)` | `jdk.internal.loader.URLClassPath$JarLoader` |

##### `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`)

| Change |        Delta |             % |          Size | Objects | Caller  | Location                                       |
| -----: | -----------: | ------------: | ------------: | ------: | ------- | ---------------------------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `run()` | `jdk.internal.loader.URLClassPath$JarLoader$1` |

##### `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`)

| Change |        Delta |             % |          Size | Objects | Caller                                                                      | Location                                       |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------------------------- | ---------------------------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `run()`                                                                     | `jdk.internal.loader.URLClassPath$JarLoader$1` |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`               |

##### `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`)

| Change |        Delta |             % |          Size | Objects | Caller                                                         | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------------------- | -------------------------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` | `jdk.internal.loader.URLClassPath$JarLoader` |

##### `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` (`jdk.internal.loader.URLClassPath$JarLoader`)

| Change |        Delta |             % |          Size | Objects | Caller  | Location                             |
| -----: | -----------: | ------------: | ------------: | ------: | ------- | ------------------------------------ |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `run()` | `jdk.internal.loader.URLClassPath$3` |

##### `run()` (`jdk.internal.loader.URLClassPath$3`)

| Change |        Delta |             % |          Size | Objects | Caller                                                                      | Location                             |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------------------------- | ------------------------------------ |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `run()`                                                                     | `jdk.internal.loader.URLClassPath$3` |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`     |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |     Delta |             % |           Size | Objects | Caller              | Location                                                               |
| ------: | --------: | ------------: | -------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| removed | -2.06 MiB | 100.0% → 0.0% | 2.06 MiB → 0 B |   4 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |            % |       Size | Objects | Caller                        | Location                                 |
| ------: | ----: | -----------: | ---------: | ------: | ----------------------------- | ---------------------------------------- |
| removed | -32 B | <0.1% → 0.0% | 32 B → 0 B |   1 → 0 | `putIfAbsent(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `putIfAbsent(Object, Object)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % |       Size | Objects | Caller                        | Location                |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------- | ----------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `getClassLoadingLock(String)` | `java.lang.ClassLoader` |

##### `getClassLoadingLock(String)` (`java.lang.ClassLoader`)

|  Change | Delta |             % |       Size | Objects | Caller                       | Location                |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------- | ----------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `loadClass(String, boolean)` | `java.lang.ClassLoader` |

##### `releaseFence()` (`scala.runtime.Statics`)

|  Change | Delta |             % |       Size | Objects | Caller           | Location                                  |
| ------: | ----: | ------------: | ---------: | ------: | ---------------- | ----------------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `<init>(Object)` | `scala.collection.ArrayOps$ArrayIterator` |

##### `<init>(Object)` (`scala.collection.ArrayOps$ArrayIterator`)

|  Change | Delta |             % |       Size | Objects | Caller       | Location                                    |
| ------: | ----: | ------------: | ---------: | ------: | ------------ | ------------------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `iterator()` | `scala.collection.immutable.ArraySeq$ofRef` |

##### `iterator()` (`scala.collection.immutable.ArraySeq$ofRef`)

|  Change | Delta |             % |       Size | Objects | Caller                 | Location                            |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------- | ----------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `addAll(IterableOnce)` | `scala.collection.mutable.Growable` |

##### `addAll(IterableOnce)` (`scala.collection.mutable.Growable`)

|  Change | Delta |             % |       Size | Objects | Caller                            | Location                            |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------------- | ----------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `addAll$(Growable, IterableOnce)` | `scala.collection.mutable.Growable` |

##### `addAll$(Growable, IterableOnce)` (`scala.collection.mutable.Growable`)

|  Change | Delta |             % |       Size | Objects | Caller                 | Location                                    |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------- | ------------------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `addAll(IterableOnce)` | `scala.collection.immutable.MapBuilderImpl` |

##### `addAll(IterableOnce)` (`scala.collection.immutable.MapBuilderImpl`)

|  Change | Delta |             % |       Size | Objects | Caller               | Location                          |
| ------: | ----: | ------------: | ---------: | ------: | -------------------- | --------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `from(IterableOnce)` | `scala.collection.immutable.Map$` |

##### `from(IterableOnce)` (`scala.collection.immutable.Map$`)

|  Change | Delta |             % |       Size | Objects | Caller               | Location                          |
| ------: | ----: | ------------: | ---------: | ------: | -------------------- | --------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `from(IterableOnce)` | `scala.collection.immutable.Map$` |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `apply(Seq)`         | `scala.collection.MapFactory`     |

##### `apply(Seq)` (`scala.collection.MapFactory`)

|  Change | Delta |             % |       Size | Objects | Caller                    | Location                      |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------- | ----------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `apply$(MapFactory, Seq)` | `scala.collection.MapFactory` |

##### `apply$(MapFactory, Seq)` (`scala.collection.MapFactory`)

|  Change | Delta |             % |       Size | Objects | Caller       | Location                          |
| ------: | ----: | ------------: | ---------: | ------: | ------------ | --------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `apply(Seq)` | `scala.collection.immutable.Map$` |

##### `apply(Seq)` (`scala.collection.immutable.Map$`)

|  Change | Delta |             % |       Size | Objects | Caller           | Location                                    |
| ------: | ----: | ------------: | ---------: | ------: | ---------------- | ------------------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `parseName(byte[], int)` (`java.util.jar.Manifest`)

|  Change | Delta |             % |       Size | Objects | Caller                      | Location                 |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------- | ------------------------ |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `read(InputStream, String)` | `java.util.jar.Manifest` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

|  Change | Delta |             % |       Size | Objects | Caller                                     | Location                 |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------ | ------------------------ |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `<init>(JarVerifier, InputStream, String)` | `java.util.jar.Manifest` |

##### `<init>(JarVerifier, InputStream, String)` (`java.util.jar.Manifest`)

|  Change | Delta |             % |       Size | Objects | Caller                        | Location                 |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------- | ------------------------ |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `<init>(InputStream, String)` | `java.util.jar.Manifest` |

##### `<init>(InputStream, String)` (`java.util.jar.Manifest`)

|  Change | Delta |             % |       Size | Objects | Caller                       | Location                |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------- | ----------------------- |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `getManifestFromReference()` | `java.util.jar.JarFile` |

##### `getManifestFromReference()` (`java.util.jar.JarFile`)

|  Change | Delta |             % |       Size | Objects | Caller          | Location                |
| ------: | ----: | ------------: | ---------: | ------: | --------------- | ----------------------- |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `getManifest()` | `java.util.jar.JarFile` |

##### `getManifest()` (`java.util.jar.JarFile`)

|  Change | Delta |             % |       Size | Objects | Caller          | Location                                       |
| ------: | ----: | ------------: | ---------: | ------: | --------------- | ---------------------------------------------- |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `getManifest()` | `jdk.internal.loader.URLClassPath$JarLoader$2` |

##### `getManifest()` (`jdk.internal.loader.URLClassPath$JarLoader$2`)

|  Change | Delta |             % |       Size | Objects | Caller                          | Location                  |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------- | ------------------------- |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `defineClass(String, Resource)` | `java.net.URLClassLoader` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |            % |           Size | Objects | Callee                                                                                       | Location                                  |
| -----: | -----------: | -----------: | -------------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |    +2.06 MiB | 0.0% → 89.2% | 0 B → 2.06 MiB |   0 → 6 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new | +255.085 KiB | 0.0% → 10.8% |  0 B → 255 KiB |   0 → 1 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780119c3b8`)

|  Change |     Delta |             % |           Size | Objects | Callee                                                                                                                 | Location                                    |
| ------: | --------: | ------------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new | +2.31 MiB | 0.0% → 100.0% | 0 B → 2.31 MiB |   0 → 7 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed | -2.06 MiB | 100.0% → 0.0% | 2.06 MiB → 0 B |   4 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change |        Delta |      % |                Size | Objects | Callee              | Location                                                               |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| +12.1% | +255.148 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   4 → 7 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780119c3b8` |
| +12.1% | +255.148 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   4 → 7 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change |        Delta |      % |                Size | Objects | Callee          | Location                             |
| -----: | -----------: | -----: | ------------------: | ------: | --------------- | ------------------------------------ |
| +12.1% | +255.148 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   4 → 7 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |        Delta |      % |                Size | Objects | Callee               | Location                          |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------- | --------------------------------- |
| +12.1% | +255.148 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   4 → 7 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |        Delta |            % |                Size | Objects | Callee                                                                        | Location                                    |
| ------: | -----------: | -----------: | ------------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
|  +12.1% | +255.148 KiB |       100.0% | 2.06 MiB → 2.31 MiB |   4 → 7 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |        -32 B | <0.1% → 0.0% |          32 B → 0 B |   1 → 0 | `apply(Seq)`                                                                  | `scala.collection.immutable.Map$`           |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|  Change |        Delta |            % |                Size | Objects | Callee              | Location                                    |
| ------: | -----------: | -----------: | ------------------: | ------: | ------------------- | ------------------------------------------- |
|  +12.1% | +255.117 KiB |       100.0% | 2.06 MiB → 2.31 MiB |   5 → 7 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
| removed |        -24 B | <0.1% → 0.0% |          24 B → 0 B |   1 → 0 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801001c00`)

| Change |        Delta |      % |                Size | Objects | Callee           | Location                                   |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------- | ------------------------------------------ |
| +12.1% | +255.093 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 7 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007801082400`)

| Change |        Delta |      % |                Size | Objects | Callee                         | Location                                             |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------ | ---------------------------------------------------- |
| +12.1% | +255.093 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 7 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |        Delta |      % |                Size | Objects | Callee                           | Location                                            |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------- | --------------------------------------------------- |
| +12.1% | +255.093 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 7 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007801082400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |        Delta |      % |                Size | Objects | Callee                                           | Location                           |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------------------ | ---------------------------------- |
| +12.1% | +255.093 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 7 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |        Delta |      % |                Size | Objects | Callee                         | Location                                          |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------ | ------------------------------------------------- |
| +12.1% | +255.093 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 7 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |        Delta |      % |                Size | Objects | Callee                     | Location                                          |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | ------------------------------------------------- |
| +12.1% | +255.093 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 7 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Callee                     | Location                   |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | -------------------------- |
| +12.1% | +255.093 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 7 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Callee                                                      | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------------------- | ------------------------------- |
| +12.1% | +255.093 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 7 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

| Change |        Delta |      % |                Size | Objects | Callee                                 | Location                        |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------------- | ------------------------------- |
| +12.1% | +255.093 KiB | 100.0% | 2.06 MiB → 2.31 MiB |   6 → 7 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `<init>(ZipFile$Source$Key, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |             % |          Size | Objects | Callee                   | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------ | ------------------------------ |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `initCEN(int, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `get(File, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |             % |          Size | Objects | Callee                                          | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- | ------------------------------ |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`)

| Change |        Delta |             % |          Size | Objects | Callee                         | Location                       |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------ | ------------------------------ |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `get(File, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(File, int, Charset)` (`java.util.zip.ZipFile`)

| Change |        Delta |             % |          Size | Objects | Callee                                 | Location                                  |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------- | ----------------------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `<init>(ZipFile, ZipCoder, File, int)` | `java.util.zip.ZipFile$CleanableResource` |

##### `<init>(File, int)` (`java.util.zip.ZipFile`)

| Change |        Delta |             % |          Size | Objects | Callee                       | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------- | ----------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `<init>(File, int, Charset)` | `java.util.zip.ZipFile` |

##### `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`)

| Change |        Delta |             % |          Size | Objects | Callee              | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------- | ----------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `<init>(File, int)` | `java.util.zip.ZipFile` |

##### `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`)

| Change |        Delta |             % |          Size | Objects | Callee                                        | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------- | ----------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `<init>(File, boolean, int, Runtime$Version)` | `java.util.jar.JarFile` |

##### `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`)

| Change |        Delta |             % |          Size | Objects | Callee            | Location                                       |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------- | ---------------------------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `getJarFile(URL)` | `jdk.internal.loader.URLClassPath$JarLoader`   |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `run()`           | `jdk.internal.loader.URLClassPath$JarLoader$1` |

##### `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`)

| Change |        Delta |             % |          Size | Objects | Callee                                                          | Location                         |
| -----: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------------- | -------------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` | `java.security.AccessController` |

##### `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` (`jdk.internal.loader.URLClassPath$JarLoader`)

| Change |        Delta |             % |          Size | Objects | Callee         | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | -------------- | -------------------------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `ensureOpen()` | `jdk.internal.loader.URLClassPath$JarLoader` |

##### `run()` (`jdk.internal.loader.URLClassPath$3`)

| Change |        Delta |             % |          Size | Objects | Callee                                                         | Location                                     |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------------------- | -------------------------------------------- |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` | `jdk.internal.loader.URLClassPath$JarLoader` |
|    new | +255.085 KiB | 0.0% → 100.0% | 0 B → 255 KiB |   0 → 1 | `run()`                                                        | `jdk.internal.loader.URLClassPath$3`         |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |     Delta |             % |           Size | Objects | Callee               | Location                                  |
| ------: | --------: | ------------: | -------------: | ------: | -------------------- | ----------------------------------------- |
| removed | -2.06 MiB | 100.0% → 0.0% | 2.06 MiB → 0 B |   4 → 0 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `putIfAbsent(Object, Object)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % |       Size | Objects | Callee                            | Location                                 |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------------- | ---------------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `getClassLoadingLock(String)` (`java.lang.ClassLoader`)

|  Change | Delta |             % |       Size | Objects | Callee                        | Location                                 |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------- | ---------------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `putIfAbsent(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `releaseFence()` (`scala.runtime.Statics`)

|  Change | Delta |             % |       Size | Objects | Callee              | Location                |
| ------: | ----: | ------------: | ---------: | ------: | ------------------- | ----------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `<init>(Object)` (`scala.collection.ArrayOps$ArrayIterator`)

|  Change | Delta |             % |       Size | Objects | Callee           | Location                |
| ------: | ----: | ------------: | ---------: | ------: | ---------------- | ----------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `releaseFence()` | `scala.runtime.Statics` |

##### `iterator()` (`scala.collection.immutable.ArraySeq$ofRef`)

|  Change | Delta |             % |       Size | Objects | Callee           | Location                                  |
| ------: | ----: | ------------: | ---------: | ------: | ---------------- | ----------------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `<init>(Object)` | `scala.collection.ArrayOps$ArrayIterator` |

##### `addAll(IterableOnce)` (`scala.collection.mutable.Growable`)

|  Change | Delta |             % |       Size | Objects | Callee       | Location                                    |
| ------: | ----: | ------------: | ---------: | ------: | ------------ | ------------------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `iterator()` | `scala.collection.immutable.ArraySeq$ofRef` |

##### `addAll$(Growable, IterableOnce)` (`scala.collection.mutable.Growable`)

|  Change | Delta |             % |       Size | Objects | Callee                 | Location                            |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------- | ----------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `addAll(IterableOnce)` | `scala.collection.mutable.Growable` |

##### `addAll(IterableOnce)` (`scala.collection.immutable.MapBuilderImpl`)

|  Change | Delta |             % |       Size | Objects | Callee                            | Location                            |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------------- | ----------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `addAll$(Growable, IterableOnce)` | `scala.collection.mutable.Growable` |

##### `from(IterableOnce)` (`scala.collection.immutable.Map$`)

|  Change | Delta |             % |       Size | Objects | Callee                 | Location                                    |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------- | ------------------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `addAll(IterableOnce)` | `scala.collection.immutable.MapBuilderImpl` |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `from(IterableOnce)`   | `scala.collection.immutable.Map$`           |

##### `apply(Seq)` (`scala.collection.MapFactory`)

|  Change | Delta |             % |       Size | Objects | Callee               | Location                          |
| ------: | ----: | ------------: | ---------: | ------: | -------------------- | --------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `from(IterableOnce)` | `scala.collection.immutable.Map$` |

##### `apply$(MapFactory, Seq)` (`scala.collection.MapFactory`)

|  Change | Delta |             % |       Size | Objects | Callee       | Location                      |
| ------: | ----: | ------------: | ---------: | ------: | ------------ | ----------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `apply(Seq)` | `scala.collection.MapFactory` |

##### `apply(Seq)` (`scala.collection.immutable.Map$`)

|  Change | Delta |             % |       Size | Objects | Callee                    | Location                      |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------- | ----------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `apply$(MapFactory, Seq)` | `scala.collection.MapFactory` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

|  Change | Delta |             % |       Size | Objects | Callee                   | Location                 |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------ | ------------------------ |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `parseName(byte[], int)` | `java.util.jar.Manifest` |

##### `<init>(JarVerifier, InputStream, String)` (`java.util.jar.Manifest`)

|  Change | Delta |             % |       Size | Objects | Callee                      | Location                 |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------- | ------------------------ |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `read(InputStream, String)` | `java.util.jar.Manifest` |

##### `<init>(InputStream, String)` (`java.util.jar.Manifest`)

|  Change | Delta |             % |       Size | Objects | Callee                                     | Location                 |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------ | ------------------------ |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `<init>(JarVerifier, InputStream, String)` | `java.util.jar.Manifest` |

##### `getManifestFromReference()` (`java.util.jar.JarFile`)

|  Change | Delta |             % |       Size | Objects | Callee                        | Location                 |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------- | ------------------------ |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `<init>(InputStream, String)` | `java.util.jar.Manifest` |

##### `getManifest()` (`java.util.jar.JarFile`)

|  Change | Delta |             % |       Size | Objects | Callee                       | Location                |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------- | ----------------------- |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `getManifestFromReference()` | `java.util.jar.JarFile` |

##### `getManifest()` (`jdk.internal.loader.URLClassPath$JarLoader$2`)

|  Change | Delta |             % |       Size | Objects | Callee          | Location                |
| ------: | ----: | ------------: | ---------: | ------: | --------------- | ----------------------- |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `getManifest()` | `java.util.jar.JarFile` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes retained in their leaf frame.

Common call stack: `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007801082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`

| Change |        Delta |            % |           Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -----: | -----------: | -----------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +2.06 MiB | 0.0% → 80.5% | 0 B → 2.06 MiB |   0 → 1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `accept(Object, Object)` (`java.util.stream.Collectors$$Lambda.0x00000078010c40c8`) ← `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|    new | +255.085 KiB |  0.0% → 9.7% |  0 B → 255 KiB |   0 → 1 | `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`) ← `<init>(ZipFile$Source$Key, boolean, ZipCoder)` ← `get(File, boolean, ZipCoder)` ← `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`) ← `<init>(File, int, Charset)` (`java.util.zip.ZipFile`) ← `<init>(File, int)` ← `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`) ← `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` ← `run()` (`jdk.internal.loader.URLClassPath$3`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `getLoader(URL)` (`jdk.internal.loader.URLClassPath`) ← `getLoader(int)` ← `getResource(String, boolean)` ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `getDeclaredConstructors0(boolean)` (`java.lang.Class`) ← `privateGetDeclaredConstructors(boolean)` ← `getConstructor0(Class[], int)` ← `getDeclaredConstructor(Class[])` ← `createBenchmark(BenchmarkDescriptor)` (`org.renaissance.core.BenchmarkSuite`) ← `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` (`org.renaissance.harness.ExecutionDriver`) |
|    new |        +80 B | 0.0% → <0.1% |     0 B → 80 B |   0 → 2 | `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`) ← `builder(long, IntFunction)` (`java.util.stream.Nodes`) ← `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`) ← `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`) ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)                                                                                                                                                                                                                                                                                                                                                                                                           |
|    new |        +72 B | 0.0% → <0.1% |     0 B → 72 B |   0 → 3 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)                                                                                                                                                                                                                                                                                                                                                     |

### Improvements

Call stacks with the largest decrease in bytes retained in their leaf frame.

Common call stack: `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`

|  Change |     Delta |            % |           Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------: | --------: | -----------: | -------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -2.06 MiB | 89.2% → 0.0% | 2.06 MiB → 0 B |   1 → 0 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `accept(Object, Object)` (`java.util.stream.Collectors$$Lambda.0x00000070010c40c8`) ← `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed |     -48 B | <0.1% → 0.0% |     48 B → 0 B |   2 → 0 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` |
| removed |     -40 B | <0.1% → 0.0% |     40 B → 0 B |   1 → 0 | `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`) ← `builder(long, IntFunction)` (`java.util.stream.Nodes`) ← `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`) ← `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`) ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])`                                                       |
| removed |     -32 B | <0.1% → 0.0% |     32 B → 0 B |   1 → 0 | `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`) ← `putIfAbsent(Object, Object)` ← `getClassLoadingLock(String)` (`java.lang.ClassLoader`) ← `loadClass(String, boolean)` ← `loadClass(String)` ← `releaseFence()` (`scala.runtime.Statics`) ← `<init>(Object)` (`scala.collection.ArrayOps$ArrayIterator`) ← `iterator()` (`scala.collection.immutable.ArraySeq$ofRef`) ← `addAll(IterableOnce)` (`scala.collection.mutable.Growable`) ← `addAll$(Growable, IterableOnce)` ← `addAll(IterableOnce)` (`scala.collection.immutable.MapBuilderImpl`) ← `from(IterableOnce)` (`scala.collection.immutable.Map$`) ← `from(IterableOnce)` ← `apply(Seq)` (`scala.collection.MapFactory`) ← `apply$(MapFactory, Seq)` ← `apply(Seq)` (`scala.collection.immutable.Map$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |     -24 B | <0.1% → 0.0% |     24 B → 0 B |   1 → 0 | `parseName(byte[], int)` (`java.util.jar.Manifest`) ← `read(InputStream, String)` ← `<init>(JarVerifier, InputStream, String)` ← `<init>(InputStream, String)` ← `getManifestFromReference()` (`java.util.jar.JarFile`) ← `getManifest()` ← `getManifest()` (`jdk.internal.loader.URLClassPath$JarLoader$2`) ← `defineClass(String, Resource)` (`java.net.URLClassLoader`) ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

# Lock contention profile diff

Blocked 11.84s → 9.93s (-1.912s, -16.1%) over 178 → 149 contentions (66.5ms → 66.7ms per contention).

| Category         | Change |   Delta |      % |           Time | Contentions |
| ---------------- | -----: | ------: | -----: | -------------: | ----------: |
| Standard library | -16.1% | -1.912s | 100.0% | 11.84s → 9.93s |   178 → 149 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 8.61s → 7.05s (72.7% → 71.0%) main(String[]) at org.renaissance.core.Launcher
│   └── 8.61s → 7.05s (72.7% → 71.0%) launchHarnessClass(String, String[])
│       └── 8.61s → 7.05s (72.7% → 71.0%) loadAndInvokeHarnessClass(ModuleLoader, String, String[])
│           └── 8.61s → 7.05s (72.7% → 71.0%) invoke(Object, Object[]) at java.lang.reflect.Method
│               └── 8.61s → 7.05s (72.7% → 71.0%) invoke(Object, Object[]) at jdk.internal.reflect.DirectMethodHandleAccessor
│                   └── 8.61s → 7.05s (72.7% → 71.0%) invokeImpl(Object, Object[])
│                       └── 8.61s → 7.05s (72.7% → 71.0%) invokeExact_MT(Object, Object, Object, Object) at java.lang.invoke.Invokers$Holder
│                           └── 8.61s → 7.05s (72.7% → 71.0%) invoke(Object, Object, Object) at java.lang.invoke.LambdaForm$MH.0x0000007801082400
│                               └── 8.61s → 7.05s (72.7% → 71.0%) invokeStatic(Object, Object) at java.lang.invoke.LambdaForm$DMH.0x0000007801001c00
│                                   └── 8.61s → 7.05s (72.7% → 71.0%) main(String[]) at org.renaissance.harness.RenaissanceSuite
│                                       └── 8.61s → 7.05s (72.7% → 71.0%) main(String[]) at org.renaissance.harness.RenaissanceSuite$
│                                           └── 8.61s → 7.05s (72.7% → 71.0%) runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)
│                                               └── 8.61s → 7.05s (72.7% → 71.0%) foreach(Function1) at scala.collection.immutable.List
│                                                   └── 8.61s → 7.05s (72.7% → 71.0%) apply(Object) at scala.runtime.function.JProcedure1
│                                                       └── … 8.61s → 7.05s (72.7% → 71.0%) applyVoid(Object) at org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780119c3b8
│                                                           ├── 8.61s → 0ms (72.7% → 0.0%) runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor) at org.renaissance.harness.RenaissanceSuite$
│                                                           │   └── 8.61s → 0ms (72.7% → 0.0%) executeBenchmark() at org.renaissance.harness.ExecutionDriver
│                                                           │       └── 8.61s → 0ms (72.7% → 0.0%) executeOperation(int)
│                                                           │           └── 8.61s → 0ms (72.7% → 0.0%) run(BenchmarkContext) at org.renaissance.jdk.concurrent.FjKmeans
│                                                           │               └── 8.61s → 0ms (72.7% → 0.0%) map(Function1) at scala.collection.immutable.Range
│                                                           │                   └── 8.61s → 0ms (72.7% → 0.0%) apply(Object) at org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000780121db90
│                                                           │                       └── 8.61s → 0ms (72.7% → 0.0%) $anonfun$adapted$1(Object) at org.renaissance.jdk.concurrent.FjKmeans
│                                                           │                           └── 8.61s → 0ms (72.7% → 0.0%) $anonfun$1(int)
│                                                           │                               └── 8.61s → 0ms (72.7% → 0.0%) run(int, List, int) at org.renaissance.jdk.concurrent.JavaKMeans
│                                                           │                                   └── 8.61s → 0ms (72.7% → 0.0%) get() at java.util.concurrent.ForkJoinTask
│                                                           │                                       └── 8.61s → 0ms (72.7% → 0.0%) awaitDone(int, long)
│                                                           │                                           └── 8.61s → 0ms (72.7% → 0.0%) park() at java.util.concurrent.locks.LockSupport
│                                                           │                                               └── 8.61s → 0ms (72.7% → 0.0%, self 100.0% globally) park(boolean, long) at jdk.internal.misc.Unsafe
│                                                           └── … 0ms → 7.05s (0.0% → 71.0%) get() at java.util.concurrent.ForkJoinTask
│                                                               └── 0ms → 7.05s (0.0% → 71.0%) awaitDone(int, long)
│                                                                   └── 0ms → 7.05s (0.0% → 71.0%) park() at java.util.concurrent.locks.LockSupport
│                                                                       └── 0ms → 7.05s (0.0% → 71.0%) park(boolean, long) at jdk.internal.misc.Unsafe
└── 3.22s → 2.88s (27.3% → 29.0%) run() at java.util.concurrent.ForkJoinWorkerThread
    └── 3.22s → 2.88s (27.3% → 29.0%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
        ├── 3.02s → 2.82s (25.5% → 28.5%) awaitWork(ForkJoinPool$WorkQueue)
        │   ├── 2.59s → 2.38s (21.9% → 24.0%) park() at java.util.concurrent.locks.LockSupport
        │   │   └── 2.59s → 2.38s (21.9% → 24.0%) park(boolean, long) at jdk.internal.misc.Unsafe
        │   └── 427.1ms → 447.6ms (3.6% → 4.5%) parkUntil(long) at java.util.concurrent.locks.LockSupport
        │       └── 427.1ms → 447.6ms (3.6% → 4.5%) park(boolean, long) at jdk.internal.misc.Unsafe
        └── … 205.5ms → 52.1ms (1.7% → 0.5%) park(boolean, long) at jdk.internal.misc.Unsafe
```

## Hottest functions

### Self time

#### Improvements

Functions with the largest decrease in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

| Change |   Delta |      % |           Time | Contentions | Function              | Location                   |
| -----: | ------: | -----: | -------------: | ----------: | --------------------- | -------------------------- |
| -16.1% | -1.912s | 100.0% | 11.84s → 9.93s |   178 → 149 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change |    Delta |             % |              Time | Contentions | Caller            | Location                                 |
| -----: | -------: | ------------: | ----------------: | ----------: | ----------------- | ---------------------------------------- |
| -16.9% |  -1.933s | 96.4% → 95.5% |    11.41s → 9.48s |   165 → 137 | `park()`          | `java.util.concurrent.locks.LockSupport` |
|  +4.8% | +20.56ms |   3.6% → 4.5% | 427.1ms → 447.6ms |     13 → 12 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

### Total time

#### Regressions

Functions with the largest increase in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |    Delta |            % |              Time | Contentions | Function                                                                                                               | Location                                    |
| -----: | -------: | -----------: | ----------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|    new |  +7.051s | 0.0% → 71.0% |       0ms → 7.05s |      0 → 16 | `$anonfun$2(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`   |
|    new |  +7.051s | 0.0% → 71.0% |       0ms → 7.05s |      0 → 16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
|  +4.8% | +20.56ms |  3.6% → 4.5% | 427.1ms → 447.6ms |     13 → 12 | `parkUntil(long)`                                                                                                      | `java.util.concurrent.locks.LockSupport`    |

##### Standard library

| Change |    Delta |           % |              Time | Contentions | Function          | Location                                 |
| -----: | -------: | ----------: | ----------------: | ----------: | ----------------- | ---------------------------------------- |
|  +4.8% | +20.56ms | 3.6% → 4.5% | 427.1ms → 447.6ms |     13 → 12 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

#### Improvements

Functions with the largest decrease in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |   Delta |             % |           Time | Contentions | Function                                                                                                               | Location                                                               |
| ------: | ------: | ------------: | -------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed | -8.614s |  72.7% → 0.0% |    8.61s → 0ms |      16 → 0 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| removed | -8.614s |  72.7% → 0.0% |    8.61s → 0ms |      16 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -16.9% | -1.933s | 96.4% → 95.5% | 11.41s → 9.48s |   165 → 137 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                               |
|  -16.1% | -1.912s |        100.0% | 11.84s → 9.93s |   178 → 149 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                             |
|  -19.5% | -1.716s | 74.5% → 71.5% |  8.81s → 7.10s |     30 → 19 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
|  -18.1% | -1.563s | 72.7% → 71.0% |  8.61s → 7.05s |          16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  -18.1% | -1.563s | 72.7% → 71.0% |  8.61s → 7.05s |          16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -18.1% | -1.563s | 72.7% → 71.0% |  8.61s → 7.05s |          16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -18.1% | -1.563s | 72.7% → 71.0% |  8.61s → 7.05s |          16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000780121db90`   |
|  -18.1% | -1.563s | 72.7% → 71.0% |  8.61s → 7.05s |          16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
|  -18.1% | -1.563s | 72.7% → 71.0% |  8.61s → 7.05s |          16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -18.1% | -1.563s | 72.7% → 71.0% |  8.61s → 7.05s |          16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  -18.1% | -1.563s | 72.7% → 71.0% |  8.61s → 7.05s |          16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  -18.1% | -1.563s | 72.7% → 71.0% |  8.61s → 7.05s |          16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780119c3b8` |
|  -18.1% | -1.563s | 72.7% → 71.0% |  8.61s → 7.05s |          16 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
|  -18.1% | -1.563s | 72.7% → 71.0% |  8.61s → 7.05s |          16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  -18.1% | -1.563s | 72.7% → 71.0% |  8.61s → 7.05s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -18.1% | -1.563s | 72.7% → 71.0% |  8.61s → 7.05s |          16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -18.1% | -1.563s | 72.7% → 71.0% |  8.61s → 7.05s |          16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  -18.1% | -1.563s | 72.7% → 71.0% |  8.61s → 7.05s |          16 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00`                   |

##### Standard library

| Change |     Delta |             % |             Time | Contentions | Function                                             | Location                                             |
| -----: | --------: | ------------: | ---------------: | ----------: | ---------------------------------------------------- | ---------------------------------------------------- |
| -16.9% |   -1.933s | 96.4% → 95.5% |   11.41s → 9.48s |   165 → 137 | `park()`                                             | `java.util.concurrent.locks.LockSupport`             |
| -16.1% |   -1.912s |        100.0% |   11.84s → 9.93s |   178 → 149 | `park(boolean, long)`                                | `jdk.internal.misc.Unsafe`                           |
| -19.5% |   -1.716s | 74.5% → 71.5% |    8.81s → 7.10s |     30 → 19 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                  |
| -18.1% |   -1.563s | 72.7% → 71.0% |    8.61s → 7.05s |          16 | `get()`                                              | `java.util.concurrent.ForkJoinTask`                  |
| -18.1% |   -1.563s | 72.7% → 71.0% |    8.61s → 7.05s |          16 | `map(Function1)`                                     | `scala.collection.immutable.Range`                   |
| -18.1% |   -1.563s | 72.7% → 71.0% |    8.61s → 7.05s |          16 | `apply(Object)`                                      | `scala.runtime.function.JProcedure1`                 |
| -18.1% |   -1.563s | 72.7% → 71.0% |    8.61s → 7.05s |          16 | `foreach(Function1)`                                 | `scala.collection.immutable.List`                    |
| -18.1% |   -1.563s | 72.7% → 71.0% |    8.61s → 7.05s |          16 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00` |
| -18.1% |   -1.563s | 72.7% → 71.0% |    8.61s → 7.05s |          16 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000007801082400`  |
| -18.1% |   -1.563s | 72.7% → 71.0% |    8.61s → 7.05s |          16 | `invokeExact_MT(Object, Object, Object, Object)`     | `java.lang.invoke.Invokers$Holder`                   |
| -18.1% |   -1.563s | 72.7% → 71.0% |    8.61s → 7.05s |          16 | `invokeImpl(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| -18.1% |   -1.563s | 72.7% → 71.0% |    8.61s → 7.05s |          16 | `invoke(Object, Object[])`                           | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| -18.1% |   -1.563s | 72.7% → 71.0% |    8.61s → 7.05s |          16 | `invoke(Object, Object[])`                           | `java.lang.reflect.Method`                           |
| -10.8% | -349.28ms | 27.3% → 29.0% |    3.22s → 2.88s |   162 → 133 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
| -10.8% | -349.28ms | 27.3% → 29.0% |    3.22s → 2.88s |   162 → 133 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`          |
|  -6.5% | -195.93ms | 25.5% → 28.5% |    3.02s → 2.82s |   148 → 130 | `awaitWork(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
| -74.6% | -153.35ms |   1.7% → 0.5% | 205.5ms → 52.1ms |      14 → 3 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                  |
| -74.6% | -153.35ms |   1.7% → 0.5% | 205.5ms → 52.1ms |      14 → 3 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                 |
| -74.6% | -153.35ms |   1.7% → 0.5% | 205.5ms → 52.1ms |      14 → 3 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                  |
| -74.6% | -153.35ms |   1.7% → 0.5% | 205.5ms → 52.1ms |      14 → 3 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |   Delta |             % |        Time | Contentions | Caller                       | Location                                  |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------- | ----------------------------------------- |
|    new | +7.051s | 0.0% → 100.0% | 0ms → 7.05s |      0 → 16 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |   Delta |             % |        Time | Contentions | Caller              | Location                                                               |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------- | ---------------------------------------------------------------------- |
|    new | +7.051s | 0.0% → 100.0% | 0ms → 7.05s |      0 → 16 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780119c3b8` |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

| Change |    Delta |      % |              Time | Contentions | Caller                              | Location                            |
| -----: | -------: | -----: | ----------------: | ----------: | ----------------------------------- | ----------------------------------- |
|  +4.8% | +20.56ms | 100.0% | 427.1ms → 447.6ms |     13 → 12 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |   Delta |             % |        Time | Contentions | Caller                       | Location                                  |
| ------: | ------: | ------------: | ----------: | ----------: | ---------------------------- | ----------------------------------------- |
| removed | -8.614s | 100.0% → 0.0% | 8.61s → 0ms |      16 → 0 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |   Delta |             % |        Time | Contentions | Caller              | Location                                                               |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------- | ---------------------------------------------------------------------- |
| removed | -8.614s | 100.0% → 0.0% | 8.61s → 0ms |      16 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change |     Delta |             % |          Time | Contentions | Caller                              | Location                            |
| -----: | --------: | ------------: | ------------: | ----------: | ----------------------------------- | ----------------------------------- |
| -19.5% |   -1.716s | 77.3% → 74.9% | 8.81s → 7.10s |     30 → 19 | `awaitDone(int, long)`              | `java.util.concurrent.ForkJoinTask` |
|  -8.3% | -216.50ms | 22.7% → 25.1% | 2.59s → 2.38s |   135 → 118 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change |    Delta |             % |              Time | Contentions | Caller            | Location                                 |
| -----: | -------: | ------------: | ----------------: | ----------: | ----------------- | ---------------------------------------- |
| -16.9% |  -1.933s | 96.4% → 95.5% |    11.41s → 9.48s |   165 → 137 | `park()`          | `java.util.concurrent.locks.LockSupport` |
|  +4.8% | +20.56ms |   3.6% → 4.5% | 427.1ms → 447.6ms |     13 → 12 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |             % |             Time | Contentions | Caller   | Location                            |
| -----: | --------: | ------------: | ---------------: | ----------: | -------- | ----------------------------------- |
| -18.1% |   -1.563s | 97.7% → 99.3% |    8.61s → 7.05s |          16 | `get()`  | `java.util.concurrent.ForkJoinTask` |
| -74.6% | -153.35ms |   2.3% → 0.7% | 205.5ms → 52.1ms |      14 → 3 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |      % |          Time | Contentions | Caller                | Location                                    |
| -----: | ------: | -----: | ------------: | ----------: | --------------------- | ------------------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change |   Delta |             % |        Time | Contentions | Caller            | Location                                  |
| ------: | ------: | ------------: | ----------: | ----------: | ----------------- | ----------------------------------------- |
| removed | -8.614s | 100.0% → 0.0% | 8.61s → 0ms |      16 → 0 | `$anonfun$1(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |
|     new | +7.051s | 0.0% → 100.0% | 0ms → 7.05s |      0 → 16 | `$anonfun$2(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |   Delta |      % |          Time | Contentions | Caller          | Location                                                             |
| -----: | ------: | -----: | ------------: | ----------: | --------------- | -------------------------------------------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000780121db90` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000780121db90`)

| Change |   Delta |      % |          Time | Contentions | Caller           | Location                           |
| -----: | ------: | -----: | ------------: | ----------: | ---------------- | ---------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `map(Function1)` | `scala.collection.immutable.Range` |

##### `map(Function1)` (`scala.collection.immutable.Range`)

| Change |   Delta |      % |          Time | Contentions | Caller                  | Location                                  |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------- | ----------------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |   Delta |      % |          Time | Contentions | Caller                  | Location                                  |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------- | ----------------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change |   Delta |      % |          Time | Contentions | Caller               | Location                                  |
| -----: | ------: | -----: | ------------: | ----------: | -------------------- | ----------------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|  Change |   Delta |             % |        Time | Contentions | Caller                                                                                                                 | Location                                    |
| ------: | ------: | ------------: | ----------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed | -8.614s | 100.0% → 0.0% | 8.61s → 0ms |      16 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
|     new | +7.051s | 0.0% → 100.0% | 0ms → 7.05s |      0 → 16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780119c3b8`)

| Change |   Delta |      % |          Time | Contentions | Caller          | Location                             |
| -----: | ------: | -----: | ------------: | ----------: | --------------- | ------------------------------------ |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change |   Delta |      % |          Time | Contentions | Caller               | Location                             |
| -----: | ------: | -----: | ------------: | ----------: | -------------------- | ------------------------------------ |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `apply(Object)`      | `scala.runtime.function.JProcedure1` |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `foreach(Function1)` | `scala.collection.immutable.List`    |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                                        | Location                                    |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |   Delta |      % |          Time | Contentions | Caller           | Location                                    |
| -----: | ------: | -----: | ------------: | ----------: | ---------------- | ------------------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |   Delta |      % |          Time | Contentions | Caller           | Location                                   |
| -----: | ------: | -----: | ------------: | ----------: | ---------------- | ------------------------------------------ |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change |   Delta |      % |          Time | Contentions | Caller                         | Location                                             |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------ | ---------------------------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801001c00`)

| Change |   Delta |      % |          Time | Contentions | Caller                           | Location                                            |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------------- | --------------------------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007801082400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007801082400`)

| Change |   Delta |      % |          Time | Contentions | Caller                                           | Location                           |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------ | ---------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |   Delta |      % |          Time | Contentions | Caller                         | Location                                          |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------ | ------------------------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |   Delta |      % |          Time | Contentions | Caller                     | Location                                          |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------- | ------------------------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |   Delta |      % |          Time | Contentions | Caller                     | Location                   |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------- | -------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                      | Location                        |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------------------------------- | ------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |      % |          Time | Contentions | Caller  | Location                                    |
| -----: | --------: | -----: | ------------: | ----------: | ------- | ------------------------------------------- |
| -10.8% | -349.28ms | 100.0% | 3.22s → 2.88s |   162 → 133 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |      % |          Time | Contentions | Caller                              | Location                            |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------------------- | ----------------------------------- |
|  -6.5% | -195.93ms | 100.0% | 3.02s → 2.82s |   148 → 130 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |      % |             Time | Contentions | Caller      | Location                                               |
| -----: | --------: | -----: | ---------------: | ----------: | ----------- | ------------------------------------------------------ |
| -74.6% | -153.35ms | 100.0% | 205.5ms → 52.1ms |      14 → 3 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |     Delta |      % |             Time | Contentions | Caller     | Location                            |
| -----: | --------: | -----: | ---------------: | ----------: | ---------- | ----------------------------------- |
| -74.6% | -153.35ms | 100.0% | 205.5ms → 52.1ms |      14 → 3 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change |     Delta |             % |             Time | Contentions | Caller                                                    | Location                                      |
| ------: | --------: | ------------: | ---------------: | ----------: | --------------------------------------------------------- | --------------------------------------------- |
|  -74.6% | -153.35ms |        100.0% | 205.5ms → 52.1ms |      14 → 3 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| removed |  -61.15ms |  29.8% → 0.0% |     61.1ms → 0ms |       4 → 0 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  -72.0% |  -51.89ms | 35.1% → 38.6% |  72.0ms → 20.1ms |       5 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -48.8% |  -19.17ms | 19.1% → 38.6% |  39.3ms → 20.1ms |       3 → 1 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |     Delta |      % |             Time | Contentions | Caller                                   | Location                            |
| -----: | --------: | -----: | ---------------: | ----------: | ---------------------------------------- | ----------------------------------- |
| -74.6% | -153.35ms | 100.0% | 205.5ms → 52.1ms |      14 → 3 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |   Delta |             % |        Time | Contentions | Callee                | Location                                    |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------- | ------------------------------------------- |
|    new | +7.051s | 0.0% → 100.0% | 0ms → 7.05s |      0 → 16 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |   Delta |             % |        Time | Contentions | Callee               | Location                                  |
| -----: | ------: | ------------: | ----------: | ----------: | -------------------- | ----------------------------------------- |
|    new | +7.051s | 0.0% → 100.0% | 0ms → 7.05s |      0 → 16 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

| Change |    Delta |      % |              Time | Contentions | Callee                | Location                   |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------- | -------------------------- |
|  +4.8% | +20.56ms | 100.0% | 427.1ms → 447.6ms |     13 → 12 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |   Delta |             % |        Time | Contentions | Callee                | Location                                    |
| ------: | ------: | ------------: | ----------: | ----------: | --------------------- | ------------------------------------------- |
| removed | -8.614s | 100.0% → 0.0% | 8.61s → 0ms |      16 → 0 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change |   Delta |             % |        Time | Contentions | Callee               | Location                                  |
| ------: | ------: | ------------: | ----------: | ----------: | -------------------- | ----------------------------------------- |
| removed | -8.614s | 100.0% → 0.0% | 8.61s → 0ms |      16 → 0 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change |   Delta |      % |           Time | Contentions | Callee                | Location                   |
| -----: | ------: | -----: | -------------: | ----------: | --------------------- | -------------------------- |
| -16.9% | -1.933s | 100.0% | 11.41s → 9.48s |   165 → 137 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change |    Delta |           % |            Time | Contentions | Callee                                                    | Location                                      |
| -----: | -------: | ----------: | --------------: | ----------: | --------------------------------------------------------- | --------------------------------------------- |
| -19.5% |  -1.716s |      100.0% |   8.81s → 7.10s |     30 → 19 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
| -72.0% | -51.89ms | 0.8% → 0.3% | 72.0ms → 20.1ms |       5 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -48.8% | -19.17ms | 0.4% → 0.3% | 39.3ms → 20.1ms |       3 → 1 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

| Change |   Delta |      % |          Time | Contentions | Callee                 | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------- | ----------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change |   Delta |      % |          Time | Contentions | Callee  | Location                            |
| -----: | ------: | -----: | ------------: | ----------: | ------- | ----------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `get()` | `java.util.concurrent.ForkJoinTask` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change |   Delta |             % |        Time | Contentions | Callee            | Location                                  |
| ------: | ------: | ------------: | ----------: | ----------: | ----------------- | ----------------------------------------- |
| removed | -8.614s | 100.0% → 0.0% | 8.61s → 0ms |      16 → 0 | `$anonfun$1(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |
|     new | +7.051s | 0.0% → 100.0% | 0ms → 7.05s |      0 → 16 | `$anonfun$2(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000780121db90`)

| Change |   Delta |      % |          Time | Contentions | Callee                       | Location                                  |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------- | ----------------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `map(Function1)` (`scala.collection.immutable.Range`)

| Change |   Delta |      % |          Time | Contentions | Callee          | Location                                                             |
| -----: | ------: | -----: | ------------: | ----------: | --------------- | -------------------------------------------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000780121db90` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change |   Delta |      % |          Time | Contentions | Callee           | Location                           |
| -----: | ------: | -----: | ------------: | ----------: | ---------------- | ---------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `map(Function1)` | `scala.collection.immutable.Range` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change |   Delta |      % |          Time | Contentions | Callee                  | Location                                  |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------- | ----------------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

| Change |   Delta |      % |          Time | Contentions | Callee                  | Location                                  |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------- | ----------------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780119c3b8`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                                                                                                 | Location                                    |
| ------: | ------: | ------------: | ----------: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed | -8.614s | 100.0% → 0.0% | 8.61s → 0ms |      16 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
|     new | +7.051s | 0.0% → 100.0% | 0ms → 7.05s |      0 → 16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

| Change |   Delta |      % |          Time | Contentions | Callee              | Location                                                               |
| -----: | ------: | -----: | ------------: | ----------: | ------------------- | ---------------------------------------------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780119c3b8` |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

| Change |   Delta |      % |          Time | Contentions | Callee          | Location                             |
| -----: | ------: | -----: | ------------: | ----------: | --------------- | ------------------------------------ |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |   Delta |      % |          Time | Contentions | Callee               | Location                          |
| -----: | ------: | -----: | ------------: | ----------: | -------------------- | --------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change |   Delta |      % |          Time | Contentions | Callee                                                                        | Location                                    |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change |   Delta |      % |          Time | Contentions | Callee           | Location                                    |
| -----: | ------: | -----: | ------------: | ----------: | ---------------- | ------------------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801001c00`)

| Change |   Delta |      % |          Time | Contentions | Callee           | Location                                   |
| -----: | ------: | -----: | ------------: | ----------: | ---------------- | ------------------------------------------ |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007801082400`)

| Change |   Delta |      % |          Time | Contentions | Callee                         | Location                                             |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------ | ---------------------------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |   Delta |      % |          Time | Contentions | Callee                           | Location                                            |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------------- | --------------------------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007801082400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |   Delta |      % |          Time | Contentions | Callee                                           | Location                           |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------ | ---------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |   Delta |      % |          Time | Contentions | Callee                         | Location                                          |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------ | ------------------------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |   Delta |      % |          Time | Contentions | Callee                     | Location                                          |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------- | ------------------------------------------------- |
| -18.1% | -1.563s | 100.0% | 8.61s → 7.05s |          16 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |             % |             Time | Contentions | Callee                                   | Location                            |
| -----: | --------: | ------------: | ---------------: | ----------: | ---------------------------------------- | ----------------------------------- |
|  -6.5% | -195.93ms | 93.6% → 98.2% |    3.02s → 2.82s |   148 → 130 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |
| -74.6% | -153.35ms |   6.4% → 1.8% | 205.5ms → 52.1ms |      14 → 3 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |     Delta |      % |          Time | Contentions | Callee                              | Location                            |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------------------- | ----------------------------------- |
| -10.8% | -349.28ms | 100.0% | 3.22s → 2.88s |   162 → 133 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |             % |              Time | Contentions | Callee            | Location                                 |
| -----: | --------: | ------------: | ----------------: | ----------: | ----------------- | ---------------------------------------- |
|  -8.3% | -216.50ms | 85.9% → 84.2% |     2.59s → 2.38s |   135 → 118 | `park()`          | `java.util.concurrent.locks.LockSupport` |
|  +4.8% |  +20.56ms | 14.1% → 15.8% | 427.1ms → 447.6ms |     13 → 12 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change |     Delta |      % |             Time | Contentions | Callee                 | Location                            |
| -----: | --------: | -----: | ---------------: | ----------: | ---------------------- | ----------------------------------- |
| -74.6% | -153.35ms | 100.0% | 205.5ms → 52.1ms |      14 → 3 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change |     Delta |      % |             Time | Contentions | Callee      | Location                                               |
| -----: | --------: | -----: | ---------------: | ----------: | ----------- | ------------------------------------------------------ |
| -74.6% | -153.35ms | 100.0% | 205.5ms → 52.1ms |      14 → 3 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change |     Delta |            % |             Time | Contentions | Callee   | Location                                            |
| ------: | --------: | -----------: | ---------------: | ----------: | -------- | --------------------------------------------------- |
|  -74.6% | -153.35ms |       100.0% | 205.5ms → 52.1ms |      14 → 3 | `exec()` | `java.util.concurrent.RecursiveTask`                |
| removed |  -28.39ms | 13.8% → 0.0% |     28.4ms → 0ms |       2 → 0 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change |     Delta |      % |             Time | Contentions | Callee     | Location                            |
| -----: | --------: | -----: | ---------------: | ----------: | ---------- | ----------------------------------- |
| -74.6% | -153.35ms | 100.0% | 205.5ms → 52.1ms |      14 → 3 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time blocked in their leaf frame.

| Change |    Delta |            % |              Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -----: | -------: | -----------: | ----------------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|    new |  +7.051s | 0.0% → 71.0% |       0ms → 7.05s |      0 → 16 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000780121db90`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000780119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007801082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
|  +4.8% | +20.56ms |  3.6% → 4.5% | 427.1ms → 447.6ms |     13 → 12 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|    new | +20.14ms |  0.0% → 0.2% |      0ms → 20.1ms |       0 → 1 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### Improvements

Call stacks with the largest decrease in time blocked in their leaf frame.

|  Change |     Delta |             % |             Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------: | --------: | ------------: | ---------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |   -8.614s |  72.7% → 0.0% |      8.61s → 0ms |      16 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011f6c70`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001198798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|   -8.3% | -216.50ms | 21.9% → 24.0% |    2.59s → 2.38s |   135 → 118 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -68.4% |  -69.35ms |   0.9% → 0.3% | 101.4ms → 32.0ms |       7 → 2 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |  -18.57ms |   0.2% → 0.0% |     18.6ms → 0ms |       1 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |  -18.40ms |   0.2% → 0.0% |     18.4ms → 0ms |       1 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed |  -17.77ms |   0.2% → 0.0% |     17.8ms → 0ms |       1 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |  -14.36ms |   0.1% → 0.0% |     14.4ms → 0ms |       1 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |  -14.34ms |   0.1% → 0.0% |     14.3ms → 0ms |       1 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |  -10.62ms |   0.1% → 0.0% |     10.6ms → 0ms |       1 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
| removed |  -10.09ms |   0.1% → 0.0% |     10.1ms → 0ms |       1 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

# Sampling profile

Collected 1,370 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 90.7% |   1,242 |
| Standard library |  9.3% |     128 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 1,365 samples (99.6%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 1,365 samples (99.6%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       └── … 1,364 samples (99.6%) doExec() at java.util.concurrent.ForkJoinTask
│           ├── … 1,361 samples (99.3%) exec() at java.util.concurrent.RecursiveTask
│           │   └── 1,361 samples (99.3%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│           │       ├── 684 samples (49.9%, self 1.5%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│           │       │   ├── … 481 samples (35.1%, self 13.8%) findNearestCentroid() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│           │       │   │   └── 292 samples (21.3%) distance(Double[], Double[])
│           │       │   └── … 182 samples (13.3%, self 7.6%) collectClusters(int[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│           │       │       ├── 46 samples (3.4%, self 3.2%) computeIfAbsent(Object, Function) at java.util.HashMap
│           │       │       │   └── 2 samples (0.1%) apply(Object) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011e4b38
│           │       │       │       └── 2 samples (0.1%) lambda$collectClusters$0(Double[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│           │       │       └── … 32 samples (2.3%) copyOf(Object[], int) at java.util.Arrays
│           │       ├── 633 samples (46.2%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│           │       │   └── … 633 samples (46.2%, self 0.7%) vectorSum() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│           │       │       └── 623 samples (45.5%) accumulate(Double[], double[])
│           │       ├── … 21 samples (1.5%) merge(Map, Map) at org.renaissance.jdk.concurrent.JavaKMeans
│           │       │   ├── … 14 samples (1.0%) merge(Object, Object, BiFunction) at java.util.HashMap
│           │       │   └── 6 samples (0.4%) <init>(Map) at java.util.HashMap
│           │       │       └── 6 samples (0.4%) putMapEntries(Map, boolean)
│           │       │           ├── 3 samples (0.2%) next() at java.util.HashMap$EntryIterator
│           │       │           │   └── … 3 samples (0.2%) nextNode() at java.util.HashMap$HashIterator
│           │       │           ├── 1 sample (0.1%) putVal(int, Object, Object, boolean, boolean)
│           │       │           └── … 1 sample (0.1%) <init>(HashMap) at java.util.HashMap$HashIterator
│           │       ├── 19 samples (1.4%) join() at java.util.concurrent.ForkJoinTask
│           │       │   └── 18 samples (1.3%) awaitDone(int, long)
│           │       │       ├── 16 samples (1.2%) helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean) at java.util.concurrent.ForkJoinPool
│           │       │       └── 1 sample (0.1%) uncompensate() at java.util.concurrent.ForkJoinPool
│           │       ├── 1 sample (0.1%) fork() at java.util.concurrent.ForkJoinTask
│           │       │   └── 1 sample (0.1%) push(ForkJoinTask, ForkJoinPool, boolean) at java.util.concurrent.ForkJoinPool$WorkQueue
│           │       └── … 1 sample (0.1%) flatten(Node, IntFunction) at java.util.stream.Nodes
│           ├── … 2 samples (0.1%) unpark(Thread) at java.util.concurrent.locks.LockSupport
│           └── … 1 sample (0.1%) <init>(HashMap) at java.util.HashMap$Values
└── … 5 samples (0.4%) main(String[]) at org.renaissance.harness.RenaissanceSuite
    ├── … 4 samples (0.3%) executeBenchmark() at org.renaissance.harness.ExecutionDriver
    │   ├── … 3 samples (0.2%) wrapAndCopyInto(Sink, Spliterator) at java.util.stream.AbstractPipeline
    │   │   ├── … 2 samples (0.1%) accept(Object) at java.util.stream.ReduceOps$3ReducingSink
    │   │   └── … 1 sample (0.1%) wrapSink(Sink) at java.util.stream.AbstractPipeline
    │   └── … 1 sample (0.1%) apply(Object) at java.lang.ref.Cleaner$1
    └── … 1 sample (0.1%) countPositives(byte[], int, int) at java.lang.StringCoding
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                                                  | Location                                                   |
| ----: | ------: | --------------------------------------------------------- | ---------------------------------------------------------- |
| 45.5% |     623 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 21.3% |     292 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 13.8% |     189 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  7.6% |     104 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  3.2% |      44 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                        |
|  2.3% |      32 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                         |
|  1.5% |      21 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.2% |      16 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
|  1.0% |      14 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                        |
|  0.7% |      10 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.2% |       3 | `nextNode()`                                              | `java.util.HashMap$HashIterator`                           |
|  0.1% |       2 | `accept(Object)`                                          | `java.util.stream.ReduceOps$3ReducingSink`                 |
|  0.1% |       2 | `wrapSink(Sink)`                                          | `java.util.stream.AbstractPipeline`                        |
|  0.1% |       2 | `lambda$collectClusters$0(Double[])`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.1% |       2 | `unpark(Thread)`                                          | `java.util.concurrent.locks.LockSupport`                   |
|  0.1% |       1 | `countPositives(byte[], int, int)`                        | `java.lang.StringCoding`                                   |
|  0.1% |       1 | `apply(Object)`                                           | `java.lang.ref.Cleaner$1`                                  |
|  0.1% |       1 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
|  0.1% |       1 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
|  0.1% |       1 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Ours

|     % | Samples | Function                             | Location                                                   |
| ----: | ------: | ------------------------------------ | ---------------------------------------------------------- |
| 45.5% |     623 | `accumulate(Double[], double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 21.3% |     292 | `distance(Double[], Double[])`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 13.8% |     189 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  7.6% |     104 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.5% |      21 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.7% |      10 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.1% |       2 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.1% |       1 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |

##### Standard library

|    % | Samples | Function                                                  | Location                                      |
| ---: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 3.2% |      44 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                           |
| 2.3% |      32 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                            |
| 1.2% |      16 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| 1.0% |      14 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                           |
| 0.2% |       3 | `nextNode()`                                              | `java.util.HashMap$HashIterator`              |
| 0.1% |       2 | `accept(Object)`                                          | `java.util.stream.ReduceOps$3ReducingSink`    |
| 0.1% |       2 | `wrapSink(Sink)`                                          | `java.util.stream.AbstractPipeline`           |
| 0.1% |       2 | `unpark(Thread)`                                          | `java.util.concurrent.locks.LockSupport`      |
| 0.1% |       1 | `countPositives(byte[], int, int)`                        | `java.lang.StringCoding`                      |
| 0.1% |       1 | `apply(Object)`                                           | `java.lang.ref.Cleaner$1`                     |
| 0.1% |       1 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
| 0.1% |       1 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`           |
| 0.1% |       1 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| 0.1% |       1 | `putMapEntries(Map, boolean)`                             | `java.util.HashMap`                           |
| 0.1% |       1 | `push(ForkJoinTask, ForkJoinPool, boolean)`               | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 0.1% |       1 | `<init>(HashMap)`                                         | `java.util.HashMap$Values`                    |
| 0.1% |       1 | `flatten(Node, IntFunction)`                              | `java.util.stream.Nodes`                      |
| 0.1% |       1 | `uncompensate()`                                          | `java.util.concurrent.ForkJoinPool`           |
| 0.1% |       1 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                           |
| 0.1% |       1 | `forEachRemaining(Consumer)`                              | `java.util.Spliterator$OfDouble`              |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |     623 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |     292 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 93.7% |     177 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
|  5.8% |      11 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |
|  0.5% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 63.5% |      66 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
| 36.5% |      38 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |      44 | `java.util.HashMap:1219` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      32 | `java.util.Arrays:3482` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |      21 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:204` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 43.8% |       7 | `java.util.concurrent.ForkJoinPool:2053` |
| 31.3% |       5 | `java.util.concurrent.ForkJoinPool:2058` |
| 25.0% |       4 | `java.util.concurrent.ForkJoinPool:2039` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 71.4% |      10 | `java.util.HashMap:1384` |
| 28.6% |       4 | `java.util.HashMap:1371` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |      10 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       3 | `java.util.HashMap$HashIterator:1609` |

##### `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       2 | `java.util.stream.ReduceOps$3ReducingSink:169` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       2 | `java.util.stream.AbstractPipeline:546` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       2 | `java.util.concurrent.locks.LockSupport:181` |

##### `countPositives(byte[], int, int)` (`java.lang.StringCoding`)

|      % | Samples | Location                    |
| -----: | ------: | --------------------------- |
| 100.0% |       1 | `java.lang.StringCoding:51` |

##### `apply(Object)` (`java.lang.ref.Cleaner$1`)

|      % | Samples | Location                      |
| -----: | ------: | ----------------------------- |
| 100.0% |       1 | `java.lang.ref.Cleaner$1:143` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ForkJoinTask:423` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ForkJoinTask:651` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ForkJoinPool:1808` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:522` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1156` |

##### `<init>(HashMap)` (`java.util.HashMap$Values`)

|      % | Samples | Location                        |
| -----: | ------: | ------------------------------- |
| 100.0% |       1 | `java.util.HashMap$Values:1048` |

##### `flatten(Node, IntFunction)` (`java.util.stream.Nodes`)

|      % | Samples | Location                     |
| -----: | ------: | ---------------------------- |
| 100.0% |       1 | `java.util.stream.Nodes:465` |

##### `uncompensate()` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ForkJoinPool:2008` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:646` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfDouble`)

|      % | Samples | Location                             |
| -----: | ------: | ------------------------------------ |
| 100.0% |       1 | `java.util.Spliterator$OfDouble:846` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |     623 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     292 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     189 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     104 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |      44 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % | Samples | Caller      | Location              |
| -----: | ------: | ----------- | --------------------- |
| 100.0% |      32 | `grow(int)` | `java.util.ArrayList` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |      21 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |      16 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % | Samples | Caller                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |      14 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |      10 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|      % | Samples | Caller   | Location                          |
| -----: | ------: | -------- | --------------------------------- |
| 100.0% |       3 | `next()` | `java.util.HashMap$EntryIterator` |

##### `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`)

|      % | Samples | Caller        | Location                           |
| -----: | ------: | ------------- | ---------------------------------- |
| 100.0% |       2 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|      % | Samples | Caller                               | Location                            |
| -----: | ------: | ------------------------------------ | ----------------------------------- |
| 100.0% |       2 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller          | Location                                                                              |
| -----: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| 100.0% |       2 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011e4b38` |

##### `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Caller            | Location                            |
| -----: | ------: | ----------------- | ----------------------------------- |
| 100.0% |       2 | `signalWaiters()` | `java.util.concurrent.ForkJoinTask` |

##### `countPositives(byte[], int, int)` (`java.lang.StringCoding`)

|      % | Samples | Caller                             | Location             |
| -----: | ------: | ---------------------------------- | -------------------- |
| 100.0% |       1 | `countPositives(byte[], int, int)` | `java.lang.System$2` |

##### `apply(Object)` (`java.lang.ref.Cleaner$1`)

|      % | Samples | Caller                    | Location                       |
| -----: | ------: | ------------------------- | ------------------------------ |
| 100.0% |       1 | `getCleanerImpl(Cleaner)` | `jdk.internal.ref.CleanerImpl` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |       1 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |       1 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller                     | Location                                                   |
| -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% |       1 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller        | Location            |
| -----: | ------: | ------------- | ------------------- |
| 100.0% |       1 | `<init>(Map)` | `java.util.HashMap` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |       1 | `fork()` | `java.util.concurrent.ForkJoinTask` |

##### `<init>(HashMap)` (`java.util.HashMap$Values`)

|      % | Samples | Caller     | Location            |
| -----: | ------: | ---------- | ------------------- |
| 100.0% |       1 | `values()` | `java.util.HashMap` |

##### `flatten(Node, IntFunction)` (`java.util.stream.Nodes`)

|      % | Samples | Caller                 | Location                             |
| -----: | ------: | ---------------------- | ------------------------------------ |
| 100.0% |       1 | `toArray(IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `uncompensate()` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |       1 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller                        | Location            |
| -----: | ------: | ----------------------------- | ------------------- |
| 100.0% |       1 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfDouble`)

|      % | Samples | Caller                        | Location                            |
| -----: | ------: | ----------------------------- | ----------------------------------- |
| 100.0% |       1 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                                  | Location                                                   |
| ----: | ------: | --------------------------------------------------------- | ---------------------------------------------------------- |
| 99.6% |   1,365 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
| 99.6% |   1,365 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                |
| 99.6% |   1,364 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| 99.6% |   1,364 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 99.6% |   1,364 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                        |
| 99.4% |   1,362 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| 99.4% |   1,362 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                       |
| 96.9% |   1,327 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
| 96.8% |   1,326 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
| 96.0% |   1,315 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 49.9% |     684 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 46.2% |     633 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 46.2% |     633 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 45.5% |     623 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 35.1% |     481 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 30.6% |     419 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
| 27.3% |     374 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| 21.3% |     292 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 17.8% |     244 | `computeClusterAverages()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 17.8% |     244 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Ours

|     % | Samples | Function                                                    | Location                                                               |
| ----: | ------: | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
| 99.4% |   1,362 | `compute()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 49.9% |     684 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 46.2% |     633 | `vectorSum()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 46.2% |     633 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 45.5% |     623 | `accumulate(Double[], double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 35.1% |     481 | `findNearestCentroid()`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 21.3% |     292 | `distance(Double[], Double[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 17.8% |     244 | `computeClusterAverages()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 17.8% |     244 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 17.7% |     242 | `average(List)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 16.4% |     224 | `lambda$run$0(int, List, int)`                              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 16.4% |     224 | `call()`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0` |
| 13.3% |     182 | `collectClusters(int[])`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  1.5% |      21 | `merge(Map, Map)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  1.5% |      21 | `combineResults(Map, Map)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  1.5% |      21 | `combineResults(Object, Object)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  1.0% |      14 | `lambda$merge$7(Map, Object, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  1.0% |      14 | `accept(Object, Object)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88` |
|  0.4% |       5 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite`                             |
|  0.4% |       5 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                                        |

##### Standard library

|     % | Samples | Function                                                  | Location                                            |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------------- |
| 99.6% |   1,365 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
| 99.6% |   1,365 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`         |
| 99.6% |   1,364 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| 99.6% |   1,364 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 99.6% |   1,364 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                 |
| 99.4% |   1,362 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                |
| 96.9% |   1,327 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                 |
| 96.8% |   1,326 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                 |
| 96.0% |   1,315 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 30.6% |     419 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                 |
| 27.3% |     374 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| 16.4% |     224 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  3.4% |      46 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                 |
|  2.3% |      32 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                  |
|  2.3% |      32 | `grow(int)`                                               | `java.util.ArrayList`                               |
|  2.3% |      32 | `grow()`                                                  | `java.util.ArrayList`                               |
|  2.3% |      32 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                               |
|  2.3% |      32 | `add(Object)`                                             | `java.util.ArrayList`                               |
|  1.0% |      14 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                 |
|  1.0% |      14 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                 |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |   1,365 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller                                                    | Location                                      |
| -----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 100.0% |   1,364 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  96.4% |   1,315 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  29.8% |     407 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  27.4% |     374 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                                   | Location                            |
| -----: | ------: | ---------------------------------------- | ----------------------------------- |
| 100.0% |   1,364 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |   1,364 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller   | Location                             |
| -----: | ------: | -------- | ------------------------------------ |
| 100.0% |   1,362 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   1,362 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |   1,327 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |   1,326 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |   1,315 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     684 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 100.0% |     684 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     633 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     633 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |     633 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |     623 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     481 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |     419 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Caller                         | Location                                               |
| ----: | ------: | ------------------------------ | ------------------------------------------------------ |
| 64.7% |     242 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 59.6% |     223 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     292 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller              | Location                                               |
| -----: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% |     244 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller              | Location                                               |
| -----: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% |     244 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     244 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     242 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |     224 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0`)

|      % | Samples | Caller   | Location                                            |
| -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% |     224 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     224 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     182 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |      46 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % | Samples | Caller      | Location              |
| -----: | ------: | ----------- | --------------------- |
| 100.0% |      32 | `grow(int)` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

|      % | Samples | Caller   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% |      32 | `grow()` | `java.util.ArrayList` |

##### `grow()` (`java.util.ArrayList`)

|      % | Samples | Caller                       | Location              |
| -----: | ------: | ---------------------------- | --------------------- |
| 100.0% |      32 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % | Samples | Caller        | Location              |
| -----: | ------: | ------------- | --------------------- |
| 100.0% |      32 | `add(Object)` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |      32 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller                     | Location                                                   |
| -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% |      21 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                           | Location                                                   |
| -----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 100.0% |      21 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |      21 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller                   | Location                                                               |
| -----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% |      14 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88`)

|      % | Samples | Caller                | Location            |
| -----: | ------: | --------------------- | ------------------- |
| 100.0% |      14 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % | Samples | Caller                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |      14 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |      14 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % | Samples | Caller                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |       5 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Caller                                 | Location                        |
| -----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% |       5 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                   | Location                            |
| ----: | ------: | ---------------------------------------- | ----------------------------------- |
| 99.9% |   1,364 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |   1,365 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee      | Location                                            |
| ----: | ------: | ----------- | --------------------------------------------------- |
| 99.9% |   1,362 | `exec()`    | `java.util.concurrent.RecursiveTask`                |
| 16.4% |     224 | `exec()`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  0.1% |       2 | `setDone()` | `java.util.concurrent.ForkJoinTask`                 |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   1,364 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Callee                                               | Location                                      |
| -----: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% |   1,364 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 97.4% |   1,327 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 50.2% |     684 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 46.5% |     633 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 17.9% |     244 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  1.5% |      21 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Callee      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |   1,362 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee                 | Location                            |
| ----: | ------: | ---------------------- | ----------------------------------- |
| 99.9% |   1,326 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee                                                    | Location                                      |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 99.2% |   1,315 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 31.6% |     419 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  0.1% |       1 | `uncompensate()`                                          | `java.util.concurrent.ForkJoinPool`           |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   1,315 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |     684 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  70.3% |     481 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  26.6% |     182 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                           | Location                                                  |
| ----: | ------: | -------------------------------- | --------------------------------------------------------- |
| 98.4% |     623 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Callee              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     633 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |     633 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                         | Location                                                   |
| ----: | ------: | ------------------------------ | ---------------------------------------------------------- |
| 60.7% |     292 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee     | Location                            |
| ----: | ------: | ---------- | ----------------------------------- |
| 97.1% |     407 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     374 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee            | Location                                               |
| ----: | ------: | ----------------- | ------------------------------------------------------ |
| 99.2% |     242 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  1.2% |       3 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     244 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     244 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     242 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee                    | Location                                               |
| ----: | ------: | ------------------------- | ------------------------------------------------------ |
| 99.6% |     223 | `invoke()`                | `java.util.concurrent.ForkJoinTask`                    |
|  0.4% |       1 | `<init>(JavaKMeans, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0`)

|      % | Samples | Callee                         | Location                                    |
| -----: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% |     224 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Callee   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |     224 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                              | Location              |
| ----: | ------: | ----------------------------------- | --------------------- |
| 25.3% |      46 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |
| 17.6% |      32 | `add(Object)`                       | `java.util.ArrayList` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|    % | Samples | Callee          | Location                                                                              |
| ---: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| 4.3% |       2 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011e4b38` |

##### `grow(int)` (`java.util.ArrayList`)

|      % | Samples | Callee                  | Location           |
| -----: | ------: | ----------------------- | ------------------ |
| 100.0% |      32 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `grow()` (`java.util.ArrayList`)

|      % | Samples | Callee      | Location              |
| -----: | ------: | ----------- | --------------------- |
| 100.0% |      32 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % | Samples | Callee   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% |      32 | `grow()` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

|      % | Samples | Callee                       | Location              |
| -----: | ------: | ---------------------------- | --------------------- |
| 100.0% |      32 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee                | Location            |
| ----: | ------: | --------------------- | ------------------- |
| 66.7% |      14 | `forEach(BiConsumer)` | `java.util.HashMap` |
| 28.6% |       6 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |      21 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                     | Location                                                   |
| -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% |      21 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee                              | Location            |
| -----: | ------: | ----------------------------------- | ------------------- |
| 100.0% |      14 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88`)

|      % | Samples | Callee                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |      14 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % | Samples | Callee                   | Location                                                               |
| -----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% |      14 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|     % | Samples | Callee              | Location                                    |
| ----: | ------: | ------------------- | ------------------------------------------- |
| 80.0% |       4 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
| 20.0% |       1 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Callee                     | Location                   |
| -----: | ------: | -------------------------- | -------------------------- |
| 100.0% |       5 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 4.0% |      55 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 4.0% |      55 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 3.4% |      46 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3.1% |      43 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2.6% |      36 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2.6% |      36 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) |
| 2.6% |      35 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 2.5% |      34 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.3% |      32 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2.1% |      29 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)               |
| 2.0% |      27 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.8% |      25 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.7% |      23 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.7% |      23 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.5% |      20 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.4% |      19 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.4% |      19 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.3% |      18 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.3% |      18 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                  |
| 1.2% |      17 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

# Native method sample profile

Collected 9 samples.

| Category         |      % | Native method samples |
| ---------------- | -----: | --------------------: |
| Standard library | 100.0% |                     9 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 5 samples (55.6%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 5 samples (55.6%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       ├── 3 samples (33.3%) scan(ForkJoinPool$WorkQueue, int, int)
│       │   └── 3 samples (33.3%) topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool$WorkQueue
│       │       └── 3 samples (33.3%) doExec() at java.util.concurrent.ForkJoinTask
│       │           ├── … 2 samples (22.2%) exec() at java.util.concurrent.RecursiveTask
│       │           │   └── 2 samples (22.2%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│       │           │       ├── … 1 sample (11.1%) hashCode() at java.lang.Object
│       │           │       └── … 1 sample (11.1%) unpark(Object) at jdk.internal.misc.Unsafe
│       │           └── 1 sample (11.1%) setDone()
│       │               └── 1 sample (11.1%) signalWaiters()
│       │                   └── 1 sample (11.1%) unpark(Thread) at java.util.concurrent.locks.LockSupport
│       │                       └── 1 sample (11.1%, self 22.2% globally) unpark(Object) at jdk.internal.misc.Unsafe
│       └── 2 samples (22.2%) awaitWork(ForkJoinPool$WorkQueue)
│           └── 2 samples (22.2%) park() at java.util.concurrent.locks.LockSupport
│               └── 2 samples (22.2%) park(boolean, long) at jdk.internal.misc.Unsafe
└── 4 samples (44.4%) main(String[]) at org.renaissance.core.Launcher
    └── 4 samples (44.4%) launchHarnessClass(String, String[])
        └── 4 samples (44.4%) loadAndInvokeHarnessClass(ModuleLoader, String, String[])
            ├── 2 samples (22.2%) createClassLoaderForModule(String) at org.renaissance.core.ModuleLoader
            │   └── 2 samples (22.2%) extractResources(Iterable, Path) at org.renaissance.core.ResourceUtils
            │       └── 2 samples (22.2%) extractResource(String, Path)
            │           └── 2 samples (22.2%) copy(InputStream, Path, CopyOption[]) at java.nio.file.Files
            │               └── 2 samples (22.2%) transferTo(OutputStream) at java.io.InputStream
            │                   └── 2 samples (22.2%) read(byte[], int, int) at java.io.FilterInputStream
            │                       └── 2 samples (22.2%) read(byte[], int, int) at java.util.zip.InflaterInputStream
            │                           └── 2 samples (22.2%) inflate(byte[], int, int) at java.util.zip.Inflater
            │                               └── 2 samples (22.2%, self 33.3% globally) inflateBytesBytes(long, byte[], int, int, byte[], int, int)
            └── 2 samples (22.2%) invoke(Object, Object[]) at java.lang.reflect.Method
                └── 2 samples (22.2%) invoke(Object, Object[]) at jdk.internal.reflect.DirectMethodHandleAccessor
                    └── 2 samples (22.2%) invokeImpl(Object, Object[])
                        └── 2 samples (22.2%) invokeExact_MT(Object, Object, Object, Object) at java.lang.invoke.Invokers$Holder
                            └── 2 samples (22.2%) invoke(Object, Object, Object) at java.lang.invoke.LambdaForm$MH.0x0000007001082400
                                └── 2 samples (22.2%) invokeStatic(Object, Object) at java.lang.invoke.LambdaForm$DMH.0x0000007001001c00
                                    └── 2 samples (22.2%) main(String[]) at org.renaissance.harness.RenaissanceSuite
                                        └── 2 samples (22.2%) main(String[]) at org.renaissance.harness.RenaissanceSuite$
                                            ├── … 1 sample (11.1%) read(byte[], int, int) at java.util.zip.InflaterInputStream
                                            │   └── 1 sample (11.1%) inflate(byte[], int, int) at java.util.zip.Inflater
                                            │       └── 1 sample (11.1%) inflateBytesBytes(long, byte[], int, int, byte[], int, int)
                                            └── … 1 sample (11.1%) isArray() at java.lang.Class
```

## Hottest functions

### Self native method samples

Functions with the most samples collected within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Standard library

|     % | Native method samples | Function                                                      | Location                   |
| ----: | --------------------: | ------------------------------------------------------------- | -------------------------- |
| 33.3% |                     3 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`   |
| 22.2% |                     2 | `park(boolean, long)`                                         | `jdk.internal.misc.Unsafe` |
| 22.2% |                     2 | `unpark(Object)`                                              | `jdk.internal.misc.Unsafe` |
| 11.1% |                     1 | `isArray()`                                                   | `java.lang.Class`          |
| 11.1% |                     1 | `hashCode()`                                                  | `java.lang.Object`         |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Native method samples | Caller                      | Location                 |
| -----: | --------------------: | --------------------------- | ------------------------ |
| 100.0% |                     3 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|      % | Native method samples | Caller   | Location                                 |
| -----: | --------------------: | -------- | ---------------------------------------- |
| 100.0% |                     2 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `unpark(Object)` (`jdk.internal.misc.Unsafe`)

|      % | Native method samples | Caller           | Location                                 |
| -----: | --------------------: | ---------------- | ---------------------------------------- |
| 100.0% |                     2 | `unpark(Thread)` | `java.util.concurrent.locks.LockSupport` |

##### `isArray()` (`java.lang.Class`)

|      % | Native method samples | Caller               | Location          |
| -----: | --------------------: | -------------------- | ----------------- |
| 100.0% |                     1 | `getComponentType()` | `java.lang.Class` |

##### `hashCode()` (`java.lang.Object`)

|      % | Native method samples | Caller         | Location            |
| -----: | --------------------: | -------------- | ------------------- |
| 100.0% |                     1 | `hash(Object)` | `java.util.HashMap` |

### Total native method samples

Functions with the most samples collected within the function and its callees.

|     % | Native method samples | Function                                                      | Location                                             |
| ----: | --------------------: | ------------------------------------------------------------- | ---------------------------------------------------- |
| 55.6% |                     5 | `runWorker(ForkJoinPool$WorkQueue)`                           | `java.util.concurrent.ForkJoinPool`                  |
| 55.6% |                     5 | `run()`                                                       | `java.util.concurrent.ForkJoinWorkerThread`          |
| 44.4% |                     4 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`   | `org.renaissance.core.Launcher`                      |
| 44.4% |                     4 | `launchHarnessClass(String, String[])`                        | `org.renaissance.core.Launcher`                      |
| 44.4% |                     4 | `main(String[])`                                              | `org.renaissance.core.Launcher`                      |
| 33.3% |                     3 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                             |
| 33.3% |                     3 | `inflate(byte[], int, int)`                                   | `java.util.zip.Inflater`                             |
| 33.3% |                     3 | `read(byte[], int, int)`                                      | `java.util.zip.InflaterInputStream`                  |
| 33.3% |                     3 | `transferTo(OutputStream)`                                    | `java.io.InputStream`                                |
| 33.3% |                     3 | `copy(InputStream, Path, CopyOption[])`                       | `java.nio.file.Files`                                |
| 33.3% |                     3 | `extractResource(String, Path)`                               | `org.renaissance.core.ResourceUtils`                 |
| 33.3% |                     3 | `extractResources(Iterable, Path)`                            | `org.renaissance.core.ResourceUtils`                 |
| 33.3% |                     3 | `createClassLoaderForModule(String)`                          | `org.renaissance.core.ModuleLoader`                  |
| 33.3% |                     3 | `doExec()`                                                    | `java.util.concurrent.ForkJoinTask`                  |
| 33.3% |                     3 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`          | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
| 33.3% |                     3 | `scan(ForkJoinPool$WorkQueue, int, int)`                      | `java.util.concurrent.ForkJoinPool`                  |
| 22.2% |                     2 | `read(byte[], int, int)`                                      | `java.io.FilterInputStream`                          |
| 22.2% |                     2 | `main(String[])`                                              | `org.renaissance.harness.RenaissanceSuite$`          |
| 22.2% |                     2 | `main(String[])`                                              | `org.renaissance.harness.RenaissanceSuite`           |
| 22.2% |                     2 | `invokeStatic(Object, Object)`                                | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Standard library

|     % | Native method samples | Function                                                      | Location                                             |
| ----: | --------------------: | ------------------------------------------------------------- | ---------------------------------------------------- |
| 55.6% |                     5 | `runWorker(ForkJoinPool$WorkQueue)`                           | `java.util.concurrent.ForkJoinPool`                  |
| 55.6% |                     5 | `run()`                                                       | `java.util.concurrent.ForkJoinWorkerThread`          |
| 33.3% |                     3 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                             |
| 33.3% |                     3 | `inflate(byte[], int, int)`                                   | `java.util.zip.Inflater`                             |
| 33.3% |                     3 | `read(byte[], int, int)`                                      | `java.util.zip.InflaterInputStream`                  |
| 33.3% |                     3 | `transferTo(OutputStream)`                                    | `java.io.InputStream`                                |
| 33.3% |                     3 | `copy(InputStream, Path, CopyOption[])`                       | `java.nio.file.Files`                                |
| 33.3% |                     3 | `doExec()`                                                    | `java.util.concurrent.ForkJoinTask`                  |
| 33.3% |                     3 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`          | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
| 33.3% |                     3 | `scan(ForkJoinPool$WorkQueue, int, int)`                      | `java.util.concurrent.ForkJoinPool`                  |
| 22.2% |                     2 | `read(byte[], int, int)`                                      | `java.io.FilterInputStream`                          |
| 22.2% |                     2 | `invokeStatic(Object, Object)`                                | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
| 22.2% |                     2 | `invoke(Object, Object, Object)`                              | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`  |
| 22.2% |                     2 | `invokeExact_MT(Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                   |
| 22.2% |                     2 | `invokeImpl(Object, Object[])`                                | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 22.2% |                     2 | `invoke(Object, Object[])`                                    | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 22.2% |                     2 | `invoke(Object, Object[])`                                    | `java.lang.reflect.Method`                           |
| 22.2% |                     2 | `exec()`                                                      | `java.util.concurrent.RecursiveTask`                 |
| 22.2% |                     2 | `park(boolean, long)`                                         | `jdk.internal.misc.Unsafe`                           |
| 22.2% |                     2 | `park()`                                                      | `java.util.concurrent.locks.LockSupport`             |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Native method samples | Caller  | Location                                    |
| -----: | --------------------: | ------- | ------------------------------------------- |
| 100.0% |                     5 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % | Native method samples | Caller                                 | Location                        |
| -----: | --------------------: | -------------------------------------- | ------------------------------- |
| 100.0% |                     4 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % | Native method samples | Caller           | Location                        |
| -----: | --------------------: | ---------------- | ------------------------------- |
| 100.0% |                     4 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Native method samples | Caller                      | Location                 |
| -----: | --------------------: | --------------------------- | ------------------------ |
| 100.0% |                     3 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Native method samples | Caller                   | Location                            |
| -----: | --------------------: | ------------------------ | ----------------------------------- |
| 100.0% |                     3 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|     % | Native method samples | Caller                   | Location                       |
| ----: | --------------------: | ------------------------ | ------------------------------ |
| 66.7% |                     2 | `read(byte[], int, int)` | `java.io.FilterInputStream`    |
| 33.3% |                     1 | `getBytes()`             | `jdk.internal.loader.Resource` |

##### `transferTo(OutputStream)` (`java.io.InputStream`)

|      % | Native method samples | Caller                                  | Location              |
| -----: | --------------------: | --------------------------------------- | --------------------- |
| 100.0% |                     3 | `copy(InputStream, Path, CopyOption[])` | `java.nio.file.Files` |

##### `copy(InputStream, Path, CopyOption[])` (`java.nio.file.Files`)

|      % | Native method samples | Caller                          | Location                             |
| -----: | --------------------: | ------------------------------- | ------------------------------------ |
| 100.0% |                     3 | `extractResource(String, Path)` | `org.renaissance.core.ResourceUtils` |

##### `extractResource(String, Path)` (`org.renaissance.core.ResourceUtils`)

|      % | Native method samples | Caller                             | Location                             |
| -----: | --------------------: | ---------------------------------- | ------------------------------------ |
| 100.0% |                     3 | `extractResources(Iterable, Path)` | `org.renaissance.core.ResourceUtils` |

##### `extractResources(Iterable, Path)` (`org.renaissance.core.ResourceUtils`)

|      % | Native method samples | Caller                               | Location                            |
| -----: | --------------------: | ------------------------------------ | ----------------------------------- |
| 100.0% |                     3 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |

##### `createClassLoaderForModule(String)` (`org.renaissance.core.ModuleLoader`)

|     % | Native method samples | Caller                                                      | Location                              |
| ----: | --------------------: | ----------------------------------------------------------- | ------------------------------------- |
| 66.7% |                     2 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`       |
| 33.3% |                     1 | `getBenchmarkClassLoader(BenchmarkDescriptor)`              | `org.renaissance.core.BenchmarkSuite` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % | Native method samples | Caller                                               | Location                                      |
| -----: | --------------------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% |                     3 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  33.3% |                     1 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Native method samples | Caller                                   | Location                            |
| -----: | --------------------: | ---------------------------------------- | ----------------------------------- |
| 100.0% |                     3 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % | Native method samples | Caller                              | Location                            |
| -----: | --------------------: | ----------------------------------- | ----------------------------------- |
| 100.0% |                     3 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `read(byte[], int, int)` (`java.io.FilterInputStream`)

|      % | Native method samples | Caller                     | Location              |
| -----: | --------------------: | -------------------------- | --------------------- |
| 100.0% |                     2 | `transferTo(OutputStream)` | `java.io.InputStream` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % | Native method samples | Caller           | Location                                   |
| -----: | --------------------: | ---------------- | ------------------------------------------ |
| 100.0% |                     2 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % | Native method samples | Caller                         | Location                                             |
| -----: | --------------------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |                     2 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`)

|      % | Native method samples | Caller                           | Location                                            |
| -----: | --------------------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |                     2 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001082400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`)

|      % | Native method samples | Caller                                           | Location                           |
| -----: | --------------------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |                     2 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Native method samples | Caller                         | Location                                          |
| -----: | --------------------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |                     2 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Native method samples | Caller                     | Location                                          |
| -----: | --------------------: | -------------------------- | ------------------------------------------------- |
| 100.0% |                     2 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Native method samples | Caller                     | Location                   |
| -----: | --------------------: | -------------------------- | -------------------------- |
| 100.0% |                     2 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % | Native method samples | Caller                                                      | Location                        |
| -----: | --------------------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% |                     2 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Native method samples | Caller     | Location                            |
| -----: | --------------------: | ---------- | ----------------------------------- |
| 100.0% |                     2 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|      % | Native method samples | Caller   | Location                                 |
| -----: | --------------------: | -------- | ---------------------------------------- |
| 100.0% |                     2 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % | Native method samples | Caller                              | Location                            |
| -----: | --------------------: | ----------------------------------- | ----------------------------------- |
| 100.0% |                     2 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Native method samples | Callee                                   | Location                            |
| ----: | --------------------: | ---------------------------------------- | ----------------------------------- |
| 60.0% |                     3 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |
| 40.0% |                     2 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Native method samples | Callee                              | Location                            |
| -----: | --------------------: | ----------------------------------- | ----------------------------------- |
| 100.0% |                     5 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|     % | Native method samples | Callee                               | Location                            |
| ----: | --------------------: | ------------------------------------ | ----------------------------------- |
| 50.0% |                     2 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |
| 50.0% |                     2 | `invoke(Object, Object[])`           | `java.lang.reflect.Method`          |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % | Native method samples | Callee                                                      | Location                        |
| -----: | --------------------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% |                     4 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % | Native method samples | Callee                                 | Location                        |
| -----: | --------------------: | -------------------------------------- | ------------------------------- |
| 100.0% |                     4 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Native method samples | Callee                                                        | Location                 |
| -----: | --------------------: | ------------------------------------------------------------- | ------------------------ |
| 100.0% |                     3 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|      % | Native method samples | Callee                      | Location                 |
| -----: | --------------------: | --------------------------- | ------------------------ |
| 100.0% |                     3 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `transferTo(OutputStream)` (`java.io.InputStream`)

|     % | Native method samples | Callee                    | Location                         |
| ----: | --------------------: | ------------------------- | -------------------------------- |
| 66.7% |                     2 | `read(byte[], int, int)`  | `java.io.FilterInputStream`      |
| 33.3% |                     1 | `write(byte[], int, int)` | `sun.nio.ch.ChannelOutputStream` |

##### `copy(InputStream, Path, CopyOption[])` (`java.nio.file.Files`)

|      % | Native method samples | Callee                     | Location              |
| -----: | --------------------: | -------------------------- | --------------------- |
| 100.0% |                     3 | `transferTo(OutputStream)` | `java.io.InputStream` |

##### `extractResource(String, Path)` (`org.renaissance.core.ResourceUtils`)

|      % | Native method samples | Callee                                  | Location              |
| -----: | --------------------: | --------------------------------------- | --------------------- |
| 100.0% |                     3 | `copy(InputStream, Path, CopyOption[])` | `java.nio.file.Files` |

##### `extractResources(Iterable, Path)` (`org.renaissance.core.ResourceUtils`)

|      % | Native method samples | Callee                          | Location                             |
| -----: | --------------------: | ------------------------------- | ------------------------------------ |
| 100.0% |                     3 | `extractResource(String, Path)` | `org.renaissance.core.ResourceUtils` |

##### `createClassLoaderForModule(String)` (`org.renaissance.core.ModuleLoader`)

|      % | Native method samples | Callee                             | Location                             |
| -----: | --------------------: | ---------------------------------- | ------------------------------------ |
| 100.0% |                     3 | `extractResources(Iterable, Path)` | `org.renaissance.core.ResourceUtils` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|     % | Native method samples | Callee      | Location                             |
| ----: | --------------------: | ----------- | ------------------------------------ |
| 66.7% |                     2 | `exec()`    | `java.util.concurrent.RecursiveTask` |
| 33.3% |                     1 | `setDone()` | `java.util.concurrent.ForkJoinTask`  |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Native method samples | Callee     | Location                            |
| -----: | --------------------: | ---------- | ----------------------------------- |
| 100.0% |                     3 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % | Native method samples | Callee                                               | Location                                      |
| -----: | --------------------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% |                     3 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `read(byte[], int, int)` (`java.io.FilterInputStream`)

|      % | Native method samples | Callee                   | Location                            |
| -----: | --------------------: | ------------------------ | ----------------------------------- |
| 100.0% |                     2 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|     % | Native method samples | Callee                                                                        | Location                                    |
| ----: | --------------------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 50.0% |                     1 | `<init>(Map)`                                                                 | `org.renaissance.harness.ConfigParser`      |
| 50.0% |                     1 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % | Native method samples | Callee           | Location                                    |
| -----: | --------------------: | ---------------- | ------------------------------------------- |
| 100.0% |                     2 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`)

|      % | Native method samples | Callee           | Location                                   |
| -----: | --------------------: | ---------------- | ------------------------------------------ |
| 100.0% |                     2 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`)

|      % | Native method samples | Callee                         | Location                                             |
| -----: | --------------------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |                     2 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % | Native method samples | Callee                           | Location                                            |
| -----: | --------------------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |                     2 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001082400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Native method samples | Callee                                           | Location                           |
| -----: | --------------------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% |                     2 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % | Native method samples | Callee                         | Location                                          |
| -----: | --------------------: | ------------------------------ | ------------------------------------------------- |
| 100.0% |                     2 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % | Native method samples | Callee                     | Location                                          |
| -----: | --------------------: | -------------------------- | ------------------------------------------------- |
| 100.0% |                     2 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Native method samples | Callee      | Location                                               |
| -----: | --------------------: | ----------- | ------------------------------------------------------ |
| 100.0% |                     2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % | Native method samples | Callee                | Location                   |
| -----: | --------------------: | --------------------- | -------------------------- |
| 100.0% |                     2 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

|     % | Native method samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----: | --------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 22.2% |                     2 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `read(byte[], int, int)` (`java.io.FilterInputStream`) ← `transferTo(OutputStream)` (`java.io.InputStream`) ← `copy(InputStream, Path, CopyOption[])` (`java.nio.file.Files`) ← `extractResource(String, Path)` (`org.renaissance.core.ResourceUtils`) ← `extractResources(Iterable, Path)` ← `createClassLoaderForModule(String)` (`org.renaissance.core.ModuleLoader`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 22.2% |                     2 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 11.1% |                     1 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`) ← `inflate(byte[], int, int)` ← `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`) ← `getBytes()` (`jdk.internal.loader.Resource`) ← `getBytes()` (`jdk.internal.loader.URLClassPath$JarLoader$2`) ← `defineClass(String, Resource)` (`java.net.URLClassLoader`) ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `liftedTree1$1()` (`scopt.Read$`) ← `<clinit>()` ← `head(Seq)` (`scopt.OptionParser`) ← `<init>(Map)` (`org.renaissance.harness.ConfigParser$$anon$1`) ← `createParser(Map)` (`org.renaissance.harness.ConfigParser`) ← `<init>(Map)` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 11.1% |                     1 | `isArray()` (`java.lang.Class`) ← `getComponentType()` ← `checkPrimitiveArray(Class)` (`jdk.internal.misc.Unsafe`) ← `checkPrimitivePointer(Object, long)` ← `copyMemoryChecks(Object, long, Object, long, long)` ← `copyMemory(Object, long, Object, long, long)` ← `copyMemoryInternal(MemorySessionImpl, MemorySessionImpl, Object, long, Object, long, long)` (`jdk.internal.misc.ScopedMemoryAccess`) ← `copyMemory(MemorySessionImpl, MemorySessionImpl, Object, long, Object, long, long)` ← `putBuffer(int, ByteBuffer, int, int)` (`java.nio.ByteBuffer`) ← `put(ByteBuffer)` ← `write(FileDescriptor, ByteBuffer, long, boolean, boolean, int, NativeDispatcher)` (`sun.nio.ch.IOUtil`) ← `write(FileDescriptor, ByteBuffer, long, boolean, int, NativeDispatcher)` ← `write(ByteBuffer)` (`sun.nio.ch.FileChannelImpl`) ← `writeFully(ByteBuffer)` (`sun.nio.ch.ChannelOutputStream`) ← `write(byte[], int, int)` ← `transferTo(OutputStream)` (`java.io.InputStream`) ← `copy(InputStream, Path, CopyOption[])` (`java.nio.file.Files`) ← `extractResource(String, Path)` (`org.renaissance.core.ResourceUtils`) ← `extractResources(Iterable, Path)` ← `createClassLoaderForModule(String)` (`org.renaissance.core.ModuleLoader`) ← `getBenchmarkClassLoader(BenchmarkDescriptor)` (`org.renaissance.core.BenchmarkSuite`) ← `createBenchmark(BenchmarkDescriptor)` ← `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001178798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
| 11.1% |                     1 | `hashCode()` (`java.lang.Object`) ← `hash(Object)` (`java.util.HashMap`) ← `put(Object, Object)` ← `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 11.1% |                     1 | `unpark(Object)` (`jdk.internal.misc.Unsafe`) ← `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`) ← `signalWaiters()` (`java.util.concurrent.ForkJoinTask`) ← `setDone()` ← `doExec()` ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 11.1% |                     1 | `unpark(Object)` (`jdk.internal.misc.Unsafe`) ← `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`) ← `tryCompensate(long, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

# Allocated heap profile

Allocated 37.8 GiB over 2,406 samples (16.1 MiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Standard library | 95.5% | 36.1 GiB |   2,276 |
| Ours             |  4.5% | 1.72 GiB |     129 |
| Unknown          | <0.1% | 1.95 KiB |       1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 37.6 GiB (99.4%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 37.6 GiB (99.4%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       └── 37.6 GiB (99.4%) scan(ForkJoinPool$WorkQueue, int, int)
│           └── 37.6 GiB (99.4%) topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool$WorkQueue
│               └── 37.6 GiB (99.4%) doExec() at java.util.concurrent.ForkJoinTask
│                   └── … 37.6 GiB (99.4%) exec() at java.util.concurrent.RecursiveTask
│                       └── 37.6 GiB (99.4%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│                           ├── 31.9 GiB (84.4%) combineResults(Object, Object) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           │   └── 31.9 GiB (84.4%) combineResults(Map, Map)
│                           │       └── 31.9 GiB (84.4%) merge(Map, Map) at org.renaissance.jdk.concurrent.JavaKMeans
│                           │           └── 31.9 GiB (84.2%) forEach(BiConsumer) at java.util.HashMap
│                           │               └── 31.9 GiB (84.2%) accept(Object, Object) at org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88
│                           │                   └── 31.9 GiB (84.2%) lambda$merge$7(Map, Object, List) at org.renaissance.jdk.concurrent.JavaKMeans
│                           │                       └── 31.9 GiB (84.2%) merge(Object, Object, BiFunction) at java.util.HashMap
│                           │                           └── 31.9 GiB (84.2%) apply(Object, Object) at org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0
│                           │                               └── 31.9 GiB (84.2%) lambda$merge$6(List, List) at org.renaissance.jdk.concurrent.JavaKMeans
│                           │                                   ├── 24.1 GiB (63.7%) addAll(Collection) at java.util.ArrayList
│                           │                                   │   ├── 14 GiB (37.0%) grow(int)
│                           │                                   │   │   └── 14 GiB (37.0%, self 94.4% globally) copyOf(Object[], int) at java.util.Arrays
│                           │                                   │   └── 10.1 GiB (26.7%) toArray()
│                           │                                   │       └── 10.1 GiB (26.7%) copyOf(Object[], int) at java.util.Arrays
│                           │                                   └── 7.72 GiB (20.4%) <init>(Collection) at java.util.ArrayList
│                           │                                       └── 7.72 GiB (20.4%) toArray()
│                           │                                           └── 7.72 GiB (20.4%) copyOf(Object[], int) at java.util.Arrays
│                           ├── 5.2 GiB (13.7%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           │   ├── … 4.24 GiB (11.2%) collectClusters(int[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           │   │   ├── … 3.89 GiB (10.3%) copyOf(Object[], int) at java.util.Arrays
│                           │   │   └── 134 MiB (0.3%) computeIfAbsent(Object, Function) at java.util.HashMap
│                           │   │       ├── 66.1 MiB (0.2%) newNode(int, Object, Object, HashMap$Node)
│                           │   │       └── 49.3 MiB (0.1%) apply(Object) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011e4b38
│                           │   │           └── 49.3 MiB (0.1%) lambda$collectClusters$0(Double[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           │   └── … 981 MiB (2.5%) findNearestCentroid() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           ├── 338 MiB (0.9%) createSubtask(int, int) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│                           ├── 99.3 MiB (0.3%) createSubtask(int, int) at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│                           └── 42.7 MiB (0.1%) combineResults(Object, Object) at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│                               └── 42.7 MiB (0.1%) combineResults(double[], double[])
│                                   └── 42.7 MiB (0.1%) add(double[], double[])
├── … 125 MiB (0.3%) builder(long, IntFunction) at java.util.stream.Nodes
│   └── … 118 MiB (0.3%) lambda$generateData$4(int) at org.renaissance.jdk.concurrent.JavaKMeans
└── … 20.9 MiB (0.1%) initTable() at java.util.concurrent.ConcurrentHashMap
```

## Hottest functions

### Self size

Functions with the most bytes allocated within the function body, excluding callees.

|     % |     Size | Samples | Function                                     | Location                                                   |
| ----: | -------: | ------: | -------------------------------------------- | ---------------------------------------------------------- |
| 94.4% | 35.7 GiB |   2,084 | `copyOf(Object[], int)`                      | `java.util.Arrays`                                         |
|  2.5% |  981 MiB |      70 | `findNearestCentroid()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.9% |  338 MiB |       9 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.5% |  178 MiB |       9 | `grow(int)`                                  | `java.util.ArrayList`                                      |
|  0.3% |  118 MiB |      10 | `lambda$generateData$4(int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.3% | 99.3 MiB |       6 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.2% | 89.5 MiB |      12 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                        |
|  0.1% | 57.7 MiB |       7 | `merge(Map, Map)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.1% | 49.3 MiB |       4 | `lambda$collectClusters$0(Double[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.1% | 42.7 MiB |       6 | `add(double[], double[])`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.1% | 42.3 MiB |       7 | `collectClusters(int[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.1% | 25.1 MiB |       7 | `lambda$merge$6(List, List)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.1% |   21 MiB |      33 | `valueOf(double)`                            | `java.lang.Double`                                         |
|  0.1% | 20.9 MiB |       1 | `initTable()`                                | `java.util.concurrent.ConcurrentHashMap`                   |
| <0.1% | 19.2 MiB |       3 | `resize()`                                   | `java.util.HashMap`                                        |
| <0.1% | 9.61 MiB |       2 | `vectorSum()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% | 9.46 MiB |      16 | `intStream(Spliterator$OfInt, boolean)`      | `java.util.stream.StreamSupport`                           |
| <0.1% | 9.45 MiB |      19 | `mapToObj(IntFunction, int)`                 | `java.util.stream.IntPipeline`                             |
| <0.1% |  8.3 MiB |      21 | `copyOf(byte[], int)`                        | `java.util.Arrays`                                         |
| <0.1% | 7.93 MiB |      12 | `range(int, int)`                            | `java.util.stream.IntStream`                               |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Samples | Function                                     | Location                                     |
| ----: | -------: | ------: | -------------------------------------------- | -------------------------------------------- |
| 94.4% | 35.7 GiB |   2,084 | `copyOf(Object[], int)`                      | `java.util.Arrays`                           |
|  0.5% |  178 MiB |       9 | `grow(int)`                                  | `java.util.ArrayList`                        |
|  0.2% | 89.5 MiB |      12 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                          |
|  0.1% |   21 MiB |      33 | `valueOf(double)`                            | `java.lang.Double`                           |
|  0.1% | 20.9 MiB |       1 | `initTable()`                                | `java.util.concurrent.ConcurrentHashMap`     |
| <0.1% | 19.2 MiB |       3 | `resize()`                                   | `java.util.HashMap`                          |
| <0.1% | 9.46 MiB |      16 | `intStream(Spliterator$OfInt, boolean)`      | `java.util.stream.StreamSupport`             |
| <0.1% | 9.45 MiB |      19 | `mapToObj(IntFunction, int)`                 | `java.util.stream.IntPipeline`               |
| <0.1% |  8.3 MiB |      21 | `copyOf(byte[], int)`                        | `java.util.Arrays`                           |
| <0.1% | 7.93 MiB |      12 | `range(int, int)`                            | `java.util.stream.IntStream`                 |
| <0.1% | 7.57 MiB |      13 | `opWrapSink(int, Sink)`                      | `java.util.stream.IntPipeline$1`             |
| <0.1% | 6.79 MiB |       9 | `builder(long, IntFunction)`                 | `java.util.stream.Nodes`                     |
| <0.1% | 5.66 MiB |       6 | `allocateInstance(Object)`                   | `java.lang.invoke.DirectMethodHandle`        |
| <0.1% | 3.55 MiB |      10 | `<init>(InputStream, Inflater, int)`         | `java.util.zip.InflaterInputStream`          |
| <0.1% | 2.65 MiB |       7 | `allocateInstance(Class)`                    | `jdk.internal.misc.Unsafe`                   |
| <0.1% | 1.34 MiB |       1 | `read(InputStream, String)`                  | `java.util.jar.Manifest`                     |
| <0.1% |  657 KiB |       1 | `iterator()`                                 | `java.util.HashMap$EntrySet`                 |
| <0.1% |  647 KiB |       2 | `addConstantUtf8(String)`                    | `jdk.internal.org.objectweb.asm.SymbolTable` |
| <0.1% |  515 KiB |       1 | `readNBytes(int)`                            | `java.io.InputStream`                        |
| <0.1% |  483 KiB |       1 | `getInflater()`                              | `java.util.zip.ZipFile$CleanableResource`    |

##### Ours

|     % |     Size | Samples | Function                             | Location                                                   |
| ----: | -------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|  2.5% |  981 MiB |      70 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.9% |  338 MiB |       9 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |  118 MiB |      10 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.3% | 99.3 MiB |       6 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.1% | 57.7 MiB |       7 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.1% | 49.3 MiB |       4 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.1% | 42.7 MiB |       6 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.1% | 42.3 MiB |       7 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.1% | 25.1 MiB |       7 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% | 9.61 MiB |       2 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% | 26.6 KiB |       1 | `collectGarbage(String)`             | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |

#### Lines

Lines with the largest contribution to each function's self size.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 35.7 GiB |   2,084 | `java.util.Arrays:3482` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Location                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------- |
| 100.0% | 981 MiB |      70 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Location                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------- |
| 100.0% | 338 MiB |       9 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |    Size | Samples | Location                  |
| -----: | ------: | ------: | ------------------------- |
| 100.0% | 178 MiB |       9 | `java.util.ArrayList:239` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Location                                       |
| -----: | ------: | ------: | ---------------------------------------------- |
| 100.0% | 118 MiB |      10 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Location                                                      |
| -----: | -------: | ------: | ------------------------------------------------------------- |
| 100.0% | 99.3 MiB |       6 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|      % |     Size | Samples | Location                 |
| -----: | -------: | ------: | ------------------------ |
| 100.0% | 89.5 MiB |      12 | `java.util.HashMap:1909` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Location                                        |
| -----: | -------: | ------: | ----------------------------------------------- |
| 100.0% | 57.7 MiB |       7 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Location                                                       |
| -----: | -------: | ------: | -------------------------------------------------------------- |
| 100.0% | 49.3 MiB |       4 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Location                                                      |
| -----: | -------: | ------: | ------------------------------------------------------------- |
| 100.0% | 42.7 MiB |       6 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Location                                                       |
| -----: | -------: | ------: | -------------------------------------------------------------- |
| 100.0% | 42.3 MiB |       7 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Location                                        |
| -----: | -------: | ------: | ----------------------------------------------- |
| 100.0% | 25.1 MiB |       7 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `valueOf(double)` (`java.lang.Double`)

|      % |   Size | Samples | Location               |
| -----: | -----: | ------: | ---------------------- |
| 100.0% | 21 MiB |      33 | `java.lang.Double:773` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

|      % |     Size | Samples | Location                                      |
| -----: | -------: | ------: | --------------------------------------------- |
| 100.0% | 20.9 MiB |       1 | `java.util.concurrent.ConcurrentHashMap:2301` |

##### `resize()` (`java.util.HashMap`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 19.2 MiB |       3 | `java.util.HashMap:710` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Location                                                      |
| -----: | -------: | ------: | ------------------------------------------------------------- |
| 100.0% | 9.61 MiB |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

|      % |     Size | Samples | Location                             |
| -----: | -------: | ------: | ------------------------------------ |
| 100.0% | 9.46 MiB |      16 | `java.util.stream.StreamSupport:138` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

|      % |     Size | Samples | Location                           |
| -----: | -------: | ------: | ---------------------------------- |
| 100.0% | 9.45 MiB |      19 | `java.util.stream.IntPipeline:174` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|      % |    Size | Samples | Location                |
| -----: | ------: | ------: | ----------------------- |
| 100.0% | 8.3 MiB |      21 | `java.util.Arrays:3541` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|      % |     Size | Samples | Location                          |
| -----: | -------: | ------: | --------------------------------- |
| 100.0% | 7.93 MiB |      12 | `java.util.stream.IntStream:1083` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|      % |     Size | Samples | Location                             |
| -----: | -------: | ------: | ------------------------------------ |
| 100.0% | 7.57 MiB |      13 | `java.util.stream.IntPipeline$1:177` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

|      % |     Size | Samples | Location                     |
| -----: | -------: | ------: | ---------------------------- |
| 100.0% | 6.79 MiB |       9 | `java.util.stream.Nodes:168` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|      % |     Size | Samples | Location                                  |
| -----: | -------: | ------: | ----------------------------------------- |
| 100.0% | 5.66 MiB |       6 | `java.lang.invoke.DirectMethodHandle:501` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

|      % |     Size | Samples | Location                               |
| -----: | -------: | ------: | -------------------------------------- |
| 100.0% | 3.55 MiB |      10 | `java.util.zip.InflaterInputStream:89` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

|      % |     Size | Samples | Location                     |
| -----: | -------: | ------: | ---------------------------- |
| 100.0% | 1.34 MiB |       1 | `java.util.jar.Manifest:332` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

|      % |    Size | Samples | Location                          |
| -----: | ------: | ------: | --------------------------------- |
| 100.0% | 657 KiB |       1 | `java.util.HashMap$EntrySet:1106` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|      % |    Size | Samples | Location                                         |
| -----: | ------: | ------: | ------------------------------------------------ |
| 100.0% | 647 KiB |       2 | `jdk.internal.org.objectweb.asm.SymbolTable:807` |

##### `readNBytes(int)` (`java.io.InputStream`)

|      % |    Size | Samples | Location                  |
| -----: | ------: | ------: | ------------------------- |
| 100.0% | 515 KiB |       1 | `java.io.InputStream:448` |

##### `getInflater()` (`java.util.zip.ZipFile$CleanableResource`)

|      % |    Size | Samples | Location                                      |
| -----: | ------: | ------: | --------------------------------------------- |
| 100.0% | 483 KiB |       1 | `java.util.zip.ZipFile$CleanableResource:778` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

|      % |     Size | Samples | Location                                                    |
| -----: | -------: | ------: | ----------------------------------------------------------- |
| 100.0% | 26.6 KiB |       1 | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin:26` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Caller      | Location              |
| ----: | -------: | ------: | ----------- | --------------------- |
| 50.1% | 17.9 GiB |   1,081 | `grow(int)` | `java.util.ArrayList` |
| 49.9% | 17.8 GiB |   1,003 | `toArray()` | `java.util.ArrayList` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller              | Location                                                   |
| -----: | ------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 981 MiB |      70 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller      | Location                                               |
| -----: | ------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 338 MiB |       9 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |    Size | Samples | Caller   | Location              |
| -----: | ------: | ------: | -------- | --------------------- |
| 100.0% | 178 MiB |       9 | `grow()` | `java.util.ArrayList` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Caller       | Location                                                               |
| -----: | ------: | ------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% | 118 MiB |      10 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001181d48` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Caller      | Location                                               |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 99.3 MiB |       6 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|     % |     Size | Samples | Caller                                          | Location            |
| ----: | -------: | ------: | ----------------------------------------------- | ------------------- |
| 73.9% | 66.1 MiB |       5 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
| 26.1% | 23.4 MiB |       7 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller                     | Location                                                   |
| -----: | -------: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% | 57.7 MiB |       7 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller          | Location                                                                              |
| -----: | -------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 49.3 MiB |       4 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x00000070011e4b38` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Caller                               | Location                                                  |
| -----: | -------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| 100.0% | 42.7 MiB |       6 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller              | Location                                                   |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 42.3 MiB |       7 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller                  | Location                                                               |
| -----: | -------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% | 25.1 MiB |       7 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0` |

##### `valueOf(double)` (`java.lang.Double`)

|     % |     Size | Samples | Caller                                           | Location                                                     |
| ----: | -------: | ------: | ------------------------------------------------ | ------------------------------------------------------------ |
| 66.8% |   14 MiB |      32 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                  |
| 33.2% | 6.98 MiB |       1 | `apply(double)`                                  | `java.util.stream.DoublePipeline$$Lambda.0x00000070010f4540` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

|      % |     Size | Samples | Caller                            | Location                                 |
| -----: | -------: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% | 20.9 MiB |       1 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `resize()` (`java.util.HashMap`)

|     % |     Size | Samples | Caller                                          | Location            |
| ----: | -------: | ------: | ----------------------------------------------- | ------------------- |
| 98.4% | 18.9 MiB |       2 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
|  1.6% |  305 KiB |       1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Caller              | Location                                                  |
| -----: | -------: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% | 9.61 MiB |       2 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

|      % |     Size | Samples | Caller            | Location                     |
| -----: | -------: | ------: | ----------------- | ---------------------------- |
| 100.0% | 9.46 MiB |      16 | `range(int, int)` | `java.util.stream.IntStream` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

|      % |     Size | Samples | Caller                  | Location                       |
| -----: | -------: | ------: | ----------------------- | ------------------------------ |
| 100.0% | 9.45 MiB |      19 | `mapToObj(IntFunction)` | `java.util.stream.IntPipeline` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Caller                        | Location                          |
| ----: | -------: | ------: | ----------------------------- | --------------------------------- |
| 95.4% | 7.92 MiB |      20 | `getBytes()`                  | `jdk.internal.loader.Resource`    |
|  4.6% |  387 KiB |       1 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|      % |     Size | Samples | Caller                                           | Location                                    |
| -----: | -------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| 100.0% | 7.93 MiB |      12 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|      % |     Size | Samples | Caller           | Location                            |
| -----: | -------: | ------: | ---------------- | ----------------------------------- |
| 100.0% | 7.57 MiB |      13 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

|      % |     Size | Samples | Caller                               | Location                             |
| -----: | -------: | ------: | ------------------------------------ | ------------------------------------ |
| 100.0% | 6.79 MiB |       9 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|      % |     Size | Samples | Caller                                       | Location                                             |
| -----: | -------: | ------: | -------------------------------------------- | ---------------------------------------------------- |
| 100.0% | 5.66 MiB |       6 | `newInvokeSpecial(Object, int, int, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001182400` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

|      % |     Size | Samples | Caller                                                                                  | Location                                           |
| -----: | -------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| 100.0% | 3.55 MiB |      10 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

|      % |     Size | Samples | Caller                     | Location                              |
| -----: | -------: | ------: | -------------------------- | ------------------------------------- |
| 100.0% | 2.65 MiB |       7 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `read(InputStream, String)` (`java.util.jar.Manifest`)

|      % |     Size | Samples | Caller                                     | Location                 |
| -----: | -------: | ------: | ------------------------------------------ | ------------------------ |
| 100.0% | 1.34 MiB |       1 | `<init>(JarVerifier, InputStream, String)` | `java.util.jar.Manifest` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

|      % |    Size | Samples | Caller                        | Location            |
| -----: | ------: | ------: | ----------------------------- | ------------------- |
| 100.0% | 657 KiB |       1 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|     % |    Size | Samples | Caller                                          | Location                                          |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------- |
| 82.7% | 535 KiB |       1 | `create(SymbolTable, String, AnnotationWriter)` | `jdk.internal.org.objectweb.asm.AnnotationWriter` |
| 17.3% | 112 KiB |       1 | `addConstantUtf8Reference(int, String)`         | `jdk.internal.org.objectweb.asm.SymbolTable`      |

##### `readNBytes(int)` (`java.io.InputStream`)

|      % |    Size | Samples | Caller           | Location              |
| -----: | ------: | ------: | ---------------- | --------------------- |
| 100.0% | 515 KiB |       1 | `readAllBytes()` | `java.io.InputStream` |

##### `getInflater()` (`java.util.zip.ZipFile$CleanableResource`)

|      % |    Size | Samples | Caller                                                                        | Location                                           |
| -----: | ------: | ------: | ----------------------------------------------------------------------------- | -------------------------------------------------- |
| 100.0% | 483 KiB |       1 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

|      % |     Size | Samples | Caller                                      | Location                                                 |
| -----: | -------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 26.6 KiB |       1 | `afterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin` |

### Total size

Functions with the most bytes allocated within the function and its callees.

|     % |     Size | Samples | Function                                             | Location                                                               |
| ----: | -------: | ------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| 99.4% | 37.6 GiB |   2,226 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 99.4% | 37.6 GiB |   2,226 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
| 99.4% | 37.6 GiB |   2,226 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
| 99.4% | 37.6 GiB |   2,226 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| 99.4% | 37.6 GiB |   2,226 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
| 99.4% | 37.6 GiB |   2,226 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
| 99.4% | 37.6 GiB |   2,226 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
| 94.4% | 35.7 GiB |   2,085 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                                     |
| 84.4% | 31.9 GiB |   1,838 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 84.4% | 31.9 GiB |   1,838 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 84.4% | 31.9 GiB |   1,838 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 84.2% | 31.9 GiB |   1,824 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 84.2% | 31.9 GiB |   1,824 | `apply(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0` |
| 84.2% | 31.9 GiB |   1,824 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |
| 84.2% | 31.9 GiB |   1,824 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 84.2% | 31.9 GiB |   1,824 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88` |
| 84.2% | 31.9 GiB |   1,824 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                    |
| 63.7% | 24.1 GiB |   1,370 | `addAll(Collection)`                                 | `java.util.ArrayList`                                                  |
| 63.0% | 23.9 GiB |   1,477 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                                    |
| 63.0% | 23.9 GiB |   1,477 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                                    |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Samples | Function                                             | Location                                            |
| ----: | -------: | ------: | ---------------------------------------------------- | --------------------------------------------------- |
| 99.4% | 37.6 GiB |   2,226 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                |
| 99.4% | 37.6 GiB |   2,226 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| 99.4% | 37.6 GiB |   2,226 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 99.4% | 37.6 GiB |   2,226 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                 |
| 99.4% | 37.6 GiB |   2,226 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                 |
| 99.4% | 37.6 GiB |   2,226 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`         |
| 94.4% | 35.7 GiB |   2,085 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                  |
| 84.2% | 31.9 GiB |   1,824 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                 |
| 84.2% | 31.9 GiB |   1,824 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                 |
| 63.7% | 24.1 GiB |   1,370 | `addAll(Collection)`                                 | `java.util.ArrayList`                               |
| 63.0% | 23.9 GiB |   1,477 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                 |
| 63.0% | 23.9 GiB |   1,477 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                 |
| 62.3% | 23.6 GiB |   1,456 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 47.7% | 18.1 GiB |   1,091 | `grow(int)`                                          | `java.util.ArrayList`                               |
| 47.1% | 17.8 GiB |   1,003 | `toArray()`                                          | `java.util.ArrayList`                               |
| 22.8% | 8.62 GiB |     310 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| 22.6% | 8.57 GiB |     304 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| 20.4% | 7.72 GiB |     447 | `<init>(Collection)`                                 | `java.util.ArrayList`                               |
| 10.7% | 4.07 GiB |     277 | `grow()`                                             | `java.util.ArrayList`                               |
| 10.7% | 4.07 GiB |     277 | `add(Object, Object[], int)`                         | `java.util.ArrayList`                               |

##### Ours

|     % |     Size | Samples | Function                                                                                                               | Location                                                               |
| ----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 99.4% | 37.6 GiB |   2,226 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 84.4% | 31.9 GiB |   1,838 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 84.4% | 31.9 GiB |   1,838 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 84.4% | 31.9 GiB |   1,838 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 84.2% | 31.9 GiB |   1,824 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 84.2% | 31.9 GiB |   1,824 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0` |
| 84.2% | 31.9 GiB |   1,824 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 84.2% | 31.9 GiB |   1,824 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88` |
| 22.6% | 8.57 GiB |     304 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 22.6% | 8.57 GiB |     304 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0` |
| 13.7% |  5.2 GiB |     364 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 11.2% | 4.24 GiB |     294 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  2.5% |  981 MiB |      70 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  0.9% |  338 MiB |       9 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  0.5% |  202 MiB |     176 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  0.5% |  202 MiB |     176 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  0.5% |  201 MiB |     174 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  0.5% |  201 MiB |     173 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  0.5% |  198 MiB |     166 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  0.5% |  184 MiB |     128 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |     Size | Samples | Caller   | Location                             |
| -----: | -------: | ------: | -------- | ------------------------------------ |
| 100.0% | 37.6 GiB |   2,226 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |     Size | Samples | Caller     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 37.6 GiB |   2,226 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Caller                                                    | Location                                      |
| -----: | -------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 37.6 GiB |   2,226 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  62.6% | 23.6 GiB |   1,456 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  22.9% | 8.62 GiB |     310 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|   8.6% | 3.25 GiB |     254 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |     Size | Samples | Caller                                   | Location                            |
| -----: | -------: | ------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 37.6 GiB |   2,226 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |     Size | Samples | Caller                              | Location                            |
| -----: | -------: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 37.6 GiB |   2,226 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |     Size | Samples | Caller  | Location                                    |
| -----: | -------: | ------: | ------- | ------------------------------------------- |
| 100.0% | 37.6 GiB |   2,226 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Caller      | Location              |
| ----: | -------: | ------: | ----------- | --------------------- |
| 50.1% | 17.9 GiB |   1,082 | `grow(int)` | `java.util.ArrayList` |
| 49.9% | 17.8 GiB |   1,003 | `toArray()` | `java.util.ArrayList` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller                     | Location                                                   |
| -----: | -------: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% | 31.9 GiB |   1,838 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller                           | Location                                                   |
| -----: | -------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 100.0% | 31.9 GiB |   1,838 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller      | Location                                               |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 31.9 GiB |   1,838 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller                  | Location                                                               |
| -----: | -------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% | 31.9 GiB |   1,824 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0`)

|      % |     Size | Samples | Caller                              | Location            |
| -----: | -------: | ------: | ----------------------------------- | ------------------- |
| 100.0% | 31.9 GiB |   1,824 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % |     Size | Samples | Caller                              | Location                                    |
| -----: | -------: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 31.9 GiB |   1,824 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller                   | Location                                                               |
| -----: | -------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% | 31.9 GiB |   1,824 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88`)

|      % |     Size | Samples | Caller                | Location            |
| -----: | -------: | ------: | --------------------- | ------------------- |
| 100.0% | 31.9 GiB |   1,824 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % |     Size | Samples | Caller            | Location                                    |
| -----: | -------: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 31.9 GiB |   1,824 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|      % |     Size | Samples | Caller                       | Location                                    |
| -----: | -------: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% | 24.1 GiB |   1,370 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Caller   | Location                            |
| -----: | -------: | ------: | -------- | ----------------------------------- |
| 100.0% | 23.9 GiB |   1,477 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Caller      | Location                                               |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 23.9 GiB |   1,477 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |     Size | Samples | Caller                 | Location                            |
| -----: | -------: | ------: | ---------------------- | ----------------------------------- |
| 100.0% | 23.6 GiB |   1,456 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `grow(int)` (`java.util.ArrayList`)

|     % |     Size | Samples | Caller               | Location              |
| ----: | -------: | ------: | -------------------- | --------------------- |
| 77.5% |   14 GiB |     814 | `addAll(Collection)` | `java.util.ArrayList` |
| 22.5% | 4.07 GiB |     277 | `grow()`             | `java.util.ArrayList` |

##### `toArray()` (`java.util.ArrayList`)

|     % |     Size | Samples | Caller               | Location              |
| ----: | -------: | ------: | -------------------- | --------------------- |
| 56.7% | 10.1 GiB |     556 | `addAll(Collection)` | `java.util.ArrayList` |
| 43.3% | 7.72 GiB |     447 | `<init>(Collection)` | `java.util.ArrayList` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|     % |     Size | Samples | Caller                         | Location                                               |
| ----: | -------: | ------: | ------------------------------ | ------------------------------------------------------ |
| 99.4% | 8.57 GiB |     304 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
|  0.6% | 49.7 MiB |       6 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % |     Size | Samples | Caller     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 8.57 GiB |     304 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller   | Location                                                               |
| -----: | -------: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% | 8.57 GiB |     304 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0`)

|      % |     Size | Samples | Caller   | Location                                            |
| -----: | -------: | ------: | -------- | --------------------------------------------------- |
| 100.0% | 8.57 GiB |     304 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `<init>(Collection)` (`java.util.ArrayList`)

|      % |     Size | Samples | Caller                       | Location                                    |
| -----: | -------: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% | 7.72 GiB |     447 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller              | Location                                                   |
| -----: | ------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 5.2 GiB |     364 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 100.0% | 5.2 GiB |     364 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller              | Location                                                   |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 4.24 GiB |     294 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `grow()` (`java.util.ArrayList`)

|      % |     Size | Samples | Caller                       | Location              |
| -----: | -------: | ------: | ---------------------------- | --------------------- |
| 100.0% | 4.07 GiB |     277 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % |     Size | Samples | Caller        | Location              |
| -----: | -------: | ------: | ------------- | --------------------- |
| 100.0% | 4.07 GiB |     277 | `add(Object)` | `java.util.ArrayList` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller              | Location                                                   |
| -----: | ------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 981 MiB |      70 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller      | Location                                               |
| -----: | ------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 338 MiB |       9 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % |    Size | Samples | Caller           | Location                        |
| -----: | ------: | ------: | ---------------- | ------------------------------- |
| 100.0% | 202 MiB |     176 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % |    Size | Samples | Caller                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 201 MiB |     174 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |    Size | Samples | Caller                         | Location                                             |
| -----: | ------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 201 MiB |     173 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |    Size | Samples | Caller           | Location                                   |
| -----: | ------: | ------: | ---------------- | ------------------------------------------ |
| 100.0% | 198 MiB |     166 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |    Size | Samples | Caller              | Location                                                               |
| -----: | ------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 184 MiB |     128 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001178798` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % |     Size | Samples | Callee                           | Location                                                   |
| ----: | -------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 84.9% | 31.9 GiB |   1,838 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 63.4% | 23.9 GiB |   1,477 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 13.8% |  5.2 GiB |     364 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.9% |  338 MiB |       9 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% | 99.3 MiB |       6 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |     Size | Samples | Callee      | Location                                               |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 37.6 GiB |   2,226 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Callee   | Location                                            |
| -----: | -------: | ------: | -------- | --------------------------------------------------- |
| 100.0% | 37.6 GiB |   2,226 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|  22.8% | 8.57 GiB |     304 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |     Size | Samples | Callee     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 37.6 GiB |   2,226 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |     Size | Samples | Callee                                               | Location                                      |
| -----: | -------: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 37.6 GiB |   2,226 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |     Size | Samples | Callee                                   | Location                            |
| -----: | -------: | ------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 37.6 GiB |   2,226 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % |     Size | Samples | Callee                              | Location                            |
| -----: | -------: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 37.6 GiB |   2,226 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % |    Size | Samples | Callee                         | Location           |
| ----: | ------: | ------: | ------------------------------ | ------------------ |
| <0.1% | 330 KiB |       1 | `copyOf(Object[], int, Class)` | `java.util.Arrays` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % |     Size | Samples | Callee                | Location            |
| ----: | -------: | ------: | --------------------- | ------------------- |
| 99.8% | 31.9 GiB |   1,824 | `forEach(BiConsumer)` | `java.util.HashMap` |
|  0.1% | 23.6 MiB |       7 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Callee            | Location                                    |
| -----: | -------: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 31.9 GiB |   1,838 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Callee                     | Location                                                   |
| -----: | -------: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% | 31.9 GiB |   1,838 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % |     Size | Samples | Callee               | Location              |
| ----: | -------: | ------: | -------------------- | --------------------- |
| 75.7% | 24.1 GiB |   1,370 | `addAll(Collection)` | `java.util.ArrayList` |
| 24.2% | 7.72 GiB |     447 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0`)

|      % |     Size | Samples | Callee                       | Location                                    |
| -----: | -------: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% | 31.9 GiB |   1,824 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % |     Size | Samples | Callee                  | Location                                                               |
| -----: | -------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% | 31.9 GiB |   1,824 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Callee                              | Location            |
| -----: | -------: | ------: | ----------------------------------- | ------------------- |
| 100.0% | 31.9 GiB |   1,824 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88`)

|      % |     Size | Samples | Callee                              | Location                                    |
| -----: | -------: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 31.9 GiB |   1,824 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % |     Size | Samples | Callee                   | Location                                                               |
| -----: | -------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% | 31.9 GiB |   1,824 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|     % |     Size | Samples | Callee      | Location              |
| ----: | -------: | ------: | ----------- | --------------------- |
| 58.1% |   14 GiB |     814 | `grow(int)` | `java.util.ArrayList` |
| 41.9% | 10.1 GiB |     556 | `toArray()` | `java.util.ArrayList` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % |     Size | Samples | Callee                                                    | Location                                      |
| ----: | -------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 98.8% | 23.6 GiB |   1,456 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 13.6% | 3.25 GiB |     254 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Callee                 | Location                            |
| -----: | -------: | ------: | ---------------------- | ----------------------------------- |
| 100.0% | 23.9 GiB |   1,477 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |     Size | Samples | Callee     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 23.6 GiB |   1,456 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `grow(int)` (`java.util.ArrayList`)

|     % |     Size | Samples | Callee                  | Location           |
| ----: | -------: | ------: | ----------------------- | ------------------ |
| 99.0% | 17.9 GiB |   1,082 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `toArray()` (`java.util.ArrayList`)

|      % |     Size | Samples | Callee                  | Location           |
| -----: | -------: | ------: | ----------------------- | ------------------ |
| 100.0% | 17.8 GiB |   1,003 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Callee     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 8.62 GiB |     310 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % |     Size | Samples | Callee   | Location                                                               |
| -----: | -------: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% | 8.57 GiB |     304 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Callee     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 8.57 GiB |     304 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0`)

|      % |     Size | Samples | Callee                         | Location                                    |
| -----: | -------: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% | 8.57 GiB |     304 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `<init>(Collection)` (`java.util.ArrayList`)

|      % |     Size | Samples | Callee      | Location              |
| -----: | -------: | ------: | ----------- | --------------------- |
| 100.0% | 7.72 GiB |     447 | `toArray()` | `java.util.ArrayList` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Callee                   | Location                                                   |
| -----: | -------: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |  5.2 GiB |     364 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  81.6% | 4.24 GiB |     294 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  18.4% |  981 MiB |      70 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % |     Size | Samples | Callee                              | Location              |
| ----: | -------: | ------: | ----------------------------------- | --------------------- |
| 95.9% | 4.07 GiB |     276 | `add(Object)`                       | `java.util.ArrayList` |
|  3.1% |  134 MiB |      11 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |

##### `grow()` (`java.util.ArrayList`)

|      % |     Size | Samples | Callee      | Location              |
| -----: | -------: | ------: | ----------- | --------------------- |
| 100.0% | 4.07 GiB |     277 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % |     Size | Samples | Callee   | Location              |
| -----: | -------: | ------: | -------- | --------------------- |
| 100.0% | 4.07 GiB |     277 | `grow()` | `java.util.ArrayList` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|     % |    Size | Samples | Callee                                                      | Location                            |
| ----: | ------: | ------: | ----------------------------------------------------------- | ----------------------------------- |
| 99.6% | 201 MiB |     174 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`     |
|  0.2% | 388 KiB |       1 | `createScratchRoot(Path, boolean)`                          | `org.renaissance.core.Launcher`     |
|  0.2% | 388 KiB |       1 | `create(Path, URI)`                                         | `org.renaissance.core.ModuleLoader` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % |    Size | Samples | Callee                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 202 MiB |     176 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|     % |    Size | Samples | Callee                               | Location                            |
| ----: | ------: | ------: | ------------------------------------ | ----------------------------------- |
| 99.8% | 201 MiB |     173 | `invoke(Object, Object[])`           | `java.lang.reflect.Method`          |
|  0.2% | 395 KiB |       1 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|     % |     Size | Samples | Callee              | Location                                    |
| ----: | -------: | ------: | ------------------- | ------------------------------------------- |
| 98.5% |  198 MiB |     166 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
|  1.5% | 3.06 MiB |       7 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|     % |     Size | Samples | Callee                                                                        | Location                                    |
| ----: | -------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 92.8% |  184 MiB |     128 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|  1.8% | 3.63 MiB |      10 | `<clinit>()`                                                                  | `scala.Predef$`                             |
|  1.3% | 2.57 MiB |       7 | `parse(String[])`                                                             | `org.renaissance.harness.ConfigParser`      |
|  1.0% | 2.07 MiB |       6 | `<init>(Map)`                                                                 | `org.renaissance.harness.ConfigParser`      |
|  0.9% | 1.81 MiB |       4 | `apply(Seq)`                                                                  | `scala.collection.immutable.Map$`           |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|     % |    Size | Samples | Callee                                                                                       | Location                                  |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 99.8% | 183 MiB |     127 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|  0.2% | 408 KiB |       1 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

## Hottest call stacks

Call stacks with the most bytes allocated in their leaf frame.

Common call stack: `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|     % |      Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----: | --------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11.0% |  4.15 GiB |     251 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  7.5% |  2.83 GiB |     197 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  6.0% |  2.28 GiB |     161 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  5.4% |  2.04 GiB |     116 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  4.4% |  1.67 GiB |      43 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  3.8% |  1.44 GiB |      45 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  3.3% |  1.24 GiB |      66 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  3.2% |  1.22 GiB |      42 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.9% |  1.09 GiB |      68 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.6% | 1,021 MiB |      59 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.5% |   983 MiB |      82 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.1% |   816 MiB |      45 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                   |
|  1.8% |   703 MiB |      20 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.8% |   684 MiB |      32 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.7% |   678 MiB |      52 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.7% |   670 MiB |      45 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.6% |   614 MiB |      44 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) |
|  1.5% |   598 MiB |      20 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.4% |   547 MiB |      29 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.3% |   518 MiB |      25 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

# Retained heap profile

Retained 2.5 MiB over 9 sampled objects (285 KiB per sampled object).

| Category         |      % |    Size | Sampled objects |
| ---------------- | -----: | ------: | --------------: |
| Standard library | 100.0% | 2.5 MiB |               8 |
| Ours             |  <0.1% |    40 B |               1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 2.06 MiB (82.4%) main(String[]) at org.renaissance.core.Launcher
│   └── 2.06 MiB (82.4%) launchHarnessClass(String, String[])
│       └── 2.06 MiB (82.4%) loadAndInvokeHarnessClass(ModuleLoader, String, String[])
│           └── 2.06 MiB (82.4%) invoke(Object, Object[]) at java.lang.reflect.Method
│               └── 2.06 MiB (82.4%) invoke(Object, Object[]) at jdk.internal.reflect.DirectMethodHandleAccessor
│                   └── 2.06 MiB (82.4%) invokeImpl(Object, Object[])
│                       └── 2.06 MiB (82.4%) invokeExact_MT(Object, Object, Object, Object) at java.lang.invoke.Invokers$Holder
│                           └── 2.06 MiB (82.4%) invoke(Object, Object, Object) at java.lang.invoke.LambdaForm$MH.0x0000007001082400
│                               └── 2.06 MiB (82.4%) invokeStatic(Object, Object) at java.lang.invoke.LambdaForm$DMH.0x0000007001001c00
│                                   └── 2.06 MiB (82.4%) main(String[]) at org.renaissance.harness.RenaissanceSuite
│                                       └── 2.06 MiB (82.4%) main(String[]) at org.renaissance.harness.RenaissanceSuite$
│                                           └── 2.06 MiB (82.4%) runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)
│                                               └── 2.06 MiB (82.4%) foreach(Function1) at scala.collection.immutable.List
│                                                   └── 2.06 MiB (82.4%) apply(Object) at scala.runtime.function.JProcedure1
│                                                       └── … 2.06 MiB (82.4%) applyVoid(Object) at org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001178798
│                                                           └── 2.06 MiB (82.4%) runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor) at org.renaissance.harness.RenaissanceSuite$
│                                                               └── 2.06 MiB (82.4%) executeBenchmark() at org.renaissance.harness.ExecutionDriver
│                                                                   └── 2.06 MiB (82.4%) setUpBeforeAll(BenchmarkContext) at org.renaissance.jdk.concurrent.FjKmeans
│                                                                       └── 2.06 MiB (82.4%) generateData(int, int, int) at org.renaissance.jdk.concurrent.JavaKMeans
│                                                                           └── 2.06 MiB (82.4%) collect(Collector) at java.util.stream.ReferencePipeline
│                                                                               └── 2.06 MiB (82.4%) evaluate(TerminalOp) at java.util.stream.AbstractPipeline
│                                                                                   └── 2.06 MiB (82.4%) evaluateSequential(PipelineHelper, Spliterator) at java.util.stream.ReduceOps$ReduceOp
│                                                                                       └── 2.06 MiB (82.4%) wrapAndCopyInto(Sink, Spliterator) at java.util.stream.AbstractPipeline
│                                                                                           └── 2.06 MiB (82.4%) copyInto(Sink, Spliterator)
│                                                                                               └── 2.06 MiB (82.4%) forEachRemaining(Consumer) at java.util.Spliterator$OfInt
│                                                                                                   └── 2.06 MiB (82.4%) forEachRemaining(IntConsumer) at java.util.stream.Streams$RangeIntSpliterator
│                                                                                                       └── 2.06 MiB (82.4%) accept(int) at java.util.stream.IntPipeline$1$1
│                                                                                                           └── 2.06 MiB (82.4%) accept(Object) at java.util.stream.ReduceOps$3ReducingSink
│                                                                                                               └── 2.06 MiB (82.4%) accept(Object, Object) at java.util.stream.Collectors$$Lambda.0x00000070010e3e58
│                                                                                                                   └── 2.06 MiB (82.4%) add(Object) at java.util.ArrayList
│                                                                                                                       └── 2.06 MiB (82.4%) add(Object, Object[], int)
│                                                                                                                           └── 2.06 MiB (82.4%) grow()
│                                                                                                                               └── 2.06 MiB (82.4%) grow(int)
│                                                                                                                                   └── 2.06 MiB (82.4%, self 90.0% globally) copyOf(Object[], int) at java.util.Arrays
├── … 256 KiB (10.0%) addString(String) at jdk.jfr.internal.StringPool
│   └── 256 KiB (10.0%) storeString(String)
│       └── 256 KiB (10.0%) put(Object, Object) at java.util.concurrent.ConcurrentHashMap
│           └── 256 KiB (10.0%) putVal(Object, Object, boolean)
│               └── 256 KiB (10.0%) initTable()
└── … 195 KiB (7.6%) copyOf(Object[], int) at java.util.Arrays
```

## Hottest functions

### Self size

Functions with the most bytes retained within the function body, excluding callees.

|     % |     Size | Sampled objects | Function                                     | Location                                    |
| ----: | -------: | --------------: | -------------------------------------------- | ------------------------------------------- |
| 90.0% | 2.25 MiB |               2 | `copyOf(Object[], int)`                      | `java.util.Arrays`                          |
| 10.0% |  256 KiB |               1 | `initTable()`                                | `java.util.concurrent.ConcurrentHashMap`    |
| <0.1% |    264 B |               1 | `<clinit>()`                                 | `scala.package$`                            |
| <0.1% |     48 B |               2 | `valueOf(double)`                            | `java.lang.Double`                          |
| <0.1% |     40 B |               1 | `lambda$generateData$4(int)`                 | `org.renaissance.jdk.concurrent.JavaKMeans` |
| <0.1% |     32 B |               1 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                         |
| <0.1% |     32 B |               1 | `compress(char[], int, int)`                 | `java.lang.StringUTF16`                     |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Sampled objects | Function                                     | Location                                 |
| ----: | -------: | --------------: | -------------------------------------------- | ---------------------------------------- |
| 90.0% | 2.25 MiB |               2 | `copyOf(Object[], int)`                      | `java.util.Arrays`                       |
| 10.0% |  256 KiB |               1 | `initTable()`                                | `java.util.concurrent.ConcurrentHashMap` |
| <0.1% |    264 B |               1 | `<clinit>()`                                 | `scala.package$`                         |
| <0.1% |     48 B |               2 | `valueOf(double)`                            | `java.lang.Double`                       |
| <0.1% |     32 B |               1 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                      |
| <0.1% |     32 B |               1 | `compress(char[], int, int)`                 | `java.lang.StringUTF16`                  |

#### Lines

Lines with the largest contribution to each function's self size.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |     Size | Sampled objects | Location                |
| -----: | -------: | --------------: | ----------------------- |
| 100.0% | 2.25 MiB |               2 | `java.util.Arrays:3482` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

|      % |    Size | Sampled objects | Location                                      |
| -----: | ------: | --------------: | --------------------------------------------- |
| 100.0% | 256 KiB |               1 | `java.util.concurrent.ConcurrentHashMap:2301` |

##### `<clinit>()` (`scala.package$`)

|      % |  Size | Sampled objects | Location            |
| -----: | ----: | --------------: | ------------------- |
| 100.0% | 264 B |               1 | `scala.package$:89` |

##### `valueOf(double)` (`java.lang.Double`)

|      % | Size | Sampled objects | Location               |
| -----: | ---: | --------------: | ---------------------- |
| 100.0% | 48 B |               2 | `java.lang.Double:773` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Size | Sampled objects | Location                                       |
| -----: | ---: | --------------: | ---------------------------------------------- |
| 100.0% | 40 B |               1 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|      % | Size | Sampled objects | Location                 |
| -----: | ---: | --------------: | ------------------------ |
| 100.0% | 32 B |               1 | `java.util.HashMap:1909` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

|      % | Size | Sampled objects | Location                    |
| -----: | ---: | --------------: | --------------------------- |
| 100.0% | 32 B |               1 | `java.lang.StringUTF16:211` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |     Size | Sampled objects | Caller      | Location              |
| -----: | -------: | --------------: | ----------- | --------------------- |
| 100.0% | 2.25 MiB |               2 | `grow(int)` | `java.util.ArrayList` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

|      % |    Size | Sampled objects | Caller                            | Location                                 |
| -----: | ------: | --------------: | --------------------------------- | ---------------------------------------- |
| 100.0% | 256 KiB |               1 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `<clinit>()` (`scala.package$`)

|      % |  Size | Sampled objects | Caller       | Location        |
| -----: | ----: | --------------: | ------------ | --------------- |
| 100.0% | 264 B |               1 | `<clinit>()` | `scala.Predef$` |

##### `valueOf(double)` (`java.lang.Double`)

|      % | Size | Sampled objects | Caller                                           | Location                                    |
| -----: | ---: | --------------: | ------------------------------------------------ | ------------------------------------------- |
| 100.0% | 48 B |               2 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Size | Sampled objects | Caller       | Location                                                               |
| -----: | ---: | --------------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% | 40 B |               1 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001181d48` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|      % | Size | Sampled objects | Caller                                          | Location            |
| -----: | ---: | --------------: | ----------------------------------------------- | ------------------- |
| 100.0% | 32 B |               1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

|      % | Size | Sampled objects | Caller                           | Location           |
| -----: | ---: | --------------: | -------------------------------- | ------------------ |
| 100.0% | 32 B |               1 | `<init>(char[], int, int, Void)` | `java.lang.String` |

### Total size

Functions with the most bytes retained within the function and its callees.

|     % |     Size | Sampled objects | Function                                                    | Location                                             |
| ----: | -------: | --------------: | ----------------------------------------------------------- | ---------------------------------------------------- |
| 90.0% | 2.25 MiB |               2 | `copyOf(Object[], int)`                                     | `java.util.Arrays`                                   |
| 90.0% | 2.25 MiB |               2 | `grow(int)`                                                 | `java.util.ArrayList`                                |
| 82.4% | 2.06 MiB |               7 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite`           |
| 82.4% | 2.06 MiB |               7 | `invokeStatic(Object, Object)`                              | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
| 82.4% | 2.06 MiB |               7 | `invoke(Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`  |
| 82.4% | 2.06 MiB |               7 | `invokeExact_MT(Object, Object, Object, Object)`            | `java.lang.invoke.Invokers$Holder`                   |
| 82.4% | 2.06 MiB |               7 | `invokeImpl(Object, Object[])`                              | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 82.4% | 2.06 MiB |               7 | `invoke(Object, Object[])`                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 82.4% | 2.06 MiB |               7 | `invoke(Object, Object[])`                                  | `java.lang.reflect.Method`                           |
| 82.4% | 2.06 MiB |               7 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                      |
| 82.4% | 2.06 MiB |               7 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                      |
| 82.4% | 2.06 MiB |               7 | `main(String[])`                                            | `org.renaissance.core.Launcher`                      |
| 82.4% | 2.06 MiB |               6 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite$`          |
| 82.4% | 2.06 MiB |               4 | `accept(int)`                                               | `java.util.stream.IntPipeline$1$1`                   |
| 82.4% | 2.06 MiB |               4 | `forEachRemaining(IntConsumer)`                             | `java.util.stream.Streams$RangeIntSpliterator`       |
| 82.4% | 2.06 MiB |               4 | `forEachRemaining(Consumer)`                                | `java.util.Spliterator$OfInt`                        |
| 82.4% | 2.06 MiB |               4 | `copyInto(Sink, Spliterator)`                               | `java.util.stream.AbstractPipeline`                  |
| 82.4% | 2.06 MiB |               4 | `wrapAndCopyInto(Sink, Spliterator)`                        | `java.util.stream.AbstractPipeline`                  |
| 82.4% | 2.06 MiB |               4 | `evaluateSequential(PipelineHelper, Spliterator)`           | `java.util.stream.ReduceOps$ReduceOp`                |
| 82.4% | 2.06 MiB |               4 | `evaluate(TerminalOp)`                                      | `java.util.stream.AbstractPipeline`                  |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Sampled objects | Function                                          | Location                                             |
| ----: | -------: | --------------: | ------------------------------------------------- | ---------------------------------------------------- |
| 90.0% | 2.25 MiB |               2 | `copyOf(Object[], int)`                           | `java.util.Arrays`                                   |
| 90.0% | 2.25 MiB |               2 | `grow(int)`                                       | `java.util.ArrayList`                                |
| 82.4% | 2.06 MiB |               7 | `invokeStatic(Object, Object)`                    | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
| 82.4% | 2.06 MiB |               7 | `invoke(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`  |
| 82.4% | 2.06 MiB |               7 | `invokeExact_MT(Object, Object, Object, Object)`  | `java.lang.invoke.Invokers$Holder`                   |
| 82.4% | 2.06 MiB |               7 | `invokeImpl(Object, Object[])`                    | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 82.4% | 2.06 MiB |               7 | `invoke(Object, Object[])`                        | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 82.4% | 2.06 MiB |               7 | `invoke(Object, Object[])`                        | `java.lang.reflect.Method`                           |
| 82.4% | 2.06 MiB |               4 | `accept(int)`                                     | `java.util.stream.IntPipeline$1$1`                   |
| 82.4% | 2.06 MiB |               4 | `forEachRemaining(IntConsumer)`                   | `java.util.stream.Streams$RangeIntSpliterator`       |
| 82.4% | 2.06 MiB |               4 | `forEachRemaining(Consumer)`                      | `java.util.Spliterator$OfInt`                        |
| 82.4% | 2.06 MiB |               4 | `copyInto(Sink, Spliterator)`                     | `java.util.stream.AbstractPipeline`                  |
| 82.4% | 2.06 MiB |               4 | `wrapAndCopyInto(Sink, Spliterator)`              | `java.util.stream.AbstractPipeline`                  |
| 82.4% | 2.06 MiB |               4 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp`                |
| 82.4% | 2.06 MiB |               4 | `evaluate(TerminalOp)`                            | `java.util.stream.AbstractPipeline`                  |
| 82.4% | 2.06 MiB |               4 | `collect(Collector)`                              | `java.util.stream.ReferencePipeline`                 |
| 82.4% | 2.06 MiB |               4 | `apply(Object)`                                   | `scala.runtime.function.JProcedure1`                 |
| 82.4% | 2.06 MiB |               4 | `foreach(Function1)`                              | `scala.collection.immutable.List`                    |
| 82.4% | 2.06 MiB |               1 | `grow()`                                          | `java.util.ArrayList`                                |
| 82.4% | 2.06 MiB |               1 | `add(Object, Object[], int)`                      | `java.util.ArrayList`                                |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |     Size | Sampled objects | Caller      | Location              |
| -----: | -------: | --------------: | ----------- | --------------------- |
| 100.0% | 2.25 MiB |               2 | `grow(int)` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

|     % |     Size | Sampled objects | Caller               | Location              |
| ----: | -------: | --------------: | -------------------- | --------------------- |
| 91.6% | 2.06 MiB |               1 | `grow()`             | `java.util.ArrayList` |
|  8.4% |  195 KiB |               1 | `addAll(Collection)` | `java.util.ArrayList` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |     Size | Sampled objects | Caller                         | Location                                             |
| -----: | -------: | --------------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 2.06 MiB |               7 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`)

|      % |     Size | Sampled objects | Caller                           | Location                                            |
| -----: | -------: | --------------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 2.06 MiB |               7 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001082400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`)

|      % |     Size | Sampled objects | Caller                                           | Location                           |
| -----: | -------: | --------------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 2.06 MiB |               7 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |     Size | Sampled objects | Caller                         | Location                                          |
| -----: | -------: | --------------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 2.06 MiB |               7 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |     Size | Sampled objects | Caller                     | Location                                          |
| -----: | -------: | --------------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 2.06 MiB |               7 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |     Size | Sampled objects | Caller                     | Location                   |
| -----: | -------: | --------------: | -------------------------- | -------------------------- |
| 100.0% | 2.06 MiB |               7 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |     Size | Sampled objects | Caller                                                      | Location                        |
| -----: | -------: | --------------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% | 2.06 MiB |               7 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Sampled objects | Caller                                 | Location                        |
| -----: | -------: | --------------: | -------------------------------------- | ------------------------------- |
| 100.0% | 2.06 MiB |               7 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Sampled objects | Caller           | Location                        |
| -----: | -------: | --------------: | ---------------- | ------------------------------- |
| 100.0% | 2.06 MiB |               7 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |     Size | Sampled objects | Caller           | Location                                   |
| -----: | -------: | --------------: | ---------------- | ------------------------------------------ |
| 100.0% | 2.06 MiB |               6 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

|      % |     Size | Sampled objects | Caller                          | Location                                       |
| -----: | -------: | --------------: | ------------------------------- | ---------------------------------------------- |
| 100.0% | 2.06 MiB |               4 | `forEachRemaining(IntConsumer)` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

|      % |     Size | Sampled objects | Caller                       | Location                      |
| -----: | -------: | --------------: | ---------------------------- | ----------------------------- |
| 100.0% | 2.06 MiB |               4 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

|      % |     Size | Sampled objects | Caller                        | Location                            |
| -----: | -------: | --------------: | ----------------------------- | ----------------------------------- |
| 100.0% | 2.06 MiB |               4 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Sampled objects | Caller                               | Location                            |
| -----: | -------: | --------------: | ------------------------------------ | ----------------------------------- |
| 100.0% | 2.06 MiB |               4 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Sampled objects | Caller                                            | Location                              |
| -----: | -------: | --------------: | ------------------------------------------------- | ------------------------------------- |
| 100.0% | 2.06 MiB |               4 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |
|  <0.1% |     48 B |               2 | `evaluate(Spliterator, boolean, IntFunction)`     | `java.util.stream.AbstractPipeline`   |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

|      % |     Size | Sampled objects | Caller                 | Location                            |
| -----: | -------: | --------------: | ---------------------- | ----------------------------------- |
| 100.0% | 2.06 MiB |               4 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Sampled objects | Caller               | Location                             |
| -----: | -------: | --------------: | -------------------- | ------------------------------------ |
| 100.0% | 2.06 MiB |               4 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

|      % |     Size | Sampled objects | Caller                        | Location                                    |
| -----: | -------: | --------------: | ----------------------------- | ------------------------------------------- |
| 100.0% | 2.06 MiB |               4 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|      % |     Size | Sampled objects | Caller               | Location                             |
| -----: | -------: | --------------: | -------------------- | ------------------------------------ |
| 100.0% | 2.06 MiB |               4 | `apply(Object)`      | `scala.runtime.function.JProcedure1` |
| 100.0% | 2.06 MiB |               4 | `foreach(Function1)` | `scala.collection.immutable.List`    |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |     Size | Sampled objects | Caller                                                                        | Location                                    |
| -----: | -------: | --------------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.06 MiB |               4 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `grow()` (`java.util.ArrayList`)

|      % |     Size | Sampled objects | Caller                       | Location              |
| -----: | -------: | --------------: | ---------------------------- | --------------------- |
| 100.0% | 2.06 MiB |               1 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % |     Size | Sampled objects | Caller        | Location              |
| -----: | -------: | --------------: | ------------- | --------------------- |
| 100.0% | 2.06 MiB |               1 | `add(Object)` | `java.util.ArrayList` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `grow(int)` (`java.util.ArrayList`)

|      % |     Size | Sampled objects | Callee                  | Location           |
| -----: | -------: | --------------: | ----------------------- | ------------------ |
| 100.0% | 2.25 MiB |               2 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |     Size | Sampled objects | Callee              | Location                                    |
| -----: | -------: | --------------: | ------------------- | ------------------------------------------- |
| 100.0% | 2.06 MiB |               6 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
|  <0.1% |     32 B |               1 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`)

|      % |     Size | Sampled objects | Callee           | Location                                   |
| -----: | -------: | --------------: | ---------------- | ------------------------------------------ |
| 100.0% | 2.06 MiB |               7 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`)

|      % |     Size | Sampled objects | Callee                         | Location                                             |
| -----: | -------: | --------------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 2.06 MiB |               7 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |     Size | Sampled objects | Callee                           | Location                                            |
| -----: | -------: | --------------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 2.06 MiB |               7 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001082400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |     Size | Sampled objects | Callee                                           | Location                           |
| -----: | -------: | --------------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 2.06 MiB |               7 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |     Size | Sampled objects | Callee                         | Location                                          |
| -----: | -------: | --------------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 2.06 MiB |               7 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |     Size | Sampled objects | Callee                     | Location                                          |
| -----: | -------: | --------------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 2.06 MiB |               7 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Sampled objects | Callee                     | Location                   |
| -----: | -------: | --------------: | -------------------------- | -------------------------- |
| 100.0% | 2.06 MiB |               7 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Sampled objects | Callee                                                      | Location                        |
| -----: | -------: | --------------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% | 2.06 MiB |               7 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Sampled objects | Callee                                 | Location                        |
| -----: | -------: | --------------: | -------------------------------------- | ------------------------------- |
| 100.0% | 2.06 MiB |               7 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |     Size | Sampled objects | Callee                                                                        | Location                                    |
| -----: | -------: | --------------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.06 MiB |               4 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|  <0.1% |    264 B |               1 | `<clinit>()`                                                                  | `scala.Predef$`                             |
|  <0.1% |     32 B |               1 | `apply(Function0)`                                                            | `scala.util.Try$`                           |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

|      % |     Size | Sampled objects | Callee           | Location                                                               |
| -----: | -------: | --------------: | ---------------- | ---------------------------------------------------------------------- |
| 100.0% | 2.06 MiB |               1 | `accept(Object)` | `java.util.stream.ReduceOps$3ReducingSink`                             |
|  <0.1% |     88 B |               3 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011818d8` |
|  <0.1% |     48 B |               2 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001181b10` |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

|      % |     Size | Sampled objects | Callee        | Location                           |
| -----: | -------: | --------------: | ------------- | ---------------------------------- |
| 100.0% | 2.06 MiB |               4 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

|      % |     Size | Sampled objects | Callee                          | Location                                       |
| -----: | -------: | --------------: | ------------------------------- | ---------------------------------------------- |
| 100.0% | 2.06 MiB |               4 | `forEachRemaining(IntConsumer)` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Sampled objects | Callee                       | Location                      |
| -----: | -------: | --------------: | ---------------------------- | ----------------------------- |
| 100.0% | 2.06 MiB |               4 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Sampled objects | Callee                        | Location                            |
| -----: | -------: | --------------: | ----------------------------- | ----------------------------------- |
| 100.0% | 2.06 MiB |               4 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

|      % |     Size | Sampled objects | Callee                               | Location                            |
| -----: | -------: | --------------: | ------------------------------------ | ----------------------------------- |
| 100.0% | 2.06 MiB |               4 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Sampled objects | Callee                                            | Location                              |
| -----: | -------: | --------------: | ------------------------------------------------- | ------------------------------------- |
| 100.0% | 2.06 MiB |               4 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

|      % |     Size | Sampled objects | Callee                 | Location                            |
| -----: | -------: | --------------: | ---------------------- | ----------------------------------- |
| 100.0% | 2.06 MiB |               4 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|      % |     Size | Sampled objects | Callee              | Location                                                               |
| -----: | -------: | --------------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 2.06 MiB |               4 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001178798` |
| 100.0% | 2.06 MiB |               4 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |     Size | Sampled objects | Callee          | Location                             |
| -----: | -------: | --------------: | --------------- | ------------------------------------ |
| 100.0% | 2.06 MiB |               4 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `grow()` (`java.util.ArrayList`)

|      % |     Size | Sampled objects | Callee      | Location              |
| -----: | -------: | --------------: | ----------- | --------------------- |
| 100.0% | 2.06 MiB |               1 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % |     Size | Sampled objects | Callee   | Location              |
| -----: | -------: | --------------: | -------- | --------------------- |
| 100.0% | 2.06 MiB |               1 | `grow()` | `java.util.ArrayList` |

## Hottest call stacks

Call stacks with the most bytes retained in their leaf frame.

|     % |     Size | Sampled objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | -------: | --------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 82.4% | 2.06 MiB |               1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `accept(Object, Object)` (`java.util.stream.Collectors$$Lambda.0x00000070010e3e58`) ← `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001178798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 10.0% |  256 KiB |               1 | `initTable()` (`java.util.concurrent.ConcurrentHashMap`) ← `putVal(Object, Object, boolean)` ← `put(Object, Object)` ← `storeString(String)` (`jdk.jfr.internal.StringPool`) ← `addString(String)` ← `putString(String)` (`jdk.jfr.internal.event.EventWriter`) ← `commit(long, long, long, String, String, boolean, long, long, long, long, long)` (`jdk.jfr.events.ActiveRecordingEvent`) ← `writeMetaEvents()` (`jdk.jfr.internal.PlatformRecorder`) ← `start(PlatformRecording)` ← `start()` (`jdk.jfr.internal.PlatformRecording`) ← `start()` (`jdk.jfr.Recording`) ← `execute(ArgumentParser)` (`jdk.jfr.internal.dcmd.DCmdStart`) ← `execute(String, String, char)` (`jdk.jfr.internal.dcmd.AbstractDCmd`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  7.6% |  195 KiB |               1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011e4d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| <0.1% |    264 B |               1 | `<clinit>()` (`scala.package$`) ← `<clinit>()` (`scala.Predef$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| <0.1% |     48 B |               2 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001181b10`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011818d8`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001178798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
| <0.1% |     40 B |               1 | `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001181d48`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`) ← `builder(long, IntFunction)` (`java.util.stream.Nodes`) ← `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`) ← `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`) ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011818d8`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001178798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                       |
| <0.1% |     32 B |               1 | `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`) ← `putVal(int, Object, Object, boolean, boolean)` ← `put(Object, Object)` ← `read(InputStream, String)` (`java.util.jar.Manifest`) ← `<init>(JarVerifier, InputStream, String)` ← `<init>(InputStream, String)` ← `getManifestFromReference()` (`java.util.jar.JarFile`) ← `getManifest()` ← `getManifest()` (`jdk.internal.loader.URLClassPath$JarLoader$2`) ← `defineClass(String, Resource)` (`java.net.URLClassLoader`) ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <0.1% |     32 B |               1 | `compress(char[], int, int)` (`java.lang.StringUTF16`) ← `<init>(char[], int, int, Void)` (`java.lang.String`) ← `<init>(char[], int, int)` ← `loadConvert(char[], int, int, StringBuilder)` (`java.util.Properties`) ← `load0(Properties$LineReader)` ← `load(InputStream)` ← `loadProperties(URL)` (`org.renaissance.core.ResourceUtils`) ← `loadPropertiesAsMap(URL)` ← `create(Path, String, Optional, Map, boolean)` (`org.renaissance.core.BenchmarkSuite`) ← `$anonfun$1(Config, Path)` (`org.renaissance.harness.RenaissanceSuite$`) ← `apply()` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700115e000`) ← `apply(Function0)` (`scala.util.Try$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

# Lock contention profile

Blocked 3.3ms over 7 contentions (468.8µs per contention).

| Category         |      % |  Time | Contentions |
| ---------------- | -----: | ----: | ----------: |
| Standard library | 100.0% | 3.3ms |           7 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 2.3ms (71.3%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 2.3ms (71.3%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       └── 2.3ms (71.3%) scan(ForkJoinPool$WorkQueue, int, int)
│           └── 2.3ms (71.3%) topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool$WorkQueue
│               └── 2.3ms (71.3%) doExec() at java.util.concurrent.ForkJoinTask
│                   └── … 2.3ms (71.3%) exec() at java.util.concurrent.RecursiveTask
│                       └── 2.3ms (71.3%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│                           └── 2.3ms (71.3%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│                               └── … 2.3ms (71.3%) computeClusterAverages() at org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│                                   └── 2.3ms (71.3%) average(List)
│                                       └── 2.3ms (71.3%) loadClass(String) at java.lang.ClassLoader
│                                           └── 2.3ms (71.3%) loadClass(String, boolean)
├── 0.9ms (27.0%) run() at java.lang.Thread
│   └── 0.9ms (27.0%) runWith(Object, Runnable)
│       ├── 0.7ms (20.4%) run() at jdk.jfr.internal.PlatformRecorder$$Lambda.0x0000007001042ce0
│       │   └── 0.7ms (20.4%) lambda$startDiskMonitor$1() at jdk.jfr.internal.PlatformRecorder
│       │       └── 0.7ms (20.4%) periodicTask()
│       └── 0.2ms (6.6%) run() at org.renaissance.core.DirUtils$$Lambda.0x0000007001009c80
│           └── 0.2ms (6.6%) lambda$createScratchDirectory$1(Path) at org.renaissance.core.DirUtils
│               └── 0.2ms (6.6%) deleteRecursively(Path)
│                   └── 0.2ms (6.6%) deleteRecursively(Path, boolean)
│                       └── 0.2ms (6.6%) loadClass(String) at java.lang.ClassLoader
│                           └── 0.2ms (6.6%) loadClass(String, boolean) at jdk.internal.loader.ClassLoaders$AppClassLoader
│                               └── 0.2ms (6.6%) loadClass(String, boolean) at jdk.internal.loader.BuiltinClassLoader
│                                   └── 0.2ms (6.6%) loadClassOrNull(String, boolean)
└── 0.1ms (1.7%) execute(String, String, char) at jdk.jfr.internal.dcmd.AbstractDCmd
    └── 0.1ms (1.7%) execute(ArgumentParser) at jdk.jfr.internal.dcmd.DCmdStart
        └── 0.1ms (1.7%) getId() at jdk.jfr.Recording
            └── 0.1ms (1.7%) getId() at jdk.jfr.internal.PlatformRecording
```

## Hottest functions

### Self time

Functions with the most time blocked within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |  Time | Contentions | Function                           | Location                                 |
| ----: | ----: | ----------: | ---------------------------------- | ---------------------------------------- |
| 71.3% | 2.3ms |           4 | `loadClass(String, boolean)`       | `java.lang.ClassLoader`                  |
| 20.4% | 0.7ms |           1 | `periodicTask()`                   | `jdk.jfr.internal.PlatformRecorder`      |
|  6.6% | 0.2ms |           1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |
|  1.7% | 0.1ms |           1 | `getId()`                          | `jdk.jfr.internal.PlatformRecording`     |

#### Lines

Lines with the largest contribution to each function's self time.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Location                    |
| -----: | ----: | ----------: | --------------------------- |
| 100.0% | 2.3ms |           4 | `java.lang.ClassLoader:573` |

##### `periodicTask()` (`jdk.jfr.internal.PlatformRecorder`)

|      % |  Time | Contentions | Location                                |
| -----: | ----: | ----------: | --------------------------------------- |
| 100.0% | 0.7ms |           1 | `jdk.jfr.internal.PlatformRecorder:526` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Location                                     |
| -----: | ----: | ----------: | -------------------------------------------- |
| 100.0% | 0.2ms |           1 | `jdk.internal.loader.BuiltinClassLoader:651` |

##### `getId()` (`jdk.jfr.internal.PlatformRecording`)

|      % |  Time | Contentions | Location                                 |
| -----: | ----: | ----------: | ---------------------------------------- |
| 100.0% | 0.1ms |           1 | `jdk.jfr.internal.PlatformRecording:433` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Caller              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 2.3ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `periodicTask()` (`jdk.jfr.internal.PlatformRecorder`)

|      % |  Time | Contentions | Caller                        | Location                            |
| -----: | ----: | ----------: | ----------------------------- | ----------------------------------- |
| 100.0% | 0.7ms |           1 | `lambda$startDiskMonitor$1()` | `jdk.jfr.internal.PlatformRecorder` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Caller                       | Location                                 |
| -----: | ----: | ----------: | ---------------------------- | ---------------------------------------- |
| 100.0% | 0.2ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `getId()` (`jdk.jfr.internal.PlatformRecording`)

|      % |  Time | Contentions | Caller    | Location            |
| -----: | ----: | ----------: | --------- | ------------------- |
| 100.0% | 0.1ms |           1 | `getId()` | `jdk.jfr.Recording` |

### Total time

Functions with the most time blocked within the function and its callees.

|     % |  Time | Contentions | Function                                             | Location                                                       |
| ----: | ----: | ----------: | ---------------------------------------------------- | -------------------------------------------------------------- |
| 77.9% | 2.6ms |           5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                                        |
| 71.3% | 2.3ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                                        |
| 71.3% | 2.3ms |           4 | `average(List)`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`         |
| 71.3% | 2.3ms |           4 | `computeClusterAverages()`                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`         |
| 71.3% | 2.3ms |           4 | `computeDirectly()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`         |
| 71.3% | 2.3ms |           4 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`         |
| 71.3% | 2.3ms |           4 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                           |
| 71.3% | 2.3ms |           4 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                            |
| 71.3% | 2.3ms |           4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                  |
| 71.3% | 2.3ms |           4 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                            |
| 71.3% | 2.3ms |           4 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                            |
| 71.3% | 2.3ms |           4 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                    |
| 59.6% | 2.0ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`                  |
| 59.6% | 2.0ms |           2 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                            |
| 59.6% | 2.0ms |           2 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                            |
| 27.0% | 0.9ms |           2 | `runWith(Object, Runnable)`                          | `java.lang.Thread`                                             |
| 27.0% | 0.9ms |           2 | `run()`                                              | `java.lang.Thread`                                             |
| 20.4% | 0.7ms |           1 | `periodicTask()`                                     | `jdk.jfr.internal.PlatformRecorder`                            |
| 20.4% | 0.7ms |           1 | `lambda$startDiskMonitor$1()`                        | `jdk.jfr.internal.PlatformRecorder`                            |
| 20.4% | 0.7ms |           1 | `run()`                                              | `jdk.jfr.internal.PlatformRecorder$$Lambda.0x0000007001042ce0` |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |  Time | Contentions | Function                                             | Location                                                       |
| ----: | ----: | ----------: | ---------------------------------------------------- | -------------------------------------------------------------- |
| 77.9% | 2.6ms |           5 | `loadClass(String)`                                  | `java.lang.ClassLoader`                                        |
| 71.3% | 2.3ms |           4 | `loadClass(String, boolean)`                         | `java.lang.ClassLoader`                                        |
| 71.3% | 2.3ms |           4 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                           |
| 71.3% | 2.3ms |           4 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                            |
| 71.3% | 2.3ms |           4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                  |
| 71.3% | 2.3ms |           4 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                            |
| 71.3% | 2.3ms |           4 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                            |
| 71.3% | 2.3ms |           4 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                    |
| 59.6% | 2.0ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`                  |
| 59.6% | 2.0ms |           2 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                            |
| 59.6% | 2.0ms |           2 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                            |
| 27.0% | 0.9ms |           2 | `runWith(Object, Runnable)`                          | `java.lang.Thread`                                             |
| 27.0% | 0.9ms |           2 | `run()`                                              | `java.lang.Thread`                                             |
| 20.4% | 0.7ms |           1 | `periodicTask()`                                     | `jdk.jfr.internal.PlatformRecorder`                            |
| 20.4% | 0.7ms |           1 | `lambda$startDiskMonitor$1()`                        | `jdk.jfr.internal.PlatformRecorder`                            |
| 20.4% | 0.7ms |           1 | `run()`                                              | `jdk.jfr.internal.PlatformRecorder$$Lambda.0x0000007001042ce0` |
|  6.6% | 0.2ms |           1 | `loadClassOrNull(String, boolean)`                   | `jdk.internal.loader.BuiltinClassLoader`                       |
|  6.6% | 0.2ms |           1 | `loadClass(String, boolean)`                         | `jdk.internal.loader.BuiltinClassLoader`                       |
|  6.6% | 0.2ms |           1 | `loadClass(String, boolean)`                         | `jdk.internal.loader.ClassLoaders$AppClassLoader`              |
|  1.7% | 0.1ms |           1 | `getId()`                                            | `jdk.jfr.internal.PlatformRecording`                           |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `loadClass(String)` (`java.lang.ClassLoader`)

|     % |  Time | Contentions | Caller                             | Location                                               |
| ----: | ----: | ----------: | ---------------------------------- | ------------------------------------------------------ |
| 91.5% | 2.3ms |           4 | `average(List)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  8.5% | 0.2ms |           1 | `deleteRecursively(Path, boolean)` | `org.renaissance.core.DirUtils`                        |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|      % |  Time | Contentions | Caller              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 2.3ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Caller                     | Location                                               |
| -----: | ----: | ----------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 2.3ms |           4 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Caller              | Location                                               |
| -----: | ----: | ----------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 2.3ms |           4 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Caller              | Location                                               |
| -----: | ----: | ----------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 2.3ms |           4 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% | 2.3ms |           4 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |  Time | Contentions | Caller   | Location                             |
| -----: | ----: | ----------: | -------- | ------------------------------------ |
| 100.0% | 2.3ms |           4 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |  Time | Contentions | Caller     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 2.3ms |           4 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Caller                                               | Location                                      |
| -----: | ----: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 2.3ms |           4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  83.6% | 2.0ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Caller                                   | Location                            |
| -----: | ----: | ----------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 2.3ms |           4 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Caller                              | Location                            |
| -----: | ----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 2.3ms |           4 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Caller  | Location                                    |
| -----: | ----: | ----------: | ------- | ------------------------------------------- |
| 100.0% | 2.3ms |           4 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Caller                 | Location                            |
| -----: | ----: | ----------: | ---------------------- | ----------------------------------- |
| 100.0% | 2.0ms |           2 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Caller   | Location                            |
| -----: | ----: | ----------: | -------- | ----------------------------------- |
| 100.0% | 2.0ms |           2 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Caller      | Location                                               |
| -----: | ----: | ----------: | ----------- | ------------------------------------------------------ |
| 100.0% | 2.0ms |           2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Caller  | Location           |
| -----: | ----: | ----------: | ------- | ------------------ |
| 100.0% | 0.9ms |           2 | `run()` | `java.lang.Thread` |

##### `periodicTask()` (`jdk.jfr.internal.PlatformRecorder`)

|      % |  Time | Contentions | Caller                        | Location                            |
| -----: | ----: | ----------: | ----------------------------- | ----------------------------------- |
| 100.0% | 0.7ms |           1 | `lambda$startDiskMonitor$1()` | `jdk.jfr.internal.PlatformRecorder` |

##### `lambda$startDiskMonitor$1()` (`jdk.jfr.internal.PlatformRecorder`)

|      % |  Time | Contentions | Caller  | Location                                                       |
| -----: | ----: | ----------: | ------- | -------------------------------------------------------------- |
| 100.0% | 0.7ms |           1 | `run()` | `jdk.jfr.internal.PlatformRecorder$$Lambda.0x0000007001042ce0` |

##### `run()` (`jdk.jfr.internal.PlatformRecorder$$Lambda.0x0000007001042ce0`)

|      % |  Time | Contentions | Caller                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 0.7ms |           1 | `runWith(Object, Runnable)` | `java.lang.Thread` |

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

##### `getId()` (`jdk.jfr.internal.PlatformRecording`)

|      % |  Time | Contentions | Caller    | Location            |
| -----: | ----: | ----------: | --------- | ------------------- |
| 100.0% | 0.1ms |           1 | `getId()` | `jdk.jfr.Recording` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `loadClass(String)` (`java.lang.ClassLoader`)

|     % |  Time | Contentions | Callee                       | Location                                          |
| ----: | ----: | ----------: | ---------------------------- | ------------------------------------------------- |
| 91.5% | 2.3ms |           4 | `loadClass(String, boolean)` | `java.lang.ClassLoader`                           |
|  8.5% | 0.2ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Callee              | Location                |
| -----: | ----: | ----------: | ------------------- | ----------------------- |
| 100.0% | 2.3ms |           4 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Callee          | Location                                               |
| -----: | ----: | ----------: | --------------- | ------------------------------------------------------ |
| 100.0% | 2.3ms |           4 | `average(List)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Time | Contentions | Callee                     | Location                                               |
| -----: | ----: | ----------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 2.3ms |           4 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% | 2.3ms |           4 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |  Time | Contentions | Callee              | Location                                               |
| -----: | ----: | ----------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 2.3ms |           4 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  83.6% | 2.0ms |           2 | `join()`            | `java.util.concurrent.ForkJoinTask`                    |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |  Time | Contentions | Callee      | Location                                               |
| -----: | ----: | ----------: | ----------- | ------------------------------------------------------ |
| 100.0% | 2.3ms |           4 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee   | Location                             |
| -----: | ----: | ----------: | -------- | ------------------------------------ |
| 100.0% | 2.3ms |           4 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 2.3ms |           4 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Callee                                               | Location                                      |
| -----: | ----: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 2.3ms |           4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Callee                                   | Location                            |
| -----: | ----: | ----------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 2.3ms |           4 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % |  Time | Contentions | Callee                              | Location                            |
| -----: | ----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 2.3ms |           4 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |  Time | Contentions | Callee     | Location                            |
| -----: | ----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 2.0ms |           2 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee                                    | Location                                      |
| -----: | ----: | ----------: | ----------------------------------------- | --------------------------------------------- |
| 100.0% | 2.0ms |           2 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee                 | Location                            |
| -----: | ----: | ----------: | ---------------------- | ----------------------------------- |
| 100.0% | 2.0ms |           2 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|     % |  Time | Contentions | Callee  | Location                                                       |
| ----: | ----: | ----------: | ------- | -------------------------------------------------------------- |
| 75.5% | 0.7ms |           1 | `run()` | `jdk.jfr.internal.PlatformRecorder$$Lambda.0x0000007001042ce0` |
| 24.5% | 0.2ms |           1 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x0000007001009c80`     |

##### `run()` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 0.9ms |           2 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `lambda$startDiskMonitor$1()` (`jdk.jfr.internal.PlatformRecorder`)

|      % |  Time | Contentions | Callee           | Location                            |
| -----: | ----: | ----------: | ---------------- | ----------------------------------- |
| 100.0% | 0.7ms |           1 | `periodicTask()` | `jdk.jfr.internal.PlatformRecorder` |

##### `run()` (`jdk.jfr.internal.PlatformRecorder$$Lambda.0x0000007001042ce0`)

|      % |  Time | Contentions | Callee                        | Location                            |
| -----: | ----: | ----------: | ----------------------------- | ----------------------------------- |
| 100.0% | 0.7ms |           1 | `lambda$startDiskMonitor$1()` | `jdk.jfr.internal.PlatformRecorder` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

|      % |  Time | Contentions | Callee                             | Location                                 |
| -----: | ----: | ----------: | ---------------------------------- | ---------------------------------------- |
| 100.0% | 0.2ms |           1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`)

|      % |  Time | Contentions | Callee                       | Location                                 |
| -----: | ----: | ----------: | ---------------------------- | ---------------------------------------- |
| 100.0% | 0.2ms |           1 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

## Hottest call stacks

Call stacks with the most time blocked in their leaf frame.

|     % |  Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----: | ----: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 59.6% | 2.0ms |           2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
| 20.4% | 0.7ms |           1 | `periodicTask()` (`jdk.jfr.internal.PlatformRecorder`) ← `lambda$startDiskMonitor$1()` ← `run()` (`jdk.jfr.internal.PlatformRecorder$$Lambda.0x0000007001042ce0`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 11.7% | 0.4ms |           2 | `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                   |
|  6.6% | 0.2ms |           1 | `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`) ← `loadClass(String, boolean)` ← `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`) ← `loadClass(String)` (`java.lang.ClassLoader`) ← `deleteRecursively(Path, boolean)` (`org.renaissance.core.DirUtils`) ← `deleteRecursively(Path)` ← `lambda$createScratchDirectory$1(Path)` ← `run()` (`org.renaissance.core.DirUtils$$Lambda.0x0000007001009c80`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.7% | 0.1ms |           1 | `getId()` (`jdk.jfr.internal.PlatformRecording`) ← `getId()` (`jdk.jfr.Recording`) ← `execute(ArgumentParser)` (`jdk.jfr.internal.dcmd.DCmdStart`) ← `execute(String, String, char)` (`jdk.jfr.internal.dcmd.AbstractDCmd`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

# Thread park profile

Parked 46.87s over 72,938 parks (642.6µs per park).

| Category         |      % |   Time |  Parks |
| ---------------- | -----: | -----: | -----: |
| Standard library | 100.0% | 46.87s | 72,938 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 39.35s (84.0%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 39.35s (84.0%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       ├── 27.58s (58.9%) awaitWork(ForkJoinPool$WorkQueue)
│       │   ├── 26.27s (56.1%) park() at java.util.concurrent.locks.LockSupport
│       │   │   └── 26.27s (56.1%, self 100.0% globally) park(boolean, long) at jdk.internal.misc.Unsafe
│       │   └── 1.31s (2.8%) parkUntil(long) at java.util.concurrent.locks.LockSupport
│       │       └── 1.31s (2.8%) park(boolean, long) at jdk.internal.misc.Unsafe
│       └── 11.77s (25.1%) scan(ForkJoinPool$WorkQueue, int, int)
│           └── 11.77s (25.1%) topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool$WorkQueue
│               └── 11.77s (25.1%) doExec() at java.util.concurrent.ForkJoinTask
│                   └── … 11.77s (25.1%) exec() at java.util.concurrent.RecursiveTask
│                       └── 11.77s (25.1%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│                           └── 11.77s (25.1%) join() at java.util.concurrent.ForkJoinTask
│                               └── 11.77s (25.1%) awaitDone(int, long)
│                                   └── 11.77s (25.1%) park() at java.util.concurrent.locks.LockSupport
│                                       └── 11.77s (25.1%) park(boolean, long) at jdk.internal.misc.Unsafe
└── … 7.52s (16.0%) invoke(Object, Object[]) at jdk.internal.reflect.DirectMethodHandleAccessor
    └── 7.52s (16.0%) invokeImpl(Object, Object[])
        └── 7.52s (16.0%) invokeExact_MT(Object, Object, Object, Object) at java.lang.invoke.Invokers$Holder
            └── 7.52s (16.0%) invoke(Object, Object, Object) at java.lang.invoke.LambdaForm$MH.0x0000007001082400
                └── 7.52s (16.0%) invokeStatic(Object, Object) at java.lang.invoke.LambdaForm$DMH.0x0000007001001c00
                    └── 7.52s (16.0%) main(String[]) at org.renaissance.harness.RenaissanceSuite
                        └── 7.52s (16.0%) main(String[]) at org.renaissance.harness.RenaissanceSuite$
                            └── 7.52s (16.0%) runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)
                                └── 7.52s (16.0%) foreach(Function1) at scala.collection.immutable.List
                                    └── 7.52s (16.0%) apply(Object) at scala.runtime.function.JProcedure1
                                        └── … 7.52s (16.0%) applyVoid(Object) at org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001178798
                                            └── 7.52s (16.0%) runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor) at org.renaissance.harness.RenaissanceSuite$
                                                └── 7.52s (16.0%) executeBenchmark() at org.renaissance.harness.ExecutionDriver
                                                    └── 7.52s (16.0%) executeOperation(int)
                                                        └── 7.52s (16.0%) run(BenchmarkContext) at org.renaissance.jdk.concurrent.FjKmeans
                                                            └── 7.52s (16.0%) map(Function1) at scala.collection.immutable.Range
                                                                └── 7.52s (16.0%) apply(Object) at org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011d6c70
                                                                    └── 7.52s (16.0%) $anonfun$adapted$1(Object) at org.renaissance.jdk.concurrent.FjKmeans
                                                                        └── 7.52s (16.0%) $anonfun$1(int)
                                                                            └── 7.52s (16.0%) run(int, List, int) at org.renaissance.jdk.concurrent.JavaKMeans
                                                                                └── 7.52s (16.0%) get() at java.util.concurrent.ForkJoinTask
                                                                                    └── 7.52s (16.0%) awaitDone(int, long)
                                                                                        └── 7.52s (16.0%) park() at java.util.concurrent.locks.LockSupport
                                                                                            └── 7.52s (16.0%) park(boolean, long) at jdk.internal.misc.Unsafe
```

## Hottest functions

### Self time

Functions with the most time parked within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|      % |   Time |  Parks | Function              | Location                   |
| -----: | -----: | -----: | --------------------- | -------------------------- |
| 100.0% | 46.87s | 72,938 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % |   Time |  Parks | Caller                    | Location                                 |
| ----: | -----: | -----: | ------------------------- | ---------------------------------------- |
| 97.2% | 45.56s | 69,197 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
|  2.8% |  1.31s |  3,740 | `parkUntil(long)`         | `java.util.concurrent.locks.LockSupport` |
| <0.1% |  0.3ms |      1 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

### Total time

Functions with the most time parked within the function and its callees.

|      % |   Time |  Parks | Function                                                                                                               | Location                                                               |
| -----: | -----: | -----: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% | 46.87s | 72,938 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                             |
|  97.2% | 45.56s | 69,197 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                               |
|  84.0% | 39.35s | 72,921 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
|  84.0% | 39.35s | 72,921 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                            |
|  58.9% | 27.58s | 28,785 | `awaitWork(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
|  41.1% | 19.28s | 44,152 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
|  25.1% | 11.77s | 44,136 | `join()`                                                                                                               | `java.util.concurrent.ForkJoinTask`                                    |
|  25.1% | 11.77s | 44,136 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  25.1% | 11.77s | 44,136 | `exec()`                                                                                                               | `java.util.concurrent.RecursiveTask`                                   |
|  25.1% | 11.77s | 44,136 | `doExec()`                                                                                                             | `java.util.concurrent.ForkJoinTask`                                    |
|  25.1% | 11.77s | 44,136 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`                                                                   | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
|  25.1% | 11.77s | 44,136 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                               | `java.util.concurrent.ForkJoinPool`                                    |
|  16.0% |  7.52s |     17 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  16.0% |  7.52s |     17 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  16.0% |  7.52s |     17 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001178798` |
|  16.0% |  7.52s |     17 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
|  16.0% |  7.52s |     17 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  16.0% |  7.52s |     17 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  16.0% |  7.52s |     17 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  16.0% |  7.52s |     17 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|      % |   Time |  Parks | Function                                             | Location                                             |
| -----: | -----: | -----: | ---------------------------------------------------- | ---------------------------------------------------- |
| 100.0% | 46.87s | 72,938 | `park(boolean, long)`                                | `jdk.internal.misc.Unsafe`                           |
|  97.2% | 45.56s | 69,197 | `park()`                                             | `java.util.concurrent.locks.LockSupport`             |
|  84.0% | 39.35s | 72,921 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
|  84.0% | 39.35s | 72,921 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`          |
|  58.9% | 27.58s | 28,785 | `awaitWork(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                  |
|  41.1% | 19.28s | 44,152 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                  |
|  25.1% | 11.77s | 44,136 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                  |
|  25.1% | 11.77s | 44,136 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                 |
|  25.1% | 11.77s | 44,136 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                  |
|  25.1% | 11.77s | 44,136 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
|  25.1% | 11.77s | 44,136 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                  |
|  16.0% |  7.52s |     17 | `apply(Object)`                                      | `scala.runtime.function.JProcedure1`                 |
|  16.0% |  7.52s |     17 | `foreach(Function1)`                                 | `scala.collection.immutable.List`                    |
|  16.0% |  7.52s |     17 | `invokeStatic(Object, Object)`                       | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
|  16.0% |  7.52s |     17 | `invoke(Object, Object, Object)`                     | `java.lang.invoke.LambdaForm$MH.0x0000007001082400`  |
|  16.0% |  7.52s |     17 | `invokeExact_MT(Object, Object, Object, Object)`     | `java.lang.invoke.Invokers$Holder`                   |
|  16.0% |  7.52s |     17 | `invokeImpl(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  16.0% |  7.52s |     17 | `invoke(Object, Object[])`                           | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  16.0% |  7.52s |     17 | `invoke(Object, Object[])`                           | `java.lang.reflect.Method`                           |
|  16.0% |  7.52s |     16 | `get()`                                              | `java.util.concurrent.ForkJoinTask`                  |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % |   Time |  Parks | Caller                    | Location                                 |
| ----: | -----: | -----: | ------------------------- | ---------------------------------------- |
| 97.2% | 45.56s | 69,197 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
|  2.8% |  1.31s |  3,740 | `parkUntil(long)`         | `java.util.concurrent.locks.LockSupport` |
| <0.1% |  0.3ms |      1 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|     % |   Time |  Parks | Caller                              | Location                            |
| ----: | -----: | -----: | ----------------------------------- | ----------------------------------- |
| 57.7% | 26.27s | 25,045 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |
| 42.3% | 19.28s | 44,152 | `awaitDone(int, long)`              | `java.util.concurrent.ForkJoinTask` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |   Time |  Parks | Caller  | Location                                    |
| -----: | -----: | -----: | ------- | ------------------------------------------- |
| 100.0% | 39.35s | 72,921 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |   Time |  Parks | Caller                              | Location                            |
| -----: | -----: | -----: | ----------------------------------- | ----------------------------------- |
| 100.0% | 27.58s | 28,785 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % |   Time |  Parks | Caller   | Location                            |
| ----: | -----: | -----: | -------- | ----------------------------------- |
| 61.0% | 11.77s | 44,136 | `join()` | `java.util.concurrent.ForkJoinTask` |
| 39.0% |  7.52s |     16 | `get()`  | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time |  Parks | Caller      | Location                                               |
| -----: | -----: | -----: | ----------- | ------------------------------------------------------ |
| 100.0% | 11.77s | 44,136 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |   Time |  Parks | Caller   | Location                             |
| -----: | -----: | -----: | -------- | ------------------------------------ |
| 100.0% | 11.77s | 44,136 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |   Time |  Parks | Caller     | Location                            |
| -----: | -----: | -----: | ---------- | ----------------------------------- |
| 100.0% | 11.77s | 44,136 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time |  Parks | Caller                                                    | Location                                      |
| -----: | -----: | -----: | --------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 11.77s | 44,136 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  55.0% |  6.47s | 26,354 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  25.5% |  3.00s | 15,603 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  17.7% |  2.09s |  8,995 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |   Time |  Parks | Caller                                   | Location                            |
| -----: | -----: | -----: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 11.77s | 44,136 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |   Time |  Parks | Caller                              | Location                            |
| -----: | -----: | -----: | ----------------------------------- | ----------------------------------- |
| 100.0% | 11.77s | 44,136 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|      % |  Time | Parks | Caller                                                                                                                 | Location                                    |
| -----: | ----: | ----: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 7.52s |    17 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Parks | Caller              | Location                                                               |
| -----: | ----: | ----: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 7.52s |    17 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001178798` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001178798`)

|      % |  Time | Parks | Caller          | Location                             |
| -----: | ----: | ----: | --------------- | ------------------------------------ |
| 100.0% | 7.52s |    17 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|      % |  Time | Parks | Caller               | Location                             |
| -----: | ----: | ----: | -------------------- | ------------------------------------ |
| 100.0% | 7.52s |    17 | `apply(Object)`      | `scala.runtime.function.JProcedure1` |
| 100.0% | 7.52s |    17 | `foreach(Function1)` | `scala.collection.immutable.List`    |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |  Time | Parks | Caller                                                                        | Location                                    |
| -----: | ----: | ----: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 7.52s |    17 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Parks | Caller           | Location                                    |
| -----: | ----: | ----: | ---------------- | ------------------------------------------- |
| 100.0% | 7.52s |    17 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Parks | Caller           | Location                                   |
| -----: | ----: | ----: | ---------------- | ------------------------------------------ |
| 100.0% | 7.52s |    17 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |  Time | Parks | Caller                         | Location                                             |
| -----: | ----: | ----: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 7.52s |    17 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`)

|      % |  Time | Parks | Caller                           | Location                                            |
| -----: | ----: | ----: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 7.52s |    17 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001082400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`)

|      % |  Time | Parks | Caller                                           | Location                           |
| -----: | ----: | ----: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 7.52s |    17 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |  Time | Parks | Caller                         | Location                                          |
| -----: | ----: | ----: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 7.52s |    17 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |  Time | Parks | Caller                     | Location                                          |
| -----: | ----: | ----: | -------------------------- | ------------------------------------------------- |
| 100.0% | 7.52s |    17 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |  Time | Parks | Caller                     | Location                   |
| -----: | ----: | ----: | -------------------------- | -------------------------- |
| 100.0% | 7.52s |    17 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |  Time | Parks | Caller                                                      | Location                        |
| -----: | ----: | ----: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% | 7.52s |    17 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Parks | Caller                | Location                                    |
| -----: | ----: | ----: | --------------------- | ------------------------------------------- |
| 100.0% | 7.52s |    16 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % |   Time |  Parks | Callee                | Location                   |
| -----: | -----: | -----: | --------------------- | -------------------------- |
| 100.0% | 45.56s | 69,197 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % |   Time |  Parks | Callee                                   | Location                            |
| ----: | -----: | -----: | ---------------------------------------- | ----------------------------------- |
| 70.1% | 27.58s | 28,785 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |
| 29.9% | 11.77s | 44,136 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % |   Time |  Parks | Callee                              | Location                            |
| -----: | -----: | -----: | ----------------------------------- | ----------------------------------- |
| 100.0% | 39.35s | 72,921 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % |   Time |  Parks | Callee            | Location                                 |
| ----: | -----: | -----: | ----------------- | ---------------------------------------- |
| 95.2% | 26.27s | 25,045 | `park()`          | `java.util.concurrent.locks.LockSupport` |
|  4.8% |  1.31s |  3,740 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time |  Parks | Callee                                                    | Location                                      |
| -----: | -----: | -----: | --------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 19.28s | 44,152 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
|  33.6% |  6.47s | 26,354 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  15.5% |  3.00s | 15,603 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time |  Parks | Callee                 | Location                            |
| -----: | -----: | -----: | ---------------------- | ----------------------------------- |
| 100.0% | 11.77s | 44,136 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |   Time |  Parks | Callee              | Location                                               |
| -----: | -----: | -----: | ------------------- | ------------------------------------------------------ |
| 100.0% | 11.77s | 44,136 | `join()`            | `java.util.concurrent.ForkJoinTask`                    |
|  13.4% |  1.57s |  6,125 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |   Time |  Parks | Callee      | Location                                               |
| -----: | -----: | -----: | ----------- | ------------------------------------------------------ |
| 100.0% | 11.77s | 44,136 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |    Time |  Parks | Callee   | Location                                            |
| -----: | ------: | -----: | -------- | --------------------------------------------------- |
| 100.0% |  11.77s | 44,136 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|   6.5% | 765.8ms |  4,053 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |   Time |  Parks | Callee     | Location                            |
| -----: | -----: | -----: | ---------- | ----------------------------------- |
| 100.0% | 11.77s | 44,136 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |   Time |  Parks | Callee                                               | Location                                      |
| -----: | -----: | -----: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 11.77s | 44,136 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|      % |  Time | Parks | Callee                               | Location                                  |
| -----: | ----: | ----: | ------------------------------------ | ----------------------------------------- |
| 100.0% | 7.52s |    16 | `executeOperation(int)`              | `org.renaissance.harness.ExecutionDriver` |
|  <0.1% | 0.3ms |     1 | `tearDownAfterAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Parks | Callee               | Location                                  |
| -----: | ----: | ----: | -------------------- | ----------------------------------------- |
| 100.0% | 7.52s |    17 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001178798`)

|      % |  Time | Parks | Callee                                                                                                                 | Location                                    |
| -----: | ----: | ----: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 7.52s |    17 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|      % |  Time | Parks | Callee              | Location                                                               |
| -----: | ----: | ----: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 7.52s |    17 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001178798` |
| 100.0% | 7.52s |    17 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |  Time | Parks | Callee          | Location                             |
| -----: | ----: | ----: | --------------- | ------------------------------------ |
| 100.0% | 7.52s |    17 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Parks | Callee               | Location                          |
| -----: | ----: | ----: | -------------------- | --------------------------------- |
| 100.0% | 7.52s |    17 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Parks | Callee                                                                        | Location                                    |
| -----: | ----: | ----: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 7.52s |    17 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |  Time | Parks | Callee           | Location                                    |
| -----: | ----: | ----: | ---------------- | ------------------------------------------- |
| 100.0% | 7.52s |    17 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`)

|      % |  Time | Parks | Callee           | Location                                   |
| -----: | ----: | ----: | ---------------- | ------------------------------------------ |
| 100.0% | 7.52s |    17 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`)

|      % |  Time | Parks | Callee                         | Location                                             |
| -----: | ----: | ----: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 7.52s |    17 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |  Time | Parks | Callee                           | Location                                            |
| -----: | ----: | ----: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 7.52s |    17 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007001082400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |  Time | Parks | Callee                                           | Location                           |
| -----: | ----: | ----: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 7.52s |    17 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |  Time | Parks | Callee                         | Location                                          |
| -----: | ----: | ----: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 7.52s |    17 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |  Time | Parks | Callee                     | Location                                          |
| -----: | ----: | ----: | -------------------------- | ------------------------------------------------- |
| 100.0% | 7.52s |    17 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Parks | Callee                 | Location                            |
| -----: | ----: | ----: | ---------------------- | ----------------------------------- |
| 100.0% | 7.52s |    16 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

## Hottest call stacks

Call stacks with the most time parked in their leaf frame.

|     % |    Time |  Parks | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----: | ------: | -----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 56.1% |  26.27s | 25,045 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 16.0% |   7.52s |     16 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011d6c70`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x0000007001178798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                           |
|  9.2% |   4.31s | 13,591 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  3.5% |   1.66s |  5,336 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.8% |   1.31s |  3,740 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.7% | 804.0ms |  2,476 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.0% | 460.4ms |  2,134 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.8% | 380.0ms |  1,275 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                         |
|  0.6% | 289.9ms |    667 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.6% | 261.0ms |  1,269 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.4% | 179.2ms |    682 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.4% | 172.2ms |    587 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.3% | 158.8ms |    759 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                   |
|  0.3% | 155.1ms |    339 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.3% | 154.9ms |    557 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)       |
|  0.3% | 151.6ms |    593 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.3% | 117.7ms |    773 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.2% | 106.1ms |    506 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|  0.2% |  81.5ms |    323 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011dfbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.2% |  81.0ms |    419 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                   |

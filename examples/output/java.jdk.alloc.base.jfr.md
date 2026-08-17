# Sampling profile

Collected 1,962 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 90.2% |   1,769 |
| Standard library |  9.8% |     193 |

## Call tree

Call paths to the hottest functions.

```
├── 1,944 samples (99.1%) run()  java.util.concurrent.ForkJoinWorkerThread
│   └── 1,944 samples (99.1%) runWorker(ForkJoinPool$WorkQueue)  java.util.concurrent.ForkJoinPool
│       └── 1,940 samples (98.9%) [[via 2 frames]] doExec()  (self 0.5%)  java.util.concurrent.ForkJoinTask
│           ├── 1,891 samples (96.4%) [[via 5–7 frames]] exec()  java.util.concurrent.RecursiveTask
│           │   └── 1,891 samples (96.4%) compute()  org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│           │       ├── 953 samples (48.6%) computeDirectly()  (self 1.2%)  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│           │       │   ├── 692 samples (35.3%) [[via 1 frame]] findNearestCentroid()  (self 14.6%)  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│           │       │   │   └── 405 samples (20.6%) distance(Double[], Double[])
│           │       │   └── 238 samples (12.1%) [[via 1 frame]] collectClusters(int[])  (self 6.6%)  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│           │       │       ├── 73 samples (3.7%) computeIfAbsent(Object, Function)  (self 3.5%)  java.util.HashMap
│           │       │       └── 36 samples (1.8%) [[via 4 frames]] copyOf(Object[], int)  java.util.Arrays
│           │       ├── 894 samples (45.6%) computeDirectly()  org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│           │       │   └── 894 samples (45.6%) [[via 1 frame]] vectorSum()  (self 3.3%)  org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│           │       │       ├── 828 samples (42.2%) accumulate(Double[], double[])  (43.1% self in 153 call stacks)
│           │       │       └── 2 samples (0.1%) get(int)  java.util.ArrayList
│           │       │           └── 2 samples (0.1%) checkIndex(int, int)  java.util.Objects
│           │       ├── 22 samples (1.1%) [[via 2 frames]] merge(Map, Map)  org.renaissance.jdk.concurrent.JavaKMeans
│           │       │   ├── 11 samples (0.6%) [[via 2 frames]] lambda$merge$7(Map, Object, List)  org.renaissance.jdk.concurrent.JavaKMeans
│           │       │   │   └── 9 samples (0.5%) merge(Object, Object, BiFunction)  java.util.HashMap
│           │       │   └── 10 samples (0.5%) <init>(Map)  java.util.HashMap
│           │       │       └── 8 samples (0.4%) putMapEntries(Map, boolean)
│           │       │           ├── 3 samples (0.2%) next()  java.util.HashMap$EntryIterator
│           │       │           │   └── 3 samples (0.2%) [[via 1 frame]] nextNode()  java.util.HashMap$HashIterator
│           │       │           └── 2 samples (0.1%) [[via 2 frames]] <init>(HashMap)  java.util.HashMap$HashIterator
│           │       └── 19 samples (1.0%) join()  java.util.concurrent.ForkJoinTask
│           │           └── 17 samples (0.9%) awaitDone(int, long)
│           │               ├── 10 samples (0.5%) helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)  java.util.concurrent.ForkJoinPool
│           │               ├── 4 samples (0.2%) tryRemoveAndExec(ForkJoinTask, boolean)  java.util.concurrent.ForkJoinPool$WorkQueue
│           │               └── 1 sample (0.1%) park()  java.util.concurrent.locks.LockSupport
│           │                   └── 1 sample (0.1%) park(boolean, long)  jdk.internal.misc.Unsafe
│           └── 39 samples (2.0%) exec()  java.util.concurrent.RecursiveTask
│               └── 39 samples (2.0%) compute()  org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│                   └── 39 samples (2.0%) 6 more branches, largest computeDirectly() (0.9%)  org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask and join() (0.5%)
└── 16 samples (0.8%) [[via 2 frames]] loadAndInvokeHarnessClass(ModuleLoader, String, String[])  org.renaissance.core.Launcher
    ├── 12 samples (0.6%) [[via 7 frames]] main(String[])  org.renaissance.harness.RenaissanceSuite$
    │   ├── 6 samples (0.3%) [[via 12 frames]] wrapAndCopyInto(Sink, Spliterator)  java.util.stream.AbstractPipeline
    │   │   ├── 3 samples (0.2%) [[via 10 frames]] wrapSink(Sink)  java.util.stream.AbstractPipeline
    │   │   └── 2 samples (0.1%) [[via 9 frames]] allocateInstance(Class)  jdk.internal.misc.Unsafe
    │   └── 1 sample (0.1%) [[via 22 frames]] readBytes0(byte[], int, int)  java.io.RandomAccessFile
    └── 2 samples (0.1%) [[via 8 frames]] inflateBytesBytes(long, byte[], int, int, byte[], int, int)  java.util.zip.Inflater
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                                                      | Location                                                   |
| ----: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------- |
| 43.1% |     845 | `accumulate(Double[], double[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 20.7% |     406 | `distance(Double[], Double[])`                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 14.8% |     291 | `findNearestCentroid()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  6.7% |     131 | `collectClusters(int[])`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  3.6% |      70 | `computeIfAbsent(Object, Function)`                           | `java.util.HashMap`                                        |
|  3.3% |      65 | `vectorSum()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  2.0% |      39 | `copyOf(Object[], int)`                                       | `java.util.Arrays`                                         |
|  1.2% |      23 | `computeDirectly()`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.8% |      16 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`     | `java.util.concurrent.ForkJoinPool`                        |
|  0.5% |      10 | `doExec()`                                                    | `java.util.concurrent.ForkJoinTask`                        |
|  0.4% |       8 | `merge(Object, Object, BiFunction)`                           | `java.util.HashMap`                                        |
|  0.3% |       6 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                                   |
|  0.2% |       4 | `tryRemoveAndExec(ForkJoinTask, boolean)`                     | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
|  0.2% |       3 | `wrapSink(Sink)`                                              | `java.util.stream.AbstractPipeline`                        |
|  0.2% |       3 | `awaitDone(int, long)`                                        | `java.util.concurrent.ForkJoinTask`                        |
|  0.2% |       3 | `nextNode()`                                                  | `java.util.HashMap$HashIterator`                           |
|  0.1% |       2 | `readBytes0(byte[], int, int)`                                | `java.io.RandomAccessFile`                                 |
|  0.1% |       2 | `allocateInstance(Class)`                                     | `jdk.internal.misc.Unsafe`                                 |
|  0.1% |       2 | `join()`                                                      | `java.util.concurrent.ForkJoinTask`                        |
|  0.1% |       2 | `runWorker(ForkJoinPool$WorkQueue)`                           | `java.util.concurrent.ForkJoinPool`                        |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Ours

|     % | Samples | Function                             | Location                                                                              |
| ----: | ------: | ------------------------------------ | ------------------------------------------------------------------------------------- |
| 43.1% |     845 | `accumulate(Double[], double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| 20.7% |     406 | `distance(Double[], Double[])`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| 14.8% |     291 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  6.7% |     131 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  3.3% |      65 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  1.2% |      23 | `computeDirectly()`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  0.1% |       2 | `lambda$merge$7(Map, Object, List)`  | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  0.1% |       2 | `apply(Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000a001204b38` |
|  0.1% |       2 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  0.1% |       1 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                                           |
|  0.1% |       1 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |

##### Standard library

|    % | Samples | Function                                                      | Location                                      |
| ---: | ------: | ------------------------------------------------------------- | --------------------------------------------- |
| 3.6% |      70 | `computeIfAbsent(Object, Function)`                           | `java.util.HashMap`                           |
| 2.0% |      39 | `copyOf(Object[], int)`                                       | `java.util.Arrays`                            |
| 0.8% |      16 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`     | `java.util.concurrent.ForkJoinPool`           |
| 0.5% |      10 | `doExec()`                                                    | `java.util.concurrent.ForkJoinTask`           |
| 0.4% |       8 | `merge(Object, Object, BiFunction)`                           | `java.util.HashMap`                           |
| 0.3% |       6 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                      |
| 0.2% |       4 | `tryRemoveAndExec(ForkJoinTask, boolean)`                     | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 0.2% |       3 | `wrapSink(Sink)`                                              | `java.util.stream.AbstractPipeline`           |
| 0.2% |       3 | `awaitDone(int, long)`                                        | `java.util.concurrent.ForkJoinTask`           |
| 0.2% |       3 | `nextNode()`                                                  | `java.util.HashMap$HashIterator`              |
| 0.1% |       2 | `readBytes0(byte[], int, int)`                                | `java.io.RandomAccessFile`                    |
| 0.1% |       2 | `allocateInstance(Class)`                                     | `jdk.internal.misc.Unsafe`                    |
| 0.1% |       2 | `join()`                                                      | `java.util.concurrent.ForkJoinTask`           |
| 0.1% |       2 | `runWorker(ForkJoinPool$WorkQueue)`                           | `java.util.concurrent.ForkJoinPool`           |
| 0.1% |       2 | `checkIndex(int, int)`                                        | `java.util.Objects`                           |
| 0.1% |       2 | `<init>(HashMap)`                                             | `java.util.HashMap$HashIterator`              |
| 0.1% |       2 | `<init>(Map)`                                                 | `java.util.HashMap`                           |
| 0.1% |       2 | `park(boolean, long)`                                         | `jdk.internal.misc.Unsafe`                    |
| 0.1% |       2 | `putVal(int, Object, Object, boolean, boolean)`               | `java.util.HashMap`                           |
| 0.1% |       2 | `push(ForkJoinTask, ForkJoinPool, boolean)`                   | `java.util.concurrent.ForkJoinPool$WorkQueue` |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |     845 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |     406 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 92.8% |     270 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
|  6.2% |      18 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |
|  1.0% |       3 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 70.2% |      92 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
| 29.0% |      38 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |
|  0.8% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 97.1% |      68 | `java.util.HashMap:1219` |
|  2.9% |       2 | `java.util.HashMap:1206` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 93.8% |      61 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |
|  4.6% |       3 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |
|  1.5% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      39 | `java.util.Arrays:3482` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |      23 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:204` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 50.0% |       8 | `java.util.concurrent.ForkJoinPool:2053` |
| 25.0% |       4 | `java.util.concurrent.ForkJoinPool:2058` |
| 25.0% |       4 | `java.util.concurrent.ForkJoinPool:2039` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |      10 | `java.util.concurrent.ForkJoinTask:387` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 50.0% |       4 | `java.util.HashMap:1384` |
| 50.0% |       4 | `java.util.HashMap:1371` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|     % | Samples | Location                                           |
| ----: | ------: | -------------------------------------------------- |
| 75.0% |       3 | `java.util.concurrent.ForkJoinPool$WorkQueue:1347` |
| 25.0% |       1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1332` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       3 | `java.util.stream.AbstractPipeline:546` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Location                                |
| ----: | ------: | --------------------------------------- |
| 66.7% |       2 | `java.util.concurrent.ForkJoinTask:423` |
| 33.3% |       1 | `java.util.concurrent.ForkJoinTask:437` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       3 | `java.util.HashMap$HashIterator:1609` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       2 | `java.util.concurrent.ForkJoinTask:654` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       2 | `java.util.concurrent.ForkJoinPool:1808` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans:112` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       2 | `java.util.Objects:385` |

##### `<init>(HashMap)` (`java.util.HashMap$HashIterator`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       2 | `java.util.HashMap$HashIterator:1593` |

##### `<init>(Map)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       2 | `java.util.HashMap:492` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 50.0% |       1 | `java.util.HashMap:646` |
| 50.0% |       1 | `java.util.HashMap:670` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       2 | `java.util.concurrent.ForkJoinPool$WorkQueue:1156` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans:112` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:432` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |     845 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     406 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     291 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     131 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|     % | Samples | Caller                         | Location                                                   |
| ----: | ------: | ------------------------------ | ---------------------------------------------------------- |
| 98.6% |      69 | `collectClusters(int[])`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.4% |       1 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool`                        |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |      65 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % | Samples | Caller      | Location              |
| ----: | ------: | ----------- | --------------------- |
| 94.9% |      37 | `grow(int)` | `java.util.ArrayList` |
|  5.1% |       2 | `toArray()` | `java.util.ArrayList` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |      23 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |      16 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Caller                                               | Location                                      |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 80.0% |       8 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 20.0% |       2 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % | Samples | Caller                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |       8 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Caller                      | Location                 |
| -----: | ------: | --------------------------- | ------------------------ |
| 100.0% |       6 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |       4 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `wrapSink(Sink)` (`java.util.stream.AbstractPipeline`)

|      % | Samples | Caller                               | Location                            |
| -----: | ------: | ------------------------------------ | ----------------------------------- |
| 100.0% |       3 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |       3 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

|      % | Samples | Caller   | Location                          |
| -----: | ------: | -------- | --------------------------------- |
| 100.0% |       3 | `next()` | `java.util.HashMap$EntryIterator` |

##### `readBytes0(byte[], int, int)` (`java.io.RandomAccessFile`)

|      % | Samples | Caller                        | Location                   |
| -----: | ------: | ----------------------------- | -------------------------- |
| 100.0% |       2 | `readBytes(byte[], int, int)` | `java.io.RandomAccessFile` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Caller                     | Location                              |
| -----: | ------: | -------------------------- | ------------------------------------- |
| 100.0% |       2 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       2 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |       2 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller                   | Location                                                               |
| -----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% |       2 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000a001204b38`)

|      % | Samples | Caller                              | Location            |
| -----: | ------: | ----------------------------------- | ------------------- |
| 100.0% |       2 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller          | Location                                                                              |
| -----: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| 100.0% |       2 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000a001204b38` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |       2 | `get(int)` | `java.util.ArrayList` |

##### `<init>(HashMap)` (`java.util.HashMap$HashIterator`)

|      % | Samples | Caller            | Location                          |
| -----: | ------: | ----------------- | --------------------------------- |
| 100.0% |       2 | `<init>(HashMap)` | `java.util.HashMap$EntryIterator` |

##### `<init>(Map)` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |       2 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Caller   | Location                                 |
| -----: | ------: | -------- | ---------------------------------------- |
| 100.0% |       2 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller                        | Location            |
| -----: | ------: | ----------------------------- | ------------------- |
| 100.0% |       2 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `push(ForkJoinTask, ForkJoinPool, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |       2 | `fork()` | `java.util.concurrent.ForkJoinTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller                               | Location                                                  |
| -----: | ------: | ------------------------------------ | --------------------------------------------------------- |
| 100.0% |       1 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                                  | Location                                                   |
| ----: | ------: | --------------------------------------------------------- | ---------------------------------------------------------- |
| 99.1% |   1,944 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
| 99.1% |   1,944 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                |
| 98.9% |   1,941 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                        |
| 98.9% |   1,940 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| 98.9% |   1,940 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 98.5% |   1,932 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| 98.5% |   1,932 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                       |
| 97.0% |   1,903 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |
| 97.0% |   1,903 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                        |
| 95.9% |   1,881 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`              |
| 49.0% |     961 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 46.5% |     912 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 46.5% |     912 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 43.1% |     845 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 35.5% |     697 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 26.6% |     522 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| 24.1% |     472 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
| 20.7% |     406 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 20.0% |     393 | `computeClusterAverages()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| 20.0% |     393 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Ours

|     % | Samples | Function                                                    | Location                                                               |
| ----: | ------: | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
| 98.5% |   1,932 | `compute()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 49.0% |     961 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 46.5% |     912 | `vectorSum()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 46.5% |     912 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 43.1% |     845 | `accumulate(Double[], double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 35.5% |     697 | `findNearestCentroid()`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 20.7% |     406 | `distance(Double[], Double[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 20.0% |     393 | `computeClusterAverages()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 20.0% |     393 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 20.0% |     392 | `average(List)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 12.3% |     241 | `collectClusters(int[])`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 11.7% |     230 | `lambda$run$0(int, List, int)`                              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 11.7% |     230 | `call()`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0` |
|  1.2% |      24 | `merge(Map, Map)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  1.2% |      23 | `combineResults(Map, Map)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  1.2% |      23 | `combineResults(Object, Object)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  0.8% |      16 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                                        |
|  0.8% |      16 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                                        |
|  0.8% |      16 | `main(String[])`                                            | `org.renaissance.core.Launcher`                                        |
|  0.7% |      13 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite`                             |

##### Standard library

|     % | Samples | Function                                                  | Location                                             |
| ----: | ------: | --------------------------------------------------------- | ---------------------------------------------------- |
| 99.1% |   1,944 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                  |
| 99.1% |   1,944 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`          |
| 98.9% |   1,941 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                  |
| 98.9% |   1,940 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                  |
| 98.9% |   1,940 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
| 98.5% |   1,932 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                 |
| 97.0% |   1,903 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                  |
| 97.0% |   1,903 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                  |
| 95.9% |   1,881 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`        |
| 26.6% |     522 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                  |
| 24.1% |     472 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                  |
| 11.7% |     230 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable`  |
|  3.8% |      74 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                  |
|  2.0% |      39 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                   |
|  1.9% |      37 | `grow(int)`                                               | `java.util.ArrayList`                                |
|  1.9% |      37 | `grow()`                                                  | `java.util.ArrayList`                                |
|  1.9% |      37 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                |
|  1.9% |      37 | `add(Object)`                                             | `java.util.ArrayList`                                |
|  0.7% |      14 | `invoke(Object, Object[])`                                | `java.lang.reflect.Method`                           |
|  0.7% |      13 | `invokeStatic(Object, Object)`                            | `java.lang.invoke.LambdaForm$DMH.0x000000a001001c00` |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |   1,944 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |   1,941 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller                                                    | Location                                      |
| -----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 100.0% |   1,940 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  97.0% |   1,881 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  26.9% |     522 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  23.5% |     456 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                                   | Location                            |
| -----: | ------: | ---------------------------------------- | ----------------------------------- |
| 100.0% |   1,940 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller   | Location                             |
| -----: | ------: | -------- | ------------------------------------ |
| 100.0% |   1,932 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   1,932 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |   1,903 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |   1,903 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |   1,881 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     961 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 100.0% |     961 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     912 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     912 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |     912 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |     845 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     697 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Caller                         | Location                                               |
| ----: | ------: | ------------------------------ | ------------------------------------------------------ |
| 75.1% |     392 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 44.1% |     230 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Caller                 | Location                            |
| ----: | ------: | ---------------------- | ----------------------------------- |
| 99.8% |     471 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     406 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller              | Location                                               |
| -----: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% |     393 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller              | Location                                               |
| -----: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% |     393 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     393 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     392 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     241 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |     230 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0`)

|      % | Samples | Caller   | Location                                            |
| -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% |     230 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     230 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|     % | Samples | Caller                         | Location                                                   |
| ----: | ------: | ------------------------------ | ---------------------------------------------------------- |
| 98.6% |      73 | `collectClusters(int[])`       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.4% |       1 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool`                        |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % | Samples | Caller      | Location              |
| ----: | ------: | ----------- | --------------------- |
| 94.9% |      37 | `grow(int)` | `java.util.ArrayList` |
|  5.1% |       2 | `toArray()` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

|      % | Samples | Caller   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% |      37 | `grow()` | `java.util.ArrayList` |

##### `grow()` (`java.util.ArrayList`)

|      % | Samples | Caller                       | Location              |
| -----: | ------: | ---------------------------- | --------------------- |
| 100.0% |      37 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % | Samples | Caller        | Location              |
| -----: | ------: | ------------- | --------------------- |
| 100.0% |      37 | `add(Object)` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |      37 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Caller                     | Location                                                   |
| ----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 95.8% |      23 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  4.2% |       1 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                           | Location                                                   |
| -----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 100.0% |      23 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |      23 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Caller                                 | Location                        |
| -----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% |      16 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Caller           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |      16 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % | Samples | Caller                                                      | Location                        |
| -----: | ------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% |      14 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % | Samples | Caller                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |      13 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a001001c00` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a001001c00`)

|      % | Samples | Caller                           | Location                                            |
| -----: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% |      13 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a001082400` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                   | Location                            |
| ----: | ------: | ---------------------------------------- | ----------------------------------- |
| 99.8% |   1,941 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |
|  0.1% |       1 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |   1,944 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                               | Location                                      |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 99.9% |   1,940 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee   | Location                                            |
| ----: | ------: | -------- | --------------------------------------------------- |
| 99.6% |   1,932 | `exec()` | `java.util.concurrent.RecursiveTask`                |
| 11.9% |     230 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   1,940 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 98.5% |   1,903 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 49.7% |     961 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 47.2% |     912 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 20.3% |     393 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  1.2% |      23 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Callee      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |   1,932 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee                                                    | Location                                      |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 98.8% |   1,881 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 24.8% |     471 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  0.1% |       2 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |   1,903 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   1,881 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |     961 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  72.5% |     697 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  25.1% |     241 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                           | Location                                                  |
| ----: | ------: | -------------------------------- | --------------------------------------------------------- |
| 92.7% |     845 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  0.2% |       2 | `get(int)`                       | `java.util.ArrayList`                                     |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Callee              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     912 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |     912 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                         | Location                                                   |
| ----: | ------: | ------------------------------ | ---------------------------------------------------------- |
| 58.2% |     406 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     522 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                         | Location                            |
| ----: | ------: | ------------------------------ | ----------------------------------- |
| 96.6% |     456 | `doExec()`                     | `java.util.concurrent.ForkJoinTask` |
|  0.6% |       3 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee            | Location                                               |
| ----: | ------: | ----------------- | ------------------------------------------------------ |
| 99.7% |     392 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.3% |       1 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     393 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     393 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     392 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                              | Location              |
| ----: | ------: | ----------------------------------- | --------------------- |
| 30.3% |      73 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |
| 15.4% |      37 | `add(Object)`                       | `java.util.ArrayList` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     230 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0`)

|      % | Samples | Callee                         | Location                                    |
| -----: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% |     230 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Callee   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |     230 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|    % | Samples | Callee          | Location                                                                              |
| ---: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| 5.4% |       4 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000a001204b38` |

##### `grow(int)` (`java.util.ArrayList`)

|      % | Samples | Callee                  | Location           |
| -----: | ------: | ----------------------- | ------------------ |
| 100.0% |      37 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `grow()` (`java.util.ArrayList`)

|      % | Samples | Callee      | Location              |
| -----: | ------: | ----------- | --------------------- |
| 100.0% |      37 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % | Samples | Callee   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% |      37 | `grow()` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

|      % | Samples | Callee                       | Location              |
| -----: | ------: | ---------------------------- | --------------------- |
| 100.0% |      37 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee                | Location            |
| ----: | ------: | --------------------- | ------------------- |
| 54.2% |      13 | `forEach(BiConsumer)` | `java.util.HashMap` |
| 41.7% |      10 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |      23 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                     | Location                                                   |
| -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% |      23 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee                               | Location                            |
| ----: | ------: | ------------------------------------ | ----------------------------------- |
| 87.5% |      14 | `invoke(Object, Object[])`           | `java.lang.reflect.Method`          |
| 12.5% |       2 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Callee                                                      | Location                        |
| -----: | ------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% |      16 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Callee                                 | Location                        |
| -----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% |      16 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|     % | Samples | Callee                     | Location                                          |
| ----: | ------: | -------------------------- | ------------------------------------------------- |
| 92.9% |      13 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|  7.1% |       1 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|     % | Samples | Callee              | Location                                    |
| ----: | ------: | ------------------- | ------------------------------------------- |
| 92.3% |      12 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
|  7.7% |       1 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a001001c00`)

|      % | Samples | Callee           | Location                                   |
| -----: | ------: | ---------------- | ------------------------------------------ |
| 100.0% |      13 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 4.9% |      97 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 4.5% |      88 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 3.4% |      67 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3.1% |      60 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 3.0% |      59 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.9% |      57 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 2.2% |      43 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2.1% |      42 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2.0% |      40 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2.0% |      39 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.9% |      38 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.8% |      36 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.7% |      33 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) |
| 1.7% |      33 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.6% |      32 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                  |
| 1.5% |      30 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.5% |      30 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.5% |      30 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.3% |      26 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.3% |      26 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)               |

# Allocated heap profile

Allocated 38 GiB over 4,052 samples (9.6 MiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Standard library | 93.8% | 35.7 GiB |   3,782 |
| Ours             |  6.2% | 2.34 GiB |     268 |
| Unknown          | <0.1% | 2.13 KiB |       2 |

## Call tree

Call paths to the hottest functions.

```
├── 37.8 GiB (99.4%) [[via 4 frames]] doExec()  java.util.concurrent.ForkJoinTask
│   ├── 30 GiB (79.0%) [[via 5–6 frames]] exec()  java.util.concurrent.RecursiveTask
│   │   └── 30 GiB (79.0%) compute()  org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│   │       ├── 23.7 GiB (62.4%) [[via 2 frames]] merge(Map, Map)  org.renaissance.jdk.concurrent.JavaKMeans
│   │       │   ├── 23.5 GiB (61.8%) [[via 5 frames]] lambda$merge$6(List, List)  org.renaissance.jdk.concurrent.JavaKMeans
│   │       │   │   ├── 17.4 GiB (45.7%) addAll(Collection)  java.util.ArrayList
│   │       │   │   │   ├── 10.7 GiB (28.1%) grow(int)
│   │       │   │   │   │   └── 10.7 GiB (28.1%) copyOf(Object[], int)  (self 28.1%; 91.6% in 262 call stacks)  java.util.Arrays
│   │       │   │   │   └── 6.69 GiB (17.6%) toArray()
│   │       │   │   │       └── 6.69 GiB (17.6%) copyOf(Object[], int)  (self 17.6%)  java.util.Arrays
│   │       │   │   └── 6.05 GiB (15.9%) [[via 2 frames]] copyOf(Object[], int)  (self 15.9%)  java.util.Arrays
│   │       │   └── 72.7 MiB (0.2%) [[via 2 frames]] entrySet()  java.util.HashMap
│   │       ├── 6.17 GiB (16.2%) computeDirectly()  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   │       │   ├── 4.93 GiB (13.0%) [[via 1 frame]] collectClusters(int[])  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   │       │   │   ├── 4.57 GiB (12.0%) [[via 3 frames]] grow(int)  (self 0.9%)  java.util.ArrayList
│   │       │   │   │   └── 4.22 GiB (11.1%) copyOf(Object[], int)  java.util.Arrays
│   │       │   │   └── 313 MiB (0.8%) computeIfAbsent(Object, Function)  java.util.HashMap
│   │       │   │       ├── 180 MiB (0.5%) apply(Object)  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000a001204b38
│   │       │   │       │   └── 180 MiB (0.5%) lambda$collectClusters$0(Double[])  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   │       │   │       └── 126 MiB (0.3%) newNode(int, Object, Object, HashMap$Node)
│   │       │   └── 1.24 GiB (3.3%) [[via 1 frame]] findNearestCentroid()  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   │       └── 56.2 MiB (0.1%) [[via 2 frames]] add(double[], double[])  org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│   └── 7.75 GiB (20.4%) exec()  java.util.concurrent.RecursiveTask
│       └── 7.75 GiB (20.4%) compute()  org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│           ├── 7.1 GiB (18.7%) [[via 8 frames]] lambda$merge$6(List, List)  org.renaissance.jdk.concurrent.JavaKMeans
│           │   ├── 5.39 GiB (14.2%) addAll(Collection)  java.util.ArrayList
│           │   │   ├── 3.13 GiB (8.2%) grow(int)
│           │   │   │   └── 3.13 GiB (8.2%) copyOf(Object[], int)  java.util.Arrays
│           │   │   └── 2.26 GiB (6.0%) toArray()
│           │   │       └── 2.26 GiB (6.0%) copyOf(Object[], int)  java.util.Arrays
│           │   └── 1.71 GiB (4.5%) [[via 2 frames]] copyOf(Object[], int)  java.util.Arrays
│           ├── 501 MiB (1.3%) createSubtask(int, int)  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│           └── 32.7 MiB (0.1%) createSubtask(int, int)  org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
├── 182 MiB (0.5%) [[via 23 frames]] wrapAndCopyInto(Sink, Spliterator)  java.util.stream.AbstractPipeline
│   ├── 143 MiB (0.4%) [[via 16 frames]] valueOf(double)  java.lang.Double
│   └── 21.4 MiB (0.1%) [[via 7 frames]] mapToObj(IntFunction, int)  java.util.stream.IntPipeline
└── 20.9 MiB (0.1%) [[via 11 frames]] initCEN(int, ZipCoder)  java.util.zip.ZipFile$Source
```

## Hottest functions

### Self size

Functions with the most bytes allocated within the function body, excluding callees.

|     % |     Size | Samples | Function                                     | Location                                                   |
| ----: | -------: | ------: | -------------------------------------------- | ---------------------------------------------------------- |
| 91.6% | 34.8 GiB |   3,551 | `copyOf(Object[], int)`                      | `java.util.Arrays`                                         |
|  3.3% | 1.27 GiB |     140 | `findNearestCentroid()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.4% |  538 MiB |      44 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.9% |  363 MiB |      29 | `grow(int)`                                  | `java.util.ArrayList`                                      |
|  0.5% |  182 MiB |      24 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                        |
|  0.5% |  180 MiB |      14 | `lambda$collectClusters$0(Double[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.4% |  144 MiB |      18 | `valueOf(double)`                            | `java.lang.Double`                                         |
|  0.4% |  137 MiB |      11 | `merge(Map, Map)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.2% | 72.7 MiB |       1 | `entrySet()`                                 | `java.util.HashMap`                                        |
|  0.2% | 64.9 MiB |      11 | `lambda$merge$6(List, List)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.1% | 57.1 MiB |       9 | `collectClusters(int[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.1% | 56.2 MiB |      11 | `add(double[], double[])`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.1% | 43.3 MiB |      12 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.1% | 21.4 MiB |      46 | `mapToObj(IntFunction, int)`                 | `java.util.stream.IntPipeline`                             |
|  0.1% | 20.9 MiB |       1 | `initCEN(int, ZipCoder)`                     | `java.util.zip.ZipFile$Source`                             |
| <0.1% | 15.4 MiB |      31 | `copyOf(byte[], int)`                        | `java.util.Arrays`                                         |
| <0.1% | 12.4 MiB |       8 | `resize()`                                   | `java.util.HashMap`                                        |
| <0.1% |   11 MiB |       1 | `lambda$run$0(int, List, int)`               | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% | 6.29 MiB |       2 | `copyOfRangeByte(byte[], int, int)`          | `java.util.Arrays`                                         |
| <0.1% | 5.43 MiB |       8 | `copyOf(Object[], int, Class)`               | `java.util.Arrays`                                         |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Samples | Function                                              | Location                              |
| ----: | -------: | ------: | ----------------------------------------------------- | ------------------------------------- |
| 91.6% | 34.8 GiB |   3,551 | `copyOf(Object[], int)`                               | `java.util.Arrays`                    |
|  0.9% |  363 MiB |      29 | `grow(int)`                                           | `java.util.ArrayList`                 |
|  0.5% |  182 MiB |      24 | `newNode(int, Object, Object, HashMap$Node)`          | `java.util.HashMap`                   |
|  0.4% |  144 MiB |      18 | `valueOf(double)`                                     | `java.lang.Double`                    |
|  0.2% | 72.7 MiB |       1 | `entrySet()`                                          | `java.util.HashMap`                   |
|  0.1% | 21.4 MiB |      46 | `mapToObj(IntFunction, int)`                          | `java.util.stream.IntPipeline`        |
|  0.1% | 20.9 MiB |       1 | `initCEN(int, ZipCoder)`                              | `java.util.zip.ZipFile$Source`        |
| <0.1% | 15.4 MiB |      31 | `copyOf(byte[], int)`                                 | `java.util.Arrays`                    |
| <0.1% | 12.4 MiB |       8 | `resize()`                                            | `java.util.HashMap`                   |
| <0.1% | 6.29 MiB |       2 | `copyOfRangeByte(byte[], int, int)`                   | `java.util.Arrays`                    |
| <0.1% | 5.43 MiB |       8 | `copyOf(Object[], int, Class)`                        | `java.util.Arrays`                    |
| <0.1% |  4.9 MiB |       7 | `builder(long, IntFunction)`                          | `java.util.stream.Nodes`              |
| <0.1% | 4.83 MiB |      13 | `intStream(Spliterator$OfInt, boolean)`               | `java.util.stream.StreamSupport`      |
| <0.1% | 2.73 MiB |       3 | `allocateInstance(Object)`                            | `java.lang.invoke.DirectMethodHandle` |
| <0.1% | 2.72 MiB |       5 | `range(int, int)`                                     | `java.util.stream.IntStream`          |
| <0.1% | 1.76 MiB |       2 | `fillInStackTrace(int)`                               | `java.lang.Throwable`                 |
| <0.1% | 1.34 MiB |       1 | `read(Manifest$FastInputStream, byte[], String, int)` | `java.util.jar.Attributes`            |
| <0.1% |  1.2 MiB |       3 | `<init>(InputStream, Inflater, int)`                  | `java.util.zip.InflaterInputStream`   |
| <0.1% | 1.12 MiB |       3 | `iterator()`                                          | `java.util.HashMap$EntrySet`          |
| <0.1% |  741 KiB |       1 | `mapToObj(DoubleFunction, int)`                       | `java.util.stream.DoublePipeline`     |

##### Ours

|     % |     Size | Samples | Function                             | Location                                                   |
| ----: | -------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|  3.3% | 1.27 GiB |     140 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.4% |  538 MiB |      44 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.5% |  180 MiB |      14 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.4% |  137 MiB |      11 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.2% | 64.9 MiB |      11 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.1% | 57.1 MiB |       9 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.1% | 56.2 MiB |      11 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.1% | 43.3 MiB |      12 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% |   11 MiB |       1 | `lambda$run$0(int, List, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% | 5.32 MiB |       5 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% |    5 MiB |       1 | `boxed(double[])`                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% | 2.63 MiB |       7 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |  179 KiB |       2 | `collectGarbage(String)`             | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`   |

#### Lines

Lines with the largest contribution to each function's self size.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 34.8 GiB |   3,551 | `java.util.Arrays:3482` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Location                                                       |
| -----: | -------: | ------: | -------------------------------------------------------------- |
| 100.0% | 1.27 GiB |     140 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Location                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------- |
| 100.0% | 538 MiB |      44 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |    Size | Samples | Location                  |
| -----: | ------: | ------: | ------------------------- |
| 100.0% | 363 MiB |      29 | `java.util.ArrayList:239` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|      % |    Size | Samples | Location                 |
| -----: | ------: | ------: | ------------------------ |
| 100.0% | 182 MiB |      24 | `java.util.HashMap:1909` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Location                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------- |
| 100.0% | 180 MiB |      14 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `valueOf(double)` (`java.lang.Double`)

|      % |    Size | Samples | Location               |
| -----: | ------: | ------: | ---------------------- |
| 100.0% | 144 MiB |      18 | `java.lang.Double:773` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Location                                        |
| -----: | ------: | ------: | ----------------------------------------------- |
| 100.0% | 137 MiB |      11 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `entrySet()` (`java.util.HashMap`)

|      % |     Size | Samples | Location                 |
| -----: | -------: | ------: | ------------------------ |
| 100.0% | 72.7 MiB |       1 | `java.util.HashMap:1099` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Location                                        |
| -----: | -------: | ------: | ----------------------------------------------- |
| 100.0% | 64.9 MiB |      11 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Location                                                       |
| -----: | -------: | ------: | -------------------------------------------------------------- |
| 100.0% | 57.1 MiB |       9 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Location                                                      |
| -----: | -------: | ------: | ------------------------------------------------------------- |
| 100.0% | 56.2 MiB |      11 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Location                                                      |
| -----: | -------: | ------: | ------------------------------------------------------------- |
| 100.0% | 43.3 MiB |      12 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

|      % |     Size | Samples | Location                           |
| -----: | -------: | ------: | ---------------------------------- |
| 100.0% | 21.4 MiB |      46 | `java.util.stream.IntPipeline:174` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % |     Size | Samples | Location                            |
| -----: | -------: | ------: | ----------------------------------- |
| 100.0% | 20.9 MiB |       1 | `java.util.zip.ZipFile$Source:1733` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 15.4 MiB |      31 | `java.util.Arrays:3541` |

##### `resize()` (`java.util.HashMap`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 12.4 MiB |       8 | `java.util.HashMap:710` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |   Size | Samples | Location                                       |
| -----: | -----: | ------: | ---------------------------------------------- |
| 100.0% | 11 MiB |       1 | `org.renaissance.jdk.concurrent.JavaKMeans:53` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 6.29 MiB |       2 | `java.util.Arrays:3863` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 5.43 MiB |       8 | `java.util.Arrays:3513` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Location                                                      |
| -----: | -------: | ------: | ------------------------------------------------------------- |
| 100.0% | 5.32 MiB |       5 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Size | Samples | Location                                                   |
| -----: | ----: | ------: | ---------------------------------------------------------- |
| 100.0% | 5 MiB |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:327` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

|      % |    Size | Samples | Location                     |
| -----: | ------: | ------: | ---------------------------- |
| 100.0% | 4.9 MiB |       7 | `java.util.stream.Nodes:168` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

|      % |     Size | Samples | Location                             |
| -----: | -------: | ------: | ------------------------------------ |
| 100.0% | 4.83 MiB |      13 | `java.util.stream.StreamSupport:138` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|      % |     Size | Samples | Location                                  |
| -----: | -------: | ------: | ----------------------------------------- |
| 100.0% | 2.73 MiB |       3 | `java.lang.invoke.DirectMethodHandle:501` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|      % |     Size | Samples | Location                          |
| -----: | -------: | ------: | --------------------------------- |
| 100.0% | 2.72 MiB |       5 | `java.util.stream.IntStream:1083` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Location                                       |
| -----: | -------: | ------: | ---------------------------------------------- |
| 100.0% | 2.63 MiB |       7 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `read(Manifest$FastInputStream, byte[], String, int)` (`java.util.jar.Attributes`)

|      % |     Size | Samples | Location                       |
| -----: | -------: | ------: | ------------------------------ |
| 100.0% | 1.34 MiB |       1 | `java.util.jar.Attributes:371` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

|      % |    Size | Samples | Location                               |
| -----: | ------: | ------: | -------------------------------------- |
| 100.0% | 1.2 MiB |       3 | `java.util.zip.InflaterInputStream:89` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

|      % |     Size | Samples | Location                          |
| -----: | -------: | ------: | --------------------------------- |
| 100.0% | 1.12 MiB |       3 | `java.util.HashMap$EntrySet:1106` |

##### `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`)

|      % |    Size | Samples | Location                              |
| -----: | ------: | ------: | ------------------------------------- |
| 100.0% | 741 KiB |       1 | `java.util.stream.DoublePipeline:170` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

|      % |    Size | Samples | Location                                                    |
| -----: | ------: | ------: | ----------------------------------------------------------- |
| 100.0% | 179 KiB |       2 | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin:26` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Caller      | Location              |
| ----: | -------: | ------: | ----------- | --------------------- |
| 52.0% | 18.1 GiB |   1,908 | `grow(int)` | `java.util.ArrayList` |
| 48.0% | 16.7 GiB |   1,643 | `toArray()` | `java.util.ArrayList` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller              | Location                                                   |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 1.27 GiB |     140 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller      | Location                                               |
| -----: | ------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 538 MiB |      44 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |    Size | Samples | Caller   | Location              |
| -----: | ------: | ------: | -------- | --------------------- |
| 100.0% | 363 MiB |      29 | `grow()` | `java.util.ArrayList` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|     % |     Size | Samples | Caller                                          | Location            |
| ----: | -------: | ------: | ----------------------------------------------- | ------------------- |
| 69.5% |  126 MiB |      10 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
| 28.0% | 50.9 MiB |      13 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|  2.5% | 4.62 MiB |       1 | `merge(Object, Object, BiFunction)`             | `java.util.HashMap` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller          | Location                                                                              |
| -----: | ------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 180 MiB |      14 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000a001204b38` |

##### `valueOf(double)` (`java.lang.Double`)

|     % |     Size | Samples | Caller                                           | Location                                                     |
| ----: | -------: | ------: | ------------------------------------------------ | ------------------------------------------------------------ |
| 99.3% |  143 MiB |      17 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                  |
|  0.7% | 1.04 MiB |       1 | `apply(double)`                                  | `java.util.stream.DoublePipeline$$Lambda.0x000000a0010d4c10` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Caller                     | Location                                                   |
| -----: | ------: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% | 137 MiB |      11 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `entrySet()` (`java.util.HashMap`)

|      % |     Size | Samples | Caller                        | Location            |
| -----: | -------: | ------: | ----------------------------- | ------------------- |
| 100.0% | 72.7 MiB |       1 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller                  | Location                                                               |
| -----: | -------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% | 64.9 MiB |      11 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller              | Location                                                   |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 57.1 MiB |       9 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Caller                               | Location                                                  |
| -----: | -------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| 100.0% | 56.2 MiB |      11 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Caller      | Location                                               |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 43.3 MiB |      12 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

|      % |     Size | Samples | Caller                  | Location                       |
| -----: | -------: | ------: | ----------------------- | ------------------------------ |
| 100.0% | 21.4 MiB |      46 | `mapToObj(IntFunction)` | `java.util.stream.IntPipeline` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % |     Size | Samples | Caller                                          | Location                       |
| -----: | -------: | ------: | ----------------------------------------------- | ------------------------------ |
| 100.0% | 20.9 MiB |       1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Caller                        | Location                          |
| ----: | -------: | ------: | ----------------------------- | --------------------------------- |
| 95.1% | 14.6 MiB |      29 | `getBytes()`                  | `jdk.internal.loader.Resource`    |
|  4.9% |  775 KiB |       2 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |

##### `resize()` (`java.util.HashMap`)

|     % |     Size | Samples | Caller                                          | Location            |
| ----: | -------: | ------: | ----------------------------------------------- | ------------------- |
| 53.5% | 6.61 MiB |       5 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
| 46.5% | 5.75 MiB |       3 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |   Size | Samples | Caller   | Location                                                               |
| -----: | -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% | 11 MiB |       1 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % |     Size | Samples | Caller                          | Location           |
| -----: | -------: | ------: | ------------------------------- | ------------------ |
| 100.0% | 6.29 MiB |       2 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|      % |     Size | Samples | Caller                  | Location           |
| -----: | -------: | ------: | ----------------------- | ------------------ |
| 100.0% | 5.43 MiB |       8 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Caller              | Location                                                  |
| -----: | -------: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% | 5.32 MiB |       5 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `boxed(double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |  Size | Samples | Caller                     | Location                                               |
| -----: | ----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% | 5 MiB |       1 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

|      % |    Size | Samples | Caller                               | Location                             |
| -----: | ------: | ------: | ------------------------------------ | ------------------------------------ |
| 100.0% | 4.9 MiB |       7 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

|      % |     Size | Samples | Caller            | Location                     |
| -----: | -------: | ------: | ----------------- | ---------------------------- |
| 100.0% | 4.83 MiB |      13 | `range(int, int)` | `java.util.stream.IntStream` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|     % |     Size | Samples | Caller                                               | Location                                             |
| ----: | -------: | ------: | ---------------------------------------------------- | ---------------------------------------------------- |
| 69.1% | 1.88 MiB |       2 | `newInvokeSpecial(Object, int, int, Object)`         | `java.lang.invoke.LambdaForm$DMH.0x000000a0011a2400` |
| 30.9% |  864 KiB |       1 | `newInvokeSpecial(Object, Object, int, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000a001200400` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|      % |     Size | Samples | Caller                                           | Location                                    |
| -----: | -------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| 100.0% | 2.72 MiB |       5 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller       | Location                                                               |
| -----: | -------: | ------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% | 2.63 MiB |       7 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011a1d48` |

##### `fillInStackTrace(int)` (`java.lang.Throwable`)

|      % |     Size | Samples | Caller               | Location              |
| -----: | -------: | ------: | -------------------- | --------------------- |
| 100.0% | 1.76 MiB |       2 | `fillInStackTrace()` | `java.lang.Throwable` |

##### `read(Manifest$FastInputStream, byte[], String, int)` (`java.util.jar.Attributes`)

|      % |     Size | Samples | Caller                      | Location                 |
| -----: | -------: | ------: | --------------------------- | ------------------------ |
| 100.0% | 1.34 MiB |       1 | `read(InputStream, String)` | `java.util.jar.Manifest` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

|      % |    Size | Samples | Caller                                                                                  | Location                                           |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| 100.0% | 1.2 MiB |       3 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

|      % |     Size | Samples | Caller                        | Location            |
| -----: | -------: | ------: | ----------------------------- | ------------------- |
| 100.0% | 1.12 MiB |       3 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `mapToObj(DoubleFunction, int)` (`java.util.stream.DoublePipeline`)

|      % |    Size | Samples | Caller    | Location                          |
| -----: | ------: | ------: | --------- | --------------------------------- |
| 100.0% | 741 KiB |       1 | `boxed()` | `java.util.stream.DoublePipeline` |

##### `collectGarbage(String)` (`org.renaissance.harness.ExecutionPlugins$ForceGcPlugin`)

|      % |    Size | Samples | Caller                                      | Location                                                 |
| -----: | ------: | ------: | ------------------------------------------- | -------------------------------------------------------- |
| 100.0% | 179 KiB |       2 | `afterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.ExecutionPlugins$ForceGcPlugin` |

### Total size

Functions with the most bytes allocated within the function and its callees.

|     % |     Size | Samples | Function                                             | Location                                                               |
| ----: | -------: | ------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| 99.4% | 37.8 GiB |   3,884 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
| 99.4% | 37.8 GiB |   3,884 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| 99.4% | 37.8 GiB |   3,884 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
| 99.4% | 37.8 GiB |   3,884 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
| 99.4% | 37.8 GiB |   3,884 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
| 99.4% | 37.8 GiB |   3,883 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 99.4% | 37.8 GiB |   3,883 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
| 91.6% | 34.8 GiB |   3,559 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                                     |
| 81.1% | 30.8 GiB |   3,105 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 81.1% | 30.8 GiB |   3,104 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 81.1% | 30.8 GiB |   3,104 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 80.5% | 30.6 GiB |   3,076 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |
| 80.5% | 30.6 GiB |   3,076 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 80.5% | 30.6 GiB |   3,076 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88` |
| 80.5% | 30.6 GiB |   3,076 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                    |
| 80.5% | 30.6 GiB |   3,075 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 80.5% | 30.6 GiB |   3,075 | `apply(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0` |
| 70.6% | 26.8 GiB |   2,785 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                                    |
| 70.6% | 26.8 GiB |   2,785 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                                    |
| 69.9% | 26.6 GiB |   2,755 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Samples | Function                                             | Location                                            |
| ----: | -------: | ------: | ---------------------------------------------------- | --------------------------------------------------- |
| 99.4% | 37.8 GiB |   3,884 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| 99.4% | 37.8 GiB |   3,884 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 99.4% | 37.8 GiB |   3,884 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                 |
| 99.4% | 37.8 GiB |   3,884 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                 |
| 99.4% | 37.8 GiB |   3,884 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`         |
| 99.4% | 37.8 GiB |   3,883 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                |
| 91.6% | 34.8 GiB |   3,559 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                  |
| 80.5% | 30.6 GiB |   3,076 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                 |
| 80.5% | 30.6 GiB |   3,076 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                 |
| 70.6% | 26.8 GiB |   2,785 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                 |
| 70.6% | 26.8 GiB |   2,785 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                 |
| 69.9% | 26.6 GiB |   2,755 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 59.9% | 22.7 GiB |   2,336 | `addAll(Collection)`                                 | `java.util.ArrayList`                               |
| 48.6% | 18.5 GiB |   1,941 | `grow(int)`                                          | `java.util.ArrayList`                               |
| 44.0% | 16.7 GiB |   1,647 | `toArray()`                                          | `java.util.ArrayList`                               |
| 22.0% | 8.35 GiB |     503 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| 21.9% | 8.33 GiB |     490 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| 20.4% | 7.76 GiB |     728 | `<init>(Collection)`                                 | `java.util.ArrayList`                               |
| 12.3% | 4.66 GiB |     524 | `grow()`                                             | `java.util.ArrayList`                               |
| 12.3% | 4.66 GiB |     524 | `add(Object, Object[], int)`                         | `java.util.ArrayList`                               |

##### Ours

|     % |     Size | Samples | Function                                                                                                               | Location                                                               |
| ----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 99.4% | 37.8 GiB |   3,883 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 81.1% | 30.8 GiB |   3,105 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 81.1% | 30.8 GiB |   3,104 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 81.1% | 30.8 GiB |   3,104 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 80.5% | 30.6 GiB |   3,076 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 80.5% | 30.6 GiB |   3,076 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88` |
| 80.5% | 30.6 GiB |   3,075 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 80.5% | 30.6 GiB |   3,075 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0` |
| 21.9% | 8.33 GiB |     490 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 21.9% | 8.33 GiB |     490 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0` |
| 16.5% | 6.29 GiB |     702 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 13.2% | 5.02 GiB |     562 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  3.3% | 1.27 GiB |     140 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  1.4% |  538 MiB |      44 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  0.5% |  209 MiB |     161 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  0.5% |  209 MiB |     161 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  0.5% |  208 MiB |     159 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  0.5% |  208 MiB |     158 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  0.5% |  205 MiB |     151 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  0.5% |  191 MiB |     112 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Caller                                                    | Location                                      |
| -----: | -------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 37.8 GiB |   3,884 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  70.4% | 26.6 GiB |   2,755 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  22.1% | 8.35 GiB |     503 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|   8.5% | 3.21 GiB |     408 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |     Size | Samples | Caller                                   | Location                            |
| -----: | -------: | ------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 37.8 GiB |   3,884 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |     Size | Samples | Caller                              | Location                            |
| -----: | -------: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 37.8 GiB |   3,884 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |     Size | Samples | Caller  | Location                                    |
| -----: | -------: | ------: | ------- | ------------------------------------------- |
| 100.0% | 37.8 GiB |   3,884 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |     Size | Samples | Caller   | Location                             |
| -----: | -------: | ------: | -------- | ------------------------------------ |
| 100.0% | 37.8 GiB |   3,883 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |     Size | Samples | Caller     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 37.8 GiB |   3,883 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Caller      | Location              |
| ----: | -------: | ------: | ----------- | --------------------- |
| 52.0% | 18.1 GiB |   1,912 | `grow(int)` | `java.util.ArrayList` |
| 48.0% | 16.7 GiB |   1,647 | `toArray()` | `java.util.ArrayList` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller                     | Location                                                   |
| -----: | -------: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% | 30.8 GiB |   3,104 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  <0.1% | 4.62 MiB |       1 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller                           | Location                                                   |
| -----: | -------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 100.0% | 30.8 GiB |   3,104 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller      | Location                                               |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 30.8 GiB |   3,104 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % |     Size | Samples | Caller                              | Location                                    |
| -----: | -------: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 30.6 GiB |   3,076 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller                   | Location                                                               |
| -----: | -------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% | 30.6 GiB |   3,076 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88`)

|      % |     Size | Samples | Caller                | Location            |
| -----: | -------: | ------: | --------------------- | ------------------- |
| 100.0% | 30.6 GiB |   3,076 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % |     Size | Samples | Caller            | Location                                    |
| -----: | -------: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 30.6 GiB |   3,076 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller                  | Location                                                               |
| -----: | -------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% | 30.6 GiB |   3,075 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0`)

|      % |     Size | Samples | Caller                              | Location            |
| -----: | -------: | ------: | ----------------------------------- | ------------------- |
| 100.0% | 30.6 GiB |   3,075 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Caller   | Location                            |
| -----: | -------: | ------: | -------- | ----------------------------------- |
| 100.0% | 26.8 GiB |   2,785 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Caller      | Location                                               |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 26.8 GiB |   2,785 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |     Size | Samples | Caller                 | Location                            |
| -----: | -------: | ------: | ---------------------- | ----------------------------------- |
| 100.0% | 26.6 GiB |   2,755 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|      % |     Size | Samples | Caller                       | Location                                    |
| -----: | -------: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% | 22.7 GiB |   2,336 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `grow(int)` (`java.util.ArrayList`)

|     % |     Size | Samples | Caller               | Location              |
| ----: | -------: | ------: | -------------------- | --------------------- |
| 74.8% | 13.8 GiB |   1,417 | `addAll(Collection)` | `java.util.ArrayList` |
| 25.2% | 4.66 GiB |     524 | `grow()`             | `java.util.ArrayList` |

##### `toArray()` (`java.util.ArrayList`)

|     % |     Size | Samples | Caller               | Location              |
| ----: | -------: | ------: | -------------------- | --------------------- |
| 53.6% | 8.95 GiB |     919 | `addAll(Collection)` | `java.util.ArrayList` |
| 46.4% | 7.76 GiB |     728 | `<init>(Collection)` | `java.util.ArrayList` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|     % |     Size | Samples | Caller                         | Location                                               |
| ----: | -------: | ------: | ------------------------------ | ------------------------------------------------------ |
| 99.7% | 8.32 GiB |     489 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
|  0.5% | 38.7 MiB |      15 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % |     Size | Samples | Caller     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 8.33 GiB |     490 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller   | Location                                                               |
| -----: | -------: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% | 8.33 GiB |     490 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0`)

|      % |     Size | Samples | Caller   | Location                                            |
| -----: | -------: | ------: | -------- | --------------------------------------------------- |
| 100.0% | 8.33 GiB |     490 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `<init>(Collection)` (`java.util.ArrayList`)

|      % |     Size | Samples | Caller                       | Location                                    |
| -----: | -------: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% | 7.76 GiB |     728 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller              | Location                                                   |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 6.29 GiB |     702 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 100.0% | 6.29 GiB |     702 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller              | Location                                                   |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 5.02 GiB |     562 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `grow()` (`java.util.ArrayList`)

|      % |     Size | Samples | Caller                       | Location              |
| -----: | -------: | ------: | ---------------------------- | --------------------- |
| 100.0% | 4.66 GiB |     524 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % |     Size | Samples | Caller        | Location              |
| -----: | -------: | ------: | ------------- | --------------------- |
| 100.0% | 4.66 GiB |     524 | `add(Object)` | `java.util.ArrayList` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller              | Location                                                   |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 1.27 GiB |     140 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller      | Location                                               |
| -----: | ------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 538 MiB |      44 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % |    Size | Samples | Caller           | Location                        |
| -----: | ------: | ------: | ---------------- | ------------------------------- |
| 100.0% | 209 MiB |     161 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % |    Size | Samples | Caller                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 208 MiB |     159 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |    Size | Samples | Caller                         | Location                                             |
| -----: | ------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 208 MiB |     158 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a001001c00` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |    Size | Samples | Caller           | Location                                   |
| -----: | ------: | ------: | ---------------- | ------------------------------------------ |
| 100.0% | 205 MiB |     151 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |    Size | Samples | Caller              | Location                                                               |
| -----: | ------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 191 MiB |     112 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a001198798` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Callee   | Location                                            |
| -----: | -------: | ------: | -------- | --------------------------------------------------- |
| 100.0% | 37.8 GiB |   3,883 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|  22.1% | 8.33 GiB |     490 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |     Size | Samples | Callee     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 37.8 GiB |   3,884 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |     Size | Samples | Callee                                               | Location                                      |
| -----: | -------: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 37.8 GiB |   3,884 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |     Size | Samples | Callee                                   | Location                            |
| -----: | -------: | ------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 37.8 GiB |   3,884 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % |     Size | Samples | Callee                              | Location                            |
| -----: | -------: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 37.8 GiB |   3,884 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % |     Size | Samples | Callee                           | Location                                                   |
| ----: | -------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 81.6% | 30.8 GiB |   3,104 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 71.1% | 26.8 GiB |   2,785 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 16.6% | 6.29 GiB |     702 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.4% |  538 MiB |      44 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.1% | 56.2 MiB |      11 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |     Size | Samples | Callee      | Location                                               |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 37.8 GiB |   3,883 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Callee                         | Location           |
| ----: | -------: | ------: | ------------------------------ | ------------------ |
| <0.1% | 5.43 MiB |       8 | `copyOf(Object[], int, Class)` | `java.util.Arrays` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % |     Size | Samples | Callee                | Location            |
| ----: | -------: | ------: | --------------------- | ------------------- |
| 99.2% | 30.6 GiB |   3,076 | `forEach(BiConsumer)` | `java.util.HashMap` |
|  0.4% |  130 MiB |      18 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Callee            | Location                                    |
| -----: | -------: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 30.8 GiB |   3,104 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Callee                     | Location                                                   |
| -----: | -------: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% | 30.8 GiB |   3,104 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % |     Size | Samples | Callee                                       | Location                                                               |
| -----: | -------: | ------: | -------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% | 30.6 GiB |   3,075 | `apply(Object, Object)`                      | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0` |
|  <0.1% | 4.62 MiB |       1 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                                    |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Callee                              | Location            |
| -----: | -------: | ------: | ----------------------------------- | ------------------- |
| 100.0% | 30.6 GiB |   3,076 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88`)

|      % |     Size | Samples | Callee                              | Location                                    |
| -----: | -------: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 30.6 GiB |   3,076 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % |     Size | Samples | Callee                   | Location                                                               |
| -----: | -------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% | 30.6 GiB |   3,076 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % |     Size | Samples | Callee               | Location              |
| ----: | -------: | ------: | -------------------- | --------------------- |
| 74.4% | 22.7 GiB |   2,336 | `addAll(Collection)` | `java.util.ArrayList` |
| 25.4% | 7.76 GiB |     728 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0`)

|      % |     Size | Samples | Callee                       | Location                                    |
| -----: | -------: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% | 30.6 GiB |   3,075 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % |     Size | Samples | Callee                                                    | Location                                      |
| ----: | -------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 99.0% | 26.6 GiB |   2,755 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 12.0% | 3.21 GiB |     408 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Callee                 | Location                            |
| -----: | -------: | ------: | ---------------------- | ----------------------------------- |
| 100.0% | 26.8 GiB |   2,785 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |     Size | Samples | Callee     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 26.6 GiB |   2,755 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|     % |     Size | Samples | Callee      | Location              |
| ----: | -------: | ------: | ----------- | --------------------- |
| 60.7% | 13.8 GiB |   1,417 | `grow(int)` | `java.util.ArrayList` |
| 39.3% | 8.95 GiB |     919 | `toArray()` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

|     % |     Size | Samples | Callee                  | Location           |
| ----: | -------: | ------: | ----------------------- | ------------------ |
| 98.1% | 18.1 GiB |   1,912 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `toArray()` (`java.util.ArrayList`)

|      % |     Size | Samples | Callee                  | Location           |
| -----: | -------: | ------: | ----------------------- | ------------------ |
| 100.0% | 16.7 GiB |   1,647 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Callee     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 8.35 GiB |     503 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % |     Size | Samples | Callee   | Location                                                               |
| -----: | -------: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% | 8.33 GiB |     490 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % |     Size | Samples | Callee     | Location                            |
| ----: | -------: | ------: | ---------- | ----------------------------------- |
| 99.9% | 8.32 GiB |     489 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0`)

|      % |     Size | Samples | Callee                         | Location                                    |
| -----: | -------: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% | 8.33 GiB |     490 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `<init>(Collection)` (`java.util.ArrayList`)

|      % |     Size | Samples | Callee      | Location              |
| -----: | -------: | ------: | ----------- | --------------------- |
| 100.0% | 7.76 GiB |     728 | `toArray()` | `java.util.ArrayList` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Callee                   | Location                                                   |
| -----: | -------: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% | 6.29 GiB |     702 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  79.8% | 5.02 GiB |     562 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  20.2% | 1.27 GiB |     140 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % |     Size | Samples | Callee                              | Location              |
| ----: | -------: | ------: | ----------------------------------- | --------------------- |
| 92.8% | 4.66 GiB |     524 | `add(Object)`                       | `java.util.ArrayList` |
|  6.1% |  313 MiB |      29 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |

##### `grow()` (`java.util.ArrayList`)

|      % |     Size | Samples | Callee      | Location              |
| -----: | -------: | ------: | ----------- | --------------------- |
| 100.0% | 4.66 GiB |     524 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % |     Size | Samples | Callee   | Location              |
| -----: | -------: | ------: | -------- | --------------------- |
| 100.0% | 4.66 GiB |     524 | `grow()` | `java.util.ArrayList` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|     % |    Size | Samples | Callee                                                      | Location                            |
| ----: | ------: | ------: | ----------------------------------------------------------- | ----------------------------------- |
| 99.6% | 208 MiB |     159 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`     |
|  0.2% | 386 KiB |       1 | `createScratchRoot(Path, boolean)`                          | `org.renaissance.core.Launcher`     |
|  0.2% | 386 KiB |       1 | `create(Path, URI)`                                         | `org.renaissance.core.ModuleLoader` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % |    Size | Samples | Callee                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 209 MiB |     161 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|     % |    Size | Samples | Callee                     | Location                   |
| ----: | ------: | ------: | -------------------------- | -------------------------- |
| 99.8% | 208 MiB |     158 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |
|  0.2% | 386 KiB |       1 | `loadClass(String)`        | `java.lang.ClassLoader`    |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|     % |     Size | Samples | Callee              | Location                                    |
| ----: | -------: | ------: | ------------------- | ------------------------------------------- |
| 98.7% |  205 MiB |     151 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
|  1.3% | 2.73 MiB |       7 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|     % |     Size | Samples | Callee                                                                        | Location                                    |
| ----: | -------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 92.9% |  191 MiB |     112 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|  2.0% | 4.01 MiB |      11 | `<clinit>()`                                                                  | `scala.Predef$`                             |
|  1.4% | 2.82 MiB |       8 | `parse(String[])`                                                             | `org.renaissance.harness.ConfigParser`      |
|  0.9% | 1.91 MiB |       5 | `<init>(Map)`                                                                 | `org.renaissance.harness.ConfigParser`      |
|  0.9% |  1.9 MiB |       5 | `apply(Seq)`                                                                  | `scala.collection.immutable.Map$`           |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|     % |    Size | Samples | Callee                                                                                       | Location                                  |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 99.8% | 190 MiB |     111 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|  0.2% | 402 KiB |       1 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

## Hottest call stacks

Call stacks with the most bytes allocated in their leaf frame.

Common call stack: `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---: | -------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.2% | 3.13 GiB |     358 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 6.0% | 2.26 GiB |     295 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 4.9% | 1.88 GiB |     205 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 4.5% | 1.71 GiB |     194 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3.9% |  1.5 GiB |     104 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 3.9% | 1.46 GiB |     153 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 3.0% | 1.14 GiB |      79 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.9% | 1.09 GiB |      43 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2.8% | 1.06 GiB |      68 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.5% |  987 MiB |      59 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.4% |  925 MiB |      96 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.3% |  893 MiB |      99 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) |
| 2.2% |  863 MiB |     137 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2.1% |  816 MiB |      99 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2.0% |  766 MiB |      70 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                   |
| 1.9% |  755 MiB |     106 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.8% |  719 MiB |      85 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                           |
| 1.8% |  691 MiB |      64 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.7% |  657 MiB |      24 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.7% |  654 MiB |      38 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204fd0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a001204d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

# Retained heap profile

Retained 2.31 MiB over 8 objects (296 KiB per object).

| Category         |      % |     Size | Objects |
| ---------------- | -----: | -------: | ------: |
| Standard library | 100.0% | 2.31 MiB |       7 |
| Ours             |  <0.1% |     40 B |       1 |

## Call tree

Call paths to the hottest functions.

```
└── 2.31 MiB (100.0%) [[via 9 frames]] main(String[])  org.renaissance.harness.RenaissanceSuite
    ├── 2.06 MiB (89.2%) [[via 24 frames]] copyOf(Object[], int)  java.util.Arrays
    └── 255 KiB (10.8%) [[via 19 frames]] initCEN(int, ZipCoder)  java.util.zip.ZipFile$Source
```

## Hottest functions

### Self size

Functions with the most bytes retained within the function body, excluding callees.

|     % |     Size | Objects | Function                                                                        | Location                                    |
| ----: | -------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------- |
| 89.2% | 2.06 MiB |       1 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                          |
| 10.8% |  255 KiB |       1 | `initCEN(int, ZipCoder)`                                                        | `java.util.zip.ZipFile$Source`              |
| <0.1% |    112 B |       1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                     |
| <0.1% |     96 B |       4 | `valueOf(double)`                                                               | `java.lang.Double`                          |
| <0.1% |     40 B |       1 | `lambda$generateData$4(int)`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans` |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Objects | Function                                                                        | Location                       |
| ----: | -------: | ------: | ------------------------------------------------------------------------------- | ------------------------------ |
| 89.2% | 2.06 MiB |       1 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`             |
| 10.8% |  255 KiB |       1 | `initCEN(int, ZipCoder)`                                                        | `java.util.zip.ZipFile$Source` |
| <0.1% |    112 B |       1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`        |
| <0.1% |     96 B |       4 | `valueOf(double)`                                                               | `java.lang.Double`             |

#### Lines

Lines with the largest contribution to each function's self size.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |     Size | Objects | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 2.06 MiB |       1 | `java.util.Arrays:3482` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % |    Size | Objects | Location                            |
| -----: | ------: | ------: | ----------------------------------- |
| 100.0% | 255 KiB |       1 | `java.util.zip.ZipFile$Source:1733` |

##### `valueOf(double)` (`java.lang.Double`)

|      % | Size | Objects | Location               |
| -----: | ---: | ------: | ---------------------- |
| 100.0% | 96 B |       4 | `java.lang.Double:773` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Size | Objects | Location                                       |
| -----: | ---: | ------: | ---------------------------------------------- |
| 100.0% | 40 B |       1 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |     Size | Objects | Caller      | Location              |
| -----: | -------: | ------: | ----------- | --------------------- |
| 100.0% | 2.06 MiB |       1 | `grow(int)` | `java.util.ArrayList` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % |    Size | Objects | Caller                                          | Location                       |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------------------ |
| 100.0% | 255 KiB |       1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|      % |  Size | Objects | Caller                                                    | Location                |
| -----: | ----: | ------: | --------------------------------------------------------- | ----------------------- |
| 100.0% | 112 B |       1 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `valueOf(double)` (`java.lang.Double`)

|      % | Size | Objects | Caller                                           | Location                                    |
| -----: | ---: | ------: | ------------------------------------------------ | ------------------------------------------- |
| 100.0% | 96 B |       4 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Size | Objects | Caller       | Location                                                               |
| -----: | ---: | ------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% | 40 B |       1 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011a1d48` |

### Total size

Functions with the most bytes retained within the function and its callees.

|      % |     Size | Objects | Function                                                    | Location                                             |
| -----: | -------: | ------: | ----------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% | 2.31 MiB |       8 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite`           |
| 100.0% | 2.31 MiB |       8 | `invokeStatic(Object, Object)`                              | `java.lang.invoke.LambdaForm$DMH.0x000000a001001c00` |
| 100.0% | 2.31 MiB |       8 | `invoke(Object, Object, Object)`                            | `java.lang.invoke.LambdaForm$MH.0x000000a001082400`  |
| 100.0% | 2.31 MiB |       8 | `invokeExact_MT(Object, Object, Object, Object)`            | `java.lang.invoke.Invokers$Holder`                   |
| 100.0% | 2.31 MiB |       8 | `invokeImpl(Object, Object[])`                              | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 100.0% | 2.31 MiB |       8 | `invoke(Object, Object[])`                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 100.0% | 2.31 MiB |       8 | `invoke(Object, Object[])`                                  | `java.lang.reflect.Method`                           |
| 100.0% | 2.31 MiB |       8 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                      |
| 100.0% | 2.31 MiB |       8 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                      |
| 100.0% | 2.31 MiB |       8 | `main(String[])`                                            | `org.renaissance.core.Launcher`                      |
|  89.2% | 2.06 MiB |       7 | `main(String[])`                                            | `org.renaissance.harness.RenaissanceSuite$`          |
|  89.2% | 2.06 MiB |       6 | `accept(int)`                                               | `java.util.stream.IntPipeline$1$1`                   |
|  89.2% | 2.06 MiB |       6 | `forEachRemaining(IntConsumer)`                             | `java.util.stream.Streams$RangeIntSpliterator`       |
|  89.2% | 2.06 MiB |       6 | `forEachRemaining(Consumer)`                                | `java.util.Spliterator$OfInt`                        |
|  89.2% | 2.06 MiB |       6 | `copyInto(Sink, Spliterator)`                               | `java.util.stream.AbstractPipeline`                  |
|  89.2% | 2.06 MiB |       6 | `wrapAndCopyInto(Sink, Spliterator)`                        | `java.util.stream.AbstractPipeline`                  |
|  89.2% | 2.06 MiB |       6 | `evaluateSequential(PipelineHelper, Spliterator)`           | `java.util.stream.ReduceOps$ReduceOp`                |
|  89.2% | 2.06 MiB |       6 | `evaluate(TerminalOp)`                                      | `java.util.stream.AbstractPipeline`                  |
|  89.2% | 2.06 MiB |       6 | `collect(Collector)`                                        | `java.util.stream.ReferencePipeline`                 |
|  89.2% | 2.06 MiB |       6 | `generateData(int, int, int)`                               | `org.renaissance.jdk.concurrent.JavaKMeans`          |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|      % |     Size | Objects | Function                                          | Location                                             |
| -----: | -------: | ------: | ------------------------------------------------- | ---------------------------------------------------- |
| 100.0% | 2.31 MiB |       8 | `invokeStatic(Object, Object)`                    | `java.lang.invoke.LambdaForm$DMH.0x000000a001001c00` |
| 100.0% | 2.31 MiB |       8 | `invoke(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x000000a001082400`  |
| 100.0% | 2.31 MiB |       8 | `invokeExact_MT(Object, Object, Object, Object)`  | `java.lang.invoke.Invokers$Holder`                   |
| 100.0% | 2.31 MiB |       8 | `invokeImpl(Object, Object[])`                    | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 100.0% | 2.31 MiB |       8 | `invoke(Object, Object[])`                        | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 100.0% | 2.31 MiB |       8 | `invoke(Object, Object[])`                        | `java.lang.reflect.Method`                           |
|  89.2% | 2.06 MiB |       6 | `accept(int)`                                     | `java.util.stream.IntPipeline$1$1`                   |
|  89.2% | 2.06 MiB |       6 | `forEachRemaining(IntConsumer)`                   | `java.util.stream.Streams$RangeIntSpliterator`       |
|  89.2% | 2.06 MiB |       6 | `forEachRemaining(Consumer)`                      | `java.util.Spliterator$OfInt`                        |
|  89.2% | 2.06 MiB |       6 | `copyInto(Sink, Spliterator)`                     | `java.util.stream.AbstractPipeline`                  |
|  89.2% | 2.06 MiB |       6 | `wrapAndCopyInto(Sink, Spliterator)`              | `java.util.stream.AbstractPipeline`                  |
|  89.2% | 2.06 MiB |       6 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp`                |
|  89.2% | 2.06 MiB |       6 | `evaluate(TerminalOp)`                            | `java.util.stream.AbstractPipeline`                  |
|  89.2% | 2.06 MiB |       6 | `collect(Collector)`                              | `java.util.stream.ReferencePipeline`                 |
|  89.2% | 2.06 MiB |       6 | `apply(Object)`                                   | `scala.runtime.function.JProcedure1`                 |
|  89.2% | 2.06 MiB |       6 | `foreach(Function1)`                              | `scala.collection.immutable.List`                    |
|  89.2% | 2.06 MiB |       1 | `copyOf(Object[], int)`                           | `java.util.Arrays`                                   |
|  89.2% | 2.06 MiB |       1 | `grow(int)`                                       | `java.util.ArrayList`                                |
|  89.2% | 2.06 MiB |       1 | `grow()`                                          | `java.util.ArrayList`                                |
|  89.2% | 2.06 MiB |       1 | `add(Object, Object[], int)`                      | `java.util.ArrayList`                                |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |     Size | Objects | Caller                         | Location                                             |
| -----: | -------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 2.31 MiB |       8 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a001001c00` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a001001c00`)

|      % |     Size | Objects | Caller                           | Location                                            |
| -----: | -------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 2.31 MiB |       8 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a001082400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a001082400`)

|      % |     Size | Objects | Caller                                           | Location                           |
| -----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 2.31 MiB |       8 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |     Size | Objects | Caller                         | Location                                          |
| -----: | -------: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 2.31 MiB |       8 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |     Size | Objects | Caller                     | Location                                          |
| -----: | -------: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 2.31 MiB |       8 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |     Size | Objects | Caller                     | Location                   |
| -----: | -------: | ------: | -------------------------- | -------------------------- |
| 100.0% | 2.31 MiB |       8 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |     Size | Objects | Caller                                                      | Location                        |
| -----: | -------: | ------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% | 2.31 MiB |       8 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Objects | Caller                                 | Location                        |
| -----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 2.31 MiB |       8 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Objects | Caller           | Location                        |
| -----: | -------: | ------: | ---------------- | ------------------------------- |
| 100.0% | 2.31 MiB |       8 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |     Size | Objects | Caller           | Location                                   |
| -----: | -------: | ------: | ---------------- | ------------------------------------------ |
| 100.0% | 2.06 MiB |       7 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

|      % |     Size | Objects | Caller                          | Location                                       |
| -----: | -------: | ------: | ------------------------------- | ---------------------------------------------- |
| 100.0% | 2.06 MiB |       6 | `forEachRemaining(IntConsumer)` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

|      % |     Size | Objects | Caller                       | Location                      |
| -----: | -------: | ------: | ---------------------------- | ----------------------------- |
| 100.0% | 2.06 MiB |       6 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

|      % |     Size | Objects | Caller                        | Location                            |
| -----: | -------: | ------: | ----------------------------- | ----------------------------------- |
| 100.0% | 2.06 MiB |       6 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Objects | Caller                               | Location                            |
| -----: | -------: | ------: | ------------------------------------ | ----------------------------------- |
| 100.0% | 2.06 MiB |       6 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Objects | Caller                                            | Location                              |
| -----: | -------: | ------: | ------------------------------------------------- | ------------------------------------- |
| 100.0% | 2.06 MiB |       6 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |
|  <0.1% |     96 B |       4 | `evaluate(Spliterator, boolean, IntFunction)`     | `java.util.stream.AbstractPipeline`   |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

|      % |     Size | Objects | Caller                 | Location                            |
| -----: | -------: | ------: | ---------------------- | ----------------------------------- |
| 100.0% | 2.06 MiB |       6 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Objects | Caller               | Location                             |
| -----: | -------: | ------: | -------------------- | ------------------------------------ |
| 100.0% | 2.06 MiB |       6 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

|      % |     Size | Objects | Caller                        | Location                                    |
| -----: | -------: | ------: | ----------------------------- | ------------------------------------------- |
| 100.0% | 2.06 MiB |       6 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Objects | Caller                             | Location                                  |
| -----: | -------: | ------: | ---------------------------------- | ----------------------------------------- |
| 100.0% | 2.06 MiB |       6 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|      % |     Size | Objects | Caller               | Location                             |
| -----: | -------: | ------: | -------------------- | ------------------------------------ |
| 100.0% | 2.06 MiB |       6 | `apply(Object)`      | `scala.runtime.function.JProcedure1` |
| 100.0% | 2.06 MiB |       6 | `foreach(Function1)` | `scala.collection.immutable.List`    |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |     Size | Objects | Caller                                                                        | Location                                    |
| -----: | -------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.06 MiB |       6 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |     Size | Objects | Caller      | Location              |
| -----: | -------: | ------: | ----------- | --------------------- |
| 100.0% | 2.06 MiB |       1 | `grow(int)` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |     Size | Objects | Caller   | Location              |
| -----: | -------: | ------: | -------- | --------------------- |
| 100.0% | 2.06 MiB |       1 | `grow()` | `java.util.ArrayList` |

##### `grow()` (`java.util.ArrayList`)

|      % |     Size | Objects | Caller                       | Location              |
| -----: | -------: | ------: | ---------------------------- | --------------------- |
| 100.0% | 2.06 MiB |       1 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % |     Size | Objects | Caller        | Location              |
| -----: | -------: | ------: | ------------- | --------------------- |
| 100.0% | 2.06 MiB |       1 | `add(Object)` | `java.util.ArrayList` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|     % |     Size | Objects | Callee              | Location                                    |
| ----: | -------: | ------: | ------------------- | ------------------------------------------- |
| 89.2% | 2.06 MiB |       7 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
| 10.8% |  255 KiB |       1 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a001001c00`)

|      % |     Size | Objects | Callee           | Location                                   |
| -----: | -------: | ------: | ---------------- | ------------------------------------------ |
| 100.0% | 2.31 MiB |       8 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a001082400`)

|      % |     Size | Objects | Callee                         | Location                                             |
| -----: | -------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 2.31 MiB |       8 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a001001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |     Size | Objects | Callee                           | Location                                            |
| -----: | -------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 2.31 MiB |       8 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a001082400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |     Size | Objects | Callee                                           | Location                           |
| -----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 2.31 MiB |       8 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |     Size | Objects | Callee                         | Location                                          |
| -----: | -------: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 2.31 MiB |       8 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |     Size | Objects | Callee                     | Location                                          |
| -----: | -------: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 2.31 MiB |       8 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Objects | Callee                     | Location                   |
| -----: | -------: | ------: | -------------------------- | -------------------------- |
| 100.0% | 2.31 MiB |       8 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Objects | Callee                                                      | Location                        |
| -----: | -------: | ------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% | 2.31 MiB |       8 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Objects | Callee                                 | Location                        |
| -----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 2.31 MiB |       8 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |     Size | Objects | Callee                                                                        | Location                                    |
| -----: | -------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.06 MiB |       6 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|  <0.1% |    112 B |       1 | `apply(Seq)`                                                                  | `scala.collection.immutable.Map$`           |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

|      % |     Size | Objects | Callee           | Location                                                               |
| -----: | -------: | ------: | ---------------- | ---------------------------------------------------------------------- |
| 100.0% | 2.06 MiB |       1 | `accept(Object)` | `java.util.stream.ReduceOps$3ReducingSink`                             |
|  <0.1% |    136 B |       5 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011a18d8` |
|  <0.1% |     96 B |       4 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011a1b10` |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

|      % |     Size | Objects | Callee        | Location                           |
| -----: | -------: | ------: | ------------- | ---------------------------------- |
| 100.0% | 2.06 MiB |       6 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

|      % |     Size | Objects | Callee                          | Location                                       |
| -----: | -------: | ------: | ------------------------------- | ---------------------------------------------- |
| 100.0% | 2.06 MiB |       6 | `forEachRemaining(IntConsumer)` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Objects | Callee                       | Location                      |
| -----: | -------: | ------: | ---------------------------- | ----------------------------- |
| 100.0% | 2.06 MiB |       6 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Objects | Callee                        | Location                            |
| -----: | -------: | ------: | ----------------------------- | ----------------------------------- |
| 100.0% | 2.06 MiB |       6 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

|      % |     Size | Objects | Callee                               | Location                            |
| -----: | -------: | ------: | ------------------------------------ | ----------------------------------- |
| 100.0% | 2.06 MiB |       6 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Objects | Callee                                            | Location                              |
| -----: | -------: | ------: | ------------------------------------------------- | ------------------------------------- |
| 100.0% | 2.06 MiB |       6 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

|      % |     Size | Objects | Callee                 | Location                            |
| -----: | -------: | ------: | ---------------------- | ----------------------------------- |
| 100.0% | 2.06 MiB |       6 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Objects | Callee               | Location                             |
| -----: | -------: | ------: | -------------------- | ------------------------------------ |
| 100.0% | 2.06 MiB |       6 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|      % |     Size | Objects | Callee              | Location                                                               |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 2.06 MiB |       6 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a001198798` |
| 100.0% | 2.06 MiB |       6 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |     Size | Objects | Callee          | Location                             |
| -----: | -------: | ------: | --------------- | ------------------------------------ |
| 100.0% | 2.06 MiB |       6 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |     Size | Objects | Callee                  | Location           |
| -----: | -------: | ------: | ----------------------- | ------------------ |
| 100.0% | 2.06 MiB |       1 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `grow()` (`java.util.ArrayList`)

|      % |     Size | Objects | Callee      | Location              |
| -----: | -------: | ------: | ----------- | --------------------- |
| 100.0% | 2.06 MiB |       1 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % |     Size | Objects | Callee   | Location              |
| -----: | -------: | ------: | -------- | --------------------- |
| 100.0% | 2.06 MiB |       1 | `grow()` | `java.util.ArrayList` |

## Hottest call stacks

Call stacks with the most bytes retained in their leaf frame.

Common call stack: `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----: | -------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 89.2% | 2.06 MiB |       1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `accept(Object, Object)` (`java.util.stream.Collectors$$Lambda.0x000000a0010c40c8`) ← `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a001198798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 10.8% |  255 KiB |       1 | `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`) ← `<init>(ZipFile$Source$Key, boolean, ZipCoder)` ← `get(File, boolean, ZipCoder)` ← `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`) ← `<init>(File, int, Charset)` (`java.util.zip.ZipFile`) ← `<init>(File, int)` ← `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`) ← `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` ← `run()` (`jdk.internal.loader.URLClassPath$3`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `getLoader(URL)` (`jdk.internal.loader.URLClassPath`) ← `getLoader(int)` ← `getResource(String, boolean)` ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| <0.1% |    112 B |       1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`) ← `defineClass(String, byte[], int, int, ProtectionDomain)` ← `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`) ← `defineClass(String, Resource)` (`java.net.URLClassLoader`) ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `updated(Object, Object)` (`scala.collection.immutable.Map$EmptyMap$`) ← `updated(Object, Object)` ← `addOne(Object, Object)` (`scala.collection.immutable.MapBuilderImpl`) ← `addOne(Tuple2)` ← `addOne(Object)` ← `addAll(IterableOnce)` (`scala.collection.mutable.Growable`) ← `addAll$(Growable, IterableOnce)` ← `addAll(IterableOnce)` (`scala.collection.immutable.MapBuilderImpl`) ← `from(IterableOnce)` (`scala.collection.immutable.Map$`) ← `from(IterableOnce)` ← `apply(Seq)` (`scala.collection.MapFactory`) ← `apply$(MapFactory, Seq)` ← `apply(Seq)` (`scala.collection.immutable.Map$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| <0.1% |     96 B |       4 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011a1b10`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011a18d8`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a001198798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` |
| <0.1% |     40 B |       1 | `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011a1d48`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`) ← `builder(long, IntFunction)` (`java.util.stream.Nodes`) ← `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`) ← `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`) ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011a18d8`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a001198798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])`                                                       |

# Lock contention profile

Blocked 38.36s over 1,707 contentions (22.5ms per contention).

| Category         |      % |   Time | Contentions |
| ---------------- | -----: | -----: | ----------: |
| Standard library | 100.0% | 38.36s |       1,707 |

## Call tree

Call paths to the hottest functions.

```
├── 25.06s (65.3%) run()  java.util.concurrent.ForkJoinWorkerThread
│   └── 25.06s (65.3%) runWorker(ForkJoinPool$WorkQueue)  java.util.concurrent.ForkJoinPool
│       ├── 24.12s (62.9%) awaitWork(ForkJoinPool$WorkQueue)
│       │   ├── 22.56s (58.8%) park()  java.util.concurrent.locks.LockSupport
│       │   │   └── 22.56s (58.8%) park(boolean, long)  (100.0% self in 25 call stacks)  jdk.internal.misc.Unsafe
│       │   └── 1.56s (4.1%) parkUntil(long)  java.util.concurrent.locks.LockSupport
│       │       └── 1.56s (4.1%) park(boolean, long)  jdk.internal.misc.Unsafe
│       └── 944.3ms (2.5%) [[via 2 frames]] doExec()  java.util.concurrent.ForkJoinTask
│           ├── 578.4ms (1.5%) [[via 10–12 frames]] park(boolean, long)  jdk.internal.misc.Unsafe
│           └── 366.0ms (1.0%) [[via 5 frames]] park(boolean, long)  jdk.internal.misc.Unsafe
└── 13.30s (34.7%) [[via 28 frames]] park(boolean, long)  jdk.internal.misc.Unsafe
```

## Hottest functions

### Self time

Functions with the most time blocked within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|      % |   Time | Contentions | Function              | Location                   |
| -----: | -----: | ----------: | --------------------- | -------------------------- |
| 100.0% | 38.36s |       1,707 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % |   Time | Contentions | Caller            | Location                                 |
| ----: | -----: | ----------: | ----------------- | ---------------------------------------- |
| 95.9% | 36.80s |       1,608 | `park()`          | `java.util.concurrent.locks.LockSupport` |
|  4.1% |  1.56s |          99 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

### Total time

Functions with the most time blocked within the function and its callees.

|      % |   Time | Contentions | Function                                                                                                               | Location                                                               |
| -----: | -----: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% | 38.36s |       1,707 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                             |
|  95.9% | 36.80s |       1,608 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                               |
|  65.3% | 25.06s |       1,691 | `runWorker(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
|  65.3% | 25.06s |       1,691 | `run()`                                                                                                                | `java.util.concurrent.ForkJoinWorkerThread`                            |
|  62.9% | 24.12s |       1,624 | `awaitWork(ForkJoinPool$WorkQueue)`                                                                                    | `java.util.concurrent.ForkJoinPool`                                    |
|  37.1% | 14.24s |          83 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
|  34.7% | 13.30s |          16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  34.7% | 13.30s |          16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  34.7% | 13.30s |          16 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  34.7% | 13.30s |          16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  34.7% | 13.30s |          16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a0011f6c70`   |
|  34.7% | 13.30s |          16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
|  34.7% | 13.30s |          16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  34.7% | 13.30s |          16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  34.7% | 13.30s |          16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  34.7% | 13.30s |          16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  34.7% | 13.30s |          16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a001198798` |
|  34.7% | 13.30s |          16 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
|  34.7% | 13.30s |          16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  34.7% | 13.30s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|      % |    Time | Contentions | Function                                         | Location                                             |
| -----: | ------: | ----------: | ------------------------------------------------ | ---------------------------------------------------- |
| 100.0% |  38.36s |       1,707 | `park(boolean, long)`                            | `jdk.internal.misc.Unsafe`                           |
|  95.9% |  36.80s |       1,608 | `park()`                                         | `java.util.concurrent.locks.LockSupport`             |
|  65.3% |  25.06s |       1,691 | `runWorker(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
|  65.3% |  25.06s |       1,691 | `run()`                                          | `java.util.concurrent.ForkJoinWorkerThread`          |
|  62.9% |  24.12s |       1,624 | `awaitWork(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
|  37.1% |  14.24s |          83 | `awaitDone(int, long)`                           | `java.util.concurrent.ForkJoinTask`                  |
|  34.7% |  13.30s |          16 | `get()`                                          | `java.util.concurrent.ForkJoinTask`                  |
|  34.7% |  13.30s |          16 | `map(Function1)`                                 | `scala.collection.immutable.Range`                   |
|  34.7% |  13.30s |          16 | `apply(Object)`                                  | `scala.runtime.function.JProcedure1`                 |
|  34.7% |  13.30s |          16 | `foreach(Function1)`                             | `scala.collection.immutable.List`                    |
|  34.7% |  13.30s |          16 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x000000a001001c00` |
|  34.7% |  13.30s |          16 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a001082400`  |
|  34.7% |  13.30s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                   |
|  34.7% |  13.30s |          16 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  34.7% |  13.30s |          16 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  34.7% |  13.30s |          16 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                           |
|   4.1% |   1.56s |          99 | `parkUntil(long)`                                | `java.util.concurrent.locks.LockSupport`             |
|   2.5% | 944.3ms |          67 | `join()`                                         | `java.util.concurrent.ForkJoinTask`                  |
|   2.5% | 944.3ms |          67 | `exec()`                                         | `java.util.concurrent.RecursiveTask`                 |
|   2.5% | 944.3ms |          67 | `doExec()`                                       | `java.util.concurrent.ForkJoinTask`                  |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % |   Time | Contentions | Caller            | Location                                 |
| ----: | -----: | ----------: | ----------------- | ---------------------------------------- |
| 95.9% | 36.80s |       1,608 | `park()`          | `java.util.concurrent.locks.LockSupport` |
|  4.1% |  1.56s |          99 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|     % |   Time | Contentions | Caller                              | Location                            |
| ----: | -----: | ----------: | ----------------------------------- | ----------------------------------- |
| 61.3% | 22.56s |       1,525 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |
| 38.7% | 14.24s |          83 | `awaitDone(int, long)`              | `java.util.concurrent.ForkJoinTask` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |   Time | Contentions | Caller  | Location                                    |
| -----: | -----: | ----------: | ------- | ------------------------------------------- |
| 100.0% | 25.06s |       1,691 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |   Time | Contentions | Caller                              | Location                            |
| -----: | -----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 24.12s |       1,624 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % |    Time | Contentions | Caller   | Location                            |
| ----: | ------: | ----------: | -------- | ----------------------------------- |
| 93.4% |  13.30s |          16 | `get()`  | `java.util.concurrent.ForkJoinTask` |
|  6.6% | 944.3ms |          67 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time | Contentions | Caller                | Location                                    |
| -----: | -----: | ----------: | --------------------- | ------------------------------------------- |
| 100.0% | 13.30s |          16 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |   Time | Contentions | Caller            | Location                                  |
| -----: | -----: | ----------: | ----------------- | ----------------------------------------- |
| 100.0% | 13.30s |          16 | `$anonfun$1(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |   Time | Contentions | Caller                       | Location                                  |
| -----: | -----: | ----------: | ---------------------------- | ----------------------------------------- |
| 100.0% | 13.30s |          16 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |   Time | Contentions | Caller          | Location                                                             |
| -----: | -----: | ----------: | --------------- | -------------------------------------------------------------------- |
| 100.0% | 13.30s |          16 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a0011f6c70` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a0011f6c70`)

|      % |   Time | Contentions | Caller           | Location                           |
| -----: | -----: | ----------: | ---------------- | ---------------------------------- |
| 100.0% | 13.30s |          16 | `map(Function1)` | `scala.collection.immutable.Range` |

##### `map(Function1)` (`scala.collection.immutable.Range`)

|      % |   Time | Contentions | Caller                  | Location                                  |
| -----: | -----: | ----------: | ----------------------- | ----------------------------------------- |
| 100.0% | 13.30s |          16 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |   Time | Contentions | Caller                  | Location                                  |
| -----: | -----: | ----------: | ----------------------- | ----------------------------------------- |
| 100.0% | 13.30s |          16 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|      % |   Time | Contentions | Caller               | Location                                  |
| -----: | -----: | ----------: | -------------------- | ----------------------------------------- |
| 100.0% | 13.30s |          16 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|      % |   Time | Contentions | Caller                                                                                                                 | Location                                    |
| -----: | -----: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 13.30s |          16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |   Time | Contentions | Caller              | Location                                                               |
| -----: | -----: | ----------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 13.30s |          16 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a001198798` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a001198798`)

|      % |   Time | Contentions | Caller          | Location                             |
| -----: | -----: | ----------: | --------------- | ------------------------------------ |
| 100.0% | 13.30s |          16 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|      % |   Time | Contentions | Caller               | Location                             |
| -----: | -----: | ----------: | -------------------- | ------------------------------------ |
| 100.0% | 13.30s |          16 | `apply(Object)`      | `scala.runtime.function.JProcedure1` |
| 100.0% | 13.30s |          16 | `foreach(Function1)` | `scala.collection.immutable.List`    |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |   Time | Contentions | Caller                                                                        | Location                                    |
| -----: | -----: | ----------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 13.30s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |   Time | Contentions | Caller           | Location                                    |
| -----: | -----: | ----------: | ---------------- | ------------------------------------------- |
| 100.0% | 13.30s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a001001c00`)

|      % |   Time | Contentions | Caller                           | Location                                            |
| -----: | -----: | ----------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 13.30s |          16 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a001082400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a001082400`)

|      % |   Time | Contentions | Caller                                           | Location                           |
| -----: | -----: | ----------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 13.30s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |   Time | Contentions | Caller                         | Location                                          |
| -----: | -----: | ----------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 13.30s |          16 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |   Time | Contentions | Caller                     | Location                                          |
| -----: | -----: | ----------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 13.30s |          16 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |   Time | Contentions | Caller                     | Location                   |
| -----: | -----: | ----------: | -------------------------- | -------------------------- |
| 100.0% | 13.30s |          16 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |   Time | Contentions | Caller                                                      | Location                        |
| -----: | -----: | ----------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% | 13.30s |          16 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

|      % |  Time | Contentions | Caller                              | Location                            |
| -----: | ----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 1.56s |          99 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |    Time | Contentions | Caller      | Location                                               |
| -----: | ------: | ----------: | ----------- | ------------------------------------------------------ |
| 100.0% | 944.3ms |          67 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |    Time | Contentions | Caller     | Location                            |
| -----: | ------: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 944.3ms |          67 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |    Time | Contentions | Caller                                                    | Location                                      |
| -----: | ------: | ----------: | --------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 944.3ms |          67 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  48.6% | 458.8ms |          34 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  19.3% | 182.1ms |          14 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  18.6% | 175.8ms |          13 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % |   Time | Contentions | Callee                | Location                   |
| -----: | -----: | ----------: | --------------------- | -------------------------- |
| 100.0% | 36.80s |       1,608 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % |    Time | Contentions | Callee                                   | Location                            |
| ----: | ------: | ----------: | ---------------------------------------- | ----------------------------------- |
| 96.2% |  24.12s |       1,624 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |
|  3.8% | 944.3ms |          67 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % |   Time | Contentions | Callee                              | Location                            |
| -----: | -----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 25.06s |       1,691 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % |   Time | Contentions | Callee            | Location                                 |
| ----: | -----: | ----------: | ----------------- | ---------------------------------------- |
| 93.5% | 22.56s |       1,525 | `park()`          | `java.util.concurrent.locks.LockSupport` |
|  6.5% |  1.56s |          99 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |    Time | Contentions | Callee                                                    | Location                                      |
| -----: | ------: | ----------: | --------------------------------------------------------- | --------------------------------------------- |
| 100.0% |  14.24s |          83 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
|   3.2% | 458.8ms |          34 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|   1.2% | 175.8ms |          13 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time | Contentions | Callee                 | Location                            |
| -----: | -----: | ----------: | ---------------------- | ----------------------------------- |
| 100.0% | 13.30s |          16 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |   Time | Contentions | Callee  | Location                            |
| -----: | -----: | ----------: | ------- | ----------------------------------- |
| 100.0% | 13.30s |          16 | `get()` | `java.util.concurrent.ForkJoinTask` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |   Time | Contentions | Callee                | Location                                    |
| -----: | -----: | ----------: | --------------------- | ------------------------------------------- |
| 100.0% | 13.30s |          16 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |   Time | Contentions | Callee            | Location                                  |
| -----: | -----: | ----------: | ----------------- | ----------------------------------------- |
| 100.0% | 13.30s |          16 | `$anonfun$1(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a0011f6c70`)

|      % |   Time | Contentions | Callee                       | Location                                  |
| -----: | -----: | ----------: | ---------------------------- | ----------------------------------------- |
| 100.0% | 13.30s |          16 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `map(Function1)` (`scala.collection.immutable.Range`)

|      % |   Time | Contentions | Callee          | Location                                                             |
| -----: | -----: | ----------: | --------------- | -------------------------------------------------------------------- |
| 100.0% | 13.30s |          16 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a0011f6c70` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |   Time | Contentions | Callee           | Location                           |
| -----: | -----: | ----------: | ---------------- | ---------------------------------- |
| 100.0% | 13.30s |          16 | `map(Function1)` | `scala.collection.immutable.Range` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|      % |   Time | Contentions | Callee                  | Location                                  |
| -----: | -----: | ----------: | ----------------------- | ----------------------------------------- |
| 100.0% | 13.30s |          16 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|      % |   Time | Contentions | Callee                  | Location                                  |
| -----: | -----: | ----------: | ----------------------- | ----------------------------------------- |
| 100.0% | 13.30s |          16 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |   Time | Contentions | Callee               | Location                                  |
| -----: | -----: | ----------: | -------------------- | ----------------------------------------- |
| 100.0% | 13.30s |          16 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a001198798`)

|      % |   Time | Contentions | Callee                                                                                                                 | Location                                    |
| -----: | -----: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 13.30s |          16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|      % |   Time | Contentions | Callee              | Location                                                               |
| -----: | -----: | ----------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 13.30s |          16 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a001198798` |
| 100.0% | 13.30s |          16 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |   Time | Contentions | Callee          | Location                             |
| -----: | -----: | ----------: | --------------- | ------------------------------------ |
| 100.0% | 13.30s |          16 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |   Time | Contentions | Callee               | Location                          |
| -----: | -----: | ----------: | -------------------- | --------------------------------- |
| 100.0% | 13.30s |          16 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a001001c00`)

|      % |   Time | Contentions | Callee           | Location                                   |
| -----: | -----: | ----------: | ---------------- | ------------------------------------------ |
| 100.0% | 13.30s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a001082400`)

|      % |   Time | Contentions | Callee                         | Location                                             |
| -----: | -----: | ----------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 13.30s |          16 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a001001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |   Time | Contentions | Callee                           | Location                                            |
| -----: | -----: | ----------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 13.30s |          16 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a001082400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |   Time | Contentions | Callee                                           | Location                           |
| -----: | -----: | ----------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 13.30s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |   Time | Contentions | Callee                         | Location                                          |
| -----: | -----: | ----------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 13.30s |          16 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |   Time | Contentions | Callee                     | Location                                          |
| -----: | -----: | ----------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 13.30s |          16 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

|      % |  Time | Contentions | Callee                | Location                   |
| -----: | ----: | ----------: | --------------------- | -------------------------- |
| 100.0% | 1.56s |          99 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |    Time | Contentions | Callee                 | Location                            |
| -----: | ------: | ----------: | ---------------------- | ----------------------------------- |
| 100.0% | 944.3ms |          67 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |    Time | Contentions | Callee      | Location                                               |
| -----: | ------: | ----------: | ----------- | ------------------------------------------------------ |
| 100.0% | 944.3ms |          67 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |    Time | Contentions | Callee   | Location                                            |
| -----: | ------: | ----------: | -------- | --------------------------------------------------- |
| 100.0% | 944.3ms |          67 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|  12.8% | 121.2ms |           9 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

## Hottest call stacks

Call stacks with the most time blocked in their leaf frame.

|     % |    Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 58.8% |  22.56s |       1,525 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 34.7% |  13.30s |          16 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a0011f6c70`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a001198798`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a001001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a001082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  4.1% |   1.56s |          99 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.0% | 366.0ms |          24 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.4% | 172.0ms |          12 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.2% |  85.4ms |           6 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.1% |  50.0ms |           4 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.1% |  29.1ms |           2 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.1% |  24.0ms |           2 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.1% |  21.2ms |           2 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.1% |  20.6ms |           1 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| <0.1% |  16.0ms |           1 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                               |
| <0.1% |  15.8ms |           1 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| <0.1% |  15.6ms |           1 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| <0.1% |  15.2ms |           1 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| <0.1% |  13.8ms |           1 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
| <0.1% |  13.3ms |           1 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| <0.1% |  12.2ms |           1 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <0.1% |  11.6ms |           1 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a0011ffbc0`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| <0.1% |  10.8ms |           1 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

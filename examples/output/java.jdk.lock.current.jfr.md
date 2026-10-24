# Sampling profile

Collected 1,268 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 90.2% |   1,144 |
| Standard library |  9.8% |     124 |

## Call tree

Call paths to the hottest functions.

```
├── 1,257 samples (99.1%) run()  java.util.concurrent.ForkJoinWorkerThread
│   └── 1,257 samples (99.1%) runWorker(ForkJoinPool$WorkQueue)  java.util.concurrent.ForkJoinPool
│       ├── 1,253 samples (98.8%) scan(ForkJoinPool$WorkQueue, int, int)
│       │   └── 1,253 samples (98.8%) topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)  java.util.concurrent.ForkJoinPool$WorkQueue
│       │       └── 1,252 samples (98.7%) doExec()  java.util.concurrent.ForkJoinTask
│       │           ├── 1,211 samples (95.5%) [[via 6 frames]] exec()  java.util.concurrent.RecursiveTask
│       │           │   └── 1,211 samples (95.5%) compute()  org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│       │           │       ├── 620 samples (48.9%) computeDirectly()  (self 1.9%)  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │           │       │   ├── 449 samples (35.4%) [[via 1 frame]] findNearestCentroid()  (self 12.1%)  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │           │       │   │   └── 296 samples (23.3%) distance(Double[], Double[])
│       │           │       │   └── 147 samples (11.6%) [[via 1 frame]] collectClusters(int[])  (self 5.9%)  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │           │       │       ├── 45 samples (3.5%) computeIfAbsent(Object, Function)  (self 2.8%)  java.util.HashMap
│       │           │       │       │   └── 10 samples (0.8%) apply(Object)  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000a80121ece0
│       │           │       │       └── 27 samples (2.1%) [[via 3 frames]] grow(int)  java.util.ArrayList
│       │           │       │           └── 21 samples (1.7%) copyOf(Object[], int)  (2.5% self in 23 call stacks)  java.util.Arrays
│       │           │       ├── 556 samples (43.8%) computeDirectly()  org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       │           │       │   └── 556 samples (43.8%) [[via 1 frame]] vectorSum()  (self 1.7%)  org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       │           │       │       └── 535 samples (42.2%) accumulate(Double[], double[])  (43.5% self in 127 call stacks)
│       │           │       ├── 18 samples (1.4%) [[via 2 frames]] merge(Map, Map)  org.renaissance.jdk.concurrent.JavaKMeans
│       │           │       │   ├── 13 samples (1.0%) [[via 3 frames]] merge(Object, Object, BiFunction)  java.util.HashMap
│       │           │       │   │   └── 10 samples (0.8%) [[via 2 frames]] <init>(Collection)  java.util.ArrayList
│       │           │       │   │       └── 9 samples (0.7%) 1 more branch, toArray()
│       │           │       │   └── 4 samples (0.3%) [[via 2 frames]] putVal(int, Object, Object, boolean, boolean)  java.util.HashMap
│       │           │       ├── 11 samples (0.9%) join()  java.util.concurrent.ForkJoinTask
│       │           │       │   └── 11 samples (0.9%) awaitDone(int, long)
│       │           │       │       ├── 7 samples (0.6%) helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)  java.util.concurrent.ForkJoinPool
│       │           │       │       └── 2 samples (0.2%) tryRemoveAndExec(ForkJoinTask, boolean)  java.util.concurrent.ForkJoinPool$WorkQueue
│       │           │       └── 3 samples (0.2%) [[via 2 frames]] add(double[], double[])  org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       │           └── 37 samples (2.9%) exec()  java.util.concurrent.RecursiveTask
│       │               └── 37 samples (2.9%) compute()  org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│       │                   ├── 4 samples (0.3%) computeDirectly()  org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask
│       │                   │   └── 2 samples (0.2%) [[via 5 frames]] spliterator(double[], int, int)  java.util.Arrays
│       │                   └── 33 samples (2.6%) 4 more branches, largest computeDirectly() (1.3%)  org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask and computeDirectly() (0.8%)
│       └── 2 samples (0.2%) [[via 2 frames]] park(boolean, long)  jdk.internal.misc.Unsafe
└── 11 samples (0.9%) [[via 2 frames]] loadAndInvokeHarnessClass(ModuleLoader, String, String[])  org.renaissance.core.Launcher
    ├── 9 samples (0.7%) [[via 7 frames]] main(String[])  org.renaissance.harness.RenaissanceSuite$
    │   ├── 3 samples (0.2%) [[via 17 frames]] accept(Object)  java.util.stream.ReduceOps$3ReducingSink
    │   ├── 1 sample (0.1%) [[via 22 frames]] isAssignableFrom(Class)  java.lang.Class
    │   └── 1 sample (0.1%) [[via 8 frames]] readLine()  java.util.Properties$LineReader
    └── 2 samples (0.2%) [[via 8 frames]] inflateBytesBytes(long, byte[], int, int, byte[], int, int)  java.util.zip.Inflater
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                                                      | Location                                                                              |
| ----: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 43.5% |     551 | `accumulate(Double[], double[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| 23.4% |     297 | `distance(Double[], Double[])`                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| 12.5% |     158 | `findNearestCentroid()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  6.1% |      77 | `collectClusters(int[])`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  2.8% |      36 | `computeIfAbsent(Object, Function)`                           | `java.util.HashMap`                                                                   |
|  2.5% |      32 | `copyOf(Object[], int)`                                       | `java.util.Arrays`                                                                    |
|  1.9% |      24 | `computeDirectly()`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  1.7% |      22 | `vectorSum()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  0.9% |      11 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`     | `java.util.concurrent.ForkJoinPool`                                                   |
|  0.8% |      10 | `apply(Object)`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000a80121ece0` |
|  0.5% |       6 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                                                              |
|  0.5% |       6 | `grow(int)`                                                   | `java.util.ArrayList`                                                                 |
|  0.3% |       4 | `park(boolean, long)`                                         | `jdk.internal.misc.Unsafe`                                                            |
|  0.2% |       3 | `accept(Object)`                                              | `java.util.stream.ReduceOps$3ReducingSink`                                            |
|  0.2% |       3 | `merge(Object, Object, BiFunction)`                           | `java.util.HashMap`                                                                   |
|  0.2% |       3 | `putVal(int, Object, Object, boolean, boolean)`               | `java.util.HashMap`                                                                   |
|  0.2% |       3 | `add(double[], double[])`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  0.2% |       2 | `doExec()`                                                    | `java.util.concurrent.ForkJoinTask`                                                   |
|  0.2% |       2 | `tryRemoveAndExec(ForkJoinTask, boolean)`                     | `java.util.concurrent.ForkJoinPool$WorkQueue`                                         |
|  0.2% |       2 | `runWorker(ForkJoinPool$WorkQueue)`                           | `java.util.concurrent.ForkJoinPool`                                                   |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Ours

|     % | Samples | Function                         | Location                                                                              |
| ----: | ------: | -------------------------------- | ------------------------------------------------------------------------------------- |
| 43.5% |     551 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
| 23.4% |     297 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
| 12.5% |     158 | `findNearestCentroid()`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  6.1% |      77 | `collectClusters(int[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  1.9% |      24 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |
|  1.7% |      22 | `vectorSum()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  0.8% |      10 | `apply(Object)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000a80121ece0` |
|  0.2% |       3 | `add(double[], double[])`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                             |
|  0.1% |       1 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                                |
|  0.1% |       1 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                            |

##### Standard library

|    % | Samples | Function                                                      | Location                                      |
| ---: | ------: | ------------------------------------------------------------- | --------------------------------------------- |
| 2.8% |      36 | `computeIfAbsent(Object, Function)`                           | `java.util.HashMap`                           |
| 2.5% |      32 | `copyOf(Object[], int)`                                       | `java.util.Arrays`                            |
| 0.9% |      11 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`     | `java.util.concurrent.ForkJoinPool`           |
| 0.5% |       6 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                      |
| 0.5% |       6 | `grow(int)`                                                   | `java.util.ArrayList`                         |
| 0.3% |       4 | `park(boolean, long)`                                         | `jdk.internal.misc.Unsafe`                    |
| 0.2% |       3 | `accept(Object)`                                              | `java.util.stream.ReduceOps$3ReducingSink`    |
| 0.2% |       3 | `merge(Object, Object, BiFunction)`                           | `java.util.HashMap`                           |
| 0.2% |       3 | `putVal(int, Object, Object, boolean, boolean)`               | `java.util.HashMap`                           |
| 0.2% |       2 | `doExec()`                                                    | `java.util.concurrent.ForkJoinTask`           |
| 0.2% |       2 | `tryRemoveAndExec(ForkJoinTask, boolean)`                     | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 0.2% |       2 | `runWorker(ForkJoinPool$WorkQueue)`                           | `java.util.concurrent.ForkJoinPool`           |
| 0.2% |       2 | `spliterator(double[], int, int)`                             | `java.util.Arrays`                            |
| 0.1% |       1 | `isAssignableFrom(Class)`                                     | `java.lang.Class`                             |
| 0.1% |       1 | `readLine()`                                                  | `java.util.Properties$LineReader`             |
| 0.1% |       1 | `awaitDone(int, long)`                                        | `java.util.concurrent.ForkJoinTask`           |
| 0.1% |       1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`          | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 0.1% |       1 | `<init>(Collection)`                                          | `java.util.ArrayList`                         |
| 0.1% |       1 | `putMapEntries(Map, boolean)`                                 | `java.util.HashMap`                           |
| 0.1% |       1 | `hashCode()`                                                  | `java.lang.Object`                            |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 99.8% |     550 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |
|  0.2% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |     297 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 88.6% |     140 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
| 10.8% |      17 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |
|  0.6% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 58.4% |      45 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
| 40.3% |      31 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |
|  1.3% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 91.7% |      33 | `java.util.HashMap:1219` |
|  8.3% |       3 | `java.util.HashMap:1206` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      32 | `java.util.Arrays:3482` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |      24 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:204` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 86.4% |      19 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |
|  9.1% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |
|  4.5% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 63.6% |       7 | `java.util.concurrent.ForkJoinPool:2058` |
| 27.3% |       3 | `java.util.concurrent.ForkJoinPool:2053` |
|  9.1% |       1 | `java.util.concurrent.ForkJoinPool:2039` |

##### `grow(int)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       6 | `java.util.ArrayList:239` |

##### `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       3 | `java.util.stream.ReduceOps$3ReducingSink:169` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 66.7% |       2 | `java.util.HashMap:1384` |
| 33.3% |       1 | `java.util.HashMap:1371` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|     % | Samples | Location                |
| ----: | ------: | ----------------------- |
| 66.7% |       2 | `java.util.HashMap:649` |
| 33.3% |       1 | `java.util.HashMap:635` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       3 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:432` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       2 | `java.util.concurrent.ForkJoinTask:387` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|     % | Samples | Location                                           |
| ----: | ------: | -------------------------------------------------- |
| 50.0% |       1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1332` |
| 50.0% |       1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1347` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 50.0% |       1 | `java.util.concurrent.ForkJoinPool:1808` |
| 50.0% |       1 | `java.util.concurrent.ForkJoinPool:1809` |

##### `spliterator(double[], int, int)` (`java.util.Arrays`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       2 | `java.util.Arrays:5514` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:276` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `readLine()` (`java.util.Properties$LineReader`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       1 | `java.util.Properties$LineReader:567` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ForkJoinTask:423` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1314` |

##### `<init>(Collection)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       1 | `java.util.ArrayList:183` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:503` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |     551 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     297 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     158 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |      77 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |      36 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % | Samples | Caller      | Location              |
| ----: | ------: | ----------- | --------------------- |
| 68.8% |      22 | `grow(int)` | `java.util.ArrayList` |
| 31.3% |      10 | `toArray()` | `java.util.ArrayList` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |      24 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |      22 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |      11 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000a80121ece0`)

|      % | Samples | Caller                              | Location            |
| -----: | ------: | ----------------------------------- | ------------------- |
| 100.0% |      10 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|      % | Samples | Caller                      | Location                 |
| -----: | ------: | --------------------------- | ------------------------ |
| 100.0% |       6 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `grow(int)` (`java.util.ArrayList`)

|      % | Samples | Caller   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% |       6 | `grow()` | `java.util.ArrayList` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Caller   | Location                                 |
| -----: | ------: | -------- | ---------------------------------------- |
| 100.0% |       4 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`)

|      % | Samples | Caller        | Location                           |
| -----: | ------: | ------------- | ---------------------------------- |
| 100.0% |       3 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % | Samples | Caller                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |       3 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller                        | Location            |
| -----: | ------: | ----------------------------- | ------------------- |
| 100.0% |       3 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller                               | Location                                                  |
| -----: | ------: | ------------------------------------ | --------------------------------------------------------- |
| 100.0% |       3 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller                                               | Location                                      |
| -----: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% |       2 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |       2 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |       2 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `spliterator(double[], int, int)` (`java.util.Arrays`)

|      % | Samples | Caller                       | Location           |
| -----: | ------: | ---------------------------- | ------------------ |
| 100.0% |       2 | `stream(double[], int, int)` | `java.util.Arrays` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `isAssignableFrom(Class)` (`java.lang.Class`)

|      % | Samples | Caller                                    | Location                     |
| -----: | ------: | ----------------------------------------- | ---------------------------- |
| 100.0% |       1 | `isNullConversion(Class, Class, boolean)` | `sun.invoke.util.VerifyType` |

##### `readLine()` (`java.util.Properties$LineReader`)

|      % | Samples | Caller                         | Location               |
| -----: | ------: | ------------------------------ | ---------------------- |
| 100.0% |       1 | `load0(Properties$LineReader)` | `java.util.Properties` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |       1 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                                   | Location                            |
| -----: | ------: | ---------------------------------------- | ----------------------------------- |
| 100.0% |       1 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `<init>(Collection)` (`java.util.ArrayList`)

|      % | Samples | Caller                       | Location                                    |
| -----: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% |       1 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller        | Location            |
| -----: | ------: | ------------- | ------------------- |
| 100.0% |       1 | `<init>(Map)` | `java.util.HashMap` |

##### `hashCode()` (`java.lang.Object`)

|      % | Samples | Caller         | Location            |
| -----: | ------: | -------------- | ------------------- |
| 100.0% |       1 | `hash(Object)` | `java.util.HashMap` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                                  | Location                                                               |
| ----: | ------: | --------------------------------------------------------- | ---------------------------------------------------------------------- |
| 99.1% |   1,257 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                                    |
| 99.1% |   1,257 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`                            |
| 98.8% |   1,253 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| 98.8% |   1,253 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                                    |
| 98.7% |   1,252 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                                    |
| 98.5% |   1,249 | `compute()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 98.5% |   1,249 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                                   |
| 96.0% |   1,217 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                                    |
| 96.0% |   1,217 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                                    |
| 95.0% |   1,205 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| 49.7% |     630 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 45.2% |     573 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 45.2% |     573 | `computeDirectly()`                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 43.5% |     551 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 35.9% |     455 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 35.2% |     446 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                                    |
| 26.2% |     332 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                                    |
| 25.9% |     328 | `lambda$run$0(int, List, int)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 25.9% |     328 | `call()`                                                  | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121df70` |
| 25.9% |     328 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable`                    |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Ours

|     % | Samples | Function                                                    | Location                                                               |
| ----: | ------: | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
| 98.5% |   1,249 | `compute()`                                                 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 49.7% |     630 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 45.2% |     573 | `vectorSum()`                                               | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 45.2% |     573 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 43.5% |     551 | `accumulate(Double[], double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
| 35.9% |     455 | `findNearestCentroid()`                                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 25.9% |     328 | `lambda$run$0(int, List, int)`                              | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 25.9% |     328 | `call()`                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121df70` |
| 23.4% |     297 | `distance(Double[], Double[])`                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 21.3% |     270 | `computeDirectly()`                                         | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 21.2% |     269 | `computeClusterAverages()`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 20.8% |     264 | `average(List)`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
| 11.9% |     151 | `collectClusters(int[])`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  1.5% |      19 | `merge(Map, Map)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  1.5% |      19 | `combineResults(Map, Map)`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  1.5% |      19 | `combineResults(Object, Object)`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  1.1% |      14 | `lambda$merge$7(Map, Object, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  1.1% |      14 | `accept(Object, Object)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30` |
|  0.9% |      11 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`                                        |
|  0.9% |      11 | `launchHarnessClass(String, String[])`                      | `org.renaissance.core.Launcher`                                        |

##### Standard library

|     % | Samples | Function                                                  | Location                                            |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------------- |
| 99.1% |   1,257 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                 |
| 99.1% |   1,257 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`         |
| 98.8% |   1,253 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 98.8% |   1,253 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`                 |
| 98.7% |   1,252 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| 98.5% |   1,249 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                |
| 96.0% |   1,217 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                 |
| 96.0% |   1,217 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`                 |
| 95.0% |   1,205 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 35.2% |     446 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`                 |
| 26.2% |     332 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                 |
| 25.9% |     328 | `exec()`                                                  | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  3.6% |      46 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                 |
|  2.5% |      32 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                  |
|  2.2% |      28 | `grow(int)`                                               | `java.util.ArrayList`                               |
|  2.2% |      28 | `grow()`                                                  | `java.util.ArrayList`                               |
|  2.2% |      28 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                               |
|  2.2% |      28 | `add(Object)`                                             | `java.util.ArrayList`                               |
|  1.1% |      14 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                 |
|  1.1% |      14 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                 |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |   1,257 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                                   | Location                            |
| -----: | ------: | ---------------------------------------- | ----------------------------------- |
| 100.0% |   1,253 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |   1,253 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller                                                    | Location                                      |
| -----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 100.0% |   1,252 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  96.2% |   1,205 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  35.6% |     446 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  26.0% |     325 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller   | Location                             |
| -----: | ------: | -------- | ------------------------------------ |
| 100.0% |   1,249 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   1,249 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |   1,217 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |   1,217 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |   1,205 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     630 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 100.0% |     630 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     573 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     573 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |     573 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |     551 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     455 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Caller                         | Location                                               |
| ----: | ------: | ------------------------------ | ------------------------------------------------------ |
| 73.5% |     328 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
| 59.2% |     264 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |     332 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |     328 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121df70` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121df70`)

|      % | Samples | Caller   | Location                                            |
| -----: | ------: | -------- | --------------------------------------------------- |
| 100.0% |     328 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     328 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     297 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller              | Location                                               |
| -----: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% |     270 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |
|  99.6% |     269 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller              | Location                                               |
| -----: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% |     269 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     264 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     151 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |      46 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % | Samples | Caller      | Location              |
| ----: | ------: | ----------- | --------------------- |
| 68.8% |      22 | `grow(int)` | `java.util.ArrayList` |
| 31.3% |      10 | `toArray()` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

|      % | Samples | Caller   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% |      28 | `grow()` | `java.util.ArrayList` |

##### `grow()` (`java.util.ArrayList`)

|      % | Samples | Caller                       | Location              |
| -----: | ------: | ---------------------------- | --------------------- |
| 100.0% |      28 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % | Samples | Caller        | Location              |
| -----: | ------: | ------------- | --------------------- |
| 100.0% |      28 | `add(Object)` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |      28 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller                     | Location                                                   |
| -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% |      19 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                           | Location                                                   |
| -----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 100.0% |      19 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |      19 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller                   | Location                                                               |
| -----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% |      14 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30`)

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

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Caller                                 | Location                        |
| -----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% |      11 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Caller           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |      11 | `main(String[])` | `org.renaissance.core.Launcher` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                   | Location                            |
| ----: | ------: | ---------------------------------------- | ----------------------------------- |
| 99.7% |   1,253 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |
|  0.2% |       2 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |   1,257 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|     % | Samples | Callee     | Location                            |
| ----: | ------: | ---------- | ----------------------------------- |
| 99.9% |   1,252 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Callee                                               | Location                                      |
| -----: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% |   1,253 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee      | Location                                            |
| ----: | ------: | ----------- | --------------------------------------------------- |
| 99.8% |   1,249 | `exec()`    | `java.util.concurrent.RecursiveTask`                |
| 26.2% |     328 | `exec()`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  0.2% |       2 | `setDone()` | `java.util.concurrent.ForkJoinTask`                 |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 97.4% |   1,217 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 50.4% |     630 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 45.9% |     573 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 21.6% |     270 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  1.5% |      19 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Callee      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |   1,249 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee                                                    | Location                                      |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 99.0% |   1,205 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 27.3% |     332 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  0.2% |       2 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |   1,217 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   1,205 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |     630 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  72.2% |     455 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  24.0% |     151 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                           | Location                                                  |
| ----: | ------: | -------------------------------- | --------------------------------------------------------- |
| 96.2% |     551 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Callee              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     573 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |     573 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                         | Location                                                   |
| ----: | ------: | ------------------------------ | ---------------------------------------------------------- |
| 65.3% |     297 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     446 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee     | Location                            |
| ----: | ------: | ---------- | ----------------------------------- |
| 97.9% |     325 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     328 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121df70`)

|      % | Samples | Callee                         | Location                                    |
| -----: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% |     328 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % | Samples | Callee   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |     328 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121df70` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee                     | Location                                               |
| ----: | ------: | -------------------------- | ------------------------------------------------------ |
| 99.6% |     269 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 99.6% |     269 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee                | Location                                               |
| ----: | ------: | --------------------- | ------------------------------------------------------ |
| 98.1% |     264 | `average(List)`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  1.5% |       4 | `boxed(double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.4% |       1 | `put(Object, Object)` | `java.util.HashMap`                                    |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     264 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                              | Location              |
| ----: | ------: | ----------------------------------- | --------------------- |
| 30.5% |      46 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |
| 18.5% |      28 | `add(Object)`                       | `java.util.ArrayList` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|     % | Samples | Callee          | Location                                                                              |
| ----: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| 21.7% |      10 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000a80121ece0` |

##### `grow(int)` (`java.util.ArrayList`)

|     % | Samples | Callee                  | Location           |
| ----: | ------: | ----------------------- | ------------------ |
| 78.6% |      22 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `grow()` (`java.util.ArrayList`)

|      % | Samples | Callee      | Location              |
| -----: | ------: | ----------- | --------------------- |
| 100.0% |      28 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % | Samples | Callee   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% |      28 | `grow()` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

|      % | Samples | Callee                       | Location              |
| -----: | ------: | ---------------------------- | --------------------- |
| 100.0% |      28 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee                | Location            |
| ----: | ------: | --------------------- | ------------------- |
| 73.7% |      14 | `forEach(BiConsumer)` | `java.util.HashMap` |
| 26.3% |       5 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |      19 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                     | Location                                                   |
| -----: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% |      19 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee                              | Location            |
| -----: | ------: | ----------------------------------- | ------------------- |
| 100.0% |      14 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30`)

|      % | Samples | Callee                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |      14 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|     % | Samples | Callee                  | Location                                                               |
| ----: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 78.6% |      11 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121f3c0` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % | Samples | Callee                   | Location                                                               |
| -----: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% |      14 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee                               | Location                            |
| ----: | ------: | ------------------------------------ | ----------------------------------- |
| 81.8% |       9 | `invoke(Object, Object[])`           | `java.lang.reflect.Method`          |
| 18.2% |       2 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Callee                                                      | Location                        |
| -----: | ------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% |      11 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 5.3% |      67 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                     |
| 4.0% |      51 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 3.6% |      46 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2.9% |      37 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2.8% |      35 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2.7% |      34 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2.7% |      34 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                   |
| 2.0% |      25 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.9% |      24 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.9% |      24 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.9% |      24 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.8% |      23 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.7% |      22 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) |
| 1.7% |      22 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.6% |      20 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                      |
| 1.6% |      20 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.5% |      19 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.4% |      18 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.3% |      16 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.2% |      15 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

# Allocated heap profile

Allocated 38 GiB over 2,486 samples (15.7 MiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Standard library | 93.1% | 35.4 GiB |   2,328 |
| Ours             |  6.9% | 2.62 GiB |     157 |
| Unknown          | <0.1% | 1.95 KiB |       1 |

## Call tree

Call paths to the hottest functions.

```
├── 37.8 GiB (99.4%) [[via 4 frames]] doExec()  java.util.concurrent.ForkJoinTask
│   ├── 28.2 GiB (74.1%) [[via 5–6 frames]] exec()  java.util.concurrent.RecursiveTask
│   │   └── 28.2 GiB (74.1%) compute()  org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│   │       ├── 22.7 GiB (59.6%) [[via 2 frames]] merge(Map, Map)  org.renaissance.jdk.concurrent.JavaKMeans
│   │       │   ├── 22.4 GiB (58.9%) [[via 5 frames]] lambda$merge$6(List, List)  (self 0.6%)  org.renaissance.jdk.concurrent.JavaKMeans
│   │       │   │   ├── 15.6 GiB (41.0%) addAll(Collection)  java.util.ArrayList
│   │       │   │   │   ├── 8.84 GiB (23.3%) grow(int)
│   │       │   │   │   │   └── 8.84 GiB (23.3%) copyOf(Object[], int)  (self 23.3%; 91.4% in 200 call stacks)  java.util.Arrays
│   │       │   │   │   └── 6.76 GiB (17.8%) toArray()
│   │       │   │   │       └── 6.76 GiB (17.8%) copyOf(Object[], int)  java.util.Arrays
│   │       │   │   └── 6.56 GiB (17.3%) [[via 2 frames]] copyOf(Object[], int)  java.util.Arrays
│   │       │   └── 163 MiB (0.4%) [[via 3 frames]] newNode(int, Object, Object, HashMap$Node)  java.util.HashMap
│   │       ├── 5.38 GiB (14.2%) computeDirectly()  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   │       │   ├── 4.24 GiB (11.2%) [[via 1 frame]] collectClusters(int[])  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   │       │   │   ├── 3.87 GiB (10.2%) [[via 4 frames]] copyOf(Object[], int)  java.util.Arrays
│   │       │   │   └── 203 MiB (0.5%) computeIfAbsent(Object, Function)  java.util.HashMap
│   │       │   │       ├── 50.9 MiB (0.1%) resize()
│   │       │   │       └── 20.3 MiB (0.1%) apply(Object)  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000a80121ece0
│   │       │   │           └── 20.3 MiB (0.1%) lambda$collectClusters$0(Double[])  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   │       │   └── 1.14 GiB (3.0%) [[via 1 frame]] findNearestCentroid()  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   │       └── 23.1 MiB (0.1%) [[via 2 frames]] add(double[], double[])  org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│   ├── 9.41 GiB (24.8%) exec()  java.util.concurrent.RecursiveTask
│   │   └── 9.41 GiB (24.8%) compute()  org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│   │       ├── 8.68 GiB (22.8%) [[via 8 frames]] lambda$merge$6(List, List)  org.renaissance.jdk.concurrent.JavaKMeans
│   │       │   ├── 6.39 GiB (16.8%) addAll(Collection)  java.util.ArrayList
│   │       │   │   ├── 3.26 GiB (8.6%) grow(int)
│   │       │   │   │   └── 3.26 GiB (8.6%) copyOf(Object[], int)  java.util.Arrays
│   │       │   │   └── 3.13 GiB (8.2%) toArray()
│   │       │   │       └── 3.13 GiB (8.2%) copyOf(Object[], int)  java.util.Arrays
│   │       │   └── 2.3 GiB (6.0%) [[via 2 frames]] copyOf(Object[], int)  java.util.Arrays
│   │       ├── 635 MiB (1.6%) createSubtask(int, int)  org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│   │       └── 52.7 MiB (0.1%) createSubtask(int, int)  org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│   └── 210 MiB (0.5%) [[via 2 frames]] lambda$run$0(int, List, int)  org.renaissance.jdk.concurrent.JavaKMeans
├── 192 MiB (0.5%) [[via 17 frames]] executeBenchmark()  org.renaissance.harness.ExecutionDriver
│   ├── 125 MiB (0.3%) [[via 9 frames]] allocateInstance(Object)  java.lang.invoke.DirectMethodHandle
│   └── 21.6 MiB (0.1%) [[via 22 frames]] valueOf(double)  java.lang.Double
└── 20.9 MiB (0.1%) [[via 11 frames]] initCEN(int, ZipCoder)  java.util.zip.ZipFile$Source
```

## Hottest functions

### Self size

Functions with the most bytes allocated within the function body, excluding callees.

|     % |     Size | Samples | Function                                     | Location                                                   |
| ----: | -------: | ------: | -------------------------------------------- | ---------------------------------------------------------- |
| 91.4% | 34.7 GiB |   2,128 | `copyOf(Object[], int)`                      | `java.util.Arrays`                                         |
|  3.1% | 1.16 GiB |      80 | `findNearestCentroid()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.8% |  710 MiB |      21 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.8% |  296 MiB |      15 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                                        |
|  0.6% |  232 MiB |       9 | `lambda$merge$6(List, List)`                 | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.5% |  210 MiB |       1 | `lambda$run$0(int, List, int)`               | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.3% |  127 MiB |       3 | `allocateInstance(Object)`                   | `java.lang.invoke.DirectMethodHandle`                      |
|  0.3% |  107 MiB |       9 | `collectClusters(int[])`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.2% | 92.6 MiB |       3 | `merge(Map, Map)`                            | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.2% | 72.7 MiB |       9 | `grow(int)`                                  | `java.util.ArrayList`                                      |
|  0.2% | 68.8 MiB |       7 | `createSubtask(int, int)`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.1% | 53.9 MiB |       4 | `resize()`                                   | `java.util.HashMap`                                        |
|  0.1% | 23.1 MiB |       8 | `add(double[], double[])`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.1% | 21.6 MiB |      35 | `valueOf(double)`                            | `java.lang.Double`                                         |
|  0.1% | 20.9 MiB |       1 | `initCEN(int, ZipCoder)`                     | `java.util.zip.ZipFile$Source`                             |
|  0.1% | 20.3 MiB |       3 | `lambda$collectClusters$0(Double[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.1% | 20.2 MiB |       4 | `iterator()`                                 | `java.util.HashMap$EntrySet`                               |
| <0.1% | 19.4 MiB |       1 | `vectorSum()`                                | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% |   12 MiB |      30 | `copyOf(byte[], int)`                        | `java.util.Arrays`                                         |
| <0.1% | 10.9 MiB |      15 | `mapToObj(IntFunction, int)`                 | `java.util.stream.IntPipeline`                             |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |      Size | Samples | Function                                     | Location                                    |
| ----: | --------: | ------: | -------------------------------------------- | ------------------------------------------- |
| 91.4% |  34.7 GiB |   2,128 | `copyOf(Object[], int)`                      | `java.util.Arrays`                          |
|  0.8% |   296 MiB |      15 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`                         |
|  0.3% |   127 MiB |       3 | `allocateInstance(Object)`                   | `java.lang.invoke.DirectMethodHandle`       |
|  0.2% |  72.7 MiB |       9 | `grow(int)`                                  | `java.util.ArrayList`                       |
|  0.1% |  53.9 MiB |       4 | `resize()`                                   | `java.util.HashMap`                         |
|  0.1% |  21.6 MiB |      35 | `valueOf(double)`                            | `java.lang.Double`                          |
|  0.1% |  20.9 MiB |       1 | `initCEN(int, ZipCoder)`                     | `java.util.zip.ZipFile$Source`              |
|  0.1% |  20.2 MiB |       4 | `iterator()`                                 | `java.util.HashMap$EntrySet`                |
| <0.1% |    12 MiB |      30 | `copyOf(byte[], int)`                        | `java.util.Arrays`                          |
| <0.1% |  10.9 MiB |      15 | `mapToObj(IntFunction, int)`                 | `java.util.stream.IntPipeline`              |
| <0.1% |   7.8 MiB |      13 | `intStream(Spliterator$OfInt, boolean)`      | `java.util.stream.StreamSupport`            |
| <0.1% |   6.3 MiB |      16 | `<init>(InputStream, Inflater, int)`         | `java.util.zip.InflaterInputStream`         |
| <0.1% |   3.4 MiB |       7 | `opWrapSink(int, Sink)`                      | `java.util.stream.IntPipeline$1`            |
| <0.1% |  3.03 MiB |       3 | `copyOf(Object[], int, Class)`               | `java.util.Arrays`                          |
| <0.1% |  1.54 MiB |       5 | `copyOfRangeByte(byte[], int, int)`          | `java.util.Arrays`                          |
| <0.1% |  1.54 MiB |       5 | `builder(long, IntFunction)`                 | `java.util.stream.Nodes`                    |
| <0.1% |  1.44 MiB |       4 | `range(int, int)`                            | `java.util.stream.IntStream`                |
| <0.1% |  1.23 MiB |       4 | `allocateInstance(Class)`                    | `jdk.internal.misc.Unsafe`                  |
| <0.1% |  1.13 MiB |       3 | `<init>(int)`                                | `jdk.internal.org.objectweb.asm.ByteVector` |
| <0.1% | 1,005 KiB |       2 | `<init>(InputStream, int)`                   | `java.util.jar.Manifest$FastInputStream`    |

##### Ours

|     % |     Size | Samples | Function                             | Location                                                   |
| ----: | -------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|  3.1% | 1.16 GiB |      80 | `findNearestCentroid()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.8% |  710 MiB |      21 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.6% |  232 MiB |       9 | `lambda$merge$6(List, List)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.5% |  210 MiB |       1 | `lambda$run$0(int, List, int)`       | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.3% |  107 MiB |       9 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.2% | 92.6 MiB |       3 | `merge(Map, Map)`                    | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|  0.2% | 68.8 MiB |       7 | `createSubtask(int, int)`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.1% | 23.1 MiB |       8 | `add(double[], double[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.1% | 20.3 MiB |       3 | `lambda$collectClusters$0(Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% | 19.4 MiB |       1 | `vectorSum()`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% | 7.99 MiB |      13 | `lambda$generateData$4(int)`         | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |  393 KiB |       1 | `<clinit>()`                         | `scopt.Read$`                                              |
| <0.1% |  364 KiB |       1 | `computeClusterAverages()`           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

#### Lines

Lines with the largest contribution to each function's self size.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 34.7 GiB |   2,128 | `java.util.Arrays:3482` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Location                                                       |
| -----: | -------: | ------: | -------------------------------------------------------------- |
| 100.0% | 1.16 GiB |      80 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:223` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Location                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------- |
| 100.0% | 710 MiB |      21 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|      % |    Size | Samples | Location                 |
| -----: | ------: | ------: | ------------------------ |
| 100.0% | 296 MiB |      15 | `java.util.HashMap:1909` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Location                                        |
| -----: | ------: | ------: | ----------------------------------------------- |
| 100.0% | 232 MiB |       9 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Location                                       |
| -----: | ------: | ------: | ---------------------------------------------- |
| 100.0% | 210 MiB |       1 | `org.renaissance.jdk.concurrent.JavaKMeans:53` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|      % |    Size | Samples | Location                                  |
| -----: | ------: | ------: | ----------------------------------------- |
| 100.0% | 127 MiB |       3 | `java.lang.invoke.DirectMethodHandle:501` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Location                                                       |
| -----: | ------: | ------: | -------------------------------------------------------------- |
| 100.0% | 107 MiB |       9 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Location                                        |
| -----: | -------: | ------: | ----------------------------------------------- |
| 100.0% | 92.6 MiB |       3 | `org.renaissance.jdk.concurrent.JavaKMeans:110` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |     Size | Samples | Location                  |
| -----: | -------: | ------: | ------------------------- |
| 100.0% | 72.7 MiB |       9 | `java.util.ArrayList:239` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Location                                                      |
| -----: | -------: | ------: | ------------------------------------------------------------- |
| 100.0% | 68.8 MiB |       7 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `resize()` (`java.util.HashMap`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 53.9 MiB |       4 | `java.util.HashMap:710` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Location                                                      |
| -----: | -------: | ------: | ------------------------------------------------------------- |
| 100.0% | 23.1 MiB |       8 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `valueOf(double)` (`java.lang.Double`)

|      % |     Size | Samples | Location               |
| -----: | -------: | ------: | ---------------------- |
| 100.0% | 21.6 MiB |      35 | `java.lang.Double:773` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % |     Size | Samples | Location                            |
| -----: | -------: | ------: | ----------------------------------- |
| 100.0% | 20.9 MiB |       1 | `java.util.zip.ZipFile$Source:1733` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Location                                                       |
| -----: | -------: | ------: | -------------------------------------------------------------- |
| 100.0% | 20.3 MiB |       3 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

|      % |     Size | Samples | Location                          |
| -----: | -------: | ------: | --------------------------------- |
| 100.0% | 20.2 MiB |       4 | `java.util.HashMap$EntrySet:1106` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Location                                                      |
| -----: | -------: | ------: | ------------------------------------------------------------- |
| 100.0% | 19.4 MiB |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:400` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|      % |   Size | Samples | Location                |
| -----: | -----: | ------: | ----------------------- |
| 100.0% | 12 MiB |      30 | `java.util.Arrays:3541` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

|      % |     Size | Samples | Location                           |
| -----: | -------: | ------: | ---------------------------------- |
| 100.0% | 10.9 MiB |      15 | `java.util.stream.IntPipeline:174` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Location                                       |
| -----: | -------: | ------: | ---------------------------------------------- |
| 100.0% | 7.99 MiB |      13 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

|      % |    Size | Samples | Location                             |
| -----: | ------: | ------: | ------------------------------------ |
| 100.0% | 7.8 MiB |      13 | `java.util.stream.StreamSupport:138` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

|      % |    Size | Samples | Location                               |
| -----: | ------: | ------: | -------------------------------------- |
| 100.0% | 6.3 MiB |      16 | `java.util.zip.InflaterInputStream:89` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|      % |    Size | Samples | Location                             |
| -----: | ------: | ------: | ------------------------------------ |
| 100.0% | 3.4 MiB |       7 | `java.util.stream.IntPipeline$1:177` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 3.03 MiB |       3 | `java.util.Arrays:3513` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % |     Size | Samples | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 1.54 MiB |       5 | `java.util.Arrays:3863` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

|      % |     Size | Samples | Location                     |
| -----: | -------: | ------: | ---------------------------- |
| 100.0% | 1.54 MiB |       5 | `java.util.stream.Nodes:168` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|      % |     Size | Samples | Location                          |
| -----: | -------: | ------: | --------------------------------- |
| 100.0% | 1.44 MiB |       4 | `java.util.stream.IntStream:1083` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|      % |     Size | Samples | Location                                       |
| -----: | -------: | ------: | ---------------------------------------------- |
| 100.0% | 1.13 MiB |       3 | `jdk.internal.org.objectweb.asm.ByteVector:87` |

##### `<init>(InputStream, int)` (`java.util.jar.Manifest$FastInputStream`)

|      % |      Size | Samples | Location                                     |
| -----: | --------: | ------: | -------------------------------------------- |
| 100.0% | 1,005 KiB |       2 | `java.util.jar.Manifest$FastInputStream:421` |

##### `<clinit>()` (`scopt.Read$`)

|      % |    Size | Samples | Location         |
| -----: | ------: | ------: | ---------------- |
| 100.0% | 393 KiB |       1 | `scopt.Read$:25` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |    Size | Samples | Location                                                   |
| -----: | ------: | ------: | ---------------------------------------------------------- |
| 100.0% | 364 KiB |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:314` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Caller      | Location              |
| ----: | -------: | ------: | ----------- | --------------------- |
| 54.0% | 18.7 GiB |   1,048 | `toArray()` | `java.util.ArrayList` |
| 46.0% |   16 GiB |   1,080 | `grow(int)` | `java.util.ArrayList` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller              | Location                                                   |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 1.16 GiB |      80 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller      | Location                                               |
| -----: | ------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 710 MiB |      21 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|     % |    Size | Samples | Caller                                          | Location            |
| ----: | ------: | ------: | ----------------------------------------------- | ------------------- |
| 55.3% | 164 MiB |       9 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
| 44.7% | 132 MiB |       6 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Caller                  | Location                                                               |
| -----: | ------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% | 232 MiB |       9 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121f3c0` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |    Size | Samples | Caller   | Location                                                               |
| -----: | ------: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% | 210 MiB |       1 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121df70` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|     % |     Size | Samples | Caller                                               | Location                                             |
| ----: | -------: | ------: | ---------------------------------------------------- | ---------------------------------------------------- |
| 98.8% |  125 MiB |       1 | `newInvokeSpecial(Object, Object, int, Object, int)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801221000` |
|  1.2% | 1.47 MiB |       2 | `newInvokeSpecial(Object, int, int, Object)`         | `java.lang.invoke.LambdaForm$DMH.0x000000a801220000` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller              | Location                                                   |
| -----: | ------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 107 MiB |       9 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller                     | Location                                                   |
| -----: | -------: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% | 92.6 MiB |       3 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `grow(int)` (`java.util.ArrayList`)

|      % |     Size | Samples | Caller   | Location              |
| -----: | -------: | ------: | -------- | --------------------- |
| 100.0% | 72.7 MiB |       9 | `grow()` | `java.util.ArrayList` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Caller      | Location                                               |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 68.8 MiB |       7 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `resize()` (`java.util.HashMap`)

|     % |     Size | Samples | Caller                                          | Location            |
| ----: | -------: | ------: | ----------------------------------------------- | ------------------- |
| 94.5% | 50.9 MiB |       3 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |
|  5.5% | 2.94 MiB |       1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Caller                               | Location                                                  |
| -----: | -------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| 100.0% | 23.1 MiB |       8 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `valueOf(double)` (`java.lang.Double`)

|      % |     Size | Samples | Caller                                           | Location                                    |
| -----: | -------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| 100.0% | 21.6 MiB |      35 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % |     Size | Samples | Caller                                          | Location                       |
| -----: | -------: | ------: | ----------------------------------------------- | ------------------------------ |
| 100.0% | 20.9 MiB |       1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `lambda$collectClusters$0(Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller          | Location                                                                              |
| -----: | -------: | ------: | --------------- | ------------------------------------------------------------------------------------- |
| 100.0% | 20.3 MiB |       3 | `apply(Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask$$Lambda.0x000000a80121ece0` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

|      % |     Size | Samples | Caller                        | Location            |
| -----: | -------: | ------: | ----------------------------- | ------------------- |
| 100.0% | 20.2 MiB |       4 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % |     Size | Samples | Caller              | Location                                                  |
| -----: | -------: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% | 19.4 MiB |       1 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Caller                        | Location                          |
| ----: | -------: | ------: | ----------------------------- | --------------------------------- |
| 96.8% | 11.7 MiB |      29 | `getBytes()`                  | `jdk.internal.loader.Resource`    |
|  3.2% |  394 KiB |       1 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |

##### `mapToObj(IntFunction, int)` (`java.util.stream.IntPipeline`)

|      % |     Size | Samples | Caller                  | Location                       |
| -----: | -------: | ------: | ----------------------- | ------------------------------ |
| 100.0% | 10.9 MiB |      15 | `mapToObj(IntFunction)` | `java.util.stream.IntPipeline` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller       | Location                                                               |
| -----: | -------: | ------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% | 7.99 MiB |      13 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121d960` |

##### `intStream(Spliterator$OfInt, boolean)` (`java.util.stream.StreamSupport`)

|      % |    Size | Samples | Caller            | Location                     |
| -----: | ------: | ------: | ----------------- | ---------------------------- |
| 100.0% | 7.8 MiB |      13 | `range(int, int)` | `java.util.stream.IntStream` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

|      % |    Size | Samples | Caller                                                                                  | Location                                           |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| 100.0% | 6.3 MiB |      16 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

|      % |    Size | Samples | Caller           | Location                            |
| -----: | ------: | ------: | ---------------- | ----------------------------------- |
| 100.0% | 3.4 MiB |       7 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|      % |     Size | Samples | Caller                  | Location           |
| -----: | -------: | ------: | ----------------------- | ------------------ |
| 100.0% | 3.03 MiB |       3 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % |     Size | Samples | Caller                          | Location           |
| -----: | -------: | ------: | ------------------------------- | ------------------ |
| 100.0% | 1.54 MiB |       5 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `builder(long, IntFunction)` (`java.util.stream.Nodes`)

|      % |     Size | Samples | Caller                               | Location                             |
| -----: | -------: | ------: | ------------------------------------ | ------------------------------------ |
| 100.0% | 1.54 MiB |       5 | `makeNodeBuilder(long, IntFunction)` | `java.util.stream.ReferencePipeline` |

##### `range(int, int)` (`java.util.stream.IntStream`)

|      % |     Size | Samples | Caller                                           | Location                                    |
| -----: | -------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| 100.0% | 1.44 MiB |       4 | `lambda$generateData$5(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

|      % |     Size | Samples | Caller                     | Location                              |
| -----: | -------: | ------: | -------------------------- | ------------------------------------- |
| 100.0% | 1.23 MiB |       4 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|      % |     Size | Samples | Caller          | Location                                     |
| -----: | -------: | ------: | --------------- | -------------------------------------------- |
| 100.0% | 1.13 MiB |       3 | `toByteArray()` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `<init>(InputStream, int)` (`java.util.jar.Manifest$FastInputStream`)

|      % |      Size | Samples | Caller                | Location                                 |
| -----: | --------: | ------: | --------------------- | ---------------------------------------- |
| 100.0% | 1,005 KiB |       2 | `<init>(InputStream)` | `java.util.jar.Manifest$FastInputStream` |

##### `<clinit>()` (`scopt.Read$`)

|      % |    Size | Samples | Caller      | Location             |
| -----: | ------: | ------: | ----------- | -------------------- |
| 100.0% | 393 KiB |       1 | `head(Seq)` | `scopt.OptionParser` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % |    Size | Samples | Caller              | Location                                               |
| -----: | ------: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% | 364 KiB |       1 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

### Total size

Functions with the most bytes allocated within the function and its callees.

|     % |     Size | Samples | Function                                             | Location                                                               |
| ----: | -------: | ------: | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| 99.4% | 37.8 GiB |   2,305 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                    |
| 99.4% | 37.8 GiB |   2,305 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |
| 99.4% | 37.8 GiB |   2,305 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                    |
| 99.4% | 37.8 GiB |   2,305 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                    |
| 99.4% | 37.8 GiB |   2,305 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                            |
| 98.9% | 37.6 GiB |   2,304 | `compute()`                                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 98.9% | 37.6 GiB |   2,304 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                   |
| 91.4% | 34.7 GiB |   2,131 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                                     |
| 82.5% | 31.3 GiB |   1,880 | `merge(Map, Map)`                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 82.5% | 31.3 GiB |   1,880 | `combineResults(Map, Map)`                           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 82.5% | 31.3 GiB |   1,880 | `combineResults(Object, Object)`                     | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 81.7% | 31.1 GiB |   1,864 | `lambda$merge$6(List, List)`                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 81.7% | 31.1 GiB |   1,864 | `apply(Object, Object)`                              | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121f3c0` |
| 81.7% | 31.1 GiB |   1,864 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                                    |
| 81.7% | 31.1 GiB |   1,864 | `lambda$merge$7(Map, Object, List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 81.7% | 31.1 GiB |   1,864 | `accept(Object, Object)`                             | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30` |
| 81.7% | 31.1 GiB |   1,864 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                                    |
| 63.5% | 24.1 GiB |   1,554 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                                    |
| 63.5% | 24.1 GiB |   1,554 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                                    |
| 63.0% |   24 GiB |   1,531 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`                          |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Samples | Function                                             | Location                                            |
| ----: | -------: | ------: | ---------------------------------------------------- | --------------------------------------------------- |
| 99.4% | 37.8 GiB |   2,305 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| 99.4% | 37.8 GiB |   2,305 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 99.4% | 37.8 GiB |   2,305 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                 |
| 99.4% | 37.8 GiB |   2,305 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                 |
| 99.4% | 37.8 GiB |   2,305 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`         |
| 98.9% | 37.6 GiB |   2,304 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                |
| 91.4% | 34.7 GiB |   2,131 | `copyOf(Object[], int)`                              | `java.util.Arrays`                                  |
| 81.7% | 31.1 GiB |   1,864 | `merge(Object, Object, BiFunction)`                  | `java.util.HashMap`                                 |
| 81.7% | 31.1 GiB |   1,864 | `forEach(BiConsumer)`                                | `java.util.HashMap`                                 |
| 63.5% | 24.1 GiB |   1,554 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                 |
| 63.5% | 24.1 GiB |   1,554 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                 |
| 63.0% |   24 GiB |   1,531 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`       |
| 57.8% |   22 GiB |   1,368 | `addAll(Collection)`                                 | `java.util.ArrayList`                               |
| 49.3% | 18.7 GiB |   1,048 | `toArray()`                                          | `java.util.ArrayList`                               |
| 42.3% | 16.1 GiB |   1,092 | `grow(int)`                                          | `java.util.ArrayList`                               |
| 23.3% | 8.86 GiB |     487 | `<init>(Collection)`                                 | `java.util.ArrayList`                               |
| 22.4% | 8.53 GiB |     277 | `exec()`                                             | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| 22.0% | 8.36 GiB |     285 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                 |
| 10.4% | 3.97 GiB |     285 | `grow()`                                             | `java.util.ArrayList`                               |
| 10.4% | 3.97 GiB |     285 | `add(Object, Object[], int)`                         | `java.util.ArrayList`                               |

##### Ours

|     % |     Size | Samples | Function                                                                                                               | Location                                                               |
| ----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 98.9% | 37.6 GiB |   2,304 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| 82.5% | 31.3 GiB |   1,880 | `merge(Map, Map)`                                                                                                      | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 82.5% | 31.3 GiB |   1,880 | `combineResults(Map, Map)`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 82.5% | 31.3 GiB |   1,880 | `combineResults(Object, Object)`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 81.7% | 31.1 GiB |   1,864 | `lambda$merge$6(List, List)`                                                                                           | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 81.7% | 31.1 GiB |   1,864 | `apply(Object, Object)`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121f3c0` |
| 81.7% | 31.1 GiB |   1,864 | `lambda$merge$7(Map, Object, List)`                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 81.7% | 31.1 GiB |   1,864 | `accept(Object, Object)`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30` |
| 22.4% | 8.53 GiB |     277 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| 22.4% | 8.53 GiB |     277 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121df70` |
| 14.3% | 5.43 GiB |     385 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
| 11.2% | 4.27 GiB |     305 | `collectClusters(int[])`                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  3.1% | 1.16 GiB |      80 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  1.8% |  710 MiB |      21 | `createSubtask(int, int)`                                                                                              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  0.5% |  213 MiB |     176 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  0.5% |  213 MiB |     176 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  0.5% |  212 MiB |     174 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  0.5% |  212 MiB |     173 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  0.5% |  208 MiB |     164 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  0.5% |  194 MiB |     128 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Caller                                                    | Location                                      |
| -----: | -------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 100.0% | 37.8 GiB |   2,305 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  63.4% |   24 GiB |   1,531 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  22.1% | 8.36 GiB |     285 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|   9.0% | 3.39 GiB |     266 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |     Size | Samples | Caller                                   | Location                            |
| -----: | -------: | ------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 37.8 GiB |   2,305 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |     Size | Samples | Caller                              | Location                            |
| -----: | -------: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 37.8 GiB |   2,305 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |     Size | Samples | Caller  | Location                                    |
| -----: | -------: | ------: | ------- | ------------------------------------------- |
| 100.0% | 37.8 GiB |   2,305 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % |     Size | Samples | Caller   | Location                             |
| -----: | -------: | ------: | -------- | ------------------------------------ |
| 100.0% | 37.6 GiB |   2,304 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |     Size | Samples | Caller     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 37.6 GiB |   2,304 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Caller      | Location              |
| ----: | -------: | ------: | ----------- | --------------------- |
| 53.9% | 18.7 GiB |   1,048 | `toArray()` | `java.util.ArrayList` |
| 46.1% |   16 GiB |   1,083 | `grow(int)` | `java.util.ArrayList` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller                     | Location                                                   |
| -----: | -------: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% | 31.3 GiB |   1,880 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller                           | Location                                                   |
| -----: | -------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 100.0% | 31.3 GiB |   1,880 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller      | Location                                               |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 31.3 GiB |   1,880 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller                  | Location                                                               |
| -----: | -------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% | 31.1 GiB |   1,864 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121f3c0` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121f3c0`)

|      % |     Size | Samples | Caller                              | Location            |
| -----: | -------: | ------: | ----------------------------------- | ------------------- |
| 100.0% | 31.1 GiB |   1,864 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % |     Size | Samples | Caller                              | Location                                    |
| -----: | -------: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 31.1 GiB |   1,864 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller                   | Location                                                               |
| -----: | -------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% | 31.1 GiB |   1,864 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30`)

|      % |     Size | Samples | Caller                | Location            |
| -----: | -------: | ------: | --------------------- | ------------------- |
| 100.0% | 31.1 GiB |   1,864 | `forEach(BiConsumer)` | `java.util.HashMap` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % |     Size | Samples | Caller            | Location                                    |
| -----: | -------: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 31.1 GiB |   1,864 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Caller   | Location                            |
| -----: | -------: | ------: | -------- | ----------------------------------- |
| 100.0% | 24.1 GiB |   1,554 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Caller      | Location                                               |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 24.1 GiB |   1,554 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |   Size | Samples | Caller                 | Location                            |
| -----: | -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% | 24 GiB |   1,531 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|      % |   Size | Samples | Caller                       | Location                                    |
| -----: | -----: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% | 22 GiB |   1,368 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `toArray()` (`java.util.ArrayList`)

|     % |     Size | Samples | Caller               | Location              |
| ----: | -------: | ------: | -------------------- | --------------------- |
| 52.7% | 9.88 GiB |     561 | `addAll(Collection)` | `java.util.ArrayList` |
| 47.3% | 8.86 GiB |     487 | `<init>(Collection)` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

|     % |     Size | Samples | Caller               | Location              |
| ----: | -------: | ------: | -------------------- | --------------------- |
| 75.3% | 12.1 GiB |     807 | `addAll(Collection)` | `java.util.ArrayList` |
| 24.7% | 3.97 GiB |     285 | `grow()`             | `java.util.ArrayList` |

##### `<init>(Collection)` (`java.util.ArrayList`)

|      % |     Size | Samples | Caller                       | Location                                    |
| -----: | -------: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% | 8.86 GiB |     487 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % |     Size | Samples | Caller     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 8.53 GiB |     277 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Caller   | Location                                                               |
| -----: | -------: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% | 8.53 GiB |     277 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121df70` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121df70`)

|      % |     Size | Samples | Caller   | Location                                            |
| -----: | -------: | ------: | -------- | --------------------------------------------------- |
| 100.0% | 8.53 GiB |     277 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|     % |     Size | Samples | Caller                         | Location                                               |
| ----: | -------: | ------: | ------------------------------ | ------------------------------------------------------ |
| 99.6% | 8.33 GiB |     276 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
|  0.4% | 36.4 MiB |      10 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller              | Location                                                   |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 5.43 GiB |     385 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 100.0% | 5.43 GiB |     385 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller              | Location                                                   |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 4.27 GiB |     305 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `grow()` (`java.util.ArrayList`)

|      % |     Size | Samples | Caller                       | Location              |
| -----: | -------: | ------: | ---------------------------- | --------------------- |
| 100.0% | 3.97 GiB |     285 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % |     Size | Samples | Caller        | Location              |
| -----: | -------: | ------: | ------------- | --------------------- |
| 100.0% | 3.97 GiB |     285 | `add(Object)` | `java.util.ArrayList` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Caller              | Location                                                   |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% | 1.16 GiB |      80 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |    Size | Samples | Caller      | Location                                               |
| -----: | ------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 710 MiB |      21 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % |    Size | Samples | Caller           | Location                        |
| -----: | ------: | ------: | ---------------- | ------------------------------- |
| 100.0% | 213 MiB |     176 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % |    Size | Samples | Caller                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 212 MiB |     174 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |    Size | Samples | Caller                         | Location                                             |
| -----: | ------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 212 MiB |     173 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801001c00` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |    Size | Samples | Caller           | Location                                   |
| -----: | ------: | ------: | ---------------- | ------------------------------------------ |
| 100.0% | 208 MiB |     164 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |    Size | Samples | Caller              | Location                                                               |
| -----: | ------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 194 MiB |     128 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80119c3b8` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|     % |     Size | Samples | Callee   | Location                                            |
| ----: | -------: | ------: | -------- | --------------------------------------------------- |
| 99.5% | 37.6 GiB |   2,304 | `exec()` | `java.util.concurrent.RecursiveTask`                |
| 22.6% | 8.53 GiB |     277 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |     Size | Samples | Callee     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 37.8 GiB |   2,305 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % |     Size | Samples | Callee                                               | Location                                      |
| -----: | -------: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 37.8 GiB |   2,305 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |     Size | Samples | Callee                                   | Location                            |
| -----: | -------: | ------: | ---------------------------------------- | ----------------------------------- |
| 100.0% | 37.8 GiB |   2,305 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % |     Size | Samples | Callee                              | Location                            |
| -----: | -------: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 37.8 GiB |   2,305 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % |     Size | Samples | Callee                           | Location                                                   |
| ----: | -------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 83.4% | 31.3 GiB |   1,880 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 64.2% | 24.1 GiB |   1,554 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 14.5% | 5.43 GiB |     385 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.8% |  710 MiB |      21 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.2% | 68.8 MiB |       7 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |     Size | Samples | Callee      | Location                                               |
| -----: | -------: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% | 37.6 GiB |   2,304 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % |     Size | Samples | Callee                         | Location           |
| ----: | -------: | ------: | ------------------------------ | ------------------ |
| <0.1% | 3.03 MiB |       3 | `copyOf(Object[], int, Class)` | `java.util.Arrays` |

##### `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % |     Size | Samples | Callee                | Location            |
| ----: | -------: | ------: | --------------------- | ------------------- |
| 99.1% | 31.1 GiB |   1,864 | `forEach(BiConsumer)` | `java.util.HashMap` |
|  0.6% |  186 MiB |      13 | `<init>(Map)`         | `java.util.HashMap` |

##### `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Callee            | Location                                    |
| -----: | -------: | ------: | ----------------- | ------------------------------------------- |
| 100.0% | 31.3 GiB |   1,880 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Callee                     | Location                                                   |
| -----: | -------: | ------: | -------------------------- | ---------------------------------------------------------- |
| 100.0% | 31.3 GiB |   1,880 | `combineResults(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % |     Size | Samples | Callee               | Location              |
| ----: | -------: | ------: | -------------------- | --------------------- |
| 70.8% |   22 GiB |   1,368 | `addAll(Collection)` | `java.util.ArrayList` |
| 28.5% | 8.86 GiB |     487 | `<init>(Collection)` | `java.util.ArrayList` |

##### `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121f3c0`)

|      % |     Size | Samples | Callee                       | Location                                    |
| -----: | -------: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% | 31.1 GiB |   1,864 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % |     Size | Samples | Callee                  | Location                                                               |
| -----: | -------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% | 31.1 GiB |   1,864 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121f3c0` |

##### `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |     Size | Samples | Callee                              | Location            |
| -----: | -------: | ------: | ----------------------------------- | ------------------- |
| 100.0% | 31.1 GiB |   1,864 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30`)

|      % |     Size | Samples | Callee                              | Location                                    |
| -----: | -------: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% | 31.1 GiB |   1,864 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % |     Size | Samples | Callee                   | Location                                                               |
| -----: | -------: | ------: | ------------------------ | ---------------------------------------------------------------------- |
| 100.0% | 31.1 GiB |   1,864 | `accept(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % |     Size | Samples | Callee                                                    | Location                                      |
| ----: | -------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 99.3% |   24 GiB |   1,531 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 14.1% | 3.39 GiB |     266 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Callee                 | Location                            |
| -----: | -------: | ------: | ---------------------- | ----------------------------------- |
| 100.0% | 24.1 GiB |   1,554 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % |   Size | Samples | Callee     | Location                            |
| -----: | -----: | ------: | ---------- | ----------------------------------- |
| 100.0% | 24 GiB |   1,531 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|     % |     Size | Samples | Callee      | Location              |
| ----: | -------: | ------: | ----------- | --------------------- |
| 55.0% | 12.1 GiB |     807 | `grow(int)` | `java.util.ArrayList` |
| 45.0% | 9.88 GiB |     561 | `toArray()` | `java.util.ArrayList` |

##### `toArray()` (`java.util.ArrayList`)

|      % |     Size | Samples | Callee                  | Location           |
| -----: | -------: | ------: | ----------------------- | ------------------ |
| 100.0% | 18.7 GiB |   1,048 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `grow(int)` (`java.util.ArrayList`)

|     % |   Size | Samples | Callee                  | Location           |
| ----: | -----: | ------: | ----------------------- | ------------------ |
| 99.6% | 16 GiB |   1,083 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `<init>(Collection)` (`java.util.ArrayList`)

|      % |     Size | Samples | Callee      | Location              |
| -----: | -------: | ------: | ----------- | --------------------- |
| 100.0% | 8.86 GiB |     487 | `toArray()` | `java.util.ArrayList` |

##### `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)

|      % |     Size | Samples | Callee   | Location                                                               |
| -----: | -------: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% | 8.53 GiB |     277 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121df70` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % |     Size | Samples | Callee     | Location                            |
| ----: | -------: | ------: | ---------- | ----------------------------------- |
| 97.6% | 8.33 GiB |     276 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121df70`)

|      % |     Size | Samples | Callee                         | Location                                    |
| -----: | -------: | ------: | ------------------------------ | ------------------------------------------- |
| 100.0% | 8.53 GiB |     277 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % |     Size | Samples | Callee     | Location                            |
| -----: | -------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 8.36 GiB |     285 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % |     Size | Samples | Callee                   | Location                                                   |
| -----: | -------: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% | 5.43 GiB |     385 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  78.6% | 4.27 GiB |     305 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  21.4% | 1.16 GiB |      80 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % |     Size | Samples | Callee                              | Location              |
| ----: | -------: | ------: | ----------------------------------- | --------------------- |
| 92.9% | 3.97 GiB |     284 | `add(Object)`                       | `java.util.ArrayList` |
|  4.6% |  203 MiB |      12 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`   |

##### `grow()` (`java.util.ArrayList`)

|      % |     Size | Samples | Callee      | Location              |
| -----: | -------: | ------: | ----------- | --------------------- |
| 100.0% | 3.97 GiB |     285 | `grow(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % |     Size | Samples | Callee   | Location              |
| -----: | -------: | ------: | -------- | --------------------- |
| 100.0% | 3.97 GiB |     285 | `grow()` | `java.util.ArrayList` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|     % |    Size | Samples | Callee                                                      | Location                            |
| ----: | ------: | ------: | ----------------------------------------------------------- | ----------------------------------- |
| 99.6% | 212 MiB |     174 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`     |
|  0.2% | 386 KiB |       1 | `createScratchRoot(Path, boolean)`                          | `org.renaissance.core.Launcher`     |
|  0.2% | 386 KiB |       1 | `create(Path, URI)`                                         | `org.renaissance.core.ModuleLoader` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % |    Size | Samples | Callee                                 | Location                        |
| -----: | ------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 213 MiB |     176 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|     % |    Size | Samples | Callee                               | Location                            |
| ----: | ------: | ------: | ------------------------------------ | ----------------------------------- |
| 99.8% | 212 MiB |     173 | `invoke(Object, Object[])`           | `java.lang.reflect.Method`          |
|  0.2% | 386 KiB |       1 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|     % |     Size | Samples | Callee              | Location                                    |
| ----: | -------: | ------: | ------------------- | ------------------------------------------- |
| 98.4% |  208 MiB |     164 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
|  1.6% | 3.45 MiB |       9 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|     % |     Size | Samples | Callee                                                                        | Location                                    |
| ----: | -------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 93.3% |  194 MiB |     128 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|  1.7% | 3.49 MiB |       9 | `<clinit>()`                                                                  | `scala.Predef$`                             |
|  1.2% | 2.51 MiB |       7 | `parse(String[])`                                                             | `org.renaissance.harness.ConfigParser`      |
|  1.1% | 2.29 MiB |       5 | `<init>(Map)`                                                                 | `org.renaissance.harness.ConfigParser`      |
|  0.8% | 1.73 MiB |       5 | `apply(Seq)`                                                                  | `scala.collection.immutable.Map$`           |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|     % |     Size | Samples | Callee                                                                                       | Location                                  |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 98.9% |  192 MiB |     122 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|  1.1% | 2.04 MiB |       6 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

## Hottest call stacks

Call stacks with the most bytes allocated in their leaf frame.

Common call stack: `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|    % |     Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.6% | 3.26 GiB |     230 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 8.2% | 3.13 GiB |     195 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 6.0% |  2.3 GiB |     167 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 5.9% | 2.23 GiB |      51 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 5.5% | 2.09 GiB |     116 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 4.6% | 1.76 GiB |      96 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3.2% | 1.22 GiB |      44 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 3.0% | 1.14 GiB |      68 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3.0% | 1.13 GiB |      56 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                   |
| 2.6% |  994 MiB |      17 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.3% |  914 MiB |      78 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2.3% |  904 MiB |      60 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.8% |  685 MiB |      46 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) |
| 1.6% |  639 MiB |      35 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                           |
| 1.6% |  635 MiB |      17 | `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.6% |  622 MiB |      48 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.6% |  613 MiB |      35 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.5% |  597 MiB |      36 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.5% |  577 MiB |      34 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `<init>(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.3% |  518 MiB |      10 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121f3c0`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121ef30`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

# Retained heap profile

Retained 2.56 MiB over 14 objects (187 KiB per object).

| Category         |      % |     Size | Objects |
| ---------------- | -----: | -------: | ------: |
| Standard library | 100.0% | 2.56 MiB |      12 |
| Ours             |  <0.1% |     64 B |       2 |

## Call tree

Call paths to the hottest functions.

```
└── 2.56 MiB (100.0%) [[via 9 frames]] main(String[])  org.renaissance.harness.RenaissanceSuite
    ├── 2.31 MiB (90.3%) [[via 6 frames]] runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)  org.renaissance.harness.RenaissanceSuite$
    │   ├── 2.06 MiB (80.5%) [[via 17 frames]] copyOf(Object[], int)  java.util.Arrays
    │   └── 255 KiB (9.7%) [[via 25 frames]] initCEN(int, ZipCoder)  java.util.zip.ZipFile$Source
    └── 255 KiB (9.7%) [[via 19 frames]] initCEN(int, ZipCoder)  (19.5% self in 2 call stacks)  java.util.zip.ZipFile$Source
```

## Hottest functions

### Self size

Functions with the most bytes retained within the function body, excluding callees.

|     % |     Size | Objects | Function                                       | Location                                    |
| ----: | -------: | ------: | ---------------------------------------------- | ------------------------------------------- |
| 80.5% | 2.06 MiB |       1 | `copyOf(Object[], int)`                        | `java.util.Arrays`                          |
| 19.5% |  510 KiB |       2 | `initCEN(int, ZipCoder)`                       | `java.util.zip.ZipFile$Source`              |
| <0.1% |    144 B |       6 | `valueOf(double)`                              | `java.lang.Double`                          |
| <0.1% |     64 B |       1 | `newLinkedHashMap(int)`                        | `java.util.LinkedHashMap`                   |
| <0.1% |     56 B |       1 | `copyOfRangeByte(byte[], int, int)`            | `java.util.Arrays`                          |
| <0.1% |     40 B |       1 | `lambda$generateData$4(int)`                   | `org.renaissance.jdk.concurrent.JavaKMeans` |
| <0.1% |     24 B |       1 | `<clinit>()`                                   | `scopt.Read$`                               |
| <0.1% |     24 B |       1 | `loadConvert(char[], int, int, StringBuilder)` | `java.util.Properties`                      |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|     % |     Size | Objects | Function                                       | Location                       |
| ----: | -------: | ------: | ---------------------------------------------- | ------------------------------ |
| 80.5% | 2.06 MiB |       1 | `copyOf(Object[], int)`                        | `java.util.Arrays`             |
| 19.5% |  510 KiB |       2 | `initCEN(int, ZipCoder)`                       | `java.util.zip.ZipFile$Source` |
| <0.1% |    144 B |       6 | `valueOf(double)`                              | `java.lang.Double`             |
| <0.1% |     64 B |       1 | `newLinkedHashMap(int)`                        | `java.util.LinkedHashMap`      |
| <0.1% |     56 B |       1 | `copyOfRangeByte(byte[], int, int)`            | `java.util.Arrays`             |
| <0.1% |     24 B |       1 | `loadConvert(char[], int, int, StringBuilder)` | `java.util.Properties`         |

#### Lines

Lines with the largest contribution to each function's self size.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |     Size | Objects | Location                |
| -----: | -------: | ------: | ----------------------- |
| 100.0% | 2.06 MiB |       1 | `java.util.Arrays:3482` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % |    Size | Objects | Location                            |
| -----: | ------: | ------: | ----------------------------------- |
| 100.0% | 510 KiB |       2 | `java.util.zip.ZipFile$Source:1733` |

##### `valueOf(double)` (`java.lang.Double`)

|      % |  Size | Objects | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 144 B |       6 | `java.lang.Double:773` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

|      % | Size | Objects | Location                       |
| -----: | ---: | ------: | ------------------------------ |
| 100.0% | 64 B |       1 | `java.util.LinkedHashMap:1078` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % | Size | Objects | Location                |
| -----: | ---: | ------: | ----------------------- |
| 100.0% | 56 B |       1 | `java.util.Arrays:3863` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Size | Objects | Location                                       |
| -----: | ---: | ------: | ---------------------------------------------- |
| 100.0% | 40 B |       1 | `org.renaissance.jdk.concurrent.JavaKMeans:87` |

##### `<clinit>()` (`scopt.Read$`)

|      % | Size | Objects | Location         |
| -----: | ---: | ------: | ---------------- |
| 100.0% | 24 B |       1 | `scopt.Read$:25` |

##### `loadConvert(char[], int, int, StringBuilder)` (`java.util.Properties`)

|      % | Size | Objects | Location                   |
| -----: | ---: | ------: | -------------------------- |
| 100.0% | 24 B |       1 | `java.util.Properties:637` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % |     Size | Objects | Caller      | Location              |
| -----: | -------: | ------: | ----------- | --------------------- |
| 100.0% | 2.06 MiB |       1 | `grow(int)` | `java.util.ArrayList` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|      % |    Size | Objects | Caller                                          | Location                       |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------------------ |
| 100.0% | 510 KiB |       2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `valueOf(double)` (`java.lang.Double`)

|      % |  Size | Objects | Caller                                           | Location                                    |
| -----: | ----: | ------: | ------------------------------------------------ | ------------------------------------------- |
| 100.0% | 144 B |       6 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `newLinkedHashMap(int)` (`java.util.LinkedHashMap`)

|      % | Size | Objects | Caller        | Location                   |
| -----: | ---: | ------: | ------------- | -------------------------- |
| 100.0% | 64 B |       1 | `<init>(int)` | `java.util.jar.Attributes` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|      % | Size | Objects | Caller                          | Location           |
| -----: | ---: | ------: | ------------------------------- | ------------------ |
| 100.0% | 56 B |       1 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Size | Objects | Caller       | Location                                                               |
| -----: | ---: | ------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% | 40 B |       1 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121d960` |

##### `<clinit>()` (`scopt.Read$`)

|      % | Size | Objects | Caller      | Location             |
| -----: | ---: | ------: | ----------- | -------------------- |
| 100.0% | 24 B |       1 | `head(Seq)` | `scopt.OptionParser` |

##### `loadConvert(char[], int, int, StringBuilder)` (`java.util.Properties`)

|      % | Size | Objects | Caller                         | Location               |
| -----: | ---: | ------: | ------------------------------ | ---------------------- |
| 100.0% | 24 B |       1 | `load0(Properties$LineReader)` | `java.util.Properties` |

### Total size

Functions with the most bytes retained within the function and its callees.

|      % |     Size | Objects | Function                                                                                                               | Location                                                               |
| -----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% | 2.56 MiB |      14 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
| 100.0% | 2.56 MiB |      14 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x000000a801001c00`                   |
| 100.0% | 2.56 MiB |      14 | `invoke(Object, Object, Object)`                                                                                       | `java.lang.invoke.LambdaForm$MH.0x000000a801082400`                    |
| 100.0% | 2.56 MiB |      14 | `invokeExact_MT(Object, Object, Object, Object)`                                                                       | `java.lang.invoke.Invokers$Holder`                                     |
| 100.0% | 2.56 MiB |      14 | `invokeImpl(Object, Object[])`                                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |
| 100.0% | 2.56 MiB |      14 | `invoke(Object, Object[])`                                                                                             | `jdk.internal.reflect.DirectMethodHandleAccessor`                      |
| 100.0% | 2.56 MiB |      14 | `invoke(Object, Object[])`                                                                                             | `java.lang.reflect.Method`                                             |
| 100.0% | 2.56 MiB |      14 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
| 100.0% | 2.56 MiB |      14 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
| 100.0% | 2.56 MiB |      14 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  90.3% | 2.31 MiB |      12 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  90.3% | 2.31 MiB |      10 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  90.3% | 2.31 MiB |      10 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80119c3b8` |
|  90.3% | 2.31 MiB |      10 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
|  90.3% | 2.31 MiB |      10 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  90.3% | 2.31 MiB |      10 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  80.5% | 2.06 MiB |       8 | `accept(int)`                                                                                                          | `java.util.stream.IntPipeline$1$1`                                     |
|  80.5% | 2.06 MiB |       8 | `forEachRemaining(IntConsumer)`                                                                                        | `java.util.stream.Streams$RangeIntSpliterator`                         |
|  80.5% | 2.06 MiB |       8 | `forEachRemaining(Consumer)`                                                                                           | `java.util.Spliterator$OfInt`                                          |
|  80.5% | 2.06 MiB |       8 | `copyInto(Sink, Spliterator)`                                                                                          | `java.util.stream.AbstractPipeline`                                    |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|      % |     Size | Objects | Function                                          | Location                                             |
| -----: | -------: | ------: | ------------------------------------------------- | ---------------------------------------------------- |
| 100.0% | 2.56 MiB |      14 | `invokeStatic(Object, Object)`                    | `java.lang.invoke.LambdaForm$DMH.0x000000a801001c00` |
| 100.0% | 2.56 MiB |      14 | `invoke(Object, Object, Object)`                  | `java.lang.invoke.LambdaForm$MH.0x000000a801082400`  |
| 100.0% | 2.56 MiB |      14 | `invokeExact_MT(Object, Object, Object, Object)`  | `java.lang.invoke.Invokers$Holder`                   |
| 100.0% | 2.56 MiB |      14 | `invokeImpl(Object, Object[])`                    | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 100.0% | 2.56 MiB |      14 | `invoke(Object, Object[])`                        | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| 100.0% | 2.56 MiB |      14 | `invoke(Object, Object[])`                        | `java.lang.reflect.Method`                           |
|  90.3% | 2.31 MiB |      10 | `apply(Object)`                                   | `scala.runtime.function.JProcedure1`                 |
|  90.3% | 2.31 MiB |      10 | `foreach(Function1)`                              | `scala.collection.immutable.List`                    |
|  80.5% | 2.06 MiB |       8 | `accept(int)`                                     | `java.util.stream.IntPipeline$1$1`                   |
|  80.5% | 2.06 MiB |       8 | `forEachRemaining(IntConsumer)`                   | `java.util.stream.Streams$RangeIntSpliterator`       |
|  80.5% | 2.06 MiB |       8 | `forEachRemaining(Consumer)`                      | `java.util.Spliterator$OfInt`                        |
|  80.5% | 2.06 MiB |       8 | `copyInto(Sink, Spliterator)`                     | `java.util.stream.AbstractPipeline`                  |
|  80.5% | 2.06 MiB |       8 | `wrapAndCopyInto(Sink, Spliterator)`              | `java.util.stream.AbstractPipeline`                  |
|  80.5% | 2.06 MiB |       8 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp`                |
|  80.5% | 2.06 MiB |       8 | `evaluate(TerminalOp)`                            | `java.util.stream.AbstractPipeline`                  |
|  80.5% | 2.06 MiB |       8 | `collect(Collector)`                              | `java.util.stream.ReferencePipeline`                 |
|  80.5% | 2.06 MiB |       1 | `copyOf(Object[], int)`                           | `java.util.Arrays`                                   |
|  80.5% | 2.06 MiB |       1 | `grow(int)`                                       | `java.util.ArrayList`                                |
|  80.5% | 2.06 MiB |       1 | `grow()`                                          | `java.util.ArrayList`                                |
|  80.5% | 2.06 MiB |       1 | `add(Object, Object[], int)`                      | `java.util.ArrayList`                                |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |     Size | Objects | Caller                         | Location                                             |
| -----: | -------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 2.56 MiB |      14 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801001c00` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a801001c00`)

|      % |     Size | Objects | Caller                           | Location                                            |
| -----: | -------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 2.56 MiB |      14 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801082400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801082400`)

|      % |     Size | Objects | Caller                                           | Location                           |
| -----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 2.56 MiB |      14 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |     Size | Objects | Caller                         | Location                                          |
| -----: | -------: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 2.56 MiB |      14 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |     Size | Objects | Caller                     | Location                                          |
| -----: | -------: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 2.56 MiB |      14 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |     Size | Objects | Caller                     | Location                   |
| -----: | -------: | ------: | -------------------------- | -------------------------- |
| 100.0% | 2.56 MiB |      14 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |     Size | Objects | Caller                                                      | Location                        |
| -----: | -------: | ------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% | 2.56 MiB |      14 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Objects | Caller                                 | Location                        |
| -----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 2.56 MiB |      14 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Objects | Caller           | Location                        |
| -----: | -------: | ------: | ---------------- | ------------------------------- |
| 100.0% | 2.56 MiB |      14 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |     Size | Objects | Caller           | Location                                   |
| -----: | -------: | ------: | ---------------- | ------------------------------------------ |
| 100.0% | 2.31 MiB |      12 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |     Size | Objects | Caller              | Location                                                               |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 2.31 MiB |      10 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80119c3b8` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80119c3b8`)

|      % |     Size | Objects | Caller          | Location                             |
| -----: | -------: | ------: | --------------- | ------------------------------------ |
| 100.0% | 2.31 MiB |      10 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|      % |     Size | Objects | Caller               | Location                             |
| -----: | -------: | ------: | -------------------- | ------------------------------------ |
| 100.0% | 2.31 MiB |      10 | `apply(Object)`      | `scala.runtime.function.JProcedure1` |
| 100.0% | 2.31 MiB |      10 | `foreach(Function1)` | `scala.collection.immutable.List`    |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |     Size | Objects | Caller                                                                        | Location                                    |
| -----: | -------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.31 MiB |      10 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |     Size | Objects | Caller           | Location                                    |
| -----: | -------: | ------: | ---------------- | ------------------------------------------- |
| 100.0% | 2.31 MiB |      10 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

|      % |     Size | Objects | Caller                          | Location                                       |
| -----: | -------: | ------: | ------------------------------- | ---------------------------------------------- |
| 100.0% | 2.06 MiB |       8 | `forEachRemaining(IntConsumer)` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

|      % |     Size | Objects | Caller                       | Location                      |
| -----: | -------: | ------: | ---------------------------- | ----------------------------- |
| 100.0% | 2.06 MiB |       8 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

|      % |     Size | Objects | Caller                        | Location                            |
| -----: | -------: | ------: | ----------------------------- | ----------------------------------- |
| 100.0% | 2.06 MiB |       8 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Objects | Caller                               | Location                            |
| -----: | -------: | ------: | ------------------------------------ | ----------------------------------- |
| 100.0% | 2.06 MiB |       8 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Objects | Caller                                            | Location                              |
| -----: | -------: | ------: | ------------------------------------------------- | ------------------------------------- |
| 100.0% | 2.06 MiB |       8 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |
|  <0.1% |    144 B |       6 | `evaluate(Spliterator, boolean, IntFunction)`     | `java.util.stream.AbstractPipeline`   |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

|      % |     Size | Objects | Caller                 | Location                            |
| -----: | -------: | ------: | ---------------------- | ----------------------------------- |
| 100.0% | 2.06 MiB |       8 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Objects | Caller               | Location                             |
| -----: | -------: | ------: | -------------------- | ------------------------------------ |
| 100.0% | 2.06 MiB |       8 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

|      % |     Size | Objects | Caller                        | Location                                    |
| -----: | -------: | ------: | ----------------------------- | ------------------------------------------- |
| 100.0% | 2.06 MiB |       8 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

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
| 90.3% | 2.31 MiB |      12 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
|  9.7% |  255 KiB |       2 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a801001c00`)

|      % |     Size | Objects | Callee           | Location                                   |
| -----: | -------: | ------: | ---------------- | ------------------------------------------ |
| 100.0% | 2.56 MiB |      14 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801082400`)

|      % |     Size | Objects | Callee                         | Location                                             |
| -----: | -------: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 2.56 MiB |      14 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |     Size | Objects | Callee                           | Location                                            |
| -----: | -------: | ------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 2.56 MiB |      14 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801082400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |     Size | Objects | Callee                                           | Location                           |
| -----: | -------: | ------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 2.56 MiB |      14 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |     Size | Objects | Callee                         | Location                                          |
| -----: | -------: | ------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 2.56 MiB |      14 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |     Size | Objects | Callee                     | Location                                          |
| -----: | -------: | ------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 2.56 MiB |      14 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Objects | Callee                     | Location                   |
| -----: | -------: | ------: | -------------------------- | -------------------------- |
| 100.0% | 2.56 MiB |      14 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Objects | Callee                                                      | Location                        |
| -----: | -------: | ------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% | 2.56 MiB |      14 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % |     Size | Objects | Callee                                 | Location                        |
| -----: | -------: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% | 2.56 MiB |      14 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |     Size | Objects | Callee                                                                        | Location                                    |
| -----: | -------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.31 MiB |      10 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|  <0.1% |     24 B |       1 | `<init>(Map)`                                                                 | `org.renaissance.harness.ConfigParser`      |
|  <0.1% |     24 B |       1 | `apply(Function0)`                                                            | `scala.util.Try$`                           |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|     % |     Size | Objects | Callee                                                                                       | Location                                  |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 89.2% | 2.06 MiB |       8 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| 10.8% |  255 KiB |       2 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80119c3b8`)

|      % |     Size | Objects | Callee                                                                                                                 | Location                                    |
| -----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.31 MiB |      10 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|      % |     Size | Objects | Callee              | Location                                                               |
| -----: | -------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 2.31 MiB |      10 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80119c3b8` |
| 100.0% | 2.31 MiB |      10 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |     Size | Objects | Callee          | Location                             |
| -----: | -------: | ------: | --------------- | ------------------------------------ |
| 100.0% | 2.31 MiB |      10 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |     Size | Objects | Callee               | Location                          |
| -----: | -------: | ------: | -------------------- | --------------------------------- |
| 100.0% | 2.31 MiB |      10 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `accept(int)` (`java.util.stream.IntPipeline$1$1`)

|      % |     Size | Objects | Callee           | Location                                                               |
| -----: | -------: | ------: | ---------------- | ---------------------------------------------------------------------- |
| 100.0% | 2.06 MiB |       1 | `accept(Object)` | `java.util.stream.ReduceOps$3ReducingSink`                             |
|  <0.1% |    184 B |       7 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121d4f0` |
|  <0.1% |    144 B |       6 | `apply(int)`     | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121d728` |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

|      % |     Size | Objects | Callee        | Location                           |
| -----: | -------: | ------: | ------------- | ---------------------------------- |
| 100.0% | 2.06 MiB |       8 | `accept(int)` | `java.util.stream.IntPipeline$1$1` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`)

|      % |     Size | Objects | Callee                          | Location                                       |
| -----: | -------: | ------: | ------------------------------- | ---------------------------------------------- |
| 100.0% | 2.06 MiB |       8 | `forEachRemaining(IntConsumer)` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Objects | Callee                       | Location                      |
| -----: | -------: | ------: | ---------------------------- | ----------------------------- |
| 100.0% | 2.06 MiB |       8 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt` |

##### `wrapAndCopyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Objects | Callee                        | Location                            |
| -----: | -------: | ------: | ----------------------------- | ----------------------------------- |
| 100.0% | 2.06 MiB |       8 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

|      % |     Size | Objects | Callee                               | Location                            |
| -----: | -------: | ------: | ------------------------------------ | ----------------------------------- |
| 100.0% | 2.06 MiB |       8 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

|      % |     Size | Objects | Callee                                            | Location                              |
| -----: | -------: | ------: | ------------------------------------------------- | ------------------------------------- |
| 100.0% | 2.06 MiB |       8 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

|      % |     Size | Objects | Callee                 | Location                            |
| -----: | -------: | ------: | ---------------------- | ----------------------------------- |
| 100.0% | 2.06 MiB |       8 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

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

Common call stack: `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a801001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | -------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 80.5% | 2.06 MiB |       1 | `copyOf(Object[], int)` (`java.util.Arrays`) ← `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `accept(Object, Object)` (`java.util.stream.Collectors$$Lambda.0x000000a8010c40c8`) ← `accept(Object)` (`java.util.stream.ReduceOps$3ReducingSink`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  9.7% |  255 KiB |       1 | `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`) ← `<init>(ZipFile$Source$Key, boolean, ZipCoder)` ← `get(File, boolean, ZipCoder)` ← `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`) ← `<init>(File, int, Charset)` (`java.util.zip.ZipFile`) ← `<init>(File, int)` ← `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`) ← `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` ← `run()` (`jdk.internal.loader.URLClassPath$3`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `getLoader(URL)` (`jdk.internal.loader.URLClassPath`) ← `getLoader(int)` ← `getResource(String, boolean)` ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  9.7% |  255 KiB |       1 | `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`) ← `<init>(ZipFile$Source$Key, boolean, ZipCoder)` ← `get(File, boolean, ZipCoder)` ← `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`) ← `<init>(File, int, Charset)` (`java.util.zip.ZipFile`) ← `<init>(File, int)` ← `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`) ← `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`) ← `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` ← `run()` (`jdk.internal.loader.URLClassPath$3`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `getLoader(URL)` (`jdk.internal.loader.URLClassPath`) ← `getLoader(int)` ← `getResource(String, boolean)` ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `getDeclaredConstructors0(boolean)` (`java.lang.Class`) ← `privateGetDeclaredConstructors(boolean)` ← `getConstructor0(Class[], int)` ← `getDeclaredConstructor(Class[])` ← `createBenchmark(BenchmarkDescriptor)` (`org.renaissance.core.BenchmarkSuite`) ← `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` |
| <0.1% |    144 B |       6 | `valueOf(double)` (`java.lang.Double`) ← `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121d728`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluate(Spliterator, boolean, IntFunction)` ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121d4f0`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])`                                                                                                                                                                                                                                                                                                               |
| <0.1% |     64 B |       1 | `newLinkedHashMap(int)` (`java.util.LinkedHashMap`) ← `<init>(int)` (`java.util.jar.Attributes`) ← `read(InputStream, String)` (`java.util.jar.Manifest`) ← `<init>(JarVerifier, InputStream, String)` ← `<init>(InputStream, String)` ← `getManifestFromReference()` (`java.util.jar.JarFile`) ← `getManifest()` ← `getManifest()` (`jdk.internal.loader.URLClassPath$JarLoader$2`) ← `defineClass(String, Resource)` (`java.net.URLClassLoader`) ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)` ← `getDeclaredConstructors0(boolean)` (`java.lang.Class`) ← `privateGetDeclaredConstructors(boolean)` ← `getConstructor0(Class[], int)` ← `getDeclaredConstructor(Class[])` ← `createBenchmark(BenchmarkDescriptor)` (`org.renaissance.core.BenchmarkSuite`) ← `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| <0.1% |     56 B |       1 | `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`) ← `copyOfRange(byte[], int, int)` ← `<init>(Charset, byte[], int, int)` (`java.lang.String`) ← `<init>(byte[], int, int, Charset)` ← `parseName(byte[], int)` (`java.util.jar.Manifest`) ← `read(InputStream, String)` ← `<init>(JarVerifier, InputStream, String)` ← `<init>(InputStream, String)` ← `getManifestFromReference()` (`java.util.jar.JarFile`) ← `getManifest()` ← `getManifest()` (`jdk.internal.loader.URLClassPath$JarLoader$2`) ← `defineClass(String, Resource)` (`java.net.URLClassLoader`) ← `run()` (`java.net.URLClassLoader$1`) ← `run()` ← `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`) ← `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` ← `findClass(String)` (`java.net.URLClassLoader`) ← `loadClass(String, boolean)` (`java.lang.ClassLoader`) ← `loadClass(String)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| <0.1% |     40 B |       1 | `lambda$generateData$4(int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121d960`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$ArrayNode`) ← `<init>(long, IntFunction)` (`java.util.stream.Nodes$FixedNodeBuilder`) ← `builder(long, IntFunction)` (`java.util.stream.Nodes`) ← `makeNodeBuilder(long, IntFunction)` (`java.util.stream.ReferencePipeline`) ← `evaluate(Spliterator, boolean, IntFunction)` (`java.util.stream.AbstractPipeline`) ← `evaluateToArrayNode(IntFunction)` ← `toArray(IntFunction)` (`java.util.stream.ReferencePipeline`) ← `lambda$generateData$5(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(int)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121d4f0`) ← `accept(int)` (`java.util.stream.IntPipeline$1$1`) ← `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`) ← `forEachRemaining(Consumer)` (`java.util.Spliterator$OfInt`) ← `copyInto(Sink, Spliterator)` (`java.util.stream.AbstractPipeline`) ← `wrapAndCopyInto(Sink, Spliterator)` ← `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`) ← `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`) ← `collect(Collector)` (`java.util.stream.ReferencePipeline`) ← `generateData(int, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`) ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                     |
| <0.1% |     24 B |       1 | `<clinit>()` (`scopt.Read$`) ← `head(Seq)` (`scopt.OptionParser`) ← `<init>(Map)` (`org.renaissance.harness.ConfigParser$$anon$1`) ← `createParser(Map)` (`org.renaissance.harness.ConfigParser`) ← `<init>(Map)` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <0.1% |     24 B |       1 | `loadConvert(char[], int, int, StringBuilder)` (`java.util.Properties`) ← `load0(Properties$LineReader)` ← `load(InputStream)` ← `loadProperties(URL)` (`org.renaissance.core.ResourceUtils`) ← `loadPropertiesAsMap(URL)` ← `create(Path, String, Optional, Map, boolean)` (`org.renaissance.core.BenchmarkSuite`) ← `$anonfun$1(Path, Config)` (`org.renaissance.harness.RenaissanceSuite$`) ← `apply()` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80117e000`) ← `apply(Function0)` (`scala.util.Try$`) ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

# Lock contention profile

Blocked 11.85s over 204 contentions (58.1ms per contention).

| Category         |      % |   Time | Contentions |
| ---------------- | -----: | -----: | ----------: |
| Standard library | 100.0% | 11.85s |         204 |

## Call tree

Call paths to the hottest functions.

```
├── 7.71s (65.1%) [[via 28 frames]] park(boolean, long)  (100.0% self in 6 call stacks)  jdk.internal.misc.Unsafe
└── 4.08s (34.5%) [[via 2 frames]] awaitWork(ForkJoinPool$WorkQueue)  java.util.concurrent.ForkJoinPool
    ├── 3.40s (28.8%) park()  java.util.concurrent.locks.LockSupport
    │   └── 3.40s (28.8%) park(boolean, long)  jdk.internal.misc.Unsafe
    └── 678.3ms (5.7%) parkUntil(long)  java.util.concurrent.locks.LockSupport
        └── 678.3ms (5.7%) park(boolean, long)  jdk.internal.misc.Unsafe
```

## Hottest functions

### Self time

Functions with the most time blocked within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|      % |   Time | Contentions | Function              | Location                   |
| -----: | -----: | ----------: | --------------------- | -------------------------- |
| 100.0% | 11.85s |         204 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % |    Time | Contentions | Caller            | Location                                 |
| ----: | ------: | ----------: | ----------------- | ---------------------------------------- |
| 94.3% |  11.17s |         183 | `park()`          | `java.util.concurrent.locks.LockSupport` |
|  5.7% | 678.3ms |          21 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

### Total time

Functions with the most time blocked within the function and its callees.

|      % |   Time | Contentions | Function                                                                                                               | Location                                                               |
| -----: | -----: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 100.0% | 11.85s |         204 | `park(boolean, long)`                                                                                                  | `jdk.internal.misc.Unsafe`                                             |
|  94.3% | 11.17s |         183 | `park()`                                                                                                               | `java.util.concurrent.locks.LockSupport`                               |
|  65.5% |  7.76s |          20 | `awaitDone(int, long)`                                                                                                 | `java.util.concurrent.ForkJoinTask`                                    |
|  65.1% |  7.71s |          16 | `get()`                                                                                                                | `java.util.concurrent.ForkJoinTask`                                    |
|  65.1% |  7.71s |          16 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  65.1% |  7.71s |          16 | `$anonfun$2(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  65.1% |  7.71s |          16 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  65.1% |  7.71s |          16 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a80121db90`   |
|  65.1% |  7.71s |          16 | `map(Function1)`                                                                                                       | `scala.collection.immutable.Range`                                     |
|  65.1% |  7.71s |          16 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  65.1% |  7.71s |          16 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  65.1% |  7.71s |          16 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  65.1% |  7.71s |          16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  65.1% |  7.71s |          16 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80119c3b8` |
|  65.1% |  7.71s |          16 | `apply(Object)`                                                                                                        | `scala.runtime.function.JProcedure1`                                   |
|  65.1% |  7.71s |          16 | `foreach(Function1)`                                                                                                   | `scala.collection.immutable.List`                                      |
|  65.1% |  7.71s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  65.1% |  7.71s |          16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  65.1% |  7.71s |          16 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  65.1% |  7.71s |          16 | `invokeStatic(Object, Object)`                                                                                         | `java.lang.invoke.LambdaForm$DMH.0x000000a801001c00`                   |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|      % |    Time | Contentions | Function                                         | Location                                             |
| -----: | ------: | ----------: | ------------------------------------------------ | ---------------------------------------------------- |
| 100.0% |  11.85s |         204 | `park(boolean, long)`                            | `jdk.internal.misc.Unsafe`                           |
|  94.3% |  11.17s |         183 | `park()`                                         | `java.util.concurrent.locks.LockSupport`             |
|  65.5% |   7.76s |          20 | `awaitDone(int, long)`                           | `java.util.concurrent.ForkJoinTask`                  |
|  65.1% |   7.71s |          16 | `get()`                                          | `java.util.concurrent.ForkJoinTask`                  |
|  65.1% |   7.71s |          16 | `map(Function1)`                                 | `scala.collection.immutable.Range`                   |
|  65.1% |   7.71s |          16 | `apply(Object)`                                  | `scala.runtime.function.JProcedure1`                 |
|  65.1% |   7.71s |          16 | `foreach(Function1)`                             | `scala.collection.immutable.List`                    |
|  65.1% |   7.71s |          16 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x000000a801001c00` |
|  65.1% |   7.71s |          16 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000a801082400`  |
|  65.1% |   7.71s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                   |
|  65.1% |   7.71s |          16 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  65.1% |   7.71s |          16 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  65.1% |   7.71s |          16 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                           |
|  34.9% |   4.13s |         188 | `runWorker(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
|  34.9% |   4.13s |         188 | `run()`                                          | `java.util.concurrent.ForkJoinWorkerThread`          |
|  34.5% |   4.08s |         184 | `awaitWork(ForkJoinPool$WorkQueue)`              | `java.util.concurrent.ForkJoinPool`                  |
|   5.7% | 678.3ms |          21 | `parkUntil(long)`                                | `java.util.concurrent.locks.LockSupport`             |
|   0.4% |  49.8ms |           4 | `join()`                                         | `java.util.concurrent.ForkJoinTask`                  |
|   0.4% |  49.8ms |           4 | `exec()`                                         | `java.util.concurrent.RecursiveTask`                 |
|   0.4% |  49.8ms |           4 | `doExec()`                                       | `java.util.concurrent.ForkJoinTask`                  |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % |    Time | Contentions | Caller            | Location                                 |
| ----: | ------: | ----------: | ----------------- | ---------------------------------------- |
| 94.3% |  11.17s |         183 | `park()`          | `java.util.concurrent.locks.LockSupport` |
|  5.7% | 678.3ms |          21 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|     % |  Time | Contentions | Caller                              | Location                            |
| ----: | ----: | ----------: | ----------------------------------- | ----------------------------------- |
| 69.5% | 7.76s |          20 | `awaitDone(int, long)`              | `java.util.concurrent.ForkJoinTask` |
| 30.5% | 3.40s |         163 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % |   Time | Contentions | Caller   | Location                            |
| ----: | -----: | ----------: | -------- | ----------------------------------- |
| 99.4% |  7.71s |          16 | `get()`  | `java.util.concurrent.ForkJoinTask` |
|  0.6% | 49.8ms |           4 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Caller                | Location                                    |
| -----: | ----: | ----------: | --------------------- | ------------------------------------------- |
| 100.0% | 7.71s |          16 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |  Time | Contentions | Caller            | Location                                  |
| -----: | ----: | ----------: | ----------------- | ----------------------------------------- |
| 100.0% | 7.71s |          16 | `$anonfun$2(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |  Time | Contentions | Caller                       | Location                                  |
| -----: | ----: | ----------: | ---------------------------- | ----------------------------------------- |
| 100.0% | 7.71s |          16 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |  Time | Contentions | Caller          | Location                                                             |
| -----: | ----: | ----------: | --------------- | -------------------------------------------------------------------- |
| 100.0% | 7.71s |          16 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a80121db90` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a80121db90`)

|      % |  Time | Contentions | Caller           | Location                           |
| -----: | ----: | ----------: | ---------------- | ---------------------------------- |
| 100.0% | 7.71s |          16 | `map(Function1)` | `scala.collection.immutable.Range` |

##### `map(Function1)` (`scala.collection.immutable.Range`)

|      % |  Time | Contentions | Caller                  | Location                                  |
| -----: | ----: | ----------: | ----------------------- | ----------------------------------------- |
| 100.0% | 7.71s |          16 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |  Time | Contentions | Caller                  | Location                                  |
| -----: | ----: | ----------: | ----------------------- | ----------------------------------------- |
| 100.0% | 7.71s |          16 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|      % |  Time | Contentions | Caller               | Location                                  |
| -----: | ----: | ----------: | -------------------- | ----------------------------------------- |
| 100.0% | 7.71s |          16 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|      % |  Time | Contentions | Caller                                                                                                                 | Location                                    |
| -----: | ----: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 7.71s |          16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Contentions | Caller              | Location                                                               |
| -----: | ----: | ----------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 7.71s |          16 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80119c3b8` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80119c3b8`)

|      % |  Time | Contentions | Caller          | Location                             |
| -----: | ----: | ----------: | --------------- | ------------------------------------ |
| 100.0% | 7.71s |          16 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|      % |  Time | Contentions | Caller               | Location                             |
| -----: | ----: | ----------: | -------------------- | ------------------------------------ |
| 100.0% | 7.71s |          16 | `apply(Object)`      | `scala.runtime.function.JProcedure1` |
| 100.0% | 7.71s |          16 | `foreach(Function1)` | `scala.collection.immutable.List`    |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |  Time | Contentions | Caller                                                                        | Location                                    |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 7.71s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Contentions | Caller           | Location                                    |
| -----: | ----: | ----------: | ---------------- | ------------------------------------------- |
| 100.0% | 7.71s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Contentions | Caller           | Location                                   |
| -----: | ----: | ----------: | ---------------- | ------------------------------------------ |
| 100.0% | 7.71s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |  Time | Contentions | Caller                         | Location                                             |
| -----: | ----: | ----------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 7.71s |          16 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801001c00` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a801001c00`)

|      % |  Time | Contentions | Caller                           | Location                                            |
| -----: | ----: | ----------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 7.71s |          16 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801082400` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801082400`)

|      % |  Time | Contentions | Caller                                           | Location                           |
| -----: | ----: | ----------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 7.71s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |  Time | Contentions | Caller                         | Location                                          |
| -----: | ----: | ----------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 7.71s |          16 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |  Time | Contentions | Caller                     | Location                                          |
| -----: | ----: | ----------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 7.71s |          16 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |  Time | Contentions | Caller                     | Location                   |
| -----: | ----: | ----------: | -------------------------- | -------------------------- |
| 100.0% | 7.71s |          16 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |  Time | Contentions | Caller                                                      | Location                        |
| -----: | ----: | ----------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% | 7.71s |          16 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Caller  | Location                                    |
| -----: | ----: | ----------: | ------- | ------------------------------------------- |
| 100.0% | 4.13s |         188 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Caller                              | Location                            |
| -----: | ----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 4.08s |         184 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

|      % |    Time | Contentions | Caller                              | Location                            |
| -----: | ------: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 678.3ms |          21 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time | Contentions | Caller      | Location                                               |
| -----: | -----: | ----------: | ----------- | ------------------------------------------------------ |
| 100.0% | 49.8ms |           4 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |   Time | Contentions | Caller     | Location                            |
| -----: | -----: | ----------: | ---------- | ----------------------------------- |
| 100.0% | 49.8ms |           4 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time | Contentions | Caller                                               | Location                                      |
| -----: | -----: | ----------: | ---------------------------------------------------- | --------------------------------------------- |
| 100.0% | 49.8ms |           4 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  46.4% | 23.1ms |           2 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`           |
|  24.7% | 12.3ms |           1 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % |   Time | Contentions | Callee                | Location                   |
| -----: | -----: | ----------: | --------------------- | -------------------------- |
| 100.0% | 11.17s |         183 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time | Contentions | Callee                                    | Location                                      |
| -----: | -----: | ----------: | ----------------------------------------- | --------------------------------------------- |
| 100.0% |  7.76s |          20 | `park()`                                  | `java.util.concurrent.locks.LockSupport`      |
|   0.2% | 12.3ms |           1 | `tryRemoveAndExec(ForkJoinTask, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `get()` (`java.util.concurrent.ForkJoinTask`)

|      % |  Time | Contentions | Callee                 | Location                            |
| -----: | ----: | ----------: | ---------------------- | ----------------------------------- |
| 100.0% | 7.71s |          16 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % |  Time | Contentions | Callee  | Location                            |
| -----: | ----: | ----------: | ------- | ----------------------------------- |
| 100.0% | 7.71s |          16 | `get()` | `java.util.concurrent.ForkJoinTask` |

##### `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |  Time | Contentions | Callee                | Location                                    |
| -----: | ----: | ----------: | --------------------- | ------------------------------------------- |
| 100.0% | 7.71s |          16 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |  Time | Contentions | Callee            | Location                                  |
| -----: | ----: | ----------: | ----------------- | ----------------------------------------- |
| 100.0% | 7.71s |          16 | `$anonfun$2(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a80121db90`)

|      % |  Time | Contentions | Callee                       | Location                                  |
| -----: | ----: | ----------: | ---------------------------- | ----------------------------------------- |
| 100.0% | 7.71s |          16 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `map(Function1)` (`scala.collection.immutable.Range`)

|      % |  Time | Contentions | Callee          | Location                                                             |
| -----: | ----: | ----------: | --------------- | -------------------------------------------------------------------- |
| 100.0% | 7.71s |          16 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a80121db90` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % |  Time | Contentions | Callee           | Location                           |
| -----: | ----: | ----------: | ---------------- | ---------------------------------- |
| 100.0% | 7.71s |          16 | `map(Function1)` | `scala.collection.immutable.Range` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|      % |  Time | Contentions | Callee                  | Location                                  |
| -----: | ----: | ----------: | ----------------------- | ----------------------------------------- |
| 100.0% | 7.71s |          16 | `run(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|      % |  Time | Contentions | Callee                  | Location                                  |
| -----: | ----: | ----------: | ----------------------- | ----------------------------------------- |
| 100.0% | 7.71s |          16 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Contentions | Callee               | Location                                  |
| -----: | ----: | ----------: | -------------------- | ----------------------------------------- |
| 100.0% | 7.71s |          16 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80119c3b8`)

|      % |  Time | Contentions | Callee                                                                                                                 | Location                                    |
| -----: | ----: | ----------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 7.71s |          16 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object)` (`scala.runtime.function.JProcedure1`)

|      % |  Time | Contentions | Callee              | Location                                                               |
| -----: | ----: | ----------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% | 7.71s |          16 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80119c3b8` |
| 100.0% | 7.71s |          16 | `apply(Object)`     | `scala.runtime.function.JProcedure1`                                   |

##### `foreach(Function1)` (`scala.collection.immutable.List`)

|      % |  Time | Contentions | Callee          | Location                             |
| -----: | ----: | ----------: | --------------- | ------------------------------------ |
| 100.0% | 7.71s |          16 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Contentions | Callee               | Location                          |
| -----: | ----: | ----------: | -------------------- | --------------------------------- |
| 100.0% | 7.71s |          16 | `foreach(Function1)` | `scala.collection.immutable.List` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % |  Time | Contentions | Callee                                                                        | Location                                    |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% | 7.71s |          16 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % |  Time | Contentions | Callee           | Location                                    |
| -----: | ----: | ----------: | ---------------- | ------------------------------------------- |
| 100.0% | 7.71s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a801001c00`)

|      % |  Time | Contentions | Callee           | Location                                   |
| -----: | ----: | ----------: | ---------------- | ------------------------------------------ |
| 100.0% | 7.71s |          16 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801082400`)

|      % |  Time | Contentions | Callee                         | Location                                             |
| -----: | ----: | ----------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% | 7.71s |          16 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000a801001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|      % |  Time | Contentions | Callee                           | Location                                            |
| -----: | ----: | ----------: | -------------------------------- | --------------------------------------------------- |
| 100.0% | 7.71s |          16 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000a801082400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |  Time | Contentions | Callee                                           | Location                           |
| -----: | ----: | ----------: | ------------------------------------------------ | ---------------------------------- |
| 100.0% | 7.71s |          16 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

|      % |  Time | Contentions | Callee                         | Location                                          |
| -----: | ----: | ----------: | ------------------------------ | ------------------------------------------------- |
| 100.0% | 7.71s |          16 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|      % |  Time | Contentions | Callee                     | Location                                          |
| -----: | ----: | ----------: | -------------------------- | ------------------------------------------------- |
| 100.0% | 7.71s |          16 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % |   Time | Contentions | Callee                                   | Location                            |
| ----: | -----: | ----------: | ---------------------------------------- | ----------------------------------- |
| 98.8% |  4.08s |         184 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |
|  1.2% | 49.8ms |           4 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % |  Time | Contentions | Callee                              | Location                            |
| -----: | ----: | ----------: | ----------------------------------- | ----------------------------------- |
| 100.0% | 4.13s |         188 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % |    Time | Contentions | Callee            | Location                                 |
| ----: | ------: | ----------: | ----------------- | ---------------------------------------- |
| 83.4% |   3.40s |         163 | `park()`          | `java.util.concurrent.locks.LockSupport` |
| 16.6% | 678.3ms |          21 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

|      % |    Time | Contentions | Callee                | Location                   |
| -----: | ------: | ----------: | --------------------- | -------------------------- |
| 100.0% | 678.3ms |          21 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time | Contentions | Callee                 | Location                            |
| -----: | -----: | ----------: | ---------------------- | ----------------------------------- |
| 100.0% | 49.8ms |           4 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % |   Time | Contentions | Callee      | Location                                               |
| -----: | -----: | ----------: | ----------- | ------------------------------------------------------ |
| 100.0% | 49.8ms |           4 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % |   Time | Contentions | Callee   | Location                                            |
| -----: | -----: | ----------: | -------- | --------------------------------------------------- |
| 100.0% | 49.8ms |           4 | `exec()` | `java.util.concurrent.RecursiveTask`                |
|  46.4% | 23.1ms |           2 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

## Hottest call stacks

Call stacks with the most time blocked in their leaf frame.

|     % |    Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | ------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 65.1% |   7.71s |          16 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000a80121db90`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000a80119c3b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000a801001c00`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000a801082400`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
| 28.8% |   3.40s |         163 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  5.7% | 678.3ms |          21 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.2% |  26.7ms |           2 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.1% |  12.3ms |           1 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.1% |  10.8ms |           1 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000a80121df70`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

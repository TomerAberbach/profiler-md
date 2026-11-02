# Sampling profile

Collected 13,426 samples.

| Category          |     % | Samples |
| ----------------- | ----: | ------: |
| Native            | 90.5% |  12,152 |
| Ours              |  5.3% |     710 |
| Unknown           |  2.4% |     322 |
| Standard library  |  1.4% |     194 |
| JIT               |  0.2% |      31 |
| Compiler          |  0.1% |      16 |
| Garbage collector | <0.1% |       1 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 7,502 samples (55.9%) thread_start at libsystem_pthread.dylib
│   └── 7,502 samples (55.9%) _pthread_start
│       ├── 7,170 samples (53.4%) thread_native_entry at libjvm.dylib
│       │   └── 7,170 samples (53.4%) Thread::call_run
│       │       ├── 3,174 samples (23.6%) WorkerThread::run
│       │       │   └── 3,161 samples (23.5%, self 26.3% globally) semaphore_wait_trap at libsystem_kernel.dylib
│       │       ├── 2,341 samples (17.4%) JavaThread::thread_main_inner
│       │       │   └── 2,341 samples (17.4%) 6 more callees, led by (5.1%) CompileBroker::compiler_thread_loop
│       │       ├── 993 samples (7.4%) ConcurrentGCThread::run
│       │       │   └── 993 samples (7.4%) 3 more callees, led by (2.5%) G1ServiceThread::run_service
│       │       └── 662 samples (4.9%) 2 more callees, led by (2.5%) WatcherThread::run
│       └── … 331 samples (2.5%) __ulock_wait at libsystem_kernel.dylib
├── 3,948 samples (29.4%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 3,948 samples (29.4%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       ├── 2,209 samples (16.5%) awaitWork(ForkJoinPool$WorkQueue)
│       │   ├── … 1,936 samples (14.4%, self 58.0% globally) __psynch_cvwait at libsystem_kernel.dylib
│       │   └── 257 samples (1.9%) 3 more callees, led by (1.9%) parkUntil(long) at java.util.concurrent.locks.LockSupport
│       └── … 1,717 samples (12.8%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│           ├── 511 samples (3.8%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│           │   ├── … 362 samples (2.7%, self 0.7%) findNearestCentroid() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│           │   │   └── 235 samples (1.8%, self 1.7%) distance(Double[], Double[])
│           │   └── … 149 samples (1.1%) collectClusters(int[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│           │       ├── … 50 samples (0.4%) grow() at java.util.ArrayList
│           │       │   └── 38 samples (0.3%) grow(int)
│           │       └── 42 samples (0.3%) computeIfAbsent(Object, Function) at java.util.HashMap
│           ├── 395 samples (2.9%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│           │   └── … 395 samples (2.9%, self 1.0%) vectorSum() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│           │       ├── 236 samples (1.8%, self 1.5%) accumulate(Double[], double[])
│           │       │   └── 34 samples (0.3%) doubleValue() at java.lang.Double
│           │       └── 22 samples (0.2%) get(int) at java.util.ArrayList
│           │           └── 21 samples (0.2%) elementData(int)
│           ├── … 113 samples (0.8%) merge(Object, Object, BiFunction) at java.util.HashMap
│           │   ├── … 28 samples (0.2%) copyOf(Object[], int) at java.util.Arrays
│           │   │   └── 18 samples (0.1%) arrayof_jint_disjoint_arraycopy
│           │   │       └── 17 samples (0.1%) forward_copy_longs
│           │   └── 15 samples (0.1%) zero_blocks
│           └── 688 samples (5.1%) 8 more callees, led by (5.0%) join() at java.util.concurrent.ForkJoinTask
├── … 331 samples (2.5%) mach_msg2_trap at libsystem_kernel.dylib
├── 322 samples (2.4%) (anonymous)
└── 1,323 samples (9.9%) 6 more root frames, led by (2.5%) run() at java.lang.ref.Reference$ReferenceHandler
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                            | Location                                                   |
| ----: | ------: | ----------------------------------- | ---------------------------------------------------------- |
| 58.0% |   7,782 | `__psynch_cvwait`                   | `libsystem_kernel.dylib`                                   |
| 26.3% |   3,533 | `semaphore_wait_trap`               | `libsystem_kernel.dylib`                                   |
|  2.5% |     331 | `mach_msg2_trap`                    | `libsystem_kernel.dylib`                                   |
|  2.5% |     331 | `__ulock_wait`                      | `libsystem_kernel.dylib`                                   |
|  2.4% |     322 | `(anonymous)`                       | `<unknown>`                                                |
|  1.7% |     228 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.5% |     202 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  1.0% |     137 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.7% |     100 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.4% |      58 | `forward_copy_longs`                | `<unknown>`                                                |
|  0.3% |      38 | `elementData(int)`                  | `java.util.ArrayList`                                      |
|  0.3% |      37 | `doubleValue()`                     | `java.lang.Double`                                         |
|  0.3% |      36 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |      35 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`                                        |
|  0.3% |      35 | `__psynch_mutexwait`                | `libsystem_kernel.dylib`                                   |
|  0.2% |      31 | `zero_blocks`                       | `<unknown>`                                                |
|  0.1% |      18 | `__psynch_cvsignal`                 | `libsystem_kernel.dylib`                                   |
|  0.1% |      17 | `grow(int)`                         | `java.util.ArrayList`                                      |
|  0.1% |      13 | `checkIndex(int, int)`              | `java.util.Objects`                                        |
|  0.1% |      12 | `grow()`                            | `java.util.ArrayList`                                      |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                             | Location                   |
| ----: | ------: | ------------------------------------ | -------------------------- |
| 58.0% |   7,782 | `__psynch_cvwait`                    | `libsystem_kernel.dylib`   |
| 26.3% |   3,533 | `semaphore_wait_trap`                | `libsystem_kernel.dylib`   |
|  2.5% |     331 | `mach_msg2_trap`                     | `libsystem_kernel.dylib`   |
|  2.5% |     331 | `__ulock_wait`                       | `libsystem_kernel.dylib`   |
|  0.4% |      58 | `forward_copy_longs`                 | `<unknown>`                |
|  0.3% |      35 | `__psynch_mutexwait`                 | `libsystem_kernel.dylib`   |
|  0.1% |      18 | `__psynch_cvsignal`                  | `libsystem_kernel.dylib`   |
| <0.1% |       5 | `Unsafe_Park`                        | `libjvm.dylib`             |
| <0.1% |       3 | `pthread_jit_write_protect_np`       | `libsystem_pthread.dylib`  |
| <0.1% |       3 | `_platform_memset`                   | `libsystem_platform.dylib` |
| <0.1% |       3 | `_platform_bzero`                    | `libsystem_platform.dylib` |
| <0.1% |       3 | `write`                              | `libsystem_kernel.dylib`   |
| <0.1% |       2 | `Parker::park`                       | `libjvm.dylib`             |
| <0.1% |       2 | `arrayof_jint_disjoint_arraycopy`    | `<unknown>`                |
| <0.1% |       2 | `ObjArrayAllocator::initialize`      | `libjvm.dylib`             |
| <0.1% |       2 | `G1BarrierSet::write_ref_array_work` | `libjvm.dylib`             |
| <0.1% |       2 | `inflate_fast`                       | `libzip.dylib`             |
| <0.1% |       2 | `InstanceKlass::find_method_index`   | `libjvm.dylib`             |
| <0.1% |       2 | `__psynch_cvbroad`                   | `libsystem_kernel.dylib`   |
| <0.1% |       2 | `__semwait_signal`                   | `libsystem_kernel.dylib`   |

##### Ours

|     % | Samples | Function                                         | Location                                                   |
| ----: | ------: | ------------------------------------------------ | ---------------------------------------------------------- |
|  1.7% |     228 | `distance(Double[], Double[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.5% |     202 | `accumulate(Double[], double[])`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  1.0% |     137 | `vectorSum()`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.7% |     100 | `findNearestCentroid()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |      36 | `collectClusters(int[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% |       1 | `lambda$merge$6(List, List)`                     | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |       1 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% |       1 | `lambda$run$0(int, List, int)`                   | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |       1 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |       1 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |       1 | `add(double[], double[])`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% |       1 | `createSubtask(int, int)`                        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Unknown

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 2.4% |     322 | `(anonymous)` | `<unknown>` |

##### Standard library

|     % | Samples | Function                                                  | Location                                      |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
|  0.3% |      38 | `elementData(int)`                                        | `java.util.ArrayList`                         |
|  0.3% |      37 | `doubleValue()`                                           | `java.lang.Double`                            |
|  0.3% |      35 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                           |
|  0.1% |      17 | `grow(int)`                                               | `java.util.ArrayList`                         |
|  0.1% |      13 | `checkIndex(int, int)`                                    | `java.util.Objects`                           |
|  0.1% |      12 | `grow()`                                                  | `java.util.ArrayList`                         |
| <0.1% |       4 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                         |
| <0.1% |       4 | `hash(Object)`                                            | `java.util.HashMap`                           |
| <0.1% |       3 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
| <0.1% |       3 | `signalWaiters()`                                         | `java.util.concurrent.ForkJoinTask`           |
| <0.1% |       2 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                           |
| <0.1% |       2 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                           |
| <0.1% |       2 | `begin(long)`                                             | `java.util.stream.Nodes$FixedNodeBuilder`     |
| <0.1% |       1 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| <0.1% |       1 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| <0.1% |       1 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`          |
| <0.1% |       1 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| <0.1% |       1 | `signalWork()`                                            | `java.util.concurrent.ForkJoinPool`           |
| <0.1% |       1 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| <0.1% |       1 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                            |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 58.3% |     133 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |
| 40.8% |      93 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:249` |
|  0.4% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:247` |
|  0.4% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:250` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 92.6% |     187 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412` |
|  7.4% |      15 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 94.9% |     130 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |
|  5.1% |       7 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 48.0% |      48 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:231` |
| 30.0% |      30 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |
| 14.0% |      14 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
|  6.0% |       6 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |
|  2.0% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226` |

##### `elementData(int)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |      38 | `java.util.ArrayList:411` |

##### `doubleValue()` (`java.lang.Double`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      37 | `java.lang.Double:1001` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 25.0% |       9 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
| 22.2% |       8 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214` |
| 19.4% |       7 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213` |
| 16.7% |       6 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:212` |
| 13.9% |       5 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 34.3% |      12 | `java.util.HashMap:1197` |
| 22.9% |       8 | `java.util.HashMap:1207` |
| 17.1% |       6 | `java.util.HashMap:1213` |
| 11.4% |       4 | `java.util.HashMap:1204` |
| 11.4% |       4 | `java.util.HashMap:1222` |

##### `grow(int)` (`java.util.ArrayList`)

|     % | Samples | Location                  |
| ----: | ------: | ------------------------- |
| 76.5% |      13 | `java.util.ArrayList:239` |
| 23.5% |       4 | `java.util.ArrayList:232` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      13 | `java.util.Objects:385` |

##### `grow()` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |      12 | `java.util.ArrayList:244` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|     % | Samples | Location                  |
| ----: | ------: | ------------------------- |
| 75.0% |       3 | `java.util.ArrayList:482` |
| 25.0% |       1 | `java.util.ArrayList:484` |

##### `hash(Object)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       4 | `java.util.HashMap:338` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 66.7% |       2 | `java.util.concurrent.ForkJoinPool:1829` |
| 33.3% |       1 | `java.util.concurrent.ForkJoinPool:1837` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       3 | `java.util.concurrent.ForkJoinTask:301` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 50.0% |       1 | `java.util.HashMap:1378` |
| 50.0% |       1 | `java.util.HashMap:1384` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 50.0% |       1 | `java.util.HashMap:1428` |
| 50.0% |       1 | `java.util.HashMap:1427` |

##### `begin(long)` (`java.util.stream.Nodes$FixedNodeBuilder`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       2 | `java.util.stream.Nodes$FixedNodeBuilder:1222` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:171` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans:56` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:276` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans:86` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ForkJoinPool:1880` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ForkJoinPool:1808` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.RecursiveTask:110` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Location                                           |
| -----: | ------: | -------------------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1335` |

##### `signalWork()` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ForkJoinPool:1705` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ForkJoinPool:2057` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.Arrays:3482` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 46.9% |   3,647 | `PlatformMonitor::wait` | `libjvm.dylib`           |
| 44.6% |   3,473 | `Parker::park`          | `libjvm.dylib`           |
|  4.3% |     331 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  4.3% |     331 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 89.5% |   3,161 | `WorkerThread::run`              | `libjvm.dylib` |
|  9.4% |     331 | `os::signal_wait`                | `libjvm.dylib` |
|  0.9% |      32 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
|  0.3% |       9 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |     331 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |     331 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     228 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |     202 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     137 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     100 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forward_copy_longs` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 72.4% |      42 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 27.6% |      16 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `elementData(int)` (`java.util.ArrayList`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |      38 | `get(int)` | `java.util.ArrayList` |

##### `doubleValue()` (`java.lang.Double`)

|     % | Samples | Caller                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 91.9% |      34 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  8.1% |       3 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |      36 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |      35 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      35 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                              | Location                                                   |
| ----: | ------: | ----------------------------------- | ---------------------------------------------------------- |
| 48.4% |      15 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                        |
| 41.9% |      13 | `grow(int)`                         | `java.util.ArrayList`                                      |
|  9.7% |       3 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `__psynch_cvsignal` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                      | Location       |
| ----: | ------: | --------------------------- | -------------- |
| 94.4% |      17 | `Unsafe_Unpark`             | `libjvm.dylib` |
|  5.6% |       1 | `G1ServiceThread::schedule` | `libjvm.dylib` |

##### `grow(int)` (`java.util.ArrayList`)

|      % | Samples | Caller   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% |      17 | `grow()` | `java.util.ArrayList` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |      13 | `get(int)` | `java.util.ArrayList` |

##### `grow()` (`java.util.ArrayList`)

|      % | Samples | Caller                       | Location              |
| -----: | ------: | ---------------------------- | --------------------- |
| 100.0% |      12 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `Unsafe_Park` (`libjvm.dylib`)

|      % | Samples | Caller                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |       5 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % | Samples | Caller        | Location              |
| -----: | ------: | ------------- | --------------------- |
| 100.0% |       4 | `add(Object)` | `java.util.ArrayList` |

##### `hash(Object)` (`java.util.HashMap`)

|      % | Samples | Caller                              | Location            |
| -----: | ------: | ----------------------------------- | ------------------- |
| 100.0% |       4 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|      % | Samples | Caller          | Location       |
| -----: | ------: | --------------- | -------------- |
| 100.0% |       3 | `Unsafe_Unpark` | `libjvm.dylib` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 33.3% |       1 | `PhaseChaitin::Register_Allocate`             | `libjvm.dylib` |
| 33.3% |       1 | `MemAllocator::mem_allocate_inside_tlab_slow` | `libjvm.dylib` |
| 33.3% |       1 | `MemAllocator::allocate`                      | `libjvm.dylib` |

##### `_platform_bzero` (`libsystem_platform.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |       3 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `write` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |       3 | `write0(FileDescriptor, long, int)` | `sun.nio.ch.UnixFileDispatcherImpl` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |       3 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |       3 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `Parker::park` (`libjvm.dylib`)

|      % | Samples | Caller        | Location       |
| -----: | ------: | ------------- | -------------- |
| 100.0% |       2 | `Unsafe_Park` | `libjvm.dylib` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Caller                              | Location            |
| ----: | ------: | ----------------------------------- | ------------------- |
| 50.0% |       1 | `copyOf(Object[], int)`             | `java.util.Arrays`  |
| 50.0% |       1 | `merge(Object, Object, BiFunction)` | `java.util.HashMap` |

##### `ObjArrayAllocator::initialize` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |       2 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `G1BarrierSet::write_ref_array_work` (`libjvm.dylib`)

|     % | Samples | Caller                           | Location              |
| ----: | ------: | -------------------------------- | --------------------- |
| 50.0% |       1 | `addAll(Collection)`             | `java.util.ArrayList` |
| 50.0% |       1 | `arrayof_oop_disjoint_arraycopy` | `<unknown>`           |

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       2 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|     % | Samples | Caller                             | Location       |
| ----: | ------: | ---------------------------------- | -------------- |
| 50.0% |       1 | `InstanceKlass::find_method`       | `libjvm.dylib` |
| 50.0% |       1 | `InstanceKlass::find_local_method` | `libjvm.dylib` |

##### `__psynch_cvbroad` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                               | Location       |
| -----: | ------: | ------------------------------------ | -------------- |
| 100.0% |       2 | `CompileBroker::create_compile_task` | `libjvm.dylib` |

##### `__semwait_signal` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                      | Location       |
| -----: | ------: | --------------------------- | -------------- |
| 100.0% |       2 | `os::naked_short_nanosleep` | `libjvm.dylib` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % | Samples | Caller                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |       2 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |       2 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `begin(long)` (`java.util.stream.Nodes$FixedNodeBuilder`)

|      % | Samples | Caller        | Location                              |
| -----: | ------: | ------------- | ------------------------------------- |
| 100.0% |       2 | `begin(long)` | `java.util.stream.Sink$ChainedDouble` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller                  | Location                                                               |
| -----: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001186fd0` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |       1 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001183d68` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller       | Location                                                               |
| -----: | ------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% |       1 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001125b10` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller                               | Location                                                  |
| -----: | ------: | ------------------------------------ | --------------------------------------------------------- |
| 100.0% |       1 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |       1 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |       1 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |       1 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |       1 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `signalWork()` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                                      | Location                                      |
| -----: | ------: | ------------------------------------------- | --------------------------------------------- |
| 100.0% |       1 | `push(ForkJoinTask, ForkJoinPool, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |       1 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % | Samples | Caller      | Location              |
| -----: | ------: | ----------- | --------------------- |
| 100.0% |       1 | `toArray()` | `java.util.ArrayList` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                 | Location                                    |
| ----: | ------: | ---------------------------------------- | ------------------------------------------- |
| 58.0% |   7,782 | `__psynch_cvwait`                        | `libsystem_kernel.dylib`                    |
| 55.9% |   7,502 | `_pthread_start`                         | `libsystem_pthread.dylib`                   |
| 55.9% |   7,502 | `thread_start`                           | `libsystem_pthread.dylib`                   |
| 53.4% |   7,170 | `Thread::call_run`                       | `libjvm.dylib`                              |
| 53.4% |   7,170 | `thread_native_entry`                    | `libjvm.dylib`                              |
| 29.4% |   3,948 | `runWorker(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool`         |
| 29.4% |   3,948 | `run()`                                  | `java.util.concurrent.ForkJoinWorkerThread` |
| 27.2% |   3,647 | `PlatformMonitor::wait`                  | `libjvm.dylib`                              |
| 26.3% |   3,533 | `semaphore_wait_trap`                    | `libsystem_kernel.dylib`                    |
| 26.0% |   3,497 | `Unsafe_Park`                            | `libjvm.dylib`                              |
| 26.0% |   3,497 | `park(boolean, long)`                    | `jdk.internal.misc.Unsafe`                  |
| 26.0% |   3,492 | `Parker::park`                           | `libjvm.dylib`                              |
| 23.6% |   3,174 | `WorkerThread::run`                      | `libjvm.dylib`                              |
| 21.7% |   2,912 | `park()`                                 | `java.util.concurrent.locks.LockSupport`    |
| 19.7% |   2,640 | `Monitor::wait_without_safepoint_check`  | `libjvm.dylib`                              |
| 17.4% |   2,341 | `JavaThread::thread_main_inner`          | `libjvm.dylib`                              |
| 16.5% |   2,209 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool`         |
| 14.7% |   1,976 | `awaitDone(int, long)`                   | `java.util.concurrent.ForkJoinTask`         |
| 12.9% |   1,738 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool`         |
| 12.9% |   1,729 | `doExec()`                               | `java.util.concurrent.ForkJoinTask`         |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                                 | Location                  |
| ----: | ------: | -------------------------------------------------------- | ------------------------- |
| 58.0% |   7,782 | `__psynch_cvwait`                                        | `libsystem_kernel.dylib`  |
| 55.9% |   7,502 | `_pthread_start`                                         | `libsystem_pthread.dylib` |
| 55.9% |   7,502 | `thread_start`                                           | `libsystem_pthread.dylib` |
| 53.4% |   7,170 | `Thread::call_run`                                       | `libjvm.dylib`            |
| 53.4% |   7,170 | `thread_native_entry`                                    | `libjvm.dylib`            |
| 27.2% |   3,647 | `PlatformMonitor::wait`                                  | `libjvm.dylib`            |
| 26.3% |   3,533 | `semaphore_wait_trap`                                    | `libsystem_kernel.dylib`  |
| 26.0% |   3,497 | `Unsafe_Park`                                            | `libjvm.dylib`            |
| 26.0% |   3,492 | `Parker::park`                                           | `libjvm.dylib`            |
| 23.6% |   3,174 | `WorkerThread::run`                                      | `libjvm.dylib`            |
| 19.7% |   2,640 | `Monitor::wait_without_safepoint_check`                  | `libjvm.dylib`            |
| 17.4% |   2,341 | `JavaThread::thread_main_inner`                          | `libjvm.dylib`            |
|  7.5% |   1,007 | `Monitor::wait`                                          | `libjvm.dylib`            |
|  7.4% |     993 | `ConcurrentGCThread::run`                                | `libjvm.dylib`            |
|  4.9% |     662 | `JLI_Launch`                                             | `libjli.dylib`            |
|  4.9% |     662 | `main`                                                   | `java`                    |
|  2.5% |     331 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib`            |
|  2.5% |     331 | `JVM_WaitForReferencePendingList`                        | `libjvm.dylib`            |
|  2.5% |     331 | `G1ServiceThread::wait_for_task`                         | `libjvm.dylib`            |
|  2.5% |     331 | `G1ServiceThread::run_service`                           | `libjvm.dylib`            |

##### Ours

|     % | Samples | Function                                                                                                               | Location                                                               |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 12.8% |   1,725 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  3.8% |     511 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  2.9% |     395 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  2.9% |     395 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  2.7% |     362 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  2.5% |     329 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  2.5% |     329 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  2.4% |     328 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  2.4% |     328 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  2.4% |     328 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  2.4% |     326 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  2.4% |     325 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  2.4% |     324 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  2.4% |     318 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  2.4% |     317 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  2.4% |     317 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f00111f208` |
|  2.3% |     314 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  2.3% |     310 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  2.3% |     306 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  2.3% |     305 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |

##### Unknown

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 2.4% |     322 | `(anonymous)` | `<unknown>` |

##### Standard library

|     % | Samples | Function                                                  | Location                                      |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 29.4% |   3,948 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| 29.4% |   3,948 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`   |
| 26.0% |   3,497 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                    |
| 21.7% |   2,912 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
| 16.5% |   2,209 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| 14.7% |   1,976 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
| 12.9% |   1,738 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
| 12.9% |   1,729 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
| 12.9% |   1,729 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 12.8% |   1,725 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`          |
| 12.5% |   1,672 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`           |
| 10.2% |   1,376 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  4.0% |     533 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  2.5% |     333 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  2.5% |     331 | `waitForReferencePendingList()`                           | `java.lang.ref.Reference`                     |
|  2.5% |     331 | `processPendingReferences()`                              | `java.lang.ref.Reference`                     |
|  2.5% |     331 | `run()`                                                   | `java.lang.ref.Reference$ReferenceHandler`    |
|  2.5% |     331 | `wait0(long)`                                             | `java.lang.Object`                            |
|  2.5% |     331 | `wait(long)`                                              | `java.lang.Object`                            |
|  2.5% |     331 | `wait()`                                                  | `java.lang.Object`                            |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 46.9% |   3,647 | `PlatformMonitor::wait` | `libjvm.dylib`           |
| 44.6% |   3,473 | `Parker::park`          | `libjvm.dylib`           |
|  4.3% |     331 | `PlatformEvent::park`   | `libjvm.dylib`           |
|  4.3% |     331 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |   7,502 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |   7,170 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   7,170 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |   3,948 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 72.4% |   2,640 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |
| 27.6% |   1,007 | `Monitor::wait`                         | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 89.5% |   3,161 | `WorkerThread::run`              | `libjvm.dylib` |
|  9.4% |     331 | `os::signal_wait`                | `libjvm.dylib` |
|  0.9% |      32 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
|  0.3% |       9 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `Unsafe_Park` (`libjvm.dylib`)

|      % | Samples | Caller                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |   3,497 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % | Samples | Caller                    | Location                                 |
| ----: | ------: | ------------------------- | ---------------------------------------- |
| 83.3% |   2,912 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
|  9.4% |     330 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |
|  7.3% |     255 | `parkUntil(long)`         | `java.util.concurrent.locks.LockSupport` |

##### `Parker::park` (`libjvm.dylib`)

|      % | Samples | Caller        | Location       |
| -----: | ------: | ------------- | -------------- |
| 100.0% |   3,492 | `Unsafe_Park` | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   3,174 | `Thread::call_run` | `libjvm.dylib` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|     % | Samples | Caller                              | Location                            |
| ----: | ------: | ----------------------------------- | ----------------------------------- |
| 67.0% |   1,951 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |
| 33.0% |     961 | `awaitDone(int, long)`              | `java.util.concurrent.ForkJoinTask` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|     % | Samples | Caller                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 12.5% |     331 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| 12.5% |     331 | `G1ServiceThread::wait_for_task`                         | `libjvm.dylib` |
| 12.5% |     331 | `WatcherThread::sleep`                                   | `libjvm.dylib` |
| 12.5% |     331 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| 12.5% |     331 | `G1ConcurrentMarkThread::run_service`                    | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   2,341 | `Thread::call_run` | `libjvm.dylib` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |   2,209 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Caller   | Location                            |
| ----: | ------: | -------- | ----------------------------------- |
| 84.6% |   1,672 | `join()` | `java.util.concurrent.ForkJoinTask` |
| 15.4% |     304 | `get()`  | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |   1,738 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller                                                    | Location                                      |
| -----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 100.0% |   1,729 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  79.6% |   1,376 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  30.7% |     531 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  19.0% |     329 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                                   | Location                            |
| -----: | ------: | ---------------------------------------- | ----------------------------------- |
| 100.0% |   1,729 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller   | Location                             |
| -----: | ------: | -------- | ------------------------------------ |
| 100.0% |   1,725 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   1,725 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |   1,672 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |   1,376 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `Monitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 65.4% |     659 | `CompileQueue::get`               | `libjvm.dylib` |
| 32.9% |     331 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |
|  1.7% |      17 | `VMThread::wait_until_executed`   | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     993 | `Thread::call_run` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|      % | Samples | Caller | Location |
| -----: | ------: | ------ | -------- |
| 100.0% |     662 | `main` | `java`   |

##### `main` (`java`)

|     % | Samples | Caller       | Location       |
| ----: | ------: | ------------ | -------------- |
| 50.0% |     331 | `unknown`    | `<unknown>`    |
| 50.0% |     331 | `apple_main` | `libjli.dylib` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Caller                         | Location                                               |
| ----: | ------: | ------------------------------ | ------------------------------------------------------ |
| 60.8% |     324 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 56.8% |     303 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     511 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 100.0% |     511 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     395 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     395 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |     395 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     362 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |     333 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `MonitorDeflationThread::monitor_deflation_thread_entry` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location       |
| -----: | ------: | ------------------------------- | -------------- |
| 100.0% |     331 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `JVM_WaitForReferencePendingList` (`libjvm.dylib`)

|      % | Samples | Caller                          | Location                  |
| -----: | ------: | ------------------------------- | ------------------------- |
| 100.0% |     331 | `waitForReferencePendingList()` | `java.lang.ref.Reference` |

##### `G1ServiceThread::wait_for_task` (`libjvm.dylib`)

|      % | Samples | Caller                         | Location       |
| -----: | ------: | ------------------------------ | -------------- |
| 100.0% |     331 | `G1ServiceThread::run_service` | `libjvm.dylib` |

##### `G1ServiceThread::run_service` (`libjvm.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |     331 | `ConcurrentGCThread::run` | `libjvm.dylib` |

##### `waitForReferencePendingList()` (`java.lang.ref.Reference`)

|      % | Samples | Caller                       | Location                  |
| -----: | ------: | ---------------------------- | ------------------------- |
| 100.0% |     331 | `processPendingReferences()` | `java.lang.ref.Reference` |

##### `processPendingReferences()` (`java.lang.ref.Reference`)

|      % | Samples | Caller  | Location                                   |
| -----: | ------: | ------- | ------------------------------------------ |
| 100.0% |     331 | `run()` | `java.lang.ref.Reference$ReferenceHandler` |

##### `wait0(long)` (`java.lang.Object`)

|      % | Samples | Caller       | Location           |
| -----: | ------: | ------------ | ------------------ |
| 100.0% |     331 | `wait(long)` | `java.lang.Object` |

##### `wait(long)` (`java.lang.Object`)

|      % | Samples | Caller   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |     331 | `wait()` | `java.lang.Object` |

##### `wait()` (`java.lang.Object`)

|      % | Samples | Caller    | Location                             |
| -----: | ------: | --------- | ------------------------------------ |
| 100.0% |     331 | `await()` | `java.lang.ref.NativeReferenceQueue` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller              | Location                                               |
| -----: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% |     329 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller              | Location                                               |
| -----: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% |     329 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     329 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Caller                                 | Location                        |
| -----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% |     328 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Caller           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |     328 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % | Samples | Caller                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     326 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f001004800` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % | Samples | Caller           | Location                                   |
| -----: | ------: | ---------------- | ------------------------------------------ |
| 100.0% |     325 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     324 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     318 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % | Samples | Caller              | Location                                                               |
| -----: | ------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% |     317 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f00111f208` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f00111f208`)

|      % | Samples | Caller          | Location                             |
| -----: | ------: | --------------- | ------------------------------------ |
| 100.0% |     317 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|      % | Samples | Caller                                                                                                                 | Location                                    |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% |     314 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|      % | Samples | Caller               | Location                                  |
| -----: | ------: | -------------------- | ----------------------------------------- |
| 100.0% |     310 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % | Samples | Caller                  | Location                                  |
| -----: | ------: | ----------------------- | ----------------------------------------- |
| 100.0% |     306 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller   | Location                                                               |
| -----: | ------: | -------- | ---------------------------------------------------------------------- |
| 100.0% |     305 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x000000f001183d68` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 95.6% |   7,170 | `thread_native_entry` | `libjvm.dylib` |
|  4.4% |     331 | `apple_main`          | `libjli.dylib` |
| <0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   7,502 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 44.3% |   3,174 | `WorkerThread::run`             | `libjvm.dylib` |
| 32.6% |   2,341 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 13.8% |     993 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  4.6% |     331 | `WatcherThread::run`            | `libjvm.dylib` |
|  4.6% |     331 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   7,170 | `Thread::call_run` | `libjvm.dylib` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                   | Location                            |
| ----: | ------: | ---------------------------------------- | ----------------------------------- |
| 56.0% |   2,209 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |
| 44.0% |   1,738 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |   3,948 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee            | Location                 |
| -----: | ------: | ----------------- | ------------------------ |
| 100.0% |   3,647 | `__psynch_cvwait` | `libsystem_kernel.dylib` |

##### `Unsafe_Park` (`libjvm.dylib`)

|     % | Samples | Callee         | Location       |
| ----: | ------: | -------------- | -------------- |
| 99.9% |   3,492 | `Parker::park` | `libjvm.dylib` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Callee        | Location       |
| -----: | ------: | ------------- | -------------- |
| 100.0% |   3,497 | `Unsafe_Park` | `libjvm.dylib` |

##### `Parker::park` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location                  |
| ----: | ------: | ----------------------------- | ------------------------- |
| 99.5% |   3,473 | `__psynch_cvwait`             | `libsystem_kernel.dylib`  |
|  0.4% |      13 | `SafepointMechanism::process` | `libjvm.dylib`            |
|  0.1% |       2 | `_pthread_cond_wait`          | `libsystem_pthread.dylib` |
| <0.1% |       1 | `stub:pthread_mutex_unlock`   | `libjvm.dylib`            |
| <0.1% |       1 | `__gettimeofday`              | `libsystem_kernel.dylib`  |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 99.6% |   3,161 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  0.2% |       6 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|  0.1% |       2 | `G1FullGCAdjustTask::work`        | `libjvm.dylib`           |
|  0.1% |       2 | `G1FullGCMarkTask::work`          | `libjvm.dylib`           |
|  0.1% |       2 | `G1ParallelCleaningTask::work`    | `libjvm.dylib`           |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Callee                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |   2,912 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |   2,640 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 29.3% |     687 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
| 14.1% |     331 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| 14.1% |     331 | `signal_thread_entry`                                    | `libjvm.dylib` |
| 14.1% |     331 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| 14.1% |     331 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee               | Location                                 |
| ----: | ------: | -------------------- | ---------------------------------------- |
| 88.3% |   1,951 | `park()`             | `java.util.concurrent.locks.LockSupport` |
| 11.5% |     255 | `parkUntil(long)`    | `java.util.concurrent.locks.LockSupport` |
| <0.1% |       1 | `os::javaTimeMillis` | `libjvm.dylib`                           |
| <0.1% |       1 | `hasTasks(boolean)`  | `java.util.concurrent.ForkJoinPool`      |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee                                                    | Location                                      |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 69.6% |   1,376 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 48.6% |     961 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
| 16.9% |     333 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  0.2% |       4 | `signalWaiters()`                                         | `java.util.concurrent.ForkJoinTask`           |
|  0.1% |       1 | `I2C/C2I adapters(0xbbba)`                                | `<unknown>`                                   |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                               | Location                                      |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 99.5% |   1,729 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  0.3% |       6 | `signalWork()`                                       | `java.util.concurrent.ForkJoinPool`           |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee      | Location                                            |
| ----: | ------: | ----------- | --------------------------------------------------- |
| 99.8% |   1,725 | `exec()`    | `java.util.concurrent.RecursiveTask`                |
| 17.6% |     305 | `exec()`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  0.5% |       9 | `setDone()` | `java.util.concurrent.ForkJoinTask`                 |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   1,729 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 96.9% |   1,672 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 29.6% |     511 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 22.9% |     395 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 19.1% |     329 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  7.1% |     123 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Callee      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |   1,725 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |   1,672 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   1,376 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `Monitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |   1,007 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 33.3% |     331 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| 33.3% |     331 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |
| 33.3% |     331 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 50.0% |     331 | `CreateExecutionEnvironment` | `libjli.dylib` |
| 50.0% |     331 | `ContinueInNewThread`        | `libjli.dylib` |

##### `main` (`java`)

|      % | Samples | Callee       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |     662 | `JLI_Launch` | `libjli.dylib` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee                                           | Location                            |
| ----: | ------: | ------------------------------------------------ | ----------------------------------- |
| 99.6% |     531 | `doExec()`                                       | `java.util.concurrent.ForkJoinTask` |
|  0.2% |       1 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib`                      |
|  0.2% |       1 | `counter_overflow Runtime1 stub`                 | `<unknown>`                         |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |     511 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  70.8% |     362 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  29.2% |     149 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                           | Location                                                  |
| ----: | ------: | -------------------------------- | --------------------------------------------------------- |
| 59.7% |     236 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  5.6% |      22 | `get(int)`                       | `java.util.ArrayList`                                     |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Callee              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     395 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |     395 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                         | Location                                                   |
| ----: | ------: | ------------------------------ | ---------------------------------------------------------- |
| 64.9% |     235 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  4.7% |      17 | `get(int)`                     | `java.util.ArrayList`                                      |
|  1.1% |       4 | `SafepointBlob`                | `<unknown>`                                                |
|  0.8% |       3 | `zero_blocks`                  | `<unknown>`                                                |
|  0.3% |       1 | `DeoptimizationBlob`           | `<unknown>`                                                |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                         | Location                            |
| ----: | ------: | ------------------------------ | ----------------------------------- |
| 98.8% |     329 | `doExec()`                     | `java.util.concurrent.ForkJoinTask` |
|  0.9% |       3 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `MonitorDeflationThread::monitor_deflation_thread_entry` (`libjvm.dylib`)

|      % | Samples | Callee                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |     331 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `JVM_WaitForReferencePendingList` (`libjvm.dylib`)

|      % | Samples | Callee          | Location       |
| -----: | ------: | --------------- | -------------- |
| 100.0% |     331 | `Monitor::wait` | `libjvm.dylib` |

##### `G1ServiceThread::wait_for_task` (`libjvm.dylib`)

|      % | Samples | Callee                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |     331 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `G1ServiceThread::run_service` (`libjvm.dylib`)

|      % | Samples | Callee                           | Location       |
| -----: | ------: | -------------------------------- | -------------- |
| 100.0% |     331 | `G1ServiceThread::wait_for_task` | `libjvm.dylib` |

##### `waitForReferencePendingList()` (`java.lang.ref.Reference`)

|      % | Samples | Callee                            | Location       |
| -----: | ------: | --------------------------------- | -------------- |
| 100.0% |     331 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |

##### `processPendingReferences()` (`java.lang.ref.Reference`)

|      % | Samples | Callee                          | Location                  |
| -----: | ------: | ------------------------------- | ------------------------- |
| 100.0% |     331 | `waitForReferencePendingList()` | `java.lang.ref.Reference` |

##### `run()` (`java.lang.ref.Reference$ReferenceHandler`)

|      % | Samples | Callee                       | Location                  |
| -----: | ------: | ---------------------------- | ------------------------- |
| 100.0% |     331 | `processPendingReferences()` | `java.lang.ref.Reference` |

##### `wait0(long)` (`java.lang.Object`)

|      % | Samples | Callee            | Location       |
| -----: | ------: | ----------------- | -------------- |
| 100.0% |     331 | `JVM_MonitorWait` | `libjvm.dylib` |

##### `wait(long)` (`java.lang.Object`)

|      % | Samples | Callee        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |     331 | `wait0(long)` | `java.lang.Object` |

##### `wait()` (`java.lang.Object`)

|      % | Samples | Callee       | Location           |
| -----: | ------: | ------------ | ------------------ |
| 100.0% |     331 | `wait(long)` | `java.lang.Object` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee            | Location                                               |
| ----: | ------: | ----------------- | ------------------------------------------------------ |
| 98.5% |     324 | `average(List)`   | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  1.5% |       5 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     329 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     329 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee                               | Location                            |
| ----: | ------: | ------------------------------------ | ----------------------------------- |
| 99.4% |     326 | `invoke(Object, Object[])`           | `java.lang.reflect.Method`          |
|  0.3% |       1 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |
|  0.3% |       1 | `loadClass(String)`                  | `java.lang.ClassLoader`             |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Callee                                                      | Location                        |
| -----: | ------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% |     328 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Callee                                 | Location                        |
| -----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% |     328 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|     % | Samples | Callee              | Location                                    |
| ----: | ------: | ------------------- | ------------------------------------------- |
| 99.7% |     325 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
|  0.3% |       1 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|     % | Samples | Callee                                                                        | Location                                    |
| ----: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 97.8% |     318 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|  0.6% |       2 | `<clinit>()`                                                                  | `scala.Predef$`                             |
|  0.3% |       1 | `loadClass(String)`                                                           | `java.lang.ClassLoader`                     |
|  0.3% |       1 | `apply(Seq)`                                                                  | `scala.collection.immutable.Map$`           |
|  0.3% |       1 | `<init>(Map)`                                                                 | `org.renaissance.harness.ConfigParser`      |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     324 | `invoke()` | `java.util.concurrent.ForkJoinTask` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|     % | Samples | Callee               | Location                                    |
| ----: | ------: | -------------------- | ------------------------------------------- |
| 99.7% |     317 | `foreach(Function1)` | `scala.collection.immutable.List`           |
|  0.3% |       1 | `getVmStartNanos()`  | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|     % | Samples | Callee                                                                                       | Location                                  |
| ----: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 99.1% |     314 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|  0.9% |       3 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f00111f208`)

|      % | Samples | Callee                                                                                                                 | Location                                    |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% |     317 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|     % | Samples | Callee                             | Location                                  |
| ----: | ------: | ---------------------------------- | ----------------------------------------- |
| 98.7% |     310 | `executeOperation(int)`            | `org.renaissance.harness.ExecutionDriver` |
|  1.3% |       4 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|     % | Samples | Callee                                            | Location                                  |
| ----: | ------: | ------------------------------------------------- | ----------------------------------------- |
| 98.7% |     306 | `run(BenchmarkContext)`                           | `org.renaissance.jdk.concurrent.FjKmeans` |
|  1.3% |       4 | `notifyAfterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.EventDispatcher` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|     % | Samples | Callee           | Location                           |
| ----: | ------: | ---------------- | ---------------------------------- |
| 99.3% |     304 | `map(Function1)` | `scala.collection.immutable.Range` |
|  0.7% |       2 | `<clinit>()`     | `scala.Predef$`                    |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|     % | Samples | Callee                    | Location                                               |
| ----: | ------: | ------------------------- | ------------------------------------------------------ |
| 99.3% |     303 | `invoke()`                | `java.util.concurrent.ForkJoinTask`                    |
|  0.3% |       1 | `<init>(JavaKMeans, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 23.5% |   3,161 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 14.4% |   1,936 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  4.9% |     659 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.5% |     331 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  2.5% |     331 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.5% |     331 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.5% |     331 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  2.5% |     331 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.5% |     331 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.5% |     331 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.5% |     331 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  2.5% |     331 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  2.5% |     331 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  2.5% |     331 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.5% |     330 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  2.5% |     330 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  2.5% |     330 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  2.4% |     318 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.3% |     304 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x000000f00117ae68`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f00111f208`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
|  1.9% |     253 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

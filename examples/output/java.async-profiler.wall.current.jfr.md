# Sampling profile

Collected 7,855 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 87.3% |   6,860 |
| Ours             |  7.6% |     594 |
| Unknown          |  2.5% |     197 |
| Standard library |  2.1% |     163 |
| JIT              |  0.3% |      23 |
| Compiler         |  0.2% |      18 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 4,515 samples (57.5%) thread_start at libsystem_pthread.dylib
│   └── 4,515 samples (57.5%) _pthread_start
│       ├── 4,315 samples (54.9%) thread_native_entry at libjvm.dylib
│       │   └── 4,315 samples (54.9%) Thread::call_run
│       │       ├── 1,878 samples (23.9%) WorkerThread::run
│       │       │   └── 1,859 samples (23.7%, self 26.5% globally) semaphore_wait_trap at libsystem_kernel.dylib
│       │       ├── 1,441 samples (18.3%) JavaThread::thread_main_inner
│       │       │   └── 1,441 samples (18.3%) 6 more callees, led by (5.7%) CompileBroker::compiler_thread_loop
│       │       ├── 597 samples (7.6%) ConcurrentGCThread::run
│       │       │   └── 597 samples (7.6%) 3 more callees, led by (2.5%) G1ServiceThread::run_service
│       │       └── 399 samples (5.1%) 3 more callees, led by (2.5%) WatcherThread::run
│       └── … 199 samples (2.5%) __ulock_wait at libsystem_kernel.dylib
├── 2,149 samples (27.4%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 2,149 samples (27.4%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       ├── … 1,227 samples (15.6%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│       │   ├── 416 samples (5.3%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │   ├── … 276 samples (3.5%, self 1.3%) findNearestCentroid() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │   │   └── 162 samples (2.1%, self 2.0%) distance(Double[], Double[])
│       │   │   └── … 140 samples (1.8%, self 0.5%) collectClusters(int[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │       ├── 40 samples (0.5%) computeIfAbsent(Object, Function) at java.util.HashMap
│       │   │       └── … 35 samples (0.4%) grow(int) at java.util.ArrayList
│       │   ├── 330 samples (4.2%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       │   │   └── … 330 samples (4.2%, self 1.3%) vectorSum() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       │   │       ├── 192 samples (2.4%) accumulate(Double[], double[])
│       │   │       └── 35 samples (0.4%) get(int) at java.util.ArrayList
│       │   │           └── 35 samples (0.4%) elementData(int)
│       │   ├── … 100 samples (1.3%) merge(Object, Object, BiFunction) at java.util.HashMap
│       │   │   ├── 70 samples (0.9%) apply(Object, Object) at org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000
│       │   │   │   └── 70 samples (0.9%) lambda$merge$6(List, List) at org.renaissance.jdk.concurrent.JavaKMeans
│       │   │   │       ├── 43 samples (0.5%) addAll(Collection) at java.util.ArrayList …
│       │   │   │       └── … 23 samples (0.3%) arrayof_jint_disjoint_arraycopy
│       │   │   │           └── 21 samples (0.3%, self 0.8% globally) forward_copy_longs
│       │   │   └── 12 samples (0.2%) zero_blocks
│       │   └── 369 samples (4.7%) 5 more callees, led by (4.6%) join() at java.util.concurrent.ForkJoinTask
│       └── 903 samples (11.5%) awaitWork(ForkJoinPool$WorkQueue)
│           ├── … 826 samples (10.5%, self 53.8% globally) __psynch_cvwait at libsystem_kernel.dylib
│           └── 71 samples (0.9%) parkUntil(long) at java.util.concurrent.locks.LockSupport …
├── … 199 samples (2.5%) mach_msg2_trap at libsystem_kernel.dylib
├── 197 samples (2.5%) (anonymous)
└── 795 samples (10.1%) 6 more root frames, led by (2.5%) run() at java.lang.ref.Finalizer$FinalizerThread
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                                                  | Location                                                   |
| ----: | ------: | --------------------------------------------------------- | ---------------------------------------------------------- |
| 53.8% |   4,226 | `__psynch_cvwait`                                         | `libsystem_kernel.dylib`                                   |
| 26.5% |   2,080 | `semaphore_wait_trap`                                     | `libsystem_kernel.dylib`                                   |
|  2.5% |     199 | `__ulock_wait`                                            | `libsystem_kernel.dylib`                                   |
|  2.5% |     199 | `mach_msg2_trap`                                          | `libsystem_kernel.dylib`                                   |
|  2.5% |     197 | `(anonymous)`                                             | `<unknown>`                                                |
|  2.4% |     192 | `accumulate(Double[], double[])`                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  2.0% |     157 | `distance(Double[], Double[])`                            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.3% |     102 | `vectorSum()`                                             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  1.3% |      99 | `findNearestCentroid()`                                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.8% |      62 | `forward_copy_longs`                                      | `<unknown>`                                                |
|  0.7% |      52 | `elementData(int)`                                        | `java.util.ArrayList`                                      |
|  0.5% |      40 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.4% |      28 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                                        |
|  0.3% |      23 | `grow(int)`                                               | `java.util.ArrayList`                                      |
|  0.3% |      22 | `zero_blocks`                                             | `<unknown>`                                                |
|  0.2% |      19 | `__psynch_mutexwait`                                      | `libsystem_kernel.dylib`                                   |
|  0.2% |      12 | `__psynch_cvsignal`                                       | `libsystem_kernel.dylib`                                   |
|  0.1% |      11 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                      |
|  0.1% |       8 | `pthread_jit_write_protect_np`                            | `libsystem_pthread.dylib`                                  |
|  0.1% |       5 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                                                                             | Location                   |
| ----: | ------: | ---------------------------------------------------------------------------------------------------- | -------------------------- |
| 53.8% |   4,226 | `__psynch_cvwait`                                                                                    | `libsystem_kernel.dylib`   |
| 26.5% |   2,080 | `semaphore_wait_trap`                                                                                | `libsystem_kernel.dylib`   |
|  2.5% |     199 | `__ulock_wait`                                                                                       | `libsystem_kernel.dylib`   |
|  2.5% |     199 | `mach_msg2_trap`                                                                                     | `libsystem_kernel.dylib`   |
|  0.8% |      62 | `forward_copy_longs`                                                                                 | `<unknown>`                |
|  0.2% |      19 | `__psynch_mutexwait`                                                                                 | `libsystem_kernel.dylib`   |
|  0.2% |      12 | `__psynch_cvsignal`                                                                                  | `libsystem_kernel.dylib`   |
|  0.1% |       8 | `pthread_jit_write_protect_np`                                                                       | `libsystem_pthread.dylib`  |
|  0.1% |       5 | `arrayof_jint_disjoint_arraycopy`                                                                    | `<unknown>`                |
|  0.1% |       5 | `_platform_bzero`                                                                                    | `libsystem_platform.dylib` |
| <0.1% |       3 | `_platform_memset`                                                                                   | `libsystem_platform.dylib` |
| <0.1% |       2 | `Unsafe_Park`                                                                                        | `libjvm.dylib`             |
| <0.1% |       2 | `G1FullGCMarker::mark_object`                                                                        | `libjvm.dylib`             |
| <0.1% |       2 | `inflate_fast`                                                                                       | `libzip.dylib`             |
| <0.1% |       2 | `__psynch_cvbroad`                                                                                   | `libsystem_kernel.dylib`   |
| <0.1% |       2 | `G1FullGCCompactTask::copy_object_to_new_location`                                                   | `libjvm.dylib`             |
| <0.1% |       1 | `NullCheckVisitor::do_NullCheck`                                                                     | `libjvm.dylib`             |
| <0.1% |       1 | `LoadField::visit`                                                                                   | `libjvm.dylib`             |
| <0.1% |       1 | `ProfileCall::visit`                                                                                 | `libjvm.dylib`             |
| <0.1% |       1 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib`             |

##### Ours

|     % | Samples | Function                                         | Location                                                   |
| ----: | ------: | ------------------------------------------------ | ---------------------------------------------------------- |
|  2.4% |     192 | `accumulate(Double[], double[])`                 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  2.0% |     157 | `distance(Double[], Double[])`                   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.3% |     102 | `vectorSum()`                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  1.3% |      99 | `findNearestCentroid()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.5% |      40 | `collectClusters(int[])`                         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% |       1 | `compute()`                                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| <0.1% |       1 | `combineResults(Object, Object)`                 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% |       1 | `<init>(JavaKMeans, List, int, int)`             | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| <0.1% |       1 | `lambda$generateData$3(int, int, Random[], int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                |

##### Unknown

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 2.5% |     197 | `(anonymous)` | `<unknown>` |

##### Standard library

|     % | Samples | Function                                                  | Location                             |
| ----: | ------: | --------------------------------------------------------- | ------------------------------------ |
|  0.7% |      52 | `elementData(int)`                                        | `java.util.ArrayList`                |
|  0.4% |      28 | `computeIfAbsent(Object, Function)`                       | `java.util.HashMap`                  |
|  0.3% |      23 | `grow(int)`                                               | `java.util.ArrayList`                |
|  0.1% |      11 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                |
|  0.1% |       5 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`  |
|  0.1% |       5 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                  |
|  0.1% |       5 | `hash(Object)`                                            | `java.util.HashMap`                  |
|  0.1% |       5 | `checkIndex(int, int)`                                    | `java.util.Objects`                  |
| <0.1% |       3 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`  |
| <0.1% |       3 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                   |
| <0.1% |       2 | `exec()`                                                  | `java.util.concurrent.RecursiveTask` |
| <0.1% |       2 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`  |
| <0.1% |       2 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`  |
| <0.1% |       2 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                  |
| <0.1% |       2 | `newNode(int, Object, Object, HashMap$Node)`              | `java.util.HashMap`                  |
| <0.1% |       1 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`  |
| <0.1% |       1 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`  |
| <0.1% |       1 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`           |
| <0.1% |       1 | `resize()`                                                | `java.util.HashMap`                  |
| <0.1% |       1 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                  |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 92.7% |     178 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412` |
|  7.3% |      14 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 49.0% |      77 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:249` |
| 45.9% |      72 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |
|  5.1% |       8 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:250` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 90.2% |      92 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |
|  9.8% |      10 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 43.4% |      43 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:231` |
| 39.4% |      39 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
| 13.1% |      13 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |
|  3.0% |       3 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226` |
|  1.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |

##### `elementData(int)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |      52 | `java.util.ArrayList:411` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 25.0% |      10 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |
| 22.5% |       9 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
| 22.5% |       9 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213` |
| 20.0% |       8 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214` |
| 10.0% |       4 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:212` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 21.4% |       6 | `java.util.HashMap:1222` |
| 21.4% |       6 | `java.util.HashMap:1197` |
| 21.4% |       6 | `java.util.HashMap:1204` |
| 14.3% |       4 | `java.util.HashMap:1219` |
| 10.7% |       3 | `java.util.HashMap:1207` |

##### `grow(int)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |      23 | `java.util.ArrayList:239` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |      11 | `java.util.ArrayList:482` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 40.0% |       2 | `java.util.concurrent.ForkJoinPool:2051` |
| 40.0% |       2 | `java.util.concurrent.ForkJoinPool:2053` |
| 20.0% |       1 | `java.util.concurrent.ForkJoinPool:2041` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 60.0% |       3 | `java.util.HashMap:1428` |
| 40.0% |       2 | `java.util.HashMap:1427` |

##### `hash(Object)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       5 | `java.util.HashMap:338` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       5 | `java.util.Objects:385` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 66.7% |       2 | `java.util.concurrent.ForkJoinPool:1809` |
| 33.3% |       1 | `java.util.concurrent.ForkJoinPool:1808` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       3 | `java.util.Arrays:3482` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       2 | `java.util.concurrent.RecursiveTask:110` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       2 | `java.util.concurrent.ForkJoinTask:387` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 50.0% |       1 | `java.util.concurrent.ForkJoinPool:1825` |
| 50.0% |       1 | `java.util.concurrent.ForkJoinPool:1827` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 50.0% |       1 | `java.util.HashMap:1378` |
| 50.0% |       1 | `java.util.HashMap:1384` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       2 | `java.util.HashMap:1909` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:146` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:171` |

##### `<init>(JavaKMeans, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:382` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Location                                       |
| -----: | ------: | ---------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans:86` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ForkJoinTask:413` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Location                                |
| -----: | ------: | --------------------------------------- |
| 100.0% |       1 | `java.util.concurrent.ForkJoinTask:651` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:704` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       1 | `java.util.HashMap:634` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 52.3% |   2,210 | `PlatformMonitor::wait` | `libjvm.dylib`           |
| 38.3% |   1,618 | `Parker::park`          | `libjvm.dylib`           |
|  4.7% |     199 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  4.7% |     199 | `PlatformEvent::park`   | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 89.4% |   1,859 | `WorkerThread::run`              | `libjvm.dylib` |
|  9.6% |     199 | `os::signal_wait`                | `libjvm.dylib` |
|  0.7% |      14 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
|  0.4% |       8 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |     199 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |     199 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |     192 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     157 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     102 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |      99 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forward_copy_longs` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 82.3% |      51 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 17.7% |      11 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `elementData(int)` (`java.util.ArrayList`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |      52 | `get(int)` | `java.util.ArrayList` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |      40 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |      28 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `grow(int)` (`java.util.ArrayList`)

|      % | Samples | Caller   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% |      23 | `grow()` | `java.util.ArrayList` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                              | Location                                                   |
| ----: | ------: | ----------------------------------- | ---------------------------------------------------------- |
| 54.5% |      12 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                        |
| 31.8% |       7 | `grow(int)`                         | `java.util.ArrayList`                                      |
|  9.1% |       2 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  4.5% |       1 | `resize()`                          | `java.util.HashMap`                                        |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      19 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `__psynch_cvsignal` (`libsystem_kernel.dylib`)

|      % | Samples | Caller          | Location       |
| -----: | ------: | --------------- | -------------- |
| 100.0% |      12 | `Unsafe_Unpark` | `libjvm.dylib` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % | Samples | Caller        | Location              |
| -----: | ------: | ------------- | --------------------- |
| 100.0% |      11 | `add(Object)` | `java.util.ArrayList` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                         | Location       |
| ----: | ------: | ------------------------------ | -------------- |
| 37.5% |       3 | `JVM_IHashCode`                | `libjvm.dylib` |
| 37.5% |       3 | `Unsafe_Park`                  | `libjvm.dylib` |
| 12.5% |       1 | `OptoRuntime::new_array_C`     | `libjvm.dylib` |
| 12.5% |       1 | `InterpreterRuntime::newarray` | `libjvm.dylib` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |       5 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Caller                              | Location              |
| ----: | ------: | ----------------------------------- | --------------------- |
| 60.0% |       3 | `copyOf(Object[], int)`             | `java.util.Arrays`    |
| 20.0% |       1 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`   |
| 20.0% |       1 | `grow(int)`                         | `java.util.ArrayList` |

##### `_platform_bzero` (`libsystem_platform.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |       5 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |       5 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `hash(Object)` (`java.util.HashMap`)

|      % | Samples | Caller                              | Location            |
| -----: | ------: | ----------------------------------- | ------------------- |
| 100.0% |       5 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |       5 | `get(int)` | `java.util.ArrayList` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|     % | Samples | Caller                                        | Location       |
| ----: | ------: | --------------------------------------------- | -------------- |
| 33.3% |       1 | `G1ParScanThreadState::G1ParScanThreadState`  | `libjvm.dylib` |
| 33.3% |       1 | `MemAllocator::allocate`                      | `libjvm.dylib` |
| 33.3% |       1 | `MemAllocator::mem_allocate_inside_tlab_slow` | `libjvm.dylib` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |       3 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     % | Samples | Caller      | Location              |
| ----: | ------: | ----------- | --------------------- |
| 66.7% |       2 | `grow(int)` | `java.util.ArrayList` |
| 33.3% |       1 | `toArray()` | `java.util.ArrayList` |

##### `Unsafe_Park` (`libjvm.dylib`)

|      % | Samples | Caller                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |       2 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `G1FullGCMarker::mark_object` (`libjvm.dylib`)

|      % | Samples | Caller                                                          | Location       |
| -----: | ------: | --------------------------------------------------------------- | -------------- |
| 100.0% |       2 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib` |

##### `inflate_fast` (`libzip.dylib`)

|      % | Samples | Caller                                          | Location       |
| -----: | ------: | ----------------------------------------------- | -------------- |
| 100.0% |       2 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `__psynch_cvbroad` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                               | Location       |
| ----: | ------: | ------------------------------------ | -------------- |
| 50.0% |       1 | `JavaThread::~JavaThread`            | `libjvm.dylib` |
| 50.0% |       1 | `CompileBroker::create_compile_task` | `libjvm.dylib` |

##### `G1FullGCCompactTask::copy_object_to_new_location` (`libjvm.dylib`)

|      % | Samples | Caller                                               | Location       |
| -----: | ------: | ---------------------------------------------------- | -------------- |
| 100.0% |       2 | `G1FullGCCompactTask::G1CompactRegionClosure::apply` | `libjvm.dylib` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |       2 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Caller                                               | Location                                      |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 50.0% |       1 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 50.0% |       1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |       2 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|      % | Samples | Caller                              | Location                                    |
| -----: | ------: | ----------------------------------- | ------------------------------------------- |
| 100.0% |       2 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|     % | Samples | Caller                                          | Location            |
| ----: | ------: | ----------------------------------------------- | ------------------- |
| 50.0% |       1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
| 50.0% |       1 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `NullCheckVisitor::do_NullCheck` (`libjvm.dylib`)

|      % | Samples | Caller                             | Location       |
| -----: | ------: | ---------------------------------- | -------------- |
| 100.0% |       1 | `NullCheckEliminator::iterate_one` | `libjvm.dylib` |

##### `LoadField::visit` (`libjvm.dylib`)

|      % | Samples | Caller                       | Location       |
| -----: | ------: | ---------------------------- | -------------- |
| 100.0% |       1 | `GraphBuilder::access_field` | `libjvm.dylib` |

##### `ProfileCall::visit` (`libjvm.dylib`)

|      % | Samples | Caller                 | Location       |
| -----: | ------: | ---------------------- | -------------- |
| 100.0% |       1 | `GraphBuilder::invoke` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

|      % | Samples | Caller                                  | Location       |
| -----: | ------: | --------------------------------------- | -------------- |
| 100.0% |       1 | `G1FullGCMarker::follow_marking_stacks` | `libjvm.dylib` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller   | Location                             |
| -----: | ------: | -------- | ------------------------------------ |
| 100.0% |       1 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `<init>(JavaKMeans, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller                    | Location                                                  |
| -----: | ------: | ------------------------- | --------------------------------------------------------- |
| 100.0% |       1 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `lambda$generateData$3(int, int, Random[], int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller       | Location                                                               |
| -----: | ------: | ------------ | ---------------------------------------------------------------------- |
| 100.0% |       1 | `apply(int)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2388` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller   | Location                            |
| -----: | ------: | -------- | ----------------------------------- |
| 100.0% |       1 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Caller   | Location                                 |
| -----: | ------: | -------- | ---------------------------------------- |
| 100.0% |       1 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `resize()` (`java.util.HashMap`)

|      % | Samples | Caller                                          | Location            |
| -----: | ------: | ----------------------------------------------- | ------------------- |
| 100.0% |       1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|      % | Samples | Caller                        | Location            |
| -----: | ------: | ----------------------------- | ------------------- |
| 100.0% |       1 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                             | Location                                      |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 57.5% |   4,515 | `_pthread_start`                                     | `libsystem_pthread.dylib`                     |
| 57.5% |   4,515 | `thread_start`                                       | `libsystem_pthread.dylib`                     |
| 54.9% |   4,315 | `Thread::call_run`                                   | `libjvm.dylib`                                |
| 54.9% |   4,315 | `thread_native_entry`                                | `libjvm.dylib`                                |
| 53.8% |   4,226 | `__psynch_cvwait`                                    | `libsystem_kernel.dylib`                      |
| 28.2% |   2,212 | `PlatformMonitor::wait`                              | `libjvm.dylib`                                |
| 27.4% |   2,149 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`           |
| 27.4% |   2,149 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`   |
| 26.5% |   2,080 | `semaphore_wait_trap`                                | `libsystem_kernel.dylib`                      |
| 23.9% |   1,878 | `WorkerThread::run`                                  | `libjvm.dylib`                                |
| 20.8% |   1,631 | `park(boolean, long)`                                | `jdk.internal.misc.Unsafe`                    |
| 20.7% |   1,629 | `Unsafe_Park`                                        | `libjvm.dylib`                                |
| 20.7% |   1,624 | `Parker::park`                                       | `libjvm.dylib`                                |
| 20.2% |   1,589 | `Monitor::wait_without_safepoint_check`              | `libjvm.dylib`                                |
| 18.3% |   1,441 | `JavaThread::thread_main_inner`                      | `libjvm.dylib`                                |
| 17.4% |   1,367 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`           |
| 17.3% |   1,362 | `park()`                                             | `java.util.concurrent.locks.LockSupport`      |
| 15.8% |   1,243 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`           |
| 15.8% |   1,239 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`           |
| 15.8% |   1,239 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                | Location                  |
| ----: | ------: | --------------------------------------- | ------------------------- |
| 57.5% |   4,515 | `_pthread_start`                        | `libsystem_pthread.dylib` |
| 57.5% |   4,515 | `thread_start`                          | `libsystem_pthread.dylib` |
| 54.9% |   4,315 | `Thread::call_run`                      | `libjvm.dylib`            |
| 54.9% |   4,315 | `thread_native_entry`                   | `libjvm.dylib`            |
| 53.8% |   4,226 | `__psynch_cvwait`                       | `libsystem_kernel.dylib`  |
| 28.2% |   2,212 | `PlatformMonitor::wait`                 | `libjvm.dylib`            |
| 26.5% |   2,080 | `semaphore_wait_trap`                   | `libsystem_kernel.dylib`  |
| 23.9% |   1,878 | `WorkerThread::run`                     | `libjvm.dylib`            |
| 20.7% |   1,629 | `Unsafe_Park`                           | `libjvm.dylib`            |
| 20.7% |   1,624 | `Parker::park`                          | `libjvm.dylib`            |
| 20.2% |   1,589 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`            |
| 18.3% |   1,441 | `JavaThread::thread_main_inner`         | `libjvm.dylib`            |
|  7.9% |     624 | `Monitor::wait`                         | `libjvm.dylib`            |
|  7.6% |     597 | `ConcurrentGCThread::run`               | `libjvm.dylib`            |
|  5.1% |     398 | `JLI_Launch`                            | `libjli.dylib`            |
|  5.1% |     398 | `main`                                  | `java`                    |
|  2.5% |     199 | `__ulock_wait`                          | `libsystem_kernel.dylib`  |
|  2.5% |     199 | `CallJavaMainInNewThread`               | `libjli.dylib`            |
|  2.5% |     199 | `ContinueInNewThread`                   | `libjli.dylib`            |
|  2.5% |     199 | `apple_main`                            | `libjli.dylib`            |

##### Ours

|     % | Samples | Function                                                                                                               | Location                                                               |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 15.7% |   1,232 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  5.3% |     416 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  4.2% |     330 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  4.2% |     330 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  3.5% |     276 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  2.6% |     203 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  2.6% |     203 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  2.6% |     202 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  2.5% |     196 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  2.5% |     196 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  2.5% |     196 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  2.5% |     194 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  2.5% |     194 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  2.4% |     192 | `accumulate(Double[], double[])`                                                                                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  2.4% |     187 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  2.4% |     186 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  2.4% |     186 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0` |
|  2.4% |     185 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  2.3% |     179 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  2.2% |     176 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |

##### Unknown

|    % | Samples | Function      | Location    |
| ---: | ------: | ------------- | ----------- |
| 2.5% |     197 | `(anonymous)` | `<unknown>` |

##### Standard library

|     % | Samples | Function                                                  | Location                                      |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 27.4% |   2,149 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| 27.4% |   2,149 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`   |
| 20.8% |   1,631 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                    |
| 17.4% |   1,367 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
| 17.3% |   1,362 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
| 15.8% |   1,243 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
| 15.8% |   1,239 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
| 15.8% |   1,239 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 15.7% |   1,233 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`          |
| 15.2% |   1,191 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`           |
| 13.1% |   1,026 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 11.5% |     903 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
|  4.2% |     326 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  3.6% |     286 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  2.5% |     199 | `wait0(long)`                                             | `java.lang.Object`                            |
|  2.5% |     199 | `wait(long)`                                              | `java.lang.Object`                            |
|  2.5% |     199 | `wait()`                                                  | `java.lang.Object`                            |
|  2.5% |     199 | `await()`                                                 | `java.lang.ref.NativeReferenceQueue`          |
|  2.5% |     199 | `remove0()`                                               | `java.lang.ref.ReferenceQueue`                |
|  2.5% |     199 | `remove()`                                                | `java.lang.ref.NativeReferenceQueue`          |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |   4,515 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |   4,315 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   4,315 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                  | Location                 |
| ----: | ------: | ----------------------- | ------------------------ |
| 52.3% |   2,210 | `PlatformMonitor::wait` | `libjvm.dylib`           |
| 38.3% |   1,618 | `Parker::park`          | `libjvm.dylib`           |
|  4.7% |     199 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
|  4.7% |     199 | `PlatformEvent::park`   | `libjvm.dylib`           |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 71.8% |   1,589 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |
| 28.2% |     623 | `Monitor::wait`                         | `libjvm.dylib` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |   2,149 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 89.4% |   1,859 | `WorkerThread::run`              | `libjvm.dylib` |
|  9.6% |     199 | `os::signal_wait`                | `libjvm.dylib` |
|  0.7% |      14 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
|  0.4% |       8 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   1,878 | `Thread::call_run` | `libjvm.dylib` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % | Samples | Caller                    | Location                                 |
| ----: | ------: | ------------------------- | ---------------------------------------- |
| 83.5% |   1,362 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
| 12.1% |     198 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |
|  4.4% |      71 | `parkUntil(long)`         | `java.util.concurrent.locks.LockSupport` |

##### `Unsafe_Park` (`libjvm.dylib`)

|      % | Samples | Caller                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |   1,629 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `Parker::park` (`libjvm.dylib`)

|      % | Samples | Caller        | Location       |
| -----: | ------: | ------------- | -------------- |
| 100.0% |   1,624 | `Unsafe_Park` | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|     % | Samples | Caller                                                        | Location       |
| ----: | ------: | ------------------------------------------------------------- | -------------- |
| 12.5% |     199 | `WatcherThread::sleep`                                        | `libjvm.dylib` |
| 12.5% |     199 | `G1ServiceThread::wait_for_task`                              | `libjvm.dylib` |
| 12.5% |     199 | `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` | `libjvm.dylib` |
| 12.5% |     199 | `ServiceThread::service_thread_entry`                         | `libjvm.dylib` |
| 12.5% |     199 | `G1ConcurrentMarkThread::run_service`                         | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   1,441 | `Thread::call_run` | `libjvm.dylib` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Caller   | Location                            |
| ----: | ------: | -------- | ----------------------------------- |
| 87.1% |   1,191 | `join()` | `java.util.concurrent.ForkJoinTask` |
| 12.9% |     176 | `get()`  | `java.util.concurrent.ForkJoinTask` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|     % | Samples | Caller                              | Location                            |
| ----: | ------: | ----------------------------------- | ----------------------------------- |
| 61.1% |     832 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |
| 38.9% |     530 | `awaitDone(int, long)`              | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |   1,243 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller                                                    | Location                                      |
| -----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 100.0% |   1,239 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  82.8% |   1,026 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  26.3% |     326 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  22.8% |     282 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                                   | Location                            |
| -----: | ------: | ---------------------------------------- | ----------------------------------- |
| 100.0% |   1,239 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   1,233 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller   | Location                             |
| -----: | ------: | -------- | ------------------------------------ |
| 100.0% |   1,232 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |   1,191 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |   1,026 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |     903 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `Monitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 67.1% |     419 | `CompileQueue::get`               | `libjvm.dylib` |
| 31.9% |     199 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |
|  1.0% |       6 | `VMThread::wait_until_executed`   | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |     597 | `Thread::call_run` | `libjvm.dylib` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     416 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 100.0% |     416 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `JLI_Launch` (`libjli.dylib`)

|      % | Samples | Caller | Location |
| -----: | ------: | ------ | -------- |
| 100.0% |     398 | `main` | `java`   |

##### `main` (`java`)

|     % | Samples | Caller       | Location       |
| ----: | ------: | ------------ | -------------- |
| 50.0% |     199 | `apple_main` | `libjli.dylib` |
| 50.0% |     199 | `unknown`    | `<unknown>`    |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     330 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     330 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |     330 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Caller                         | Location                                               |
| ----: | ------: | ------------------------------ | ------------------------------------------------------ |
| 61.7% |     201 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 53.1% |     173 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |     286 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     276 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller              | Location                                               |
| -----: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% |     203 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller              | Location                                               |
| -----: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% |     203 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     203 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     202 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |     199 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `CallJavaMainInNewThread` (`libjli.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |     199 | `ContinueInNewThread` | `libjli.dylib` |

##### `ContinueInNewThread` (`libjli.dylib`)

|      % | Samples | Caller       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |     199 | `JLI_Launch` | `libjli.dylib` |

##### `apple_main` (`libjli.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |     199 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `wait0(long)` (`java.lang.Object`)

|      % | Samples | Caller       | Location           |
| -----: | ------: | ------------ | ------------------ |
| 100.0% |     199 | `wait(long)` | `java.lang.Object` |

##### `wait(long)` (`java.lang.Object`)

|      % | Samples | Caller   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |     199 | `wait()` | `java.lang.Object` |

##### `wait()` (`java.lang.Object`)

|      % | Samples | Caller    | Location                             |
| -----: | ------: | --------- | ------------------------------------ |
| 100.0% |     199 | `await()` | `java.lang.ref.NativeReferenceQueue` |

##### `await()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Caller      | Location                       |
| -----: | ------: | ----------- | ------------------------------ |
| 100.0% |     199 | `remove0()` | `java.lang.ref.ReferenceQueue` |

##### `remove0()` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Caller     | Location                             |
| -----: | ------: | ---------- | ------------------------------------ |
| 100.0% |     199 | `remove()` | `java.lang.ref.NativeReferenceQueue` |

##### `remove()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Caller  | Location                                  |
| -----: | ------: | ------- | ----------------------------------------- |
| 100.0% |     199 | `run()` | `java.lang.ref.Finalizer$FinalizerThread` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Caller                                 | Location                        |
| -----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% |     196 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Caller           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |     196 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % | Samples | Caller           | Location                                   |
| -----: | ------: | ---------------- | ------------------------------------------ |
| 100.0% |     194 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % | Samples | Caller                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     194 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |     192 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     187 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % | Samples | Caller              | Location                                                               |
| -----: | ------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% |     186 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0`)

|      % | Samples | Caller          | Location                             |
| -----: | ------: | --------------- | ------------------------------------ |
| 100.0% |     186 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|      % | Samples | Caller                                                                                                                 | Location                                    |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% |     185 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|      % | Samples | Caller               | Location                                  |
| -----: | ------: | -------------------- | ----------------------------------------- |
| 100.0% |     179 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller            | Location                                  |
| -----: | ------: | ----------------- | ----------------------------------------- |
| 100.0% |     176 | `$anonfun$2(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 95.6% |   4,315 | `thread_native_entry` | `libjvm.dylib` |
|  4.4% |     199 | `apple_main`          | `libjli.dylib` |
| <0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   4,515 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 43.5% |   1,878 | `WorkerThread::run`             | `libjvm.dylib` |
| 33.4% |   1,441 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 13.8% |     597 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  4.6% |     199 | `WatcherThread::run`            | `libjvm.dylib` |
|  4.6% |     199 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   4,315 | `Thread::call_run` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee               | Location                  |
| ----: | ------: | -------------------- | ------------------------- |
| 99.9% |   2,210 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|  0.1% |       2 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                   | Location                            |
| ----: | ------: | ---------------------------------------- | ----------------------------------- |
| 57.8% |   1,243 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |
| 42.0% |     903 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |   2,149 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 99.0% |   1,859 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  0.5% |       9 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|  0.3% |       6 | `G1FullGCMarkTask::work`          | `libjvm.dylib`           |
|  0.2% |       3 | `G1FullGCCompactTask::work`       | `libjvm.dylib`           |
|  0.1% |       1 | `RestorePreservedMarksTask::work` | `libjvm.dylib`           |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % | Samples | Callee                                                 | Location       |
| ----: | ------: | ------------------------------------------------------ | -------------- |
| 99.9% |   1,629 | `Unsafe_Park`                                          | `libjvm.dylib` |
|  0.1% |       1 | `JavaThread::check_special_condition_for_native_trans` | `libjvm.dylib` |

##### `Unsafe_Park` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location                  |
| ----: | ------: | ------------------------------ | ------------------------- |
| 99.7% |   1,624 | `Parker::park`                 | `libjvm.dylib`            |
|  0.2% |       3 | `pthread_jit_write_protect_np` | `libsystem_pthread.dylib` |

##### `Parker::park` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location                  |
| ----: | ------: | ------------------------------- | ------------------------- |
| 99.6% |   1,618 | `__psynch_cvwait`               | `libsystem_kernel.dylib`  |
|  0.2% |       4 | `SafepointMechanism::process`   | `libjvm.dylib`            |
|  0.1% |       1 | `_pthread_cond_wait`            | `libsystem_pthread.dylib` |
|  0.1% |       1 | `java_lang_Thread::interrupted` | `libjvm.dylib`            |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |   1,589 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 31.0% |     447 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
| 13.8% |     199 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib` |
| 13.8% |     199 | `signal_thread_entry`                                    | `libjvm.dylib` |
| 13.8% |     199 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| 13.8% |     199 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee                                                    | Location                                      |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 75.1% |   1,026 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 38.8% |     530 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
| 20.9% |     286 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  0.1% |       1 | `signalWaiters()`                                         | `java.util.concurrent.ForkJoinTask`           |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Callee                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |   1,362 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                               | Location                                      |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 99.7% |   1,239 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  0.2% |       2 | `signalWork()`                                       | `java.util.concurrent.ForkJoinPool`           |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee      | Location                                            |
| ----: | ------: | ----------- | --------------------------------------------------- |
| 99.5% |   1,233 | `exec()`    | `java.util.concurrent.RecursiveTask`                |
| 14.0% |     174 | `exec()`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  0.6% |       7 | `setDone()` | `java.util.concurrent.ForkJoinTask`                 |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   1,239 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|     % | Samples | Callee      | Location                                               |
| ----: | ------: | ----------- | ------------------------------------------------------ |
| 99.9% |   1,232 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 96.7% |   1,191 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 33.8% |     416 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 26.8% |     330 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 16.5% |     203 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  9.0% |     111 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |   1,191 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   1,026 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee            | Location                                 |
| ----: | ------: | ----------------- | ---------------------------------------- |
| 92.1% |     832 | `park()`          | `java.util.concurrent.locks.LockSupport` |
|  7.9% |      71 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `Monitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee                                                                        | Location       |
| ----: | ------: | ----------------------------------------------------------------------------- | -------------- |
| 99.8% |     623 | `PlatformMonitor::wait`                                                       | `libjvm.dylib` |
|  0.2% |       1 | `ThreadBlockInVMPreprocess<InFlightMutexRelease>::~ThreadBlockInVMPreprocess` | `libjvm.dylib` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 33.3% |     199 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| 33.3% |     199 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |
| 33.3% |     199 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |     416 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  66.3% |     276 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  33.7% |     140 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `JLI_Launch` (`libjli.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 50.0% |     199 | `ContinueInNewThread`        | `libjli.dylib` |
| 50.0% |     199 | `CreateExecutionEnvironment` | `libjli.dylib` |

##### `main` (`java`)

|      % | Samples | Callee       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |     398 | `JLI_Launch` | `libjli.dylib` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                           | Location                                                  |
| ----: | ------: | -------------------------------- | --------------------------------------------------------- |
| 58.2% |     192 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 10.6% |      35 | `get(int)`                       | `java.util.ArrayList`                                     |
|  0.3% |       1 | `InterpreterRuntime::newarray`   | `libjvm.dylib`                                            |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Callee              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     330 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |     330 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     326 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                         | Location                            |
| ----: | ------: | ------------------------------ | ----------------------------------- |
| 98.6% |     282 | `doExec()`                     | `java.util.concurrent.ForkJoinTask` |
|  0.7% |       2 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                         | Location                                                   |
| ----: | ------: | ------------------------------ | ---------------------------------------------------------- |
| 58.7% |     162 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  4.0% |      11 | `get(int)`                     | `java.util.ArrayList`                                      |
|  0.7% |       2 | `zero_blocks`                  | `<unknown>`                                                |
|  0.4% |       1 | `SafepointBlob`                | `<unknown>`                                                |
|  0.4% |       1 | `_new_array_Java`              | `<unknown>`                                                |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee                | Location                                               |
| ----: | ------: | --------------------- | ------------------------------------------------------ |
| 99.5% |     202 | `average(List)`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.5% |       1 | `put(Object, Object)` | `java.util.HashMap`                                    |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     203 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     203 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee                  | Location                            |
| ----: | ------: | ----------------------- | ----------------------------------- |
| 99.5% |     201 | `invoke()`              | `java.util.concurrent.ForkJoinTask` |
|  0.5% |       1 | `I2C/C2I adapters(0xb)` | `<unknown>`                         |

##### `CallJavaMainInNewThread` (`libjli.dylib`)

|      % | Samples | Callee         | Location                 |
| -----: | ------: | -------------- | ------------------------ |
| 100.0% |     199 | `__ulock_wait` | `libsystem_kernel.dylib` |

##### `ContinueInNewThread` (`libjli.dylib`)

|      % | Samples | Callee                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |     199 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `apple_main` (`libjli.dylib`)

|      % | Samples | Callee | Location |
| -----: | ------: | ------ | -------- |
| 100.0% |     199 | `main` | `java`   |

##### `wait0(long)` (`java.lang.Object`)

|      % | Samples | Callee            | Location       |
| -----: | ------: | ----------------- | -------------- |
| 100.0% |     199 | `JVM_MonitorWait` | `libjvm.dylib` |

##### `wait(long)` (`java.lang.Object`)

|      % | Samples | Callee        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |     199 | `wait0(long)` | `java.lang.Object` |

##### `wait()` (`java.lang.Object`)

|      % | Samples | Callee       | Location           |
| -----: | ------: | ------------ | ------------------ |
| 100.0% |     199 | `wait(long)` | `java.lang.Object` |

##### `await()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Callee   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |     199 | `wait()` | `java.lang.Object` |

##### `remove0()` (`java.lang.ref.ReferenceQueue`)

|      % | Samples | Callee    | Location                             |
| -----: | ------: | --------- | ------------------------------------ |
| 100.0% |     199 | `await()` | `java.lang.ref.NativeReferenceQueue` |

##### `remove()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Callee      | Location                       |
| -----: | ------: | ----------- | ------------------------------ |
| 100.0% |     199 | `remove0()` | `java.lang.ref.ReferenceQueue` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee                               | Location                            |
| ----: | ------: | ------------------------------------ | ----------------------------------- |
| 99.0% |     194 | `invoke(Object, Object[])`           | `java.lang.reflect.Method`          |
|  0.5% |       1 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |
|  0.5% |       1 | `loadClass(String)`                  | `java.lang.ClassLoader`             |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Callee                                                      | Location                        |
| -----: | ------: | ----------------------------------------------------------- | ------------------------------- |
| 100.0% |     196 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Callee                                 | Location                        |
| -----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% |     196 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|     % | Samples | Callee                                                                        | Location                                    |
| ----: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 96.4% |     187 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|  1.0% |       2 | `<clinit>()`                                                                  | `scala.Predef$`                             |
|  1.0% |       2 | `parse(String[])`                                                             | `org.renaissance.harness.ConfigParser`      |
|  0.5% |       1 | `loadClass(String)`                                                           | `java.lang.ClassLoader`                     |
|  0.5% |       1 | `<init>(Map)`                                                                 | `org.renaissance.harness.ConfigParser`      |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % | Samples | Callee           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     194 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|     % | Samples | Callee                                                        | Location                               |
| ----: | ------: | ------------------------------------------------------------- | -------------------------------------- |
| 99.5% |     186 | `foreach(Function1)`                                          | `scala.collection.immutable.List`      |
|  0.5% |       1 | `linkMethodHandleConstant(Class, int, Class, String, Object)` | `java.lang.invoke.MethodHandleNatives` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|     % | Samples | Callee                                                                                       | Location                                  |
| ----: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 99.5% |     185 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|  0.5% |       1 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0`)

|      % | Samples | Callee                                                                                                                 | Location                                    |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% |     186 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|     % | Samples | Callee                             | Location                                  |
| ----: | ------: | ---------------------------------- | ----------------------------------------- |
| 96.8% |     179 | `executeOperation(int)`            | `org.renaissance.harness.ExecutionDriver` |
|  3.2% |       6 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|     % | Samples | Callee                                            | Location                                  |
| ----: | ------: | ------------------------------------------------- | ----------------------------------------- |
| 98.3% |     176 | `run(BenchmarkContext)`                           | `org.renaissance.jdk.concurrent.FjKmeans` |
|  1.7% |       3 | `notifyAfterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.EventDispatcher` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee  | Location                            |
| -----: | ------: | ------- | ----------------------------------- |
| 100.0% |     176 | `get()` | `java.util.concurrent.ForkJoinTask` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 23.7% |   1,859 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 10.5% |     826 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  5.3% |     417 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.5% |     199 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  2.5% |     199 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  2.5% |     199 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.5% |     199 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.5% |     199 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.5% |     199 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.5% |     199 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.5% |     199 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  2.5% |     199 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  2.5% |     199 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.5% |     199 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  2.5% |     198 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  2.5% |     198 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  2.5% |     198 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  2.4% |     191 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.2% |     176 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000070011a27f0`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
|  1.5% |     119 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

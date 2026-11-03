# Sampling profile

Collected 15,608 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 91.9% |  14,345 |
| Ours             |  6.0% |     941 |
| Standard library |  1.5% |     241 |
| JIT              |  0.4% |      62 |
| Compiler         |  0.1% |      19 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 9,096 samples (58.3%) thread_start at libsystem_pthread.dylib
│   └── 9,096 samples (58.3%) _pthread_start
│       ├── 8,690 samples (55.7%) thread_native_entry at libjvm.dylib
│       │   └── 8,690 samples (55.7%) Thread::call_run
│       │       ├── 3,818 samples (24.5%) WorkerThread::run
│       │       │   └── 3,796 samples (24.3%, self 27.4% globally) semaphore_wait_trap at libsystem_kernel.dylib
│       │       ├── 2,847 samples (18.2%) JavaThread::thread_main_inner
│       │       │   └── 2,847 samples (18.2%) 6 more callees, led by (5.3%) CompileBroker::compiler_thread_loop
│       │       ├── 1,215 samples (7.8%) ConcurrentGCThread::run
│       │       │   └── 1,215 samples (7.8%) 3 more callees, led by (2.6%) G1ServiceThread::run_service
│       │       └── 810 samples (5.2%) 2 more callees, led by (2.6%) WatcherThread::run
│       └── … 405 samples (2.6%) __ulock_wait at libsystem_kernel.dylib
├── 4,486 samples (28.7%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 4,486 samples (28.7%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       ├── 2,331 samples (14.9%) awaitWork(ForkJoinPool$WorkQueue)
│       │   ├── … 2,050 samples (13.1%, self 57.4% globally) __psynch_cvwait at libsystem_kernel.dylib
│       │   └── 263 samples (1.7%) parkUntil(long) at java.util.concurrent.locks.LockSupport …
│       └── … 2,136 samples (13.7%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│           ├── 675 samples (4.3%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│           │   ├── … 465 samples (3.0%, self 0.7%) findNearestCentroid() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│           │   │   └── 311 samples (2.0%, self 1.9%) distance(Double[], Double[])
│           │   └── … 210 samples (1.3%) collectClusters(int[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│           │       ├── … 68 samples (0.4%) grow(int) at java.util.ArrayList
│           │       │   └── … 20 samples (0.1%) __psynch_mutexwait at libsystem_kernel.dylib
│           │       ├── 46 samples (0.3%) computeIfAbsent(Object, Function) at java.util.HashMap
│           │       └── 18 samples (0.1%) get(int) at java.util.ArrayList
│           │           └── 9 samples (0.1%) checkIndex(int, int) at java.util.Objects
│           ├── 537 samples (3.4%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│           │   └── … 537 samples (3.4%, self 1.2%) vectorSum() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│           │       ├── 321 samples (2.1%, self 1.8%) accumulate(Double[], double[])
│           │       │   └── 42 samples (0.3%) doubleValue() at java.lang.Double
│           │       └── 26 samples (0.2%) get(int) at java.util.ArrayList
│           │           └── 26 samples (0.2%) elementData(int)
│           ├── … 201 samples (1.3%) lambda$merge$6(List, List) at org.renaissance.jdk.concurrent.JavaKMeans
│           │   ├── 104 samples (0.7%) <init>(Collection) at java.util.ArrayList
│           │   │   └── 35 samples (0.2%) zero_blocks
│           │   └── … 34 samples (0.2%) forward_copy_longs
│           └── 711 samples (4.6%) 10 more callees, led by (4.4%) join() at java.util.concurrent.ForkJoinTask
├── … 405 samples (2.6%) mach_msg2_trap at libsystem_kernel.dylib
└── 1,621 samples (10.4%) 9 more root frames, led by (2.6%) run() at java.lang.ref.Finalizer$FinalizerThread
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                            | Location                                                   |
| ----: | ------: | ----------------------------------- | ---------------------------------------------------------- |
| 57.4% |   8,964 | `__psynch_cvwait`                   | `libsystem_kernel.dylib`                                   |
| 27.4% |   4,281 | `semaphore_wait_trap`               | `libsystem_kernel.dylib`                                   |
|  2.6% |     405 | `mach_msg2_trap`                    | `libsystem_kernel.dylib`                                   |
|  2.6% |     405 | `__ulock_wait`                      | `libsystem_kernel.dylib`                                   |
|  1.9% |     302 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.8% |     279 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  1.2% |     190 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.7% |     116 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.6% |      97 | `forward_copy_longs`                | `<unknown>`                                                |
|  0.5% |      72 | `__psynch_mutexwait`                | `libsystem_kernel.dylib`                                   |
|  0.4% |      59 | `zero_blocks`                       | `<unknown>`                                                |
|  0.4% |      56 | `elementData(int)`                  | `java.util.ArrayList`                                      |
|  0.3% |      47 | `doubleValue()`                     | `java.lang.Double`                                         |
|  0.3% |      46 | `collectClusters(int[])`            | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |      40 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`                                        |
|  0.1% |      16 | `grow(int)`                         | `java.util.ArrayList`                                      |
|  0.1% |      16 | `add(Object, Object[], int)`        | `java.util.ArrayList`                                      |
|  0.1% |      16 | `__psynch_cvsignal`                 | `libsystem_kernel.dylib`                                   |
|  0.1% |      12 | `_platform_bzero`                   | `libsystem_platform.dylib`                                 |
|  0.1% |       9 | `ObjArrayAllocator::initialize`     | `libjvm.dylib`                                             |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                                        | Location                   |
| ----: | ------: | --------------------------------------------------------------- | -------------------------- |
| 57.4% |   8,964 | `__psynch_cvwait`                                               | `libsystem_kernel.dylib`   |
| 27.4% |   4,281 | `semaphore_wait_trap`                                           | `libsystem_kernel.dylib`   |
|  2.6% |     405 | `mach_msg2_trap`                                                | `libsystem_kernel.dylib`   |
|  2.6% |     405 | `__ulock_wait`                                                  | `libsystem_kernel.dylib`   |
|  0.6% |      97 | `forward_copy_longs`                                            | `<unknown>`                |
|  0.5% |      72 | `__psynch_mutexwait`                                            | `libsystem_kernel.dylib`   |
|  0.1% |      16 | `__psynch_cvsignal`                                             | `libsystem_kernel.dylib`   |
|  0.1% |      12 | `_platform_bzero`                                               | `libsystem_platform.dylib` |
|  0.1% |       9 | `ObjArrayAllocator::initialize`                                 | `libjvm.dylib`             |
| <0.1% |       4 | `arrayof_jint_disjoint_arraycopy`                               | `<unknown>`                |
| <0.1% |       4 | `_platform_memset`                                              | `libsystem_platform.dylib` |
| <0.1% |       4 | `pthread_jit_write_protect_np`                                  | `libsystem_pthread.dylib`  |
| <0.1% |       4 | `__mmap`                                                        | `libsystem_kernel.dylib`   |
| <0.1% |       4 | `G1FullGCMarker::mark_object`                                   | `libjvm.dylib`             |
| <0.1% |       4 | `swtch_pri`                                                     | `libsystem_kernel.dylib`   |
| <0.1% |       3 | `InstanceKlass::find_method_index`                              | `libjvm.dylib`             |
| <0.1% |       2 | `arrayof_oop_disjoint_arraycopy`                                | `<unknown>`                |
| <0.1% |       2 | `ObjArrayKlass::array_klass`                                    | `libjvm.dylib`             |
| <0.1% |       2 | `G1RegionMarkStatsCache::add_live_words`                        | `libjvm.dylib`             |
| <0.1% |       2 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib`             |

##### Ours

|     % | Samples | Function                         | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
|  1.9% |     302 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.8% |     279 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  1.2% |     190 | `vectorSum()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  0.7% |     116 | `findNearestCentroid()`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  0.3% |      46 | `collectClusters(int[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% |       2 | `lambda$merge$6(List, List)`     | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| <0.1% |       1 | `compute()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
| <0.1% |       1 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |       1 | `forkThreshold()`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |       1 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| <0.1% |       1 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| <0.1% |       1 | `add(double[], double[])`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Standard library

|     % | Samples | Function                                                         | Location                                      |
| ----: | ------: | ---------------------------------------------------------------- | --------------------------------------------- |
|  0.4% |      56 | `elementData(int)`                                               | `java.util.ArrayList`                         |
|  0.3% |      47 | `doubleValue()`                                                  | `java.lang.Double`                            |
|  0.3% |      40 | `computeIfAbsent(Object, Function)`                              | `java.util.HashMap`                           |
|  0.1% |      16 | `grow(int)`                                                      | `java.util.ArrayList`                         |
|  0.1% |      16 | `add(Object, Object[], int)`                                     | `java.util.ArrayList`                         |
|  0.1% |       9 | `checkIndex(int, int)`                                           | `java.util.Objects`                           |
|  0.1% |       8 | `grow()`                                                         | `java.util.ArrayList`                         |
| <0.1% |       6 | `hash(Object)`                                                   | `java.util.HashMap`                           |
| <0.1% |       4 | `tryRemoveAndExec(ForkJoinTask, boolean)`                        | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| <0.1% |       4 | `forEach(BiConsumer)`                                            | `java.util.HashMap`                           |
| <0.1% |       3 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)`        | `java.util.concurrent.ForkJoinPool`           |
| <0.1% |       3 | `runWorker(ForkJoinPool$WorkQueue)`                              | `java.util.concurrent.ForkJoinPool`           |
| <0.1% |       3 | `<init>(Collection)`                                             | `java.util.ArrayList`                         |
| <0.1% |       1 | `toByteArray()`                                                  | `jdk.internal.org.objectweb.asm.ClassWriter`  |
| <0.1% |       1 | `guard_LI_I(VarHandle, Object, int, VarHandle$AccessDescriptor)` | `java.lang.invoke.VarHandleGuards`            |
| <0.1% |       1 | `<init>(int, String, int, int)`                                  | `jdk.internal.org.objectweb.asm.Type`         |
| <0.1% |       1 | `finer(Supplier)`                                                | `java.util.logging.Logger`                    |
| <0.1% |       1 | `readLine(byte[], int, int)`                                     | `java.util.jar.Manifest$FastInputStream`      |
| <0.1% |       1 | `defineClass(String, byte[], int, int, CodeSource)`              | `java.security.SecureClassLoader`             |
| <0.1% |       1 | `of(Object, Object)`                                             | `java.util.Set`                               |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 64.6% |     195 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |
| 33.1% |     100 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:249` |
|  2.3% |       7 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:250` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 92.5% |     258 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412` |
|  7.5% |      21 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Location                                                      |
| ----: | ------: | ------------------------------------------------------------- |
| 96.3% |     183 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |
|  3.7% |       7 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 55.2% |      64 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:231` |
| 26.7% |      31 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |
| 10.3% |      12 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
|  5.2% |       6 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226` |
|  2.6% |       3 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |

##### `elementData(int)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |      56 | `java.util.ArrayList:411` |

##### `doubleValue()` (`java.lang.Double`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |      47 | `java.lang.Double:1001` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Location                                                       |
| ----: | ------: | -------------------------------------------------------------- |
| 26.1% |      12 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214` |
| 23.9% |      11 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213` |
| 23.9% |      11 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
| 13.0% |       6 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:212` |
| 13.0% |       6 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|     % | Samples | Location                 |
| ----: | ------: | ------------------------ |
| 30.0% |      12 | `java.util.HashMap:1213` |
| 20.0% |       8 | `java.util.HashMap:1204` |
| 15.0% |       6 | `java.util.HashMap:1197` |
| 12.5% |       5 | `java.util.HashMap:1219` |
| 12.5% |       5 | `java.util.HashMap:1207` |

##### `grow(int)` (`java.util.ArrayList`)

|     % | Samples | Location                  |
| ----: | ------: | ------------------------- |
| 93.8% |      15 | `java.util.ArrayList:239` |
|  6.3% |       1 | `java.util.ArrayList:232` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|     % | Samples | Location                  |
| ----: | ------: | ------------------------- |
| 75.0% |      12 | `java.util.ArrayList:484` |
| 25.0% |       4 | `java.util.ArrayList:482` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       9 | `java.util.Objects:385` |

##### `grow()` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       8 | `java.util.ArrayList:244` |

##### `hash(Object)` (`java.util.HashMap`)

|      % | Samples | Location                |
| -----: | ------: | ----------------------- |
| 100.0% |       6 | `java.util.HashMap:338` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|     % | Samples | Location                                           |
| ----: | ------: | -------------------------------------------------- |
| 50.0% |       2 | `java.util.concurrent.ForkJoinPool$WorkQueue:1343` |
| 25.0% |       1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1347` |
| 25.0% |       1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1334` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       4 | `java.util.HashMap:1428` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Location                                 |
| ----: | ------: | ---------------------------------------- |
| 66.7% |       2 | `java.util.concurrent.ForkJoinPool:2055` |
| 33.3% |       1 | `java.util.concurrent.ForkJoinPool:2041` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Location                                 |
| -----: | ------: | ---------------------------------------- |
| 100.0% |       3 | `java.util.concurrent.ForkJoinPool:1809` |

##### `<init>(Collection)` (`java.util.ArrayList`)

|      % | Samples | Location                  |
| -----: | ------: | ------------------------- |
| 100.0% |       3 | `java.util.ArrayList:184` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Location                                        |
| -----: | ------: | ----------------------------------------------- |
| 100.0% |       2 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:146` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:309` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:303` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Location                                                   |
| -----: | ------: | ---------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:352` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Location                                                       |
| -----: | ------: | -------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Location                                                      |
| -----: | ------: | ------------------------------------------------------------- |
| 100.0% |       1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:433` |

##### `toByteArray()` (`jdk.internal.org.objectweb.asm.ClassWriter`)

|      % | Samples | Location                                         |
| -----: | ------: | ------------------------------------------------ |
| 100.0% |       1 | `jdk.internal.org.objectweb.asm.ClassWriter:662` |

##### `guard_LI_I(VarHandle, Object, int, VarHandle$AccessDescriptor)` (`java.lang.invoke.VarHandleGuards`)

|      % | Samples | Location                               |
| -----: | ------: | -------------------------------------- |
| 100.0% |       1 | `java.lang.invoke.VarHandleGuards:162` |

##### `<init>(int, String, int, int)` (`jdk.internal.org.objectweb.asm.Type`)

|      % | Samples | Location                                  |
| -----: | ------: | ----------------------------------------- |
| 100.0% |       1 | `jdk.internal.org.objectweb.asm.Type:191` |

##### `finer(Supplier)` (`java.util.logging.Logger`)

|      % | Samples | Location                        |
| -----: | ------: | ------------------------------- |
| 100.0% |       1 | `java.util.logging.Logger:1965` |

##### `readLine(byte[], int, int)` (`java.util.jar.Manifest$FastInputStream`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `java.util.jar.Manifest$FastInputStream:478` |

##### `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`)

|      % | Samples | Location                              |
| -----: | ------: | ------------------------------------- |
| 100.0% |       1 | `java.security.SecureClassLoader:150` |

##### `of(Object, Object)` (`java.util.Set`)

|      % | Samples | Location            |
| -----: | ------: | ------------------- |
| 100.0% |       1 | `java.util.Set:487` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                      | Location                 |
| ----: | ------: | --------------------------- | ------------------------ |
| 49.3% |   4,415 | `PlatformMonitor::wait`     | `libjvm.dylib`           |
| 41.7% |   3,738 | `Parker::park`              | `libjvm.dylib`           |
|  4.5% |     406 | `PlatformEvent::park`       | `libjvm.dylib`           |
|  4.5% |     404 | `Profiler::timerLoop`       | `libasyncProfiler.dylib` |
| <0.1% |       1 | `PlatformEvent::park_nanos` | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 88.7% |   3,796 | `WorkerThread::run`              | `libjvm.dylib` |
|  9.5% |     405 | `os::signal_wait`                | `libjvm.dylib` |
|  1.3% |      56 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
|  0.6% |      24 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% |     405 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                    | Location       |
| -----: | ------: | ------------------------- | -------------- |
| 100.0% |     405 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller                  | Location                                                   |
| -----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 100.0% |     302 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller        | Location                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------- |
| 100.0% |     279 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     190 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     116 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `forward_copy_longs` (`<unknown>`)

|     % | Samples | Caller                            | Location    |
| ----: | ------: | --------------------------------- | ----------- |
| 84.5% |      82 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| 15.5% |      15 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location                  |
| -----: | ------: | ----------------------------------- | ------------------------- |
| 100.0% |      72 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `zero_blocks` (`<unknown>`)

|     % | Samples | Caller                  | Location                                                   |
| ----: | ------: | ----------------------- | ---------------------------------------------------------- |
| 59.3% |      35 | `<init>(Collection)`    | `java.util.ArrayList`                                      |
| 33.9% |      20 | `grow(int)`             | `java.util.ArrayList`                                      |
|  5.1% |       3 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.7% |       1 | `copyOf(byte[], int)`   | `java.util.Arrays`                                         |

##### `elementData(int)` (`java.util.ArrayList`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |      56 | `get(int)` | `java.util.ArrayList` |

##### `doubleValue()` (`java.lang.Double`)

|     % | Samples | Caller                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 89.4% |      42 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 10.6% |       5 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |      46 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

|      % | Samples | Caller                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |      40 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `grow(int)` (`java.util.ArrayList`)

|      % | Samples | Caller   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% |      16 | `grow()` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|      % | Samples | Caller        | Location              |
| -----: | ------: | ------------- | --------------------- |
| 100.0% |      16 | `add(Object)` | `java.util.ArrayList` |

##### `__psynch_cvsignal` (`libsystem_kernel.dylib`)

|      % | Samples | Caller          | Location       |
| -----: | ------: | --------------- | -------------- |
| 100.0% |      16 | `Unsafe_Unpark` | `libjvm.dylib` |

##### `_platform_bzero` (`libsystem_platform.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |      12 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `ObjArrayAllocator::initialize` (`libjvm.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |       9 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `checkIndex(int, int)` (`java.util.Objects`)

|      % | Samples | Caller     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |       9 | `get(int)` | `java.util.ArrayList` |

##### `grow()` (`java.util.ArrayList`)

|      % | Samples | Caller                       | Location              |
| -----: | ------: | ---------------------------- | --------------------- |
| 100.0% |       8 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `hash(Object)` (`java.util.HashMap`)

|     % | Samples | Caller                              | Location            |
| ----: | ------: | ----------------------------------- | ------------------- |
| 83.3% |       5 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |
| 16.7% |       1 | `put(Object, Object)`               | `java.util.HashMap` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|     % | Samples | Caller                  | Location              |
| ----: | ------: | ----------------------- | --------------------- |
| 50.0% |       2 | `grow(int)`             | `java.util.ArrayList` |
| 25.0% |       1 | `copyOf(Object[], int)` | `java.util.Arrays`    |
| 25.0% |       1 | `<init>(Collection)`    | `java.util.ArrayList` |

##### `_platform_memset` (`libsystem_platform.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |       4 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|     % | Samples | Caller                  | Location       |
| ----: | ------: | ----------------------- | -------------- |
| 75.0% |       3 | `Unsafe_Park`           | `libjvm.dylib` |
| 25.0% |       1 | `Unsafe_PutIntVolatile` | `libjvm.dylib` |

##### `__mmap` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                   | Location       |
| -----: | ------: | ------------------------ | -------------- |
| 100.0% |       4 | `os::pd_uncommit_memory` | `libjvm.dylib` |

##### `G1FullGCMarker::mark_object` (`libjvm.dylib`)

|      % | Samples | Caller                                                          | Location       |
| -----: | ------: | --------------------------------------------------------------- | -------------- |
| 100.0% |       4 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib` |

##### `swtch_pri` (`libsystem_kernel.dylib`)

|      % | Samples | Caller                              | Location       |
| -----: | ------: | ----------------------------------- | -------------- |
| 100.0% |       4 | `TaskTerminator::offer_termination` | `libjvm.dylib` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |       4 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|      % | Samples | Caller            | Location                                    |
| -----: | ------: | ----------------- | ------------------------------------------- |
| 100.0% |       4 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 66.7% |       2 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
| 33.3% |       1 | `InstanceKlass::find_method`            | `libjvm.dylib` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |       3 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |       3 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `<init>(Collection)` (`java.util.ArrayList`)

|      % | Samples | Caller                       | Location                                    |
| -----: | ------: | ---------------------------- | ------------------------------------------- |
| 100.0% |       3 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

|      % | Samples | Caller               | Location              |
| -----: | ------: | -------------------- | --------------------- |
| 100.0% |       2 | `addAll(Collection)` | `java.util.ArrayList` |

##### `ObjArrayKlass::array_klass` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |       2 | `OptoRuntime::new_array_C` | `libjvm.dylib` |

##### `G1RegionMarkStatsCache::add_live_words` (`libjvm.dylib`)

|      % | Samples | Caller                        | Location       |
| -----: | ------: | ----------------------------- | -------------- |
| 100.0% |       2 | `G1FullGCMarker::mark_object` | `libjvm.dylib` |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 50.0% |       1 | `G1FullGCMarker::complete_marking`      | `libjvm.dylib` |
| 50.0% |       1 | `G1FullGCMarker::follow_marking_stacks` | `libjvm.dylib` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller                  | Location                                                               |
| -----: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| 100.0% |       2 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a7000` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller   | Location                             |
| -----: | ------: | -------- | ------------------------------------ |
| 100.0% |       1 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller              | Location                                               |
| -----: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% |       1 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |       1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller                               | Location                                                  |
| -----: | ------: | ------------------------------------ | --------------------------------------------------------- |
| 100.0% |       1 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `toByteArray()` (`jdk.internal.org.objectweb.asm.ClassWriter`)

|      % | Samples | Caller          | Location                                    |
| -----: | ------: | --------------- | ------------------------------------------- |
| 100.0% |       1 | `toByteArray()` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `guard_LI_I(VarHandle, Object, int, VarHandle$AccessDescriptor)` (`java.lang.invoke.VarHandleGuards`)

|      % | Samples | Caller                  | Location                      |
| -----: | ------: | ----------------------- | ----------------------------- |
| 100.0% |       1 | `getShort(byte[], int)` | `jdk.internal.util.ByteArray` |

##### `<init>(int, String, int, int)` (`jdk.internal.org.objectweb.asm.Type`)

|      % | Samples | Caller                              | Location                              |
| -----: | ------: | ----------------------------------- | ------------------------------------- |
| 100.0% |       1 | `getTypeInternal(String, int, int)` | `jdk.internal.org.objectweb.asm.Type` |

##### `finer(Supplier)` (`java.util.logging.Logger`)

|      % | Samples | Caller                          | Location                             |
| -----: | ------: | ------------------------------- | ------------------------------------ |
| 100.0% |       1 | `extractResource(String, Path)` | `org.renaissance.core.ResourceUtils` |

##### `readLine(byte[], int, int)` (`java.util.jar.Manifest$FastInputStream`)

|      % | Samples | Caller             | Location                                 |
| -----: | ------: | ------------------ | ---------------------------------------- |
| 100.0% |       1 | `readLine(byte[])` | `java.util.jar.Manifest$FastInputStream` |

##### `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`)

|      % | Samples | Caller                          | Location                  |
| -----: | ------: | ------------------------------- | ------------------------- |
| 100.0% |       1 | `defineClass(String, Resource)` | `java.net.URLClassLoader` |

##### `of(Object, Object)` (`java.util.Set`)

|      % | Samples | Caller                 | Location                                       |
| -----: | ------: | ---------------------- | ---------------------------------------------- |
| 100.0% |       1 | `generateInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                             | Location                                      |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 58.3% |   9,096 | `_pthread_start`                                     | `libsystem_pthread.dylib`                     |
| 58.3% |   9,096 | `thread_start`                                       | `libsystem_pthread.dylib`                     |
| 57.4% |   8,964 | `__psynch_cvwait`                                    | `libsystem_kernel.dylib`                      |
| 55.7% |   8,690 | `Thread::call_run`                                   | `libjvm.dylib`                                |
| 55.7% |   8,690 | `thread_native_entry`                                | `libjvm.dylib`                                |
| 28.7% |   4,486 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`           |
| 28.7% |   4,486 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`   |
| 28.3% |   4,416 | `PlatformMonitor::wait`                              | `libjvm.dylib`                                |
| 27.4% |   4,281 | `semaphore_wait_trap`                                | `libsystem_kernel.dylib`                      |
| 24.5% |   3,818 | `WorkerThread::run`                                  | `libjvm.dylib`                                |
| 24.1% |   3,768 | `park(boolean, long)`                                | `jdk.internal.misc.Unsafe`                    |
| 24.1% |   3,767 | `Unsafe_Park`                                        | `libjvm.dylib`                                |
| 24.1% |   3,762 | `Parker::park`                                       | `libjvm.dylib`                                |
| 20.5% |   3,207 | `Monitor::wait_without_safepoint_check`              | `libjvm.dylib`                                |
| 19.9% |   3,102 | `park()`                                             | `java.util.concurrent.locks.LockSupport`      |
| 18.2% |   2,847 | `JavaThread::thread_main_inner`                      | `libjvm.dylib`                                |
| 15.5% |   2,426 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`           |
| 14.9% |   2,331 | `awaitWork(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`           |
| 13.8% |   2,152 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`           |
| 13.8% |   2,150 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Native

|     % | Samples | Function                                | Location                  |
| ----: | ------: | --------------------------------------- | ------------------------- |
| 58.3% |   9,096 | `_pthread_start`                        | `libsystem_pthread.dylib` |
| 58.3% |   9,096 | `thread_start`                          | `libsystem_pthread.dylib` |
| 57.4% |   8,964 | `__psynch_cvwait`                       | `libsystem_kernel.dylib`  |
| 55.7% |   8,690 | `Thread::call_run`                      | `libjvm.dylib`            |
| 55.7% |   8,690 | `thread_native_entry`                   | `libjvm.dylib`            |
| 28.3% |   4,416 | `PlatformMonitor::wait`                 | `libjvm.dylib`            |
| 27.4% |   4,281 | `semaphore_wait_trap`                   | `libsystem_kernel.dylib`  |
| 24.5% |   3,818 | `WorkerThread::run`                     | `libjvm.dylib`            |
| 24.1% |   3,767 | `Unsafe_Park`                           | `libjvm.dylib`            |
| 24.1% |   3,762 | `Parker::park`                          | `libjvm.dylib`            |
| 20.5% |   3,207 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`            |
| 18.2% |   2,847 | `JavaThread::thread_main_inner`         | `libjvm.dylib`            |
|  7.8% |   1,215 | `ConcurrentGCThread::run`               | `libjvm.dylib`            |
|  7.8% |   1,214 | `Monitor::wait`                         | `libjvm.dylib`            |
|  5.2% |     810 | `JLI_Launch`                            | `libjli.dylib`            |
|  5.2% |     810 | `main`                                  | `java`                    |
|  2.6% |     406 | `PlatformEvent::park`                   | `libjvm.dylib`            |
|  2.6% |     406 | `ObjectMonitor::wait`                   | `libjvm.dylib`            |
|  2.6% |     406 | `ObjectSynchronizer::wait`              | `libjvm.dylib`            |
|  2.6% |     406 | `JVM_MonitorWait`                       | `libjvm.dylib`            |

##### Ours

|     % | Samples | Function                                                                                                               | Location                                                               |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| 13.7% |   2,139 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|  4.3% |     675 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  3.4% |     537 | `vectorSum()`                                                                                                          | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  3.4% |     537 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`              |
|  3.0% |     465 | `findNearestCentroid()`                                                                                                | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  2.6% |     401 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  2.6% |     400 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  2.6% |     399 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  2.6% |     399 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  2.5% |     398 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  2.5% |     397 | `average(List)`                                                                                                        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  2.5% |     396 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  2.5% |     393 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  2.4% |     377 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  2.4% |     376 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|  2.4% |     376 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000040111f1b8` |
|  2.4% |     375 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  2.3% |     366 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  2.3% |     359 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  2.3% |     359 | `$anonfun$2(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |

##### Standard library

|     % | Samples | Function                                                  | Location                                      |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 28.7% |   4,486 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| 28.7% |   4,486 | `run()`                                                   | `java.util.concurrent.ForkJoinWorkerThread`   |
| 24.1% |   3,768 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                    |
| 19.9% |   3,102 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
| 15.5% |   2,426 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
| 14.9% |   2,331 | `awaitWork(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
| 13.8% |   2,152 | `scan(ForkJoinPool$WorkQueue, int, int)`                  | `java.util.concurrent.ForkJoinPool`           |
| 13.8% |   2,150 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 13.8% |   2,149 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
| 13.7% |   2,139 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`          |
| 13.2% |   2,067 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`           |
| 11.4% |   1,787 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  4.1% |     644 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  2.8% |     434 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  2.6% |     406 | `wait0(long)`                                             | `java.lang.Object`                            |
|  2.6% |     406 | `wait(long)`                                              | `java.lang.Object`                            |
|  2.6% |     406 | `runWith(Object, Runnable)`                               | `java.lang.Thread`                            |
|  2.6% |     406 | `run()`                                                   | `java.lang.Thread`                            |
|  2.6% |     405 | `wait()`                                                  | `java.lang.Object`                            |
|  2.6% |     405 | `await()`                                                 | `java.lang.ref.NativeReferenceQueue`          |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Caller         | Location                  |
| -----: | ------: | -------------- | ------------------------- |
| 100.0% |   9,096 | `thread_start` | `libsystem_pthread.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                      | Location                 |
| ----: | ------: | --------------------------- | ------------------------ |
| 49.3% |   4,415 | `PlatformMonitor::wait`     | `libjvm.dylib`           |
| 41.7% |   3,738 | `Parker::park`              | `libjvm.dylib`           |
|  4.5% |     406 | `PlatformEvent::park`       | `libjvm.dylib`           |
|  4.5% |     404 | `Profiler::timerLoop`       | `libasyncProfiler.dylib` |
| <0.1% |       1 | `PlatformEvent::park_nanos` | `libjvm.dylib`           |

##### `Thread::call_run` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |   8,690 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Caller           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   8,690 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller  | Location                                    |
| -----: | ------: | ------- | ------------------------------------------- |
| 100.0% |   4,486 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 72.6% |   3,207 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |
| 27.4% |   1,209 | `Monitor::wait`                         | `libjvm.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|     % | Samples | Caller                           | Location       |
| ----: | ------: | -------------------------------- | -------------- |
| 88.7% |   3,796 | `WorkerThread::run`              | `libjvm.dylib` |
|  9.5% |     405 | `os::signal_wait`                | `libjvm.dylib` |
|  1.3% |      56 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
|  0.6% |      24 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   3,818 | `Thread::call_run` | `libjvm.dylib` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % | Samples | Caller                    | Location                                 |
| ----: | ------: | ------------------------- | ---------------------------------------- |
| 82.3% |   3,101 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
| 10.7% |     404 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |
|  7.0% |     263 | `parkUntil(long)`         | `java.util.concurrent.locks.LockSupport` |

##### `Unsafe_Park` (`libjvm.dylib`)

|      % | Samples | Caller                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |   3,767 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `Parker::park` (`libjvm.dylib`)

|      % | Samples | Caller        | Location       |
| -----: | ------: | ------------- | -------------- |
| 100.0% |   3,762 | `Unsafe_Park` | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|     % | Samples | Caller                                                        | Location       |
| ----: | ------: | ------------------------------------------------------------- | -------------- |
| 12.6% |     405 | `G1ConcurrentMarkThread::run_service`                         | `libjvm.dylib` |
| 12.6% |     405 | `WatcherThread::sleep`                                        | `libjvm.dylib` |
| 12.6% |     405 | `MonitorDeflationThread::monitor_deflation_thread_entry`      | `libjvm.dylib` |
| 12.6% |     404 | `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` | `libjvm.dylib` |
| 12.6% |     404 | `NotificationThread::notification_thread_entry`               | `libjvm.dylib` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|     % | Samples | Caller                              | Location                            |
| ----: | ------: | ----------------------------------- | ----------------------------------- |
| 66.7% |   2,068 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |
| 33.3% |   1,034 | `awaitDone(int, long)`              | `java.util.concurrent.ForkJoinTask` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   2,847 | `Thread::call_run` | `libjvm.dylib` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Caller   | Location                            |
| ----: | ------: | -------- | ----------------------------------- |
| 85.2% |   2,067 | `join()` | `java.util.concurrent.ForkJoinTask` |
| 14.8% |     359 | `get()`  | `java.util.concurrent.ForkJoinTask` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |   2,331 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |   2,152 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                                   | Location                            |
| -----: | ------: | ---------------------------------------- | ----------------------------------- |
| 100.0% |   2,150 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller                                                    | Location                                      |
| -----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 100.0% |   2,149 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  83.1% |   1,786 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  30.0% |     644 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  20.1% |     431 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|      % | Samples | Caller   | Location                             |
| -----: | ------: | -------- | ------------------------------------ |
| 100.0% |   2,139 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Caller     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   2,139 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Caller      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |   2,067 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |   1,787 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|      % | Samples | Caller             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   1,215 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|     % | Samples | Caller                            | Location       |
| ----: | ------: | --------------------------------- | -------------- |
| 64.8% |     787 | `CompileQueue::get`               | `libjvm.dylib` |
| 33.4% |     405 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |
|  1.8% |      22 | `VMThread::wait_until_executed`   | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|      % | Samples | Caller | Location |
| -----: | ------: | ------ | -------- |
| 100.0% |     810 | `main` | `java`   |

##### `main` (`java`)

|     % | Samples | Caller       | Location       |
| ----: | ------: | ------------ | -------------- |
| 50.0% |     405 | `unknown`    | `<unknown>`    |
| 50.0% |     405 | `apple_main` | `libjli.dylib` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     675 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 100.0% |     675 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Caller                         | Location                                               |
| ----: | ------: | ------------------------------ | ------------------------------------------------------ |
| 61.5% |     396 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 55.1% |     355 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     537 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Caller              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     537 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |     537 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`    |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Caller              | Location                                                   |
| -----: | ------: | ------------------- | ---------------------------------------------------------- |
| 100.0% |     465 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|      % | Samples | Caller                 | Location                            |
| -----: | ------: | ---------------------- | ----------------------------------- |
| 100.0% |     434 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `PlatformEvent::park` (`libjvm.dylib`)

|      % | Samples | Caller                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |     406 | `ObjectMonitor::wait` | `libjvm.dylib` |

##### `ObjectMonitor::wait` (`libjvm.dylib`)

|      % | Samples | Caller                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     406 | `ObjectSynchronizer::wait` | `libjvm.dylib` |

##### `ObjectSynchronizer::wait` (`libjvm.dylib`)

|      % | Samples | Caller            | Location       |
| -----: | ------: | ----------------- | -------------- |
| 100.0% |     406 | `JVM_MonitorWait` | `libjvm.dylib` |

##### `JVM_MonitorWait` (`libjvm.dylib`)

|      % | Samples | Caller        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |     406 | `wait0(long)` | `java.lang.Object` |

##### `wait0(long)` (`java.lang.Object`)

|      % | Samples | Caller       | Location           |
| -----: | ------: | ------------ | ------------------ |
| 100.0% |     406 | `wait(long)` | `java.lang.Object` |

##### `wait(long)` (`java.lang.Object`)

|     % | Samples | Caller       | Location           |
| ----: | ------: | ------------ | ------------------ |
| 99.8% |     405 | `wait()`     | `java.lang.Object` |
|  0.2% |       1 | `join(long)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % | Samples | Caller  | Location           |
| -----: | ------: | ------- | ------------------ |
| 100.0% |     406 | `run()` | `java.lang.Thread` |

##### `run()` (`java.lang.Thread`)

|     % | Samples | Caller  | Location                            |
| ----: | ------: | ------- | ----------------------------------- |
| 99.5% |     404 | `run()` | `jdk.internal.misc.InnocuousThread` |

##### `wait()` (`java.lang.Object`)

|      % | Samples | Caller    | Location                             |
| -----: | ------: | --------- | ------------------------------------ |
| 100.0% |     405 | `await()` | `java.lang.ref.NativeReferenceQueue` |

##### `await()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Caller      | Location                       |
| -----: | ------: | ----------- | ------------------------------ |
| 100.0% |     405 | `remove0()` | `java.lang.ref.ReferenceQueue` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller              | Location                                               |
| -----: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% |     401 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| 100.0% |     401 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller              | Location                                               |
| -----: | ------: | ------------------- | ------------------------------------------------------ |
| 100.0% |     400 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Caller           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |     399 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Caller                                 | Location                        |
| -----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% |     398 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Caller                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     397 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|      % | Samples | Caller                         | Location                                             |
| -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| 100.0% |     396 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000401004800` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|      % | Samples | Caller           | Location                                   |
| -----: | ------: | ---------------- | ------------------------------------------ |
| 100.0% |     393 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % | Samples | Caller           | Location                                    |
| -----: | ------: | ---------------- | ------------------------------------------- |
| 100.0% |     377 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|      % | Samples | Caller              | Location                                                               |
| -----: | ------: | ------------------- | ---------------------------------------------------------------------- |
| 100.0% |     376 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000040111f1b8` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000040111f1b8`)

|      % | Samples | Caller          | Location                             |
| -----: | ------: | --------------- | ------------------------------------ |
| 100.0% |     376 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|      % | Samples | Caller                                                                                                                 | Location                                    |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% |     375 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|      % | Samples | Caller               | Location                                  |
| -----: | ------: | -------------------- | ----------------------------------------- |
| 100.0% |     366 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Caller            | Location                                  |
| -----: | ------: | ----------------- | ----------------------------------------- |
| 100.0% |     359 | `$anonfun$2(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % | Samples | Caller                       | Location                                  |
| -----: | ------: | ---------------------------- | ----------------------------------------- |
| 100.0% |     359 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 95.5% |   8,690 | `thread_native_entry` | `libjvm.dylib` |
|  4.5% |     405 | `apple_main`          | `libjli.dylib` |
| <0.1% |       1 | `ThreadJavaMain`      | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|      % | Samples | Callee           | Location                  |
| -----: | ------: | ---------------- | ------------------------- |
| 100.0% |   9,096 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|     % | Samples | Callee                          | Location       |
| ----: | ------: | ------------------------------- | -------------- |
| 43.9% |   3,818 | `WorkerThread::run`             | `libjvm.dylib` |
| 32.8% |   2,847 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| 14.0% |   1,215 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
|  4.7% |     405 | `WatcherThread::run`            | `libjvm.dylib` |
|  4.7% |     405 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|      % | Samples | Callee             | Location       |
| -----: | ------: | ------------------ | -------------- |
| 100.0% |   8,690 | `Thread::call_run` | `libjvm.dylib` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                   | Location                            |
| ----: | ------: | ---------------------------------------- | ----------------------------------- |
| 52.0% |   2,331 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |
| 48.0% |   2,152 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|      % | Samples | Callee                              | Location                            |
| -----: | ------: | ----------------------------------- | ----------------------------------- |
| 100.0% |   4,486 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee               | Location                  |
| -----: | ------: | -------------------- | ------------------------- |
| 100.0% |   4,415 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|  <0.1% |       1 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `WorkerThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                            | Location                 |
| ----: | ------: | --------------------------------- | ------------------------ |
| 99.4% |   3,796 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|  0.3% |      10 | `G1FullGCMarkTask::work`          | `libjvm.dylib`           |
|  0.1% |       4 | `G1FullGCPrepareTask::work`       | `libjvm.dylib`           |
|  0.1% |       4 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|  0.1% |       2 | `G1FullGCAdjustTask::work`        | `libjvm.dylib`           |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|      % | Samples | Callee                                | Location       |
| -----: | ------: | ------------------------------------- | -------------- |
| 100.0% |   3,767 | `Unsafe_Park`                         | `libjvm.dylib` |
|  <0.1% |       1 | `java_lang_Thread::set_thread_status` | `libjvm.dylib` |

##### `Unsafe_Park` (`libjvm.dylib`)

|     % | Samples | Callee                         | Location                  |
| ----: | ------: | ------------------------------ | ------------------------- |
| 99.9% |   3,762 | `Parker::park`                 | `libjvm.dylib`            |
|  0.1% |       3 | `pthread_jit_write_protect_np` | `libsystem_pthread.dylib` |
| <0.1% |       1 | `JavaThread::is_interrupted`   | `libjvm.dylib`            |

##### `Parker::park` (`libjvm.dylib`)

|     % | Samples | Callee                        | Location                 |
| ----: | ------: | ----------------------------- | ------------------------ |
| 99.4% |   3,738 | `__psynch_cvwait`             | `libsystem_kernel.dylib` |
|  0.6% |      23 | `SafepointMechanism::process` | `libjvm.dylib`           |
| <0.1% |       1 | `__gettimeofday`              | `libsystem_kernel.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|      % | Samples | Callee                  | Location       |
| -----: | ------: | ----------------------- | -------------- |
| 100.0% |   3,207 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % | Samples | Callee                | Location                   |
| -----: | ------: | --------------------- | -------------------------- |
| 100.0% |   3,101 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|     % | Samples | Callee                                                   | Location       |
| ----: | ------: | -------------------------------------------------------- | -------------- |
| 28.9% |     824 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
| 14.2% |     405 | `signal_thread_entry`                                    | `libjvm.dylib` |
| 14.2% |     405 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| 14.2% |     405 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| 14.2% |     404 | `JvmtiAgentThread::start_function_wrapper`               | `libjvm.dylib` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee                                                    | Location                                      |
| ----: | ------: | --------------------------------------------------------- | --------------------------------------------- |
| 73.7% |   1,787 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| 42.6% |   1,034 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
| 17.9% |     434 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee            | Location                                 |
| ----: | ------: | ----------------- | ---------------------------------------- |
| 88.7% |   2,068 | `park()`          | `java.util.concurrent.locks.LockSupport` |
| 11.3% |     263 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                                               | Location                                      |
| ----: | ------: | ---------------------------------------------------- | --------------------------------------------- |
| 99.9% |   2,150 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| <0.1% |       1 | `signalWork()`                                       | `java.util.concurrent.ForkJoinPool`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |   2,149 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|     % | Samples | Callee      | Location                                            |
| ----: | ------: | ----------- | --------------------------------------------------- |
| 99.5% |   2,139 | `exec()`    | `java.util.concurrent.RecursiveTask`                |
| 16.6% |     356 | `exec()`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  0.6% |      12 | `setDone()` | `java.util.concurrent.ForkJoinTask`                 |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|     % | Samples | Callee                           | Location                                                   |
| ----: | ------: | -------------------------------- | ---------------------------------------------------------- |
| 96.6% |   2,067 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| 31.6% |     675 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 25.1% |     537 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| 18.7% |     401 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  9.9% |     212 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|      % | Samples | Callee      | Location                                               |
| -----: | ------: | ----------- | ------------------------------------------------------ |
| 100.0% |   2,139 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee                           | Location                             |
| -----: | ------: | -------------------------------- | ------------------------------------ |
| 100.0% |   2,067 | `awaitDone(int, long)`           | `java.util.concurrent.ForkJoinTask`  |
|   0.1% |       2 | `counter_overflow Runtime1 stub` | `<unknown>`                          |
|  <0.1% |       1 | `getRawResult()`                 | `java.util.concurrent.RecursiveTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|     % | Samples | Callee                                 | Location                                      |
| ----: | ------: | -------------------------------------- | --------------------------------------------- |
| 99.9% |   1,786 | `doExec()`                             | `java.util.concurrent.ForkJoinTask`           |
|  0.1% |       1 | `releaseAccess()`                      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  0.1% |       1 | `getAndClearSlot(ForkJoinTask[], int)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|     % | Samples | Callee                                  | Location       |
| ----: | ------: | --------------------------------------- | -------------- |
| 33.3% |     405 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| 33.3% |     405 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |
| 33.3% |     405 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|     % | Samples | Callee                                                                        | Location       |
| ----: | ------: | ----------------------------------------------------------------------------- | -------------- |
| 99.6% |   1,209 | `PlatformMonitor::wait`                                                       | `libjvm.dylib` |
|  0.4% |       5 | `ThreadBlockInVMPreprocess<InFlightMutexRelease>::~ThreadBlockInVMPreprocess` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|     % | Samples | Callee                       | Location       |
| ----: | ------: | ---------------------------- | -------------- |
| 50.0% |     405 | `CreateExecutionEnvironment` | `libjli.dylib` |
| 50.0% |     405 | `ContinueInNewThread`        | `libjli.dylib` |

##### `main` (`java`)

|      % | Samples | Callee       | Location       |
| -----: | ------: | ------------ | -------------- |
| 100.0% |     810 | `JLI_Launch` | `libjli.dylib` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|      % | Samples | Callee                   | Location                                                   |
| -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| 100.0% |     675 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  68.9% |     465 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  31.1% |     210 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|      % | Samples | Callee     | Location                            |
| -----: | ------: | ---------- | ----------------------------------- |
| 100.0% |     644 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|     % | Samples | Callee                           | Location                                                  |
| ----: | ------: | -------------------------------- | --------------------------------------------------------- |
| 59.8% |     321 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
|  4.8% |      26 | `get(int)`                       | `java.util.ArrayList`                                     |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|      % | Samples | Callee              | Location                                                  |
| -----: | ------: | ------------------- | --------------------------------------------------------- |
| 100.0% |     537 | `vectorSum()`       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |
| 100.0% |     537 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|     % | Samples | Callee                         | Location                                                   |
| ----: | ------: | ------------------------------ | ---------------------------------------------------------- |
| 66.9% |     311 | `distance(Double[], Double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  4.5% |      21 | `get(int)`                     | `java.util.ArrayList`                                      |
|  1.7% |       8 | `_new_array_Java`              | `<unknown>`                                                |
|  1.3% |       6 | `SafepointBlob`                | `<unknown>`                                                |
|  0.6% |       3 | `zero_blocks`                  | `<unknown>`                                                |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|     % | Samples | Callee                         | Location                            |
| ----: | ------: | ------------------------------ | ----------------------------------- |
| 99.3% |     431 | `doExec()`                     | `java.util.concurrent.ForkJoinTask` |
|  0.5% |       2 | `tryCompensate(long, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `PlatformEvent::park` (`libjvm.dylib`)

|      % | Samples | Callee            | Location                 |
| -----: | ------: | ----------------- | ------------------------ |
| 100.0% |     406 | `__psynch_cvwait` | `libsystem_kernel.dylib` |

##### `ObjectMonitor::wait` (`libjvm.dylib`)

|      % | Samples | Callee                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |     406 | `PlatformEvent::park` | `libjvm.dylib` |

##### `ObjectSynchronizer::wait` (`libjvm.dylib`)

|      % | Samples | Callee                | Location       |
| -----: | ------: | --------------------- | -------------- |
| 100.0% |     406 | `ObjectMonitor::wait` | `libjvm.dylib` |

##### `JVM_MonitorWait` (`libjvm.dylib`)

|      % | Samples | Callee                     | Location       |
| -----: | ------: | -------------------------- | -------------- |
| 100.0% |     406 | `ObjectSynchronizer::wait` | `libjvm.dylib` |

##### `wait0(long)` (`java.lang.Object`)

|      % | Samples | Callee            | Location       |
| -----: | ------: | ----------------- | -------------- |
| 100.0% |     406 | `JVM_MonitorWait` | `libjvm.dylib` |

##### `wait(long)` (`java.lang.Object`)

|      % | Samples | Callee        | Location           |
| -----: | ------: | ------------- | ------------------ |
| 100.0% |     406 | `wait0(long)` | `java.lang.Object` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|     % | Samples | Callee  | Location                                                   |
| ----: | ------: | ------- | ---------------------------------------------------------- |
| 99.5% |     404 | `run()` | `jdk.internal.ref.CleanerImpl`                             |
|  0.5% |       2 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x0000000401003a68` |

##### `run()` (`java.lang.Thread`)

|      % | Samples | Callee                      | Location           |
| -----: | ------: | --------------------------- | ------------------ |
| 100.0% |     406 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `wait()` (`java.lang.Object`)

|      % | Samples | Callee       | Location           |
| -----: | ------: | ------------ | ------------------ |
| 100.0% |     405 | `wait(long)` | `java.lang.Object` |

##### `await()` (`java.lang.ref.NativeReferenceQueue`)

|      % | Samples | Callee   | Location           |
| -----: | ------: | -------- | ------------------ |
| 100.0% |     405 | `wait()` | `java.lang.Object` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|      % | Samples | Callee                     | Location                                               |
| -----: | ------: | -------------------------- | ------------------------------------------------------ |
| 100.0% |     401 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  99.8% |     400 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee                | Location                                               |
| ----: | ------: | --------------------- | ------------------------------------------------------ |
| 99.3% |     397 | `average(List)`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.5% |       2 | `boxed(double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|  0.3% |       1 | `put(Object, Object)` | `java.util.HashMap`                                    |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee                                                      | Location                        |
| ----: | ------: | ----------------------------------------------------------- | ------------------------------- |
| 99.7% |     398 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |
|  0.3% |       1 | `createScratchRoot(Path, boolean)`                          | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|      % | Samples | Callee                                 | Location                        |
| -----: | ------: | -------------------------------------- | ------------------------------- |
| 100.0% |     399 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|     % | Samples | Callee                               | Location                            |
| ----: | ------: | ------------------------------------ | ----------------------------------- |
| 99.5% |     396 | `invoke(Object, Object[])`           | `java.lang.reflect.Method`          |
|  0.5% |       2 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|     % | Samples | Callee                     | Location                            |
| ----: | ------: | -------------------------- | ----------------------------------- |
| 99.7% |     396 | `invoke()`                 | `java.util.concurrent.ForkJoinTask` |
|  0.3% |       1 | `InterpreterRuntime::_new` | `libjvm.dylib`                      |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|     % | Samples | Callee              | Location                                    |
| ----: | ------: | ------------------- | ------------------------------------------- |
| 99.2% |     393 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
|  0.8% |       3 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|     % | Samples | Callee                                                                        | Location                                    |
| ----: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| 95.9% |     377 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|  1.0% |       4 | `<clinit>()`                                                                  | `scala.Predef$`                             |
|  1.0% |       4 | `parse(String[])`                                                             | `org.renaissance.harness.ConfigParser`      |
|  0.8% |       3 | `<init>(Map)`                                                                 | `org.renaissance.harness.ConfigParser`      |
|  0.5% |       2 | `apply(Function0)`                                                            | `scala.util.Try$`                           |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|     % | Samples | Callee                                                           | Location                               |
| ----: | ------: | ---------------------------------------------------------------- | -------------------------------------- |
| 99.7% |     376 | `foreach(Function1)`                                             | `scala.collection.immutable.List`      |
|  0.3% |       1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|     % | Samples | Callee                                                                                       | Location                                  |
| ----: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 99.7% |     375 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|  0.3% |       1 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000040111f1b8`)

|      % | Samples | Callee                                                                                                                 | Location                                    |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| 100.0% |     376 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|     % | Samples | Callee                             | Location                                  |
| ----: | ------: | ---------------------------------- | ----------------------------------------- |
| 97.6% |     366 | `executeOperation(int)`            | `org.renaissance.harness.ExecutionDriver` |
|  2.4% |       9 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|     % | Samples | Callee                                            | Location                                                             |
| ----: | ------: | ------------------------------------------------- | -------------------------------------------------------------------- |
| 98.1% |     359 | `run(BenchmarkContext)`                           | `org.renaissance.jdk.concurrent.FjKmeans`                            |
|  1.6% |       6 | `notifyAfterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.EventDispatcher`                            |
|  0.3% |       1 | `validate()`                                      | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000004011a7770` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|      % | Samples | Callee  | Location                            |
| -----: | ------: | ------- | ----------------------------------- |
| 100.0% |     359 | `get()` | `java.util.concurrent.ForkJoinTask` |

##### `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|      % | Samples | Callee                | Location                                    |
| -----: | ------: | --------------------- | ------------------------------------------- |
| 100.0% |     359 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.3% |   3,796 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 13.1% |   2,050 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  5.0% |     781 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.6% |     405 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.6% |     405 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  2.6% |     405 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.6% |     405 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  2.6% |     405 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  2.6% |     405 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.6% |     405 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.6% |     405 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  2.6% |     404 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  2.6% |     404 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.6% |     404 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  2.6% |     404 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  2.6% |     401 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  2.6% |     400 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.4% |     380 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.3% |     359 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000004011a27f0`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000040111f1b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000401004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000401009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
|  1.6% |     257 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

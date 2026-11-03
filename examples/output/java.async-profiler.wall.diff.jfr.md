# Sampling profile diff

Collected 6,185 → 15,608 samples (+9,423 samples, +152.4%).

| Category         |  Change |  Delta |             % |        Samples |
| ---------------- | ------: | -----: | ------------: | -------------: |
| Native           | +179.2% | +9,207 | 83.1% → 91.9% | 5,138 → 14,345 |
| Ours             |  +38.2% |   +260 |  11.0% → 6.0% |      681 → 941 |
| Standard library |  +30.3% |    +56 |   3.0% → 1.5% |      185 → 241 |
| Unknown          | removed |   -152 |   2.5% → 0.0% |        152 → 0 |
| JIT              | +313.3% |    +47 |   0.2% → 0.4% |        15 → 62 |
| Compiler         |  +35.7% |     +5 |   0.2% → 0.1% |        14 → 19 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 3,308 → 9,096 samples (53.5% → 58.3%) thread_start at libsystem_pthread.dylib
│   └── 3,308 → 9,096 samples (53.5% → 58.3%) _pthread_start
│       ├── 3,155 → 8,690 samples (51.0% → 55.7%) thread_native_entry at libjvm.dylib
│       │   └── 3,155 → 8,690 samples (51.0% → 55.7%) Thread::call_run
│       │       ├── 1,304 → 3,818 samples (21.1% → 24.5%) WorkerThread::run
│       │       │   └── 1,286 → 3,796 samples (20.8% → 24.3%, self 23.5% → 27.4% globally) semaphore_wait_trap at libsystem_kernel.dylib
│       │       ├── 1,091 → 2,847 samples (17.6% → 18.2%) JavaThread::thread_main_inner
│       │       │   └── 1,091 → 2,847 samples (17.6% → 18.2%) 6 more callees, led by (5.4% → 5.3%) CompileBroker::compiler_thread_loop
│       │       ├── 456 → 1,215 samples (7.4% → 7.8%) ConcurrentGCThread::run
│       │       │   └── 456 → 1,215 samples (7.4% → 7.8%) 3 more callees, led by (2.5% → 2.6%) G1ConcurrentMarkThread::run_service
│       │       └── 304 → 810 samples (4.9% → 5.2%) 2 more callees, led by (2.5% → 2.6%) WatcherThread::run
│       └── … 152 → 405 samples (2.5% → 2.6%) __ulock_wait at libsystem_kernel.dylib
├── 1,968 → 4,486 samples (31.8% → 28.7%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 1,968 → 4,486 samples (31.8% → 28.7%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       ├── … 1,268 → 2,136 samples (20.5% → 13.7%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│       │   ├── 475 → 675 samples (7.7% → 4.3%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │   ├── … 347 → 465 samples (5.6% → 3.0%, self 1.7% → 0.7%) findNearestCentroid() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │   │   ├── 225 → 311 samples (3.6% → 2.0%, self 3.4% → 1.9%) distance(Double[], Double[])
│       │   │   │   └── 17 → 21 samples (0.3% → 0.1%) get(int) at java.util.ArrayList
│       │   │   │       └── 15 → 21 samples (0.2% → 0.1%) elementData(int)
│       │   │   └── … 128 → 210 samples (2.1% → 1.3%, self 0.6% → 0.3%) collectClusters(int[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │       ├── 42 → 46 samples (0.7% → 0.3%, self 0.6% → 0.3%) computeIfAbsent(Object, Function) at java.util.HashMap
│       │   │       └── … 18 → 77 samples (0.3% → 0.5%) grow() at java.util.ArrayList
│       │   │           └── 16 → 68 samples (0.3% → 0.4%) grow(int)
│       │   │               └── … 1 → 20 samples (<0.1% → 0.1%) __psynch_mutexwait at libsystem_kernel.dylib
│       │   ├── 368 → 537 samples (5.9% → 3.4%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       │   │   └── … 368 → 537 samples (5.9% → 3.4%, self 1.9% → 1.2%) vectorSum() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       │   │       └── 230 → 321 samples (3.7% → 2.1%, self 3.3% → 1.8%) accumulate(Double[], double[])
│       │   │           └── 24 → 42 samples (0.4% → 0.3%) doubleValue() at java.lang.Double
│       │   ├── … 50 → 201 samples (0.8% → 1.3%) lambda$merge$6(List, List) at org.renaissance.jdk.concurrent.JavaKMeans
│       │   │   ├── 21 → 104 samples (0.3% → 0.7%) <init>(Collection) at java.util.ArrayList
│       │   │   │   └── 0 → 35 samples (0.0% → 0.2%) zero_blocks
│       │   │   └── … 12 → 34 samples (0.2%, self 0.8% → 0.6% globally) forward_copy_longs
│       │   └── 347 → 711 samples (5.6% → 4.6%) 10 more callees, led by (5.4% → 4.4%) join() at java.util.concurrent.ForkJoinTask
│       └── 680 → 2,331 samples (11.0% → 14.9%) awaitWork(ForkJoinPool$WorkQueue)
│           ├── … 654 → 2,050 samples (10.6% → 13.1%, self 52.9% → 57.4% globally) __psynch_cvwait at libsystem_kernel.dylib
│           └── 20 → 263 samples (0.3% → 1.7%) parkUntil(long) at java.util.concurrent.locks.LockSupport …
├── … 152 → 405 samples (2.5% → 2.6%) mach_msg2_trap at libsystem_kernel.dylib
├── 152 → 0 samples (2.5% → 0.0%) (anonymous)
└── 605 → 1,621 samples (9.8% → 10.4%) 9 more root frames, led by (2.5% → 2.6%) run() at java.lang.ref.Reference$ReferenceHandler
```

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|   Change |  Delta |             % |       Samples | Function                          | Location                                                   |
| -------: | -----: | ------------: | ------------: | --------------------------------- | ---------------------------------------------------------- |
|  +173.9% | +5,691 | 52.9% → 57.4% | 3,273 → 8,964 | `__psynch_cvwait`                 | `libsystem_kernel.dylib`                                   |
|  +194.2% | +2,826 | 23.5% → 27.4% | 1,455 → 4,281 | `semaphore_wait_trap`             | `libsystem_kernel.dylib`                                   |
|  +166.4% |   +253 |   2.5% → 2.6% |     152 → 405 | `mach_msg2_trap`                  | `libsystem_kernel.dylib`                                   |
|  +166.4% |   +253 |   2.5% → 2.6% |     152 → 405 | `__ulock_wait`                    | `libsystem_kernel.dylib`                                   |
|   +41.8% |    +89 |   3.4% → 1.9% |     213 → 302 | `distance(Double[], Double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +62.4% |    +73 |   1.9% → 1.2% |     117 → 190 | `vectorSum()`                     | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   +35.4% |    +73 |   3.3% → 1.8% |     206 → 279 | `accumulate(Double[], double[])`  | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +1700.0% |    +68 |   0.1% → 0.5% |        4 → 72 | `__psynch_mutexwait`              | `libsystem_kernel.dylib`                                   |
|   +98.0% |    +48 |   0.8% → 0.6% |       49 → 97 | `forward_copy_longs`              | `<unknown>`                                                |
|  +293.3% |    +44 |   0.2% → 0.4% |       15 → 59 | `zero_blocks`                     | `<unknown>`                                                |
|   +51.6% |    +16 |   0.5% → 0.3% |       31 → 47 | `doubleValue()`                   | `java.lang.Double`                                         |
|   +12.6% |    +13 |   1.7% → 0.7% |     103 → 116 | `findNearestCentroid()`           | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +24.4% |    +11 |   0.7% → 0.4% |       45 → 56 | `elementData(int)`                | `java.util.ArrayList`                                      |
| +1100.0% |    +11 |  <0.1% → 0.1% |        1 → 12 | `_platform_bzero`                 | `libsystem_platform.dylib`                                 |
|   +21.1% |     +8 |   0.6% → 0.3% |       38 → 46 | `collectClusters(int[])`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|   +77.8% |     +7 |          0.1% |        9 → 16 | `grow(int)`                       | `java.util.ArrayList`                                      |
|  +350.0% |     +7 |  <0.1% → 0.1% |         2 → 9 | `ObjArrayAllocator::initialize`   | `libjvm.dylib`                                             |
|  +300.0% |     +6 |  <0.1% → 0.1% |         2 → 8 | `grow()`                          | `java.util.ArrayList`                                      |
|   +60.0% |     +6 |   0.2% → 0.1% |       10 → 16 | `add(Object, Object[], int)`      | `java.util.ArrayList`                                      |
|      new |     +4 |  0.0% → <0.1% |         0 → 4 | `arrayof_jint_disjoint_arraycopy` | `<unknown>`                                                |

##### Native

|   Change |  Delta |             % |       Samples | Function                                                                                     | Location                   |
| -------: | -----: | ------------: | ------------: | -------------------------------------------------------------------------------------------- | -------------------------- |
|  +173.9% | +5,691 | 52.9% → 57.4% | 3,273 → 8,964 | `__psynch_cvwait`                                                                            | `libsystem_kernel.dylib`   |
|  +194.2% | +2,826 | 23.5% → 27.4% | 1,455 → 4,281 | `semaphore_wait_trap`                                                                        | `libsystem_kernel.dylib`   |
|  +166.4% |   +253 |   2.5% → 2.6% |     152 → 405 | `mach_msg2_trap`                                                                             | `libsystem_kernel.dylib`   |
|  +166.4% |   +253 |   2.5% → 2.6% |     152 → 405 | `__ulock_wait`                                                                               | `libsystem_kernel.dylib`   |
| +1700.0% |    +68 |   0.1% → 0.5% |        4 → 72 | `__psynch_mutexwait`                                                                         | `libsystem_kernel.dylib`   |
|   +98.0% |    +48 |   0.8% → 0.6% |       49 → 97 | `forward_copy_longs`                                                                         | `<unknown>`                |
| +1100.0% |    +11 |  <0.1% → 0.1% |        1 → 12 | `_platform_bzero`                                                                            | `libsystem_platform.dylib` |
|  +350.0% |     +7 |  <0.1% → 0.1% |         2 → 9 | `ObjArrayAllocator::initialize`                                                              | `libjvm.dylib`             |
|      new |     +4 |  0.0% → <0.1% |         0 → 4 | `arrayof_jint_disjoint_arraycopy`                                                            | `<unknown>`                |
|      new |     +4 |  0.0% → <0.1% |         0 → 4 | `_platform_memset`                                                                           | `libsystem_platform.dylib` |
|      new |     +4 |  0.0% → <0.1% |         0 → 4 | `__mmap`                                                                                     | `libsystem_kernel.dylib`   |
|      new |     +4 |  0.0% → <0.1% |         0 → 4 | `swtch_pri`                                                                                  | `libsystem_kernel.dylib`   |
|   +14.3% |     +2 |   0.2% → 0.1% |       14 → 16 | `__psynch_cvsignal`                                                                          | `libsystem_kernel.dylib`   |
|  +200.0% |     +2 |         <0.1% |         1 → 3 | `InstanceKlass::find_method_index`                                                           | `libjvm.dylib`             |
|  +100.0% |     +2 |         <0.1% |         2 → 4 | `G1FullGCMarker::mark_object`                                                                | `libjvm.dylib`             |
|      new |     +2 |  0.0% → <0.1% |         0 → 2 | `ObjArrayKlass::array_klass`                                                                 | `libjvm.dylib`             |
|      new |     +2 |  0.0% → <0.1% |         0 → 2 | `G1FullGCCompactionPoint::forward`                                                           | `libjvm.dylib`             |
|      new |     +2 |  0.0% → <0.1% |         0 → 2 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` | `libjvm.dylib`             |
|      new |     +2 |  0.0% → <0.1% |         0 → 2 | `InstanceKlass::array_klass`                                                                 | `libjvm.dylib`             |
|      new |     +1 |  0.0% → <0.1% |         0 → 1 | `Unsafe_Park`                                                                                | `libjvm.dylib`             |

##### Ours

| Change | Delta |            % |   Samples | Function                         | Location                                                   |
| -----: | ----: | -----------: | --------: | -------------------------------- | ---------------------------------------------------------- |
| +41.8% |   +89 |  3.4% → 1.9% | 213 → 302 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +62.4% |   +73 |  1.9% → 1.2% | 117 → 190 | `vectorSum()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +35.4% |   +73 |  3.3% → 1.8% | 206 → 279 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +12.6% |   +13 |  1.7% → 0.7% | 103 → 116 | `findNearestCentroid()`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +21.1% |    +8 |  0.6% → 0.3% |   38 → 46 | `collectClusters(int[])`         | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +2 | 0.0% → <0.1% |     0 → 2 | `lambda$merge$6(List, List)`     | `org.renaissance.jdk.concurrent.JavaKMeans`                |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `compute()`                      | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `forkThreshold()`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|    new |    +1 | 0.0% → <0.1% |     0 → 1 | `add(double[], double[])`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                         | Location                                      |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------- | --------------------------------------------- |
|  +51.6% |   +16 |  0.5% → 0.3% | 31 → 47 | `doubleValue()`                                                  | `java.lang.Double`                            |
|  +24.4% |   +11 |  0.7% → 0.4% | 45 → 56 | `elementData(int)`                                               | `java.util.ArrayList`                         |
|  +77.8% |    +7 |         0.1% |  9 → 16 | `grow(int)`                                                      | `java.util.ArrayList`                         |
| +300.0% |    +6 | <0.1% → 0.1% |   2 → 8 | `grow()`                                                         | `java.util.ArrayList`                         |
|  +60.0% |    +6 |  0.2% → 0.1% | 10 → 16 | `add(Object, Object[], int)`                                     | `java.util.ArrayList`                         |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `<init>(Collection)`                                             | `java.util.ArrayList`                         |
| +300.0% |    +3 |        <0.1% |   1 → 4 | `forEach(BiConsumer)`                                            | `java.util.HashMap`                           |
|   +8.1% |    +3 |  0.6% → 0.3% | 37 → 40 | `computeIfAbsent(Object, Function)`                              | `java.util.HashMap`                           |
| +100.0% |    +2 |        <0.1% |   2 → 4 | `tryRemoveAndExec(ForkJoinTask, boolean)`                        | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `join()`                                                         | `java.util.concurrent.ForkJoinTask`           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`             | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `park()`                                                         | `java.util.concurrent.locks.LockSupport`      |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `add(Object)`                                                    | `java.util.ArrayList`                         |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `fork()`                                                         | `java.util.concurrent.ForkJoinTask`           |
|  +20.0% |    +1 | 0.1% → <0.1% |   5 → 6 | `hash(Object)`                                                   | `java.util.HashMap`                           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `putMapEntries(Map, boolean)`                                    | `java.util.HashMap`                           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `defineClass(String, byte[], int, int, CodeSource)`              | `java.security.SecureClassLoader`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `toByteArray()`                                                  | `jdk.internal.org.objectweb.asm.ClassWriter`  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `guard_LI_I(VarHandle, Object, int, VarHandle$AccessDescriptor)` | `java.lang.invoke.VarHandleGuards`            |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>(int, String, int, int)`                                  | `jdk.internal.org.objectweb.asm.Type`         |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |            % | Samples | Function                                                  | Location                                                   |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------- | ---------------------------------------------------------- |
| removed |  -152 |  2.5% → 0.0% | 152 → 0 | `(anonymous)`                                             | `<unknown>`                                                |
|  -70.0% |    -7 | 0.2% → <0.1% |  10 → 3 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
|  -50.0% |    -3 | 0.1% → <0.1% |   6 → 3 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `Node_Backward_Iterator::next`                            | `libjvm.dylib`                                             |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Parker::park`                                            | `libjvm.dylib`                                             |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                                        |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `_pthread_cond_wait`                                      | `libsystem_pthread.dylib`                                  |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `inflate_fast`                                            | `libzip.dylib`                                             |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `G1FullGCMarker::follow_object`                           | `libjvm.dylib`                                             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseChaitin::merge_multidefs`                           | `libjvm.dylib`                                             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseChaitin::post_allocate_copy_removal`                | `libjvm.dylib`                                             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `PhaseChaitin::Select`                                    | `libjvm.dylib`                                             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `average(List)`                                           | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isNamed()`                                               | `java.lang.Module`                                         |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `combineResults(Object, Object)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `addAll(Collection)`                                      | `java.util.ArrayList`                                      |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `signalWork()`                                            | `java.util.concurrent.ForkJoinPool`                        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `combineResults(Object, Object)`                          | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                                   | Location                  |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------- | ------------------------- |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Parker::park`                                                                                             | `libjvm.dylib`            |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `_pthread_cond_wait`                                                                                       | `libsystem_pthread.dylib` |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `inflate_fast`                                                                                             | `libzip.dylib`            |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `G1FullGCMarker::follow_object`                                                                            | `libjvm.dylib`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `G1ParScanThreadState::do_partial_array`                                                                   | `libjvm.dylib`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Method::is_final_method`                                                                                  | `libjvm.dylib`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `java_lang_invoke_MethodHandle::type`                                                                      | `libjvm.dylib`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `VMThread::execute`                                                                                        | `libjvm.dylib`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `constantPoolHandle::~constantPoolHandle`                                                                  | `libjvm.dylib`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `G1BarrierSetRuntime::write_ref_array_post_entry`                                                          | `libjvm.dylib`            |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>`                                            | `libjvm.dylib`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `G1FullGCMarker::publish_and_drain_oop_tasks`                                                              | `libjvm.dylib`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `semaphore_signal_trap`                                                                                    | `libsystem_kernel.dylib`  |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>`            | `libjvm.dylib`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` | `libjvm.dylib`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `NativeNMethodBarrier::NativeNMethodBarrier`                                                               | `libjvm.dylib`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>`                                                   | `libjvm.dylib`            |

##### Ours

|  Change | Delta |            % | Samples | Function                         | Location                                                   |
| ------: | ----: | -----------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `average(List)`                  | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                  | Location                                       |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------- | ---------------------------------------------- |
|  -70.0% |    -7 | 0.2% → <0.1% |  10 → 3 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`            |
|  -50.0% |    -3 | 0.1% → <0.1% |   6 → 3 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`            |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `merge(Object, Object, BiFunction)`                       | `java.util.HashMap`                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`           |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isNamed()`                                               | `java.lang.Module`                             |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `addAll(Collection)`                                      | `java.util.ArrayList`                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `signalWork()`                                            | `java.util.concurrent.ForkJoinPool`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `newLength(int, int, int)`                                | `jdk.internal.util.ArraysSupport`              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `hasNext()`                                               | `java.util.HashMap$HashIterator`               |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `characteristics()`                                       | `java.util.stream.Streams$RangeIntSpliterator` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `forEachRemaining(IntConsumer)`                           | `java.util.stream.Streams$RangeIntSpliterator` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `boxed()`                                                 | `java.util.stream.DoublePipeline`              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(HashMap)`                                         | `java.util.HashMap$HashIterator`               |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(HashMap)`                                         | `java.util.HashMap$EntryIterator`              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `putVal(int, Object, Object, boolean, boolean)`           | `java.util.HashMap`                            |

##### Unknown

|  Change | Delta |           % | Samples | Function      | Location    |
| ------: | ----: | ----------: | ------: | ------------- | ----------- |
| removed |  -152 | 2.5% → 0.0% | 152 → 0 | `(anonymous)` | `<unknown>` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Location                                                       |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------------- |
| +57.3% |   +71 | 58.2% → 64.6% | 124 → 195 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |
| +12.4% |   +11 | 41.8% → 33.1% |  89 → 100 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:249` |
|    new |    +7 |   0.0% → 2.3% |     0 → 7 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:250` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |  Samples | Location                                                      |
| -----: | ----: | ------------: | -------: | ------------------------------------------------------------- |
| +94.7% |   +89 | 80.3% → 96.3% | 94 → 183 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |
| -69.6% |   -16 |  19.7% → 3.7% |   23 → 7 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |   Samples | Location                                                      |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------- |
| +48.3% |   +84 | 84.5% → 92.5% | 174 → 258 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412` |
| -34.4% |   -11 |  15.5% → 7.5% |   32 → 21 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `doubleValue()` (`java.lang.Double`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| +51.6% |   +16 | 100.0% | 31 → 47 | `java.lang.Double:1001` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
|  +18.5% |   +10 | 52.4% → 55.2% | 54 → 64 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:231` |
| +100.0% |    +3 |   2.9% → 5.2% |   3 → 6 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226` |
|   +9.1% |    +1 | 10.7% → 10.3% | 11 → 12 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
|   -3.1% |    -1 | 31.1% → 26.7% | 32 → 31 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |

##### `elementData(int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Location                  |
| -----: | ----: | -----: | ------: | ------------------------- |
| +24.4% |   +11 | 100.0% | 45 → 56 | `java.util.ArrayList:411` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| +140.0% |    +7 | 13.2% → 26.1% |  5 → 12 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:214` |
|  -50.0% |    -6 | 31.6% → 13.0% |  12 → 6 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:212` |
| +500.0% |    +5 |  2.6% → 13.0% |   1 → 6 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |
|  +37.5% |    +3 | 21.1% → 23.9% |  8 → 11 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:215` |
|   -8.3% |    -1 | 31.6% → 23.9% | 12 → 11 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |              % | Samples | Location                  |
| -----: | ----: | -------------: | ------: | ------------------------- |
| +66.7% |    +6 | 100.0% → 93.8% |  9 → 15 | `java.util.ArrayList:239` |
|    new |    +1 |    0.0% → 6.3% |   0 → 1 | `java.util.ArrayList:232` |

##### `grow()` (`java.util.ArrayList`)

|  Change | Delta |      % | Samples | Location                  |
| ------: | ----: | -----: | ------: | ------------------------- |
| +300.0% |    +6 | 100.0% |   2 → 8 | `java.util.ArrayList:244` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|   Change | Delta |             % | Samples | Location                  |
| -------: | ----: | ------------: | ------: | ------------------------- |
| +1100.0% |   +11 | 10.0% → 75.0% |  1 → 12 | `java.util.ArrayList:484` |
|   -55.6% |    -5 | 90.0% → 25.0% |   9 → 4 | `java.util.ArrayList:482` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Location                                        |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:309` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % | Samples | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:146` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:261` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:303` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Location                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:433` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `java.util.ArrayList:184` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Location                 |
| ------: | ----: | -----: | ------: | ------------------------ |
| +300.0% |    +3 | 100.0% |   1 → 4 | `java.util.HashMap:1428` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                 |
| -----: | ----: | ------------: | ------: | ------------------------ |
| -33.3% |    -3 | 24.3% → 15.0% |   9 → 6 | `java.util.HashMap:1197` |
| +60.0% |    +3 | 13.5% → 20.0% |   5 → 8 | `java.util.HashMap:1204` |
| +66.7% |    +2 |  8.1% → 12.5% |   3 → 5 | `java.util.HashMap:1207` |
| -16.7% |    -1 | 16.2% → 12.5% |   6 → 5 | `java.util.HashMap:1219` |
| +50.0% |    +1 |   5.4% → 7.5% |   2 → 3 | `java.util.HashMap:1222` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |            % | Samples | Location                                           |
| ------: | ----: | -----------: | ------: | -------------------------------------------------- |
|     new |    +2 | 0.0% → 50.0% |   0 → 2 | `java.util.concurrent.ForkJoinPool$WorkQueue:1343` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool$WorkQueue:1331` |
|     new |    +1 | 0.0% → 25.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1347` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ForkJoinTask:652` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |             % | Samples | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool$WorkQueue:1313` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.locks.LockSupport:368` |

##### `add(Object)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.ArrayList:495` |

##### `fork()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ForkJoinTask:627` |

##### `hash(Object)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| +20.0% |    +1 | 100.0% |   5 → 6 | `java.util.HashMap:338` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashMap:519` |

##### `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`)

| Change | Delta |             % | Samples | Location                              |
| -----: | ----: | ------------: | ------: | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.security.SecureClassLoader:150` |

##### `toByteArray()` (`jdk.internal.org.objectweb.asm.ClassWriter`)

| Change | Delta |             % | Samples | Location                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `jdk.internal.org.objectweb.asm.ClassWriter:662` |

##### `guard_LI_I(VarHandle, Object, int, VarHandle$AccessDescriptor)` (`java.lang.invoke.VarHandleGuards`)

| Change | Delta |             % | Samples | Location                               |
| -----: | ----: | ------------: | ------: | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.invoke.VarHandleGuards:162` |

##### `<init>(int, String, int, int)` (`jdk.internal.org.objectweb.asm.Type`)

| Change | Delta |             % | Samples | Location                                  |
| -----: | ----: | ------------: | ------: | ----------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `jdk.internal.org.objectweb.asm.Type:191` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |            % | Samples | Location                                 |
| ------: | ----: | -----------: | ------: | ---------------------------------------- |
| removed |    -4 | 40.0% → 0.0% |   4 → 0 | `java.util.concurrent.ForkJoinPool:2057` |
| removed |    -2 | 20.0% → 0.0% |   2 → 0 | `java.util.concurrent.ForkJoinPool:2051` |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:2053` |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:2058` |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `java.util.concurrent.ForkJoinPool:2041` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |              % | Samples | Location                                 |
| ------: | ----: | -------------: | ------: | ---------------------------------------- |
| removed |    -2 |   33.3% → 0.0% |   2 → 0 | `java.util.concurrent.ForkJoinPool:1808` |
|  -25.0% |    -1 | 66.7% → 100.0% |   4 → 3 | `java.util.concurrent.ForkJoinPool:1809` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Location                 |
| ------: | ----: | -----------: | ------: | ------------------------ |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:1378` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:1384` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % | Samples | Location                                                   |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:332` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.RecursiveTask:110` |

##### `isNamed()` (`java.lang.Module`)

|  Change | Delta |             % | Samples | Location               |
| ------: | ----: | ------------: | ------: | ---------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.Module:188` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `java.util.Arrays:3482` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:171` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.ArrayList:759` |

##### `signalWork()` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1716` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % | Samples | Location                                                   |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:276` |

##### `newLength(int, int, int)` (`jdk.internal.util.ArraysSupport`)

|  Change | Delta |             % | Samples | Location                              |
| ------: | ----: | ------------: | ------: | ------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `jdk.internal.util.ArraysSupport:741` |

##### `hasNext()` (`java.util.HashMap$HashIterator`)

|  Change | Delta |             % | Samples | Location                              |
| ------: | ----: | ------------: | ------: | ------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.HashMap$HashIterator:1598` |

##### `characteristics()` (`java.util.stream.Streams$RangeIntSpliterator`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.stream.Streams$RangeIntSpliterator:120` |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.stream.Streams$RangeIntSpliterator:104` |

##### `boxed()` (`java.util.stream.DoublePipeline`)

|  Change | Delta |             % | Samples | Location                              |
| ------: | ----: | ------------: | ------: | ------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.stream.DoublePipeline:199` |

##### `<init>(HashMap)` (`java.util.HashMap$HashIterator`)

|  Change | Delta |             % | Samples | Location                              |
| ------: | ----: | ------------: | ------: | ------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.HashMap$HashIterator:1593` |

##### `<init>(HashMap)` (`java.util.HashMap$EntryIterator`)

|  Change | Delta |             % | Samples | Location                               |
| ------: | ----: | ------------: | ------: | -------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.HashMap$EntryIterator:1636` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.HashMap:670` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|  Change |  Delta |             % |       Samples | Caller                  | Location                 |
| ------: | -----: | ------------: | ------------: | ----------------------- | ------------------------ |
| +161.9% | +2,729 | 51.5% → 49.3% | 1,686 → 4,415 | `PlatformMonitor::wait` | `libjvm.dylib`           |
| +191.6% | +2,456 | 39.2% → 41.7% | 1,282 → 3,738 | `Parker::park`          | `libjvm.dylib`           |
| +169.3% |   +254 |   4.6% → 4.5% |     150 → 404 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
| +163.6% |   +252 |   4.7% → 4.5% |     154 → 406 | `PlatformEvent::park`   | `libjvm.dylib`           |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|  Change |  Delta |             % |       Samples | Caller                           | Location       |
| ------: | -----: | ------------: | ------------: | -------------------------------- | -------------- |
| +195.2% | +2,510 | 88.4% → 88.7% | 1,286 → 3,796 | `WorkerThread::run`              | `libjvm.dylib` |
| +166.4% |   +253 |  10.4% → 9.5% |     152 → 405 | `os::signal_wait`                | `libjvm.dylib` |
| +366.7% |    +44 |   0.8% → 1.3% |       12 → 56 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
| +380.0% |    +19 |   0.3% → 0.6% |        5 → 24 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

|  Change | Delta |      % |   Samples | Caller               | Location                 |
| ------: | ----: | -----: | --------: | -------------------- | ------------------------ |
| +166.4% |  +253 | 100.0% | 152 → 405 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

|  Change | Delta |      % |   Samples | Caller                    | Location       |
| ------: | ----: | -----: | --------: | ------------------------- | -------------- |
| +166.4% |  +253 | 100.0% | 152 → 405 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------- |
| +41.8% |   +89 | 100.0% | 213 → 302 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | --------: | ------------------- | --------------------------------------------------------- |
| +62.4% |   +73 | 100.0% | 117 → 190 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller        | Location                                                  |
| -----: | ----: | -----: | --------: | ------------- | --------------------------------------------------------- |
| +35.4% |   +73 | 100.0% | 206 → 279 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

|   Change | Delta |      % | Samples | Caller                              | Location                  |
| -------: | ----: | -----: | ------: | ----------------------------------- | ------------------------- |
| +1700.0% |   +68 | 100.0% |  4 → 72 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `forward_copy_longs` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                            | Location    |
| ------: | ----: | ------------: | ------: | --------------------------------- | ----------- |
| +100.0% |   +41 | 83.7% → 84.5% | 41 → 82 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
|  +87.5% |    +7 | 16.3% → 15.5% |  8 → 15 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `zero_blocks` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                              | Location                                                   |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ---------------------------------------------------------- |
|     new |   +35 |  0.0% → 59.3% |  0 → 35 | `<init>(Collection)`                | `java.util.ArrayList`                                      |
| +566.7% |   +17 | 20.0% → 33.9% |  3 → 20 | `grow(int)`                         | `java.util.ArrayList`                                      |
| removed |   -10 |  66.7% → 0.0% |  10 → 0 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                        |
|  +50.0% |    +1 |  13.3% → 5.1% |   2 → 3 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|     new |    +1 |   0.0% → 1.7% |   0 → 1 | `copyOf(byte[], int)`               | `java.util.Arrays`                                         |

##### `doubleValue()` (`java.lang.Double`)

| Change | Delta |             % | Samples | Caller                           | Location                                                   |
| -----: | ----: | ------------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| +75.0% |   +18 | 77.4% → 89.4% | 24 → 42 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -28.6% |    -2 | 22.6% → 10.6% |   7 → 5 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
| +12.6% |   +13 | 100.0% | 103 → 116 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `elementData(int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller     | Location              |
| -----: | ----: | -----: | ------: | ---------- | --------------------- |
| +24.4% |   +11 | 100.0% | 45 → 56 | `get(int)` | `java.util.ArrayList` |

##### `_platform_bzero` (`libsystem_platform.dylib`)

|   Change | Delta |      % | Samples | Caller                   | Location       |
| -------: | ----: | -----: | ------: | ------------------------ | -------------- |
| +1100.0% |   +11 | 100.0% |  1 → 12 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------- | ---------------------------------------------------------- |
| +21.1% |    +8 | 100.0% | 38 → 46 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller   | Location              |
| -----: | ----: | -----: | ------: | -------- | --------------------- |
| +77.8% |    +7 | 100.0% |  9 → 16 | `grow()` | `java.util.ArrayList` |

##### `ObjArrayAllocator::initialize` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                   | Location       |
| ------: | ----: | -----: | ------: | ------------------------ | -------------- |
| +350.0% |    +7 | 100.0% |   2 → 9 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `grow()` (`java.util.ArrayList`)

|  Change | Delta |      % | Samples | Caller                       | Location              |
| ------: | ----: | -----: | ------: | ---------------------------- | --------------------- |
| +300.0% |    +6 | 100.0% |   2 → 8 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller        | Location              |
| -----: | ----: | -----: | ------: | ------------- | --------------------- |
| +60.0% |    +6 | 100.0% | 10 → 16 | `add(Object)` | `java.util.ArrayList` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

| Change | Delta |            % | Samples | Caller                  | Location              |
| -----: | ----: | -----------: | ------: | ----------------------- | --------------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `grow(int)`             | `java.util.ArrayList` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `copyOf(Object[], int)` | `java.util.Arrays`    |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `<init>(Collection)`    | `java.util.ArrayList` |

##### `_platform_memset` (`libsystem_platform.dylib`)

| Change | Delta |             % | Samples | Caller                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `__mmap` (`libsystem_kernel.dylib`)

| Change | Delta |             % | Samples | Caller                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `os::pd_uncommit_memory` | `libjvm.dylib` |

##### `swtch_pri` (`libsystem_kernel.dylib`)

| Change | Delta |             % | Samples | Caller                              | Location       |
| -----: | ----: | ------------: | ------: | ----------------------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `TaskTerminator::offer_termination` | `libjvm.dylib` |

##### `__psynch_cvsignal` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller          | Location       |
| -----: | ----: | -----: | ------: | --------------- | -------------- |
| +14.3% |    +2 | 100.0% | 14 → 16 | `Unsafe_Unpark` | `libjvm.dylib` |

##### `InstanceKlass::find_method_index` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
|     new |    +2 |  0.0% → 66.7% |   0 → 2 | `InstanceKlass::uncached_lookup_method` | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `InstanceKlass::find_local_method`      | `libjvm.dylib` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `InstanceKlass::find_method`            | `libjvm.dylib` |

##### `G1FullGCMarker::mark_object` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                                          | Location       |
| ------: | ----: | -----: | ------: | --------------------------------------------------------------- | -------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib` |

##### `ObjArrayKlass::array_klass` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                     | Location       |
| -----: | ----: | ------------: | ------: | -------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `OptoRuntime::new_array_C` | `libjvm.dylib` |

##### `G1FullGCCompactionPoint::forward` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                                                                       | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` | `libjvm.dylib` |

##### `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                      | Location       |
| -----: | ----: | ------------: | ------: | --------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `G1FullGCPrepareTask::work` | `libjvm.dylib` |

##### `InstanceKlass::array_klass` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                     | Location       |
| -----: | ----: | ------------: | ------: | -------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `OptoRuntime::new_array_C` | `libjvm.dylib` |

##### `Unsafe_Park` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                | Location                   |
| -----: | ----: | ------------: | ------: | --------------------- | -------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |             % | Samples | Caller                  | Location                                                               |
| -----: | ----: | ------------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a7000` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Caller              | Location                                               |
| -----: | ----: | ------------: | ------: | ------------------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % | Samples | Caller   | Location                             |
| -----: | ----: | ------------: | ------: | -------- | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `forkThreshold()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Caller                               | Location                                                  |
| -----: | ----: | ------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `<init>(Collection)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller                       | Location                                    |
| -----: | ----: | ------------: | ------: | ---------------------------- | ------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Caller            | Location                                    |
| ------: | ----: | -----: | ------: | ----------------- | ------------------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                   | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------- |
|  +8.1% |    +3 | 100.0% | 37 → 40 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |      % | Samples | Caller                 | Location                            |
| ------: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| +100.0% |    +2 | 100.0% |   2 → 4 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |             % | Samples | Caller                                   | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |             % | Samples | Caller                 | Location                            |
| -----: | ----: | ------------: | ------: | ---------------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `add(Object)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller                   | Location                                                   |
| -----: | ----: | ------------: | ------: | ------------------------ | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `fork()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `hash(Object)` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Caller                | Location            |
| -----: | ----: | -----------: | ------: | --------------------- | ------------------- |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `put(Object, Object)` | `java.util.HashMap` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller        | Location            |
| -----: | ----: | ------------: | ------: | ------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(Map)` | `java.util.HashMap` |

##### `defineClass(String, byte[], int, int, CodeSource)` (`java.security.SecureClassLoader`)

| Change | Delta |             % | Samples | Caller                          | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------------- | ------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `defineClass(String, Resource)` | `java.net.URLClassLoader` |

##### `toByteArray()` (`jdk.internal.org.objectweb.asm.ClassWriter`)

| Change | Delta |             % | Samples | Caller          | Location                                    |
| -----: | ----: | ------------: | ------: | --------------- | ------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `toByteArray()` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `guard_LI_I(VarHandle, Object, int, VarHandle$AccessDescriptor)` (`java.lang.invoke.VarHandleGuards`)

| Change | Delta |             % | Samples | Caller                  | Location                      |
| -----: | ----: | ------------: | ------: | ----------------------- | ----------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getShort(byte[], int)` | `jdk.internal.util.ByteArray` |

##### `<init>(int, String, int, int)` (`jdk.internal.org.objectweb.asm.Type`)

| Change | Delta |             % | Samples | Caller                              | Location                              |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getTypeInternal(String, int, int)` | `jdk.internal.org.objectweb.asm.Type` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| -70.0% |    -7 | 100.0% |  10 → 3 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller  | Location                                    |
| -----: | ----: | -----: | ------: | ------- | ------------------------------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                         | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------ | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `PhaseCFG::schedule_late`      | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `Parker::park` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller        | Location       |
| ------: | ----: | ------------: | ------: | ------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Unsafe_Park` | `libjvm.dylib` |

##### `merge(Object, Object, BiFunction)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                              | Location                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `lambda$merge$7(Map, Object, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `_pthread_cond_wait` (`libsystem_pthread.dylib`)

|  Change | Delta |             % | Samples | Caller         | Location       |
| ------: | ----: | ------------: | ------: | -------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Parker::park` | `libjvm.dylib` |

##### `inflate_fast` (`libzip.dylib`)

|  Change | Delta |             % | Samples | Caller                                          | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `G1FullGCMarker::follow_object` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `G1FullGCMarker::follow_marking_stacks` | `libjvm.dylib` |

##### `PhaseChaitin::merge_multidefs` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::post_allocate_copy_removal` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `PhaseChaitin::Select` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % | Samples | Caller                     | Location                                               |
| ------: | ----: | ------------: | ------: | -------------------------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|  Change | Delta |             % | Samples | Caller     | Location                            |
| ------: | ----: | ------------: | ------: | ---------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `isNamed()` (`java.lang.Module`)

|  Change | Delta |             % | Samples | Caller       | Location            |
| ------: | ----: | ------------: | ------: | ------------ | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `isSealed()` | `java.lang.Package` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change | Delta |            % | Samples | Caller      | Location              |
| ------: | ----: | -----------: | ------: | ----------- | --------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `toArray()` | `java.util.ArrayList` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `addAll(Collection)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller                       | Location                                    |
| ------: | ----: | ------------: | ------: | ---------------------------- | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `lambda$merge$6(List, List)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `signalWork()` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Caller                                      | Location                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `G1ParScanThreadState::do_partial_array` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                          | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `Method::is_final_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                 | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `klassVtable::update_inherited_vtable` | `libjvm.dylib` |

##### `java_lang_invoke_MethodHandle::type` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                       | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `BootstrapInfo::resolve_bsm` | `libjvm.dylib` |

##### `VMThread::execute` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                     | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `G1CollectedHeap::attempt_allocation_slow` | `libjvm.dylib` |

##### `constantPoolHandle::~constantPoolHandle` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                      | Location       |
| ------: | ----: | ------------: | ------: | --------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `InstanceKlass::find_field` | `libjvm.dylib` |

##### `G1BarrierSetRuntime::write_ref_array_post_entry` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller               | Location              |
| ------: | ----: | ------------: | ------: | -------------------- | --------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `addAll(Collection)` | `java.util.ArrayList` |

##### `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                  | Location       |
| -----: | ----: | -----: | ------: | --------------------------------------- | -------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `G1AdjustRegionClosure::do_heap_region` | `libjvm.dylib` |

##### `G1FullGCMarker::publish_and_drain_oop_tasks` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `G1FullGCMarker::follow_marking_stacks` | `libjvm.dylib` |

##### `semaphore_signal_trap` (`libsystem_kernel.dylib`)

|  Change | Delta |             % | Samples | Caller                    | Location       |
| ------: | ----: | ------------: | ------: | ------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `WorkerThreads::run_task` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                                          | Location       |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------- | -------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` | `libjvm.dylib` |

##### `GenericTaskQueueSet<OverflowTaskQueue<ObjArrayTask, (MEMFLAGS)5, 131072u>, (MEMFLAGS)5>::steal_best_of_2` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                             | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `G1FullGCMarker::complete_marking` | `libjvm.dylib` |

##### `NativeNMethodBarrier::NativeNMethodBarrier` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `BarrierSetNMethod::guard_value` | `libjvm.dylib` |

##### `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `G1ParScanThreadState::do_partial_array` | `libjvm.dylib` |

##### `newLength(int, int, int)` (`jdk.internal.util.ArraysSupport`)

|  Change | Delta |             % | Samples | Caller      | Location              |
| ------: | ----: | ------------: | ------: | ----------- | --------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `grow(int)` | `java.util.ArrayList` |

##### `hasNext()` (`java.util.HashMap$HashIterator`)

|  Change | Delta |             % | Samples | Caller                        | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------- | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `characteristics()` (`java.util.stream.Streams$RangeIntSpliterator`)

|  Change | Delta |             % | Samples | Caller                  | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getExactSizeIfKnown()` | `java.util.Spliterator` |

##### `forEachRemaining(IntConsumer)` (`java.util.stream.Streams$RangeIntSpliterator`)

|  Change | Delta |             % | Samples | Caller                       | Location                      |
| ------: | ----: | ------------: | ------: | ---------------------------- | ----------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `forEachRemaining(Consumer)` | `java.util.Spliterator$OfInt` |

##### `boxed()` (`java.util.stream.DoublePipeline`)

|  Change | Delta |             % | Samples | Caller            | Location                                               |
| ------: | ----: | ------------: | ------: | ----------------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `<init>(HashMap)` (`java.util.HashMap$HashIterator`)

|  Change | Delta |             % | Samples | Caller            | Location                          |
| ------: | ----: | ------------: | ------: | ----------------- | --------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(HashMap)` | `java.util.HashMap$EntryIterator` |

##### `<init>(HashMap)` (`java.util.HashMap$EntryIterator`)

|  Change | Delta |             % | Samples | Caller       | Location                     |
| ------: | ----: | ------------: | ------: | ------------ | ---------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `iterator()` | `java.util.HashMap$EntrySet` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller                        | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------- | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change |  Delta |             % |       Samples | Function                                             | Location                                      |
| ------: | -----: | ------------: | ------------: | ---------------------------------------------------- | --------------------------------------------- |
| +175.0% | +5,788 | 53.5% → 58.3% | 3,308 → 9,096 | `_pthread_start`                                     | `libsystem_pthread.dylib`                     |
| +175.0% | +5,788 | 53.5% → 58.3% | 3,308 → 9,096 | `thread_start`                                       | `libsystem_pthread.dylib`                     |
| +173.9% | +5,691 | 52.9% → 57.4% | 3,273 → 8,964 | `__psynch_cvwait`                                    | `libsystem_kernel.dylib`                      |
| +175.4% | +5,535 | 51.0% → 55.7% | 3,155 → 8,690 | `Thread::call_run`                                   | `libjvm.dylib`                                |
| +175.4% | +5,535 | 51.0% → 55.7% | 3,155 → 8,690 | `thread_native_entry`                                | `libjvm.dylib`                                |
| +194.2% | +2,826 | 23.5% → 27.4% | 1,455 → 4,281 | `semaphore_wait_trap`                                | `libsystem_kernel.dylib`                      |
| +161.9% | +2,730 | 27.3% → 28.3% | 1,686 → 4,416 | `PlatformMonitor::wait`                              | `libjvm.dylib`                                |
| +127.9% | +2,518 | 31.8% → 28.7% | 1,968 → 4,486 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`           |
| +127.9% | +2,518 | 31.8% → 28.7% | 1,968 → 4,486 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`   |
| +192.8% | +2,514 | 21.1% → 24.5% | 1,304 → 3,818 | `WorkerThread::run`                                  | `libjvm.dylib`                                |
| +191.9% | +2,477 | 20.9% → 24.1% | 1,291 → 3,768 | `park(boolean, long)`                                | `jdk.internal.misc.Unsafe`                    |
| +191.8% | +2,476 | 20.9% → 24.1% | 1,291 → 3,767 | `Unsafe_Park`                                        | `libjvm.dylib`                                |
| +192.1% | +2,474 | 20.8% → 24.1% | 1,288 → 3,762 | `Parker::park`                                       | `libjvm.dylib`                                |
| +164.6% | +1,995 | 19.6% → 20.5% | 1,212 → 3,207 | `Monitor::wait_without_safepoint_check`              | `libjvm.dylib`                                |
| +176.7% | +1,981 | 18.1% → 19.9% | 1,121 → 3,102 | `park()`                                             | `java.util.concurrent.locks.LockSupport`      |
| +161.0% | +1,756 | 17.6% → 18.2% | 1,091 → 2,847 | `JavaThread::thread_main_inner`                      | `libjvm.dylib`                                |
| +242.8% | +1,651 | 11.0% → 14.9% |   680 → 2,331 | `awaitWork(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`           |
|  +75.0% | +1,040 | 22.4% → 15.5% | 1,386 → 2,426 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`           |
|  +68.1% |   +871 | 20.7% → 13.8% | 1,279 → 2,150 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +68.0% |   +870 | 20.7% → 13.8% | 1,279 → 2,149 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`           |

##### Native

|  Change |  Delta |             % |       Samples | Function                                | Location                  |
| ------: | -----: | ------------: | ------------: | --------------------------------------- | ------------------------- |
| +175.0% | +5,788 | 53.5% → 58.3% | 3,308 → 9,096 | `_pthread_start`                        | `libsystem_pthread.dylib` |
| +175.0% | +5,788 | 53.5% → 58.3% | 3,308 → 9,096 | `thread_start`                          | `libsystem_pthread.dylib` |
| +173.9% | +5,691 | 52.9% → 57.4% | 3,273 → 8,964 | `__psynch_cvwait`                       | `libsystem_kernel.dylib`  |
| +175.4% | +5,535 | 51.0% → 55.7% | 3,155 → 8,690 | `Thread::call_run`                      | `libjvm.dylib`            |
| +175.4% | +5,535 | 51.0% → 55.7% | 3,155 → 8,690 | `thread_native_entry`                   | `libjvm.dylib`            |
| +194.2% | +2,826 | 23.5% → 27.4% | 1,455 → 4,281 | `semaphore_wait_trap`                   | `libsystem_kernel.dylib`  |
| +161.9% | +2,730 | 27.3% → 28.3% | 1,686 → 4,416 | `PlatformMonitor::wait`                 | `libjvm.dylib`            |
| +192.8% | +2,514 | 21.1% → 24.5% | 1,304 → 3,818 | `WorkerThread::run`                     | `libjvm.dylib`            |
| +191.8% | +2,476 | 20.9% → 24.1% | 1,291 → 3,767 | `Unsafe_Park`                           | `libjvm.dylib`            |
| +192.1% | +2,474 | 20.8% → 24.1% | 1,288 → 3,762 | `Parker::park`                          | `libjvm.dylib`            |
| +164.6% | +1,995 | 19.6% → 20.5% | 1,212 → 3,207 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib`            |
| +161.0% | +1,756 | 17.6% → 18.2% | 1,091 → 2,847 | `JavaThread::thread_main_inner`         | `libjvm.dylib`            |
| +166.4% |   +759 |   7.4% → 7.8% |   456 → 1,215 | `ConcurrentGCThread::run`               | `libjvm.dylib`            |
| +156.1% |   +740 |   7.7% → 7.8% |   474 → 1,214 | `Monitor::wait`                         | `libjvm.dylib`            |
| +166.4% |   +506 |   4.9% → 5.2% |     304 → 810 | `JLI_Launch`                            | `libjli.dylib`            |
| +166.4% |   +506 |   4.9% → 5.2% |     304 → 810 | `main`                                  | `java`                    |
| +167.1% |   +254 |   2.5% → 2.6% |     152 → 406 | `ObjectMonitor::wait`                   | `libjvm.dylib`            |
| +167.1% |   +254 |   2.5% → 2.6% |     152 → 406 | `ObjectSynchronizer::wait`              | `libjvm.dylib`            |
| +167.1% |   +254 |   2.5% → 2.6% |     152 → 406 | `JVM_MonitorWait`                       | `libjvm.dylib`            |
| +169.3% |   +254 |   2.4% → 2.6% |     150 → 404 | `Profiler::timerLoop`                   | `libasyncProfiler.dylib`  |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  +68.2% |  +867 | 20.6% → 13.7% | 1,272 → 2,139 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
|     new |  +376 |   0.0% → 2.4% |       0 → 376 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
|     new |  +359 |   0.0% → 2.3% |       0 → 359 | `$anonfun$2(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| +166.0% |  +249 |   2.4% → 2.6% |     150 → 399 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
| +166.0% |  +249 |   2.4% → 2.6% |     150 → 399 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
| +167.1% |  +249 |   2.4% → 2.5% |     149 → 398 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
| +167.6% |  +248 |   2.4% → 2.5% |     148 → 396 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
| +165.5% |  +245 |   2.4% → 2.5% |     148 → 393 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
| +160.0% |  +232 |   2.3% → 2.4% |     145 → 377 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
| +159.3% |  +231 |   2.3% → 2.4% |     145 → 376 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000040111f1b8` |
| +160.4% |  +231 |   2.3% → 2.4% |     144 → 375 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
| +161.9% |  +225 |   2.2% → 2.3% |     139 → 364 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda`                      |
| +157.7% |  +224 |          2.3% |     142 → 366 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
| +158.3% |  +220 |   2.2% → 2.3% |     139 → 359 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +158.3% |  +220 |   2.2% → 2.3% |     139 → 359 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| +156.4% |  +219 |          2.3% |     140 → 359 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
| +158.0% |  +218 |   2.2% → 2.3% |     138 → 356 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
| +158.0% |  +218 |   2.2% → 2.3% |     138 → 356 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2bd0` |
|  +42.1% |  +200 |   7.7% → 4.3% |     475 → 675 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`             |
|  +88.3% |  +188 |   3.4% → 2.6% |     213 → 401 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |

##### Standard library

|  Change |  Delta |             % |       Samples | Function                                             | Location                                                                |
| ------: | -----: | ------------: | ------------: | ---------------------------------------------------- | ----------------------------------------------------------------------- |
| +127.9% | +2,518 | 31.8% → 28.7% | 1,968 → 4,486 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                     |
| +127.9% | +2,518 | 31.8% → 28.7% | 1,968 → 4,486 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`                             |
| +191.9% | +2,477 | 20.9% → 24.1% | 1,291 → 3,768 | `park(boolean, long)`                                | `jdk.internal.misc.Unsafe`                                              |
| +176.7% | +1,981 | 18.1% → 19.9% | 1,121 → 3,102 | `park()`                                             | `java.util.concurrent.locks.LockSupport`                                |
| +242.8% | +1,651 | 11.0% → 14.9% |   680 → 2,331 | `awaitWork(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`                                     |
|  +75.0% | +1,040 | 22.4% → 15.5% | 1,386 → 2,426 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`                                     |
|  +68.1% |   +871 | 20.7% → 13.8% | 1,279 → 2,150 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue`                           |
|  +68.0% |   +870 | 20.7% → 13.8% | 1,279 → 2,149 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`                                     |
|  +67.9% |   +870 | 20.7% → 13.8% | 1,282 → 2,152 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`                                     |
|  +68.0% |   +866 | 20.6% → 13.7% | 1,273 → 2,139 | `exec()`                                             | `java.util.concurrent.RecursiveTask`                                    |
|  +65.8% |   +820 | 20.2% → 13.2% | 1,247 → 2,067 | `join()`                                             | `java.util.concurrent.ForkJoinTask`                                     |
|  +61.4% |   +680 | 17.9% → 11.4% | 1,107 → 1,787 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue`                           |
| +116.8% |   +347 |   4.8% → 4.1% |     297 → 644 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`                                     |
| +170.7% |   +256 |   2.4% → 2.6% |     150 → 406 | `runWith(Object, Runnable)`                          | `java.lang.Thread`                                                      |
| +170.7% |   +256 |   2.4% → 2.6% |     150 → 406 | `run()`                                              | `java.lang.Thread`                                                      |
| +167.1% |   +254 |   2.5% → 2.6% |     152 → 406 | `wait0(long)`                                        | `java.lang.Object`                                                      |
| +167.1% |   +254 |   2.5% → 2.6% |     152 → 406 | `wait(long)`                                         | `java.lang.Object`                                                      |
| +169.3% |   +254 |   2.4% → 2.6% |     150 → 404 | `parkNanos(Object, long)`                            | `java.util.concurrent.locks.LockSupport`                                |
| +169.3% |   +254 |   2.4% → 2.6% |     150 → 404 | `await(long, TimeUnit)`                              | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| +169.3% |   +254 |   2.4% → 2.6% |     150 → 404 | `await(long)`                                        | `java.lang.ref.ReferenceQueue`                                          |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |            % | Samples | Function                                                                                                               | Location                                    |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed |  -152 |  2.5% → 0.0% | 152 → 0 | `(anonymous)`                                                                                                          | `<unknown>`                                 |
| removed |  -145 |  2.3% → 0.0% | 145 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |  -139 |  2.2% → 0.0% | 139 → 0 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`   |
|  -45.5% |    -5 | 0.2% → <0.1% |  11 → 6 | `Compile::Code_Gen`                                                                                                    | `libjvm.dylib`                              |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `Node_Backward_Iterator::next`                                                                                         | `libjvm.dylib`                              |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `PhaseCFG::global_code_motion`                                                                                         | `libjvm.dylib`                              |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `PhaseCFG::do_global_code_motion`                                                                                      | `libjvm.dylib`                              |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `ObjectMonitor::EnterI`                                                                                                | `libjvm.dylib`                              |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `ObjectMonitor::enter`                                                                                                 | `libjvm.dylib`                              |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `ObjectSynchronizer::enter`                                                                                            | `libjvm.dylib`                              |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `SharedRuntime::monitor_enter_helper`                                                                                  | `libjvm.dylib`                              |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `Runtime1::monitorenter`                                                                                               | `libjvm.dylib`                              |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `monitorenter_nofpu Runtime1 stub`                                                                                     | `<unknown>`                                 |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `G1ParScanThreadState::do_partial_array`                                                                               | `libjvm.dylib`                              |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`                                                                        | `libjvm.dylib`                              |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseCFG::schedule_late`                                                                                              | `libjvm.dylib`                              |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `PhaseChaitin::Split`                                                                                                  | `libjvm.dylib`                              |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `inflate_fast`                                                                                                         | `libzip.dylib`                              |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Java_java_util_zip_Inflater_inflateBytesBytes`                                                                        | `libzip.dylib`                              |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                                          | `java.util.zip.Inflater`                    |

##### Native

|  Change | Delta |            % | Samples | Function                                                        | Location                  |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------- | ------------------------- |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `ObjectMonitor::EnterI`                                         | `libjvm.dylib`            |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `ObjectMonitor::enter`                                          | `libjvm.dylib`            |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `ObjectSynchronizer::enter`                                     | `libjvm.dylib`            |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `SharedRuntime::monitor_enter_helper`                           | `libjvm.dylib`            |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `Runtime1::monitorenter`                                        | `libjvm.dylib`            |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `monitorenter_nofpu Runtime1 stub`                              | `<unknown>`               |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `G1ParScanThreadState::do_partial_array`                        | `libjvm.dylib`            |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `G1ParScanThreadState::trim_queue_to_threshold`                 | `libjvm.dylib`            |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `inflate_fast`                                                  | `libzip.dylib`            |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `Java_java_util_zip_Inflater_inflateBytesBytes`                 | `libzip.dylib`            |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `InstanceKlass::initialize_impl`                                | `libjvm.dylib`            |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `G1FullGCMarker::follow_object`                                 | `libjvm.dylib`            |
|  -50.0% |    -2 | 0.1% → <0.1% |   4 → 2 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` | `libjvm.dylib`            |
|  -50.0% |    -2 | 0.1% → <0.1% |   4 → 2 | `G1AdjustRegionClosure::do_heap_region`                         | `libjvm.dylib`            |
|  -50.0% |    -2 | 0.1% → <0.1% |   4 → 2 | `G1FullGCAdjustTask::work`                                      | `libjvm.dylib`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `JavaThreadParkedState::JavaThreadParkedState`                  | `libjvm.dylib`            |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `_pthread_cond_wait`                                            | `libsystem_pthread.dylib` |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `os::create_thread`                                             | `libjvm.dylib`            |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `JavaThread::JavaThread`                                        | `libjvm.dylib`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `Method::is_final_method`                                       | `libjvm.dylib`            |

##### Ours

|  Change | Delta |            % | Samples | Function                                                                                                               | Location                                    |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed |  -145 |  2.3% → 0.0% | 145 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |  -139 |  2.2% → 0.0% | 139 → 0 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`   |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `create(Path, URI)`                                                                                                    | `org.renaissance.core.ModuleLoader`         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `liftedTree1$1()`                                                                                                      | `scopt.Read$`                               |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `selectBenchmarks(BenchmarkSuite, Seq)`                                                                                | `org.renaissance.harness.RenaissanceSuite$` |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                      | Location                                       |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------- | ---------------------------------------------- |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater`                       |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `inflate(byte[], int, int)`                                   | `java.util.zip.Inflater`                       |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `read(byte[], int, int)`                                      | `java.io.FilterInputStream`                    |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `<init>(HashMap)`                                             | `java.util.HashMap$EntryIterator`              |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `iterator()`                                                  | `java.util.HashMap$EntrySet`                   |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isNamed()`                                                   | `java.lang.Module`                             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `isSealed()`                                                  | `java.lang.Package`                            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getAndVerifyPackage(String, Manifest, URL)`                  | `java.net.URLClassLoader`                      |
|  -33.3% |    -1 |        <0.1% |   3 → 2 | `tryCompensate(long, boolean)`                                | `java.util.concurrent.ForkJoinPool`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `newLength(int, int, int)`                                    | `jdk.internal.util.ArraysSupport`              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `hasNext()`                                                   | `java.util.HashMap$HashIterator`               |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `read(byte[], int, int)`                                      | `java.util.zip.InflaterInputStream`            |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `transferTo(OutputStream)`                                    | `java.io.InputStream`                          |
|  -50.0% |    -1 |        <0.1% |   2 → 1 | `copy(InputStream, Path, CopyOption[])`                       | `java.nio.file.Files`                          |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `characteristics()`                                           | `java.util.stream.Streams$RangeIntSpliterator` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getExactSizeIfKnown()`                                       | `java.util.Spliterator`                        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `exactOutputSizeIfKnown(Spliterator)`                         | `java.util.stream.AbstractPipeline`            |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `boxed()`                                                     | `java.util.stream.DoublePipeline`              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `start0()`                                                    | `java.lang.Thread`                             |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `start()`                                                     | `java.lang.Thread`                             |

##### Unknown

|  Change | Delta |           % | Samples | Function      | Location    |
| ------: | ----: | ----------: | ------: | ------------- | ----------- |
| removed |  -152 | 2.5% → 0.0% | 152 → 0 | `(anonymous)` | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|  Change |  Delta |      % |       Samples | Caller         | Location                  |
| ------: | -----: | -----: | ------------: | -------------- | ------------------------- |
| +175.0% | +5,788 | 100.0% | 3,308 → 9,096 | `thread_start` | `libsystem_pthread.dylib` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

|  Change |  Delta |             % |       Samples | Caller                  | Location                 |
| ------: | -----: | ------------: | ------------: | ----------------------- | ------------------------ |
| +161.9% | +2,729 | 51.5% → 49.3% | 1,686 → 4,415 | `PlatformMonitor::wait` | `libjvm.dylib`           |
| +191.6% | +2,456 | 39.2% → 41.7% | 1,282 → 3,738 | `Parker::park`          | `libjvm.dylib`           |
| +169.3% |   +254 |   4.6% → 4.5% |     150 → 404 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |
| +163.6% |   +252 |   4.7% → 4.5% |     154 → 406 | `PlatformEvent::park`   | `libjvm.dylib`           |

##### `Thread::call_run` (`libjvm.dylib`)

|  Change |  Delta |      % |       Samples | Caller                | Location       |
| ------: | -----: | -----: | ------------: | --------------------- | -------------- |
| +175.4% | +5,535 | 100.0% | 3,155 → 8,690 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|  Change |  Delta |      % |       Samples | Caller           | Location                  |
| ------: | -----: | -----: | ------------: | ---------------- | ------------------------- |
| +175.4% | +5,535 | 100.0% | 3,155 → 8,690 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

|  Change |  Delta |             % |       Samples | Caller                           | Location       |
| ------: | -----: | ------------: | ------------: | -------------------------------- | -------------- |
| +195.2% | +2,510 | 88.4% → 88.7% | 1,286 → 3,796 | `WorkerThread::run`              | `libjvm.dylib` |
| +166.4% |   +253 |  10.4% → 9.5% |     152 → 405 | `os::signal_wait`                | `libjvm.dylib` |
| +366.7% |    +44 |   0.8% → 1.3% |       12 → 56 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
| +380.0% |    +19 |   0.3% → 0.6% |        5 → 24 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|  Change |  Delta |             % |       Samples | Caller                                  | Location       |
| ------: | -----: | ------------: | ------------: | --------------------------------------- | -------------- |
| +164.6% | +1,995 | 71.9% → 72.6% | 1,212 → 3,207 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |
| +155.1% |   +735 | 28.1% → 27.4% |   474 → 1,209 | `Monitor::wait`                         | `libjvm.dylib` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change |  Delta |      % |       Samples | Caller  | Location                                    |
| ------: | -----: | -----: | ------------: | ------- | ------------------------------------------- |
| +127.9% | +2,518 | 100.0% | 1,968 → 4,486 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `WorkerThread::run` (`libjvm.dylib`)

|  Change |  Delta |      % |       Samples | Caller             | Location       |
| ------: | -----: | -----: | ------------: | ------------------ | -------------- |
| +192.8% | +2,514 | 100.0% | 1,304 → 3,818 | `Thread::call_run` | `libjvm.dylib` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|   Change |  Delta |             % |       Samples | Caller                    | Location                                 |
| -------: | -----: | ------------: | ------------: | ------------------------- | ---------------------------------------- |
|  +176.6% | +1,980 | 86.8% → 82.3% | 1,121 → 3,101 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
|  +169.3% |   +254 | 11.6% → 10.7% |     150 → 404 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |
| +1215.0% |   +243 |   1.5% → 7.0% |      20 → 263 | `parkUntil(long)`         | `java.util.concurrent.locks.LockSupport` |

##### `Unsafe_Park` (`libjvm.dylib`)

|  Change |  Delta |      % |       Samples | Caller                | Location                   |
| ------: | -----: | -----: | ------------: | --------------------- | -------------------------- |
| +191.8% | +2,476 | 100.0% | 1,291 → 3,767 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `Parker::park` (`libjvm.dylib`)

|  Change |  Delta |      % |       Samples | Caller        | Location       |
| ------: | -----: | -----: | ------------: | ------------- | -------------- |
| +192.1% | +2,474 | 100.0% | 1,288 → 3,762 | `Unsafe_Park` | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Caller                                                        | Location       |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------- | -------------- |
| +169.3% |  +254 | 12.4% → 12.6% | 150 → 404 | `NotificationThread::notification_thread_entry`               | `libjvm.dylib` |
| +166.4% |  +253 | 12.5% → 12.6% | 152 → 405 | `G1ConcurrentMarkThread::run_service`                         | `libjvm.dylib` |
| +166.4% |  +253 | 12.5% → 12.6% | 152 → 405 | `MonitorDeflationThread::monitor_deflation_thread_entry`      | `libjvm.dylib` |
| +166.4% |  +253 | 12.5% → 12.6% | 152 → 405 | `WatcherThread::sleep`                                        | `libjvm.dylib` |
| +165.8% |  +252 | 12.5% → 12.6% | 152 → 404 | `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` | `libjvm.dylib` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|  Change |  Delta |             % |     Samples | Caller                              | Location                            |
| ------: | -----: | ------------: | ----------: | ----------------------------------- | ----------------------------------- |
| +213.3% | +1,408 | 58.9% → 66.7% | 660 → 2,068 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |
| +124.3% |   +573 | 41.1% → 33.3% | 461 → 1,034 | `awaitDone(int, long)`              | `java.util.concurrent.ForkJoinTask` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|  Change |  Delta |      % |       Samples | Caller             | Location       |
| ------: | -----: | -----: | ------------: | ------------------ | -------------- |
| +161.0% | +1,756 | 100.0% | 1,091 → 2,847 | `Thread::call_run` | `libjvm.dylib` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change |  Delta |      % |     Samples | Caller                              | Location                            |
| ------: | -----: | -----: | ----------: | ----------------------------------- | ----------------------------------- |
| +242.8% | +1,651 | 100.0% | 680 → 2,331 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % |       Samples | Caller   | Location                            |
| ------: | ----: | ------------: | ------------: | -------- | ----------------------------------- |
|  +65.8% |  +820 | 90.0% → 85.2% | 1,247 → 2,067 | `join()` | `java.util.concurrent.ForkJoinTask` |
| +158.3% |  +220 | 10.0% → 14.8% |     139 → 359 | `get()`  | `java.util.concurrent.ForkJoinTask` |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Caller                                   | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------------------------- | ----------------------------------- |
| +68.1% |  +871 | 100.0% | 1,279 → 2,150 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % |       Samples | Caller                                                    | Location                                      |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  +68.0% |  +870 |        100.0% | 1,279 → 2,149 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  +61.3% |  +679 | 86.6% → 83.1% | 1,107 → 1,786 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| +116.8% |  +347 | 23.2% → 30.0% |     297 → 644 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
|  +60.2% |  +162 | 21.0% → 20.1% |     269 → 431 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|  Change | Delta |      % |     Samples | Caller             | Location       |
| ------: | ----: | -----: | ----------: | ------------------ | -------------- |
| +166.4% |  +759 | 100.0% | 456 → 1,215 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|   Change | Delta |             % |   Samples | Caller                            | Location       |
| -------: | ----: | ------------: | --------: | --------------------------------- | -------------- |
|  +145.9% |  +467 | 67.5% → 64.8% | 320 → 787 | `CompileQueue::get`               | `libjvm.dylib` |
|  +166.4% |  +253 | 32.1% → 33.4% | 152 → 405 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |
| +1000.0% |   +20 |   0.4% → 1.8% |    2 → 22 | `VMThread::wait_until_executed`   | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|  Change | Delta |      % |   Samples | Caller | Location |
| ------: | ----: | -----: | --------: | ------ | -------- |
| +166.4% |  +506 | 100.0% | 304 → 810 | `main` | `java`   |

##### `main` (`java`)

|  Change | Delta |     % |   Samples | Caller       | Location       |
| ------: | ----: | ----: | --------: | ------------ | -------------- |
| +166.4% |  +253 | 50.0% | 152 → 405 | `unknown`    | `<unknown>`    |
| +166.4% |  +253 | 50.0% | 152 → 405 | `apple_main` | `libjli.dylib` |

##### `ObjectMonitor::wait` (`libjvm.dylib`)

|  Change | Delta |      % |   Samples | Caller                     | Location       |
| ------: | ----: | -----: | --------: | -------------------------- | -------------- |
| +167.1% |  +254 | 100.0% | 152 → 406 | `ObjectSynchronizer::wait` | `libjvm.dylib` |

##### `ObjectSynchronizer::wait` (`libjvm.dylib`)

|  Change | Delta |      % |   Samples | Caller            | Location       |
| ------: | ----: | -----: | --------: | ----------------- | -------------- |
| +167.1% |  +254 | 100.0% | 152 → 406 | `JVM_MonitorWait` | `libjvm.dylib` |

##### `JVM_MonitorWait` (`libjvm.dylib`)

|  Change | Delta |      % |   Samples | Caller        | Location           |
| ------: | ----: | -----: | --------: | ------------- | ------------------ |
| +167.1% |  +254 | 100.0% | 152 → 406 | `wait0(long)` | `java.lang.Object` |

##### `Profiler::timerLoop` (`libasyncProfiler.dylib`)

|  Change | Delta |      % |   Samples | Caller                                     | Location       |
| ------: | ----: | -----: | --------: | ------------------------------------------ | -------------- |
| +169.3% |  +254 | 100.0% | 150 → 404 | `JvmtiAgentThread::start_function_wrapper` | `libjvm.dylib` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |      % |       Samples | Caller   | Location                             |
| -----: | ----: | -----: | ------------: | -------- | ------------------------------------ |
| +68.2% |  +867 | 100.0% | 1,272 → 2,139 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |             % | Samples | Caller              | Location                                                               |
| -----: | ----: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
|    new |  +376 | 0.0% → 100.0% | 0 → 376 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000040111f1b8` |

##### `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Caller                       | Location                                  |
| -----: | ----: | ------------: | ------: | ---------------------------- | ----------------------------------------- |
|    new |  +359 | 0.0% → 100.0% | 0 → 359 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|  Change | Delta |      % |   Samples | Caller           | Location                        |
| ------: | ----: | -----: | --------: | ---------------- | ------------------------------- |
| +166.0% |  +249 | 100.0% | 150 → 399 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|  Change | Delta |      % |   Samples | Caller                                 | Location                        |
| ------: | ----: | -----: | --------: | -------------------------------------- | ------------------------------- |
| +167.1% |  +249 | 100.0% | 149 → 398 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|  Change | Delta |      % |   Samples | Caller                         | Location                                             |
| ------: | ----: | -----: | --------: | ------------------------------ | ---------------------------------------------------- |
| +167.6% |  +248 | 100.0% | 148 → 396 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000000401004800` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |      % |   Samples | Caller           | Location                                   |
| ------: | ----: | -----: | --------: | ---------------- | ------------------------------------------ |
| +165.5% |  +245 | 100.0% | 148 → 393 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |      % |   Samples | Caller           | Location                                    |
| ------: | ----: | -----: | --------: | ---------------- | ------------------------------------------- |
| +160.0% |  +232 | 100.0% | 145 → 377 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000040111f1b8`)

|  Change | Delta |      % |   Samples | Caller          | Location                             |
| ------: | ----: | -----: | --------: | --------------- | ------------------------------------ |
| +159.3% |  +231 | 100.0% | 145 → 376 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|  Change | Delta |             % | Samples | Caller                                                                                                                 | Location                                    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new |  +375 | 0.0% → 100.0% | 0 → 375 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |  -144 | 100.0% → 0.0% | 144 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda`)

|  Change | Delta |              % |   Samples | Caller                                           | Location                                                           |
| ------: | ----: | -------------: | --------: | ------------------------------------------------ | ------------------------------------------------------------------ |
| +158.3% |  +220 | 100.0% → 98.6% | 139 → 359 | `map(Function1)`                                 | `scala.collection.immutable.Range`                                 |
|     new |    +5 |    0.0% → 1.4% |     0 → 5 | `lambda$toCsvRows$2(String[], Function, String)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|  Change | Delta |      % |   Samples | Caller               | Location                                  |
| ------: | ----: | -----: | --------: | -------------------- | ----------------------------------------- |
| +157.7% |  +224 | 100.0% | 142 → 366 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Caller            | Location                                  |
| ------: | ----: | ------------: | ------: | ----------------- | ----------------------------------------- |
|     new |  +359 | 0.0% → 100.0% | 0 → 359 | `$anonfun$2(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |
| removed |  -139 | 100.0% → 0.0% | 139 → 0 | `$anonfun$1(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |      % |   Samples | Caller          | Location                                          |
| ------: | ----: | -----: | --------: | --------------- | ------------------------------------------------- |
| +158.3% |  +220 | 100.0% | 139 → 359 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |      % |   Samples | Caller                  | Location                                  |
| ------: | ----: | -----: | --------: | ----------------------- | ----------------------------------------- |
| +156.4% |  +219 | 100.0% | 140 → 359 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |      % |   Samples | Caller   | Location                                                               |
| ------: | ----: | -----: | --------: | -------- | ---------------------------------------------------------------------- |
| +158.0% |  +218 | 100.0% | 138 → 356 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2bd0` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2bd0`)

|  Change | Delta |      % |   Samples | Caller   | Location                                            |
| ------: | ----: | -----: | --------: | -------- | --------------------------------------------------- |
| +158.0% |  +218 | 100.0% | 138 → 356 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | --------: | ------------------- | ---------------------------------------------------------- |
| +42.1% |  +200 | 100.0% | 475 → 675 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +42.1% |  +200 | 100.0% | 475 → 675 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                               |
| -----: | ----: | -----: | --------: | ------------------- | ------------------------------------------------------ |
| +88.3% |  +188 | 100.0% | 213 → 401 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +88.3% |  +188 | 100.0% | 213 → 401 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Caller                              | Location                            |
| -----: | ----: | -----: | ------------: | ----------------------------------- | ----------------------------------- |
| +67.9% |  +870 | 100.0% | 1,282 → 2,152 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Caller     | Location                            |
| -----: | ----: | -----: | ------------: | ---------- | ----------------------------------- |
| +68.0% |  +866 | 100.0% | 1,273 → 2,139 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Caller      | Location                                               |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------ |
| +65.8% |  +820 | 100.0% | 1,247 → 2,067 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------- | ----------------------------------- |
| +61.4% |  +680 | 100.0% | 1,107 → 1,787 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % |   Samples | Caller                         | Location                                               |
| ------: | ----: | ------------: | --------: | ------------------------------ | ------------------------------------------------------ |
| +157.2% |  +217 | 46.5% → 55.1% | 138 → 355 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
|  +91.3% |  +189 | 69.7% → 61.5% | 207 → 396 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|  Change | Delta |      % |   Samples | Caller  | Location           |
| ------: | ----: | -----: | --------: | ------- | ------------------ |
| +170.7% |  +256 | 100.0% | 150 → 406 | `run()` | `java.lang.Thread` |

##### `run()` (`java.lang.Thread`)

|  Change | Delta |              % |   Samples | Caller  | Location                            |
| ------: | ----: | -------------: | --------: | ------- | ----------------------------------- |
| +169.3% |  +254 | 100.0% → 99.5% | 150 → 404 | `run()` | `jdk.internal.misc.InnocuousThread` |

##### `wait0(long)` (`java.lang.Object`)

|  Change | Delta |      % |   Samples | Caller       | Location           |
| ------: | ----: | -----: | --------: | ------------ | ------------------ |
| +167.1% |  +254 | 100.0% | 152 → 406 | `wait(long)` | `java.lang.Object` |

##### `wait(long)` (`java.lang.Object`)

|  Change | Delta |              % |   Samples | Caller       | Location           |
| ------: | ----: | -------------: | --------: | ------------ | ------------------ |
| +166.4% |  +253 | 100.0% → 99.8% | 152 → 405 | `wait()`     | `java.lang.Object` |
|     new |    +1 |    0.0% → 0.2% |     0 → 1 | `join(long)` | `java.lang.Thread` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|  Change | Delta |      % |   Samples | Caller                  | Location                                                                |
| ------: | ----: | -----: | --------: | ----------------------- | ----------------------------------------------------------------------- |
| +169.3% |  +254 | 100.0% | 150 → 404 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|  Change | Delta |      % |   Samples | Caller        | Location                       |
| ------: | ----: | -----: | --------: | ------------- | ------------------------------ |
| +169.3% |  +254 | 100.0% | 150 → 404 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|  Change | Delta |      % |   Samples | Caller          | Location                       |
| ------: | ----: | -----: | --------: | --------------- | ------------------------------ |
| +169.3% |  +254 | 100.0% | 150 → 404 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Caller              | Location                                                               |
| ------: | ----: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| removed |  -145 | 100.0% → 0.0% | 145 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f208` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |             % | Samples | Caller                       | Location                                  |
| ------: | ----: | ------------: | ------: | ---------------------------- | ----------------------------------------- |
| removed |  -139 | 100.0% → 0.0% | 139 → 0 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller             | Location       |
| -----: | ----: | -----: | ------: | ------------------ | -------------- |
| -45.5% |    -5 | 100.0% |  11 → 6 | `Compile::Compile` | `libjvm.dylib` |

##### `Node_Backward_Iterator::next` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                         | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------ | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `PhaseCFG::schedule_late`      | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseCFG::global_code_motion` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |

##### `PhaseCFG::do_global_code_motion` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller              | Location       |
| ------: | ----: | ------------: | ------: | ------------------- | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `ObjectMonitor::EnterI` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                 | Location       |
| -----: | ----: | -----: | ------: | ---------------------- | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `ObjectMonitor::enter` | `libjvm.dylib` |

##### `ObjectMonitor::enter` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                      | Location       |
| -----: | ----: | -----: | ------: | --------------------------- | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `ObjectSynchronizer::enter` | `libjvm.dylib` |

##### `ObjectSynchronizer::enter` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------- | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `SharedRuntime::monitor_enter_helper` | `libjvm.dylib` |

##### `SharedRuntime::monitor_enter_helper` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `Runtime1::monitorenter` | `libjvm.dylib` |

##### `Runtime1::monitorenter` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                             | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------- | ----------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `monitorenter_nofpu Runtime1 stub` | `<unknown>` |

##### `monitorenter_nofpu Runtime1 stub` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                             | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ---------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `loadClass(String, boolean)`       | `java.lang.ClassLoader`                  |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `G1ParScanThreadState::do_partial_array` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                          | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `G1ParScanThreadState::trim_queue_to_threshold` | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller                                       | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `G1ParEvacuateFollowersClosure::do_void`     | `libjvm.dylib` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `G1ParScanThreadState::steal_and_trim_queue` | `libjvm.dylib` |

##### `PhaseCFG::schedule_late` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |

##### `inflate_fast` (`libzip.dylib`)

|  Change | Delta |             % | Samples | Caller                                          | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|  Change | Delta |             % | Samples | Caller                                                        | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- | ------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|  Change | Delta |             % | Samples | Caller                      | Location                 |
| ------: | ----: | ------------: | ------: | --------------------------- | ------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `InstanceKlass::initialize_impl` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                        | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `LinkResolver::resolve_field` | `libjvm.dylib` |

##### `G1FullGCMarker::follow_object` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `G1FullGCMarker::follow_marking_stacks` | `libjvm.dylib` |

##### `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                                  | Location       |
| -----: | ----: | -----: | ------: | --------------------------------------- | -------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `G1AdjustRegionClosure::do_heap_region` | `libjvm.dylib` |

##### `G1AdjustRegionClosure::do_heap_region` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `HeapRegionManager::par_iterate` | `libjvm.dylib` |

##### `G1FullGCAdjustTask::work` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `WorkerThread::run` | `libjvm.dylib` |

##### `JavaThreadParkedState::JavaThreadParkedState` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller        | Location       |
| ------: | ----: | ------------: | ------: | ------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Unsafe_Park` | `libjvm.dylib` |

##### `_pthread_cond_wait` (`libsystem_pthread.dylib`)

|  Change | Delta |             % | Samples | Caller                  | Location       |
| ------: | ----: | ------------: | ------: | ----------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Parker::park`          | `libjvm.dylib` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `os::create_thread` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `JavaThread::JavaThread` | `libjvm.dylib` |

##### `JavaThread::JavaThread` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller            | Location       |
| ------: | ----: | -----------: | ------: | ----------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `JVM_StartThread` | `libjvm.dylib` |

##### `Method::is_final_method` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                 | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `klassVtable::update_inherited_vtable` | `libjvm.dylib` |

##### `create(Path, URI)` (`org.renaissance.core.ModuleLoader`)

|  Change | Delta |             % | Samples | Caller                                 | Location                        |
| ------: | ----: | ------------: | ------: | -------------------------------------- | ------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `liftedTree1$1()` (`scopt.Read$`)

|  Change | Delta |             % | Samples | Caller       | Location      |
| ------: | ----: | ------------: | ------: | ------------ | ------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<clinit>()` | `scopt.Read$` |

##### `selectBenchmarks(BenchmarkSuite, Seq)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Caller           | Location                                    |
| ------: | ----: | ------------: | ------: | ---------------- | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|  Change | Delta |             % | Samples | Caller                   | Location                            |
| ------: | ----: | ------------: | ------: | ------------------------ | ----------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `read(byte[], int, int)` (`java.io.FilterInputStream`)

|  Change | Delta |             % | Samples | Caller                     | Location              |
| ------: | ----: | ------------: | ------: | -------------------------- | --------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `transferTo(OutputStream)` | `java.io.InputStream` |

##### `<init>(HashMap)` (`java.util.HashMap$EntryIterator`)

|  Change | Delta |             % | Samples | Caller       | Location                     |
| ------: | ----: | ------------: | ------: | ------------ | ---------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `iterator()` | `java.util.HashMap$EntrySet` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

|  Change | Delta |             % | Samples | Caller                        | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------- | ------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `isNamed()` (`java.lang.Module`)

|  Change | Delta |             % | Samples | Caller       | Location            |
| ------: | ----: | ------------: | ------: | ------------ | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `isSealed()` | `java.lang.Package` |

##### `isSealed()` (`java.lang.Package`)

|  Change | Delta |             % | Samples | Caller                                       | Location                  |
| ------: | ----: | ------------: | ------: | -------------------------------------------- | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getAndVerifyPackage(String, Manifest, URL)` | `java.net.URLClassLoader` |

##### `getAndVerifyPackage(String, Manifest, URL)` (`java.net.URLClassLoader`)

|  Change | Delta |             % | Samples | Caller                          | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------------- | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `defineClass(String, Resource)` | `java.net.URLClassLoader` |

##### `tryCompensate(long, boolean)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                                                    | Location                            |
| -----: | ----: | -----: | ------: | --------------------------------------------------------- | ----------------------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool` |

##### `newLength(int, int, int)` (`jdk.internal.util.ArraysSupport`)

|  Change | Delta |             % | Samples | Caller      | Location              |
| ------: | ----: | ------------: | ------: | ----------- | --------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `grow(int)` | `java.util.ArrayList` |

##### `hasNext()` (`java.util.HashMap$HashIterator`)

|  Change | Delta |             % | Samples | Caller                        | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------- | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|  Change | Delta |             % | Samples | Caller                   | Location                       |
| ------: | ----: | ------------: | ------: | ------------------------ | ------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `read(byte[], int, int)` | `java.io.FilterInputStream`    |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `getBytes()`             | `jdk.internal.loader.Resource` |

##### `transferTo(OutputStream)` (`java.io.InputStream`)

| Change | Delta |      % | Samples | Caller                                  | Location              |
| -----: | ----: | -----: | ------: | --------------------------------------- | --------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `copy(InputStream, Path, CopyOption[])` | `java.nio.file.Files` |

##### `copy(InputStream, Path, CopyOption[])` (`java.nio.file.Files`)

| Change | Delta |      % | Samples | Caller                          | Location                             |
| -----: | ----: | -----: | ------: | ------------------------------- | ------------------------------------ |
| -50.0% |    -1 | 100.0% |   2 → 1 | `extractResource(String, Path)` | `org.renaissance.core.ResourceUtils` |

##### `characteristics()` (`java.util.stream.Streams$RangeIntSpliterator`)

|  Change | Delta |             % | Samples | Caller                  | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getExactSizeIfKnown()` | `java.util.Spliterator` |

##### `getExactSizeIfKnown()` (`java.util.Spliterator`)

|  Change | Delta |             % | Samples | Caller                                | Location                            |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `exactOutputSizeIfKnown(Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `exactOutputSizeIfKnown(Spliterator)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Caller                                        | Location                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `evaluate(Spliterator, boolean, IntFunction)` | `java.util.stream.AbstractPipeline` |

##### `boxed()` (`java.util.stream.DoublePipeline`)

|  Change | Delta |             % | Samples | Caller            | Location                                               |
| ------: | ----: | ------------: | ------: | ----------------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `boxed(double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `start0()` (`java.lang.Thread`)

|  Change | Delta |             % | Samples | Caller    | Location           |
| ------: | ----: | ------------: | ------: | --------- | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `start()` | `java.lang.Thread` |

##### `start()` (`java.lang.Thread`)

|  Change | Delta |             % | Samples | Caller       | Location                             |
| ------: | ----: | ------------: | ------: | ------------ | ------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `runHooks()` | `java.lang.ApplicationShutdownHooks` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_pthread_start` (`libsystem_pthread.dylib`)

|  Change |  Delta |             % |       Samples | Callee                | Location       |
| ------: | -----: | ------------: | ------------: | --------------------- | -------------- |
| +175.4% | +5,535 | 95.4% → 95.5% | 3,155 → 8,690 | `thread_native_entry` | `libjvm.dylib` |
| +166.4% |   +253 |   4.6% → 4.5% |     152 → 405 | `apple_main`          | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

|  Change |  Delta |      % |       Samples | Callee           | Location                  |
| ------: | -----: | -----: | ------------: | ---------------- | ------------------------- |
| +175.0% | +5,788 | 100.0% | 3,308 → 9,096 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

|  Change |  Delta |             % |       Samples | Callee                          | Location       |
| ------: | -----: | ------------: | ------------: | ------------------------------- | -------------- |
| +192.8% | +2,514 | 41.3% → 43.9% | 1,304 → 3,818 | `WorkerThread::run`             | `libjvm.dylib` |
| +161.0% | +1,756 | 34.6% → 32.8% | 1,091 → 2,847 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| +166.4% |   +759 | 14.5% → 14.0% |   456 → 1,215 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
| +166.4% |   +253 |   4.8% → 4.7% |     152 → 405 | `WatcherThread::run`            | `libjvm.dylib` |
| +166.4% |   +253 |   4.8% → 4.7% |     152 → 405 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

|  Change |  Delta |      % |       Samples | Callee             | Location       |
| ------: | -----: | -----: | ------------: | ------------------ | -------------- |
| +175.4% | +5,535 | 100.0% | 3,155 → 8,690 | `Thread::call_run` | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

|  Change |  Delta |            % |       Samples | Callee               | Location                  |
| ------: | -----: | -----------: | ------------: | -------------------- | ------------------------- |
| +161.9% | +2,729 |       100.0% | 1,686 → 4,415 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|     new |     +1 | 0.0% → <0.1% |         0 → 1 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change |  Delta |             % |       Samples | Callee                                   | Location                            |
| ------: | -----: | ------------: | ------------: | ---------------------------------------- | ----------------------------------- |
| +242.8% | +1,651 | 34.6% → 52.0% |   680 → 2,331 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |
|  +67.9% |   +870 | 65.1% → 48.0% | 1,282 → 2,152 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

|  Change |  Delta |      % |       Samples | Callee                              | Location                            |
| ------: | -----: | -----: | ------------: | ----------------------------------- | ----------------------------------- |
| +127.9% | +2,518 | 100.0% | 1,968 → 4,486 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `WorkerThread::run` (`libjvm.dylib`)

|  Change |  Delta |             % |       Samples | Callee                            | Location                 |
| ------: | -----: | ------------: | ------------: | --------------------------------- | ------------------------ |
| +195.2% | +2,510 | 98.6% → 99.4% | 1,286 → 3,796 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
|     new |     +4 |   0.0% → 0.1% |         0 → 4 | `G1FullGCPrepareTask::work`       | `libjvm.dylib`           |
|  -50.0% |     -2 |   0.3% → 0.1% |         4 → 2 | `G1FullGCAdjustTask::work`        | `libjvm.dylib`           |
|  +11.1% |     +1 |   0.7% → 0.3% |        9 → 10 | `G1FullGCMarkTask::work`          | `libjvm.dylib`           |
|     new |     +1 |  0.0% → <0.1% |         0 → 1 | `G1FullGCResetMetadataTask::work` | `libjvm.dylib`           |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|  Change |  Delta |            % |       Samples | Callee                                | Location       |
| ------: | -----: | -----------: | ------------: | ------------------------------------- | -------------- |
| +191.8% | +2,476 |       100.0% | 1,291 → 3,767 | `Unsafe_Park`                         | `libjvm.dylib` |
|     new |     +1 | 0.0% → <0.1% |         0 → 1 | `java_lang_Thread::set_thread_status` | `libjvm.dylib` |

##### `Unsafe_Park` (`libjvm.dylib`)

|  Change |  Delta |             % |       Samples | Callee                                         | Location                  |
| ------: | -----: | ------------: | ------------: | ---------------------------------------------- | ------------------------- |
| +192.1% | +2,474 | 99.8% → 99.9% | 1,288 → 3,762 | `Parker::park`                                 | `libjvm.dylib`            |
| removed |     -1 |   0.1% → 0.0% |         1 → 0 | `JavaThreadParkedState::JavaThreadParkedState` | `libjvm.dylib`            |
|  +50.0% |     +1 |   0.2% → 0.1% |         2 → 3 | `pthread_jit_write_protect_np`                 | `libsystem_pthread.dylib` |
|     new |     +1 |  0.0% → <0.1% |         0 → 1 | `JavaThread::is_interrupted`                   | `libjvm.dylib`            |

##### `Parker::park` (`libjvm.dylib`)

|   Change |  Delta |             % |       Samples | Callee                        | Location                  |
| -------: | -----: | ------------: | ------------: | ----------------------------- | ------------------------- |
|  +191.6% | +2,456 | 99.5% → 99.4% | 1,282 → 3,738 | `__psynch_cvwait`             | `libsystem_kernel.dylib`  |
| +1050.0% |    +21 |   0.2% → 0.6% |        2 → 23 | `SafepointMechanism::process` | `libjvm.dylib`            |
|  removed |     -2 |   0.2% → 0.0% |         2 → 0 | `_pthread_cond_wait`          | `libsystem_pthread.dylib` |
|      new |     +1 |  0.0% → <0.1% |         0 → 1 | `__gettimeofday`              | `libsystem_kernel.dylib`  |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

|  Change |  Delta |      % |       Samples | Callee                  | Location       |
| ------: | -----: | -----: | ------------: | ----------------------- | -------------- |
| +164.6% | +1,995 | 100.0% | 1,212 → 3,207 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|  Change |  Delta |      % |       Samples | Callee                | Location                   |
| ------: | -----: | -----: | ------------: | --------------------- | -------------------------- |
| +176.6% | +1,980 | 100.0% | 1,121 → 3,101 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

|  Change | Delta |             % |   Samples | Callee                                          | Location       |
| ------: | ----: | ------------: | --------: | ----------------------------------------------- | -------------- |
| +146.0% |  +489 | 30.7% → 28.9% | 335 → 824 | `CompileBroker::compiler_thread_loop`           | `libjvm.dylib` |
| +169.3% |  +254 | 13.7% → 14.2% | 150 → 404 | `JvmtiAgentThread::start_function_wrapper`      | `libjvm.dylib` |
| +169.3% |  +254 | 13.7% → 14.2% | 150 → 404 | `NotificationThread::notification_thread_entry` | `libjvm.dylib` |
| +166.4% |  +253 | 13.9% → 14.2% | 152 → 405 | `signal_thread_entry`                           | `libjvm.dylib` |
| +166.4% |  +253 | 13.9% → 14.2% | 152 → 405 | `ServiceThread::service_thread_entry`           | `libjvm.dylib` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|   Change |  Delta |             % |     Samples | Callee            | Location                                 |
| -------: | -----: | ------------: | ----------: | ----------------- | ---------------------------------------- |
|  +213.3% | +1,408 | 97.1% → 88.7% | 660 → 2,068 | `park()`          | `java.util.concurrent.locks.LockSupport` |
| +1215.0% |   +243 |  2.9% → 11.3% |    20 → 263 | `parkUntil(long)` | `java.util.concurrent.locks.LockSupport` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % |       Samples | Callee                                                    | Location                                      |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  +61.4% |  +680 | 79.9% → 73.7% | 1,107 → 1,787 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| +124.3% |  +573 | 33.3% → 42.6% |   461 → 1,034 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
|  +55.0% |  +154 | 20.2% → 17.9% |     280 → 434 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Callee     | Location                            |
| -----: | ----: | -----: | ------------: | ---------- | ----------------------------------- |
| +68.0% |  +870 | 100.0% | 1,279 → 2,149 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % |       Samples | Callee      | Location                                            |
| ------: | ----: | ------------: | ------------: | ----------- | --------------------------------------------------- |
|  +68.0% |  +866 |         99.5% | 1,273 → 2,139 | `exec()`    | `java.util.concurrent.RecursiveTask`                |
| +158.0% |  +218 | 10.8% → 16.6% |     138 → 356 | `exec()`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
|  +20.0% |    +2 |   0.8% → 0.6% |       10 → 12 | `setDone()` | `java.util.concurrent.ForkJoinTask`                 |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

|  Change | Delta |     % |   Samples | Callee                                  | Location       |
| ------: | ----: | ----: | --------: | --------------------------------------- | -------------- |
| +166.4% |  +253 | 33.3% | 152 → 405 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |
| +166.4% |  +253 | 33.3% | 152 → 405 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| +166.4% |  +253 | 33.3% | 152 → 405 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

|  Change | Delta |              % |     Samples | Callee                                                                        | Location       |
| ------: | ----: | -------------: | ----------: | ----------------------------------------------------------------------------- | -------------- |
| +155.1% |  +735 | 100.0% → 99.6% | 474 → 1,209 | `PlatformMonitor::wait`                                                       | `libjvm.dylib` |
|     new |    +5 |    0.0% → 0.4% |       0 → 5 | `ThreadBlockInVMPreprocess<InFlightMutexRelease>::~ThreadBlockInVMPreprocess` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

|  Change | Delta |     % |   Samples | Callee                       | Location       |
| ------: | ----: | ----: | --------: | ---------------------------- | -------------- |
| +166.4% |  +253 | 50.0% | 152 → 405 | `CreateExecutionEnvironment` | `libjli.dylib` |
| +166.4% |  +253 | 50.0% | 152 → 405 | `ContinueInNewThread`        | `libjli.dylib` |

##### `main` (`java`)

|  Change | Delta |      % |   Samples | Callee       | Location       |
| ------: | ----: | -----: | --------: | ------------ | -------------- |
| +166.4% |  +506 | 100.0% | 304 → 810 | `JLI_Launch` | `libjli.dylib` |

##### `ObjectMonitor::wait` (`libjvm.dylib`)

|  Change | Delta |      % |   Samples | Callee                | Location       |
| ------: | ----: | -----: | --------: | --------------------- | -------------- |
| +167.1% |  +254 | 100.0% | 152 → 406 | `PlatformEvent::park` | `libjvm.dylib` |

##### `ObjectSynchronizer::wait` (`libjvm.dylib`)

|  Change | Delta |      % |   Samples | Callee                | Location       |
| ------: | ----: | -----: | --------: | --------------------- | -------------- |
| +167.1% |  +254 | 100.0% | 152 → 406 | `ObjectMonitor::wait` | `libjvm.dylib` |

##### `JVM_MonitorWait` (`libjvm.dylib`)

|  Change | Delta |      % |   Samples | Callee                     | Location       |
| ------: | ----: | -----: | --------: | -------------------------- | -------------- |
| +167.1% |  +254 | 100.0% | 152 → 406 | `ObjectSynchronizer::wait` | `libjvm.dylib` |

##### `Profiler::timerLoop` (`libasyncProfiler.dylib`)

|  Change | Delta |      % |   Samples | Callee            | Location                 |
| ------: | ----: | -----: | --------: | ----------------- | ------------------------ |
| +169.3% |  +254 | 100.0% | 150 → 404 | `__psynch_cvwait` | `libsystem_kernel.dylib` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

|  Change | Delta |             % |       Samples | Callee                           | Location                                                   |
| ------: | ----: | ------------: | ------------: | -------------------------------- | ---------------------------------------------------------- |
|  +65.8% |  +820 | 98.0% → 96.6% | 1,247 → 2,067 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
|  +42.1% |  +200 | 37.3% → 31.6% |     475 → 675 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  +88.3% |  +188 | 16.7% → 18.7% |     213 → 401 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
|  +45.9% |  +169 | 28.9% → 25.1% |     368 → 537 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| +171.8% |  +134 |   6.1% → 9.9% |      78 → 212 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |  +375 | 0.0% → 99.7% | 0 → 375 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |    +1 |  0.0% → 0.3% |   0 → 1 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Callee                | Location                                    |
| -----: | ----: | ------------: | ------: | --------------------- | ------------------------------------------- |
|    new |  +359 | 0.0% → 100.0% | 0 → 359 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

|  Change | Delta |             % |   Samples | Callee                                                      | Location                            |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------- | ----------------------------------- |
| +167.1% |  +249 | 99.3% → 99.7% | 149 → 398 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher`     |
| removed |    -1 |   0.7% → 0.0% |     1 → 0 | `create(Path, URI)`                                         | `org.renaissance.core.ModuleLoader` |
|     new |    +1 |   0.0% → 0.3% |     0 → 1 | `createScratchRoot(Path, boolean)`                          | `org.renaissance.core.Launcher`     |

##### `main(String[])` (`org.renaissance.core.Launcher`)

|  Change | Delta |      % |   Samples | Callee                                 | Location                        |
| ------: | ----: | -----: | --------: | -------------------------------------- | ------------------------------- |
| +166.0% |  +249 | 100.0% | 150 → 399 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

|  Change | Delta |             % |   Samples | Callee                               | Location                            |
| ------: | ----: | ------------: | --------: | ------------------------------------ | ----------------------------------- |
| +167.6% |  +248 | 99.3% → 99.5% | 148 → 396 | `invoke(Object, Object[])`           | `java.lang.reflect.Method`          |
| +100.0% |    +1 |   0.7% → 0.5% |     1 → 2 | `createClassLoaderForModule(String)` | `org.renaissance.core.ModuleLoader` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|  Change | Delta |              % |   Samples | Callee              | Location                                    |
| ------: | ----: | -------------: | --------: | ------------------- | ------------------------------------------- |
| +165.5% |  +245 | 100.0% → 99.2% | 148 → 393 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
|     new |    +3 |    0.0% → 0.8% |     0 → 3 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % |   Samples | Callee                                                                        | Location                                    |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
| +160.0% |  +232 | 98.0% → 95.9% | 145 → 377 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
|     new |    +4 |   0.0% → 1.0% |     0 → 4 | `parse(String[])`                                                             | `org.renaissance.harness.ConfigParser`      |
| +300.0% |    +3 |   0.7% → 1.0% |     1 → 4 | `<clinit>()`                                                                  | `scala.Predef$`                             |
| +200.0% |    +2 |   0.7% → 0.8% |     1 → 3 | `<init>(Map)`                                                                 | `org.renaissance.harness.ConfigParser`      |
|     new |    +2 |   0.0% → 0.5% |     0 → 2 | `apply(Function0)`                                                            | `scala.util.Try$`                           |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |              % |   Samples | Callee                                                           | Location                               |
| ------: | ----: | -------------: | --------: | ---------------------------------------------------------------- | -------------------------------------- |
| +159.3% |  +231 | 100.0% → 99.7% | 145 → 376 | `foreach(Function1)`                                             | `scala.collection.immutable.List`      |
|     new |    +1 |    0.0% → 0.3% |     0 → 1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000040111f1b8`)

|  Change | Delta |             % | Samples | Callee                                                                                                                 | Location                                    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|     new |  +376 | 0.0% → 100.0% | 0 → 376 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |  -145 | 100.0% → 0.0% | 145 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|  Change | Delta |             % |   Samples | Callee                             | Location                                  |
| ------: | ----: | ------------: | --------: | ---------------------------------- | ----------------------------------------- |
| +157.7% |  +224 | 98.6% → 97.6% | 142 → 366 | `executeOperation(int)`            | `org.renaissance.harness.ExecutionDriver` |
| +350.0% |    +7 |   1.4% → 2.4% |     2 → 9 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda`)

|  Change | Delta |              % |   Samples | Callee                           | Location                                  |
| ------: | ----: | -------------: | --------: | -------------------------------- | ----------------------------------------- |
| +158.3% |  +220 | 100.0% → 98.6% | 139 → 359 | `$anonfun$adapted$1(Object)`     | `org.renaissance.jdk.concurrent.FjKmeans` |
|     new |    +5 |    0.0% → 1.4% |     0 → 5 | `setUpBeforeAll$$anonfun$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

|  Change | Delta |             % |   Samples | Callee                                            | Location                                                             |
| ------: | ----: | ------------: | --------: | ------------------------------------------------- | -------------------------------------------------------------------- |
| +156.4% |  +219 | 98.6% → 98.1% | 140 → 359 | `run(BenchmarkContext)`                           | `org.renaissance.jdk.concurrent.FjKmeans`                            |
| +200.0% |    +4 |   1.4% → 1.6% |     2 → 6 | `notifyAfterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.EventDispatcher`                            |
|     new |    +1 |   0.0% → 0.3% |     0 → 1 | `validate()`                                      | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda.0x00000004011a7770` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |      % |   Samples | Callee  | Location                            |
| ------: | ----: | -----: | --------: | ------- | ----------------------------------- |
| +158.3% |  +220 | 100.0% | 139 → 359 | `get()` | `java.util.concurrent.ForkJoinTask` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |             % | Samples | Callee            | Location                                  |
| ------: | ----: | ------------: | ------: | ----------------- | ----------------------------------------- |
|     new |  +359 | 0.0% → 100.0% | 0 → 359 | `$anonfun$2(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |
| removed |  -139 | 100.0% → 0.0% | 139 → 0 | `$anonfun$1(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |              % |   Samples | Callee           | Location                           |
| ------: | ----: | -------------: | --------: | ---------------- | ---------------------------------- |
| +158.3% |  +220 | 99.3% → 100.0% | 139 → 359 | `map(Function1)` | `scala.collection.immutable.Range` |
| removed |    -1 |    0.7% → 0.0% |     1 → 0 | `<clinit>()`     | `scala.Predef$`                    |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |              % |   Samples | Callee               | Location                            |
| ------: | ----: | -------------: | --------: | -------------------- | ----------------------------------- |
| +157.2% |  +217 | 100.0% → 99.7% | 138 → 355 | `invoke()`           | `java.util.concurrent.ForkJoinTask` |
|     new |    +1 |    0.0% → 0.3% |     0 → 1 | `<init>(Collection)` | `java.util.ArrayList`               |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a2bd0`)

|  Change | Delta |      % |   Samples | Callee                         | Location                                    |
| ------: | ----: | -----: | --------: | ------------------------------ | ------------------------------------------- |
| +158.0% |  +218 | 100.0% | 138 → 356 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |             % |   Samples | Callee                   | Location                                                   |
| -----: | ----: | ------------: | --------: | ------------------------ | ---------------------------------------------------------- |
| +42.1% |  +200 |        100.0% | 475 → 675 | `computeDirectly()`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +34.0% |  +118 | 73.1% → 68.9% | 347 → 465 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +64.1% |   +82 | 26.9% → 31.1% | 128 → 210 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |              % |   Samples | Callee                     | Location                                               |
| -----: | ----: | -------------: | --------: | -------------------------- | ------------------------------------------------------ |
| +88.3% |  +188 |         100.0% | 213 → 401 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| +87.8% |  +187 | 100.0% → 99.8% | 213 → 400 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |       Samples | Callee                                               | Location                                      |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------- | --------------------------------------------- |
| +68.1% |  +871 | 99.8% → 99.9% | 1,279 → 2,150 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -50.0% |    -1 |  0.2% → <0.1% |         2 → 1 | `signalWork()`                                       | `java.util.concurrent.ForkJoinPool`           |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |              % |       Samples | Callee      | Location                                               |
| -----: | ----: | -------------: | ------------: | ----------- | ------------------------------------------------------ |
| +68.2% |  +867 | 99.9% → 100.0% | 1,272 → 2,139 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |            % |       Samples | Callee                           | Location                             |
| -----: | ----: | -----------: | ------------: | -------------------------------- | ------------------------------------ |
| +65.8% |  +820 |       100.0% | 1,247 → 2,067 | `awaitDone(int, long)`           | `java.util.concurrent.ForkJoinTask`  |
|    new |    +2 |  0.0% → 0.1% |         0 → 2 | `counter_overflow Runtime1 stub` | `<unknown>`                          |
|    new |    +1 | 0.0% → <0.1% |         0 → 1 | `getRawResult()`                 | `java.util.concurrent.RecursiveTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |              % |       Samples | Callee                                 | Location                                      |
| -----: | ----: | -------------: | ------------: | -------------------------------------- | --------------------------------------------- |
| +61.3% |  +679 | 100.0% → 99.9% | 1,107 → 1,786 | `doExec()`                             | `java.util.concurrent.ForkJoinTask`           |
|    new |    +1 |    0.0% → 0.1% |         0 → 1 | `releaseAccess()`                      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|    new |    +1 |    0.0% → 0.1% |         0 → 1 | `getAndClearSlot(ForkJoinTask[], int)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |      % |   Samples | Callee     | Location                            |
| ------: | ----: | -----: | --------: | ---------- | ----------------------------------- |
| +116.8% |  +347 | 100.0% | 297 → 644 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|  Change | Delta |              % |   Samples | Callee  | Location                                                   |
| ------: | ----: | -------------: | --------: | ------- | ---------------------------------------------------------- |
| +169.3% |  +254 | 100.0% → 99.5% | 150 → 404 | `run()` | `jdk.internal.ref.CleanerImpl`                             |
|     new |    +2 |    0.0% → 0.5% |     0 → 2 | `run()` | `org.renaissance.core.DirUtils$$Lambda.0x0000000401003a68` |

##### `run()` (`java.lang.Thread`)

|  Change | Delta |      % |   Samples | Callee                      | Location           |
| ------: | ----: | -----: | --------: | --------------------------- | ------------------ |
| +170.7% |  +256 | 100.0% | 150 → 406 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `wait0(long)` (`java.lang.Object`)

|  Change | Delta |      % |   Samples | Callee            | Location       |
| ------: | ----: | -----: | --------: | ----------------- | -------------- |
| +167.1% |  +254 | 100.0% | 152 → 406 | `JVM_MonitorWait` | `libjvm.dylib` |

##### `wait(long)` (`java.lang.Object`)

|  Change | Delta |      % |   Samples | Callee        | Location           |
| ------: | ----: | -----: | --------: | ------------- | ------------------ |
| +167.1% |  +254 | 100.0% | 152 → 406 | `wait0(long)` | `java.lang.Object` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|  Change | Delta |      % |   Samples | Callee                | Location                   |
| ------: | ----: | -----: | --------: | --------------------- | -------------------------- |
| +169.3% |  +254 | 100.0% | 150 → 404 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|  Change | Delta |      % |   Samples | Callee                    | Location                                 |
| ------: | ----: | -----: | --------: | ------------------------- | ---------------------------------------- |
| +169.3% |  +254 | 100.0% | 150 → 404 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|  Change | Delta |      % |   Samples | Callee                  | Location                                                                |
| ------: | ----: | -----: | --------: | ----------------------- | ----------------------------------------------------------------------- |
| +169.3% |  +254 | 100.0% | 150 → 404 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed |  -144 | 99.3% → 0.0% | 144 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed |    -1 |  0.7% → 0.0% |   1 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |             % | Samples | Callee                | Location                                    |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------------------------------- |
| removed |  -139 | 100.0% → 0.0% | 139 → 0 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `Compile::Code_Gen` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                            | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------- |
| removed |    -3 |  27.3% → 0.0% |   3 → 0 | `PhaseCFG::do_global_code_motion` | `libjvm.dylib` |
|  -16.7% |    -1 | 54.5% → 83.3% |   6 → 5 | `PhaseChaitin::Register_Allocate` | `libjvm.dylib` |
|  -50.0% |    -1 | 18.2% → 16.7% |   2 → 1 | `PhaseOutput::Output`             | `libjvm.dylib` |

##### `PhaseCFG::global_code_motion` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                         | Location       |
| ------: | ----: | -----------: | ------: | ------------------------------ | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `PhaseCFG::schedule_late`      | `libjvm.dylib` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `Node_Backward_Iterator::next` | `libjvm.dylib` |

##### `PhaseCFG::do_global_code_motion` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `PhaseCFG::global_code_motion` | `libjvm.dylib` |

##### `ObjectMonitor::EnterI` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                | Location       |
| ------: | ----: | -----------: | ------: | --------------------- | -------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `PlatformEvent::park` | `libjvm.dylib` |

##### `ObjectMonitor::enter` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                  | Location       |
| -----: | ----: | -----: | ------: | ----------------------- | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `ObjectMonitor::EnterI` | `libjvm.dylib` |

##### `ObjectSynchronizer::enter` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                 | Location       |
| -----: | ----: | -----: | ------: | ---------------------- | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `ObjectMonitor::enter` | `libjvm.dylib` |

##### `SharedRuntime::monitor_enter_helper` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                      | Location       |
| -----: | ----: | -----: | ------: | --------------------------- | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `ObjectSynchronizer::enter` | `libjvm.dylib` |

##### `Runtime1::monitorenter` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                | Location       |
| -----: | ----: | -----: | ------: | ------------------------------------- | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `SharedRuntime::monitor_enter_helper` | `libjvm.dylib` |

##### `monitorenter_nofpu Runtime1 stub` (`<unknown>`)

| Change | Delta |      % | Samples | Callee                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `Runtime1::monitorenter` | `libjvm.dylib` |

##### `G1ParScanThreadState::do_partial_array` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                                                   | Location       |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `void G1ScanEvacuatedObjClosure::do_oop_work<narrowOop>` | `libjvm.dylib` |

##### `G1ParScanThreadState::trim_queue_to_threshold` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `G1ParScanThreadState::do_partial_array` | `libjvm.dylib` |

##### `PhaseCFG::schedule_late` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Node_Backward_Iterator::next` | `libjvm.dylib` |

##### `PhaseChaitin::Split` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Callee                       | Location       |
| ------: | ----: | -----------: | ------: | ---------------------------- | -------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `loadRangeNode::out_RegMask` | `libjvm.dylib` |

##### `Java_java_util_zip_Inflater_inflateBytesBytes` (`libzip.dylib`)

|  Change | Delta |             % | Samples | Callee         | Location       |
| ------: | ----: | ------------: | ------: | -------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `inflate_fast` | `libzip.dylib` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

|  Change | Delta |             % | Samples | Callee                                          | Location       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Java_java_util_zip_Inflater_inflateBytesBytes` | `libzip.dylib` |

##### `InstanceKlass::initialize_impl` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `InstanceKlass::link_class_impl` | `libjvm.dylib` |

##### `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` (`libjvm.dylib`)

| Change | Delta |     % | Samples | Callee                                                                                          | Location       |
| -----: | ----: | ----: | ------: | ----------------------------------------------------------------------------------------------- | -------------- |
| -50.0% |    -1 | 50.0% |   2 → 1 | `void OopOopIterateDispatch<G1AdjustClosure>::Table::oop_oop_iterate<ObjArrayKlass, narrowOop>` | `libjvm.dylib` |

##### `G1AdjustRegionClosure::do_heap_region` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                                          | Location       |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------- | -------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` | `libjvm.dylib` |

##### `G1FullGCAdjustTask::work` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                           | Location       |
| -----: | ----: | -----: | ------: | -------------------------------- | -------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `HeapRegionManager::par_iterate` | `libjvm.dylib` |

##### `JavaThreadParkedState::JavaThreadParkedState` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java_lang_Thread::set_thread_status` | `libjvm.dylib` |

##### `_pthread_cond_wait` (`libsystem_pthread.dylib`)

| Change | Delta |             % | Samples | Callee                              | Location                  |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `os::create_thread` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee                                  | Location       |
| -----: | ----: | -----: | ------: | --------------------------------------- | -------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `JavaThread::JavaThread` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Callee              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `os::create_thread` | `libjvm.dylib` |

##### `create(Path, URI)` (`org.renaissance.core.ModuleLoader`)

|  Change | Delta |             % | Samples | Callee                     | Location                             |
| ------: | ----: | ------------: | ------: | -------------------------- | ------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `loadPropertiesAsMap(URL)` | `org.renaissance.core.ResourceUtils` |

##### `liftedTree1$1()` (`scopt.Read$`)

|  Change | Delta |             % | Samples | Callee                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `InterpreterRuntime::resolve_from_cache` | `libjvm.dylib` |

##### `selectBenchmarks(BenchmarkSuite, Seq)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Callee              | Location                |
| ------: | ----: | ------------: | ------: | ------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

|  Change | Delta |             % | Samples | Callee                                                        | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- | ------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `read(byte[], int, int)` (`java.io.FilterInputStream`)

|  Change | Delta |             % | Samples | Callee                   | Location                            |
| ------: | ----: | ------------: | ------: | ------------------------ | ----------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `<init>(HashMap)` (`java.util.HashMap$EntryIterator`)

|  Change | Delta |            % | Samples | Callee            | Location                         |
| ------: | ----: | -----------: | ------: | ----------------- | -------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `<init>(HashMap)` | `java.util.HashMap$HashIterator` |

##### `iterator()` (`java.util.HashMap$EntrySet`)

|  Change | Delta |             % | Samples | Callee            | Location                          |
| ------: | ----: | ------------: | ------: | ----------------- | --------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `<init>(HashMap)` | `java.util.HashMap$EntryIterator` |

##### `isSealed()` (`java.lang.Package`)

|  Change | Delta |             % | Samples | Callee      | Location           |
| ------: | ----: | ------------: | ------: | ----------- | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `isNamed()` | `java.lang.Module` |

##### `getAndVerifyPackage(String, Manifest, URL)` (`java.net.URLClassLoader`)

|  Change | Delta |             % | Samples | Callee       | Location            |
| ------: | ----: | ------------: | ------: | ------------ | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `isSealed()` | `java.lang.Package` |

##### `tryCompensate(long, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |            % | Samples | Callee                         | Location                            |
| ------: | ----: | -----------: | ------: | ------------------------------ | ----------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `compareAndSetCtl(long, long)` | `java.util.concurrent.ForkJoinPool` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|  Change | Delta |             % | Samples | Callee                      | Location                                           |
| ------: | ----: | ------------: | ------: | --------------------------- | -------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `inflate(byte[], int, int)` | `java.util.zip.Inflater`                           |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `fill()`                    | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `transferTo(OutputStream)` (`java.io.InputStream`)

|  Change | Delta |             % | Samples | Callee                    | Location                         |
| ------: | ----: | ------------: | ------: | ------------------------- | -------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `read(byte[], int, int)`  | `java.io.FilterInputStream`      |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `write(byte[], int, int)` | `sun.nio.ch.ChannelOutputStream` |

##### `copy(InputStream, Path, CopyOption[])` (`java.nio.file.Files`)

| Change | Delta |      % | Samples | Callee                     | Location              |
| -----: | ----: | -----: | ------: | -------------------------- | --------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `transferTo(OutputStream)` | `java.io.InputStream` |

##### `getExactSizeIfKnown()` (`java.util.Spliterator`)

|  Change | Delta |             % | Samples | Callee              | Location                                       |
| ------: | ----: | ------------: | ------: | ------------------- | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `characteristics()` | `java.util.stream.Streams$RangeIntSpliterator` |

##### `exactOutputSizeIfKnown(Spliterator)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Callee                  | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getExactSizeIfKnown()` | `java.util.Spliterator` |

##### `start0()` (`java.lang.Thread`)

|  Change | Delta |             % | Samples | Callee            | Location       |
| ------: | ----: | ------------: | ------: | ----------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `JVM_StartThread` | `libjvm.dylib` |

##### `start()` (`java.lang.Thread`)

|  Change | Delta |             % | Samples | Callee     | Location           |
| ------: | ----: | ------------: | ------: | ---------- | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `start0()` | `java.lang.Thread` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

|   Change |  Delta |             % |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------: | -----: | ------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  +195.2% | +2,510 | 20.8% → 24.3% | 1,286 → 3,796 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  +213.5% | +1,396 | 10.6% → 13.1% |   654 → 2,050 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  +144.1% |   +461 |   5.2% → 5.0% |     320 → 781 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|      new |   +359 |   0.0% → 2.3% |       0 → 359 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000040111f1b8`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000000401004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000000401009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
|  +169.3% |   +254 |   2.4% → 2.6% |     150 → 404 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +169.3% |   +254 |   2.4% → 2.6% |     150 → 404 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +169.3% |   +254 |   2.4% → 2.6% |     150 → 404 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +166.4% |   +253 |   2.5% → 2.6% |     152 → 405 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +166.4% |   +253 |   2.5% → 2.6% |     152 → 405 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +166.4% |   +253 |   2.5% → 2.6% |     152 → 405 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +166.4% |   +253 |   2.5% → 2.6% |     152 → 405 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  +166.4% |   +253 |   2.5% → 2.6% |     152 → 405 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +166.4% |   +253 |   2.5% → 2.6% |     152 → 405 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  +166.4% |   +253 |   2.5% → 2.6% |     152 → 405 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  +166.4% |   +253 |   2.5% → 2.6% |     152 → 405 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  +165.8% |   +252 |   2.5% → 2.6% |     152 → 404 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  +163.8% |   +249 |   2.5% → 2.6% |     152 → 401 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  +163.2% |   +248 |   2.5% → 2.6% |     152 → 400 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| +1185.0% |   +237 |   0.3% → 1.6% |      20 → 257 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +160.3% |   +234 |          2.4% |     146 → 380 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

|  Change | Delta |            % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |  -139 |  2.2% → 0.0% | 139 → 0 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111f208`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  -81.3% |   -13 | 0.3% → <0.1% |  16 → 3 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -50.0% |    -9 |  0.3% → 0.1% |  18 → 9 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -33.3% |    -6 |  0.3% → 0.1% | 18 → 12 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -85.7% |    -6 | 0.1% → <0.1% |   7 → 1 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -55.6% |    -5 | 0.1% → <0.1% |   9 → 4 | `computeIfAbsent(Object, Function)` (`java.util.HashMap`) ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -50.0% |    -4 | 0.1% → <0.1% |   8 → 4 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| removed |    -4 |  0.1% → 0.0% |   4 → 0 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -66.7% |    -4 | 0.1% → <0.1% |   6 → 2 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -16.7% |    -3 |  0.3% → 0.1% | 18 → 15 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -23.1% |    -3 |  0.2% → 0.1% | 13 → 10 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -50.0% |    -3 | 0.1% → <0.1% |   6 → 3 | `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `zero_blocks` ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001186d88`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  -33.3% |    -3 | 0.1% → <0.1% |   9 → 6 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed |    -3 | <0.1% → 0.0% |   3 → 0 | `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `checkIndex(int, int)` (`java.util.Objects`) ← `get(int)` (`java.util.ArrayList`) ← `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x0000007001183d68`) ← `exec()` (`java.util.concurrent.ForkJoinTask$AdaptedCallable`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `__psynch_cvsignal` (`libsystem_kernel.dylib`) ← `Unsafe_Unpark` (`libjvm.dylib`) ← `unpark(Object)` (`jdk.internal.misc.Unsafe`) ← `unpark(Thread)` (`java.util.concurrent.locks.LockSupport`) ← `signalWaiters()` (`java.util.concurrent.ForkJoinTask`) ← `setDone()` ← `doExec()` ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -50.0% |    -2 | 0.1% → <0.1% |   4 → 2 | `forward_copy_longs` ← `arrayof_jint_disjoint_arraycopy` ← `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000004011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

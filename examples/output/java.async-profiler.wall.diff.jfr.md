# Sampling profile diff

Collected 13,426 → 7,855 samples (-5,571 samples, -41.5%).

| Category          |  Change |  Delta |             % |        Samples |
| ----------------- | ------: | -----: | ------------: | -------------: |
| Native            |  -43.5% | -5,292 | 90.5% → 87.3% | 12,152 → 6,860 |
| Ours              |  -16.3% |   -116 |   5.3% → 7.6% |      710 → 594 |
| Unknown           |  -38.8% |   -125 |   2.4% → 2.5% |      322 → 197 |
| Standard library  |  -16.0% |    -31 |   1.4% → 2.1% |      194 → 163 |
| JIT               |  -25.8% |     -8 |   0.2% → 0.3% |        31 → 23 |
| Compiler          |  +12.5% |     +2 |   0.1% → 0.2% |        16 → 18 |
| Garbage collector | removed |     -1 |  <0.1% → 0.0% |          1 → 0 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 7,502 → 4,515 samples (55.9% → 57.5%) thread_start at libsystem_pthread.dylib
│   └── 7,502 → 4,515 samples (55.9% → 57.5%) _pthread_start
│       ├── 7,170 → 4,315 samples (53.4% → 54.9%) thread_native_entry at libjvm.dylib
│       │   └── 7,170 → 4,315 samples (53.4% → 54.9%) Thread::call_run
│       │       ├── 3,174 → 1,878 samples (23.6% → 23.9%) WorkerThread::run
│       │       │   └── 3,161 → 1,859 samples (23.5% → 23.7%, self 26.3% → 26.5% globally) semaphore_wait_trap at libsystem_kernel.dylib
│       │       ├── 2,341 → 1,441 samples (17.4% → 18.3%) JavaThread::thread_main_inner
│       │       │   └── 2,341 → 1,441 samples (17.4% → 18.3%) 6 more callees, led by (5.1% → 5.7%) CompileBroker::compiler_thread_loop
│       │       ├── 993 → 597 samples (7.4% → 7.6%) ConcurrentGCThread::run
│       │       │   └── 993 → 597 samples (7.4% → 7.6%) 3 more callees, led by (2.5%) G1ServiceThread::run_service
│       │       └── 662 → 399 samples (4.9% → 5.1%) 3 more callees, led by (2.5%) VMThread::run
│       └── … 331 → 199 samples (2.5%) __ulock_wait at libsystem_kernel.dylib
├── 3,948 → 2,149 samples (29.4% → 27.4%) run() at java.util.concurrent.ForkJoinWorkerThread
│   └── 3,948 → 2,149 samples (29.4% → 27.4%) runWorker(ForkJoinPool$WorkQueue) at java.util.concurrent.ForkJoinPool
│       ├── … 1,717 → 1,227 samples (12.8% → 15.6%) compute() at org.renaissance.jdk.concurrent.JavaKMeans$RangedTask
│       │   ├── 511 → 416 samples (3.8% → 5.3%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │   ├── … 362 → 276 samples (2.7% → 3.5%, self 0.7% → 1.3%) findNearestCentroid() at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │   │   └── 235 → 162 samples (1.8% → 2.1%, self 1.7% → 2.0%) distance(Double[], Double[])
│       │   │   └── … 149 → 140 samples (1.1% → 1.8%, self 0.3% → 0.5%) collectClusters(int[]) at org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask
│       │   │       ├── 54 → 46 samples (0.4% → 0.6%) add(Object) at java.util.ArrayList
│       │   │       │   └── 54 → 46 samples (0.4% → 0.6%) add(Object, Object[], int)
│       │   │       │       └── 50 → 35 samples (0.4%) grow()
│       │   │       │           └── 38 → 35 samples (0.3% → 0.4%) grow(int)
│       │   │       │               └── 13 → 7 samples (0.1%) zero_blocks
│       │   │       ├── 42 → 40 samples (0.3% → 0.5%) computeIfAbsent(Object, Function) at java.util.HashMap
│       │   │       └── 13 → 11 samples (0.1%) get(int) at java.util.ArrayList
│       │   │           └── 8 → 3 samples (0.1% → <0.1%) checkIndex(int, int) at java.util.Objects
│       │   ├── 395 → 330 samples (2.9% → 4.2%) computeDirectly() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       │   │   └── … 395 → 330 samples (2.9% → 4.2%, self 1.0% → 1.3%) vectorSum() at org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask
│       │   │       ├── 236 → 192 samples (1.8% → 2.4%, self 1.5% → 2.4%) accumulate(Double[], double[])
│       │   │       │   └── 34 → 0 samples (0.3% → 0.0%) doubleValue() at java.lang.Double
│       │   │       └── 22 → 35 samples (0.2% → 0.4%) get(int) at java.util.ArrayList
│       │   │           └── 21 → 35 samples (0.2% → 0.4%) elementData(int)
│       │   └── 811 → 480 samples (6.0% → 6.1%) 9 more callees, led by (5.0% → 4.6%) join() at java.util.concurrent.ForkJoinTask
│       └── 2,209 → 903 samples (16.5% → 11.5%) awaitWork(ForkJoinPool$WorkQueue)
│           ├── … 1,936 → 826 samples (14.4% → 10.5%, self 58.0% → 53.8% globally) __psynch_cvwait at libsystem_kernel.dylib
│           └── 257 → 71 samples (1.9% → 0.9%) 3 more callees, led by (1.9% → 0.9%) parkUntil(long) at java.util.concurrent.locks.LockSupport
├── … 331 → 199 samples (2.5%) mach_msg2_trap at libsystem_kernel.dylib
├── 322 → 197 samples (2.4% → 2.5%) (anonymous)
└── 1,323 → 795 samples (9.9% → 10.1%) 6 more root frames, led by (2.5%) run() at java.lang.ref.Reference$ReferenceHandler
```

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |            % | Samples | Function                                                  | Location                                                   |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------- | ---------------------------------------------------------- |
|  +36.8% |   +14 |  0.3% → 0.7% | 38 → 52 | `elementData(int)`                                        | `java.util.ArrayList`                                      |
| +175.0% |    +7 | <0.1% → 0.1% |  4 → 11 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                                      |
|  +35.3% |    +6 |  0.1% → 0.3% | 17 → 23 | `grow(int)`                                               | `java.util.ArrayList`                                      |
| +166.7% |    +5 | <0.1% → 0.1% |   3 → 8 | `pthread_jit_write_protect_np`                            | `libsystem_pthread.dylib`                                  |
|  +11.1% |    +4 |  0.3% → 0.5% | 36 → 40 | `collectClusters(int[])`                                  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`                        |
|   +6.9% |    +4 |  0.4% → 0.8% | 58 → 62 | `forward_copy_longs`                                      | `<unknown>`                                                |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                                        |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `arrayof_jint_disjoint_arraycopy`                         | `<unknown>`                                                |
| +200.0% |    +2 |        <0.1% |   1 → 3 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`                        |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`                        |
| +200.0% |    +2 |        <0.1% |   1 → 3 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                         |
|  +66.7% |    +2 | <0.1% → 0.1% |   3 → 5 | `_platform_bzero`                                         | `libsystem_platform.dylib`                                 |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `PhaseIdealLoop::build_loop_early`                        | `libjvm.dylib`                                             |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `Matcher::xform`                                          | `libjvm.dylib`                                             |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `NodeHash::hash_delete`                                   | `libjvm.dylib`                                             |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `G1FullGCCompactTask::copy_object_to_new_location`        | `libjvm.dylib`                                             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `CompileQueue::get`                                       | `libjvm.dylib`                                             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                                 |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`                        |

##### Native

|  Change | Delta |            % | Samples | Function                                                                                                                                                   | Location                   |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| +166.7% |    +5 | <0.1% → 0.1% |   3 → 8 | `pthread_jit_write_protect_np`                                                                                                                             | `libsystem_pthread.dylib`  |
|   +6.9% |    +4 |  0.4% → 0.8% | 58 → 62 | `forward_copy_longs`                                                                                                                                       | `<unknown>`                |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `arrayof_jint_disjoint_arraycopy`                                                                                                                          | `<unknown>`                |
|  +66.7% |    +2 | <0.1% → 0.1% |   3 → 5 | `_platform_bzero`                                                                                                                                          | `libsystem_platform.dylib` |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `G1FullGCCompactTask::copy_object_to_new_location`                                                                                                         | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `arrayof_oop_disjoint_arraycopy`                                                                                                                           | `<unknown>`                |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `MemAllocator::mem_allocate_inside_tlab_slow`                                                                                                              | `libjvm.dylib`             |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `G1FullGCMarker::mark_object`                                                                                                                              | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                                                                            | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `NullCheckVisitor::do_NullCheck`                                                                                                                           | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `LoadField::visit`                                                                                                                                         | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ProfileCall::visit`                                                                                                                                       | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>`                                                       | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ObjectSynchronizer::FastHashCode`                                                                                                                         | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `read_stable_mark`                                                                                                                                         | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `__open`                                                                                                                                                   | `libsystem_kernel.dylib`   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<544868ull, G1BarrierSet>, (AccessInternal::BarrierType)2, 544868ull>::oop_access_barrier` | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `read`                                                                                                                                                     | `libsystem_kernel.dylib`   |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `ClassVerifier::verify_local_variable_table`                                                                                                               | `libjvm.dylib`             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `_platform_memcmp`                                                                                                                                         | `libsystem_platform.dylib` |

##### Ours

| Change | Delta |            % | Samples | Function                             | Location                                                   |
| -----: | ----: | -----------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
| +11.1% |    +4 |  0.3% → 0.5% | 36 → 40 | `collectClusters(int[])`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `compute()`                          | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`     |
|    new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>(JavaKMeans, List, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                  | Location                                      |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------- | --------------------------------------------- |
|  +36.8% |   +14 |  0.3% → 0.7% | 38 → 52 | `elementData(int)`                                        | `java.util.ArrayList`                         |
| +175.0% |    +7 | <0.1% → 0.1% |  4 → 11 | `add(Object, Object[], int)`                              | `java.util.ArrayList`                         |
|  +35.3% |    +6 |  0.1% → 0.3% | 17 → 23 | `grow(int)`                                               | `java.util.ArrayList`                         |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `forEach(BiConsumer)`                                     | `java.util.HashMap`                           |
| +200.0% |    +2 |        <0.1% |   1 → 3 | `runWorker(ForkJoinPool$WorkQueue)`                       | `java.util.concurrent.ForkJoinPool`           |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `doExec()`                                                | `java.util.concurrent.ForkJoinTask`           |
| +200.0% |    +2 |        <0.1% |   1 → 3 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                            |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `park(boolean, long)`                                     | `jdk.internal.misc.Unsafe`                    |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `awaitDone(int, long)`                                    | `java.util.concurrent.ForkJoinTask`           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `join()`                                                  | `java.util.concurrent.ForkJoinTask`           |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `exec()`                                                  | `java.util.concurrent.RecursiveTask`          |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `newNode(int, Object, Object, HashMap$Node)`              | `java.util.HashMap`                           |
|  +25.0% |    +1 | <0.1% → 0.1% |   4 → 5 | `hash(Object)`                                            | `java.util.HashMap`                           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `read1(byte[], int, int)`                                 | `java.io.BufferedInputStream`                 |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `resize()`                                                | `java.util.HashMap`                           |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>(HashMap)`                                         | `java.util.HashMap$HashIterator`              |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `visitMethodInsn(int, String, String, String, boolean)`   | `jdk.internal.org.objectweb.asm.MethodWriter` |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>()`                                                | `java.util.AbstractList`                      |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `opWrapSink(int, Sink)`                                   | `java.util.stream.IntPipeline$1`              |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change |  Delta |             % |       Samples | Function                            | Location                                                   |
| ------: | -----: | ------------: | ------------: | ----------------------------------- | ---------------------------------------------------------- |
|  -45.7% | -3,556 | 58.0% → 53.8% | 7,782 → 4,226 | `__psynch_cvwait`                   | `libsystem_kernel.dylib`                                   |
|  -41.1% | -1,453 | 26.3% → 26.5% | 3,533 → 2,080 | `semaphore_wait_trap`               | `libsystem_kernel.dylib`                                   |
|  -39.9% |   -132 |          2.5% |     331 → 199 | `mach_msg2_trap`                    | `libsystem_kernel.dylib`                                   |
|  -39.9% |   -132 |          2.5% |     331 → 199 | `__ulock_wait`                      | `libsystem_kernel.dylib`                                   |
|  -38.8% |   -125 |   2.4% → 2.5% |     322 → 197 | `(anonymous)`                       | `<unknown>`                                                |
|  -31.1% |    -71 |   1.7% → 2.0% |     228 → 157 | `distance(Double[], Double[])`      | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -97.3% |    -36 |  0.3% → <0.1% |        37 → 1 | `doubleValue()`                     | `java.lang.Double`                                         |
|  -25.5% |    -35 |   1.0% → 1.3% |     137 → 102 | `vectorSum()`                       | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -45.7% |    -16 |   0.3% → 0.2% |       35 → 19 | `__psynch_mutexwait`                | `libsystem_kernel.dylib`                                   |
| removed |    -12 |   0.1% → 0.0% |        12 → 0 | `grow()`                            | `java.util.ArrayList`                                      |
|   -5.0% |    -10 |   1.5% → 2.4% |     202 → 192 | `accumulate(Double[], double[])`    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -29.0% |     -9 |   0.2% → 0.3% |       31 → 22 | `zero_blocks`                       | `<unknown>`                                                |
|  -61.5% |     -8 |          0.1% |        13 → 5 | `checkIndex(int, int)`              | `java.util.Objects`                                        |
|  -20.0% |     -7 |   0.3% → 0.4% |       35 → 28 | `computeIfAbsent(Object, Function)` | `java.util.HashMap`                                        |
|  -33.3% |     -6 |   0.1% → 0.2% |       18 → 12 | `__psynch_cvsignal`                 | `libsystem_kernel.dylib`                                   |
|  -60.0% |     -3 |         <0.1% |         5 → 2 | `Unsafe_Park`                       | `libjvm.dylib`                                             |
| removed |     -3 |  <0.1% → 0.0% |         3 → 0 | `write`                             | `libsystem_kernel.dylib`                                   |
| removed |     -2 |  <0.1% → 0.0% |         2 → 0 | `Parker::park`                      | `libjvm.dylib`                                             |
|  -66.7% |     -2 |         <0.1% |         3 → 1 | `signalWaiters()`                   | `java.util.concurrent.ForkJoinTask`                        |
| removed |     -2 |  <0.1% → 0.0% |         2 → 0 | `begin(long)`                       | `java.util.stream.Nodes$FixedNodeBuilder`                  |

##### Native

|  Change |  Delta |             % |       Samples | Function                                                        | Location                 |
| ------: | -----: | ------------: | ------------: | --------------------------------------------------------------- | ------------------------ |
|  -45.7% | -3,556 | 58.0% → 53.8% | 7,782 → 4,226 | `__psynch_cvwait`                                               | `libsystem_kernel.dylib` |
|  -41.1% | -1,453 | 26.3% → 26.5% | 3,533 → 2,080 | `semaphore_wait_trap`                                           | `libsystem_kernel.dylib` |
|  -39.9% |   -132 |          2.5% |     331 → 199 | `mach_msg2_trap`                                                | `libsystem_kernel.dylib` |
|  -39.9% |   -132 |          2.5% |     331 → 199 | `__ulock_wait`                                                  | `libsystem_kernel.dylib` |
|  -45.7% |    -16 |   0.3% → 0.2% |       35 → 19 | `__psynch_mutexwait`                                            | `libsystem_kernel.dylib` |
|  -33.3% |     -6 |   0.1% → 0.2% |       18 → 12 | `__psynch_cvsignal`                                             | `libsystem_kernel.dylib` |
|  -60.0% |     -3 |         <0.1% |         5 → 2 | `Unsafe_Park`                                                   | `libjvm.dylib`           |
| removed |     -3 |  <0.1% → 0.0% |         3 → 0 | `write`                                                         | `libsystem_kernel.dylib` |
| removed |     -2 |  <0.1% → 0.0% |         2 → 0 | `Parker::park`                                                  | `libjvm.dylib`           |
| removed |     -2 |  <0.1% → 0.0% |         2 → 0 | `__semwait_signal`                                              | `libsystem_kernel.dylib` |
| removed |     -1 |  <0.1% → 0.0% |         1 → 0 | `InstanceKlass::allocate_objArray`                              | `libjvm.dylib`           |
| removed |     -1 |  <0.1% → 0.0% |         1 → 0 | `stub:pthread_mutex_unlock`                                     | `libjvm.dylib`           |
|  -50.0% |     -1 |         <0.1% |         2 → 1 | `ObjArrayAllocator::initialize`                                 | `libjvm.dylib`           |
| removed |     -1 |  <0.1% → 0.0% |         1 → 0 | `OptoRuntime::new_instance_C`                                   | `libjvm.dylib`           |
| removed |     -1 |  <0.1% → 0.0% |         1 → 0 | `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` | `libjvm.dylib`           |
|  -50.0% |     -1 |         <0.1% |         2 → 1 | `G1BarrierSet::write_ref_array_work`                            | `libjvm.dylib`           |
| removed |     -1 |  <0.1% → 0.0% |         1 → 0 | `CodeBlob::is_nmethod`                                          | `libjvm.dylib`           |
| removed |     -1 |  <0.1% → 0.0% |         1 → 0 | `iRegPNoSpOper::type`                                           | `libjvm.dylib`           |
| removed |     -1 |  <0.1% → 0.0% |         1 → 0 | `HeapRegion::update_bot_for_block`                              | `libjvm.dylib`           |
| removed |     -1 |  <0.1% → 0.0% |         1 → 0 | `BarrierSetC2::has_load_barrier_nodes`                          | `libjvm.dylib`           |

##### Ours

|  Change | Delta |            % |   Samples | Function                         | Location                                                   |
| ------: | ----: | -----------: | --------: | -------------------------------- | ---------------------------------------------------------- |
|  -31.1% |   -71 |  1.7% → 2.0% | 228 → 157 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  -25.5% |   -35 |  1.0% → 1.3% | 137 → 102 | `vectorSum()`                    | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -5.0% |   -10 |  1.5% → 2.4% | 202 → 192 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|   -1.0% |    -1 |  0.7% → 1.3% |  100 → 99 | `findNearestCentroid()`          | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `lambda$merge$6(List, List)`     | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `lambda$run$0(int, List, int)`   | `org.renaissance.jdk.concurrent.JavaKMeans`                |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `add(double[], double[])`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `createSubtask(int, int)`        | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |

##### Unknown

| Change | Delta |           % |   Samples | Function      | Location    |
| -----: | ----: | ----------: | --------: | ------------- | ----------- |
| -38.8% |  -125 | 2.4% → 2.5% | 322 → 197 | `(anonymous)` | `<unknown>` |

##### Standard library

|  Change | Delta |            % | Samples | Function                                                                                                                 | Location                                               |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
|  -97.3% |   -36 | 0.3% → <0.1% |  37 → 1 | `doubleValue()`                                                                                                          | `java.lang.Double`                                     |
| removed |   -12 |  0.1% → 0.0% |  12 → 0 | `grow()`                                                                                                                 | `java.util.ArrayList`                                  |
|  -61.5% |    -8 |         0.1% |  13 → 5 | `checkIndex(int, int)`                                                                                                   | `java.util.Objects`                                    |
|  -20.0% |    -7 |  0.3% → 0.4% | 35 → 28 | `computeIfAbsent(Object, Function)`                                                                                      | `java.util.HashMap`                                    |
|  -66.7% |    -2 |        <0.1% |   3 → 1 | `signalWaiters()`                                                                                                        | `java.util.concurrent.ForkJoinTask`                    |
| removed |    -2 | <0.1% → 0.0% |   2 → 0 | `begin(long)`                                                                                                            | `java.util.stream.Nodes$FixedNodeBuilder`              |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `awaitWork(ForkJoinPool$WorkQueue)`                                                                                      | `java.util.concurrent.ForkJoinPool`                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `tryRemoveAndExec(ForkJoinTask, boolean)`                                                                                | `java.util.concurrent.ForkJoinPool$WorkQueue`          |
|  -33.3% |    -1 |        <0.1% |   3 → 2 | `scan(ForkJoinPool$WorkQueue, int, int)`                                                                                 | `java.util.concurrent.ForkJoinPool`                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `signalWork()`                                                                                                           | `java.util.concurrent.ForkJoinPool`                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `get(int)`                                                                                                               | `java.util.ArrayList`                                  |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `hasNext()`                                                                                                              | `java.util.HashMap$HashIterator`                       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `setAccessible(boolean)`                                                                                                 | `java.lang.reflect.Constructor`                        |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `countPositives(byte[], int, int)`                                                                                       | `java.lang.StringCoding`                               |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(URL, String, URLStreamHandler)`                                                                                  | `java.net.URL`                                         |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.AbstractValidatingLambdaMetafactory` |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `nanoTime()`                                                                                                             | `java.lang.System`                                     |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `<init>(AbstractPipeline, int)`                                                                                          | `java.util.stream.AbstractPipeline`                    |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `opIsStateful()`                                                                                                         | `java.util.stream.ReferencePipeline$StatelessOp`       |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `getAndClearInterrupt()`                                                                                                 | `java.lang.Thread`                                     |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `elementData(int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Location                  |
| -----: | ----: | -----: | ------: | ------------------------- |
| +36.8% |   +14 | 100.0% | 38 → 52 | `java.util.ArrayList:411` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|  Change | Delta |              % | Samples | Location                  |
| ------: | ----: | -------------: | ------: | ------------------------- |
| +266.7% |    +8 | 75.0% → 100.0% |  3 → 11 | `java.util.ArrayList:482` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `java.util.ArrayList:484` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change | Delta |              % | Samples | Location                  |
| ------: | ----: | -------------: | ------: | ------------------------- |
|  +76.9% |   +10 | 76.5% → 100.0% | 13 → 23 | `java.util.ArrayList:239` |
| removed |    -4 |   23.5% → 0.0% |   4 → 0 | `java.util.ArrayList:232` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| +100.0% |    +5 | 13.9% → 25.0% |  5 → 10 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:211` |
|  -33.3% |    -2 | 16.7% → 10.0% |   6 → 4 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:212` |
|  +28.6% |    +2 | 19.4% → 22.5% |   7 → 9 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:213` |
| removed |    -1 |   2.8% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:209` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
|     new |    +2 |  0.0% → 40.0% |   0 → 2 | `java.util.concurrent.ForkJoinPool:2051` |
|     new |    +2 |  0.0% → 40.0% |   0 → 2 | `java.util.concurrent.ForkJoinPool:2053` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:2057` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool:2041` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------ |
| +200.0% |    +2 | 50.0% → 60.0% |   1 → 3 | `java.util.HashMap:1428` |
| +100.0% |    +1 | 50.0% → 40.0% |   1 → 2 | `java.util.HashMap:1427` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |            % | Samples | Location                                 |
| -----: | ----: | -----------: | ------: | ---------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `java.util.concurrent.ForkJoinPool:1809` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `java.util.concurrent.ForkJoinTask:387` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change | Delta |      % | Samples | Location                |
| ------: | ----: | -----: | ------: | ----------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `java.util.Arrays:3482` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ForkJoinTask:413` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % | Samples | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask:146` |

##### `<init>(JavaKMeans, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Location                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:382` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Location                                |
| -----: | ----: | ------------: | ------: | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ForkJoinTask:651` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|  Change | Delta |      % | Samples | Location                                 |
| ------: | ----: | -----: | ------: | ---------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `java.util.concurrent.RecursiveTask:110` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Location                 |
| ------: | ----: | -----: | ------: | ------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `java.util.HashMap:1909` |

##### `hash(Object)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| +25.0% |    +1 | 100.0% |   4 → 5 | `java.util.HashMap:338` |

##### `read1(byte[], int, int)` (`java.io.BufferedInputStream`)

| Change | Delta |             % | Samples | Location                          |
| -----: | ----: | ------------: | ------: | --------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.io.BufferedInputStream:352` |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashMap:704` |

##### `<init>(HashMap)` (`java.util.HashMap$HashIterator`)

| Change | Delta |             % | Samples | Location                              |
| -----: | ----: | ------------: | ------: | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashMap$HashIterator:1593` |

##### `visitMethodInsn(int, String, String, String, boolean)` (`jdk.internal.org.objectweb.asm.MethodWriter`)

| Change | Delta |             % | Samples | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `jdk.internal.org.objectweb.asm.MethodWriter:1066` |

##### `<init>()` (`java.util.AbstractList`)

| Change | Delta |             % | Samples | Location                     |
| -----: | ----: | ------------: | ------: | ---------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.AbstractList:630` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

| Change | Delta |             % | Samples | Location                             |
| -----: | ----: | ------------: | ------: | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.stream.IntPipeline$1:177` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % |  Samples | Location                                                       |
| ------: | ----: | ------------: | -------: | -------------------------------------------------------------- |
|  -45.9% |   -61 | 58.3% → 45.9% | 133 → 72 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:248` |
|  -17.2% |   -16 | 40.8% → 49.0% |  93 → 77 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:249` |
| +700.0% |    +7 |   0.4% → 5.1% |    1 → 8 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:250` |
| removed |    -1 |   0.4% → 0.0% |    1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:247` |

##### `doubleValue()` (`java.lang.Double`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| -97.3% |   -36 | 100.0% |  37 → 1 | `java.lang.Double:1001` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |  Samples | Location                                                      |
| -----: | ----: | ------------: | -------: | ------------------------------------------------------------- |
| -29.2% |   -38 | 94.9% → 90.2% | 130 → 92 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:403` |
| +42.9% |    +3 |   5.1% → 9.8% |   7 → 10 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:402` |

##### `grow()` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
| removed |   -12 | 100.0% → 0.0% |  12 → 0 | `java.util.ArrayList:244` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % |   Samples | Location                                                      |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------- |
|  -4.8% |    -9 | 92.6% → 92.7% | 187 → 178 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:412` |
|  -6.7% |    -1 |   7.4% → 7.3% |   15 → 14 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:411` |

##### `checkIndex(int, int)` (`java.util.Objects`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| -61.5% |    -8 | 100.0% |  13 → 5 | `java.util.Objects:385` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                 |
| -----: | ----: | ------------: | ------: | ------------------------ |
| -50.0% |    -6 | 34.3% → 21.4% |  12 → 6 | `java.util.HashMap:1197` |
| -62.5% |    -5 | 22.9% → 10.7% |   8 → 3 | `java.util.HashMap:1207` |
|    new |    +4 |  0.0% → 14.3% |   0 → 4 | `java.util.HashMap:1219` |
| -50.0% |    -3 | 17.1% → 10.7% |   6 → 3 | `java.util.HashMap:1213` |
| +50.0% |    +2 | 11.4% → 21.4% |   4 → 6 | `java.util.HashMap:1204` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `java.util.concurrent.ForkJoinTask:301` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.concurrent.ForkJoinTask:307` |

##### `begin(long)` (`java.util.stream.Nodes$FixedNodeBuilder`)

|  Change | Delta |             % | Samples | Location                                       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.stream.Nodes$FixedNodeBuilder:1222` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

|  Change | Delta |             % | Samples | Location                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------- |
| +178.6% |   +25 | 14.0% → 39.4% | 14 → 39 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:229` |
|  -56.7% |   -17 | 30.0% → 13.1% | 30 → 13 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:230` |
|  -83.3% |    -5 |   6.0% → 1.0% |   6 → 1 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:225` |
|  -10.4% |    -5 | 48.0% → 43.4% | 48 → 43 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:231` |
|  +50.0% |    +1 |   2.0% → 3.0% |   2 → 3 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask:226` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Location                                        |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans:114` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Location                                       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans:56` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % | Samples | Location                                                   |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask:276` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:430` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask:419` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1880` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool$WorkQueue:1335` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |            % | Samples | Location                                 |
| ------: | ----: | -----------: | ------: | ---------------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `java.util.concurrent.ForkJoinPool:1829` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1837` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool:1825` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `java.util.concurrent.ForkJoinPool:1827` |

##### `signalWork()` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ForkJoinPool:1705` |

##### `get(int)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.ArrayList:427` |

##### `hasNext()` (`java.util.HashMap$HashIterator`)

|  Change | Delta |             % | Samples | Location                              |
| ------: | ----: | ------------: | ------: | ------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.HashMap$HashIterator:1598` |

##### `setAccessible(boolean)` (`java.lang.reflect.Constructor`)

|  Change | Delta |             % | Samples | Location                            |
| ------: | ----: | ------------: | ------: | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.reflect.Constructor:187` |

##### `countPositives(byte[], int, int)` (`java.lang.StringCoding`)

|  Change | Delta |             % | Samples | Location                    |
| ------: | ----: | ------------: | ------: | --------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.StringCoding:53` |

##### `<init>(URL, String, URLStreamHandler)` (`java.net.URL`)

|  Change | Delta |             % | Samples | Location           |
| ------: | ----: | ------------: | ------: | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.net.URL:756` |

##### `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` (`java.lang.invoke.AbstractValidatingLambdaMetafactory`)

|  Change | Delta |             % | Samples | Location                                                   |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.invoke.AbstractValidatingLambdaMetafactory:141` |

##### `<init>(AbstractPipeline, int)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.stream.AbstractPipeline:205` |

##### `opIsStateful()` (`java.util.stream.ReferencePipeline$StatelessOp`)

|  Change | Delta |             % | Samples | Location                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.stream.ReferencePipeline$StatelessOp:806` |

##### `getAndClearInterrupt()` (`java.lang.Thread`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.Thread:1779` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `elementData(int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller     | Location              |
| -----: | ----: | -----: | ------: | ---------- | --------------------- |
| +36.8% |   +14 | 100.0% | 38 → 52 | `get(int)` | `java.util.ArrayList` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|  Change | Delta |      % | Samples | Caller        | Location              |
| ------: | ----: | -----: | ------: | ------------- | --------------------- |
| +175.0% |    +7 | 100.0% |  4 → 11 | `add(Object)` | `java.util.ArrayList` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller   | Location              |
| -----: | ----: | -----: | ------: | -------- | --------------------- |
| +35.3% |    +6 | 100.0% | 17 → 23 | `grow()` | `java.util.ArrayList` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|  Change | Delta |             % | Samples | Caller                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `Unsafe_Unpark`                | `libjvm.dylib` |
|     new |    +3 |  0.0% → 37.5% |   0 → 3 | `JVM_IHashCode`                | `libjvm.dylib` |
|     new |    +3 |  0.0% → 37.5% |   0 → 3 | `Unsafe_Park`                  | `libjvm.dylib` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `OptoRuntime::new_array_C`     | `libjvm.dylib` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `InterpreterRuntime::newarray` | `libjvm.dylib` |

##### `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % | Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------- | ---------------------------------------------------------- |
| +11.1% |    +4 | 100.0% | 36 → 40 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |      % | Samples | Caller                 | Location                            |
| ------: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `forward_copy_longs` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                            | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------- | ----------- |
| +21.4% |    +9 | 72.4% → 82.3% | 42 → 51 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| -31.3% |    -5 | 27.6% → 17.7% | 16 → 11 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `forEach(BiConsumer)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Caller            | Location                                    |
| ------: | ----: | -----: | ------: | ----------------- | ------------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                  | Location              |
| ------: | ----: | ------------: | ------: | ----------------------- | --------------------- |
| +200.0% |    +2 | 50.0% → 60.0% |   1 → 3 | `copyOf(Object[], int)` | `java.util.Arrays`    |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `grow(int)`             | `java.util.ArrayList` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |      % | Samples | Caller  | Location                                    |
| ------: | ----: | -----: | ------: | ------- | ------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |            % | Samples | Caller                                               | Location                                      |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------- | --------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |            % | Samples | Caller      | Location              |
| -----: | ----: | -----------: | ------: | ----------- | --------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `grow(int)` | `java.util.ArrayList` |

##### `_platform_bzero` (`libsystem_platform.dylib`)

| Change | Delta |      % | Samples | Caller                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| +66.7% |    +2 | 100.0% |   3 → 5 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `PhaseIdealLoop::build_loop_early` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                               | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `PhaseIdealLoop::build_and_optimize` | `libjvm.dylib` |

##### `Matcher::xform` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller           | Location       |
| -----: | ----: | ------------: | ------: | ---------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `Matcher::match` | `libjvm.dylib` |

##### `NodeHash::hash_delete` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                              | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------------- | -------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `Node::remove_dead_region`          | `libjvm.dylib` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `PhaseIterGVN::rehash_node_delayed` | `libjvm.dylib` |

##### `G1FullGCCompactTask::copy_object_to_new_location` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                               | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `G1FullGCCompactTask::G1CompactRegionClosure::apply` | `libjvm.dylib` |

##### `CompileQueue::get` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `CompileBroker::compiler_thread_loop` | `libjvm.dylib` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % | Samples | Caller   | Location                                 |
| -----: | ----: | ------------: | ------: | -------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Caller   | Location                            |
| -----: | ----: | ------------: | ------: | -------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `join()` | `java.util.concurrent.ForkJoinTask` |

##### `arrayof_oop_disjoint_arraycopy` (`<unknown>`)

| Change | Delta |             % | Samples | Caller               | Location              |
| -----: | ----: | ------------: | ------: | -------------------- | --------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `addAll(Collection)` | `java.util.ArrayList` |

##### `MemAllocator::mem_allocate_inside_tlab_slow` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                   | Location       |
| -----: | ----: | ------------: | ------: | ------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `G1FullGCMarker::mark_object` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                                                          | Location       |
| ------: | ----: | -----: | ------: | --------------------------------------------------------------- | -------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib` |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                             | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `G1FullGCMarker::complete_marking` | `libjvm.dylib` |

##### `NullCheckVisitor::do_NullCheck` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                             | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `NullCheckEliminator::iterate_one` | `libjvm.dylib` |

##### `LoadField::visit` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                       | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `GraphBuilder::access_field` | `libjvm.dylib` |

##### `ProfileCall::visit` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                 | Location       |
| -----: | ----: | ------------: | ------: | ---------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `GraphBuilder::invoke` | `libjvm.dylib` |

##### `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                  | Location       |
| -----: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `G1FullGCMarker::follow_marking_stacks` | `libjvm.dylib` |

##### `ObjectSynchronizer::FastHashCode` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller       | Location           |
| -----: | ----: | ------------: | ------: | ------------ | ------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `hashCode()` | `java.lang.Object` |

##### `read_stable_mark` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller          | Location       |
| -----: | ----: | ------------: | ------: | --------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `JVM_IHashCode` | `libjvm.dylib` |

##### `__open` (`libsystem_kernel.dylib`)

| Change | Delta |             % | Samples | Caller       | Location        |
| -----: | ----: | ------------: | ------: | ------------ | --------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `handleOpen` | `libjava.dylib` |

##### `AccessInternal::PostRuntimeDispatch<G1BarrierSet::AccessBarrier<544868ull, G1BarrierSet>, (AccessInternal::BarrierType)2, 544868ull>::oop_access_barrier` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                       | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `SystemDictionaryShared::lookup_from_stream` | `libjvm.dylib` |

##### `read` (`libsystem_kernel.dylib`)

| Change | Delta |             % | Samples | Caller      | Location        |
| -----: | ----: | ------------: | ------: | ----------- | --------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `readBytes` | `libjava.dylib` |

##### `ClassVerifier::verify_local_variable_table` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                         | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `ClassVerifier::verify_method` | `libjvm.dylib` |

##### `_platform_memcmp` (`libsystem_platform.dylib`)

| Change | Delta |             % | Samples | Caller                     | Location       |
| -----: | ----: | ------------: | ------: | -------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `SymbolTable::lookup_only` | `libjvm.dylib` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % | Samples | Caller   | Location                             |
| -----: | ----: | ------------: | ------: | -------- | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `<init>(JavaKMeans, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Caller                    | Location                                                  |
| -----: | ----: | ------------: | ------: | ------------------------- | --------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % | Samples | Caller      | Location                                               |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

|  Change | Delta |      % | Samples | Caller     | Location                            |
| ------: | ----: | -----: | ------: | ---------- | ----------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Caller                                          | Location            |
| -----: | ----: | -----------: | ------: | ----------------------------------------------- | ------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `hash(Object)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                              | Location            |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------- |
| +25.0% |    +1 | 100.0% |   4 → 5 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |

##### `read1(byte[], int, int)` (`java.io.BufferedInputStream`)

| Change | Delta |             % | Samples | Caller                       | Location                      |
| -----: | ----: | ------------: | ------: | ---------------------------- | ----------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `implRead(byte[], int, int)` | `java.io.BufferedInputStream` |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller                                          | Location            |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `<init>(HashMap)` (`java.util.HashMap$HashIterator`)

| Change | Delta |             % | Samples | Caller            | Location                          |
| -----: | ----: | ------------: | ------: | ----------------- | --------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(HashMap)` | `java.util.HashMap$EntryIterator` |

##### `visitMethodInsn(int, String, String, String, boolean)` (`jdk.internal.org.objectweb.asm.MethodWriter`)

| Change | Delta |             % | Samples | Caller                  | Location                                       |
| -----: | ----: | ------------: | ------: | ----------------------- | ---------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `generateConstructor()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `<init>()` (`java.util.AbstractList`)

| Change | Delta |             % | Samples | Caller     | Location              |
| -----: | ----: | ------------: | ------: | ---------- | --------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>()` | `java.util.ArrayList` |

##### `opWrapSink(int, Sink)` (`java.util.stream.IntPipeline$1`)

| Change | Delta |             % | Samples | Caller           | Location                            |
| -----: | ----: | ------------: | ------: | ---------------- | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `wrapSink(Sink)` | `java.util.stream.AbstractPipeline` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

| Change |  Delta |             % |       Samples | Caller                  | Location                 |
| -----: | -----: | ------------: | ------------: | ----------------------- | ------------------------ |
| -53.4% | -1,855 | 44.6% → 38.3% | 3,473 → 1,618 | `Parker::park`          | `libjvm.dylib`           |
| -39.4% | -1,437 | 46.9% → 52.3% | 3,647 → 2,210 | `PlatformMonitor::wait` | `libjvm.dylib`           |
| -39.9% |   -132 |   4.3% → 4.7% |     331 → 199 | `PlatformEvent::park`   | `libjvm.dylib`           |
| -39.9% |   -132 |   4.3% → 4.7% |     331 → 199 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

| Change |  Delta |             % |       Samples | Caller                           | Location       |
| -----: | -----: | ------------: | ------------: | -------------------------------- | -------------- |
| -41.2% | -1,302 | 89.5% → 89.4% | 3,161 → 1,859 | `WorkerThread::run`              | `libjvm.dylib` |
| -39.9% |   -132 |   9.4% → 9.6% |     331 → 199 | `os::signal_wait`                | `libjvm.dylib` |
| -56.3% |    -18 |   0.9% → 0.7% |       32 → 14 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
| -11.1% |     -1 |   0.3% → 0.4% |         9 → 8 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `mach_msg2_trap` (`libsystem_kernel.dylib`)

| Change | Delta |      % |   Samples | Caller               | Location                 |
| -----: | ----: | -----: | --------: | -------------------- | ------------------------ |
| -39.9% |  -132 | 100.0% | 331 → 199 | `mach_msg_overwrite` | `libsystem_kernel.dylib` |

##### `__ulock_wait` (`libsystem_kernel.dylib`)

| Change | Delta |      % |   Samples | Caller                    | Location       |
| -----: | ----: | -----: | --------: | ------------------------- | -------------- |
| -39.9% |  -132 | 100.0% | 331 → 199 | `CallJavaMainInNewThread` | `libjli.dylib` |

##### `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |   Samples | Caller                  | Location                                                   |
| -----: | ----: | -----: | --------: | ----------------------- | ---------------------------------------------------------- |
| -31.1% |   -71 | 100.0% | 228 → 157 | `findNearestCentroid()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `doubleValue()` (`java.lang.Double`)

|  Change | Delta |             % | Samples | Caller                           | Location                                                   |
| ------: | ----: | ------------: | ------: | -------------------------------- | ---------------------------------------------------------- |
| removed |   -34 |  91.9% → 0.0% |  34 → 0 | `accumulate(Double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -66.7% |    -2 | 8.1% → 100.0% |   3 → 1 | `distance(Double[], Double[])`   | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                                  |
| -----: | ----: | -----: | --------: | ------------------- | --------------------------------------------------------- |
| -25.5% |   -35 | 100.0% | 137 → 102 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `__psynch_mutexwait` (`libsystem_kernel.dylib`)

| Change | Delta |      % | Samples | Caller                              | Location                  |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------- |
| -45.7% |   -16 | 100.0% | 35 → 19 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `grow()` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller                       | Location              |
| ------: | ----: | ------------: | ------: | ---------------------------- | --------------------- |
| removed |   -12 | 100.0% → 0.0% |  12 → 0 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |      % |   Samples | Caller        | Location                                                  |
| -----: | ----: | -----: | --------: | ------------- | --------------------------------------------------------- |
|  -5.0% |   -10 | 100.0% | 202 → 192 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `zero_blocks` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                              | Location                                                   |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ---------------------------------------------------------- |
| -46.2% |    -6 | 41.9% → 31.8% |  13 → 7 | `grow(int)`                         | `java.util.ArrayList`                                      |
| -20.0% |    -3 | 48.4% → 54.5% | 15 → 12 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`                                        |
| -33.3% |    -1 |   9.7% → 9.1% |   3 → 2 | `findNearestCentroid()`             | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|    new |    +1 |   0.0% → 4.5% |   0 → 1 | `resize()`                          | `java.util.HashMap`                                        |

##### `checkIndex(int, int)` (`java.util.Objects`)

| Change | Delta |      % | Samples | Caller     | Location              |
| -----: | ----: | -----: | ------: | ---------- | --------------------- |
| -61.5% |    -8 | 100.0% |  13 → 5 | `get(int)` | `java.util.ArrayList` |

##### `computeIfAbsent(Object, Function)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                   | Location                                                   |
| -----: | ----: | -----: | ------: | ------------------------ | ---------------------------------------------------------- |
| -20.0% |    -7 | 100.0% | 35 → 28 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `__psynch_cvsignal` (`libsystem_kernel.dylib`)

|  Change | Delta |              % | Samples | Caller                      | Location       |
| ------: | ----: | -------------: | ------: | --------------------------- | -------------- |
|  -29.4% |    -5 | 94.4% → 100.0% | 17 → 12 | `Unsafe_Unpark`             | `libjvm.dylib` |
| removed |    -1 |    5.6% → 0.0% |   1 → 0 | `G1ServiceThread::schedule` | `libjvm.dylib` |

##### `Unsafe_Park` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                | Location                   |
| -----: | ----: | -----: | ------: | --------------------- | -------------------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `write` (`libsystem_kernel.dylib`)

|  Change | Delta |             % | Samples | Caller                              | Location                            |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ----------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `write0(FileDescriptor, long, int)` | `sun.nio.ch.UnixFileDispatcherImpl` |

##### `Parker::park` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller        | Location       |
| ------: | ----: | ------------: | ------: | ------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `Unsafe_Park` | `libjvm.dylib` |

##### `signalWaiters()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % | Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `begin(long)` (`java.util.stream.Nodes$FixedNodeBuilder`)

|  Change | Delta |             % | Samples | Caller        | Location                              |
| ------: | ----: | ------------: | ------: | ------------- | ------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `begin(long)` | `java.util.stream.Sink$ChainedDouble` |

##### `__semwait_signal` (`libsystem_kernel.dylib`)

|  Change | Delta |             % | Samples | Caller                      | Location       |
| ------: | ----: | ------------: | ------: | --------------------------- | -------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `os::naked_short_nanosleep` | `libjvm.dylib` |

##### `InstanceKlass::allocate_objArray` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `OptoRuntime::new_array_C` | `libjvm.dylib` |

##### `stub:pthread_mutex_unlock` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller         | Location       |
| ------: | ----: | ------------: | ------: | -------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Parker::park` | `libjvm.dylib` |

##### `ObjArrayAllocator::initialize` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `OptoRuntime::new_instance_C` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller               | Location    |
| ------: | ----: | ------------: | ------: | -------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `_new_instance_Java` | `<unknown>` |

##### `void HeapRegion::apply_to_marked_objects<G1AdjustLiveClosure>` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                  | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `G1AdjustRegionClosure::do_heap_region` | `libjvm.dylib` |

##### `G1BarrierSet::write_ref_array_work` (`libjvm.dylib`)

|  Change | Delta |            % | Samples | Caller               | Location              |
| ------: | ----: | -----------: | ------: | -------------------- | --------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `addAll(Collection)` | `java.util.ArrayList` |

##### `CodeBlob::is_nmethod` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller              | Location       |
| ------: | ----: | ------------: | ------: | ------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `RuntimeBlob::free` | `libjvm.dylib` |

##### `iRegPNoSpOper::type` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                   | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseAggressiveCoalesce::insert_copies` | `libjvm.dylib` |

##### `HeapRegion::update_bot_for_block` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                                                                       | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `void HeapRegion::apply_to_marked_objects<G1FullGCPrepareTask::G1PrepareCompactLiveClosure>` | `libjvm.dylib` |

##### `BarrierSetC2::has_load_barrier_nodes` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                     | Location       |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `PhaseCCP::push_more_uses` | `libjvm.dylib` |

##### `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`)

| Change | Delta |      % |  Samples | Caller              | Location                                                   |
| -----: | ----: | -----: | -------: | ------------------- | ---------------------------------------------------------- |
|  -1.0% |    -1 | 100.0% | 100 → 99 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Caller                  | Location                                                               |
| ------: | ----: | ------------: | ------: | ----------------------- | ---------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `apply(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Caller   | Location                                                               |
| ------: | ----: | ------------: | ------: | -------- | ---------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `combineResults(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `add(double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Caller                               | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `combineResults(double[], double[])` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `createSubtask(int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

|  Change | Delta |             % | Samples | Caller      | Location                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Caller                              | Location                            |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

|  Change | Delta |             % | Samples | Caller                 | Location                            |
| ------: | ----: | ------------: | ------: | ---------------------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % | Samples | Caller                              | Location                            |
| -----: | ----: | -----: | ------: | ----------------------------------- | ----------------------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `signalWork()` (`java.util.concurrent.ForkJoinPool`)

|  Change | Delta |             % | Samples | Caller                                      | Location                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `push(ForkJoinTask, ForkJoinPool, boolean)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `get(int)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller        | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------- | --------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `vectorSum()` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `hasNext()` (`java.util.HashMap$HashIterator`)

|  Change | Delta |             % | Samples | Caller                        | Location            |
| ------: | ----: | ------------: | ------: | ----------------------------- | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `setAccessible(boolean)` (`java.lang.reflect.Constructor`)

|  Change | Delta |             % | Samples | Caller                                    | Location                                                |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | ------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `lambda$newResourceBundle$0(Constructor)` | `java.util.ResourceBundle$ResourceBundleProviderHelper` |

##### `countPositives(byte[], int, int)` (`java.lang.StringCoding`)

|  Change | Delta |             % | Samples | Caller                              | Location           |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(Charset, byte[], int, int)` | `java.lang.String` |

##### `<init>(URL, String, URLStreamHandler)` (`java.net.URL`)

|  Change | Delta |             % | Samples | Caller                | Location       |
| ------: | ----: | ------------: | ------: | --------------------- | -------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(URL, String)` | `java.net.URL` |

##### `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` (`java.lang.invoke.AbstractValidatingLambdaMetafactory`)

|  Change | Delta |             % | Samples | Caller                                                                                                                   | Location                                       |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `nanoTime()` (`java.lang.System`)

|  Change | Delta |             % | Samples | Caller              | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------- | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getVmStartNanos()` | `org.renaissance.harness.RenaissanceSuite$` |

##### `<init>(AbstractPipeline, int)` (`java.util.stream.AbstractPipeline`)

|  Change | Delta |             % | Samples | Caller                          | Location                             |
| ------: | ----: | ------------: | ------: | ------------------------------- | ------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(AbstractPipeline, int)` | `java.util.stream.ReferencePipeline` |

##### `opIsStateful()` (`java.util.stream.ReferencePipeline$StatelessOp`)

|  Change | Delta |             % | Samples | Caller                          | Location                            |
| ------: | ----: | ------------: | ------: | ------------------------------- | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(AbstractPipeline, int)` | `java.util.stream.AbstractPipeline` |

##### `getAndClearInterrupt()` (`java.lang.Thread`)

|  Change | Delta |             % | Samples | Caller          | Location           |
| ------: | ----: | ------------: | ------: | --------------- | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `interrupted()` | `java.lang.Thread` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |            % | Samples | Function                                                                                                               | Location                                                           |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
|     new |  +186 |  0.0% → 2.4% | 0 → 186 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                        |
|     new |  +176 |  0.0% → 2.2% | 0 → 176 | `$anonfun$2(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                          |
|  +36.8% |   +14 |  0.3% → 0.7% | 38 → 52 | `elementData(int)`                                                                                                     | `java.util.ArrayList`                                              |
|  +27.3% |   +12 |  0.3% → 0.7% | 44 → 56 | `arrayof_jint_disjoint_arraycopy`                                                                                      | `<unknown>`                                                        |
| +175.0% |    +7 | <0.1% → 0.1% |  4 → 11 | `hash(Object)`                                                                                                         | `java.util.HashMap`                                                |
|     new |    +6 |  0.0% → 0.1% |   0 → 6 | `hashCode()`                                                                                                           | `java.lang.Object`                                                 |
| +166.7% |    +5 | <0.1% → 0.1% |   3 → 8 | `pthread_jit_write_protect_np`                                                                                         | `libsystem_pthread.dylib`                                          |
|   +9.6% |    +5 |  0.4% → 0.7% | 52 → 57 | `get(int)`                                                                                                             | `java.util.ArrayList`                                              |
|     new |    +5 |  0.0% → 0.1% |   0 → 5 | `Matcher::xform`                                                                                                       | `libjvm.dylib`                                                     |
|   +6.9% |    +4 |  0.4% → 0.8% | 58 → 62 | `forward_copy_longs`                                                                                                   | `<unknown>`                                                        |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `Matcher::match`                                                                                                       | `libjvm.dylib`                                                     |
| +200.0% |    +4 | <0.1% → 0.1% |   2 → 6 | `G1FullGCMarker::complete_marking`                                                                                     | `libjvm.dylib`                                                     |
| +200.0% |    +4 | <0.1% → 0.1% |   2 → 6 | `G1FullGCMarkTask::work`                                                                                               | `libjvm.dylib`                                                     |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `JVM_IHashCode`                                                                                                        | `libjvm.dylib`                                                     |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `InstanceKlass::initialize_impl`                                                                                       | `libjvm.dylib`                                                     |
| +100.0% |    +3 | <0.1% → 0.1% |   3 → 6 | `putMapEntries(Map, boolean)`                                                                                          | `java.util.HashMap`                                                |
| +100.0% |    +3 | <0.1% → 0.1% |   3 → 6 | `<init>(Map)`                                                                                                          | `java.util.HashMap`                                                |
|  +50.0% |    +3 | <0.1% → 0.1% |   6 → 9 | `G1EvacuateRegionsBaseTask::work`                                                                                      | `libjvm.dylib`                                                     |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `InstanceKlass::link_class_impl`                                                                                       | `libjvm.dylib`                                                     |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `lambda$toCsvRows$2(String[], Function, String)`                                                                       | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### Native

|  Change | Delta |            % | Samples | Function                                                        | Location                   |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------- | -------------------------- |
|  +27.3% |   +12 |  0.3% → 0.7% | 44 → 56 | `arrayof_jint_disjoint_arraycopy`                               | `<unknown>`                |
| +166.7% |    +5 | <0.1% → 0.1% |   3 → 8 | `pthread_jit_write_protect_np`                                  | `libsystem_pthread.dylib`  |
|   +6.9% |    +4 |  0.4% → 0.8% | 58 → 62 | `forward_copy_longs`                                            | `<unknown>`                |
| +200.0% |    +4 | <0.1% → 0.1% |   2 → 6 | `G1FullGCMarker::complete_marking`                              | `libjvm.dylib`             |
| +200.0% |    +4 | <0.1% → 0.1% |   2 → 6 | `G1FullGCMarkTask::work`                                        | `libjvm.dylib`             |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `JVM_IHashCode`                                                 | `libjvm.dylib`             |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `InstanceKlass::initialize_impl`                                | `libjvm.dylib`             |
|  +50.0% |    +3 | <0.1% → 0.1% |   6 → 9 | `G1EvacuateRegionsBaseTask::work`                               | `libjvm.dylib`             |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `InstanceKlass::link_class_impl`                                | `libjvm.dylib`             |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `ThreadCritical::ThreadCritical`                                | `libjvm.dylib`             |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `Chunk::chop`                                                   | `libjvm.dylib`             |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `Chunk::next_chop`                                              | `libjvm.dylib`             |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `G1FullGCCompactTask::G1CompactRegionClosure::apply`            | `libjvm.dylib`             |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `G1FullGCCompactTask::compact_region`                           | `libjvm.dylib`             |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `G1FullGCCompactTask::work`                                     | `libjvm.dylib`             |
|  +28.6% |    +2 |         0.1% |   7 → 9 | `TaskTerminator::offer_termination`                             | `libjvm.dylib`             |
| +200.0% |    +2 |        <0.1% |   1 → 3 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib`             |
| +200.0% |    +2 |        <0.1% |   1 → 3 | `G1FullGCMarker::follow_marking_stacks`                         | `libjvm.dylib`             |
|  +66.7% |    +2 | <0.1% → 0.1% |   3 → 5 | `_platform_bzero`                                               | `libsystem_platform.dylib` |
| +200.0% |    +2 |        <0.1% |   1 → 3 | `InterpreterRuntime::_new`                                      | `libjvm.dylib`             |

##### Ours

|  Change | Delta |            % | Samples | Function                                                                                                               | Location                                                                                      |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|     new |  +186 |  0.0% → 2.4% | 0 → 186 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                                                   |
|     new |  +176 |  0.0% → 2.2% | 0 → 176 | `$anonfun$2(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `lambda$toCsvRows$2(String[], Function, String)`                                                                       | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                            |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `apply(Object)`                                                                                                        | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000007001123bf8` |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `toCsvRows(Function)`                                                                                                  | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`                            |
|  +50.0% |    +2 | <0.1% → 0.1% |   4 → 6 | `setUpBeforeAll(BenchmarkContext)`                                                                                     | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `rowToArray$1(Map)`                                                                                                    | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `setUpBeforeAll$$anonfun$1(Map)`                                                                                       | `org.renaissance.jdk.concurrent.FjKmeans`                                                     |
| +100.0% |    +1 |        <0.1% |   1 → 2 | `parse(String[])`                                                                                                      | `org.renaissance.harness.ConfigParser`                                                        |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>(JavaKMeans, List, int, int)`                                                                                   | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`                                     |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>()`                                                                                                             | `org.renaissance.harness.PolicyType$`                                                         |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<clinit>()`                                                                                                           | `org.renaissance.harness.PolicyType$`                                                         |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `<init>()`                                                                                                             | `org.renaissance.harness.Config`                                                              |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `withBenchmarkSpecification(String)`                                                                                   | `org.renaissance.harness.Config`                                                              |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `org$renaissance$harness$ConfigParser$$anon$1$$_$$lessinit$greater$$anonfun$25(String, Config)`                        | `org.renaissance.harness.ConfigParser`                                                        |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `apply(Object, Object)`                                                                                                | `org.renaissance.harness.ConfigParser$$anon$1$$Lambda.0x00000070010e7168`                     |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `action$$anonfun$1(Function2, Object, Object)`                                                                         | `scopt.OptionDef`                                                                             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `apply(Object, Object)`                                                                                                | `scopt.OptionDef$$Lambda.0x00000070010d97d8`                                                  |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `applyArgument(String, Object, Option)`                                                                                | `scopt.OptionDef`                                                                             |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `benchmarkNames(Map)`                                                                                                  | `org.renaissance.core.BenchmarkSuite`                                                         |

##### Standard library

|  Change | Delta |            % | Samples | Function                                          | Location                                  |
| ------: | ----: | -----------: | ------: | ------------------------------------------------- | ----------------------------------------- |
|  +36.8% |   +14 |  0.3% → 0.7% | 38 → 52 | `elementData(int)`                                | `java.util.ArrayList`                     |
| +175.0% |    +7 | <0.1% → 0.1% |  4 → 11 | `hash(Object)`                                    | `java.util.HashMap`                       |
|     new |    +6 |  0.0% → 0.1% |   0 → 6 | `hashCode()`                                      | `java.lang.Object`                        |
|   +9.6% |    +5 |  0.4% → 0.7% | 52 → 57 | `get(int)`                                        | `java.util.ArrayList`                     |
| +100.0% |    +3 | <0.1% → 0.1% |   3 → 6 | `putMapEntries(Map, boolean)`                     | `java.util.HashMap`                       |
| +100.0% |    +3 | <0.1% → 0.1% |   3 → 6 | `<init>(Map)`                                     | `java.util.HashMap`                       |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `accept(Object)`                                  | `java.util.stream.ReferencePipeline$3$1`  |
|     new |    +3 | 0.0% → <0.1% |   0 → 3 | `forEachRemaining(Consumer)`                      | `java.util.Spliterators$ArraySpliterator` |
|  +50.0% |    +2 | <0.1% → 0.1% |   4 → 6 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp`     |
|  +50.0% |    +2 | <0.1% → 0.1% |   4 → 6 | `evaluate(TerminalOp)`                            | `java.util.stream.AbstractPipeline`       |
|  +50.0% |    +2 | <0.1% → 0.1% |   4 → 6 | `collect(Collector)`                              | `java.util.stream.ReferencePipeline`      |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `resize()`                                        | `java.util.HashMap`                       |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `read(byte[], int, int)`                          | `java.io.FilterInputStream`               |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `<clinit>()`                                      | `scala.collection.immutable.Vector$`      |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `<init>()`                                        | `scala.collection.immutable.IndexedSeq$`  |
|     new |    +2 | 0.0% → <0.1% |   0 → 2 | `<clinit>()`                                      | `scala.collection.immutable.IndexedSeq$`  |
|  +50.0% |    +1 |        <0.1% |   2 → 3 | `putVal(int, Object, Object, boolean, boolean)`   | `java.util.HashMap`                       |
|  +50.0% |    +1 |        <0.1% |   2 → 3 | `read(byte[], int, int)`                          | `java.util.zip.InflaterInputStream`       |
|  +50.0% |    +1 |        <0.1% |   2 → 3 | `<clinit>()`                                      | `scala.package$`                          |
|     new |    +1 | 0.0% → <0.1% |   0 → 1 | `put(Object, Object)`                             | `java.util.HashMap`                       |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change |  Delta |             % |       Samples | Function                                 | Location                                               |
| -----: | -----: | ------------: | ------------: | ---------------------------------------- | ------------------------------------------------------ |
| -45.7% | -3,556 | 58.0% → 53.8% | 7,782 → 4,226 | `__psynch_cvwait`                        | `libsystem_kernel.dylib`                               |
| -39.8% | -2,987 | 55.9% → 57.5% | 7,502 → 4,515 | `_pthread_start`                         | `libsystem_pthread.dylib`                              |
| -39.8% | -2,987 | 55.9% → 57.5% | 7,502 → 4,515 | `thread_start`                           | `libsystem_pthread.dylib`                              |
| -39.8% | -2,855 | 53.4% → 54.9% | 7,170 → 4,315 | `Thread::call_run`                       | `libjvm.dylib`                                         |
| -39.8% | -2,855 | 53.4% → 54.9% | 7,170 → 4,315 | `thread_native_entry`                    | `libjvm.dylib`                                         |
| -53.5% | -1,868 | 26.0% → 20.7% | 3,492 → 1,624 | `Parker::park`                           | `libjvm.dylib`                                         |
| -53.4% | -1,868 | 26.0% → 20.7% | 3,497 → 1,629 | `Unsafe_Park`                            | `libjvm.dylib`                                         |
| -53.4% | -1,866 | 26.0% → 20.8% | 3,497 → 1,631 | `park(boolean, long)`                    | `jdk.internal.misc.Unsafe`                             |
| -45.6% | -1,799 | 29.4% → 27.4% | 3,948 → 2,149 | `runWorker(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool`                    |
| -45.6% | -1,799 | 29.4% → 27.4% | 3,948 → 2,149 | `run()`                                  | `java.util.concurrent.ForkJoinWorkerThread`            |
| -53.2% | -1,550 | 21.7% → 17.3% | 2,912 → 1,362 | `park()`                                 | `java.util.concurrent.locks.LockSupport`               |
| -41.1% | -1,453 | 26.3% → 26.5% | 3,533 → 2,080 | `semaphore_wait_trap`                    | `libsystem_kernel.dylib`                               |
| -39.3% | -1,435 | 27.2% → 28.2% | 3,647 → 2,212 | `PlatformMonitor::wait`                  | `libjvm.dylib`                                         |
| -59.1% | -1,306 | 16.5% → 11.5% |   2,209 → 903 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool`                    |
| -40.8% | -1,296 | 23.6% → 23.9% | 3,174 → 1,878 | `WorkerThread::run`                      | `libjvm.dylib`                                         |
| -39.8% | -1,051 | 19.7% → 20.2% | 2,640 → 1,589 | `Monitor::wait_without_safepoint_check`  | `libjvm.dylib`                                         |
| -38.4% |   -900 | 17.4% → 18.3% | 2,341 → 1,441 | `JavaThread::thread_main_inner`          | `libjvm.dylib`                                         |
| -30.8% |   -609 | 14.7% → 17.4% | 1,976 → 1,367 | `awaitDone(int, long)`                   | `java.util.concurrent.ForkJoinTask`                    |
| -28.5% |   -495 | 12.9% → 15.8% | 1,738 → 1,243 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool`                    |
| -28.6% |   -493 | 12.8% → 15.7% | 1,725 → 1,232 | `compute()`                              | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### Native

| Change |  Delta |             % |       Samples | Function                                                 | Location                  |
| -----: | -----: | ------------: | ------------: | -------------------------------------------------------- | ------------------------- |
| -45.7% | -3,556 | 58.0% → 53.8% | 7,782 → 4,226 | `__psynch_cvwait`                                        | `libsystem_kernel.dylib`  |
| -39.8% | -2,987 | 55.9% → 57.5% | 7,502 → 4,515 | `_pthread_start`                                         | `libsystem_pthread.dylib` |
| -39.8% | -2,987 | 55.9% → 57.5% | 7,502 → 4,515 | `thread_start`                                           | `libsystem_pthread.dylib` |
| -39.8% | -2,855 | 53.4% → 54.9% | 7,170 → 4,315 | `Thread::call_run`                                       | `libjvm.dylib`            |
| -39.8% | -2,855 | 53.4% → 54.9% | 7,170 → 4,315 | `thread_native_entry`                                    | `libjvm.dylib`            |
| -53.5% | -1,868 | 26.0% → 20.7% | 3,492 → 1,624 | `Parker::park`                                           | `libjvm.dylib`            |
| -53.4% | -1,868 | 26.0% → 20.7% | 3,497 → 1,629 | `Unsafe_Park`                                            | `libjvm.dylib`            |
| -41.1% | -1,453 | 26.3% → 26.5% | 3,533 → 2,080 | `semaphore_wait_trap`                                    | `libsystem_kernel.dylib`  |
| -39.3% | -1,435 | 27.2% → 28.2% | 3,647 → 2,212 | `PlatformMonitor::wait`                                  | `libjvm.dylib`            |
| -40.8% | -1,296 | 23.6% → 23.9% | 3,174 → 1,878 | `WorkerThread::run`                                      | `libjvm.dylib`            |
| -39.8% | -1,051 | 19.7% → 20.2% | 2,640 → 1,589 | `Monitor::wait_without_safepoint_check`                  | `libjvm.dylib`            |
| -38.4% |   -900 | 17.4% → 18.3% | 2,341 → 1,441 | `JavaThread::thread_main_inner`                          | `libjvm.dylib`            |
| -39.9% |   -396 |   7.4% → 7.6% |     993 → 597 | `ConcurrentGCThread::run`                                | `libjvm.dylib`            |
| -38.0% |   -383 |   7.5% → 7.9% |   1,007 → 624 | `Monitor::wait`                                          | `libjvm.dylib`            |
| -39.9% |   -264 |   4.9% → 5.1% |     662 → 398 | `JLI_Launch`                                             | `libjli.dylib`            |
| -39.9% |   -264 |   4.9% → 5.1% |     662 → 398 | `main`                                                   | `java`                    |
| -39.9% |   -132 |          2.5% |     331 → 199 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib`            |
| -39.9% |   -132 |          2.5% |     331 → 199 | `JVM_WaitForReferencePendingList`                        | `libjvm.dylib`            |
| -39.9% |   -132 |          2.5% |     331 → 199 | `G1ServiceThread::wait_for_task`                         | `libjvm.dylib`            |
| -39.9% |   -132 |          2.5% |     331 → 199 | `G1ServiceThread::run_service`                           | `libjvm.dylib`            |

##### Ours

|  Change | Delta |             % |       Samples | Function                                                                                                               | Location                                                               |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -28.6% |  -493 | 12.8% → 15.7% | 1,725 → 1,232 | `compute()`                                                                                                            | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`                 |
| removed |  -317 |   2.4% → 0.0% |       317 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$`                            |
| removed |  -304 |   2.3% → 0.0% |       304 → 0 | `$anonfun$1(int)`                                                                                                      | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -40.2% |  -132 |   2.4% → 2.5% |     328 → 196 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])`                                                            | `org.renaissance.core.Launcher`                                        |
|  -40.2% |  -132 |   2.4% → 2.5% |     328 → 196 | `launchHarnessClass(String, String[])`                                                                                 | `org.renaissance.core.Launcher`                                        |
|  -40.2% |  -132 |   2.4% → 2.5% |     328 → 196 | `main(String[])`                                                                                                       | `org.renaissance.core.Launcher`                                        |
|  -40.5% |  -132 |   2.4% → 2.5% |     326 → 194 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite`                             |
|  -43.0% |  -131 |   2.3% → 2.2% |     305 → 174 | `lambda$run$0(int, List, int)`                                                                                         | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -43.0% |  -131 |   2.3% → 2.2% |     305 → 174 | `call()`                                                                                                               | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |
|  -40.3% |  -131 |   2.4% → 2.5% |     325 → 194 | `main(String[])`                                                                                                       | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -41.2% |  -131 |          2.4% |     318 → 187 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)`                                          | `org.renaissance.harness.RenaissanceSuite$`                            |
|  -41.3% |  -131 |          2.4% |     317 → 186 | `applyVoid(Object)`                                                                                                    | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0` |
|  -42.3% |  -131 |          2.3% |     310 → 179 | `executeOperation(int)`                                                                                                | `org.renaissance.harness.ExecutionDriver`                              |
|  -42.5% |  -130 |   2.3% → 2.2% |     306 → 176 | `run(BenchmarkContext)`                                                                                                | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -41.1% |  -129 |   2.3% → 2.4% |     314 → 185 | `executeBenchmark()`                                                                                                   | `org.renaissance.harness.ExecutionDriver`                              |
|  -42.1% |  -128 |   2.3% → 2.2% |     304 → 176 | `run(int, List, int)`                                                                                                  | `org.renaissance.jdk.concurrent.JavaKMeans`                            |
|  -42.1% |  -128 |   2.3% → 2.2% |     304 → 176 | `$anonfun$adapted$1(Object)`                                                                                           | `org.renaissance.jdk.concurrent.FjKmeans`                              |
|  -38.3% |  -126 |   2.5% → 2.6% |     329 → 203 | `computeClusterAverages()`                                                                                             | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -38.3% |  -126 |   2.5% → 2.6% |     329 → 203 | `computeDirectly()`                                                                                                    | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`                 |
|  -41.4% |  -126 |          2.3% |     304 → 178 | `apply(Object)`                                                                                                        | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda`                      |

##### Unknown

| Change | Delta |           % |   Samples | Function      | Location    |
| -----: | ----: | ----------: | --------: | ------------- | ----------- |
| -38.8% |  -125 | 2.4% → 2.5% | 322 → 197 | `(anonymous)` | `<unknown>` |

##### Standard library

| Change |  Delta |             % |       Samples | Function                                             | Location                                      |
| -----: | -----: | ------------: | ------------: | ---------------------------------------------------- | --------------------------------------------- |
| -53.4% | -1,866 | 26.0% → 20.8% | 3,497 → 1,631 | `park(boolean, long)`                                | `jdk.internal.misc.Unsafe`                    |
| -45.6% | -1,799 | 29.4% → 27.4% | 3,948 → 2,149 | `runWorker(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`           |
| -45.6% | -1,799 | 29.4% → 27.4% | 3,948 → 2,149 | `run()`                                              | `java.util.concurrent.ForkJoinWorkerThread`   |
| -53.2% | -1,550 | 21.7% → 17.3% | 2,912 → 1,362 | `park()`                                             | `java.util.concurrent.locks.LockSupport`      |
| -59.1% | -1,306 | 16.5% → 11.5% |   2,209 → 903 | `awaitWork(ForkJoinPool$WorkQueue)`                  | `java.util.concurrent.ForkJoinPool`           |
| -30.8% |   -609 | 14.7% → 17.4% | 1,976 → 1,367 | `awaitDone(int, long)`                               | `java.util.concurrent.ForkJoinTask`           |
| -28.5% |   -495 | 12.9% → 15.8% | 1,738 → 1,243 | `scan(ForkJoinPool$WorkQueue, int, int)`             | `java.util.concurrent.ForkJoinPool`           |
| -28.5% |   -492 | 12.8% → 15.7% | 1,725 → 1,233 | `exec()`                                             | `java.util.concurrent.RecursiveTask`          |
| -28.3% |   -490 | 12.9% → 15.8% | 1,729 → 1,239 | `doExec()`                                           | `java.util.concurrent.ForkJoinTask`           |
| -28.3% |   -490 | 12.9% → 15.8% | 1,729 → 1,239 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -28.8% |   -481 | 12.5% → 15.2% | 1,672 → 1,191 | `join()`                                             | `java.util.concurrent.ForkJoinTask`           |
| -25.4% |   -350 | 10.2% → 13.1% | 1,376 → 1,026 | `tryRemoveAndExec(ForkJoinTask, boolean)`            | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -38.8% |   -207 |   4.0% → 4.2% |     533 → 326 | `invoke()`                                           | `java.util.concurrent.ForkJoinTask`           |
| -72.2% |   -184 |   1.9% → 0.9% |      255 → 71 | `parkUntil(long)`                                    | `java.util.concurrent.locks.LockSupport`      |
| -39.9% |   -132 |          2.5% |     331 → 199 | `waitForReferencePendingList()`                      | `java.lang.ref.Reference`                     |
| -39.9% |   -132 |          2.5% |     331 → 199 | `processPendingReferences()`                         | `java.lang.ref.Reference`                     |
| -39.9% |   -132 |          2.5% |     331 → 199 | `run()`                                              | `java.lang.ref.Reference$ReferenceHandler`    |
| -39.9% |   -132 |          2.5% |     331 → 199 | `wait0(long)`                                        | `java.lang.Object`                            |
| -39.9% |   -132 |          2.5% |     331 → 199 | `wait(long)`                                         | `java.lang.Object`                            |
| -39.9% |   -132 |          2.5% |     331 → 199 | `wait()`                                             | `java.lang.Object`                            |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |             % | Samples | Caller              | Location                                                               |
| -----: | ----: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
|    new |  +186 | 0.0% → 100.0% | 0 → 186 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0` |

##### `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Caller                       | Location                                  |
| -----: | ----: | ------------: | ------: | ---------------------------- | ----------------------------------------- |
|    new |  +176 | 0.0% → 100.0% | 0 → 176 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `elementData(int)` (`java.util.ArrayList`)

| Change | Delta |      % | Samples | Caller     | Location              |
| -----: | ----: | -----: | ------: | ---------- | --------------------- |
| +36.8% |   +14 | 100.0% | 38 → 52 | `get(int)` | `java.util.ArrayList` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller                              | Location              |
| ------: | ----: | ------------: | ------: | ----------------------------------- | --------------------- |
| +128.6% |    +9 | 15.9% → 28.6% |  7 → 16 | `merge(Object, Object, BiFunction)` | `java.util.HashMap`   |
|  +14.7% |    +5 | 77.3% → 69.6% | 34 → 39 | `copyOf(Object[], int)`             | `java.util.Arrays`    |
|  -66.7% |    -2 |   6.8% → 1.8% |   3 → 1 | `grow(int)`                         | `java.util.ArrayList` |

##### `hash(Object)` (`java.util.HashMap`)

|  Change | Delta |              % | Samples | Caller                              | Location            |
| ------: | ----: | -------------: | ------: | ----------------------------------- | ------------------- |
| +125.0% |    +5 | 100.0% → 81.8% |   4 → 9 | `computeIfAbsent(Object, Function)` | `java.util.HashMap` |
|     new |    +1 |    0.0% → 9.1% |   0 → 1 | `put(Object, Object)`               | `java.util.HashMap` |
|     new |    +1 |    0.0% → 9.1% |   0 → 1 | `putMapEntries(Map, boolean)`       | `java.util.HashMap` |

##### `hashCode()` (`java.lang.Object`)

| Change | Delta |             % | Samples | Caller         | Location            |
| -----: | ----: | ------------: | ------: | -------------- | ------------------- |
|    new |    +6 | 0.0% → 100.0% |   0 → 6 | `hash(Object)` | `java.util.HashMap` |

##### `pthread_jit_write_protect_np` (`libsystem_pthread.dylib`)

|  Change | Delta |             % | Samples | Caller                         | Location       |
| ------: | ----: | ------------: | ------: | ------------------------------ | -------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `Unsafe_Unpark`                | `libjvm.dylib` |
|     new |    +3 |  0.0% → 37.5% |   0 → 3 | `JVM_IHashCode`                | `libjvm.dylib` |
|     new |    +3 |  0.0% → 37.5% |   0 → 3 | `Unsafe_Park`                  | `libjvm.dylib` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `OptoRuntime::new_array_C`     | `libjvm.dylib` |
|     new |    +1 |  0.0% → 12.5% |   0 → 1 | `InterpreterRuntime::newarray` | `libjvm.dylib` |

##### `get(int)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Caller                   | Location                                                   |
| -----: | ----: | ------------: | ------: | ------------------------ | ---------------------------------------------------------- |
| +59.1% |   +13 | 42.3% → 61.4% | 22 → 35 | `vectorSum()`            | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
| -35.3% |    -6 | 32.7% → 19.3% | 17 → 11 | `findNearestCentroid()`  | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -15.4% |    -2 | 25.0% → 19.3% | 13 → 11 | `collectClusters(int[])` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `Matcher::xform` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller           | Location       |
| -----: | ----: | ------------: | ------: | ---------------- | -------------- |
|    new |    +5 | 0.0% → 100.0% |   0 → 5 | `Matcher::match` | `libjvm.dylib` |

##### `forward_copy_longs` (`<unknown>`)

| Change | Delta |             % | Samples | Caller                            | Location    |
| -----: | ----: | ------------: | ------: | --------------------------------- | ----------- |
| +21.4% |    +9 | 72.4% → 82.3% | 42 → 51 | `arrayof_jint_disjoint_arraycopy` | `<unknown>` |
| -31.3% |    -5 | 27.6% → 17.7% | 16 → 11 | `arrayof_oop_disjoint_arraycopy`  | `<unknown>` |

##### `Matcher::match` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller              | Location       |
| ------: | ----: | -----: | ------: | ------------------- | -------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `Compile::Code_Gen` | `libjvm.dylib` |

##### `G1FullGCMarker::complete_marking` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                   | Location       |
| ------: | ----: | -----: | ------: | ------------------------ | -------------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `G1FullGCMarkTask::work` | `libjvm.dylib` |

##### `G1FullGCMarkTask::work` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller              | Location       |
| ------: | ----: | -----: | ------: | ------------------- | -------------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `WorkerThread::run` | `libjvm.dylib` |

##### `JVM_IHashCode` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller       | Location           |
| -----: | ----: | ------------: | ------: | ------------ | ------------------ |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `hashCode()` | `java.lang.Object` |

##### `InstanceKlass::initialize_impl` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                        | Location       |
| -----: | ----: | -----------: | ------: | ----------------------------- | -------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `InterpreterRuntime::_new`    | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `LinkResolver::resolve_field` | `libjvm.dylib` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Caller        | Location            |
| ------: | ----: | -----: | ------: | ------------- | ------------------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `<init>(Map)` | `java.util.HashMap` |

##### `<init>(Map)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Caller            | Location                                    |
| ------: | ----: | -----: | ------: | ----------------- | ------------------------------------------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `merge(Map, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

| Change | Delta |      % | Samples | Caller              | Location       |
| -----: | ----: | -----: | ------: | ------------------- | -------------- |
| +50.0% |    +3 | 100.0% |   6 → 9 | `WorkerThread::run` | `libjvm.dylib` |

##### `InstanceKlass::link_class_impl` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                               | Location       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------- | -------------- |
|     new |    +4 | 0.0% → 100.0% |   0 → 4 | `InstanceKlass::initialize_impl`                     | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `SystemDictionary::resolve_hidden_class_from_stream` | `libjvm.dylib` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `InstanceKlass::link_class_impl`                     | `libjvm.dylib` |

##### `lambda$toCsvRows$2(String[], Function, String)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change | Delta |             % | Samples | Caller          | Location                                                                                      |
| -----: | ----: | ------------: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `apply(Object)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000007001123bf8` |

##### `ThreadCritical::ThreadCritical` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller        | Location       |
| -----: | ----: | ------------: | ------: | ------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `Chunk::chop` | `libjvm.dylib` |

##### `Chunk::chop` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller             | Location       |
| -----: | ----: | ------------: | ------: | ------------------ | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `Chunk::next_chop` | `libjvm.dylib` |

##### `Chunk::next_chop` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Caller                                | Location       |
| -----: | ----: | -----------: | ------: | ------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `Matcher::match_tree`                 | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `Deoptimization::uncommon_trap_inner` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `Deoptimization::cleanup_deopt_info`  | `libjvm.dylib` |

##### `G1FullGCCompactTask::G1CompactRegionClosure::apply` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                                | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `G1FullGCCompactTask::compact_region` | `libjvm.dylib` |

##### `G1FullGCCompactTask::compact_region` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller                      | Location       |
| -----: | ----: | ------------: | ------: | --------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `G1FullGCCompactTask::work` | `libjvm.dylib` |

##### `G1FullGCCompactTask::work` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Caller              | Location       |
| -----: | ----: | ------------: | ------: | ------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `WorkerThread::run` | `libjvm.dylib` |

##### `TaskTerminator::offer_termination` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller                                             | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- | -------------- |
|  +16.7% |    +1 | 85.7% → 77.8% |   6 → 7 | `G1ParEvacuateFollowersClosure::offer_termination` | `libjvm.dylib` |
| +100.0% |    +1 | 14.3% → 22.2% |   1 → 2 | `G1FullGCMarker::complete_marking`                 | `libjvm.dylib` |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Caller                                  | Location       |
| ------: | ----: | -------------: | ------: | --------------------------------------- | -------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `G1FullGCMarker::follow_marking_stacks` | `libjvm.dylib` |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `G1FullGCMarker::complete_marking`      | `libjvm.dylib` |

##### `G1FullGCMarker::follow_marking_stacks` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Caller                             | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `G1FullGCMarker::complete_marking` | `libjvm.dylib` |

##### `_platform_bzero` (`libsystem_platform.dylib`)

| Change | Delta |      % | Samples | Caller                   | Location       |
| -----: | ----: | -----: | ------: | ------------------------ | -------------- |
| +66.7% |    +2 | 100.0% |   3 → 5 | `MemAllocator::allocate` | `libjvm.dylib` |

##### `InterpreterRuntime::_new` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Caller          | Location                                                |
| ------: | ----: | ------------: | ------: | --------------- | ------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<clinit>()`    | `sun.nio.ch.FileChannelImpl`                            |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `<clinit>()`    | `scala.math.BigInt$`                                    |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `<init>(int)`   | `scala.Enumeration`                                     |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `doubleValue()` | `jdk.internal.math.FloatingDecimal$ASCIIToBinaryBuffer` |

##### `apply(Object)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000007001123bf8`)

| Change | Delta |             % | Samples | Caller           | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------- | ---------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `accept(Object)` | `java.util.stream.ReferencePipeline$3$1` |

##### `toCsvRows(Function)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change | Delta |             % | Samples | Caller                             | Location                                  |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ----------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |      % | Samples | Caller               | Location                                  |
| -----: | ----: | -----: | ------: | -------------------- | ----------------------------------------- |
| +50.0% |    +2 | 100.0% |   4 → 6 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Caller                           | Location                                  |
| -----: | ----: | ------------: | ------: | -------------------------------- | ----------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `setUpBeforeAll$$anonfun$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `setUpBeforeAll$$anonfun$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Caller          | Location                                          |
| -----: | ----: | ------------: | ------: | --------------- | ------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda` |

##### `parse(String[])` (`org.renaissance.harness.ConfigParser`)

|  Change | Delta |      % | Samples | Caller           | Location                                    |
| ------: | ----: | -----: | ------: | ---------------- | ------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `<init>(JavaKMeans, List, int, int)` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`)

| Change | Delta |             % | Samples | Caller                    | Location                                                  |
| -----: | ----: | ------------: | ------: | ------------------------- | --------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `createSubtask(int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask` |

##### `<init>()` (`org.renaissance.harness.PolicyType$`)

| Change | Delta |             % | Samples | Caller       | Location                              |
| -----: | ----: | ------------: | ------: | ------------ | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<clinit>()` | `org.renaissance.harness.PolicyType$` |

##### `<clinit>()` (`org.renaissance.harness.PolicyType$`)

| Change | Delta |             % | Samples | Caller     | Location                         |
| -----: | ----: | ------------: | ------: | ---------- | -------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>()` | `org.renaissance.harness.Config` |

##### `<init>()` (`org.renaissance.harness.Config`)

| Change | Delta |             % | Samples | Caller            | Location                               |
| -----: | ----: | ------------: | ------: | ----------------- | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `parse(String[])` | `org.renaissance.harness.ConfigParser` |

##### `withBenchmarkSpecification(String)` (`org.renaissance.harness.Config`)

| Change | Delta |             % | Samples | Caller                                                                                          | Location                               |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------- | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org$renaissance$harness$ConfigParser$$anon$1$$_$$lessinit$greater$$anonfun$25(String, Config)` | `org.renaissance.harness.ConfigParser` |

##### `org$renaissance$harness$ConfigParser$$anon$1$$_$$lessinit$greater$$anonfun$25(String, Config)` (`org.renaissance.harness.ConfigParser`)

| Change | Delta |             % | Samples | Caller                  | Location                                                                  |
| -----: | ----: | ------------: | ------: | ----------------------- | ------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `apply(Object, Object)` | `org.renaissance.harness.ConfigParser$$anon$1$$Lambda.0x00000070010e7168` |

##### `apply(Object, Object)` (`org.renaissance.harness.ConfigParser$$anon$1$$Lambda.0x00000070010e7168`)

| Change | Delta |             % | Samples | Caller                                         | Location          |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- | ----------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `action$$anonfun$1(Function2, Object, Object)` | `scopt.OptionDef` |

##### `action$$anonfun$1(Function2, Object, Object)` (`scopt.OptionDef`)

| Change | Delta |             % | Samples | Caller                  | Location                                     |
| -----: | ----: | ------------: | ------: | ----------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `apply(Object, Object)` | `scopt.OptionDef$$Lambda.0x00000070010d97d8` |

##### `apply(Object, Object)` (`scopt.OptionDef$$Lambda.0x00000070010d97d8`)

| Change | Delta |             % | Samples | Caller                                  | Location          |
| -----: | ----: | ------------: | ------: | --------------------------------------- | ----------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `applyArgument(String, Object, Option)` | `scopt.OptionDef` |

##### `applyArgument(String, Object, Option)` (`scopt.OptionDef`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                      | Location         |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `handleArgument$1(List, OParserSetup, ListBuffer, ListBuffer, ListBuffer, ObjectRef, BooleanRef, ListBuffer, LazyRef, LazyRef, LazyRef, OptionDef, String)` | `scopt.ORunner$` |

##### `benchmarkNames(Map)` (`org.renaissance.core.BenchmarkSuite`)

| Change | Delta |             % | Samples | Caller                                 | Location                              |
| -----: | ----: | ------------: | ------: | -------------------------------------- | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `createBenchmarkDescriptors(Map, Map)` | `org.renaissance.core.BenchmarkSuite` |

##### `accept(Object)` (`java.util.stream.ReferencePipeline$3$1`)

| Change | Delta |             % | Samples | Caller                       | Location                                  |
| -----: | ----: | ------------: | ------: | ---------------------------- | ----------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `forEachRemaining(Consumer)` | `java.util.Spliterators$ArraySpliterator` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterators$ArraySpliterator`)

| Change | Delta |             % | Samples | Caller                        | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------- | ----------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `copyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

| Change | Delta |      % | Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| +50.0% |    +2 | 100.0% |   4 → 6 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |      % | Samples | Caller               | Location                             |
| -----: | ----: | -----: | ------: | -------------------- | ------------------------------------ |
| +50.0% |    +2 | 100.0% |   4 → 6 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

| Change | Delta |              % | Samples | Caller                        | Location                                                           |
| -----: | ----: | -------------: | ------: | ----------------------------- | ------------------------------------------------------------------ |
|    new |    +3 |   0.0% → 50.0% |   0 → 3 | `toCsvRows(Function)`         | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
| -25.0% |    -1 | 100.0% → 50.0% |   4 → 3 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Caller                                          | Location            |
| -----: | ----: | -----------: | ------: | ----------------------------------------------- | ------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `computeIfAbsent(Object, Function)`             | `java.util.HashMap` |

##### `read(byte[], int, int)` (`java.io.FilterInputStream`)

| Change | Delta |             % | Samples | Caller                     | Location              |
| -----: | ----: | ------------: | ------: | -------------------------- | --------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `transferTo(OutputStream)` | `java.io.InputStream` |

##### `<clinit>()` (`scala.collection.immutable.Vector$`)

| Change | Delta |             % | Samples | Caller     | Location                                 |
| -----: | ----: | ------------: | ------: | ---------- | ---------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `<init>()` | `scala.collection.immutable.IndexedSeq$` |

##### `<init>()` (`scala.collection.immutable.IndexedSeq$`)

| Change | Delta |             % | Samples | Caller       | Location                                 |
| -----: | ----: | ------------: | ------: | ------------ | ---------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `<clinit>()` | `scala.collection.immutable.IndexedSeq$` |

##### `<clinit>()` (`scala.collection.immutable.IndexedSeq$`)

| Change | Delta |             % | Samples | Caller       | Location         |
| -----: | ----: | ------------: | ------: | ------------ | ---------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `<clinit>()` | `scala.package$` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller                        | Location            |
| -----: | ----: | -----: | ------: | ----------------------------- | ------------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

| Change | Delta |              % | Samples | Caller                   | Location                       |
| -----: | ----: | -------------: | ------: | ------------------------ | ------------------------------ |
|    new |    +2 |   0.0% → 66.7% |   0 → 2 | `read(byte[], int, int)` | `java.io.FilterInputStream`    |
| -50.0% |    -1 | 100.0% → 33.3% |   2 → 1 | `getBytes()`             | `jdk.internal.loader.Resource` |

##### `<clinit>()` (`scala.package$`)

| Change | Delta |      % | Samples | Caller       | Location        |
| -----: | ----: | -----: | ------: | ------------ | --------------- |
| +50.0% |    +1 | 100.0% |   2 → 3 | `<clinit>()` | `scala.Predef$` |

##### `put(Object, Object)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller                     | Location                                               |
| -----: | ----: | ------------: | ------: | -------------------------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `__psynch_cvwait` (`libsystem_kernel.dylib`)

| Change |  Delta |             % |       Samples | Caller                  | Location                 |
| -----: | -----: | ------------: | ------------: | ----------------------- | ------------------------ |
| -53.4% | -1,855 | 44.6% → 38.3% | 3,473 → 1,618 | `Parker::park`          | `libjvm.dylib`           |
| -39.4% | -1,437 | 46.9% → 52.3% | 3,647 → 2,210 | `PlatformMonitor::wait` | `libjvm.dylib`           |
| -39.9% |   -132 |   4.3% → 4.7% |     331 → 199 | `PlatformEvent::park`   | `libjvm.dylib`           |
| -39.9% |   -132 |   4.3% → 4.7% |     331 → 199 | `Profiler::timerLoop`   | `libasyncProfiler.dylib` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change |  Delta |      % |       Samples | Caller         | Location                  |
| -----: | -----: | -----: | ------------: | -------------- | ------------------------- |
| -39.8% | -2,987 | 100.0% | 7,502 → 4,515 | `thread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change |  Delta |      % |       Samples | Caller                | Location       |
| -----: | -----: | -----: | ------------: | --------------------- | -------------- |
| -39.8% | -2,855 | 100.0% | 7,170 → 4,315 | `thread_native_entry` | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change |  Delta |      % |       Samples | Caller           | Location                  |
| -----: | -----: | -----: | ------------: | ---------------- | ------------------------- |
| -39.8% | -2,855 | 100.0% | 7,170 → 4,315 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Parker::park` (`libjvm.dylib`)

| Change |  Delta |      % |       Samples | Caller        | Location       |
| -----: | -----: | -----: | ------------: | ------------- | -------------- |
| -53.5% | -1,868 | 100.0% | 3,492 → 1,624 | `Unsafe_Park` | `libjvm.dylib` |

##### `Unsafe_Park` (`libjvm.dylib`)

| Change |  Delta |      % |       Samples | Caller                | Location                   |
| -----: | -----: | -----: | ------------: | --------------------- | -------------------------- |
| -53.4% | -1,868 | 100.0% | 3,497 → 1,629 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change |  Delta |             % |       Samples | Caller                    | Location                                 |
| -----: | -----: | ------------: | ------------: | ------------------------- | ---------------------------------------- |
| -53.2% | -1,550 | 83.3% → 83.5% | 2,912 → 1,362 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
| -72.2% |   -184 |   7.3% → 4.4% |      255 → 71 | `parkUntil(long)`         | `java.util.concurrent.locks.LockSupport` |
| -40.0% |   -132 |  9.4% → 12.1% |     330 → 198 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |  Delta |      % |       Samples | Caller  | Location                                    |
| -----: | -----: | -----: | ------------: | ------- | ------------------------------------------- |
| -45.6% | -1,799 | 100.0% | 3,948 → 2,149 | `run()` | `java.util.concurrent.ForkJoinWorkerThread` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change |  Delta |             % |     Samples | Caller                              | Location                            |
| -----: | -----: | ------------: | ----------: | ----------------------------------- | ----------------------------------- |
| -57.4% | -1,119 | 67.0% → 61.1% | 1,951 → 832 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |
| -44.8% |   -431 | 33.0% → 38.9% |   961 → 530 | `awaitDone(int, long)`              | `java.util.concurrent.ForkJoinTask` |

##### `semaphore_wait_trap` (`libsystem_kernel.dylib`)

| Change |  Delta |             % |       Samples | Caller                           | Location       |
| -----: | -----: | ------------: | ------------: | -------------------------------- | -------------- |
| -41.2% | -1,302 | 89.5% → 89.4% | 3,161 → 1,859 | `WorkerThread::run`              | `libjvm.dylib` |
| -39.9% |   -132 |   9.4% → 9.6% |     331 → 199 | `os::signal_wait`                | `libjvm.dylib` |
| -56.3% |    -18 |   0.9% → 0.7% |       32 → 14 | `GenericWaitBarrier::Cell::wait` | `libjvm.dylib` |
| -11.1% |     -1 |   0.3% → 0.4% |         9 → 8 | `WorkerThreads::run_task`        | `libjvm.dylib` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

| Change |  Delta |             % |       Samples | Caller                                  | Location       |
| -----: | -----: | ------------: | ------------: | --------------------------------------- | -------------- |
| -39.8% | -1,051 | 72.4% → 71.8% | 2,640 → 1,589 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |
| -38.1% |   -384 | 27.6% → 28.2% |   1,007 → 623 | `Monitor::wait`                         | `libjvm.dylib` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |  Delta |      % |     Samples | Caller                              | Location                            |
| -----: | -----: | -----: | ----------: | ----------------------------------- | ----------------------------------- |
| -59.1% | -1,306 | 100.0% | 2,209 → 903 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `WorkerThread::run` (`libjvm.dylib`)

| Change |  Delta |      % |       Samples | Caller             | Location       |
| -----: | -----: | -----: | ------------: | ------------------ | -------------- |
| -40.8% | -1,296 | 100.0% | 3,174 → 1,878 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

| Change | Delta |     % |   Samples | Caller                                                   | Location       |
| -----: | ----: | ----: | --------: | -------------------------------------------------------- | -------------- |
| -39.9% |  -132 | 12.5% | 331 → 199 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| -39.9% |  -132 | 12.5% | 331 → 199 | `G1ServiceThread::wait_for_task`                         | `libjvm.dylib` |
| -39.9% |  -132 | 12.5% | 331 → 199 | `WatcherThread::sleep`                                   | `libjvm.dylib` |
| -39.9% |  -132 | 12.5% | 331 → 199 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| -40.0% |  -132 | 12.5% | 330 → 198 | `NotificationThread::notification_thread_entry`          | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change | Delta |      % |       Samples | Caller             | Location       |
| -----: | ----: | -----: | ------------: | ------------------ | -------------- |
| -38.4% |  -900 | 100.0% | 2,341 → 1,441 | `Thread::call_run` | `libjvm.dylib` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Caller   | Location                            |
| -----: | ----: | ------------: | ------------: | -------- | ----------------------------------- |
| -28.8% |  -481 | 84.6% → 87.1% | 1,672 → 1,191 | `join()` | `java.util.concurrent.ForkJoinTask` |
| -42.1% |  -128 | 15.4% → 12.9% |     304 → 176 | `get()`  | `java.util.concurrent.ForkJoinTask` |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |      % |       Samples | Caller                              | Location                            |
| -----: | ----: | -----: | ------------: | ----------------------------------- | ----------------------------------- |
| -28.5% |  -495 | 100.0% | 1,738 → 1,243 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |      % |       Samples | Caller   | Location                             |
| -----: | ----: | -----: | ------------: | -------- | ------------------------------------ |
| -28.6% |  -493 | 100.0% | 1,725 → 1,232 | `exec()` | `java.util.concurrent.RecursiveTask` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller             | Location       |
| -----: | ----: | -----: | --------: | ------------------ | -------------- |
| -39.9% |  -396 | 100.0% | 993 → 597 | `Thread::call_run` | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Caller                            | Location       |
| -----: | ----: | ------------: | --------: | --------------------------------- | -------------- |
| -36.4% |  -240 | 65.4% → 67.1% | 659 → 419 | `CompileQueue::get`               | `libjvm.dylib` |
| -39.9% |  -132 | 32.9% → 31.9% | 331 → 199 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |
| -64.7% |   -11 |   1.7% → 1.0% |    17 → 6 | `VMThread::wait_until_executed`   | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

| Change | Delta |      % |   Samples | Caller | Location |
| -----: | ----: | -----: | --------: | ------ | -------- |
| -39.9% |  -264 | 100.0% | 662 → 398 | `main` | `java`   |

##### `main` (`java`)

| Change | Delta |     % |   Samples | Caller       | Location       |
| -----: | ----: | ----: | --------: | ------------ | -------------- |
| -39.9% |  -132 | 50.0% | 331 → 199 | `unknown`    | `<unknown>`    |
| -39.9% |  -132 | 50.0% | 331 → 199 | `apple_main` | `libjli.dylib` |

##### `MonitorDeflationThread::monitor_deflation_thread_entry` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                          | Location       |
| -----: | ----: | -----: | --------: | ------------------------------- | -------------- |
| -39.9% |  -132 | 100.0% | 331 → 199 | `JavaThread::thread_main_inner` | `libjvm.dylib` |

##### `JVM_WaitForReferencePendingList` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                          | Location                  |
| -----: | ----: | -----: | --------: | ------------------------------- | ------------------------- |
| -39.9% |  -132 | 100.0% | 331 → 199 | `waitForReferencePendingList()` | `java.lang.ref.Reference` |

##### `G1ServiceThread::wait_for_task` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                         | Location       |
| -----: | ----: | -----: | --------: | ------------------------------ | -------------- |
| -39.9% |  -132 | 100.0% | 331 → 199 | `G1ServiceThread::run_service` | `libjvm.dylib` |

##### `G1ServiceThread::run_service` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Caller                    | Location       |
| -----: | ----: | -----: | --------: | ------------------------- | -------------- |
| -39.9% |  -132 | 100.0% | 331 → 199 | `ConcurrentGCThread::run` | `libjvm.dylib` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % | Samples | Caller              | Location                                                               |
| ------: | ----: | ------------: | ------: | ------------------- | ---------------------------------------------------------------------- |
| removed |  -317 | 100.0% → 0.0% | 317 → 0 | `applyVoid(Object)` | `org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f00111f208` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |             % | Samples | Caller                       | Location                                  |
| ------: | ----: | ------------: | ------: | ---------------------------- | ----------------------------------------- |
| removed |  -304 | 100.0% → 0.0% | 304 → 0 | `$anonfun$adapted$1(Object)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % |   Samples | Caller                                 | Location                        |
| -----: | ----: | -----: | --------: | -------------------------------------- | ------------------------------- |
| -40.2% |  -132 | 100.0% | 328 → 196 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % |   Samples | Caller           | Location                        |
| -----: | ----: | -----: | --------: | ---------------- | ------------------------------- |
| -40.2% |  -132 | 100.0% | 328 → 196 | `main(String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

| Change | Delta |      % |   Samples | Caller                         | Location                                             |
| -----: | ----: | -----: | --------: | ------------------------------ | ---------------------------------------------------- |
| -40.5% |  -132 | 100.0% | 326 → 194 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001004800` |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Caller   | Location                                                               |
| -----: | ----: | -----: | --------: | -------- | ---------------------------------------------------------------------- |
| -43.0% |  -131 | 100.0% | 305 → 174 | `call()` | `org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0` |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`)

| Change | Delta |      % |   Samples | Caller   | Location                                            |
| -----: | ----: | -----: | --------: | -------- | --------------------------------------------------- |
| -43.0% |  -131 | 100.0% | 305 → 174 | `exec()` | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |      % |   Samples | Caller           | Location                                   |
| -----: | ----: | -----: | --------: | ---------------- | ------------------------------------------ |
| -40.3% |  -131 | 100.0% | 325 → 194 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite` |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |      % |   Samples | Caller           | Location                                    |
| -----: | ----: | -----: | --------: | ---------------- | ------------------------------------------- |
| -41.2% |  -131 | 100.0% | 318 → 187 | `main(String[])` | `org.renaissance.harness.RenaissanceSuite$` |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0`)

| Change | Delta |      % |   Samples | Caller          | Location                             |
| -----: | ----: | -----: | --------: | --------------- | ------------------------------------ |
| -41.3% |  -131 | 100.0% | 317 → 186 | `apply(Object)` | `scala.runtime.function.JProcedure1` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change | Delta |      % |   Samples | Caller               | Location                                  |
| -----: | ----: | -----: | --------: | -------------------- | ----------------------------------------- |
| -42.3% |  -131 | 100.0% | 310 → 179 | `executeBenchmark()` | `org.renaissance.harness.ExecutionDriver` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |      % |   Samples | Caller                  | Location                                  |
| -----: | ----: | -----: | --------: | ----------------------- | ----------------------------------------- |
| -42.5% |  -130 | 100.0% | 306 → 176 | `executeOperation(int)` | `org.renaissance.harness.ExecutionDriver` |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

|  Change | Delta |             % | Samples | Caller                                                                                                                 | Location                                    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed |  -314 | 100.0% → 0.0% | 314 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
|     new |  +185 | 0.0% → 100.0% | 0 → 185 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % | Samples | Caller            | Location                                  |
| ------: | ----: | ------------: | ------: | ----------------- | ----------------------------------------- |
| removed |  -304 | 100.0% → 0.0% | 304 → 0 | `$anonfun$1(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |
|     new |  +176 | 0.0% → 100.0% | 0 → 176 | `$anonfun$2(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |      % |   Samples | Caller          | Location                                          |
| -----: | ----: | -----: | --------: | --------------- | ------------------------------------------------- |
| -42.1% |  -128 | 100.0% | 304 → 176 | `apply(Object)` | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                               |
| -----: | ----: | -----: | --------: | ------------------- | ------------------------------------------------------ |
| -38.3% |  -126 | 100.0% | 329 → 203 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Caller              | Location                                               |
| -----: | ----: | -----: | --------: | ------------------- | ------------------------------------------------------ |
| -38.3% |  -126 | 100.0% | 329 → 203 | `computeDirectly()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -38.3% |  -126 | 100.0% | 329 → 203 | `compute()`         | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda`)

| Change | Delta |              % |   Samples | Caller                                           | Location                                                           |
| -----: | ----: | -------------: | --------: | ------------------------------------------------ | ------------------------------------------------------------------ |
| -42.1% |  -128 | 100.0% → 98.9% | 304 → 176 | `map(Function1)`                                 | `scala.collection.immutable.Range`                                 |
|    new |    +2 |    0.0% → 1.1% |     0 → 2 | `lambda$toCsvRows$2(String[], Function, String)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |      % |       Samples | Caller     | Location                            |
| -----: | ----: | -----: | ------------: | ---------- | ----------------------------------- |
| -28.5% |  -492 | 100.0% | 1,725 → 1,233 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Caller                                                    | Location                                      |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
| -28.3% |  -490 |        100.0% | 1,729 → 1,239 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -25.4% |  -350 | 79.6% → 82.8% | 1,376 → 1,026 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -38.6% |  -205 | 30.7% → 26.3% |     531 → 326 | `invoke()`                                                | `java.util.concurrent.ForkJoinTask`           |
| -14.3% |   -47 | 19.0% → 22.8% |     329 → 282 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Caller                                   | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------------------------- | ----------------------------------- |
| -28.3% |  -490 | 100.0% | 1,729 → 1,239 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Caller      | Location                                               |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------ |
| -28.8% |  -481 | 100.0% | 1,672 → 1,191 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Caller                 | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------- | ----------------------------------- |
| -25.4% |  -350 | 100.0% | 1,376 → 1,026 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |   Samples | Caller                         | Location                                               |
| -----: | ----: | ------------: | --------: | ------------------------------ | ------------------------------------------------------ |
| -42.9% |  -130 | 56.8% → 53.1% | 303 → 173 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`            |
| -38.0% |  -123 | 60.8% → 61.7% | 324 → 201 | `average(List)`                | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |      % |  Samples | Caller                              | Location                            |
| -----: | ----: | -----: | -------: | ----------------------------------- | ----------------------------------- |
| -72.2% |  -184 | 100.0% | 255 → 71 | `awaitWork(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `waitForReferencePendingList()` (`java.lang.ref.Reference`)

| Change | Delta |      % |   Samples | Caller                       | Location                  |
| -----: | ----: | -----: | --------: | ---------------------------- | ------------------------- |
| -39.9% |  -132 | 100.0% | 331 → 199 | `processPendingReferences()` | `java.lang.ref.Reference` |

##### `processPendingReferences()` (`java.lang.ref.Reference`)

| Change | Delta |      % |   Samples | Caller  | Location                                   |
| -----: | ----: | -----: | --------: | ------- | ------------------------------------------ |
| -39.9% |  -132 | 100.0% | 331 → 199 | `run()` | `java.lang.ref.Reference$ReferenceHandler` |

##### `wait0(long)` (`java.lang.Object`)

| Change | Delta |      % |   Samples | Caller       | Location           |
| -----: | ----: | -----: | --------: | ------------ | ------------------ |
| -39.9% |  -132 | 100.0% | 331 → 199 | `wait(long)` | `java.lang.Object` |

##### `wait(long)` (`java.lang.Object`)

| Change | Delta |      % |   Samples | Caller   | Location           |
| -----: | ----: | -----: | --------: | -------- | ------------------ |
| -39.9% |  -132 | 100.0% | 331 → 199 | `wait()` | `java.lang.Object` |

##### `wait()` (`java.lang.Object`)

| Change | Delta |      % |   Samples | Caller    | Location                             |
| -----: | ----: | -----: | --------: | --------- | ------------------------------------ |
| -39.9% |  -132 | 100.0% | 331 → 199 | `await()` | `java.lang.ref.NativeReferenceQueue` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

| Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
|    new |  +185 | 0.0% → 99.5% | 0 → 185 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
|    new |    +1 |  0.0% → 0.5% |   0 → 1 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Callee                | Location                                    |
| -----: | ----: | ------------: | ------: | --------------------- | ------------------------------------------- |
|    new |  +176 | 0.0% → 100.0% | 0 → 176 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `arrayof_jint_disjoint_arraycopy` (`<unknown>`)

| Change | Delta |             % | Samples | Callee               | Location    |
| -----: | ----: | ------------: | ------: | -------------------- | ----------- |
| +21.4% |    +9 | 95.5% → 91.1% | 42 → 51 | `forward_copy_longs` | `<unknown>` |

##### `hash(Object)` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Callee       | Location           |
| -----: | ----: | -----------: | ------: | ------------ | ------------------ |
|    new |    +6 | 0.0% → 54.5% |   0 → 6 | `hashCode()` | `java.lang.Object` |

##### `hashCode()` (`java.lang.Object`)

| Change | Delta |            % | Samples | Callee                             | Location       |
| -----: | ----: | -----------: | ------: | ---------------------------------- | -------------- |
|    new |    +4 | 0.0% → 66.7% |   0 → 4 | `JVM_IHashCode`                    | `libjvm.dylib` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `ObjectSynchronizer::FastHashCode` | `libjvm.dylib` |
|    new |    +1 | 0.0% → 16.7% |   0 → 1 | `JavaFrameAnchor::make_walkable`   | `libjvm.dylib` |

##### `get(int)` (`java.util.ArrayList`)

| Change | Delta |             % | Samples | Callee                 | Location              |
| -----: | ----: | ------------: | ------: | ---------------------- | --------------------- |
| +36.8% |   +14 | 73.1% → 91.2% | 38 → 52 | `elementData(int)`     | `java.util.ArrayList` |
| -61.5% |    -8 |  25.0% → 8.8% |  13 → 5 | `checkIndex(int, int)` | `java.util.Objects`   |

##### `Matcher::xform` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                | Location       |
| -----: | ----: | -----------: | ------: | --------------------- | -------------- |
|    new |    +3 | 0.0% → 60.0% |   0 → 3 | `Matcher::match_tree` | `libjvm.dylib` |

##### `Matcher::match` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                 | Location       |
| ------: | ----: | ------------: | ------: | ---------------------- | -------------- |
|     new |    +5 | 0.0% → 100.0% |   0 → 5 | `Matcher::xform`       | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `Matcher::find_shared` | `libjvm.dylib` |

##### `G1FullGCMarker::complete_marking` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                                          | Location       |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | -------------- |
| +200.0% |    +2 |         50.0% |   1 → 3 | `G1FullGCMarker::follow_marking_stacks`                         | `libjvm.dylib` |
| +100.0% |    +1 | 50.0% → 33.3% |   1 → 2 | `TaskTerminator::offer_termination`                             | `libjvm.dylib` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` | `libjvm.dylib` |

##### `G1FullGCMarkTask::work` (`libjvm.dylib`)

|  Change | Delta |      % | Samples | Callee                             | Location       |
| ------: | ----: | -----: | ------: | ---------------------------------- | -------------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `G1FullGCMarker::complete_marking` | `libjvm.dylib` |

##### `JVM_IHashCode` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                         | Location                  |
| -----: | ----: | -----------: | ------: | ------------------------------ | ------------------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `pthread_jit_write_protect_np` | `libsystem_pthread.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `read_stable_mark`             | `libjvm.dylib`            |

##### `InstanceKlass::initialize_impl` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                           | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `InstanceKlass::link_class_impl` | `libjvm.dylib` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Callee                                          | Location                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | --------------------------------- |
|  +50.0% |    +1 | 66.7% → 50.0% |   2 → 3 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap`               |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `hasNext()`                                     | `java.util.HashMap$HashIterator`  |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `iterator()`                                    | `java.util.HashMap$EntrySet`      |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `hash(Object)`                                  | `java.util.HashMap`               |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `next()`                                        | `java.util.HashMap$EntryIterator` |

##### `<init>(Map)` (`java.util.HashMap`)

|  Change | Delta |      % | Samples | Callee                        | Location            |
| ------: | ----: | -----: | ------: | ----------------------------- | ------------------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `putMapEntries(Map, boolean)` | `java.util.HashMap` |

##### `G1EvacuateRegionsBaseTask::work` (`libjvm.dylib`)

| Change | Delta |              % | Samples | Callee                                         | Location       |
| -----: | ----: | -------------: | ------: | ---------------------------------------------- | -------------- |
| +16.7% |    +1 | 100.0% → 77.8% |   6 → 7 | `G1EvacuateRegionsTask::evacuate_live_objects` | `libjvm.dylib` |
|    new |    +1 |   0.0% → 11.1% |   0 → 1 | `G1ParScanThreadStateSet::state_for_worker`    | `libjvm.dylib` |
|    new |    +1 |   0.0% → 11.1% |   0 → 1 | `G1EvacuateRegionsTask::scan_roots`            | `libjvm.dylib` |

##### `InstanceKlass::link_class_impl` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                           | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------- | -------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `InstanceKlass::link_methods`    | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `Mutex::lock`                    | `libjvm.dylib` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `InstanceKlass::link_class_impl` | `libjvm.dylib` |

##### `lambda$toCsvRows$2(String[], Function, String)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change | Delta |            % | Samples | Callee                                                           | Location                                          |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------------- | ------------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `apply(Object)`                                                  | `org.renaissance.jdk.concurrent.FjKmeans$$Lambda` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`            |

##### `ThreadCritical::ThreadCritical` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                              | Location                  |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `_pthread_mutex_firstfit_lock_slow` | `libsystem_pthread.dylib` |

##### `Chunk::chop` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                           | Location       |
| -----: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `ThreadCritical::ThreadCritical` | `libjvm.dylib` |

##### `Chunk::next_chop` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee        | Location       |
| -----: | ----: | ------------: | ------: | ------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `Chunk::chop` | `libjvm.dylib` |

##### `G1FullGCCompactTask::G1CompactRegionClosure::apply` (`libjvm.dylib`)

| Change | Delta |            % | Samples | Callee                                             | Location       |
| -----: | ----: | -----------: | ------: | -------------------------------------------------- | -------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `G1FullGCCompactTask::copy_object_to_new_location` | `libjvm.dylib` |

##### `G1FullGCCompactTask::compact_region` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                               | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `G1FullGCCompactTask::G1CompactRegionClosure::apply` | `libjvm.dylib` |

##### `G1FullGCCompactTask::work` (`libjvm.dylib`)

| Change | Delta |             % | Samples | Callee                                | Location       |
| -----: | ----: | ------------: | ------: | ------------------------------------- | -------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `G1FullGCCompactTask::compact_region` | `libjvm.dylib` |

##### `TaskTerminator::offer_termination` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                                | Location                 |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ------------------------ |
| +200.0% |    +2 | 14.3% → 33.3% |   1 → 3 | `Mutex::lock_without_safepoint_check` | `libjvm.dylib`           |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `swtch_pri`                           | `libsystem_kernel.dylib` |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `SpinPause`                           | `libjvm.dylib`           |

##### `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                        | Location       |
| ------: | ----: | -------------: | ------: | ----------------------------- | -------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `G1FullGCMarker::mark_object` | `libjvm.dylib` |

##### `G1FullGCMarker::follow_marking_stacks` (`libjvm.dylib`)

|  Change | Delta |              % | Samples | Callee                                                                                               | Location       |
| ------: | ----: | -------------: | ------: | ---------------------------------------------------------------------------------------------------- | -------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `void objArrayOopDesc::oop_iterate_range<G1MarkAndPushClosure>`                                      | `libjvm.dylib` |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `void OopOopIterateDispatch<G1MarkAndPushClosure>::Table::oop_oop_iterate<InstanceKlass, narrowOop>` | `libjvm.dylib` |

##### `InterpreterRuntime::_new` (`libjvm.dylib`)

|  Change | Delta |             % | Samples | Callee                           | Location       |
| ------: | ----: | ------------: | ------: | -------------------------------- | -------------- |
|     new |    +3 | 0.0% → 100.0% |   0 → 3 | `InstanceKlass::initialize_impl` | `libjvm.dylib` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `ConstantPool::klass_at_impl`    | `libjvm.dylib` |

##### `apply(Object)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000007001123bf8`)

| Change | Delta |             % | Samples | Callee                                           | Location                                                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------ |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `lambda$toCsvRows$2(String[], Function, String)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |

##### `toCsvRows(Function)` (`org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter`)

| Change | Delta |             % | Samples | Callee               | Location                             |
| -----: | ----: | ------------: | ------: | -------------------- | ------------------------------------ |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `collect(Collector)` | `java.util.stream.ReferencePipeline` |

##### `setUpBeforeAll(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |              % | Samples | Callee                        | Location                                                           |
| -----: | ----: | -------------: | ------: | ----------------------------- | ------------------------------------------------------------------ |
|    new |    +3 |   0.0% → 50.0% |   0 → 3 | `toCsvRows(Function)`         | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter` |
| -25.0% |    -1 | 100.0% → 50.0% |   4 → 3 | `generateData(int, int, int)` | `org.renaissance.jdk.concurrent.JavaKMeans`                        |

##### `rowToArray$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |            % | Samples | Callee           | Location                           |
| -----: | ----: | -----------: | ------: | ---------------- | ---------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `<clinit>()`     | `scala.Predef$`                    |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `map(Function1)` | `scala.collection.immutable.Range` |

##### `setUpBeforeAll$$anonfun$1(Map)` (`org.renaissance.jdk.concurrent.FjKmeans`)

| Change | Delta |             % | Samples | Callee              | Location                                  |
| -----: | ----: | ------------: | ------: | ------------------- | ----------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `rowToArray$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `parse(String[])` (`org.renaissance.harness.ConfigParser`)

| Change | Delta |            % | Samples | Callee     | Location                         |
| -----: | ----: | -----------: | ------: | ---------- | -------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `<init>()` | `org.renaissance.harness.Config` |

##### `<init>()` (`org.renaissance.harness.PolicyType$`)

| Change | Delta |             % | Samples | Callee     | Location            |
| -----: | ----: | ------------: | ------: | ---------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>()` | `scala.Enumeration` |

##### `<clinit>()` (`org.renaissance.harness.PolicyType$`)

| Change | Delta |             % | Samples | Callee     | Location                              |
| -----: | ----: | ------------: | ------: | ---------- | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>()` | `org.renaissance.harness.PolicyType$` |

##### `<init>()` (`org.renaissance.harness.Config`)

| Change | Delta |             % | Samples | Callee       | Location                              |
| -----: | ----: | ------------: | ------: | ------------ | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<clinit>()` | `org.renaissance.harness.PolicyType$` |

##### `withBenchmarkSpecification(String)` (`org.renaissance.harness.Config`)

| Change | Delta |             % | Samples | Callee                                   | Location       |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `InterpreterRuntime::resolve_from_cache` | `libjvm.dylib` |

##### `org$renaissance$harness$ConfigParser$$anon$1$$_$$lessinit$greater$$anonfun$25(String, Config)` (`org.renaissance.harness.ConfigParser`)

| Change | Delta |             % | Samples | Callee                               | Location                         |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `withBenchmarkSpecification(String)` | `org.renaissance.harness.Config` |

##### `apply(Object, Object)` (`org.renaissance.harness.ConfigParser$$anon$1$$Lambda.0x00000070010e7168`)

| Change | Delta |             % | Samples | Callee                                                                                          | Location                               |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------- | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org$renaissance$harness$ConfigParser$$anon$1$$_$$lessinit$greater$$anonfun$25(String, Config)` | `org.renaissance.harness.ConfigParser` |

##### `action$$anonfun$1(Function2, Object, Object)` (`scopt.OptionDef`)

| Change | Delta |             % | Samples | Callee                  | Location                                                                  |
| -----: | ----: | ------------: | ------: | ----------------------- | ------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `apply(Object, Object)` | `org.renaissance.harness.ConfigParser$$anon$1$$Lambda.0x00000070010e7168` |

##### `apply(Object, Object)` (`scopt.OptionDef$$Lambda.0x00000070010d97d8`)

| Change | Delta |             % | Samples | Callee                                         | Location          |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- | ----------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `action$$anonfun$1(Function2, Object, Object)` | `scopt.OptionDef` |

##### `applyArgument(String, Object, Option)` (`scopt.OptionDef`)

| Change | Delta |             % | Samples | Callee                  | Location                                     |
| -----: | ----: | ------------: | ------: | ----------------------- | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `apply(Object, Object)` | `scopt.OptionDef$$Lambda.0x00000070010d97d8` |

##### `benchmarkNames(Map)` (`org.renaissance.core.BenchmarkSuite`)

| Change | Delta |             % | Samples | Callee                   | Location                      |
| -----: | ----: | ------------: | ------: | ------------------------ | ----------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `toCollection(Supplier)` | `java.util.stream.Collectors` |

##### `accept(Object)` (`java.util.stream.ReferencePipeline$3$1`)

| Change | Delta |             % | Samples | Callee          | Location                                                                                      |
| -----: | ----: | ------------: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `apply(Object)` | `org.renaissance.core.BenchmarkDescriptor$Configuration$Parameter$$Lambda.0x0000007001123bf8` |

##### `forEachRemaining(Consumer)` (`java.util.Spliterators$ArraySpliterator`)

| Change | Delta |             % | Samples | Callee           | Location                                 |
| -----: | ----: | ------------: | ------: | ---------------- | ---------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `accept(Object)` | `java.util.stream.ReferencePipeline$3$1` |

##### `evaluateSequential(PipelineHelper, Spliterator)` (`java.util.stream.ReduceOps$ReduceOp`)

| Change | Delta |      % | Samples | Callee                               | Location                            |
| -----: | ----: | -----: | ------: | ------------------------------------ | ----------------------------------- |
| +50.0% |    +2 | 100.0% |   4 → 6 | `wrapAndCopyInto(Sink, Spliterator)` | `java.util.stream.AbstractPipeline` |

##### `evaluate(TerminalOp)` (`java.util.stream.AbstractPipeline`)

| Change | Delta |      % | Samples | Callee                                            | Location                              |
| -----: | ----: | -----: | ------: | ------------------------------------------------- | ------------------------------------- |
| +50.0% |    +2 | 100.0% |   4 → 6 | `evaluateSequential(PipelineHelper, Spliterator)` | `java.util.stream.ReduceOps$ReduceOp` |

##### `collect(Collector)` (`java.util.stream.ReferencePipeline`)

| Change | Delta |      % | Samples | Callee                 | Location                            |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------------------------- |
| +50.0% |    +2 | 100.0% |   4 → 6 | `evaluate(TerminalOp)` | `java.util.stream.AbstractPipeline` |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Callee        | Location    |
| -----: | ----: | -----------: | ------: | ------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `zero_blocks` | `<unknown>` |

##### `read(byte[], int, int)` (`java.io.FilterInputStream`)

| Change | Delta |             % | Samples | Callee                   | Location                            |
| -----: | ----: | ------------: | ------: | ------------------------ | ----------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `<clinit>()` (`scala.collection.immutable.Vector$`)

| Change | Delta |             % | Samples | Callee              | Location                |
| -----: | ----: | ------------: | ------: | ------------------- | ----------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `<init>()` (`scala.collection.immutable.IndexedSeq$`)

| Change | Delta |             % | Samples | Callee       | Location                             |
| -----: | ----: | ------------: | ------: | ------------ | ------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `<clinit>()` | `scala.collection.immutable.Vector$` |

##### `<clinit>()` (`scala.collection.immutable.IndexedSeq$`)

| Change | Delta |             % | Samples | Callee     | Location                                 |
| -----: | ----: | ------------: | ------: | ---------- | ---------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `<init>()` | `scala.collection.immutable.IndexedSeq$` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change | Delta |            % | Samples | Callee     | Location            |
| -----: | ----: | -----------: | ------: | ---------- | ------------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `resize()` | `java.util.HashMap` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

| Change | Delta |            % | Samples | Callee   | Location                                           |
| -----: | ----: | -----------: | ------: | -------- | -------------------------------------------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `fill()` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `<clinit>()` (`scala.package$`)

|  Change | Delta |             % | Samples | Callee       | Location                                 |
| ------: | ----: | ------------: | ------: | ------------ | ---------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `<clinit>()` | `scala.collection.Iterable$`             |
|     new |    +2 |  0.0% → 66.7% |   0 → 2 | `<clinit>()` | `scala.collection.immutable.IndexedSeq$` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `<clinit>()` | `scala.math.BigInt$`                     |

##### `put(Object, Object)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Callee         | Location            |
| -----: | ----: | ------------: | ------: | -------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `hash(Object)` | `java.util.HashMap` |

##### `_pthread_start` (`libsystem_pthread.dylib`)

| Change |  Delta |     % |       Samples | Callee                | Location       |
| -----: | -----: | ----: | ------------: | --------------------- | -------------- |
| -39.8% | -2,855 | 95.6% | 7,170 → 4,315 | `thread_native_entry` | `libjvm.dylib` |
| -39.9% |   -132 |  4.4% |     331 → 199 | `apple_main`          | `libjli.dylib` |

##### `thread_start` (`libsystem_pthread.dylib`)

| Change |  Delta |      % |       Samples | Callee           | Location                  |
| -----: | -----: | -----: | ------------: | ---------------- | ------------------------- |
| -39.8% | -2,987 | 100.0% | 7,502 → 4,515 | `_pthread_start` | `libsystem_pthread.dylib` |

##### `Thread::call_run` (`libjvm.dylib`)

| Change |  Delta |             % |       Samples | Callee                          | Location       |
| -----: | -----: | ------------: | ------------: | ------------------------------- | -------------- |
| -40.8% | -1,296 | 44.3% → 43.5% | 3,174 → 1,878 | `WorkerThread::run`             | `libjvm.dylib` |
| -38.4% |   -900 | 32.6% → 33.4% | 2,341 → 1,441 | `JavaThread::thread_main_inner` | `libjvm.dylib` |
| -39.9% |   -396 |         13.8% |     993 → 597 | `ConcurrentGCThread::run`       | `libjvm.dylib` |
| -39.9% |   -132 |          4.6% |     331 → 199 | `WatcherThread::run`            | `libjvm.dylib` |
| -39.9% |   -132 |          4.6% |     331 → 199 | `VMThread::run`                 | `libjvm.dylib` |

##### `thread_native_entry` (`libjvm.dylib`)

| Change |  Delta |      % |       Samples | Callee             | Location       |
| -----: | -----: | -----: | ------------: | ------------------ | -------------- |
| -39.8% | -2,855 | 100.0% | 7,170 → 4,315 | `Thread::call_run` | `libjvm.dylib` |

##### `Parker::park` (`libjvm.dylib`)

|  Change |  Delta |             % |       Samples | Callee                        | Location                  |
| ------: | -----: | ------------: | ------------: | ----------------------------- | ------------------------- |
|  -53.4% | -1,855 | 99.5% → 99.6% | 3,473 → 1,618 | `__psynch_cvwait`             | `libsystem_kernel.dylib`  |
|  -69.2% |     -9 |   0.4% → 0.2% |        13 → 4 | `SafepointMechanism::process` | `libjvm.dylib`            |
| removed |     -1 |  <0.1% → 0.0% |         1 → 0 | `stub:pthread_mutex_unlock`   | `libjvm.dylib`            |
|  -50.0% |     -1 |          0.1% |         2 → 1 | `_pthread_cond_wait`          | `libsystem_pthread.dylib` |
| removed |     -1 |  <0.1% → 0.0% |         1 → 0 | `__gettimeofday`              | `libsystem_kernel.dylib`  |

##### `Unsafe_Park` (`libjvm.dylib`)

| Change |  Delta |             % |       Samples | Callee                         | Location                  |
| -----: | -----: | ------------: | ------------: | ------------------------------ | ------------------------- |
| -53.5% | -1,868 | 99.9% → 99.7% | 3,492 → 1,624 | `Parker::park`                 | `libjvm.dylib`            |
|    new |     +3 |   0.0% → 0.2% |         0 → 3 | `pthread_jit_write_protect_np` | `libsystem_pthread.dylib` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change |  Delta |              % |       Samples | Callee                                                 | Location       |
| -----: | -----: | -------------: | ------------: | ------------------------------------------------------ | -------------- |
| -53.4% | -1,868 | 100.0% → 99.9% | 3,497 → 1,629 | `Unsafe_Park`                                          | `libjvm.dylib` |
|    new |     +1 |    0.0% → 0.1% |         0 → 1 | `JavaThread::check_special_condition_for_native_trans` | `libjvm.dylib` |

##### `runWorker(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

| Change |  Delta |             % |       Samples | Callee                                   | Location                            |
| -----: | -----: | ------------: | ------------: | ---------------------------------------- | ----------------------------------- |
| -59.1% | -1,306 | 56.0% → 42.0% |   2,209 → 903 | `awaitWork(ForkJoinPool$WorkQueue)`      | `java.util.concurrent.ForkJoinPool` |
| -28.5% |   -495 | 44.0% → 57.8% | 1,738 → 1,243 | `scan(ForkJoinPool$WorkQueue, int, int)` | `java.util.concurrent.ForkJoinPool` |

##### `run()` (`java.util.concurrent.ForkJoinWorkerThread`)

| Change |  Delta |      % |       Samples | Callee                              | Location                            |
| -----: | -----: | -----: | ------------: | ----------------------------------- | ----------------------------------- |
| -45.6% | -1,799 | 100.0% | 3,948 → 2,149 | `runWorker(ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change |  Delta |      % |       Samples | Callee                | Location                   |
| -----: | -----: | -----: | ------------: | --------------------- | -------------------------- |
| -53.2% | -1,550 | 100.0% | 2,912 → 1,362 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `PlatformMonitor::wait` (`libjvm.dylib`)

| Change |  Delta |              % |       Samples | Callee               | Location                  |
| -----: | -----: | -------------: | ------------: | -------------------- | ------------------------- |
| -39.4% | -1,437 | 100.0% → 99.9% | 3,647 → 2,210 | `__psynch_cvwait`    | `libsystem_kernel.dylib`  |
|    new |     +2 |    0.0% → 0.1% |         0 → 2 | `_pthread_cond_wait` | `libsystem_pthread.dylib` |

##### `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`)

|  Change |  Delta |             % |     Samples | Callee               | Location                                 |
| ------: | -----: | ------------: | ----------: | -------------------- | ---------------------------------------- |
|  -57.4% | -1,119 | 88.3% → 92.1% | 1,951 → 832 | `park()`             | `java.util.concurrent.locks.LockSupport` |
|  -72.2% |   -184 |  11.5% → 7.9% |    255 → 71 | `parkUntil(long)`    | `java.util.concurrent.locks.LockSupport` |
| removed |     -1 |  <0.1% → 0.0% |       1 → 0 | `os::javaTimeMillis` | `libjvm.dylib`                           |
| removed |     -1 |  <0.1% → 0.0% |       1 → 0 | `hasTasks(boolean)`  | `java.util.concurrent.ForkJoinPool`      |

##### `WorkerThread::run` (`libjvm.dylib`)

|  Change |  Delta |             % |       Samples | Callee                            | Location                 |
| ------: | -----: | ------------: | ------------: | --------------------------------- | ------------------------ |
|  -41.2% | -1,302 | 99.6% → 99.0% | 3,161 → 1,859 | `semaphore_wait_trap`             | `libsystem_kernel.dylib` |
| +200.0% |     +4 |   0.1% → 0.3% |         2 → 6 | `G1FullGCMarkTask::work`          | `libjvm.dylib`           |
|  +50.0% |     +3 |   0.2% → 0.5% |         6 → 9 | `G1EvacuateRegionsBaseTask::work` | `libjvm.dylib`           |
|     new |     +3 |   0.0% → 0.2% |         0 → 3 | `G1FullGCCompactTask::work`       | `libjvm.dylib`           |
| removed |     -2 |   0.1% → 0.0% |         2 → 0 | `G1FullGCAdjustTask::work`        | `libjvm.dylib`           |

##### `Monitor::wait_without_safepoint_check` (`libjvm.dylib`)

| Change |  Delta |      % |       Samples | Callee                  | Location       |
| -----: | -----: | -----: | ------------: | ----------------------- | -------------- |
| -39.8% | -1,051 | 100.0% | 2,640 → 1,589 | `PlatformMonitor::wait` | `libjvm.dylib` |

##### `JavaThread::thread_main_inner` (`libjvm.dylib`)

| Change | Delta |             % |   Samples | Callee                                                   | Location       |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------- | -------------- |
| -34.9% |  -240 | 29.3% → 31.0% | 687 → 447 | `CompileBroker::compiler_thread_loop`                    | `libjvm.dylib` |
| -39.9% |  -132 | 14.1% → 13.8% | 331 → 199 | `MonitorDeflationThread::monitor_deflation_thread_entry` | `libjvm.dylib` |
| -39.9% |  -132 | 14.1% → 13.8% | 331 → 199 | `signal_thread_entry`                                    | `libjvm.dylib` |
| -39.9% |  -132 | 14.1% → 13.8% | 331 → 199 | `ServiceThread::service_thread_entry`                    | `libjvm.dylib` |
| -40.0% |  -132 | 14.1% → 13.7% | 330 → 198 | `NotificationThread::notification_thread_entry`          | `libjvm.dylib` |

##### `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |             % |       Samples | Callee                                                    | Location                                      |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------- | --------------------------------------------- |
|  -44.8% |  -431 | 48.6% → 38.8% |     961 → 530 | `park()`                                                  | `java.util.concurrent.locks.LockSupport`      |
|  -25.4% |  -350 | 69.6% → 75.1% | 1,376 → 1,026 | `tryRemoveAndExec(ForkJoinTask, boolean)`                 | `java.util.concurrent.ForkJoinPool$WorkQueue` |
|  -14.1% |   -47 | 16.9% → 20.9% |     333 → 286 | `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` | `java.util.concurrent.ForkJoinPool`           |
|  -75.0% |    -3 |   0.2% → 0.1% |         4 → 1 | `signalWaiters()`                                         | `java.util.concurrent.ForkJoinTask`           |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `I2C/C2I adapters(0xbbba)`                                | `<unknown>`                                   |

##### `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`)

| Change | Delta |             % |       Samples | Callee                                               | Location                                      |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------- | --------------------------------------------- |
| -28.3% |  -490 | 99.5% → 99.7% | 1,729 → 1,239 | `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` | `java.util.concurrent.ForkJoinPool$WorkQueue` |
| -66.7% |    -4 |   0.3% → 0.2% |         6 → 2 | `signalWork()`                                       | `java.util.concurrent.ForkJoinPool`           |

##### `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`)

| Change | Delta |             % |       Samples | Callee                           | Location                                                   |
| -----: | ----: | ------------: | ------------: | -------------------------------- | ---------------------------------------------------------- |
| -28.8% |  -481 | 96.9% → 96.7% | 1,672 → 1,191 | `join()`                         | `java.util.concurrent.ForkJoinTask`                        |
| -38.3% |  -126 | 19.1% → 16.5% |     329 → 203 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`     |
| -18.6% |   -95 | 29.6% → 33.8% |     511 → 416 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| -16.5% |   -65 | 22.9% → 26.8% |     395 → 330 | `computeDirectly()`              | `org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`  |
|  -9.8% |   -12 |   7.1% → 9.0% |     123 → 111 | `combineResults(Object, Object)` | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `ConcurrentGCThread::run` (`libjvm.dylib`)

| Change | Delta |     % |   Samples | Callee                                  | Location       |
| -----: | ----: | ----: | --------: | --------------------------------------- | -------------- |
| -39.9% |  -132 | 33.3% | 331 → 199 | `G1ServiceThread::run_service`          | `libjvm.dylib` |
| -39.9% |  -132 | 33.3% | 331 → 199 | `G1ConcurrentRefineThread::run_service` | `libjvm.dylib` |
| -39.9% |  -132 | 33.3% | 331 → 199 | `G1ConcurrentMarkThread::run_service`   | `libjvm.dylib` |

##### `Monitor::wait` (`libjvm.dylib`)

| Change | Delta |              % |     Samples | Callee                                                                        | Location       |
| -----: | ----: | -------------: | ----------: | ----------------------------------------------------------------------------- | -------------- |
| -38.1% |  -384 | 100.0% → 99.8% | 1,007 → 623 | `PlatformMonitor::wait`                                                       | `libjvm.dylib` |
|    new |    +1 |    0.0% → 0.2% |       0 → 1 | `ThreadBlockInVMPreprocess<InFlightMutexRelease>::~ThreadBlockInVMPreprocess` | `libjvm.dylib` |

##### `JLI_Launch` (`libjli.dylib`)

| Change | Delta |     % |   Samples | Callee                       | Location       |
| -----: | ----: | ----: | --------: | ---------------------------- | -------------- |
| -39.9% |  -132 | 50.0% | 331 → 199 | `CreateExecutionEnvironment` | `libjli.dylib` |
| -39.9% |  -132 | 50.0% | 331 → 199 | `ContinueInNewThread`        | `libjli.dylib` |

##### `main` (`java`)

| Change | Delta |      % |   Samples | Callee       | Location       |
| -----: | ----: | -----: | --------: | ------------ | -------------- |
| -39.9% |  -264 | 100.0% | 662 → 398 | `JLI_Launch` | `libjli.dylib` |

##### `MonitorDeflationThread::monitor_deflation_thread_entry` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee                                  | Location       |
| -----: | ----: | -----: | --------: | --------------------------------------- | -------------- |
| -39.9% |  -132 | 100.0% | 331 → 199 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `JVM_WaitForReferencePendingList` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee          | Location       |
| -----: | ----: | -----: | --------: | --------------- | -------------- |
| -39.9% |  -132 | 100.0% | 331 → 199 | `Monitor::wait` | `libjvm.dylib` |

##### `G1ServiceThread::wait_for_task` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee                                  | Location       |
| -----: | ----: | -----: | --------: | --------------------------------------- | -------------- |
| -39.9% |  -132 | 100.0% | 331 → 199 | `Monitor::wait_without_safepoint_check` | `libjvm.dylib` |

##### `G1ServiceThread::run_service` (`libjvm.dylib`)

| Change | Delta |      % |   Samples | Callee                           | Location       |
| -----: | ----: | -----: | --------: | -------------------------------- | -------------- |
| -39.9% |  -132 | 100.0% | 331 → 199 | `G1ServiceThread::wait_for_task` | `libjvm.dylib` |

##### `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |            % | Samples | Callee                                                                                       | Location                                  |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed |  -314 | 99.1% → 0.0% | 314 → 0 | `executeBenchmark()`                                                                         | `org.renaissance.harness.ExecutionDriver` |
| removed |    -3 |  0.9% → 0.0% |   3 → 0 | `create(BenchmarkSuite, BenchmarkDescriptor, EventDispatcher, Plugin$ExecutionPolicy, long)` | `org.renaissance.harness.ExecutionDriver` |

##### `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |             % | Samples | Callee                | Location                                    |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------------------------------- |
| removed |  -304 | 100.0% → 0.0% | 304 → 0 | `run(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |             % |   Samples | Callee                     | Location                   |
| -----: | ----: | ------------: | --------: | -------------------------- | -------------------------- |
| -40.5% |  -132 | 99.4% → 99.0% | 326 → 194 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `launchHarnessClass(String, String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % |   Samples | Callee                                                      | Location                        |
| -----: | ----: | -----: | --------: | ----------------------------------------------------------- | ------------------------------- |
| -40.2% |  -132 | 100.0% | 328 → 196 | `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.core.Launcher`)

| Change | Delta |      % |   Samples | Callee                                 | Location                        |
| -----: | ----: | -----: | --------: | -------------------------------------- | ------------------------------- |
| -40.2% |  -132 | 100.0% | 328 → 196 | `launchHarnessClass(String, String[])` | `org.renaissance.core.Launcher` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite`)

|  Change | Delta |              % |   Samples | Callee              | Location                                    |
| ------: | ----: | -------------: | --------: | ------------------- | ------------------------------------------- |
|  -40.3% |  -131 | 99.7% → 100.0% | 325 → 194 | `main(String[])`    | `org.renaissance.harness.RenaissanceSuite$` |
| removed |    -1 |    0.3% → 0.0% |     1 → 0 | `loadClass(String)` | `java.lang.ClassLoader`                     |

##### `lambda$run$0(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

|  Change | Delta |             % |   Samples | Callee                    | Location                                               |
| ------: | ----: | ------------: | --------: | ------------------------- | ------------------------------------------------------ |
|  -42.9% |  -130 | 99.3% → 99.4% | 303 → 173 | `invoke()`                | `java.util.concurrent.ForkJoinTask`                    |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `<init>(JavaKMeans, Map)` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|     new |    +1 |   0.0% → 0.6% |     0 → 1 | `<init>(Collection)`      | `java.util.ArrayList`                                  |

##### `call()` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a2bd0`)

| Change | Delta |      % |   Samples | Callee                         | Location                                    |
| -----: | ----: | -----: | --------: | ------------------------------ | ------------------------------------------- |
| -43.0% |  -131 | 100.0% | 305 → 174 | `lambda$run$0(int, List, int)` | `org.renaissance.jdk.concurrent.JavaKMeans` |

##### `main(String[])` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % |   Samples | Callee                                                                        | Location                                    |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------------------------- | ------------------------------------------- |
|  -41.2% |  -131 | 97.8% → 96.4% | 318 → 187 | `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` | `org.renaissance.harness.RenaissanceSuite$` |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `apply(Seq)`                                                                  | `scala.collection.immutable.Map$`           |
| +100.0% |    +1 |   0.3% → 1.0% |     1 → 2 | `parse(String[])`                                                             | `org.renaissance.harness.ConfigParser`      |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `excludeIncompatible(BenchmarkSuite, Seq)`                                    | `org.renaissance.harness.RenaissanceSuite$` |
|     new |    +1 |   0.0% → 0.5% |     0 → 1 | `apply(Function0)`                                                            | `scala.util.Try$`                           |

##### `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`)

|  Change | Delta |             % |   Samples | Callee                                                        | Location                                    |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------- | ------------------------------------------- |
|  -41.3% |  -131 | 99.7% → 99.5% | 317 → 186 | `foreach(Function1)`                                          | `scala.collection.immutable.List`           |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `getVmStartNanos()`                                           | `org.renaissance.harness.RenaissanceSuite$` |
|     new |    +1 |   0.0% → 0.5% |     0 → 1 | `linkMethodHandleConstant(Class, int, Class, String, Object)` | `java.lang.invoke.MethodHandleNatives`      |

##### `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0`)

|  Change | Delta |             % | Samples | Callee                                                                                                                 | Location                                    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| removed |  -317 | 100.0% → 0.0% | 317 → 0 | `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |
|     new |  +186 | 0.0% → 100.0% | 0 → 186 | `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` | `org.renaissance.harness.RenaissanceSuite$` |

##### `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`)

| Change | Delta |             % |   Samples | Callee                                            | Location                                  |
| -----: | ----: | ------------: | --------: | ------------------------------------------------- | ----------------------------------------- |
| -42.5% |  -130 | 98.7% → 98.3% | 306 → 176 | `run(BenchmarkContext)`                           | `org.renaissance.jdk.concurrent.FjKmeans` |
| -25.0% |    -1 |   1.3% → 1.7% |     4 → 3 | `notifyAfterOperationSetUp(String, int, boolean)` | `org.renaissance.harness.EventDispatcher` |

##### `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |              % |   Samples | Callee           | Location                           |
| ------: | ----: | -------------: | --------: | ---------------- | ---------------------------------- |
|  -42.1% |  -128 | 99.3% → 100.0% | 304 → 176 | `map(Function1)` | `scala.collection.immutable.Range` |
| removed |    -2 |    0.7% → 0.0% |     2 → 0 | `<clinit>()`     | `scala.Predef$`                    |

##### `executeBenchmark()` (`org.renaissance.harness.ExecutionDriver`)

| Change | Delta |             % |   Samples | Callee                             | Location                                  |
| -----: | ----: | ------------: | --------: | ---------------------------------- | ----------------------------------------- |
| -42.3% |  -131 | 98.7% → 96.8% | 310 → 179 | `executeOperation(int)`            | `org.renaissance.harness.ExecutionDriver` |
| +50.0% |    +2 |   1.3% → 3.2% |     4 → 6 | `setUpBeforeAll(BenchmarkContext)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`)

| Change | Delta |      % |   Samples | Callee  | Location                            |
| -----: | ----: | -----: | --------: | ------- | ----------------------------------- |
| -42.1% |  -128 | 100.0% | 304 → 176 | `get()` | `java.util.concurrent.ForkJoinTask` |

##### `$anonfun$adapted$1(Object)` (`org.renaissance.jdk.concurrent.FjKmeans`)

|  Change | Delta |             % | Samples | Callee            | Location                                  |
| ------: | ----: | ------------: | ------: | ----------------- | ----------------------------------------- |
| removed |  -304 | 100.0% → 0.0% | 304 → 0 | `$anonfun$1(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |
|     new |  +176 | 0.0% → 100.0% | 0 → 176 | `$anonfun$2(int)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `computeClusterAverages()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

|  Change | Delta |             % |   Samples | Callee                | Location                                               |
| ------: | ----: | ------------: | --------: | --------------------- | ------------------------------------------------------ |
|  -37.7% |  -122 | 98.5% → 99.5% | 324 → 202 | `average(List)`       | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| removed |    -5 |   1.5% → 0.0% |     5 → 0 | `boxed(double[])`     | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
|     new |    +1 |   0.0% → 0.5% |     0 → 1 | `put(Object, Object)` | `java.util.HashMap`                                    |

##### `computeDirectly()` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`)

| Change | Delta |      % |   Samples | Callee                     | Location                                               |
| -----: | ----: | -----: | --------: | -------------------------- | ------------------------------------------------------ |
| -38.3% |  -126 | 100.0% | 329 → 203 | `computeClusterAverages()` | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |
| -38.3% |  -126 | 100.0% | 329 → 203 | `computeDirectly()`        | `org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask` |

##### `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda`)

| Change | Delta |              % |   Samples | Callee                           | Location                                  |
| -----: | ----: | -------------: | --------: | -------------------------------- | ----------------------------------------- |
| -42.1% |  -128 | 100.0% → 98.9% | 304 → 176 | `$anonfun$adapted$1(Object)`     | `org.renaissance.jdk.concurrent.FjKmeans` |
|    new |    +2 |    0.0% → 1.1% |     0 → 2 | `setUpBeforeAll$$anonfun$1(Map)` | `org.renaissance.jdk.concurrent.FjKmeans` |

##### `exec()` (`java.util.concurrent.RecursiveTask`)

| Change | Delta |              % |       Samples | Callee      | Location                                               |
| -----: | ----: | -------------: | ------------: | ----------- | ------------------------------------------------------ |
| -28.6% |  -493 | 100.0% → 99.9% | 1,725 → 1,232 | `compute()` | `org.renaissance.jdk.concurrent.JavaKMeans$RangedTask` |

##### `doExec()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |             % |       Samples | Callee      | Location                                            |
| -----: | ----: | ------------: | ------------: | ----------- | --------------------------------------------------- |
| -28.5% |  -492 | 99.8% → 99.5% | 1,725 → 1,233 | `exec()`    | `java.util.concurrent.RecursiveTask`                |
| -43.0% |  -131 | 17.6% → 14.0% |     305 → 174 | `exec()`    | `java.util.concurrent.ForkJoinTask$AdaptedCallable` |
| -22.2% |    -2 |   0.5% → 0.6% |         9 → 7 | `setDone()` | `java.util.concurrent.ForkJoinTask`                 |

##### `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Callee     | Location                            |
| -----: | ----: | -----: | ------------: | ---------- | ----------------------------------- |
| -28.3% |  -490 | 100.0% | 1,729 → 1,239 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `join()` (`java.util.concurrent.ForkJoinTask`)

| Change | Delta |      % |       Samples | Callee                 | Location                            |
| -----: | ----: | -----: | ------------: | ---------------------- | ----------------------------------- |
| -28.8% |  -481 | 100.0% | 1,672 → 1,191 | `awaitDone(int, long)` | `java.util.concurrent.ForkJoinTask` |

##### `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`)

| Change | Delta |      % |       Samples | Callee     | Location                            |
| -----: | ----: | -----: | ------------: | ---------- | ----------------------------------- |
| -25.4% |  -350 | 100.0% | 1,376 → 1,026 | `doExec()` | `java.util.concurrent.ForkJoinTask` |

##### `invoke()` (`java.util.concurrent.ForkJoinTask`)

|  Change | Delta |              % |   Samples | Callee                                           | Location                            |
| ------: | ----: | -------------: | --------: | ------------------------------------------------ | ----------------------------------- |
|  -38.6% |  -205 | 99.6% → 100.0% | 531 → 326 | `doExec()`                                       | `java.util.concurrent.ForkJoinTask` |
| removed |    -1 |    0.2% → 0.0% |     1 → 0 | `InterpreterRuntime::frequency_counter_overflow` | `libjvm.dylib`                      |
| removed |    -1 |    0.2% → 0.0% |     1 → 0 | `counter_overflow Runtime1 stub`                 | `<unknown>`                         |

##### `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`)

| Change | Delta |      % |  Samples | Callee                | Location                   |
| -----: | ----: | -----: | -------: | --------------------- | -------------------------- |
| -72.2% |  -184 | 100.0% | 255 → 71 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `waitForReferencePendingList()` (`java.lang.ref.Reference`)

| Change | Delta |      % |   Samples | Callee                            | Location       |
| -----: | ----: | -----: | --------: | --------------------------------- | -------------- |
| -39.9% |  -132 | 100.0% | 331 → 199 | `JVM_WaitForReferencePendingList` | `libjvm.dylib` |

##### `processPendingReferences()` (`java.lang.ref.Reference`)

| Change | Delta |      % |   Samples | Callee                          | Location                  |
| -----: | ----: | -----: | --------: | ------------------------------- | ------------------------- |
| -39.9% |  -132 | 100.0% | 331 → 199 | `waitForReferencePendingList()` | `java.lang.ref.Reference` |

##### `run()` (`java.lang.ref.Reference$ReferenceHandler`)

| Change | Delta |      % |   Samples | Callee                       | Location                  |
| -----: | ----: | -----: | --------: | ---------------------------- | ------------------------- |
| -39.9% |  -132 | 100.0% | 331 → 199 | `processPendingReferences()` | `java.lang.ref.Reference` |

##### `wait0(long)` (`java.lang.Object`)

| Change | Delta |      % |   Samples | Callee            | Location       |
| -----: | ----: | -----: | --------: | ----------------- | -------------- |
| -39.9% |  -132 | 100.0% | 331 → 199 | `JVM_MonitorWait` | `libjvm.dylib` |

##### `wait(long)` (`java.lang.Object`)

| Change | Delta |      % |   Samples | Callee        | Location           |
| -----: | ----: | -----: | --------: | ------------- | ------------------ |
| -39.9% |  -132 | 100.0% | 331 → 199 | `wait0(long)` | `java.lang.Object` |

##### `wait()` (`java.lang.Object`)

| Change | Delta |      % |   Samples | Callee       | Location           |
| -----: | ----: | -----: | --------: | ------------ | ------------------ |
| -39.9% |  -132 | 100.0% | 331 → 199 | `wait(long)` | `java.lang.Object` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

|  Change | Delta |            % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|     new |  +176 |  0.0% → 2.2% | 0 → 176 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$2(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, EventDispatcher, Plugin$ExecutionPolicy, long, Buffer, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000700111ede0`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +53.3% |    +8 |  0.1% → 0.3% | 15 → 23 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +17.4% |    +4 |  0.2% → 0.3% | 23 → 27 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                          |
|  +80.0% |    +4 | <0.1% → 0.1% |   5 → 9 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  +33.3% |    +4 |  0.1% → 0.2% | 12 → 16 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                         |
|  +44.4% |    +4 |  0.1% → 0.2% |  9 → 13 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| +400.0% |    +4 | <0.1% → 0.1% |   1 → 5 | `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  +26.7% |    +4 |  0.1% → 0.2% | 15 → 19 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| +200.0% |    +4 | <0.1% → 0.1% |   2 → 6 | `forward_copy_longs` ← `arrayof_jint_disjoint_arraycopy` ← `copyOf(Object[], int)` (`java.util.Arrays`) ← `toArray()` (`java.util.ArrayList`) ← `addAll(Collection)` ← `lambda$merge$6(List, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `apply(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a7000`) ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  +66.7% |    +4 | <0.1% → 0.1% |  6 → 10 | `findNearestCentroid()` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `elementData(int)` (`java.util.ArrayList`) ← `get(int)` ← `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `forward_copy_longs` ← `arrayof_jint_disjoint_arraycopy` ← `merge(Object, Object, BiFunction)` (`java.util.HashMap`) ← `lambda$merge$7(Map, Object, List)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `accept(Object, Object)` (`org.renaissance.jdk.concurrent.JavaKMeans$$Lambda.0x00000070011a3b90`) ← `forEach(BiConsumer)` (`java.util.HashMap`) ← `merge(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `combineResults(Map, Map)` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `combineResults(Object, Object)` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|     new |    +4 |  0.0% → 0.1% |   0 → 4 | `add(Object, Object[], int)` (`java.util.ArrayList`) ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`) |
|  +18.8% |    +3 |  0.1% → 0.2% | 16 → 19 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  +42.9% |    +3 |         0.1% |  7 → 10 | `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  +50.0% |    +3 | <0.1% → 0.1% |   6 → 9 | `accumulate(Double[], double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `vectorSum()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| +150.0% |    +3 | <0.1% → 0.1% |   2 → 5 | `elementData(int)` (`java.util.ArrayList`) ← `get(int)` ← `vectorSum()` (`org.renaissance.jdk.concurrent.JavaKMeans$VectorSumTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `invoke()` ← `average(List)` (`org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask`) ← `computeClusterAverages()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                               |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `grow(int)` (`java.util.ArrayList`) ← `grow()` ← `add(Object, Object[], int)` ← `add(Object)` ← `collectClusters(int[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `distance(Double[], Double[])` (`org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`) ← `findNearestCentroid()` ← `computeDirectly()` ← `computeDirectly()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| +300.0% |    +3 | <0.1% → 0.1% |   1 → 4 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `helpJoin(ForkJoinTask, ForkJoinPool$WorkQueue, boolean)` (`java.util.concurrent.ForkJoinPool`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `tryRemoveAndExec(ForkJoinTask, boolean)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `join()` ← `compute()` (`org.renaissance.jdk.concurrent.JavaKMeans$RangedTask`) ← `exec()` (`java.util.concurrent.RecursiveTask`) ← `doExec()` (`java.util.concurrent.ForkJoinTask`) ← `topLevelExec(ForkJoinTask, ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool$WorkQueue`) ← `scan(ForkJoinPool$WorkQueue, int, int)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

|  Change |  Delta |             % |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------: | -----: | ------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  -41.2% | -1,302 | 23.5% → 23.7% | 3,161 → 1,859 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `WorkerThread::run` (`libjvm.dylib`) ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -57.3% | -1,110 | 14.4% → 10.5% |   1,936 → 826 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed |   -304 |   2.3% → 0.0% |       304 → 0 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `awaitDone(int, long)` (`java.util.concurrent.ForkJoinTask`) ← `get()` ← `run(int, List, int)` (`org.renaissance.jdk.concurrent.JavaKMeans`) ← `$anonfun$1(int)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `$anonfun$adapted$1(Object)` ← `apply(Object)` (`org.renaissance.jdk.concurrent.FjKmeans$$Lambda`) ← `map(Function1)` (`scala.collection.immutable.Range`) ← `run(BenchmarkContext)` (`org.renaissance.jdk.concurrent.FjKmeans`) ← `executeOperation(int)` (`org.renaissance.harness.ExecutionDriver`) ← `executeBenchmark()` ← `runBenchmarks$$anonfun$1(BenchmarkSuite, Plugin$ExecutionPolicy, EventDispatcher, Buffer, long, BenchmarkDescriptor)` (`org.renaissance.harness.RenaissanceSuite$`) ← `applyVoid(Object)` (`org.renaissance.harness.RenaissanceSuite$$$Lambda.0x000000f00111f208`) ← `apply(Object)` (`scala.runtime.function.JProcedure1`) ← `apply(Object)` ← `foreach(Function1)` (`scala.collection.immutable.List`) ← `runBenchmarks(BenchmarkSuite, Seq, Plugin$ExecutionPolicy, EventDispatcher)` (`org.renaissance.harness.RenaissanceSuite$`) ← `main(String[])` ← `main(String[])` (`org.renaissance.harness.RenaissanceSuite`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f001004800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000f001009800`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `loadAndInvokeHarnessClass(ModuleLoader, String, String[])` (`org.renaissance.core.Launcher`) ← `launchHarnessClass(String, String[])` ← `main(String[])` |
|  -36.7% |   -242 |   4.9% → 5.3% |     659 → 417 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `CompileQueue::get` ← `CompileBroker::compiler_thread_loop` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -72.7% |   -184 |   1.9% → 0.9% |      253 → 69 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkUntil(long)` (`java.util.concurrent.locks.LockSupport`) ← `awaitWork(ForkJoinPool$WorkQueue)` (`java.util.concurrent.ForkJoinPool`) ← `runWorker(ForkJoinPool$WorkQueue)` ← `run()` (`java.util.concurrent.ForkJoinWorkerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -40.2% |   -133 |          2.5% |     331 → 198 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `ServiceThread::service_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -39.9% |   -132 |          2.5% |     331 → 199 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `MonitorDeflationThread::monitor_deflation_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  -39.9% |   -132 |          2.5% |     331 → 199 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait` ← `JVM_WaitForReferencePendingList` ← `waitForReferencePendingList()` (`java.lang.ref.Reference`) ← `processPendingReferences()` ← `run()` (`java.lang.ref.Reference$ReferenceHandler`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -39.9% |   -132 |          2.5% |     331 → 199 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ServiceThread::wait_for_task` ← `G1ServiceThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -39.9% |   -132 |          2.5% |     331 → 199 | `mach_msg2_trap` (`libsystem_kernel.dylib`) ← `mach_msg_overwrite` ← `mach_msg` ← `__CFRunLoopServiceMachPort` (`CoreFoundation`) ← `__CFRunLoopRun` ← `CFRunLoopRunSpecific` ← `CreateExecutionEnvironment` (`libjli.dylib`) ← `JLI_Launch` ← `main` (`java`) ← `unknown`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -39.9% |   -132 |          2.5% |     331 → 199 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `WatcherThread::sleep` ← `WatcherThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -39.9% |   -132 |          2.5% |     331 → 199 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformEvent::park` (`libjvm.dylib`) ← `ObjectMonitor::wait` ← `ObjectSynchronizer::wait` ← `JVM_MonitorWait` ← `wait0(long)` (`java.lang.Object`) ← `wait(long)` ← `wait()` ← `await()` (`java.lang.ref.NativeReferenceQueue`) ← `remove0()` (`java.lang.ref.ReferenceQueue`) ← `remove()` (`java.lang.ref.NativeReferenceQueue`) ← `run()` (`java.lang.ref.Finalizer$FinalizerThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  -39.9% |   -132 |          2.5% |     331 → 199 | `semaphore_wait_trap` (`libsystem_kernel.dylib`) ← `os::signal_wait` (`libjvm.dylib`) ← `signal_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -39.9% |   -132 |          2.5% |     331 → 199 | `__ulock_wait` (`libsystem_kernel.dylib`) ← `CallJavaMainInNewThread` (`libjli.dylib`) ← `ContinueInNewThread` ← `JLI_Launch` ← `main` (`java`) ← `apple_main` (`libjli.dylib`) ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -40.0% |   -132 |          2.5% |     330 → 198 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `NotificationThread::notification_thread_entry` ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -39.9% |   -132 |          2.5% |     331 → 199 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1ConcurrentMarkThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -39.9% |   -132 |          2.5% |     331 → 199 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Profiler::timerLoop` (`libasyncProfiler.dylib`) ← `JvmtiAgentThread::start_function_wrapper` (`libjvm.dylib`) ← `JavaThread::thread_main_inner` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -40.0% |   -132 |          2.5% |     330 → 198 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `Parker::park` (`libjvm.dylib`) ← `Unsafe_Park` ← `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -39.7% |   -131 |          2.5% |     330 → 199 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `G1PrimaryConcurrentRefineThread::wait_for_completed_buffers` ← `G1ConcurrentRefineThread::run_service` ← `ConcurrentGCThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -39.9% |   -127 |          2.4% |     318 → 191 | `__psynch_cvwait` (`libsystem_kernel.dylib`) ← `PlatformMonitor::wait` (`libjvm.dylib`) ← `Monitor::wait_without_safepoint_check` ← `VMThread::wait_for_operation` ← `VMThread::run` ← `Thread::call_run` ← `thread_native_entry` ← `_pthread_start` (`libsystem_pthread.dylib`) ← `thread_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
